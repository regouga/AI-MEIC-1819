package org.apache.cordova;

class CordovaWebViewImpl$EngineClient$1$1 implements Runnable {
    final /* synthetic */ CordovaWebViewImpl$EngineClient$1 this$2;

    CordovaWebViewImpl$EngineClient$1$1(CordovaWebViewImpl$EngineClient$1 this$2) {
        this.this$2 = this$2;
    }

    public void run() {
        CordovaWebViewImpl.access$000(this.this$2.this$1.this$0).postMessage("spinner", "stop");
    }
}
