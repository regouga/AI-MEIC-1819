package okhttp3;

import com.ipaulpro.afilechooser.utils.FileUtils;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.annotation.Nullable;
import okhttp3.internal.Util;
import okhttp3.internal.http.HttpDate;
import okhttp3.internal.publicsuffix.PublicSuffixDatabase;

public final class Cookie {
    private static final Pattern DAY_OF_MONTH_PATTERN = Pattern.compile("(\\d{1,2})[^\\d]*");
    private static final Pattern MONTH_PATTERN = Pattern.compile("(?i)(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec).*");
    private static final Pattern TIME_PATTERN = Pattern.compile("(\\d{1,2}):(\\d{1,2}):(\\d{1,2})[^\\d]*");
    private static final Pattern YEAR_PATTERN = Pattern.compile("(\\d{2,4})[^\\d]*");
    private final String domain;
    private final long expiresAt;
    private final boolean hostOnly;
    private final boolean httpOnly;
    private final String name;
    private final String path;
    private final boolean persistent;
    private final boolean secure;
    private final String value;

    public static final class Builder {
        @Nullable
        String domain;
        long expiresAt = HttpDate.MAX_DATE;
        boolean hostOnly;
        boolean httpOnly;
        @Nullable
        String name;
        String path = "/";
        boolean persistent;
        boolean secure;
        @Nullable
        String value;

        public Builder name(String name) {
            if (name == null) {
                throw new NullPointerException("name == null");
            } else if (name.trim().equals(name)) {
                this.name = name;
                return this;
            } else {
                throw new IllegalArgumentException("name is not trimmed");
            }
        }

        public Builder value(String value) {
            if (value == null) {
                throw new NullPointerException("value == null");
            } else if (value.trim().equals(value)) {
                this.value = value;
                return this;
            } else {
                throw new IllegalArgumentException("value is not trimmed");
            }
        }

        public Builder expiresAt(long expiresAt) {
            if (expiresAt <= 0) {
                expiresAt = Long.MIN_VALUE;
            }
            if (expiresAt > HttpDate.MAX_DATE) {
                expiresAt = HttpDate.MAX_DATE;
            }
            this.expiresAt = expiresAt;
            this.persistent = true;
            return this;
        }

        public Builder domain(String domain) {
            return domain(domain, false);
        }

        public Builder hostOnlyDomain(String domain) {
            return domain(domain, true);
        }

        private Builder domain(String domain, boolean hostOnly) {
            if (domain != null) {
                String canonicalDomain = Util.canonicalizeHost(domain);
                if (canonicalDomain != null) {
                    this.domain = canonicalDomain;
                    this.hostOnly = hostOnly;
                    return this;
                }
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("unexpected domain: ");
                stringBuilder.append(domain);
                throw new IllegalArgumentException(stringBuilder.toString());
            }
            throw new NullPointerException("domain == null");
        }

        public Builder path(String path) {
            if (path.startsWith("/")) {
                this.path = path;
                return this;
            }
            throw new IllegalArgumentException("path must start with '/'");
        }

        public Builder secure() {
            this.secure = true;
            return this;
        }

        public Builder httpOnly() {
            this.httpOnly = true;
            return this;
        }

        public Cookie build() {
            return new Cookie(this);
        }
    }

    private Cookie(String name, String value, long expiresAt, String domain, String path, boolean secure, boolean httpOnly, boolean hostOnly, boolean persistent) {
        this.name = name;
        this.value = value;
        this.expiresAt = expiresAt;
        this.domain = domain;
        this.path = path;
        this.secure = secure;
        this.httpOnly = httpOnly;
        this.hostOnly = hostOnly;
        this.persistent = persistent;
    }

    Cookie(Builder builder) {
        if (builder.name == null) {
            throw new NullPointerException("builder.name == null");
        } else if (builder.value == null) {
            throw new NullPointerException("builder.value == null");
        } else if (builder.domain != null) {
            this.name = builder.name;
            this.value = builder.value;
            this.expiresAt = builder.expiresAt;
            this.domain = builder.domain;
            this.path = builder.path;
            this.secure = builder.secure;
            this.httpOnly = builder.httpOnly;
            this.persistent = builder.persistent;
            this.hostOnly = builder.hostOnly;
        } else {
            throw new NullPointerException("builder.domain == null");
        }
    }

    public String name() {
        return this.name;
    }

