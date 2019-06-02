(function() {

    var config = {
        syncOnOnline: false,
        syncOnResume: false,
        retryOnError: false,
        retryInterval: 30 // in seconds
    };

    var isSyncing = false;
    var token;
    var syncQueue = [];
    var syncQueueChanged = false;
    var retryId;
    
    var syncWrapper;
    var onResume;    
    var triggerSyncStart;
    var triggerSyncComplete;
    var triggerSyncError;    
    
    function finishSync(hasError, message, allowRetry) {
        if (hasError) {
            if (triggerSyncError) {
                triggerSyncError(syncQueue[0], message);
            }
            if (allowRetry && config.retryOnError && config.retryInterval > 0) {
                retryId = setTimeout(function () {
                    retryId = null;
                    OfflineDataSync.sync(syncQueue[0]);
                }, config.retryInterval * 1000);
            }
        } else {
            if (triggerSyncComplete) {
                triggerSyncComplete(syncQueue[0]);
            }
            syncQueue.shift();
        }
        isSyncing = false;
        if (!retryId) {
            if(!hasError && syncQueueChanged && syncQueue.length > 0) {
                OfflineDataSync.sync(syncQueue[0]);
            } else {
                syncQueueChanged = false;
            }
        }
    }
    
    document.addEventListener("resume", function() { 
        if (onResume) {
           onResume(); 
        }
    }, false);
    
    
    var OfflineDataSync = {
        registerAPI: function (syncWrapperAction, onResumeAction, triggerOnSyncStartAction, triggerOnSyncCompleteAction, triggerOnSyncErrorAction) {
            token = (new Date()).getTime().toString();        
            syncWrapper = syncWrapperAction;
            onResume = onResumeAction;        
            triggerSyncStart = triggerOnSyncStartAction;
            triggerSyncComplete = triggerOnSyncCompleteAction;
            triggerSyncError = triggerOnSyncErrorAction;
            return token;
        },    
        
        unregisterAPI : function (previousToken) {
            if (token === previousToken) {
                // we are unloading the block and no other has registered yet,
                // so lets unregister its callbacks
                syncWrapper = null;
                onResume = null;
                triggerSyncStart = null;
                triggerSyncComplete = null;
                triggerSyncError = null;
            }  
        },

        configure: function (syncOnOnline, syncOnResume, retryOnError, retryIntervalInSeconds) {
            config.syncOnOnline = syncOnOnline;
            config.syncOnResume = syncOnResume;
            config.retryOnError = retryOnError;
            config.retryInterval = retryIntervalInSeconds;
        },

        sync : function (syncUnit, discardPendingUnits) {
            var addToQueue = true;
            if (discardPendingUnits) {
                var oldQueue = syncQueue;
                syncQueue = [];
                if (isSyncing) {
                    syncQueue.push(oldQueue[0]);
                }
            } else {
                var i;
                for (i = 0; i < syncQueue.length; i++) {
                    if (syncQueue[i] === syncUnit && (!isSyncing || i !== 0)) {
                        addToQueue = false;
                    }
                }
            }
            
            if (addToQueue) {
                syncQueue.push(syncUnit);
                syncQueueChanged = true;
            }
            
            if (retryId) {
                // if a retry was waiting but an explicit sync was triggered
                // cancel the retry and execute the sync
                clearTimeout(retryId);
                retryId = null;
            }
            if (isSyncing) {
                // if a sync is executing, we do not execute a new one
                return;
            }
            isSyncing = true;
            syncWrapper(syncQueue[0]);
        },   
                
        suspendSync : function() {
            isSyncing = false;
            syncQueueChanged = false;
        },
    
        triggerSyncStartEvent : function() {
            if (triggerSyncStart) {
                triggerSyncStart(syncQueue[0]);
            }
        },
    
        triggerSyncCompleteEvent : function() {
            finishSync(/*hasError*/false);
        },
    
        triggerSyncErrorEvent : function(errorMessage, allowRetry) {
            if (arguments.length > 2) {
                // backwards compatibility with versions before P10 GA
                config.retryOnError = allowRetry;
                config.retryInterval = arguments[2];
            }
            finishSync(/*hasError*/true, errorMessage, allowRetry);
        },

        getSyncOnOnline: function () {
            return config.syncOnOnline;
        },

        getSyncOnResume: function () {
            return config.syncOnResume;
        }
        
    };

    if (!window.offlineDataSync) {
        window.offlineDataSync = OfflineDataSync;
    }    
})();
