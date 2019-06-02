package org.apache.cordova.engine;

import android.webkit.JsPromptResult;
import org.apache.cordova.CordovaDialogsHelper$Result;

class SystemWebChromeClient$3 implements CordovaDialogsHelper$Result {
    final /* synthetic */ SystemWebChromeClient this$0;
    final /* synthetic */ JsPromptResult val$result;

    SystemWebChromeClient$3(SystemWebChromeClient this$0, JsPromptResult jsPromptResult) {
        this.this$0 = this$0;
        this.val$result = jsPromptResult;
    }

    public void gotResult(boolean success, String value) {
        if (success) {
            this.val$result.confirm(value);
        } else {
            this.val$result.cancel();
        }
    }
}
