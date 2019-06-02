define("PocketFestival.controller$OfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.controller$ServerAction.ServerDataSync"], function (exports, OutSystems, PocketFestivalModel, PocketFestivalController) {
var OS = OutSystems.Internal;
PocketFestivalController.default.offlineDataSync$Action = function (syncUnitIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.OfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:LpmGhy9cE0mCR0BZzhJoJA:/ClientActionFlows.LpmGhy9cE0mCR0BZzhJoJA:9fW7JZ_EcTcjt12Bg_nsGA", "PocketFestival", "OfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:r3w04DYy+UO88Hnbcauheg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:NSg3uwX2z0KDzIngfCcKnw", callContext.id);
// Execute Action: ServerDataSync
return controller.serverDataSync$ServerAction(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:CutXTLFsZE632Xm9fh21Kg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:LpmGhy9cE0mCR0BZzhJoJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:LpmGhy9cE0mCR0BZzhJoJA", callContext.id);
throw ex;

});
};
var controller = PocketFestivalController.default;
PocketFestivalController.default.constructor.registerVariableGroupType("PocketFestival.OfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
PocketFestivalController.default.clientActionProxies.offlineDataSync$Action = function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(PocketFestivalController.default.offlineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("PocketFestival.controller$OfflineDataSyncConfiguration", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller"], function (exports, OutSystems, PocketFestivalModel, PocketFestivalController) {
var OS = OutSystems.Internal;
PocketFestivalController.default.offlineDataSyncConfiguration$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.OfflineDataSyncConfiguration$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:X7IJk9rbwEG8Cc2qzpBYAA:/ClientActionFlows.X7IJk9rbwEG8Cc2qzpBYAA:caWfCxDC_+ez9PImlgRZBg", "PocketFestival", "OfflineDataSyncConfiguration", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:4uf+P18taEuIWJBnuSJ1Gw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:i_wEoadk3kWP4Wc1gPBpjA", callContext.id);
// SyncOnOnline = False
outVars.value.syncOnOnlineOut = false;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:8FTfXO_sYEiA3QGV5j9Caw", callContext.id);
// SyncOnLogin = False
outVars.value.syncOnLoginOut = false;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Et6hhpxEZEq61+V1aOfXNg", callContext.id);
// SyncOnResume = False
outVars.value.syncOnResumeOut = false;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:XUGCZiBFuEmTNw_FElJlcw", callContext.id);
// RetryOnError = False
outVars.value.retryOnErrorOut = false;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:QziPTs5cUUOu7YJ52192jA", callContext.id);
// RetryIntervalInSeconds = 30
outVars.value.retryIntervalInSecondsOut = 30;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:9P4z+cemjUqImNOz1PrWig", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:X7IJk9rbwEG8Cc2qzpBYAA", callContext.id);
}

};
var controller = PocketFestivalController.default;
PocketFestivalController.default.constructor.registerVariableGroupType("PocketFestival.OfflineDataSyncConfiguration$outVars", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnLogin",
attrName: "syncOnLoginOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnResume",
attrName: "syncOnResumeOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryOnError",
attrName: "retryOnErrorOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryIntervalInSeconds",
attrName: "retryIntervalInSecondsOut",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
PocketFestivalController.default.clientActionProxies.offlineDataSyncConfiguration$Action = function () {
return controller.executeActionInsideJSNode(PocketFestivalController.default.offlineDataSyncConfiguration$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnOnlineOut, OS.Types.Boolean),
SyncOnLogin: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnLoginOut, OS.Types.Boolean),
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnResumeOut, OS.Types.Boolean),
RetryOnError: OS.DataConversion.JSNodeParamConverter.to(actionResults.retryOnErrorOut, OS.Types.Boolean),
RetryIntervalInSeconds: OS.DataConversion.JSNodeParamConverter.to(actionResults.retryIntervalInSecondsOut, OS.Types.Integer)
};
});
};
});

define("PocketFestival.controller$TriggerOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$StartOfflineDataSync", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController) {
var OS = OutSystems.Internal;
PocketFestivalController.default.triggerOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.TriggerOfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.discardPendingSyncUnitsInLocal = discardPendingSyncUnitsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:ewY24h0Rok2TVMPjaBRz4g:/ClientActionFlows.ewY24h0Rok2TVMPjaBRz4g:yVL8Ui4NEag39G++wvv5gQ", "PocketFestival", "TriggerOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:nwD+mAhpF0C5lbeoGhWn7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:9zjg8WmArkmExeOIJ+8uyQ", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUIMobileController.default.startOfflineDataSync$Action(vars.value.syncUnitInLocal, vars.value.discardPendingSyncUnitsInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:f3NRrVvFPkO4qaGalBP3Vw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:ewY24h0Rok2TVMPjaBRz4g", callContext.id);
}

};
var controller = PocketFestivalController.default;
PocketFestivalController.default.constructor.registerVariableGroupType("PocketFestival.TriggerOfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "DiscardPendingSyncUnits",
attrName: "discardPendingSyncUnitsInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
PocketFestivalController.default.clientActionProxies.triggerOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
discardPendingSyncUnitsIn = (discardPendingSyncUnitsIn === undefined) ? false : discardPendingSyncUnitsIn;
return controller.executeActionInsideJSNode(PocketFestivalController.default.triggerOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(discardPendingSyncUnitsIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("PocketFestival.controller$ServerAction.ServerDataSync", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller"], function (exports, OutSystems, PocketFestivalModel, PocketFestivalController) {
var OS = OutSystems.Internal;
PocketFestivalController.default.serverDataSync$ServerAction = function (syncUnitIn, callContext) {
var controller = this.controller;
var inputs = {
SyncUnit: OS.DataConversion.ServerDataConverter.to(syncUnitIn, OS.Types.Text)
};
return controller.callServerAction("ServerDataSync", "screenservices/PocketFestival/ActionServerDataSync", "xuSMtfzaA7RStqZZdu0hGw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}).then(function (outputs) {
});
};
});
define("PocketFestival.controller", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller$debugger"], function (exports, OutSystems, PocketFestivalModel, PocketFestival_Controller_debugger) {
var OS = OutSystems.Internal;
var PocketFestivalController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return PocketFestivalController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
PocketFestivalController.default = new Controller();
});
define("PocketFestival.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"ohKLgVfudEO9WIjbR4IDJg": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"ISb8Rf1h5kui7U4VaeJ4Qg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnOnlineOut;
},
dataType: OS.Types.Boolean
},
"xCO9GsKcHEShU+X2TOlOFg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnLoginOut;
},
dataType: OS.Types.Boolean
},
"5Qpcg_GuwE6Ynei0vKslOg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnResumeOut;
},
dataType: OS.Types.Boolean
},
"5IHHC5Ck6EWlngzbULlcXg": {
getter: function (varBag, idService) {
return varBag.outVars.value.retryOnErrorOut;
},
dataType: OS.Types.Boolean
},
"n6dhnmBl802fr13DcvtUlw": {
getter: function (varBag, idService) {
return varBag.outVars.value.retryIntervalInSecondsOut;
},
dataType: OS.Types.Integer
},
"a90n2WJUTU6syYn3y31SVA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"Aqrrh8UMfUa806dMfGJNCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.discardPendingSyncUnitsInLocal;
},
dataType: OS.Types.Boolean
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
