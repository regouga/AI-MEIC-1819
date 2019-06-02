package com.outsystems.plugins.oscache.cache.types;

import android.content.Context;
import android.net.Uri;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.webkit.MimeTypeMap;
import com.outsystems.plugins.oscache.OSCache;
import com.outsystems.plugins.oscache.cache.NativeCache;
import com.outsystems.plugins.oscache.cache.helpers.FileChecksum;
import com.outsystems.plugins.oscache.cache.helpers.MimeTypesHelper;
import com.outsystems.plugins.oscache.cache.interfaces.CacheDownloadListener;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request.Builder;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class CacheResources {
    private static final String CACHE_RESOURCES_APPLICATION = "application";
    private static final String CACHE_RESOURCES_FRAME_TO_DELETE = "frameToDelete";
    private static final String CACHE_RESOURCES_HOSTNAME = "hostname";
    private static final String CACHE_RESOURCES_RESOURCES = "resources";
    private static final String CACHE_RESOURCES_STATUS = "status";
    private static final String CACHE_RESOURCES_URL_MAPPINGS = "urlMappings";
    private static final String CACHE_RESOURCES_URL_MAPPINGS_NO_CACHE = "urlMappingsNoCache";
    private static final String CACHE_RESOURCES_VERSION_TOKEN = "versionToken";
    private static final String DEFAULT_ENCODING = "UTF-8";
    private static final String NATIVE_CACHE_DIRECTORY = "OSNativeCache";
    private static final Pattern PATTERN_CONTENT_TYPE = Pattern.compile("^([a-zA-Z]+\\/[a-zA-Z0-9]+(?:[-+.][a-zA-Z0-9]+)*)(?:.+?(charset=[a-zA-Z0-9]+(?:[-+._][a-zA-Z0-9]+)*).*)*");
    boolean allResourcesDownloaded;
    private String application;
    private Map<String, CacheEntry> cacheEntries;
    private Context context;
    private CacheDownloadListener downloadListener;
    private boolean frameToDelete;
    private String hostname;
    private OkHttpClient httpClient;
    int initialResourcesCount;
    private Logger logger;
    private int maxNumberOfRetries;
    int numberOfRetries;
    private boolean preBundled;
    int processedResourcesCount;
    private CacheFrameStatus status;
    int totalResourcesCount;
    private String versionToken;

    class InvalidResourceException extends Exception {
        InvalidResourceException(String message) {
            super(message);
        }
    }

    public CacheResources(@NonNull String hostname, @NonNull String application, @NonNull String version, boolean preBundled, @Nullable Map<String, CacheEntry> cacheEntries, @Nullable CacheDownloadListener downloadListener, @Nullable OkHttpClient httpClient, @NonNull Context context) {
        this.logger = OSLogger.getInstance();
        this.versionToken = version;
        this.hostname = hostname;
        this.application = application;
        this.preBundled = preBundled;
        this.cacheEntries = cacheEntries != null ? cacheEntries : new HashMap();
        this.downloadListener = downloadListener;
        this.httpClient = httpClient;
        this.context = context.getApplicationContext();
        this.status = CacheFrameStatus.EMPTY;
        this.initialResourcesCount = 0;
        this.processedResourcesCount = 0;
        this.totalResourcesCount = 0;
    }

    public CacheResources(@NonNull String hostname, @NonNull String application, @NonNull String version, @NonNull Map<String, CacheEntry> cacheEntries, @NonNull OkHttpClient httpClient, @NonNull Context context) {
        this(hostname, application, version, false, cacheEntries, null, httpClient, context);
    }

    public CacheResources(@NonNull JSONObject jsonObject, @NonNull Map<String, CacheEntry> resourcePool, @NonNull OkHttpClient httpClient, @NonNull Context context) throws JSONException {
        JSONObject mappings;
        Iterator<String> mappingsKeys;
        this.logger = OSLogger.getInstance();
        if (jsonObject.has(CACHE_RESOURCES_HOSTNAME)) {
            this.hostname = jsonObject.getString(CACHE_RESOURCES_HOSTNAME);
        }
        if (jsonObject.has(CACHE_RESOURCES_APPLICATION)) {
            this.application = jsonObject.getString(CACHE_RESOURCES_APPLICATION);
        }
        if (jsonObject.has(CACHE_RESOURCES_VERSION_TOKEN)) {
            this.versionToken = jsonObject.getString(CACHE_RESOURCES_VERSION_TOKEN);
        }
        if (jsonObject.has("status")) {
            this.status = CacheFrameStatus.getStatusForValue(jsonObject.getInt("status"));
        } else {
            this.status = CacheFrameStatus.EMPTY;
        }
        if (jsonObject.has(CACHE_RESOURCES_FRAME_TO_DELETE)) {
            this.frameToDelete = jsonObject.getBoolean(CACHE_RESOURCES_FRAME_TO_DELETE);
        }
        this.httpClient = httpClient;
        this.context = context.getApplicationContext();
        this.cacheEntries = new HashMap();
        this.initialResourcesCount = 0;
        this.processedResourcesCount = 0;
        this.totalResourcesCount = 0;
        List<String> resourceUrls = new ArrayList();
        if (jsonObject.has(CACHE_RESOURCES_RESOURCES)) {
            JSONArray resources = jsonObject.getJSONArray(CACHE_RESOURCES_RESOURCES);
            for (int j = 0; j < resources.length(); j++) {
                resourceUrls.add(resources.getString(j));
            }
        }
        Map urlMappings = new HashMap();
        if (jsonObject.has(CACHE_RESOURCES_URL_MAPPINGS)) {
            mappings = jsonObject.getJSONObject(CACHE_RESOURCES_URL_MAPPINGS);
            mappingsKeys = mappings.keys();
            while (mappingsKeys.hasNext()) {
                String currentKey = (String) mappingsKeys.next();
                urlMappings.put(currentKey, mappings.getString(currentKey));
            }
        }
        Map urlMappingsNoCache = new HashMap();
        if (jsonObject.has(CACHE_RESOURCES_URL_MAPPINGS_NO_CACHE)) {
            mappings = jsonObject.getJSONObject(CACHE_RESOURCES_URL_MAPPINGS_NO_CACHE);
            mappingsKeys = mappings.keys();
            while (mappingsKeys.hasNext()) {
                currentKey = (String) mappingsKeys.next();
                urlMappingsNoCache.put(currentKey, mappings.getString(currentKey));
            }
        }
        populateCacheEntries(resourcePool, Collections.emptyMap(), resourceUrls, urlMappings, urlMappingsNoCache);
    }

    public void populateCacheEntries(@NonNull Map<String, CacheEntry> resourcePool, @NonNull Map<String, CacheEntry> preBundleEntries, @NonNull List<String> resourceUrls, @NonNull Map<String, String> urlMappings, @NonNull Map<String, String> urlMappingsNoCache) {
        CacheEntry resourceEntry;
        String value;
        CacheEntry previousMappedResourceEntry;
        CacheEntry mappingEntry;
        if (resourceUrls != null) {
            this.totalResourcesCount = resourceUrls.size();
            for (String url : resourceUrls) {
                if (!this.cacheEntries.containsKey(url)) {
                    CacheEntry previousResourceEntry = (CacheEntry) resourcePool.get(url);
                    if (previousResourceEntry != null) {
                        this.cacheEntries.put(url, previousResourceEntry);
                        this.initialResourcesCount++;
                    } else {
                        resourceEntry = new CacheEntry(url, getFileNameForUrl(url, this.preBundled), MimeTypesHelper.getInstance().getMimeType(MimeTypeMap.getFileExtensionFromUrl(url)), this.preBundled);
                        if (preBundleEntries != null) {
                            CacheEntry preBundleResourceEntry = (CacheEntry) preBundleEntries.get(url);
                            if (preBundleResourceEntry != null) {
                                resourceEntry.setFileName(preBundleResourceEntry.getFileName());
                                resourceEntry.setMimeType(preBundleResourceEntry.getMimeType());
                                resourceEntry.setEncoding(preBundleResourceEntry.getEncoding());
                                resourceEntry.setPreBundled(true);
                            }
                        }
                        this.cacheEntries.put(url, resourceEntry);
                    }
                }
            }
        }
        if (urlMappings != null) {
            for (String url2 : urlMappings.keySet()) {
                value = (String) urlMappings.get(url2);
                previousMappedResourceEntry = (CacheEntry) resourcePool.get(value);
                if (previousMappedResourceEntry != null) {
                    mappingEntry = new CacheEntry(previousMappedResourceEntry);
                    mappingEntry.setResourceMapping(true);
                    mappingEntry.setNoCache(false);
                    this.cacheEntries.put(url2, mappingEntry);
                } else {
                    mappingEntry = (CacheEntry) this.cacheEntries.get(value);
                    if (mappingEntry != null) {
                        resourceEntry = new CacheEntry(mappingEntry);
                        resourceEntry.setResourceMapping(true);
                        resourceEntry.setNoCache(false);
                        this.cacheEntries.put(url2, resourceEntry);
                    } else {
                        this.logger.logDebug("Manifest inconsistency: URL for mapping was not found", OSCache.CORDOVA_SERVICE_NAME);
                    }
                }
            }
        }
        if (urlMappingsNoCache != null) {
            for (String url22 : urlMappingsNoCache.keySet()) {
                value = (String) urlMappingsNoCache.get(url22);
                previousMappedResourceEntry = (CacheEntry) resourcePool.get(value);
                CacheEntry noCacheMappingEntry;
                if (previousMappedResourceEntry != null) {
                    noCacheMappingEntry = new CacheEntry(previousMappedResourceEntry);
                    noCacheMappingEntry.setResourceMapping(true);
                    noCacheMappingEntry.setNoCache(true);
                    this.cacheEntries.put(url22, noCacheMappingEntry);
                } else {
                    noCacheMappingEntry = (CacheEntry) this.cacheEntries.get(value);
                    if (noCacheMappingEntry != null) {
                        mappingEntry = new CacheEntry(noCacheMappingEntry);
                        mappingEntry.setResourceMapping(true);
                        mappingEntry.setNoCache(true);
                        this.cacheEntries.put(url22, mappingEntry);
                    } else {
                        this.logger.logDebug("Manifest inconsistency: URL for mapping no cache was not found", OSCache.CORDOVA_SERVICE_NAME);
                    }
                }
            }
        }
    }

    @NonNull
    public JSONObject toJSONObject() throws Exception {
        JSONObject result = new JSONObject();
        result.put(CACHE_RESOURCES_HOSTNAME, this.hostname);
        result.put(CACHE_RESOURCES_APPLICATION, this.application);
        result.put(CACHE_RESOURCES_VERSION_TOKEN, this.versionToken);
        result.put("status", this.status.getValue());
        boolean z = this.frameToDelete;
        if (z) {
            result.put(CACHE_RESOURCES_FRAME_TO_DELETE, z);
        }
        JSONArray resources = new JSONArray();
        JSONObject urlMappings = new JSONObject();
        JSONObject urlMappingsNoCache = new JSONObject();
        for (String currentKey : this.cacheEntries.keySet()) {
            CacheEntry currentCacheEntry = (CacheEntry) this.cacheEntries.get(currentKey);
            if (!currentCacheEntry.isResourceMapping()) {
                resources.put(currentCacheEntry.getUrl());
            } else if (currentCacheEntry.isNoCache()) {
                urlMappingsNoCache.put(currentKey, currentCacheEntry.getUrl());
            } else {
                urlMappings.put(currentKey, currentCacheEntry.getUrl());
            }
        }
        result.put(CACHE_RESOURCES_RESOURCES, resources);
        result.put(CACHE_RESOURCES_URL_MAPPINGS, urlMappings);
        result.put(CACHE_RESOURCES_URL_MAPPINGS_NO_CACHE, urlMappingsNoCache);
        return result;
    }

    public String getHostname() {
        return this.hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public String getApplication() {
        return this.application;
    }

    public void setApplication(String application) {
        this.application = application;
    }

    public String getVersionToken() {
        return this.versionToken;
    }

    public void setVersionToken(String versionToken) {
        this.versionToken = versionToken;
    }

    public boolean isPreBundled() {
        return this.preBundled;
    }

    public void setPreBundled(boolean preBundled) {
        this.preBundled = preBundled;
    }

    public CacheFrameStatus getStatus() {
        return this.status;
    }

    public void setStatus(CacheFrameStatus status) {
        this.status = status;
    }

    public boolean isFrameToDelete() {
        return this.frameToDelete;
    }

    public void setFrameToDelete(boolean frameToDelete) {
        this.frameToDelete = frameToDelete;
    }

    public Map<String, CacheEntry> getCacheEntries() {
        return this.cacheEntries;
    }

    public void setCacheEntries(Map<String, CacheEntry> cacheEntries) {
        this.cacheEntries = cacheEntries;
    }

    private synchronized int getNumberOfRetries() {
        return this.numberOfRetries;
    }

    private synchronized void incrementNumberOfRetries() {
        this.numberOfRetries++;
    }

    public CacheDownloadListener getDownloadListener() {
        return this.downloadListener;
    }

    public int getMaxNumberOfRetries() {
        return this.maxNumberOfRetries;
    }

    public void setMaxNumberOfRetries(int maxNumberOfRetries) {
        this.maxNumberOfRetries = maxNumberOfRetries;
    }

    public void setDownloadListener(CacheDownloadListener downloadListener) {
        this.downloadListener = downloadListener;
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    synchronized void updateProgress(com.outsystems.plugins.oscache.cache.types.CacheEntryStatus r6) {
        /*
        r5 = this;
        monitor-enter(r5);
        r0 = com.outsystems.plugins.oscache.cache.types.CacheEntryStatus.DOWNLOADING;	 Catch:{ all -> 0x004a }
        if (r6 != r0) goto L_0x0007;
    L_0x0005:
        monitor-exit(r5);
        return;
    L_0x0007:
        r0 = com.outsystems.plugins.oscache.cache.types.CacheEntryStatus.FETCHED;	 Catch:{ all -> 0x004a }
        r1 = 1;
        if (r6 == r0) goto L_0x0012;
    L_0x000c:
        r0 = com.outsystems.plugins.oscache.cache.types.CacheEntryStatus.FAILED;	 Catch:{ all -> 0x004a }
        if (r6 != r0) goto L_0x0011;
    L_0x0010:
        goto L_0x0012;
    L_0x0011:
        goto L_0x0017;
    L_0x0012:
        r0 = r5.processedResourcesCount;	 Catch:{ all -> 0x004a }
        r0 = r0 + r1;
        r5.processedResourcesCount = r0;	 Catch:{ all -> 0x004a }
    L_0x0017:
        r0 = r5.downloadListener;	 Catch:{ all -> 0x004a }
        r2 = r5.initialResourcesCount;	 Catch:{ all -> 0x004a }
        r3 = r5.processedResourcesCount;	 Catch:{ all -> 0x004a }
        r4 = r5.totalResourcesCount;	 Catch:{ all -> 0x004a }
        r0.onProgress(r2, r3, r4);	 Catch:{ all -> 0x004a }
        r0 = r5.allResourcesDownloaded;	 Catch:{ all -> 0x004a }
        if (r0 == 0) goto L_0x002b;
    L_0x0026:
        r0 = com.outsystems.plugins.oscache.cache.types.CacheEntryStatus.FETCHED;	 Catch:{ all -> 0x004a }
        if (r6 != r0) goto L_0x002b;
    L_0x002a:
        goto L_0x002c;
    L_0x002b:
        r1 = 0;
    L_0x002c:
        r5.allResourcesDownloaded = r1;	 Catch:{ all -> 0x004a }
        r0 = r5.processedResourcesCount;	 Catch:{ all -> 0x004a }
        r1 = r5.totalResourcesCount;	 Catch:{ all -> 0x004a }
        if (r0 != r1) goto L_0x0047;
    L_0x0034:
        r0 = r5.allResourcesDownloaded;	 Catch:{ all -> 0x004a }
        if (r0 == 0) goto L_0x003b;
    L_0x0038:
        r0 = com.outsystems.plugins.oscache.cache.types.CacheFrameStatus.FETCHED;	 Catch:{ all -> 0x004a }
        goto L_0x003d;
    L_0x003b:
        r0 = com.outsystems.plugins.oscache.cache.types.CacheFrameStatus.FAILED;	 Catch:{ all -> 0x004a }
    L_0x003d:
        r5.status = r0;	 Catch:{ all -> 0x004a }
        r0 = r5.downloadListener;	 Catch:{ all -> 0x004a }
        r1 = r5.allResourcesDownloaded;	 Catch:{ all -> 0x004a }
        r0.onFinish(r1);	 Catch:{ all -> 0x004a }
        goto L_0x0048;
    L_0x0048:
        monitor-exit(r5);
        return;
    L_0x004a:
        r6 = move-exception;
        monitor-exit(r5);
        throw r6;
        */
        throw new UnsupportedOperationException("Method not decompiled: com.outsystems.plugins.oscache.cache.types.CacheResources.updateProgress(com.outsystems.plugins.oscache.cache.types.CacheEntryStatus):void");
    }

    public synchronized void updateResourceStatus(CacheEntry resource, CacheEntryStatus status) {
        if (status != CacheEntryStatus.FETCHED || fileExistsAtCacheDirectory(resource)) {
            resource.setStatus(status);
        } else {
            resource.setStatus(CacheEntryStatus.FAILED);
        }
        resource.getCacheVersions().put(this.versionToken, this.versionToken);
        if (this.downloadListener != null) {
            updateProgress(resource.getStatus());
        }
    }

    public void startDownload(boolean checksumValidation) {
        Logger logger = this.logger;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Downloading resources for the cache version: ");
        stringBuilder.append(this.versionToken);
        logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
        this.status = CacheFrameStatus.DOWNLOADING;
        this.numberOfRetries = 0;
        this.processedResourcesCount = 0;
        this.allResourcesDownloaded = true;
        for (String key : this.cacheEntries.keySet()) {
            CacheEntry cacheEntry = (CacheEntry) this.cacheEntries.get(key);
            if (!cacheEntry.isResourceMapping()) {
                switch (cacheEntry.getStatus()) {
                    case DOWNLOADING:
                        updateResourceStatus(cacheEntry, cacheEntry.getStatus());
                        break;
                    case FETCHED:
                        updateResourceStatus(cacheEntry, cacheEntry.getStatus());
                        Logger logger2 = this.logger;
                        StringBuilder stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Resource already fetched: ");
                        stringBuilder2.append(cacheEntry.getUrl());
                        logger2.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                        break;
                    default:
                        if (!cacheEntry.isPreBundled()) {
                            downloadResourceAsync(cacheEntry, checksumValidation);
                            break;
                        } else {
                            copyPreBundleResource(cacheEntry);
                            break;
                        }
                }
            }
        }
    }

    public void copyPreBundleResource(CacheEntry resource) {
        InputStream inputStream = null;
        FileOutputStream fileOutputStream = null;
        try {
            updateResourceStatus(resource, CacheEntryStatus.DOWNLOADING);
            inputStream = this.context.getAssets().open(resource.getFileName());
            resource.setFileName(getFileNameForUrl(resource.getUrl(), false));
            resource.setPreBundled(false);
            byte[] data = new byte[inputStream.available()];
            inputStream.read(data);
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(this.context.getFilesDir());
            stringBuilder.append(File.separator);
            stringBuilder.append(resource.getFileName());
            File file = new File(stringBuilder.toString());
            if (file.exists()) {
                file.delete();
            }
            fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(data);
            fileOutputStream.flush();
            updateResourceStatus(resource, CacheEntryStatus.FETCHED);
            Logger logger = this.logger;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Copied prebundled resource ");
            stringBuilder2.append(resource.getUrl());
            stringBuilder2.append(" to ");
            stringBuilder2.append(resource.getFileName());
            logger.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Throwable e) {
                    this.logger.logError("Could not close InputStream while copying prebundle resource to cache directory", OSCache.CORDOVA_SERVICE_NAME, e);
                }
            }
            try {
                fileOutputStream.close();
            } catch (Throwable e2) {
                this.logger.logError("Could not close FileOutputStream while copying prebundle resource to cache directory", OSCache.CORDOVA_SERVICE_NAME, e2);
            }
        } catch (Throwable e22) {
            resource.setFileName(getFileNameForUrl(resource.getUrl(), true));
            resource.setPreBundled(true);
            updateResourceStatus(resource, CacheEntryStatus.UNCACHED);
            Logger logger2 = this.logger;
            StringBuilder stringBuilder3 = new StringBuilder();
            stringBuilder3.append("Could not copy resource ");
            stringBuilder3.append(resource.getFileName());
            stringBuilder3.append(" from prebundle with error: ");
            stringBuilder3.append(e22.getMessage());
            logger2.logError(stringBuilder3.toString(), OSCache.CORDOVA_SERVICE_NAME, e22);
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Throwable e222) {
                    this.logger.logError("Could not close InputStream while copying prebundle resource to cache directory", OSCache.CORDOVA_SERVICE_NAME, e222);
                }
            }
            if (fileOutputStream != null) {
                fileOutputStream.close();
            }
        } catch (Throwable th) {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Throwable e3) {
                    this.logger.logError("Could not close InputStream while copying prebundle resource to cache directory", OSCache.CORDOVA_SERVICE_NAME, e3);
                }
            }
            if (fileOutputStream != null) {
                try {
                    fileOutputStream.close();
                } catch (Throwable e32) {
                    this.logger.logError("Could not close FileOutputStream while copying prebundle resource to cache directory", OSCache.CORDOVA_SERVICE_NAME, e32);
                }
            }
        }
    }

    void processContentType(CacheEntry resource, String contentType) {
        if (contentType != null) {
            Matcher matcher = PATTERN_CONTENT_TYPE.matcher(contentType.trim().toLowerCase());
            if (matcher.matches()) {
                resource.setMimeType(matcher.group(1));
                if (matcher.group(2) != null) {
                    resource.setEncoding(matcher.group(2).split("=")[1].trim().split(" ")[0].trim());
                }
            }
        }
    }

    void downloadResourceAsync(final CacheEntry resource, final boolean checksumValidation) {
        updateResourceStatus(resource, CacheEntryStatus.DOWNLOADING);
        String resourceUrl = new StringBuilder();
        resourceUrl.append(this.hostname);
        resourceUrl.append(resource.getUrl());
        resourceUrl = resourceUrl.toString();
        if (!resourceUrl.startsWith("http://") && !resourceUrl.startsWith("https://")) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("https://");
            stringBuilder.append(resourceUrl);
            resourceUrl = stringBuilder.toString();
        }
        try {
            this.httpClient.newCall(new Builder().url(resourceUrl).addHeader("Accept", "*/*").build()).enqueue(new Callback() {
                public void onFailure(Call call, IOException e) {
                    if (e.getMessage().equals("Canceled")) {
                        Logger access$000 = CacheResources.this.logger;
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("Canceled download for resource ");
                        stringBuilder.append(resource.getUrl());
                        access$000.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
                        resource.setStatus(CacheEntryStatus.UNCACHED);
                        return;
                    }
                    CacheResources.this.downloadFailedWithError(resource, e.getMessage(), checksumValidation);
                }

                public void onResponse(Call call, Response response) {
                    StringBuilder stringBuilder;
                    if (response.isSuccessful()) {
                        FileOutputStream fileOutputStream = null;
                        try {
                            byte[] data = response.body().bytes();
                            stringBuilder = new StringBuilder();
                            stringBuilder.append(CacheResources.this.context.getFilesDir());
                            stringBuilder.append(File.separator);
                            stringBuilder.append(resource.getFileName());
                            File file = new File(stringBuilder.toString());
                            file.createNewFile();
                            fileOutputStream = new FileOutputStream(file);
                            fileOutputStream.write(data);
                            fileOutputStream.flush();
                            CacheResources.this.processContentType(resource, response.networkResponse().headers().get("Content-Type"));
                            CacheResources.this.validateDownloadedResourceFile(resource, file, checksumValidation);
                            CacheResources.this.updateResourceStatus(resource, CacheEntryStatus.FETCHED);
                            Logger access$000 = CacheResources.this.logger;
                            StringBuilder stringBuilder2 = new StringBuilder();
                            stringBuilder2.append("Downloaded resource ");
                            stringBuilder2.append(resource.getUrl());
                            access$000.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                            try {
                                fileOutputStream.close();
                            } catch (Throwable e) {
                                CacheResources.this.logger.logError("Could not close FileOutputStream while trying to write the downloaded resource", OSCache.CORDOVA_SERVICE_NAME, e);
                            }
                        } catch (Throwable e2) {
                            Logger access$0002 = CacheResources.this.logger;
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Failed to store downloaded resource ");
                            stringBuilder.append(resource.getUrl());
                            stringBuilder.append(": ");
                            stringBuilder.append(e2.getMessage());
                            access$0002.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e2);
                            CacheResources.this.downloadFailedWithError(resource, e2.getMessage(), checksumValidation);
                            if (fileOutputStream != null) {
                                fileOutputStream.close();
                            } else {
                                return;
                            }
                        } catch (Throwable th) {
                            if (fileOutputStream != null) {
                                try {
                                    fileOutputStream.close();
                                } catch (Throwable e3) {
                                    CacheResources.this.logger.logError("Could not close FileOutputStream while trying to write the downloaded resource", OSCache.CORDOVA_SERVICE_NAME, e3);
                                }
                            }
                        }
                        return;
                    }
                    CacheResources.this.downloadFailedWithError(resource, response.message(), checksumValidation);
                }
            });
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Failed to download resource ");
            stringBuilder2.append(resource.getUrl());
            stringBuilder2.append(": ");
            stringBuilder2.append(e.getMessage());
            logger.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
            StringBuilder stringBuilder3 = new StringBuilder();
            stringBuilder3.append("Failed to download resource ");
            stringBuilder3.append(resource.getUrl());
            stringBuilder3.append(": ");
            stringBuilder3.append(e.getMessage());
            abortDownload(stringBuilder3.toString());
        }
    }

    private void downloadFailedWithError(CacheEntry cacheEntry, String errorMessage, boolean checksumValidation) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Failed to download resource ");
        stringBuilder.append(cacheEntry.getUrl());
        stringBuilder.append(" with error: ");
        stringBuilder.append(errorMessage);
        errorMessage = stringBuilder.toString();
        this.logger.logDebug(errorMessage, OSCache.CORDOVA_SERVICE_NAME);
        if (getNumberOfRetries() > this.maxNumberOfRetries) {
            abortDownload(errorMessage);
            updateResourceStatus(cacheEntry, CacheEntryStatus.FAILED);
            return;
        }
        Logger logger = this.logger;
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append("Retrying resource ");
        stringBuilder2.append(cacheEntry.getUrl());
        logger.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
        incrementNumberOfRetries();
        downloadResourceAsync(cacheEntry, checksumValidation);
    }

    public void downloadResourceSync(CacheEntry cacheEntry, boolean checksumValidation) {
        FileOutputStream fileOutputStream;
        Logger logger;
        String str;
        String str2;
        updateResourceStatus(cacheEntry, CacheEntryStatus.DOWNLOADING);
        String resourceUrl = new StringBuilder();
        resourceUrl.append(this.hostname);
        resourceUrl.append(cacheEntry.getUrl());
        resourceUrl = resourceUrl.toString();
        if (!resourceUrl.startsWith("http://") && !resourceUrl.startsWith("https://")) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("https://");
            stringBuilder.append(resourceUrl);
            resourceUrl = stringBuilder.toString();
        }
        try {
            Response response = this.httpClient.newCall(new Builder().url(resourceUrl).addHeader("Accept", "*/*").build()).execute();
            if (response.isSuccessful()) {
                fileOutputStream = null;
                StringBuilder stringBuilder2;
                try {
                    byte[] data = response.body().bytes();
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append(this.context.getFilesDir());
                    stringBuilder2.append(File.separator);
                    stringBuilder2.append(cacheEntry.getFileName());
                    File file = new File(stringBuilder2.toString());
                    file.createNewFile();
                    fileOutputStream = new FileOutputStream(file);
                    fileOutputStream.write(data);
                    fileOutputStream.flush();
                    processContentType(cacheEntry, response.networkResponse().headers().get("Content-Type"));
                    validateDownloadedResourceFile(cacheEntry, file, checksumValidation);
                    updateResourceStatus(cacheEntry, CacheEntryStatus.FETCHED);
                    Logger logger2 = this.logger;
                    StringBuilder stringBuilder3 = new StringBuilder();
                    stringBuilder3.append("Downloaded resource ");
                    stringBuilder3.append(cacheEntry.getUrl());
                    logger2.logDebug(stringBuilder3.toString(), OSCache.CORDOVA_SERVICE_NAME);
                    try {
                        fileOutputStream.close();
                    } catch (IOException e) {
                        logger = this.logger;
                        str = "Could not close FileOutputStream while trying to write the downloaded resource";
                        str2 = OSCache.CORDOVA_SERVICE_NAME;
                        logger.logError(str, str2);
                    }
                } catch (Throwable e2) {
                    updateResourceStatus(cacheEntry, CacheEntryStatus.UNCACHED);
                    logger = this.logger;
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("Failed to store downloaded resource ");
                    stringBuilder2.append(cacheEntry.getUrl());
                    stringBuilder2.append(": ");
                    stringBuilder2.append(e2.getMessage());
                    logger.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e2);
                    if (fileOutputStream != null) {
                        try {
                            fileOutputStream.close();
                        } catch (IOException e3) {
                            logger = this.logger;
                            str = "Could not close FileOutputStream while trying to write the downloaded resource";
                            str2 = OSCache.CORDOVA_SERVICE_NAME;
                            logger.logError(str, str2);
                        }
                    }
                }
            }
        } catch (Throwable e4) {
            updateResourceStatus(cacheEntry, CacheEntryStatus.FAILED);
            Logger logger3 = this.logger;
            StringBuilder stringBuilder4 = new StringBuilder();
            stringBuilder4.append("Failed to download resource ");
            stringBuilder4.append(cacheEntry.getUrl());
            stringBuilder4.append(": ");
            stringBuilder4.append(e4.getMessage());
            logger3.logError(stringBuilder4.toString(), OSCache.CORDOVA_SERVICE_NAME, e4);
        } catch (Throwable th) {
            if (fileOutputStream != null) {
                try {
                    fileOutputStream.close();
                } catch (IOException e5) {
                    this.logger.logError("Could not close FileOutputStream while trying to write the downloaded resource", OSCache.CORDOVA_SERVICE_NAME);
                }
            }
        }
    }

    public void abortDownload(String errorMessage) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Aborting resources download. ");
        stringBuilder.append(errorMessage);
        errorMessage = stringBuilder.toString();
        this.logger.logDebug(errorMessage, OSCache.CORDOVA_SERVICE_NAME);
        this.status = CacheFrameStatus.FAILED;
        this.downloadListener.onError(errorMessage);
        this.httpClient.dispatcher().cancelAll();
        this.downloadListener.onFinish(false);
    }

    public String getFileNameForUrl(String url, boolean preBundled) {
        if (preBundled) {
            return Uri.parse(url).getPath().replaceAll("(^\\/([\\da-zA-Z\\-_]+)\\/)", "www/");
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(NATIVE_CACHE_DIRECTORY);
        stringBuilder.append(File.separator);
        stringBuilder.append(NativeCache.getKeyForHostnameAndApplication(this.hostname, this.application));
        stringBuilder.append(File.separator);
        stringBuilder.append(String.valueOf(url.hashCode()));
        return stringBuilder.toString();
    }

    boolean fileExistsAtCacheDirectory(CacheEntry cacheEntry) {
        if (cacheEntry.isPreBundled()) {
            return false;
        }
        try {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(this.context.getFilesDir());
            stringBuilder.append(File.separator);
            stringBuilder.append(cacheEntry.getFileName());
            File filePath = new File(stringBuilder.toString());
            boolean z = filePath.exists() && filePath.length() > 0;
            return z;
        } catch (Exception e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Failed to locate file ");
            stringBuilder2.append(cacheEntry.getUrl());
            stringBuilder2.append(": ");
            stringBuilder2.append(e.getMessage());
            logger.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
            return false;
        }
    }

    public boolean fileExistsAtPreBundle(CacheEntry cacheEntry) {
        boolean success = false;
        InputStream inputStream = null;
        try {
            inputStream = this.context.getAssets().open(cacheEntry.getFileName());
            success = inputStream.available() > 0;
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Throwable e) {
                    this.logger.logError("Could not close InputStream while trying to check if prebundle file exists", OSCache.CORDOVA_SERVICE_NAME, e);
                }
                return success;
            }
        } catch (Throwable e2) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to check if file ");
            stringBuilder.append(cacheEntry.getFileName());
            stringBuilder.append(" exists at prebundle: ");
            stringBuilder.append(e2.getMessage());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e2);
            if (inputStream != null) {
                inputStream.close();
            }
        } catch (Throwable th) {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Throwable e3) {
                    this.logger.logError("Could not close InputStream while trying to check if prebundle file exists", OSCache.CORDOVA_SERVICE_NAME, e3);
                }
            }
        }
        return success;
    }

    void validateDownloadedResourceFile(CacheEntry cacheEntry, File file, boolean checksumEnable) throws InvalidResourceException {
        if (cacheEntry == null || file == null) {
            throw new InvalidResourceException("Unable to validate downloaded file");
        }
        boolean validResource = file.exists() && file.length() > 0;
        if (validResource) {
            if (checksumEnable) {
                if (isResourceFileCorrupted(cacheEntry, file)) {
                    throw new InvalidResourceException("File is corrput or invalid");
                }
            }
            return;
        }
        throw new InvalidResourceException("File not found or is empty");
    }

    boolean isResourceFileCorrupted(CacheEntry cacheEntry, File file) {
        boolean z = false;
        try {
            String checksum = cacheEntry.getUrl().substring(cacheEntry.getUrl().indexOf("?") + 1);
            String fileContentHash = FileChecksum.getContentHash(new FileInputStream(file));
            if (checksum == null || fileContentHash == null || checksum.equals(fileContentHash)) {
                return false;
            }
            if (!cacheEntry.getMimeType().equalsIgnoreCase("application/json")) {
                if (!cacheEntry.getMimeType().equalsIgnoreCase("text/html")) {
                    return true;
                }
            }
            if (!resourceContentContainsVersionToken(file, checksum)) {
                z = true;
            }
            return z;
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to check the integrity of the file ");
            stringBuilder.append(cacheEntry.getUrl());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
        }
    }

    boolean resourceContentContainsVersionToken(File file, String versionToken) {
        try {
            InputStream resourceStream = new FileInputStream(file);
            StringBuilder inputStringBuilder = new StringBuilder();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(resourceStream, DEFAULT_ENCODING));
            for (String line = bufferedReader.readLine(); line != null; line = bufferedReader.readLine()) {
                inputStringBuilder.append(line);
            }
            resourceStream.close();
            String fileContent = inputStringBuilder.toString();
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(".*(OSManifestLoader\\.indexVersionToken.*=.*|\"versionToken\":)\"");
            stringBuilder.append(Pattern.quote(versionToken));
            stringBuilder.append("\".*");
            return Pattern.compile(stringBuilder.toString()).matcher(fileContent).matches();
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Unable to validate the content of the resource: ");
            stringBuilder2.append(e.getMessage());
            logger.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
            return false;
        }
    }
}
