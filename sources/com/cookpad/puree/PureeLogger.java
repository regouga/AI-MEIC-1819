package com.cookpad.puree;

import com.cookpad.puree.outputs.PureeOutput;
import com.cookpad.puree.storage.PureeStorage;
import com.cookpad.puree.storage.Records;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledExecutorService;
import javax.annotation.Nonnull;
import javax.annotation.ParametersAreNonnullByDefault;

@ParametersAreNonnullByDefault
public class PureeLogger {
    final ScheduledExecutorService executor;
    final Gson gson;
    final Map<Class<?>, List<PureeOutput>> sourceOutputMap = new HashMap();
    final PureeStorage storage;

    public interface Consumer<T> {
        void accept(@Nonnull T t);
    }

    public static class NoRegisteredOutputPluginException extends IllegalStateException {
        public NoRegisteredOutputPluginException(String detailMessage) {
            super(detailMessage);
        }
    }

    /* renamed from: com.cookpad.puree.PureeLogger$1 */
    class C02901 implements Consumer<PureeOutput> {
        C02901() {
        }

        public void accept(@Nonnull PureeOutput value) {
            value.initialize(PureeLogger.this);
        }
    }

    /* renamed from: com.cookpad.puree.PureeLogger$2 */
    class C02912 implements Consumer<PureeOutput> {
        C02912() {
        }

        public void accept(@Nonnull PureeOutput value) {
            value.flush();
        }
    }

    public PureeLogger(Map<Class<?>, List<PureeOutput>> sourceOutputMap, Gson gson, PureeStorage storage, ScheduledExecutorService executor) {
        this.sourceOutputMap.putAll(sourceOutputMap);
        this.gson = gson;
        this.storage = storage;
        this.executor = executor;
        forEachOutput(new C02901());
    }

    public void send(PureeLog log) {
        for (PureeOutput output : getRegisteredOutputPlugins(log)) {
            output.receive(serializeLog(log));
        }
    }

    public PureeStorage getStorage() {
        return this.storage;
    }

    public ScheduledExecutorService getExecutor() {
        return this.executor;
    }

    public Records getBufferedLogs() {
        return this.storage.selectAll();
    }

    public void discardBufferedLogs() {
        this.storage.clear();
    }

    public void truncateBufferedLogs(int truncateThresholdInRows) {
        this.storage.truncateBufferedLogs(truncateThresholdInRows);
    }

    public void flush() {
        forEachOutput(new C02912());
    }

    @Nonnull
    public JsonObject serializeLog(PureeLog log) {
        return (JsonObject) this.gson.toJsonTree(log);
    }

    @Nonnull
    public List<PureeOutput> getRegisteredOutputPlugins(PureeLog log) {
        return getRegisteredOutputPlugins(log.getClass());
    }

    @Nonnull
    public List<PureeOutput> getRegisteredOutputPlugins(Class<? extends PureeLog> logClass) {
        List<PureeOutput> outputs = (List) this.sourceOutputMap.get(logClass);
        if (outputs != null) {
            return outputs;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("No output plugin registered for ");
        stringBuilder.append(logClass);
        throw new NoRegisteredOutputPluginException(stringBuilder.toString());
    }

    public void forEachOutput(Consumer<PureeOutput> f) {
        Iterator it = new HashSet(this.sourceOutputMap.values()).iterator();
        while (it.hasNext()) {
            for (PureeOutput output : (List) it.next()) {
                f.accept(output);
            }
        }
    }
}
