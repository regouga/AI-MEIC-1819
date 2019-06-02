package com.outsystems.plugins.broadcaster.interfaces;

import android.support.annotation.NonNull;

public interface BroadcasterListener {
    void notifyEvent(@NonNull Event event);
}
