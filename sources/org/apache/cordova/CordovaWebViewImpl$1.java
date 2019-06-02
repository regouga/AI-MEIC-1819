package org.apache.cordova;

import org.json.JSONException;
import org.json.JSONObject;

class CordovaWebViewImpl$1 implements Runnable {
    final /* synthetic */ CordovaWebViewImpl this$0;
    final /* synthetic */ String val$url;

    CordovaWebViewImpl$1(CordovaWebViewImpl this$0, String str) {
        this.this$0 = this$0;
        this.val$url = str;
    }

    public void run() {
        this.this$0.stopLoading();
        LOG.e(CordovaWebViewImpl.TAG, "CordovaWebView: TIMEOUT ERROR!");
        JSONObject data = new JSONObject();
        try {
            data.put("errorCode", -6);
            data.put("description", "The connection to the server was unsuccessful.");
            data.put("url", this.val$url);
        } catch (JSONException e) {
        }
        CordovaWebViewImpl.access$000(this.this$0).postMessage("onReceivedError", data);
    }
}
