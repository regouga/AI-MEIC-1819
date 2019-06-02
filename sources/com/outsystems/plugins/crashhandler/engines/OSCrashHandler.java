package com.outsystems.plugins.crashhandler.engines;

import android.support.annotation.NonNull;
import com.outsystems.plugins.crashhandler.OSCrashHandlerPlugin;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.lang.Thread.UncaughtExceptionHandler;

public class OSCrashHandler implements OSCrashHandlerEngine, UncaughtExceptionHandler {
    protected final UncaughtExceptionHandler defaultHandler = Thread.getDefaultUncaughtExceptionHandler();
    private Logger logger = OSLogger.getInstance();

    public void deploy() {
        if (Thread.getDefaultUncaughtExceptionHandler() instanceof OSCrashHandler) {
            this.logger.logDebug("OSCrashHandler is already deployed, doing nothing", OSCrashHandlerPlugin.CORDOVA_SERVICE_NAME);
        } else {
            Thread.setDefaultUncaughtExceptionHandler(this);
        }
    }

    public void uncaughtException(@NonNull Thread thread, @NonNull Throwable throwable) {
        Logger logger = this.logger;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("A fatal error has occurred. Please contact OutSystems support: ");
        stringBuilder.append(throwable.getMessage());
        logger.logFatal(stringBuilder.toString(), OSCrashHandlerPlugin.CORDOVA_SERVICE_NAME, throwable);
        UncaughtExceptionHandler uncaughtExceptionHandler = this.defaultHandler;
        if (uncaughtExceptionHandler != null) {
            uncaughtExceptionHandler.uncaughtException(thread, throwable);
        }
    }
}
