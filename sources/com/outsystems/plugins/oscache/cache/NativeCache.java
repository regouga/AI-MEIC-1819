package com.outsystems.plugins.oscache.cache;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Build.VERSION;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.NotificationCompat;
import android.webkit.WebResourceResponse;
import com.outsystems.plugins.oscache.OSCache;
import com.outsystems.plugins.oscache.cache.helpers.FileChecksum;
import com.outsystems.plugins.oscache.cache.helpers.MimeTypesHelper;
import com.outsystems.plugins.oscache.cache.helpers.UserAgentInterceptor;
import com.outsystems.plugins.oscache.cache.interfaces.CacheDownloadListener;
import com.outsystems.plugins.oscache.cache.interfaces.CacheEngine;
import com.outsystems.plugins.oscache.cache.interfaces.CacheListener;
import com.outsystems.plugins.oscache.cache.types.ApplicationCache;
import com.outsystems.plugins.oscache.cache.types.CacheEntry;
import com.outsystems.plugins.oscache.cache.types.CacheResources;
import com.outsystems.plugins.oscache.cache.types.CacheStatus;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.X509TrustManager;
import okhttp3.CertificatePinner;
import okhttp3.ConnectionPool;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.OkHttpClient.Builder;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.json.JSONException;
import org.json.JSONObject;

public class NativeCache implements CacheEngine {
    private static final String ASSET_MIMETYPES_MANIFEST = "www/mimetypes.manifest";
    private static final String DEFAULT_ENCODING = "UTF-8";
    private static final int HTTP_STATUS_CODE_OK = 200;
    private static final String NATIVE_CACHE_APPLICATION_OBJECT = "cachedApplication";
    private static final double NATIVE_CACHE_CHECKPOINT_RATE = 0.5d;
    private static final double NATIVE_CACHE_DEFAULT_RETRIES_PERCENTAGE = 0.2d;
    private static final int NATIVE_CACHE_DEFAULT_RETRIES_THRESHOLD = 10;
    private static final String NATIVE_CACHE_DIRECTORY = "OSNativeCache";
    private static final String NATIVE_CACHE_ENTRIES_OBJECT = "cachedEntries";
    private static final String NATIVE_CACHE_MANIFEST = "nativeCache.manifest";
    private static final String NATIVE_CACHE_MAX_NUMBER_OF_RETRIES_OPTION = "maxNumberOfRetries";
    private static final int NATIVE_CACHE_MAX_NUMBER_OF_RETRIES_UNSET = -1;
    private static final int NATIVE_CACHE_NOCACHE_CONNECT_TIMEOUT = 4;
    private static final int NATIVE_CACHE_NOCACHE_READ_TIMEOUT = 4;
    private static final String NATIVE_CACHE_RESOURCE_CONNECT_TIMEOUT_OPTION = "resourceConnectTimeout";
    private static final String NATIVE_CACHE_RESOURCE_READ_TIMEOUT_OPTION = "resourceReadTimeout";
    private static final String NATIVE_CACHE_VERSION = "2.0.0";
    private static final String NATIVE_CACHE_VERSION_OBJECT = "nativeCacheVersion";
    private static final int NATIVE_CACHE_WINDOW_SIZE = 5;
    private static final String NATIVE_CACHE_WINDOW_SIZE_OPTION = "windowSize";
    private static final String PREFERENCE_CACHE_MANIFEST_FILE_HASH = "OSCacheManifestFileHash";
    private static final String SHARED_PREFERENCES_FILE = "OSCachePreferences";
    private static NativeCache instance;
    Map<String, ApplicationCache> applicationEntries;
    CacheListener cacheListener;
    boolean cacheUpgrade;
    private CertificatePinner certificatePinner;
    boolean checksumValidation;
    String currentApplication;
    CacheStatus currentStatus;
    OkHttpClient defaultHttpClient;
    boolean firstRun;
    private Logger logger = OSLogger.getInstance();
    int maxNumberOfRetries;
    OkHttpClient noCacheHttpClient;
    CacheResources ongoingCacheResources;
    int resourceConnectTimeout;
    int resourceReadTimeout;
    private SSLSocketFactory sslSocketFactory;
    private CacheDownloadListener startCachingDownloadListener = new C00871();
    private X509TrustManager trustManager;
    UserAgentInterceptor userAgentInterceptor;

    /* renamed from: com.outsystems.plugins.oscache.cache.NativeCache$1 */
    class C00871 implements CacheDownloadListener {
        C00871() {
        }

        public synchronized void onProgress(int initial, int loaded, int total) {
            if (NativeCache.this.currentStatus == CacheStatus.DOWNLOADING) {
                NativeCache.this.cacheListener.fireOnProgressEvent((long) loaded, (long) total);
            }
            if (initial < loaded && loaded < total) {
                if ((loaded - initial) % ((int) (((double) (total - initial)) * NativeCache.NATIVE_CACHE_CHECKPOINT_RATE)) == 0) {
                    NativeCache.this.createCheckpoint(NativeCache.this.currentApplication);
                }
            }
        }

        public synchronized void onError(String error) {
            if (NativeCache.this.currentStatus == CacheStatus.DOWNLOADING) {
                NativeCache.this.cacheListener.fireOnErrorEvent(error);
                NativeCache.this.cacheListener.fireOnFinishEvent();
                if (NativeCache.this.currentApplication != null) {
                    NativeCache.this.changeCacheStatus(CacheStatus.IDLE);
                } else {
                    NativeCache.this.changeCacheStatus(CacheStatus.UNCACHED);
                }
                NativeCache.this.createCheckpoint(NativeCache.this.currentApplication);
                NativeCache.this.ongoingCacheResources = null;
            }
        }

        public synchronized void onFinish(boolean success) {
            if (NativeCache.this.currentStatus == CacheStatus.DOWNLOADING) {
                if (success) {
                    NativeCache.this.changeCacheStatus(CacheStatus.UPDATEREADY);
                    if (!NativeCache.this.swapCache()) {
                        NativeCache.this.cacheListener.fireOnErrorEvent("Inconsistency on cache version");
                    }
                }
                NativeCache.this.logger.logVerbose("startCaching finished", OSCache.CORDOVA_SERVICE_NAME);
                NativeCache.this.cacheListener.fireOnFinishEvent();
            }
        }
    }

    private NativeCache(@NonNull CacheListener cacheListener, boolean firstRun, boolean checksumValidation, @NonNull String userAgent, int connectTimeout, int readTimeout) {
        if (instance == null) {
            this.cacheListener = cacheListener;
            this.firstRun = firstRun;
            this.checksumValidation = checksumValidation;
            this.userAgentInterceptor = new UserAgentInterceptor(userAgent);
            this.resourceConnectTimeout = connectTimeout;
            this.resourceReadTimeout = readTimeout;
            this.defaultHttpClient = buildHttpClient(connectTimeout, readTimeout);
            this.noCacheHttpClient = buildHttpClient(4, 4);
            this.applicationEntries = new HashMap();
            this.currentStatus = CacheStatus.UNCACHED;
            MimeTypesHelper.init(cacheListener.getContext());
            MimeTypesHelper.getInstance().loadMimeTypes(ASSET_MIMETYPES_MANIFEST);
            if (readCacheManifest()) {
                this.logger.logDebug("Native cache successfully loaded", OSCache.CORDOVA_SERVICE_NAME);
                clearUnusedContent();
                return;
            }
            return;
        }
        throw new RuntimeException("Use getInstance() method to get the single instance of this class.");
    }

    public static NativeCache getInstance() {
        return instance;
    }

