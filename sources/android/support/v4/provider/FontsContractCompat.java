package android.support.v4.provider;

import android.content.ContentUris;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.content.pm.ProviderInfo;
import android.content.pm.Signature;
import android.content.res.Resources;
import android.database.Cursor;
import android.graphics.Typeface;
import android.net.Uri;
import android.net.Uri.Builder;
import android.os.Build.VERSION;
import android.os.CancellationSignal;
import android.os.Handler;
import android.provider.BaseColumns;
import android.support.annotation.GuardedBy;
import android.support.annotation.IntRange;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.RequiresApi;
import android.support.annotation.RestrictTo;
import android.support.annotation.RestrictTo.Scope;
import android.support.annotation.VisibleForTesting;
import android.support.v4.content.res.FontResourcesParserCompat;
import android.support.v4.graphics.TypefaceCompat;
import android.support.v4.graphics.TypefaceCompatUtil;
import android.support.v4.provider.SelfDestructiveThread.ReplyCallback;
import android.support.v4.util.LruCache;
import android.support.v4.util.Preconditions;
import android.support.v4.util.SimpleArrayMap;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FontsContractCompat {
    private static final int BACKGROUND_THREAD_KEEP_ALIVE_DURATION_MS = 10000;
    @RestrictTo({Scope.LIBRARY_GROUP})
    public static final String PARCEL_FONT_RESULTS = "font_results";
    @RestrictTo({Scope.LIBRARY_GROUP})
    static final int RESULT_CODE_PROVIDER_NOT_FOUND = -1;
    @RestrictTo({Scope.LIBRARY_GROUP})
    static final int RESULT_CODE_WRONG_CERTIFICATES = -2;
    private static final String TAG = "FontsContractCompat";
    private static final SelfDestructiveThread sBackgroundThread = new SelfDestructiveThread("fonts", 10, BACKGROUND_THREAD_KEEP_ALIVE_DURATION_MS);
    private static final Comparator<byte[]> sByteArrayComparator = new C01955();
    static final Object sLock = new Object();
    @GuardedBy("sLock")
    static final SimpleArrayMap<String, ArrayList<ReplyCallback<TypefaceResult>>> sPendingReplies = new SimpleArrayMap();
    static final LruCache<String, Typeface> sTypefaceCache = new LruCache(16);

    /* renamed from: android.support.v4.provider.FontsContractCompat$5 */
    static class C01955 implements Comparator<byte[]> {
        C01955() {
        }

        public int compare(byte[] l, byte[] r) {
            if (l.length != r.length) {
                return l.length - r.length;
            }
            for (int i = 0; i < l.length; i++) {
                if (l[i] != r[i]) {
                    return l[i] - r[i];
                }
            }
            return 0;
        }
    }

    public static final class Columns implements BaseColumns {
        public static final String FILE_ID = "file_id";
        public static final String ITALIC = "font_italic";
        public static final String RESULT_CODE = "result_code";
        public static final int RESULT_CODE_FONT_NOT_FOUND = 1;
        public static final int RESULT_CODE_FONT_UNAVAILABLE = 2;
        public static final int RESULT_CODE_MALFORMED_QUERY = 3;
        public static final int RESULT_CODE_OK = 0;
        public static final String TTC_INDEX = "font_ttc_index";
        public static final String VARIATION_SETTINGS = "font_variation_settings";
        public static final String WEIGHT = "font_weight";
    }

    public static class FontFamilyResult {
        public static final int STATUS_OK = 0;
        public static final int STATUS_UNEXPECTED_DATA_PROVIDED = 2;
        public static final int STATUS_WRONG_CERTIFICATES = 1;
        private final FontInfo[] mFonts;
        private final int mStatusCode;

        @RestrictTo({Scope.LIBRARY_GROUP})
        public FontFamilyResult(int statusCode, @Nullable FontInfo[] fonts) {
            this.mStatusCode = statusCode;
            this.mFonts = fonts;
        }

        public int getStatusCode() {
            return this.mStatusCode;
        }

        public FontInfo[] getFonts() {
            return this.mFonts;
        }
    }

    public static class FontInfo {
        private final boolean mItalic;
        private final int mResultCode;
        private final int mTtcIndex;
        private final Uri mUri;
        private final int mWeight;

        @RestrictTo({Scope.LIBRARY_GROUP})
        public FontInfo(@NonNull Uri uri, @IntRange(from = 0) int ttcIndex, @IntRange(from = 1, to = 1000) int weight, boolean italic, int resultCode) {
            this.mUri = (Uri) Preconditions.checkNotNull(uri);
            this.mTtcIndex = ttcIndex;
            this.mWeight = weight;
            this.mItalic = italic;
            this.mResultCode = resultCode;
        }

        @NonNull
        public Uri getUri() {
            return this.mUri;
        }

        @IntRange(from = 0)
        public int getTtcIndex() {
            return this.mTtcIndex;
        }

        @IntRange(from = 1, to = 1000)
        public int getWeight() {
            return this.mWeight;
        }

        public boolean isItalic() {
            return this.mItalic;
        }

        public int getResultCode() {
            return this.mResultCode;
        }
    }

    public static class FontRequestCallback {
        public static final int FAIL_REASON_FONT_LOAD_ERROR = -3;
        public static final int FAIL_REASON_FONT_NOT_FOUND = 1;
        public static final int FAIL_REASON_FONT_UNAVAILABLE = 2;
        public static final int FAIL_REASON_MALFORMED_QUERY = 3;
        public static final int FAIL_REASON_PROVIDER_NOT_FOUND = -1;
        public static final int FAIL_REASON_SECURITY_VIOLATION = -4;
        public static final int FAIL_REASON_WRONG_CERTIFICATES = -2;
        @RestrictTo({Scope.LIBRARY_GROUP})
        public static final int RESULT_OK = 0;

        @RestrictTo({Scope.LIBRARY_GROUP})
        @Retention(RetentionPolicy.SOURCE)
        public @interface FontRequestFailReason {
        }

        public void onTypefaceRetrieved(Typeface typeface) {
        }

        public void onTypefaceRequestFailed(int reason) {
        }
    }

    private static final class TypefaceResult {
        final int mResult;
        final Typeface mTypeface;

        TypefaceResult(@Nullable Typeface typeface, int result) {
            this.mTypeface = typeface;
            this.mResult = result;
        }
    }

    private FontsContractCompat() {
    }

    @NonNull
    static TypefaceResult getFontInternal(Context context, FontRequest request, int style) {
        try {
            FontFamilyResult result = fetchFonts(context, null, request);
            int i = -3;
            if (result.getStatusCode() == 0) {
                Typeface typeface = TypefaceCompat.createFromFontInfo(context, null, result.getFonts(), style);
                if (typeface != null) {
                    i = 0;
                }
                return new TypefaceResult(typeface, i);
            }
            if (result.getStatusCode() == 1) {
                i = -2;
            }
            return new TypefaceResult(null, i);
        } catch (NameNotFoundException e) {
            return new TypefaceResult(null, -1);
        }
    }

    @RestrictTo({Scope.LIBRARY_GROUP})
    public static void resetCache() {
        sTypefaceCache.evictAll();
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    @android.support.annotation.RestrictTo({android.support.annotation.RestrictTo.Scope.LIBRARY_GROUP})
    public static android.graphics.Typeface getFontSync(final android.content.Context r8, final android.support.v4.provider.FontRequest r9, @android.support.annotation.Nullable final android.support.v4.content.res.ResourcesCompat.FontCallback r10, @android.support.annotation.Nullable final android.os.Handler r11, boolean r12, int r13, final int r14) {
        /*
        r0 = new java.lang.StringBuilder;
        r0.<init>();
        r1 = r9.getIdentifier();
        r0.append(r1);
        r1 = "-";
        r0.append(r1);
        r0.append(r14);
        r0 = r0.toString();
        r1 = sTypefaceCache;
        r1 = r1.get(r0);
        r1 = (android.graphics.Typeface) r1;
        if (r1 == 0) goto L_0x002a;
    L_0x0022:
        if (r10 == 0) goto L_0x0028;
    L_0x0024:
        r10.onFontRetrieved(r1);
        goto L_0x0029;
    L_0x0029:
        return r1;
    L_0x002a:
        if (r12 == 0) goto L_0x0049;
    L_0x002c:
        r2 = -1;
        if (r13 != r2) goto L_0x0049;
    L_0x002f:
        r2 = getFontInternal(r8, r9, r14);
        if (r10 == 0) goto L_0x0045;
    L_0x0035:
        r3 = r2.mResult;
        if (r3 != 0) goto L_0x003f;
    L_0x0039:
        r3 = r2.mTypeface;
        r10.callbackSuccessAsync(r3, r11);
        goto L_0x0046;
    L_0x003f:
        r3 = r2.mResult;
        r10.callbackFailAsync(r3, r11);
        goto L_0x0046;
    L_0x0046:
        r3 = r2.mTypeface;
        return r3;
        r2 = new android.support.v4.provider.FontsContractCompat$1;
        r2.<init>(r8, r9, r14, r0);
        r3 = 0;
        if (r12 == 0) goto L_0x005f;
    L_0x0052:
        r4 = sBackgroundThread;	 Catch:{ InterruptedException -> 0x005d }
        r4 = r4.postAndWait(r2, r13);	 Catch:{ InterruptedException -> 0x005d }
        r4 = (android.support.v4.provider.FontsContractCompat.TypefaceResult) r4;	 Catch:{ InterruptedException -> 0x005d }
        r3 = r4.mTypeface;	 Catch:{ InterruptedException -> 0x005d }
        return r3;
    L_0x005d:
        r4 = move-exception;
        return r3;
    L_0x005f:
        if (r10 != 0) goto L_0x0063;
    L_0x0061:
        r4 = r3;
        goto L_0x0068;
    L_0x0063:
        r4 = new android.support.v4.provider.FontsContractCompat$2;
        r4.<init>(r10, r11);
    L_0x0068:
        r5 = sLock;
        monitor-enter(r5);
        r6 = sPendingReplies;	 Catch:{ all -> 0x00a1 }
        r6 = r6.containsKey(r0);	 Catch:{ all -> 0x00a1 }
        if (r6 == 0) goto L_0x0084;
    L_0x0073:
        if (r4 == 0) goto L_0x0081;
    L_0x0075:
        r6 = sPendingReplies;	 Catch:{ all -> 0x00a1 }
        r6 = r6.get(r0);	 Catch:{ all -> 0x00a1 }
        r6 = (java.util.ArrayList) r6;	 Catch:{ all -> 0x00a1 }
        r6.add(r4);	 Catch:{ all -> 0x00a1 }
        goto L_0x0082;
    L_0x0082:
        monitor-exit(r5);	 Catch:{ all -> 0x00a1 }
        return r3;
    L_0x0084:
        if (r4 == 0) goto L_0x0094;
    L_0x0086:
        r6 = new java.util.ArrayList;	 Catch:{ all -> 0x00a1 }
        r6.<init>();	 Catch:{ all -> 0x00a1 }
        r6.add(r4);	 Catch:{ all -> 0x00a1 }
        r7 = sPendingReplies;	 Catch:{ all -> 0x00a1 }
        r7.put(r0, r6);	 Catch:{ all -> 0x00a1 }
        goto L_0x0095;
    L_0x0095:
        monitor-exit(r5);	 Catch:{ all -> 0x00a1 }
        r5 = sBackgroundThread;
        r6 = new android.support.v4.provider.FontsContractCompat$3;
        r6.<init>(r0);
        r5.postAndReply(r2, r6);
        return r3;
    L_0x00a1:
        r3 = move-exception;
        monitor-exit(r5);	 Catch:{ all -> 0x00a1 }
        throw r3;
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.provider.FontsContractCompat.getFontSync(android.content.Context, android.support.v4.provider.FontRequest, android.support.v4.content.res.ResourcesCompat$FontCallback, android.os.Handler, boolean, int, int):android.graphics.Typeface");
    }

    public static void requestFont(@NonNull final Context context, @NonNull final FontRequest request, @NonNull final FontRequestCallback callback, @NonNull Handler handler) {
        final Handler callerThreadHandler = new Handler();
        handler.post(new Runnable() {

            /* renamed from: android.support.v4.provider.FontsContractCompat$4$1 */
            class C01851 implements Runnable {
                C01851() {
                }

                public void run() {
                    callback.onTypefaceRequestFailed(-1);
                }
            }

            /* renamed from: android.support.v4.provider.FontsContractCompat$4$2 */
            class C01862 implements Runnable {
                C01862() {
                }

                public void run() {
                    callback.onTypefaceRequestFailed(-2);
                }
            }

            /* renamed from: android.support.v4.provider.FontsContractCompat$4$3 */
            class C01873 implements Runnable {
                C01873() {
                }

                public void run() {
                    callback.onTypefaceRequestFailed(-3);
                }
            }

            /* renamed from: android.support.v4.provider.FontsContractCompat$4$4 */
            class C01884 implements Runnable {
                C01884() {
                }

                public void run() {
                    callback.onTypefaceRequestFailed(-3);
                }
            }

            /* renamed from: android.support.v4.provider.FontsContractCompat$4$5 */
            class C01895 implements Runnable {
                C01895() {
                }

                public void run() {
                    callback.onTypefaceRequestFailed(1);
                }
            }

            /* renamed from: android.support.v4.provider.FontsContractCompat$4$6 */
            class C01906 implements Runnable {
                C01906() {
                }

                public void run() {
                    callback.onTypefaceRequestFailed(-3);
                }
            }

            /* renamed from: android.support.v4.provider.FontsContractCompat$4$8 */
            class C01928 implements Runnable {
                C01928() {
                }

                public void run() {
                    callback.onTypefaceRequestFailed(-3);
                }
            }

            public void run() {
                try {
                    FontFamilyResult result = FontsContractCompat.fetchFonts(context, null, request);
                    if (result.getStatusCode() != 0) {
                        switch (result.getStatusCode()) {
                            case 1:
                                callerThreadHandler.post(new C01862());
                                return;
                            case 2:
                                callerThreadHandler.post(new C01873());
                                return;
                            default:
                                callerThreadHandler.post(new C01884());
                                return;
                        }
                    }
                    FontInfo[] fonts = result.getFonts();
                    if (fonts != null) {
                        if (fonts.length != 0) {
                            for (FontInfo font : fonts) {
                                if (font.getResultCode() != 0) {
                                    final int resultCode = font.getResultCode();
                                    if (resultCode < 0) {
                                        callerThreadHandler.post(new C01906());
                                    } else {
                                        callerThreadHandler.post(new Runnable() {
                                            public void run() {
                                                callback.onTypefaceRequestFailed(resultCode);
                                            }
                                        });
                                    }
                                    return;
                                }
                            }
                            final Typeface typeface = FontsContractCompat.buildTypeface(context, null, fonts);
                            if (typeface == null) {
                                callerThreadHandler.post(new C01928());
                                return;
                            } else {
                                callerThreadHandler.post(new Runnable() {
                                    public void run() {
                                        callback.onTypefaceRetrieved(typeface);
                                    }
                                });
                                return;
                            }
                        }
                    }
                    callerThreadHandler.post(new C01895());
                } catch (NameNotFoundException e) {
                    callerThreadHandler.post(new C01851());
                }
            }
        });
    }

    @Nullable
    public static Typeface buildTypeface(@NonNull Context context, @Nullable CancellationSignal cancellationSignal, @NonNull FontInfo[] fonts) {
        return TypefaceCompat.createFromFontInfo(context, cancellationSignal, fonts, 0);
    }

    @RequiresApi(19)
    @RestrictTo({Scope.LIBRARY_GROUP})
    public static Map<Uri, ByteBuffer> prepareFontData(Context context, FontInfo[] fonts, CancellationSignal cancellationSignal) {
        HashMap<Uri, ByteBuffer> out = new HashMap();
        for (FontInfo font : fonts) {
            if (font.getResultCode() == 0) {
                Uri uri = font.getUri();
                if (!out.containsKey(uri)) {
                    out.put(uri, TypefaceCompatUtil.mmap(context, cancellationSignal, uri));
                }
            }
        }
        return Collections.unmodifiableMap(out);
    }

    @NonNull
    public static FontFamilyResult fetchFonts(@NonNull Context context, @Nullable CancellationSignal cancellationSignal, @NonNull FontRequest request) throws NameNotFoundException {
        ProviderInfo providerInfo = getProvider(context.getPackageManager(), request, context.getResources());
        if (providerInfo == null) {
            return new FontFamilyResult(1, null);
        }
        return new FontFamilyResult(0, getFontFromProvider(context, request, providerInfo.authority, cancellationSignal));
    }

    @VisibleForTesting
    @RestrictTo({Scope.LIBRARY_GROUP})
    @Nullable
    public static ProviderInfo getProvider(@NonNull PackageManager packageManager, @NonNull FontRequest request, @Nullable Resources resources) throws NameNotFoundException {
        String providerAuthority = request.getProviderAuthority();
        ProviderInfo info = packageManager.resolveContentProvider(providerAuthority, null);
        StringBuilder stringBuilder;
        if (info == null) {
            stringBuilder = new StringBuilder();
            stringBuilder.append("No package found for authority: ");
            stringBuilder.append(providerAuthority);
            throw new NameNotFoundException(stringBuilder.toString());
        } else if (info.packageName.equals(request.getProviderPackage())) {
            List<byte[]> signatures = convertToByteArrayList(packageManager.getPackageInfo(info.packageName, 64).signatures);
            Collections.sort(signatures, sByteArrayComparator);
            List<List<byte[]>> requestCertificatesList = getCertificates(request, resources);
            for (int i = 0; i < requestCertificatesList.size(); i++) {
                List<byte[]> requestSignatures = new ArrayList((Collection) requestCertificatesList.get(i));
                Collections.sort(requestSignatures, sByteArrayComparator);
                if (equalsByteArrayList(signatures, requestSignatures)) {
                    return info;
                }
            }
            return null;
        } else {
            stringBuilder = new StringBuilder();
            stringBuilder.append("Found content provider ");
            stringBuilder.append(providerAuthority);
            stringBuilder.append(", but package was not ");
            stringBuilder.append(request.getProviderPackage());
            throw new NameNotFoundException(stringBuilder.toString());
        }
    }

    private static List<List<byte[]>> getCertificates(FontRequest request, Resources resources) {
        if (request.getCertificates() != null) {
            return request.getCertificates();
        }
        return FontResourcesParserCompat.readCerts(resources, request.getCertificatesArrayResId());
    }

    private static boolean equalsByteArrayList(List<byte[]> signatures, List<byte[]> requestSignatures) {
        if (signatures.size() != requestSignatures.size()) {
            return false;
        }
        for (int i = 0; i < signatures.size(); i++) {
            if (!Arrays.equals((byte[]) signatures.get(i), (byte[]) requestSignatures.get(i))) {
                return false;
            }
        }
        return true;
    }

    private static List<byte[]> convertToByteArrayList(Signature[] signatures) {
        List<byte[]> shas = new ArrayList();
        for (Signature toByteArray : signatures) {
            shas.add(toByteArray.toByteArray());
        }
        return shas;
    }

    @VisibleForTesting
    @NonNull
    static FontInfo[] getFontFromProvider(Context context, FontRequest request, String authority, CancellationSignal cancellationSignal) {
        String str = authority;
        ArrayList<FontInfo> result = new ArrayList();
        Uri uri = new Builder().scheme("content").authority(str).build();
        Uri fileBaseUri = new Builder().scheme("content").authority(str).appendPath("file").build();
        Cursor cursor = null;
        try {
            if (VERSION.SDK_INT > 16) {
                cursor = context.getContentResolver().query(uri, new String[]{"_id", Columns.FILE_ID, Columns.TTC_INDEX, Columns.VARIATION_SETTINGS, Columns.WEIGHT, Columns.ITALIC, Columns.RESULT_CODE}, "query = ?", new String[]{request.getQuery()}, null, cancellationSignal);
            } else {
                cursor = context.getContentResolver().query(uri, new String[]{"_id", Columns.FILE_ID, Columns.TTC_INDEX, Columns.VARIATION_SETTINGS, Columns.WEIGHT, Columns.ITALIC, Columns.RESULT_CODE}, "query = ?", new String[]{request.getQuery()}, null);
            }
            if (cursor != null && cursor.getCount() > 0) {
                int resultCodeColumnIndex = cursor.getColumnIndex(Columns.RESULT_CODE);
                result = new ArrayList();
                int idColumnIndex = cursor.getColumnIndex("_id");
                int fileIdColumnIndex = cursor.getColumnIndex(Columns.FILE_ID);
                int ttcIndexColumnIndex = cursor.getColumnIndex(Columns.TTC_INDEX);
                int weightColumnIndex = cursor.getColumnIndex(Columns.WEIGHT);
                int italicColumnIndex = cursor.getColumnIndex(Columns.ITALIC);
                while (cursor.moveToNext()) {
                    Uri fileUri;
                    int resultCode = resultCodeColumnIndex != -1 ? cursor.getInt(resultCodeColumnIndex) : 0;
                    int ttcIndex = ttcIndexColumnIndex != -1 ? cursor.getInt(ttcIndexColumnIndex) : 0;
                    if (fileIdColumnIndex == -1) {
                        fileUri = ContentUris.withAppendedId(uri, cursor.getLong(idColumnIndex));
                    } else {
                        fileUri = ContentUris.withAppendedId(fileBaseUri, cursor.getLong(fileIdColumnIndex));
                    }
                    int weight = weightColumnIndex != -1 ? cursor.getInt(weightColumnIndex) : 400;
                    boolean italic = italicColumnIndex != -1 && cursor.getInt(italicColumnIndex) == 1;
                    result.add(new FontInfo(fileUri, ttcIndex, weight, italic, resultCode));
                }
            }
            if (cursor != null) {
                cursor.close();
            }
            return (FontInfo[]) result.toArray(new FontInfo[0]);
        } catch (Throwable th) {
            if (cursor != null) {
                cursor.close();
            }
        }
    }
}
