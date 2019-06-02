package org.apache.cordova;

import android.content.DialogInterface;
import android.content.DialogInterface.OnCancelListener;

class CordovaDialogsHelper$2 implements OnCancelListener {
    final /* synthetic */ CordovaDialogsHelper this$0;
    final /* synthetic */ CordovaDialogsHelper$Result val$result;

    CordovaDialogsHelper$2(CordovaDialogsHelper this$0, CordovaDialogsHelper$Result cordovaDialogsHelper$Result) {
        this.this$0 = this$0;
        this.val$result = cordovaDialogsHelper$Result;
    }

    public void onCancel(DialogInterface dialog) {
        this.val$result.gotResult(false, null);
    }
}
