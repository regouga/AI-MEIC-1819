package com.outsystems.plugins.prebundle;

import android.content.Context;
import com.outsystems.plugins.manifest.OSManifestParser;
import com.outsystems.plugins.manifest.interfaces.ManifestParserEngine;
import com.outsystems.plugins.manifest.types.Manifest;
import com.outsystems.plugins.oscache.cache.interfaces.CacheEngine;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import com.outsystems.plugins.prebundle.interfaces.PreBundle;
import java.io.InputStream;
import org.json.JSONObject;

public class OSPreBundle implements PreBundle {
    private static final String DEFAULT_ENCODING = "UTF-8";
    private static final String PRECACHE_MANIFEST = "www/manifest.json";
    private CacheEngine cacheEngine;
    private Context context;
    private String defaultHostname;
    private String defaultURL;
    private Logger logger;
    private ManifestParserEngine manifestEngine;

    public OSPreBundle(CacheEngine cacheEngine, OSManifestParser manifestEngine, Logger loggerEngine, String defaultHostname, String defaultURL, Context context) {
        this.cacheEngine = cacheEngine;
        this.manifestEngine = manifestEngine;
        this.logger = loggerEngine;
        this.defaultHostname = defaultHostname;
        this.defaultURL = defaultURL;
        this.context = context;
    }

    public void bootstrapCacheWithPreBundle() {
        this.logger.logDebug("Loading PreBundle manifest", "OSPreBundle");
        loadPreBundleManifest(getManifest(readManifestFromAssets(PRECACHE_MANIFEST)));
        this.logger.logDebug("Upgrading cache model if needed", "OSPreBundle");
        this.cacheEngine.upgradeCacheIfNeeded();
    }

    private InputStream readManifestFromAssets(String manifestFile) {
        try {
            return this.context.getAssets().open(manifestFile);
        } catch (Throwable e) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to read manifest file from assets: ");
            stringBuilder.append(e.getMessage());
            logger.logError(stringBuilder.toString(), "OSPreBundle", e);
            return null;
        }
    }

    Manifest getManifest(InputStream manifestStream) {
        Manifest manifestData = null;
        try {
            byte[] data = new byte[manifestStream.available()];
            manifestStream.read(data);
            manifestData = this.manifestEngine.getManifestInfo(new JSONObject(new String(data, DEFAULT_ENCODING)));
            if (manifestStream != null) {
                try {
                    manifestStream.close();
                } catch (Throwable e) {
                    this.logger.logError("Could not close InputStream after reading pre-cache manifest file", "OSPreBundle", e);
                }
                return manifestData;
            }
        } catch (Throwable e2) {
            Logger logger = this.logger;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to load pre-bundle manifest: ");
            stringBuilder.append(e2.getMessage());
            logger.logError(stringBuilder.toString(), "OSPreBundle", e2);
            if (manifestStream != null) {
                manifestStream.close();
            }
        } catch (Throwable th) {
            if (manifestStream != null) {
                try {
                    manifestStream.close();
                } catch (Throwable e3) {
                    this.logger.logError("Could not close InputStream after reading pre-cache manifest file", "OSPreBundle", e3);
                }
            }
        }
        return manifestData;
    }

    void loadPreBundleManifest(Manifest manifest) {
        if (manifest != null) {
            String manifestVersion = manifest.getVersionToken();
            if (manifestVersion != null) {
                String str = this.defaultHostname;
                if (str != null) {
                    String str2 = this.defaultURL;
                    if (str2 != null) {
                        this.cacheEngine.setCurrentApplication(str, str2);
                        manifest.getUrlVersions().add(this.manifestEngine.getManifestUrl(manifestVersion));
                        this.cacheEngine.bootstrapCache(manifestVersion, manifest.getUrlVersions(), manifest.getUrlMappings(), manifest.getUrlMappingsNoCache());
                    }
                }
                this.logger.logError("Could not load pre-bundle resources: hostname or url are null", "OSPreBundle");
                return;
            }
            this.logger.logError("Could not load pre-bundle resources: manifest version is null", "OSPreBundle");
        } else {
            this.logger.logError("Could not load pre-bundle resources: manifest data is null", "OSPreBundle");
        }
    }
}
