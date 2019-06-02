package okio;

public final class Utf8 {
    private Utf8() {
    }

    public static long size(String string) {
        return size(string, 0, string.length());
    }

    public static long size(String string, int beginIndex, int endIndex) {
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
            long result = 0;
            int i = beginIndex;
            while (i < endIndex) {
                int c = string.charAt(i);
                if (c < 128) {
                    result++;
                    i++;
                } else if (c < 2048) {
                    result += 2;
                    i++;
                } else {
                    if (c >= 55296) {
                        if (c <= 57343) {
                            int low = i + 1 < endIndex ? string.charAt(i + 1) : 0;
                            if (c <= 56319 && low >= 56320) {
                                if (low <= 57343) {
                                    result += 4;
                                    i += 2;
                                }
                            }
                            result++;
                            i++;
                        }
                    }
                    result += 3;
                    i++;
                }
            }
            return result;
        } else {
            r1 = new StringBuilder();
            r1.append("endIndex > string.length: ");
            r1.append(endIndex);
            r1.append(" > ");
            r1.append(string.length());
            throw new IllegalArgumentException(r1.toString());
        }
    }
}
