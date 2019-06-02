package org.apache.cordova;

class NativeToJsMessageQueue$LoadUrlBridgeMode$1 implements Runnable {
    final /* synthetic */ NativeToJsMessageQueue$LoadUrlBridgeMode this$0;
    final /* synthetic */ NativeToJsMessageQueue val$queue;

    NativeToJsMessageQueue$LoadUrlBridgeMode$1(NativeToJsMessageQueue$LoadUrlBridgeMode this$0, NativeToJsMessageQueue nativeToJsMessageQueue) {
        this.this$0 = this$0;
        this.val$queue = nativeToJsMessageQueue;
    }

    public void run() {
        String js = this.val$queue.popAndEncodeAsJs();
        if (js != null) {
            CordovaWebViewEngine access$000 = NativeToJsMessageQueue$LoadUrlBridgeMode.access$000(this.this$0);
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("javascript:");
            stringBuilder.append(js);
            access$000.loadUrl(stringBuilder.toString(), false);
        }
    }
}
