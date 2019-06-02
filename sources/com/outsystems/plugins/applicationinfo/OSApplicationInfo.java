package com.outsystems.plugins.applicationinfo;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager.NameNotFoundException;
import android.support.annotation.NonNull;
import android.util.Log;
import com.outsystems.plugins.applicationinfo.interfaces.ApplicationInfo;
import java.util.Map;

public class OSApplicationInfo implements ApplicationInfo {
    static final String DEFAULT_PLATFORM_VERSION = "DefaultPlatformVersion";
    static final String NATIVE_SHELL_VERSION = "NativeShellVersion";
    private static ApplicationInfo instance;
    private final String appVersion;
    private final String appVersionNumber;
    private final String nativeShellVersion;
    private final String platformVersion;

    private OSApplicationInfo(@NonNull Context context, @NonNull Map<String, String> preferences) {
        if (instance == null) {
            this.platformVersion = (String) preferences.get(DEFAULT_PLATFORM_VERSION.toLowerCase());
            this.nativeShellVersion = (String) preferences.get(NATIVE_SHELL_VERSION.toLowerCase());
            String appVersion = null;
            String appVersionNumber = null;
            try {
                PackageInfo packageInfo = context.getApplicationContext().getPackageManager().getPackageInfo(context.getApplicationContext().getPackageName(), 0);
                appVersion = packageInfo.versionName;
                appVersionNumber = String.valueOf(packageInfo.versionCode);
            } catch (NameNotFoundException e) {
                String name = getClass().getName();
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Failed while trying to fetch appVersion and appVersionNumber: ");
                stringBuilder.append(e.getMessage());
                Log.e(name, stringBuilder.toString());
            }
            this.appVersion = appVersion;
            this.appVersionNumber = appVersionNumber;
            return;
        }
        throw new RuntimeException("Use getInstance() method to get the single instance of this class.");
    }

    static synchronized void init(@NonNull Context context, @NonNull Map<String, String> preferences) {
        synchronized (OSApplicationInfo.class) {
            if (instance == null) {
                instance = new OSApplicationInfo(context, preferences);
            }
        }
    }

    public static ApplicationInfo getInstance() {
        return instance;
    }

    public String getPlatformVersion() {
        return this.platformVersion;
    }

    public String getNativeShellVersion() {
        return this.nativeShellVersion;
    }

    public String getAppVersion() {
        return this.appVersion;
    }

    public String getAppVersionNumber() {
        return this.appVersionNumber;
    }
}
