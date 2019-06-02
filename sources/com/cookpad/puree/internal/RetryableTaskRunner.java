package com.cookpad.puree.internal;

import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

public class RetryableTaskRunner {
    private BackoffCounter backoffCounter;
    private ScheduledExecutorService executor;
    private ScheduledFuture<?> future = null;
    private Runnable task;

    public RetryableTaskRunner(Runnable task, int intervalMillis, int maxRetryCount, ScheduledExecutorService executor) {
        this.backoffCounter = new BackoffCounter(intervalMillis, maxRetryCount);
        this.executor = executor;
        this.task = task;
    }

    public synchronized void tryToStart() {
        if (this.future == null) {
            this.backoffCounter.resetRetryCount();
            startDelayed();
        }
    }

    private void startDelayed() {
        ScheduledFuture scheduledFuture = this.future;
        if (scheduledFuture != null) {
            scheduledFuture.cancel(false);
        }
        this.future = this.executor.schedule(this.task, this.backoffCounter.timeInMillis(), TimeUnit.MILLISECONDS);
    }

    public synchronized void reset() {
        this.future = null;
        this.backoffCounter.resetRetryCount();
    }

    public synchronized void retryLater() {
        if (this.backoffCounter.getMaxRetryCount() <= 0) {
            startDelayed();
        } else if (this.backoffCounter.isRemainingRetryCount()) {
            this.backoffCounter.incrementRetryCount();
            startDelayed();
        } else {
            reset();
        }
    }
}
