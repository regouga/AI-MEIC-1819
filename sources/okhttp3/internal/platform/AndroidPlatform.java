package okhttp3.internal.platform;

import android.os.Build.VERSION;
import android.util.Log;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.security.NoSuchAlgorithmException;
import java.security.Security;
import java.security.cert.Certificate;
import java.security.cert.TrustAnchor;
import java.security.cert.X509Certificate;
import java.util.List;
import javax.annotation.Nullable;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.X509TrustManager;
import okhttp3.Protocol;
import okhttp3.internal.Util;
import okhttp3.internal.tls.CertificateChainCleaner;
import okhttp3.internal.tls.TrustRootIndex;

class AndroidPlatform extends Platform {
    private static final int MAX_LOG_LENGTH = 4000;
    private final CloseGuard closeGuard = CloseGuard.get();
    private final OptionalMethod<Socket> getAlpnSelectedProtocol;
    private final OptionalMethod<Socket> setAlpnProtocols;
    private final OptionalMethod<Socket> setHostname;
    private final OptionalMethod<Socket> setUseSessionTickets;
    private final Class<?> sslParametersClass;

    static final class CloseGuard {
        private final Method getMethod;
        private final Method openMethod;
        private final Method warnIfOpenMethod;

        CloseGuard(Method getMethod, Method openMethod, Method warnIfOpenMethod) {
            this.getMethod = getMethod;
            this.openMethod = openMethod;
            this.warnIfOpenMethod = warnIfOpenMethod;
        }

        Object createAndOpen(String closer) {
            Object closeGuardInstance = this.getMethod;
            if (closeGuardInstance == null) {
                return null;
            }
            try {
                closeGuardInstance = closeGuardInstance.invoke(null, new Object[0]);
                this.openMethod.invoke(closeGuardInstance, new Object[]{closer});
                return closeGuardInstance;
            } catch (Exception e) {
            }
        }

        boolean warnIfOpen(Object closeGuardInstance) {
            if (closeGuardInstance == null) {
                return false;
            }
            try {
                this.warnIfOpenMethod.invoke(closeGuardInstance, new Object[0]);
                return true;
            } catch (Exception e) {
                return false;
            }
        }

        static CloseGuard get() {
            Method getMethod;
            Method openMethod;
            Method warnIfOpenMethod;
            try {
                Class<?> closeGuardClass = Class.forName("dalvik.system.CloseGuard");
                getMethod = closeGuardClass.getMethod("get", new Class[0]);
                openMethod = closeGuardClass.getMethod("open", new Class[]{String.class});
                warnIfOpenMethod = closeGuardClass.getMethod("warnIfOpen", new Class[0]);
            } catch (Exception e) {
                getMethod = null;
                openMethod = null;
                warnIfOpenMethod = null;
            }
            return new CloseGuard(getMethod, openMethod, warnIfOpenMethod);
        }
    }

    static final class AndroidCertificateChainCleaner extends CertificateChainCleaner {
        private final Method checkServerTrusted;
        private final Object x509TrustManagerExtensions;

        AndroidCertificateChainCleaner(Object x509TrustManagerExtensions, Method checkServerTrusted) {
            this.x509TrustManagerExtensions = x509TrustManagerExtensions;
            this.checkServerTrusted = checkServerTrusted;
        }

        public List<Certificate> clean(List<Certificate> chain, String hostname) throws SSLPeerUnverifiedException {
            try {
                X509Certificate[] certificates = (X509Certificate[]) chain.toArray(new X509Certificate[chain.size()]);
                return (List) this.checkServerTrusted.invoke(this.x509TrustManagerExtensions, new Object[]{certificates, "RSA", hostname});
            } catch (InvocationTargetException e) {
                SSLPeerUnverifiedException exception = new SSLPeerUnverifiedException(e.getMessage());
                exception.initCause(e);
                throw exception;
            } catch (IllegalAccessException e2) {
                throw new AssertionError(e2);
            }
        }

        public boolean equals(Object other) {
            return other instanceof AndroidCertificateChainCleaner;
        }

        public int hashCode() {
            return 0;
        }
    }

    static final class AndroidTrustRootIndex implements TrustRootIndex {
        private final Method findByIssuerAndSignatureMethod;
        private final X509TrustManager trustManager;

        AndroidTrustRootIndex(X509TrustManager trustManager, Method findByIssuerAndSignatureMethod) {
            this.findByIssuerAndSignatureMethod = findByIssuerAndSignatureMethod;
            this.trustManager = trustManager;
        }

        public X509Certificate findByIssuerAndSignature(X509Certificate cert) {
            X509Certificate x509Certificate = null;
            try {
                TrustAnchor trustAnchor = (TrustAnchor) this.findByIssuerAndSignatureMethod.invoke(this.trustManager, new Object[]{cert});
                if (trustAnchor != null) {
                    x509Certificate = trustAnchor.getTrustedCert();
                }
                return x509Certificate;
            } catch (IllegalAccessException e) {
                throw Util.assertionError("unable to get issues and signature", e);
            } catch (InvocationTargetException e2) {
                return null;
            }
        }

