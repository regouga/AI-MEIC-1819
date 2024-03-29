package okhttp3.internal.connection;

import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.ProtocolException;
import java.net.UnknownServiceException;
import java.security.cert.CertificateException;
import java.util.Arrays;
import java.util.List;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLHandshakeException;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.SSLProtocolException;
import javax.net.ssl.SSLSocket;
import okhttp3.ConnectionSpec;
import okhttp3.internal.Internal;

public final class ConnectionSpecSelector {
    private final List<ConnectionSpec> connectionSpecs;
    private boolean isFallback;
    private boolean isFallbackPossible;
    private int nextModeIndex = 0;

    public ConnectionSpecSelector(List<ConnectionSpec> connectionSpecs) {
        this.connectionSpecs = connectionSpecs;
    }

    public ConnectionSpec configureSecureSocket(SSLSocket sslSocket) throws IOException {
        ConnectionSpec tlsConfiguration = null;
        int size = this.connectionSpecs.size();
        for (int i = this.nextModeIndex; i < size; i++) {
            ConnectionSpec connectionSpec = (ConnectionSpec) this.connectionSpecs.get(i);
            if (connectionSpec.isCompatible(sslSocket)) {
                tlsConfiguration = connectionSpec;
                this.nextModeIndex = i + 1;
                break;
            }
        }
        if (tlsConfiguration != null) {
            this.isFallbackPossible = isFallbackPossible(sslSocket);
            Internal.instance.apply(tlsConfiguration, sslSocket, this.isFallback);
            return tlsConfiguration;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Unable to find acceptable protocols. isFallback=");
        stringBuilder.append(this.isFallback);
        stringBuilder.append(", modes=");
        stringBuilder.append(this.connectionSpecs);
        stringBuilder.append(", supported protocols=");
        stringBuilder.append(Arrays.toString(sslSocket.getEnabledProtocols()));
        throw new UnknownServiceException(stringBuilder.toString());
    }

    public boolean connectionFailed(IOException e) {
        boolean z = true;
        this.isFallback = true;
        if (!this.isFallbackPossible || (e instanceof ProtocolException) || (e instanceof InterruptedIOException)) {
            return false;
        }
        if (e instanceof SSLHandshakeException) {
            if (e.getCause() instanceof CertificateException) {
                return false;
            }
        }
        if (e instanceof SSLPeerUnverifiedException) {
            return false;
        }
        if (!((e instanceof SSLHandshakeException) || (e instanceof SSLProtocolException))) {
            if (!(e instanceof SSLException)) {
                z = false;
            }
        }
        return z;
    }

    private boolean isFallbackPossible(SSLSocket socket) {
        for (int i = this.nextModeIndex; i < this.connectionSpecs.size(); i++) {
            if (((ConnectionSpec) this.connectionSpecs.get(i)).isCompatible(socket)) {
                return true;
            }
        }
        return false;
    }
}
