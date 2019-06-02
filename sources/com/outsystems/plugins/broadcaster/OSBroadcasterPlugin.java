package com.outsystems.plugins.broadcaster;

import android.util.Log;
import org.apache.cordova.CordovaPlugin;

public class OSBroadcasterPlugin extends CordovaPlugin {
    public static final String CORDOVA_SERVICE_NAME = "OSBroadcaster";
    private OSBroadcaster broadcaster;

    protected void pluginInitialize() {
        Log.v(CORDOVA_SERVICE_NAME, "pluginInitialize: started");
        this.broadcaster = new OSBroadcaster(this.cordova.getActivity());
        Log.v(CORDOVA_SERVICE_NAME, "pluginInitialize: finished");
    }

    public void onDestroy() {
        this.broadcaster.terminate();
        super.onDestroy();
    }
}
