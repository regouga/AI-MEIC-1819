package com.google.gson.internal.bind;

import com.google.gson.FieldNamingStrategy;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.TypeAdapter;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.internal.C$Gson$Types;
import com.google.gson.internal.ConstructorConstructor;
import com.google.gson.internal.Excluder;
import com.google.gson.internal.ObjectConstructor;
import com.google.gson.internal.Primitives;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public final class ReflectiveTypeAdapterFactory implements TypeAdapterFactory {
    private final ConstructorConstructor constructorConstructor;
    private final Excluder excluder;
    private final FieldNamingStrategy fieldNamingPolicy;

    static abstract class BoundField {
        final boolean deserialized;
        final String name;
        final boolean serialized;

        abstract void read(JsonReader jsonReader, Object obj) throws IOException, IllegalAccessException;

        abstract void write(JsonWriter jsonWriter, Object obj) throws IOException, IllegalAccessException;

        abstract boolean writeField(Object obj) throws IOException, IllegalAccessException;

        protected BoundField(String name, boolean serialized, boolean deserialized) {
            this.name = name;
            this.serialized = serialized;
            this.deserialized = deserialized;
        }
    }

    public static final class Adapter<T> extends TypeAdapter<T> {
        private final Map<String, BoundField> boundFields;
        private final ObjectConstructor<T> constructor;

        Adapter(ObjectConstructor<T> constructor, Map<String, BoundField> boundFields) {
            this.constructor = constructor;
            this.boundFields = boundFields;
        }

        public T read(JsonReader in) throws IOException {
            if (in.peek() == JsonToken.NULL) {
                in.nextNull();
                return null;
            }
            T instance = this.constructor.construct();
            try {
                in.beginObject();
                while (in.hasNext()) {
                    BoundField field = (BoundField) this.boundFields.get(in.nextName());
                    if (field != null) {
                        if (field.deserialized) {
                            field.read(in, instance);
                        }
                    }
                    in.skipValue();
                }
                in.endObject();
                return instance;
            } catch (Throwable e) {
                throw new JsonSyntaxException(e);
            } catch (IllegalAccessException e2) {
                throw new AssertionError(e2);
            }
        }

        public void write(JsonWriter out, T value) throws IOException {
            if (value == null) {
                out.nullValue();
                return;
            }
            out.beginObject();
            try {
                for (BoundField boundField : this.boundFields.values()) {
                    if (boundField.writeField(value)) {
                        out.name(boundField.name);
                        boundField.write(out, value);
                    }
                }
                out.endObject();
            } catch (IllegalAccessException e) {
                throw new AssertionError(e);
            }
        }
    }

    public ReflectiveTypeAdapterFactory(ConstructorConstructor constructorConstructor, FieldNamingStrategy fieldNamingPolicy, Excluder excluder) {
        this.constructorConstructor = constructorConstructor;
        this.fieldNamingPolicy = fieldNamingPolicy;
        this.excluder = excluder;
    }

    public boolean excludeField(Field f, boolean serialize) {
        return excludeField(f, serialize, this.excluder);
    }

    static boolean excludeField(Field f, boolean serialize, Excluder excluder) {
        return (excluder.excludeClass(f.getType(), serialize) || excluder.excludeField(f, serialize)) ? false : true;
    }

    private List<String> getFieldNames(Field f) {
        return getFieldName(this.fieldNamingPolicy, f);
    }

    static List<String> getFieldName(FieldNamingStrategy fieldNamingPolicy, Field f) {
        SerializedName serializedName = (SerializedName) f.getAnnotation(SerializedName.class);
        List<String> fieldNames = new LinkedList();
        if (serializedName == null) {
            fieldNames.add(fieldNamingPolicy.translateName(f));
        } else {
            fieldNames.add(serializedName.value());
            for (String alternate : serializedName.alternate()) {
                fieldNames.add(alternate);
            }
        }
        return fieldNames;
    }

    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
        Class<? super T> raw = type.getRawType();
        if (Object.class.isAssignableFrom(raw)) {
            return new Adapter(this.constructorConstructor.get(type), getBoundFields(gson, type, raw));
        }
        return null;
    }

    private BoundField createBoundField(Gson context, Field field, String name, TypeToken<?> fieldType, boolean serialize, boolean deserialize) {
        final Gson gson = context;
        final Field field2 = field;
        final TypeToken<?> typeToken = fieldType;
        final boolean isPrimitive = Primitives.isPrimitive(fieldType.getRawType());
        return new BoundField(name, serialize, deserialize) {
            final TypeAdapter<?> typeAdapter = ReflectiveTypeAdapterFactory.this.getFieldAdapter(gson, field2, typeToken);

            void write(JsonWriter writer, Object value) throws IOException, IllegalAccessException {
                new TypeAdapterRuntimeTypeWrapper(gson, this.typeAdapter, typeToken.getType()).write(writer, field2.get(value));
            }

            void read(JsonReader reader, Object value) throws IOException, IllegalAccessException {
                Object fieldValue = this.typeAdapter.read(reader);
                if (fieldValue == null) {
                    if (isPrimitive) {
                        return;
                    }
                }
                field2.set(value, fieldValue);
            }

            public boolean writeField(Object value) throws IOException, IllegalAccessException {
                boolean z = false;
                if (!this.serialized) {
                    return false;
                }
                if (field2.get(value) != value) {
                    z = true;
                }
                return z;
            }
        };
    }

    TypeAdapter<?> getFieldAdapter(Gson gson, Field field, TypeToken<?> fieldType) {
        JsonAdapter annotation = (JsonAdapter) field.getAnnotation(JsonAdapter.class);
        if (annotation != null) {
            TypeAdapter<?> adapter = JsonAdapterAnnotationTypeAdapterFactory.getTypeAdapter(this.constructorConstructor, gson, fieldType, annotation);
            if (adapter != null) {
                return adapter;
            }
        }
        return gson.getAdapter((TypeToken) fieldType);
    }

    private Map<String, BoundField> getBoundFields(Gson context, TypeToken<?> type, Class<?> raw) {
        ReflectiveTypeAdapterFactory reflectiveTypeAdapterFactory = this;
        LinkedHashMap result = new LinkedHashMap();
        if (raw.isInterface()) {
            return result;
        }
        Type declaredType = type.getType();
        TypeToken<?> type2 = type;
        Class<?> raw2 = raw;
        while (raw2 != Object.class) {
            Field[] fields = raw2.getDeclaredFields();
            int length = fields.length;
            boolean z = false;
            int i = 0;
            while (i < length) {
                Field field = fields[i];
                boolean serialize = excludeField(field, true);
                boolean deserialize = excludeField(field, z);
                if (serialize || deserialize) {
                    BoundField previous;
                    int i2;
                    List<String> fieldNames;
                    Field field2;
                    field.setAccessible(true);
                    Type fieldType = C$Gson$Types.resolve(type2.getType(), raw2, field.getGenericType());
                    List<String> fieldNames2 = getFieldNames(field);
                    BoundField previous2 = null;
                    int i3 = 0;
                    while (i3 < fieldNames2.size()) {
                        String name = (String) fieldNames2.get(i3);
                        boolean serialize2 = i3 != 0 ? false : serialize;
                        String name2 = name;
                        previous = previous2;
                        i2 = i3;
                        fieldNames = fieldNames2;
                        field2 = field;
                        previous2 = previous == null ? (BoundField) result.put(name2, createBoundField(context, field, name2, TypeToken.get(fieldType), serialize2, deserialize)) : previous;
                        i3 = i2 + 1;
                        serialize = serialize2;
                        fieldNames2 = fieldNames;
                        field = field2;
                    }
                    previous = previous2;
                    i2 = i3;
                    fieldNames = fieldNames2;
                    field2 = field;
                    if (previous != null) {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append(declaredType);
                        stringBuilder.append(" declares multiple JSON fields named ");
                        stringBuilder.append(previous.name);
                        throw new IllegalArgumentException(stringBuilder.toString());
                    }
                }
                i++;
                z = false;
            }
            type2 = TypeToken.get(C$Gson$Types.resolve(type2.getType(), raw2, raw2.getGenericSuperclass()));
            raw2 = type2.getRawType();
        }
        return result;
    }
}
