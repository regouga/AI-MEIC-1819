package com.outsystems.plugins.loader.engines;

import android.content.Context;
import android.os.Build.VERSION;
import android.support.annotation.NonNull;
import android.webkit.CookieManager;
import android.webkit.CookieSyncManager;
import android.webkit.ValueCallback;
import com.outsystems.plugins.loader.clients.ChromeClient;
import com.outsystems.plugins.loader.clients.WebClient;
import com.outsystems.plugins.oscache.cache.interfaces.CacheEngine;
import com.outsystems.plugins.ossecurity.interfaces.SSLSecurity;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPreferences;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.engine.SystemWebView;
import org.apache.cordova.engine.SystemWebViewEngine;

public class OSCordovaLoaderImpl implements OSCordovaLoaderEngine {
    private ChromeClient chromeClient;
    private Context context;
    private SystemWebView systemWebView;
    private WebClient webClient;

    /* renamed from: com.outsystems.plugins.loader.engines.OSCordovaLoaderImpl$1 */
    class C00471 implements ValueCallback<Boolean> {
        C00471() {
        }

        public void onReceiveValue(Boolean value) {
        }
    }

    public OSCordovaLoaderImpl(@NonNull CordovaWebView webView, CordovaInterface cordova, CacheEngine cacheEngine, CordovaPreferences preferences) {
        this.webClient = new WebClient(cordova.getActivity().getApplicationContext(), webView, cordova, cacheEngine, preferences);
        this.systemWebView = (SystemWebView) webView.getEngine().getView();
        this.chromeClient = new ChromeClient((SystemWebViewEngine) webView.getEngine(), cordova);
        this.context = cordova.getActivity().getApplicationContext();
    }

    public void deploy() {
        if (VERSION.SDK_INT > 21) {
            CookieManager cookieManager = CookieManager.getInstance();
            cookieManager.removeSessionCookies(new C00471());
            cookieManager.flush();
        } else {
            CookieSyncManager.createInstance(this.context);
            CookieManager.getInstance().removeSessionCookie();
            CookieSyncManager.getInstance().sync();
        }
        this.systemWebView.setWebViewClient(this.webClient);
        this.systemWebView.setWebChromeClient(this.chromeClient);
        this.systemWebView.getSettings().setAllowFileAccess(true);
        this.systemWebView.getSettings().setCacheMode(-1);
    }

    public void setSSLSecurity(SSLSecurity sslSecurity) {
        WebClient webClient = this.webClient;
        if (webClient != null) {
            webClient.setSslSecurity(sslSecurity);
        }
    }
}
