cordova.define("com.outsystems.plugins.logger.OSLogger", function(require, exports, module) {
var exec = require('cordova/exec');

/**
 * API definition
 **/

module.exports.logVerbose = function(message, moduleName, success, fail) {
    if(!message)
        message = "";
                   
    if(!moduleName)
        moduleName = "";
    
    exec(success, fail, "OSLogger", "logVerbose", [message, moduleName]);
}

module.exports.logDebug = function(message, moduleName, success, fail) {
    if(!message)
        message = "";
                   
    if(!moduleName)
        moduleName = "";
    
    exec(success, fail, "OSLogger", "logDebug", [message, moduleName]);
}

module.exports.logInfo = function(message, moduleName, success, fail) {
    if(!message)
        message = "";
                   
    if(!moduleName)
        moduleName = "";
    
    exec(success, fail, "OSLogger", "logInfo", [message, moduleName]);
}

module.exports.logWarning = function (message, moduleName, success, fail) {
    if(!message)
        message = "";
                   
    if(!moduleName)
        moduleName = "";
    
    exec(success, fail, "OSLogger", "logWarning", [message, moduleName]);
}

module.exports.logError = function (message, moduleName, extra, stack, success, fail) {
    if(!message)
        message = "";
                   
    if(!moduleName)
        moduleName = "";
    
    exec(success, fail, "OSLogger", "logError", [message, moduleName, extra, stack]);
}
});
