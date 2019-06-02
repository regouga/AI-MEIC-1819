package com.cookpad.puree.outputs;

import com.cookpad.puree.PureeFilter;
import com.cookpad.puree.PureeLogger;
import com.cookpad.puree.storage.PureeStorage;
import com.google.gson.JsonObject;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import javax.annotation.ParametersAreNonnullByDefault;

@ParametersAreNonnullByDefault
public abstract class PureeOutput {
    protected OutputConfiguration conf;
    protected List<PureeFilter> filters = new ArrayList();
    protected PureeStorage storage;

    @Nonnull
    public abstract OutputConfiguration configure(OutputConfiguration outputConfiguration);

    public abstract void emit(JsonObject jsonObject);

    @Nonnull
    public abstract String type();

    public void registerFilter(PureeFilter filter) {
        this.filters.add(filter);
    }

    public PureeOutput withFilters(PureeFilter... filters) {
        Collections.addAll(this.filters, filters);
        return this;
    }

    public PureeOutput withFilters(Collection<PureeFilter> filters) {
        this.filters.addAll(filters);
        return this;
    }

    public List<PureeFilter> getFilters() {
        return this.filters;
    }

    public void initialize(PureeLogger logger) {
        this.storage = logger.getStorage();
        this.conf = configure(new OutputConfiguration());
    }

    public void receive(JsonObject jsonLog) {
        JsonObject filteredLog = applyFilters(jsonLog);
        if (filteredLog != null) {
            emit(filteredLog);
        }
    }

    @Nullable
    protected JsonObject applyFilters(JsonObject jsonLog) {
        JsonObject filteredLog = jsonLog;
        for (PureeFilter filter : this.filters) {
            filteredLog = filter.apply(filteredLog);
            if (filteredLog == null) {
                return null;
            }
        }
        return filteredLog;
    }

    public void flush() {
    }
}
