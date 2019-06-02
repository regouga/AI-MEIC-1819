package com.outsystems.plugins.applicationinfo;

import android.util.Log;
import com.outsystems.plugins.applicationinfo.interfaces.ApplicationInfo;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class OSApplicationInfoPlugin extends CordovaPlugin {
    private static final String ACTION_GET_APP_VERSION = "getAppVersion";
    private static final String ACTION_GET_APP_VERSION_NUMBER = "getAppVersionNumber";
    private static final String ACTION_GET_NATIVE_SHELL_VERSION = "getNativeShellVersion";
    private static final String ACTION_GET_PLATFORM_VERSION = "getPlatformVersion";
    private ApplicationInfo applicationInfo;

    protected void pluginInitialize() {
        Log.d(getClass().getName(), "Plugin Initialize: started");
        OSApplicationInfo.init(this.cordova.getActivity().getApplicationContext(), this.preferences.getAll());
        this.applicationInfo = OSApplicationInfo.getInstance();
        Log.d(getClass().getName(), "Plugin Initialize: finished");
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (ACTION_GET_PLATFORM_VERSION.equals(action)) {
            callbackContext.success(this.applicationInfo.getPlatformVersion());
            return true;
        } else if (ACTION_GET_NATIVE_SHELL_VERSION.equals(action)) {
            callbackContext.success(this.applicationInfo.getNativeShellVersion());
            return true;
        } else if (ACTION_GET_APP_VERSION.equals(action)) {
            callbackContext.success(this.applicationInfo.getAppVersion());
            return true;
        } else if (ACTION_GET_APP_VERSION_NUMBER.equals(action)) {
            callbackContext.success(this.applicationInfo.getAppVersionNumber());
            return true;
        } else {
            callbackContext.error("Invalid operation");
            return false;
        }
    }
}
