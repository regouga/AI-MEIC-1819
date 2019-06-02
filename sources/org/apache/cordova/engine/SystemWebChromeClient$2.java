package org.apache.cordova.engine;

import android.webkit.JsResult;
import org.apache.cordova.CordovaDialogsHelper$Result;

class SystemWebChromeClient$2 implements CordovaDialogsHelper$Result {
    final /* synthetic */ SystemWebChromeClient this$0;
    final /* synthetic */ JsResult val$result;

    SystemWebChromeClient$2(SystemWebChromeClient this$0, JsResult jsResult) {
        this.this$0 = this$0;
        this.val$result = jsResult;
    }

    public void gotResult(boolean success, String value) {
        if (success) {
            this.val$result.confirm();
        } else {
            this.val$result.cancel();
        }
    }
}
