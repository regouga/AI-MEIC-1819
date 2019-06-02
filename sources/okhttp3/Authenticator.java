package okhttp3;

import java.io.IOException;
import javax.annotation.Nullable;

public interface Authenticator {
    public static final Authenticator NONE = new C03391();

    /* renamed from: okhttp3.Authenticator$1 */
    class C03391 implements Authenticator {
        C03391() {
        }

        public Request authenticate(@Nullable Route route, Response response) {
            return null;
        }
    }

    @Nullable
    Request authenticate(@Nullable Route route, Response response) throws IOException;
}
