package com.outsystems.plugins.oslogger.engines.puree;

import com.cookpad.puree.PureeLog;
import com.google.gson.annotations.SerializedName;
import java.util.Map;

public class OSPureeLog implements PureeLog {
    public static final String FIELD_EXTRA = "extra";
    public static final String FIELD_INSTANT = "instant";
    public static final String FIELD_LOG_TYPE = "logType";
    public static final String FIELD_MESSAGE = "message";
    public static final String FIELD_MODULE_NAME = "moduleName";
    public static final String FIELD_STACK = "stack";
    @SerializedName("extra")
    private Map<String, Object> extra;
    @SerializedName("logType")
    private int logType;
    @SerializedName("message")
    private String message;
    @SerializedName("moduleName")
    private String moduleName;
    @SerializedName("stack")
    private String stack;

    public OSPureeLog(String message, String moduleName, int logType, Map<String, Object> extra, String stack) {
        this.message = message;
        this.moduleName = moduleName;
        this.logType = logType;
        this.extra = extra;
        this.stack = stack;
    }

    String getMessage() {
        return this.message;
    }

    String getModuleName() {
        return this.moduleName;
    }

    int getLogType() {
        return this.logType;
    }

    Map<String, Object> getExtra() {
        return this.extra;
    }

    String getStack() {
        return this.stack;
    }
}
