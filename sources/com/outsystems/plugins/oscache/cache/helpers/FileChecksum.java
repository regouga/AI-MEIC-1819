package com.outsystems.plugins.oscache.cache.helpers;

import android.support.annotation.NonNull;
import android.util.Base64;
import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.security.DigestInputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

public class FileChecksum {
    private static final String MD5_ALGORITHM = "MD5";
    private static final int UUID_BUFFER_LENGTH = 16;

    @NonNull
    private static byte[] calculateMd5Hash(@NonNull InputStream inputStream) throws IOException, NoSuchAlgorithmException {
        MessageDigest messageDigest = MessageDigest.getInstance(MD5_ALGORITHM);
        DigestInputStream digestInputStream = new DigestInputStream(inputStream, messageDigest);
        digestInputStream.read(new byte[digestInputStream.available()]);
        digestInputStream.close();
        return messageDigest.digest();
    }

    @NonNull
    private static UUID createUuidFromBytes(@NonNull byte[] bytes) {
        ByteBuffer bb = ByteBuffer.wrap(bytes);
        return new UUID(bb.getLong(), bb.getLong());
    }

    @NonNull
    private static byte[] getUuidAsBytes(@NonNull UUID uuid) {
        ByteBuffer bb = ByteBuffer.wrap(new byte[16]);
        bb.putLong(uuid.getMostSignificantBits());
        bb.putLong(uuid.getLeastSignificantBits());
        return bb.array();
    }

    @NonNull
    private static String serializeToString(@NonNull UUID uuid) {
        return Base64.encodeToString(getUuidAsBytes(uuid), 2).replace("/", "_").replace("=", "");
    }

    @NonNull
    private static String contentHashOfData(@NonNull byte[] md5hash) {
        return serializeToString(createUuidFromBytes(md5hash));
    }

    @NonNull
    public static String getContentHash(@NonNull InputStream inputStream) throws IOException, NoSuchAlgorithmException {
        return contentHashOfData(calculateMd5Hash(inputStream));
    }
}
