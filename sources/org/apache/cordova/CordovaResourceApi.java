package org.apache.cordova;

import android.content.ContentResolver;
import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Looper;
import android.util.Base64;
import android.webkit.MimeTypeMap;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.channels.FileChannel;
import java.util.Locale;

public class CordovaResourceApi {
    private static final String[] LOCAL_FILE_PROJECTION = new String[]{"_data"};
    private static final String LOG_TAG = "CordovaResourceApi";
    public static final String PLUGIN_URI_SCHEME = "cdvplugin";
    public static final int URI_TYPE_ASSET = 1;
    public static final int URI_TYPE_CONTENT = 2;
    public static final int URI_TYPE_DATA = 4;
    public static final int URI_TYPE_FILE = 0;
    public static final int URI_TYPE_HTTP = 5;
    public static final int URI_TYPE_HTTPS = 6;
    public static final int URI_TYPE_PLUGIN = 7;
    public static final int URI_TYPE_RESOURCE = 3;
    public static final int URI_TYPE_UNKNOWN = -1;
    public static Thread jsThread;
    private final AssetManager assetManager;
    private final ContentResolver contentResolver;
    private final PluginManager pluginManager;
    private boolean threadCheckingEnabled = true;

    public CordovaResourceApi(Context context, PluginManager pluginManager) {
        this.contentResolver = context.getContentResolver();
        this.assetManager = context.getAssets();
        this.pluginManager = pluginManager;
    }

    public void setThreadCheckingEnabled(boolean value) {
        this.threadCheckingEnabled = value;
    }

    public boolean isThreadCheckingEnabled() {
        return this.threadCheckingEnabled;
    }

    public static int getUriType(Uri uri) {
        assertNonRelative(uri);
        String scheme = uri.getScheme();
        if ("content".equalsIgnoreCase(scheme)) {
            return 2;
        }
        if ("android.resource".equalsIgnoreCase(scheme)) {
            return 3;
        }
        if ("file".equalsIgnoreCase(scheme)) {
            if (uri.getPath().startsWith("/android_asset/")) {
                return 1;
            }
            return 0;
        } else if ("data".equalsIgnoreCase(scheme)) {
            return 4;
        } else {
            if ("http".equalsIgnoreCase(scheme)) {
                return 5;
            }
            if ("https".equalsIgnoreCase(scheme)) {
                return 6;
            }
            if (PLUGIN_URI_SCHEME.equalsIgnoreCase(scheme)) {
                return 7;
            }
            return -1;
        }
    }

    public Uri remapUri(Uri uri) {
        assertNonRelative(uri);
        Uri pluginUri = this.pluginManager.remapUri(uri);
        return pluginUri != null ? pluginUri : uri;
    }

    public String remapPath(String path) {
        return remapUri(Uri.fromFile(new File(path))).getPath();
    }

    public File mapUriToFile(Uri uri) {
        assertBackgroundThread();
        int uriType = getUriType(uri);
        if (uriType == 0) {
            return new File(uri.getPath());
        }
        if (uriType == 2) {
            File file = uri;
            Cursor cursor = this.contentResolver.query(file, LOCAL_FILE_PROJECTION, null, null, null);
            if (cursor != null) {
                try {
                    int columnIndex = cursor.getColumnIndex(LOCAL_FILE_PROJECTION[0]);
                    if (columnIndex != -1 && cursor.getCount() > 0) {
                        cursor.moveToFirst();
                        String realPath = cursor.getString(columnIndex);
                        if (realPath != null) {
                            file = new File(realPath);
                            return file;
                        }
                    }
                    cursor.close();
                } finally {
                    cursor.close();
                }
            }
        }
        return null;
    }

    public String getMimeType(Uri uri) {
        switch (getUriType(uri)) {
            case 0:
            case 1:
                return getMimeTypeFromPath(uri.getPath());
            case 2:
            case 3:
                return this.contentResolver.getType(uri);
            case 4:
                return getDataUriMimeType(uri);
            case 5:
            case 6:
                try {
                    HttpURLConnection conn = (HttpURLConnection) new URL(uri.toString()).openConnection();
                    conn.setDoInput(false);
                    conn.setRequestMethod("HEAD");
                    String mimeType = conn.getHeaderField("Content-Type");
                    if (mimeType != null) {
                        mimeType = mimeType.split(";")[0];
                    }
                    return mimeType;
                } catch (IOException e) {
                    break;
                }
            default:
                break;
        }
        return null;
    }

