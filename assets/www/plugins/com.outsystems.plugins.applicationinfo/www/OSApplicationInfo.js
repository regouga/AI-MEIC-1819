cordova.define("com.outsystems.plugins.applicationinfo.OSApplicationInfo", function(require, exports, module) {
var exec = require('cordova/exec');

/**
* API definition
**/

exports.getPlatformVersion = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getPlatformVersion");
}

exports.getNativeShellVersion = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getNativeShellVersion");
}

exports.getAppVersion = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getAppVersion");
}

exports.getAppVersionNumber = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getAppVersionNumber");
}
});