    public static synchronized void init(@NonNull CacheListener cacheListener, boolean firstRun, boolean checksumValidation, @NonNull String userAgent, int connectTimeout, int readTimeout) {
        synchronized (NativeCache.class) {
            if (instance == null) {
                instance = new NativeCache(cacheListener, firstRun, checksumValidation, userAgent, connectTimeout, readTimeout);
            }
        }
    }

    @NonNull
    private OkHttpClient buildHttpClient(int connectTimeout, int readTimeout) {
        Builder clientBuilder = new Builder();
        clientBuilder.connectTimeout((long) connectTimeout, TimeUnit.SECONDS);
        clientBuilder.readTimeout((long) readTimeout, TimeUnit.SECONDS);
        clientBuilder.retryOnConnectionFailure(false);
        clientBuilder.addInterceptor(this.userAgentInterceptor);
        CertificatePinner certificatePinner = this.certificatePinner;
        if (certificatePinner != null) {
            clientBuilder.certificatePinner(certificatePinner);
        } else {
            SSLSocketFactory sSLSocketFactory = this.sslSocketFactory;
            if (sSLSocketFactory != null) {
                X509TrustManager x509TrustManager = this.trustManager;
                if (x509TrustManager != null) {
                    clientBuilder.sslSocketFactory(sSLSocketFactory, x509TrustManager);
                }
            }
        }
        return clientBuilder.build();
    }

    public void setSSLSocketFactory(@NonNull SSLSocketFactory sslSocketFactory, @NonNull X509TrustManager trustManager) {
        this.sslSocketFactory = sslSocketFactory;
        this.trustManager = trustManager;
        if (this.sslSocketFactory != null && this.trustManager != null) {
            this.defaultHttpClient = buildHttpClient(this.resourceConnectTimeout, this.resourceReadTimeout);
            this.noCacheHttpClient = buildHttpClient(4, 4);
        }
    }

    public void setCertificatePinner(@NonNull CertificatePinner certificatePinner) {
        this.certificatePinner = certificatePinner;
        if (certificatePinner != null) {
            this.defaultHttpClient = buildHttpClient(this.resourceConnectTimeout, this.resourceReadTimeout);
            this.noCacheHttpClient = buildHttpClient(4, 4);
        }
    }

    private JSONObject createCacheManifest() {
        JSONObject result = null;
        try {
            result = new JSONObject();
            result.put(NATIVE_CACHE_VERSION_OBJECT, NATIVE_CACHE_VERSION);
            result.put(NATIVE_CACHE_APPLICATION_OBJECT, this.currentApplication);
            JSONObject cachedContentObject = new JSONObject();
            for (String key : this.applicationEntries.keySet()) {
                cachedContentObject.put(key, ((ApplicationCache) this.applicationEntries.get(key)).toJSONObject());
            }
            result.put(NATIVE_CACHE_ENTRIES_OBJECT, cachedContentObject);
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to create cache manifest object: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
        }
        return result;
    }

