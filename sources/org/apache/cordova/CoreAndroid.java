package org.apache.cordova;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.IntentFilter;
import java.util.HashMap;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class CoreAndroid extends CordovaPlugin {
    public static final String PLUGIN_NAME = "CoreAndroid";
    protected static final String TAG = "CordovaApp";
    private CallbackContext messageChannel;
    private final Object messageChannelLock = new Object();
    private PluginResult pendingPause;
    private PluginResult pendingResume;
    private BroadcastReceiver telephonyReceiver;

    /* renamed from: org.apache.cordova.CoreAndroid$2 */
    class C00042 implements Runnable {
        C00042() {
        }

        public void run() {
            CoreAndroid.this.webView.clearCache();
        }
    }

    /* renamed from: org.apache.cordova.CoreAndroid$4 */
    class C00054 implements Runnable {
        C00054() {
        }

        public void run() {
            CoreAndroid.this.webView.backHistory();
        }
    }

    public void fireJavascriptEvent(String action) {
        sendEventMessage(action);
    }

    public void pluginInitialize() {
        initTelephonyReceiver();
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Status status = Status.OK;
        String result = "";
        try {
            if (action.equals("clearCache")) {
                clearCache();
            } else if (action.equals("show")) {
                this.cordova.getActivity().runOnUiThread(new CoreAndroid$1(this));
            } else if (action.equals("loadUrl")) {
                loadUrl(args.getString(0), args.optJSONObject(1));
            } else if (!action.equals("cancelLoadUrl")) {
                if (action.equals("clearHistory")) {
                    clearHistory();
                } else if (action.equals("backHistory")) {
                    backHistory();
                } else if (action.equals("overrideButton")) {
                    overrideButton(args.getString(0), args.getBoolean(1));
                } else if (action.equals("overrideBackbutton")) {
                    overrideBackbutton(args.getBoolean(0));
                } else if (action.equals("exitApp")) {
                    exitApp();
                } else if (action.equals("messageChannel")) {
                    synchronized (this.messageChannelLock) {
                        this.messageChannel = callbackContext;
                        if (this.pendingPause != null) {
                            sendEventMessage(this.pendingPause);
                            this.pendingPause = null;
                        }
                        if (this.pendingResume != null) {
                            sendEventMessage(this.pendingResume);
                            this.pendingResume = null;
                        }
                    }
                    return true;
                }
            }
            callbackContext.sendPluginResult(new PluginResult(status, result));
            return true;
        } catch (JSONException e) {
            callbackContext.sendPluginResult(new PluginResult(Status.JSON_EXCEPTION));
            return false;
        }
    }

    public void clearCache() {
        this.cordova.getActivity().runOnUiThread(new C00042());
    }

    public void loadUrl(String url, JSONObject props) throws JSONException {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("App.loadUrl(");
        stringBuilder.append(url);
        stringBuilder.append(",");
        stringBuilder.append(props);
        stringBuilder.append(")");
        LOG.m0d("App", stringBuilder.toString());
        int wait = 0;
        boolean openExternal = false;
        boolean clearHistory = false;
        HashMap<String, Object> params = new HashMap();
        if (props != null) {
            JSONArray keys = props.names();
            for (int i = 0; i < keys.length(); i++) {
                String key = keys.getString(i);
                if (key.equals("wait")) {
                    wait = props.getInt(key);
                } else if (key.equalsIgnoreCase("openexternal")) {
                    openExternal = props.getBoolean(key);
                } else if (key.equalsIgnoreCase("clearhistory")) {
                    clearHistory = props.getBoolean(key);
                } else {
                    Object value = props.get(key);
                    if (value != null) {
                        if (value.getClass().equals(String.class)) {
                            params.put(key, (String) value);
                        } else if (value.getClass().equals(Boolean.class)) {
                            params.put(key, (Boolean) value);
                        } else if (value.getClass().equals(Integer.class)) {
                            params.put(key, (Integer) value);
                        }
                    }
                }
            }
        }
        if (wait > 0) {
            try {
                synchronized (this) {
                    wait((long) wait);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        this.webView.showWebPage(url, openExternal, clearHistory, params);
    }

    public void clearHistory() {
        this.cordova.getActivity().runOnUiThread(new CoreAndroid$3(this));
    }

    public void backHistory() {
        this.cordova.getActivity().runOnUiThread(new C00054());
    }

    public void overrideBackbutton(boolean override) {
        LOG.m6i("App", "WARNING: Back Button Default Behavior will be overridden.  The backbutton event will be fired!");
        this.webView.setButtonPlumbedToJs(4, override);
    }

    public void overrideButton(String button, boolean override) {
        LOG.m6i("App", "WARNING: Volume Button Default Behavior will be overridden.  The volume event will be fired!");
        if (button.equals("volumeup")) {
            this.webView.setButtonPlumbedToJs(24, override);
        } else if (button.equals("volumedown")) {
            this.webView.setButtonPlumbedToJs(25, override);
        } else if (button.equals("menubutton")) {
            this.webView.setButtonPlumbedToJs(82, override);
        }
    }

    public boolean isBackbuttonOverridden() {
        return this.webView.isButtonPlumbedToJs(4);
    }

    public void exitApp() {
        this.webView.getPluginManager().postMessage("exit", null);
    }

    private void initTelephonyReceiver() {
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("android.intent.action.PHONE_STATE");
        this.telephonyReceiver = new CoreAndroid$5(this);
        this.webView.getContext().registerReceiver(this.telephonyReceiver, intentFilter);
    }

    private void sendEventMessage(String action) {
        JSONObject obj = new JSONObject();
        try {
            obj.put("action", action);
        } catch (Throwable e) {
            LOG.m4e(TAG, "Failed to create event message", e);
        }
        PluginResult result = new PluginResult(Status.OK, obj);
        if (this.messageChannel == null) {
            String str = TAG;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Request to send event before messageChannel initialised: ");
            stringBuilder.append(action);
            LOG.m6i(str, stringBuilder.toString());
            if ("pause".equals(action)) {
                this.pendingPause = result;
                return;
            } else if ("resume".equals(action)) {
                this.pendingPause = null;
                return;
            } else {
                return;
            }
        }
        sendEventMessage(result);
    }

    private void sendEventMessage(PluginResult payload) {
        payload.setKeepCallback(true);
        CallbackContext callbackContext = this.messageChannel;
        if (callbackContext != null) {
            callbackContext.sendPluginResult(payload);
        }
    }

    public void onDestroy() {
        this.webView.getContext().unregisterReceiver(this.telephonyReceiver);
    }

    public void sendResumeEvent(PluginResult resumeEvent) {
        synchronized (this.messageChannelLock) {
            if (this.messageChannel != null) {
                sendEventMessage(resumeEvent);
            } else {
                this.pendingResume = resumeEvent;
            }
        }
    }

    public static Object getBuildConfigValue(Context ctx, String key) {
        Object obj = null;
        try {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(ctx.getPackageName());
            stringBuilder.append(".BuildConfig");
            obj = Class.forName(stringBuilder.toString()).getField(key).get(null);
            return obj;
        } catch (ClassNotFoundException e) {
            LOG.m0d(TAG, "Unable to get the BuildConfig, is this built with ANT?");
            e.printStackTrace();
            return obj;
        } catch (NoSuchFieldException e2) {
            String str = TAG;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append(key);
            stringBuilder2.append(" is not a valid field. Check your build.gradle");
            LOG.m0d(str, stringBuilder2.toString());
            return obj;
        } catch (IllegalAccessException e3) {
            LOG.m0d(TAG, "Illegal Access Exception: Let's print a stack trace.");
            e3.printStackTrace();
            return obj;
        }
    }
}
