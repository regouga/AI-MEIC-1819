package com.outsystems.plugins.broadcaster.emitters;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.support.annotation.NonNull;
import com.outsystems.plugins.broadcaster.constants.Constants;
import com.outsystems.plugins.broadcaster.events.OSNetworkEvent;
import com.outsystems.plugins.broadcaster.interfaces.BroadcasterListener;
import com.outsystems.plugins.broadcaster.interfaces.EventEmitter;
import java.util.HashMap;
import java.util.Map;

public class OSNetworkEventEmitter extends BroadcastReceiver implements EventEmitter {
    private static final int INITIAL_CAPACITY = 2;
    private final BroadcasterListener broadcasterListener;
    private final Context context;
    private boolean isRunning = false;

    public OSNetworkEventEmitter(@NonNull Context context, @NonNull BroadcasterListener broadcasterListener) {
        this.context = context.getApplicationContext();
        this.broadcasterListener = broadcasterListener;
    }

    public void onReceive(Context context, Intent intent) {
        NetworkInfo activeNetworkInfo = ((ConnectivityManager) context.getApplicationContext().getSystemService("connectivity")).getActiveNetworkInfo();
        Map networkData = new HashMap(2);
        String str = Constants.NETWORK_STATUS;
        Object obj = (activeNetworkInfo == null || !activeNetworkInfo.isConnected()) ? Constants.NETWORK_OFFLINE : Constants.NETWORK_ONLINE;
        networkData.put(str, obj);
        this.broadcasterListener.notifyEvent(new OSNetworkEvent(networkData));
    }

    public synchronized void start() {
        if (!this.isRunning) {
            this.context.registerReceiver(this, new IntentFilter("android.net.conn.CONNECTIVITY_CHANGE"));
            this.isRunning = true;
        }
    }

    public synchronized void stop() {
        if (this.isRunning) {
            this.context.unregisterReceiver(this);
            this.isRunning = false;
        }
    }
}
