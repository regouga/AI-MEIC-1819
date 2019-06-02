package com.cookpad.puree.outputs;

import javax.annotation.ParametersAreNonnullByDefault;

@ParametersAreNonnullByDefault
public class OutputConfiguration {
    private int flushIntervalMillis = 120000;
    private int logsPerRequest = 100;
    private int maxRetryCount = 5;

    OutputConfiguration() {
    }

    public int getFlushIntervalMillis() {
        return this.flushIntervalMillis;
    }

    public void setFlushIntervalMillis(int flushIntervalMillis) {
        this.flushIntervalMillis = flushIntervalMillis;
    }

    public int getLogsPerRequest() {
        return this.logsPerRequest;
    }

    public void setLogsPerRequest(int logsPerRequest) {
        this.logsPerRequest = logsPerRequest;
    }

    public int getMaxRetryCount() {
        return this.maxRetryCount;
    }

    public void setMaxRetryCount(int maxRetryCount) {
        this.maxRetryCount = maxRetryCount;
    }
}
