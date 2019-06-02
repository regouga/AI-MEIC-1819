package com.cookpad.puree.storage;

import com.google.gson.JsonObject;

public class Record {
    private final int id;
    private final JsonObject jsonLog;
    private final String type;

    public int getId() {
        return this.id;
    }

    public String getType() {
        return this.type;
    }

    public JsonObject getJsonLog() {
        return this.jsonLog;
    }

    public Record(int id, String type, JsonObject jsonLog) {
        this.id = id;
        this.type = type;
        this.jsonLog = jsonLog;
    }
}
