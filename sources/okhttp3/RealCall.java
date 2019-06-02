package okhttp3;

import android.support.v4.app.NotificationCompat;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nullable;
import okhttp3.internal.NamedRunnable;
import okhttp3.internal.cache.CacheInterceptor;
import okhttp3.internal.connection.ConnectInterceptor;
import okhttp3.internal.connection.StreamAllocation;
import okhttp3.internal.http.BridgeInterceptor;
import okhttp3.internal.http.CallServerInterceptor;
import okhttp3.internal.http.RealInterceptorChain;
import okhttp3.internal.http.RetryAndFollowUpInterceptor;
import okhttp3.internal.platform.Platform;
import okio.AsyncTimeout;
import okio.Timeout;

final class RealCall implements Call {
    final OkHttpClient client;
    @Nullable
    private EventListener eventListener;
    private boolean executed;
    final boolean forWebSocket;
    final Request originalRequest;
    final RetryAndFollowUpInterceptor retryAndFollowUpInterceptor;
    final AsyncTimeout timeout = new C03781();

    final class AsyncCall extends NamedRunnable {
        static final /* synthetic */ boolean $assertionsDisabled = false;
        private final Callback responseCallback;

        static {
            Class cls = RealCall.class;
        }

        AsyncCall(Callback responseCallback) {
            super("OkHttp %s", this$0.redactedUrl());
            this.responseCallback = responseCallback;
        }

        String host() {
            return RealCall.this.originalRequest.url().host();
        }

        Request request() {
            return RealCall.this.originalRequest;
        }

        RealCall get() {
            return RealCall.this;
        }

        /* JADX WARNING: inconsistent code. */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        void executeOn(java.util.concurrent.ExecutorService r6) {
            /*
            r5 = this;
            r0 = 0;
            r6.execute(r5);	 Catch:{ RejectedExecutionException -> 0x0017 }
            r0 = 1;
            if (r0 != 0) goto L_0x0014;
        L_0x0008:
            r1 = okhttp3.RealCall.this;
            r1 = r1.client;
            r1 = r1.dispatcher();
            r1.finished(r5);
            goto L_0x0037;
        L_0x0014:
            goto L_0x0037;
        L_0x0015:
            r1 = move-exception;
            goto L_0x0038;
        L_0x0017:
            r1 = move-exception;
            r2 = new java.io.InterruptedIOException;	 Catch:{ all -> 0x0015 }
            r3 = "executor rejected";
            r2.<init>(r3);	 Catch:{ all -> 0x0015 }
            r2.initCause(r1);	 Catch:{ all -> 0x0015 }
            r3 = okhttp3.RealCall.this;	 Catch:{ all -> 0x0015 }
            r3 = r3.eventListener;	 Catch:{ all -> 0x0015 }
            r4 = okhttp3.RealCall.this;	 Catch:{ all -> 0x0015 }
            r3.callFailed(r4, r2);	 Catch:{ all -> 0x0015 }
            r3 = r5.responseCallback;	 Catch:{ all -> 0x0015 }
            r4 = okhttp3.RealCall.this;	 Catch:{ all -> 0x0015 }
            r3.onFailure(r4, r2);	 Catch:{ all -> 0x0015 }
            if (r0 != 0) goto L_0x0014;
        L_0x0036:
            goto L_0x0008;
        L_0x0037:
            return;
        L_0x0038:
            if (r0 != 0) goto L_0x0046;
        L_0x003a:
            r2 = okhttp3.RealCall.this;
            r2 = r2.client;
            r2 = r2.dispatcher();
            r2.finished(r5);
            goto L_0x0047;
        L_0x0047:
            throw r1;
            */
            throw new UnsupportedOperationException("Method not decompiled: okhttp3.RealCall.AsyncCall.executeOn(java.util.concurrent.ExecutorService):void");
        }

        protected void execute() {
            RealCall.this.timeout.enter();
            try {
                Response response = RealCall.this.getResponseWithInterceptorChain();
                if (RealCall.this.retryAndFollowUpInterceptor.isCanceled()) {
                    this.responseCallback.onFailure(RealCall.this, new IOException("Canceled"));
                } else {
                    this.responseCallback.onResponse(RealCall.this, response);
                }
            } catch (IOException e) {
                IOException e2 = RealCall.this.timeoutExit(e2);
                if (false) {
                    Platform platform = Platform.get();
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("Callback failure for ");
                    stringBuilder.append(RealCall.this.toLoggableString());
                    platform.log(4, stringBuilder.toString(), e2);
                } else {
                    RealCall.this.eventListener.callFailed(RealCall.this, e2);
                    this.responseCallback.onFailure(RealCall.this, e2);
                }
            } catch (Throwable th) {
                RealCall.this.client.dispatcher().finished(this);
            }
            RealCall.this.client.dispatcher().finished(this);
        }
    }

