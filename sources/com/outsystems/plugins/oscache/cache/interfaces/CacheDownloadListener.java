package com.outsystems.plugins.oscache.cache.interfaces;

public interface CacheDownloadListener {
    void onError(String str);

    void onFinish(boolean z);

    void onProgress(int i, int i2, int i3);
}
