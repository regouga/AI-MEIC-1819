package com.outsystems.plugins.oscache.cache.interfaces;

import android.support.annotation.NonNull;
import android.webkit.WebResourceResponse;
import java.util.List;
import java.util.Map;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.X509TrustManager;
import okhttp3.CertificatePinner;
import org.json.JSONObject;

public interface CacheEngine {
    void bootstrapCache(String str, List<String> list, Map<String, String> map, Map<String, String> map2);

    JSONObject getJSONResourceFromCache(@NonNull String str);

    WebResourceResponse getResourceFromCache(@NonNull String str);

    void setCertificatePinner(@NonNull CertificatePinner certificatePinner);

    void setCurrentApplication(@NonNull String str, @NonNull String str2);

    void setSSLSocketFactory(@NonNull SSLSocketFactory sSLSocketFactory, @NonNull X509TrustManager x509TrustManager);

    void startCaching(@NonNull String str, @NonNull String str2, @NonNull String str3, @NonNull List<String> list, @NonNull Map<String, String> map, @NonNull Map<String, String> map2, @NonNull Map<String, Object> map3);

    void switchToVersion(@NonNull String str, @NonNull String str2, @NonNull String str3);

    void upgradeCacheIfNeeded();
}
