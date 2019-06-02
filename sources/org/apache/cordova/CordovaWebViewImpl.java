package org.apache.cordova;

import android.annotation.SuppressLint;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build.VERSION;
import android.support.v4.view.MotionEventCompat;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient.CustomViewCallback;
import android.widget.FrameLayout.LayoutParams;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.apache.cordova.engine.SystemWebViewEngine;

public class CordovaWebViewImpl implements CordovaWebView {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    public static final String TAG = "CordovaWebViewImpl";
    private CoreAndroid appPlugin;
    private Set<Integer> boundKeyCodes = new HashSet();
    private CordovaInterface cordova;
    protected final CordovaWebViewEngine engine;
    private CordovaWebViewImpl$EngineClient engineClient = new CordovaWebViewImpl$EngineClient(this);
    private boolean hasPausedEver;
    private int loadUrlTimeout = 0;
    String loadedUrl;
    private View mCustomView;
    private CustomViewCallback mCustomViewCallback;
    private NativeToJsMessageQueue nativeToJsMessageQueue;
    private PluginManager pluginManager;
    private CordovaPreferences preferences;
    private CordovaResourceApi resourceApi;

    public static CordovaWebViewEngine createEngine(Context context, CordovaPreferences preferences) {
        try {
            return (CordovaWebViewEngine) Class.forName(preferences.getString("webview", SystemWebViewEngine.class.getCanonicalName())).getConstructor(new Class[]{Context.class, CordovaPreferences.class}).newInstance(new Object[]{context, preferences});
        } catch (Exception e) {
            throw new RuntimeException("Failed to create webview. ", e);
        }
    }

    public CordovaWebViewImpl(CordovaWebViewEngine cordovaWebViewEngine) {
        this.engine = cordovaWebViewEngine;
    }

    public void init(CordovaInterface cordova) {
        init(cordova, new ArrayList(), new CordovaPreferences());
    }

    @SuppressLint({"Assert"})
    public void init(CordovaInterface cordova, List<PluginEntry> pluginEntries, CordovaPreferences preferences) {
        if (this.cordova == null) {
            this.cordova = cordova;
            this.preferences = preferences;
            this.pluginManager = new PluginManager(this, this.cordova, pluginEntries);
            this.resourceApi = new CordovaResourceApi(this.engine.getView().getContext(), this.pluginManager);
            this.nativeToJsMessageQueue = new NativeToJsMessageQueue();
            this.nativeToJsMessageQueue.addBridgeMode(new NativeToJsMessageQueue$NoOpBridgeMode());
            this.nativeToJsMessageQueue.addBridgeMode(new NativeToJsMessageQueue$LoadUrlBridgeMode(this.engine, cordova));
            if (preferences.getBoolean("DisallowOverscroll", false)) {
                this.engine.getView().setOverScrollMode(2);
            }
            this.engine.init(this, cordova, this.engineClient, this.resourceApi, this.pluginManager, this.nativeToJsMessageQueue);
            this.pluginManager.addService(CoreAndroid.PLUGIN_NAME, "org.apache.cordova.CoreAndroid");
            this.pluginManager.init();
            return;
        }
        throw new IllegalStateException();
    }

    public boolean isInitialized() {
        return this.cordova != null;
    }

