package com.google.gson.internal.bind;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonNull;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

public final class JsonTreeWriter extends JsonWriter {
    private static final JsonPrimitive SENTINEL_CLOSED = new JsonPrimitive("closed");
    private static final Writer UNWRITABLE_WRITER = new C02401();
    private String pendingName;
    private JsonElement product = JsonNull.INSTANCE;
    private final List<JsonElement> stack = new ArrayList();

    /* renamed from: com.google.gson.internal.bind.JsonTreeWriter$1 */
    static class C02401 extends Writer {
        C02401() {
        }

        public void write(char[] buffer, int offset, int counter) {
            throw new AssertionError();
        }

        public void flush() throws IOException {
            throw new AssertionError();
        }

        public void close() throws IOException {
            throw new AssertionError();
        }
    }

    public JsonTreeWriter() {
        super(UNWRITABLE_WRITER);
    }

    public JsonElement get() {
        if (this.stack.isEmpty()) {
            return this.product;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Expected one JSON element but was ");
        stringBuilder.append(this.stack);
        throw new IllegalStateException(stringBuilder.toString());
    }

    private JsonElement peek() {
        List list = this.stack;
        return (JsonElement) list.get(list.size() - 1);
    }

    private void put(JsonElement value) {
        if (this.pendingName != null) {
            if (value.isJsonNull()) {
                if (!getSerializeNulls()) {
                    this.pendingName = null;
                }
            }
            ((JsonObject) peek()).add(this.pendingName, value);
            this.pendingName = null;
        } else if (this.stack.isEmpty()) {
            this.product = value;
        } else {
            JsonElement element = peek();
            if (element instanceof JsonArray) {
                ((JsonArray) element).add(value);
                return;
            }
            throw new IllegalStateException();
        }
    }

    public JsonWriter beginArray() throws IOException {
        JsonArray array = new JsonArray();
        put(array);
        this.stack.add(array);
        return this;
    }

    public JsonWriter endArray() throws IOException {
        if (this.stack.isEmpty() || this.pendingName != null) {
            throw new IllegalStateException();
        } else if (peek() instanceof JsonArray) {
            List list = this.stack;
            list.remove(list.size() - 1);
            return this;
        } else {
            throw new IllegalStateException();
        }
    }

    public JsonWriter beginObject() throws IOException {
        JsonObject object = new JsonObject();
        put(object);
        this.stack.add(object);
        return this;
    }

    public JsonWriter endObject() throws IOException {
        if (this.stack.isEmpty() || this.pendingName != null) {
            throw new IllegalStateException();
        } else if (peek() instanceof JsonObject) {
            List list = this.stack;
            list.remove(list.size() - 1);
            return this;
        } else {
            throw new IllegalStateException();
        }
    }

    public JsonWriter name(String name) throws IOException {
        if (this.stack.isEmpty() || this.pendingName != null) {
            throw new IllegalStateException();
        } else if (peek() instanceof JsonObject) {
            this.pendingName = name;
            return this;
        } else {
            throw new IllegalStateException();
        }
    }

    public JsonWriter value(String value) throws IOException {
        if (value == null) {
            return nullValue();
        }
        put(new JsonPrimitive(value));
        return this;
    }

    public JsonWriter nullValue() throws IOException {
        put(JsonNull.INSTANCE);
        return this;
    }

    public JsonWriter value(boolean value) throws IOException {
        put(new JsonPrimitive(Boolean.valueOf(value)));
        return this;
    }

    public JsonWriter value(double value) throws IOException {
        if (!isLenient()) {
            if (Double.isNaN(value) || Double.isInfinite(value)) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("JSON forbids NaN and infinities: ");
                stringBuilder.append(value);
                throw new IllegalArgumentException(stringBuilder.toString());
            }
        }
        put(new JsonPrimitive(Double.valueOf(value)));
        return this;
    }

    public JsonWriter value(long value) throws IOException {
        put(new JsonPrimitive(Long.valueOf(value)));
        return this;
    }

    public JsonWriter value(Number value) throws IOException {
        if (value == null) {
            return nullValue();
        }
        if (!isLenient()) {
            double d = value.doubleValue();
            if (Double.isNaN(d) || Double.isInfinite(d)) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("JSON forbids NaN and infinities: ");
                stringBuilder.append(value);
                throw new IllegalArgumentException(stringBuilder.toString());
            }
        }
        put(new JsonPrimitive(value));
        return this;
    }

    public void flush() throws IOException {
    }

    public void close() throws IOException {
        if (this.stack.isEmpty()) {
            this.stack.add(SENTINEL_CLOSED);
            return;
        }
        throw new IOException("Incomplete document");
    }
}
