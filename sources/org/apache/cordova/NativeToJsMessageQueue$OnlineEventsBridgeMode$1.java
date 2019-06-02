package org.apache.cordova;

import org.apache.cordova.NativeToJsMessageQueue.OnlineEventsBridgeMode;

class NativeToJsMessageQueue$OnlineEventsBridgeMode$1 implements Runnable {
    final /* synthetic */ OnlineEventsBridgeMode this$0;

    NativeToJsMessageQueue$OnlineEventsBridgeMode$1(OnlineEventsBridgeMode this$0) {
        this.this$0 = this$0;
    }

    public void run() {
        OnlineEventsBridgeMode.access$102(this.this$0, false);
        OnlineEventsBridgeMode.access$202(this.this$0, true);
        OnlineEventsBridgeMode.access$300(this.this$0).setNetworkAvailable(true);
    }
}
