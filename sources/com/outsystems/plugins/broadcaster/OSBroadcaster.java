package com.outsystems.plugins.broadcaster;

import android.content.Context;
import android.content.Intent;
import android.os.Parcelable;
import android.support.annotation.NonNull;
import android.support.v4.content.LocalBroadcastManager;
import com.outsystems.plugins.broadcaster.constants.Constants;
import com.outsystems.plugins.broadcaster.emitters.OSNetworkEventEmitter;
import com.outsystems.plugins.broadcaster.events.OSNetworkEvent;
import com.outsystems.plugins.broadcaster.interfaces.BroadcasterListener;
import com.outsystems.plugins.broadcaster.interfaces.Event;
import com.outsystems.plugins.broadcaster.interfaces.EventEmitter;

public class OSBroadcaster implements BroadcasterListener {
    private final Context context;
    private EventEmitter networkEventEmitter = new OSNetworkEventEmitter(this.context, this);

    OSBroadcaster(@NonNull Context context) {
        this.context = context.getApplicationContext();
        this.networkEventEmitter.start();
    }

    synchronized void terminate() {
        this.networkEventEmitter.stop();
        this.networkEventEmitter = null;
    }

    public void notifyEvent(@NonNull Event event) {
        if (event instanceof OSNetworkEvent) {
            Intent intent = new Intent(Constants.NETWORK_EVENT);
            intent.putExtra(Constants.NETWORK_EVENT, (Parcelable) event);
            LocalBroadcastManager.getInstance(this.context).sendBroadcast(intent);
        }
    }
}
