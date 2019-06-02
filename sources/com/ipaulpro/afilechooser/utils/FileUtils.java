package com.ipaulpro.afilechooser.utils;

import android.content.ContentUris;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build.VERSION;
import android.os.Environment;
import android.provider.DocumentsContract;
import android.provider.MediaStore.Audio;
import android.provider.MediaStore.Images.Media;
import android.provider.MediaStore.Video;
import android.webkit.MimeTypeMap;
import com.ianhanniballake.localstorage.LocalStorageProvider;
import java.io.File;
import java.io.FileFilter;
import java.text.DecimalFormat;
import java.util.Comparator;

public class FileUtils {
    private static final boolean DEBUG = false;
    public static final String HIDDEN_PREFIX = ".";
    public static final String MIME_TYPE_APP = "application/*";
    public static final String MIME_TYPE_AUDIO = "audio/*";
    public static final String MIME_TYPE_IMAGE = "image/*";
    public static final String MIME_TYPE_TEXT = "text/*";
    public static final String MIME_TYPE_VIDEO = "video/*";
    static final String TAG = "FileUtils";
    public static Comparator<File> sComparator = new C00321();
    public static FileFilter sDirFilter = new C00343();
    public static FileFilter sFileFilter = new C00332();

    /* renamed from: com.ipaulpro.afilechooser.utils.FileUtils$1 */
    static class C00321 implements Comparator<File> {
        C00321() {
        }

        public int compare(File f1, File f2) {
            return f1.getName().toLowerCase().compareTo(f2.getName().toLowerCase());
        }
    }

    /* renamed from: com.ipaulpro.afilechooser.utils.FileUtils$2 */
    static class C00332 implements FileFilter {
        C00332() {
        }

        public boolean accept(File file) {
            return file.isFile() && !file.getName().startsWith(FileUtils.HIDDEN_PREFIX);
        }
    }

    /* renamed from: com.ipaulpro.afilechooser.utils.FileUtils$3 */
    static class C00343 implements FileFilter {
        C00343() {
        }

        public boolean accept(File file) {
            return file.isDirectory() && !file.getName().startsWith(FileUtils.HIDDEN_PREFIX);
        }
    }

    private FileUtils() {
    }

    public static String getExtension(String uri) {
        if (uri == null) {
            return null;
        }
        int dot = uri.lastIndexOf(HIDDEN_PREFIX);
        if (dot >= 0) {
            return uri.substring(dot);
        }
        return "";
    }

    public static boolean isLocal(String url) {
        if (url == null || url.startsWith("http://") || url.startsWith("https://")) {
            return false;
        }
        return true;
    }

    public static boolean isMediaUri(Uri uri) {
        return "media".equalsIgnoreCase(uri.getAuthority());
    }

    public static Uri getUri(File file) {
        if (file != null) {
            return Uri.fromFile(file);
        }
        return null;
    }

    public static File getPathWithoutFilename(File file) {
        if (file == null) {
            return null;
        }
        if (file.isDirectory()) {
            return file;
        }
        String filename = file.getName();
        String filepath = file.getAbsolutePath();
        String pathwithoutname = filepath.substring(0, filepath.length() - filename.length());
        if (pathwithoutname.endsWith("/")) {
            pathwithoutname = pathwithoutname.substring(0, pathwithoutname.length() - 1);
        }
        return new File(pathwithoutname);
    }

