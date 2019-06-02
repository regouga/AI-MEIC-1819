package com.cookpad.puree;

import android.content.Context;
import com.cookpad.puree.internal.LogDumper;
import com.cookpad.puree.outputs.PureeOutput;
import com.cookpad.puree.storage.PureeSQLiteStorage;
import com.cookpad.puree.storage.PureeStorage;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ThreadFactory;
import javax.annotation.ParametersAreNonnullByDefault;

@ParametersAreNonnullByDefault
public class PureeConfiguration {
    private final Context context;
    private final ScheduledExecutorService executor;
    private final Gson gson;
    private final Map<Class<?>, List<PureeOutput>> sourceOutputMap;
    private final PureeStorage storage;

    static class BackgroundThreadFactory implements ThreadFactory {
        BackgroundThreadFactory() {
        }

        public Thread newThread(Runnable r) {
            Thread thread = new Thread(r, "puree");
            thread.setPriority(1);
            return thread;
        }
    }

    public static class Builder {
        private Context context;
        private ScheduledExecutorService executor;
        private Gson gson;
        private Map<Class<?>, List<PureeOutput>> sourceOutputMap = new HashMap();
        private PureeStorage storage;

        public Builder(Context context) {
            this.context = context.getApplicationContext();
        }

        public Builder gson(Gson gson) {
            this.gson = gson;
            return this;
        }

        public Source source(Class<? extends PureeLog> logClass) {
            return new Source(this, logClass);
        }

        public Builder register(Class<?> logClass, PureeOutput output) {
            List<PureeOutput> outputs = (List) this.sourceOutputMap.get(logClass);
            if (outputs == null) {
                outputs = new ArrayList();
            }
            outputs.add(output);
            this.sourceOutputMap.put(logClass, outputs);
            return this;
        }

        public Builder storage(PureeStorage storage) {
            this.storage = storage;
            return this;
        }

        public Builder executor(ScheduledExecutorService executor) {
            this.executor = executor;
            return this;
        }

        public PureeConfiguration build() {
            if (this.gson == null) {
                this.gson = new Gson();
            }
            if (this.storage == null) {
                this.storage = new PureeSQLiteStorage(this.context);
            }
            if (this.executor == null) {
                this.executor = PureeConfiguration.newBackgroundExecutor();
            }
            return new PureeConfiguration(this.context, this.gson, this.sourceOutputMap, this.storage, this.executor);
        }
    }

    public Context getContext() {
        return this.context;
    }

    public Gson getGson() {
        return this.gson;
    }

    public Map<Class<?>, List<PureeOutput>> getSourceOutputMap() {
        return this.sourceOutputMap;
    }

    public PureeStorage getStorage() {
        return this.storage;
    }

    public List<PureeOutput> getRegisteredOutputPlugins(Class<? extends PureeLog> logClass) {
        return (List) this.sourceOutputMap.get(logClass);
    }

    public PureeLogger createPureeLogger() {
        return new PureeLogger(this.sourceOutputMap, this.gson, this.storage, this.executor);
    }

    PureeConfiguration(Context context, Gson gson, Map<Class<?>, List<PureeOutput>> sourceOutputMap, PureeStorage storage, ScheduledExecutorService executor) {
        this.context = context;
        this.gson = gson;
        this.sourceOutputMap = sourceOutputMap;
        this.storage = storage;
        this.executor = executor;
    }

    public void printMapping() {
        LogDumper.out(this.sourceOutputMap);
    }

    static ScheduledExecutorService newBackgroundExecutor() {
        return Executors.newScheduledThreadPool(1, new BackgroundThreadFactory());
    }
}