        public boolean equals(Object obj) {
            boolean z = true;
            if (obj == this) {
                return true;
            }
            if (!(obj instanceof AndroidTrustRootIndex)) {
                return false;
            }
            AndroidTrustRootIndex that = (AndroidTrustRootIndex) obj;
            if (this.trustManager.equals(that.trustManager)) {
                if (this.findByIssuerAndSignatureMethod.equals(that.findByIssuerAndSignatureMethod)) {
                    return z;
                }
            }
            z = false;
            return z;
        }

        public int hashCode() {
            return this.trustManager.hashCode() + (this.findByIssuerAndSignatureMethod.hashCode() * 31);
        }
    }

    AndroidPlatform(Class<?> sslParametersClass, OptionalMethod<Socket> setUseSessionTickets, OptionalMethod<Socket> setHostname, OptionalMethod<Socket> getAlpnSelectedProtocol, OptionalMethod<Socket> setAlpnProtocols) {
        this.sslParametersClass = sslParametersClass;
        this.setUseSessionTickets = setUseSessionTickets;
        this.setHostname = setHostname;
        this.getAlpnSelectedProtocol = getAlpnSelectedProtocol;
        this.setAlpnProtocols = setAlpnProtocols;
    }

    public void connectSocket(Socket socket, InetSocketAddress address, int connectTimeout) throws IOException {
        IOException ioException;
        try {
            socket.connect(address, connectTimeout);
        } catch (AssertionError e) {
            if (Util.isAndroidGetsocknameError(e)) {
                throw new IOException(e);
            }
            throw e;
        } catch (SecurityException e2) {
            ioException = new IOException("Exception in connect");
            ioException.initCause(e2);
            throw ioException;
        } catch (ClassCastException e3) {
            if (VERSION.SDK_INT == 26) {
                ioException = new IOException("Exception in connect");
                ioException.initCause(e3);
                throw ioException;
            }
            throw e3;
        }
    }

    @Nullable
    protected X509TrustManager trustManager(SSLSocketFactory sslSocketFactory) {
        Object context = Platform.readFieldOrNull(sslSocketFactory, this.sslParametersClass, "sslParameters");
        if (context == null) {
            try {
                context = Platform.readFieldOrNull(sslSocketFactory, Class.forName("com.google.android.gms.org.conscrypt.SSLParametersImpl", false, sslSocketFactory.getClass().getClassLoader()), "sslParameters");
            } catch (ClassNotFoundException e) {
                return super.trustManager(sslSocketFactory);
            }
        }
        X509TrustManager x509TrustManager = (X509TrustManager) Platform.readFieldOrNull(context, X509TrustManager.class, "x509TrustManager");
        if (x509TrustManager != null) {
            return x509TrustManager;
        }
        return (X509TrustManager) Platform.readFieldOrNull(context, X509TrustManager.class, "trustManager");
    }

    public void configureTlsExtensions(SSLSocket sslSocket, String hostname, List<Protocol> protocols) {
        if (hostname != null) {
            this.setUseSessionTickets.invokeOptionalWithoutCheckedException(sslSocket, Boolean.valueOf(true));
            this.setHostname.invokeOptionalWithoutCheckedException(sslSocket, hostname);
        }
        OptionalMethod optionalMethod = this.setAlpnProtocols;
        if (optionalMethod != null && optionalMethod.isSupported(sslSocket)) {
            this.setAlpnProtocols.invokeWithoutCheckedException(sslSocket, Platform.concatLengthPrefixed(protocols));
        }
    }

    @Nullable
    public String getSelectedProtocol(SSLSocket socket) {
        OptionalMethod optionalMethod = this.getAlpnSelectedProtocol;
        String str = null;
        if (optionalMethod == null || !optionalMethod.isSupported(socket)) {
            return null;
        }
        byte[] alpnResult = (byte[]) this.getAlpnSelectedProtocol.invokeWithoutCheckedException(socket, new Object[0]);
        if (alpnResult != null) {
            str = new String(alpnResult, Util.UTF_8);
        }
        return str;
    }