    /* renamed from: okhttp3.RealCall$1 */
    class C03781 extends AsyncTimeout {
        C03781() {
        }

        protected void timedOut() {
            RealCall.this.cancel();
        }
    }

    private RealCall(OkHttpClient client, Request originalRequest, boolean forWebSocket) {
        this.client = client;
        this.originalRequest = originalRequest;
        this.forWebSocket = forWebSocket;
        this.retryAndFollowUpInterceptor = new RetryAndFollowUpInterceptor(client, forWebSocket);
        this.timeout.timeout((long) client.callTimeoutMillis(), TimeUnit.MILLISECONDS);
    }

    static RealCall newRealCall(OkHttpClient client, Request originalRequest, boolean forWebSocket) {
        RealCall call = new RealCall(client, originalRequest, forWebSocket);
        call.eventListener = client.eventListenerFactory().create(call);
        return call;
    }

    public Request request() {
        return this.originalRequest;
    }

    public Response execute() throws IOException {
        synchronized (this) {
            if (this.executed) {
                throw new IllegalStateException("Already Executed");
            }
            this.executed = true;
        }
        captureCallStackTrace();
        this.timeout.enter();
        this.eventListener.callStart(this);
        try {
            this.client.dispatcher().executed(this);
            Response result = getResponseWithInterceptorChain();
            if (result != null) {
                this.client.dispatcher().finished(this);
                return result;
            }
            throw new IOException("Canceled");
        } catch (IOException e) {
            IOException e2 = timeoutExit(e2);
            this.eventListener.callFailed(this, e2);
            throw e2;
        } catch (Throwable th) {
            this.client.dispatcher().finished(this);
        }
    }

    @Nullable
    IOException timeoutExit(@Nullable IOException cause) {
        if (!this.timeout.exit()) {
            return cause;
        }
        InterruptedIOException e = new InterruptedIOException("timeout");
        if (cause != null) {
            e.initCause(cause);
        }
        return e;
    }

    private void captureCallStackTrace() {
        this.retryAndFollowUpInterceptor.setCallStackTrace(Platform.get().getStackTraceForCloseable("response.body().close()"));
    }

    public void enqueue(Callback responseCallback) {
        synchronized (this) {
            if (this.executed) {
                throw new IllegalStateException("Already Executed");
            }
            this.executed = true;
        }
        captureCallStackTrace();
        this.eventListener.callStart(this);
        this.client.dispatcher().enqueue(new AsyncCall(responseCallback));
    }

    public void cancel() {
        this.retryAndFollowUpInterceptor.cancel();
    }

    public Timeout timeout() {
        return this.timeout;
    }

    public synchronized boolean isExecuted() {
        return this.executed;
    }

    public boolean isCanceled() {
        return this.retryAndFollowUpInterceptor.isCanceled();
    }

    public RealCall clone() {
        return newRealCall(this.client, this.originalRequest, this.forWebSocket);
    }

    StreamAllocation streamAllocation() {
        return this.retryAndFollowUpInterceptor.streamAllocation();
    }

    String toLoggableString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(isCanceled() ? "canceled " : "");
        stringBuilder.append(this.forWebSocket ? "web socket" : NotificationCompat.CATEGORY_CALL);
        stringBuilder.append(" to ");
        stringBuilder.append(redactedUrl());
        return stringBuilder.toString();
    }

    String redactedUrl() {
        return this.originalRequest.url().redact();
    }

    Response getResponseWithInterceptorChain() throws IOException {
        List<Interceptor> interceptors = new ArrayList();
        interceptors.addAll(this.client.interceptors());
        interceptors.add(this.retryAndFollowUpInterceptor);
        interceptors.add(new BridgeInterceptor(this.client.cookieJar()));
        interceptors.add(new CacheInterceptor(this.client.internalCache()));
        interceptors.add(new ConnectInterceptor(this.client));
        if (!this.forWebSocket) {
            interceptors.addAll(this.client.networkInterceptors());
        }
        interceptors.add(new CallServerInterceptor(this.forWebSocket));
        return new RealInterceptorChain(interceptors, null, null, null, 0, this.originalRequest, this, this.eventListener, this.client.connectTimeoutMillis(), this.client.readTimeoutMillis(), this.client.writeTimeoutMillis()).proceed(this.originalRequest);
    }
}
