package org.apache.cordova.engine;

import android.annotation.TargetApi;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.view.View;
import android.webkit.ConsoleMessage;
import android.webkit.GeolocationPermissions.Callback;
import android.webkit.JsPromptResult;
import android.webkit.JsResult;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebChromeClient.CustomViewCallback;
import android.webkit.WebChromeClient.FileChooserParams;
import android.webkit.WebStorage.QuotaUpdater;
import android.webkit.WebView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout.LayoutParams;
import java.util.Arrays;
import org.apache.cordova.CordovaDialogsHelper;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;

public class SystemWebChromeClient extends WebChromeClient {
    private static final int FILECHOOSER_RESULTCODE = 5173;
    private static final String LOG_TAG = "SystemWebChromeClient";
    private long MAX_QUOTA = 104857600;
    private Context appContext;
    private CordovaDialogsHelper dialogsHelper;
    private View mCustomView;
    private CustomViewCallback mCustomViewCallback;
    private View mVideoProgressView;
    protected final SystemWebViewEngine parentEngine;

    public SystemWebChromeClient(SystemWebViewEngine parentEngine) {
        this.parentEngine = parentEngine;
        this.appContext = parentEngine.webView.getContext();
        this.dialogsHelper = new CordovaDialogsHelper(this.appContext);
    }

    public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
        this.dialogsHelper.showAlert(message, new SystemWebChromeClient$1(this, result));
        return true;
    }

    public boolean onJsConfirm(WebView view, String url, String message, JsResult result) {
        this.dialogsHelper.showConfirm(message, new SystemWebChromeClient$2(this, result));
        return true;
    }

    public boolean onJsPrompt(WebView view, String origin, String message, String defaultValue, JsPromptResult result) {
        String handledRet = this.parentEngine.bridge.promptOnJsPrompt(origin, message, defaultValue);
        if (handledRet != null) {
            result.confirm(handledRet);
        } else {
            this.dialogsHelper.showPrompt(message, defaultValue, new SystemWebChromeClient$3(this, result));
        }
        return true;
    }

    public void onExceededDatabaseQuota(String url, String databaseIdentifier, long currentQuota, long estimatedSize, long totalUsedQuota, QuotaUpdater quotaUpdater) {
        LOG.d(LOG_TAG, "onExceededDatabaseQuota estimatedSize: %d  currentQuota: %d  totalUsedQuota: %d", new Object[]{Long.valueOf(estimatedSize), Long.valueOf(currentQuota), Long.valueOf(totalUsedQuota)});
        quotaUpdater.updateQuota(this.MAX_QUOTA);
    }

    public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
        if (consoleMessage.message() != null) {
            LOG.d(LOG_TAG, "%s: Line %d : %s", new Object[]{consoleMessage.sourceId(), Integer.valueOf(consoleMessage.lineNumber()), consoleMessage.message()});
        }
        return super.onConsoleMessage(consoleMessage);
    }

    public void onGeolocationPermissionsShowPrompt(String origin, Callback callback) {
        super.onGeolocationPermissionsShowPrompt(origin, callback);
        callback.invoke(origin, true, false);
        CordovaPlugin geolocation = this.parentEngine.pluginManager.getPlugin("Geolocation");
        if (geolocation != null && !geolocation.hasPermisssion()) {
            geolocation.requestPermissions(0);
        }
    }

    public void onShowCustomView(View view, CustomViewCallback callback) {
        this.parentEngine.getCordovaWebView().showCustomView(view, callback);
    }

    public void onHideCustomView() {
        this.parentEngine.getCordovaWebView().hideCustomView();
    }

    public View getVideoLoadingProgressView() {
        if (this.mVideoProgressView == null) {
            LinearLayout layout = new LinearLayout(this.parentEngine.getView().getContext());
            layout.setOrientation(1);
            LayoutParams layoutParams = new LayoutParams(-2, -2);
            layoutParams.addRule(13);
            layout.setLayoutParams(layoutParams);
            ProgressBar bar = new ProgressBar(this.parentEngine.getView().getContext());
            LinearLayout.LayoutParams barLayoutParams = new LinearLayout.LayoutParams(-2, -2);
            barLayoutParams.gravity = 17;
            bar.setLayoutParams(barLayoutParams);
            layout.addView(bar);
            this.mVideoProgressView = layout;
        }
        return this.mVideoProgressView;
    }

    public void openFileChooser(ValueCallback<Uri> uploadMsg) {
        openFileChooser(uploadMsg, "*/*");
    }

    public void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType) {
        openFileChooser(uploadMsg, acceptType, null);
    }

    public void openFileChooser(final ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
        Intent intent = new Intent("android.intent.action.GET_CONTENT");
        intent.addCategory("android.intent.category.OPENABLE");
        intent.setType("*/*");
        this.parentEngine.cordova.startActivityForResult(new CordovaPlugin() {
            public void onActivityResult(int requestCode, int resultCode, Intent intent) {
                Uri result;
                String str;
                StringBuilder stringBuilder;
                if (intent != null) {
                    if (resultCode == -1) {
                        result = intent.getData();
                        str = SystemWebChromeClient.LOG_TAG;
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Receive file chooser URL: ");
                        stringBuilder.append(result);
                        LOG.d(str, stringBuilder.toString());
                        uploadMsg.onReceiveValue(result);
                    }
                }
                result = null;
                str = SystemWebChromeClient.LOG_TAG;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Receive file chooser URL: ");
                stringBuilder.append(result);
                LOG.d(str, stringBuilder.toString());
                uploadMsg.onReceiveValue(result);
            }
        }, intent, FILECHOOSER_RESULTCODE);
    }

    @TargetApi(21)
    public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathsCallback, FileChooserParams fileChooserParams) {
        try {
            this.parentEngine.cordova.startActivityForResult(new SystemWebChromeClient$5(this, filePathsCallback), fileChooserParams.createIntent(), FILECHOOSER_RESULTCODE);
        } catch (ActivityNotFoundException e) {
            LOG.w("No activity found to handle file chooser intent.", e);
            filePathsCallback.onReceiveValue(null);
        }
        return true;
    }

    @TargetApi(21)
    public void onPermissionRequest(PermissionRequest request) {
        String str = LOG_TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("onPermissionRequest: ");
        stringBuilder.append(Arrays.toString(request.getResources()));
        LOG.d(str, stringBuilder.toString());
        request.grant(request.getResources());
    }

    public void destroyLastDialog() {
        this.dialogsHelper.destroyLastDialog();
    }
}
