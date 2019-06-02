package okio;

import android.support.v4.media.session.PlaybackStateCompat;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nullable;

public class AsyncTimeout extends Timeout {
    private static final long IDLE_TIMEOUT_MILLIS = TimeUnit.SECONDS.toMillis(60);
    private static final long IDLE_TIMEOUT_NANOS = TimeUnit.MILLISECONDS.toNanos(IDLE_TIMEOUT_MILLIS);
    private static final int TIMEOUT_WRITE_SIZE = 65536;
    @Nullable
    static AsyncTimeout head;
    private boolean inQueue;
    @Nullable
    private AsyncTimeout next;
    private long timeoutAt;

    private static final class Watchdog extends Thread {
        Watchdog() {
            super("Okio Watchdog");
            setDaemon(true);
        }

        /* JADX WARNING: inconsistent code. */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        public void run() {
            /*
            r3 = this;
        L_0x0000:
            r0 = okio.AsyncTimeout.class;
            monitor-enter(r0);	 Catch:{ InterruptedException -> 0x001c }
            r1 = okio.AsyncTimeout.awaitTimeout();	 Catch:{ all -> 0x0019 }
            if (r1 != 0) goto L_0x000b;
        L_0x0009:
            monitor-exit(r0);	 Catch:{ all -> 0x0019 }
            goto L_0x0000;
        L_0x000b:
            r2 = okio.AsyncTimeout.head;	 Catch:{ all -> 0x0019 }
            if (r1 != r2) goto L_0x0014;
        L_0x000f:
            r2 = 0;
            okio.AsyncTimeout.head = r2;	 Catch:{ all -> 0x0019 }
            monitor-exit(r0);	 Catch:{ all -> 0x0019 }
            return;
        L_0x0014:
            monitor-exit(r0);	 Catch:{ all -> 0x0019 }
            r1.timedOut();	 Catch:{ InterruptedException -> 0x001c }
            goto L_0x001d;
        L_0x0019:
            r1 = move-exception;
            monitor-exit(r0);	 Catch:{ all -> 0x0019 }
            throw r1;	 Catch:{ InterruptedException -> 0x001c }
        L_0x001c:
            r0 = move-exception;
        L_0x001d:
            goto L_0x0000;
            */
            throw new UnsupportedOperationException("Method not decompiled: okio.AsyncTimeout.Watchdog.run():void");
        }
    }

    public final void enter() {
        if (this.inQueue) {
            throw new IllegalStateException("Unbalanced enter/exit");
        }
        long timeoutNanos = timeoutNanos();
        boolean hasDeadline = hasDeadline();
        if (timeoutNanos != 0 || hasDeadline) {
            this.inQueue = true;
            scheduleTimeout(this, timeoutNanos, hasDeadline);
        }
    }

