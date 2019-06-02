package com.outsystems.plugins.crashhandler;

import com.outsystems.plugins.crashhandler.engines.OSCrashHandler;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import org.apache.cordova.CordovaPlugin;

public class OSCrashHandlerPlugin extends CordovaPlugin {
    public static final String CORDOVA_SERVICE_NAME = "OSCrashHandler";
    private Logger logger = OSLogger.getInstance();

    protected void pluginInitialize() {
        this.logger.logVerbose("pluginInitialize: started", CORDOVA_SERVICE_NAME);
        new OSCrashHandler().deploy();
        this.logger.logVerbose("pluginInitialize: finished", CORDOVA_SERVICE_NAME);
    }
}