    public void loadUrlIntoView(String url, boolean recreatePlugins) {
        String str = TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(">>> loadUrl(");
        stringBuilder.append(url);
        stringBuilder.append(")");
        LOG.d(str, stringBuilder.toString());
        boolean z = false;
        if (!url.equals("about:blank")) {
            if (!url.startsWith("javascript:")) {
                int currentLoadUrlTimeout;
                int loadUrlTimeoutValue;
                if (!recreatePlugins) {
                    if (this.loadedUrl != null) {
                        recreatePlugins = z;
                        if (recreatePlugins) {
                            if (this.loadedUrl != null) {
                                this.appPlugin = null;
                                this.pluginManager.init();
                            }
                            this.loadedUrl = url;
                        }
                        currentLoadUrlTimeout = this.loadUrlTimeout;
                        loadUrlTimeoutValue = this.preferences.getInteger("LoadUrlTimeoutValue", 20000);
                        this.cordova.getActivity().runOnUiThread(new CordovaWebViewImpl$3(this, loadUrlTimeoutValue, new CordovaWebViewImpl$2(this, loadUrlTimeoutValue, currentLoadUrlTimeout, new CordovaWebViewImpl$1(this, url)), url, recreatePlugins));
                        return;
                    }
                }
                z = true;
                recreatePlugins = z;
                if (recreatePlugins) {
                    if (this.loadedUrl != null) {
                        this.appPlugin = null;
                        this.pluginManager.init();
                    }
                    this.loadedUrl = url;
                }
                currentLoadUrlTimeout = this.loadUrlTimeout;
                loadUrlTimeoutValue = this.preferences.getInteger("LoadUrlTimeoutValue", 20000);
                this.cordova.getActivity().runOnUiThread(new CordovaWebViewImpl$3(this, loadUrlTimeoutValue, new CordovaWebViewImpl$2(this, loadUrlTimeoutValue, currentLoadUrlTimeout, new CordovaWebViewImpl$1(this, url)), url, recreatePlugins));
                return;
            }
        }
        this.engine.loadUrl(url, false);
    }

    public void loadUrl(String url) {
        loadUrlIntoView(url, true);
    }

    public void showWebPage(String url, boolean openExternal, boolean clearHistory, Map<String, Object> map) {
        String str;
        StringBuilder stringBuilder;
        LOG.d(TAG, "showWebPage(%s, %b, %b, HashMap)", new Object[]{url, Boolean.valueOf(openExternal), Boolean.valueOf(clearHistory)});
        if (clearHistory) {
            this.engine.clearHistory();
        }
        String str2;
        StringBuilder stringBuilder2;
        if (openExternal) {
            if (this.pluginManager.shouldOpenExternalUrl(url).booleanValue()) {
                try {
                    Intent intent = new Intent("android.intent.action.VIEW");
                    intent.addCategory("android.intent.category.BROWSABLE");
                    Uri uri = Uri.parse(url);
                    if ("file".equals(uri.getScheme())) {
                        intent.setDataAndType(uri, this.resourceApi.getMimeType(uri));
                    } else {
                        intent.setData(uri);
                    }
                    this.cordova.getActivity().startActivity(intent);
                } catch (ActivityNotFoundException e) {
                    str = TAG;
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Error loading url ");
                    stringBuilder.append(url);
                    LOG.e(str, stringBuilder.toString(), e);
                } catch (Exception e2) {
                    if (VERSION.SDK_INT >= 24) {
                        str = TAG;
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Error loading url ");
                        stringBuilder.append(url);
                        stringBuilder.append(" with error on file URI exposed");
                        LOG.e(str, stringBuilder.toString(), e2);
                    }
                }
                return;
            }
            str2 = TAG;
            stringBuilder2 = new StringBuilder();
            stringBuilder2.append("showWebPage: Refusing to send intent for URL since it is not in the <allow-intent> whitelist. URL=");
            stringBuilder2.append(url);
            LOG.w(str2, stringBuilder2.toString());
        } else if (this.pluginManager.shouldAllowNavigation(url)) {
            loadUrlIntoView(url, true);
        } else {
            str2 = TAG;
            stringBuilder2 = new StringBuilder();
            stringBuilder2.append("showWebPage: Refusing to load URL into webview since it is not in the <allow-navigation> whitelist. URL=");
            stringBuilder2.append(url);
            LOG.w(str2, stringBuilder2.toString());
        }
    }

    @Deprecated
    public void showCustomView(View view, CustomViewCallback callback) {
        LOG.d(TAG, "showing Custom View");
        if (this.mCustomView != null) {
            callback.onCustomViewHidden();
            return;
        }
        this.mCustomView = view;
        this.mCustomViewCallback = callback;
        ViewGroup parent = (ViewGroup) this.engine.getView().getParent();
        parent.addView(view, new LayoutParams(-1, -1, 17));
        this.engine.getView().setVisibility(8);
        parent.setVisibility(0);
        parent.bringToFront();
    }

    @Deprecated
    public void hideCustomView() {
        if (this.mCustomView != null) {
            LOG.d(TAG, "Hiding Custom View");
            this.mCustomView.setVisibility(8);
            ((ViewGroup) this.engine.getView().getParent()).removeView(this.mCustomView);
            this.mCustomView = null;
            this.mCustomViewCallback.onCustomViewHidden();
            this.engine.getView().setVisibility(0);
        }
    }

