package org.apache.cordova.statusbar;

import android.graphics.Color;
import android.os.Build.VERSION;
import android.view.View;
import android.view.Window;
import java.util.Arrays;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONException;

public class StatusBar extends CordovaPlugin {
    private static final String TAG = "StatusBar";
    private boolean doOverlay;

    /* renamed from: org.apache.cordova.statusbar.StatusBar$6 */
    class C00786 implements Runnable {
        C00786() {
        }

        public void run() {
            StatusBar.this.setStatusBarStyle("default");
        }
    }

    /* renamed from: org.apache.cordova.statusbar.StatusBar$7 */
    class C00797 implements Runnable {
        C00797() {
        }

        public void run() {
            StatusBar.this.setStatusBarStyle("lightcontent");
        }
    }

    /* renamed from: org.apache.cordova.statusbar.StatusBar$8 */
    class C00808 implements Runnable {
        C00808() {
        }

        public void run() {
            StatusBar.this.setStatusBarStyle("blacktranslucent");
        }
    }

    /* renamed from: org.apache.cordova.statusbar.StatusBar$9 */
    class C00819 implements Runnable {
        C00819() {
        }

        public void run() {
            StatusBar.this.setStatusBarStyle("blackopaque");
        }
    }

    public void initialize(final CordovaInterface cordova, CordovaWebView webView) {
        LOG.v(TAG, "StatusBar: initialization");
        super.initialize(cordova, webView);
        this.cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                StatusBar statusBar = StatusBar.this;
                statusBar.doOverlay = statusBar.preferences.getBoolean("StatusBarOverlaysWebView", false);
                ActivityAssistant.getInstance().assistActivity(cordova.getActivity());
                Window window = cordova.getActivity().getWindow();
                window.clearFlags(2048);
                if (!StatusBar.this.preferences.getBoolean("IsOutSystemsNow", false)) {
                    if (!StatusBar.this.doOverlay || VERSION.SDK_INT < 19) {
                        StatusBar statusBar2 = StatusBar.this;
                        statusBar2.setStatusBarBackgroundColor(statusBar2.preferences.getString("StatusBarBackgroundColor", "#000000"));
                        statusBar2 = StatusBar.this;
                        statusBar2.setStatusBarStyle(statusBar2.preferences.getString("StatusBarStyle", "lightcontent"));
                        return;
                    }
                }
                if (VERSION.SDK_INT >= 21) {
                    statusBar2 = StatusBar.this;
                    statusBar2.setStatusBarTransparent(statusBar2.doOverlay);
                } else if (VERSION.SDK_INT == 19) {
                    window.addFlags(67108864);
                } else {
                    LOG.e(StatusBar.TAG, "Translucent status bar not supported in your Android version");
                }
                ActivityAssistant.getInstance().applyGlobalLayoutListener();
            }
        });
    }

    public boolean execute(String action, final CordovaArgs args, final CallbackContext callbackContext) throws JSONException {
        String str = TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Executing action: ");
        stringBuilder.append(action);
        LOG.v(str, stringBuilder.toString());
        final Window window = this.cordova.getActivity().getWindow();
        boolean z = false;
        if ("_ready".equals(action)) {
            if ((window.getAttributes().flags & 1024) == 0) {
                z = true;
            }
            callbackContext.sendPluginResult(new PluginResult(Status.OK, z));
            return true;
        } else if ("isStatusBarOverlayingWebview".equals(action)) {
            boolean statusBarVisible = (window.getAttributes().flags & 1024) == 0;
            Status status = Status.OK;
            if (this.doOverlay && statusBarVisible) {
                z = true;
            }
            callbackContext.sendPluginResult(new PluginResult(status, z));
            return true;
        } else if ("show".equals(action)) {
            this.cordova.getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    if (VERSION.SDK_INT >= 19) {
                        window.getDecorView().setSystemUiVisibility((window.getDecorView().getSystemUiVisibility() & -1025) & -5);
                    }
                    window.clearFlags(1024);
                    callbackContext.sendPluginResult(new PluginResult(Status.OK));
                }
            });
            return true;
        } else if ("hide".equals(action)) {
            this.cordova.getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    if (VERSION.SDK_INT >= 19) {
                        window.getDecorView().setSystemUiVisibility((window.getDecorView().getSystemUiVisibility() | 1024) | 4);
                    }
                    window.addFlags(1024);
                    callbackContext.sendPluginResult(new PluginResult(Status.OK));
                }
            });
            return true;
        } else if ("backgroundColorByHexString".equals(action)) {
            this.cordova.getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    try {
                        StatusBar.this.setStatusBarBackgroundColor(args.getString(0));
                    } catch (JSONException e) {
                        LOG.e(StatusBar.TAG, "Invalid hexString argument, use f.i. '#777777'");
                    }
                }
            });
            return true;
        } else if ("getStatusBarHeight".equals(action)) {
            callbackContext.sendPluginResult(new PluginResult(Status.OK, getStatusBarHeight()));
            return true;
        } else if ("overlaysWebView".equals(action)) {
            if (VERSION.SDK_INT >= 19) {
                this.cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        try {
                            StatusBar.this.doOverlay = args.getBoolean(0);
                        } catch (JSONException e) {
                            LOG.e(StatusBar.TAG, "Invalid boolean argument, please use true or false values");
                        }
                        if (VERSION.SDK_INT >= 21) {
                            StatusBar statusBar = StatusBar.this;
                            statusBar.setStatusBarTransparent(statusBar.doOverlay);
                        } else if (VERSION.SDK_INT != 19) {
                            LOG.e(StatusBar.TAG, "Translucent status bar not supported in your Android version");
                        } else if (StatusBar.this.doOverlay) {
                            window.addFlags(1024);
                            window.addFlags(67108864);
                        } else {
                            window.clearFlags(1024);
                            window.clearFlags(67108864);
                        }
                        if (StatusBar.this.doOverlay) {
                            ActivityAssistant.getInstance().applyGlobalLayoutListener();
                        }
                    }
                });
                return true;
            }
            callbackContext.sendPluginResult(new PluginResult(Status.ERROR, this.doOverlay));
            return this.doOverlay ^ true;
        } else if ("styleDefault".equals(action)) {
            this.cordova.getActivity().runOnUiThread(new C00786());
            return true;
        } else if ("styleLightContent".equals(action)) {
            this.cordova.getActivity().runOnUiThread(new C00797());
            return true;
        } else if ("styleBlackTranslucent".equals(action)) {
            this.cordova.getActivity().runOnUiThread(new C00808());
            return true;
        } else if (!"styleBlackOpaque".equals(action)) {
            return false;
        } else {
            this.cordova.getActivity().runOnUiThread(new C00819());
            return true;
        }
    }

    private void setStatusBarBackgroundColor(String colorPref) {
        if (VERSION.SDK_INT < 21) {
            return;
        }
        if (colorPref != null && !colorPref.isEmpty()) {
            Window window = this.cordova.getActivity().getWindow();
            window.clearFlags(67108864);
            window.addFlags(Integer.MIN_VALUE);
            try {
                window.getClass().getMethod("setStatusBarColor", new Class[]{Integer.TYPE}).invoke(window, new Object[]{Integer.valueOf(Color.parseColor(colorPref))});
            } catch (IllegalArgumentException e) {
                LOG.e(TAG, "Invalid hexString argument, use f.i. '#999999'");
            } catch (Exception e2) {
                String str = TAG;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Method window.setStatusBarColor not found for SDK level ");
                stringBuilder.append(VERSION.SDK_INT);
                LOG.w(str, stringBuilder.toString());
            }
        }
    }

    public int getStatusBarHeight() {
        int statusbarHeight = 0;
        int resourceId = this.cordova.getActivity().getApplicationContext().getResources().getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            statusbarHeight = (int) this.cordova.getActivity().getApplicationContext().getResources().getDimension(resourceId);
        }
        return (int) (((float) statusbarHeight) / this.cordova.getActivity().getApplicationContext().getResources().getDisplayMetrics().density);
    }

    private void setStatusBarTransparent(boolean transparent) {
        if (VERSION.SDK_INT >= 21) {
            Window window = this.cordova.getActivity().getWindow();
            if (transparent) {
                window.getDecorView().setSystemUiVisibility(1280);
                window.setStatusBarColor(0);
                return;
            }
            window.getDecorView().setSystemUiVisibility(256);
        }
    }

    private void setStatusBarStyle(String style) {
        if (VERSION.SDK_INT >= 23) {
            if (style != null && !style.isEmpty()) {
                View decorView = this.cordova.getActivity().getWindow().getDecorView();
                int uiOptions = decorView.getSystemUiVisibility();
                String[] lightContentStyles = new String[]{"lightcontent", "blacktranslucent", "blackopaque"};
                if (Arrays.asList(new String[]{"default"}).contains(style.toLowerCase())) {
                    decorView.setSystemUiVisibility(uiOptions | 8192);
                } else if (Arrays.asList(lightContentStyles).contains(style.toLowerCase())) {
                    decorView.setSystemUiVisibility(uiOptions & -8193);
                } else {
                    LOG.e(TAG, "Invalid style, must be either 'default', 'lightcontent' or the deprecated 'blacktranslucent' and 'blackopaque'");
                }
            }
        }
    }
}
