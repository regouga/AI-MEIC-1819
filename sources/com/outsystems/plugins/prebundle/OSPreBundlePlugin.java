package com.outsystems.plugins.prebundle;

import android.content.Context;
import com.outsystems.plugins.manifest.OSManifestParser;
import com.outsystems.plugins.oscache.OSCache;
import com.outsystems.plugins.oscache.cache.interfaces.CacheEngine;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import com.outsystems.plugins.prebundle.interfaces.PreBundle;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaPreferences;
import org.apache.cordova.PluginManager;

public class OSPreBundlePlugin extends CordovaPlugin {
    private static final String PREFERENCE_DEFAULT_APPLICATION_URL = "DefaultApplicationURL";
    private static final String PREFERENCE_DEFAULT_HOSTNAME = "DefaultHostname";
    private PreBundle preBundle;

    protected void pluginInitialize() {
        PluginManager pm = this.webView.getPluginManager();
        CacheEngine cacheEngine = ((OSCache) pm.getPlugin(OSCache.CORDOVA_SERVICE_NAME)).getCacheEngine();
        OSManifestParser manifestEngine = OSManifestParser.getInstance();
        Logger loggerEngine = OSLogger.getInstance();
        Context context = this.cordova.getActivity().getApplicationContext();
        CordovaPreferences preferences = this.webView.getPreferences();
        OSPreBundle oSPreBundle = r3;
        OSPreBundle oSPreBundle2 = new OSPreBundle(cacheEngine, manifestEngine, loggerEngine, preferences.getString(PREFERENCE_DEFAULT_HOSTNAME, null), preferences.getString(PREFERENCE_DEFAULT_APPLICATION_URL, null), context);
        this.preBundle = oSPreBundle;
        this.preBundle.bootstrapCacheWithPreBundle();
    }
}
