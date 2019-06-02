package okhttp3.internal.connection;

import android.support.v4.internal.view.SupportMenu;
import java.io.IOException;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.Proxy.Type;
import java.net.SocketAddress;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import okhttp3.Address;
import okhttp3.Call;
import okhttp3.EventListener;
import okhttp3.HttpUrl;
import okhttp3.Route;
import okhttp3.internal.Util;

public final class RouteSelector {
    private final Address address;
    private final Call call;
    private final EventListener eventListener;
    private List<InetSocketAddress> inetSocketAddresses = Collections.emptyList();
    private int nextProxyIndex;
    private final List<Route> postponedRoutes = new ArrayList();
    private List<Proxy> proxies = Collections.emptyList();
    private final RouteDatabase routeDatabase;

    public static final class Selection {
        private int nextRouteIndex = 0;
        private final List<Route> routes;

        Selection(List<Route> routes) {
            this.routes = routes;
        }

        public boolean hasNext() {
            return this.nextRouteIndex < this.routes.size();
        }

        public Route next() {
            if (hasNext()) {
                List list = this.routes;
                int i = this.nextRouteIndex;
                this.nextRouteIndex = i + 1;
                return (Route) list.get(i);
            }
            throw new NoSuchElementException();
        }

        public List<Route> getAll() {
            return new ArrayList(this.routes);
        }
    }

    public RouteSelector(Address address, RouteDatabase routeDatabase, Call call, EventListener eventListener) {
        this.address = address;
        this.routeDatabase = routeDatabase;
        this.call = call;
        this.eventListener = eventListener;
        resetNextProxy(address.url(), address.proxy());
    }

    public boolean hasNext() {
        if (!hasNextProxy()) {
            if (this.postponedRoutes.isEmpty()) {
                return false;
            }
        }
        return true;
    }

    public Selection next() throws IOException {
        if (hasNext()) {
            List<Route> routes = new ArrayList();
            while (hasNextProxy()) {
                Proxy proxy = nextProxy();
                int size = this.inetSocketAddresses.size();
                for (int i = 0; i < size; i++) {
                    Route route = new Route(this.address, proxy, (InetSocketAddress) this.inetSocketAddresses.get(i));
                    if (this.routeDatabase.shouldPostpone(route)) {
                        this.postponedRoutes.add(route);
                    } else {
                        routes.add(route);
                    }
                }
                if (!routes.isEmpty()) {
                    break;
                }
            }
            if (routes.isEmpty()) {
                routes.addAll(this.postponedRoutes);
                this.postponedRoutes.clear();
            }
            return new Selection(routes);
        }
        throw new NoSuchElementException();
    }

    public void connectFailed(Route failedRoute, IOException failure) {
        if (failedRoute.proxy().type() != Type.DIRECT && this.address.proxySelector() != null) {
            this.address.proxySelector().connectFailed(this.address.url().uri(), failedRoute.proxy().address(), failure);
        }
        this.routeDatabase.failed(failedRoute);
    }

    private void resetNextProxy(HttpUrl url, Proxy proxy) {
        if (proxy != null) {
            this.proxies = Collections.singletonList(proxy);
        } else {
            List immutableList;
            List proxiesOrNull = this.address.proxySelector().select(url.uri());
            if (proxiesOrNull == null || proxiesOrNull.isEmpty()) {
                immutableList = Util.immutableList(Proxy.NO_PROXY);
            } else {
                immutableList = Util.immutableList(proxiesOrNull);
            }
            this.proxies = immutableList;
        }
        this.nextProxyIndex = 0;
    }

    private boolean hasNextProxy() {
        return this.nextProxyIndex < this.proxies.size();
    }

    private Proxy nextProxy() throws IOException {
        if (hasNextProxy()) {
            List list = this.proxies;
            int i = this.nextProxyIndex;
            this.nextProxyIndex = i + 1;
            Proxy result = (Proxy) list.get(i);
            resetNextInetSocketAddress(result);
            return result;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("No route to ");
        stringBuilder.append(this.address.url().host());
        stringBuilder.append("; exhausted proxy configurations: ");
        stringBuilder.append(this.proxies);
        throw new SocketException(stringBuilder.toString());
    }

    private void resetNextInetSocketAddress(Proxy proxy) throws IOException {
        String socketHost;
        int socketPort;
        StringBuilder stringBuilder;
        this.inetSocketAddresses = new ArrayList();
        if (proxy.type() != Type.DIRECT) {
            if (proxy.type() != Type.SOCKS) {
                SocketAddress proxyAddress = proxy.address();
                if (proxyAddress instanceof InetSocketAddress) {
                    InetSocketAddress proxySocketAddress = (InetSocketAddress) proxyAddress;
                    socketHost = getHostString(proxySocketAddress);
                    socketPort = proxySocketAddress.getPort();
                    if (socketPort >= 1 || socketPort > SupportMenu.USER_MASK) {
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("No route to ");
                        stringBuilder.append(socketHost);
                        stringBuilder.append(":");
                        stringBuilder.append(socketPort);
                        stringBuilder.append("; port is out of range");
                        throw new SocketException(stringBuilder.toString());
                    } else if (proxy.type() == Type.SOCKS) {
                        this.inetSocketAddresses.add(InetSocketAddress.createUnresolved(socketHost, socketPort));
                        return;
                    } else {
                        this.eventListener.dnsStart(this.call, socketHost);
                        List<InetAddress> addresses = this.address.dns().lookup(socketHost);
                        if (addresses.isEmpty()) {
                            StringBuilder stringBuilder2 = new StringBuilder();
                            stringBuilder2.append(this.address.dns());
                            stringBuilder2.append(" returned no addresses for ");
                            stringBuilder2.append(socketHost);
                            throw new UnknownHostException(stringBuilder2.toString());
                        }
                        this.eventListener.dnsEnd(this.call, socketHost, addresses);
                        int size = addresses.size();
                        for (int i = 0; i < size; i++) {
                            this.inetSocketAddresses.add(new InetSocketAddress((InetAddress) addresses.get(i), socketPort));
                        }
                        return;
                    }
                }
                StringBuilder stringBuilder3 = new StringBuilder();
                stringBuilder3.append("Proxy.address() is not an InetSocketAddress: ");
                stringBuilder3.append(proxyAddress.getClass());
                throw new IllegalArgumentException(stringBuilder3.toString());
            }
        }
        socketHost = this.address.url().host();
        socketPort = this.address.url().port();
        if (socketPort >= 1) {
        }
        stringBuilder = new StringBuilder();
        stringBuilder.append("No route to ");
        stringBuilder.append(socketHost);
        stringBuilder.append(":");
        stringBuilder.append(socketPort);
        stringBuilder.append("; port is out of range");
        throw new SocketException(stringBuilder.toString());
    }

    static String getHostString(InetSocketAddress socketAddress) {
        InetAddress address = socketAddress.getAddress();
        if (address == null) {
            return socketAddress.getHostName();
        }
        return address.getHostAddress();
    }
}
