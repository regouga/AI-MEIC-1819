package com.cookpad.puree;

import android.util.Log;
import com.cookpad.puree.internal.LogDumper;
import com.cookpad.puree.storage.Records;
import java.util.concurrent.Executor;

public class Puree {
    private static final String TAG = Puree.class.getSimpleName();
    private static PureeLogger logger;

    public static class NotInitializedException extends IllegalStateException {
    }

    public static synchronized void initialize(PureeConfiguration conf) {
        synchronized (Puree.class) {
            if (logger != null) {
                Log.w(TAG, "Puree has already been initialized; re-initialize it with the configuration");
            }
            setPureeLogger(conf.createPureeLogger());
        }
    }

    public static void setPureeLogger(PureeLogger instance) {
        logger = instance;
    }

    public static void send(PureeLog log) {
        checkIfPureeHasInitialized();
        logger.send(log);
    }

    public static void flush() {
        checkIfPureeHasInitialized();
        logger.flush();
    }

    public static void dump() {
        LogDumper.out(getBufferedLogs());
    }

    public static Records getBufferedLogs() {
        checkIfPureeHasInitialized();
        return logger.getBufferedLogs();
    }

    public static void discardBufferedLogs() {
        checkIfPureeHasInitialized();
        logger.discardBufferedLogs();
    }

    public static void truncateBufferedLogs(int truncateThresholdInRows) {
        checkIfPureeHasInitialized();
        logger.truncateBufferedLogs(truncateThresholdInRows);
    }

    public static Executor getExecutor() {
        return logger.getExecutor();
    }

    private static void checkIfPureeHasInitialized() {
        if (logger == null) {
            throw new NotInitializedException();
        }
    }
}
