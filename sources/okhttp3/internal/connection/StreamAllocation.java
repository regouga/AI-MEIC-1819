package okhttp3.internal.connection;

import java.io.IOException;
import java.lang.ref.Reference;
import java.lang.ref.WeakReference;
import java.net.Socket;
import java.util.List;
import okhttp3.Address;
import okhttp3.Call;
import okhttp3.Connection;
import okhttp3.ConnectionPool;
import okhttp3.EventListener;
import okhttp3.Interceptor.Chain;
import okhttp3.OkHttpClient;
import okhttp3.Route;
import okhttp3.internal.Internal;
import okhttp3.internal.Util;
import okhttp3.internal.connection.RouteSelector.Selection;
import okhttp3.internal.http.HttpCodec;
import okhttp3.internal.http2.ConnectionShutdownException;
import okhttp3.internal.http2.ErrorCode;
import okhttp3.internal.http2.StreamResetException;

public final class StreamAllocation {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    public final Address address;
    public final Call call;
    private final Object callStackTrace;
    private boolean canceled;
    private HttpCodec codec;
    private RealConnection connection;
    private final ConnectionPool connectionPool;
    public final EventListener eventListener;
    private int refusedStreamCount;
    private boolean released;
    private boolean reportedAcquired;
    private Route route;
    private Selection routeSelection;
    private final RouteSelector routeSelector;

    public static final class StreamAllocationReference extends WeakReference<StreamAllocation> {
        public final Object callStackTrace;

        StreamAllocationReference(StreamAllocation referent, Object callStackTrace) {
            super(referent);
            this.callStackTrace = callStackTrace;
        }
    }

    public StreamAllocation(ConnectionPool connectionPool, Address address, Call call, EventListener eventListener, Object callStackTrace) {
        this.connectionPool = connectionPool;
        this.address = address;
        this.call = call;
        this.eventListener = eventListener;
        this.routeSelector = new RouteSelector(address, routeDatabase(), call, eventListener);
        this.callStackTrace = callStackTrace;
    }

