package okhttp3;

import java.net.URL;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Nullable;
import okhttp3.internal.Util;
import okhttp3.internal.http.HttpMethod;

public final class Request {
    @Nullable
    final RequestBody body;
    @Nullable
    private volatile CacheControl cacheControl;
    final Headers headers;
    final String method;
    final Map<Class<?>, Object> tags;
    final HttpUrl url;

    public static class Builder {
        @Nullable
        RequestBody body;
        okhttp3.Headers.Builder headers;
        String method;
        Map<Class<?>, Object> tags;
        @Nullable
        HttpUrl url;

        public Builder() {
            this.tags = Collections.emptyMap();
            this.method = "GET";
            this.headers = new okhttp3.Headers.Builder();
        }

        Builder(Request request) {
            Map emptyMap;
            this.tags = Collections.emptyMap();
            this.url = request.url;
            this.method = request.method;
            this.body = request.body;
            if (request.tags.isEmpty()) {
                emptyMap = Collections.emptyMap();
            } else {
                emptyMap = new LinkedHashMap(request.tags);
            }
            this.tags = emptyMap;
            this.headers = request.headers.newBuilder();
        }

        public Builder url(HttpUrl url) {
            if (url != null) {
                this.url = url;
                return this;
            }
            throw new NullPointerException("url == null");
        }

        public Builder url(String url) {
            if (url != null) {
                StringBuilder stringBuilder;
                if (url.regionMatches(true, 0, "ws:", 0, 3)) {
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("http:");
                    stringBuilder.append(url.substring(3));
                    url = stringBuilder.toString();
                } else {
                    if (url.regionMatches(true, 0, "wss:", 0, 4)) {
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("https:");
                        stringBuilder.append(url.substring(4));
                        url = stringBuilder.toString();
                    }
                }
                return url(HttpUrl.get(url));
            }
            throw new NullPointerException("url == null");
        }

        public Builder url(URL url) {
            if (url != null) {
                return url(HttpUrl.get(url.toString()));
            }
            throw new NullPointerException("url == null");
        }

        public Builder header(String name, String value) {
            this.headers.set(name, value);
            return this;
        }

        public Builder addHeader(String name, String value) {
            this.headers.add(name, value);
            return this;
        }

        public Builder removeHeader(String name) {
            this.headers.removeAll(name);
            return this;
        }

        public Builder headers(Headers headers) {
            this.headers = headers.newBuilder();
            return this;
        }

        public Builder cacheControl(CacheControl cacheControl) {
            String value = cacheControl.toString();
            if (value.isEmpty()) {
                return removeHeader("Cache-Control");
            }
            return header("Cache-Control", value);
        }

        public Builder get() {
            return method("GET", null);
        }

        public Builder head() {
            return method("HEAD", null);
        }

        public Builder post(RequestBody body) {
            return method("POST", body);
        }

        public Builder delete(@Nullable RequestBody body) {
            return method("DELETE", body);
        }

        public Builder delete() {
            return delete(Util.EMPTY_REQUEST);
        }

        public Builder put(RequestBody body) {
            return method("PUT", body);
        }

        public Builder patch(RequestBody body) {
            return method("PATCH", body);
        }

        public Builder method(String method, @Nullable RequestBody body) {
            if (method == null) {
                throw new NullPointerException("method == null");
            } else if (method.length() != 0) {
                StringBuilder stringBuilder;
                if (body != null) {
                    if (!HttpMethod.permitsRequestBody(method)) {
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("method ");
                        stringBuilder.append(method);
                        stringBuilder.append(" must not have a request body.");
                        throw new IllegalArgumentException(stringBuilder.toString());
                    }
                }
                if (body == null) {
                    if (HttpMethod.requiresRequestBody(method)) {
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("method ");
                        stringBuilder.append(method);
                        stringBuilder.append(" must have a request body.");
                        throw new IllegalArgumentException(stringBuilder.toString());
                    }
                }
                this.method = method;
                this.body = body;
                return this;
            } else {
                throw new IllegalArgumentException("method.length() == 0");
            }
        }

        public Builder tag(@Nullable Object tag) {
            return tag(Object.class, tag);
        }

        public <T> Builder tag(Class<? super T> type, @Nullable T tag) {
            if (type != null) {
                if (tag == null) {
                    this.tags.remove(type);
                } else {
                    if (this.tags.isEmpty()) {
                        this.tags = new LinkedHashMap();
                    }
                    this.tags.put(type, type.cast(tag));
                }
                return this;
            }
            throw new NullPointerException("type == null");
        }

        public Request build() {
            if (this.url != null) {
                return new Request(this);
            }
            throw new IllegalStateException("url == null");
        }
    }

    Request(Builder builder) {
        this.url = builder.url;
        this.method = builder.method;
        this.headers = builder.headers.build();
        this.body = builder.body;
        this.tags = Util.immutableMap(builder.tags);
    }

    public HttpUrl url() {
        return this.url;
    }

    public String method() {
        return this.method;
    }

    public Headers headers() {
        return this.headers;
    }

    @Nullable
    public String header(String name) {
        return this.headers.get(name);
    }

    public List<String> headers(String name) {
        return this.headers.values(name);
    }

    @Nullable
    public RequestBody body() {
        return this.body;
    }

    @Nullable
    public Object tag() {
        return tag(Object.class);
    }

    @Nullable
    public <T> T tag(Class<? extends T> type) {
        return type.cast(this.tags.get(type));
    }

    public Builder newBuilder() {
        return new Builder(this);
    }

    public CacheControl cacheControl() {
        CacheControl result = this.cacheControl;
        if (result != null) {
            return result;
        }
        CacheControl parse = CacheControl.parse(this.headers);
        this.cacheControl = parse;
        return parse;
    }

    public boolean isHttps() {
        return this.url.isHttps();
    }

    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Request{method=");
        stringBuilder.append(this.method);
        stringBuilder.append(", url=");
        stringBuilder.append(this.url);
        stringBuilder.append(", tags=");
        stringBuilder.append(this.tags);
        stringBuilder.append('}');
        return stringBuilder.toString();
    }
}
