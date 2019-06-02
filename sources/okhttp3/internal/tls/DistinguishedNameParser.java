package okhttp3.internal.tls;

import android.support.v4.view.MotionEventCompat;
import javax.security.auth.x500.X500Principal;

final class DistinguishedNameParser {
    private int beg;
    private char[] chars;
    private int cur;
    private final String dn;
    private int end;
    private final int length = this.dn.length();
    private int pos;

    DistinguishedNameParser(X500Principal principal) {
        this.dn = principal.getName("RFC2253");
    }

    private String nextAT() {
        int i;
        while (true) {
            i = this.pos;
            if (i >= this.length || this.chars[i] != ' ') {
                i = this.pos;
            } else {
                this.pos = i + 1;
            }
        }
        i = this.pos;
        if (i == this.length) {
            return null;
        }
        this.beg = i;
        this.pos = i + 1;
        while (true) {
            i = this.pos;
            if (i >= this.length) {
                break;
            }
            char[] cArr = this.chars;
            if (cArr[i] == '=' || cArr[i] == ' ') {
                break;
            }
            this.pos = i + 1;
        }
        i = this.pos;
        if (i < this.length) {
            char[] cArr2;
            int i2;
            int i3;
            this.end = i;
            if (this.chars[i] == ' ') {
                while (true) {
                    i = this.pos;
                    if (i >= this.length) {
                        break;
                    }
                    cArr = this.chars;
                    if (cArr[i] == '=' || cArr[i] != ' ') {
                        break;
                    }
                    this.pos = i + 1;
                }
                cArr2 = this.chars;
                i2 = this.pos;
                if (cArr2[i2] != '=' || i2 == this.length) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("Unexpected end of DN: ");
                    stringBuilder.append(this.dn);
                    throw new IllegalStateException(stringBuilder.toString());
                }
            }
            this.pos++;
            while (true) {
                i = this.pos;
                if (i >= this.length || this.chars[i] != ' ') {
                    i = this.end;
                    i2 = this.beg;
                } else {
                    this.pos = i + 1;
                }
            }
            i = this.end;
            i2 = this.beg;
            if (i - i2 > 4) {
                cArr2 = this.chars;
                if (cArr2[i2 + 3] == '.' && (cArr2[i2] == 'O' || cArr2[i2] == 'o')) {
                    cArr2 = this.chars;
                    i2 = this.beg;
                    if (cArr2[i2 + 1] == 'I' || cArr2[i2 + 1] == 'i') {
                        cArr2 = this.chars;
                        i2 = this.beg;
                        if (cArr2[i2 + 2] == 'D' || cArr2[i2 + 2] == 'd') {
                            this.beg += 4;
                            cArr = this.chars;
                            i3 = this.beg;
                            return new String(cArr, i3, this.end - i3);
                        }
                    }
                }
            }
            cArr = this.chars;
            i3 = this.beg;
            return new String(cArr, i3, this.end - i3);
        }
        stringBuilder = new StringBuilder();
        stringBuilder.append("Unexpected end of DN: ");
        stringBuilder.append(this.dn);
        throw new IllegalStateException(stringBuilder.toString());
    }

    private String quotedAV() {
        int i;
        char[] cArr;
        int i2;
        this.pos++;
        this.beg = this.pos;
        this.end = this.beg;
        while (true) {
            i = this.pos;
            if (i != this.length) {
                cArr = this.chars;
                if (cArr[i] == '\"') {
                    break;
                }
                if (cArr[i] == '\\') {
                    cArr[this.end] = getEscaped();
                } else {
                    cArr[this.end] = cArr[i];
                }
                this.pos++;
                this.end++;
            } else {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Unexpected end of DN: ");
                stringBuilder.append(this.dn);
                throw new IllegalStateException(stringBuilder.toString());
            }
        }
        this.pos = i + 1;
        while (true) {
            i = this.pos;
            if (i >= this.length || this.chars[i] != ' ') {
                cArr = this.chars;
                i2 = this.beg;
            } else {
                this.pos = i + 1;
            }
        }
        cArr = this.chars;
        i2 = this.beg;
        return new String(cArr, i2, this.end - i2);
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    private java.lang.String hexAV() {
        /*
        r5 = this;
        r0 = r5.pos;
        r1 = r0 + 4;
        r2 = r5.length;
        if (r1 >= r2) goto L_0x00ae;
    L_0x0008:
        r5.beg = r0;
        r0 = r0 + 1;
        r5.pos = r0;
    L_0x000e:
        r0 = r5.pos;
        r1 = r5.length;
        if (r0 == r1) goto L_0x0062;
    L_0x0014:
        r1 = r5.chars;
        r2 = r1[r0];
        r3 = 43;
        if (r2 == r3) goto L_0x0062;
    L_0x001c:
        r2 = r1[r0];
        r3 = 44;
        if (r2 == r3) goto L_0x0062;
    L_0x0022:
        r2 = r1[r0];
        r3 = 59;
        if (r2 != r3) goto L_0x0029;
    L_0x0028:
        goto L_0x0062;
    L_0x0029:
        r2 = r1[r0];
        r3 = 32;
        if (r2 != r3) goto L_0x0047;
    L_0x002f:
        r5.end = r0;
        r0 = r0 + 1;
        r5.pos = r0;
    L_0x0035:
        r0 = r5.pos;
        r1 = r5.length;
        if (r0 >= r1) goto L_0x0046;
    L_0x003b:
        r1 = r5.chars;
        r1 = r1[r0];
        if (r1 != r3) goto L_0x0046;
    L_0x0041:
        r0 = r0 + 1;
        r5.pos = r0;
        goto L_0x0035;
    L_0x0046:
        goto L_0x0068;
    L_0x0047:
        r2 = r1[r0];
        r4 = 65;
        if (r2 < r4) goto L_0x005a;
    L_0x004d:
        r2 = r1[r0];
        r4 = 70;
        if (r2 > r4) goto L_0x005a;
    L_0x0053:
        r2 = r1[r0];
        r2 = r2 + r3;
        r2 = (char) r2;
        r1[r0] = r2;
        goto L_0x005b;
    L_0x005b:
        r0 = r5.pos;
        r0 = r0 + 1;
        r5.pos = r0;
        goto L_0x000e;
        r0 = r5.pos;
        r5.end = r0;
    L_0x0068:
        r0 = r5.end;
        r1 = r5.beg;
        r0 = r0 - r1;
        r2 = 5;
        if (r0 < r2) goto L_0x0094;
    L_0x0070:
        r2 = r0 & 1;
        if (r2 == 0) goto L_0x0094;
    L_0x0074:
        r2 = r0 / 2;
        r2 = new byte[r2];
        r3 = 0;
        r1 = r1 + 1;
    L_0x007b:
        r4 = r2.length;
        if (r3 >= r4) goto L_0x008a;
    L_0x007e:
        r4 = r5.getByte(r1);
        r4 = (byte) r4;
        r2[r3] = r4;
        r1 = r1 + 2;
        r3 = r3 + 1;
        goto L_0x007b;
    L_0x008a:
        r1 = new java.lang.String;
        r3 = r5.chars;
        r4 = r5.beg;
        r1.<init>(r3, r4, r0);
        return r1;
        r1 = new java.lang.IllegalStateException;
        r2 = new java.lang.StringBuilder;
        r2.<init>();
        r3 = "Unexpected end of DN: ";
        r2.append(r3);
        r3 = r5.dn;
        r2.append(r3);
        r2 = r2.toString();
        r1.<init>(r2);
        throw r1;
    L_0x00ae:
        r0 = new java.lang.IllegalStateException;
        r1 = new java.lang.StringBuilder;
        r1.<init>();
        r2 = "Unexpected end of DN: ";
        r1.append(r2);
        r2 = r5.dn;
        r1.append(r2);
        r1 = r1.toString();
        r0.<init>(r1);
        throw r0;
        */
        throw new UnsupportedOperationException("Method not decompiled: okhttp3.internal.tls.DistinguishedNameParser.hexAV():java.lang.String");
    }

    private String escapedAV() {
        int i = this.pos;
        this.beg = i;
        this.end = i;
        while (true) {
            i = this.pos;
            if (i >= this.length) {
                char[] cArr = this.chars;
                int i2 = this.beg;
                return new String(cArr, i2, this.end - i2);
            }
            cArr = this.chars;
            char c = cArr[i];
            if (c != ' ') {
                if (c != ';') {
                    if (c != '\\') {
                        switch (c) {
                            case MotionEventCompat.AXIS_GENERIC_12 /*43*/:
                            case MotionEventCompat.AXIS_GENERIC_13 /*44*/:
                                break;
                            default:
                                i2 = this.end;
                                this.end = i2 + 1;
                                cArr[i2] = cArr[i];
                                this.pos = i + 1;
                                continue;
                        }
                    } else {
                        i = this.end;
                        this.end = i + 1;
                        cArr[i] = getEscaped();
                        this.pos++;
                    }
                }
                cArr = this.chars;
                i2 = this.beg;
                return new String(cArr, i2, this.end - i2);
            }
            i2 = this.end;
            this.cur = i2;
            this.pos = i + 1;
            this.end = i2 + 1;
            cArr[i2] = ' ';
            while (true) {
                i = this.pos;
                if (i < this.length) {
                    cArr = this.chars;
                    if (cArr[i] == ' ') {
                        i2 = this.end;
                        this.end = i2 + 1;
                        cArr[i2] = ' ';
                        this.pos = i + 1;
                    }
                }
                i = this.pos;
                if (i != this.length) {
                    cArr = this.chars;
                    if (!(cArr[i] == ',' || cArr[i] == '+')) {
                        if (cArr[i] == ';') {
                        }
                    }
                }
                cArr = this.chars;
                i2 = this.beg;
                return new String(cArr, i2, this.cur - i2);
            }
        }
    }

    private char getEscaped() {
        this.pos++;
        int i = this.pos;
        if (i != this.length) {
            char c = this.chars[i];
            if (!(c == ' ' || c == '%' || c == '\\' || c == '_')) {
                switch (c) {
                    case '\"':
                    case '#':
                        break;
                    default:
                        switch (c) {
                            case MotionEventCompat.AXIS_GENERIC_11 /*42*/:
                            case MotionEventCompat.AXIS_GENERIC_12 /*43*/:
                            case MotionEventCompat.AXIS_GENERIC_13 /*44*/:
                                break;
                            default:
                                switch (c) {
                                    case ';':
                                    case '<':
                                    case '=':
                                    case '>':
                                        break;
                                    default:
                                        return getUTF8();
                                }
                        }
                }
            }
            return this.chars[this.pos];
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Unexpected end of DN: ");
        stringBuilder.append(this.dn);
        throw new IllegalStateException(stringBuilder.toString());
    }

    private char getUTF8() {
        int res = getByte(this.pos);
        this.pos++;
        if (res < 128) {
            return (char) res;
        }
        if (res < 192 || res > 247) {
            return '?';
        }
        int count;
        if (res <= 223) {
            count = 1;
            res &= 31;
        } else if (res <= 239) {
            count = 2;
            res &= 15;
        } else {
            count = 3;
            res &= 7;
        }
        int i = 0;
        while (i < count) {
            this.pos++;
            int i2 = this.pos;
            if (i2 != this.length) {
                if (this.chars[i2] == '\\') {
                    this.pos = i2 + 1;
                    i2 = getByte(this.pos);
                    this.pos++;
                    if ((i2 & 192) != 128) {
                        return '?';
                    }
                    res = (res << 6) + (i2 & 63);
                    i++;
                }
            }
            return '?';
        }
        return (char) res;
    }

    private int getByte(int position) {
        if (position + 1 < this.length) {
            StringBuilder stringBuilder;
            int b1 = this.chars[position];
            if (b1 >= 48 && b1 <= 57) {
                b1 -= 48;
            } else if (b1 >= 97 && b1 <= 102) {
                b1 -= 87;
            } else if (b1 < 65 || b1 > 70) {
                stringBuilder = new StringBuilder();
                stringBuilder.append("Malformed DN: ");
                stringBuilder.append(this.dn);
                throw new IllegalStateException(stringBuilder.toString());
            } else {
                b1 -= 55;
            }
            int b2 = this.chars[position + 1];
            if (b2 >= 48 && b2 <= 57) {
                b2 -= 48;
            } else if (b2 >= 97 && b2 <= 102) {
                b2 -= 87;
            } else if (b2 < 65 || b2 > 70) {
                stringBuilder = new StringBuilder();
                stringBuilder.append("Malformed DN: ");
                stringBuilder.append(this.dn);
                throw new IllegalStateException(stringBuilder.toString());
            } else {
                b2 -= 55;
            }
            return (b1 << 4) + b2;
        }
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append("Malformed DN: ");
        stringBuilder2.append(this.dn);
        throw new IllegalStateException(stringBuilder2.toString());
    }

    public String findMostSpecific(String attributeType) {
        this.pos = 0;
        this.beg = 0;
        this.end = 0;
        this.cur = 0;
        this.chars = this.dn.toCharArray();
        String attType = nextAT();
        if (attType == null) {
            return null;
        }
        while (true) {
            String attValue = "";
            int i = this.pos;
            if (i == this.length) {
                return null;
            }
            switch (this.chars[i]) {
                case '\"':
                    attValue = quotedAV();
                    break;
                case '#':
                    attValue = hexAV();
                    break;
                case MotionEventCompat.AXIS_GENERIC_12 /*43*/:
                case MotionEventCompat.AXIS_GENERIC_13 /*44*/:
                case ';':
                    break;
                default:
                    attValue = escapedAV();
                    break;
            }
            if (attributeType.equalsIgnoreCase(attType)) {
                return attValue;
            }
            i = this.pos;
            if (i >= this.length) {
                return null;
            }
            StringBuilder stringBuilder;
            char[] cArr = this.chars;
            if (cArr[i] != ',') {
                if (cArr[i] != ';') {
                    if (cArr[i] == '+') {
                        this.pos++;
                        attType = nextAT();
                        if (attType != null) {
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Malformed DN: ");
                            stringBuilder.append(this.dn);
                            throw new IllegalStateException(stringBuilder.toString());
                        }
                    } else {
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Malformed DN: ");
                        stringBuilder.append(this.dn);
                        throw new IllegalStateException(stringBuilder.toString());
                    }
                }
            }
            this.pos++;
            attType = nextAT();
            if (attType != null) {
                stringBuilder = new StringBuilder();
                stringBuilder.append("Malformed DN: ");
                stringBuilder.append(this.dn);
                throw new IllegalStateException(stringBuilder.toString());
            }
        }
    }
}
