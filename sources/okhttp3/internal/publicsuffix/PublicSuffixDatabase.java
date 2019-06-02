package okhttp3.internal.publicsuffix;

import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.net.IDN;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicBoolean;
import okhttp3.internal.Util;
import okhttp3.internal.platform.Platform;
import okio.GzipSource;
import okio.Okio;

public final class PublicSuffixDatabase {
    private static final String[] EMPTY_RULE = new String[0];
    private static final byte EXCEPTION_MARKER = (byte) 33;
    private static final String[] PREVAILING_RULE = new String[]{"*"};
    public static final String PUBLIC_SUFFIX_RESOURCE = "publicsuffixes.gz";
    private static final byte[] WILDCARD_LABEL = new byte[]{(byte) 42};
    private static final PublicSuffixDatabase instance = new PublicSuffixDatabase();
    private final AtomicBoolean listRead = new AtomicBoolean(false);
    private byte[] publicSuffixExceptionListBytes;
    private byte[] publicSuffixListBytes;
    private final CountDownLatch readCompleteLatch = new CountDownLatch(1);

    public static PublicSuffixDatabase get() {
        return instance;
    }

    public String getEffectiveTldPlusOne(String domain) {
        if (domain != null) {
            String[] domainLabels = IDN.toUnicode(domain).split("\\.");
            String[] rule = findMatchingRule(domainLabels);
            if (domainLabels.length == rule.length && rule[0].charAt(0) != '!') {
                return null;
            }
            int firstLabelOffset;
            if (rule[0].charAt(0) == '!') {
                firstLabelOffset = domainLabels.length - rule.length;
            } else {
                firstLabelOffset = domainLabels.length - (rule.length + 1);
            }
            StringBuilder effectiveTldPlusOne = new StringBuilder();
            String[] punycodeLabels = domain.split("\\.");
            for (int i = firstLabelOffset; i < punycodeLabels.length; i++) {
                effectiveTldPlusOne.append(punycodeLabels[i]);
                effectiveTldPlusOne.append('.');
            }
            effectiveTldPlusOne.deleteCharAt(effectiveTldPlusOne.length() - 1);
            return effectiveTldPlusOne.toString();
        }
        throw new NullPointerException("domain == null");
    }

