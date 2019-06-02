package org.apache.cordova;

class CordovaWebViewImpl$2 implements Runnable {
    final /* synthetic */ CordovaWebViewImpl this$0;
    final /* synthetic */ int val$currentLoadUrlTimeout;
    final /* synthetic */ Runnable val$loadError;
    final /* synthetic */ int val$loadUrlTimeoutValue;

    CordovaWebViewImpl$2(CordovaWebViewImpl this$0, int i, int i2, Runnable runnable) {
        this.this$0 = this$0;
        this.val$loadUrlTimeoutValue = i;
        this.val$currentLoadUrlTimeout = i2;
        this.val$loadError = runnable;
    }

    public void run() {
        try {
            synchronized (this) {
                wait((long) this.val$loadUrlTimeoutValue);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        if (CordovaWebViewImpl.access$100(this.this$0) == this.val$currentLoadUrlTimeout) {
            CordovaWebViewImpl.access$200(this.this$0).getActivity().runOnUiThread(this.val$loadError);
        }
    }
}