    public HttpCodec newStream(OkHttpClient client, Chain chain, boolean doExtensiveHealthChecks) {
        try {
            HttpCodec resultCodec = findHealthyConnection(chain.connectTimeoutMillis(), chain.readTimeoutMillis(), chain.writeTimeoutMillis(), client.pingIntervalMillis(), client.retryOnConnectionFailure(), doExtensiveHealthChecks).newCodec(client, chain, this);
            synchronized (this.connectionPool) {
                this.codec = resultCodec;
            }
            return resultCodec;
        } catch (IOException e) {
            throw new RouteException(e);
        }
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    private okhttp3.internal.connection.RealConnection findHealthyConnection(int r4, int r5, int r6, int r7, boolean r8, boolean r9) throws java.io.IOException {
        /*
        r3 = this;
    L_0x0000:
        r0 = r3.findConnection(r4, r5, r6, r7, r8);
        r1 = r3.connectionPool;
        monitor-enter(r1);
        r2 = r0.successCount;	 Catch:{ all -> 0x0019 }
        if (r2 != 0) goto L_0x000d;
    L_0x000b:
        monitor-exit(r1);	 Catch:{ all -> 0x0019 }
        return r0;
    L_0x000d:
        monitor-exit(r1);	 Catch:{ all -> 0x0019 }
        r1 = r0.isHealthy(r9);
        if (r1 != 0) goto L_0x0018;
    L_0x0014:
        r3.noNewStreams();
        goto L_0x0000;
    L_0x0018:
        return r0;
    L_0x0019:
        r2 = move-exception;
        monitor-exit(r1);	 Catch:{ all -> 0x0019 }
        throw r2;
        */
        throw new UnsupportedOperationException("Method not decompiled: okhttp3.internal.connection.StreamAllocation.findHealthyConnection(int, int, int, int, boolean, boolean):okhttp3.internal.connection.RealConnection");
    }

    private RealConnection findConnection(int connectTimeout, int readTimeout, int writeTimeout, int pingIntervalMillis, boolean connectionRetryEnabled) throws IOException {
        Socket toClose;
        Connection releasedConnection;
        boolean foundPooledConnection = false;
        RealConnection result = null;
        Route selectedRoute = null;
        synchronized (this.connectionPool) {
            if (r1.released) {
                throw new IllegalStateException("released");
            } else if (r1.codec != null) {
                throw new IllegalStateException("codec != null");
            } else if (r1.canceled) {
                throw new IOException("Canceled");
            } else {
                Connection releasedConnection2 = r1.connection;
                toClose = releaseIfNoNewStreams();
                if (r1.connection != null) {
                    result = r1.connection;
                    releasedConnection2 = null;
                }
                if (r1.reportedAcquired) {
                    releasedConnection = releasedConnection2;
                } else {
                    releasedConnection = null;
                }
                if (result == null) {
                    Internal.instance.get(r1.connectionPool, r1.address, r1, null);
                    if (r1.connection != null) {
                        foundPooledConnection = true;
                        result = r1.connection;
                    } else {
                        selectedRoute = r1.route;
                    }
                }
            }
        }
        Util.closeQuietly(toClose);
        if (releasedConnection != null) {
            r1.eventListener.connectionReleased(r1.call, releasedConnection);
        }
        if (foundPooledConnection) {
            r1.eventListener.connectionAcquired(r1.call, result);
        }
        if (result != null) {
            return result;
        }
        boolean newRouteSelection;
        List<Route> routes;
        int size;
        int i;
        Route route;
        Socket socket;
        if (selectedRoute == null) {
            Selection selection = r1.routeSelection;
            if (selection == null || !selection.hasNext()) {
                r1.routeSelection = r1.routeSelector.next();
                newRouteSelection = true;
                synchronized (r1.connectionPool) {
                    if (r1.canceled) {
                        if (newRouteSelection) {
                            routes = r1.routeSelection.getAll();
                            size = routes.size();
                            for (i = 0; i < size; i++) {
                                route = (Route) routes.get(i);
                                Internal.instance.get(r1.connectionPool, r1.address, r1, route);
                                if (r1.connection != null) {
                                    foundPooledConnection = true;
                                    result = r1.connection;
                                    r1.route = route;
                                    break;
                                }
                            }
                        }
                        if (!foundPooledConnection) {
                            if (selectedRoute == null) {
                                selectedRoute = r1.routeSelection.next();
                            }
                            r1.route = selectedRoute;
                            r1.refusedStreamCount = 0;
                            result = new RealConnection(r1.connectionPool, selectedRoute);
                            acquire(result, false);
                        }
                    } else {
                        throw new IOException("Canceled");
                    }
                }
                if (foundPooledConnection) {
                    result.connect(connectTimeout, readTimeout, writeTimeout, pingIntervalMillis, connectionRetryEnabled, r1.call, r1.eventListener);
                    routeDatabase().connected(result.route());
                    socket = null;
                    synchronized (r1.connectionPool) {
                        r1.reportedAcquired = true;
                        Internal.instance.put(r1.connectionPool, result);
                        if (result.isMultiplexed()) {
                            socket = Internal.instance.deduplicate(r1.connectionPool, r1.address, r1);
                            result = r1.connection;
                        }
                    }
                    Util.closeQuietly(socket);
                    r1.eventListener.connectionAcquired(r1.call, result);
                    return result;
                }
                r1.eventListener.connectionAcquired(r1.call, result);
                return result;
            }
        }
        newRouteSelection = false;
        synchronized (r1.connectionPool) {
            if (r1.canceled) {
                throw new IOException("Canceled");
            }
            if (newRouteSelection) {
                routes = r1.routeSelection.getAll();
                size = routes.size();
                for (i = 0; i < size; i++) {
                    route = (Route) routes.get(i);
                    Internal.instance.get(r1.connectionPool, r1.address, r1, route);
                    if (r1.connection != null) {
                        foundPooledConnection = true;
                        result = r1.connection;
                        r1.route = route;
                        break;
                    }
                }
            }
            if (!foundPooledConnection) {
                if (selectedRoute == null) {
                    selectedRoute = r1.routeSelection.next();
                }
                r1.route = selectedRoute;
                r1.refusedStreamCount = 0;
                result = new RealConnection(r1.connectionPool, selectedRoute);
                acquire(result, false);
            }
        }
        if (foundPooledConnection) {
            result.connect(connectTimeout, readTimeout, writeTimeout, pingIntervalMillis, connectionRetryEnabled, r1.call, r1.eventListener);
            routeDatabase().connected(result.route());
            socket = null;
            synchronized (r1.connectionPool) {
                r1.reportedAcquired = true;
                Internal.instance.put(r1.connectionPool, result);
                if (result.isMultiplexed()) {
                    socket = Internal.instance.deduplicate(r1.connectionPool, r1.address, r1);
                    result = r1.connection;
                }
            }
            Util.closeQuietly(socket);
            r1.eventListener.connectionAcquired(r1.call, result);
            return result;
        }
        r1.eventListener.connectionAcquired(r1.call, result);
        return result;
    }

    private Socket releaseIfNoNewStreams() {
        RealConnection allocatedConnection = this.connection;
        if (allocatedConnection == null || !allocatedConnection.noNewStreams) {
            return null;
        }
        return deallocate(false, false, true);
    }

    public void streamFinished(boolean noNewStreams, HttpCodec codec, long bytesRead, IOException e) {
        Socket socket;
        this.eventListener.responseBodyEnd(this.call, bytesRead);
        synchronized (this.connectionPool) {
            if (codec != null) {
                if (codec == this.codec) {
                    if (!noNewStreams) {
                        RealConnection realConnection = this.connection;
                        realConnection.successCount++;
                    }
                    Connection releasedConnection = this.connection;
                    socket = deallocate(noNewStreams, false, true);
                    if (this.connection != null) {
                        releasedConnection = null;
                    }
                    boolean callEnd = this.released;
                }
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("expected ");
            stringBuilder.append(this.codec);
            stringBuilder.append(" but was ");
            stringBuilder.append(codec);
            throw new IllegalStateException(stringBuilder.toString());
        }
        Util.closeQuietly(socket);
        if (releasedConnection != null) {
            this.eventListener.connectionReleased(this.call, releasedConnection);
        }
        if (e != null) {
            this.eventListener.callFailed(this.call, Internal.instance.timeoutExit(this.call, e));
        } else if (callEnd) {
            Internal.instance.timeoutExit(this.call, null);
            this.eventListener.callEnd(this.call);
        }
    }

    public HttpCodec codec() {
        HttpCodec httpCodec;
        synchronized (this.connectionPool) {
            httpCodec = this.codec;
        }
        return httpCodec;
    }

    private RouteDatabase routeDatabase() {
        return Internal.instance.routeDatabase(this.connectionPool);
    }

    public Route route() {
        return this.route;
    }

    public synchronized RealConnection connection() {
        return this.connection;
    }

    public void release() {
        Socket socket;
        synchronized (this.connectionPool) {
            Connection releasedConnection = this.connection;
            socket = deallocate(false, true, false);
            if (this.connection != null) {
                releasedConnection = null;
            }
        }
        Util.closeQuietly(socket);
        if (releasedConnection != null) {
            Internal.instance.timeoutExit(this.call, null);
            this.eventListener.connectionReleased(this.call, releasedConnection);
            this.eventListener.callEnd(this.call);
        }
    }

    public void noNewStreams() {
        Socket socket;
        synchronized (this.connectionPool) {
            Connection releasedConnection = this.connection;
            socket = deallocate(true, false, false);
            if (this.connection != null) {
                releasedConnection = null;
            }
        }
        Util.closeQuietly(socket);
        if (releasedConnection != null) {
            this.eventListener.connectionReleased(this.call, releasedConnection);
        }
    }

    private Socket deallocate(boolean noNewStreams, boolean released, boolean streamFinished) {
        if (streamFinished) {
            this.codec = null;
        }
        if (released) {
            this.released = true;
        }
        Socket socket = null;
        RealConnection realConnection = this.connection;
        if (realConnection != null) {
            if (noNewStreams) {
                realConnection.noNewStreams = true;
            }
            if (this.codec == null && (this.released || this.connection.noNewStreams)) {
                release(this.connection);
                if (this.connection.allocations.isEmpty()) {
                    this.connection.idleAtNanos = System.nanoTime();
                    if (Internal.instance.connectionBecameIdle(this.connectionPool, this.connection)) {
                        socket = this.connection.socket();
                    }
                }
                this.connection = null;
            }
        }
        return socket;
    }

    public void cancel() {
        synchronized (this.connectionPool) {
            this.canceled = true;
            HttpCodec codecToCancel = this.codec;
            RealConnection connectionToCancel = this.connection;
        }
        if (codecToCancel != null) {
            codecToCancel.cancel();
        } else if (connectionToCancel != null) {
            connectionToCancel.cancel();
        }
    }

    public void streamFailed(IOException e) {
        Connection releasedConnection;
        Socket socket;
        boolean noNewStreams = false;
        synchronized (this.connectionPool) {
            if (e instanceof StreamResetException) {
                ErrorCode errorCode = ((StreamResetException) e).errorCode;
                if (errorCode == ErrorCode.REFUSED_STREAM) {
                    this.refusedStreamCount++;
                    if (this.refusedStreamCount > 1) {
                        noNewStreams = true;
                        this.route = null;
                    }
                } else if (errorCode != ErrorCode.CANCEL) {
                    noNewStreams = true;
                    this.route = null;
                }
            } else if (this.connection != null) {
                if (this.connection.isMultiplexed()) {
                    if (!(e instanceof ConnectionShutdownException)) {
                        releasedConnection = this.connection;
                        socket = deallocate(noNewStreams, null, true);
                        if (!(this.connection == null && this.reportedAcquired)) {
                            releasedConnection = null;
                        }
                    }
                }
                noNewStreams = true;
                if (this.connection.successCount == 0) {
                    if (this.route != null && e != null) {
                        this.routeSelector.connectFailed(this.route, e);
                    }
                    this.route = null;
                }
                releasedConnection = this.connection;
                socket = deallocate(noNewStreams, null, true);
                releasedConnection = null;
            }
            releasedConnection = this.connection;
            socket = deallocate(noNewStreams, null, true);
            releasedConnection = null;
        }
        Util.closeQuietly(socket);
        if (releasedConnection != null) {
            this.eventListener.connectionReleased(this.call, releasedConnection);
        }
    }

    public void acquire(RealConnection connection, boolean reportedAcquired) {
        if (this.connection == null) {
            this.connection = connection;
            this.reportedAcquired = reportedAcquired;
            connection.allocations.add(new StreamAllocationReference(this, this.callStackTrace));
            return;
        }
        throw new IllegalStateException();
    }

    private void release(RealConnection connection) {
        int size = connection.allocations.size();
        for (int i = 0; i < size; i++) {
            if (((Reference) connection.allocations.get(i)).get() == this) {
                connection.allocations.remove(i);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public Socket releaseAndAcquire(RealConnection newConnection) {
        if (this.codec == null && this.connection.allocations.size() == 1) {
            Reference<StreamAllocation> onlyAllocation = (Reference) this.connection.allocations.get(0);
            Socket socket = deallocate(true, false, false);
            this.connection = newConnection;
            newConnection.allocations.add(onlyAllocation);
            return socket;
        }
        throw new IllegalStateException();
    }

    public boolean hasMoreRoutes() {
        if (this.route == null) {
            Selection selection = this.routeSelection;
            if (selection != null) {
                if (selection.hasNext()) {
                }
            }
            if (!this.routeSelector.hasNext()) {
                return false;
            }
        }
        return true;
    }

    public String toString() {
        RealConnection connection = connection();
        return connection != null ? connection.toString() : this.address.toString();
    }
}
