package org.apache.cordova;

import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;

class CordovaDialogsHelper$1 implements OnClickListener {
    final /* synthetic */ CordovaDialogsHelper this$0;
    final /* synthetic */ CordovaDialogsHelper$Result val$result;

    CordovaDialogsHelper$1(CordovaDialogsHelper this$0, CordovaDialogsHelper$Result cordovaDialogsHelper$Result) {
        this.this$0 = this$0;
        this.val$result = cordovaDialogsHelper$Result;
    }

    public void onClick(DialogInterface dialog, int which) {
        this.val$result.gotResult(true, null);
    }
}
