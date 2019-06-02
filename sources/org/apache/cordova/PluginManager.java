package org.apache.cordova;

import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.Bundle;
import android.os.Debug;
import com.ipaulpro.afilechooser.utils.FileUtils;
import java.io.PrintStream;
import java.util.Collection;
import java.util.LinkedHashMap;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONException;

public class PluginManager {
    private static final int SLOW_EXEC_WARNING_THRESHOLD = (Debug.isDebuggerConnected() ? 60 : 16);
    private static String TAG = "PluginManager";
    private final CordovaWebView app;
    private final CordovaInterface ctx;
    private final LinkedHashMap<String, PluginEntry> entryMap = new LinkedHashMap();
    private boolean isInitialized;
    private CordovaPlugin permissionRequester;
    private final LinkedHashMap<String, CordovaPlugin> pluginMap = new LinkedHashMap();

    public PluginManager(CordovaWebView cordovaWebView, CordovaInterface cordova, Collection<PluginEntry> pluginEntries) {
        this.ctx = cordova;
        this.app = cordovaWebView;
        setPluginEntries(pluginEntries);
    }

    public Collection<PluginEntry> getPluginEntries() {
        return this.entryMap.values();
    }

    public void setPluginEntries(Collection<PluginEntry> pluginEntries) {
        if (this.isInitialized) {
            onPause(false);
            onDestroy();
            this.pluginMap.clear();
            this.entryMap.clear();
        }
        for (PluginEntry entry : pluginEntries) {
            addService(entry);
        }
        if (this.isInitialized) {
            startupPlugins();
        }
    }

    public void init() {
        LOG.m0d(TAG, "init()");
        this.isInitialized = true;
        onPause(false);
        onDestroy();
        this.pluginMap.clear();
        startupPlugins();
    }

    private void startupPlugins() {
        for (PluginEntry entry : this.entryMap.values()) {
            if (entry.onload) {
                getPlugin(entry.service);
            } else {
                this.pluginMap.put(entry.service, null);
            }
        }
    }

    public void exec(String service, String action, String callbackId, String rawArgs) {
        CordovaPlugin plugin = getPlugin(service);
        if (plugin == null) {
            String str = TAG;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("exec() call to unknown plugin: ");
            stringBuilder.append(service);
            LOG.m0d(str, stringBuilder.toString());
            this.app.sendPluginResult(new PluginResult(Status.CLASS_NOT_FOUND_EXCEPTION), callbackId);
            return;
        }
        CallbackContext callbackContext = new CallbackContext(callbackId, this.app);
        try {
            long pluginStartTime = System.currentTimeMillis();
            boolean wasValidAction = plugin.execute(action, rawArgs, callbackContext);
            long duration = System.currentTimeMillis() - pluginStartTime;
            if (duration > ((long) SLOW_EXEC_WARNING_THRESHOLD)) {
                String str2 = TAG;
                StringBuilder stringBuilder2 = new StringBuilder();
                stringBuilder2.append("THREAD WARNING: exec() call to ");
                stringBuilder2.append(service);
                stringBuilder2.append(FileUtils.HIDDEN_PREFIX);
                stringBuilder2.append(action);
                stringBuilder2.append(" blocked the main thread for ");
                stringBuilder2.append(duration);
                stringBuilder2.append("ms. Plugin should use CordovaInterface.getThreadPool().");
                LOG.m12w(str2, stringBuilder2.toString());
            }
            if (!wasValidAction) {
                callbackContext.sendPluginResult(new PluginResult(Status.INVALID_ACTION));
            }
        } catch (JSONException e) {
            callbackContext.sendPluginResult(new PluginResult(Status.JSON_EXCEPTION));
        } catch (Throwable e2) {
            LOG.m4e(TAG, "Uncaught exception from plugin", e2);
            callbackContext.error(e2.getMessage());
        }
    }

    public CordovaPlugin getPlugin(String service) {
        CordovaPlugin ret = (CordovaPlugin) this.pluginMap.get(service);
        if (ret == null) {
            PluginEntry pe = (PluginEntry) this.entryMap.get(service);
            if (pe == null) {
                return null;
            }
            if (pe.plugin != null) {
                ret = pe.plugin;
            } else {
                ret = instantiatePlugin(pe.pluginClass);
            }
            CordovaInterface cordovaInterface = this.ctx;
            CordovaWebView cordovaWebView = this.app;
            ret.privateInitialize(service, cordovaInterface, cordovaWebView, cordovaWebView.getPreferences());
            this.pluginMap.put(service, ret);
        }
        return ret;
    }

    public void addService(String service, String className) {
        addService(new PluginEntry(service, className, false));
    }

    public void addService(PluginEntry entry) {
        this.entryMap.put(entry.service, entry);
        if (entry.plugin != null) {
            CordovaPlugin cordovaPlugin = entry.plugin;
            String str = entry.service;
            CordovaInterface cordovaInterface = this.ctx;
            CordovaWebView cordovaWebView = this.app;
            cordovaPlugin.privateInitialize(str, cordovaInterface, cordovaWebView, cordovaWebView.getPreferences());
            this.pluginMap.put(entry.service, entry.plugin);
        }
    }

