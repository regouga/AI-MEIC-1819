package com.outsystems.plugins.oslogger.enums;

public enum OSLogType {
    VERBOSE("trace"),
    DEBUG("trace"),
    INFO("general"),
    WARNING("general"),
    ERROR("error"),
    FATAL("error");
    
    private final String value;

    private OSLogType(String value) {
        this.value = value;
    }

    public String toString() {
        return this.value;
    }
}
