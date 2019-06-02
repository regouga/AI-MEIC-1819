package org.apache.cordova;

import android.view.KeyEvent;

public interface CordovaWebViewEngine$Client {
    void clearLoadTimeoutTimer();

    Boolean onDispatchKeyEvent(KeyEvent keyEvent);

    boolean onNavigationAttempt(String str);

    void onPageFinishedLoading(String str);

    void onPageStarted(String str);

    void onReceivedError(int i, String str, String str2);
}
