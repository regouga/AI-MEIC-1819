package com.outsystems.plugins.deeplinks;

import android.content.Intent;
import android.net.Uri;
import android.os.Handler;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.util.ArrayList;
import java.util.Iterator;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaActivity;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONException;
import org.json.JSONObject;

public class OSDeepLinks extends CordovaPlugin {
    private static final String CORDOVA_STATIC_CHANNEL = "OSDeepLinksStaticChannel";
    private static final String DEFAULT_SCHEME = "https";
    private static Boolean applicationPaused = Boolean.valueOf(false);
    private static Boolean deviceready = Boolean.valueOf(false);
    private static ArrayList<JSONObject> eventQueue = new ArrayList();
    private static CordovaWebView staticWebView = null;
    private String defaultApplication;
    private String defaultHostname;
    private boolean disableOSDeepLinks;
    private Logger logger = OSLogger.getInstance();

    protected void pluginInitialize() {
        super.pluginInitialize();
        staticWebView = this.webView;
        this.disableOSDeepLinks = this.preferences.getBoolean("DisableOSDeepLinks", false);
        this.defaultHostname = this.preferences.getString("DefaultHostname", "");
        this.defaultApplication = this.preferences.getString("DefaultApplicationURL", "");
    }

    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        if (!"deviceready".equals(action)) {
            return false;
        }
        handleDeviceReady();
        return true;
    }

    public void onResume(boolean multitasking) {
        super.onResume(multitasking);
        if (applicationPaused.booleanValue()) {
            handleDeviceReady();
            applicationPaused = Boolean.valueOf(false);
        }
    }

    public void onDestroy() {
        deviceready = Boolean.valueOf(false);
        applicationPaused = Boolean.valueOf(false);
    }

    public void onPause(boolean multitasking) {
        super.onPause(multitasking);
        applicationPaused = Boolean.valueOf(true);
        deviceready = Boolean.valueOf(false);
    }

    private synchronized void handleDeviceReady() {
        deviceready = Boolean.valueOf(true);
        if (eventQueue.isEmpty()) {
            Intent intent = ((CordovaActivity) this.webView.getContext()).getIntent();
            if (intent != null && intent.getData() != null && intent.getScheme() != null) {
                processIntent(intent);
            }
        } else {
            Iterator it = eventQueue.iterator();
            while (it.hasNext()) {
                sendUpdateToJSApi((JSONObject) it.next());
            }
            eventQueue.clear();
        }
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

    public void onNewIntent(Intent intent) {
        if (intent.getData() != null) {
            if (intent.getScheme() != null) {
                processIntent(intent);
                return;
            }
        }
        super.onNewIntent(intent);
    }

    protected void processIntent(Intent intent) {
        Uri uri = intent.getData();
        String applicationName = uri.getHost();
        if (applicationName == null || !applicationName.equalsIgnoreCase(this.defaultApplication)) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Unable to launch application with URL: ");
            stringBuilder.append(uri.toString());
            logger.logDebug(stringBuilder.toString(), "OSDeepLinks");
            return;
        }
        String urlString = uri.toString();
        String deeplinkPrefix = new StringBuilder();
        deeplinkPrefix.append(uri.getScheme());
        deeplinkPrefix.append("://");
        deeplinkPrefix.append(uri.getHost());
        deeplinkPrefix = deeplinkPrefix.toString();
        String applicationPrefix = new StringBuilder();
        applicationPrefix.append("https://");
        applicationPrefix.append(this.defaultHostname);
        applicationPrefix.append("/");
        applicationPrefix.append(this.defaultApplication);
        urlString = urlString.replace(deeplinkPrefix, applicationPrefix.toString());
        intent.setData(null);
        if (uri.getPath() != null && uri.getPath().length() > 0) {
            if (this.disableOSDeepLinks) {
                sendURLToWebview(urlString);
            } else {
                loadUrlIntoWebview(urlString);
            }
        }
    }

    protected void loadUrlIntoWebview(final String url) {
        final CordovaWebView weakWebView = this.webView;
        this.cordova.getActivity().runOnUiThread(new Runnable() {

            /* renamed from: com.outsystems.plugins.deeplinks.OSDeepLinks$1$1 */
            class C00361 implements Runnable {
                C00361() {
                }

                public void run() {
                    weakWebView.loadUrl(url);
                }
            }

            public void run() {
                Handler handler = new Handler();
                Runnable runnable = new C00361();
                handler.postAtTime(runnable, System.currentTimeMillis() + 1000);
                handler.postDelayed(runnable, 1000);
            }
        });
    }

    protected void sendURLToWebview(String url) {
        try {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("URL", url);
            sendUpdateToJSApi(jsonObject);
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to build URL for the webview: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), "OSDeepLinks", e);
        }
    }
}