    private static synchronized void scheduleTimeout(AsyncTimeout node, long timeoutNanos, boolean hasDeadline) {
        synchronized (AsyncTimeout.class) {
            if (head == null) {
                head = new AsyncTimeout();
                new Watchdog().start();
            }
            long now = System.nanoTime();
            if (timeoutNanos != 0 && hasDeadline) {
                node.timeoutAt = Math.min(timeoutNanos, node.deadlineNanoTime() - now) + now;
            } else if (timeoutNanos != 0) {
                node.timeoutAt = now + timeoutNanos;
            } else if (hasDeadline) {
                node.timeoutAt = node.deadlineNanoTime();
            } else {
                throw new AssertionError();
            }
            long remainingNanos = node.remainingNanos(now);
            AsyncTimeout prev = head;
            while (prev.next != null) {
                if (remainingNanos < prev.next.remainingNanos(now)) {
                    break;
                }
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            if (prev == head) {
                AsyncTimeout.class.notify();
            }
        }
    }

    public final boolean exit() {
        if (!this.inQueue) {
            return false;
        }
        this.inQueue = false;
        return cancelScheduledTimeout(this);
    }

    private static synchronized boolean cancelScheduledTimeout(AsyncTimeout node) {
        synchronized (AsyncTimeout.class) {
            for (AsyncTimeout prev = head; prev != null; prev = prev.next) {
                if (prev.next == node) {
                    prev.next = node.next;
                    node.next = null;
                    return false;
                }
            }
            return true;
        }
    }

    private long remainingNanos(long now) {
        return this.timeoutAt - now;
    }

    protected void timedOut() {
    }

    public final Sink sink(final Sink sink) {
        return new Sink() {
            public void write(Buffer source, long byteCount) throws IOException {
                Util.checkOffsetAndCount(source.size, 0, byteCount);
                while (byteCount > 0) {
                    long toWrite = 0;
                    Segment s = source.head;
                    while (toWrite < PlaybackStateCompat.ACTION_PREPARE_FROM_SEARCH) {
                        toWrite += (long) (s.limit - s.pos);
                        if (toWrite >= byteCount) {
                            toWrite = byteCount;
                            break;
                        }
                        s = s.next;
                    }
                    AsyncTimeout.this.enter();
                    try {
                        sink.write(source, toWrite);
                        byteCount -= toWrite;
                        AsyncTimeout.this.exit(true);
                    } catch (IOException e) {
                        throw AsyncTimeout.this.exit(e);
                    } catch (Throwable th) {
                        AsyncTimeout.this.exit(false);
                    }
                }
            }

            public void flush() throws IOException {
                AsyncTimeout.this.enter();
                try {
                    sink.flush();
                    AsyncTimeout.this.exit(true);
                } catch (IOException e) {
                    throw AsyncTimeout.this.exit(e);
                } catch (Throwable th) {
                    AsyncTimeout.this.exit(false);
                }
            }

            public void close() throws IOException {
                AsyncTimeout.this.enter();
                try {
                    sink.close();
                    AsyncTimeout.this.exit(true);
                } catch (IOException e) {
                    throw AsyncTimeout.this.exit(e);
                } catch (Throwable th) {
                    AsyncTimeout.this.exit(false);
                }
            }

            public Timeout timeout() {
                return AsyncTimeout.this;
            }

            public String toString() {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("AsyncTimeout.sink(");
                stringBuilder.append(sink);
                stringBuilder.append(")");
                return stringBuilder.toString();
            }
        };
    }

    public final Source source(final Source source) {
        return new Source() {
            public long read(Buffer sink, long byteCount) throws IOException {
                AsyncTimeout.this.enter();
                try {
                    long result = source.read(sink, byteCount);
                    AsyncTimeout.this.exit(true);
                    return result;
                } catch (IOException e) {
                    throw AsyncTimeout.this.exit(e);
                } catch (Throwable th) {
                    AsyncTimeout.this.exit(false);
                }
            }

            public void close() throws IOException {
                try {
                    source.close();
                    AsyncTimeout.this.exit(true);
                } catch (IOException e) {
                    throw AsyncTimeout.this.exit(e);
                } catch (Throwable th) {
                    AsyncTimeout.this.exit(false);
                }
            }

            public Timeout timeout() {
                return AsyncTimeout.this;
            }

            public String toString() {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("AsyncTimeout.source(");
                stringBuilder.append(source);
                stringBuilder.append(")");
                return stringBuilder.toString();
            }
        };
    }

    final void exit(boolean throwOnTimeout) throws IOException {
        if (!exit()) {
            return;
        }
        if (throwOnTimeout) {
            throw newTimeoutException(null);
        }
    }

    final IOException exit(IOException cause) throws IOException {
        if (exit()) {
            return newTimeoutException(cause);
        }
        return cause;
    }

    protected IOException newTimeoutException(@Nullable IOException cause) {
        InterruptedIOException e = new InterruptedIOException("timeout");
        if (cause != null) {
            e.initCause(cause);
        }
        return e;
    }

    @Nullable
    static AsyncTimeout awaitTimeout() throws InterruptedException {
        AsyncTimeout node = head.next;
        AsyncTimeout asyncTimeout = null;
        if (node == null) {
            long startNanos = System.nanoTime();
            AsyncTimeout.class.wait(IDLE_TIMEOUT_MILLIS);
            if (head.next == null && System.nanoTime() - startNanos >= IDLE_TIMEOUT_NANOS) {
                asyncTimeout = head;
            }
            return asyncTimeout;
        }
        startNanos = node.remainingNanos(System.nanoTime());
        if (startNanos > 0) {
            long waitMillis = startNanos / 1000000;
            AsyncTimeout.class.wait(waitMillis, (int) (startNanos - (1000000 * waitMillis)));
            return null;
        }
        head.next = node.next;
        node.next = null;
        return node;
    }
}
