package com.outsystems.plugins.oslogger.engines;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import com.outsystems.plugins.oslogger.enums.OSLogType;
import java.util.Map;
import okhttp3.CertificatePinner;

public interface OSLoggerEngine {
    void processLog(@NonNull String str, @NonNull String str2, @NonNull OSLogType oSLogType, @Nullable Map<String, Object> map, @Nullable String str3);

    void setCurrentApplication(@NonNull String str, @NonNull String str2);

    void setSSLSecurity(@NonNull CertificatePinner certificatePinner);
}
