package com.outsystems.plugins.oslogger;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.Log;
import com.outsystems.plugins.oslogger.engines.OSLoggerEngine;
import com.outsystems.plugins.oslogger.engines.puree.OSPureeLogger;
import com.outsystems.plugins.oslogger.enums.OSLogType;
import com.outsystems.plugins.oslogger.helpers.OSDeviceInfo;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.util.Map;
import okhttp3.CertificatePinner;

public class OSLogger implements Logger {
    private static Logger instance;
    private static OSLoggerEngine loggerEngine;

    private OSLogger(@NonNull Context context, @NonNull String userAgent, @NonNull String hostname, @NonNull String applicationName) {
        if (instance == null) {
            OSDeviceInfo.init(context);
            OSPureeLogger.init(context, userAgent, hostname, applicationName);
            loggerEngine = OSPureeLogger.getInstance();
            return;
        }
        throw new RuntimeException("Use getInstance() method to get the single instance of this class.");
    }

    static synchronized void init(@NonNull Context context, @NonNull String userAgent, @NonNull String hostname, @NonNull String applicationName) {
        synchronized (OSLogger.class) {
            if (instance == null) {
                instance = new OSLogger(context, userAgent, hostname, applicationName);
            }
        }
    }

    public static Logger getInstance() {
        return instance;
    }

    static void setSSLSecurity(CertificatePinner certificatePinner) {
        OSLoggerEngine oSLoggerEngine = loggerEngine;
        if (oSLoggerEngine != null) {
            oSLoggerEngine.setSSLSecurity(certificatePinner);
        }
    }

    public static void setCurrentApplication(@NonNull String hostname, @NonNull String applicationName) {
        OSLoggerEngine oSLoggerEngine = loggerEngine;
        if (oSLoggerEngine != null) {
            oSLoggerEngine.setCurrentApplication(hostname, applicationName);
        }
    }

    public void logVerbose(@NonNull String message, @NonNull String moduleName) {
        loggerEngine.processLog(message, moduleName, OSLogType.VERBOSE, null, null);
    }

    public void logDebug(@NonNull String message, @NonNull String moduleName) {
        loggerEngine.processLog(message, moduleName, OSLogType.DEBUG, null, null);
    }

    public void logInfo(@NonNull String message, @NonNull String moduleName) {
        loggerEngine.processLog(message, moduleName, OSLogType.INFO, null, null);
    }

    public void logWarning(@NonNull String message, @NonNull String moduleName) {
        loggerEngine.processLog(message, moduleName, OSLogType.WARNING, null, null);
    }

    public void logError(@NonNull String message, @NonNull String moduleName, @Nullable Map<String, Object> extra, @Nullable String stack) {
        loggerEngine.processLog(message, moduleName, OSLogType.ERROR, extra, stack);
    }

    public void logError(@NonNull String message, @NonNull String moduleName, @Nullable Map<String, Object> extra, @NonNull Throwable throwable) {
        logError(message, moduleName, (Map) extra, Log.getStackTraceString(throwable));
    }

    public void logError(@NonNull String message, @NonNull String moduleName, @Nullable String stack) {
        logError(message, moduleName, null, stack);
    }

    public void logError(@NonNull String message, @NonNull String moduleName, @NonNull Throwable throwable) {
        logError(message, moduleName, null, Log.getStackTraceString(throwable));
    }

    public void logError(@NonNull String message, @NonNull String moduleName, @Nullable Map<String, Object> extra) {
        logError(message, moduleName, (Map) extra, (String) null);
    }

    public void logError(@NonNull String message, @NonNull String moduleName) {
        logError(message, moduleName, null, (String) null);
    }

    public void logFatal(@NonNull String message, @NonNull String moduleName, @Nullable Map<String, Object> extra, @Nullable String stack) {
        loggerEngine.processLog(message, moduleName, OSLogType.FATAL, extra, stack);
    }

    public void logFatal(@NonNull String message, @NonNull String moduleName, @Nullable Map<String, Object> extra, @NonNull Throwable throwable) {
        logFatal(message, moduleName, (Map) extra, Log.getStackTraceString(throwable));
    }

    public void logFatal(@NonNull String message, @NonNull String moduleName, @Nullable String stack) {
        logFatal(message, moduleName, null, stack);
    }

    public void logFatal(@NonNull String message, @NonNull String moduleName, @NonNull Throwable throwable) {
        logFatal(message, moduleName, null, Log.getStackTraceString(throwable));
    }

    public void logFatal(@NonNull String message, @NonNull String moduleName, @Nullable Map<String, Object> extra) {
        logFatal(message, moduleName, (Map) extra, (String) null);
    }

    public void logFatal(@NonNull String message, @NonNull String moduleName) {
        logFatal(message, moduleName, null, (String) null);
    }
}
