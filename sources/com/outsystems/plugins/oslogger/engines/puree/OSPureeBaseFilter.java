package com.outsystems.plugins.oslogger.engines.puree;

import android.util.Log;
import com.cookpad.puree.PureeFilter;
import com.google.gson.JsonObject;
import com.outsystems.plugins.oslogger.enums.OSLogType;

public class OSPureeBaseFilter implements PureeFilter {
    protected int logTypeIndex;

    public JsonObject apply(JsonObject jsonLog) {
        this.logTypeIndex = jsonLog.get(OSPureeLog.FIELD_LOG_TYPE).getAsInt();
        if (this.logTypeIndex < OSLogType.values().length) {
            return jsonLog;
        }
        Log.w(getClass().getName(), "Unknown log type");
        return null;
    }
}
