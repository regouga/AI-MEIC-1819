package okhttp3.internal.cache;

import java.util.Date;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nullable;
import okhttp3.CacheControl;
import okhttp3.Headers;
import okhttp3.Headers.Builder;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.internal.Internal;
import okhttp3.internal.http.HttpDate;
import okhttp3.internal.http.HttpHeaders;

public final class CacheStrategy {
    @Nullable
    public final Response cacheResponse;
    @Nullable
    public final Request networkRequest;

    public static class Factory {
        private int ageSeconds = -1;
        final Response cacheResponse;
        private String etag;
        private Date expires;
        private Date lastModified;
        private String lastModifiedString;
        final long nowMillis;
        private long receivedResponseMillis;
        final Request request;
        private long sentRequestMillis;
        private Date servedDate;
        private String servedDateString;

        public Factory(long nowMillis, Request request, Response cacheResponse) {
            this.nowMillis = nowMillis;
            this.request = request;
            this.cacheResponse = cacheResponse;
            if (cacheResponse != null) {
                this.sentRequestMillis = cacheResponse.sentRequestAtMillis();
                this.receivedResponseMillis = cacheResponse.receivedResponseAtMillis();
                Headers headers = cacheResponse.headers();
                int size = headers.size();
                for (int i = 0; i < size; i++) {
                    String fieldName = headers.name(i);
                    String value = headers.value(i);
                    if ("Date".equalsIgnoreCase(fieldName)) {
                        this.servedDate = HttpDate.parse(value);
                        this.servedDateString = value;
                    } else if ("Expires".equalsIgnoreCase(fieldName)) {
                        this.expires = HttpDate.parse(value);
                    } else if ("Last-Modified".equalsIgnoreCase(fieldName)) {
                        this.lastModified = HttpDate.parse(value);
                        this.lastModifiedString = value;
                    } else if ("ETag".equalsIgnoreCase(fieldName)) {
                        this.etag = value;
                    } else if ("Age".equalsIgnoreCase(fieldName)) {
                        this.ageSeconds = HttpHeaders.parseSeconds(value, -1);
                    }
                }
            }
        }

        public CacheStrategy get() {
            CacheStrategy candidate = getCandidate();
            if (candidate.networkRequest == null || !this.request.cacheControl().onlyIfCached()) {
                return candidate;
            }
            return new CacheStrategy(null, null);
        }

        private CacheStrategy getCandidate() {
            if (this.cacheResponse == null) {
                return new CacheStrategy(r0.request, null);
            }
            if (r0.request.isHttps() && r0.cacheResponse.handshake() == null) {
                return new CacheStrategy(r0.request, null);
            }
            if (!CacheStrategy.isCacheable(r0.cacheResponse, r0.request)) {
                return new CacheStrategy(r0.request, null);
            }
            Response response;
            CacheControl requestCaching = r0.request.cacheControl();
            if (requestCaching.noCache()) {
                response = null;
            } else if (hasConditions(r0.request)) {
                CacheControl cacheControl = requestCaching;
                response = null;
            } else {
                CacheControl responseCaching = r0.cacheResponse.cacheControl();
                long ageMillis = cacheResponseAge();
                long freshMillis = computeFreshnessLifetime();
                if (requestCaching.maxAgeSeconds() != -1) {
                    freshMillis = Math.min(freshMillis, TimeUnit.SECONDS.toMillis((long) requestCaching.maxAgeSeconds()));
                }
                long minFreshMillis = 0;
                if (requestCaching.minFreshSeconds() != -1) {
                    minFreshMillis = TimeUnit.SECONDS.toMillis((long) requestCaching.minFreshSeconds());
                }
                long maxStaleMillis = 0;
                if (!responseCaching.mustRevalidate() && requestCaching.maxStaleSeconds() != -1) {
                    maxStaleMillis = TimeUnit.SECONDS.toMillis((long) requestCaching.maxStaleSeconds());
                }
                if (responseCaching.noCache() || ageMillis + minFreshMillis >= freshMillis + maxStaleMillis) {
                    String conditionValue;
                    if (r0.etag != null) {
                        requestCaching = "If-None-Match";
                        conditionValue = r0.etag;
                    } else if (r0.lastModified != null) {
                        requestCaching = "If-Modified-Since";
                        conditionValue = r0.lastModifiedString;
                    } else if (r0.servedDate == null) {
                        return new CacheStrategy(r0.request, null);
                    } else {
                        requestCaching = "If-Modified-Since";
                        conditionValue = r0.servedDateString;
                    }
                    Builder conditionalRequestHeaders = r0.request.headers().newBuilder();
                    Internal.instance.addLenient(conditionalRequestHeaders, requestCaching, conditionValue);
                    return new CacheStrategy(r0.request.newBuilder().headers(conditionalRequestHeaders.build()).build(), r0.cacheResponse);
                }
                Response.Builder builder = r0.cacheResponse.newBuilder();
                if (ageMillis + minFreshMillis >= freshMillis) {
                    builder.addHeader("Warning", "110 HttpURLConnection \"Response is stale\"");
                }
                if (ageMillis > 86400000 && isFreshnessLifetimeHeuristic()) {
                    builder.addHeader("Warning", "113 HttpURLConnection \"Heuristic expiration\"");
                }
                return new CacheStrategy(null, builder.build());
            }
            return new CacheStrategy(r0.request, response);
        }

