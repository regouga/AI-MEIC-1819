package com.outsystems.plugins.oslogger.engines.puree;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import com.cookpad.puree.Puree;
import com.cookpad.puree.PureeConfiguration;
import com.cookpad.puree.PureeFilter;
import com.outsystems.plugins.oslogger.engines.OSLoggerEngine;
import com.outsystems.plugins.oslogger.enums.OSLogType;
import com.outsystems.plugins.oslogger.helpers.OSDeviceInfo;
import com.outsystems.plugins.oslogger.helpers.OSUserAgentInterceptor;
import com.outsystems.plugins.oslogger.helpers.OSWebViewCookieHandler;
import java.util.Map;
import okhttp3.CertificatePinner;
import okhttp3.OkHttpClient;
import okhttp3.OkHttpClient.Builder;

public class OSPureeLogger extends Puree implements OSLoggerEngine {
    private static OSPureeLogger instance;
    private OkHttpClient client;
    private final OSPureeConsoleOutput consoleOutput;
    private final OSPureeServerOutput serverOutput;

    private OSPureeLogger(@NonNull Context context, @NonNull String userAgent, @NonNull String hostname, @NonNull String applicationName) {
        if (instance == null) {
            this.client = new Builder().addInterceptor(new OSUserAgentInterceptor(userAgent)).cookieJar(new OSWebViewCookieHandler()).build();
            this.consoleOutput = new OSPureeConsoleOutput();
            this.serverOutput = new OSPureeServerOutput(this.client, context, hostname, applicationName);
            initialize(new PureeConfiguration.Builder(context).register(OSPureeLog.class, this.consoleOutput.withFilters(new PureeFilter[]{new OSPureeConsoleFilter()})).register(OSPureeLog.class, this.serverOutput.withFilters(new PureeFilter[]{new OSPureeServerFilter()})).build());
            return;
        }
        throw new RuntimeException("Use getInstance() method to get the single instance of this class.");
    }

    public static synchronized void init(@NonNull Context context, @NonNull String userAgent, @NonNull String hostname, @NonNull String applicationName) {
        synchronized (OSPureeLogger.class) {
            if (instance == null) {
                instance = new OSPureeLogger(context, userAgent, hostname, applicationName);
            }
        }
    }

    public static OSPureeLogger getInstance() {
        return instance;
    }

    static Map<String, Object> mergeDeviceInfo(@Nullable Map<String, Object> extra) {
        if (extra == null) {
            return OSDeviceInfo.getInstance().getDeviceInfo();
        }
        extra.putAll(OSDeviceInfo.getInstance().getDeviceInfo());
        return extra;
    }

    public void processLog(@NonNull String message, @NonNull String moduleName, @NonNull OSLogType logType, @Nullable Map<String, Object> extra, @Nullable String stack) {
        Map map;
        int ordinal = logType.ordinal();
        if (logType != OSLogType.ERROR) {
            if (logType != OSLogType.FATAL) {
                map = extra;
                send(new OSPureeLog(message, moduleName, ordinal, map, stack));
            }
        }
        map = mergeDeviceInfo(extra);
        send(new OSPureeLog(message, moduleName, ordinal, map, stack));
    }

    public void setSSLSecurity(@NonNull CertificatePinner certificatePinner) {
        this.client = this.client.newBuilder().certificatePinner(certificatePinner).build();
        this.serverOutput.setClient(this.client);
    }

    public void setCurrentApplication(@NonNull String hostname, @NonNull String applicationName) {
        this.serverOutput.setCurrentApplication(hostname, applicationName);
    }
}
