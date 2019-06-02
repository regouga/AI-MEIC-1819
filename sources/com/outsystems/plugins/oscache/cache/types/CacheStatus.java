package com.outsystems.plugins.oscache.cache.types;

public enum CacheStatus {
    UNCACHED(0),
    IDLE(1),
    CHECKING(2),
    DOWNLOADING(3),
    UPDATEREADY(4),
    OBSOLETE(5);
    
    private final int value;

    private CacheStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return this.value;
    }
}
