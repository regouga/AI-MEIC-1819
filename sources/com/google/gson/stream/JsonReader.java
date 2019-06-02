package com.google.gson.stream;

import android.support.v4.view.MotionEventCompat;
import com.google.gson.internal.JsonReaderInternalAccess;
import com.google.gson.internal.bind.JsonTreeReader;
import java.io.Closeable;
import java.io.EOFException;
import java.io.IOException;
import java.io.Reader;
import net.sourceforge.zbar.Symbol;

public class JsonReader implements Closeable {
    private static final long MIN_INCOMPLETE_INTEGER = -922337203685477580L;
    private static final char[] NON_EXECUTE_PREFIX = ")]}'\n".toCharArray();
    private static final int NUMBER_CHAR_DECIMAL = 3;
    private static final int NUMBER_CHAR_DIGIT = 2;
    private static final int NUMBER_CHAR_EXP_DIGIT = 7;
    private static final int NUMBER_CHAR_EXP_E = 5;
    private static final int NUMBER_CHAR_EXP_SIGN = 6;
    private static final int NUMBER_CHAR_FRACTION_DIGIT = 4;
    private static final int NUMBER_CHAR_NONE = 0;
    private static final int NUMBER_CHAR_SIGN = 1;
    private static final int PEEKED_BEGIN_ARRAY = 3;
    private static final int PEEKED_BEGIN_OBJECT = 1;
    private static final int PEEKED_BUFFERED = 11;
    private static final int PEEKED_DOUBLE_QUOTED = 9;
    private static final int PEEKED_DOUBLE_QUOTED_NAME = 13;
    private static final int PEEKED_END_ARRAY = 4;
    private static final int PEEKED_END_OBJECT = 2;
    private static final int PEEKED_EOF = 17;
    private static final int PEEKED_FALSE = 6;
    private static final int PEEKED_LONG = 15;
    private static final int PEEKED_NONE = 0;
    private static final int PEEKED_NULL = 7;
    private static final int PEEKED_NUMBER = 16;
    private static final int PEEKED_SINGLE_QUOTED = 8;
    private static final int PEEKED_SINGLE_QUOTED_NAME = 12;
    private static final int PEEKED_TRUE = 5;
    private static final int PEEKED_UNQUOTED = 10;
    private static final int PEEKED_UNQUOTED_NAME = 14;
    private final char[] buffer = new char[1024];
    private final Reader in;
    private boolean lenient = false;
    private int limit = 0;
    private int lineNumber = 0;
    private int lineStart = 0;
    private int[] pathIndices;
    private String[] pathNames;
    int peeked = 0;
    private long peekedLong;
    private int peekedNumberLength;
    private String peekedString;
    private int pos = 0;
    private int[] stack = new int[32];
    private int stackSize = 0;

    /* renamed from: com.google.gson.stream.JsonReader$1 */
    static class C03381 extends JsonReaderInternalAccess {
        C03381() {
        }

        public void promoteNameToValue(JsonReader reader) throws IOException {
            if (reader instanceof JsonTreeReader) {
                ((JsonTreeReader) reader).promoteNameToValue();
                return;
            }
            int p = reader.peeked;
            if (p == 0) {
                p = reader.doPeek();
            }
            if (p == 13) {
                reader.peeked = 9;
            } else if (p == 12) {
                reader.peeked = 8;
            } else if (p == 14) {
                reader.peeked = 10;
            } else {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Expected a name but was ");
                stringBuilder.append(reader.peek());
                stringBuilder.append(" ");
                stringBuilder.append(" at line ");
                stringBuilder.append(reader.getLineNumber());
                stringBuilder.append(" column ");
                stringBuilder.append(reader.getColumnNumber());
                stringBuilder.append(" path ");
                stringBuilder.append(reader.getPath());
                throw new IllegalStateException(stringBuilder.toString());
            }
        }
    }

    static {
        JsonReaderInternalAccess.INSTANCE = new C03381();
    }

    public JsonReader(Reader in) {
        int[] iArr = this.stack;
        int i = this.stackSize;
        this.stackSize = i + 1;
        iArr[i] = 6;
        this.pathNames = new String[32];
        this.pathIndices = new int[32];
        if (in != null) {
            this.in = in;
            return;
        }
        throw new NullPointerException("in == null");
    }

    public final void setLenient(boolean lenient) {
        this.lenient = lenient;
    }

    public final boolean isLenient() {
        return this.lenient;
    }

