package okio;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.io.OutputStream;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.nio.file.Files;
import java.nio.file.OpenOption;
import java.nio.file.Path;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Nullable;
import org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement;

public final class Okio {
    static final Logger logger = Logger.getLogger(Okio.class.getName());

    /* renamed from: okio.Okio$1 */
    class C03671 implements Sink {
        final /* synthetic */ OutputStream val$out;
        final /* synthetic */ Timeout val$timeout;

        C03671(Timeout timeout, OutputStream outputStream) {
            this.val$timeout = timeout;
            this.val$out = outputStream;
        }

        public void write(Buffer source, long byteCount) throws IOException {
            Util.checkOffsetAndCount(source.size, 0, byteCount);
            while (byteCount > 0) {
                this.val$timeout.throwIfReached();
                Segment head = source.head;
                int toCopy = (int) Math.min(byteCount, (long) (head.limit - head.pos));
                this.val$out.write(head.data, head.pos, toCopy);
                head.pos += toCopy;
                byteCount -= (long) toCopy;
                source.size -= (long) toCopy;
                if (head.pos == head.limit) {
                    source.head = head.pop();
                    SegmentPool.recycle(head);
                }
            }
        }

        public void flush() throws IOException {
            this.val$out.flush();
        }

        public void close() throws IOException {
            this.val$out.close();
        }

        public Timeout timeout() {
            return this.val$timeout;
        }

        public String toString() {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("sink(");
            stringBuilder.append(this.val$out);
            stringBuilder.append(")");
            return stringBuilder.toString();
        }
    }

    /* renamed from: okio.Okio$2 */
    class C03682 implements Source {
        final /* synthetic */ InputStream val$in;
        final /* synthetic */ Timeout val$timeout;

        C03682(Timeout timeout, InputStream inputStream) {
            this.val$timeout = timeout;
            this.val$in = inputStream;
        }

        public long read(Buffer sink, long byteCount) throws IOException {
            if (byteCount < 0) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("byteCount < 0: ");
                stringBuilder.append(byteCount);
                throw new IllegalArgumentException(stringBuilder.toString());
            } else if (byteCount == 0) {
                return 0;
            } else {
                try {
                    this.val$timeout.throwIfReached();
                    Segment tail = sink.writableSegment(1);
                    int bytesRead = this.val$in.read(tail.data, tail.limit, (int) Math.min(byteCount, (long) (8192 - tail.limit)));
                    if (bytesRead == -1) {
                        return -1;
                    }
                    tail.limit += bytesRead;
                    sink.size += (long) bytesRead;
                    return (long) bytesRead;
                } catch (AssertionError e) {
                    if (Okio.isAndroidGetsocknameError(e)) {
                        throw new IOException(e);
                    }
                    throw e;
                }
            }
        }

        public void close() throws IOException {
            this.val$in.close();
        }

        public Timeout timeout() {
            return this.val$timeout;
        }

        public String toString() {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("source(");
            stringBuilder.append(this.val$in);
            stringBuilder.append(")");
            return stringBuilder.toString();
        }
    }

    /* renamed from: okio.Okio$3 */
    class C03693 implements Sink {
        C03693() {
        }

        public void write(Buffer source, long byteCount) throws IOException {
            source.skip(byteCount);
        }

        public void flush() throws IOException {
        }

        public Timeout timeout() {
            return Timeout.NONE;
        }

        public void close() throws IOException {
        }
    }

    /* renamed from: okio.Okio$4 */
    class C03794 extends AsyncTimeout {
        final /* synthetic */ Socket val$socket;

        C03794(Socket socket) {
            this.val$socket = socket;
        }

        protected IOException newTimeoutException(@Nullable IOException cause) {
            InterruptedIOException ioe = new SocketTimeoutException("timeout");
            if (cause != null) {
                ioe.initCause(cause);
            }
            return ioe;
        }

        protected void timedOut() {
            Logger logger;
            Level level;
            StringBuilder stringBuilder;
            try {
                this.val$socket.close();
            } catch (Exception e) {
                logger = Okio.logger;
                level = Level.WARNING;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Failed to close timed out socket ");
                stringBuilder.append(this.val$socket);
                logger.log(level, stringBuilder.toString(), e);
            } catch (AssertionError e2) {
                if (Okio.isAndroidGetsocknameError(e2)) {
                    logger = Okio.logger;
                    level = Level.WARNING;
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Failed to close timed out socket ");
                    stringBuilder.append(this.val$socket);
                    logger.log(level, stringBuilder.toString(), e2);
                    return;
                }
                throw e2;
            }
        }
    }

    private Okio() {
    }

    public static BufferedSource buffer(Source source) {
        return new RealBufferedSource(source);
    }

    public static BufferedSink buffer(Sink sink) {
        return new RealBufferedSink(sink);
    }

    public static Sink sink(OutputStream out) {
        return sink(out, new Timeout());
    }

    private static Sink sink(OutputStream out, Timeout timeout) {
        if (out == null) {
            throw new IllegalArgumentException("out == null");
        } else if (timeout != null) {
            return new C03671(timeout, out);
        } else {
            throw new IllegalArgumentException("timeout == null");
        }
    }

    public static Sink sink(Socket socket) throws IOException {
        if (socket == null) {
            throw new IllegalArgumentException("socket == null");
        } else if (socket.getOutputStream() != null) {
            Timeout timeout = timeout(socket);
            return timeout.sink(sink(socket.getOutputStream(), timeout));
        } else {
            throw new IOException("socket's output stream == null");
        }
    }

    public static Source source(InputStream in) {
        return source(in, new Timeout());
    }

    private static Source source(InputStream in, Timeout timeout) {
        if (in == null) {
            throw new IllegalArgumentException("in == null");
        } else if (timeout != null) {
            return new C03682(timeout, in);
        } else {
            throw new IllegalArgumentException("timeout == null");
        }
    }

    public static Source source(File file) throws FileNotFoundException {
        if (file != null) {
            return source(new FileInputStream(file));
        }
        throw new IllegalArgumentException("file == null");
    }

    @IgnoreJRERequirement
    public static Source source(Path path, OpenOption... options) throws IOException {
        if (path != null) {
            return source(Files.newInputStream(path, options));
        }
        throw new IllegalArgumentException("path == null");
    }

    public static Sink sink(File file) throws FileNotFoundException {
        if (file != null) {
            return sink(new FileOutputStream(file));
        }
        throw new IllegalArgumentException("file == null");
    }

    public static Sink appendingSink(File file) throws FileNotFoundException {
        if (file != null) {
            return sink(new FileOutputStream(file, true));
        }
        throw new IllegalArgumentException("file == null");
    }

    @IgnoreJRERequirement
    public static Sink sink(Path path, OpenOption... options) throws IOException {
        if (path != null) {
            return sink(Files.newOutputStream(path, options));
        }
        throw new IllegalArgumentException("path == null");
    }

    public static Sink blackhole() {
        return new C03693();
    }

    public static Source source(Socket socket) throws IOException {
        if (socket == null) {
            throw new IllegalArgumentException("socket == null");
        } else if (socket.getInputStream() != null) {
            Timeout timeout = timeout(socket);
            return timeout.source(source(socket.getInputStream(), timeout));
        } else {
            throw new IOException("socket's input stream == null");
        }
    }

    private static AsyncTimeout timeout(Socket socket) {
        return new C03794(socket);
    }

    static boolean isAndroidGetsocknameError(AssertionError e) {
        if (e.getCause() != null && e.getMessage() != null) {
            if (e.getMessage().contains("getsockname failed")) {
                return true;
            }
        }
        return false;
    }
}
