package okhttp3.internal.http2;

import java.io.EOFException;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.SocketTimeoutException;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import javax.annotation.Nullable;
import okhttp3.Headers;
import okhttp3.internal.Util;
import okio.AsyncTimeout;
import okio.Buffer;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
import okio.Timeout;

public final class Http2Stream {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    long bytesLeftInWriteWindow;
    final Http2Connection connection;
    ErrorCode errorCode = null;
    private boolean hasResponseHeaders;
    private Listener headersListener;
    private final Deque<Headers> headersQueue = new ArrayDeque();
    final int id;
    final StreamTimeout readTimeout = new StreamTimeout();
    final FramingSink sink;
    private final FramingSource source;
    long unacknowledgedBytesRead = 0;
    final StreamTimeout writeTimeout = new StreamTimeout();

    final class FramingSink implements Sink {
        static final /* synthetic */ boolean $assertionsDisabled = false;
        private static final long EMIT_BUFFER_SIZE = 16384;
        boolean closed;
        boolean finished;
        private final Buffer sendBuffer = new Buffer();

        static {
            Class cls = Http2Stream.class;
        }

        FramingSink() {
        }

        public void write(Buffer source, long byteCount) throws IOException {
            this.sendBuffer.write(source, byteCount);
            while (this.sendBuffer.size() >= 16384) {
                emitFrame(false);
            }
        }

        private void emitFrame(boolean outFinished) throws IOException {
            synchronized (Http2Stream.this) {
                Http2Stream.this.writeTimeout.enter();
                while (Http2Stream.this.bytesLeftInWriteWindow <= 0 && !this.finished && !this.closed && Http2Stream.this.errorCode == null) {
                    try {
                        Http2Stream.this.waitForIo();
                    } finally {
                        Http2Stream.this.writeTimeout.exitAndThrowIfTimedOut();
                    }
                }
                Http2Stream.this.checkOutNotClosed();
                long toWrite = Math.min(Http2Stream.this.bytesLeftInWriteWindow, this.sendBuffer.size());
                Http2Stream http2Stream = Http2Stream.this;
                http2Stream.bytesLeftInWriteWindow -= toWrite;
            }
            Http2Stream.this.writeTimeout.enter();
            try {
                Http2Connection http2Connection = Http2Stream.this.connection;
                int i = Http2Stream.this.id;
                boolean z = outFinished && toWrite == this.sendBuffer.size();
                http2Connection.writeData(i, z, this.sendBuffer, toWrite);
            } finally {
                Http2Stream.this.writeTimeout.exitAndThrowIfTimedOut();
            }
        }

        public void flush() throws IOException {
            synchronized (Http2Stream.this) {
                Http2Stream.this.checkOutNotClosed();
            }
            while (this.sendBuffer.size() > 0) {
                emitFrame(false);
                Http2Stream.this.connection.flush();
            }
        }

        public Timeout timeout() {
            return Http2Stream.this.writeTimeout;
        }

        /* JADX WARNING: inconsistent code. */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        public void close() throws java.io.IOException {
            /*
            r8 = this;
            r0 = okhttp3.internal.http2.Http2Stream.this;
            monitor-enter(r0);
            r1 = r8.closed;	 Catch:{ all -> 0x0056 }
            if (r1 == 0) goto L_0x000a;
        L_0x0008:
            monitor-exit(r0);	 Catch:{ all -> 0x0056 }
            return;
        L_0x000a:
            monitor-exit(r0);	 Catch:{ all -> 0x0056 }
            r0 = okhttp3.internal.http2.Http2Stream.this;
            r0 = r0.sink;
            r0 = r0.finished;
            r1 = 1;
            if (r0 != 0) goto L_0x003f;
        L_0x0014:
            r0 = r8.sendBuffer;
            r2 = r0.size();
            r4 = 0;
            r0 = (r2 > r4 ? 1 : (r2 == r4 ? 0 : -1));
            if (r0 <= 0) goto L_0x002f;
        L_0x0020:
            r0 = r8.sendBuffer;
            r2 = r0.size();
            r0 = (r2 > r4 ? 1 : (r2 == r4 ? 0 : -1));
            if (r0 <= 0) goto L_0x002e;
        L_0x002a:
            r8.emitFrame(r1);
            goto L_0x0020;
        L_0x002e:
            goto L_0x0040;
        L_0x002f:
            r0 = okhttp3.internal.http2.Http2Stream.this;
            r2 = r0.connection;
            r0 = okhttp3.internal.http2.Http2Stream.this;
            r3 = r0.id;
            r4 = 1;
            r5 = 0;
            r6 = 0;
            r2.writeData(r3, r4, r5, r6);
            goto L_0x0040;
        L_0x0040:
            r2 = okhttp3.internal.http2.Http2Stream.this;
            monitor-enter(r2);
            r8.closed = r1;	 Catch:{ all -> 0x0053 }
            monitor-exit(r2);	 Catch:{ all -> 0x0053 }
            r0 = okhttp3.internal.http2.Http2Stream.this;
            r0 = r0.connection;
            r0.flush();
            r0 = okhttp3.internal.http2.Http2Stream.this;
            r0.cancelStreamIfNecessary();
            return;
        L_0x0053:
            r0 = move-exception;
            monitor-exit(r2);	 Catch:{ all -> 0x0053 }
            throw r0;
        L_0x0056:
            r1 = move-exception;
            monitor-exit(r0);	 Catch:{ all -> 0x0056 }
            throw r1;
            */
            throw new UnsupportedOperationException("Method not decompiled: okhttp3.internal.http2.Http2Stream.FramingSink.close():void");
        }
    }

