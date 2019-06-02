package com.outsystems.plugins.manifest.types;

import java.util.List;
import java.util.Map;

public class Manifest {
    private Map<String, String> urlMappings;
    private Map<String, String> urlMappingsNoCache;
    private List<String> urlVersions;
    private String versionToken;

    public Manifest(String versionToken) {
        this.versionToken = versionToken;
    }

    public Manifest(String versionToken, List<String> urlVersionTokenMap, Map<String, String> urlMappings, Map<String, String> urlMappingsNoCache) {
        this.versionToken = versionToken;
        this.urlVersions = urlVersionTokenMap;
        this.urlMappings = urlMappings;
        this.urlMappingsNoCache = urlMappingsNoCache;
    }

    public String getVersionToken() {
        return this.versionToken;
    }

    public void setVersionToken(String versionToken) {
        this.versionToken = versionToken;
    }

    public List<String> getUrlVersions() {
        return this.urlVersions;
    }

    public void setUrlVersions(List<String> urlVersions) {
        this.urlVersions = urlVersions;
    }

    public Map<String, String> getUrlMappings() {
        return this.urlMappings;
    }

    public void setUrlMappings(Map<String, String> urlMappings) {
        this.urlMappings = urlMappings;
    }

    public Map<String, String> getUrlMappingsNoCache() {
        return this.urlMappingsNoCache;
    }

    public void setUrlMappingsNoCache(Map<String, String> urlMappingsNoCache) {
        this.urlMappingsNoCache = urlMappingsNoCache;
    }
}
