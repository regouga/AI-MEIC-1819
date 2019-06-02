package android.support.v4.view;

import android.app.ActionBar;
import android.app.Activity;
import android.app.Dialog;
import android.content.DialogInterface.OnKeyListener;
import android.support.annotation.NonNull;
import android.support.annotation.RestrictTo;
import android.support.annotation.RestrictTo.Scope;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

@RestrictTo({Scope.LIBRARY_GROUP})
public class KeyEventDispatcher {
    private static boolean sActionBarFieldsFetched = false;
    private static Method sActionBarOnMenuKeyMethod = null;
    private static boolean sDialogFieldsFetched = false;
    private static Field sDialogKeyListenerField = null;

    public interface Component {
        boolean superDispatchKeyEvent(KeyEvent keyEvent);
    }

    private KeyEventDispatcher() {
    }

    public static boolean dispatchBeforeHierarchy(@NonNull View root, @NonNull KeyEvent event) {
        return ViewCompat.dispatchUnhandledKeyEventBeforeHierarchy(root, event);
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public static boolean dispatchKeyEvent(@android.support.annotation.NonNull android.support.v4.view.KeyEventDispatcher.Component r3, @android.support.annotation.Nullable android.view.View r4, @android.support.annotation.Nullable android.view.Window.Callback r5, @android.support.annotation.NonNull android.view.KeyEvent r6) {
        /*
        r0 = 0;
        if (r3 != 0) goto L_0x0004;
    L_0x0003:
        return r0;
    L_0x0004:
        r1 = android.os.Build.VERSION.SDK_INT;
        r2 = 28;
        if (r1 < r2) goto L_0x000f;
    L_0x000a:
        r0 = r3.superDispatchKeyEvent(r6);
        return r0;
    L_0x000f:
        r1 = r5 instanceof android.app.Activity;
        if (r1 == 0) goto L_0x001b;
    L_0x0013:
        r0 = r5;
        r0 = (android.app.Activity) r0;
        r0 = activitySuperDispatchKeyEventPre28(r0, r6);
        return r0;
    L_0x001b:
        r1 = r5 instanceof android.app.Dialog;
        if (r1 == 0) goto L_0x0027;
    L_0x001f:
        r0 = r5;
        r0 = (android.app.Dialog) r0;
        r0 = dialogSuperDispatchKeyEventPre28(r0, r6);
        return r0;
    L_0x0027:
        if (r4 == 0) goto L_0x0031;
    L_0x0029:
        r1 = android.support.v4.view.ViewCompat.dispatchUnhandledKeyEventBeforeCallback(r4, r6);
        if (r1 != 0) goto L_0x0030;
    L_0x002f:
        goto L_0x0031;
    L_0x0030:
        goto L_0x0037;
    L_0x0031:
        r1 = r3.superDispatchKeyEvent(r6);
        if (r1 == 0) goto L_0x0039;
    L_0x0037:
        r0 = 1;
    L_0x0039:
        return r0;
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.view.KeyEventDispatcher.dispatchKeyEvent(android.support.v4.view.KeyEventDispatcher$Component, android.view.View, android.view.Window$Callback, android.view.KeyEvent):boolean");
    }

    private static boolean actionBarOnMenuKeyEventPre28(ActionBar actionBar, KeyEvent event) {
        if (!sActionBarFieldsFetched) {
            try {
                sActionBarOnMenuKeyMethod = actionBar.getClass().getMethod("onMenuKeyEvent", new Class[]{KeyEvent.class});
            } catch (NoSuchMethodException e) {
            }
            sActionBarFieldsFetched = true;
        }
        Method method = sActionBarOnMenuKeyMethod;
        if (method == null) {
            return false;
        }
        try {
            return ((Boolean) method.invoke(actionBar, new Object[]{event})).booleanValue();
        } catch (IllegalAccessException e2) {
        } catch (InvocationTargetException e3) {
        }
    }

    private static boolean activitySuperDispatchKeyEventPre28(Activity activity, KeyEvent event) {
        activity.onUserInteraction();
        Window win = activity.getWindow();
        if (win.hasFeature(8)) {
            ActionBar actionBar = activity.getActionBar();
            if (event.getKeyCode() == 82 && actionBar != null) {
                if (actionBarOnMenuKeyEventPre28(actionBar, event)) {
                    return true;
                }
            }
        }
        if (win.superDispatchKeyEvent(event)) {
            return true;
        }
        View decor = win.getDecorView();
        if (ViewCompat.dispatchUnhandledKeyEventBeforeCallback(decor, event)) {
            return true;
        }
        return event.dispatch(activity, decor != null ? decor.getKeyDispatcherState() : null, activity);
    }

    private static OnKeyListener getDialogKeyListenerPre28(Dialog dialog) {
        if (!sDialogFieldsFetched) {
            try {
                sDialogKeyListenerField = Dialog.class.getDeclaredField("mOnKeyListener");
                sDialogKeyListenerField.setAccessible(true);
            } catch (NoSuchFieldException e) {
            }
            sDialogFieldsFetched = true;
        }
        Field field = sDialogKeyListenerField;
        if (field == null) {
            return null;
        }
        try {
            return (OnKeyListener) field.get(dialog);
        } catch (IllegalAccessException e2) {
        }
    }

    private static boolean dialogSuperDispatchKeyEventPre28(Dialog dialog, KeyEvent event) {
        OnKeyListener onKeyListener = getDialogKeyListenerPre28(dialog);
        if (onKeyListener != null && onKeyListener.onKey(dialog, event.getKeyCode(), event)) {
            return true;
        }
        Window win = dialog.getWindow();
        if (win.superDispatchKeyEvent(event)) {
            return true;
        }
        View decor = win.getDecorView();
        if (ViewCompat.dispatchUnhandledKeyEventBeforeCallback(decor, event)) {
            return true;
        }
        return event.dispatch(dialog, decor != null ? decor.getKeyDispatcherState() : null, dialog);
    }
}