    public String value() {
        return this.value;
    }

    public boolean persistent() {
        return this.persistent;
    }

    public long expiresAt() {
        return this.expiresAt;
    }

    public boolean hostOnly() {
        return this.hostOnly;
    }

    public String domain() {
        return this.domain;
    }

    public String path() {
        return this.path;
    }

    public boolean httpOnly() {
        return this.httpOnly;
    }

    public boolean secure() {
        return this.secure;
    }

    public boolean matches(HttpUrl url) {
        boolean domainMatch;
        if (this.hostOnly) {
            domainMatch = url.host().equals(this.domain);
        } else {
            domainMatch = domainMatch(url.host(), this.domain);
        }
        if (!domainMatch || !pathMatch(url, this.path)) {
            return false;
        }
        if (!this.secure || url.isHttps()) {
            return true;
        }
        return false;
    }

    private static boolean domainMatch(String urlHost, String domain) {
        if (urlHost.equals(domain)) {
            return true;
        }
        if (urlHost.endsWith(domain)) {
            if (urlHost.charAt((urlHost.length() - domain.length()) - 1) == '.') {
                if (!Util.verifyAsIpAddress(urlHost)) {
                    return true;
                }
            }
        }
        return false;
    }

    private static boolean pathMatch(HttpUrl url, String path) {
        String urlPath = url.encodedPath();
        if (urlPath.equals(path)) {
            return true;
        }
        if (urlPath.startsWith(path)) {
            if (path.endsWith("/") || urlPath.charAt(path.length()) == '/') {
                return true;
            }
        }
        return false;
    }

    @Nullable
    public static Cookie parse(HttpUrl url, String setCookie) {
        return parse(System.currentTimeMillis(), url, setCookie);
    }

    @Nullable
    static Cookie parse(long currentTimeMillis, HttpUrl url, String setCookie) {
        String str = setCookie;
        int limit = setCookie.length();
        char c = ';';
        int cookiePairEnd = Util.delimiterOffset(str, 0, limit, ';');
        char c2 = '=';
        int pairEqualsSign = Util.delimiterOffset(str, 0, cookiePairEnd, '=');
        if (pairEqualsSign == cookiePairEnd) {
            return null;
        }
        String cookieName = Util.trimSubstring(str, 0, pairEqualsSign);
        if (!cookieName.isEmpty()) {
            if (Util.indexOfControlOrNonAscii(cookieName) == -1) {
                String cookieValue = Util.trimSubstring(str, pairEqualsSign + 1, cookiePairEnd);
                if (Util.indexOfControlOrNonAscii(cookieValue) != -1) {
                    return null;
                }
                String attributeValue;
                long expiresAt;
                String domain;
                int pos;
                long expiresAt2 = HttpDate.MAX_DATE;
                String domain2 = null;
                String path = null;
                long deltaSeconds = -1;
                boolean secureOnly = false;
                boolean httpOnly = false;
                boolean hostOnly = true;
                boolean persistent = false;
                int pos2 = cookiePairEnd + 1;
                while (pos2 < limit) {
                    int attributePairEnd = Util.delimiterOffset(str, pos2, limit, c);
                    int attributeEqualsSign = Util.delimiterOffset(str, pos2, attributePairEnd, c2);
                    String attributeName = Util.trimSubstring(str, pos2, attributeEqualsSign);
                    if (attributeEqualsSign < attributePairEnd) {
                        attributeValue = Util.trimSubstring(str, attributeEqualsSign + 1, attributePairEnd);
                    } else {
                        attributeValue = "";
                    }
                    if (attributeName.equalsIgnoreCase("expires")) {
                        try {
                            expiresAt2 = parseExpires(attributeValue, 0, attributeValue.length());
                            persistent = true;
                        } catch (IllegalArgumentException e) {
                        }
                    } else if (attributeName.equalsIgnoreCase("max-age")) {
                        try {
                            deltaSeconds = parseMaxAge(attributeValue);
                            persistent = true;
                        } catch (NumberFormatException e2) {
                        }
                    } else if (attributeName.equalsIgnoreCase("domain")) {
                        try {
                            hostOnly = false;
                            domain2 = parseDomain(attributeValue);
                        } catch (IllegalArgumentException e3) {
                        }
                    } else if (attributeName.equalsIgnoreCase("path")) {
                        path = attributeValue;
                    } else if (attributeName.equalsIgnoreCase("secure")) {
                        secureOnly = true;
                    } else if (attributeName.equalsIgnoreCase("httponly")) {
                        httpOnly = true;
                    }
                    pos2 = attributePairEnd + 1;
                    c = ';';
                    c2 = '=';
                }
                if (deltaSeconds == Long.MIN_VALUE) {
                    expiresAt = Long.MIN_VALUE;
                } else if (deltaSeconds != -1) {
                    long deltaMilliseconds;
                    if (deltaSeconds <= 9223372036854775L) {
                        deltaMilliseconds = 1000 * deltaSeconds;
                    } else {
                        deltaMilliseconds = Long.MAX_VALUE;
                    }
                    expiresAt2 = currentTimeMillis + deltaMilliseconds;
                    if (expiresAt2 >= currentTimeMillis) {
                        if (expiresAt2 <= HttpDate.MAX_DATE) {
                            expiresAt = expiresAt2;
                        }
                    }
                    expiresAt = HttpDate.MAX_DATE;
                } else {
                    expiresAt = expiresAt2;
                }
                attributeValue = url.host();
                if (domain2 == null) {
                    domain = attributeValue;
                } else if (!domainMatch(attributeValue, domain2)) {
                    return null;
                } else {
                    domain = domain2;
                }
                if (attributeValue.length() != domain.length()) {
                    if (PublicSuffixDatabase.get().getEffectiveTldPlusOne(domain) == null) {
                        return null;
                    }
                }
                if (path != null) {
                    if (path.startsWith("/")) {
                        pos = path;
                        return new Cookie(cookieName, cookieValue, expiresAt, domain, pos, secureOnly, httpOnly, hostOnly, persistent);
                    }
                }
                String encodedPath = url.encodedPath();
                int lastSlash = encodedPath.lastIndexOf(47);
                pos = lastSlash != 0 ? encodedPath.substring(0, lastSlash) : "/";
                return new Cookie(cookieName, cookieValue, expiresAt, domain, pos, secureOnly, httpOnly, hostOnly, persistent);
            }
        }
        return null;
    }

