package com.outsystems.plugins.oscache.cache.interfaces;

import android.content.Context;
import android.support.annotation.NonNull;
import com.outsystems.plugins.oscache.cache.types.CacheStatus;

public interface CacheListener {
    void fireOnErrorEvent(@NonNull String str);

    void fireOnFinishEvent();

    void fireOnProgressEvent(long j, long j2);

    @NonNull
    Context getContext();

    void throwException(@NonNull String str);

    void updateStatus(@NonNull CacheStatus cacheStatus);
}
