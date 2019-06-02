package org.apache.cordova;

import org.apache.cordova.NativeToJsMessageQueue.EvalBridgeMode;

class NativeToJsMessageQueue$EvalBridgeMode$1 implements Runnable {
    final /* synthetic */ EvalBridgeMode this$0;
    final /* synthetic */ NativeToJsMessageQueue val$queue;

    NativeToJsMessageQueue$EvalBridgeMode$1(EvalBridgeMode this$0, NativeToJsMessageQueue nativeToJsMessageQueue) {
        this.this$0 = this$0;
        this.val$queue = nativeToJsMessageQueue;
    }

    public void run() {
        String js = this.val$queue.popAndEncodeAsJs();
        if (js != null) {
            EvalBridgeMode.access$400(this.this$0).evaluateJavascript(js, null);
        }
    }
}