    private final class FramingSource implements Source {
        static final /* synthetic */ boolean $assertionsDisabled = false;
        boolean closed;
        boolean finished;
        private final long maxByteCount;
        private final Buffer readBuffer = new Buffer();
        private final Buffer receiveBuffer = new Buffer();

        static {
            Class cls = Http2Stream.class;
        }

        FramingSource(long maxByteCount) {
            this.maxByteCount = maxByteCount;
        }

        public long read(Buffer sink, long byteCount) throws IOException {
            if (byteCount >= 0) {
                long readBytesDelivered;
                ErrorCode errorCodeToDeliver;
                while (true) {
                    Headers headersToDeliver = null;
                    Listener headersListenerToNotify = null;
                    readBytesDelivered = -1;
                    errorCodeToDeliver = null;
                    synchronized (Http2Stream.this) {
                        Http2Stream.this.readTimeout.enter();
                        try {
                            if (Http2Stream.this.errorCode != null) {
                                errorCodeToDeliver = Http2Stream.this.errorCode;
                            }
                            if (this.closed) {
                                throw new IOException("stream closed");
                            }
                            if (!Http2Stream.this.headersQueue.isEmpty() && Http2Stream.this.headersListener != null) {
                                headersToDeliver = (Headers) Http2Stream.this.headersQueue.removeFirst();
                                headersListenerToNotify = Http2Stream.this.headersListener;
                            } else if (this.readBuffer.size() > 0) {
                                readBytesDelivered = this.readBuffer.read(sink, Math.min(byteCount, this.readBuffer.size()));
                                Http2Stream http2Stream = Http2Stream.this;
                                http2Stream.unacknowledgedBytesRead += readBytesDelivered;
                                if (errorCodeToDeliver == null) {
                                    if (Http2Stream.this.unacknowledgedBytesRead >= ((long) (Http2Stream.this.connection.okHttpSettings.getInitialWindowSize() / 2))) {
                                        Http2Stream.this.connection.writeWindowUpdateLater(Http2Stream.this.id, Http2Stream.this.unacknowledgedBytesRead);
                                        Http2Stream.this.unacknowledgedBytesRead = 0;
                                    }
                                }
                            } else if (!this.finished && errorCodeToDeliver == null) {
                                Http2Stream.this.waitForIo();
                                Http2Stream.this.readTimeout.exitAndThrowIfTimedOut();
                            }
                            Http2Stream.this.readTimeout.exitAndThrowIfTimedOut();
                            if (headersToDeliver != null && headersListenerToNotify != null) {
                                headersListenerToNotify.onHeaders(headersToDeliver);
                            }
                        } catch (Throwable th) {
                            Http2Stream.this.readTimeout.exitAndThrowIfTimedOut();
                        }
                    }
                }
                if (readBytesDelivered != -1) {
                    updateConnectionFlowControl(readBytesDelivered);
                    return readBytesDelivered;
                } else if (errorCodeToDeliver == null) {
                    return -1;
                } else {
                    throw new StreamResetException(errorCodeToDeliver);
                }
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("byteCount < 0: ");
            stringBuilder.append(byteCount);
            throw new IllegalArgumentException(stringBuilder.toString());
        }

        private void updateConnectionFlowControl(long read) {
            Http2Stream.this.connection.updateConnectionFlowControl(read);
        }

        void receive(BufferedSource in, long byteCount) throws IOException {
            while (byteCount > 0) {
                synchronized (Http2Stream.this) {
                    boolean finished = this.finished;
                    boolean z = true;
                    boolean flowControlError = this.readBuffer.size() + byteCount > this.maxByteCount;
                }
                if (flowControlError) {
                    in.skip(byteCount);
                    Http2Stream.this.closeLater(ErrorCode.FLOW_CONTROL_ERROR);
                    return;
                } else if (finished) {
                    in.skip(byteCount);
                    return;
                } else {
                    long read = in.read(this.receiveBuffer, byteCount);
                    if (read != -1) {
                        long byteCount2 = byteCount - read;
                        synchronized (Http2Stream.this) {
                            if (this.readBuffer.size() != 0) {
                                z = false;
                            }
                            boolean wasEmpty = z;
                            this.readBuffer.writeAll(this.receiveBuffer);
                            if (wasEmpty) {
                                Http2Stream.this.notifyAll();
                            }
                        }
                        byteCount = byteCount2;
                    } else {
                        throw new EOFException();
                    }
                }
            }
        }

        public Timeout timeout() {
            return Http2Stream.this.readTimeout;
        }

        public void close() throws IOException {
            List<Headers> headersToDeliver = null;
            Listener headersListenerToNotify = null;
            synchronized (Http2Stream.this) {
                this.closed = true;
                long bytesDiscarded = this.readBuffer.size();
                this.readBuffer.clear();
                if (!Http2Stream.this.headersQueue.isEmpty() && Http2Stream.this.headersListener != null) {
                    headersToDeliver = new ArrayList(Http2Stream.this.headersQueue);
                    Http2Stream.this.headersQueue.clear();
                    headersListenerToNotify = Http2Stream.this.headersListener;
                }
                Http2Stream.this.notifyAll();
            }
            if (bytesDiscarded > 0) {
                updateConnectionFlowControl(bytesDiscarded);
            }
            Http2Stream.this.cancelStreamIfNecessary();
            if (headersListenerToNotify != null) {
                for (Headers headers : headersToDeliver) {
                    headersListenerToNotify.onHeaders(headers);
                }
            }
        }
    }

