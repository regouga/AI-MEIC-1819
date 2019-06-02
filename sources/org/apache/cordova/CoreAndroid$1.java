package org.apache.cordova;

class CoreAndroid$1 implements Runnable {
    final /* synthetic */ CoreAndroid this$0;

    CoreAndroid$1(CoreAndroid this$0) {
        this.this$0 = this$0;
    }

    public void run() {
        this.this$0.webView.getPluginManager().postMessage("spinner", "stop");
    }
}
