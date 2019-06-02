package com.outsystems.plugins.oscache.cache.helpers;

import android.content.Context;
import android.content.res.AssetManager;
import android.support.annotation.NonNull;
import com.outsystems.plugins.oscache.OSCache;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import org.json.JSONObject;

public class MimeTypesHelper {
    private static final String DEFAULT_MIMETYPE = "*/*";
    private static final int INITIAL_CAPACITY = 495;
    private static final String MIMETYPE_JSON_OBJECT = "mimeTypes";
    private static MimeTypesHelper instance;
    private final AssetManager assetManager;
    private Logger logger = OSLogger.getInstance();
    final Map<String, String> supportedMimeTypes;

    private MimeTypesHelper(@NonNull Context context) {
        this.assetManager = context.getApplicationContext().getAssets();
        this.supportedMimeTypes = new HashMap(INITIAL_CAPACITY);
    }

    public static synchronized void init(@NonNull Context context) {
        synchronized (MimeTypesHelper.class) {
            if (instance == null) {
                instance = new MimeTypesHelper(context);
            }
        }
    }

    public static MimeTypesHelper getInstance() {
        return instance;
    }

    void loadDefaultMimeTypes() {
        this.logger.logDebug("Loading default mime types", OSCache.CORDOVA_SERVICE_NAME);
        this.supportedMimeTypes.put("js", "text/javascript");
        this.supportedMimeTypes.put("css", "text/css");
        this.supportedMimeTypes.put("png", "image/png");
        this.supportedMimeTypes.put("gif", "image/gif");
        this.supportedMimeTypes.put("wav", "audio/wav");
        this.supportedMimeTypes.put("svg", "img/svg");
        this.supportedMimeTypes.put("html", "text/html");
        this.supportedMimeTypes.put("woff", "application/font-woff");
        this.supportedMimeTypes.put("woff2", "application/font-woff2");
        this.supportedMimeTypes.put("ttf", "application/octet-stream");
        this.supportedMimeTypes.put("json", "application/json");
    }

    public void loadMimeTypes(@NonNull String assetPath) {
        InputStream inputStream = null;
        try {
            inputStream = this.assetManager.open(assetPath);
            byte[] data = new byte[inputStream.available()];
            inputStream.read(data);
            JSONObject mimeTypes = new JSONObject(new String(data, "UTF-8")).getJSONObject(MIMETYPE_JSON_OBJECT);
            Iterator<String> keys = mimeTypes.keys();
            while (keys.hasNext()) {
                String currentKey = (String) keys.next();
                this.supportedMimeTypes.put(currentKey, mimeTypes.getString(currentKey));
            }
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Throwable e) {
                    this.logger.logError("Could not close InputStream while loading mimetypes", OSCache.CORDOVA_SERVICE_NAME, e);
                }
            }
        } catch (Throwable e2) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to load mime types from manifest: ");
            stringBuilder.append(e2.getMessage());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e2);
            loadDefaultMimeTypes();
            if (inputStream != null) {
                inputStream.close();
            }
        } catch (Throwable th) {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Throwable e3) {
                    this.logger.logError("Could not close InputStream while loading mimetypes", OSCache.CORDOVA_SERVICE_NAME, e3);
                }
            }
        }
    }

    @NonNull
    public String getMimeType(@NonNull String extension) {
        String mimeType = (String) this.supportedMimeTypes.get(extension);
        if (mimeType != null) {
            return mimeType;
        }
        Logger logger = this.logger;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Invalid extension ");
        stringBuilder.append(extension);
        stringBuilder.append(" while fetching MIME type");
        logger.logWarning(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
        return DEFAULT_MIMETYPE;
    }
}
