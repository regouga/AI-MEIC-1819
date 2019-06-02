package okhttp3.internal;

import android.support.v4.media.session.PlaybackStateCompat;
import com.ipaulpro.afilechooser.utils.FileUtils;
import java.io.Closeable;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.IDN;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.UnknownHostException;
import java.nio.charset.Charset;
import java.security.GeneralSecurityException;
import java.security.KeyStore;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
import javax.annotation.Nullable;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import javax.net.ssl.X509TrustManager;
import okhttp3.Headers;
import okhttp3.Headers.Builder;
import okhttp3.HttpUrl;
import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import okhttp3.internal.http2.Header;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import okio.Source;

public final class Util {
    public static final byte[] EMPTY_BYTE_ARRAY = new byte[0];
    public static final RequestBody EMPTY_REQUEST = RequestBody.create(null, EMPTY_BYTE_ARRAY);
    public static final ResponseBody EMPTY_RESPONSE = ResponseBody.create(null, EMPTY_BYTE_ARRAY);
    public static final String[] EMPTY_STRING_ARRAY = new String[0];
    public static final Charset ISO_8859_1 = Charset.forName("ISO-8859-1");
    public static final Comparator<String> NATURAL_ORDER = new C02461();
    public static final TimeZone UTC = TimeZone.getTimeZone("GMT");
    private static final Charset UTF_16_BE = Charset.forName("UTF-16BE");
    private static final ByteString UTF_16_BE_BOM = ByteString.decodeHex("feff");
    private static final Charset UTF_16_LE = Charset.forName("UTF-16LE");
    private static final ByteString UTF_16_LE_BOM = ByteString.decodeHex("fffe");
    private static final Charset UTF_32_BE = Charset.forName("UTF-32BE");
    private static final ByteString UTF_32_BE_BOM = ByteString.decodeHex("0000ffff");
    private static final Charset UTF_32_LE = Charset.forName("UTF-32LE");
    private static final ByteString UTF_32_LE_BOM = ByteString.decodeHex("ffff0000");
    public static final Charset UTF_8 = Charset.forName("UTF-8");
    private static final ByteString UTF_8_BOM = ByteString.decodeHex("efbbbf");
    private static final Pattern VERIFY_AS_IP_ADDRESS = Pattern.compile("([0-9a-fA-F]*:[0-9a-fA-F:.]*)|([\\d.]+)");
    private static final Method addSuppressedExceptionMethod;

    /* renamed from: okhttp3.internal.Util$1 */
    class C02461 implements Comparator<String> {
        C02461() {
        }

        public int compare(String a, String b) {
            return a.compareTo(b);
        }
    }

    /* renamed from: okhttp3.internal.Util$2 */
    class C02472 implements ThreadFactory {
        final /* synthetic */ boolean val$daemon;
        final /* synthetic */ String val$name;

        C02472(String str, boolean z) {
            this.val$name = str;
            this.val$daemon = z;
        }

        public Thread newThread(Runnable runnable) {
            Thread result = new Thread(runnable, this.val$name);
            result.setDaemon(this.val$daemon);
            return result;
        }
    }

    static {
        Method m;
        try {
            m = Throwable.class.getDeclaredMethod("addSuppressed", new Class[]{Throwable.class});
        } catch (Exception e) {
            m = null;
        }
        addSuppressedExceptionMethod = m;
    }

    public static void addSuppressedIfPossible(Throwable e, Throwable suppressed) {
        Method method = addSuppressedExceptionMethod;
        if (method != null) {
            try {
                method.invoke(e, new Object[]{suppressed});
            } catch (InvocationTargetException e2) {
            }
        }
    }

    private Util() {
    }

    public static void checkOffsetAndCount(long arrayLength, long offset, long count) {
        if ((offset | count) < 0 || offset > arrayLength || arrayLength - offset < count) {
            throw new ArrayIndexOutOfBoundsException();
        }
    }

