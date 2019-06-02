package com.outsystems.plugins.oscache.cache.types;

import android.support.annotation.NonNull;
import android.webkit.MimeTypeMap;
import com.outsystems.plugins.oscache.cache.helpers.MimeTypesHelper;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import org.json.JSONException;
import org.json.JSONObject;

public class CacheEntry {
    private static final String CACHE_ENTRY_CACHE_VERSIONS = "cacheVersions";
    private static final String CACHE_ENTRY_ENCODING = "encoding";
    private static final String CACHE_ENTRY_FILENAME = "fileName";
    private static final String CACHE_ENTRY_MIME_TYPE = "mimeType";
    private static final String CACHE_ENTRY_NO_CACHE = "noCache";
    private static final String CACHE_ENTRY_PREBUNDLED = "preBundled";
    private static final String CACHE_ENTRY_RESOURCE_MAPPING = "resourceMapping";
    private static final String CACHE_ENTRY_RESOURCE_TO_DELETE = "resourceToDelete";
    private static final String CACHE_ENTRY_STATUS = "status";
    private static final String CACHE_ENTRY_URL = "url";
    private static final String DEFAULT_ENCODING = "UTF-8";
    private Map<String, String> cacheVersions;
    private String encoding;
    private String fileName;
    private String mimeType;
    private boolean noCache;
    private boolean preBundled;
    private boolean resourceMapping;
    private boolean resourceToDelete;
    private CacheEntryStatus status;
    private String url;

    public CacheEntry(@NonNull String url, @NonNull String fileName, @NonNull String mimeType, boolean preBundled) {
        this.url = url;
        this.fileName = fileName;
        this.mimeType = mimeType;
        this.preBundled = preBundled;
        this.encoding = DEFAULT_ENCODING;
        this.resourceMapping = false;
        this.noCache = false;
        this.status = CacheEntryStatus.UNCACHED;
        this.cacheVersions = new HashMap();
    }

    public CacheEntry(@NonNull CacheEntry cacheEntry) {
        this.url = cacheEntry.url;
        this.fileName = cacheEntry.fileName;
        this.mimeType = cacheEntry.mimeType;
        this.encoding = cacheEntry.encoding;
        this.preBundled = cacheEntry.preBundled;
        this.resourceMapping = cacheEntry.resourceMapping;
        this.noCache = cacheEntry.noCache;
        this.status = cacheEntry.status;
        this.cacheVersions = new HashMap(cacheEntry.cacheVersions);
    }

    public CacheEntry(@NonNull JSONObject jsonObject) throws JSONException {
        if (jsonObject.has(CACHE_ENTRY_URL)) {
            this.url = jsonObject.getString(CACHE_ENTRY_URL);
        }
        if (jsonObject.has(CACHE_ENTRY_FILENAME)) {
            this.fileName = jsonObject.getString(CACHE_ENTRY_FILENAME);
        }
        if (jsonObject.has(CACHE_ENTRY_MIME_TYPE)) {
            this.mimeType = jsonObject.getString(CACHE_ENTRY_MIME_TYPE);
        }
        if (jsonObject.has(CACHE_ENTRY_ENCODING)) {
            this.encoding = jsonObject.getString(CACHE_ENTRY_ENCODING);
        } else {
            this.encoding = DEFAULT_ENCODING;
        }
        if (jsonObject.has(CACHE_ENTRY_PREBUNDLED)) {
            this.preBundled = jsonObject.getBoolean(CACHE_ENTRY_PREBUNDLED);
        }
        if (jsonObject.has(CACHE_ENTRY_RESOURCE_MAPPING)) {
            this.resourceMapping = jsonObject.getBoolean(CACHE_ENTRY_RESOURCE_MAPPING);
        }
        if (jsonObject.has(CACHE_ENTRY_NO_CACHE)) {
            this.noCache = jsonObject.getBoolean(CACHE_ENTRY_NO_CACHE);
        }
        if (jsonObject.has("status")) {
            this.status = CacheEntryStatus.getStatusForValue(jsonObject.getInt("status"));
        } else {
            this.status = CacheEntryStatus.UNCACHED;
        }
        if (jsonObject.has(CACHE_ENTRY_RESOURCE_TO_DELETE)) {
            this.resourceToDelete = jsonObject.getBoolean(CACHE_ENTRY_RESOURCE_TO_DELETE);
        }
        this.cacheVersions = new HashMap();
        if (jsonObject.has(CACHE_ENTRY_CACHE_VERSIONS)) {
            JSONObject versions = jsonObject.getJSONObject(CACHE_ENTRY_CACHE_VERSIONS);
            Iterator<String> iterator = versions.keys();
            while (iterator.hasNext()) {
                String key = (String) iterator.next();
                this.cacheVersions.put(key, versions.getString(key));
            }
        }
    }

    @NonNull
    public JSONObject toJSONObject() throws JSONException {
        JSONObject result = new JSONObject();
        result.put(CACHE_ENTRY_URL, this.url);
        result.put(CACHE_ENTRY_FILENAME, this.fileName);
        result.put(CACHE_ENTRY_MIME_TYPE, this.mimeType);
        result.put(CACHE_ENTRY_ENCODING, this.encoding);
        result.put(CACHE_ENTRY_PREBUNDLED, this.preBundled);
        result.put(CACHE_ENTRY_RESOURCE_MAPPING, this.resourceMapping);
        result.put(CACHE_ENTRY_NO_CACHE, this.noCache);
        result.put("status", this.status.getValue());
        boolean z = this.resourceToDelete;
        if (z) {
            result.put(CACHE_ENTRY_RESOURCE_TO_DELETE, z);
        }
        JSONObject versions = new JSONObject();
        for (String key : this.cacheVersions.keySet()) {
            versions.put(key, key);
        }
        result.put(CACHE_ENTRY_CACHE_VERSIONS, versions);
        return result;
    }

    public void healMimeType() {
        this.mimeType = MimeTypesHelper.getInstance().getMimeType(MimeTypeMap.getFileExtensionFromUrl(this.url));
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getFileName() {
        return this.fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getMimeType() {
        return this.mimeType;
    }

    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }

    public String getEncoding() {
        return this.encoding;
    }

    public void setEncoding(String encoding) {
        this.encoding = encoding;
    }

    public boolean isPreBundled() {
        return this.preBundled;
    }

    public void setPreBundled(boolean preBundled) {
        this.preBundled = preBundled;
    }

    public boolean isResourceMapping() {
        return this.resourceMapping;
    }

    public void setResourceMapping(boolean resourceMapping) {
        this.resourceMapping = resourceMapping;
    }

    public boolean isNoCache() {
        return this.noCache;
    }

    public void setNoCache(boolean noCache) {
        this.noCache = noCache;
    }

    public synchronized CacheEntryStatus getStatus() {
        return this.status;
    }

    public synchronized void setStatus(CacheEntryStatus status) {
        this.status = status;
    }

    public Map<String, String> getCacheVersions() {
        return this.cacheVersions;
    }

    public void setCacheVersions(Map<String, String> cacheVersions) {
        this.cacheVersions = cacheVersions;
    }

    public boolean isResourceToDelete() {
        return this.resourceToDelete;
    }

    public void setResourceToDelete(boolean resourceToDelete) {
        this.resourceToDelete = resourceToDelete;
    }
}
