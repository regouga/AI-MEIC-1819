package com.google.gson.internal.bind;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonNull;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map.Entry;

public final class JsonTreeReader extends JsonReader {
    private static final Object SENTINEL_CLOSED = new Object();
    private static final Reader UNREADABLE_READER = new C02391();
    private final List<Object> stack = new ArrayList();

    /* renamed from: com.google.gson.internal.bind.JsonTreeReader$1 */
    static class C02391 extends Reader {
        C02391() {
        }

        public int read(char[] buffer, int offset, int count) throws IOException {
            throw new AssertionError();
        }

        public void close() throws IOException {
            throw new AssertionError();
        }
    }

    public JsonTreeReader(JsonElement element) {
        super(UNREADABLE_READER);
        this.stack.add(element);
    }

    public void beginArray() throws IOException {
        expect(JsonToken.BEGIN_ARRAY);
        this.stack.add(((JsonArray) peekStack()).iterator());
    }

    public void endArray() throws IOException {
        expect(JsonToken.END_ARRAY);
        popStack();
        popStack();
    }

    public void beginObject() throws IOException {
        expect(JsonToken.BEGIN_OBJECT);
        this.stack.add(((JsonObject) peekStack()).entrySet().iterator());
    }

    public void endObject() throws IOException {
        expect(JsonToken.END_OBJECT);
        popStack();
        popStack();
    }

    public boolean hasNext() throws IOException {
        JsonToken token = peek();
        return (token == JsonToken.END_OBJECT || token == JsonToken.END_ARRAY) ? false : true;
    }

    public JsonToken peek() throws IOException {
        if (this.stack.isEmpty()) {
            return JsonToken.END_DOCUMENT;
        }
        Iterator<?> o = peekStack();
        if (o instanceof Iterator) {
            List list = this.stack;
            boolean isObject = list.get(list.size() - 2) instanceof JsonObject;
            Iterator<?> iterator = o;
            if (!iterator.hasNext()) {
                return isObject ? JsonToken.END_OBJECT : JsonToken.END_ARRAY;
            } else if (isObject) {
                return JsonToken.NAME;
            } else {
                this.stack.add(iterator.next());
                return peek();
            }
        } else if (o instanceof JsonObject) {
            return JsonToken.BEGIN_OBJECT;
        } else {
            if (o instanceof JsonArray) {
                return JsonToken.BEGIN_ARRAY;
            }
            if (o instanceof JsonPrimitive) {
                JsonPrimitive primitive = (JsonPrimitive) o;
                if (primitive.isString()) {
                    return JsonToken.STRING;
                }
                if (primitive.isBoolean()) {
                    return JsonToken.BOOLEAN;
                }
                if (primitive.isNumber()) {
                    return JsonToken.NUMBER;
                }
                throw new AssertionError();
            } else if (o instanceof JsonNull) {
                return JsonToken.NULL;
            } else {
                if (o == SENTINEL_CLOSED) {
                    throw new IllegalStateException("JsonReader is closed");
                }
                throw new AssertionError();
            }
        }
    }

    private Object peekStack() {
        List list = this.stack;
        return list.get(list.size() - 1);
    }

    private Object popStack() {
        List list = this.stack;
        return list.remove(list.size() - 1);
    }

    private void expect(JsonToken expected) throws IOException {
        if (peek() != expected) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Expected ");
            stringBuilder.append(expected);
            stringBuilder.append(" but was ");
            stringBuilder.append(peek());
            throw new IllegalStateException(stringBuilder.toString());
        }
    }

    public String nextName() throws IOException {
        expect(JsonToken.NAME);
        Entry<?, ?> entry = (Entry) ((Iterator) peekStack()).next();
        this.stack.add(entry.getValue());
        return (String) entry.getKey();
    }

    public String nextString() throws IOException {
        JsonToken token = peek();
        if (token != JsonToken.STRING) {
            if (token != JsonToken.NUMBER) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Expected ");
                stringBuilder.append(JsonToken.STRING);
                stringBuilder.append(" but was ");
                stringBuilder.append(token);
                throw new IllegalStateException(stringBuilder.toString());
            }
        }
        return ((JsonPrimitive) popStack()).getAsString();
    }

    public boolean nextBoolean() throws IOException {
        expect(JsonToken.BOOLEAN);
        return ((JsonPrimitive) popStack()).getAsBoolean();
    }

    public void nextNull() throws IOException {
        expect(JsonToken.NULL);
        popStack();
    }

    public double nextDouble() throws IOException {
        JsonToken token = peek();
        if (token != JsonToken.NUMBER) {
            if (token != JsonToken.STRING) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Expected ");
                stringBuilder.append(JsonToken.NUMBER);
                stringBuilder.append(" but was ");
                stringBuilder.append(token);
                throw new IllegalStateException(stringBuilder.toString());
            }
        }
        double result = ((JsonPrimitive) peekStack()).getAsDouble();
        if (!isLenient()) {
            if (Double.isNaN(result) || Double.isInfinite(result)) {
                StringBuilder stringBuilder2 = new StringBuilder();
                stringBuilder2.append("JSON forbids NaN and infinities: ");
                stringBuilder2.append(result);
                throw new NumberFormatException(stringBuilder2.toString());
            }
        }
        popStack();
        return result;
    }

    public long nextLong() throws IOException {
        JsonToken token = peek();
        if (token != JsonToken.NUMBER) {
            if (token != JsonToken.STRING) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Expected ");
                stringBuilder.append(JsonToken.NUMBER);
                stringBuilder.append(" but was ");
                stringBuilder.append(token);
                throw new IllegalStateException(stringBuilder.toString());
            }
        }
        long result = ((JsonPrimitive) peekStack()).getAsLong();
        popStack();
        return result;
    }

    public int nextInt() throws IOException {
        JsonToken token = peek();
        if (token != JsonToken.NUMBER) {
            if (token != JsonToken.STRING) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Expected ");
                stringBuilder.append(JsonToken.NUMBER);
                stringBuilder.append(" but was ");
                stringBuilder.append(token);
                throw new IllegalStateException(stringBuilder.toString());
            }
        }
        int result = ((JsonPrimitive) peekStack()).getAsInt();
        popStack();
        return result;
    }

    public void close() throws IOException {
        this.stack.clear();
        this.stack.add(SENTINEL_CLOSED);
    }

    public void skipValue() throws IOException {
        if (peek() == JsonToken.NAME) {
            nextName();
        } else {
            popStack();
        }
    }

    public String toString() {
        return getClass().getSimpleName();
    }

    public void promoteNameToValue() throws IOException {
        expect(JsonToken.NAME);
        Entry<?, ?> entry = (Entry) ((Iterator) peekStack()).next();
        this.stack.add(entry.getValue());
        this.stack.add(new JsonPrimitive((String) entry.getKey()));
    }
}
