package com.outsystems.plugins.oscache.cache.types;

import android.content.Context;
import android.support.annotation.NonNull;
import com.outsystems.plugins.oscache.OSCache;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import okhttp3.OkHttpClient;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ApplicationCache {
    private static final String APPLICATION_CACHED_FRAMES_OBJECT = "cachedFrames";
    private static final String APPLICATION_CACHE_ENTRIES_OBJECT = "cachedEntries";
    private static final String APPLICATION_CACHE_OBJECT = "cachedApplication";
    private static final String APPLICATION_CACHE_VERSION_OBJECT = "cachedVersion";
    private static final String APPLICATION_HOSTNAME_OBJECT = "applicationHostname";
    private static final String APPLICATION_PATH_OBJECT = "applicationPath";
    private static final String APPLICATION_PREBUNDLE_VERSION_OBJECT = "preBundleVersion";
    private String application;
    private String cacheApplicationKey;
    private Map<String, CacheEntry> cacheEntries;
    private List<CacheResources> cacheFrames;
    private String hostname;
    private Logger logger;
    private CacheResources preBundleVersion;
    private CacheResources previousVersion;
    private CacheResources runningVersion;

    public ApplicationCache(@NonNull String hostname, @NonNull String application, @NonNull String applicationKey) {
        this.logger = OSLogger.getInstance();
        this.hostname = hostname;
        this.application = application;
        this.cacheApplicationKey = applicationKey;
        this.cacheEntries = new HashMap();
        this.cacheFrames = new ArrayList();
    }

    public ApplicationCache(@NonNull JSONObject jsonObject, boolean cacheUpgrade, @NonNull OkHttpClient defaultHttpClient, @NonNull Context context) throws JSONException {
        this.logger = OSLogger.getInstance();
        this.cacheEntries = new HashMap();
        this.cacheFrames = new ArrayList();
        if (jsonObject.has(APPLICATION_HOSTNAME_OBJECT)) {
            this.hostname = jsonObject.getString(APPLICATION_HOSTNAME_OBJECT);
        }
        if (jsonObject.has(APPLICATION_PATH_OBJECT)) {
            this.application = jsonObject.getString(APPLICATION_PATH_OBJECT);
        }
        if (jsonObject.has(APPLICATION_CACHE_OBJECT)) {
            this.cacheApplicationKey = jsonObject.getString(APPLICATION_CACHE_OBJECT);
        }
        String runningVersionToken = "";
        if (jsonObject.has(APPLICATION_CACHE_VERSION_OBJECT)) {
            runningVersionToken = jsonObject.getString(APPLICATION_CACHE_VERSION_OBJECT);
        }
        if (jsonObject.has(APPLICATION_CACHE_ENTRIES_OBJECT)) {
            if (cacheUpgrade) {
                upgradeCacheEntries(jsonObject.getJSONObject(APPLICATION_CACHE_ENTRIES_OBJECT), runningVersionToken, defaultHttpClient, context);
            } else {
                processCacheEntries(jsonObject.getJSONObject(APPLICATION_CACHE_ENTRIES_OBJECT));
            }
        }
        if (jsonObject.has(APPLICATION_CACHED_FRAMES_OBJECT)) {
            processCacheFrames(jsonObject.getJSONArray(APPLICATION_CACHED_FRAMES_OBJECT), runningVersionToken, defaultHttpClient, context);
        }
    }

    private void upgradeCacheEntries(@NonNull JSONObject cacheEntriesObject, @NonNull String runningVersionToken, @NonNull OkHttpClient defaultHttpClient, @NonNull Context context) throws JSONException {
        Map<String, CacheEntry> cacheEntriesTemp = new HashMap(cacheEntriesObject.length());
        Iterator<String> cacheEntryKeys = cacheEntriesObject.keys();
        while (cacheEntryKeys.hasNext()) {
            String currentKey = (String) cacheEntryKeys.next();
            CacheEntry localResource = new CacheEntry(cacheEntriesObject.getJSONObject(currentKey));
            if (localResource.isPreBundled()) {
                localResource.setStatus(CacheEntryStatus.UNCACHED);
            }
            if (currentKey.equals(localResource.getUrl())) {
                localResource.setResourceMapping(false);
                localResource.setNoCache(false);
            } else {
                localResource.setResourceMapping(true);
            }
            cacheEntriesTemp.put(currentKey, localResource);
        }
        CacheResources cacheFrame = new CacheResources(this.hostname, this.application, runningVersionToken, cacheEntriesTemp, defaultHttpClient, context);
        cacheFrame.setStatus(CacheFrameStatus.UPGRADE);
        this.runningVersion = cacheFrame;
        this.cacheFrames.add(cacheFrame);
    }

    private void processCacheEntries(JSONObject cacheEntriesObject) throws JSONException {
        Iterator<String> cacheEntryKeys = cacheEntriesObject.keys();
        while (cacheEntryKeys.hasNext()) {
            String currentKey = (String) cacheEntryKeys.next();
            this.cacheEntries.put(currentKey, new CacheEntry(cacheEntriesObject.getJSONObject(currentKey)));
        }
    }

    private void processCacheFrames(JSONArray cacheFramesArray, String runningVersionToken, OkHttpClient defaultHttpClient, Context context) throws JSONException {
        for (int i = 0; i < cacheFramesArray.length(); i++) {
            CacheResources cacheResources = new CacheResources(cacheFramesArray.getJSONObject(i), this.cacheEntries, defaultHttpClient, context);
            if (cacheResources.getVersionToken().equals(runningVersionToken)) {
                this.runningVersion = cacheResources;
            }
            this.cacheFrames.add(cacheResources);
        }
    }

    public JSONObject toJSONObject() throws Exception {
        JSONObject result = new JSONObject();
        result.put(APPLICATION_HOSTNAME_OBJECT, this.hostname);
        result.put(APPLICATION_PATH_OBJECT, this.application);
        result.put(APPLICATION_CACHE_OBJECT, this.cacheApplicationKey);
        CacheResources cacheResources = this.runningVersion;
        if (cacheResources != null) {
            result.put(APPLICATION_CACHE_VERSION_OBJECT, cacheResources.getVersionToken());
        }
        cacheResources = this.preBundleVersion;
        if (cacheResources != null) {
            result.put(APPLICATION_PREBUNDLE_VERSION_OBJECT, cacheResources.getVersionToken());
        }
        JSONObject cachedEntries = new JSONObject();
        for (String key : this.cacheEntries.keySet()) {
            cachedEntries.put(key, ((CacheEntry) this.cacheEntries.get(key)).toJSONObject());
        }
        result.put(APPLICATION_CACHE_ENTRIES_OBJECT, cachedEntries);
        JSONArray cachedFrames = new JSONArray();
        for (CacheResources cacheResource : this.cacheFrames) {
            if (!cacheResource.isPreBundled()) {
                cachedFrames.put(cacheResource.toJSONObject());
            }
        }
        result.put(APPLICATION_CACHED_FRAMES_OBJECT, cachedFrames);
        return result;
    }

    public boolean swapCache(@NonNull CacheResources cacheResources) {
        boolean resultSwapCache = true;
        Map<String, CacheEntry> newResources = cacheResources.getCacheEntries();
        for (String key : newResources.keySet()) {
            CacheEntry resource = (CacheEntry) newResources.get(key);
            if (!resource.isResourceMapping()) {
                if (resource.getStatus() == CacheEntryStatus.FETCHED) {
                    if (!resource.isPreBundled()) {
                        if (resource.getCacheVersions().size() > 0) {
                            if (resource.getMimeType() != null) {
                                if (resource.getMimeType().length() > 0) {
                                    this.cacheEntries.put(key, resource);
                                }
                            }
                        }
                    }
                }
                resultSwapCache = false;
            }
        }
        if (resultSwapCache && (cacheResources.getStatus() == CacheFrameStatus.FETCHED || cacheResources.getStatus() == CacheFrameStatus.UPGRADE)) {
            CacheResources cacheResources2 = this.runningVersion;
            if (cacheResources2 != null) {
                this.previousVersion = cacheResources2;
            }
            this.runningVersion = cacheResources;
        }
        return resultSwapCache;
    }

    public CacheEntry getCacheEntryForUrl(String url) {
        CacheEntry cacheEntry = null;
        CacheResources cacheResources = this.runningVersion;
        if (cacheResources != null) {
            cacheEntry = (CacheEntry) cacheResources.getCacheEntries().get(url);
        }
        if (cacheEntry == null) {
            cacheEntry = (CacheEntry) this.cacheEntries.get(url);
        }
        if (cacheEntry == null) {
            cacheResources = this.preBundleVersion;
            if (cacheResources != null) {
                return (CacheEntry) cacheResources.getCacheEntries().get(url);
            }
        }
        return cacheEntry;
    }

    public void healingCacheEntry(String url) {
        CacheResources cacheResources = this.runningVersion;
        if (cacheResources != null) {
            CacheEntry cacheEntry = (CacheEntry) cacheResources.getCacheEntries().get(url);
            if (cacheEntry != null) {
                cacheEntry.setStatus(CacheEntryStatus.FETCHED);
            }
        }
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

    public String getCacheApplicationKey() {
        return this.cacheApplicationKey;
    }

    public void setCacheApplicationKey(String cacheApplicationKey) {
        this.cacheApplicationKey = cacheApplicationKey;
    }

    public CacheResources getRunningVersion() {
        return this.runningVersion;
    }

    public void setRunningVersion(CacheResources runningVersion) {
        this.runningVersion = runningVersion;
    }

    public CacheResources getPreviousVersion() {
        return this.previousVersion;
    }

    public void setPreviousVersion(CacheResources previousVersion) {
        this.previousVersion = previousVersion;
    }

    public CacheResources getPreBundleVersion() {
        return this.preBundleVersion;
    }

    public void setPreBundleVersion(CacheResources preBundleVersion) {
        this.preBundleVersion = preBundleVersion;
    }

    public Map<String, CacheEntry> getCacheEntries() {
        return this.cacheEntries;
    }

    public void setCacheEntries(Map<String, CacheEntry> cacheEntries) {
        this.cacheEntries = cacheEntries;
    }

    public void setCacheFrames(List<CacheResources> cacheFrames) {
        this.cacheFrames = cacheFrames;
    }

    public List<CacheResources> getCacheFrames() {
        return this.cacheFrames;
    }

    public CacheResources getCacheFrameByVersion(String version) {
        for (CacheResources currentFrame : this.cacheFrames) {
            if (currentFrame.getVersionToken().equals(version)) {
                return currentFrame;
            }
        }
        return null;
    }

    public void markForDeletion() {
        for (CacheResources cacheFrame : this.cacheFrames) {
            if (cacheFrame != this.runningVersion && cacheFrame != this.preBundleVersion) {
                Logger logger = this.logger;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Defining files from cache frame with version ");
                stringBuilder.append(cacheFrame.getVersionToken());
                logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
                for (Entry value : cacheFrame.getCacheEntries().entrySet()) {
                    CacheEntry entry = (CacheEntry) value.getValue();
                    if (!entry.isResourceMapping()) {
                        Logger logger2 = this.logger;
                        StringBuilder stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Removing frame version from resource with key: ");
                        stringBuilder2.append(entry.getUrl());
                        logger2.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                        entry.getCacheVersions().remove(cacheFrame.getVersionToken());
                        logger2 = this.logger;
                        stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Resource with key ");
                        stringBuilder2.append(entry.getUrl());
                        stringBuilder2.append(" is used by another ");
                        stringBuilder2.append(entry.getCacheVersions().size());
                        stringBuilder2.append(" frame versions");
                        logger2.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                        if (entry.getCacheVersions().isEmpty()) {
                            logger2 = this.logger;
                            stringBuilder2 = new StringBuilder();
                            stringBuilder2.append("Defining resource from cache: ");
                            stringBuilder2.append(entry.getUrl());
                            stringBuilder2.append(" to be deleted");
                            logger2.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                            entry.setResourceToDelete(true);
                        }
                    }
                }
                cacheFrame.setFrameToDelete(true);
            }
        }
    }

    public List<CacheEntry> gatherResourcesToDelete() {
        List<CacheResources> cacheFramesToDelete = new ArrayList();
        List<CacheEntry> resourceEntriesToDelete = new ArrayList();
        for (CacheResources cacheFrame : this.cacheFrames) {
            if (cacheFrame != this.runningVersion && cacheFrame != this.preBundleVersion && cacheFrame.isFrameToDelete()) {
                Logger logger = this.logger;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Removing files from cache frame with version ");
                stringBuilder.append(cacheFrame.getVersionToken());
                logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
                for (CacheEntry entry : cacheFrame.getCacheEntries().values()) {
                    if (entry.isResourceToDelete()) {
                        Logger logger2 = this.logger;
                        StringBuilder stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Removing resource from cache: ");
                        stringBuilder2.append(entry.getUrl());
                        logger2.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                        this.cacheEntries.remove(entry.getUrl());
                        resourceEntriesToDelete.add(entry);
                    }
                }
                cacheFramesToDelete.add(cacheFrame);
            }
        }
        for (CacheResources cacheFrame2 : cacheFramesToDelete) {
            this.cacheFrames.remove(cacheFrame2);
            logger = this.logger;
            stringBuilder = new StringBuilder();
            stringBuilder.append("Removed cache frame with version ");
            stringBuilder.append(cacheFrame2.getVersionToken());
            logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
        }
        return resourceEntriesToDelete;
    }

    public void upgradeIfNeeded() {
        CacheResources cacheResources = this.runningVersion;
        if (cacheResources != null && cacheResources.getStatus() == CacheFrameStatus.UPGRADE) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Upgrading cache for application: https://");
            stringBuilder.append(this.hostname);
            stringBuilder.append("/");
            stringBuilder.append(this.application);
            logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
            for (String currentKey : this.runningVersion.getCacheEntries().keySet()) {
                CacheEntry cacheEntry = (CacheEntry) this.runningVersion.getCacheEntries().get(currentKey);
                if (cacheEntry.isPreBundled()) {
                    CacheResources cacheResources2 = this.preBundleVersion;
                    if (cacheResources2 != null) {
                        CacheEntry cacheEntryPreBundle = (CacheEntry) cacheResources2.getCacheEntries().get(currentKey);
                        if (cacheEntryPreBundle == null) {
                            cacheEntryPreBundle = (CacheEntry) this.preBundleVersion.getCacheEntries().get(cacheEntry.getUrl());
                        }
                        if (cacheEntryPreBundle != null) {
                            if (cacheEntryPreBundle.getUrl().equals(cacheEntry.getUrl())) {
                                if (this.runningVersion.fileExistsAtPreBundle(cacheEntry)) {
                                    this.runningVersion.copyPreBundleResource(cacheEntry);
                                    this.runningVersion.updateResourceStatus(cacheEntry, CacheEntryStatus.FETCHED);
                                    cacheEntry.setPreBundled(false);
                                }
                            }
                        }
                        cacheEntry.setFileName(this.runningVersion.getFileNameForUrl(cacheEntry.getUrl(), false));
                        this.runningVersion.updateResourceStatus(cacheEntry, CacheEntryStatus.FAILED);
                        cacheEntry.setPreBundled(false);
                    }
                }
            }
            this.runningVersion.setStatus(CacheFrameStatus.FETCHED);
            this.runningVersion.setPreBundled(false);
            swapCache(this.runningVersion);
            clearPreviousVersion();
        }
    }

    public void rollbackToPreviousVersion() {
        CacheResources cacheResources = this.previousVersion;
        if (cacheResources != null) {
            this.runningVersion = cacheResources;
            clearPreviousVersion();
        }
    }

    public void clearPreviousVersion() {
        this.previousVersion = null;
    }
}
