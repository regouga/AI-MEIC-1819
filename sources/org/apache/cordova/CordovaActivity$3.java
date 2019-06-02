package org.apache.cordova;

class CordovaActivity$3 implements Runnable {
    final /* synthetic */ CordovaActivity this$0;
    final /* synthetic */ String val$description;
    final /* synthetic */ boolean val$exit;
    final /* synthetic */ String val$failingUrl;
    final /* synthetic */ CordovaActivity val$me;

    CordovaActivity$3(CordovaActivity this$0, boolean z, CordovaActivity cordovaActivity, String str, String str2) {
        this.this$0 = this$0;
        this.val$exit = z;
        this.val$me = cordovaActivity;
        this.val$description = str;
        this.val$failingUrl = str2;
    }

    public void run() {
        if (this.val$exit) {
            this.val$me.appView.getView().setVisibility(8);
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(this.val$description);
            stringBuilder.append(" (");
            stringBuilder.append(this.val$failingUrl);
            stringBuilder.append(")");
            this.val$me.displayError("Application Error", stringBuilder.toString(), "OK", this.val$exit);
        }
    }
}