        private long computeFreshnessLifetime() {
            CacheControl responseCaching = this.cacheResponse.cacheControl();
            if (responseCaching.maxAgeSeconds() != -1) {
                return TimeUnit.SECONDS.toMillis((long) responseCaching.maxAgeSeconds());
            }
            long j = 0;
            Date date;
            long servedMillis;
            long delta;
            if (this.expires != null) {
                date = this.servedDate;
                if (date != null) {
                    servedMillis = date.getTime();
                } else {
                    servedMillis = this.receivedResponseMillis;
                }
                delta = this.expires.getTime() - servedMillis;
                if (delta > 0) {
                    j = delta;
                }
                return j;
            }
            if (this.lastModified != null) {
                if (this.cacheResponse.request().url().query() == null) {
                    date = this.servedDate;
                    if (date != null) {
                        servedMillis = date.getTime();
                    } else {
                        servedMillis = this.sentRequestMillis;
                    }
                    delta = servedMillis - this.lastModified.getTime();
                    if (delta > 0) {
                        j = delta / 10;
                    }
                    return j;
                }
            }
            return 0;
        }

        private long cacheResponseAge() {
            long receivedAge;
            Date date = this.servedDate;
            long j = 0;
            if (date != null) {
                j = Math.max(0, this.receivedResponseMillis - date.getTime());
            }
            long apparentReceivedAge = j;
            if (this.ageSeconds != -1) {
                receivedAge = Math.max(apparentReceivedAge, TimeUnit.SECONDS.toMillis((long) this.ageSeconds));
            } else {
                receivedAge = apparentReceivedAge;
            }
            long j2 = this.receivedResponseMillis;
            return (receivedAge + (j2 - this.sentRequestMillis)) + (this.nowMillis - j2);
        }

        private boolean isFreshnessLifetimeHeuristic() {
            return this.cacheResponse.cacheControl().maxAgeSeconds() == -1 && this.expires == null;
        }

        private static boolean hasConditions(Request request) {
            if (request.header("If-Modified-Since") == null) {
                if (request.header("If-None-Match") == null) {
                    return false;
                }
            }
            return true;
        }
    }

    CacheStrategy(Request networkRequest, Response cacheResponse) {
        this.networkRequest = networkRequest;
        this.cacheResponse = cacheResponse;
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public static boolean isCacheable(okhttp3.Response r3, okhttp3.Request r4) {
        /*
        r0 = r3.code();
        r1 = 0;
        switch(r0) {
            case 200: goto L_0x0035;
            case 203: goto L_0x0035;
            case 204: goto L_0x0035;
            case 300: goto L_0x0035;
            case 301: goto L_0x0035;
            case 302: goto L_0x0009;
            case 307: goto L_0x0009;
            case 308: goto L_0x0035;
            case 404: goto L_0x0035;
            case 405: goto L_0x0035;
            case 410: goto L_0x0035;
            case 414: goto L_0x0035;
            case 501: goto L_0x0035;
            default: goto L_0x0008;
        };
    L_0x0008:
        goto L_0x004d;
    L_0x0009:
        r0 = "Expires";
        r0 = r3.header(r0);
        if (r0 != 0) goto L_0x0034;
    L_0x0011:
        r0 = r3.cacheControl();
        r0 = r0.maxAgeSeconds();
        r2 = -1;
        if (r0 != r2) goto L_0x0033;
    L_0x001c:
        r0 = r3.cacheControl();
        r0 = r0.isPublic();
        if (r0 != 0) goto L_0x0032;
    L_0x0026:
        r0 = r3.cacheControl();
        r0 = r0.isPrivate();
        if (r0 == 0) goto L_0x0031;
    L_0x0030:
        goto L_0x0036;
    L_0x0031:
        goto L_0x004d;
    L_0x0032:
        goto L_0x0036;
    L_0x0033:
        goto L_0x0036;
    L_0x0034:
        goto L_0x0036;
    L_0x0036:
        r0 = r3.cacheControl();
        r0 = r0.noStore();
        if (r0 != 0) goto L_0x004c;
    L_0x0040:
        r0 = r4.cacheControl();
        r0 = r0.noStore();
        if (r0 != 0) goto L_0x004c;
    L_0x004a:
        r1 = 1;
    L_0x004c:
        return r1;
    L_0x004d:
        return r1;
        */
        throw new UnsupportedOperationException("Method not decompiled: okhttp3.internal.cache.CacheStrategy.isCacheable(okhttp3.Response, okhttp3.Request):boolean");
    }
}
