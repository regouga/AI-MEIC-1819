package org.apache.cordova;

class CoreAndroid$3 implements Runnable {
    final /* synthetic */ CoreAndroid this$0;

    CoreAndroid$3(CoreAndroid this$0) {
        this.this$0 = this$0;
    }

    public void run() {
        this.this$0.webView.clearHistory();
    }
}
