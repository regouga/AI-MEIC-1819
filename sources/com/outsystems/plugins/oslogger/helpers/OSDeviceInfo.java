package com.outsystems.plugins.oslogger.helpers;

import android.annotation.SuppressLint;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Build;
import android.os.Build.VERSION;
import android.provider.Settings.Secure;
import android.support.annotation.NonNull;
import com.outsystems.plugins.applicationinfo.OSApplicationInfo;
import com.outsystems.plugins.applicationinfo.interfaces.ApplicationInfo;
import java.util.HashMap;
import java.util.Map;
import org.apache.cordova.CordovaWebView;

public class OSDeviceInfo {
    static final String APP_VERSION_CODE = "AppVersionCode";
    static final String APP_VERSION_NAME = "AppVersionName";
    static final String CORDOVA = "Cordova";
    static final String DEVICE_MODEL = "DeviceModel";
    static final String DEVICE_UUID = "DeviceUUID";
    static final String EMULATOR = "Emulator";
    private static final int INITIAL_CAPACITY = 13;
    static final String NATIVE_SHELL = "NativeShell";
    static final String NETWORK_STATUS = "NetworkStatus";
    static final String NETWORK_TYPE = "NetworkType";
    static final String OPERATING_SYSTEM = "OperatingSystem";
    private static OSDeviceInfo instance;
    private ApplicationInfo applicationInfo;
    private ConnectivityManager connectivityManager;
    private String cordovaVersion;
    private Map<String, Object> deviceInfo;
    private String deviceModel;
    private String deviceOSVersion;
    private String deviceUUID;
    private boolean isEmulator;

    private OSDeviceInfo(@NonNull Context context) {
        if (instance == null) {
            boolean z;
            StringBuilder stringBuilder;
            if (!Build.FINGERPRINT.contains("generic")) {
                if (!Build.PRODUCT.contains("sdk")) {
                    z = false;
                    this.isEmulator = z;
                    this.deviceModel = Build.MODEL;
                    this.deviceUUID = Secure.getString(context.getApplicationContext().getContentResolver(), "android_id");
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Android ");
                    stringBuilder.append(VERSION.RELEASE);
                    this.deviceOSVersion = stringBuilder.toString();
                    this.cordovaVersion = CordovaWebView.CORDOVA_VERSION;
                    this.connectivityManager = (ConnectivityManager) context.getApplicationContext().getSystemService("connectivity");
                    this.applicationInfo = OSApplicationInfo.getInstance();
                    return;
                }
            }
            z = true;
            this.isEmulator = z;
            this.deviceModel = Build.MODEL;
            this.deviceUUID = Secure.getString(context.getApplicationContext().getContentResolver(), "android_id");
            stringBuilder = new StringBuilder();
            stringBuilder.append("Android ");
            stringBuilder.append(VERSION.RELEASE);
            this.deviceOSVersion = stringBuilder.toString();
            this.cordovaVersion = CordovaWebView.CORDOVA_VERSION;
            this.connectivityManager = (ConnectivityManager) context.getApplicationContext().getSystemService("connectivity");
            this.applicationInfo = OSApplicationInfo.getInstance();
            return;
        }
        throw new RuntimeException("Use getInstance() method to get the single instance of this class.");
    }

    public static synchronized void init(@NonNull Context context) {
        synchronized (OSDeviceInfo.class) {
            if (instance == null) {
                instance = new OSDeviceInfo(context);
            }
        }
    }

    public static OSDeviceInfo getInstance() {
        return instance;
    }

    public Map<String, Object> getDeviceInfo() {
        if (this.deviceInfo == null) {
            this.deviceInfo = new HashMap(13);
            this.deviceInfo.put(DEVICE_MODEL, getDeviceModel());
            this.deviceInfo.put(DEVICE_UUID, getDeviceUuid());
            this.deviceInfo.put(OPERATING_SYSTEM, getDeviceOSVersion());
            this.deviceInfo.put(CORDOVA, getCordovaVersion());
            this.deviceInfo.put(NATIVE_SHELL, this.applicationInfo.getNativeShellVersion());
            this.deviceInfo.put(APP_VERSION_CODE, this.applicationInfo.getAppVersionNumber());
            this.deviceInfo.put(APP_VERSION_NAME, this.applicationInfo.getAppVersion());
        }
        if (isConnected()) {
            this.deviceInfo.put(NETWORK_STATUS, "Online");
            this.deviceInfo.put(NETWORK_TYPE, getNetworkType());
        } else {
            this.deviceInfo.put(NETWORK_STATUS, "Offline");
            this.deviceInfo.remove(NETWORK_TYPE);
        }
        return this.deviceInfo;
    }

    public boolean isEmulator() {
        return this.isEmulator;
    }

    public String getDeviceModel() {
        return this.deviceModel;
    }

    @SuppressLint({"HardwareIds"})
    public String getDeviceUuid() {
        return this.deviceUUID;
    }

    public String getDeviceOSVersion() {
        return this.deviceOSVersion;
    }

    public String getCordovaVersion() {
        return this.cordovaVersion;
    }

    public boolean isConnected() {
        NetworkInfo activeNetwork = this.connectivityManager.getActiveNetworkInfo();
        return activeNetwork != null && activeNetwork.isConnected();
    }

    public String getNetworkType() {
        String networkType = "";
        NetworkInfo activeNetwork = this.connectivityManager.getActiveNetworkInfo();
        if (activeNetwork == null || !activeNetwork.isConnected()) {
            return networkType;
        }
        switch (activeNetwork.getType()) {
            case 0:
                return activeNetwork.getSubtypeName();
            case 1:
                return activeNetwork.getTypeName();
            default:
                return "Unknown";
        }
    }
}