    private static long parseExpires(String s, int pos, int limit) {
        pos = dateCharacterOffset(s, pos, limit, false);
        int hour = -1;
        int minute = -1;
        int second = -1;
        int dayOfMonth = -1;
        int month = -1;
        int year = -1;
        Matcher matcher = TIME_PATTERN.matcher(s);
        while (pos < limit) {
            int end = dateCharacterOffset(s, pos + 1, limit, true);
            matcher.region(pos, end);
            if (hour == -1 && matcher.usePattern(TIME_PATTERN).matches()) {
                hour = Integer.parseInt(matcher.group(1));
                minute = Integer.parseInt(matcher.group(2));
                second = Integer.parseInt(matcher.group(3));
            } else if (dayOfMonth == -1 && matcher.usePattern(DAY_OF_MONTH_PATTERN).matches()) {
                dayOfMonth = Integer.parseInt(matcher.group(1));
            } else if (month == -1 && matcher.usePattern(MONTH_PATTERN).matches()) {
                month = MONTH_PATTERN.pattern().indexOf(matcher.group(1).toLowerCase(Locale.US)) / 4;
            } else if (year == -1 && matcher.usePattern(YEAR_PATTERN).matches()) {
                year = Integer.parseInt(matcher.group(1));
            }
            pos = dateCharacterOffset(s, end + 1, limit, false);
        }
        if (year >= 70 && year <= 99) {
            year += 1900;
        }
        if (year >= 0 && year <= 69) {
            year += 2000;
        }
        if (year < 1601) {
            throw new IllegalArgumentException();
        } else if (month == -1) {
            throw new IllegalArgumentException();
        } else if (dayOfMonth < 1 || dayOfMonth > 31) {
            throw new IllegalArgumentException();
        } else if (hour < 0 || hour > 23) {
            throw new IllegalArgumentException();
        } else if (minute < 0 || minute > 59) {
            throw new IllegalArgumentException();
        } else if (second < 0 || second > 59) {
            throw new IllegalArgumentException();
        } else {
            Calendar calendar = new GregorianCalendar(Util.UTC);
            calendar.setLenient(false);
            calendar.set(1, year);
            calendar.set(2, month - 1);
            calendar.set(5, dayOfMonth);
            calendar.set(11, hour);
            calendar.set(12, minute);
            calendar.set(13, second);
            calendar.set(14, 0);
            return calendar.getTimeInMillis();
        }
    }

