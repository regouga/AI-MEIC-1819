package com.cookpad.puree;

import com.cookpad.puree.PureeConfiguration.Builder;
import com.cookpad.puree.outputs.PureeOutput;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Source {
    private Builder builder;
    private List<PureeFilter> filters = new ArrayList();
    private Class<?> logClass;

    public Source(Builder builder, Class<?> logClass) {
        this.builder = builder;
        this.logClass = logClass;
    }

    public Source filter(PureeFilter filter) {
        this.filters.add(filter);
        return this;
    }

    public Source filters(PureeFilter... filters) {
        this.filters.addAll(Arrays.asList(filters));
        return this;
    }

    public Builder to(PureeOutput output) {
        this.builder.register(this.logClass, output.withFilters(this.filters));
        return this.builder;
    }
}
