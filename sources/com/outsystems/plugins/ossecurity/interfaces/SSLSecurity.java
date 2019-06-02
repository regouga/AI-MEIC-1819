package com.outsystems.plugins.ossecurity.interfaces;

import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.X509TrustManager;
import okhttp3.CertificatePinner;
import okhttp3.OkHttpClient;

public interface SSLSecurity {
    CertificatePinner getCertificatePinner();

    OkHttpClient getOkHttpClient();

    @Deprecated
    SSLSocketFactory getSSLSocketFactory();

    @Deprecated
    X509TrustManager getTrustManager();
}
