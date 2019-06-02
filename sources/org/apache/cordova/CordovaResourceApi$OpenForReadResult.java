package org.apache.cordova;

import android.content.res.AssetFileDescriptor;
import android.net.Uri;
import java.io.InputStream;

public final class CordovaResourceApi$OpenForReadResult {
    public final AssetFileDescriptor assetFd;
    public final InputStream inputStream;
    public final long length;
    public final String mimeType;
    public final Uri uri;

    public CordovaResourceApi$OpenForReadResult(Uri uri, InputStream inputStream, String mimeType, long length, AssetFileDescriptor assetFd) {
        this.uri = uri;
        this.inputStream = inputStream;
        this.mimeType = mimeType;
        this.length = length;
        this.assetFd = assetFd;
    }
}
