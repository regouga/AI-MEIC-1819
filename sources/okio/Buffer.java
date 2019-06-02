package okio;

import android.support.v4.media.session.PlaybackStateCompat;
import java.io.Closeable;
import java.io.EOFException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.channels.ByteChannel;
import java.nio.charset.Charset;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javax.annotation.Nullable;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public final class Buffer implements BufferedSource, BufferedSink, Cloneable, ByteChannel {
    private static final byte[] DIGITS = new byte[]{(byte) 48, (byte) 49, (byte) 50, (byte) 51, (byte) 52, (byte) 53, (byte) 54, (byte) 55, (byte) 56, (byte) 57, (byte) 97, (byte) 98, (byte) 99, (byte) 100, (byte) 101, (byte) 102};
    static final int REPLACEMENT_CHARACTER = 65533;
    @Nullable
    Segment head;
    long size;

    /* renamed from: okio.Buffer$1 */
    class C02531 extends OutputStream {
        C02531() {
        }

        public void write(int b) {
            Buffer.this.writeByte((byte) b);
        }

        public void write(byte[] data, int offset, int byteCount) {
            Buffer.this.write(data, offset, byteCount);
        }

        public void flush() {
        }

        public void close() {
        }

        public String toString() {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(Buffer.this);
            stringBuilder.append(".outputStream()");
            return stringBuilder.toString();
        }
    }

    /* renamed from: okio.Buffer$2 */
    class C02542 extends InputStream {
        C02542() {
        }

        public int read() {
            if (Buffer.this.size > 0) {
                return Buffer.this.readByte() & 255;
            }
            return -1;
        }

        public int read(byte[] sink, int offset, int byteCount) {
            return Buffer.this.read(sink, offset, byteCount);
        }

        public int available() {
            return (int) Math.min(Buffer.this.size, 2147483647L);
        }

        public void close() {
        }

        public String toString() {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(Buffer.this);
            stringBuilder.append(".inputStream()");
            return stringBuilder.toString();
        }
    }

    public static final class UnsafeCursor implements Closeable {
        public Buffer buffer;
        public byte[] data;
        public int end = -1;
        public long offset = -1;
        public boolean readWrite;
        private Segment segment;
        public int start = -1;

        public final int next() {
            if (this.offset != this.buffer.size) {
                long j = this.offset;
                if (j == -1) {
                    return seek(0);
                }
                return seek(j + ((long) (this.end - this.start)));
            }
            throw new IllegalStateException();
        }

        public final int seek(long offset) {
            if (offset < -1 || offset > this.buffer.size) {
                throw new ArrayIndexOutOfBoundsException(String.format("offset=%s > size=%s", new Object[]{Long.valueOf(offset), Long.valueOf(this.buffer.size)}));
            }
            if (offset != -1) {
                if (offset != this.buffer.size) {
                    long segmentOffset;
                    long min = 0;
                    long max = this.buffer.size;
                    Segment head = this.buffer.head;
                    Segment tail = this.buffer.head;
                    Segment segment = this.segment;
                    if (segment != null) {
                        segmentOffset = this.offset - ((long) (this.start - segment.pos));
                        if (segmentOffset > offset) {
                            max = segmentOffset;
                            tail = this.segment;
                        } else {
                            min = segmentOffset;
                            head = this.segment;
                        }
                    }
                    if (max - offset > offset - min) {
                        segment = head;
                        segmentOffset = min;
                        while (offset >= ((long) (segment.limit - segment.pos)) + segmentOffset) {
                            segmentOffset += (long) (segment.limit - segment.pos);
                            segment = segment.next;
                        }
                    } else {
                        segment = tail;
                        segmentOffset = max;
                        while (segmentOffset > offset) {
                            segment = segment.prev;
                            segmentOffset -= (long) (segment.limit - segment.pos);
                        }
                    }
                    if (this.readWrite && segment.shared) {
                        Segment unsharedNext = segment.unsharedCopy();
                        if (this.buffer.head == segment) {
                            this.buffer.head = unsharedNext;
                        }
                        segment = segment.push(unsharedNext);
                        segment.prev.pop();
                    }
                    this.segment = segment;
                    this.offset = offset;
                    this.data = segment.data;
                    this.start = segment.pos + ((int) (offset - segmentOffset));
                    this.end = segment.limit;
                    return this.end - this.start;
                }
            }
            this.segment = null;
            this.offset = offset;
            this.data = null;
            this.start = -1;
            this.end = -1;
            return -1;
        }

        public final long resizeBuffer(long newSize) {
            long oldSize = this.buffer;
            if (oldSize == null) {
                throw new IllegalStateException("not attached to a buffer");
            } else if (this.readWrite) {
                oldSize = oldSize.size;
                if (newSize <= oldSize) {
                    if (newSize >= 0) {
                        long bytesToSubtract = oldSize - newSize;
                        while (bytesToSubtract > 0) {
                            Segment tail = this.buffer.head.prev;
                            int tailSize = tail.limit - tail.pos;
                            if (((long) tailSize) > bytesToSubtract) {
                                tail.limit = (int) (((long) tail.limit) - bytesToSubtract);
                                break;
                            }
                            this.buffer.head = tail.pop();
                            SegmentPool.recycle(tail);
                            bytesToSubtract -= (long) tailSize;
                        }
                        this.segment = null;
                        this.offset = newSize;
                        this.data = null;
                        this.start = -1;
                        this.end = -1;
                    } else {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("newSize < 0: ");
                        stringBuilder.append(newSize);
                        throw new IllegalArgumentException(stringBuilder.toString());
                    }
                } else if (newSize > oldSize) {
                    boolean needsToSeek = true;
                    long bytesToAdd = newSize - oldSize;
                    while (bytesToAdd > 0) {
                        Segment tail2 = this.buffer.writableSegment(1);
                        int segmentBytesToAdd = (int) Math.min(bytesToAdd, (long) (8192 - tail2.limit));
                        tail2.limit += segmentBytesToAdd;
                        bytesToAdd -= (long) segmentBytesToAdd;
                        if (needsToSeek) {
                            this.segment = tail2;
                            this.offset = oldSize;
                            this.data = tail2.data;
                            this.start = tail2.limit - segmentBytesToAdd;
                            this.end = tail2.limit;
                            needsToSeek = false;
                        }
                    }
                }
                this.buffer.size = newSize;
                return oldSize;
            } else {
                throw new IllegalStateException("resizeBuffer() only permitted for read/write buffers");
            }
        }

        public final long expandBuffer(int minByteCount) {
            StringBuilder stringBuilder;
            if (minByteCount <= 0) {
                stringBuilder = new StringBuilder();
                stringBuilder.append("minByteCount <= 0: ");
                stringBuilder.append(minByteCount);
                throw new IllegalArgumentException(stringBuilder.toString());
            } else if (minByteCount <= 8192) {
                long oldSize = this.buffer;
                if (oldSize == null) {
                    throw new IllegalStateException("not attached to a buffer");
                } else if (this.readWrite) {
                    oldSize = oldSize.size;
                    Segment tail = this.buffer.writableSegment(minByteCount);
                    int result = 8192 - tail.limit;
                    tail.limit = 8192;
                    this.buffer.size = ((long) result) + oldSize;
                    this.segment = tail;
                    this.offset = oldSize;
                    this.data = tail.data;
                    this.start = 8192 - result;
                    this.end = 8192;
                    return (long) result;
                } else {
                    throw new IllegalStateException("expandBuffer() only permitted for read/write buffers");
                }
            } else {
                stringBuilder = new StringBuilder();
                stringBuilder.append("minByteCount > Segment.SIZE: ");
                stringBuilder.append(minByteCount);
                throw new IllegalArgumentException(stringBuilder.toString());
            }
        }

        public void close() {
            if (this.buffer != null) {
                this.buffer = null;
                this.segment = null;
                this.offset = -1;
                this.data = null;
                this.start = -1;
                this.end = -1;
                return;
            }
            throw new IllegalStateException("not attached to a buffer");
        }
    }

    public final long size() {
        return this.size;
    }

    public Buffer buffer() {
        return this;
    }

    public OutputStream outputStream() {
        return new C02531();
    }

    public Buffer emitCompleteSegments() {
        return this;
    }

    public BufferedSink emit() {
        return this;
    }

    public boolean exhausted() {
        return this.size == 0;
    }

    public void require(long byteCount) throws EOFException {
        if (this.size < byteCount) {
            throw new EOFException();
        }
    }

    public boolean request(long byteCount) {
        return this.size >= byteCount;
    }

    public InputStream inputStream() {
        return new C02542();
    }

    public final Buffer copyTo(OutputStream out) throws IOException {
        return copyTo(out, 0, this.size);
    }

    public final Buffer copyTo(OutputStream out, long offset, long byteCount) throws IOException {
        if (out != null) {
            Util.checkOffsetAndCount(this.size, offset, byteCount);
            if (byteCount == 0) {
                return this;
            }
            Segment s = this.head;
            while (offset >= ((long) (s.limit - s.pos))) {
                offset -= (long) (s.limit - s.pos);
                s = s.next;
            }
            while (byteCount > 0) {
                int pos = (int) (((long) s.pos) + offset);
                int toCopy = (int) Math.min((long) (s.limit - pos), byteCount);
                out.write(s.data, pos, toCopy);
                byteCount -= (long) toCopy;
                offset = 0;
                s = s.next;
            }
            return this;
        }
        throw new IllegalArgumentException("out == null");
    }

    public final Buffer copyTo(Buffer out, long offset, long byteCount) {
        if (out != null) {
            Util.checkOffsetAndCount(this.size, offset, byteCount);
            if (byteCount == 0) {
                return this;
            }
            out.size += byteCount;
            Segment s = this.head;
            while (offset >= ((long) (s.limit - s.pos))) {
                offset -= (long) (s.limit - s.pos);
                s = s.next;
            }
            while (byteCount > 0) {
                Segment copy = s.sharedCopy();
                copy.pos = (int) (((long) copy.pos) + offset);
                copy.limit = Math.min(copy.pos + ((int) byteCount), copy.limit);
                Segment segment = out.head;
                if (segment == null) {
                    copy.prev = copy;
                    copy.next = copy;
                    out.head = copy;
                } else {
                    segment.prev.push(copy);
                }
                byteCount -= (long) (copy.limit - copy.pos);
                offset = 0;
                s = s.next;
            }
            return this;
        }
        throw new IllegalArgumentException("out == null");
    }

    public final Buffer writeTo(OutputStream out) throws IOException {
        return writeTo(out, this.size);
    }

    public final Buffer writeTo(OutputStream out, long byteCount) throws IOException {
        if (out != null) {
            Util.checkOffsetAndCount(this.size, 0, byteCount);
            Segment s = this.head;
            while (byteCount > 0) {
                int toCopy = (int) Math.min(byteCount, (long) (s.limit - s.pos));
                out.write(s.data, s.pos, toCopy);
                s.pos += toCopy;
                this.size -= (long) toCopy;
                byteCount -= (long) toCopy;
                if (s.pos == s.limit) {
                    Segment toRecycle = s;
                    Segment pop = toRecycle.pop();
                    s = pop;
                    this.head = pop;
                    SegmentPool.recycle(toRecycle);
                }
            }
            return this;
        }
        throw new IllegalArgumentException("out == null");
    }

    public final Buffer readFrom(InputStream in) throws IOException {
        readFrom(in, Long.MAX_VALUE, true);
        return this;
    }

    public final Buffer readFrom(InputStream in, long byteCount) throws IOException {
        if (byteCount >= 0) {
            readFrom(in, byteCount, false);
            return this;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("byteCount < 0: ");
        stringBuilder.append(byteCount);
        throw new IllegalArgumentException(stringBuilder.toString());
    }

    private void readFrom(InputStream in, long byteCount, boolean forever) throws IOException {
        if (in != null) {
            while (true) {
                if (byteCount <= 0) {
                    if (!forever) {
                        return;
                    }
                }
                Segment tail = writableSegment(1);
                int bytesRead = in.read(tail.data, tail.limit, (int) Math.min(byteCount, (long) (8192 - tail.limit)));
                if (bytesRead == -1) {
                    break;
                }
                tail.limit += bytesRead;
                this.size += (long) bytesRead;
                byteCount -= (long) bytesRead;
            }
            if (!forever) {
                throw new EOFException();
            }
            return;
        }
        throw new IllegalArgumentException("in == null");
    }

    public final long completeSegmentByteCount() {
        long result = this.size;
        if (result == 0) {
            return 0;
        }
        Segment tail = this.head.prev;
        if (tail.limit < 8192 && tail.owner) {
            result -= (long) (tail.limit - tail.pos);
        }
        return result;
    }

    public byte readByte() {
        if (this.size != 0) {
            Segment segment = this.head;
            byte b = segment.pos;
            int limit = segment.limit;
            int pos = b + 1;
            b = segment.data[b];
            this.size--;
            if (pos == limit) {
                this.head = segment.pop();
                SegmentPool.recycle(segment);
            } else {
                segment.pos = pos;
            }
            return b;
        }
        throw new IllegalStateException("size == 0");
    }

    public final byte getByte(long pos) {
        Util.checkOffsetAndCount(this.size, pos, 1);
        Segment s = this.size;
        if (s - pos > pos) {
            s = this.head;
            while (true) {
                int segmentByteCount = s.limit - s.pos;
                if (pos < ((long) segmentByteCount)) {
                    return s.data[s.pos + ((int) pos)];
                }
                pos -= (long) segmentByteCount;
                s = s.next;
            }
        } else {
            pos -= s;
            s = this.head.prev;
            while (true) {
                pos += (long) (s.limit - s.pos);
                if (pos >= 0) {
                    return s.data[s.pos + ((int) pos)];
                }
                s = s.prev;
            }
        }
    }

    public short readShort() {
        if (this.size >= 2) {
            Segment segment = this.head;
            int pos = segment.pos;
            int limit = segment.limit;
            if (limit - pos < 2) {
                return (short) (((readByte() & 255) << 8) | (readByte() & 255));
            }
            byte[] data = segment.data;
            int pos2 = pos + 1;
            int pos3 = pos2 + 1;
            pos = ((data[pos] & 255) << 8) | (data[pos2] & 255);
            this.size -= 2;
            if (pos3 == limit) {
                this.head = segment.pop();
                SegmentPool.recycle(segment);
            } else {
                segment.pos = pos3;
            }
            return (short) pos;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("size < 2: ");
        stringBuilder.append(this.size);
        throw new IllegalStateException(stringBuilder.toString());
    }

    public int readInt() {
        if (this.size >= 4) {
            Segment segment = this.head;
            int pos = segment.pos;
            int limit = segment.limit;
            if (limit - pos < 4) {
                return ((((readByte() & 255) << 24) | ((readByte() & 255) << 16)) | ((readByte() & 255) << 8)) | (readByte() & 255);
            }
            byte[] data = segment.data;
            int pos2 = pos + 1;
            int pos3 = pos2 + 1;
            pos = ((data[pos] & 255) << 24) | ((data[pos2] & 255) << 16);
            pos2 = pos3 + 1;
            pos |= (data[pos3] & 255) << 8;
            pos3 = pos2 + 1;
            pos |= data[pos2] & 255;
            this.size -= 4;
            if (pos3 == limit) {
                this.head = segment.pop();
                SegmentPool.recycle(segment);
            } else {
                segment.pos = pos3;
            }
            return pos;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("size < 4: ");
        stringBuilder.append(this.size);
        throw new IllegalStateException(stringBuilder.toString());
    }

    public long readLong() {
        if (this.size >= 8) {
            Segment segment = this.head;
            int pos = segment.pos;
            int limit = segment.limit;
            if (limit - pos < 8) {
                return ((((long) readInt()) & 4294967295L) << 32) | (((long) readInt()) & 4294967295L);
            }
            byte[] data = segment.data;
            int pos2 = pos + 1;
            pos = pos2 + 1;
            int pos3 = pos + 1;
            pos = pos3 + 1;
            int pos4 = pos + 1;
            pos = pos4 + 1;
            pos4 = pos + 1;
            pos = pos4 + 1;
            long v = ((((((((((long) data[pos]) & 255) << 56) | ((((long) data[pos2]) & 255) << 48)) | ((((long) data[pos]) & 255) << 40)) | ((((long) data[pos3]) & 255) << 32)) | ((((long) data[pos]) & 255) << 24)) | ((((long) data[pos4]) & 255) << 16)) | ((((long) data[pos]) & 255) << 8)) | (((long) data[pos4]) & 255);
            this.size -= 8;
            if (pos == limit) {
                this.head = segment.pop();
                SegmentPool.recycle(segment);
            } else {
                segment.pos = pos;
            }
            return v;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("size < 8: ");
        stringBuilder.append(this.size);
        throw new IllegalStateException(stringBuilder.toString());
    }

    public short readShortLe() {
        return Util.reverseBytesShort(readShort());
    }

    public int readIntLe() {
        return Util.reverseBytesInt(readInt());
    }

    public long readLongLe() {
        return Util.reverseBytesLong(readLong());
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public long readDecimalLong() {
        /*
        r20 = this;
        r0 = r20;
        r1 = r0.size;
        r3 = 0;
        r1 = (r1 > r3 ? 1 : (r1 == r3 ? 0 : -1));
        if (r1 == 0) goto L_0x00e7;
    L_0x000a:
        r1 = 0;
        r3 = 0;
        r4 = 0;
        r5 = 0;
        r6 = -922337203685477580; // 0xf333333333333334 float:4.1723254E-8 double:-8.390303882365713E246;
        r8 = -7;
    L_0x0016:
        r10 = r0.head;
        r11 = r10.data;
        r12 = r10.pos;
        r13 = r10.limit;
    L_0x001e:
        if (r12 >= r13) goto L_0x00bc;
    L_0x0020:
        r14 = r11[r12];
        r15 = 48;
        if (r14 < r15) goto L_0x0081;
    L_0x0026:
        r15 = 57;
        if (r14 > r15) goto L_0x0081;
    L_0x002a:
        r15 = 48;
        r15 = r15 - r14;
        r16 = (r1 > r6 ? 1 : (r1 == r6 ? 0 : -1));
        if (r16 < 0) goto L_0x004c;
    L_0x0031:
        r16 = (r1 > r6 ? 1 : (r1 == r6 ? 0 : -1));
        if (r16 != 0) goto L_0x003e;
    L_0x0035:
        r16 = r6;
        r7 = r5;
        r5 = (long) r15;
        r5 = (r5 > r8 ? 1 : (r5 == r8 ? 0 : -1));
        if (r5 >= 0) goto L_0x0041;
    L_0x003d:
        goto L_0x004f;
    L_0x003e:
        r16 = r6;
        r7 = r5;
    L_0x0041:
        r5 = 10;
        r1 = r1 * r5;
        r5 = (long) r15;
        r1 = r1 + r5;
        r18 = r7;
        r19 = r11;
        goto L_0x0091;
    L_0x004c:
        r16 = r6;
        r7 = r5;
    L_0x004f:
        r5 = new okio.Buffer;
        r5.<init>();
        r5 = r5.writeDecimalLong(r1);
        r5 = r5.writeByte(r14);
        if (r4 != 0) goto L_0x0062;
    L_0x005e:
        r5.readByte();
    L_0x0062:
        r6 = new java.lang.NumberFormatException;
        r18 = r7;
        r7 = new java.lang.StringBuilder;
        r7.<init>();
        r19 = r11;
        r11 = "Number too large: ";
        r7.append(r11);
        r11 = r5.readUtf8();
        r7.append(r11);
        r7 = r7.toString();
        r6.<init>(r7);
        throw r6;
    L_0x0081:
        r18 = r5;
        r16 = r6;
        r19 = r11;
        r5 = 45;
        if (r14 != r5) goto L_0x009c;
    L_0x008b:
        if (r3 != 0) goto L_0x009c;
    L_0x008d:
        r4 = 1;
        r5 = 1;
        r8 = r8 - r5;
    L_0x0091:
        r12 = r12 + 1;
        r3 = r3 + 1;
        r6 = r16;
        r5 = r18;
        r11 = r19;
        goto L_0x001e;
        if (r3 == 0) goto L_0x00a1;
    L_0x009f:
        r5 = 1;
        goto L_0x00c2;
    L_0x00a1:
        r5 = new java.lang.NumberFormatException;
        r6 = new java.lang.StringBuilder;
        r6.<init>();
        r7 = "Expected leading [0-9] or '-' character but was 0x";
        r6.append(r7);
        r7 = java.lang.Integer.toHexString(r14);
        r6.append(r7);
        r6 = r6.toString();
        r5.<init>(r6);
        throw r5;
    L_0x00bc:
        r18 = r5;
        r16 = r6;
        r19 = r11;
    L_0x00c2:
        if (r12 != r13) goto L_0x00ce;
    L_0x00c4:
        r6 = r10.pop();
        r0.head = r6;
        okio.SegmentPool.recycle(r10);
        goto L_0x00d0;
    L_0x00ce:
        r10.pos = r12;
    L_0x00d0:
        if (r5 != 0) goto L_0x00db;
    L_0x00d2:
        r6 = r0.head;
        if (r6 != 0) goto L_0x00d7;
    L_0x00d6:
        goto L_0x00db;
    L_0x00d7:
        r6 = r16;
        goto L_0x0016;
    L_0x00db:
        r6 = r0.size;
        r10 = (long) r3;
        r6 = r6 - r10;
        r0.size = r6;
        if (r4 == 0) goto L_0x00e5;
    L_0x00e3:
        r6 = r1;
        goto L_0x00e6;
    L_0x00e5:
        r6 = -r1;
    L_0x00e6:
        return r6;
    L_0x00e7:
        r1 = new java.lang.IllegalStateException;
        r2 = "size == 0";
        r1.<init>(r2);
        throw r1;
        */
        throw new UnsupportedOperationException("Method not decompiled: okio.Buffer.readDecimalLong():long");
    }

    public long readHexadecimalUnsignedLong() {
        if (this.size != 0) {
            long value = 0;
            int seen = 0;
            boolean done = false;
            while (true) {
                Segment segment = this.head;
                byte[] data = segment.data;
                int pos = segment.pos;
                int limit = segment.limit;
                while (pos < limit) {
                    int digit;
                    int b = data[pos];
                    if (b >= (byte) 48 && b <= (byte) 57) {
                        digit = b - 48;
                    } else if (b >= (byte) 97 && b <= (byte) 102) {
                        digit = (b - 97) + 10;
                    } else if (b >= (byte) 65 && b <= (byte) 70) {
                        digit = (b - 65) + 10;
                    } else if (seen != 0) {
                        done = true;
                        if (pos != limit) {
                            this.head = segment.pop();
                            SegmentPool.recycle(segment);
                        } else {
                            segment.pos = pos;
                        }
                        if (!done) {
                            break;
                        } else if (this.head == null) {
                            break;
                        }
                    } else {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("Expected leading [0-9a-fA-F] character but was 0x");
                        stringBuilder.append(Integer.toHexString(b));
                        throw new NumberFormatException(stringBuilder.toString());
                    }
                    if ((-1152921504606846976L & value) == 0) {
                        value = (value << 4) | ((long) digit);
                        pos++;
                        seen++;
                    } else {
                        Buffer buffer = new Buffer().writeHexadecimalUnsignedLong(value).writeByte(b);
                        StringBuilder stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Number too large: ");
                        stringBuilder2.append(buffer.readUtf8());
                        throw new NumberFormatException(stringBuilder2.toString());
                    }
                }
                if (pos != limit) {
                    segment.pos = pos;
                } else {
                    this.head = segment.pop();
                    SegmentPool.recycle(segment);
                }
                if (!done) {
                    if (this.head == null) {
                        break;
                    }
                } else {
                    break;
                }
            }
            this.size -= (long) seen;
            return value;
        }
        throw new IllegalStateException("size == 0");
    }

    public ByteString readByteString() {
        return new ByteString(readByteArray());
    }

    public ByteString readByteString(long byteCount) throws EOFException {
        return new ByteString(readByteArray(byteCount));
    }

    public int select(Options options) {
        int index = selectPrefix(options, 0);
        if (index == -1) {
            return -1;
        }
        try {
            skip((long) options.byteStrings[index].size());
            return index;
        } catch (EOFException e) {
            throw new AssertionError();
        }
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    int selectPrefix(okio.Options r19, boolean r20) {
        /*
        r18 = this;
        r0 = r19;
        r1 = r18;
        r2 = r1.head;
        r3 = -2;
        if (r2 != 0) goto L_0x0013;
    L_0x0009:
        if (r20 == 0) goto L_0x000c;
    L_0x000b:
        return r3;
    L_0x000c:
        r3 = okio.ByteString.EMPTY;
        r3 = r0.indexOf(r3);
        return r3;
    L_0x0013:
        r4 = r2;
        r5 = r2.data;
        r6 = r2.pos;
        r7 = r2.limit;
        r8 = r0.trie;
        r9 = 0;
        r10 = -1;
    L_0x001e:
        r11 = r9 + 1;
        r9 = r8[r9];
        r12 = r11 + 1;
        r11 = r8[r11];
        r13 = -1;
        if (r11 == r13) goto L_0x002b;
    L_0x0029:
        r10 = r11;
        goto L_0x002c;
    L_0x002c:
        if (r4 != 0) goto L_0x0031;
    L_0x002e:
        r15 = r6;
        r3 = r12;
        goto L_0x0057;
    L_0x0031:
        if (r9 >= 0) goto L_0x0075;
    L_0x0033:
        r13 = r9 * -1;
        r14 = r12 + r13;
    L_0x0037:
        r15 = r6 + 1;
        r6 = r5[r6];
        r6 = r6 & 255;
        r3 = r12 + 1;
        r12 = r8[r12];
        if (r6 == r12) goto L_0x0044;
    L_0x0043:
        return r10;
    L_0x0044:
        if (r3 != r14) goto L_0x0048;
    L_0x0046:
        r12 = 1;
        goto L_0x0049;
    L_0x0048:
        r12 = 0;
    L_0x0049:
        if (r15 != r7) goto L_0x0064;
    L_0x004b:
        r4 = r4.next;
        r15 = r4.pos;
        r5 = r4.data;
        r7 = r4.limit;
        if (r4 != r2) goto L_0x0061;
    L_0x0055:
        if (r12 != 0) goto L_0x005d;
    L_0x0057:
        if (r20 == 0) goto L_0x005c;
    L_0x0059:
        r16 = -2;
        return r16;
    L_0x005c:
        return r10;
    L_0x005d:
        r16 = -2;
        r4 = 0;
        goto L_0x0066;
    L_0x0061:
        r16 = -2;
        goto L_0x0066;
    L_0x0064:
        r16 = -2;
    L_0x0066:
        if (r12 == 0) goto L_0x0070;
    L_0x0068:
        r17 = r8[r3];
        r12 = r3;
        r6 = r15;
        r3 = r17;
        goto L_0x00a4;
        r12 = r3;
        r6 = r15;
        r3 = -2;
        goto L_0x0037;
    L_0x0075:
        r16 = -2;
        r3 = r9;
        r13 = r6 + 1;
        r6 = r5[r6];
        r6 = r6 & 255;
        r14 = r12 + r3;
    L_0x0080:
        if (r12 != r14) goto L_0x0083;
    L_0x0082:
        return r10;
    L_0x0083:
        r15 = r8[r12];
        if (r6 != r15) goto L_0x00ab;
    L_0x0087:
        r15 = r12 + r3;
        r17 = r8[r15];
        if (r13 != r7) goto L_0x00a1;
    L_0x008e:
        r4 = r4.next;
        r13 = r4.pos;
        r5 = r4.data;
        r7 = r4.limit;
        if (r4 != r2) goto L_0x009d;
    L_0x0098:
        r4 = 0;
        r6 = r13;
        r3 = r17;
        goto L_0x00a4;
    L_0x009d:
        r6 = r13;
        r3 = r17;
        goto L_0x00a4;
    L_0x00a1:
        r6 = r13;
        r3 = r17;
    L_0x00a4:
        if (r3 < 0) goto L_0x00a7;
    L_0x00a6:
        return r3;
    L_0x00a7:
        r9 = -r3;
        r3 = -2;
        goto L_0x001e;
    L_0x00ab:
        r12 = r12 + 1;
        goto L_0x0080;
        */
        throw new UnsupportedOperationException("Method not decompiled: okio.Buffer.selectPrefix(okio.Options, boolean):int");
    }

    public void readFully(Buffer sink, long byteCount) throws EOFException {
        long j = this.size;
        if (j >= byteCount) {
            sink.write(this, byteCount);
        } else {
            sink.write(this, j);
            throw new EOFException();
        }
    }

    public long readAll(Sink sink) throws IOException {
        long byteCount = this.size;
        if (byteCount > 0) {
            sink.write(this, byteCount);
        }
        return byteCount;
    }

    public String readUtf8() {
        try {
            return readString(this.size, Util.UTF_8);
        } catch (EOFException e) {
            throw new AssertionError(e);
        }
    }

    public String readUtf8(long byteCount) throws EOFException {
        return readString(byteCount, Util.UTF_8);
    }

    public String readString(Charset charset) {
        try {
            return readString(this.size, charset);
        } catch (EOFException e) {
            throw new AssertionError(e);
        }
    }

    public String readString(long byteCount, Charset charset) throws EOFException {
        Util.checkOffsetAndCount(this.size, 0, byteCount);
        if (charset == null) {
            throw new IllegalArgumentException("charset == null");
        } else if (byteCount > 2147483647L) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("byteCount > Integer.MAX_VALUE: ");
            stringBuilder.append(byteCount);
            throw new IllegalArgumentException(stringBuilder.toString());
        } else if (byteCount == 0) {
            return "";
        } else {
            Segment s = this.head;
            if (((long) s.pos) + byteCount > ((long) s.limit)) {
                return new String(readByteArray(byteCount), charset);
            }
            String result = new String(s.data, s.pos, (int) byteCount, charset);
            s.pos = (int) (((long) s.pos) + byteCount);
            this.size -= byteCount;
            if (s.pos == s.limit) {
                this.head = s.pop();
                SegmentPool.recycle(s);
            }
            return result;
        }
    }

    @Nullable
    public String readUtf8Line() throws EOFException {
        long newline = indexOf((byte) 10);
        if (newline != -1) {
            return readUtf8Line(newline);
        }
        long j = this.size;
        return j != 0 ? readUtf8(j) : null;
    }

    public String readUtf8LineStrict() throws EOFException {
        return readUtf8LineStrict(Long.MAX_VALUE);
    }

    public String readUtf8LineStrict(long limit) throws EOFException {
        if (limit >= 0) {
            long scanLength = Long.MAX_VALUE;
            if (limit != Long.MAX_VALUE) {
                scanLength = limit + 1;
            }
            long newline = indexOf((byte) 10, 0, scanLength);
            if (newline != -1) {
                return readUtf8Line(newline);
            }
            if (scanLength < size()) {
                if (getByte(scanLength - 1) == (byte) 13 && getByte(scanLength) == (byte) 10) {
                    return readUtf8Line(scanLength);
                }
            }
            Buffer data = new Buffer();
            copyTo(data, 0, Math.min(32, size()));
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("\\n not found: limit=");
            stringBuilder.append(Math.min(size(), limit));
            stringBuilder.append(" content=");
            stringBuilder.append(data.readByteString().hex());
            stringBuilder.append('…');
            throw new EOFException(stringBuilder.toString());
        }
        stringBuilder = new StringBuilder();
        stringBuilder.append("limit < 0: ");
        stringBuilder.append(limit);
        throw new IllegalArgumentException(stringBuilder.toString());
    }

    String readUtf8Line(long newline) throws EOFException {
        if (newline <= 0 || getByte(newline - 1) != (byte) 13) {
            String result = readUtf8(newline);
            skip(1);
            return result;
        }
        String result2 = readUtf8(newline - 1);
        skip(2);
        return result2;
    }

    public int readUtf8CodePoint() throws EOFException {
        if (this.size != 0) {
            int i;
            int byteCount;
            byte b0 = getByte(0);
            int min;
            if ((b0 & 128) == 0) {
                i = b0 & 127;
                byteCount = 1;
                min = 0;
            } else if ((b0 & 224) == 192) {
                i = b0 & 31;
                byteCount = 2;
                min = 128;
            } else if ((b0 & 240) == 224) {
                i = b0 & 15;
                byteCount = 3;
                min = 2048;
            } else if ((b0 & 248) == 240) {
                i = b0 & 7;
                byteCount = 4;
                min = 65536;
            } else {
                skip(1);
                return REPLACEMENT_CHARACTER;
            }
            if (this.size >= ((long) byteCount)) {
                int i2 = 1;
                while (i2 < byteCount) {
                    byte b = getByte((long) i2);
                    if ((b & 192) == 128) {
                        i = (i << 6) | (b & 63);
                        i2++;
                    } else {
                        skip((long) i2);
                        return REPLACEMENT_CHARACTER;
                    }
                }
                skip((long) byteCount);
                if (i > 1114111) {
                    return REPLACEMENT_CHARACTER;
                }
                if ((i < 55296 || i > 57343) && i >= min) {
                    return i;
                }
                return REPLACEMENT_CHARACTER;
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("size < ");
            stringBuilder.append(byteCount);
            stringBuilder.append(": ");
            stringBuilder.append(this.size);
            stringBuilder.append(" (to read code point prefixed 0x");
            stringBuilder.append(Integer.toHexString(b0));
            stringBuilder.append(")");
            throw new EOFException(stringBuilder.toString());
        }
        throw new EOFException();
    }

    public byte[] readByteArray() {
        try {
            return readByteArray(this.size);
        } catch (EOFException e) {
            throw new AssertionError(e);
        }
    }

    public byte[] readByteArray(long byteCount) throws EOFException {
        Util.checkOffsetAndCount(this.size, 0, byteCount);
        if (byteCount <= 2147483647L) {
            byte[] result = new byte[((int) byteCount)];
            readFully(result);
            return result;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("byteCount > Integer.MAX_VALUE: ");
        stringBuilder.append(byteCount);
        throw new IllegalArgumentException(stringBuilder.toString());
    }

    public int read(byte[] sink) {
        return read(sink, 0, sink.length);
    }

    public void readFully(byte[] sink) throws EOFException {
        int offset = 0;
        while (offset < sink.length) {
            int read = read(sink, offset, sink.length - offset);
            if (read != -1) {
                offset += read;
            } else {
                throw new EOFException();
            }
        }
    }

    public int read(byte[] sink, int offset, int byteCount) {
        Util.checkOffsetAndCount((long) sink.length, (long) offset, (long) byteCount);
        Segment s = this.head;
        if (s == null) {
            return -1;
        }
        int toCopy = Math.min(byteCount, s.limit - s.pos);
        System.arraycopy(s.data, s.pos, sink, offset, toCopy);
        s.pos += toCopy;
        this.size -= (long) toCopy;
        if (s.pos == s.limit) {
            this.head = s.pop();
            SegmentPool.recycle(s);
        }
        return toCopy;
    }

    public int read(ByteBuffer sink) throws IOException {
        Segment s = this.head;
        if (s == null) {
            return -1;
        }
        int toCopy = Math.min(sink.remaining(), s.limit - s.pos);
        sink.put(s.data, s.pos, toCopy);
        s.pos += toCopy;
        this.size -= (long) toCopy;
        if (s.pos == s.limit) {
            this.head = s.pop();
            SegmentPool.recycle(s);
        }
        return toCopy;
    }

    public final void clear() {
        try {
            skip(this.size);
        } catch (EOFException e) {
            throw new AssertionError(e);
        }
    }

    public void skip(long byteCount) throws EOFException {
        while (byteCount > 0) {
            Segment segment = this.head;
            if (segment != null) {
                int toSkip = (int) Math.min(byteCount, (long) (segment.limit - this.head.pos));
                this.size -= (long) toSkip;
                byteCount -= (long) toSkip;
                Segment segment2 = this.head;
                segment2.pos += toSkip;
                if (this.head.pos == this.head.limit) {
                    segment2 = this.head;
                    this.head = segment2.pop();
                    SegmentPool.recycle(segment2);
                }
            } else {
                throw new EOFException();
            }
        }
    }

    public Buffer write(ByteString byteString) {
        if (byteString != null) {
            byteString.write(this);
            return this;
        }
        throw new IllegalArgumentException("byteString == null");
    }

    public Buffer writeUtf8(String string) {
        return writeUtf8(string, 0, string.length());
    }

    public Buffer writeUtf8(String string, int beginIndex, int endIndex) {
        if (string == null) {
            throw new IllegalArgumentException("string == null");
        } else if (beginIndex < 0) {
            r1 = new StringBuilder();
            r1.append("beginIndex < 0: ");
            r1.append(beginIndex);
            throw new IllegalArgumentException(r1.toString());
        } else if (endIndex < beginIndex) {
            r1 = new StringBuilder();
            r1.append("endIndex < beginIndex: ");
            r1.append(endIndex);
            r1.append(" < ");
            r1.append(beginIndex);
            throw new IllegalArgumentException(r1.toString());
        } else if (endIndex <= string.length()) {
            int i = beginIndex;
            while (i < endIndex) {
                int c = string.charAt(i);
                int segmentOffset;
                int runLimit;
                if (c < 128) {
                    Segment tail = writableSegment(1);
                    byte[] data = tail.data;
                    segmentOffset = tail.limit - i;
                    runLimit = Math.min(endIndex, 8192 - segmentOffset);
                    int i2 = i + 1;
                    data[i + segmentOffset] = (byte) c;
                    while (i2 < runLimit) {
                        c = string.charAt(i2);
                        if (c >= 128) {
                            break;
                        }
                        i = i2 + 1;
                        data[i2 + segmentOffset] = (byte) c;
                        i2 = i;
                    }
                    i = (i2 + segmentOffset) - tail.limit;
                    tail.limit += i;
                    this.size += (long) i;
                    i = i2;
                } else if (c < 2048) {
                    writeByte((c >> 6) | 192);
                    writeByte(128 | (c & 63));
                    i++;
                } else {
                    if (c >= 55296) {
                        if (c <= 57343) {
                            segmentOffset = i + 1 < endIndex ? string.charAt(i + 1) : 0;
                            if (c <= 56319 && segmentOffset >= 56320) {
                                if (segmentOffset <= 57343) {
                                    runLimit = (((-55297 & c) << 10) | (-56321 & segmentOffset)) + 65536;
                                    writeByte((runLimit >> 18) | 240);
                                    writeByte(((runLimit >> 12) & 63) | 128);
                                    writeByte(((runLimit >> 6) & 63) | 128);
                                    writeByte(128 | (runLimit & 63));
                                    i += 2;
                                }
                            }
                            writeByte(63);
                            i++;
                        }
                    }
                    writeByte((c >> 12) | 224);
                    writeByte(((c >> 6) & 63) | 128);
                    writeByte(128 | (c & 63));
                    i++;
                }
            }
            return this;
        } else {
            r1 = new StringBuilder();
            r1.append("endIndex > string.length: ");
            r1.append(endIndex);
            r1.append(" > ");
            r1.append(string.length());
            throw new IllegalArgumentException(r1.toString());
        }
    }

    public Buffer writeUtf8CodePoint(int codePoint) {
        if (codePoint < 128) {
            writeByte(codePoint);
        } else if (codePoint < 2048) {
            writeByte((codePoint >> 6) | 192);
            writeByte(128 | (codePoint & 63));
        } else if (codePoint < 65536) {
            if (codePoint < 55296 || codePoint > 57343) {
                writeByte((codePoint >> 12) | 224);
                writeByte(((codePoint >> 6) & 63) | 128);
                writeByte(128 | (codePoint & 63));
            } else {
                writeByte(63);
            }
        } else if (codePoint <= 1114111) {
            writeByte((codePoint >> 18) | 240);
            writeByte(((codePoint >> 12) & 63) | 128);
            writeByte(((codePoint >> 6) & 63) | 128);
            writeByte(128 | (codePoint & 63));
        } else {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Unexpected code point: ");
            stringBuilder.append(Integer.toHexString(codePoint));
            throw new IllegalArgumentException(stringBuilder.toString());
        }
        return this;
    }

    public Buffer writeString(String string, Charset charset) {
        return writeString(string, 0, string.length(), charset);
    }

    public Buffer writeString(String string, int beginIndex, int endIndex, Charset charset) {
        if (string == null) {
            throw new IllegalArgumentException("string == null");
        } else if (beginIndex < 0) {
            r1 = new StringBuilder();
            r1.append("beginIndex < 0: ");
            r1.append(beginIndex);
            throw new IllegalAccessError(r1.toString());
        } else if (endIndex < beginIndex) {
            r1 = new StringBuilder();
            r1.append("endIndex < beginIndex: ");
            r1.append(endIndex);
            r1.append(" < ");
            r1.append(beginIndex);
            throw new IllegalArgumentException(r1.toString());
        } else if (endIndex > string.length()) {
            r1 = new StringBuilder();
            r1.append("endIndex > string.length: ");
            r1.append(endIndex);
            r1.append(" > ");
            r1.append(string.length());
            throw new IllegalArgumentException(r1.toString());
        } else if (charset == null) {
            throw new IllegalArgumentException("charset == null");
        } else if (charset.equals(Util.UTF_8)) {
            return writeUtf8(string, beginIndex, endIndex);
        } else {
            byte[] data = string.substring(beginIndex, endIndex).getBytes(charset);
            return write(data, 0, data.length);
        }
    }

    public Buffer write(byte[] source) {
        if (source != null) {
            return write(source, 0, source.length);
        }
        throw new IllegalArgumentException("source == null");
    }

    public Buffer write(byte[] source, int offset, int byteCount) {
        if (source != null) {
            Util.checkOffsetAndCount((long) source.length, (long) offset, (long) byteCount);
            int limit = offset + byteCount;
            while (offset < limit) {
                Segment tail = writableSegment(1);
                int toCopy = Math.min(limit - offset, 8192 - tail.limit);
                System.arraycopy(source, offset, tail.data, tail.limit, toCopy);
                offset += toCopy;
                tail.limit += toCopy;
            }
            this.size += (long) byteCount;
            return this;
        }
        throw new IllegalArgumentException("source == null");
    }

    public int write(ByteBuffer source) throws IOException {
        if (source != null) {
            int byteCount = source.remaining();
            int remaining = byteCount;
            while (remaining > 0) {
                Segment tail = writableSegment(1);
                int toCopy = Math.min(remaining, 8192 - tail.limit);
                source.get(tail.data, tail.limit, toCopy);
                remaining -= toCopy;
                tail.limit += toCopy;
            }
            this.size += (long) byteCount;
            return byteCount;
        }
        throw new IllegalArgumentException("source == null");
    }

    public long writeAll(Source source) throws IOException {
        if (source != null) {
            long totalBytesRead = 0;
            while (true) {
                long read = source.read(this, PlaybackStateCompat.ACTION_PLAY_FROM_URI);
                long readCount = read;
                if (read == -1) {
                    return totalBytesRead;
                }
                totalBytesRead += readCount;
            }
        } else {
            throw new IllegalArgumentException("source == null");
        }
    }

    public BufferedSink write(Source source, long byteCount) throws IOException {
        while (byteCount > 0) {
            long read = source.read(this, byteCount);
            if (read != -1) {
                byteCount -= read;
            } else {
                throw new EOFException();
            }
        }
        return this;
    }

    public Buffer writeByte(int b) {
        Segment tail = writableSegment(1);
        byte[] bArr = tail.data;
        int i = tail.limit;
        tail.limit = i + 1;
        bArr[i] = (byte) b;
        this.size++;
        return this;
    }

    public Buffer writeShort(int s) {
        Segment tail = writableSegment(2);
        byte[] data = tail.data;
        int i = tail.limit;
        int i2 = i + 1;
        data[i] = (byte) ((s >>> 8) & 255);
        i = i2 + 1;
        data[i2] = (byte) (s & 255);
        tail.limit = i;
        this.size += 2;
        return this;
    }

    public Buffer writeShortLe(int s) {
        return writeShort(Util.reverseBytesShort((short) s));
    }

    public Buffer writeInt(int i) {
        Segment tail = writableSegment(4);
        byte[] data = tail.data;
        int i2 = tail.limit;
        int i3 = i2 + 1;
        data[i2] = (byte) ((i >>> 24) & 255);
        i2 = i3 + 1;
        data[i3] = (byte) ((i >>> 16) & 255);
        i3 = i2 + 1;
        data[i2] = (byte) ((i >>> 8) & 255);
        i2 = i3 + 1;
        data[i3] = (byte) (i & 255);
        tail.limit = i2;
        this.size += 4;
        return this;
    }

    public Buffer writeIntLe(int i) {
        return writeInt(Util.reverseBytesInt(i));
    }

    public Buffer writeLong(long v) {
        Segment tail = writableSegment(8);
        byte[] data = tail.data;
        int i = tail.limit;
        int i2 = i + 1;
        data[i] = (byte) ((int) ((v >>> 56) & 255));
        i = i2 + 1;
        data[i2] = (byte) ((int) ((v >>> 48) & 255));
        i2 = i + 1;
        data[i] = (byte) ((int) ((v >>> 40) & 255));
        i = i2 + 1;
        data[i2] = (byte) ((int) ((v >>> 32) & 255));
        i2 = i + 1;
        data[i] = (byte) ((int) ((v >>> 24) & 255));
        i = i2 + 1;
        data[i2] = (byte) ((int) ((v >>> 16) & 255));
        i2 = i + 1;
        data[i] = (byte) ((int) ((v >>> 8) & 255));
        int limit = i2 + 1;
        data[i2] = (byte) ((int) (v & 255));
        tail.limit = limit;
        this.size += 8;
        return this;
    }

    public Buffer writeLongLe(long v) {
        return writeLong(Util.reverseBytesLong(v));
    }

    public Buffer writeDecimalLong(long v) {
        if (v == 0) {
            return writeByte(48);
        }
        boolean negative = false;
        if (v < 0) {
            v = -v;
            if (v < 0) {
                return writeUtf8("-9223372036854775808");
            }
            negative = true;
        }
        int width = v < 100000000 ? v < 10000 ? v < 100 ? v < 10 ? 1 : 2 : v < 1000 ? 3 : 4 : v < 1000000 ? v < 100000 ? 5 : 6 : v < 10000000 ? 7 : 8 : v < 1000000000000L ? v < 10000000000L ? v < 1000000000 ? 9 : 10 : v < 100000000000L ? 11 : 12 : v < 1000000000000000L ? v < 10000000000000L ? 13 : v < 100000000000000L ? 14 : 15 : v < 100000000000000000L ? v < 10000000000000000L ? 16 : 17 : v < 1000000000000000000L ? 18 : 19;
        if (negative) {
            width++;
        }
        Segment tail = writableSegment(width);
        byte[] data = tail.data;
        int pos = tail.limit + width;
        while (v != 0) {
            pos--;
            data[pos] = DIGITS[(int) (v % 10)];
            v /= 10;
        }
        if (negative) {
            data[pos - 1] = (byte) 45;
        }
        tail.limit += width;
        this.size += (long) width;
        return this;
    }

    public Buffer writeHexadecimalUnsignedLong(long v) {
        if (v == 0) {
            return writeByte(48);
        }
        int width = (Long.numberOfTrailingZeros(Long.highestOneBit(v)) / 4) + 1;
        Segment tail = writableSegment(width);
        byte[] data = tail.data;
        int start = tail.limit;
        for (int pos = (tail.limit + width) - 1; pos >= start; pos--) {
            data[pos] = DIGITS[(int) (15 & v)];
            v >>>= 4;
        }
        tail.limit += width;
        this.size += (long) width;
        return this;
    }

    Segment writableSegment(int minimumCapacity) {
        if (minimumCapacity < 1 || minimumCapacity > 8192) {
            throw new IllegalArgumentException();
        }
        Segment tail = this.head;
        if (tail == null) {
            this.head = SegmentPool.take();
            Segment segment = this.head;
            segment.prev = segment;
            segment.next = segment;
            return segment;
        }
        tail = tail.prev;
        if (tail.limit + minimumCapacity <= 8192) {
            if (tail.owner) {
                return tail;
            }
        }
        tail = tail.push(SegmentPool.take());
        return tail;
    }

    public void write(Buffer source, long byteCount) {
        if (source == null) {
            throw new IllegalArgumentException("source == null");
        } else if (source != this) {
            Util.checkOffsetAndCount(source.size, 0, byteCount);
            while (byteCount > 0) {
                Segment segment;
                if (byteCount < ((long) (source.head.limit - source.head.pos))) {
                    segment = this.head;
                    segment = segment != null ? segment.prev : null;
                    if (segment != null && segment.owner) {
                        if ((((long) segment.limit) + byteCount) - ((long) (segment.shared ? 0 : segment.pos)) <= PlaybackStateCompat.ACTION_PLAY_FROM_URI) {
                            source.head.writeTo(segment, (int) byteCount);
                            source.size -= byteCount;
                            this.size += byteCount;
                            return;
                        }
                    }
                    source.head = source.head.split((int) byteCount);
                }
                segment = source.head;
                long movedByteCount = (long) (segment.limit - segment.pos);
                source.head = segment.pop();
                Segment segment2 = this.head;
                if (segment2 == null) {
                    this.head = segment;
                    segment2 = this.head;
                    segment2.prev = segment2;
                    segment2.next = segment2;
                } else {
                    segment2.prev.push(segment).compact();
                }
                source.size -= movedByteCount;
                this.size += movedByteCount;
                byteCount -= movedByteCount;
            }
        } else {
            throw new IllegalArgumentException("source == this");
        }
    }

    public long read(Buffer sink, long byteCount) {
        if (sink == null) {
            throw new IllegalArgumentException("sink == null");
        } else if (byteCount >= 0) {
            long j = this.size;
            if (j == 0) {
                return -1;
            }
            if (byteCount > j) {
                byteCount = this.size;
            }
            sink.write(this, byteCount);
            return byteCount;
        } else {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("byteCount < 0: ");
            stringBuilder.append(byteCount);
            throw new IllegalArgumentException(stringBuilder.toString());
        }
    }

    public long indexOf(byte b) {
        return indexOf(b, 0, Long.MAX_VALUE);
    }

    public long indexOf(byte b, long fromIndex) {
        return indexOf(b, fromIndex, Long.MAX_VALUE);
    }

    public long indexOf(byte b, long fromIndex, long toIndex) {
        if (fromIndex < 0 || toIndex < fromIndex) {
            throw new IllegalArgumentException(String.format("size=%s fromIndex=%s toIndex=%s", new Object[]{Long.valueOf(this.size), Long.valueOf(fromIndex), Long.valueOf(toIndex)}));
        }
        if (toIndex > this.size) {
            toIndex = this.size;
        }
        if (fromIndex == toIndex) {
            return -1;
        }
        Segment s = this.head;
        if (s == null) {
            return -1;
        }
        long offset;
        if (this.size - fromIndex >= fromIndex) {
            offset = 0;
            while (true) {
                long j = ((long) (s.limit - s.pos)) + offset;
                long nextOffset = j;
                if (j >= fromIndex) {
                    break;
                }
                s = s.next;
                offset = nextOffset;
            }
        } else {
            offset = this.size;
            while (offset > fromIndex) {
                s = s.prev;
                offset -= (long) (s.limit - s.pos);
            }
        }
        while (offset < toIndex) {
            byte[] data = s.data;
            int limit = (int) Math.min((long) s.limit, (((long) s.pos) + toIndex) - offset);
            for (int pos = (int) ((((long) s.pos) + fromIndex) - offset); pos < limit; pos++) {
                if (data[pos] == b) {
                    return ((long) (pos - s.pos)) + offset;
                }
            }
            offset += (long) (s.limit - s.pos);
            fromIndex = offset;
            s = s.next;
        }
        return -1;
    }

    public long indexOf(ByteString bytes) throws IOException {
        return indexOf(bytes, 0);
    }

    public long indexOf(ByteString bytes, long fromIndex) throws IOException {
        Buffer buffer = this;
        ByteString byteString;
        if (bytes.size() == 0) {
            byteString = bytes;
            throw new IllegalArgumentException("bytes is empty");
        } else if (fromIndex >= 0) {
            Segment s = buffer.head;
            if (s == null) {
                return -1;
            }
            long offset;
            Segment s2;
            if (buffer.size - fromIndex >= fromIndex) {
                offset = 0;
                while (true) {
                    long j = ((long) (s.limit - s.pos)) + offset;
                    long nextOffset = j;
                    if (j >= fromIndex) {
                        break;
                    }
                    s = s.next;
                    offset = nextOffset;
                }
            } else {
                offset = buffer.size;
                while (offset > fromIndex) {
                    s = s.prev;
                    offset -= (long) (s.limit - s.pos);
                }
            }
            byte b0 = bytes.getByte(0);
            int bytesSize = bytes.size();
            long resultLimit = 1 + (buffer.size - ((long) bytesSize));
            long fromIndex2 = fromIndex;
            Segment s3 = s;
            long offset2 = offset;
            while (offset2 < resultLimit) {
                int segmentLimit;
                byte[] data;
                byte[] data2 = s3.data;
                int segmentLimit2 = (int) Math.min((long) s3.limit, (((long) s3.pos) + resultLimit) - offset2);
                int pos = (int) ((((long) s3.pos) + fromIndex2) - offset2);
                while (pos < segmentLimit2) {
                    int pos2;
                    if (data2[pos] == b0) {
                        pos2 = pos;
                        segmentLimit = segmentLimit2;
                        data = data2;
                        s2 = s3;
                        if (rangeEquals(s3, pos + 1, bytes, 1, bytesSize)) {
                            return ((long) (pos2 - s2.pos)) + offset2;
                        }
                    } else {
                        pos2 = pos;
                        segmentLimit = segmentLimit2;
                        data = data2;
                        s2 = s3;
                    }
                    pos = pos2 + 1;
                    s3 = s2;
                    segmentLimit2 = segmentLimit;
                    data2 = data;
                }
                segmentLimit = segmentLimit2;
                data = data2;
                s2 = s3;
                offset2 += (long) (s2.limit - s2.pos);
                fromIndex2 = offset2;
                s3 = s2.next;
            }
            s2 = s3;
            return -1;
        } else {
            byteString = bytes;
            throw new IllegalArgumentException("fromIndex < 0");
        }
    }

    public long indexOfElement(ByteString targetBytes) {
        return indexOfElement(targetBytes, 0);
    }

    public long indexOfElement(ByteString targetBytes, long fromIndex) {
        Buffer buffer = this;
        ByteString byteString = targetBytes;
        if (fromIndex >= 0) {
            Segment s = buffer.head;
            if (s == null) {
                return -1;
            }
            long offset;
            long nextOffset;
            if (buffer.size - fromIndex >= fromIndex) {
                offset = 0;
                while (true) {
                    long j = ((long) (s.limit - s.pos)) + offset;
                    nextOffset = j;
                    if (j >= fromIndex) {
                        break;
                    }
                    s = s.next;
                    offset = nextOffset;
                }
            } else {
                offset = buffer.size;
                while (offset > fromIndex) {
                    s = s.prev;
                    offset -= (long) (s.limit - s.pos);
                }
            }
            int i = 0;
            int pos;
            int limit;
            byte b;
            if (targetBytes.size() == 2) {
                byte b0 = byteString.getByte(0);
                byte b1 = byteString.getByte((byte) 1);
                nextOffset = fromIndex;
                while (offset < buffer.size) {
                    byte[] data = s.data;
                    pos = (int) ((((long) s.pos) + nextOffset) - offset);
                    limit = s.limit;
                    while (pos < limit) {
                        b = data[pos];
                        if (b != b0) {
                            if (b != b1) {
                                pos++;
                            }
                        }
                        return ((long) (pos - s.pos)) + offset;
                    }
                    offset += (long) (s.limit - s.pos);
                    nextOffset = offset;
                    s = s.next;
                }
            } else {
                byte[] targetByteArray = targetBytes.internalArray();
                long fromIndex2 = fromIndex;
                while (offset < buffer.size) {
                    byte[] data2 = s.data;
                    pos = (int) ((((long) s.pos) + fromIndex2) - offset);
                    limit = s.limit;
                    while (pos < limit) {
                        b = data2[pos];
                        int length = targetByteArray.length;
                        while (i < length) {
                            if (b == targetByteArray[i]) {
                                return ((long) (pos - s.pos)) + offset;
                            }
                            i++;
                            buffer = this;
                            byteString = targetBytes;
                        }
                        pos++;
                        buffer = this;
                        byteString = targetBytes;
                        i = 0;
                    }
                    offset += (long) (s.limit - s.pos);
                    fromIndex2 = offset;
                    s = s.next;
                    buffer = this;
                    byteString = targetBytes;
                    i = 0;
                }
                nextOffset = fromIndex2;
            }
            return -1;
        }
        throw new IllegalArgumentException("fromIndex < 0");
    }

    public boolean rangeEquals(long offset, ByteString bytes) {
        return rangeEquals(offset, bytes, 0, bytes.size());
    }

    public boolean rangeEquals(long offset, ByteString bytes, int bytesOffset, int byteCount) {
        if (offset >= 0 && bytesOffset >= 0 && byteCount >= 0 && this.size - offset >= ((long) byteCount)) {
            if (bytes.size() - bytesOffset >= byteCount) {
                for (int i = 0; i < byteCount; i++) {
                    if (getByte(((long) i) + offset) != bytes.getByte(bytesOffset + i)) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }

    private boolean rangeEquals(Segment segment, int segmentPos, ByteString bytes, int bytesOffset, int bytesLimit) {
        int segmentLimit = segment.limit;
        byte[] data = segment.data;
        for (int i = bytesOffset; i < bytesLimit; i++) {
            if (segmentPos == segmentLimit) {
                segment = segment.next;
                data = segment.data;
                segmentPos = segment.pos;
                segmentLimit = segment.limit;
            }
            if (data[segmentPos] != bytes.getByte(i)) {
                return false;
            }
            segmentPos++;
        }
        return true;
    }

    public void flush() {
    }

    public boolean isOpen() {
        return true;
    }

    public void close() {
    }

    public Timeout timeout() {
        return Timeout.NONE;
    }

    List<Integer> segmentSizes() {
        if (this.head == null) {
            return Collections.emptyList();
        }
        List<Integer> result = new ArrayList();
        result.add(Integer.valueOf(this.head.limit - this.head.pos));
        for (Segment s = this.head.next; s != this.head; s = s.next) {
            result.add(Integer.valueOf(s.limit - s.pos));
        }
        return result;
    }

    public final ByteString md5() {
        return digest("MD5");
    }

    public final ByteString sha1() {
        return digest("SHA-1");
    }

    public final ByteString sha256() {
        return digest("SHA-256");
    }

    public final ByteString sha512() {
        return digest("SHA-512");
    }

    private ByteString digest(String algorithm) {
        try {
            MessageDigest messageDigest = MessageDigest.getInstance(algorithm);
            if (this.head != null) {
                messageDigest.update(this.head.data, this.head.pos, this.head.limit - this.head.pos);
                for (Segment s = this.head.next; s != this.head; s = s.next) {
                    messageDigest.update(s.data, s.pos, s.limit - s.pos);
                }
            }
            return ByteString.of(messageDigest.digest());
        } catch (NoSuchAlgorithmException e) {
            throw new AssertionError();
        }
    }

    public final ByteString hmacSha1(ByteString key) {
        return hmac("HmacSHA1", key);
    }

    public final ByteString hmacSha256(ByteString key) {
        return hmac("HmacSHA256", key);
    }

    public final ByteString hmacSha512(ByteString key) {
        return hmac("HmacSHA512", key);
    }

    private ByteString hmac(String algorithm, ByteString key) {
        try {
            Mac mac = Mac.getInstance(algorithm);
            mac.init(new SecretKeySpec(key.toByteArray(), algorithm));
            if (this.head != null) {
                mac.update(this.head.data, this.head.pos, this.head.limit - this.head.pos);
                for (Segment s = this.head.next; s != this.head; s = s.next) {
                    mac.update(s.data, s.pos, s.limit - s.pos);
                }
            }
            return ByteString.of(mac.doFinal());
        } catch (NoSuchAlgorithmException e) {
            throw new AssertionError();
        } catch (InvalidKeyException e2) {
            throw new IllegalArgumentException(e2);
        }
    }

    public boolean equals(Object o) {
        Buffer buffer = o;
        if (this == buffer) {
            return true;
        }
        if (!(buffer instanceof Buffer)) {
            return false;
        }
        Buffer that = buffer;
        long j = r0.size;
        if (j != that.size) {
            return false;
        }
        if (j == 0) {
            return true;
        }
        Segment sa = r0.head;
        Segment sb = that.head;
        int posA = sa.pos;
        int posB = sb.pos;
        long pos = 0;
        while (pos < r0.size) {
            long count = (long) Math.min(sa.limit - posA, sb.limit - posB);
            int i = 0;
            while (((long) i) < count) {
                int posA2 = posA + 1;
                int posB2 = posB + 1;
                if (sa.data[posA] != sb.data[posB]) {
                    return false;
                }
                i++;
                posA = posA2;
                posB = posB2;
            }
            if (posA == sa.limit) {
                sa = sa.next;
                posA = sa.pos;
            }
            if (posB == sb.limit) {
                sb = sb.next;
                posB = sb.pos;
            }
            pos += count;
        }
        return true;
    }

    public int hashCode() {
        Segment s = this.head;
        if (s == null) {
            return 0;
        }
        int result = 1;
        while (true) {
            for (int pos = s.pos; pos < s.limit; pos++) {
                result = (result * 31) + s.data[pos];
            }
            s = s.next;
            if (s == this.head) {
                return result;
            }
        }
    }

    public String toString() {
        return snapshot().toString();
    }

    public Buffer clone() {
        Buffer result = new Buffer();
        if (this.size == 0) {
            return result;
        }
        result.head = this.head.sharedCopy();
        Segment segment = result.head;
        segment.prev = segment;
        segment.next = segment;
        for (segment = this.head.next; segment != this.head; segment = segment.next) {
            result.head.prev.push(segment.sharedCopy());
        }
        result.size = this.size;
        return result;
    }

    public final ByteString snapshot() {
        long j = this.size;
        if (j <= 2147483647L) {
            return snapshot((int) j);
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("size > Integer.MAX_VALUE: ");
        stringBuilder.append(this.size);
        throw new IllegalArgumentException(stringBuilder.toString());
    }

    public final ByteString snapshot(int byteCount) {
        if (byteCount == 0) {
            return ByteString.EMPTY;
        }
        return new SegmentedByteString(this, byteCount);
    }

    public final UnsafeCursor readUnsafe() {
        return readUnsafe(new UnsafeCursor());
    }

    public final UnsafeCursor readUnsafe(UnsafeCursor unsafeCursor) {
        if (unsafeCursor.buffer == null) {
            unsafeCursor.buffer = this;
            unsafeCursor.readWrite = false;
            return unsafeCursor;
        }
        throw new IllegalStateException("already attached to a buffer");
    }

    public final UnsafeCursor readAndWriteUnsafe() {
        return readAndWriteUnsafe(new UnsafeCursor());
    }

    public final UnsafeCursor readAndWriteUnsafe(UnsafeCursor unsafeCursor) {
        if (unsafeCursor.buffer == null) {
            unsafeCursor.buffer = this;
            unsafeCursor.readWrite = true;
            return unsafeCursor;
        }
        throw new IllegalStateException("already attached to a buffer");
    }
}
