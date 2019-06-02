package okhttp3;

import java.nio.charset.Charset;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;
import javax.annotation.Nullable;
import okhttp3.internal.Util;

public final class Challenge {
    private final Map<String, String> authParams;
    private final String scheme;

    public Challenge(String scheme, Map<String, String> authParams) {
        if (scheme == null) {
            throw new NullPointerException("scheme == null");
        } else if (authParams != null) {
            this.scheme = scheme;
            Map<String, String> newAuthParams = new LinkedHashMap();
            for (Entry<String, String> authParam : authParams.entrySet()) {
                newAuthParams.put(authParam.getKey() == null ? null : ((String) authParam.getKey()).toLowerCase(Locale.US), authParam.getValue());
            }
            this.authParams = Collections.unmodifiableMap(newAuthParams);
        } else {
            throw new NullPointerException("authParams == null");
        }
    }

    public Challenge(String scheme, String realm) {
        if (scheme == null) {
            throw new NullPointerException("scheme == null");
        } else if (realm != null) {
            this.scheme = scheme;
            this.authParams = Collections.singletonMap("realm", realm);
        } else {
            throw new NullPointerException("realm == null");
        }
    }

    public Challenge withCharset(Charset charset) {
        if (charset != null) {
            Map authParams = new LinkedHashMap(this.authParams);
            authParams.put("charset", charset.name());
            return new Challenge(this.scheme, authParams);
        }
        throw new NullPointerException("charset == null");
    }

    public String scheme() {
        return this.scheme;
    }

    public Map<String, String> authParams() {
        return this.authParams;
    }

    public String realm() {
        return (String) this.authParams.get("realm");
    }

    public Charset charset() {
        String charset = (String) this.authParams.get("charset");
        if (charset == null) {
            return Util.ISO_8859_1;
        }
        try {
            return Charset.forName(charset);
        } catch (Exception e) {
        }
    }

    public boolean equals(@Nullable Object other) {
        if (other instanceof Challenge) {
            if (((Challenge) other).scheme.equals(this.scheme)) {
                if (((Challenge) other).authParams.equals(this.authParams)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        return (((29 * 31) + this.scheme.hashCode()) * 31) + this.authParams.hashCode();
    }

    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(this.scheme);
        stringBuilder.append(" authParams=");
        stringBuilder.append(this.authParams);
        return stringBuilder.toString();
    }
}
