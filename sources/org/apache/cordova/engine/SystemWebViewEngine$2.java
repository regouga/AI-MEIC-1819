package org.apache.cordova.engine;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.webkit.WebSettings;

class SystemWebViewEngine$2 extends BroadcastReceiver {
    final /* synthetic */ SystemWebViewEngine this$0;
    final /* synthetic */ WebSettings val$settings;

    SystemWebViewEngine$2(SystemWebViewEngine this$0, WebSettings webSettings) {
        this.this$0 = this$0;
        this.val$settings = webSettings;
    }

    public void onReceive(Context context, Intent intent) {
        this.val$settings.getUserAgentString();
    }
}
