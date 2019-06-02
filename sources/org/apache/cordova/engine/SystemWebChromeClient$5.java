package org.apache.cordova.engine;

import android.content.Intent;
import android.net.Uri;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient.FileChooserParams;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;

class SystemWebChromeClient$5 extends CordovaPlugin {
    final /* synthetic */ SystemWebChromeClient this$0;
    final /* synthetic */ ValueCallback val$filePathsCallback;

    SystemWebChromeClient$5(SystemWebChromeClient this$0, ValueCallback valueCallback) {
        this.this$0 = this$0;
        this.val$filePathsCallback = valueCallback;
    }

    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        Uri[] result = FileChooserParams.parseResult(resultCode, intent);
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Receive file chooser URL: ");
        stringBuilder.append(result);
        LOG.m0d("SystemWebChromeClient", stringBuilder.toString());
        this.val$filePathsCallback.onReceiveValue(result);
    }
}
