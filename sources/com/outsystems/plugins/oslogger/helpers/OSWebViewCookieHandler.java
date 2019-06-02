package com.outsystems.plugins.oslogger.helpers;

import android.util.Log;
import android.webkit.CookieManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import okhttp3.Cookie;
import okhttp3.CookieJar;
import okhttp3.HttpUrl;

public final class OSWebViewCookieHandler implements CookieJar {
    private CookieManager webviewCookieManager = CookieManager.getInstance();

    public void saveFromResponse(HttpUrl url, List<Cookie> cookies) {
        String urlString = url.toString();
        for (Cookie cookie : cookies) {
            this.webviewCookieManager.setCookie(urlString, cookie.toString());
        }
    }

    public List<Cookie> loadForRequest(HttpUrl url) {
        String cookiesString = this.webviewCookieManager.getCookie(url.toString());
        if (cookiesString == null || cookiesString.isEmpty()) {
            return Collections.emptyList();
        }
        String[] cookieHeaders = cookiesString.split(";");
        List<Cookie> cookies = new ArrayList(cookieHeaders.length);
        for (String header : cookieHeaders) {
            Cookie cookie = Cookie.parse(url, header);
            if (cookie != null) {
                cookies.add(cookie);
            } else {
                String name = getClass().getName();
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Could not parse cookie with header ");
                stringBuilder.append(header);
                Log.w(name, stringBuilder.toString());
            }
        }
        return cookies;
    }
}
