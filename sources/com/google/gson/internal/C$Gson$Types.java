package com.google.gson.internal;

import java.io.Serializable;
import java.lang.reflect.Array;
import java.lang.reflect.GenericArrayType;
import java.lang.reflect.GenericDeclaration;
import java.lang.reflect.Modifier;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.lang.reflect.WildcardType;
import java.util.Arrays;
import java.util.Collection;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Properties;

/* renamed from: com.google.gson.internal.$Gson$Types */
public final class C$Gson$Types {
    static final Type[] EMPTY_TYPE_ARRAY = new Type[0];

    /* compiled from: $Gson$Types */
    /* renamed from: com.google.gson.internal.$Gson$Types$GenericArrayTypeImpl */
    private static final class GenericArrayTypeImpl implements GenericArrayType, Serializable {
        private static final long serialVersionUID = 0;
        private final Type componentType;

        public GenericArrayTypeImpl(Type componentType) {
            this.componentType = C$Gson$Types.canonicalize(componentType);
        }

        public Type getGenericComponentType() {
            return this.componentType;
        }

        public boolean equals(Object o) {
            if (o instanceof GenericArrayType) {
                if (C$Gson$Types.equals(this, (GenericArrayType) o)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return this.componentType.hashCode();
        }

        public String toString() {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(C$Gson$Types.typeToString(this.componentType));
            stringBuilder.append("[]");
            return stringBuilder.toString();
        }
    }

    /* compiled from: $Gson$Types */
    /* renamed from: com.google.gson.internal.$Gson$Types$ParameterizedTypeImpl */
    private static final class ParameterizedTypeImpl implements ParameterizedType, Serializable {
        private static final long serialVersionUID = 0;
        private final Type ownerType;
        private final Type rawType;
        private final Type[] typeArguments;

        public ParameterizedTypeImpl(Type ownerType, Type rawType, Type... typeArguments) {
            if (rawType instanceof Class) {
                boolean isStaticOrTopLevelClass;
                Class<?> rawTypeAsClass = (Class) rawType;
                boolean z = false;
                if (!Modifier.isStatic(rawTypeAsClass.getModifiers())) {
                    if (rawTypeAsClass.getEnclosingClass() != null) {
                        isStaticOrTopLevelClass = false;
                        if (ownerType == null) {
                            if (isStaticOrTopLevelClass) {
                                C$Gson$Preconditions.checkArgument(z);
                            }
                        }
                        z = true;
                        C$Gson$Preconditions.checkArgument(z);
                    }
                }
                isStaticOrTopLevelClass = true;
                if (ownerType == null) {
                    if (isStaticOrTopLevelClass) {
                        C$Gson$Preconditions.checkArgument(z);
                    }
                }
                z = true;
                C$Gson$Preconditions.checkArgument(z);
            }
            this.ownerType = ownerType == null ? null : C$Gson$Types.canonicalize(ownerType);
            this.rawType = C$Gson$Types.canonicalize(rawType);
            this.typeArguments = (Type[]) typeArguments.clone();
            int t = 0;
            while (true) {
                Type[] typeArr = this.typeArguments;
                if (t < typeArr.length) {
                    C$Gson$Preconditions.checkNotNull(typeArr[t]);
                    C$Gson$Types.checkNotPrimitive(this.typeArguments[t]);
                    typeArr = this.typeArguments;
                    typeArr[t] = C$Gson$Types.canonicalize(typeArr[t]);
                    t++;
                } else {
                    return;
                }
            }
        }

        public Type[] getActualTypeArguments() {
            return (Type[]) this.typeArguments.clone();
        }

        public Type getRawType() {
            return this.rawType;
        }

        public Type getOwnerType() {
            return this.ownerType;
        }

        public boolean equals(Object other) {
            if (other instanceof ParameterizedType) {
                if (C$Gson$Types.equals(this, (ParameterizedType) other)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (Arrays.hashCode(this.typeArguments) ^ this.rawType.hashCode()) ^ C$Gson$Types.hashCodeOrZero(this.ownerType);
        }

        public String toString() {
            StringBuilder stringBuilder = new StringBuilder((this.typeArguments.length + 1) * 30);
            stringBuilder.append(C$Gson$Types.typeToString(this.rawType));
            if (this.typeArguments.length == 0) {
                return stringBuilder.toString();
            }
            stringBuilder.append("<");
            stringBuilder.append(C$Gson$Types.typeToString(this.typeArguments[0]));
            for (int i = 1; i < this.typeArguments.length; i++) {
                stringBuilder.append(", ");
                stringBuilder.append(C$Gson$Types.typeToString(this.typeArguments[i]));
            }
            stringBuilder.append(">");
            return stringBuilder.toString();
        }
    }

    /* compiled from: $Gson$Types */
    /* renamed from: com.google.gson.internal.$Gson$Types$WildcardTypeImpl */
    private static final class WildcardTypeImpl implements WildcardType, Serializable {
        private static final long serialVersionUID = 0;
        private final Type lowerBound;
        private final Type upperBound;

        public WildcardTypeImpl(Type[] upperBounds, Type[] lowerBounds) {
            boolean z = true;
            C$Gson$Preconditions.checkArgument(lowerBounds.length <= 1);
            C$Gson$Preconditions.checkArgument(upperBounds.length == 1);
            if (lowerBounds.length == 1) {
                C$Gson$Preconditions.checkNotNull(lowerBounds[0]);
                C$Gson$Types.checkNotPrimitive(lowerBounds[0]);
                if (upperBounds[0] != Object.class) {
                    z = false;
                }
                C$Gson$Preconditions.checkArgument(z);
                this.lowerBound = C$Gson$Types.canonicalize(lowerBounds[0]);
                this.upperBound = Object.class;
                return;
            }
            C$Gson$Preconditions.checkNotNull(upperBounds[0]);
            C$Gson$Types.checkNotPrimitive(upperBounds[0]);
            this.lowerBound = null;
            this.upperBound = C$Gson$Types.canonicalize(upperBounds[0]);
        }

        public Type[] getUpperBounds() {
            return new Type[]{this.upperBound};
        }

        public Type[] getLowerBounds() {
            if (this.lowerBound == null) {
                return C$Gson$Types.EMPTY_TYPE_ARRAY;
            }
            return new Type[]{this.lowerBound};
        }

        public boolean equals(Object other) {
            if (other instanceof WildcardType) {
                if (C$Gson$Types.equals(this, (WildcardType) other)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            Type type = this.lowerBound;
            return (type != null ? type.hashCode() + 31 : 1) ^ (this.upperBound.hashCode() + 31);
        }

        public String toString() {
            StringBuilder stringBuilder;
            if (this.lowerBound != null) {
                stringBuilder = new StringBuilder();
                stringBuilder.append("? super ");
                stringBuilder.append(C$Gson$Types.typeToString(this.lowerBound));
                return stringBuilder.toString();
            } else if (this.upperBound == Object.class) {
                return "?";
            } else {
                stringBuilder = new StringBuilder();
                stringBuilder.append("? extends ");
                stringBuilder.append(C$Gson$Types.typeToString(this.upperBound));
                return stringBuilder.toString();
            }
        }
    }

    private C$Gson$Types() {
        throw new UnsupportedOperationException();
    }

    public static ParameterizedType newParameterizedTypeWithOwner(Type ownerType, Type rawType, Type... typeArguments) {
        return new ParameterizedTypeImpl(ownerType, rawType, typeArguments);
    }

    public static GenericArrayType arrayOf(Type componentType) {
        return new GenericArrayTypeImpl(componentType);
    }

    public static WildcardType subtypeOf(Type bound) {
        return new WildcardTypeImpl(new Type[]{bound}, EMPTY_TYPE_ARRAY);
    }

    public static WildcardType supertypeOf(Type bound) {
        return new WildcardTypeImpl(new Type[]{Object.class}, new Type[]{bound});
    }

    public static Type canonicalize(Type type) {
        if (type instanceof Class) {
            Class<?> c = (Class) type;
            return c.isArray() ? new GenericArrayTypeImpl(C$Gson$Types.canonicalize(c.getComponentType())) : c;
        } else if (type instanceof ParameterizedType) {
            ParameterizedType p = (ParameterizedType) type;
            return new ParameterizedTypeImpl(p.getOwnerType(), p.getRawType(), p.getActualTypeArguments());
        } else if (type instanceof GenericArrayType) {
            return new GenericArrayTypeImpl(((GenericArrayType) type).getGenericComponentType());
        } else {
            if (!(type instanceof WildcardType)) {
                return type;
            }
            WildcardType w = (WildcardType) type;
            return new WildcardTypeImpl(w.getUpperBounds(), w.getLowerBounds());
        }
    }

    public static Class<?> getRawType(Type type) {
        if (type instanceof Class) {
            return (Class) type;
        }
        if (type instanceof ParameterizedType) {
            Type rawType = ((ParameterizedType) type).getRawType();
            C$Gson$Preconditions.checkArgument(rawType instanceof Class);
            return (Class) rawType;
        } else if (type instanceof GenericArrayType) {
            return Array.newInstance(C$Gson$Types.getRawType(((GenericArrayType) type).getGenericComponentType()), 0).getClass();
        } else {
            if (type instanceof TypeVariable) {
                return Object.class;
            }
            if (type instanceof WildcardType) {
                return C$Gson$Types.getRawType(((WildcardType) type).getUpperBounds()[0]);
            }
            String className = type == null ? "null" : type.getClass().getName();
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Expected a Class, ParameterizedType, or GenericArrayType, but <");
            stringBuilder.append(type);
            stringBuilder.append("> is of type ");
            stringBuilder.append(className);
            throw new IllegalArgumentException(stringBuilder.toString());
        }
    }

    static boolean equal(Object a, Object b) {
        if (a != b) {
            if (a == null || !a.equals(b)) {
                return false;
            }
        }
        return true;
    }

    public static boolean equals(Type a, Type b) {
        boolean z = true;
        if (a == b) {
            return true;
        }
        if (a instanceof Class) {
            return a.equals(b);
        }
        if (a instanceof ParameterizedType) {
            if (!(b instanceof ParameterizedType)) {
                return false;
            }
            ParameterizedType pa = (ParameterizedType) a;
            ParameterizedType pb = (ParameterizedType) b;
            if (C$Gson$Types.equal(pa.getOwnerType(), pb.getOwnerType())) {
                if (pa.getRawType().equals(pb.getRawType())) {
                    if (Arrays.equals(pa.getActualTypeArguments(), pb.getActualTypeArguments())) {
                        return z;
                    }
                }
            }
            z = false;
            return z;
        } else if (a instanceof GenericArrayType) {
            if (!(b instanceof GenericArrayType)) {
                return false;
            }
            return C$Gson$Types.equals(((GenericArrayType) a).getGenericComponentType(), ((GenericArrayType) b).getGenericComponentType());
        } else if (a instanceof WildcardType) {
            if (!(b instanceof WildcardType)) {
                return false;
            }
            WildcardType wa = (WildcardType) a;
            WildcardType wb = (WildcardType) b;
            if (Arrays.equals(wa.getUpperBounds(), wb.getUpperBounds())) {
                if (Arrays.equals(wa.getLowerBounds(), wb.getLowerBounds())) {
                    return z;
                }
            }
            z = false;
            return z;
        } else if (!(a instanceof TypeVariable) || !(b instanceof TypeVariable)) {
            return false;
        } else {
            TypeVariable<?> va = (TypeVariable) a;
            TypeVariable<?> vb = (TypeVariable) b;
            if (va.getGenericDeclaration() == vb.getGenericDeclaration()) {
                if (va.getName().equals(vb.getName())) {
                    return z;
                }
            }
            z = false;
            return z;
        }
    }

    static int hashCodeOrZero(Object o) {
        return o != null ? o.hashCode() : 0;
    }

    public static String typeToString(Type type) {
        return type instanceof Class ? ((Class) type).getName() : type.toString();
    }

    static Type getGenericSupertype(Type context, Class<?> rawType, Class<?> toResolve) {
        if (toResolve == rawType) {
            return context;
        }
        if (toResolve.isInterface()) {
            Class<?>[] interfaces = rawType.getInterfaces();
            int length = interfaces.length;
            for (int i = 0; i < length; i++) {
                if (interfaces[i] == toResolve) {
                    return rawType.getGenericInterfaces()[i];
                }
                if (toResolve.isAssignableFrom(interfaces[i])) {
                    return C$Gson$Types.getGenericSupertype(rawType.getGenericInterfaces()[i], interfaces[i], toResolve);
                }
            }
        }
        if (!rawType.isInterface()) {
            while (rawType != Object.class) {
                Class<?> rawSupertype = rawType.getSuperclass();
                if (rawSupertype == toResolve) {
                    return rawType.getGenericSuperclass();
                }
                if (toResolve.isAssignableFrom(rawSupertype)) {
                    return C$Gson$Types.getGenericSupertype(rawType.getGenericSuperclass(), rawSupertype, toResolve);
                }
                rawType = rawSupertype;
            }
        }
        return toResolve;
    }

    static Type getSupertype(Type context, Class<?> contextRawType, Class<?> supertype) {
        C$Gson$Preconditions.checkArgument(supertype.isAssignableFrom(contextRawType));
        return C$Gson$Types.resolve(context, contextRawType, C$Gson$Types.getGenericSupertype(context, contextRawType, supertype));
    }

    public static Type getArrayComponentType(Type array) {
        if (array instanceof GenericArrayType) {
            return ((GenericArrayType) array).getGenericComponentType();
        }
        return ((Class) array).getComponentType();
    }

    public static Type getCollectionElementType(Type context, Class<?> contextRawType) {
        Type collectionType = C$Gson$Types.getSupertype(context, contextRawType, Collection.class);
        if (collectionType instanceof WildcardType) {
            collectionType = ((WildcardType) collectionType).getUpperBounds()[0];
        }
        if (collectionType instanceof ParameterizedType) {
            return ((ParameterizedType) collectionType).getActualTypeArguments()[0];
        }
        return Object.class;
    }

    public static Type[] getMapKeyAndValueTypes(Type context, Class<?> contextRawType) {
        if (context == Properties.class) {
            return new Type[]{String.class, String.class};
        }
        Type mapType = C$Gson$Types.getSupertype(context, contextRawType, Map.class);
        if (mapType instanceof ParameterizedType) {
            return ((ParameterizedType) mapType).getActualTypeArguments();
        }
        return new Type[]{Object.class, Object.class};
    }

    public static Type resolve(Type context, Class<?> contextRawType, Type toResolve) {
        while (toResolve instanceof TypeVariable) {
            Type typeVariable = (TypeVariable) toResolve;
            toResolve = C$Gson$Types.resolveTypeVariable(context, contextRawType, typeVariable);
            if (toResolve == typeVariable) {
                return toResolve;
            }
        }
        Type componentType;
        Type newComponentType;
        Type type;
        if ((toResolve instanceof Class) && ((Class) toResolve).isArray()) {
            Class<?> original = (Class) toResolve;
            componentType = original.getComponentType();
            newComponentType = C$Gson$Types.resolve(context, contextRawType, componentType);
            if (componentType == newComponentType) {
                type = original;
            } else {
                type = C$Gson$Types.arrayOf(newComponentType);
            }
            return type;
        } else if (toResolve instanceof GenericArrayType) {
            GenericArrayType original2 = (GenericArrayType) toResolve;
            componentType = original2.getGenericComponentType();
            newComponentType = C$Gson$Types.resolve(context, contextRawType, componentType);
            if (componentType == newComponentType) {
                type = original2;
            } else {
                type = C$Gson$Types.arrayOf(newComponentType);
            }
            return type;
        } else {
            boolean z = true;
            if (toResolve instanceof ParameterizedType) {
                ParameterizedType original3 = (ParameterizedType) toResolve;
                type = original3.getOwnerType();
                Type newOwnerType = C$Gson$Types.resolve(context, contextRawType, type);
                if (newOwnerType == type) {
                    z = false;
                }
                Type[] args = original3.getActualTypeArguments();
                int length = args.length;
                for (int t = 0; t < length; t++) {
                    Type resolvedTypeArgument = C$Gson$Types.resolve(context, contextRawType, args[t]);
                    if (resolvedTypeArgument != args[t]) {
                        if (!z) {
                            args = (Type[]) args.clone();
                            z = true;
                        }
                        args[t] = resolvedTypeArgument;
                    }
                }
                return z ? C$Gson$Types.newParameterizedTypeWithOwner(newOwnerType, original3.getRawType(), args) : original3;
            } else if (!(toResolve instanceof WildcardType)) {
                return toResolve;
            } else {
                WildcardType original4 = (WildcardType) toResolve;
                Type[] originalLowerBound = original4.getLowerBounds();
                Type[] originalUpperBound = original4.getUpperBounds();
                if (originalLowerBound.length == 1) {
                    componentType = C$Gson$Types.resolve(context, contextRawType, originalLowerBound[0]);
                    if (componentType != originalLowerBound[0]) {
                        return C$Gson$Types.supertypeOf(componentType);
                    }
                } else if (originalUpperBound.length == 1) {
                    componentType = C$Gson$Types.resolve(context, contextRawType, originalUpperBound[0]);
                    if (componentType != originalUpperBound[0]) {
                        return C$Gson$Types.subtypeOf(componentType);
                    }
                    return original4;
                }
                return original4;
            }
        }
    }

    static Type resolveTypeVariable(Type context, Class<?> contextRawType, TypeVariable<?> unknown) {
        Class<?> declaredByRaw = C$Gson$Types.declaringClassOf(unknown);
        if (declaredByRaw == null) {
            return unknown;
        }
        Type declaredBy = C$Gson$Types.getGenericSupertype(context, contextRawType, declaredByRaw);
        if (!(declaredBy instanceof ParameterizedType)) {
            return unknown;
        }
        return ((ParameterizedType) declaredBy).getActualTypeArguments()[C$Gson$Types.indexOf(declaredByRaw.getTypeParameters(), unknown)];
    }

    private static int indexOf(Object[] array, Object toFind) {
        for (int i = 0; i < array.length; i++) {
            if (toFind.equals(array[i])) {
                return i;
            }
        }
        throw new NoSuchElementException();
    }

    private static Class<?> declaringClassOf(TypeVariable<?> typeVariable) {
        GenericDeclaration genericDeclaration = typeVariable.getGenericDeclaration();
        return genericDeclaration instanceof Class ? (Class) genericDeclaration : null;
    }

    static void checkNotPrimitive(Type type) {
        boolean z;
        if (type instanceof Class) {
            if (((Class) type).isPrimitive()) {
                z = false;
                C$Gson$Preconditions.checkArgument(z);
            }
        }
        z = true;
        C$Gson$Preconditions.checkArgument(z);
    }
}
