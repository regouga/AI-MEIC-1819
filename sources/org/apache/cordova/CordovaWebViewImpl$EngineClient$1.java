package org.apache.cordova;

class CordovaWebViewImpl$EngineClient$1 implements Runnable {
    final /* synthetic */ CordovaWebViewImpl$EngineClient this$1;

    CordovaWebViewImpl$EngineClient$1(CordovaWebViewImpl$EngineClient this$1) {
        this.this$1 = this$1;
    }

    public void run() {
        try {
            Thread.sleep(2000);
            CordovaWebViewImpl.access$200(this.this$1.this$0).getActivity().runOnUiThread(new CordovaWebViewImpl$EngineClient$1$1(this));
        } catch (InterruptedException e) {
        }
    }
}
