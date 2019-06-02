package com.outsystems.plugins.oscache.cache.types;

public enum CacheFrameStatus {
    EMPTY(0),
    DOWNLOADING(1),
    FETCHED(2),
    FAILED(3),
    UPGRADE(4);
    
    private final int value;

    private CacheFrameStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return this.value;
    }

    public static CacheFrameStatus getStatusForValue(int value) {
        switch (value) {
            case 0:
                return EMPTY;
            case 1:
                return DOWNLOADING;
            case 2:
                return FETCHED;
            case 3:
                return FAILED;
            case 4:
                return UPGRADE;
            default:
                return EMPTY;
        }
    }
}
