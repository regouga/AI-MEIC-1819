package okhttp3.internal.connection;

import java.io.IOException;
import java.lang.ref.Reference;
import java.net.ConnectException;
import java.net.ProtocolException;
import java.net.Proxy;
import java.net.Proxy.Type;
import java.net.Socket;
import java.net.SocketException;
import java.net.SocketTimeoutException;
import java.net.UnknownServiceException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nullable;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocket;
import okhttp3.Address;
import okhttp3.Call;
import okhttp3.CertificatePinner;
import okhttp3.Connection;
import okhttp3.ConnectionPool;
import okhttp3.ConnectionSpec;
import okhttp3.EventListener;
import okhttp3.Handshake;
import okhttp3.HttpUrl;
import okhttp3.Interceptor.Chain;
import okhttp3.OkHttpClient;
import okhttp3.Protocol;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.Route;
import okhttp3.internal.Internal;
import okhttp3.internal.Util;
import okhttp3.internal.Version;
import okhttp3.internal.http.HttpCodec;
import okhttp3.internal.http.HttpHeaders;
import okhttp3.internal.http1.Http1Codec;
import okhttp3.internal.http2.ErrorCode;
import okhttp3.internal.http2.Http2Codec;
import okhttp3.internal.http2.Http2Connection;
import okhttp3.internal.http2.Http2Connection.Builder;
import okhttp3.internal.http2.Http2Connection.Listener;
import okhttp3.internal.http2.Http2Stream;
import okhttp3.internal.platform.Platform;
import okhttp3.internal.tls.OkHostnameVerifier;
import okhttp3.internal.ws.RealWebSocket.Streams;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Okio;
import okio.Source;
import org.apache.cordova.networkinformation.NetworkManager;

public final class RealConnection extends Listener implements Connection {
    private static final int MAX_TUNNEL_ATTEMPTS = 21;
    private static final String NPE_THROW_WITH_NULL = "throw with null exception";
    public int allocationLimit = 1;
    public final List<Reference<StreamAllocation>> allocations = new ArrayList();
    private final ConnectionPool connectionPool;
    private Handshake handshake;
    private Http2Connection http2Connection;
    public long idleAtNanos = Long.MAX_VALUE;
    public boolean noNewStreams;
    private Protocol protocol;
    private Socket rawSocket;
    private final Route route;
    private BufferedSink sink;
    private Socket socket;
    private BufferedSource source;
    public int successCount;

    public RealConnection(ConnectionPool connectionPool, Route route) {
        this.connectionPool = connectionPool;
        this.route = route;
    }

    public static RealConnection testConnection(ConnectionPool connectionPool, Route route, Socket socket, long idleAtNanos) {
        RealConnection result = new RealConnection(connectionPool, route);
        result.socket = socket;
        result.idleAtNanos = idleAtNanos;
        return result;
    }

