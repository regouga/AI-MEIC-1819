package org.apache.cordova;

import android.app.Activity;

class CordovaActivity$1 extends CordovaInterfaceImpl {
    final /* synthetic */ CordovaActivity this$0;

    CordovaActivity$1(CordovaActivity this$0, Activity activity) {
        this.this$0 = this$0;
        super(activity);
    }

    public Object onMessage(String id, Object data) {
        return this.this$0.onMessage(id, data);
    }
}
