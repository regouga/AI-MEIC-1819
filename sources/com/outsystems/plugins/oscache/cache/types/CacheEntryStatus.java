package com.outsystems.plugins.oscache.cache.types;

public enum CacheEntryStatus {
    UNCACHED(0),
    DOWNLOADING(1),
    FETCHED(2),
    FAILED(3);
    
    private final int value;

    private CacheEntryStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return this.value;
    }

    public static CacheEntryStatus getStatusForValue(int value) {
        switch (value) {
            case 0:
                return UNCACHED;
            case 1:
                return DOWNLOADING;
            case 2:
                return FETCHED;
            case 3:
                return FAILED;
            default:
                return UNCACHED;
        }
    }
}