    public static boolean equal(Object a, Object b) {
        if (a != b) {
            if (a == null || !a.equals(b)) {
                return false;
            }
        }
        return true;
    }

    public static void closeQuietly(Closeable closeable) {
        if (closeable != null) {
            try {
                closeable.close();
            } catch (RuntimeException rethrown) {
                throw rethrown;
            } catch (Exception e) {
            }
        }
    }

    public static void closeQuietly(Socket socket) {
        if (socket != null) {
            try {
                socket.close();
            } catch (AssertionError e) {
                if (!isAndroidGetsocknameError(e)) {
                    throw e;
                }
            } catch (RuntimeException rethrown) {
                throw rethrown;
            } catch (Exception e2) {
            }
        }
    }

    public static void closeQuietly(ServerSocket serverSocket) {
        if (serverSocket != null) {
            try {
                serverSocket.close();
            } catch (RuntimeException rethrown) {
                throw rethrown;
            } catch (Exception e) {
            }
        }
    }

    public static boolean discard(Source source, int timeout, TimeUnit timeUnit) {
        try {
            return skipAll(source, timeout, timeUnit);
        } catch (IOException e) {
            return false;
        }
    }

    public static boolean skipAll(Source source, int duration, TimeUnit timeUnit) throws IOException {
        long originalDuration;
        long now = System.nanoTime();
        if (source.timeout().hasDeadline()) {
            originalDuration = source.timeout().deadlineNanoTime() - now;
        } else {
            originalDuration = Long.MAX_VALUE;
        }
        source.timeout().deadlineNanoTime(Math.min(originalDuration, timeUnit.toNanos((long) duration)) + now);
        try {
            Buffer skipBuffer = new Buffer();
            while (source.read(skipBuffer, PlaybackStateCompat.ACTION_PLAY_FROM_URI) != -1) {
                skipBuffer.clear();
            }
            if (originalDuration == Long.MAX_VALUE) {
                source.timeout().clearDeadline();
            } else {
                source.timeout().deadlineNanoTime(now + originalDuration);
            }
            return true;
        } catch (InterruptedIOException e) {
            if (originalDuration == Long.MAX_VALUE) {
                source.timeout().clearDeadline();
            } else {
                source.timeout().deadlineNanoTime(now + originalDuration);
            }
            return false;
        } catch (Throwable th) {
            if (originalDuration == Long.MAX_VALUE) {
                source.timeout().clearDeadline();
            } else {
                source.timeout().deadlineNanoTime(now + originalDuration);
            }
            throw th;
        }
    }

    public static <T> List<T> immutableList(List<T> list) {
        return Collections.unmodifiableList(new ArrayList(list));
    }

    public static <K, V> Map<K, V> immutableMap(Map<K, V> map) {
        if (map.isEmpty()) {
            return Collections.emptyMap();
        }
        return Collections.unmodifiableMap(new LinkedHashMap(map));
    }

    public static <T> List<T> immutableList(T... elements) {
        return Collections.unmodifiableList(Arrays.asList((Object[]) elements.clone()));
    }

    public static ThreadFactory threadFactory(String name, boolean daemon) {
        return new C02472(name, daemon);
    }

    public static String[] intersect(Comparator<? super String> comparator, String[] first, String[] second) {
        List<String> result = new ArrayList();
        for (String a : first) {
            for (String b : second) {
                if (comparator.compare(a, b) == 0) {
                    result.add(a);
                    break;
                }
            }
        }
        return (String[]) result.toArray(new String[result.size()]);
    }

    public static boolean nonEmptyIntersection(Comparator<String> comparator, String[] first, String[] second) {
        if (!(first == null || second == null || first.length == 0)) {
            if (second.length != 0) {
                for (String a : first) {
                    for (String b : second) {
                        if (comparator.compare(a, b) == 0) {
                            return true;
                        }
                    }
                }
                return false;
            }
        }
        return false;
    }