    public static String getMimeType(File file) {
        String extension = getExtension(file.getName());
        if (extension.length() > 0) {
            return MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension.substring(1));
        }
        return "application/octet-stream";
    }

    public static String getMimeType(Context context, Uri uri) {
        return getMimeType(new File(getPath(context, uri)));
    }

    public static boolean isLocalStorageDocument(Uri uri) {
        return LocalStorageProvider.AUTHORITY.equals(uri.getAuthority());
    }

    public static boolean isExternalStorageDocument(Uri uri) {
        return "com.android.externalstorage.documents".equals(uri.getAuthority());
    }

    public static boolean isDownloadsDocument(Uri uri) {
        return "com.android.providers.downloads.documents".equals(uri.getAuthority());
    }

    public static boolean isMediaDocument(Uri uri) {
        return "com.android.providers.media.documents".equals(uri.getAuthority());
    }

    public static boolean isGooglePhotosUri(Uri uri) {
        return "com.google.android.apps.photos.content".equals(uri.getAuthority());
    }

    public static String getDataColumn(Context context, Uri uri, String selection, String[] selectionArgs) {
        Cursor cursor = null;
        String column = "_data";
        try {
            cursor = context.getContentResolver().query(uri, new String[]{"_data"}, selection, selectionArgs, null);
            if (cursor == null || !cursor.moveToFirst()) {
                if (cursor != null) {
                    cursor.close();
                }
                return null;
            }
            String string = cursor.getString(cursor.getColumnIndexOrThrow("_data"));
            if (cursor != null) {
                cursor.close();
            }
            return string;
        } catch (Throwable th) {
            if (cursor != null) {
                cursor.close();
            }
        }
    }

    public static String getPath(Context context, Uri uri) {
        if ((VERSION.SDK_INT >= 19) && DocumentsContract.isDocumentUri(context, uri)) {
            if (isLocalStorageDocument(uri)) {
                return DocumentsContract.getDocumentId(uri);
            }
            if (isExternalStorageDocument(uri)) {
                String[] split = DocumentsContract.getDocumentId(uri).split(":");
                if ("primary".equalsIgnoreCase(split[0])) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append(Environment.getExternalStorageDirectory());
                    stringBuilder.append("/");
                    stringBuilder.append(split[1]);
                    return stringBuilder.toString();
                }
            } else if (isDownloadsDocument(uri)) {
                return getDataColumn(context, ContentUris.withAppendedId(Uri.parse("content://downloads/public_downloads"), Long.valueOf(DocumentsContract.getDocumentId(uri)).longValue()), null, null);
            } else if (isMediaDocument(uri)) {
                String type = DocumentsContract.getDocumentId(uri).split(":")[0];
                Uri contentUri = null;
                if ("image".equals(type)) {
                    contentUri = Media.EXTERNAL_CONTENT_URI;
                } else if ("video".equals(type)) {
                    contentUri = Video.Media.EXTERNAL_CONTENT_URI;
                } else if ("audio".equals(type)) {
                    contentUri = Audio.Media.EXTERNAL_CONTENT_URI;
                }
                String selection = "_id=?";
                return getDataColumn(context, contentUri, "_id=?", new String[]{split[1]});
            }
        } else if ("content".equalsIgnoreCase(uri.getScheme())) {
            if (isGooglePhotosUri(uri)) {
                return uri.getLastPathSegment();
            }
            return getDataColumn(context, uri, null, null);
        } else if ("file".equalsIgnoreCase(uri.getScheme())) {
            return uri.getPath();
        }
        return null;
    }

    public static File getFile(Context context, Uri uri) {
        if (uri != null) {
            String path = getPath(context, uri);
            if (path != null && isLocal(path)) {
                return new File(path);
            }
        }
        return null;
    }

    public static String getReadableFileSize(int size) {
        DecimalFormat dec = new DecimalFormat("###.#");
        String KILOBYTES = " KB";
        String MEGABYTES = " MB";
        String GIGABYTES = " GB";
        float fileSize = 0.0f;
        String suffix = " KB";
        if (size > 1024) {
            fileSize = (float) (size / 1024);
            if (fileSize > 1024.0f) {
                fileSize /= 1024.0f;
                if (fileSize > 1024.0f) {
                    fileSize /= 1024.0f;
                    suffix = " GB";
                } else {
                    suffix = " MB";
                }
            }
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(dec.format((double) fileSize));
        stringBuilder.append(suffix);
        return String.valueOf(stringBuilder.toString());
    }

    public static Bitmap getThumbnail(Context context, File file) {
        return getThumbnail(context, getUri(file), getMimeType(file));
    }

    public static Bitmap getThumbnail(Context context, Uri uri) {
        return getThumbnail(context, uri, getMimeType(context, uri));
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public static android.graphics.Bitmap getThumbnail(android.content.Context r10, android.net.Uri r11, java.lang.String r12) {
        /*
        r0 = isMediaUri(r11);
        r1 = 0;
        if (r0 != 0) goto L_0x000f;
    L_0x0007:
        r0 = "FileUtils";
        r2 = "You can only retrieve thumbnails for images and videos.";
        android.util.Log.e(r0, r2);
        return r1;
    L_0x000f:
        r0 = 0;
        if (r11 == 0) goto L_0x0062;
    L_0x0012:
        r8 = r10.getContentResolver();
        r9 = 0;
        r4 = 0;
        r5 = 0;
        r6 = 0;
        r7 = 0;
        r2 = r8;
        r3 = r11;
        r2 = r2.query(r3, r4, r5, r6, r7);	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        r9 = r2;
        r2 = r9.moveToFirst();	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        if (r2 == 0) goto L_0x004d;
    L_0x0028:
        r2 = 0;
        r2 = r9.getInt(r2);	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        r3 = "video";
        r3 = r12.contains(r3);	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        r4 = 1;
        if (r3 == 0) goto L_0x003d;
    L_0x0036:
        r5 = (long) r2;	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        r1 = android.provider.MediaStore.Video.Thumbnails.getThumbnail(r8, r5, r4, r1);	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        r0 = r1;
        goto L_0x004e;
    L_0x003d:
        r3 = "image/*";
        r3 = r12.contains(r3);	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        if (r3 == 0) goto L_0x004c;
    L_0x0045:
        r5 = (long) r2;	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        r1 = android.provider.MediaStore.Images.Thumbnails.getThumbnail(r8, r5, r4, r1);	 Catch:{ Exception -> 0x005e, all -> 0x0055 }
        r0 = r1;
        goto L_0x004e;
    L_0x004c:
        goto L_0x004e;
    L_0x004e:
        if (r9 == 0) goto L_0x0054;
    L_0x0050:
        r9.close();
        goto L_0x0063;
    L_0x0054:
        goto L_0x0063;
    L_0x0055:
        r1 = move-exception;
        if (r9 == 0) goto L_0x005c;
    L_0x0058:
        r9.close();
        goto L_0x005d;
    L_0x005d:
        throw r1;
    L_0x005e:
        r1 = move-exception;
        if (r9 == 0) goto L_0x0054;
    L_0x0061:
        goto L_0x0050;
    L_0x0063:
        return r0;
        */
        throw new UnsupportedOperationException("Method not decompiled: com.ipaulpro.afilechooser.utils.FileUtils.getThumbnail(android.content.Context, android.net.Uri, java.lang.String):android.graphics.Bitmap");
    }

    public static Intent createGetContentIntent() {
        Intent intent = new Intent("android.intent.action.GET_CONTENT");
        intent.setType("*/*");
        intent.addCategory("android.intent.category.OPENABLE");
        return intent;
    }
}
