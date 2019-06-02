package com.google.gson.reflect;

import com.google.gson.internal.C$Gson$Preconditions;
import com.google.gson.internal.C$Gson$Types;
import java.lang.reflect.GenericArrayType;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.util.HashMap;
import java.util.Map;

public class TypeToken<T> {
    final int hashCode;
    final Class<? super T> rawType;
    final Type type;

    protected TypeToken() {
        this.type = getSuperclassTypeParameter(getClass());
        this.rawType = C$Gson$Types.getRawType(this.type);
        this.hashCode = this.type.hashCode();
    }

    TypeToken(Type type) {
        this.type = C$Gson$Types.canonicalize((Type) C$Gson$Preconditions.checkNotNull(type));
        this.rawType = C$Gson$Types.getRawType(this.type);
        this.hashCode = this.type.hashCode();
    }

    static Type getSuperclassTypeParameter(Class<?> subclass) {
        Type superclass = subclass.getGenericSuperclass();
        if (!(superclass instanceof Class)) {
            return C$Gson$Types.canonicalize(((ParameterizedType) superclass).getActualTypeArguments()[0]);
        }
        throw new RuntimeException("Missing type parameter.");
    }

    public final Class<? super T> getRawType() {
        return this.rawType;
    }

    public final Type getType() {
        return this.type;
    }

    @Deprecated
    public boolean isAssignableFrom(Class<?> cls) {
        return isAssignableFrom((Type) cls);
    }

    @Deprecated
    public boolean isAssignableFrom(Type from) {
        boolean z = false;
        if (from == null) {
            return false;
        }
        if (this.type.equals(from)) {
            return true;
        }
        Type type = this.type;
        if (type instanceof Class) {
            return this.rawType.isAssignableFrom(C$Gson$Types.getRawType(from));
        }
        if (type instanceof ParameterizedType) {
            return isAssignableFrom(from, (ParameterizedType) type, new HashMap());
        }
        if (type instanceof GenericArrayType) {
            if (this.rawType.isAssignableFrom(C$Gson$Types.getRawType(from))) {
                if (isAssignableFrom(from, (GenericArrayType) this.type)) {
                    z = true;
                    return z;
                }
            }
            return z;
        }
        throw buildUnexpectedTypeError(type, Class.class, ParameterizedType.class, GenericArrayType.class);
    }

    @Deprecated
    public boolean isAssignableFrom(TypeToken<?> token) {
        return isAssignableFrom(token.getType());
    }

    private static boolean isAssignableFrom(Type from, GenericArrayType to) {
        Type toGenericComponentType = to.getGenericComponentType();
        if (!(toGenericComponentType instanceof ParameterizedType)) {
            return true;
        }
        Type t = from;
        if (from instanceof GenericArrayType) {
            t = ((GenericArrayType) from).getGenericComponentType();
        } else if (from instanceof Class) {
            Class<?> classType = (Class) from;
            while (classType.isArray()) {
                classType = classType.getComponentType();
            }
            t = classType;
        }
        return isAssignableFrom(t, (ParameterizedType) toGenericComponentType, new HashMap());
    }

    private static boolean isAssignableFrom(Type from, ParameterizedType to, Map<String, Type> typeVarMap) {
        int i = 0;
        if (from == null) {
            return false;
        }
        if (to.equals(from)) {
            return true;
        }
        Type[] tArgs;
        Class<?> clazz = C$Gson$Types.getRawType(from);
        ParameterizedType ptype = null;
        if (from instanceof ParameterizedType) {
            ptype = (ParameterizedType) from;
        }
        if (ptype != null) {
            tArgs = ptype.getActualTypeArguments();
            TypeVariable<?>[] tParams = clazz.getTypeParameters();
            for (int i2 = 0; i2 < tArgs.length; i2++) {
                Type arg = tArgs[i2];
                TypeVariable<?> var = tParams[i2];
                while (arg instanceof TypeVariable) {
                    arg = (Type) typeVarMap.get(((TypeVariable) arg).getName());
                }
                typeVarMap.put(var.getName(), arg);
            }
            if (typeEquals(ptype, to, typeVarMap)) {
                return true;
            }
        }
        tArgs = clazz.getGenericInterfaces();
        int length = tArgs.length;
        while (i < length) {
            if (isAssignableFrom(tArgs[i], to, new HashMap(typeVarMap))) {
                return true;
            }
            i++;
        }
        return isAssignableFrom(clazz.getGenericSuperclass(), to, new HashMap(typeVarMap));
    }

    private static boolean typeEquals(ParameterizedType from, ParameterizedType to, Map<String, Type> typeVarMap) {
        if (!from.getRawType().equals(to.getRawType())) {
            return false;
        }
        Type[] fromArgs = from.getActualTypeArguments();
        Type[] toArgs = to.getActualTypeArguments();
        for (int i = 0; i < fromArgs.length; i++) {
            if (!matches(fromArgs[i], toArgs[i], typeVarMap)) {
                return false;
            }
        }
        return true;
    }

    private static AssertionError buildUnexpectedTypeError(Type token, Class<?>... expected) {
        StringBuilder exceptionMessage = new StringBuilder("Unexpected type. Expected one of: ");
        for (Class<?> clazz : expected) {
            exceptionMessage.append(clazz.getName());
            exceptionMessage.append(", ");
        }
        exceptionMessage.append("but got: ");
        exceptionMessage.append(token.getClass().getName());
        exceptionMessage.append(", for type token: ");
        exceptionMessage.append(token.toString());
        exceptionMessage.append('.');
        return new AssertionError(exceptionMessage.toString());
    }

    private static boolean matches(Type from, Type to, Map<String, Type> typeMap) {
        if (!to.equals(from)) {
            if (from instanceof TypeVariable) {
                if (to.equals(typeMap.get(((TypeVariable) from).getName()))) {
                }
            }
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.hashCode;
    }

    public final boolean equals(Object o) {
        if (o instanceof TypeToken) {
            if (C$Gson$Types.equals(this.type, ((TypeToken) o).type)) {
                return true;
            }
        }
        return false;
    }

    public final String toString() {
        return C$Gson$Types.typeToString(this.type);
    }

    public static TypeToken<?> get(Type type) {
        return new TypeToken(type);
    }

    public static <T> TypeToken<T> get(Class<T> type) {
        return new TypeToken(type);
    }
}