    @Deprecated
    public boolean isCustomViewShowing() {
        return this.mCustomView != null;
    }

    @Deprecated
    public void sendJavascript(String statement) {
        this.nativeToJsMessageQueue.addJavaScript(statement);
    }

    public void sendPluginResult(PluginResult cr, String callbackId) {
        this.nativeToJsMessageQueue.addPluginResult(cr, callbackId);
    }

    public PluginManager getPluginManager() {
        return this.pluginManager;
    }

    public CordovaPreferences getPreferences() {
        return this.preferences;
    }

    public ICordovaCookieManager getCookieManager() {
        return this.engine.getCookieManager();
    }

    public CordovaResourceApi getResourceApi() {
        return this.resourceApi;
    }

    public CordovaWebViewEngine getEngine() {
        return this.engine;
    }

    public View getView() {
        return this.engine.getView();
    }

    public Context getContext() {
        return this.engine.getView().getContext();
    }

    private void sendJavascriptEvent(String event) {
        if (this.appPlugin == null) {
            this.appPlugin = (CoreAndroid) this.pluginManager.getPlugin(CoreAndroid.PLUGIN_NAME);
        }
        CoreAndroid coreAndroid = this.appPlugin;
        if (coreAndroid == null) {
            LOG.w(TAG, "Unable to fire event without existing plugin");
        } else {
            coreAndroid.fireJavascriptEvent(event);
        }
    }

    public void setButtonPlumbedToJs(int keyCode, boolean override) {
        if (!(keyCode == 4 || keyCode == 82)) {
            switch (keyCode) {
                case MotionEventCompat.AXIS_DISTANCE /*24*/:
                case 25:
                    break;
                default:
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("Unsupported keycode: ");
                    stringBuilder.append(keyCode);
                    throw new IllegalArgumentException(stringBuilder.toString());
            }
        }
        if (override) {
            this.boundKeyCodes.add(Integer.valueOf(keyCode));
        } else {
            this.boundKeyCodes.remove(Integer.valueOf(keyCode));
        }
    }

    public boolean isButtonPlumbedToJs(int keyCode) {
        return this.boundKeyCodes.contains(Integer.valueOf(keyCode));
    }

    public Object postMessage(String id, Object data) {
        return this.pluginManager.postMessage(id, data);
    }

    public String getUrl() {
        return this.engine.getUrl();
    }

    public void stopLoading() {
        this.loadUrlTimeout++;
    }

    public boolean canGoBack() {
        return this.engine.canGoBack();
    }

    public void clearCache() {
        this.engine.clearCache();
    }

    @Deprecated
    public void clearCache(boolean b) {
        this.engine.clearCache();
    }

    public void clearHistory() {
        this.engine.clearHistory();
    }

    public boolean backHistory() {
        return this.engine.goBack();
    }

    public void onNewIntent(Intent intent) {
        PluginManager pluginManager = this.pluginManager;
        if (pluginManager != null) {
            pluginManager.onNewIntent(intent);
        }
    }

    public void handlePause(boolean keepRunning) {
        if (isInitialized()) {
            this.hasPausedEver = true;
            this.pluginManager.onPause(keepRunning);
            sendJavascriptEvent("pause");
            if (!keepRunning) {
                this.engine.setPaused(true);
            }
        }
    }

    public void handleResume(boolean keepRunning) {
        if (isInitialized()) {
            this.engine.setPaused(false);
            this.pluginManager.onResume(keepRunning);
            if (this.hasPausedEver) {
                sendJavascriptEvent("resume");
            }
        }
    }

    public void handleStart() {
        if (isInitialized()) {
            this.pluginManager.onStart();
        }
    }

    public void handleStop() {
        if (isInitialized()) {
            this.pluginManager.onStop();
        }
    }

    public void handleDestroy() {
        if (isInitialized()) {
            this.loadUrlTimeout++;
            this.pluginManager.onDestroy();
            loadUrl("about:blank");
            this.engine.destroy();
            hideCustomView();
        }
    }
}
