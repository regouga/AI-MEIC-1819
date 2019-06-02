package com.cookpad.puree.internal;

import android.util.Log;
import com.cookpad.puree.PureeFilter;
import com.cookpad.puree.outputs.PureeOutput;
import com.cookpad.puree.storage.Records;
import java.util.List;
import java.util.Map;

public class LogDumper {
    private static final String TAG = LogDumper.class.getSimpleName();

    public static void out(Records records) {
        switch (records.size()) {
            case 0:
                Log.d(TAG, "No records in Puree's buffer");
                return;
            case 1:
                String str = TAG;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("1 record in Puree's buffer\n");
                stringBuilder.append(records.getJsonLogs().get(0));
                Log.d(str, stringBuilder.toString());
                break;
            default:
                break;
        }
        StringBuilder builder = new StringBuilder();
        int size = records.size();
        builder.append(size);
        builder.append(" records in Puree's buffer\n");
        for (int i = 0; i < size; i++) {
            builder.append(records.getJsonLogs().get(0));
            builder.append("\n");
        }
        Log.d(TAG, builder.substring(0, builder.length() - 1));
    }

    public static void out(Map<Class<?>, List<PureeOutput>> sourceOutputMap) {
        Log.i(TAG, "# SOURCE -> FILTER... -> OUTPUT");
        for (Class<?> key : sourceOutputMap.keySet()) {
            for (PureeOutput output : (List) sourceOutputMap.get(key)) {
                StringBuilder builder = new StringBuilder(key.getSimpleName());
                for (PureeFilter filter : output.getFilters()) {
                    builder.append(" -> ");
                    builder.append(filter.getClass().getSimpleName());
                }
                builder.append(" -> ");
                builder.append(output.getClass().getSimpleName());
                Log.i(TAG, builder.toString());
            }
        }
    }
}
