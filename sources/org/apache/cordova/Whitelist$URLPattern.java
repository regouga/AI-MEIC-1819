package org.apache.cordova;

import android.net.Uri;
import com.ipaulpro.afilechooser.utils.FileUtils;
import java.net.MalformedURLException;
import java.util.regex.Pattern;

class Whitelist$URLPattern {
    public Pattern host;
    public Pattern path;
    public Integer port;
    public Pattern scheme;

    private String regexFromPattern(String pattern, boolean allowWildcards) {
        String toReplace = "\\.[]{}()^$?+|";
        StringBuilder regex = new StringBuilder();
        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern.charAt(i);
            if (c == '*' && allowWildcards) {
                regex.append(FileUtils.HIDDEN_PREFIX);
            } else if ("\\.[]{}()^$?+|".indexOf(c) > -1) {
                regex.append('\\');
            }
            regex.append(c);
        }
        return regex.toString();
    }

    public Whitelist$URLPattern(String scheme, String host, String port, String path) throws MalformedURLException {
        if (scheme != null) {
            try {
                if (!"*".equals(scheme)) {
                    this.scheme = Pattern.compile(regexFromPattern(scheme, false), 2);
                    if ("*".equals(host)) {
                        this.host = null;
                    } else if (host.startsWith("*.")) {
                        this.host = Pattern.compile(regexFromPattern(host, false), 2);
                    } else {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("([a-z0-9.-]*\\.)?");
                        stringBuilder.append(regexFromPattern(host.substring(2), false));
                        this.host = Pattern.compile(stringBuilder.toString(), 2);
                    }
                    if (port != null) {
                        if ("*".equals(port)) {
                            this.port = Integer.valueOf(Integer.parseInt(port, 10));
                            if (path != null) {
                                if (!"/*".equals(path)) {
                                    this.path = Pattern.compile(regexFromPattern(path, true));
                                }
                            }
                            this.path = null;
                        }
                    }
                    this.port = null;
                    if (path != null) {
                        if (!"/*".equals(path)) {
                            this.path = Pattern.compile(regexFromPattern(path, true));
                        }
                    }
                    this.path = null;
                }
            } catch (NumberFormatException e) {
                throw new MalformedURLException("Port must be a number");
            }
        }
        this.scheme = null;
        if ("*".equals(host)) {
            this.host = null;
        } else if (host.startsWith("*.")) {
            this.host = Pattern.compile(regexFromPattern(host, false), 2);
        } else {
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("([a-z0-9.-]*\\.)?");
            stringBuilder2.append(regexFromPattern(host.substring(2), false));
            this.host = Pattern.compile(stringBuilder2.toString(), 2);
        }
        if (port != null) {
            if ("*".equals(port)) {
                this.port = Integer.valueOf(Integer.parseInt(port, 10));
                if (path != null) {
                    if (!"/*".equals(path)) {
                        this.path = Pattern.compile(regexFromPattern(path, true));
                    }
                }
                this.path = null;
            }
        }
        this.port = null;
        if (path != null) {
            if (!"/*".equals(path)) {
                this.path = Pattern.compile(regexFromPattern(path, true));
            }
        }
        this.path = null;
    }

    public boolean matches(Uri uri) {
        boolean z = false;
        try {
            if (this.scheme != null) {
                if (!this.scheme.matcher(uri.getScheme()).matches()) {
                    return z;
                }
            }
            if (this.host != null) {
                if (!this.host.matcher(uri.getHost()).matches()) {
                    return z;
                }
            }
            if (this.port != null) {
                if (!this.port.equals(Integer.valueOf(uri.getPort()))) {
                    return z;
                }
            }
            if (this.path != null) {
                if (this.path.matcher(uri.getPath()).matches()) {
                }
                return z;
            }
            z = true;
            return z;
        } catch (Exception e) {
            LOG.d(Whitelist.TAG, e.toString());
            return false;
        }
    }
}
