package org.apache.cordova;

import android.content.DialogInterface;
import android.content.DialogInterface.OnKeyListener;
import android.view.KeyEvent;

class CordovaDialogsHelper$3 implements OnKeyListener {
    final /* synthetic */ CordovaDialogsHelper this$0;
    final /* synthetic */ CordovaDialogsHelper$Result val$result;

    CordovaDialogsHelper$3(CordovaDialogsHelper this$0, CordovaDialogsHelper$Result cordovaDialogsHelper$Result) {
        this.this$0 = this$0;
        this.val$result = cordovaDialogsHelper$Result;
    }

    public boolean onKey(DialogInterface dialog, int keyCode, KeyEvent event) {
        if (keyCode != 4) {
            return true;
        }
        this.val$result.gotResult(true, null);
        return false;
    }
}
