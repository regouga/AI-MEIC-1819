package com.google.gson.internal.bind;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.TypeAdapter;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.sql.Time;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

public final class TimeTypeAdapter extends TypeAdapter<Time> {
    public static final TypeAdapterFactory FACTORY = new C03261();
    private final DateFormat format = new SimpleDateFormat("hh:mm:ss a");

    /* renamed from: com.google.gson.internal.bind.TimeTypeAdapter$1 */
    static class C03261 implements TypeAdapterFactory {
        C03261() {
        }

        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> typeToken) {
            return typeToken.getRawType() == Time.class ? new TimeTypeAdapter() : null;
        }
    }

    public synchronized Time read(JsonReader in) throws IOException {
        if (in.peek() == JsonToken.NULL) {
            in.nextNull();
            return null;
        }
        try {
            return new Time(this.format.parse(in.nextString()).getTime());
        } catch (Throwable e) {
            throw new JsonSyntaxException(e);
        }
    }

    public synchronized void write(JsonWriter out, Time value) throws IOException {
        out.value(value == null ? null : this.format.format(value));
    }
}
