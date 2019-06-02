package com.outsystems.plugins.broadcaster.events;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.Parcelable.Creator;
import com.outsystems.plugins.broadcaster.helpers.ParcelableUtils;
import com.outsystems.plugins.broadcaster.interfaces.Event;
import java.util.Map;

public class OSNetworkEvent implements Event, Parcelable {
    public static final Creator<OSNetworkEvent> CREATOR = new C00351();
    private final Map<String, String> data;

    /* renamed from: com.outsystems.plugins.broadcaster.events.OSNetworkEvent$1 */
    static class C00351 implements Creator<OSNetworkEvent> {
        C00351() {
        }

        public OSNetworkEvent createFromParcel(Parcel source) {
            return new OSNetworkEvent(source);
        }

        public OSNetworkEvent[] newArray(int size) {
            return new OSNetworkEvent[size];
        }
    }

    public OSNetworkEvent(Map<String, String> data) {
        this.data = data;
    }

    private OSNetworkEvent(Parcel source) {
        this.data = ParcelableUtils.readStringMap(source);
    }

    public Map<String, String> getData() {
        return this.data;
    }

    public int describeContents() {
        return 0;
    }

    public void writeToParcel(Parcel dest, int flags) {
        ParcelableUtils.write(dest, this.data);
    }
}
