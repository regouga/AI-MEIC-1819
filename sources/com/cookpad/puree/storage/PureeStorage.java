package com.cookpad.puree.storage;

import com.google.gson.JsonObject;

public interface PureeStorage {
    void clear();

    int count();

    void delete(Records records);

    void insert(String str, JsonObject jsonObject);

    boolean lock();

    Records select(String str, int i);

    Records selectAll();

    void truncateBufferedLogs(int i);

    void unlock();
}
