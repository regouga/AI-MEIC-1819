package com.outsystems.plugins.oslogger.helpers;

import java.io.IOException;
import okhttp3.Interceptor;
import okhttp3.Interceptor.Chain;
import okhttp3.Response;

public class OSUserAgentInterceptor implements Interceptor {
    private static final String HEADER_USER_AGENT = "User-Agent";
    private final String userAgent;

    public OSUserAgentInterceptor(String userAgent) {
        this.userAgent = userAgent;
    }

    public Response intercept(Chain chain) throws IOException {
        return chain.proceed(chain.request().newBuilder().header(HEADER_USER_AGENT, this.userAgent).build());
    }
}
