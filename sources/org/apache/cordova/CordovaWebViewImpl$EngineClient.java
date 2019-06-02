package org.apache.cordova;

import android.support.v4.view.MotionEventCompat;
import android.view.KeyEvent;
import org.json.JSONException;
import org.json.JSONObject;

protected class CordovaWebViewImpl$EngineClient implements CordovaWebViewEngine$Client {
    final /* synthetic */ CordovaWebViewImpl this$0;

    protected CordovaWebViewImpl$EngineClient(CordovaWebViewImpl this$0) {
        this.this$0 = this$0;
    }

    public void clearLoadTimeoutTimer() {
        CordovaWebViewImpl.access$108(this.this$0);
    }

    public void onPageStarted(String newUrl) {
        String str = CordovaWebViewImpl.TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("onPageDidNavigate(");
        stringBuilder.append(newUrl);
        stringBuilder.append(")");
        LOG.m0d(str, stringBuilder.toString());
        CordovaWebViewImpl.access$300(this.this$0).clear();
        CordovaWebViewImpl.access$000(this.this$0).onReset();
        CordovaWebViewImpl.access$000(this.this$0).postMessage("onPageStarted", newUrl);
    }

    public void onReceivedError(int errorCode, String description, String failingUrl) {
        clearLoadTimeoutTimer();
        JSONObject data = new JSONObject();
        try {
            data.put("errorCode", errorCode);
            data.put("description", description);
            data.put("url", failingUrl);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        CordovaWebViewImpl.access$000(this.this$0).postMessage("onReceivedError", data);
    }

    public void onPageFinishedLoading(String url) {
        String str = CordovaWebViewImpl.TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("onPageFinished(");
        stringBuilder.append(url);
        stringBuilder.append(")");
        LOG.m0d(str, stringBuilder.toString());
        clearLoadTimeoutTimer();
        CordovaWebViewImpl.access$000(this.this$0).postMessage("onPageFinished", url);
        if (this.this$0.engine.getView().getVisibility() != 0) {
            new Thread(new CordovaWebViewImpl$EngineClient$1(this)).start();
        }
        if (url.equals("about:blank")) {
            CordovaWebViewImpl.access$000(this.this$0).postMessage("exit", null);
        }
    }

    public Boolean onDispatchKeyEvent(KeyEvent event) {
        int keyCode = event.getKeyCode();
        boolean isBackButton = keyCode == 4;
        if (event.getAction() == 0) {
            if (isBackButton && CordovaWebViewImpl.access$400(this.this$0) != null) {
                return Boolean.valueOf(true);
            }
            if (CordovaWebViewImpl.access$300(this.this$0).contains(Integer.valueOf(keyCode))) {
                return Boolean.valueOf(true);
            }
            if (isBackButton) {
                return Boolean.valueOf(this.this$0.engine.canGoBack());
            }
        } else if (event.getAction() == 1) {
            if (isBackButton && CordovaWebViewImpl.access$400(this.this$0) != null) {
                this.this$0.hideCustomView();
                return Boolean.valueOf(true);
            } else if (CordovaWebViewImpl.access$300(this.this$0).contains(Integer.valueOf(keyCode))) {
                String eventName = null;
                if (keyCode == 4) {
                    eventName = "backbutton";
                } else if (keyCode == 82) {
                    eventName = "menubutton";
                } else if (keyCode != 84) {
                    switch (keyCode) {
                        case MotionEventCompat.AXIS_DISTANCE /*24*/:
                            eventName = "volumeupbutton";
                            break;
                        case 25:
                            eventName = "volumedownbutton";
                            break;
                        default:
                            break;
                    }
                } else {
                    eventName = "searchbutton";
                }
                if (eventName != null) {
                    CordovaWebViewImpl.access$500(this.this$0, eventName);
                    return Boolean.valueOf(true);
                }
            } else if (isBackButton) {
                return Boolean.valueOf(this.this$0.engine.goBack());
            }
        }
        return null;
    }

    public boolean onNavigationAttempt(String url) {
        if (CordovaWebViewImpl.access$000(this.this$0).onOverrideUrlLoading(url)) {
            return true;
        }
        if (CordovaWebViewImpl.access$000(this.this$0).shouldAllowNavigation(url)) {
            return false;
        }
        if (CordovaWebViewImpl.access$000(this.this$0).shouldOpenExternalUrl(url).booleanValue()) {
            this.this$0.showWebPage(url, true, false, null);
            return true;
        }
        String str = CordovaWebViewImpl.TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Blocked (possibly sub-frame) navigation to non-allowed URL: ");
        stringBuilder.append(url);
        LOG.m12w(str, stringBuilder.toString());
        return true;
    }
}
