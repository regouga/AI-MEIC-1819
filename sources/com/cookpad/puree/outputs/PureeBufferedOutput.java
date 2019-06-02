package com.cookpad.puree.outputs;

import com.cookpad.puree.PureeLogger;
import com.cookpad.puree.async.AsyncResult;
import com.cookpad.puree.internal.PureeVerboseRunnable;
import com.cookpad.puree.internal.RetryableTaskRunner;
import com.cookpad.puree.storage.Records;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.util.concurrent.ScheduledExecutorService;
import javax.annotation.ParametersAreNonnullByDefault;

@ParametersAreNonnullByDefault
public abstract class PureeBufferedOutput extends PureeOutput {
    ScheduledExecutorService executor;
    RetryableTaskRunner flushTask;

    /* renamed from: com.cookpad.puree.outputs.PureeBufferedOutput$1 */
    class C02341 implements Runnable {
        C02341() {
        }

        public void run() {
            PureeBufferedOutput.this.flush();
        }
    }

    /* renamed from: com.cookpad.puree.outputs.PureeBufferedOutput$3 */
    class C02363 implements Runnable {
        C02363() {
        }

        public void run() {
            PureeBufferedOutput.this.flushSync();
        }
    }

    public abstract void emit(JsonArray jsonArray, AsyncResult asyncResult);

    public void initialize(PureeLogger logger) {
        super.initialize(logger);
        this.executor = logger.getExecutor();
        this.flushTask = new RetryableTaskRunner(new C02341(), this.conf.getFlushIntervalMillis(), this.conf.getMaxRetryCount(), this.executor);
    }

    public void receive(final JsonObject jsonLog) {
        this.executor.execute(new PureeVerboseRunnable(new Runnable() {
            public void run() {
                JsonObject filteredLog = PureeBufferedOutput.this.applyFilters(jsonLog);
                if (filteredLog != null) {
                    PureeBufferedOutput.this.storage.insert(PureeBufferedOutput.this.type(), filteredLog);
                }
            }
        }));
        this.flushTask.tryToStart();
    }

    public void flush() {
        this.executor.execute(new PureeVerboseRunnable(new C02363()));
    }

    public void flushSync() {
        if (this.storage.lock()) {
            final Records records = getRecordsFromStorage();
            if (records.isEmpty()) {
                this.flushTask.reset();
                this.storage.unlock();
                return;
            }
            emit(records.getJsonLogs(), new AsyncResult() {
                public void success() {
                    PureeBufferedOutput.this.storage.delete(records);
                    if (PureeBufferedOutput.this.getRecordsFromStorage().isEmpty()) {
                        PureeBufferedOutput.this.flushTask.reset();
                    } else {
                        PureeBufferedOutput.this.flushTask.retryLater();
                    }
                    PureeBufferedOutput.this.storage.unlock();
                }

                public void fail() {
                    PureeBufferedOutput.this.flushTask.retryLater();
                    PureeBufferedOutput.this.storage.unlock();
                }
            });
        }
    }

    private Records getRecordsFromStorage() {
        return this.storage.select(type(), this.conf.getLogsPerRequest());
    }

    public void emit(JsonObject jsonLog) {
    }
}
