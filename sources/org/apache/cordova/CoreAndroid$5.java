package org.apache.cordova;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.telephony.TelephonyManager;

class CoreAndroid$5 extends BroadcastReceiver {
    final /* synthetic */ CoreAndroid this$0;

    CoreAndroid$5(CoreAndroid this$0) {
        this.this$0 = this$0;
    }

    public void onReceive(Context context, Intent intent) {
        if (intent != null && intent.getAction().equals("android.intent.action.PHONE_STATE")) {
            if (intent.hasExtra("state")) {
                String extraData = intent.getStringExtra("state");
                if (extraData.equals(TelephonyManager.EXTRA_STATE_RINGING)) {
                    LOG.i("CordovaApp", "Telephone RINGING");
                    this.this$0.webView.getPluginManager().postMessage("telephone", "ringing");
                } else if (extraData.equals(TelephonyManager.EXTRA_STATE_OFFHOOK)) {
                    LOG.i("CordovaApp", "Telephone OFFHOOK");
                    this.this$0.webView.getPluginManager().postMessage("telephone", "offhook");
                } else if (extraData.equals(TelephonyManager.EXTRA_STATE_IDLE)) {
                    LOG.i("CordovaApp", "Telephone IDLE");
                    this.this$0.webView.getPluginManager().postMessage("telephone", "idle");
                }
            }
        }
    }
}
