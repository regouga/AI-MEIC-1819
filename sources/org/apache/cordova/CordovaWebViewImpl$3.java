package org.apache.cordova;

class CordovaWebViewImpl$3 implements Runnable {
    final /* synthetic */ CordovaWebViewImpl this$0;
    final /* synthetic */ boolean val$_recreatePlugins;
    final /* synthetic */ int val$loadUrlTimeoutValue;
    final /* synthetic */ Runnable val$timeoutCheck;
    final /* synthetic */ String val$url;

    CordovaWebViewImpl$3(CordovaWebViewImpl this$0, int i, Runnable runnable, String str, boolean z) {
        this.this$0 = this$0;
        this.val$loadUrlTimeoutValue = i;
        this.val$timeoutCheck = runnable;
        this.val$url = str;
        this.val$_recreatePlugins = z;
    }

    public void run() {
        if (this.val$loadUrlTimeoutValue > 0) {
            CordovaWebViewImpl.access$200(this.this$0).getThreadPool().execute(this.val$timeoutCheck);
        }
        this.this$0.engine.loadUrl(this.val$url, this.val$_recreatePlugins);
    }
}