    private String[] findMatchingRule(String[] domainLabels) {
        String rule;
        int labelIndex;
        String rule2;
        if (this.listRead.get() || !this.listRead.compareAndSet(false, true)) {
            try {
                this.readCompleteLatch.await();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        } else {
            readTheListUninterruptibly();
        }
        synchronized (this) {
            if (this.publicSuffixListBytes != null) {
            } else {
                throw new IllegalStateException("Unable to load publicsuffixes.gz resource from the classpath.");
            }
        }
        byte[][] domainLabelsUtf8Bytes = new byte[domainLabels.length][];
        for (int i = 0; i < domainLabels.length; i++) {
            domainLabelsUtf8Bytes[i] = domainLabels[i].getBytes(Util.UTF_8);
        }
        String exactMatch = null;
        for (int i2 = 0; i2 < domainLabelsUtf8Bytes.length; i2++) {
            rule = binarySearchBytes(this.publicSuffixListBytes, domainLabelsUtf8Bytes, i2);
            if (rule != null) {
                exactMatch = rule;
                break;
            }
        }
        String wildcardMatch = null;
        if (domainLabelsUtf8Bytes.length > 1) {
            byte[][] labelsWithWildcard = (byte[][]) domainLabelsUtf8Bytes.clone();
            for (labelIndex = 0; labelIndex < labelsWithWildcard.length - 1; labelIndex++) {
                labelsWithWildcard[labelIndex] = WILDCARD_LABEL;
                rule2 = binarySearchBytes(this.publicSuffixListBytes, labelsWithWildcard, labelIndex);
                if (rule2 != null) {
                    wildcardMatch = rule2;
                    break;
                }
            }
        }
        rule = null;
        if (wildcardMatch != null) {
            for (labelIndex = 0; labelIndex < domainLabelsUtf8Bytes.length - 1; labelIndex++) {
                rule2 = binarySearchBytes(this.publicSuffixExceptionListBytes, domainLabelsUtf8Bytes, labelIndex);
                if (rule2 != null) {
                    rule = rule2;
                    break;
                }
            }
        }
        if (rule != null) {
            String exception = new StringBuilder();
            exception.append("!");
            exception.append(rule);
            return exception.toString().split("\\.");
        } else if (exactMatch == null && wildcardMatch == null) {
            return PREVAILING_RULE;
        } else {
            String[] exactRuleLabels;
            String[] wildcardRuleLabels;
            String[] strArr;
            if (exactMatch != null) {
                exactRuleLabels = exactMatch.split("\\.");
            } else {
                exactRuleLabels = EMPTY_RULE;
            }
            if (wildcardMatch != null) {
                wildcardRuleLabels = wildcardMatch.split("\\.");
            } else {
                wildcardRuleLabels = EMPTY_RULE;
            }
            if (exactRuleLabels.length > wildcardRuleLabels.length) {
                strArr = exactRuleLabels;
            } else {
                strArr = wildcardRuleLabels;
            }
            return strArr;
        }
    }

    private static String binarySearchBytes(byte[] bytesToSearch, byte[][] labels, int labelIndex) {
        byte[] bArr = bytesToSearch;
        byte[][] bArr2 = labels;
        int low = 0;
        int high = bArr.length;
        while (low < high) {
            int mid = (low + high) / 2;
            while (mid > -1 && bArr[mid] != (byte) 10) {
                mid--;
            }
            mid++;
            int end = 1;
            while (bArr[mid + end] != (byte) 10) {
                end++;
            }
            int publicSuffixLength = (mid + end) - mid;
            int currentLabelIndex = labelIndex;
            int currentLabelByteIndex = 0;
            int publicSuffixByteIndex = 0;
            boolean expectDot = false;
            while (true) {
                int byte0;
                int low2;
                int byte1;
                int i;
                if (expectDot) {
                    byte0 = 46;
                    expectDot = false;
                } else {
                    byte0 = bArr2[currentLabelIndex][currentLabelByteIndex] & 255;
                }
                int compareResult = byte0 - (bArr[mid + publicSuffixByteIndex] & 255);
                if (compareResult != 0) {
                    break;
                }
                publicSuffixByteIndex++;
                currentLabelByteIndex++;
                if (publicSuffixByteIndex == publicSuffixLength) {
                    break;
                }
                if (bArr2[currentLabelIndex].length != currentLabelByteIndex) {
                    low2 = low;
                } else if (currentLabelIndex == bArr2.length - 1) {
                    break;
                } else {
                    low2 = low;
                    currentLabelIndex++;
                    expectDot = true;
                    currentLabelByteIndex = -1;
                }
                low = low2;
                if (compareResult < 0) {
                    high = mid - 1;
                } else if (compareResult <= 0) {
                    low = (mid + end) + 1;
                } else {
                    byte0 = publicSuffixLength - publicSuffixByteIndex;
                    byte1 = bArr2[currentLabelIndex].length - currentLabelByteIndex;
                    i = currentLabelIndex + 1;
                    while (true) {
                        low2 = low;
                        if (i < bArr2.length) {
                            break;
                        }
                        byte1 += bArr2[i].length;
                        i++;
                        low = low2;
                    }
                    if (byte1 < byte0) {
                        high = mid - 1;
                        low = low2;
                    } else if (byte1 > byte0) {
                        return new String(bArr, mid, publicSuffixLength, Util.UTF_8);
                    } else {
                        low = (mid + end) + 1;
                    }
                }
            }
            if (compareResult < 0) {
                high = mid - 1;
            } else if (compareResult <= 0) {
                byte0 = publicSuffixLength - publicSuffixByteIndex;
                byte1 = bArr2[currentLabelIndex].length - currentLabelByteIndex;
                i = currentLabelIndex + 1;
                while (true) {
                    low2 = low;
                    if (i < bArr2.length) {
                        break;
                    }
                    byte1 += bArr2[i].length;
                    i++;
                    low = low2;
                }
                if (byte1 < byte0) {
                    high = mid - 1;
                    low = low2;
                } else if (byte1 > byte0) {
                    return new String(bArr, mid, publicSuffixLength, Util.UTF_8);
                } else {
                    low = (mid + end) + 1;
                }
            } else {
                low = (mid + end) + 1;
            }
        }
        return null;
    }

    private void readTheListUninterruptibly() {
        boolean interrupted = false;
        while (true) {
            try {
                readTheList();
                break;
            } catch (InterruptedIOException e) {
                Thread.interrupted();
                interrupted = true;
            } catch (IOException e2) {
                Platform.get().log(5, "Failed to read public suffix list", e2);
                if (interrupted) {
                    Thread.currentThread().interrupt();
                }
                return;
            } catch (Throwable th) {
                if (interrupted) {
                    Thread.currentThread().interrupt();
                }
            }
        }
        if (interrupted) {
            Thread.currentThread().interrupt();
        }
    }

    private void readTheList() throws IOException {
        InputStream resource = PublicSuffixDatabase.class.getResourceAsStream(PUBLIC_SUFFIX_RESOURCE);
        if (resource != null) {
            Closeable bufferedSource = Okio.buffer(new GzipSource(Okio.source(resource)));
            try {
                byte[] publicSuffixListBytes = new byte[bufferedSource.readInt()];
                bufferedSource.readFully(publicSuffixListBytes);
                byte[] publicSuffixExceptionListBytes = new byte[bufferedSource.readInt()];
                bufferedSource.readFully(publicSuffixExceptionListBytes);
                synchronized (this) {
                    this.publicSuffixListBytes = publicSuffixListBytes;
                    this.publicSuffixExceptionListBytes = publicSuffixExceptionListBytes;
                }
                this.readCompleteLatch.countDown();
            } finally {
                Util.closeQuietly(bufferedSource);
            }
        }
    }

    void setListBytes(byte[] publicSuffixListBytes, byte[] publicSuffixExceptionListBytes) {
        this.publicSuffixListBytes = publicSuffixListBytes;
        this.publicSuffixExceptionListBytes = publicSuffixExceptionListBytes;
        this.listRead.set(true);
        this.readCompleteLatch.countDown();
    }
}
