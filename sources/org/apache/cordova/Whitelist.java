package org.apache.cordova;

import android.net.Uri;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Whitelist {
    public static final String TAG = "Whitelist";
    private ArrayList<Whitelist$URLPattern> whiteList = new ArrayList();

    public void addWhiteListEntry(String origin, boolean subdomains) {
        if (this.whiteList != null) {
            try {
                if (origin.compareTo("*") == 0) {
                    LOG.d(TAG, "Unlimited access to network resources");
                    this.whiteList = null;
                } else {
                    Matcher m = Pattern.compile("^((\\*|[A-Za-z-]+):(//)?)?(\\*|((\\*\\.)?[^*/:]+))?(:(\\d+))?(/.*)?").matcher(origin);
                    if (m.matches()) {
                        String scheme = m.group(2);
                        String host = m.group(4);
                        if (("file".equals(scheme) || "content".equals(scheme)) && host == null) {
                            host = "*";
                        }
                        String port = m.group(8);
                        String path = m.group(9);
                        if (scheme == null) {
                            this.whiteList.add(new Whitelist$URLPattern("http", host, port, path));
                            this.whiteList.add(new Whitelist$URLPattern("https", host, port, path));
                        } else {
                            this.whiteList.add(new Whitelist$URLPattern(scheme, host, port, path));
                        }
                    }
                }
            } catch (Exception e) {
                LOG.d(TAG, "Failed to add origin %s", new Object[]{origin});
            }
        }
    }

    public boolean isUrlWhiteListed(String uri) {
        if (this.whiteList == null) {
            return true;
        }
        Uri parsedUri = Uri.parse(uri);
        Iterator<Whitelist$URLPattern> pit = this.whiteList.iterator();
        while (pit.hasNext()) {
            if (((Whitelist$URLPattern) pit.next()).matches(parsedUri)) {
                return true;
            }
        }
        return false;
    }
}
