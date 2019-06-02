package com.outsystems.plugins.loader;

import android.os.Build.VERSION;
import android.webkit.CookieManager;
import android.webkit.CookieSyncManager;
import com.outsystems.plugins.loader.engines.OSCordovaLoaderImpl;
import com.outsystems.plugins.oscache.OSCache;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import com.outsystems.plugins.ossecurity.interfaces.SSLSecurity;
import org.apache.cordova.CordovaPlugin;

public class OSCordovaLoader extends CordovaPlugin {
    public static final String CORDOVA_SERVICE_NAME = "OSCordovaLoader";
    private OSCordovaLoaderImpl cordovaLoader;
    private Logger logger = OSLogger.getInstance();

    protected void pluginInitialize() {
        this.logger.logVerbose("pluginInitialize: started", CORDOVA_SERVICE_NAME);
        this.cordovaLoader = new OSCordovaLoaderImpl(this.webView, this.cordova, ((OSCache) this.webView.getPluginManager().getPlugin(OSCache.CORDOVA_SERVICE_NAME)).getCacheEngine(), this.preferences);
        this.cordovaLoader.deploy();
        this.logger.logVerbose("pluginInitialize: finished", CORDOVA_SERVICE_NAME);
    }

    public void onStop() {
        super.onStop();
        if (VERSION.SDK_INT > 21) {
            CookieManager.getInstance().flush();
            return;
        }
        CookieSyncManager.createInstance(this.cordova.getActivity().getApplicationContext());
        CookieSyncManager.getInstance().sync();
    }

    public synchronized void setSSLSecurityImpl(SSLSecurity sslSecurity) {
        if (sslSecurity != null) {
            this.cordovaLoader.setSSLSecurity(sslSecurity);
        }
    }
}
