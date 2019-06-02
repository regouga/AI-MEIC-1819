package com.outsystems.plugins.oslogger.engines.puree;

import android.support.annotation.NonNull;
import com.google.gson.JsonObject;
import com.outsystems.plugins.oslogger.enums.OSLogType;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

public class OSPureeServerFilter extends OSPureeBaseFilter {
    private final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ROOT);

    public OSPureeServerFilter() {
        this.sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
    }

    public JsonObject apply(@NonNull JsonObject jsonLog) {
        jsonLog = super.apply(jsonLog);
        if (jsonLog == null) {
            return null;
        }
        OSLogType logType = OSLogType.values()[this.logTypeIndex];
        if (logType != OSLogType.INFO && logType != OSLogType.WARNING && logType != OSLogType.ERROR && logType != OSLogType.FATAL) {
            return null;
        }
        jsonLog.addProperty(OSPureeLog.FIELD_INSTANT, this.sdf.format(new Date()));
        jsonLog.addProperty(OSPureeLog.FIELD_LOG_TYPE, logType.toString());
        return jsonLog;
    }
}
