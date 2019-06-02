cordova.define("com.outsystems.plugins.deeplinks.OSDeepLinks", function(require, exports, module) {

var exec = cordova.require('cordova/exec');
var channel = cordova.require('cordova/channel');

cordova.callbacks["OSDeepLinksStaticChannel"] = {
    success: function(data) {
        if(data === "undefined"){
            return;
        }

        if(data.URL !== "undefined"){

            document.addEventListener('deviceready',function(){
                if (typeof handleOpenURL === 'function') {
                    handleOpenURL(data.URL);
                }
            });

        }
    },
    fail: function() {
        OutSystemsNative.Logger.logError("Failed to register OSDeepLinks static channel", "OSDeepLinks");
        throw new Error("Failed to register OSDeepLinks static channel");
    }
};

// Called after 'deviceready' event
channel.deviceready.subscribe(function () {
    // Device is ready now, the listeners are registered
    // and all queued events can be executed.
    exec(null, null, 'OSDeepLinks', 'deviceready', []);
});
});
