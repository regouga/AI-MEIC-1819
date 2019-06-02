package org.apache.cordova;

import android.view.View;
import android.webkit.ValueCallback;

public interface CordovaWebViewEngine {
    boolean canGoBack();

    void clearCache();

    void clearHistory();

    void destroy();

    void evaluateJavascript(String str, ValueCallback<String> valueCallback);

    ICordovaCookieManager getCookieManager();

    CordovaWebView getCordovaWebView();

    String getUrl();

    View getView();

    boolean goBack();

    void init(CordovaWebView cordovaWebView, CordovaInterface cordovaInterface, CordovaWebViewEngine$Client cordovaWebViewEngine$Client, CordovaResourceApi cordovaResourceApi, PluginManager pluginManager, NativeToJsMessageQueue nativeToJsMessageQueue);

    void loadUrl(String str, boolean z);

    void setPaused(boolean z);

    void stopLoading();
}