    public void log(int level, String message, @Nullable Throwable t) {
        int logLevel = 5;
        if (level != 5) {
            logLevel = 3;
        }
        if (t != null) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(message);
            stringBuilder.append('\n');
            stringBuilder.append(Log.getStackTraceString(t));
            message = stringBuilder.toString();
        }
        int i = 0;
        int length = message.length();
        while (i < length) {
            int newline = message.indexOf(10, i);
            newline = newline != -1 ? newline : length;
            while (true) {
                int end = Math.min(newline, i + MAX_LOG_LENGTH);
                Log.println(logLevel, "OkHttp", message.substring(i, end));
                i = end;
                if (i >= newline) {
                    break;
                }
            }
            i++;
        }
    }

    public Object getStackTraceForCloseable(String closer) {
        return this.closeGuard.createAndOpen(closer);
    }

    public void logCloseableLeak(String message, Object stackTrace) {
        if (!this.closeGuard.warnIfOpen(stackTrace)) {
            log(5, message, null);
        }
    }

    public boolean isCleartextTrafficPermitted(String hostname) {
        try {
            Class<?> networkPolicyClass = Class.forName("android.security.NetworkSecurityPolicy");
            return api24IsCleartextTrafficPermitted(hostname, networkPolicyClass, networkPolicyClass.getMethod("getInstance", new Class[0]).invoke(null, new Object[0]));
        } catch (ClassNotFoundException e) {
            return super.isCleartextTrafficPermitted(hostname);
        } catch (Exception e2) {
            throw Util.assertionError("unable to determine cleartext support", e2);
        }
    }

    private boolean api24IsCleartextTrafficPermitted(String hostname, Class<?> networkPolicyClass, Object networkSecurityPolicy) throws InvocationTargetException, IllegalAccessException {
        try {
            return ((Boolean) networkPolicyClass.getMethod("isCleartextTrafficPermitted", new Class[]{String.class}).invoke(networkSecurityPolicy, new Object[]{hostname})).booleanValue();
        } catch (NoSuchMethodException e) {
            return api23IsCleartextTrafficPermitted(hostname, networkPolicyClass, networkSecurityPolicy);
        }
    }

    private boolean api23IsCleartextTrafficPermitted(String hostname, Class<?> networkPolicyClass, Object networkSecurityPolicy) throws InvocationTargetException, IllegalAccessException {
        try {
            return ((Boolean) networkPolicyClass.getMethod("isCleartextTrafficPermitted", new Class[0]).invoke(networkSecurityPolicy, new Object[0])).booleanValue();
        } catch (NoSuchMethodException e) {
            return super.isCleartextTrafficPermitted(hostname);
        }
    }

    private static boolean supportsAlpn() {
        if (Security.getProvider("GMSCore_OpenSSL") != null) {
            return true;
        }
        try {
            Class.forName("android.net.Network");
            return true;
        } catch (ClassNotFoundException e) {
            return false;
        }
    }

    public CertificateChainCleaner buildCertificateChainCleaner(X509TrustManager trustManager) {
        try {
            Class<?> extensionsClass = Class.forName("android.net.http.X509TrustManagerExtensions");
            return new AndroidCertificateChainCleaner(extensionsClass.getConstructor(new Class[]{X509TrustManager.class}).newInstance(new Object[]{trustManager}), extensionsClass.getMethod("checkServerTrusted", new Class[]{X509Certificate[].class, String.class, String.class}));
        } catch (Exception e) {
            return super.buildCertificateChainCleaner(trustManager);
        }
    }

    public static Platform buildIfSupported() {
        Class<?> sslParametersClass;
        OptionalMethod<Socket> getAlpnSelectedProtocol;
        OptionalMethod<Socket> setAlpnProtocols;
        try {
            sslParametersClass = Class.forName("com.android.org.conscrypt.SSLParametersImpl");
        } catch (ClassNotFoundException e) {
            try {
                sslParametersClass = Class.forName("org.apache.harmony.xnet.provider.jsse.SSLParametersImpl");
            } catch (ClassNotFoundException e2) {
                return null;
            }
        }
        OptionalMethod<Socket> setUseSessionTickets = new OptionalMethod(null, "setUseSessionTickets", Boolean.TYPE);
        OptionalMethod<Socket> setHostname = new OptionalMethod(null, "setHostname", String.class);
        if (supportsAlpn()) {
            OptionalMethod<Socket> getAlpnSelectedProtocol2 = new OptionalMethod(byte[].class, "getAlpnSelectedProtocol", new Class[0]);
            OptionalMethod<Socket> optionalMethod = new OptionalMethod(null, "setAlpnProtocols", byte[].class);
            getAlpnSelectedProtocol = getAlpnSelectedProtocol2;
            setAlpnProtocols = optionalMethod;
        } else {
            getAlpnSelectedProtocol = null;
            setAlpnProtocols = null;
        }
        return new AndroidPlatform(sslParametersClass, setUseSessionTickets, setHostname, getAlpnSelectedProtocol, setAlpnProtocols);
    }

    public TrustRootIndex buildTrustRootIndex(X509TrustManager trustManager) {
        try {
            Method method = trustManager.getClass().getDeclaredMethod("findTrustAnchorByIssuerAndSignature", new Class[]{X509Certificate.class});
            method.setAccessible(true);
            return new AndroidTrustRootIndex(trustManager, method);
        } catch (NoSuchMethodException e) {
            return super.buildTrustRootIndex(trustManager);
        }
    }

    public SSLContext getSSLContext() {
        boolean tryTls12;
        try {
            tryTls12 = VERSION.SDK_INT >= 16 && VERSION.SDK_INT < 22;
        } catch (NoClassDefFoundError e) {
            tryTls12 = true;
        }
        if (tryTls12) {
            try {
                return SSLContext.getInstance("TLSv1.2");
            } catch (NoSuchAlgorithmException e2) {
            }
        } else {
            try {
                return SSLContext.getInstance("TLS");
            } catch (NoSuchAlgorithmException e3) {
                throw new IllegalStateException("No TLS provider", e3);
            }
        }
    }
}
