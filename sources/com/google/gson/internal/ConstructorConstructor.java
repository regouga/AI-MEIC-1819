package com.google.gson.internal;

import com.google.gson.InstanceCreator;
import com.google.gson.JsonIOException;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.EnumSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.SortedMap;
import java.util.SortedSet;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ConcurrentNavigableMap;
import java.util.concurrent.ConcurrentSkipListMap;

public final class ConstructorConstructor {
    private final Map<Type, InstanceCreator<?>> instanceCreators;

    /* renamed from: com.google.gson.internal.ConstructorConstructor$4 */
    class C03064 implements ObjectConstructor<T> {
        C03064() {
        }

        public T construct() {
            return new TreeSet();
        }
    }

    /* renamed from: com.google.gson.internal.ConstructorConstructor$6 */
    class C03086 implements ObjectConstructor<T> {
        C03086() {
        }

        public T construct() {
            return new LinkedHashSet();
        }
    }

    /* renamed from: com.google.gson.internal.ConstructorConstructor$7 */
    class C03097 implements ObjectConstructor<T> {
        C03097() {
        }

        public T construct() {
            return new LinkedList();
        }
    }

    /* renamed from: com.google.gson.internal.ConstructorConstructor$8 */
    class C03108 implements ObjectConstructor<T> {
        C03108() {
        }

        public T construct() {
            return new ArrayList();
        }
    }

    /* renamed from: com.google.gson.internal.ConstructorConstructor$9 */
    class C03119 implements ObjectConstructor<T> {
        C03119() {
        }

        public T construct() {
            return new ConcurrentSkipListMap();
        }
    }

    public ConstructorConstructor(Map<Type, InstanceCreator<?>> instanceCreators) {
        this.instanceCreators = instanceCreators;
    }

    public <T> ObjectConstructor<T> get(TypeToken<T> typeToken) {
        final Type type = typeToken.getType();
        Class<? super T> rawType = typeToken.getRawType();
        final InstanceCreator<T> typeCreator = (InstanceCreator) this.instanceCreators.get(type);
        if (typeCreator != null) {
            return new ObjectConstructor<T>() {
                public T construct() {
                    return typeCreator.createInstance(type);
                }
            };
        }
        final InstanceCreator<T> rawTypeCreator = (InstanceCreator) this.instanceCreators.get(rawType);
        if (rawTypeCreator != null) {
            return new ObjectConstructor<T>() {
                public T construct() {
                    return rawTypeCreator.createInstance(type);
                }
            };
        }
        ObjectConstructor<T> defaultConstructor = newDefaultConstructor(rawType);
        if (defaultConstructor != null) {
            return defaultConstructor;
        }
        ObjectConstructor<T> defaultImplementation = newDefaultImplementationConstructor(type, rawType);
        if (defaultImplementation != null) {
            return defaultImplementation;
        }
        return newUnsafeAllocator(type, rawType);
    }

    private <T> ObjectConstructor<T> newDefaultConstructor(Class<? super T> rawType) {
        try {
            final Constructor<? super T> constructor = rawType.getDeclaredConstructor(new Class[0]);
            if (!constructor.isAccessible()) {
                constructor.setAccessible(true);
            }
            return new ObjectConstructor<T>() {
                public T construct() {
                    StringBuilder stringBuilder;
                    try {
                        return constructor.newInstance(null);
                    } catch (InstantiationException e) {
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Failed to invoke ");
                        stringBuilder.append(constructor);
                        stringBuilder.append(" with no args");
                        throw new RuntimeException(stringBuilder.toString(), e);
                    } catch (InvocationTargetException e2) {
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Failed to invoke ");
                        stringBuilder.append(constructor);
                        stringBuilder.append(" with no args");
                        throw new RuntimeException(stringBuilder.toString(), e2.getTargetException());
                    } catch (IllegalAccessException e3) {
                        throw new AssertionError(e3);
                    }
                }
            };
        } catch (NoSuchMethodException e) {
            return null;
        }
    }

    private <T> ObjectConstructor<T> newDefaultImplementationConstructor(final Type type, Class<? super T> rawType) {
        if (Collection.class.isAssignableFrom(rawType)) {
            if (SortedSet.class.isAssignableFrom(rawType)) {
                return new C03064();
            }
            if (EnumSet.class.isAssignableFrom(rawType)) {
                return new ObjectConstructor<T>() {
                    public T construct() {
                        Type type = type;
                        if (type instanceof ParameterizedType) {
                            type = ((ParameterizedType) type).getActualTypeArguments()[0];
                            if (type instanceof Class) {
                                return EnumSet.noneOf((Class) type);
                            }
                            StringBuilder stringBuilder = new StringBuilder();
                            stringBuilder.append("Invalid EnumSet type: ");
                            stringBuilder.append(type.toString());
                            throw new JsonIOException(stringBuilder.toString());
                        }
                        StringBuilder stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Invalid EnumSet type: ");
                        stringBuilder2.append(type.toString());
                        throw new JsonIOException(stringBuilder2.toString());
                    }
                };
            }
            if (Set.class.isAssignableFrom(rawType)) {
                return new C03086();
            }
            if (Queue.class.isAssignableFrom(rawType)) {
                return new C03097();
            }
            return new C03108();
        } else if (!Map.class.isAssignableFrom(rawType)) {
            return null;
        } else {
            if (ConcurrentNavigableMap.class.isAssignableFrom(rawType)) {
                return new C03119();
            }
            if (ConcurrentMap.class.isAssignableFrom(rawType)) {
                return new ObjectConstructor<T>() {
                    public T construct() {
                        return new ConcurrentHashMap();
                    }
                };
            }
            if (SortedMap.class.isAssignableFrom(rawType)) {
                return new ObjectConstructor<T>() {
                    public T construct() {
                        return new TreeMap();
                    }
                };
            }
            if (!(type instanceof ParameterizedType) || String.class.isAssignableFrom(TypeToken.get(((ParameterizedType) type).getActualTypeArguments()[0]).getRawType())) {
                return new ObjectConstructor<T>() {
                    public T construct() {
                        return new LinkedTreeMap();
                    }
                };
            }
            return new ObjectConstructor<T>() {
                public T construct() {
                    return new LinkedHashMap();
                }
            };
        }
    }

    private <T> ObjectConstructor<T> newUnsafeAllocator(final Type type, final Class<? super T> rawType) {
        return new ObjectConstructor<T>() {
            private final UnsafeAllocator unsafeAllocator = UnsafeAllocator.create();

            public T construct() {
                try {
                    return this.unsafeAllocator.newInstance(rawType);
                } catch (Exception e) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("Unable to invoke no-args constructor for ");
                    stringBuilder.append(type);
                    stringBuilder.append(". ");
                    stringBuilder.append("Register an InstanceCreator with Gson for this type may fix this problem.");
                    throw new RuntimeException(stringBuilder.toString(), e);
                }
            }
        };
    }

    public String toString() {
        return this.instanceCreators.toString();
    }
}