    public void onPause(boolean multitasking) {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                plugin.onPause(multitasking);
            }
        }
    }

    public boolean onReceivedHttpAuthRequest(CordovaWebView view, ICordovaHttpAuthHandler handler, String host, String realm) {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null && plugin.onReceivedHttpAuthRequest(this.app, handler, host, realm)) {
                return true;
            }
        }
        return false;
    }

    public boolean onReceivedClientCertRequest(CordovaWebView view, ICordovaClientCertRequest request) {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null && plugin.onReceivedClientCertRequest(this.app, request)) {
                return true;
            }
        }
        return false;
    }

    public void onResume(boolean multitasking) {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                plugin.onResume(multitasking);
            }
        }
    }

    public void onStart() {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                plugin.onStart();
            }
        }
    }

    public void onStop() {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                plugin.onStop();
            }
        }
    }

    public void onDestroy() {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                plugin.onDestroy();
            }
        }
    }

    public Object postMessage(String id, Object data) {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                Object obj = plugin.onMessage(id, data);
                if (obj != null) {
                    return obj;
                }
            }
        }
        return this.ctx.onMessage(id, data);
    }

    public void onNewIntent(Intent intent) {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                plugin.onNewIntent(intent);
            }
        }
    }

    public boolean shouldAllowRequest(String url) {
        for (PluginEntry entry : this.entryMap.values()) {
            CordovaPlugin plugin = (CordovaPlugin) this.pluginMap.get(entry.service);
            if (plugin != null) {
                Boolean result = plugin.shouldAllowRequest(url);
                if (result != null) {
                    return result.booleanValue();
                }
            }
        }
        if (!(url.startsWith("blob:") || url.startsWith("data:"))) {
            if (!url.startsWith("about:blank")) {
                if (url.startsWith("https://ssl.gstatic.com/accessibility/javascript/android/")) {
                    return true;
                }
                if (url.startsWith("file://")) {
                    return url.contains("/app_webview/") ^ true;
                }
                return false;
            }
        }
        return true;
    }

    public boolean shouldAllowNavigation(String url) {
        boolean z;
        for (PluginEntry entry : this.entryMap.values()) {
            CordovaPlugin plugin = (CordovaPlugin) this.pluginMap.get(entry.service);
            if (plugin != null) {
                Boolean result = plugin.shouldAllowNavigation(url);
                if (result != null) {
                    return result.booleanValue();
                }
            }
        }
        if (!url.startsWith("file://")) {
            if (!url.startsWith("about:blank")) {
                z = false;
                return z;
            }
        }
        z = true;
        return z;
    }

    public boolean shouldAllowBridgeAccess(String url) {
        for (PluginEntry entry : this.entryMap.values()) {
            CordovaPlugin plugin = (CordovaPlugin) this.pluginMap.get(entry.service);
            if (plugin != null) {
                Boolean result = plugin.shouldAllowBridgeAccess(url);
                if (result != null) {
                    return result.booleanValue();
                }
            }
        }
        return url.startsWith("file://");
    }

    public Boolean shouldOpenExternalUrl(String url) {
        for (PluginEntry entry : this.entryMap.values()) {
            CordovaPlugin plugin = (CordovaPlugin) this.pluginMap.get(entry.service);
            if (plugin != null) {
                Boolean result = plugin.shouldOpenExternalUrl(url);
                if (result != null) {
                    return result;
                }
            }
        }
        return Boolean.valueOf(false);
    }

    public boolean onOverrideUrlLoading(String url) {
        for (PluginEntry entry : this.entryMap.values()) {
            CordovaPlugin plugin = (CordovaPlugin) this.pluginMap.get(entry.service);
            if (plugin != null && plugin.onOverrideUrlLoading(url)) {
                return true;
            }
        }
        return false;
    }

    public void onReset() {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                plugin.onReset();
            }
        }
    }

    Uri remapUri(Uri uri) {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                Uri ret = plugin.remapUri(uri);
                if (ret != null) {
                    return ret;
                }
            }
        }
        return null;
    }

    private CordovaPlugin instantiatePlugin(String className) {
        CordovaPlugin ret = null;
        Exception e = null;
        if (className != null) {
            try {
                if (!"".equals(className)) {
                    e = Class.forName(className);
                    if (((e == null ? 1 : 0) & CordovaPlugin.class.isAssignableFrom(e)) != 0) {
                        ret = (CordovaPlugin) e.newInstance();
                    }
                    return ret;
                }
            } catch (Exception e2) {
                e2.printStackTrace();
                PrintStream printStream = System.out;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Error adding plugin ");
                stringBuilder.append(className);
                stringBuilder.append(FileUtils.HIDDEN_PREFIX);
                printStream.println(stringBuilder.toString());
            }
        }
        if (e2 == null) {
        }
        if (((e2 == null ? 1 : 0) & CordovaPlugin.class.isAssignableFrom(e2)) != 0) {
            ret = (CordovaPlugin) e2.newInstance();
        }
        return ret;
    }

    public void onConfigurationChanged(Configuration newConfig) {
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                plugin.onConfigurationChanged(newConfig);
            }
        }
    }

    public Bundle onSaveInstanceState() {
        Bundle state = new Bundle();
        for (CordovaPlugin plugin : this.pluginMap.values()) {
            if (plugin != null) {
                Bundle pluginState = plugin.onSaveInstanceState();
                if (pluginState != null) {
                    state.putBundle(plugin.getServiceName(), pluginState);
                }
            }
        }
        return state;
    }
}