    public static String hostHeader(HttpUrl url, boolean includeDefaultPort) {
        String host;
        if (url.host().contains(":")) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("[");
            stringBuilder.append(url.host());
            stringBuilder.append("]");
            host = stringBuilder.toString();
        } else {
            host = url.host();
        }
        if (!includeDefaultPort) {
            if (url.port() == HttpUrl.defaultPort(url.scheme())) {
                return host;
            }
        }
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append(host);
        stringBuilder2.append(":");
        stringBuilder2.append(url.port());
        return stringBuilder2.toString();
    }

    public static boolean isAndroidGetsocknameError(AssertionError e) {
        if (e.getCause() != null && e.getMessage() != null) {
            if (e.getMessage().contains("getsockname failed")) {
                return true;
            }
        }
        return false;
    }

    public static int indexOf(Comparator<String> comparator, String[] array, String value) {
        int size = array.length;
        for (int i = 0; i < size; i++) {
            if (comparator.compare(array[i], value) == 0) {
                return i;
            }
        }
        return -1;
    }

    public static String[] concat(String[] array, String value) {
        String[] result = new String[(array.length + 1)];
        System.arraycopy(array, 0, result, 0, array.length);
        result[result.length - 1] = value;
        return result;
    }

    public static int skipLeadingAsciiWhitespace(String input, int pos, int limit) {
        int i = pos;
        while (i < limit) {
            switch (input.charAt(i)) {
                case '\t':
                case '\n':
                case '\f':
                case '\r':
                case ' ':
                    i++;
                default:
                    return i;
            }
        }
        return limit;
    }

    public static int skipTrailingAsciiWhitespace(String input, int pos, int limit) {
        int i = limit - 1;
        while (i >= pos) {
            switch (input.charAt(i)) {
                case '\t':
                case '\n':
                case '\f':
                case '\r':
                case ' ':
                    i--;
                default:
                    return i + 1;
            }
        }
        return pos;
    }

    public static String trimSubstring(String string, int pos, int limit) {
        int start = skipLeadingAsciiWhitespace(string, pos, limit);
        return string.substring(start, skipTrailingAsciiWhitespace(string, start, limit));
    }

    public static int delimiterOffset(String input, int pos, int limit, String delimiters) {
        for (int i = pos; i < limit; i++) {
            if (delimiters.indexOf(input.charAt(i)) != -1) {
                return i;
            }
        }
        return limit;
    }

    public static int delimiterOffset(String input, int pos, int limit, char delimiter) {
        for (int i = pos; i < limit; i++) {
            if (input.charAt(i) == delimiter) {
                return i;
            }
        }
        return limit;
    }

    public static String canonicalizeHost(String host) {
        if (host.contains(":")) {
            InetAddress inetAddress;
            if (host.startsWith("[") && host.endsWith("]")) {
                inetAddress = decodeIpv6(host, 1, host.length() - 1);
            } else {
                inetAddress = decodeIpv6(host, 0, host.length());
            }
            if (inetAddress == null) {
                return null;
            }
            byte[] address = inetAddress.getAddress();
            if (address.length == 16) {
                return inet6AddressToAscii(address);
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Invalid IPv6 address: '");
            stringBuilder.append(host);
            stringBuilder.append("'");
            throw new AssertionError(stringBuilder.toString());
        }
        try {
            String result = IDN.toASCII(host).toLowerCase(Locale.US);
            if (result.isEmpty() || containsInvalidHostnameAsciiCodes(result)) {
                return null;
            }
            return result;
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    private static boolean containsInvalidHostnameAsciiCodes(String hostnameAscii) {
        int i = 0;
        while (i < hostnameAscii.length()) {
            char c = hostnameAscii.charAt(i);
            if (c > '\u001f') {
                if (c < '') {
                    if (" #%/:?@[\\]".indexOf(c) != -1) {
                        return true;
                    }
                    i++;
                }
            }
            return true;
        }
        return false;
    }

    public static int indexOfControlOrNonAscii(String input) {
        int i = 0;
        int length = input.length();
        while (i < length) {
            char c = input.charAt(i);
            if (c > '\u001f') {
                if (c < '') {
                    i++;
                }
            }
            return i;
        }
        return -1;
    }

    public static boolean verifyAsIpAddress(String host) {
        return VERIFY_AS_IP_ADDRESS.matcher(host).matches();
    }

    public static String format(String format, Object... args) {
        return String.format(Locale.US, format, args);
    }

    public static Charset bomAwareCharset(BufferedSource source, Charset charset) throws IOException {
        if (source.rangeEquals(0, UTF_8_BOM)) {
            source.skip((long) UTF_8_BOM.size());
            return UTF_8;
        } else if (source.rangeEquals(0, UTF_16_BE_BOM)) {
            source.skip((long) UTF_16_BE_BOM.size());
            return UTF_16_BE;
        } else if (source.rangeEquals(0, UTF_16_LE_BOM)) {
            source.skip((long) UTF_16_LE_BOM.size());
            return UTF_16_LE;
        } else if (source.rangeEquals(0, UTF_32_BE_BOM)) {
            source.skip((long) UTF_32_BE_BOM.size());
            return UTF_32_BE;
        } else if (!source.rangeEquals(0, UTF_32_LE_BOM)) {
            return charset;
        } else {
            source.skip((long) UTF_32_LE_BOM.size());
            return UTF_32_LE;
        }
    }

    public static int checkDuration(String name, long duration, TimeUnit unit) {
        StringBuilder stringBuilder;
        if (duration < 0) {
            stringBuilder = new StringBuilder();
            stringBuilder.append(name);
            stringBuilder.append(" < 0");
            throw new IllegalArgumentException(stringBuilder.toString());
        } else if (unit != null) {
            long millis = unit.toMillis(duration);
            if (millis <= 2147483647L) {
                if (millis == 0) {
                    if (duration > 0) {
                        stringBuilder = new StringBuilder();
                        stringBuilder.append(name);
                        stringBuilder.append(" too small.");
                        throw new IllegalArgumentException(stringBuilder.toString());
                    }
                }
                return (int) millis;
            }
            stringBuilder = new StringBuilder();
            stringBuilder.append(name);
            stringBuilder.append(" too large.");
            throw new IllegalArgumentException(stringBuilder.toString());
        } else {
            throw new NullPointerException("unit == null");
        }
    }

    public static AssertionError assertionError(String message, Exception e) {
        AssertionError assertionError = new AssertionError(message);
        try {
            assertionError.initCause(e);
        } catch (IllegalStateException e2) {
        }
        return assertionError;
    }

    public static int decodeHexDigit(char c) {
        if (c >= '0' && c <= '9') {
            return c - 48;
        }
        if (c >= 'a' && c <= 'f') {
            return (c - 97) + 10;
        }
        if (c < 'A' || c > 'F') {
            return -1;
        }
        return (c - 65) + 10;
    }

    @Nullable
    private static InetAddress decodeIpv6(String input, int pos, int limit) {
        byte[] address = new byte[16];
        int b = 0;
        int compress = -1;
        int groupOffset = -1;
        int i = pos;
        while (i < limit) {
            if (b == address.length) {
                return null;
            }
            if (i + 2 > limit || !input.regionMatches(i, "::", 0, 2)) {
                if (b != 0) {
                    if (input.regionMatches(i, ":", 0, 1)) {
                        i++;
                    } else if (!input.regionMatches(i, FileUtils.HIDDEN_PREFIX, 0, 1) || !decodeIpv4Suffix(input, groupOffset, limit, address, b - 2)) {
                        return null;
                    } else {
                        b += 2;
                    }
                }
            } else if (compress != -1) {
                return null;
            } else {
                i += 2;
                b += 2;
                compress = b;
                if (i == limit) {
                    break;
                }
            }
            int value = 0;
            groupOffset = i;
            while (i < limit) {
                int hexDigit = decodeHexDigit(input.charAt(i));
                if (hexDigit == -1) {
                    break;
                }
                value = (value << 4) + hexDigit;
                i++;
            }
            int groupLength = i - groupOffset;
            if (groupLength != 0) {
                if (groupLength <= 4) {
                    int i2 = b + 1;
                    address[b] = (byte) ((value >>> 8) & 255);
                    b = i2 + 1;
                    address[i2] = (byte) (value & 255);
                }
            }
            return null;
        }
        if (b != address.length) {
            if (compress == -1) {
                return null;
            }
            System.arraycopy(address, compress, address, address.length - (b - compress), b - compress);
            Arrays.fill(address, compress, (address.length - b) + compress, (byte) 0);
        }
        try {
            return InetAddress.getByAddress(address);
        } catch (UnknownHostException e) {
            throw new AssertionError();
        }
    }

    private static boolean decodeIpv4Suffix(String input, int pos, int limit, byte[] address, int addressOffset) {
        int b = addressOffset;
        int i = pos;
        while (i < limit) {
            if (b == address.length) {
                return false;
            }
            if (b != addressOffset) {
                if (input.charAt(i) != '.') {
                    return false;
                }
                i++;
            }
            int value = 0;
            int groupOffset = i;
            while (i < limit) {
                char c = input.charAt(i);
                if (c >= '0') {
                    if (c <= '9') {
                        if (value == 0 && groupOffset != i) {
                            return false;
                        }
                        value = ((value * 10) + c) - 48;
                        if (value > 255) {
                            return false;
                        }
                        i++;
                    }
                }
                break;
            }
            if (i - groupOffset == 0) {
                return false;
            }
            int b2 = b + 1;
            address[b] = (byte) value;
            b = b2;
        }
        if (b != addressOffset + 4) {
            return false;
        }
        return true;
    }

    private static String inet6AddressToAscii(byte[] address) {
        int currentRunOffset;
        int longestRunOffset = -1;
        int longestRunLength = 0;
        int i = 0;
        while (i < address.length) {
            currentRunOffset = i;
            while (i < 16 && address[i] == (byte) 0 && address[i + 1] == (byte) 0) {
                i += 2;
            }
            int currentRunLength = i - currentRunOffset;
            if (currentRunLength > longestRunLength && currentRunLength >= 4) {
                longestRunOffset = currentRunOffset;
                longestRunLength = currentRunLength;
            }
            i += 2;
        }
        Buffer result = new Buffer();
        currentRunOffset = 0;
        while (currentRunOffset < address.length) {
            if (currentRunOffset == longestRunOffset) {
                result.writeByte(58);
                currentRunOffset += longestRunLength;
                if (currentRunOffset == 16) {
                    result.writeByte(58);
                }
            } else {
                if (currentRunOffset > 0) {
                    result.writeByte(58);
                }
                result.writeHexadecimalUnsignedLong((long) (((address[currentRunOffset] & 255) << 8) | (address[currentRunOffset + 1] & 255)));
                currentRunOffset += 2;
            }
        }
        return result.readUtf8();
    }

    public static X509TrustManager platformTrustManager() {
        try {
            TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
            trustManagerFactory.init((KeyStore) null);
            TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();
            if (trustManagers.length == 1 && (trustManagers[0] instanceof X509TrustManager)) {
                return (X509TrustManager) trustManagers[0];
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Unexpected default trust managers:");
            stringBuilder.append(Arrays.toString(trustManagers));
            throw new IllegalStateException(stringBuilder.toString());
        } catch (GeneralSecurityException e) {
            throw assertionError("No System TLS", e);
        }
    }

    public static Headers toHeaders(List<Header> headerBlock) {
        Builder builder = new Builder();
        for (Header header : headerBlock) {
            Internal.instance.addLenient(builder, header.name.utf8(), header.value.utf8());
        }
        return builder.build();
    }
}