    public void beginArray() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 3) {
            push(1);
            this.pathIndices[this.stackSize - 1] = 0;
            this.peeked = 0;
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Expected BEGIN_ARRAY but was ");
        stringBuilder.append(peek());
        stringBuilder.append(" at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        stringBuilder.append(" path ");
        stringBuilder.append(getPath());
        throw new IllegalStateException(stringBuilder.toString());
    }

    public void endArray() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 4) {
            this.stackSize--;
            int[] iArr = this.pathIndices;
            int i = this.stackSize - 1;
            iArr[i] = iArr[i] + 1;
            this.peeked = 0;
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Expected END_ARRAY but was ");
        stringBuilder.append(peek());
        stringBuilder.append(" at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        stringBuilder.append(" path ");
        stringBuilder.append(getPath());
        throw new IllegalStateException(stringBuilder.toString());
    }

    public void beginObject() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 1) {
            push(3);
            this.peeked = 0;
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Expected BEGIN_OBJECT but was ");
        stringBuilder.append(peek());
        stringBuilder.append(" at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        stringBuilder.append(" path ");
        stringBuilder.append(getPath());
        throw new IllegalStateException(stringBuilder.toString());
    }

    public void endObject() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 2) {
            this.stackSize--;
            String[] strArr = this.pathNames;
            int i = this.stackSize;
            strArr[i] = null;
            int[] iArr = this.pathIndices;
            i--;
            iArr[i] = iArr[i] + 1;
            this.peeked = 0;
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Expected END_OBJECT but was ");
        stringBuilder.append(peek());
        stringBuilder.append(" at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        stringBuilder.append(" path ");
        stringBuilder.append(getPath());
        throw new IllegalStateException(stringBuilder.toString());
    }

    public boolean hasNext() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        return (p == 2 || p == 4) ? false : true;
    }

    public JsonToken peek() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        switch (p) {
            case 1:
                return JsonToken.BEGIN_OBJECT;
            case 2:
                return JsonToken.END_OBJECT;
            case 3:
                return JsonToken.BEGIN_ARRAY;
            case 4:
                return JsonToken.END_ARRAY;
            case 5:
            case 6:
                return JsonToken.BOOLEAN;
            case 7:
                return JsonToken.NULL;
            case 8:
            case 9:
            case 10:
            case 11:
                return JsonToken.STRING;
            case 12:
            case 13:
            case 14:
                return JsonToken.NAME;
            case 15:
            case 16:
                return JsonToken.NUMBER;
            case 17:
                return JsonToken.END_DOCUMENT;
            default:
                throw new AssertionError();
        }
    }

    int doPeek() throws IOException {
        int c;
        int[] iArr = this.stack;
        int i = this.stackSize;
        int peekStack = iArr[i - 1];
        if (peekStack == 1) {
            iArr[i - 1] = 2;
        } else if (peekStack == 2) {
            c = nextNonWhitespace(true);
            if (c != 44) {
                if (c == 59) {
                    checkLenient();
                } else if (c == 93) {
                    r0.peeked = 4;
                    return 4;
                } else {
                    throw syntaxError("Unterminated array");
                }
            }
        } else {
            if (peekStack != 3) {
                if (peekStack != 5) {
                    if (peekStack == 4) {
                        iArr[i - 1] = 5;
                        c = nextNonWhitespace(true);
                        if (c != 58) {
                            if (c == 61) {
                                checkLenient();
                                if (r0.pos < r0.limit || fillBuffer(1)) {
                                    char[] cArr = r0.buffer;
                                    int i2 = r0.pos;
                                    if (cArr[i2] == '>') {
                                        r0.pos = i2 + 1;
                                    }
                                }
                            } else {
                                throw syntaxError("Expected ':'");
                            }
                        }
                    } else if (peekStack == 6) {
                        if (r0.lenient) {
                            consumeNonExecutePrefix();
                        }
                        r0.stack[r0.stackSize - 1] = 7;
                    } else if (peekStack == 7) {
                        if (nextNonWhitespace(false) == -1) {
                            r0.peeked = 17;
                            return 17;
                        }
                        checkLenient();
                        r0.pos--;
                    } else if (peekStack == 8) {
                        throw new IllegalStateException("JsonReader is closed");
                    }
                }
            }
            r0.stack[r0.stackSize - 1] = 4;
            if (peekStack == 5) {
                i = nextNonWhitespace(true);
                if (i != 44) {
                    if (i == 59) {
                        checkLenient();
                    } else if (i == 125) {
                        r0.peeked = 2;
                        return 2;
                    } else {
                        throw syntaxError("Unterminated object");
                    }
                }
            }
            i = nextNonWhitespace(true);
            if (i == 34) {
                r0.peeked = 13;
                return 13;
            } else if (i == 39) {
                checkLenient();
                r0.peeked = 12;
                return 12;
            } else if (i != 125) {
                checkLenient();
                r0.pos--;
                if (isLiteral((char) i)) {
                    r0.peeked = 14;
                    return 14;
                }
                throw syntaxError("Expected name");
            } else if (peekStack != 5) {
                r0.peeked = 2;
                return 2;
            } else {
                throw syntaxError("Expected name");
            }
        }
        c = nextNonWhitespace(true);
        if (c == 34) {
            r0.peeked = 9;
            return 9;
        } else if (c != 39) {
            if (c != 44 && c != 59) {
                if (c == 91) {
                    r0.peeked = 3;
                    return 3;
                } else if (c != 93) {
                    if (c != 123) {
                        r0.pos--;
                        i = peekKeyword();
                        if (i != 0) {
                            return i;
                        }
                        i = peekNumber();
                        if (i != 0) {
                            return i;
                        }
                        if (isLiteral(r0.buffer[r0.pos])) {
                            checkLenient();
                            r0.peeked = 10;
                            return 10;
                        }
                        throw syntaxError("Expected value");
                    }
                    r0.peeked = 1;
                    return 1;
                } else if (peekStack == 1) {
                    r0.peeked = 4;
                    return 4;
                }
            }
            if (peekStack != 1) {
                if (peekStack != 2) {
                    throw syntaxError("Unexpected value");
                }
            }
            checkLenient();
            r0.pos--;
            r0.peeked = 7;
            return 7;
        } else {
            checkLenient();
            r0.peeked = 8;
            return 8;
        }
    }

    private int peekKeyword() throws IOException {
        String keyword;
        String keywordUpper;
        int peeking;
        int length;
        int i;
        char c = this.buffer[this.pos];
        if (c != 't') {
            if (c != 'T') {
                if (c != 'f') {
                    if (c != 'F') {
                        if (c != 'n') {
                            if (c != 'N') {
                                return 0;
                            }
                        }
                        keyword = "null";
                        keywordUpper = "NULL";
                        peeking = 7;
                        length = keyword.length();
                        i = 1;
                        while (i < length) {
                            if (this.pos + i < this.limit && !fillBuffer(i + 1)) {
                                return 0;
                            }
                            c = this.buffer[this.pos + i];
                            if (c != keyword.charAt(i) && c != keywordUpper.charAt(i)) {
                                return 0;
                            }
                            i++;
                        }
                        if (this.pos + length >= this.limit) {
                            if (fillBuffer(length + 1)) {
                                this.pos += length;
                                this.peeked = peeking;
                                return peeking;
                            }
                        }
                        if (!isLiteral(this.buffer[this.pos + length])) {
                            return 0;
                        }
                        this.pos += length;
                        this.peeked = peeking;
                        return peeking;
                    }
                }
                keyword = "false";
                keywordUpper = "FALSE";
                peeking = 6;
                length = keyword.length();
                i = 1;
                while (i < length) {
                    if (this.pos + i < this.limit) {
                    }
                    c = this.buffer[this.pos + i];
                    if (c != keyword.charAt(i)) {
                    }
                    i++;
                }
                if (this.pos + length >= this.limit) {
                    if (fillBuffer(length + 1)) {
                        this.pos += length;
                        this.peeked = peeking;
                        return peeking;
                    }
                }
                if (!isLiteral(this.buffer[this.pos + length])) {
                    return 0;
                }
                this.pos += length;
                this.peeked = peeking;
                return peeking;
            }
        }
        keyword = "true";
        keywordUpper = "TRUE";
        peeking = 5;
        length = keyword.length();
        i = 1;
        while (i < length) {
            if (this.pos + i < this.limit) {
            }
            c = this.buffer[this.pos + i];
            if (c != keyword.charAt(i)) {
            }
            i++;
        }
        if (this.pos + length >= this.limit) {
            if (fillBuffer(length + 1)) {
                this.pos += length;
                this.peeked = peeking;
                return peeking;
            }
        }
        if (!isLiteral(this.buffer[this.pos + length])) {
            return 0;
        }
        this.pos += length;
        this.peeked = peeking;
        return peeking;
    }

    private int peekNumber() throws IOException {
        char[] buffer = this.buffer;
        int p = this.pos;
        int l = this.limit;
        long value = 0;
        boolean negative = false;
        boolean fitsInLong = true;
        int last = 0;
        int i = 0;
        while (true) {
            if (p + i == l) {
                if (i == buffer.length) {
                    return 0;
                }
                if (fillBuffer(i + 1)) {
                    p = r0.pos;
                    l = r0.limit;
                } else if (last == 2 || !fitsInLong || (value == Long.MIN_VALUE && !negative)) {
                    if (!(last == 2 || last == 4)) {
                        if (last == 7) {
                            return 0;
                        }
                    }
                    r0.peekedNumberLength = i;
                    r0.peeked = 16;
                    return 16;
                } else {
                    r0.peekedLong = negative ? value : -value;
                    r0.pos += i;
                    r0.peeked = 15;
                    return 15;
                }
            }
            char c = buffer[p + i];
            if (c != '+') {
                if (c == 'E' || c == 'e') {
                    if (last != 2) {
                        if (last != 4) {
                            return 0;
                        }
                    }
                    last = 5;
                } else {
                    switch (c) {
                        case MotionEventCompat.AXIS_GENERIC_14 /*45*/:
                            if (last == 0) {
                                negative = true;
                                last = 1;
                                continue;
                            } else if (last == 5) {
                                last = 6;
                                break;
                            } else {
                                return 0;
                            }
                        case MotionEventCompat.AXIS_GENERIC_15 /*46*/:
                            if (last != 2) {
                                return 0;
                            }
                            last = 3;
                            continue;
                        default:
                            if (c >= '0') {
                                if (c <= '9') {
                                    if (last != 1) {
                                        if (last != 0) {
                                            if (last != 2) {
                                                if (last != 3) {
                                                    if (last != 5) {
                                                        if (last != 6) {
                                                            break;
                                                        }
                                                    }
                                                    last = 7;
                                                    break;
                                                }
                                                last = 4;
                                                break;
                                            } else if (value == 0) {
                                                return 0;
                                            } else {
                                                int i2;
                                                long newValue = (10 * value) - ((long) (c - 48));
                                                if (value <= MIN_INCOMPLETE_INTEGER) {
                                                    if (value != MIN_INCOMPLETE_INTEGER || newValue >= value) {
                                                        i2 = 0;
                                                        fitsInLong &= i2;
                                                        value = newValue;
                                                        continue;
                                                    }
                                                }
                                                i2 = 1;
                                                fitsInLong &= i2;
                                                value = newValue;
                                                continue;
                                            }
                                        }
                                    }
                                    value = (long) (-(c - 48));
                                    last = 2;
                                    break;
                                }
                            }
                            if (!isLiteral(c)) {
                                break;
                            }
                            return 0;
                    }
                    if (last == 2) {
                    }
                    if (last == 7) {
                        return 0;
                    }
                    r0.peekedNumberLength = i;
                    r0.peeked = 16;
                    return 16;
                }
            } else if (last != 5) {
                return 0;
            } else {
                last = 6;
            }
            i++;
        }
    }

    private boolean isLiteral(char c) throws IOException {
        switch (c) {
            case '\t':
            case '\n':
            case '\f':
            case '\r':
            case ' ':
            case MotionEventCompat.AXIS_GENERIC_13 /*44*/:
            case ':':
            case '[':
            case Symbol.CODE93 /*93*/:
            case '{':
            case '}':
                break;
            case '#':
            case MotionEventCompat.AXIS_GENERIC_16 /*47*/:
            case ';':
            case '=':
            case '\\':
                checkLenient();
                break;
            default:
                return true;
        }
        return false;
    }

    public String nextName() throws IOException {
        String result;
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 14) {
            result = nextUnquotedValue();
        } else if (p == 12) {
            result = nextQuotedValue('\'');
        } else if (p == 13) {
            result = nextQuotedValue('\"');
        } else {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Expected a name but was ");
            stringBuilder.append(peek());
            stringBuilder.append(" at line ");
            stringBuilder.append(getLineNumber());
            stringBuilder.append(" column ");
            stringBuilder.append(getColumnNumber());
            stringBuilder.append(" path ");
            stringBuilder.append(getPath());
            throw new IllegalStateException(stringBuilder.toString());
        }
        this.peeked = 0;
        this.pathNames[this.stackSize - 1] = result;
        return result;
    }

    public String nextString() throws IOException {
        String result;
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 10) {
            result = nextUnquotedValue();
        } else if (p == 8) {
            result = nextQuotedValue('\'');
        } else if (p == 9) {
            result = nextQuotedValue('\"');
        } else if (p == 11) {
            result = this.peekedString;
            this.peekedString = null;
        } else if (p == 15) {
            result = Long.toString(this.peekedLong);
        } else if (p == 16) {
            result = new String(this.buffer, this.pos, this.peekedNumberLength);
            this.pos += this.peekedNumberLength;
        } else {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Expected a string but was ");
            stringBuilder.append(peek());
            stringBuilder.append(" at line ");
            stringBuilder.append(getLineNumber());
            stringBuilder.append(" column ");
            stringBuilder.append(getColumnNumber());
            stringBuilder.append(" path ");
            stringBuilder.append(getPath());
            throw new IllegalStateException(stringBuilder.toString());
        }
        this.peeked = 0;
        int[] iArr = this.pathIndices;
        int i = this.stackSize - 1;
        iArr[i] = iArr[i] + 1;
        return result;
    }

    public boolean nextBoolean() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        int[] iArr;
        if (p == 5) {
            this.peeked = 0;
            iArr = this.pathIndices;
            int i = this.stackSize - 1;
            iArr[i] = iArr[i] + 1;
            return true;
        } else if (p == 6) {
            this.peeked = 0;
            iArr = this.pathIndices;
            int i2 = this.stackSize - 1;
            iArr[i2] = iArr[i2] + 1;
            return false;
        } else {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Expected a boolean but was ");
            stringBuilder.append(peek());
            stringBuilder.append(" at line ");
            stringBuilder.append(getLineNumber());
            stringBuilder.append(" column ");
            stringBuilder.append(getColumnNumber());
            stringBuilder.append(" path ");
            stringBuilder.append(getPath());
            throw new IllegalStateException(stringBuilder.toString());
        }
    }

    public void nextNull() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 7) {
            this.peeked = 0;
            int[] iArr = this.pathIndices;
            int i = this.stackSize - 1;
            iArr[i] = iArr[i] + 1;
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Expected null but was ");
        stringBuilder.append(peek());
        stringBuilder.append(" at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        stringBuilder.append(" path ");
        stringBuilder.append(getPath());
        throw new IllegalStateException(stringBuilder.toString());
    }

    public double nextDouble() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 15) {
            this.peeked = 0;
            int[] iArr = this.pathIndices;
            int i = this.stackSize - 1;
            iArr[i] = iArr[i] + 1;
            return (double) this.peekedLong;
        }
        if (p == 16) {
            this.peekedString = new String(this.buffer, this.pos, this.peekedNumberLength);
            this.pos += this.peekedNumberLength;
        } else {
            if (p != 8) {
                if (p != 9) {
                    if (p == 10) {
                        this.peekedString = nextUnquotedValue();
                    } else if (p != 11) {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("Expected a double but was ");
                        stringBuilder.append(peek());
                        stringBuilder.append(" at line ");
                        stringBuilder.append(getLineNumber());
                        stringBuilder.append(" column ");
                        stringBuilder.append(getColumnNumber());
                        stringBuilder.append(" path ");
                        stringBuilder.append(getPath());
                        throw new IllegalStateException(stringBuilder.toString());
                    }
                }
            }
            this.peekedString = nextQuotedValue(p == 8 ? '\'' : '\"');
        }
        this.peeked = 11;
        double result = Double.parseDouble(this.peekedString);
        if (!this.lenient) {
            if (Double.isNaN(result) || Double.isInfinite(result)) {
                stringBuilder = new StringBuilder();
                stringBuilder.append("JSON forbids NaN and infinities: ");
                stringBuilder.append(result);
                stringBuilder.append(" at line ");
                stringBuilder.append(getLineNumber());
                stringBuilder.append(" column ");
                stringBuilder.append(getColumnNumber());
                stringBuilder.append(" path ");
                stringBuilder.append(getPath());
                throw new MalformedJsonException(stringBuilder.toString());
            }
        }
        this.peekedString = null;
        this.peeked = 0;
        iArr = this.pathIndices;
        i = this.stackSize - 1;
        iArr[i] = iArr[i] + 1;
        return result;
    }

    public long nextLong() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        if (p == 15) {
            this.peeked = 0;
            int[] iArr = this.pathIndices;
            int i = this.stackSize - 1;
            iArr[i] = iArr[i] + 1;
            return this.peekedLong;
        }
        if (p == 16) {
            this.peekedString = new String(this.buffer, this.pos, this.peekedNumberLength);
            this.pos += this.peekedNumberLength;
        } else {
            if (p != 8) {
                if (p != 9) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("Expected a long but was ");
                    stringBuilder.append(peek());
                    stringBuilder.append(" at line ");
                    stringBuilder.append(getLineNumber());
                    stringBuilder.append(" column ");
                    stringBuilder.append(getColumnNumber());
                    stringBuilder.append(" path ");
                    stringBuilder.append(getPath());
                    throw new IllegalStateException(stringBuilder.toString());
                }
            }
            this.peekedString = nextQuotedValue(p == 8 ? '\'' : '\"');
            try {
                long result = Long.parseLong(this.peekedString);
                this.peeked = 0;
                iArr = this.pathIndices;
                int i2 = this.stackSize - 1;
                iArr[i2] = iArr[i2] + 1;
                return result;
            } catch (NumberFormatException e) {
            }
        }
        this.peeked = 11;
        double asDouble = Double.parseDouble(this.peekedString);
        long result2 = (long) asDouble;
        if (((double) result2) == asDouble) {
            this.peekedString = null;
            this.peeked = 0;
            iArr = this.pathIndices;
            i = this.stackSize - 1;
            iArr[i] = iArr[i] + 1;
            return result2;
        }
        stringBuilder = new StringBuilder();
        stringBuilder.append("Expected a long but was ");
        stringBuilder.append(this.peekedString);
        stringBuilder.append(" at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        stringBuilder.append(" path ");
        stringBuilder.append(getPath());
        throw new NumberFormatException(stringBuilder.toString());
    }

    private String nextQuotedValue(char quote) throws IOException {
        char[] buffer = this.buffer;
        StringBuilder builder = new StringBuilder();
        while (true) {
            int p = this.pos;
            int l = this.limit;
            int start = p;
            while (p < l) {
                int p2 = p + 1;
                char c = buffer[p];
                if (c == quote) {
                    this.pos = p2;
                    builder.append(buffer, start, (p2 - start) - 1);
                    return builder.toString();
                } else if (c == '\\') {
                    this.pos = p2;
                    builder.append(buffer, start, (p2 - start) - 1);
                    builder.append(readEscapeCharacter());
                    int p3 = this.pos;
                    l = this.limit;
                    start = p3;
                    p = p3;
                } else {
                    if (c == '\n') {
                        this.lineNumber++;
                        this.lineStart = p2;
                    }
                    p = p2;
                }
            }
            builder.append(buffer, start, p - start);
            this.pos = p;
            if (!fillBuffer(1)) {
                throw syntaxError("Unterminated string");
            }
        }
    }

    private String nextUnquotedValue() throws IOException {
        StringBuilder builder = null;
        int i = 0;
        while (true) {
            String result;
            int i2 = this.pos;
            if (i2 + i < this.limit) {
                switch (this.buffer[i2 + i]) {
                    case '\t':
                    case '\n':
                    case '\f':
                    case '\r':
                    case ' ':
                    case MotionEventCompat.AXIS_GENERIC_13 /*44*/:
                    case ':':
                    case '[':
                    case Symbol.CODE93 /*93*/:
                    case '{':
                    case '}':
                        break;
                    case '#':
                    case MotionEventCompat.AXIS_GENERIC_16 /*47*/:
                    case ';':
                    case '=':
                    case '\\':
                        checkLenient();
                        break;
                    default:
                        i++;
                        continue;
                }
            } else if (i >= this.buffer.length) {
                if (builder == null) {
                    builder = new StringBuilder();
                }
                builder.append(this.buffer, this.pos, i);
                this.pos += i;
                i = 0;
                if (fillBuffer(1)) {
                }
            } else if (fillBuffer(i + 1)) {
            }
            if (builder == null) {
                result = new String(this.buffer, this.pos, i);
            } else {
                builder.append(this.buffer, this.pos, i);
                result = builder.toString();
            }
            this.pos += i;
            return result;
        }
    }

    private void skipQuotedValue(char quote) throws IOException {
        char[] buffer = this.buffer;
        while (true) {
            int p = this.pos;
            int l = this.limit;
            while (p < l) {
                int p2 = p + 1;
                char c = buffer[p];
                if (c == quote) {
                    this.pos = p2;
                    return;
                } else if (c == '\\') {
                    this.pos = p2;
                    readEscapeCharacter();
                    int p3 = this.pos;
                    l = this.limit;
                    p = p3;
                } else {
                    if (c == '\n') {
                        this.lineNumber++;
                        this.lineStart = p2;
                    }
                    p = p2;
                }
            }
            this.pos = p;
            if (!fillBuffer(1)) {
                throw syntaxError("Unterminated string");
            }
        }
    }

    private void skipUnquotedValue() throws IOException {
        while (true) {
            int i = 0;
            while (true) {
                int i2 = this.pos;
                if (i2 + i < this.limit) {
                    switch (this.buffer[i2 + i]) {
                        case '\t':
                        case '\n':
                        case '\f':
                        case '\r':
                        case ' ':
                        case MotionEventCompat.AXIS_GENERIC_13 /*44*/:
                        case ':':
                        case '[':
                        case Symbol.CODE93 /*93*/:
                        case '{':
                        case '}':
                            break;
                        case '#':
                        case MotionEventCompat.AXIS_GENERIC_16 /*47*/:
                        case ';':
                        case '=':
                        case '\\':
                            checkLenient();
                            break;
                        default:
                            i++;
                    }
                    this.pos += i;
                    return;
                }
                this.pos = i2 + i;
                if (!fillBuffer(1)) {
                    return;
                }
            }
        }
    }

    public int nextInt() throws IOException {
        int p = this.peeked;
        if (p == 0) {
            p = doPeek();
        }
        int result;
        if (p == 15) {
            long j = this.peekedLong;
            result = (int) j;
            if (j == ((long) result)) {
                this.peeked = 0;
                int[] iArr = this.pathIndices;
                int i = this.stackSize - 1;
                iArr[i] = iArr[i] + 1;
                return result;
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Expected an int but was ");
            stringBuilder.append(this.peekedLong);
            stringBuilder.append(" at line ");
            stringBuilder.append(getLineNumber());
            stringBuilder.append(" column ");
            stringBuilder.append(getColumnNumber());
            stringBuilder.append(" path ");
            stringBuilder.append(getPath());
            throw new NumberFormatException(stringBuilder.toString());
        }
        if (p == 16) {
            this.peekedString = new String(this.buffer, this.pos, this.peekedNumberLength);
            this.pos += this.peekedNumberLength;
        } else {
            if (p != 8) {
                if (p != 9) {
                    StringBuilder stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("Expected an int but was ");
                    stringBuilder2.append(peek());
                    stringBuilder2.append(" at line ");
                    stringBuilder2.append(getLineNumber());
                    stringBuilder2.append(" column ");
                    stringBuilder2.append(getColumnNumber());
                    stringBuilder2.append(" path ");
                    stringBuilder2.append(getPath());
                    throw new IllegalStateException(stringBuilder2.toString());
                }
            }
            this.peekedString = nextQuotedValue(p == 8 ? '\'' : '\"');
            try {
                result = Integer.parseInt(this.peekedString);
                this.peeked = 0;
                int[] iArr2 = this.pathIndices;
                int i2 = this.stackSize - 1;
                iArr2[i2] = iArr2[i2] + 1;
                return result;
            } catch (NumberFormatException e) {
            }
        }
        this.peeked = 11;
        double asDouble = Double.parseDouble(this.peekedString);
        result = (int) asDouble;
        if (((double) result) == asDouble) {
            this.peekedString = null;
            this.peeked = 0;
            iArr = this.pathIndices;
            int i3 = this.stackSize - 1;
            iArr[i3] = iArr[i3] + 1;
            return result;
        }
        StringBuilder stringBuilder3 = new StringBuilder();
        stringBuilder3.append("Expected an int but was ");
        stringBuilder3.append(this.peekedString);
        stringBuilder3.append(" at line ");
        stringBuilder3.append(getLineNumber());
        stringBuilder3.append(" column ");
        stringBuilder3.append(getColumnNumber());
        stringBuilder3.append(" path ");
        stringBuilder3.append(getPath());
        throw new NumberFormatException(stringBuilder3.toString());
    }

    public void close() throws IOException {
        this.peeked = 0;
        this.stack[0] = 8;
        this.stackSize = 1;
        this.in.close();
    }

    public void skipValue() throws IOException {
        int count = 0;
        while (true) {
            int p = this.peeked;
            if (p == 0) {
                p = doPeek();
            }
            if (p == 3) {
                push(1);
                count++;
            } else if (p == 1) {
                push(3);
                count++;
            } else if (p == 4) {
                this.stackSize--;
                count--;
            } else if (p == 2) {
                this.stackSize--;
                count--;
            } else {
                if (p != 14) {
                    if (p != 10) {
                        if (p != 8) {
                            if (p != 12) {
                                if (p != 9) {
                                    if (p != 13) {
                                        if (p == 16) {
                                            this.pos += this.peekedNumberLength;
                                        }
                                    }
                                }
                                skipQuotedValue('\"');
                            }
                        }
                        skipQuotedValue('\'');
                    }
                }
                skipUnquotedValue();
            }
            this.peeked = 0;
            if (count == 0) {
                int[] iArr = this.pathIndices;
                int i = this.stackSize;
                int i2 = i - 1;
                iArr[i2] = iArr[i2] + 1;
                this.pathNames[i - 1] = "null";
                return;
            }
        }
    }

    private void push(int newTop) {
        int i = this.stackSize;
        Object obj = this.stack;
        if (i == obj.length) {
            int[] newStack = new int[(i * 2)];
            int[] newPathIndices = new int[(i * 2)];
            String[] newPathNames = new String[(i * 2)];
            System.arraycopy(obj, 0, newStack, 0, i);
            System.arraycopy(this.pathIndices, 0, newPathIndices, 0, this.stackSize);
            System.arraycopy(this.pathNames, 0, newPathNames, 0, this.stackSize);
            this.stack = newStack;
            this.pathIndices = newPathIndices;
            this.pathNames = newPathNames;
        }
        int[] iArr = this.stack;
        int i2 = this.stackSize;
        this.stackSize = i2 + 1;
        iArr[i2] = newTop;
    }

    private boolean fillBuffer(int minimum) throws IOException {
        char[] buffer = this.buffer;
        int i = this.lineStart;
        int i2 = this.pos;
        this.lineStart = i - i2;
        i = this.limit;
        if (i != i2) {
            this.limit = i - i2;
            System.arraycopy(buffer, i2, buffer, 0, this.limit);
        } else {
            this.limit = 0;
        }
        this.pos = 0;
        while (true) {
            Reader reader = this.in;
            i2 = this.limit;
            i = reader.read(buffer, i2, buffer.length - i2);
            i2 = i;
            if (i == -1) {
                return false;
            }
            this.limit += i2;
            if (this.lineNumber == 0) {
                i = this.lineStart;
                if (i == 0 && this.limit > 0 && buffer[0] == '﻿') {
                    this.pos++;
                    this.lineStart = i + 1;
                    minimum++;
                    if (this.limit >= minimum) {
                        return true;
                    }
                }
            }
            if (this.limit >= minimum) {
                return true;
            }
        }
    }

    int getLineNumber() {
        return this.lineNumber + 1;
    }

    int getColumnNumber() {
        return (this.pos - this.lineStart) + 1;
    }

    private int nextNonWhitespace(boolean throwOnEof) throws IOException {
        char[] buffer = this.buffer;
        int c = this.pos;
        int l = this.limit;
        while (true) {
            if (c == l) {
                this.pos = c;
                if (!fillBuffer(1)) {
                    break;
                }
                c = this.pos;
                l = this.limit;
            }
            int p = c + 1;
            c = buffer[c];
            if (c == 10) {
                this.lineNumber++;
                this.lineStart = p;
            } else if (c != 32 && c != 13) {
                if (c != 9) {
                    int p2;
                    if (c == 47) {
                        this.pos = p;
                        if (p == l) {
                            this.pos--;
                            boolean charsLoaded = fillBuffer(2);
                            this.pos++;
                            if (!charsLoaded) {
                                return c;
                            }
                        }
                        checkLenient();
                        p2 = this.pos;
                        char peek = buffer[p2];
                        if (peek == '*') {
                            this.pos = p2 + 1;
                            if (skipTo("*/")) {
                                p2 = this.pos + 2;
                                l = this.limit;
                                c = p2;
                            } else {
                                throw syntaxError("Unterminated comment");
                            }
                        } else if (peek != '/') {
                            return c;
                        } else {
                            this.pos = p2 + 1;
                            skipToEndOfLine();
                            p2 = this.pos;
                            l = this.limit;
                            c = p2;
                        }
                    } else if (c == 35) {
                        this.pos = p;
                        checkLenient();
                        skipToEndOfLine();
                        p2 = this.pos;
                        l = this.limit;
                        c = p2;
                    } else {
                        this.pos = p;
                        return c;
                    }
                }
            }
            c = p;
        }
        if (!throwOnEof) {
            return -1;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("End of input at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        throw new EOFException(stringBuilder.toString());
    }

    private void checkLenient() throws IOException {
        if (!this.lenient) {
            throw syntaxError("Use JsonReader.setLenient(true) to accept malformed JSON");
        }
    }

    private void skipToEndOfLine() throws IOException {
        while (true) {
            if (this.pos >= this.limit) {
                if (!fillBuffer(1)) {
                    return;
                }
            }
            char c = this.buffer;
            int i = this.pos;
            this.pos = i + 1;
            c = c[i];
            if (c == '\n') {
                this.lineNumber++;
                this.lineStart = this.pos;
                return;
            } else if (c == '\r') {
                return;
            }
        }
    }

    private boolean skipTo(String toFind) throws IOException {
        while (true) {
            if (this.pos + toFind.length() > this.limit) {
                if (!fillBuffer(toFind.length())) {
                    return false;
                }
            }
            char[] cArr = this.buffer;
            int i = this.pos;
            if (cArr[i] == '\n') {
                this.lineNumber++;
                this.lineStart = i + 1;
            } else {
                int c = 0;
                while (c < toFind.length()) {
                    if (this.buffer[this.pos + c] == toFind.charAt(c)) {
                        c++;
                    }
                }
                return true;
            }
            this.pos++;
        }
    }

    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(getClass().getSimpleName());
        stringBuilder.append(" at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        return stringBuilder.toString();
    }

    public String getPath() {
        StringBuilder result = new StringBuilder().append('$');
        int size = this.stackSize;
        for (int i = 0; i < size; i++) {
            switch (this.stack[i]) {
                case 1:
                case 2:
                    result.append('[');
                    result.append(this.pathIndices[i]);
                    result.append(']');
                    break;
                case 3:
                case 4:
                case 5:
                    result.append('.');
                    String[] strArr = this.pathNames;
                    if (strArr[i] == null) {
                        break;
                    }
                    result.append(strArr[i]);
                    break;
                default:
                    break;
            }
        }
        return result.toString();
    }

    private char readEscapeCharacter() throws IOException {
        if (this.pos == this.limit) {
            if (!fillBuffer(1)) {
                throw syntaxError("Unterminated escape sequence");
            }
        }
        char escaped = this.buffer;
        int i = this.pos;
        this.pos = i + 1;
        escaped = escaped[i];
        if (escaped == '\n') {
            this.lineNumber++;
            this.lineStart = this.pos;
        } else if (escaped == 'b') {
            return '\b';
        } else {
            if (escaped == 'f') {
                return '\f';
            }
            if (escaped == 'n') {
                return '\n';
            }
            if (escaped != 'r') {
                switch (escaped) {
                    case 't':
                        return '\t';
                    case 'u':
                        if (this.pos + 4 > this.limit) {
                            if (!fillBuffer(4)) {
                                throw syntaxError("Unterminated escape sequence");
                            }
                        }
                        char result = '\u0000';
                        int i2 = this.pos;
                        int end = i2 + 4;
                        while (i2 < end) {
                            char c = this.buffer[i2];
                            result = (char) (result << 4);
                            if (c >= '0' && c <= '9') {
                                result = (char) ((c - 48) + result);
                            } else if (c >= 'a' && c <= 'f') {
                                result = (char) (((c - 97) + 10) + result);
                            } else if (c < 'A' || c > 'F') {
                                StringBuilder stringBuilder = new StringBuilder();
                                stringBuilder.append("\\u");
                                stringBuilder.append(new String(this.buffer, this.pos, 4));
                                throw new NumberFormatException(stringBuilder.toString());
                            } else {
                                result = (char) (((c - 65) + 10) + result);
                            }
                            i2++;
                        }
                        this.pos += 4;
                        return result;
                    default:
                        break;
                }
            }
            return '\r';
        }
        return escaped;
    }

    private IOException syntaxError(String message) throws IOException {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(message);
        stringBuilder.append(" at line ");
        stringBuilder.append(getLineNumber());
        stringBuilder.append(" column ");
        stringBuilder.append(getColumnNumber());
        stringBuilder.append(" path ");
        stringBuilder.append(getPath());
        throw new MalformedJsonException(stringBuilder.toString());
    }

    private void consumeNonExecutePrefix() throws IOException {
        nextNonWhitespace(true);
        this.pos--;
        int i = this.pos;
        char[] cArr = NON_EXECUTE_PREFIX;
        if (i + cArr.length <= this.limit || fillBuffer(cArr.length)) {
            i = 0;
            while (true) {
                cArr = NON_EXECUTE_PREFIX;
                if (i >= cArr.length) {
                    this.pos += cArr.length;
                    return;
                } else if (this.buffer[this.pos + i] == cArr[i]) {
                    i++;
                } else {
                    return;
                }
            }
        }
    }
}
