package com.cookpad.puree.storage;

import com.google.gson.JsonArray;
import java.util.ArrayList;
import java.util.Iterator;

public class Records extends ArrayList<Record> {
    public String getIdsAsString() {
        if (isEmpty()) {
            return "";
        }
        StringBuilder builder = new StringBuilder();
        Iterator it = iterator();
        while (it.hasNext()) {
            builder.append(((Record) it.next()).getId());
            builder.append(',');
        }
        return builder.substring(0, builder.length() - 1);
    }

    public JsonArray getJsonLogs() {
        JsonArray jsonLogs = new JsonArray();
        Iterator it = iterator();
        while (it.hasNext()) {
            jsonLogs.add(((Record) it.next()).getJsonLog());
        }
        return jsonLogs;
    }
}
