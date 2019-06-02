package com.outsystems.plugins.oslogger.engines.puree;

import android.support.annotation.NonNull;
import android.util.Log;
import com.cookpad.puree.outputs.OutputConfiguration;
import com.cookpad.puree.outputs.PureeOutput;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.outsystems.plugins.oslogger.enums.OSLogType;

public class OSPureeConsoleOutput extends PureeOutput {
    private static final String TYPE = "console";

    @NonNull
    public String type() {
        return TYPE;
    }

    @NonNull
    public OutputConfiguration configure(@NonNull OutputConfiguration conf) {
        return conf;
    }

    public void emit(@NonNull JsonObject jsonLog) {
        String message = jsonLog.get(OSPureeLog.FIELD_MESSAGE).getAsString();
        String moduleName = jsonLog.get(OSPureeLog.FIELD_MODULE_NAME).getAsString();
        JsonElement extra = jsonLog.get(OSPureeLog.FIELD_EXTRA);
        OSLogType logType = OSLogType.values()[jsonLog.get(OSPureeLog.FIELD_LOG_TYPE).getAsInt()];
        StringBuilder stringBuilder;
        StringBuilder stringBuilder2;
        String stringBuilder3;
        switch (logType) {
            case VERBOSE:
                stringBuilder = new StringBuilder();
                stringBuilder.append(message);
                if (extra != null) {
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("\n");
                    stringBuilder2.append(extra.getAsString());
                    stringBuilder3 = stringBuilder2.toString();
                } else {
                    stringBuilder3 = "";
                }
                stringBuilder.append(stringBuilder3);
                Log.v(moduleName, stringBuilder.toString());
                return;
            case DEBUG:
                stringBuilder = new StringBuilder();
                stringBuilder.append(message);
                if (extra != null) {
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("\n");
                    stringBuilder2.append(extra.getAsString());
                    stringBuilder3 = stringBuilder2.toString();
                } else {
                    stringBuilder3 = "";
                }
                stringBuilder.append(stringBuilder3);
                Log.d(moduleName, stringBuilder.toString());
                return;
            case INFO:
                stringBuilder = new StringBuilder();
                stringBuilder.append(message);
                if (extra != null) {
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("\n");
                    stringBuilder2.append(extra.getAsString());
                    stringBuilder3 = stringBuilder2.toString();
                } else {
                    stringBuilder3 = "";
                }
                stringBuilder.append(stringBuilder3);
                Log.i(moduleName, stringBuilder.toString());
                return;
            case WARNING:
                stringBuilder = new StringBuilder();
                stringBuilder.append(message);
                if (extra != null) {
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("\n");
                    stringBuilder2.append(extra.getAsString());
                    stringBuilder3 = stringBuilder2.toString();
                } else {
                    stringBuilder3 = "";
                }
                stringBuilder.append(stringBuilder3);
                Log.w(moduleName, stringBuilder.toString());
                return;
            case ERROR:
            case FATAL:
                StringBuilder stringBuilder4;
                String stringBuilder5;
                JsonElement stack = jsonLog.get(OSPureeLog.FIELD_STACK);
                stringBuilder2 = new StringBuilder();
                stringBuilder2.append(message);
                if (extra != null) {
                    stringBuilder4 = new StringBuilder();
                    stringBuilder4.append("\n");
                    stringBuilder4.append(extra.toString());
                    stringBuilder5 = stringBuilder4.toString();
                } else {
                    stringBuilder5 = "";
                }
                stringBuilder2.append(stringBuilder5);
                if (stack != null) {
                    stringBuilder4 = new StringBuilder();
                    stringBuilder4.append("\n");
                    stringBuilder4.append(stack.getAsString());
                    stringBuilder5 = stringBuilder4.toString();
                } else {
                    stringBuilder5 = "";
                }
                stringBuilder2.append(stringBuilder5);
                Log.e(moduleName, stringBuilder2.toString());
                return;
            default:
                stringBuilder = new StringBuilder();
                stringBuilder.append("Unhandled log type ");
                stringBuilder.append(logType.name());
                stringBuilder.append(". Missing a case for it?");
                Log.w(moduleName, stringBuilder.toString());
                return;
        }
    }
}
