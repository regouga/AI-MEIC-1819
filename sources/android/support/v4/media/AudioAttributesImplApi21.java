package android.support.v4.media;

import android.annotation.TargetApi;
import android.media.AudioAttributes;
import android.os.Build.VERSION;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.util.Log;
import java.lang.reflect.Method;

@TargetApi(21)
class AudioAttributesImplApi21 implements AudioAttributesImpl {
    private static final String TAG = "AudioAttributesCompat21";
    static Method sAudioAttributesToLegacyStreamType;
    AudioAttributes mAudioAttributes;
    int mLegacyStreamType;

    AudioAttributesImplApi21() {
        this.mLegacyStreamType = -1;
    }

    AudioAttributesImplApi21(AudioAttributes audioAttributes) {
        this(audioAttributes, -1);
    }

    AudioAttributesImplApi21(AudioAttributes audioAttributes, int explicitLegacyStream) {
        this.mLegacyStreamType = -1;
        this.mAudioAttributes = audioAttributes;
        this.mLegacyStreamType = explicitLegacyStream;
    }

    static Method getAudioAttributesToLegacyStreamTypeMethod() {
        try {
            if (sAudioAttributesToLegacyStreamType == null) {
                sAudioAttributesToLegacyStreamType = AudioAttributes.class.getMethod("toLegacyStreamType", new Class[]{AudioAttributes.class});
            }
            return sAudioAttributesToLegacyStreamType;
        } catch (NoSuchMethodException e) {
            return null;
        }
    }

    public Object getAudioAttributes() {
        return this.mAudioAttributes;
    }

    public int getVolumeControlStream() {
        if (VERSION.SDK_INT >= 26) {
            return this.mAudioAttributes.getVolumeControlStream();
        }
        return AudioAttributesCompat.toVolumeStreamType(true, getFlags(), getUsage());
    }

    public int getLegacyStreamType() {
        int i = this.mLegacyStreamType;
        int i2 = -1;
        if (i != -1) {
            return i;
        }
        Method frameworkMethod = getAudioAttributesToLegacyStreamTypeMethod();
        if (frameworkMethod == null) {
            String str = TAG;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("No AudioAttributes#toLegacyStreamType() on API: ");
            stringBuilder.append(VERSION.SDK_INT);
            Log.w(str, stringBuilder.toString());
            return -1;
        }
        try {
            i2 = ((Integer) frameworkMethod.invoke(null, new Object[]{this.mAudioAttributes})).intValue();
            return i2;
        } catch (ReflectiveOperationException e) {
            String str2 = TAG;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("getLegacyStreamType() failed on API: ");
            stringBuilder2.append(VERSION.SDK_INT);
            Log.w(str2, stringBuilder2.toString(), e);
            return i2;
        }
    }

    public int getRawLegacyStreamType() {
        return this.mLegacyStreamType;
    }

    public int getContentType() {
        return this.mAudioAttributes.getContentType();
    }

    public int getUsage() {
        return this.mAudioAttributes.getUsage();
    }

    public int getFlags() {
        return this.mAudioAttributes.getFlags();
    }

    @NonNull
    public Bundle toBundle() {
        Bundle bundle = new Bundle();
        bundle.putParcelable("android.support.v4.media.audio_attrs.FRAMEWORKS", this.mAudioAttributes);
        int i = this.mLegacyStreamType;
        if (i != -1) {
            bundle.putInt("android.support.v4.media.audio_attrs.LEGACY_STREAM_TYPE", i);
        }
        return bundle;
    }

    public int hashCode() {
        return this.mAudioAttributes.hashCode();
    }

    public boolean equals(Object o) {
        if (!(o instanceof AudioAttributesImplApi21)) {
            return false;
        }
        return this.mAudioAttributes.equals(((AudioAttributesImplApi21) o).mAudioAttributes);
    }

    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("AudioAttributesCompat: audioattributes=");
        stringBuilder.append(this.mAudioAttributes);
        return stringBuilder.toString();
    }

    public static AudioAttributesImpl fromBundle(Bundle bundle) {
        if (bundle == null) {
            return null;
        }
        AudioAttributes frameworkAttrs = (AudioAttributes) bundle.getParcelable("android.support.v4.media.audio_attrs.FRAMEWORKS");
        if (frameworkAttrs == null) {
            return null;
        }
        return new AudioAttributesImplApi21(frameworkAttrs, bundle.getInt("android.support.v4.media.audio_attrs.LEGACY_STREAM_TYPE", -1));
    }
}
