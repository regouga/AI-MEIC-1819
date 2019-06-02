package okhttp3;

import java.lang.ref.Reference;
import java.net.Socket;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nullable;
import okhttp3.internal.Util;
import okhttp3.internal.connection.RealConnection;
import okhttp3.internal.connection.RouteDatabase;
import okhttp3.internal.connection.StreamAllocation;
import okhttp3.internal.connection.StreamAllocation.StreamAllocationReference;
import okhttp3.internal.platform.Platform;

public final class ConnectionPool {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    private static final Executor executor = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60, TimeUnit.SECONDS, new SynchronousQueue(), Util.threadFactory("OkHttp ConnectionPool", true));
    private final Runnable cleanupRunnable;
    boolean cleanupRunning;
    private final Deque<RealConnection> connections;
    private final long keepAliveDurationNs;
    private final int maxIdleConnections;
    final RouteDatabase routeDatabase;

    /* renamed from: okhttp3.ConnectionPool$1 */
    class C02451 implements Runnable {
        C02451() {
        }

        public void run() {
            while (true) {
                long waitNanos = ConnectionPool.this.cleanup(System.nanoTime());
                if (waitNanos != -1) {
                    if (waitNanos > 0) {
                        long waitMillis = waitNanos / 1000000;
                        long waitNanos2 = waitNanos - (1000000 * waitMillis);
                        synchronized (ConnectionPool.this) {
                            try {
                                ConnectionPool.this.wait(waitMillis, (int) waitNanos2);
                            } catch (InterruptedException e) {
                            }
                        }
                    }
                } else {
                    return;
                }
            }
        }
    }

    public ConnectionPool() {
        this(5, 5, TimeUnit.MINUTES);
    }

    public ConnectionPool(int maxIdleConnections, long keepAliveDuration, TimeUnit timeUnit) {
        this.cleanupRunnable = new C02451();
        this.connections = new ArrayDeque();
        this.routeDatabase = new RouteDatabase();
        this.maxIdleConnections = maxIdleConnections;
        this.keepAliveDurationNs = timeUnit.toNanos(keepAliveDuration);
        if (keepAliveDuration <= 0) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("keepAliveDuration <= 0: ");
            stringBuilder.append(keepAliveDuration);
            throw new IllegalArgumentException(stringBuilder.toString());
        }
    }

    public synchronized int idleConnectionCount() {
        int total;
        total = 0;
        for (RealConnection connection : this.connections) {
            if (connection.allocations.isEmpty()) {
                total++;
            }
        }
        return total;
    }

    public synchronized int connectionCount() {
        return this.connections.size();
    }

    @Nullable
    RealConnection get(Address address, StreamAllocation streamAllocation, Route route) {
        for (RealConnection connection : this.connections) {
            if (connection.isEligible(address, route)) {
                streamAllocation.acquire(connection, true);
                return connection;
            }
        }
        return null;
    }

    @Nullable
    Socket deduplicate(Address address, StreamAllocation streamAllocation) {
        for (RealConnection connection : this.connections) {
            if (connection.isEligible(address, null)) {
                if (connection.isMultiplexed()) {
                    if (connection != streamAllocation.connection()) {
                        return streamAllocation.releaseAndAcquire(connection);
                    }
                }
            }
        }
        return null;
    }

    void put(RealConnection connection) {
        if (!this.cleanupRunning) {
            this.cleanupRunning = true;
            executor.execute(this.cleanupRunnable);
        }
        this.connections.add(connection);
    }

    boolean connectionBecameIdle(RealConnection connection) {
        if (!connection.noNewStreams) {
            if (this.maxIdleConnections != 0) {
                notifyAll();
                return false;
            }
        }
        this.connections.remove(connection);
        return true;
    }

    public void evictAll() {
        List<RealConnection> evictedConnections = new ArrayList();
        synchronized (this) {
            Iterator<RealConnection> i = this.connections.iterator();
            while (i.hasNext()) {
                RealConnection connection = (RealConnection) i.next();
                if (connection.allocations.isEmpty()) {
                    connection.noNewStreams = true;
                    evictedConnections.add(connection);
                    i.remove();
                }
            }
        }
        for (RealConnection connection2 : evictedConnections) {
            Util.closeQuietly(connection2.socket());
        }
    }

    long cleanup(long now) {
        int inUseConnectionCount = 0;
        int idleConnectionCount = 0;
        RealConnection longestIdleConnection = null;
        long longestIdleDurationNs = Long.MIN_VALUE;
        synchronized (this) {
            for (RealConnection connection : this.connections) {
                if (pruneAndGetAllocationCount(connection, now) > 0) {
                    inUseConnectionCount++;
                } else {
                    idleConnectionCount++;
                    long idleDurationNs = now - connection.idleAtNanos;
                    if (idleDurationNs > longestIdleDurationNs) {
                        longestIdleDurationNs = idleDurationNs;
                        longestIdleConnection = connection;
                    }
                }
            }
            if (longestIdleDurationNs < this.keepAliveDurationNs) {
                if (idleConnectionCount <= this.maxIdleConnections) {
                    long j;
                    if (idleConnectionCount > 0) {
                        j = this.keepAliveDurationNs - longestIdleDurationNs;
                        return j;
                    } else if (inUseConnectionCount > 0) {
                        j = this.keepAliveDurationNs;
                        return j;
                    } else {
                        this.cleanupRunning = false;
                        return -1;
                    }
                }
            }
            this.connections.remove(longestIdleConnection);
            Util.closeQuietly(longestIdleConnection.socket());
            return 0;
        }
    }

    private int pruneAndGetAllocationCount(RealConnection connection, long now) {
        List<Reference<StreamAllocation>> references = connection.allocations;
        int i = 0;
        while (i < references.size()) {
            Reference<StreamAllocation> reference = (Reference) references.get(i);
            if (reference.get() != null) {
                i++;
            } else {
                StreamAllocationReference streamAllocRef = (StreamAllocationReference) reference;
                String message = new StringBuilder();
                message.append("A connection to ");
                message.append(connection.route().address().url());
                message.append(" was leaked. Did you forget to close a response body?");
                Platform.get().logCloseableLeak(message.toString(), streamAllocRef.callStackTrace);
                references.remove(i);
                connection.noNewStreams = true;
                if (references.isEmpty()) {
                    connection.idleAtNanos = now - this.keepAliveDurationNs;
                    return 0;
                }
            }
        }
        return references.size();
    }
}
