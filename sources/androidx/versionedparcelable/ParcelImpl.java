package androidx.versionedparcelable;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.Parcelable.Creator;
import android.support.annotation.RestrictTo;
import android.support.annotation.RestrictTo.Scope;

@RestrictTo({Scope.LIBRARY})
public class ParcelImpl implements Parcelable {
    public static final Creator<ParcelImpl> CREATOR = new C02321();
    private final VersionedParcelable mParcel;

    /* renamed from: androidx.versionedparcelable.ParcelImpl$1 */
    static class C02321 implements Creator<ParcelImpl> {
        C02321() {
        }

        public ParcelImpl createFromParcel(Parcel in) {
            return new ParcelImpl(in);
        }

        public ParcelImpl[] newArray(int size) {
            return new ParcelImpl[size];
        }
    }

    public ParcelImpl(VersionedParcelable parcel) {
        this.mParcel = parcel;
    }

    protected ParcelImpl(Parcel in) {
        this.mParcel = new VersionedParcelParcel(in).readVersionedParcelable();
    }

    public <T extends VersionedParcelable> T getVersionedParcel() {
        return this.mParcel;
    }

    public int describeContents() {
        return 0;
    }

    public void writeToParcel(Parcel dest, int flags) {
        new VersionedParcelParcel(dest).writeVersionedParcelable(this.mParcel);
    }
}
