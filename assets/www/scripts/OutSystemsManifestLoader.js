var OSManifestLoader;
(function (OSManifestLoader) {
    var MANIFEST_TIMEOUT = 10000;
    function getBasePathName() {
        return location.pathname.substring(1, location.pathname.indexOf("/", 1));
    }
    function getVersionTokenParameter(versionToken) {
        return versionToken ? "?" + versionToken : "";
    }
    function getLatestManifest(versionToken) {
        return getManifest(versionToken);
    }
    OSManifestLoader.getLatestManifest = getLatestManifest;
    function getCachedManifest() {
        return getManifest("cached");
    }
    OSManifestLoader.getCachedManifest = getCachedManifest;
    function getManifest(versionToken) {
        return get("moduleinfo", MANIFEST_TIMEOUT, false, versionToken);
    }
    function getLatestVersion(checkOffline) {
        if (checkOffline === void 0) { checkOffline = true; }
        var cacheInvalidationSuffix = new Date().getTime().toString();
        return get("moduleversioninfo", MANIFEST_TIMEOUT, checkOffline, cacheInvalidationSuffix)
            .then(function (moduleVersionInfo) { return moduleVersionInfo.versionToken; });
    }
    OSManifestLoader.getLatestVersion = getLatestVersion;
    function get(serviceName, timeout, checkOffline, versionToken) {
        return new Promise(function (resolve, reject) {
            var url = "/" + getBasePathName() + "/moduleservices/" + serviceName + getVersionTokenParameter(versionToken);
            if (checkOffline && typeof navigator !== "undefined" && !navigator.onLine) {
                return reject("Unable to access '" + url + "' - There's no network connection.");
            }
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.readyState !== 4 || xhr.status !== 200) {
                    return reject(getCommunicationErrorMessage(url, xhr.status));
                }
                var parsedResponse;
                try {
                    parsedResponse = JSON.parse(xhr.responseText.substring(xhr.responseText.indexOf("{"), xhr.responseText.length));
                }
                catch (e) {
                    return reject(e);
                }
                if (!parsedResponse) {
                    return reject(Error("Unable to parse payload downloaded from '" + url + "'."));
                }
                resolve(parsedResponse);
            };
            xhr.onerror = xhr.ontimeout = function () { return reject(Error(getCommunicationErrorMessage(url, xhr.status))); };
            xhr.onabort = function () { return reject(Error(getCommunicationErrorMessage(url, xhr.status, true))); };
            xhr.open("GET", url, true);
            if (timeout) {
                xhr.timeout = timeout;
            }
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send();
        });
    }
    function getCommunicationErrorMessage(url, status, aborted) {
        if (aborted === void 0) { aborted = false; }
        var reason = aborted ? " (request aborted)" : "";
        return "Unable to access '" + url + "'" + reason + ". Error Code: " + status;
    }
    if (typeof Promise !== "undefined") {
        OSManifestLoader.prefetchedVersion = OSManifestLoader.getLatestVersion(false);
    }
    OSManifestLoader.indexVersionToken = null;
})(OSManifestLoader || (OSManifestLoader = {}));
