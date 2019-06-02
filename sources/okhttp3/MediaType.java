package okhttp3;

import java.nio.charset.Charset;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.annotation.Nullable;

public final class MediaType {
    private static final Pattern PARAMETER = Pattern.compile(";\\s*(?:([a-zA-Z0-9-!#$%&'*+.^_`{|}~]+)=(?:([a-zA-Z0-9-!#$%&'*+.^_`{|}~]+)|\"([^\"]*)\"))?");
    private static final String QUOTED = "\"([^\"]*)\"";
    private static final String TOKEN = "([a-zA-Z0-9-!#$%&'*+.^_`{|}~]+)";
    private static final Pattern TYPE_SUBTYPE = Pattern.compile("([a-zA-Z0-9-!#$%&'*+.^_`{|}~]+)/([a-zA-Z0-9-!#$%&'*+.^_`{|}~]+)");
    @Nullable
    private final String charset;
    private final String mediaType;
    private final String subtype;
    private final String type;

    private MediaType(String mediaType, String type, String subtype, @Nullable String charset) {
        this.mediaType = mediaType;
        this.type = type;
        this.subtype = subtype;
        this.charset = charset;
    }

    public static MediaType get(String string) {
        Matcher typeSubtype = TYPE_SUBTYPE.matcher(string);
        if (typeSubtype.lookingAt()) {
            String type = typeSubtype.group(1).toLowerCase(Locale.US);
            String subtype = typeSubtype.group(2).toLowerCase(Locale.US);
            String charset = null;
            Matcher parameter = PARAMETER.matcher(string);
            int s = typeSubtype.end();
            while (s < string.length()) {
                parameter.region(s, string.length());
                StringBuilder stringBuilder;
                if (parameter.lookingAt()) {
                    String name = parameter.group(1);
                    if (name != null) {
                        if (name.equalsIgnoreCase("charset")) {
                            String charsetParameter;
                            String token = parameter.group(2);
                            if (token == null) {
                                charsetParameter = parameter.group(3);
                            } else if (token.startsWith("'") && token.endsWith("'") && token.length() > 2) {
                                charsetParameter = token.substring(1, token.length() - 1);
                            } else {
                                charsetParameter = token;
                            }
                            if (charset != null) {
                                if (!charsetParameter.equalsIgnoreCase(charset)) {
                                    stringBuilder = new StringBuilder();
                                    stringBuilder.append("Multiple charsets defined: \"");
                                    stringBuilder.append(charset);
                                    stringBuilder.append("\" and: \"");
                                    stringBuilder.append(charsetParameter);
                                    stringBuilder.append("\" for: \"");
                                    stringBuilder.append(string);
                                    stringBuilder.append('\"');
                                    throw new IllegalArgumentException(stringBuilder.toString());
                                }
                            }
                            charset = charsetParameter;
                            s = parameter.end();
                        }
                    }
                    s = parameter.end();
                } else {
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Parameter is not formatted correctly: \"");
                    stringBuilder.append(string.substring(s));
                    stringBuilder.append("\" for: \"");
                    stringBuilder.append(string);
                    stringBuilder.append('\"');
                    throw new IllegalArgumentException(stringBuilder.toString());
                }
            }
            return new MediaType(string, type, subtype, charset);
        }
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append("No subtype found for: \"");
        stringBuilder2.append(string);
        stringBuilder2.append('\"');
        throw new IllegalArgumentException(stringBuilder2.toString());
    }

    @Nullable
    public static MediaType parse(String string) {
        try {
            return get(string);
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    public String type() {
        return this.type;
    }

    public String subtype() {
        return this.subtype;
    }

    @Nullable
    public Charset charset() {
        return charset(null);
    }

    @Nullable
    public Charset charset(@Nullable Charset defaultValue) {
        try {
            return this.charset != null ? Charset.forName(this.charset) : defaultValue;
        } catch (IllegalArgumentException e) {
            return defaultValue;
        }
    }

    public String toString() {
        return this.mediaType;
    }

    public boolean equals(@Nullable Object other) {
        return (other instanceof MediaType) && ((MediaType) other).mediaType.equals(this.mediaType);
    }

    public int hashCode() {
        return this.mediaType.hashCode();
    }
}
