package com.outsystems.plugins.manifest;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import com.outsystems.plugins.manifest.interfaces.ManifestParserEngine;
import com.outsystems.plugins.manifest.types.Manifest;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.json.JSONException;
import org.json.JSONObject;

public class OSManifestParser implements ManifestParserEngine {
    private static final OSManifestParser INSTANCE = new OSManifestParser();
    private static final String MANIFEST_FILE = "manifest.json";
    private static final String MANIFEST_JSON_OBJECT = "manifest";
    private static final String RESOURCE_JSON_OBJECT = "urlVersions";
    private static final String URLMAPPINGS_JSON_OBJECT = "urlMappings";
    private static final String URLMAPPINGS_NOCACHE_JSON_OBJECT = "urlMappingsNoCache";
    private static final String VERSION_JSON_OBJECT = "versionToken";
    private Logger logger = OSLogger.getInstance();

    public static OSManifestParser getInstance() {
        return INSTANCE;
    }

    Map<String, String> getUrlMappingsFromJSON(@NonNull JSONObject manifest, boolean withCache) throws JSONException {
        JSONObject urlMappingsObject = manifest.getJSONObject(withCache ? URLMAPPINGS_JSON_OBJECT : URLMAPPINGS_NOCACHE_JSON_OBJECT);
        JSONObject urlVersionsObject = manifest.getJSONObject(RESOURCE_JSON_OBJECT);
        Map<String, String> urlMappings = new HashMap();
        Iterator<String> iterator = urlMappingsObject.keys();
        while (iterator.hasNext()) {
            String url = (String) iterator.next();
            String resourceUrl = urlMappingsObject.getString(url);
            if (resourceUrl.contains("?")) {
                urlMappings.put(url, resourceUrl);
            } else {
                String resourceVersion = urlVersionsObject.getString(resourceUrl);
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append(resourceUrl);
                stringBuilder.append(resourceVersion);
                urlMappings.put(url, stringBuilder.toString());
            }
        }
        return urlMappings;
    }

    List<String> getUrlVersionsFromJSON(@NonNull JSONObject manifest) throws JSONException {
        JSONObject urlVersions = manifest.getJSONObject(RESOURCE_JSON_OBJECT);
        List<String> resources = new ArrayList();
        Iterator<String> iterator = urlVersions.keys();
        while (iterator.hasNext()) {
            String key = (String) iterator.next();
            String value = urlVersions.getString(key);
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(key);
            stringBuilder.append(value);
            resources.add(stringBuilder.toString());
        }
        return resources;
    }

    public Manifest getManifestInfo(@NonNull JSONObject jsonObject) {
        try {
            JSONObject manifestObject = jsonObject.getJSONObject(MANIFEST_JSON_OBJECT);
            Manifest manifest = new Manifest(manifestObject.getString(VERSION_JSON_OBJECT));
            if (manifestObject.has(RESOURCE_JSON_OBJECT)) {
                manifest.setUrlVersions(getUrlVersionsFromJSON(manifestObject));
            }
            if (manifestObject.has(URLMAPPINGS_JSON_OBJECT)) {
                manifest.setUrlMappings(getUrlMappingsFromJSON(manifestObject, true));
            }
            if (manifestObject.has(URLMAPPINGS_NOCACHE_JSON_OBJECT)) {
                manifest.setUrlMappingsNoCache(getUrlMappingsFromJSON(manifestObject, false));
            }
            return manifest;
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to parse manifest file with error: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), "OSManifest", e);
            return null;
        }
    }

    public String getManifestVersion(@NonNull JSONObject jsonObject) {
        try {
            return jsonObject.getJSONObject(MANIFEST_JSON_OBJECT).getString(VERSION_JSON_OBJECT);
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to parse manifest file with error: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), "OSManifest", e);
            return null;
        }
    }

    public String getManifestUrl(@Nullable String version) {
        String url = MANIFEST_FILE;
        if (version == null) {
            return url;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(url);
        stringBuilder.append("?");
        stringBuilder.append(version);
        return stringBuilder.toString();
    }
}
