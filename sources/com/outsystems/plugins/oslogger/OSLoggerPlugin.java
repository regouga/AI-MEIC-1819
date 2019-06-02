package com.outsystems.plugins.oslogger;

import android.util.Log;
import android.webkit.WebView;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import com.outsystems.plugins.ossecurity.interfaces.SSLSecurity;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import org.apache.cordova.BuildConfig;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class OSLoggerPlugin extends CordovaPlugin {
    private static final String ACTION_LOG_DEBUG = "logDebug";
    private static final String ACTION_LOG_ERROR = "logError";
    private static final String ACTION_LOG_INFO = "logInfo";
    private static final String ACTION_LOG_VERBOSE = "logVerbose";
    private static final String ACTION_LOG_WARNING = "logWarning";
    public static final String CORDOVA_SERVICE_NAME = "OSLogger";
    private static final String PREFERENCE_DEFAULT_APPLICATION_URL = "DefaultApplicationURL";
    private static final String PREFERENCE_DEFAULT_HOSTNAME = "DefaultHostname";

    protected void pluginInitialize() {
        if (BuildConfig.DEBUG) {
            Log.d(getClass().getName(), "pluginInitialize: started");
        }
        OSLogger.init(this.cordova.getActivity().getApplicationContext(), ((WebView) this.webView.getEngine().getView()).getSettings().getUserAgentString(), this.preferences.getString(PREFERENCE_DEFAULT_HOSTNAME, ""), this.preferences.getString(PREFERENCE_DEFAULT_APPLICATION_URL, ""));
        if (BuildConfig.DEBUG) {
            Log.d(getClass().getName(), "pluginInitialize: finished");
        }
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (args.length() < 2) {
            return false;
        }
        String message = args.getString(0);
        String moduleName = args.getString(1);
        if (ACTION_LOG_VERBOSE.equals(action)) {
            OSLogger.getInstance().logVerbose(message, moduleName);
            callbackContext.success();
            return true;
        } else if (ACTION_LOG_DEBUG.equals(action)) {
            OSLogger.getInstance().logDebug(message, moduleName);
            callbackContext.success();
            return true;
        } else if (ACTION_LOG_INFO.equals(action)) {
            OSLogger.getInstance().logInfo(message, moduleName);
            callbackContext.success();
            return true;
        } else if (ACTION_LOG_WARNING.equals(action)) {
            OSLogger.getInstance().logWarning(message, moduleName);
            callbackContext.success();
            return true;
        } else if (!ACTION_LOG_ERROR.equals(action)) {
            return false;
        } else {
            Map extra;
            String stack;
            try {
                extra = toMap(args.getJSONObject(2));
            } catch (JSONException e) {
                extra = null;
            }
            try {
                stack = args.getString(3);
            } catch (JSONException e2) {
                stack = null;
            }
            OSLogger.getInstance().logError(message, moduleName, extra, stack);
            callbackContext.success();
            return true;
        }
    }

    private Map<String, Object> toMap(JSONObject object) {
        Map<String, Object> map = new HashMap();
        Iterator<String> keysIterator = object.keys();
        while (keysIterator.hasNext()) {
            String key = (String) keysIterator.next();
            try {
                Object value = object.get(key);
                if (!(value instanceof JSONObject)) {
                    if (!(value instanceof JSONArray)) {
                        map.put(key, value);
                    }
                }
            } catch (Throwable e) {
                Logger instance = OSLogger.getInstance();
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("JSONObject could not be parsed while processing extra information: ");
                stringBuilder.append(e.getMessage());
                instance.logError(stringBuilder.toString(), CORDOVA_SERVICE_NAME, e);
            }
        }
        return map;
    }

    public synchronized void setSSLSecurityImpl(SSLSecurity sslSecurity) {
        if (sslSecurity != null) {
            if (sslSecurity.getCertificatePinner() != null) {
                OSLogger.setSSLSecurity(sslSecurity.getCertificatePinner());
            }
        }
    }
}
