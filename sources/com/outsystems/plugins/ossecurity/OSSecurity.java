package com.outsystems.plugins.ossecurity;

import com.outsystems.plugins.loader.OSCordovaLoader;
import com.outsystems.plugins.oscache.OSCache;
import com.outsystems.plugins.oslogger.OSLoggerPlugin;
import com.outsystems.plugins.ossecurity.interfaces.SSLSecurity;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginManager;

public class OSSecurity extends CordovaPlugin {
    public static String CORDOVA_SERVICE_NAME = "OSSecurity";
    private SSLSecurity sslSecurity;

    public void setSSLSecurityImpl(SSLSecurity sslSecurityImpl) {
        this.sslSecurity = sslSecurityImpl;
        PluginManager pluginManager = this.webView.getPluginManager();
        ((OSLoggerPlugin) pluginManager.getPlugin(OSLoggerPlugin.CORDOVA_SERVICE_NAME)).setSSLSecurityImpl(sslSecurityImpl);
        ((OSCache) pluginManager.getPlugin(OSCache.CORDOVA_SERVICE_NAME)).setSSLSecurityImpl(sslSecurityImpl);
        ((OSCordovaLoader) pluginManager.getPlugin(OSCordovaLoader.CORDOVA_SERVICE_NAME)).setSSLSecurityImpl(sslSecurityImpl);
    }

    public SSLSecurity getSSLSecurityImpl() {
        return this.sslSecurity;
    }
}
