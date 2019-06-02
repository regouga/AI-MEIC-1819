package android.support.v4.graphics;

import android.os.ParcelFileDescriptor;
import android.support.annotation.RequiresApi;
import android.support.annotation.RestrictTo;
import android.support.annotation.RestrictTo.Scope;
import android.system.ErrnoException;
import android.system.Os;
import android.system.OsConstants;
import java.io.File;

@RequiresApi(21)
@RestrictTo({Scope.LIBRARY_GROUP})
class TypefaceCompatApi21Impl extends TypefaceCompatBaseImpl {
    private static final String TAG = "TypefaceCompatApi21Impl";

    TypefaceCompatApi21Impl() {
    }

    private File getFile(ParcelFileDescriptor fd) {
        try {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("/proc/self/fd/");
            stringBuilder.append(fd.getFd());
            String path = Os.readlink(stringBuilder.toString());
            if (OsConstants.S_ISREG(Os.stat(path).st_mode)) {
                return new File(path);
            }
            return null;
        } catch (ErrnoException e) {
            return null;
        }
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public android.graphics.Typeface createFromFontInfo(android.content.Context r11, android.os.CancellationSignal r12, @android.support.annotation.NonNull android.support.v4.provider.FontsContractCompat.FontInfo[] r13, int r14) {
        /*
        r10 = this;
        r0 = r13.length;
        r1 = 0;
        r2 = 1;
        if (r0 >= r2) goto L_0x0006;
    L_0x0005:
        return r1;
    L_0x0006:
        r0 = r10.findBestInfo(r13, r14);
        r2 = r11.getContentResolver();
        r3 = r0.getUri();	 Catch:{ IOException -> 0x0091 }
        r4 = "r";
        r3 = r2.openFileDescriptor(r3, r4, r12);	 Catch:{ IOException -> 0x0091 }
        r4 = r10.getFile(r3);	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        if (r4 == 0) goto L_0x0031;
    L_0x0020:
        r5 = r4.canRead();	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        if (r5 != 0) goto L_0x0027;
    L_0x0026:
        goto L_0x0031;
    L_0x0027:
        r5 = android.graphics.Typeface.createFromFile(r4);	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        if (r3 == 0) goto L_0x0030;
    L_0x002d:
        r3.close();	 Catch:{ IOException -> 0x0091 }
    L_0x0030:
        return r5;
        r5 = new java.io.FileInputStream;	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        r6 = r3.getFileDescriptor();	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        r5.<init>(r6);	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        r6 = super.createFromInputStream(r11, r5);	 Catch:{ Throwable -> 0x0052, all -> 0x004f }
        r5.close();	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        if (r3 == 0) goto L_0x004c;
        r3.close();	 Catch:{ IOException -> 0x0091 }
        return r6;
    L_0x004f:
        r6 = move-exception;
        r7 = r1;
        goto L_0x0059;
    L_0x0052:
        r6 = move-exception;
        throw r6;	 Catch:{ all -> 0x0055 }
    L_0x0055:
        r7 = move-exception;
        r9 = r7;
        r7 = r6;
        r6 = r9;
        if (r7 == 0) goto L_0x0068;
        r5.close();	 Catch:{ Throwable -> 0x0062, all -> 0x006f }
        goto L_0x006c;
    L_0x0062:
        r8 = move-exception;
        r7.addSuppressed(r8);	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        goto L_0x006c;
        r5.close();	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
        throw r6;	 Catch:{ Throwable -> 0x0072, all -> 0x006f }
    L_0x006f:
        r4 = move-exception;
        r5 = r1;
        goto L_0x0079;
    L_0x0072:
        r4 = move-exception;
        throw r4;	 Catch:{ all -> 0x0075 }
    L_0x0075:
        r5 = move-exception;
        r9 = r5;
        r5 = r4;
        r4 = r9;
        if (r3 == 0) goto L_0x008e;
        if (r5 == 0) goto L_0x008a;
        r3.close();	 Catch:{ Throwable -> 0x0084 }
        goto L_0x008e;
    L_0x0084:
        r6 = move-exception;
        r5.addSuppressed(r6);	 Catch:{ IOException -> 0x0091 }
        goto L_0x008e;
        r3.close();	 Catch:{ IOException -> 0x0091 }
        throw r4;	 Catch:{ IOException -> 0x0091 }
    L_0x0091:
        r3 = move-exception;
        return r1;
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.graphics.TypefaceCompatApi21Impl.createFromFontInfo(android.content.Context, android.os.CancellationSignal, android.support.v4.provider.FontsContractCompat$FontInfo[], int):android.graphics.Typeface");
    }
}