    public void connect(int connectTimeout, int readTimeout, int writeTimeout, int pingIntervalMillis, boolean connectionRetryEnabled, Call call, EventListener eventListener) {
        Exception routeException;
        Call call2 = call;
        EventListener eventListener2 = eventListener;
        int i;
        int i2;
        int i3;
        if (this.protocol == null) {
            List<ConnectionSpec> connectionSpecs = r7.route.address().connectionSpecs();
            ConnectionSpecSelector connectionSpecSelector = new ConnectionSpecSelector(connectionSpecs);
            if (r7.route.address().sslSocketFactory() == null) {
                if (connectionSpecs.contains(ConnectionSpec.CLEARTEXT)) {
                    String host = r7.route.address().url().host();
                    if (!Platform.get().isCleartextTrafficPermitted(host)) {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("CLEARTEXT communication to ");
                        stringBuilder.append(host);
                        stringBuilder.append(" not permitted by network security policy");
                        throw new RouteException(new UnknownServiceException(stringBuilder.toString()));
                    }
                } else {
                    throw new RouteException(new UnknownServiceException("CLEARTEXT communication not enabled for client"));
                }
            } else if (r7.route.address().protocols().contains(Protocol.H2_PRIOR_KNOWLEDGE)) {
                i = connectTimeout;
                i2 = readTimeout;
                i3 = pingIntervalMillis;
                throw new RouteException(new UnknownServiceException("H2_PRIOR_KNOWLEDGE cannot be used with HTTPS"));
            }
            RouteException routeException2 = null;
            while (true) {
                try {
                    if (r7.route.requiresTunnel()) {
                        connectTunnel(connectTimeout, readTimeout, writeTimeout, call, eventListener);
                        if (r7.rawSocket == null) {
                            break;
                        }
                        i = connectTimeout;
                        i2 = readTimeout;
                    } else {
                        try {
                            connectSocket(connectTimeout, readTimeout, call2, eventListener2);
                        } catch (IOException e) {
                            routeException = e;
                            i3 = pingIntervalMillis;
                            Util.closeQuietly(r7.socket);
                            Util.closeQuietly(r7.rawSocket);
                            r7.socket = null;
                            r7.rawSocket = null;
                            r7.source = null;
                            r7.sink = null;
                            r7.handshake = null;
                            r7.protocol = null;
                            r7.http2Connection = null;
                            eventListener.connectFailed(call, r7.route.socketAddress(), r7.route.proxy(), null, routeException);
                            if (routeException2 != null) {
                                routeException2.addConnectException(routeException);
                            } else {
                                routeException2 = new RouteException(routeException);
                            }
                            if (!connectionRetryEnabled) {
                                break;
                            }
                            break;
                            throw routeException2;
                        }
                    }
                    try {
                        establishProtocol(connectionSpecSelector, pingIntervalMillis, call2, eventListener2);
                        eventListener2.connectEnd(call2, r7.route.socketAddress(), r7.route.proxy(), r7.protocol);
                        break;
                    } catch (IOException e2) {
                        routeException = e2;
                    }
                } catch (IOException e3) {
                    routeException = e3;
                    i = connectTimeout;
                    i2 = readTimeout;
                    i3 = pingIntervalMillis;
                    Util.closeQuietly(r7.socket);
                    Util.closeQuietly(r7.rawSocket);
                    r7.socket = null;
                    r7.rawSocket = null;
                    r7.source = null;
                    r7.sink = null;
                    r7.handshake = null;
                    r7.protocol = null;
                    r7.http2Connection = null;
                    eventListener.connectFailed(call, r7.route.socketAddress(), r7.route.proxy(), null, routeException);
                    if (routeException2 != null) {
                        routeException2 = new RouteException(routeException);
                    } else {
                        routeException2.addConnectException(routeException);
                    }
                    if (!connectionRetryEnabled || !connectionSpecSelector.connectionFailed(routeException)) {
                        throw routeException2;
                    }
                }
            }
            i = connectTimeout;
            i2 = readTimeout;
            i3 = pingIntervalMillis;
            if (r7.route.requiresTunnel()) {
                if (r7.rawSocket == null) {
                    throw new RouteException(new ProtocolException("Too many tunnel connections attempted: 21"));
                }
            }
            if (r7.http2Connection != null) {
                synchronized (r7.connectionPool) {
                    r7.allocationLimit = r7.http2Connection.maxConcurrentStreams();
                }
                return;
            }
            return;
        }
        i = connectTimeout;
        i2 = readTimeout;
        i3 = pingIntervalMillis;
        throw new IllegalStateException("already connected");
    }

    private void connectTunnel(int connectTimeout, int readTimeout, int writeTimeout, Call call, EventListener eventListener) throws IOException {
        Request tunnelRequest = createTunnelRequest();
        HttpUrl url = tunnelRequest.url();
        int i = 0;
        while (i < 21) {
            connectSocket(connectTimeout, readTimeout, call, eventListener);
            tunnelRequest = createTunnel(readTimeout, writeTimeout, tunnelRequest, url);
            if (tunnelRequest != null) {
                Util.closeQuietly(this.rawSocket);
                this.rawSocket = null;
                this.sink = null;
                this.source = null;
                eventListener.connectEnd(call, this.route.socketAddress(), this.route.proxy(), null);
                i++;
            } else {
                return;
            }
        }
    }

