package okhttp3.internal.http;

import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.ProtocolException;
import java.net.Proxy;
import java.net.Proxy.Type;
import java.net.SocketTimeoutException;
import java.security.cert.CertificateException;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLHandshakeException;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.SSLSocketFactory;
import okhttp3.Address;
import okhttp3.CertificatePinner;
import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Request.Builder;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.Route;
import okhttp3.internal.connection.StreamAllocation;

public final class RetryAndFollowUpInterceptor implements Interceptor {
    private static final int MAX_FOLLOW_UPS = 20;
    private Object callStackTrace;
    private volatile boolean canceled;
    private final OkHttpClient client;
    private final boolean forWebSocket;
    private volatile StreamAllocation streamAllocation;

    public RetryAndFollowUpInterceptor(OkHttpClient client, boolean forWebSocket) {
        this.client = client;
        this.forWebSocket = forWebSocket;
    }

    public void cancel() {
        this.canceled = true;
        StreamAllocation streamAllocation = this.streamAllocation;
        if (streamAllocation != null) {
            streamAllocation.cancel();
        }
    }

    public boolean isCanceled() {
        return this.canceled;
    }

    public void setCallStackTrace(Object callStackTrace) {
        this.callStackTrace = callStackTrace;
    }

    public StreamAllocation streamAllocation() {
        return this.streamAllocation;
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public okhttp3.Response intercept(okhttp3.Interceptor.Chain r20) throws java.io.IOException {
        /*
        r19 = this;
        r1 = r19;
        r0 = r20.request();
        r2 = r20;
        r2 = (okhttp3.internal.http.RealInterceptorChain) r2;
        r9 = r2.call();
        r10 = r2.eventListener();
        r11 = new okhttp3.internal.connection.StreamAllocation;
        r3 = r1.client;
        r4 = r3.connectionPool();
        r3 = r0.url();
        r5 = r1.createAddress(r3);
        r8 = r1.callStackTrace;
        r3 = r11;
        r6 = r9;
        r7 = r10;
        r3.<init>(r4, r5, r6, r7, r8);
        r1.streamAllocation = r3;
        r4 = 0;
        r5 = 0;
        r12 = r0;
        r13 = r5;
    L_0x0030:
        r0 = r1.canceled;
        if (r0 != 0) goto L_0x0166;
    L_0x0034:
        r3 = 1;
        r5 = 0;
        r6 = 0;
        r0 = r2.proceed(r12, r11, r6, r6);	 Catch:{ RouteException -> 0x0137, IOException -> 0x011e, all -> 0x011a }
        r14 = 0;
        if (r14 == 0) goto L_0x0045;
    L_0x003e:
        r11.streamFailed(r6);
        r11.release();
        goto L_0x0046;
    L_0x0046:
        if (r13 == 0) goto L_0x0062;
    L_0x0048:
        r3 = r0.newBuilder();
        r5 = r13.newBuilder();
        r5 = r5.body(r6);
        r5 = r5.build();
        r3 = r3.priorResponse(r5);
        r0 = r3.build();
        r15 = r0;
        goto L_0x0063;
    L_0x0062:
        r15 = r0;
    L_0x0063:
        r0 = r11.route();	 Catch:{ IOException -> 0x0113 }
        r0 = r1.followUpRequest(r15, r0);	 Catch:{ IOException -> 0x0113 }
        if (r0 != 0) goto L_0x0072;
    L_0x006e:
        r11.release();
        return r15;
    L_0x0072:
        r3 = r15.body();
        okhttp3.internal.Util.closeQuietly(r3);
        r8 = r4 + 1;
        r3 = 20;
        if (r8 > r3) goto L_0x00f6;
    L_0x007f:
        r3 = r0.body();
        r3 = r3 instanceof okhttp3.internal.http.UnrepeatableRequestBody;
        if (r3 != 0) goto L_0x00e4;
    L_0x0087:
        r3 = r0.url();
        r3 = r1.sameConnection(r15, r3);
        if (r3 != 0) goto L_0x00b8;
    L_0x0091:
        r11.release();
        r16 = new okhttp3.internal.connection.StreamAllocation;
        r3 = r1.client;
        r4 = r3.connectionPool();
        r3 = r0.url();
        r5 = r1.createAddress(r3);
        r7 = r1.callStackTrace;
        r3 = r16;
        r6 = r9;
        r17 = r7;
        r7 = r10;
        r18 = r2;
        r2 = r8;
        r8 = r17;
        r3.<init>(r4, r5, r6, r7, r8);
        r1.streamAllocation = r3;
        r11 = r3;
        goto L_0x00c1;
    L_0x00b8:
        r18 = r2;
        r2 = r8;
        r3 = r11.codec();
        if (r3 != 0) goto L_0x00c8;
    L_0x00c1:
        r12 = r0;
        r13 = r15;
        r4 = r2;
        r2 = r18;
        goto L_0x0030;
    L_0x00c8:
        r3 = new java.lang.IllegalStateException;
        r4 = new java.lang.StringBuilder;
        r4.<init>();
        r5 = "Closing the body of ";
        r4.append(r5);
        r4.append(r15);
        r5 = " didn't close its backing stream. Bad interceptor?";
        r4.append(r5);
        r4 = r4.toString();
        r3.<init>(r4);
        throw r3;
    L_0x00e4:
        r18 = r2;
        r2 = r8;
        r11.release();
        r3 = new java.net.HttpRetryException;
        r4 = r15.code();
        r5 = "Cannot retry streamed HTTP body";
        r3.<init>(r5, r4);
        throw r3;
    L_0x00f6:
        r18 = r2;
        r2 = r8;
        r11.release();
        r3 = new java.net.ProtocolException;
        r4 = new java.lang.StringBuilder;
        r4.<init>();
        r5 = "Too many follow-up requests: ";
        r4.append(r5);
        r4.append(r2);
        r4 = r4.toString();
        r3.<init>(r4);
        throw r3;
    L_0x0113:
        r0 = move-exception;
        r18 = r2;
        r11.release();
        throw r0;
    L_0x011a:
        r0 = move-exception;
        r18 = r2;
        goto L_0x015b;
    L_0x011e:
        r0 = move-exception;
        r18 = r2;
        r2 = r0;
        r0 = r2;
        r2 = r0 instanceof okhttp3.internal.http2.ConnectionShutdownException;	 Catch:{ all -> 0x015a }
        if (r2 != 0) goto L_0x012a;
    L_0x0128:
        r5 = 1;
    L_0x012a:
        r2 = r5;
        r5 = r1.recover(r0, r11, r2, r12);	 Catch:{ all -> 0x015a }
        if (r5 == 0) goto L_0x0135;
    L_0x0131:
        r3 = 0;
        if (r3 == 0) goto L_0x0150;
    L_0x0134:
        goto L_0x0149;
        throw r0;	 Catch:{ all -> 0x015a }
    L_0x0137:
        r0 = move-exception;
        r18 = r2;
        r2 = r0;
        r0 = r2;
        r2 = r0.getLastConnectException();	 Catch:{ all -> 0x015a }
        r2 = r1.recover(r2, r11, r5, r12);	 Catch:{ all -> 0x015a }
        if (r2 == 0) goto L_0x0155;
    L_0x0146:
        r2 = 0;
        if (r2 == 0) goto L_0x0150;
    L_0x0149:
        r11.streamFailed(r6);
        r11.release();
        goto L_0x0151;
    L_0x0151:
        r2 = r18;
        goto L_0x0030;
    L_0x0155:
        r2 = r0.getFirstConnectException();	 Catch:{ all -> 0x015a }
        throw r2;	 Catch:{ all -> 0x015a }
    L_0x015a:
        r0 = move-exception;
    L_0x015b:
        if (r3 == 0) goto L_0x0164;
    L_0x015d:
        r11.streamFailed(r6);
        r11.release();
        goto L_0x0165;
    L_0x0165:
        throw r0;
    L_0x0166:
        r18 = r2;
        r11.release();
        r0 = new java.io.IOException;
        r2 = "Canceled";
        r0.<init>(r2);
        throw r0;
        */
        throw new UnsupportedOperationException("Method not decompiled: okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(okhttp3.Interceptor$Chain):okhttp3.Response");
    }

    private Address createAddress(HttpUrl url) {
        RetryAndFollowUpInterceptor retryAndFollowUpInterceptor = this;
        SSLSocketFactory sslSocketFactory = null;
        HostnameVerifier hostnameVerifier = null;
        CertificatePinner certificatePinner = null;
        if (url.isHttps()) {
            sslSocketFactory = retryAndFollowUpInterceptor.client.sslSocketFactory();
            hostnameVerifier = retryAndFollowUpInterceptor.client.hostnameVerifier();
            certificatePinner = retryAndFollowUpInterceptor.client.certificatePinner();
        }
        return new Address(url.host(), url.port(), retryAndFollowUpInterceptor.client.dns(), retryAndFollowUpInterceptor.client.socketFactory(), sslSocketFactory, hostnameVerifier, certificatePinner, retryAndFollowUpInterceptor.client.proxyAuthenticator(), retryAndFollowUpInterceptor.client.proxy(), retryAndFollowUpInterceptor.client.protocols(), retryAndFollowUpInterceptor.client.connectionSpecs(), retryAndFollowUpInterceptor.client.proxySelector());
    }

    private boolean recover(IOException e, StreamAllocation streamAllocation, boolean requestSendStarted, Request userRequest) {
        streamAllocation.streamFailed(e);
        if (!this.client.retryOnConnectionFailure()) {
            return false;
        }
        if ((!requestSendStarted || !(userRequest.body() instanceof UnrepeatableRequestBody)) && isRecoverable(e, requestSendStarted) && streamAllocation.hasMoreRoutes()) {
            return true;
        }
        return false;
    }

    private boolean isRecoverable(IOException e, boolean requestSendStarted) {
        boolean z = false;
        if (e instanceof ProtocolException) {
            return false;
        }
        if (e instanceof InterruptedIOException) {
            if ((e instanceof SocketTimeoutException) && !requestSendStarted) {
                z = true;
            }
            return z;
        }
        if (e instanceof SSLHandshakeException) {
            if (e.getCause() instanceof CertificateException) {
                return false;
            }
        }
        if (e instanceof SSLPeerUnverifiedException) {
            return false;
        }
        return true;
    }

    private Request followUpRequest(Response userResponse, Route route) throws IOException {
        if (userResponse != null) {
            int responseCode = userResponse.code();
            String method = userResponse.request().method();
            RequestBody requestBody = null;
            switch (responseCode) {
                case 300:
                case 301:
                case 302:
                case 303:
                    break;
                case StatusLine.HTTP_TEMP_REDIRECT /*307*/:
                case StatusLine.HTTP_PERM_REDIRECT /*308*/:
                    if (method.equals("GET") || method.equals("HEAD")) {
                        break;
                    }
                    return null;
                case 401:
                    return this.client.authenticator().authenticate(route, userResponse);
                case 407:
                    Proxy selectedProxy;
                    if (route != null) {
                        selectedProxy = route.proxy();
                    } else {
                        selectedProxy = this.client.proxy();
                    }
                    if (selectedProxy.type() == Type.HTTP) {
                        return this.client.proxyAuthenticator().authenticate(route, userResponse);
                    }
                    throw new ProtocolException("Received HTTP_PROXY_AUTH (407) code while not using proxy");
                case 408:
                    if (!this.client.retryOnConnectionFailure() || (userResponse.request().body() instanceof UnrepeatableRequestBody)) {
                        return null;
                    }
                    if (userResponse.priorResponse() != null) {
                        if (userResponse.priorResponse().code() == 408) {
                            return null;
                        }
                    }
                    if (retryAfter(userResponse, 0) > 0) {
                        return null;
                    }
                    return userResponse.request();
                case 503:
                    if (userResponse.priorResponse() != null) {
                        if (userResponse.priorResponse().code() == 503) {
                            return null;
                        }
                    }
                    if (retryAfter(userResponse, Integer.MAX_VALUE) == 0) {
                        return userResponse.request();
                    }
                    return null;
                default:
                    return null;
            }
            if (!this.client.followRedirects()) {
                return null;
            }
            String location = userResponse.header("Location");
            if (location == null) {
                return null;
            }
            HttpUrl url = userResponse.request().url().resolve(location);
            if (url == null) {
                return null;
            }
            if (!url.scheme().equals(userResponse.request().url().scheme()) && !this.client.followSslRedirects()) {
                return null;
            }
            Builder requestBuilder = userResponse.request().newBuilder();
            if (HttpMethod.permitsRequestBody(method)) {
                boolean maintainBody = HttpMethod.redirectsWithBody(method);
                if (HttpMethod.redirectsToGet(method)) {
                    requestBuilder.method("GET", null);
                } else {
                    if (maintainBody) {
                        requestBody = userResponse.request().body();
                    }
                    requestBuilder.method(method, requestBody);
                }
                if (!maintainBody) {
                    requestBuilder.removeHeader("Transfer-Encoding");
                    requestBuilder.removeHeader("Content-Length");
                    requestBuilder.removeHeader("Content-Type");
                }
            }
            if (!sameConnection(userResponse, url)) {
                requestBuilder.removeHeader("Authorization");
            }
            return requestBuilder.url(url).build();
        }
        throw new IllegalStateException();
    }

    private int retryAfter(Response userResponse, int defaultDelay) {
        String header = userResponse.header("Retry-After");
        if (header == null) {
            return defaultDelay;
        }
        if (header.matches("\\d+")) {
            return Integer.valueOf(header).intValue();
        }
        return Integer.MAX_VALUE;
    }

    private boolean sameConnection(Response response, HttpUrl followUp) {
        HttpUrl url = response.request().url();
        if (url.host().equals(followUp.host())) {
            if (url.port() == followUp.port()) {
                if (url.scheme().equals(followUp.scheme())) {
                    return true;
                }
            }
        }
        return false;
    }
}
