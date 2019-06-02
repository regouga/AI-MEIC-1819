package org.apache.cordova;

import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import org.apache.cordova.CordovaActivity.C00004;

class CordovaActivity$4$1 implements OnClickListener {
    final /* synthetic */ C00004 this$1;

    CordovaActivity$4$1(C00004 this$1) {
        this.this$1 = this$1;
    }

    public void onClick(DialogInterface dialog, int which) {
        dialog.dismiss();
        if (this.this$1.val$exit) {
            this.this$1.this$0.finish();
        }
    }
}
