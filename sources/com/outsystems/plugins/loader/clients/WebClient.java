package com.outsystems.plugins.loader.clients;

import android.annotation.TargetApi;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Build.VERSION;
import android.support.v4.app.NotificationCompat;
import android.webkit.MimeTypeMap;
import android.webkit.SslErrorHandler;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import com.outsystems.plugins.oscache.cache.helpers.MimeTypesHelper;
import com.outsystems.plugins.oscache.cache.interfaces.CacheEngine;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import com.outsystems.plugins.ossecurity.interfaces.SSLSecurity;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
import okhttp3.CertificatePinner;
import okhttp3.ConnectionPool;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.OkHttpClient.Builder;
import okhttp3.Request;
import okhttp3.Response;
import org.apache.cordova.CordovaActivity;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPreferences;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.engine.SystemWebViewClient;
import org.apache.cordova.engine.SystemWebViewEngine;

public class WebClient extends SystemWebViewClient {
    private static final int CON_KEEP_ALIVE_DEFAULT = 300;
    private static final String CON_KEEP_ALIVE_PREF = "sslpinning-connection-keep-alive";
    private static final int CON_MAX_IDLE_CONNECTIONS_DEFAULT = 5;
    private static final String DEFAULT_ENCODING = "utf-8";
    private static final int HTTP_STATUS_CODE_CLOSED_REQUEST = 499;
    private static final int LOADER_CACHE_RESOURCE_READ_TIMEOUT = 10;
    private static final int LOADER_RESOURCE_CONNECT_TIMEOUT = 4;
    private static final String OPEN_URL_EXTERNAL_BROWSER_PREFIX = "external:";
    private static final String moduleName = "OSCordovaLoader";
    private CordovaActivity activity;
    private CacheEngine cacheEngine;
    private Context context;
    private String failingUrl;
    private OkHttpClient httpClient;
    private Logger logger = OSLogger.getInstance();
    private CordovaPreferences preferences;
    SSLSecurity sslSecurity;
    private boolean webViewLoadingFailed;

    public WebClient(Context context, CordovaWebView webView, CordovaInterface cordova, CacheEngine cacheEngine, CordovaPreferences preferences) {
        super((SystemWebViewEngine) webView.getEngine());
        this.context = context;
        this.cacheEngine = cacheEngine;
        this.activity = (CordovaActivity) cordova.getActivity();
        this.preferences = preferences;
    }

    public void setSslSecurity(SSLSecurity sslSecurity) {
        this.sslSecurity = sslSecurity;
        if (this.sslSecurity != null) {
            setHttpClient();
        } else {
            this.logger.logError("SSLSecurity was not set", "OSCordovaLoader");
        }
    }

