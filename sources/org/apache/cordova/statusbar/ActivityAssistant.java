package org.apache.cordova.statusbar;

import android.app.Activity;
import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver.OnGlobalLayoutListener;
import android.widget.FrameLayout;
import android.widget.FrameLayout.LayoutParams;

public class ActivityAssistant {
    private static ActivityAssistant _instance;
    private Activity activity;
    private LayoutParams frameLayoutParams;
    private boolean layoutListenerApplied = false;
    private View mChildOfContent;
    private OnGlobalLayoutListener onGlobalLayoutListener = new C00711();
    private int usableHeightPrevious;

    /* renamed from: org.apache.cordova.statusbar.ActivityAssistant$1 */
    class C00711 implements OnGlobalLayoutListener {
        C00711() {
        }

        public void onGlobalLayout() {
            ActivityAssistant.this.possiblyResizeChildOfContent();
        }
    }

    /* renamed from: org.apache.cordova.statusbar.ActivityAssistant$2 */
    class C00722 implements OnGlobalLayoutListener {
        C00722() {
        }

        public void onGlobalLayout() {
            ActivityAssistant.this.possiblyResizeChildOfContent();
        }
    }

    public static ActivityAssistant getInstance() {
        if (_instance == null) {
            _instance = new ActivityAssistant();
        }
        return _instance;
    }

    public void assistActivity(Activity activity) {
        this.activity = activity;
        this.mChildOfContent = ((FrameLayout) activity.findViewById(16908290)).getChildAt(0);
        this.frameLayoutParams = (LayoutParams) this.mChildOfContent.getLayoutParams();
    }

    private ActivityAssistant() {
    }

    private void possiblyResizeChildOfContent() {
        int usableHeightNow = computeUsableHeight();
        if (usableHeightNow != this.usableHeightPrevious) {
            ViewGroup.LayoutParams layoutParams = this.frameLayoutParams;
            layoutParams.height = usableHeightNow;
            this.mChildOfContent.setLayoutParams(layoutParams);
            this.mChildOfContent.requestLayout();
            this.usableHeightPrevious = usableHeightNow;
        }
    }

    private int computeUsableHeight() {
        int usableHeight;
        Rect r = new Rect();
        this.mChildOfContent.getWindowVisibleDisplayFrame(r);
        boolean translucentStatusBar = true;
        boolean fullScreen = (this.activity.getWindow().getAttributes().flags & 1024) != 0;
        if ((this.activity.getWindow().getAttributes().flags & 67108864) == 0) {
            if ((this.activity.getWindow().getAttributes().flags & 1280) == 0) {
                translucentStatusBar = false;
                usableHeight = r.bottom - r.top;
                if (!translucentStatusBar) {
                    if (fullScreen) {
                        return usableHeight;
                    }
                }
                return r.bottom;
            }
        }
        usableHeight = r.bottom - r.top;
        if (translucentStatusBar) {
            if (fullScreen) {
                return usableHeight;
            }
        }
        return r.bottom;
    }

    public void applyGlobalLayoutListener() {
        if (this.onGlobalLayoutListener == null) {
            this.onGlobalLayoutListener = new C00722();
            this.layoutListenerApplied = false;
        }
        if (!this.layoutListenerApplied) {
            this.mChildOfContent.getViewTreeObserver().addOnGlobalLayoutListener(this.onGlobalLayoutListener);
            this.layoutListenerApplied = true;
        }
    }

    public void removeGlobalLayoutListener() {
        if (this.layoutListenerApplied) {
            this.mChildOfContent.getViewTreeObserver().removeOnGlobalLayoutListener(this.onGlobalLayoutListener);
            this.layoutListenerApplied = false;
        }
    }
}
