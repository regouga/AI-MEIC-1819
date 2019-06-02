package org.apache.cordova;

class CordovaActivity$2 implements Runnable {
    final /* synthetic */ CordovaActivity this$0;
    final /* synthetic */ String val$errorUrl;
    final /* synthetic */ CordovaActivity val$me;

    CordovaActivity$2(CordovaActivity this$0, CordovaActivity cordovaActivity, String str) {
        this.this$0 = this$0;
        this.val$me = cordovaActivity;
        this.val$errorUrl = str;
    }

    public void run() {
        this.val$me.appView.showWebPage(this.val$errorUrl, false, true, null);
    }
}
