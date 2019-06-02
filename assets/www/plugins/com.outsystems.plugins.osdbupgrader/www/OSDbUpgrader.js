cordova.define("com.outsystems.plugins.osdbupgrader.OSDbUpgrader", function(require, exports, module) {
if (!window.sqlitePlugin) {
    OutSystemsNative.Logger.logError("SQLite plugin was not found", "OSDbUpgrader");
    throw new Error("SQLite plugin was not found");
}

var originalOpenDatabase = window.sqlitePlugin.openDatabase;

window.sqlitePlugin.openDatabase = function(options, successCallback, errorCallback) {
    if (!options.location) {
        options.location = "default";
    }
    
    return originalOpenDatabase.call(window.sqlitePlugin, options, successCallback, errorCallback);
};

});