    private void connectSocket(int connectTimeout, int readTimeout, Call call, EventListener eventListener) throws IOException {
        Socket socket;
        Proxy proxy = this.route.proxy();
        Address address = this.route.address();
        if (proxy.type() != Type.DIRECT) {
            if (proxy.type() != Type.HTTP) {
                socket = new Socket(proxy);
                this.rawSocket = socket;
                eventListener.connectStart(call, this.route.socketAddress(), proxy);
                this.rawSocket.setSoTimeout(readTimeout);
                Platform.get().connectSocket(this.rawSocket, this.route.socketAddress(), connectTimeout);
                this.source = Okio.buffer(Okio.source(this.rawSocket));
                this.sink = Okio.buffer(Okio.sink(this.rawSocket));
            }
        }
        socket = address.socketFactory().createSocket();
        this.rawSocket = socket;
        eventListener.connectStart(call, this.route.socketAddress(), proxy);
        this.rawSocket.setSoTimeout(readTimeout);
        try {
            Platform.get().connectSocket(this.rawSocket, this.route.socketAddress(), connectTimeout);
            try {
                this.source = Okio.buffer(Okio.source(this.rawSocket));
                this.sink = Okio.buffer(Okio.sink(this.rawSocket));
            } catch (NullPointerException npe) {
                if (NPE_THROW_WITH_NULL.equals(npe.getMessage())) {
                    throw new IOException(npe);
                }
            }
        } catch (ConnectException e) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to connect to ");
            stringBuilder.append(this.route.socketAddress());
            ConnectException ce = new ConnectException(stringBuilder.toString());
            ce.initCause(e);
            throw ce;
        }
    }

    private void establishProtocol(ConnectionSpecSelector connectionSpecSelector, int pingIntervalMillis, Call call, EventListener eventListener) throws IOException {
        if (this.route.address().sslSocketFactory() != null) {
            eventListener.secureConnectStart(call);
            connectTls(connectionSpecSelector);
            eventListener.secureConnectEnd(call, this.handshake);
            if (this.protocol == Protocol.HTTP_2) {
                startHttp2(pingIntervalMillis);
            }
        } else if (this.route.address().protocols().contains(Protocol.H2_PRIOR_KNOWLEDGE)) {
            this.socket = this.rawSocket;
            this.protocol = Protocol.H2_PRIOR_KNOWLEDGE;
            startHttp2(pingIntervalMillis);
        } else {
            this.socket = this.rawSocket;
            this.protocol = Protocol.HTTP_1_1;
        }
    }

    private void startHttp2(int pingIntervalMillis) throws IOException {
        this.socket.setSoTimeout(0);
        this.http2Connection = new Builder(true).socket(this.socket, this.route.address().url().host(), this.source, this.sink).listener(this).pingIntervalMillis(pingIntervalMillis).build();
        this.http2Connection.start();
    }

    private void connectTls(ConnectionSpecSelector connectionSpecSelector) throws IOException {
        Address address = this.route.address();
        Socket sslSocket = null;
        try {
            sslSocket = (SSLSocket) address.sslSocketFactory().createSocket(this.rawSocket, address.url().host(), address.url().port(), true);
            ConnectionSpec connectionSpec = connectionSpecSelector.configureSecureSocket(sslSocket);
            if (connectionSpec.supportsTlsExtensions()) {
                Platform.get().configureTlsExtensions(sslSocket, address.url().host(), address.protocols());
            }
            sslSocket.startHandshake();
            SSLSession sslSocketSession = sslSocket.getSession();
            Handshake unverifiedHandshake = Handshake.get(sslSocketSession);
            if (address.hostnameVerifier().verify(address.url().host(), sslSocketSession)) {
                String maybeProtocol;
                Protocol protocol;
                address.certificatePinner().check(address.url().host(), unverifiedHandshake.peerCertificates());
                if (connectionSpec.supportsTlsExtensions()) {
                    maybeProtocol = Platform.get().getSelectedProtocol(sslSocket);
                } else {
                    maybeProtocol = null;
                }
                this.socket = sslSocket;
                this.source = Okio.buffer(Okio.source(this.socket));
                this.sink = Okio.buffer(Okio.sink(this.socket));
                this.handshake = unverifiedHandshake;
                if (maybeProtocol != null) {
                    protocol = Protocol.get(maybeProtocol);
                } else {
                    protocol = Protocol.HTTP_1_1;
                }
                this.protocol = protocol;
                if (sslSocket != null) {
                    Platform.get().afterHandshake(sslSocket);
                }
                if (!true) {
                    Util.closeQuietly(sslSocket);
                    return;
                }
                return;
            }
            X509Certificate cert = (X509Certificate) unverifiedHandshake.peerCertificates().get(0);
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Hostname ");
            stringBuilder.append(address.url().host());
            stringBuilder.append(" not verified:\n    certificate: ");
            stringBuilder.append(CertificatePinner.pin(cert));
            stringBuilder.append("\n    DN: ");
            stringBuilder.append(cert.getSubjectDN().getName());
            stringBuilder.append("\n    subjectAltNames: ");
            stringBuilder.append(OkHostnameVerifier.allSubjectAltNames(cert));
            throw new SSLPeerUnverifiedException(stringBuilder.toString());
        } catch (AssertionError e) {
            if (Util.isAndroidGetsocknameError(e)) {
                throw new IOException(e);
            }
            throw e;
        } catch (Throwable th) {
            if (sslSocket != null) {
                Platform.get().afterHandshake(sslSocket);
            }
            if (!false) {
                Util.closeQuietly(sslSocket);
            }
        }
    }

    private Request createTunnel(int readTimeout, int writeTimeout, Request tunnelRequest, HttpUrl url) throws IOException {
        String requestLine = new StringBuilder();
        requestLine.append("CONNECT ");
        requestLine.append(Util.hostHeader(url, true));
        requestLine.append(" HTTP/1.1");
        requestLine = requestLine.toString();
        while (true) {
            Http1Codec tunnelConnection = new Http1Codec(null, null, this.source, this.sink);
            this.source.timeout().timeout((long) readTimeout, TimeUnit.MILLISECONDS);
            this.sink.timeout().timeout((long) writeTimeout, TimeUnit.MILLISECONDS);
            tunnelConnection.writeRequest(tunnelRequest.headers(), requestLine);
            tunnelConnection.finishRequest();
            Response response = tunnelConnection.readResponseHeaders(false).request(tunnelRequest).build();
            long contentLength = HttpHeaders.contentLength(response);
            if (contentLength == -1) {
                contentLength = 0;
            }
            Source body = tunnelConnection.newFixedLengthSource(contentLength);
            Util.skipAll(body, Integer.MAX_VALUE, TimeUnit.MILLISECONDS);
            body.close();
            int code = response.code();
            if (code == 200) {
                break;
            } else if (code == 407) {
                tunnelRequest = this.route.address().proxyAuthenticator().authenticate(this.route, response);
                if (tunnelRequest == null) {
                    throw new IOException("Failed to authenticate with proxy");
                } else if ("close".equalsIgnoreCase(response.header("Connection"))) {
                    return tunnelRequest;
                }
            } else {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Unexpected response code for CONNECT: ");
                stringBuilder.append(response.code());
                throw new IOException(stringBuilder.toString());
            }
        }
        if (this.source.buffer().exhausted() && this.sink.buffer().exhausted()) {
            return null;
        }
        throw new IOException("TLS tunnel buffered too many bytes!");
    }

    private Request createTunnelRequest() throws IOException {
        Request proxyConnectRequest = new Request.Builder().url(this.route.address().url()).method("CONNECT", null).header("Host", Util.hostHeader(this.route.address().url(), true)).header("Proxy-Connection", "Keep-Alive").header("User-Agent", Version.userAgent()).build();
        Request authenticatedRequest = this.route.address().proxyAuthenticator().authenticate(this.route, new Response.Builder().request(proxyConnectRequest).protocol(Protocol.HTTP_1_1).code(407).message("Preemptive Authenticate").body(Util.EMPTY_RESPONSE).sentRequestAtMillis(-1).receivedResponseAtMillis(-1).header("Proxy-Authenticate", "OkHttp-Preemptive").build());
        if (authenticatedRequest != null) {
            return authenticatedRequest;
        }
        return proxyConnectRequest;
    }

    public boolean isEligible(Address address, @Nullable Route route) {
        if (this.allocations.size() < this.allocationLimit) {
            if (!this.noNewStreams) {
                if (!Internal.instance.equalsNonHost(this.route.address(), address)) {
                    return false;
                }
                if (address.url().host().equals(route().address().url().host())) {
                    return true;
                }
                if (this.http2Connection == null || route == null || route.proxy().type() != Type.DIRECT || this.route.proxy().type() != Type.DIRECT || !this.route.socketAddress().equals(route.socketAddress()) || route.address().hostnameVerifier() != OkHostnameVerifier.INSTANCE || !supportsUrl(address.url())) {
                    return false;
                }
                try {
                    address.certificatePinner().check(address.url().host(), handshake().peerCertificates());
                    return true;
                } catch (SSLPeerUnverifiedException e) {
                    return false;
                }
            }
        }
        return false;
    }

    public boolean supportsUrl(HttpUrl url) {
        if (url.port() != this.route.address().url().port()) {
            return false;
        }
        boolean z = true;
        if (url.host().equals(this.route.address().url().host())) {
            return true;
        }
        if (this.handshake == null || !OkHostnameVerifier.INSTANCE.verify(url.host(), (X509Certificate) this.handshake.peerCertificates().get(0))) {
            z = false;
        }
        return z;
    }

    public HttpCodec newCodec(OkHttpClient client, Chain chain, StreamAllocation streamAllocation) throws SocketException {
        Http2Connection http2Connection = this.http2Connection;
        if (http2Connection != null) {
            return new Http2Codec(client, chain, streamAllocation, http2Connection);
        }
        this.socket.setSoTimeout(chain.readTimeoutMillis());
        this.source.timeout().timeout((long) chain.readTimeoutMillis(), TimeUnit.MILLISECONDS);
        this.sink.timeout().timeout((long) chain.writeTimeoutMillis(), TimeUnit.MILLISECONDS);
        return new Http1Codec(client, streamAllocation, this.source, this.sink);
    }

    public Streams newWebSocketStreams(StreamAllocation streamAllocation) {
        final StreamAllocation streamAllocation2 = streamAllocation;
        return new Streams(true, this.source, this.sink) {
            public void close() throws IOException {
                StreamAllocation streamAllocation = streamAllocation2;
                streamAllocation.streamFinished(true, streamAllocation.codec(), -1, null);
            }
        };
    }

    public Route route() {
        return this.route;
    }

    public void cancel() {
        Util.closeQuietly(this.rawSocket);
    }

    public Socket socket() {
        return this.socket;
    }

    public boolean isHealthy(boolean doExtensiveChecks) {
        if (!(this.socket.isClosed() || this.socket.isInputShutdown())) {
            if (!this.socket.isOutputShutdown()) {
                Http2Connection http2Connection = this.http2Connection;
                if (http2Connection != null) {
                    return http2Connection.isShutdown() ^ true;
                }
                if (!doExtensiveChecks) {
                    return true;
                }
                int readTimeout;
                try {
                    readTimeout = this.socket.getSoTimeout();
                    this.socket.setSoTimeout(1);
                    if (this.source.exhausted()) {
                        this.socket.setSoTimeout(readTimeout);
                        return false;
                    }
                    this.socket.setSoTimeout(readTimeout);
                    return true;
                } catch (SocketTimeoutException e) {
                } catch (IOException e2) {
                    return false;
                } catch (Throwable th) {
                    this.socket.setSoTimeout(readTimeout);
                }
            }
        }
        return false;
    }

    public void onStream(Http2Stream stream) throws IOException {
        stream.close(ErrorCode.REFUSED_STREAM);
    }

    public void onSettings(Http2Connection connection) {
        synchronized (this.connectionPool) {
            this.allocationLimit = connection.maxConcurrentStreams();
        }
    }

    public Handshake handshake() {
        return this.handshake;
    }

    public boolean isMultiplexed() {
        return this.http2Connection != null;
    }

    public Protocol protocol() {
        return this.protocol;
    }

    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Connection{");
        stringBuilder.append(this.route.address().url().host());
        stringBuilder.append(":");
        stringBuilder.append(this.route.address().url().port());
        stringBuilder.append(", proxy=");
        stringBuilder.append(this.route.proxy());
        stringBuilder.append(" hostAddress=");
        stringBuilder.append(this.route.socketAddress());
        stringBuilder.append(" cipherSuite=");
        Handshake handshake = this.handshake;
        stringBuilder.append(handshake != null ? handshake.cipherSuite() : NetworkManager.TYPE_NONE);
        stringBuilder.append(" protocol=");
        stringBuilder.append(this.protocol);
        stringBuilder.append('}');
        return stringBuilder.toString();
    }
}
