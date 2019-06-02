package com.cookpad.puree.internal;

public class BackoffCounter {
    private final int baseTimeMillis;
    private final int maxRetryCount;
    private int retryCount = 0;

    public int getRetryCount() {
        return this.retryCount;
    }

    public int getMaxRetryCount() {
        return this.maxRetryCount;
    }

    public BackoffCounter(int baseTimeMillis, int maxRetryCount) {
        this.baseTimeMillis = baseTimeMillis;
        this.maxRetryCount = maxRetryCount;
    }

    public boolean isRemainingRetryCount() {
        return this.maxRetryCount - this.retryCount > 0;
    }

    public void incrementRetryCount() {
        this.retryCount++;
    }

    public void resetRetryCount() {
        this.retryCount = 0;
    }

    public long timeInMillis() {
        int i = this.retryCount;
        if (i == 0) {
            return (long) this.baseTimeMillis;
        }
        return (long) (this.baseTimeMillis * (i + 1));
    }
}