    class StreamTimeout extends AsyncTimeout {
        StreamTimeout() {
        }

        protected void timedOut() {
            Http2Stream.this.closeLater(ErrorCode.CANCEL);
        }

        protected IOException newTimeoutException(IOException cause) {
            SocketTimeoutException socketTimeoutException = new SocketTimeoutException("timeout");
            if (cause != null) {
                socketTimeoutException.initCause(cause);
            }
            return socketTimeoutException;
        }

        public void exitAndThrowIfTimedOut() throws IOException {
            if (exit()) {
                throw newTimeoutException(null);
            }
        }
    }

    Http2Stream(int id, Http2Connection connection, boolean outFinished, boolean inFinished, @Nullable Headers headers) {
        if (connection != null) {
            this.id = id;
            this.connection = connection;
            this.bytesLeftInWriteWindow = (long) connection.peerSettings.getInitialWindowSize();
            this.source = new FramingSource((long) connection.okHttpSettings.getInitialWindowSize());
            this.sink = new FramingSink();
            this.source.finished = inFinished;
            this.sink.finished = outFinished;
            if (headers != null) {
                this.headersQueue.add(headers);
            }
            if (isLocallyInitiated()) {
                if (headers != null) {
                    throw new IllegalStateException("locally-initiated streams shouldn't have headers yet");
                }
            }
            if (!isLocallyInitiated()) {
                if (headers == null) {
                    throw new IllegalStateException("remotely-initiated streams should have headers");
                }
            }
            return;
        }
        throw new NullPointerException("connection == null");
    }

    public int getId() {
        return this.id;
    }

    public synchronized boolean isOpen() {
        if (this.errorCode != null) {
            return false;
        }
        if (!this.source.finished) {
            if (this.source.closed) {
            }
            return true;
        }
        if ((this.sink.finished || this.sink.closed) && this.hasResponseHeaders) {
            return false;
        }
        return true;
    }

    public boolean isLocallyInitiated() {
        if (this.connection.client == ((this.id & 1) == 1)) {
            return true;
        }
        return false;
    }

    public Http2Connection getConnection() {
        return this.connection;
    }

