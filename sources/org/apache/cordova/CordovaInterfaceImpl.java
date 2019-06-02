package org.apache.cordova;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Build.VERSION;
import android.os.Bundle;
import android.util.Pair;
import com.ipaulpro.afilechooser.utils.FileUtils;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONException;
import org.json.JSONObject;

public class CordovaInterfaceImpl implements CordovaInterface {
    private static final String TAG = "CordovaInterfaceImpl";
    protected Activity activity;
    protected CordovaPlugin activityResultCallback;
    protected int activityResultRequestCode;
    protected boolean activityWasDestroyed;
    protected String initCallbackService;
    protected CallbackMap permissionResultCallbacks;
    protected PluginManager pluginManager;
    protected Bundle savedPluginState;
    protected ActivityResultHolder savedResult;
    protected ExecutorService threadPool;

    private static class ActivityResultHolder {
        private Intent intent;
        private int requestCode;
        private int resultCode;

        public ActivityResultHolder(int requestCode, int resultCode, Intent intent) {
            this.requestCode = requestCode;
            this.resultCode = resultCode;
            this.intent = intent;
        }
    }

    public CordovaInterfaceImpl(Activity activity) {
        this(activity, Executors.newCachedThreadPool());
    }

    public CordovaInterfaceImpl(Activity activity, ExecutorService threadPool) {
        this.activityWasDestroyed = false;
        this.activity = activity;
        this.threadPool = threadPool;
        this.permissionResultCallbacks = new CallbackMap();
    }

    public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
        setActivityResultCallback(command);
        try {
            this.activity.startActivityForResult(intent, requestCode);
        } catch (RuntimeException e) {
            this.activityResultCallback = null;
            throw e;
        }
    }

    public void setActivityResultCallback(CordovaPlugin plugin) {
        CordovaPlugin cordovaPlugin = this.activityResultCallback;
        if (cordovaPlugin != null) {
            cordovaPlugin.onActivityResult(this.activityResultRequestCode, 0, null);
        }
        this.activityResultCallback = plugin;
    }

    public Activity getActivity() {
        return this.activity;
    }

    public Context getContext() {
        return this.activity;
    }

    public Object onMessage(String id, Object data) {
        if ("exit".equals(id)) {
            this.activity.finish();
        }
        return null;
    }

    public ExecutorService getThreadPool() {
        return this.threadPool;
    }

    public void onCordovaInit(PluginManager pluginManager) {
        this.pluginManager = pluginManager;
        ActivityResultHolder activityResultHolder = this.savedResult;
        if (activityResultHolder != null) {
            onActivityResult(activityResultHolder.requestCode, this.savedResult.resultCode, this.savedResult.intent);
        } else if (this.activityWasDestroyed) {
            this.activityWasDestroyed = false;
            if (pluginManager != null) {
                CoreAndroid appPlugin = (CoreAndroid) pluginManager.getPlugin(CoreAndroid.PLUGIN_NAME);
                if (appPlugin != null) {
                    JSONObject obj = new JSONObject();
                    try {
                        obj.put("action", "resume");
                    } catch (JSONException e) {
                        LOG.e(TAG, "Failed to create event message", e);
                    }
                    appPlugin.sendResumeEvent(new PluginResult(Status.OK, obj));
                }
            }
        }
    }

    public boolean onActivityResult(int requestCode, int resultCode, Intent intent) {
        CordovaPlugin callback = this.activityResultCallback;
        if (callback == null && this.initCallbackService != null) {
            this.savedResult = new ActivityResultHolder(requestCode, resultCode, intent);
            PluginManager pluginManager = this.pluginManager;
            if (pluginManager != null) {
                callback = pluginManager.getPlugin(this.initCallbackService);
                if (callback != null) {
                    callback.onRestoreStateForActivityResult(this.savedPluginState.getBundle(callback.getServiceName()), new ResumeCallback(callback.getServiceName(), this.pluginManager));
                }
            }
        }
        this.activityResultCallback = null;
        if (callback != null) {
            LOG.d(TAG, "Sending activity result to plugin");
            this.initCallbackService = null;
            this.savedResult = null;
            callback.onActivityResult(requestCode, resultCode, intent);
            return true;
        }
        String str = TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Got an activity result, but no plugin was registered to receive it");
        stringBuilder.append(this.savedResult != null ? " yet!" : FileUtils.HIDDEN_PREFIX);
        LOG.w(str, stringBuilder.toString());
        return false;
    }

    public void setActivityResultRequestCode(int requestCode) {
        this.activityResultRequestCode = requestCode;
    }

    public void onSaveInstanceState(Bundle outState) {
        String serviceName = this.activityResultCallback;
        if (serviceName != null) {
            outState.putString("callbackService", serviceName.getServiceName());
        }
        PluginManager pluginManager = this.pluginManager;
        if (pluginManager != null) {
            outState.putBundle("plugin", pluginManager.onSaveInstanceState());
        }
    }

    public void restoreInstanceState(Bundle savedInstanceState) {
        this.initCallbackService = savedInstanceState.getString("callbackService");
        this.savedPluginState = savedInstanceState.getBundle("plugin");
        this.activityWasDestroyed = true;
    }

    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) throws JSONException {
        Pair<CordovaPlugin, Integer> callback = this.permissionResultCallbacks.getAndRemoveCallback(requestCode);
        if (callback != null) {
            ((CordovaPlugin) callback.first).onRequestPermissionResult(((Integer) callback.second).intValue(), permissions, grantResults);
        }
    }

    public void requestPermission(CordovaPlugin plugin, int requestCode, String permission) {
        requestPermissions(plugin, requestCode, new String[]{permission});
    }

    @SuppressLint({"NewApi"})
    public void requestPermissions(CordovaPlugin plugin, int requestCode, String[] permissions) {
        getActivity().requestPermissions(permissions, this.permissionResultCallbacks.registerCallback(plugin, requestCode));
    }

    public boolean hasPermission(String permission) {
        boolean z = true;
        if (VERSION.SDK_INT < 23) {
            return true;
        }
        if (this.activity.checkSelfPermission(permission) != 0) {
            z = false;
        }
        return z;
    }
}
