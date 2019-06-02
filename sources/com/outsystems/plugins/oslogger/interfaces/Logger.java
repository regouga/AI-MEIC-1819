package com.outsystems.plugins.oslogger.interfaces;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import java.util.Map;

public interface Logger {
    void logDebug(@NonNull String str, @NonNull String str2);

    void logError(@NonNull String str, @NonNull String str2);

    void logError(@NonNull String str, @NonNull String str2, @Nullable String str3);

    void logError(@NonNull String str, @NonNull String str2, @NonNull Throwable th);

    void logError(@NonNull String str, @NonNull String str2, @Nullable Map<String, Object> map);

    void logError(@NonNull String str, @NonNull String str2, @Nullable Map<String, Object> map, @Nullable String str3);

    void logError(@NonNull String str, @NonNull String str2, @Nullable Map<String, Object> map, @NonNull Throwable th);

    void logFatal(@NonNull String str, @NonNull String str2);

    void logFatal(@NonNull String str, @NonNull String str2, @Nullable String str3);

    void logFatal(@NonNull String str, @NonNull String str2, @NonNull Throwable th);

    void logFatal(@NonNull String str, @NonNull String str2, @Nullable Map<String, Object> map);

    void logFatal(@NonNull String str, @NonNull String str2, @Nullable Map<String, Object> map, @Nullable String str3);

    void logFatal(@NonNull String str, @NonNull String str2, @Nullable Map<String, Object> map, @NonNull Throwable th);

    void logInfo(@NonNull String str, @NonNull String str2);

    void logVerbose(@NonNull String str, @NonNull String str2);

    void logWarning(@NonNull String str, @NonNull String str2);
}