    public synchronized Headers takeHeaders() throws IOException {
        this.readTimeout.enter();
        while (this.headersQueue.isEmpty() && this.errorCode == null) {
            try {
                waitForIo();
            } finally {
                this.readTimeout.exitAndThrowIfTimedOut();
            }
        }
        if (this.headersQueue.isEmpty()) {
            throw new StreamResetException(this.errorCode);
        }
        return (Headers) this.headersQueue.removeFirst();
    }

    public synchronized ErrorCode getErrorCode() {
        return this.errorCode;
    }

    public void writeHeaders(List<Header> responseHeaders, boolean out) throws IOException {
        if (responseHeaders != null) {
            boolean z;
            boolean outFinished = false;
            boolean flushHeaders = false;
            synchronized (this) {
                z = true;
                this.hasResponseHeaders = true;
                if (!out) {
                    this.sink.finished = true;
                    flushHeaders = true;
                    outFinished = true;
                }
            }
            if (!flushHeaders) {
                synchronized (this.connection) {
                    if (this.connection.bytesLeftInWriteWindow != 0) {
                        z = false;
                    }
                    flushHeaders = z;
                }
            }
            this.connection.writeSynReply(this.id, outFinished, responseHeaders);
            if (flushHeaders) {
                this.connection.flush();
                return;
            }
            return;
        }
        throw new NullPointerException("headers == null");
    }

    public Timeout readTimeout() {
        return this.readTimeout;
    }

    public Timeout writeTimeout() {
        return this.writeTimeout;
    }

    public Source getSource() {
        return this.source;
    }

    public Sink getSink() {
        synchronized (this) {
            if (!this.hasResponseHeaders) {
                if (!isLocallyInitiated()) {
                    throw new IllegalStateException("reply before requesting the sink");
                }
            }
        }
        return this.sink;
    }

    public void close(ErrorCode rstStatusCode) throws IOException {
        if (closeInternal(rstStatusCode)) {
            this.connection.writeSynReset(this.id, rstStatusCode);
        }
    }

    public void closeLater(ErrorCode errorCode) {
        if (closeInternal(errorCode)) {
            this.connection.writeSynResetLater(this.id, errorCode);
        }
    }

    private boolean closeInternal(ErrorCode errorCode) {
        synchronized (this) {
            if (this.errorCode != null) {
                return false;
            } else if (this.source.finished && this.sink.finished) {
                return false;
            } else {
                this.errorCode = errorCode;
                notifyAll();
                this.connection.removeStream(this.id);
                return true;
            }
        }
    }

    void receiveHeaders(List<Header> headers) {
        synchronized (this) {
            this.hasResponseHeaders = true;
            this.headersQueue.add(Util.toHeaders(headers));
            boolean open = isOpen();
            notifyAll();
        }
        if (!open) {
            this.connection.removeStream(this.id);
        }
    }

    void receiveData(BufferedSource in, int length) throws IOException {
        this.source.receive(in, (long) length);
    }

    void receiveFin() {
        synchronized (this) {
            this.source.finished = true;
            boolean open = isOpen();
            notifyAll();
        }
        if (!open) {
            this.connection.removeStream(this.id);
        }
    }

    synchronized void receiveRstStream(ErrorCode errorCode) {
        if (this.errorCode == null) {
            this.errorCode = errorCode;
            notifyAll();
        }
    }

    public synchronized void setHeadersListener(Listener headersListener) {
        this.headersListener = headersListener;
        if (!this.headersQueue.isEmpty() && headersListener != null) {
            notifyAll();
        }
    }

    void cancelStreamIfNecessary() throws IOException {
        synchronized (this) {
            boolean cancel = !this.source.finished && this.source.closed && (this.sink.finished || this.sink.closed);
            boolean open = isOpen();
        }
        if (cancel) {
            close(ErrorCode.CANCEL);
        } else if (!open) {
            this.connection.removeStream(this.id);
        }
    }

    void addBytesToWriteWindow(long delta) {
        this.bytesLeftInWriteWindow += delta;
        if (delta > 0) {
            notifyAll();
        }
    }

    void checkOutNotClosed() throws IOException {
        if (this.sink.closed) {
            throw new IOException("stream closed");
        } else if (this.sink.finished) {
            throw new IOException("stream finished");
        } else {
            ErrorCode errorCode = this.errorCode;
            if (errorCode != null) {
                throw new StreamResetException(errorCode);
            }
        }
    }

    void waitForIo() throws InterruptedIOException {
        try {
            wait();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new InterruptedIOException();
        }
    }
}