    @TargetApi(21)
    public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
        return shouldInterceptRequest(request.getUrl().toString(), request.getMethod(), request.getRequestHeaders());
    }

    public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
        if (VERSION.SDK_INT >= 21) {
            return super.shouldInterceptRequest(view, url);
        }
        return shouldInterceptRequest(url, "GET", null);
    }

    WebResourceResponse shouldInterceptRequest(String url, String method, Map<String, String> headers) {
        Uri uri = Uri.parse(url);
        if (!uri.getScheme().contains("http") || url.startsWith("blob:")) {
            return null;
        }
        if (!url.toLowerCase().contains("/favicon.ico")) {
            WebResourceResponse response = this.cacheEngine.getResourceFromCache(url);
            if (response != null) {
                Logger logger = this.logger;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Resource loaded from cache: ");
                stringBuilder.append(url);
                logger.logDebug(stringBuilder.toString(), "OSCordovaLoader");
                return response;
            }
            response = getCordovaResource(uri.getPath());
            if (response == null && this.sslSecurity != null) {
                response = getPinnedResource(uri, method, headers);
            }
            return response;
        } else if (VERSION.SDK_INT >= 21) {
            return new WebResourceResponse(null, "UTF-8", 404, "Not found", null, null);
        } else {
            return new WebResourceResponse(null, "UTF-8", null);
        }
    }

    private void setHttpClient() {
        CertificatePinner certificatePinner = this.sslSecurity.getCertificatePinner();
        this.httpClient = this.sslSecurity.getOkHttpClient();
        OkHttpClient okHttpClient = this.httpClient;
        Builder httpClientBuilder = okHttpClient != null ? okHttpClient.newBuilder() : new Builder();
        if (certificatePinner != null) {
            httpClientBuilder = httpClientBuilder.certificatePinner(certificatePinner);
        }
        httpClientBuilder = httpClientBuilder.connectTimeout(4, TimeUnit.SECONDS).readTimeout(10, TimeUnit.SECONDS).retryOnConnectionFailure(true);
        try {
            httpClientBuilder = httpClientBuilder.connectionPool(new ConnectionPool(5, (long) this.preferences.getInteger(CON_KEEP_ALIVE_PREF, CON_KEEP_ALIVE_DEFAULT), TimeUnit.SECONDS));
        } catch (Exception e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to get preference sslpinning-connection-keep-alive. ");
            stringBuilder.append(e.getMessage());
            logger.logDebug(stringBuilder.toString(), "OSCordovaLoader");
        }
        this.httpClient = httpClientBuilder.build();
    }

    private WebResourceResponse getPinnedResource(Uri url, String method, Map<String, String> headers) {
        Logger logger;
        StringBuilder stringBuilder;
        String errorMsg;
        WebClient webClient = this;
        Uri uri = url;
        String str = method;
        if (str.equals("GET") && url.getScheme().startsWith("http")) {
            try {
                Request.Builder requestBuilder = new Request.Builder();
                requestBuilder.method(str, null);
                requestBuilder.url(url.toString());
                if (headers != null) {
                    Map<String, String> originalHeaders = headers;
                    Set<String> headersKeys = originalHeaders.keySet();
                    Headers.Builder httpRequestHeaders = new Headers.Builder();
                    for (String key : headersKeys) {
                        httpRequestHeaders.add(key, (String) originalHeaders.get(key));
                    }
                    requestBuilder.headers(httpRequestHeaders.build());
                }
                Response httpResponse = webClient.httpClient.newCall(requestBuilder.build()).execute();
                Response response = httpResponse.networkResponse();
                String contentType = response.header("Content-Type");
                String key2 = null;
                String encoding = DEFAULT_ENCODING;
                if (contentType != null) {
                    String[] contentTypeList = contentType.toLowerCase().split(";");
                    if (contentTypeList.length > 0) {
                        key2 = contentTypeList[0];
                        for (int i = 1; i < contentTypeList.length; i++) {
                            if (contentTypeList[i].contains("charset=")) {
                                encoding = contentTypeList[i].trim().split("=")[1];
                                break;
                            }
                        }
                    }
                }
                if (key2 == null) {
                    key2 = MimeTypesHelper.getInstance().getMimeType(MimeTypeMap.getFileExtensionFromUrl(url.toString()));
                }
                Headers responseHeaders = response.headers();
                Map<String, String> httpResponseHeaders = new HashMap();
                for (int i2 = 0; i2 < responseHeaders.size(); i2++) {
                    httpResponseHeaders.put(responseHeaders.name(i2), responseHeaders.value(i2));
                }
                httpResponseHeaders.put(NotificationCompat.CATEGORY_STATUS, String.valueOf(response.code()));
                if (VERSION.SDK_INT < 21) {
                    return new WebResourceResponse(key2, encoding, httpResponse.body().byteStream());
                }
                String responseMessage = String.valueOf(httpResponse.code());
                if (response.message() != null && !response.message().isEmpty()) {
                    responseMessage = response.message();
                }
                return new WebResourceResponse(key2, encoding, response.code(), responseMessage, httpResponseHeaders, httpResponse.body().byteStream());
            } catch (IOException e) {
                logger = webClient.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Could not get resource with pinning while intercepting request: ");
                stringBuilder.append(uri);
                logger.logDebug(stringBuilder.toString(), "OSCordovaLoader");
                errorMsg = e.getMessage();
                if (VERSION.SDK_INT >= 21) {
                    return new WebResourceResponse(null, DEFAULT_ENCODING, HTTP_STATUS_CODE_CLOSED_REQUEST, errorMsg, null, null);
                }
                return new WebResourceResponse(null, DEFAULT_ENCODING, null);
            } catch (Throwable e2) {
                logger = webClient.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Error getting resource with pinning while intercepting request: ");
                stringBuilder.append(uri);
                logger.logError(stringBuilder.toString(), "OSCordovaLoader", e2);
                errorMsg = e2.getMessage();
                if (VERSION.SDK_INT >= 21) {
                    return new WebResourceResponse(null, DEFAULT_ENCODING, HTTP_STATUS_CODE_CLOSED_REQUEST, errorMsg, null, null);
                }
                return new WebResourceResponse(null, DEFAULT_ENCODING, null);
            }
        }
        Logger logger2 = webClient.logger;
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append("Unable to fetch pinned resource: URL method ");
        stringBuilder2.append(str);
        stringBuilder2.append(" or scheme ");
        stringBuilder2.append(url.getScheme());
        stringBuilder2.append(" are not supported");
        logger2.logDebug(stringBuilder2.toString(), "OSCordovaLoader");
        return null;
    }

    private WebResourceResponse getCordovaResource(String url) {
        Logger logger;
        StringBuilder stringBuilder;
        String urlString = url;
        try {
            String regex = "(\\/([\\da-zA-Z\\-_]+))?(\\/(cdvload|scripts)\\/)";
            if (!Pattern.compile(regex).matcher(urlString).find()) {
                return null;
            }
            return new WebResourceResponse(MimeTypesHelper.getInstance().getMimeType(MimeTypeMap.getFileExtensionFromUrl(url)), "UTF-8", this.context.getAssets().open(urlString.replaceAll(regex, "www/")));
        } catch (IOException e) {
            logger = this.logger;
            stringBuilder = new StringBuilder();
            stringBuilder.append("Could not get Cordova resource while intercepting request: ");
            stringBuilder.append(url);
            logger.logDebug(stringBuilder.toString(), "OSCordovaLoader");
            return null;
        } catch (Throwable e2) {
            logger = this.logger;
            stringBuilder = new StringBuilder();
            stringBuilder.append("Error getting Cordova resource while intercepting request: ");
            stringBuilder.append(url);
            logger.logError(stringBuilder.toString(), "OSCordovaLoader", e2);
            return null;
        }
    }

    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        if (!url.startsWith(OPEN_URL_EXTERNAL_BROWSER_PREFIX)) {
            return super.shouldOverrideUrlLoading(view, url);
        }
        Intent browserIntent = new Intent("android.intent.action.VIEW", Uri.parse(url.substring(OPEN_URL_EXTERNAL_BROWSER_PREFIX.length())));
        browserIntent.setFlags(268435456);
        this.context.startActivity(browserIntent);
        return true;
    }

    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        super.onPageStarted(view, url, favicon);
        this.webViewLoadingFailed = false;
    }

    public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
        this.failingUrl = view.getUrl();
        this.webViewLoadingFailed = true;
    }

    public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
        super.onReceivedError(view, errorCode, description, failingUrl);
        this.failingUrl = failingUrl;
        this.webViewLoadingFailed = true;
    }

    public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        if (this.webViewLoadingFailed) {
            this.activity.onReceivedError(503, "Unable to process your request.", this.failingUrl);
        }
    }
}