    boolean writeCacheManifest() {
        boolean success = true;
        JSONObject cacheManifest = createCacheManifest();
        FileOutputStream fileOutputStream = null;
        try {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(this.cacheListener.getContext().getFilesDir().getPath());
            stringBuilder.append(File.separator);
            stringBuilder.append(NATIVE_CACHE_DIRECTORY);
            stringBuilder.append(File.separator);
            stringBuilder.append(NATIVE_CACHE_MANIFEST);
            File manifestFile = new File(stringBuilder.toString());
            fileOutputStream = new FileOutputStream(manifestFile);
            fileOutputStream.write(cacheManifest.toString().getBytes(Charset.forName(DEFAULT_ENCODING)));
            this.logger.logDebug("Cache was successfully serialized", OSCache.CORDOVA_SERVICE_NAME);
            writeCacheManifestHash(manifestFile);
            try {
                fileOutputStream.close();
            } catch (Throwable e) {
                this.logger.logError("Could not close FileOutputStream while trying to write cache manifest file", OSCache.CORDOVA_SERVICE_NAME, e);
            }
        } catch (Throwable e2) {
            success = false;
            Logger logger = this.logger;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Could not write cache manifest file: ");
            stringBuilder2.append(e2.getMessage());
            logger.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e2);
            if (fileOutputStream != null) {
                fileOutputStream.close();
            }
        } catch (Throwable th) {
            if (fileOutputStream != null) {
                try {
                    fileOutputStream.close();
                } catch (Throwable e3) {
                    this.logger.logError("Could not close FileOutputStream while trying to write cache manifest file", OSCache.CORDOVA_SERVICE_NAME, e3);
                }
            }
        }
        return success;
    }

    boolean readCacheManifest() {
        boolean success;
        boolean success2 = true;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(this.cacheListener.getContext().getFilesDir().getPath());
        stringBuilder.append(File.separator);
        stringBuilder.append(NATIVE_CACHE_DIRECTORY);
        stringBuilder.append(File.separator);
        stringBuilder.append(NATIVE_CACHE_MANIFEST);
        String fileName = stringBuilder.toString();
        try {
            File cacheManifestFile = new File(fileName);
            Logger logger;
            if (cacheManifestFile.exists()) {
                InputStream inputStream = null;
                if (isCacheManifestFileCorrupted(cacheManifestFile)) {
                    r1.logger.logError("Cache manifest file is corrupt or invalid", OSCache.CORDOVA_SERVICE_NAME);
                    return false;
                }
                StringBuilder stringBuilder2;
                try {
                    inputStream = new FileInputStream(cacheManifestFile);
                    if (inputStream.available() == 0) {
                        logger = r1.logger;
                        stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Failed to read cache manifest file: file ");
                        stringBuilder2.append(fileName);
                        stringBuilder2.append(" is invalid or corrupted");
                        logger.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                        try {
                            inputStream.close();
                        } catch (Throwable e) {
                            r1.logger.logError("Could not close InputStream while trying to read cache manifest", OSCache.CORDOVA_SERVICE_NAME, e);
                        }
                        return false;
                    }
                    JSONObject applicationCacheObject;
                    Iterator<String> keys;
                    String key;
                    byte[] data;
                    byte[] data2 = new byte[inputStream.available()];
                    inputStream.read(data2);
                    JSONObject manifest = new JSONObject(new String(data2, DEFAULT_ENCODING));
                    String nativeCacheVersion = manifest.getString(NATIVE_CACHE_VERSION_OBJECT);
                    if (nativeCacheVersion != null) {
                        if (nativeCacheVersion.equals(NATIVE_CACHE_VERSION)) {
                            r1.currentApplication = manifest.getString(NATIVE_CACHE_APPLICATION_OBJECT);
                            applicationCacheObject = manifest.getJSONObject(NATIVE_CACHE_ENTRIES_OBJECT);
                            keys = applicationCacheObject.keys();
                            while (keys.hasNext()) {
                                key = (String) keys.next();
                                data = data2;
                                r1.applicationEntries.put(key, new ApplicationCache(applicationCacheObject.getJSONObject(key), r1.cacheUpgrade, r1.defaultHttpClient, r1.cacheListener.getContext()));
                                data2 = data;
                            }
                            inputStream.close();
                        }
                    }
                    r1.cacheUpgrade = true;
                    r1.currentApplication = manifest.getString(NATIVE_CACHE_APPLICATION_OBJECT);
                    applicationCacheObject = manifest.getJSONObject(NATIVE_CACHE_ENTRIES_OBJECT);
                    keys = applicationCacheObject.keys();
                    while (keys.hasNext()) {
                        key = (String) keys.next();
                        data = data2;
                        r1.applicationEntries.put(key, new ApplicationCache(applicationCacheObject.getJSONObject(key), r1.cacheUpgrade, r1.defaultHttpClient, r1.cacheListener.getContext()));
                        data2 = data;
                    }
                    try {
                        inputStream.close();
                    } catch (Throwable e2) {
                        r1.logger.logError("Could not close InputStream while trying to read cache manifest", OSCache.CORDOVA_SERVICE_NAME, e2);
                    }
                } catch (Throwable e22) {
                    success2 = false;
                    success = r1.logger;
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("Failed to parse cache manifest file");
                    stringBuilder2.append(fileName);
                    stringBuilder2.append(" ");
                    stringBuilder2.append(e22.getMessage());
                    success.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e22);
                    if (inputStream != null) {
                        inputStream.close();
                    }
                } catch (Throwable e222) {
                    success = false;
                    success2 = e222;
                    if (inputStream != null) {
                        try {
                            inputStream.close();
                        } catch (Throwable e2222) {
                            r1.logger.logError("Could not close InputStream while trying to read cache manifest", OSCache.CORDOVA_SERVICE_NAME, e2222);
                        }
                    }
                }
            } else {
                success2 = false;
                if (!r1.firstRun) {
                    logger = r1.logger;
                    StringBuilder stringBuilder3 = new StringBuilder();
                    stringBuilder3.append("Failed to load cache manifest: File ");
                    stringBuilder3.append(fileName);
                    stringBuilder3.append(" not found");
                    logger.logError(stringBuilder3.toString(), OSCache.CORDOVA_SERVICE_NAME);
                }
            }
            return success2;
        } catch (Throwable e22222) {
            Logger logger2 = r1.logger;
            StringBuilder stringBuilder4 = new StringBuilder();
            stringBuilder4.append("Failed to load cache manifest file ");
            stringBuilder4.append(fileName);
            stringBuilder4.append(": ");
            stringBuilder4.append(e22222.getMessage());
            logger2.logError(stringBuilder4.toString(), OSCache.CORDOVA_SERVICE_NAME, e22222);
            return false;
        }
    }

    @Nullable
    private InputStream getResourceInputStream(CacheEntry resource) {
        InputStream stream = null;
        try {
            if (resource.isPreBundled()) {
                stream = this.cacheListener.getContext().getAssets().open(resource.getFileName());
            } else {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append(this.cacheListener.getContext().getFilesDir().getPath());
                stringBuilder.append(File.separator);
                stringBuilder.append(resource.getFileName());
                stream = new FileInputStream(new File(stringBuilder.toString()));
            }
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Could not get InputStream while trying to get cache resource: ");
            stringBuilder2.append(resource.getUrl());
            logger.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
        }
        return stream;
    }

    void createCacheDirectoryForApplication(String applicationKey) {
        String path = new StringBuilder();
        path.append(this.cacheListener.getContext().getFilesDir().getPath());
        path.append(File.separator);
        path.append(NATIVE_CACHE_DIRECTORY);
        path.append(File.separator);
        path.append(applicationKey);
        path = path.toString();
        Logger logger;
        StringBuilder stringBuilder;
        try {
            File applicationCacheDirectory = new File(path);
            if (!applicationCacheDirectory.isDirectory() && !applicationCacheDirectory.mkdirs()) {
                logger = this.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Failed to create cache directory: ");
                stringBuilder.append(applicationCacheDirectory.getPath());
                logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
            }
        } catch (Throwable e) {
            logger = this.logger;
            stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to create cache directory ");
            stringBuilder.append(path);
            stringBuilder.append(" with error: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
        }
    }

    private void changeCacheStatus(@NonNull CacheStatus cacheStatus) {
        this.currentStatus = cacheStatus;
        this.cacheListener.updateStatus(cacheStatus);
    }

    private void createCheckpoint(String currentApplication) {
        CacheResources cacheResources = this.ongoingCacheResources;
        if (cacheResources == null) {
            this.logger.logWarning("OngoingCacheResources is null, potential race condition reached", OSCache.CORDOVA_SERVICE_NAME);
            return;
        }
        if (currentApplication == null) {
            currentApplication = getKeyForHostnameAndApplication(cacheResources.getHostname(), this.ongoingCacheResources.getApplication());
        }
        Logger logger = this.logger;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Create checkpoint for application cache: ");
        stringBuilder.append(currentApplication);
        logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
        ApplicationCache applicationCache = (ApplicationCache) this.applicationEntries.get(currentApplication);
        if (applicationCache == null) {
            applicationCache = new ApplicationCache(this.ongoingCacheResources.getHostname(), this.ongoingCacheResources.getApplication(), currentApplication);
            this.applicationEntries.put(currentApplication, applicationCache);
        }
        applicationCache.swapCache(this.ongoingCacheResources);
        if (writeCacheManifest()) {
            this.logger.logDebug("Checkpoint was created with success", OSCache.CORDOVA_SERVICE_NAME);
        } else {
            this.logger.logError("Failed to serialize application cache while creating a checkpoint", OSCache.CORDOVA_SERVICE_NAME);
        }
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    synchronized boolean swapCache() {
        /*
        r6 = this;
        monitor-enter(r6);
        r0 = r6.currentApplication;	 Catch:{ all -> 0x007d }
        if (r0 == 0) goto L_0x0017;
    L_0x0005:
        r0 = r6.currentStatus;	 Catch:{ all -> 0x007d }
        r1 = com.outsystems.plugins.oscache.cache.types.CacheStatus.UPDATEREADY;	 Catch:{ all -> 0x007d }
        if (r0 == r1) goto L_0x0017;
    L_0x000b:
        r0 = r6.logger;	 Catch:{ all -> 0x007d }
        r1 = "Unable to swap cache: missing application or wrong cache status";
        r2 = "OSCache";
        r0.logDebug(r1, r2);	 Catch:{ all -> 0x007d }
        r0 = 0;
        monitor-exit(r6);
        return r0;
        r0 = r6.ongoingCacheResources;	 Catch:{ all -> 0x007d }
        r0 = r0.getHostname();	 Catch:{ all -> 0x007d }
        r1 = r6.ongoingCacheResources;	 Catch:{ all -> 0x007d }
        r1 = r1.getApplication();	 Catch:{ all -> 0x007d }
        r0 = getKeyForHostnameAndApplication(r0, r1);	 Catch:{ all -> 0x007d }
        r6.currentApplication = r0;	 Catch:{ all -> 0x007d }
        r1 = r6.applicationEntries;	 Catch:{ all -> 0x007d }
        r1 = r1.get(r0);	 Catch:{ all -> 0x007d }
        r1 = (com.outsystems.plugins.oscache.cache.types.ApplicationCache) r1;	 Catch:{ all -> 0x007d }
        if (r1 != 0) goto L_0x004c;
    L_0x0034:
        r2 = new com.outsystems.plugins.oscache.cache.types.ApplicationCache;	 Catch:{ all -> 0x007d }
        r3 = r6.ongoingCacheResources;	 Catch:{ all -> 0x007d }
        r3 = r3.getHostname();	 Catch:{ all -> 0x007d }
        r4 = r6.ongoingCacheResources;	 Catch:{ all -> 0x007d }
        r4 = r4.getApplication();	 Catch:{ all -> 0x007d }
        r2.<init>(r3, r4, r0);	 Catch:{ all -> 0x007d }
        r1 = r2;
        r2 = r6.applicationEntries;	 Catch:{ all -> 0x007d }
        r2.put(r0, r1);	 Catch:{ all -> 0x007d }
        goto L_0x004d;
    L_0x004d:
        r2 = r6.ongoingCacheResources;	 Catch:{ all -> 0x007d }
        r2 = r1.swapCache(r2);	 Catch:{ all -> 0x007d }
        r3 = 0;
        r6.ongoingCacheResources = r3;	 Catch:{ all -> 0x007d }
        r3 = com.outsystems.plugins.oscache.cache.types.CacheStatus.IDLE;	 Catch:{ all -> 0x007d }
        r6.changeCacheStatus(r3);	 Catch:{ all -> 0x007d }
        r3 = r6.writeCacheManifest();	 Catch:{ all -> 0x007d }
        if (r3 == 0) goto L_0x006e;
    L_0x0061:
        r3 = r6.logger;	 Catch:{ all -> 0x007d }
        r4 = "Cache was swapped with success";
        r5 = "OSCache";
        r3.logDebug(r4, r5);	 Catch:{ all -> 0x007d }
        r1.clearPreviousVersion();	 Catch:{ all -> 0x007d }
        goto L_0x007b;
    L_0x006e:
        r3 = r6.logger;	 Catch:{ all -> 0x007d }
        r4 = "Failed to serialize cache while swapping cache";
        r5 = "OSCache";
        r3.logError(r4, r5);	 Catch:{ all -> 0x007d }
        r2 = 0;
        r1.rollbackToPreviousVersion();	 Catch:{ all -> 0x007d }
    L_0x007b:
        monitor-exit(r6);
        return r2;
    L_0x007d:
        r0 = move-exception;
        monitor-exit(r6);
        throw r0;
        */
        throw new UnsupportedOperationException("Method not decompiled: com.outsystems.plugins.oscache.cache.NativeCache.swapCache():boolean");
    }

    private void abortCacheDownload(String errorMessage) {
        CacheResources cacheResources = this.ongoingCacheResources;
        if (cacheResources != null) {
            cacheResources.abortDownload(errorMessage);
        } else {
            this.cacheListener.fireOnErrorEvent(errorMessage);
            this.defaultHttpClient.dispatcher().cancelAll();
            this.cacheListener.fireOnFinishEvent();
        }
        if (this.currentApplication != null) {
            changeCacheStatus(CacheStatus.IDLE);
        } else {
            changeCacheStatus(CacheStatus.UNCACHED);
        }
        this.ongoingCacheResources = null;
    }

    synchronized void markForDeletion(ApplicationCache applicationCache) {
        applicationCache.markForDeletion();
        if (writeCacheManifest()) {
            this.logger.logInfo("Manifest serialized with success", OSCache.CORDOVA_SERVICE_NAME);
        } else {
            this.logger.logError("Failed to clean unused content from cache filesystem", OSCache.CORDOVA_SERVICE_NAME);
        }
    }

    synchronized void clearUnusedContent() {
        ApplicationCache applicationCache = (ApplicationCache) this.applicationEntries.get(this.currentApplication);
        if (applicationCache != null) {
            final List<CacheEntry> resourcesToDelete = applicationCache.gatherResourcesToDelete();
            if (writeCacheManifest()) {
                new Thread(new Runnable() {
                    public void run() {
                        NativeCache.this.deleteFilesFromLocalStorage(resourcesToDelete);
                    }
                }).start();
            } else {
                this.logger.logError("Failed to clean unused content from cache filesystem", OSCache.CORDOVA_SERVICE_NAME);
            }
        }
    }

    private void deleteFilesFromLocalStorage(List<CacheEntry> resources) {
        for (CacheEntry resource : resources) {
            if (resource != null) {
                try {
                    Logger logger = this.logger;
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("Deleting cache file for URL: ");
                    stringBuilder.append(resource.getUrl());
                    logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
                    stringBuilder = new StringBuilder();
                    stringBuilder.append(this.cacheListener.getContext().getFilesDir().getPath());
                    stringBuilder.append(File.separator);
                    stringBuilder.append(resource.getFileName());
                    File file = new File(stringBuilder.toString());
                    if (file.exists()) {
                        file.delete();
                    }
                } catch (Exception e) {
                    Logger logger2 = this.logger;
                    StringBuilder stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("Failed to delete deprecated cache file : ");
                    stringBuilder2.append(e.getMessage());
                    logger2.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                }
            } else {
                this.logger.logWarning("Invalid resource to be deleted", OSCache.CORDOVA_SERVICE_NAME);
            }
        }
    }

    private void applyOptions(@NonNull Map<String, Object> options) {
        int windowSize = 5;
        boolean applyOptions = false;
        this.maxNumberOfRetries = -1;
        if (options != null) {
            int newWindowSize;
            if (options.containsKey(NATIVE_CACHE_WINDOW_SIZE_OPTION)) {
                newWindowSize = ((Integer) options.get(NATIVE_CACHE_WINDOW_SIZE_OPTION)).intValue();
                if (5 != newWindowSize) {
                    windowSize = newWindowSize;
                    applyOptions = true;
                }
            }
            if (options.containsKey(NATIVE_CACHE_RESOURCE_CONNECT_TIMEOUT_OPTION)) {
                newWindowSize = ((Integer) options.get(NATIVE_CACHE_RESOURCE_CONNECT_TIMEOUT_OPTION)).intValue();
                if (this.resourceConnectTimeout != newWindowSize) {
                    this.resourceConnectTimeout = newWindowSize;
                    applyOptions = true;
                }
            }
            if (options.containsKey(NATIVE_CACHE_RESOURCE_READ_TIMEOUT_OPTION)) {
                newWindowSize = ((Integer) options.get(NATIVE_CACHE_RESOURCE_READ_TIMEOUT_OPTION)).intValue();
                if (this.resourceReadTimeout != newWindowSize) {
                    this.resourceReadTimeout = newWindowSize;
                    applyOptions = true;
                }
            }
            if (options.containsKey(NATIVE_CACHE_MAX_NUMBER_OF_RETRIES_OPTION)) {
                newWindowSize = ((Integer) options.get(NATIVE_CACHE_MAX_NUMBER_OF_RETRIES_OPTION)).intValue();
                if (newWindowSize > -1) {
                    this.maxNumberOfRetries = newWindowSize;
                }
            }
        }
        if (applyOptions) {
            Builder clientBuilder = new Builder();
            clientBuilder.connectionPool(new ConnectionPool(windowSize, 5, TimeUnit.MINUTES));
            clientBuilder.connectTimeout((long) this.resourceConnectTimeout, TimeUnit.SECONDS);
            clientBuilder.readTimeout((long) this.resourceReadTimeout, TimeUnit.SECONDS);
            clientBuilder.retryOnConnectionFailure(false);
            CertificatePinner certificatePinner = this.certificatePinner;
            if (certificatePinner != null) {
                clientBuilder.certificatePinner(certificatePinner);
            } else {
                SSLSocketFactory sSLSocketFactory = this.sslSocketFactory;
                if (sSLSocketFactory != null) {
                    X509TrustManager x509TrustManager = this.trustManager;
                    if (x509TrustManager != null) {
                        clientBuilder.sslSocketFactory(sSLSocketFactory, x509TrustManager);
                    }
                }
            }
            this.defaultHttpClient = clientBuilder.build();
        }
    }

    void calculateMaxNumberOfRetries(int resourcesCount) {
        if (this.maxNumberOfRetries == -1) {
            int retries = (int) (((double) resourcesCount) * NATIVE_CACHE_DEFAULT_RETRIES_PERCENTAGE);
            int i = 10;
            if (retries > 10) {
                i = retries;
            }
            this.maxNumberOfRetries = i;
        }
    }

    public WebResourceResponse getResourceFromCache(@NonNull String url) {
        Object result = getResourceFromCache(url, true);
        if (result == null || !(result instanceof WebResourceResponse)) {
            return null;
        }
        return (WebResourceResponse) result;
    }

    public JSONObject getJSONResourceFromCache(@NonNull String url) {
        Object result = getResourceFromCache(url, null);
        if (result == null || !(result instanceof JSONObject)) {
            return null;
        }
        return (JSONObject) result;
    }

    private Object buildResponse(boolean isFromLoader, String responseMessage, String contentType, String encoding, int responseCode, Map<String, String> httpResponseHeaders, InputStream stream, ResponseBody responseBody) {
        String str;
        Throwable e;
        Logger logger;
        StringBuilder stringBuilder;
        int i;
        NativeCache nativeCache = this;
        InputStream inputStream = stream;
        JSONObject jsonObject = new JSONObject();
        String str2;
        if (isFromLoader) {
            WebResourceResponse webResourceResponse;
            if (VERSION.SDK_INT >= 21) {
                WebResourceResponse webResourceResponse2 = new WebResourceResponse(contentType, encoding, responseCode, responseMessage, httpResponseHeaders, stream);
                str2 = contentType;
                String str3 = encoding;
            } else {
                str2 = contentType;
                webResourceResponse = new WebResourceResponse(contentType, encoding, inputStream);
            }
            return webResourceResponse;
        }
        str2 = contentType;
        str3 = encoding;
        try {
            try {
                jsonObject.put("statusCode", responseCode);
                jsonObject.put("data", responseBody == null ? convertStreamToString(inputStream) : responseBody.string());
                str = responseMessage;
            } catch (JSONException e2) {
                e = e2;
                str = responseMessage;
                logger = nativeCache.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Failed to build JSON response: ");
                stringBuilder.append(e.getMessage());
                logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
                return jsonObject;
            } catch (IOException e3) {
                e = e3;
                str = responseMessage;
                logger = nativeCache.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("An IOException occurred while building a JSON response: ");
                stringBuilder.append(e.getMessage());
                logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
                return jsonObject;
            }
            try {
                jsonObject.put("statusText", responseMessage);
                if (httpResponseHeaders != null) {
                    jsonObject.put("headers", httpResponseHeaders.toString());
                }
            } catch (JSONException e4) {
                e = e4;
                logger = nativeCache.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Failed to build JSON response: ");
                stringBuilder.append(e.getMessage());
                logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
                return jsonObject;
            } catch (IOException e5) {
                e = e5;
                logger = nativeCache.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("An IOException occurred while building a JSON response: ");
                stringBuilder.append(e.getMessage());
                logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
                return jsonObject;
            }
        } catch (JSONException e6) {
            e = e6;
            str = responseMessage;
            i = responseCode;
            logger = nativeCache.logger;
            stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to build JSON response: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
            return jsonObject;
        } catch (IOException e7) {
            e = e7;
            str = responseMessage;
            i = responseCode;
            logger = nativeCache.logger;
            stringBuilder = new StringBuilder();
            stringBuilder.append("An IOException occurred while building a JSON response: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
            return jsonObject;
        }
        return jsonObject;
    }

    private Object getResourceFromCache(String url, boolean isFromLoader) {
        String urlString;
        Throwable sslException;
        CacheEntry resource;
        Logger logger;
        StringBuilder stringBuilder;
        String str = url;
        ApplicationCache applicationCache = (ApplicationCache) this.applicationEntries.get(this.currentApplication);
        Uri uri = Uri.parse(url);
        String urlString2 = uri.getPath();
        if (uri.getQuery() == null || uri.getQuery().isEmpty()) {
            urlString = urlString2;
        } else {
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append(urlString2);
            stringBuilder2.append("?");
            stringBuilder2.append(uri.getQuery());
            urlString = stringBuilder2.toString();
        }
        CacheEntry resource2 = applicationCache != null ? applicationCache.getCacheEntryForUrl(urlString) : null;
        if (resource2 != null) {
            if (resource2.getMimeType() == null) {
                resource2.healMimeType();
                serializeCacheHealed();
                Logger logger2 = r10.logger;
                stringBuilder2 = new StringBuilder();
                stringBuilder2.append("Healing resource mime type: ");
                stringBuilder2.append(resource2.getUrl());
                logger2.logWarning(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
            }
            int i = 0;
            if (resource2.isNoCache()) {
                Object webResponse = null;
                if (isNetworkAvailable(r10.cacheListener.getContext())) {
                    try {
                        String encoding;
                        String responseMessage;
                        Response httpResponse = r10.noCacheHttpClient.newCall(new Request.Builder().url(str).get().build()).execute();
                        Response response = httpResponse.networkResponse();
                        String contentType = response.header("Content-Type");
                        String encoding2 = DEFAULT_ENCODING;
                        if (response.header("Content-Encoding") != null) {
                            try {
                                encoding = response.header("Content-Encoding");
                            } catch (SSLException e) {
                                sslException = e;
                                resource = resource2;
                            } catch (Exception e2) {
                                sslException = e2;
                                resource = resource2;
                            }
                        } else {
                            encoding = encoding2;
                        }
                        Headers responseHeaders = response.headers();
                        Map<String, String> httpResponseHeaders = new HashMap();
                        while (i < responseHeaders.size()) {
                            httpResponseHeaders.put(responseHeaders.name(i), responseHeaders.value(i));
                            i++;
                        }
                        httpResponseHeaders.put(NotificationCompat.CATEGORY_STATUS, String.valueOf(response.code()));
                        String responseMessage2 = String.valueOf(httpResponse.code());
                        if (response.message() != null) {
                            if (!response.message().isEmpty()) {
                                responseMessage = response.message();
                                resource = resource2;
                                webResponse = buildResponse(isFromLoader, responseMessage, contentType, encoding, response.code(), httpResponseHeaders, httpResponse.body().byteStream(), httpResponse.body());
                            }
                        }
                        responseMessage = responseMessage2;
                        resource = resource2;
                        try {
                            webResponse = buildResponse(isFromLoader, responseMessage, contentType, encoding, response.code(), httpResponseHeaders, httpResponse.body().byteStream(), httpResponse.body());
                        } catch (SSLException e3) {
                            sslException = e3;
                            logger = r10.logger;
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Failed to download resource ");
                            stringBuilder.append(resource.getUrl());
                            stringBuilder.append(" with pinning or SSL error: ");
                            stringBuilder.append(sslException.getMessage());
                            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, sslException);
                            if (webResponse == null) {
                                resource2 = resource;
                                try {
                                    resource = resource2;
                                    try {
                                        webResponse = buildResponse(isFromLoader, "Ok", resource2.getMimeType(), resource2.getEncoding(), HTTP_STATUS_CODE_OK, null, getResourceInputStream(resource2), null);
                                    } catch (Exception e4) {
                                        sslException = e4;
                                        logger = r10.logger;
                                        stringBuilder = new StringBuilder();
                                        stringBuilder.append("Failed to load resource ");
                                        stringBuilder.append(resource.getUrl());
                                        stringBuilder.append(" from storage: ");
                                        stringBuilder.append(sslException.getMessage());
                                        logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, sslException);
                                        return null;
                                    }
                                } catch (Exception e5) {
                                    sslException = e5;
                                    resource = resource2;
                                    logger = r10.logger;
                                    stringBuilder = new StringBuilder();
                                    stringBuilder.append("Failed to load resource ");
                                    stringBuilder.append(resource.getUrl());
                                    stringBuilder.append(" from storage: ");
                                    stringBuilder.append(sslException.getMessage());
                                    logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, sslException);
                                    return null;
                                }
                            }
                            return webResponse;
                        } catch (Exception e6) {
                            sslException = e6;
                            try {
                                logger = r10.logger;
                                stringBuilder = new StringBuilder();
                                stringBuilder.append("Failed to download resource ");
                                stringBuilder.append(resource.getUrl());
                                stringBuilder.append(": ");
                                stringBuilder.append(sslException.getMessage());
                                logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, sslException);
                                if (webResponse == null) {
                                    resource2 = resource;
                                    resource = resource2;
                                    webResponse = buildResponse(isFromLoader, "Ok", resource2.getMimeType(), resource2.getEncoding(), HTTP_STATUS_CODE_OK, null, getResourceInputStream(resource2), null);
                                }
                                return webResponse;
                            } catch (Throwable sslException2) {
                                logger = r10.logger;
                                stringBuilder = new StringBuilder();
                                stringBuilder.append("Failed to load resource from storage: ");
                                stringBuilder.append(sslException2.getMessage());
                                logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, sslException2);
                            }
                        }
                    } catch (SSLException e7) {
                        sslException2 = e7;
                        resource = resource2;
                        logger = r10.logger;
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Failed to download resource ");
                        stringBuilder.append(resource.getUrl());
                        stringBuilder.append(" with pinning or SSL error: ");
                        stringBuilder.append(sslException2.getMessage());
                        logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, sslException2);
                        if (webResponse == null) {
                            resource2 = resource;
                            resource = resource2;
                            webResponse = buildResponse(isFromLoader, "Ok", resource2.getMimeType(), resource2.getEncoding(), HTTP_STATUS_CODE_OK, null, getResourceInputStream(resource2), null);
                        }
                        return webResponse;
                    } catch (Exception e8) {
                        sslException2 = e8;
                        resource = resource2;
                        logger = r10.logger;
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Failed to download resource ");
                        stringBuilder.append(resource.getUrl());
                        stringBuilder.append(": ");
                        stringBuilder.append(sslException2.getMessage());
                        logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, sslException2);
                        if (webResponse == null) {
                            resource2 = resource;
                            resource = resource2;
                            webResponse = buildResponse(isFromLoader, "Ok", resource2.getMimeType(), resource2.getEncoding(), HTTP_STATUS_CODE_OK, null, getResourceInputStream(resource2), null);
                        }
                        return webResponse;
                    }
                }
                resource = resource2;
                if (webResponse == null) {
                    resource2 = resource;
                    resource = resource2;
                    webResponse = buildResponse(isFromLoader, "Ok", resource2.getMimeType(), resource2.getEncoding(), HTTP_STATUS_CODE_OK, null, getResourceInputStream(resource2), null);
                }
                return webResponse;
            }
            if (isApplicationCacheEnabled(resource2)) {
                return null;
            }
            InputStream stream;
            Object webResponse2 = null;
            InputStream stream2 = getResourceInputStream(resource2);
            if (stream2 == null && !resource2.isPreBundled()) {
                CacheResources preBundleFrame = applicationCache.getPreBundleVersion();
                CacheEntry preBundleResource = preBundleFrame != null ? (CacheEntry) preBundleFrame.getCacheEntries().get(resource2.getUrl()) : null;
                if (preBundleResource != null) {
                    String cacheFileName = preBundleResource.getFileName();
                    preBundleResource.setFileName(preBundleFrame.getFileNameForUrl(preBundleResource.getUrl(), true));
                    preBundleFrame.copyPreBundleResource(preBundleResource);
                    preBundleResource.setFileName(cacheFileName);
                    preBundleResource.setPreBundled(false);
                    stream2 = getResourceInputStream(preBundleResource);
                    StringBuilder stringBuilder3;
                    if (stream2 != null) {
                        healingEntry(urlString);
                        logger = r10.logger;
                        stringBuilder3 = new StringBuilder();
                        stringBuilder3.append("Healing resource ");
                        stringBuilder3.append(resource2.getUrl());
                        stringBuilder3.append(" from prebundle: SUCCEEDED");
                        logger.logWarning(stringBuilder3.toString(), OSCache.CORDOVA_SERVICE_NAME);
                    } else {
                        logger = r10.logger;
                        stringBuilder3 = new StringBuilder();
                        stringBuilder3.append("Healing resource ");
                        stringBuilder3.append(resource2.getUrl());
                        stringBuilder3.append(" from prebundle: FAILED");
                        logger.logError(stringBuilder3.toString(), OSCache.CORDOVA_SERVICE_NAME);
                    }
                }
            }
            if (stream2 == null) {
                applicationCache.getRunningVersion().downloadResourceSync(resource2, r10.checksumValidation);
                InputStream stream3 = getResourceInputStream(resource2);
                Logger logger3;
                StringBuilder stringBuilder4;
                if (stream3 != null) {
                    healingEntry(urlString);
                    logger3 = r10.logger;
                    stringBuilder4 = new StringBuilder();
                    stringBuilder4.append("Healing resource ");
                    stringBuilder4.append(resource2.getUrl());
                    stringBuilder4.append(" from web: SUCCEEDED");
                    logger3.logWarning(stringBuilder4.toString(), OSCache.CORDOVA_SERVICE_NAME);
                } else {
                    logger3 = r10.logger;
                    stringBuilder4 = new StringBuilder();
                    stringBuilder4.append("Healing resource ");
                    stringBuilder4.append(resource2.getUrl());
                    stringBuilder4.append(" from web: FAILED");
                    logger3.logError(stringBuilder4.toString(), OSCache.CORDOVA_SERVICE_NAME);
                }
                stream = stream3;
            } else {
                stream = stream2;
            }
            if (stream != null) {
                CacheEntry resource3 = resource2;
                webResponse2 = buildResponse(isFromLoader, "Ok", resource2.getMimeType(), resource2.getEncoding(), HTTP_STATUS_CODE_OK, null, stream, null);
                logger = r10.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Resource loaded from cache ");
                stringBuilder.append(resource3.getUrl());
                logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
            }
            return webResponse2;
        }
        logger2 = r10.logger;
        stringBuilder2 = new StringBuilder();
        stringBuilder2.append("Unable to find resource: ");
        stringBuilder2.append(str);
        logger2.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
        return null;
    }

    private String convertStreamToString(InputStream inputStream) {
        ByteArrayOutputStream result = new ByteArrayOutputStream();
        String byteArrayOutputStream;
        try {
            byte[] buffer = new byte[1024];
            while (true) {
                int read = inputStream.read(buffer);
                int length = read;
                if (read == -1) {
                    break;
                }
                result.write(buffer, 0, length);
            }
            byteArrayOutputStream = result.toString(DEFAULT_ENCODING);
            return byteArrayOutputStream;
        } catch (Throwable e) {
            byteArrayOutputStream = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to convert stream to string: ");
            stringBuilder.append(e.getMessage());
            byteArrayOutputStream.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
            return "";
        } finally {
            try {
                result.close();
            } catch (Throwable e2) {
                this.logger.logError("Could not close ByteArrayOutputStream while trying to convert stream to string", OSCache.CORDOVA_SERVICE_NAME, e2);
            }
        }
    }

    private void healingEntry(String url) {
        ApplicationCache applicationCache = (ApplicationCache) this.applicationEntries.get(this.currentApplication);
        if (applicationCache != null) {
            applicationCache.healingCacheEntry(url);
            serializeCacheHealed();
        }
    }

    public void startCaching(@NonNull String hostname, @NonNull String application, @NonNull String version, @NonNull List<String> resources, @NonNull Map<String, String> urlMappings, @NonNull Map<String, String> noCacheUrlMappings, @NonNull Map<String, Object> options) {
        ApplicationCache applicationCache;
        ApplicationCache applicationCache2;
        Throwable e;
        String str = version;
        Logger logger = this.logger;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("startCaching started for version: ");
        stringBuilder.append(str);
        logger.logVerbose(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
        applyOptions(options);
        String appKey = getKeyForHostnameAndApplication(hostname, application);
        if (appKey.equals(this.currentApplication)) {
            applicationCache = (ApplicationCache) r1.applicationEntries.get(r1.currentApplication);
            if (applicationCache != null && applicationCache.getRunningVersion() != null && applicationCache.getRunningVersion().getVersionToken() != null && applicationCache.getRunningVersion().getVersionToken().equals(str)) {
                r1.ongoingCacheResources = null;
                changeCacheStatus(CacheStatus.IDLE);
                r1.cacheListener.fireOnFinishEvent();
                Logger logger2 = r1.logger;
                StringBuilder stringBuilder2 = new StringBuilder();
                stringBuilder2.append("Caching operation was skipped: version ");
                stringBuilder2.append(str);
                stringBuilder2.append(" is already available in cache");
                logger2.logDebug(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
                return;
            }
        }
        CacheResources cacheResources = r1.ongoingCacheResources;
        if (cacheResources != null) {
            if (cacheResources.getVersionToken().equals(str)) {
                logger = r1.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Caching operation was rejected: version ");
                stringBuilder.append(str);
                stringBuilder.append(" is already being cached");
                logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
                return;
            }
            r1.defaultHttpClient.dispatcher().cancelAll();
        }
        String str2;
        String str3;
        if (resources.isEmpty()) {
            str2 = hostname;
            str3 = application;
        } else if (urlMappings.isEmpty()) {
            str2 = hostname;
            str3 = application;
        } else {
            applicationCache = (ApplicationCache) r1.applicationEntries.get(appKey);
            if (applicationCache == null) {
                applicationCache = new ApplicationCache(hostname, application, appKey);
                r1.applicationEntries.put(appKey, applicationCache);
                applicationCache2 = applicationCache;
            } else {
                str2 = hostname;
                str3 = application;
                applicationCache2 = applicationCache;
            }
            createCacheDirectoryForApplication(appKey);
            ApplicationCache applicationCache3;
            try {
                r1.ongoingCacheResources = applicationCache2.getCacheFrameByVersion(str);
                if (r1.ongoingCacheResources != null) {
                    try {
                        if (!r1.ongoingCacheResources.isPreBundled()) {
                            r1.ongoingCacheResources.setDownloadListener(r1.startCachingDownloadListener);
                            applicationCache3 = applicationCache2;
                            changeCacheStatus(CacheStatus.DOWNLOADING);
                            calculateMaxNumberOfRetries(resources.size());
                            r1.ongoingCacheResources.setMaxNumberOfRetries(r1.maxNumberOfRetries);
                            r1.ongoingCacheResources.startDownload(r1.checksumValidation);
                            return;
                        }
                    } catch (Exception e2) {
                        e = e2;
                        applicationCache3 = applicationCache2;
                        logger2 = r1.logger;
                        stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Failed to download resources for application version ");
                        stringBuilder2.append(str);
                        stringBuilder2.append(": ");
                        stringBuilder2.append(e.getMessage());
                        logger2.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Failed to download resources for application version ");
                        stringBuilder.append(str);
                        stringBuilder.append(": ");
                        stringBuilder.append(e.getMessage());
                        abortCacheDownload(stringBuilder.toString());
                        return;
                    }
                }
                CacheResources cacheResources2 = cacheResources2;
                applicationCache3 = applicationCache2;
                try {
                    r1.ongoingCacheResources = new CacheResources(hostname, application, version, false, null, r1.startCachingDownloadListener, r1.defaultHttpClient, r1.cacheListener.getContext());
                    cacheResources = applicationCache3.getPreBundleVersion();
                    r1.ongoingCacheResources.populateCacheEntries(applicationCache3.getCacheEntries(), cacheResources != null ? cacheResources.getCacheEntries() : Collections.emptyMap(), resources, urlMappings, noCacheUrlMappings);
                    applicationCache3.getCacheFrames().add(r1.ongoingCacheResources);
                    changeCacheStatus(CacheStatus.DOWNLOADING);
                    calculateMaxNumberOfRetries(resources.size());
                    r1.ongoingCacheResources.setMaxNumberOfRetries(r1.maxNumberOfRetries);
                    r1.ongoingCacheResources.startDownload(r1.checksumValidation);
                } catch (Exception e3) {
                    e = e3;
                    logger2 = r1.logger;
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("Failed to download resources for application version ");
                    stringBuilder2.append(str);
                    stringBuilder2.append(": ");
                    stringBuilder2.append(e.getMessage());
                    logger2.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Failed to download resources for application version ");
                    stringBuilder.append(str);
                    stringBuilder.append(": ");
                    stringBuilder.append(e.getMessage());
                    abortCacheDownload(stringBuilder.toString());
                    return;
                }
            } catch (Exception e4) {
                e = e4;
                applicationCache3 = applicationCache2;
                logger2 = r1.logger;
                stringBuilder2 = new StringBuilder();
                stringBuilder2.append("Failed to download resources for application version ");
                stringBuilder2.append(str);
                stringBuilder2.append(": ");
                stringBuilder2.append(e.getMessage());
                logger2.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
                stringBuilder = new StringBuilder();
                stringBuilder.append("Failed to download resources for application version ");
                stringBuilder.append(str);
                stringBuilder.append(": ");
                stringBuilder.append(e.getMessage());
                abortCacheDownload(stringBuilder.toString());
                return;
            }
            return;
        }
        r1.logger.logVerbose("Caching operation was rejected: resource list and url mappings dictionary are not valid", OSCache.CORDOVA_SERVICE_NAME);
        r1.cacheListener.fireOnErrorEvent("Caching operation was rejected: resource list and url mappings dictionary are not valid");
        r1.cacheListener.fireOnFinishEvent();
    }

    public void switchToVersion(@NonNull String hostname, @NonNull String application, @NonNull String version) {
        Logger logger = this.logger;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("switchToVersion version: ");
        stringBuilder.append(version);
        logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
        String appKey = getKeyForHostnameAndApplication(hostname, application);
        String str = this.currentApplication;
        if (str == null || !str.equals(appKey)) {
            Logger logger2 = this.logger;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Unable to switch version: app https://");
            stringBuilder2.append(hostname);
            stringBuilder2.append("/");
            stringBuilder2.append(application);
            stringBuilder2.append(" not found");
            logger2.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME);
            CacheListener cacheListener = this.cacheListener;
            stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Unable to switch to cache version ");
            stringBuilder2.append(version);
            cacheListener.throwException(stringBuilder2.toString());
            return;
        }
        ApplicationCache applicationCache = (ApplicationCache) this.applicationEntries.get(this.currentApplication);
        if (applicationCache != null && applicationCache.getRunningVersion() != null) {
            if (applicationCache.getRunningVersion().getVersionToken() != null) {
                if (applicationCache.getRunningVersion().getVersionToken().equals(version)) {
                    markForDeletion(applicationCache);
                }
            }
        }
        Logger logger3 = this.logger;
        StringBuilder stringBuilder3 = new StringBuilder();
        stringBuilder3.append("Failed to switch to cache version ");
        stringBuilder3.append(version);
        logger3.logError(stringBuilder3.toString(), OSCache.CORDOVA_SERVICE_NAME);
        CacheListener cacheListener2 = this.cacheListener;
        stringBuilder3 = new StringBuilder();
        stringBuilder3.append("Unable to switch to cache version ");
        stringBuilder3.append(version);
        cacheListener2.throwException(stringBuilder3.toString());
    }

    @NonNull
    public static String getKeyForHostnameAndApplication(@NonNull String hostname, @NonNull String application) {
        String appKey = new StringBuilder();
        appKey.append(hostname);
        appKey.append("/");
        appKey.append(application);
        return String.valueOf(appKey.toString().hashCode());
    }

    public void setCurrentApplication(@NonNull String hostname, @NonNull String application) {
        this.currentApplication = getKeyForHostnameAndApplication(hostname, application);
        if (((ApplicationCache) this.applicationEntries.get(this.currentApplication)) == null) {
            this.applicationEntries.put(this.currentApplication, new ApplicationCache(hostname, application, this.currentApplication));
        }
    }

    public void bootstrapCache(String version, List<String> resources, Map<String, String> urlMappings, Map<String, String> noCacheUrlMappings) {
        String str = this.currentApplication;
        if (str == null) {
            r0.logger.logDebug("Invalid application key", OSCache.CORDOVA_SERVICE_NAME);
            return;
        }
        ApplicationCache applicationCache = (ApplicationCache) r0.applicationEntries.get(str);
        if (applicationCache == null) {
            Logger logger = r0.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to bootstrap application cache: No application cache available for key ");
            stringBuilder.append(r0.currentApplication);
            logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
            return;
        }
        if (resources.size() > 0) {
            if (urlMappings.size() > 0) {
                createCacheDirectoryForApplication(r0.currentApplication);
                CacheResources cacheResources = new CacheResources(applicationCache.getHostname(), applicationCache.getApplication(), version, true, null, null, null, r0.cacheListener.getContext());
                cacheResources.populateCacheEntries(applicationCache.getCacheEntries(), Collections.emptyMap(), resources, urlMappings, noCacheUrlMappings);
                applicationCache.getCacheFrames().add(cacheResources);
                applicationCache.setPreBundleVersion(cacheResources);
                changeCacheStatus(CacheStatus.IDLE);
                return;
            }
        }
        r0.logger.logDebug("Failed to bootstrap application cache: resource list and url mappings dictionary are not valid", OSCache.CORDOVA_SERVICE_NAME);
    }

    public void upgradeCacheIfNeeded() {
        if (this.cacheUpgrade) {
            this.logger.logDebug("Upgrading cache", OSCache.CORDOVA_SERVICE_NAME);
            for (String currentKey : this.applicationEntries.keySet()) {
                createCacheDirectoryForApplication(currentKey);
                ApplicationCache currentApplicationCache = (ApplicationCache) this.applicationEntries.get(currentKey);
                if (currentApplicationCache != null) {
                    currentApplicationCache.upgradeIfNeeded();
                }
            }
            this.cacheUpgrade = false;
            this.currentStatus = CacheStatus.IDLE;
            if (writeCacheManifest()) {
                this.logger.logDebug("Cache upgraded with success", OSCache.CORDOVA_SERVICE_NAME);
                return;
            } else {
                this.logger.logError("Failed to serialize cache while upgrading cache", OSCache.CORDOVA_SERVICE_NAME);
                return;
            }
        }
        this.logger.logDebug("Tried to upgrade cache but was already up to date", OSCache.CORDOVA_SERVICE_NAME);
    }

    private boolean isNetworkAvailable(Context context) {
        NetworkInfo activeNetworkInfo = ((ConnectivityManager) context.getSystemService("connectivity")).getActiveNetworkInfo();
        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }

    private boolean isApplicationCacheEnabled(CacheEntry resource) {
        if (resource == null || !resource.getMimeType().equals("text/html")) {
            return false;
        }
        try {
            InputStream resourceStream = getResourceInputStream(resource);
            StringBuilder inputStringBuilder = new StringBuilder();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(resourceStream, DEFAULT_ENCODING));
            for (String line = bufferedReader.readLine(); line != null; line = bufferedReader.readLine()) {
                inputStringBuilder.append(line);
                inputStringBuilder.append('\n');
            }
            boolean matches = inputStringBuilder.toString().contains("manifest=");
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Application enabled: ");
            stringBuilder.append(matches);
            logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
            return matches;
        } catch (Throwable e) {
            Logger logger2 = this.logger;
            StringBuilder stringBuilder2 = new StringBuilder();
            stringBuilder2.append("Failed to parse HTML file ");
            stringBuilder2.append(resource.getUrl());
            stringBuilder2.append(": ");
            stringBuilder2.append(e.getMessage());
            logger2.logError(stringBuilder2.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
            return false;
        }
    }

    private void writeCacheManifestHash(File file) {
        Logger logger;
        StringBuilder stringBuilder;
        try {
            String fileContentHash = FileChecksum.getContentHash(new FileInputStream(file));
            if (fileContentHash != null) {
                logger = this.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Cache manifest Hash: ");
                stringBuilder.append(fileContentHash);
                logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
                if (this.cacheListener != null && this.cacheListener.getContext() != null) {
                    this.cacheListener.getContext().getSharedPreferences(SHARED_PREFERENCES_FILE, 0).edit().putString(PREFERENCE_CACHE_MANIFEST_FILE_HASH, fileContentHash).apply();
                }
            }
        } catch (Throwable e) {
            logger = this.logger;
            stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to get and save the hash of manifest file: ");
            stringBuilder.append(file.getAbsolutePath());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
        }
    }

    private void serializeCacheHealed() {
        try {
            String jsonDataContentHash = FileChecksum.getContentHash(new ByteArrayInputStream(createCacheManifest().toString().getBytes()));
            if (this.cacheListener != null && this.cacheListener.getContext() != null) {
                String checksum = this.cacheListener.getContext().getApplicationContext().getSharedPreferences(SHARED_PREFERENCES_FILE, 0).getString(PREFERENCE_CACHE_MANIFEST_FILE_HASH, "");
                if (jsonDataContentHash != null && !checksum.equals(jsonDataContentHash)) {
                    writeCacheManifest();
                }
            }
        } catch (Exception e) {
            this.logger.logError("Failed to check the integrity of the cache manifest file.", OSCache.CORDOVA_SERVICE_NAME);
        }
    }

    boolean isCacheManifestFileCorrupted(@NonNull File file) {
        Logger logger;
        StringBuilder stringBuilder;
        try {
            String fileContentHash = FileChecksum.getContentHash(new FileInputStream(file));
            if (fileContentHash != null) {
                logger = this.logger;
                stringBuilder = new StringBuilder();
                stringBuilder.append("Cache manifest hash : ");
                stringBuilder.append(fileContentHash);
                logger.logDebug(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME);
                if (this.cacheListener != null && this.cacheListener.getContext() != null) {
                    String checksum = this.cacheListener.getContext().getApplicationContext().getSharedPreferences(SHARED_PREFERENCES_FILE, 0).getString(PREFERENCE_CACHE_MANIFEST_FILE_HASH, "");
                    if (checksum.length() > 0 && !checksum.equals(fileContentHash)) {
                        return true;
                    }
                }
            }
        } catch (Throwable e) {
            logger = this.logger;
            stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to check the integrity of the cache manifest file : ");
            stringBuilder.append(file.getAbsolutePath());
            logger.logError(stringBuilder.toString(), OSCache.CORDOVA_SERVICE_NAME, e);
        }
        return false;
    }
}
