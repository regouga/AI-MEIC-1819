package okio;

import java.io.EOFException;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import javax.annotation.Nullable;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class ByteString implements Serializable, Comparable<ByteString> {
    public static final ByteString EMPTY = of(new byte[0]);
    static final char[] HEX_DIGITS = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
    private static final long serialVersionUID = 1;
    final byte[] data;
    transient int hashCode;
    transient String utf8;

    ByteString(byte[] data) {
        this.data = data;
    }

    public static ByteString of(byte... data) {
        if (data != null) {
            return new ByteString((byte[]) data.clone());
        }
        throw new IllegalArgumentException("data == null");
    }

    public static ByteString of(byte[] data, int offset, int byteCount) {
        if (data != null) {
            Util.checkOffsetAndCount((long) data.length, (long) offset, (long) byteCount);
            byte[] copy = new byte[byteCount];
            System.arraycopy(data, offset, copy, 0, byteCount);
            return new ByteString(copy);
        }
        throw new IllegalArgumentException("data == null");
    }

    public static ByteString of(ByteBuffer data) {
        if (data != null) {
            byte[] copy = new byte[data.remaining()];
            data.get(copy);
            return new ByteString(copy);
        }
        throw new IllegalArgumentException("data == null");
    }

    public static ByteString encodeUtf8(String s) {
        if (s != null) {
            ByteString byteString = new ByteString(s.getBytes(Util.UTF_8));
            byteString.utf8 = s;
            return byteString;
        }
        throw new IllegalArgumentException("s == null");
    }

    public static ByteString encodeString(String s, Charset charset) {
        if (s == null) {
            throw new IllegalArgumentException("s == null");
        } else if (charset != null) {
            return new ByteString(s.getBytes(charset));
        } else {
            throw new IllegalArgumentException("charset == null");
        }
    }

    public String utf8() {
        String result = this.utf8;
        if (result != null) {
            return result;
        }
        String str = new String(this.data, Util.UTF_8);
        this.utf8 = str;
        return str;
    }

    public String string(Charset charset) {
        if (charset != null) {
            return new String(this.data, charset);
        }
        throw new IllegalArgumentException("charset == null");
    }

    public String base64() {
        return Base64.encode(this.data);
    }

    public ByteString md5() {
        return digest("MD5");
    }

    public ByteString sha1() {
        return digest("SHA-1");
    }

    public ByteString sha256() {
        return digest("SHA-256");
    }

    public ByteString sha512() {
        return digest("SHA-512");
    }

    private ByteString digest(String algorithm) {
        try {
            return of(MessageDigest.getInstance(algorithm).digest(this.data));
        } catch (NoSuchAlgorithmException e) {
            throw new AssertionError(e);
        }
    }

    public ByteString hmacSha1(ByteString key) {
        return hmac("HmacSHA1", key);
    }

    public ByteString hmacSha256(ByteString key) {
        return hmac("HmacSHA256", key);
    }

    public ByteString hmacSha512(ByteString key) {
        return hmac("HmacSHA512", key);
    }

    private ByteString hmac(String algorithm, ByteString key) {
        try {
            Mac mac = Mac.getInstance(algorithm);
            mac.init(new SecretKeySpec(key.toByteArray(), algorithm));
            return of(mac.doFinal(this.data));
        } catch (NoSuchAlgorithmException e) {
            throw new AssertionError(e);
        } catch (InvalidKeyException e2) {
            throw new IllegalArgumentException(e2);
        }
    }

    public String base64Url() {
        return Base64.encodeUrl(this.data);
    }

    @Nullable
    public static ByteString decodeBase64(String base64) {
        if (base64 != null) {
            byte[] decoded = Base64.decode(base64);
            return decoded != null ? new ByteString(decoded) : null;
        } else {
            throw new IllegalArgumentException("base64 == null");
        }
    }

    public String hex() {
        byte[] bArr = this.data;
        char[] result = new char[(bArr.length * 2)];
        int c = 0;
        for (byte b : bArr) {
            int i = c + 1;
            char[] cArr = HEX_DIGITS;
            result[c] = cArr[(b >> 4) & 15];
            c = i + 1;
            result[i] = cArr[b & 15];
        }
        return new String(result);
    }

    public static ByteString decodeHex(String hex) {
        if (hex == null) {
            throw new IllegalArgumentException("hex == null");
        } else if (hex.length() % 2 == 0) {
            byte[] result = new byte[(hex.length() / 2)];
            for (int i = 0; i < result.length; i++) {
                result[i] = (byte) ((decodeHexDigit(hex.charAt(i * 2)) << 4) + decodeHexDigit(hex.charAt((i * 2) + 1)));
            }
            return of(result);
        } else {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Unexpected hex string: ");
            stringBuilder.append(hex);
            throw new IllegalArgumentException(stringBuilder.toString());
        }
    }

    private static int decodeHexDigit(char c) {
        if (c >= '0' && c <= '9') {
            return c - 48;
        }
        if (c >= 'a' && c <= 'f') {
            return (c - 97) + 10;
        }
        if (c >= 'A' && c <= 'F') {
            return (c - 65) + 10;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Unexpected hex digit: ");
        stringBuilder.append(c);
        throw new IllegalArgumentException(stringBuilder.toString());
    }

    public static ByteString read(InputStream in, int byteCount) throws IOException {
        if (in == null) {
            throw new IllegalArgumentException("in == null");
        } else if (byteCount >= 0) {
            byte[] result = new byte[byteCount];
            int offset = 0;
            while (offset < byteCount) {
                int read = in.read(result, offset, byteCount - offset);
                if (read != -1) {
                    offset += read;
                } else {
                    throw new EOFException();
                }
            }
            return new ByteString(result);
        } else {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("byteCount < 0: ");
            stringBuilder.append(byteCount);
            throw new IllegalArgumentException(stringBuilder.toString());
        }
    }

    public ByteString toAsciiLowercase() {
        Object obj;
        byte c;
        int i = 0;
        while (true) {
            obj = this.data;
            if (i >= obj.length) {
                return this;
            }
            c = obj[i];
            if (c >= (byte) 65) {
                if (c <= (byte) 90) {
                    break;
                }
            }
            i++;
        }
        byte[] lowercase = (byte[]) obj.clone();
        lowercase[i] = (byte) (c + 32);
        for (int i2 = i + 1; i2 < lowercase.length; i2++) {
            c = lowercase[i2];
            if (c >= (byte) 65) {
                if (c <= (byte) 90) {
                    lowercase[i2] = (byte) (c + 32);
                }
            }
        }
        return new ByteString(lowercase);
    }

    public ByteString toAsciiUppercase() {
        Object obj;
        byte c;
        int i = 0;
        while (true) {
            obj = this.data;
            if (i >= obj.length) {
                return this;
            }
            c = obj[i];
            if (c >= (byte) 97) {
                if (c <= (byte) 122) {
                    break;
                }
            }
            i++;
        }
        byte[] lowercase = (byte[]) obj.clone();
        lowercase[i] = (byte) (c - 32);
        for (int i2 = i + 1; i2 < lowercase.length; i2++) {
            c = lowercase[i2];
            if (c >= (byte) 97) {
                if (c <= (byte) 122) {
                    lowercase[i2] = (byte) (c - 32);
                }
            }
        }
        return new ByteString(lowercase);
    }

    public ByteString substring(int beginIndex) {
        return substring(beginIndex, this.data.length);
    }

    public ByteString substring(int beginIndex, int endIndex) {
        if (beginIndex >= 0) {
            byte[] bArr = this.data;
            if (endIndex <= bArr.length) {
                int subLen = endIndex - beginIndex;
                if (subLen < 0) {
                    throw new IllegalArgumentException("endIndex < beginIndex");
                } else if (beginIndex == 0 && endIndex == bArr.length) {
                    return this;
                } else {
                    bArr = new byte[subLen];
                    System.arraycopy(this.data, beginIndex, bArr, 0, subLen);
                    return new ByteString(bArr);
                }
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("endIndex > length(");
            stringBuilder.append(this.data.length);
            stringBuilder.append(")");
            throw new IllegalArgumentException(stringBuilder.toString());
        }
        throw new IllegalArgumentException("beginIndex < 0");
    }

    public byte getByte(int pos) {
        return this.data[pos];
    }

    public int size() {
        return this.data.length;
    }

    public byte[] toByteArray() {
        return (byte[]) this.data.clone();
    }

    byte[] internalArray() {
        return this.data;
    }

    public ByteBuffer asByteBuffer() {
        return ByteBuffer.wrap(this.data).asReadOnlyBuffer();
    }

    public void write(OutputStream out) throws IOException {
        if (out != null) {
            out.write(this.data);
            return;
        }
        throw new IllegalArgumentException("out == null");
    }

    void write(Buffer buffer) {
        byte[] bArr = this.data;
        buffer.write(bArr, 0, bArr.length);
    }

    public boolean rangeEquals(int offset, ByteString other, int otherOffset, int byteCount) {
        return other.rangeEquals(otherOffset, this.data, offset, byteCount);
    }

    public boolean rangeEquals(int offset, byte[] other, int otherOffset, int byteCount) {
        if (offset >= 0) {
            byte[] bArr = this.data;
            if (offset <= bArr.length - byteCount && otherOffset >= 0 && otherOffset <= other.length - byteCount) {
                return Util.arrayRangeEquals(bArr, offset, other, otherOffset, byteCount);
            }
        }
    }

    public final boolean startsWith(ByteString prefix) {
        return rangeEquals(0, prefix, 0, prefix.size());
    }

    public final boolean startsWith(byte[] prefix) {
        return rangeEquals(0, prefix, 0, prefix.length);
    }

    public final boolean endsWith(ByteString suffix) {
        return rangeEquals(size() - suffix.size(), suffix, 0, suffix.size());
    }

    public final boolean endsWith(byte[] suffix) {
        return rangeEquals(size() - suffix.length, suffix, 0, suffix.length);
    }

    public final int indexOf(ByteString other) {
        return indexOf(other.internalArray(), 0);
    }

    public final int indexOf(ByteString other, int fromIndex) {
        return indexOf(other.internalArray(), fromIndex);
    }

    public final int indexOf(byte[] other) {
        return indexOf(other, 0);
    }

    public int indexOf(byte[] other, int fromIndex) {
        int limit = this.data.length - other.length;
        for (int i = Math.max(fromIndex, 0); i <= limit; i++) {
            if (Util.arrayRangeEquals(this.data, i, other, 0, other.length)) {
                return i;
            }
        }
        return -1;
    }

    public final int lastIndexOf(ByteString other) {
        return lastIndexOf(other.internalArray(), size());
    }

    public final int lastIndexOf(ByteString other, int fromIndex) {
        return lastIndexOf(other.internalArray(), fromIndex);
    }

    public final int lastIndexOf(byte[] other) {
        return lastIndexOf(other, size());
    }

    public int lastIndexOf(byte[] other, int fromIndex) {
        for (int i = Math.min(fromIndex, this.data.length - other.length); i >= 0; i--) {
            if (Util.arrayRangeEquals(this.data, i, other, 0, other.length)) {
                return i;
            }
        }
        return -1;
    }

    public boolean equals(Object o) {
        boolean z = true;
        if (o == this) {
            return true;
        }
        if (o instanceof ByteString) {
            int size = ((ByteString) o).size();
            byte[] bArr = this.data;
            if (size == bArr.length) {
                if (((ByteString) o).rangeEquals(0, bArr, 0, bArr.length)) {
                    return z;
                }
            }
        }
        z = false;
        return z;
    }

    public int hashCode() {
        int result = this.hashCode;
        if (result != 0) {
            return result;
        }
        int hashCode = Arrays.hashCode(this.data);
        this.hashCode = hashCode;
        return hashCode;
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public int compareTo(okio.ByteString r9) {
        /*
        r8 = this;
        r0 = r8.size();
        r1 = r9.size();
        r2 = 0;
        r3 = java.lang.Math.min(r0, r1);
    L_0x000d:
        r4 = -1;
        r5 = 1;
        if (r2 >= r3) goto L_0x0027;
    L_0x0011:
        r6 = r8.getByte(r2);
        r6 = r6 & 255;
        r7 = r9.getByte(r2);
        r7 = r7 & 255;
        if (r6 != r7) goto L_0x0022;
    L_0x001f:
        r2 = r2 + 1;
        goto L_0x000d;
    L_0x0022:
        if (r6 >= r7) goto L_0x0025;
    L_0x0024:
        goto L_0x0026;
    L_0x0025:
        r4 = 1;
    L_0x0026:
        return r4;
        if (r0 != r1) goto L_0x002c;
    L_0x002a:
        r2 = 0;
        return r2;
    L_0x002c:
        if (r0 >= r1) goto L_0x002f;
    L_0x002e:
        goto L_0x0030;
    L_0x002f:
        r4 = 1;
    L_0x0030:
        return r4;
        */
        throw new UnsupportedOperationException("Method not decompiled: okio.ByteString.compareTo(okio.ByteString):int");
    }

    public String toString() {
        if (this.data.length == 0) {
            return "[size=0]";
        }
        String text = utf8();
        int i = codePointIndexToCharIndex(text, 64);
        String stringBuilder;
        if (i == -1) {
            if (this.data.length <= 64) {
                StringBuilder stringBuilder2 = new StringBuilder();
                stringBuilder2.append("[hex=");
                stringBuilder2.append(hex());
                stringBuilder2.append("]");
                stringBuilder = stringBuilder2.toString();
            } else {
                StringBuilder stringBuilder3 = new StringBuilder();
                stringBuilder3.append("[size=");
                stringBuilder3.append(this.data.length);
                stringBuilder3.append(" hex=");
                stringBuilder3.append(substring(0, 64).hex());
                stringBuilder3.append("…]");
                stringBuilder = stringBuilder3.toString();
            }
            return stringBuilder;
        }
        String stringBuilder4;
        stringBuilder = text.substring(0, i).replace("\\", "\\\\").replace("\n", "\\n").replace("\r", "\\r");
        if (i < text.length()) {
            stringBuilder3 = new StringBuilder();
            stringBuilder3.append("[size=");
            stringBuilder3.append(this.data.length);
            stringBuilder3.append(" text=");
            stringBuilder3.append(stringBuilder);
            stringBuilder3.append("…]");
            stringBuilder4 = stringBuilder3.toString();
        } else {
            stringBuilder3 = new StringBuilder();
            stringBuilder3.append("[text=");
            stringBuilder3.append(stringBuilder);
            stringBuilder3.append("]");
            stringBuilder4 = stringBuilder3.toString();
        }
        return stringBuilder4;
    }

    static int codePointIndexToCharIndex(String s, int codePointCount) {
        int i = 0;
        int j = 0;
        int length = s.length();
        while (i < length) {
            if (j == codePointCount) {
                return i;
            }
            int c = s.codePointAt(i);
            if ((Character.isISOControl(c) && c != 10 && c != 13) || c == 65533) {
                return -1;
            }
            j++;
            i += Character.charCount(c);
        }
        return s.length();
    }

    private void readObject(ObjectInputStream in) throws IOException {
        ByteString byteString = read(in, in.readInt());
        try {
            Field field = ByteString.class.getDeclaredField("data");
            field.setAccessible(true);
            field.set(this, byteString.data);
        } catch (NoSuchFieldException e) {
            throw new AssertionError();
        } catch (IllegalAccessException e2) {
            throw new AssertionError();
        }
    }

    private void writeObject(ObjectOutputStream out) throws IOException {
        out.writeInt(this.data.length);
        out.write(this.data);
    }
}
