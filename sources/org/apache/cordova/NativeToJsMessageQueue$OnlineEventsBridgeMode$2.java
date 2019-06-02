package org.apache.cordova;

import org.apache.cordova.NativeToJsMessageQueue.OnlineEventsBridgeMode;

class NativeToJsMessageQueue$OnlineEventsBridgeMode$2 implements Runnable {
    final /* synthetic */ OnlineEventsBridgeMode this$0;
    final /* synthetic */ NativeToJsMessageQueue val$queue;

    NativeToJsMessageQueue$OnlineEventsBridgeMode$2(OnlineEventsBridgeMode this$0, NativeToJsMessageQueue nativeToJsMessageQueue) {
        this.this$0 = this$0;
        this.val$queue = nativeToJsMessageQueue;
    }

    public void run() {
        if (!this.val$queue.isEmpty()) {
            OnlineEventsBridgeMode.access$202(this.this$0, false);
            OnlineEventsBridgeMode.access$300(this.this$0).setNetworkAvailable(OnlineEventsBridgeMode.access$100(this.this$0));
        }
    }
}
