cordova.define("com.outsystems.plugins.oscache.OSCache", function(require, exports, module) {

var exec = cordova.require('cordova/exec');
var channel = cordova.require('cordova/channel');

function OutSystemsEvent() {
    var eventTarget = document.createDocumentFragment();

    function delegate(method) {
        this[method] = eventTarget[method].bind(eventTarget);
    }

    ["addEventListener","dispatchEvent","removeEventListener"].forEach(delegate, this);
}

function OSCacheEvent() {
    OutSystemsEvent.call(this);
}

var OSCache = new OSCacheEvent();

module.exports = OSCache;

window.OSCache = OSCache;

/**
* Constants
**/

OSCache.UNCACHED = 0;
OSCache.IDLE = 1;
OSCache.CHECKING = 2;
OSCache.DOWNLOADING = 3;
OSCache.UPDATEREADY = 4;
OSCache.OBSOLETE = 5;

/**
* Utils
**/
function _getApplicationInfo(){
    var result = {};

    result.hostname = window.location.hostname;
    result.application = window.location.pathname.substr(1);

    var index = result.application.indexOf("/");
    if(index > 0){
        result.application = result.application.substr(0,index);
    }

    return result;
}

/**
* API definition
**/

OSCache.status = 0;

OSCache.startCaching = function(versionToken, urlVersions, urlMappings, urlMapsNoCache, options){

    if(!versionToken || versionToken.length == 0){
        OutSystemsNative.Logger.logError("Failed to start caching: Invalid cache version!", "OSCache");
        throw new Error('Failed to start caching: Invalid cache version!');
    }

    if(typeof urlVersions !== "object"){
        OutSystemsNative.Logger.logError("Failed to start caching: Invalid url versions!", "OSCache");
        throw new Error('Failed to start caching: Invalid url versions!');
    }

    if(typeof urlMappings !== "object"){
        OutSystemsNative.Logger.logError("Failed to start caching: Invalid url mappings!", "OSCache");
        throw new Error('Failed to start caching: Invalid url mappings!');
    }

    var appInfo = _getApplicationInfo();

    exec(null,
        null,
        'OSCache',
        'startCaching',
        [appInfo.hostname, appInfo.application, versionToken, urlVersions, urlMappings,urlMapsNoCache, options]
    );
};

OSCache.switchToVersion = function(versionToken){

    if(!versionToken || versionToken.length == 0){
        OutSystemsNative.Logger.logError("Failed to switch cache version: Invalid cache version!", "OSCache");
        throw new Error('Failed to switch cache version: Invalid cache version!');
    }

    var appInfo = _getApplicationInfo();

    exec(null,
        null,
        'OSCache',
        'switchToVersion',
        [appInfo.hostname, appInfo.application, versionToken]
    );
};


/**
*
* Events:
* - onprogress
* - onfinish
* - onerror
*
**/

cordova.callbacks["OSCacheStaticChannel"] = {
    success: function(data) {
        if(data === "undefined"){
            return;
        }

        if(data.Task !== "undefined"){
            switch(data.Task){
                case "UpdateStatus":
                    if(data.Content !== "undefined"){
                    OSCache.status = data.Content.Status;
                    }
                    break;
                case "Exception":
                    if(data.Content !== "undefined"){
                        var error = data.Content.Error;
                        OutSystemsNative.Logger.logError(error, "OSCache");
                        throw Error(error);
                    }
                    else{
                        OutSystemsNative.Logger.logError("An unexpected error occurred in the OSCacheStaticChannel", "OSCache");
                        throw Error("An unexpected error occurred in the OSCacheStaticChannel");
                    }
                    break;
                case "FireEvent":
                    var event = undefined;

                    if(data.Content && data.Content.Event){

                        switch(data.Content.Event){
                            case "onprogress":
                                var progress = data.Content.Progress;
                                if(progress){
                                    event = new ProgressEvent(data.Content.Event,{'loaded':progress.Loaded,'total':progress.Total});
                                }
                                break;

                            case "onerror":
                                var error = data.Content.Error;
                                if(error){
                                    event = new ErrorEvent(data.Content.Event,{'message':error.Message});
                                }
                                break;

                            case "onfinish":
                                event = new Event(data.Content.Event);
                                break;

                        }


                        if(event){
                            OSCache.dispatchEvent(event);
                        }
                        else{
                            OutSystemsNative.Logger.logError("Failed to fire event: "+data.Content.Event, "OSCache");
                            throw Error("Failed to fire event: "+data.Content.Event);
                        }                       

                    }

                    break;
            }
        }
    },
    fail: function() {       
    }
};


// Called after 'deviceready' event
channel.deviceready.subscribe(function () {
    // Device is ready now, the listeners are registered
    // and all queued events can be executed.
    var appInfo = _getApplicationInfo();

    exec(null,
        null,
        'OSCache',
        'deviceready',
        [appInfo.hostname, appInfo.application]
        );

});
});
