package com.outsystems.plugins.oscache;

import android.content.Context;
import android.support.annotation.NonNull;
import android.webkit.WebView;
import com.outsystems.plugins.applicationinfo.OSApplicationInfo;
import com.outsystems.plugins.oscache.cache.NativeCache;
import com.outsystems.plugins.oscache.cache.helpers.VersionComparator;
import com.outsystems.plugins.oscache.cache.interfaces.CacheEngine;
import com.outsystems.plugins.oscache.cache.interfaces.CacheListener;
import com.outsystems.plugins.oscache.cache.types.CacheStatus;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import com.outsystems.plugins.ossecurity.interfaces.SSLSecurity;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class OSCache extends CordovaPlugin implements CacheListener {
    private static final String CHECKSUM_MINIMUM_SUPPORTED_PLATFORM_VERSION = "10.0.811.0";
    public static final String CORDOVA_SERVICE_NAME = "OSCache";
    private static final String CORDOVA_STATIC_CHANNEL = "OSCacheStaticChannel";
    private static final String DEFAULT_RESOURCE_CONNECT_TIMEOUT = "DefaultResourceConnectTimeout";
    private static final String DEFAULT_RESOURCE_READ_TIMEOUT = "DefaultResourceReadTimeout";
    private static final int NATIVE_CACHE_RESOURCE_CONNECT_TIMEOUT = 4;
    private static final int NATIVE_CACHE_RESOURCE_READ_TIMEOUT = 30;
    private static final String PREFERENCE_FIRST_RUN = "FirstRun";
    private static final String SHARED_PREFERENCES_FILE = "OSCachePreferences";
    private static Boolean deviceready = Boolean.valueOf(false);
    private static ArrayList<JSONObject> eventQueue = new ArrayList();
    private static CordovaWebView staticWebView = null;
    private CacheEngine cacheEngine;
    private Logger logger = OSLogger.getInstance();
    private SSLSecurity sslSecurity;

    protected void pluginInitialize() {
        this.logger.logVerbose("pluginInitialize: started", CORDOVA_SERVICE_NAME);
        boolean firstRun = getContext().getSharedPreferences(SHARED_PREFERENCES_FILE, 0).getBoolean(PREFERENCE_FIRST_RUN, true);
        if (firstRun) {
            getContext().getSharedPreferences(SHARED_PREFERENCES_FILE, 0).edit().putBoolean(PREFERENCE_FIRST_RUN, false).apply();
        }
        NativeCache.init(this, firstRun, isChecksumValidationSupported(OSApplicationInfo.getInstance().getPlatformVersion()), ((WebView) this.webView.getEngine().getView()).getSettings().getUserAgentString(), this.preferences.getInteger(DEFAULT_RESOURCE_CONNECT_TIMEOUT, 4), this.preferences.getInteger(DEFAULT_RESOURCE_READ_TIMEOUT, NATIVE_CACHE_RESOURCE_READ_TIMEOUT));
        this.cacheEngine = NativeCache.getInstance();
        staticWebView = this.webView;
        this.logger.logVerbose("pluginInitialize: finished", CORDOVA_SERVICE_NAME);
    }

    public void onResume(boolean multitasking) {
        super.onResume(multitasking);
        deviceready(null, null);
    }

    public void onDestroy() {
        deviceready = Boolean.valueOf(false);
    }

    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        Throwable e;
        JSONArray jSONArray;
        Logger logger;
        StringBuilder stringBuilder;
        boolean z;
        OSCache oSCache = this;
        String str = action;
        CordovaArgs cordovaArgs = args;
        if (cordovaArgs != null && "startCaching".equals(str)) {
            String hostname = cordovaArgs.getString(0);
            String application = cordovaArgs.getString(1);
            String version = cordovaArgs.getString(2);
            try {
                JSONObject urls;
                JSONArray resources = cordovaArgs.getJSONArray(3);
                try {
                    urls = cordovaArgs.getJSONObject(4);
                } catch (Exception e2) {
                    e = e2;
                    jSONArray = resources;
                    logger = oSCache.logger;
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Unable to read startCaching arguments: ");
                    stringBuilder.append(e.getMessage());
                    logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
                    return false;
                }
                try {
                    JSONObject noCache = cordovaArgs.optJSONObject(5);
                    try {
                        Iterator<String> urlIterator;
                        String key;
                        JSONObject options = cordovaArgs.optJSONObject(6);
                        ArrayList<String> options2 = new ArrayList();
                        if (resources != null) {
                            for (int i = 0; i < resources.length(); i++) {
                                options2.add(resources.get(i).toString());
                            }
                        }
                        Map<String, String> urlMaps = new HashMap();
                        if (urls != null) {
                            urlIterator = urls.keys();
                            while (urlIterator.hasNext()) {
                                key = (String) urlIterator.next();
                                urlMaps.put(key, urls.getString(key));
                            }
                        }
                        Map<String, String> noCacheMaps = new HashMap();
                        if (noCache != null) {
                            urlIterator = noCache.keys();
                            while (urlIterator.hasNext()) {
                                key = (String) urlIterator.next();
                                noCacheMaps.put(key, noCache.getString(key));
                            }
                        }
                        Map optionsMap = new HashMap();
                        if (options != null) {
                            urlIterator = options.keys();
                            while (urlIterator.hasNext()) {
                                key = (String) urlIterator.next();
                                Iterator<String> optionsIterator = urlIterator;
                                optionsMap.put(key, options.getString(key));
                                urlIterator = optionsIterator;
                            }
                        }
                        Map<String, String> urlMaps2 = urlMaps;
                        ArrayList<String> resourcesList = options2;
                        startCaching(hostname, application, version, options2, urlMaps2, noCacheMaps, optionsMap);
                        z = true;
                    } catch (Exception e3) {
                        e = e3;
                        jSONArray = resources;
                        JSONObject jSONObject = urls;
                        logger = oSCache.logger;
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Unable to read startCaching arguments: ");
                        stringBuilder.append(e.getMessage());
                        logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
                        return false;
                    }
                } catch (Exception e4) {
                    e = e4;
                    jSONArray = resources;
                    logger = oSCache.logger;
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Unable to read startCaching arguments: ");
                    stringBuilder.append(e.getMessage());
                    logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
                    return false;
                }
            } catch (Exception e5) {
                e = e5;
                jSONArray = null;
                logger = oSCache.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Unable to read startCaching arguments: ");
                stringBuilder.append(e.getMessage());
                logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
                return false;
            }
        } else if (cordovaArgs != null && "switchToVersion".equals(str)) {
            switchToVersion(cordovaArgs.getString(0), cordovaArgs.getString(1), cordovaArgs.getString(2));
            z = true;
        } else if (cordovaArgs == null || !"deviceready".equals(str)) {
            return false;
        } else {
            z = true;
            deviceready(cordovaArgs.getString(0), cordovaArgs.getString(1));
        }
        return z;
    }

    private void startCaching(String hostname, String application, String version, List<String> resources, Map<String, String> urls, Map<String, String> noCache, Map<String, Object> options) {
        final String str = hostname;
        final String str2 = application;
        final String str3 = version;
        final List<String> list = resources;
        final Map<String, String> map = urls;
        final Map<String, String> map2 = noCache;
        final Map<String, Object> map3 = options;
        this.cordova.getThreadPool().execute(new Runnable() {
            public void run() {
                OSCache.this.logger.logVerbose("startCaching: started", OSCache.CORDOVA_SERVICE_NAME);
                OSCache.this.cacheEngine.startCaching(str, str2, str3, list, map, map2, map3);
            }
        });
    }

    private void switchToVersion(final String hostname, final String application, final String version) {
        this.cordova.getThreadPool().execute(new Runnable() {
            public void run() {
                OSCache.this.logger.logVerbose("switchCacheVersion: started", OSCache.CORDOVA_SERVICE_NAME);
                OSCache.this.cacheEngine.switchToVersion(hostname, application, version);
            }
        });
    }

    private synchronized void deviceready(final String hostname, final String application) {
        this.logger.logVerbose("deviceReady: started", CORDOVA_SERVICE_NAME);
        if (hostname != null && application != null) {
            this.cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    OSCache.this.cacheEngine.setCurrentApplication(hostname, application);
                }
            });
        }
        deviceready = Boolean.valueOf(true);
        Iterator it = eventQueue.iterator();
        while (it.hasNext()) {
            sendUpdateToJSApi((JSONObject) it.next());
        }
        eventQueue.clear();
    }

    private synchronized void sendUpdateToJSApi(JSONObject jsonObject) {
        if (deviceready.booleanValue()) {
            PluginResult pluginResult = new PluginResult(Status.OK, jsonObject);
            pluginResult.setKeepCallback(true);
            staticWebView.sendPluginResult(pluginResult, CORDOVA_STATIC_CHANNEL);
        } else {
            eventQueue.add(jsonObject);
        }
    }

    private JSONObject createUpdateObject(String task, JSONObject content) {
        try {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Task", task);
            jsonObject.put("Content", content);
            return jsonObject;
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to build task content object: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
            return null;
        }
    }

    public CacheEngine getCacheEngine() {
        return this.cacheEngine;
    }

    public void setSSLSecurityImpl(@NonNull SSLSecurity sslSecurity) {
        this.sslSecurity = sslSecurity;
        SSLSecurity sSLSecurity = this.sslSecurity;
        if (sSLSecurity != null && sSLSecurity.getCertificatePinner() != null) {
            this.cacheEngine.setCertificatePinner(this.sslSecurity.getCertificatePinner());
            this.logger.logDebug("Valid SSLPinning configuration", CORDOVA_SERVICE_NAME);
        }
    }

    @NonNull
    public Context getContext() {
        return this.cordova.getActivity().getApplicationContext();
    }

    public void fireOnProgressEvent(long loaded, long total) {
        try {
            JSONObject contentObject = new JSONObject();
            contentObject.put("Event", "onprogress");
            JSONObject progressObject = new JSONObject();
            progressObject.put("Loaded", loaded);
            progressObject.put("Total", total);
            contentObject.put("Progress", progressObject);
            sendUpdateToJSApi(createUpdateObject("FireEvent", contentObject));
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("OnProgress event could not send task to JS API: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
        }
    }

    public void fireOnErrorEvent(@NonNull String error) {
        try {
            JSONObject contentObject = new JSONObject();
            contentObject.put("Event", "onerror");
            JSONObject errorObject = new JSONObject();
            errorObject.put("Message", error);
            contentObject.put("Error", errorObject);
            sendUpdateToJSApi(createUpdateObject("FireEvent", contentObject));
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("OnError event could not send task to JS API: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
        }
    }

    public void fireOnFinishEvent() {
        try {
            JSONObject contentObject = new JSONObject();
            contentObject.put("Event", "onfinish");
            sendUpdateToJSApi(createUpdateObject("FireEvent", contentObject));
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("OnFinish event could not send task to JS API: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
        }
    }

    public void updateStatus(@NonNull CacheStatus status) {
        try {
            JSONObject contentObject = new JSONObject();
            contentObject.put("Status", status.getValue());
            sendUpdateToJSApi(createUpdateObject("UpdateStatus", contentObject));
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("updateStatus could not send task to JS API: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
        }
    }

    public void throwException(@NonNull String errorMessage) {
        try {
            JSONObject contentObject = new JSONObject();
            contentObject.put("Error", errorMessage);
            sendUpdateToJSApi(createUpdateObject("Exception", contentObject));
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("throwException could not send task to JS API: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
        }
    }

    boolean isChecksumValidationSupported(String platformVersion) {
        if (platformVersion == null) {
            return false;
        }
        return VersionComparator.compare(CHECKSUM_MINIMUM_SUPPORTED_PLATFORM_VERSION, platformVersion) <= 0;
    }
}
