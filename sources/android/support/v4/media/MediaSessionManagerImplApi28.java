package android.support.v4.media;

import android.content.Context;
import android.media.session.MediaSessionManager;
import android.media.session.MediaSessionManager.RemoteUserInfo;
import android.support.annotation.RequiresApi;
import android.support.v4.util.ObjectsCompat;

@RequiresApi(28)
class MediaSessionManagerImplApi28 extends MediaSessionManagerImplApi21 {
    MediaSessionManager mObject;

    static final class RemoteUserInfoImplApi28 implements RemoteUserInfoImpl {
        final RemoteUserInfo mObject;

        RemoteUserInfoImplApi28(String packageName, int pid, int uid) {
            this.mObject = new RemoteUserInfo(packageName, pid, uid);
        }

        RemoteUserInfoImplApi28(RemoteUserInfo remoteUserInfo) {
            this.mObject = remoteUserInfo;
        }

        public String getPackageName() {
            return this.mObject.getPackageName();
        }

        public int getPid() {
            return this.mObject.getPid();
        }

        public int getUid() {
            return this.mObject.getUid();
        }

        public int hashCode() {
            return ObjectsCompat.hash(this.mObject);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof RemoteUserInfoImplApi28)) {
                return false;
            }
            return this.mObject.equals(((RemoteUserInfoImplApi28) obj).mObject);
        }
    }

    MediaSessionManagerImplApi28(Context context) {
        super(context);
        this.mObject = (MediaSessionManager) context.getSystemService("media_session");
    }

    public boolean isTrustedForMediaControl(RemoteUserInfoImpl userInfo) {
        if (userInfo instanceof RemoteUserInfoImplApi28) {
            return this.mObject.isTrustedForMediaControl(((RemoteUserInfoImplApi28) userInfo).mObject);
        }
        return false;
    }
}
