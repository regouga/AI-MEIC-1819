package org.apache.cordova.engine;

import org.apache.cordova.C0006xfd61a34a;

class SystemWebViewEngine$1 implements C0006xfd61a34a {
    final /* synthetic */ SystemWebViewEngine this$0;

    SystemWebViewEngine$1(SystemWebViewEngine this$0) {
        this.this$0 = this$0;
    }

    public void setNetworkAvailable(boolean value) {
        if (this.this$0.webView != null) {
            this.this$0.webView.setNetworkAvailable(value);
        }
    }

    public void runOnUiThread(Runnable r) {
        this.this$0.cordova.getActivity().runOnUiThread(r);
    }
}