    private static int dateCharacterOffset(String input, int pos, int limit, boolean invert) {
        for (int i = pos; i < limit; i++) {
            boolean dateCharacter;
            int c = input.charAt(i);
            if ((c >= 32 || c == 9) && c < 127 && ((c < 48 || c > 57) && ((c < 97 || c > 122) && (c < 65 || c > 90)))) {
                if (c != 58) {
                    dateCharacter = false;
                    if (dateCharacter == (invert ^ 1)) {
                        return i;
                    }
                }
            }
            dateCharacter = true;
            if (dateCharacter == (invert ^ 1)) {
                return i;
            }
        }
        return limit;
    }

    private static long parseMaxAge(String s) {
        long j = Long.MIN_VALUE;
        try {
            long parsed = Long.parseLong(s);
            if (parsed > 0) {
                j = parsed;
            }
            return j;
        } catch (NumberFormatException e) {
            if (s.matches("-?\\d+")) {
                if (!s.startsWith("-")) {
                    j = Long.MAX_VALUE;
                }
                return j;
            }
            throw e;
        }
    }

    private static String parseDomain(String s) {
        if (s.endsWith(FileUtils.HIDDEN_PREFIX)) {
            throw new IllegalArgumentException();
        }
        if (s.startsWith(FileUtils.HIDDEN_PREFIX)) {
            s = s.substring(1);
        }
        String canonicalDomain = Util.canonicalizeHost(s);
        if (canonicalDomain != null) {
            return canonicalDomain;
        }
        throw new IllegalArgumentException();
    }

    public static List<Cookie> parseAll(HttpUrl url, Headers headers) {
        List<String> cookieStrings = headers.values("Set-Cookie");
        List<Cookie> cookies = null;
        int size = cookieStrings.size();
        for (int i = 0; i < size; i++) {
            Cookie cookie = parse(url, (String) cookieStrings.get(i));
            if (cookie != null) {
                if (cookies == null) {
                    cookies = new ArrayList();
                }
                cookies.add(cookie);
            }
        }
        if (cookies != null) {
            return Collections.unmodifiableList(cookies);
        }
        return Collections.emptyList();
    }

    public String toString() {
        return toString(false);
    }

    String toString(boolean forObsoleteRfc2965) {
        StringBuilder result = new StringBuilder();
        result.append(this.name);
        result.append('=');
        result.append(this.value);
        if (this.persistent) {
            if (this.expiresAt == Long.MIN_VALUE) {
                result.append("; max-age=0");
            } else {
                result.append("; expires=");
                result.append(HttpDate.format(new Date(this.expiresAt)));
            }
        }
        if (!this.hostOnly) {
            result.append("; domain=");
            if (forObsoleteRfc2965) {
                result.append(FileUtils.HIDDEN_PREFIX);
            }
            result.append(this.domain);
        }
        result.append("; path=");
        result.append(this.path);
        if (this.secure) {
            result.append("; secure");
        }
        if (this.httpOnly) {
            result.append("; httponly");
        }
        return result.toString();
    }

    public boolean equals(@Nullable Object other) {
        boolean z = false;
        if (!(other instanceof Cookie)) {
            return false;
        }
        Cookie that = (Cookie) other;
        if (that.name.equals(this.name)) {
            if (that.value.equals(this.value)) {
                if (that.domain.equals(this.domain)) {
                    if (that.path.equals(this.path) && that.expiresAt == this.expiresAt && that.secure == this.secure && that.httpOnly == this.httpOnly && that.persistent == this.persistent && that.hostOnly == this.hostOnly) {
                        z = true;
                        return z;
                    }
                }
            }
        }
        return z;
    }

    public int hashCode() {
        int hashCode = ((((((((17 * 31) + this.name.hashCode()) * 31) + this.value.hashCode()) * 31) + this.domain.hashCode()) * 31) + this.path.hashCode()) * 31;
        long j = this.expiresAt;
        return ((((((((hashCode + ((int) (j ^ (j >>> 32)))) * 31) + (this.secure ^ 1)) * 31) + (this.httpOnly ^ 1)) * 31) + (this.persistent ^ 1)) * 31) + (this.hostOnly ^ 1);
    }
}
