package org.apache.cordova;

import android.content.Context;

public class BuildHelper {
    private static String TAG = "BuildHelper";

    public static Object getBuildConfigValue(Context ctx, String key) {
        Object obj = null;
        try {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(ctx.getPackageName());
            stringBuilder.append(".BuildConfig");
            obj = Class.forName(stringBuilder.toString()).getField(key).get(null);
            return obj;
        } catch (ClassNotFoundException e) {
            LOG.m0d(TAG, "Unable to get the BuildConfig, is this built with ANT?");
            e.printStackTrace();
            return obj;
        } catch (NoSuchFieldException e2) {
            String str = TAG;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append(key);
            stringBuilder2.append(" is not a valid field. Check your build.gradle");
            LOG.m0d(str, stringBuilder2.toString());
            return obj;
        } catch (IllegalAccessException e3) {
            LOG.m0d(TAG, "Illegal Access Exception: Let's print a stack trace.");
            e3.printStackTrace();
            return obj;
        }
    }
}