    private String getMimeTypeFromPath(String path) {
        String extension = path;
        int lastDot = extension.lastIndexOf(46);
        if (lastDot != -1) {
            extension = extension.substring(lastDot + 1);
        }
        extension = extension.toLowerCase(Locale.getDefault());
        if (extension.equals("3ga")) {
            return "audio/3gpp";
        }
        if (extension.equals("js")) {
            return "text/javascript";
        }
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension);
    }

    public CordovaResourceApi$OpenForReadResult openForRead(Uri uri) throws IOException {
        return openForRead(uri, false);
    }

    public CordovaResourceApi$OpenForReadResult openForRead(Uri uri, boolean skipThreadCheck) throws IOException {
        CordovaResourceApi cordovaResourceApi = this;
        Uri uri2 = uri;
        if (!skipThreadCheck) {
            assertBackgroundThread();
        }
        String assetPath;
        switch (getUriType(uri)) {
            case 0:
                FileInputStream inputStream = new FileInputStream(uri.getPath());
                return new CordovaResourceApi$OpenForReadResult(uri, inputStream, getMimeTypeFromPath(uri.getPath()), inputStream.getChannel().size(), null);
            case 1:
                InputStream inputStream2;
                AssetFileDescriptor assetFd;
                long length;
                assetPath = uri.getPath().substring(15);
                AssetFileDescriptor assetFd2 = null;
                try {
                    assetFd2 = cordovaResourceApi.assetManager.openFd(assetPath);
                    inputStream2 = assetFd2.createInputStream();
                    assetFd = assetFd2;
                    length = assetFd2.getLength();
                } catch (FileNotFoundException e) {
                    InputStream inputStream3 = cordovaResourceApi.assetManager.open(assetPath);
                    assetFd = assetFd2;
                    length = (long) inputStream3.available();
                    inputStream2 = inputStream3;
                }
                return new CordovaResourceApi$OpenForReadResult(uri, inputStream2, getMimeTypeFromPath(assetPath), length, assetFd);
            case 2:
            case 3:
                String mimeType = cordovaResourceApi.contentResolver.getType(uri2);
                AssetFileDescriptor assetFd3 = cordovaResourceApi.contentResolver.openAssetFileDescriptor(uri2, "r");
                return new CordovaResourceApi$OpenForReadResult(uri, assetFd3.createInputStream(), mimeType, assetFd3.getLength(), assetFd3);
            case 4:
                CordovaResourceApi$OpenForReadResult ret = readDataUri(uri);
                if (ret == null) {
                    break;
                }
                return ret;
            case 5:
            case 6:
                HttpURLConnection conn = (HttpURLConnection) new URL(uri.toString()).openConnection();
                conn.setDoInput(true);
                String mimeType2 = conn.getHeaderField("Content-Type");
                if (mimeType2 != null) {
                    assetPath = mimeType2.split(";")[0];
                } else {
                    assetPath = mimeType2;
                }
                int length2 = conn.getContentLength();
                return new CordovaResourceApi$OpenForReadResult(uri, conn.getInputStream(), assetPath, (long) length2, null);
            case 7:
                CordovaPlugin plugin = cordovaResourceApi.pluginManager.getPlugin(uri.getHost());
                if (plugin != null) {
                    return plugin.handleOpenForRead(uri2);
                }
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Invalid plugin ID in URI: ");
                stringBuilder.append(uri2);
                throw new FileNotFoundException(stringBuilder.toString());
            default:
                break;
        }
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append("URI not supported by CordovaResourceApi: ");
        stringBuilder2.append(uri2);
        throw new FileNotFoundException(stringBuilder2.toString());
    }

    public OutputStream openOutputStream(Uri uri) throws IOException {
        return openOutputStream(uri, false);
    }

    public OutputStream openOutputStream(Uri uri, boolean append) throws IOException {
        assertBackgroundThread();
        int uriType = getUriType(uri);
        if (uriType != 0) {
            switch (uriType) {
                case 2:
                case 3:
                    return this.contentResolver.openAssetFileDescriptor(uri, append ? "wa" : "w").createOutputStream();
                default:
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("URI not supported by CordovaResourceApi: ");
                    stringBuilder.append(uri);
                    throw new FileNotFoundException(stringBuilder.toString());
            }
        }
        File localFile = new File(uri.getPath());
        File parent = localFile.getParentFile();
        if (parent != null) {
            parent.mkdirs();
        }
        return new FileOutputStream(localFile, append);
    }

    public HttpURLConnection createHttpConnection(Uri uri) throws IOException {
        assertBackgroundThread();
        return (HttpURLConnection) new URL(uri.toString()).openConnection();
    }

    public void copyResource(CordovaResourceApi$OpenForReadResult input, OutputStream outputStream) throws IOException {
        assertBackgroundThread();
        try {
            InputStream inputStream = input.inputStream;
            if ((inputStream instanceof FileInputStream) && (outputStream instanceof FileOutputStream)) {
                long offset;
                FileChannel inChannel = ((FileInputStream) input.inputStream).getChannel();
                FileChannel outChannel = ((FileOutputStream) outputStream).getChannel();
                long length = input.length;
                if (input.assetFd != null) {
                    offset = input.assetFd.getStartOffset();
                } else {
                    offset = 0;
                }
                inChannel.position(offset);
                outChannel.transferFrom(inChannel, 0, length);
            } else {
                byte[] buffer = new byte[8192];
                while (true) {
                    int bytesRead = inputStream.read(buffer, 0, 8192);
                    if (bytesRead <= 0) {
                        break;
                    }
                    outputStream.write(buffer, 0, bytesRead);
                }
            }
            input.inputStream.close();
            if (outputStream != null) {
                outputStream.close();
            }
        } catch (Throwable th) {
            input.inputStream.close();
            if (outputStream != null) {
                outputStream.close();
            }
        }
    }

    public void copyResource(Uri sourceUri, OutputStream outputStream) throws IOException {
        copyResource(openForRead(sourceUri), outputStream);
    }

    public void copyResource(Uri sourceUri, Uri dstUri) throws IOException {
        copyResource(openForRead(sourceUri), openOutputStream(dstUri));
    }

    private void assertBackgroundThread() {
        if (this.threadCheckingEnabled) {
            Thread curThread = Thread.currentThread();
            if (curThread == Looper.getMainLooper().getThread()) {
                throw new IllegalStateException("Do not perform IO operations on the UI thread. Use CordovaInterface.getThreadPool() instead.");
            } else if (curThread == jsThread) {
                throw new IllegalStateException("Tried to perform an IO operation on the WebCore thread. Use CordovaInterface.getThreadPool() instead.");
            }
        }
    }

    private String getDataUriMimeType(Uri uri) {
        String uriAsString = uri.getSchemeSpecificPart();
        int commaPos = uriAsString.indexOf(44);
        if (commaPos == -1) {
            return null;
        }
        String[] mimeParts = uriAsString.substring(0, commaPos).split(";");
        if (mimeParts.length > 0) {
            return mimeParts[0];
        }
        return null;
    }

    private CordovaResourceApi$OpenForReadResult readDataUri(Uri uri) {
        String uriAsString = uri.getSchemeSpecificPart();
        int commaPos = uriAsString.indexOf(44);
        if (commaPos == -1) {
            return null;
        }
        byte[] data;
        String[] mimeParts = uriAsString.substring(0, commaPos).split(";");
        String contentType = null;
        boolean base64 = false;
        if (mimeParts.length > 0) {
            contentType = mimeParts[0];
        }
        for (int i = 1; i < mimeParts.length; i++) {
            if ("base64".equalsIgnoreCase(mimeParts[i])) {
                base64 = true;
            }
        }
        String dataPartAsString = uriAsString.substring(commaPos + 1);
        if (base64) {
            data = Base64.decode(dataPartAsString, 0);
        } else {
            try {
                data = dataPartAsString.getBytes("UTF-8");
            } catch (UnsupportedEncodingException e) {
                data = dataPartAsString.getBytes();
            }
        }
        return new CordovaResourceApi$OpenForReadResult(uri, new ByteArrayInputStream(data), contentType, (long) data.length, null);
    }

    private static void assertNonRelative(Uri uri) {
        if (!uri.isAbsolute()) {
            throw new IllegalArgumentException("Relative URIs are not supported.");
        }
    }
}
