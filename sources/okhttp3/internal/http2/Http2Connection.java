package okhttp3.internal.http2;

import android.support.v4.internal.view.SupportMenu;
import java.io.Closeable;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import okhttp3.Protocol;
import okhttp3.internal.NamedRunnable;
import okhttp3.internal.Util;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import okio.Okio;

public final class Http2Connection implements Closeable {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    static final int OKHTTP_CLIENT_WINDOW_SIZE = 16777216;
    private static final ExecutorService listenerExecutor = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60, TimeUnit.SECONDS, new SynchronousQueue(), Util.threadFactory("OkHttp Http2Connection", true));
    private boolean awaitingPong;
    long bytesLeftInWriteWindow;
    final boolean client;
    final Set<Integer> currentPushRequests = new LinkedHashSet();
    final String hostname;
    int lastGoodStreamId;
    final Listener listener;
    int nextStreamId;
    Settings okHttpSettings = new Settings();
    final Settings peerSettings = new Settings();
    private final ExecutorService pushExecutor;
    final PushObserver pushObserver;
    final ReaderRunnable readerRunnable;
    boolean receivedInitialPeerSettings = false;
    boolean shutdown;
    final Socket socket;
    final Map<Integer, Http2Stream> streams = new LinkedHashMap();
    long unacknowledgedBytesRead = 0;
    final Http2Writer writer;
    private final ScheduledExecutorService writerExecutor;

    public static class Builder {
        boolean client;
        String hostname;
        Listener listener = Listener.REFUSE_INCOMING_STREAMS;
        int pingIntervalMillis;
        PushObserver pushObserver = PushObserver.CANCEL;
        BufferedSink sink;
        Socket socket;
        BufferedSource source;

        public Builder(boolean client) {
            this.client = client;
        }

        public Builder socket(Socket socket) throws IOException {
            return socket(socket, ((InetSocketAddress) socket.getRemoteSocketAddress()).getHostName(), Okio.buffer(Okio.source(socket)), Okio.buffer(Okio.sink(socket)));
        }

        public Builder socket(Socket socket, String hostname, BufferedSource source, BufferedSink sink) {
            this.socket = socket;
            this.hostname = hostname;
            this.source = source;
            this.sink = sink;
            return this;
        }

        public Builder listener(Listener listener) {
            this.listener = listener;
            return this;
        }

        public Builder pushObserver(PushObserver pushObserver) {
            this.pushObserver = pushObserver;
            return this;
        }

        public Builder pingIntervalMillis(int pingIntervalMillis) {
            this.pingIntervalMillis = pingIntervalMillis;
            return this;
        }

        public Http2Connection build() {
            return new Http2Connection(this);
        }
    }

    public static abstract class Listener {
        public static final Listener REFUSE_INCOMING_STREAMS = new C03581();

        /* renamed from: okhttp3.internal.http2.Http2Connection$Listener$1 */
        class C03581 extends Listener {
            C03581() {
            }

            public void onStream(Http2Stream stream) throws IOException {
                stream.close(ErrorCode.REFUSED_STREAM);
            }
        }

        public abstract void onStream(Http2Stream http2Stream) throws IOException;

        public void onSettings(Http2Connection connection) {
        }
    }

    final class PingRunnable extends NamedRunnable {
        final int payload1;
        final int payload2;
        final boolean reply;

        PingRunnable(boolean reply, int payload1, int payload2) {
            super("OkHttp %s ping %08x%08x", this$0.hostname, Integer.valueOf(payload1), Integer.valueOf(payload2));
            this.reply = reply;
            this.payload1 = payload1;
            this.payload2 = payload2;
        }

        public void execute() {
            Http2Connection.this.writePing(this.reply, this.payload1, this.payload2);
        }
    }

    class ReaderRunnable extends NamedRunnable implements Handler {
        final Http2Reader reader;

        ReaderRunnable(Http2Reader reader) {
            super("OkHttp %s", this$0.hostname);
            this.reader = reader;
        }

        protected void execute() {
            ErrorCode connectionErrorCode = ErrorCode.INTERNAL_ERROR;
            ErrorCode streamErrorCode = ErrorCode.INTERNAL_ERROR;
            try {
                this.reader.readConnectionPreface(this);
                while (this.reader.nextFrame(false, this)) {
                }
                connectionErrorCode = ErrorCode.NO_ERROR;
                streamErrorCode = ErrorCode.CANCEL;
            } catch (IOException e) {
                connectionErrorCode = ErrorCode.PROTOCOL_ERROR;
                streamErrorCode = ErrorCode.PROTOCOL_ERROR;
            } finally {
                try {
                    Http2Connection.this.close(connectionErrorCode, streamErrorCode);
                } catch (IOException e2) {
                }
                Util.closeQuietly(this.reader);
            }
            Util.closeQuietly(this.reader);
        }

        public void data(boolean inFinished, int streamId, BufferedSource source, int length) throws IOException {
            if (Http2Connection.this.pushedStream(streamId)) {
                Http2Connection.this.pushDataLater(streamId, source, length, inFinished);
                return;
            }
            Http2Stream dataStream = Http2Connection.this.getStream(streamId);
            if (dataStream == null) {
                Http2Connection.this.writeSynResetLater(streamId, ErrorCode.PROTOCOL_ERROR);
                Http2Connection.this.updateConnectionFlowControl((long) length);
                source.skip((long) length);
                return;
            }
            dataStream.receiveData(source, length);
            if (inFinished) {
                dataStream.receiveFin();
            }
        }

        /* JADX WARNING: inconsistent code. */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        public void headers(boolean r12, int r13, int r14, java.util.List<okhttp3.internal.http2.Header> r15) {
            /*
            r11 = this;
            r0 = okhttp3.internal.http2.Http2Connection.this;
            r0 = r0.pushedStream(r13);
            if (r0 == 0) goto L_0x000e;
        L_0x0008:
            r0 = okhttp3.internal.http2.Http2Connection.this;
            r0.pushHeadersLater(r13, r15, r12);
            return;
        L_0x000e:
            r0 = okhttp3.internal.http2.Http2Connection.this;
            monitor-enter(r0);
            r1 = okhttp3.internal.http2.Http2Connection.this;	 Catch:{ all -> 0x007e }
            r1 = r1.getStream(r13);	 Catch:{ all -> 0x007e }
            if (r1 != 0) goto L_0x0073;
        L_0x0019:
            r2 = okhttp3.internal.http2.Http2Connection.this;	 Catch:{ all -> 0x007e }
            r2 = r2.shutdown;	 Catch:{ all -> 0x007e }
            if (r2 == 0) goto L_0x0021;
        L_0x001f:
            monitor-exit(r0);	 Catch:{ all -> 0x007e }
            return;
        L_0x0021:
            r2 = okhttp3.internal.http2.Http2Connection.this;	 Catch:{ all -> 0x007e }
            r2 = r2.lastGoodStreamId;	 Catch:{ all -> 0x007e }
            if (r13 > r2) goto L_0x0029;
        L_0x0027:
            monitor-exit(r0);	 Catch:{ all -> 0x007e }
            return;
        L_0x0029:
            r2 = r13 % 2;
            r3 = okhttp3.internal.http2.Http2Connection.this;	 Catch:{ all -> 0x007e }
            r3 = r3.nextStreamId;	 Catch:{ all -> 0x007e }
            r4 = 2;
            r3 = r3 % r4;
            if (r2 != r3) goto L_0x0035;
        L_0x0033:
            monitor-exit(r0);	 Catch:{ all -> 0x007e }
            return;
        L_0x0035:
            r10 = okhttp3.internal.Util.toHeaders(r15);	 Catch:{ all -> 0x007e }
            r2 = new okhttp3.internal.http2.Http2Stream;	 Catch:{ all -> 0x007e }
            r7 = okhttp3.internal.http2.Http2Connection.this;	 Catch:{ all -> 0x007e }
            r8 = 0;
            r5 = r2;
            r6 = r13;
            r9 = r12;
            r5.<init>(r6, r7, r8, r9, r10);	 Catch:{ all -> 0x007e }
            r3 = okhttp3.internal.http2.Http2Connection.this;	 Catch:{ all -> 0x007e }
            r3.lastGoodStreamId = r13;	 Catch:{ all -> 0x007e }
            r3 = okhttp3.internal.http2.Http2Connection.this;	 Catch:{ all -> 0x007e }
            r3 = r3.streams;	 Catch:{ all -> 0x007e }
            r5 = java.lang.Integer.valueOf(r13);	 Catch:{ all -> 0x007e }
            r3.put(r5, r2);	 Catch:{ all -> 0x007e }
            r3 = okhttp3.internal.http2.Http2Connection.listenerExecutor;	 Catch:{ all -> 0x007e }
            r5 = new okhttp3.internal.http2.Http2Connection$ReaderRunnable$1;	 Catch:{ all -> 0x007e }
            r6 = "OkHttp %s stream %d";
            r4 = new java.lang.Object[r4];	 Catch:{ all -> 0x007e }
            r7 = 0;
            r8 = okhttp3.internal.http2.Http2Connection.this;	 Catch:{ all -> 0x007e }
            r8 = r8.hostname;	 Catch:{ all -> 0x007e }
            r4[r7] = r8;	 Catch:{ all -> 0x007e }
            r7 = 1;
            r8 = java.lang.Integer.valueOf(r13);	 Catch:{ all -> 0x007e }
            r4[r7] = r8;	 Catch:{ all -> 0x007e }
            r5.<init>(r6, r4, r2);	 Catch:{ all -> 0x007e }
            r3.execute(r5);	 Catch:{ all -> 0x007e }
            monitor-exit(r0);	 Catch:{ all -> 0x007e }
            return;
        L_0x0073:
            monitor-exit(r0);	 Catch:{ all -> 0x007e }
            r1.receiveHeaders(r15);
            if (r12 == 0) goto L_0x007d;
        L_0x0079:
            r1.receiveFin();
        L_0x007d:
            return;
        L_0x007e:
            r1 = move-exception;
            monitor-exit(r0);	 Catch:{ all -> 0x007e }
            throw r1;
            */
            throw new UnsupportedOperationException("Method not decompiled: okhttp3.internal.http2.Http2Connection.ReaderRunnable.headers(boolean, int, int, java.util.List):void");
        }

        public void rstStream(int streamId, ErrorCode errorCode) {
            if (Http2Connection.this.pushedStream(streamId)) {
                Http2Connection.this.pushResetLater(streamId, errorCode);
                return;
            }
            Http2Stream rstStream = Http2Connection.this.removeStream(streamId);
            if (rstStream != null) {
                rstStream.receiveRstStream(errorCode);
            }
        }

        public void settings(boolean clearPrevious, Settings newSettings) {
            long delta = 0;
            Http2Stream[] streamsToNotify = null;
            synchronized (Http2Connection.this) {
                int priorWriteWindowSize = Http2Connection.this.peerSettings.getInitialWindowSize();
                if (clearPrevious) {
                    Http2Connection.this.peerSettings.clear();
                }
                Http2Connection.this.peerSettings.merge(newSettings);
                applyAndAckSettings(newSettings);
                int peerInitialWindowSize = Http2Connection.this.peerSettings.getInitialWindowSize();
                if (peerInitialWindowSize != -1 && peerInitialWindowSize != priorWriteWindowSize) {
                    delta = (long) (peerInitialWindowSize - priorWriteWindowSize);
                    if (!Http2Connection.this.receivedInitialPeerSettings) {
                        Http2Connection.this.receivedInitialPeerSettings = true;
                    }
                    if (!Http2Connection.this.streams.isEmpty()) {
                        streamsToNotify = (Http2Stream[]) Http2Connection.this.streams.values().toArray(new Http2Stream[Http2Connection.this.streams.size()]);
                    }
                }
                ExecutorService access$100 = Http2Connection.listenerExecutor;
                Object[] objArr = new Object[1];
                int i = 0;
                objArr[0] = Http2Connection.this.hostname;
                access$100.execute(new NamedRunnable("OkHttp %s settings", objArr) {
                    public void execute() {
                        Http2Connection.this.listener.onSettings(Http2Connection.this);
                    }
                });
            }
            if (streamsToNotify != null && delta != 0) {
                int length = streamsToNotify.length;
                while (i < length) {
                    Http2Stream stream = streamsToNotify[i];
                    synchronized (stream) {
                        stream.addBytesToWriteWindow(delta);
                    }
                    i++;
                }
            }
        }

        private void applyAndAckSettings(final Settings peerSettings) {
            try {
                Http2Connection.this.writerExecutor.execute(new NamedRunnable("OkHttp %s ACK Settings", new Object[]{Http2Connection.this.hostname}) {
                    public void execute() {
                        try {
                            Http2Connection.this.writer.applyAndAckSettings(peerSettings);
                        } catch (IOException e) {
                            Http2Connection.this.failConnection();
                        }
                    }
                });
            } catch (RejectedExecutionException e) {
            }
        }

        public void ackSettings() {
        }

        public void ping(boolean reply, int payload1, int payload2) {
            if (reply) {
                synchronized (Http2Connection.this) {
                    Http2Connection.this.awaitingPong = false;
                    Http2Connection.this.notifyAll();
                }
                return;
            }
            try {
                Http2Connection.this.writerExecutor.execute(new PingRunnable(true, payload1, payload2));
            } catch (RejectedExecutionException e) {
            }
        }

        public void goAway(int lastGoodStreamId, ErrorCode errorCode, ByteString debugData) {
            debugData.size();
            synchronized (Http2Connection.this) {
                Http2Stream[] streamsCopy = (Http2Stream[]) Http2Connection.this.streams.values().toArray(new Http2Stream[Http2Connection.this.streams.size()]);
                Http2Connection.this.shutdown = true;
            }
            for (Http2Stream http2Stream : streamsCopy) {
                if (http2Stream.getId() > lastGoodStreamId && http2Stream.isLocallyInitiated()) {
                    http2Stream.receiveRstStream(ErrorCode.REFUSED_STREAM);
                    Http2Connection.this.removeStream(http2Stream.getId());
                }
            }
        }

        public void windowUpdate(int streamId, long windowSizeIncrement) {
            if (streamId == 0) {
                synchronized (Http2Connection.this) {
                    Http2Connection http2Connection = Http2Connection.this;
                    http2Connection.bytesLeftInWriteWindow += windowSizeIncrement;
                    Http2Connection.this.notifyAll();
                }
                return;
            }
            Http2Stream stream = Http2Connection.this.getStream(streamId);
            if (stream != null) {
                synchronized (stream) {
                    stream.addBytesToWriteWindow(windowSizeIncrement);
                }
            }
        }

        public void priority(int streamId, int streamDependency, int weight, boolean exclusive) {
        }

        public void pushPromise(int streamId, int promisedStreamId, List<Header> requestHeaders) {
            Http2Connection.this.pushRequestLater(promisedStreamId, requestHeaders);
        }

        public void alternateService(int streamId, String origin, ByteString protocol, String host, int port, long maxAge) {
        }
    }

    Http2Connection(Builder builder) {
        Builder builder2 = builder;
        this.pushObserver = builder2.pushObserver;
        this.client = builder2.client;
        this.listener = builder2.listener;
        r0.nextStreamId = builder2.client ? 1 : 2;
        if (builder2.client) {
            r0.nextStreamId += 2;
        }
        if (builder2.client) {
            r0.okHttpSettings.set(7, 16777216);
        }
        r0.hostname = builder2.hostname;
        r0.writerExecutor = new ScheduledThreadPoolExecutor(1, Util.threadFactory(Util.format("OkHttp %s Writer", r0.hostname), false));
        if (builder2.pingIntervalMillis != 0) {
            r0.writerExecutor.scheduleAtFixedRate(new PingRunnable(false, 0, 0), (long) builder2.pingIntervalMillis, (long) builder2.pingIntervalMillis, TimeUnit.MILLISECONDS);
        }
        r0.pushExecutor = new ThreadPoolExecutor(0, 1, 60, TimeUnit.SECONDS, new LinkedBlockingQueue(), Util.threadFactory(Util.format("OkHttp %s Push Observer", r0.hostname), true));
        r0.peerSettings.set(7, SupportMenu.USER_MASK);
        r0.peerSettings.set(5, 16384);
        r0.bytesLeftInWriteWindow = (long) r0.peerSettings.getInitialWindowSize();
        r0.socket = builder2.socket;
        r0.writer = new Http2Writer(builder2.sink, r0.client);
        r0.readerRunnable = new ReaderRunnable(new Http2Reader(builder2.source, r0.client));
    }

    public Protocol getProtocol() {
        return Protocol.HTTP_2;
    }

    public synchronized int openStreamCount() {
        return this.streams.size();
    }

    synchronized Http2Stream getStream(int id) {
        return (Http2Stream) this.streams.get(Integer.valueOf(id));
    }

    synchronized Http2Stream removeStream(int streamId) {
        Http2Stream stream;
        stream = (Http2Stream) this.streams.remove(Integer.valueOf(streamId));
        notifyAll();
        return stream;
    }

    public synchronized int maxConcurrentStreams() {
        return this.peerSettings.getMaxConcurrentStreams(Integer.MAX_VALUE);
    }

    synchronized void updateConnectionFlowControl(long read) {
        this.unacknowledgedBytesRead += read;
        if (this.unacknowledgedBytesRead >= ((long) (this.okHttpSettings.getInitialWindowSize() / 2))) {
            writeWindowUpdateLater(0, this.unacknowledgedBytesRead);
            this.unacknowledgedBytesRead = 0;
        }
    }

    public Http2Stream pushStream(int associatedStreamId, List<Header> requestHeaders, boolean out) throws IOException {
        if (!this.client) {
            return newStream(associatedStreamId, requestHeaders, out);
        }
        throw new IllegalStateException("Client cannot push requests.");
    }

    public Http2Stream newStream(List<Header> requestHeaders, boolean out) throws IOException {
        return newStream(0, requestHeaders, out);
    }

    private Http2Stream newStream(int associatedStreamId, List<Header> requestHeaders, boolean out) throws IOException {
        Http2Stream stream;
        boolean flushHeaders;
        boolean outFinished = out ^ 1;
        synchronized (this.writer) {
            synchronized (this) {
                if (this.nextStreamId > 1073741823) {
                    shutdown(ErrorCode.REFUSED_STREAM);
                }
                if (this.shutdown) {
                    throw new ConnectionShutdownException();
                }
                int streamId = this.nextStreamId;
                this.nextStreamId += 2;
                stream = new Http2Stream(streamId, this, outFinished, false, null);
                if (out && this.bytesLeftInWriteWindow != 0) {
                    if (stream.bytesLeftInWriteWindow != 0) {
                        flushHeaders = false;
                        if (stream.isOpen()) {
                            this.streams.put(Integer.valueOf(streamId), stream);
                        }
                    }
                }
                flushHeaders = true;
                if (stream.isOpen()) {
                    this.streams.put(Integer.valueOf(streamId), stream);
                }
            }
            if (associatedStreamId == 0) {
                this.writer.synStream(outFinished, streamId, associatedStreamId, requestHeaders);
            } else if (this.client) {
                throw new IllegalArgumentException("client streams shouldn't have associated stream IDs");
            } else {
                this.writer.pushPromise(associatedStreamId, streamId, requestHeaders);
            }
        }
        if (flushHeaders) {
            this.writer.flush();
        }
        return stream;
    }

    void writeSynReply(int streamId, boolean outFinished, List<Header> alternating) throws IOException {
        this.writer.synReply(outFinished, streamId, alternating);
    }

    public void writeData(int streamId, boolean outFinished, Buffer buffer, long byteCount) throws IOException {
        if (byteCount == 0) {
            this.writer.data(outFinished, streamId, buffer, 0);
            return;
        }
        while (byteCount > 0) {
            int toWrite;
            synchronized (this) {
                while (this.bytesLeftInWriteWindow <= 0) {
                    try {
                        if (this.streams.containsKey(Integer.valueOf(streamId))) {
                            wait();
                        } else {
                            throw new IOException("stream closed");
                        }
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        throw new InterruptedIOException();
                    }
                }
                toWrite = Math.min((int) Math.min(byteCount, this.bytesLeftInWriteWindow), this.writer.maxDataLength());
                this.bytesLeftInWriteWindow -= (long) toWrite;
            }
            byteCount -= (long) toWrite;
            Http2Writer http2Writer = this.writer;
            boolean z = outFinished && byteCount == 0;
            http2Writer.data(z, streamId, buffer, toWrite);
        }
    }

    void writeSynResetLater(int streamId, ErrorCode errorCode) {
        try {
            final int i = streamId;
            final ErrorCode errorCode2 = errorCode;
            this.writerExecutor.execute(new NamedRunnable("OkHttp %s stream %d", new Object[]{this.hostname, Integer.valueOf(streamId)}) {
                public void execute() {
                    try {
                        Http2Connection.this.writeSynReset(i, errorCode2);
                    } catch (IOException e) {
                        Http2Connection.this.failConnection();
                    }
                }
            });
        } catch (RejectedExecutionException e) {
        }
    }

    void writeSynReset(int streamId, ErrorCode statusCode) throws IOException {
        this.writer.rstStream(streamId, statusCode);
    }

    void writeWindowUpdateLater(int streamId, long unacknowledgedBytesRead) {
        try {
            final int i = streamId;
            final long j = unacknowledgedBytesRead;
            this.writerExecutor.execute(new NamedRunnable("OkHttp Window Update %s stream %d", new Object[]{this.hostname, Integer.valueOf(streamId)}) {
                public void execute() {
                    try {
                        Http2Connection.this.writer.windowUpdate(i, j);
                    } catch (IOException e) {
                        Http2Connection.this.failConnection();
                    }
                }
            });
        } catch (RejectedExecutionException e) {
        }
    }

    void writePing(boolean reply, int payload1, int payload2) {
        if (!reply) {
            boolean failedDueToMissingPong;
            synchronized (this) {
                failedDueToMissingPong = this.awaitingPong;
                this.awaitingPong = true;
            }
            if (failedDueToMissingPong) {
                failConnection();
                return;
            }
        }
        try {
            this.writer.ping(reply, payload1, payload2);
        } catch (IOException e) {
            failConnection();
        }
    }

    void writePingAndAwaitPong() throws InterruptedException {
        writePing(false, 1330343787, -257978967);
        awaitPong();
    }

    synchronized void awaitPong() throws InterruptedException {
        while (this.awaitingPong) {
            wait();
        }
    }

    public void flush() throws IOException {
        this.writer.flush();
    }

    public void shutdown(ErrorCode statusCode) throws IOException {
        synchronized (this.writer) {
            synchronized (this) {
                if (this.shutdown) {
                    return;
                }
                this.shutdown = true;
                int lastGoodStreamId = this.lastGoodStreamId;
                this.writer.goAway(lastGoodStreamId, statusCode, Util.EMPTY_BYTE_ARRAY);
            }
        }
    }

    public void close() throws IOException {
        close(ErrorCode.NO_ERROR, ErrorCode.CANCEL);
    }

    void close(ErrorCode connectionCode, ErrorCode streamCode) throws IOException {
        IOException thrown = null;
        try {
            shutdown(connectionCode);
        } catch (IOException e) {
            thrown = e;
        }
        Http2Stream[] streamsToClose = null;
        synchronized (this) {
            if (!this.streams.isEmpty()) {
                streamsToClose = (Http2Stream[]) this.streams.values().toArray(new Http2Stream[this.streams.size()]);
                this.streams.clear();
            }
        }
        if (streamsToClose != null) {
            for (Http2Stream stream : streamsToClose) {
                try {
                    stream.close(streamCode);
                } catch (IOException e2) {
                    if (thrown != null) {
                        thrown = e2;
                    }
                }
            }
        }
        try {
            this.writer.close();
        } catch (IOException e3) {
            if (thrown == null) {
                thrown = e3;
            }
        }
        try {
            this.socket.close();
        } catch (IOException e32) {
            thrown = e32;
        }
        this.writerExecutor.shutdown();
        this.pushExecutor.shutdown();
        if (thrown != null) {
            throw thrown;
        }
    }

    private void failConnection() {
        try {
            close(ErrorCode.PROTOCOL_ERROR, ErrorCode.PROTOCOL_ERROR);
        } catch (IOException e) {
        }
    }

    public void start() throws IOException {
        start(true);
    }

    void start(boolean sendConnectionPreface) throws IOException {
        if (sendConnectionPreface) {
            this.writer.connectionPreface();
            this.writer.settings(this.okHttpSettings);
            int windowSize = this.okHttpSettings.getInitialWindowSize();
            if (windowSize != SupportMenu.USER_MASK) {
                this.writer.windowUpdate(0, (long) (windowSize - SupportMenu.USER_MASK));
            }
        }
        new Thread(this.readerRunnable).start();
    }

    public void setSettings(Settings settings) throws IOException {
        synchronized (this.writer) {
            synchronized (this) {
                if (this.shutdown) {
                    throw new ConnectionShutdownException();
                }
                this.okHttpSettings.merge(settings);
            }
            this.writer.settings(settings);
        }
    }

    public synchronized boolean isShutdown() {
        return this.shutdown;
    }

    boolean pushedStream(int streamId) {
        return streamId != 0 && (streamId & 1) == 0;
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    void pushRequestLater(int r9, java.util.List<okhttp3.internal.http2.Header> r10) {
        /*
        r8 = this;
        monitor-enter(r8);
        r0 = r8.currentPushRequests;	 Catch:{ all -> 0x003e }
        r1 = java.lang.Integer.valueOf(r9);	 Catch:{ all -> 0x003e }
        r0 = r0.contains(r1);	 Catch:{ all -> 0x003e }
        if (r0 == 0) goto L_0x0014;
    L_0x000d:
        r0 = okhttp3.internal.http2.ErrorCode.PROTOCOL_ERROR;	 Catch:{ all -> 0x003e }
        r8.writeSynResetLater(r9, r0);	 Catch:{ all -> 0x003e }
        monitor-exit(r8);	 Catch:{ all -> 0x003e }
        return;
    L_0x0014:
        r0 = r8.currentPushRequests;	 Catch:{ all -> 0x003e }
        r1 = java.lang.Integer.valueOf(r9);	 Catch:{ all -> 0x003e }
        r0.add(r1);	 Catch:{ all -> 0x003e }
        monitor-exit(r8);	 Catch:{ all -> 0x003e }
        r0 = new okhttp3.internal.http2.Http2Connection$3;	 Catch:{ RejectedExecutionException -> 0x003c }
        r4 = "OkHttp %s Push Request[%s]";
        r1 = 2;
        r5 = new java.lang.Object[r1];	 Catch:{ RejectedExecutionException -> 0x003c }
        r1 = 0;
        r2 = r8.hostname;	 Catch:{ RejectedExecutionException -> 0x003c }
        r5[r1] = r2;	 Catch:{ RejectedExecutionException -> 0x003c }
        r1 = 1;
        r2 = java.lang.Integer.valueOf(r9);	 Catch:{ RejectedExecutionException -> 0x003c }
        r5[r1] = r2;	 Catch:{ RejectedExecutionException -> 0x003c }
        r2 = r0;
        r3 = r8;
        r6 = r9;
        r7 = r10;
        r2.<init>(r4, r5, r6, r7);	 Catch:{ RejectedExecutionException -> 0x003c }
        r8.pushExecutorExecute(r0);	 Catch:{ RejectedExecutionException -> 0x003c }
        goto L_0x003d;
    L_0x003c:
        r0 = move-exception;
    L_0x003d:
        return;
    L_0x003e:
        r0 = move-exception;
        monitor-exit(r8);	 Catch:{ all -> 0x003e }
        throw r0;
        */
        throw new UnsupportedOperationException("Method not decompiled: okhttp3.internal.http2.Http2Connection.pushRequestLater(int, java.util.List):void");
    }

    void pushHeadersLater(int streamId, List<Header> requestHeaders, boolean inFinished) {
        try {
            final int i = streamId;
            final List<Header> list = requestHeaders;
            final boolean z = inFinished;
            pushExecutorExecute(new NamedRunnable("OkHttp %s Push Headers[%s]", new Object[]{this.hostname, Integer.valueOf(streamId)}) {
                public void execute() {
                    boolean cancel = Http2Connection.this.pushObserver.onHeaders(i, list, z);
                    if (cancel) {
                        try {
                            Http2Connection.this.writer.rstStream(i, ErrorCode.CANCEL);
                        } catch (IOException e) {
                            return;
                        }
                    }
                    if (!cancel) {
                        if (!z) {
                        }
                    }
                    synchronized (Http2Connection.this) {
                        Http2Connection.this.currentPushRequests.remove(Integer.valueOf(i));
                    }
                }
            });
        } catch (RejectedExecutionException e) {
        }
    }

    void pushDataLater(int streamId, BufferedSource source, int byteCount, boolean inFinished) throws IOException {
        Buffer buffer = new Buffer();
        source.require((long) byteCount);
        source.read(buffer, (long) byteCount);
        if (buffer.size() == ((long) byteCount)) {
            final int i = streamId;
            final Buffer buffer2 = buffer;
            final int i2 = byteCount;
            final boolean z = inFinished;
            pushExecutorExecute(new NamedRunnable("OkHttp %s Push Data[%s]", new Object[]{this.hostname, Integer.valueOf(streamId)}) {
                public void execute() {
                    try {
                        boolean cancel = Http2Connection.this.pushObserver.onData(i, buffer2, i2, z);
                        if (cancel) {
                            Http2Connection.this.writer.rstStream(i, ErrorCode.CANCEL);
                        }
                        if (!cancel) {
                            if (!z) {
                            }
                        }
                        synchronized (Http2Connection.this) {
                            Http2Connection.this.currentPushRequests.remove(Integer.valueOf(i));
                        }
                    } catch (IOException e) {
                    }
                }
            });
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(buffer.size());
        stringBuilder.append(" != ");
        stringBuilder.append(byteCount);
        throw new IOException(stringBuilder.toString());
    }

    void pushResetLater(int streamId, ErrorCode errorCode) {
        final int i = streamId;
        final ErrorCode errorCode2 = errorCode;
        pushExecutorExecute(new NamedRunnable("OkHttp %s Push Reset[%s]", new Object[]{this.hostname, Integer.valueOf(streamId)}) {
            public void execute() {
                Http2Connection.this.pushObserver.onReset(i, errorCode2);
                synchronized (Http2Connection.this) {
                    Http2Connection.this.currentPushRequests.remove(Integer.valueOf(i));
                }
            }
        });
    }

    private synchronized void pushExecutorExecute(NamedRunnable namedRunnable) {
        if (!isShutdown()) {
            this.pushExecutor.execute(namedRunnable);
        }
    }
}
