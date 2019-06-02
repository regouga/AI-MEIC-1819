define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsOnline", "isOnlineVar", "IsOnline", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("OfflineActionReference", "offlineActionReferenceVar", "OfflineActionReference", true, false, OS.Types.Object, function () {
return null;
}), 
this.attr("OnlineActionReference", "onlineActionReferenceVar", "OnlineActionReference", true, false, OS.Types.Object, function () {
return null;
}), 
this.attr("DeviceReadyActionReference", "deviceReadyActionReferenceVar", "DeviceReadyActionReference", true, false, OS.Types.Object, function () {
return null;
})
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$model", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_model, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Private.NetworkStatusChanged";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var _this = this;

            return React.DOM.div(this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS", "OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$debugger", "OutSystemsUIMobile.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_OnReady_InitJS, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetEventListenersJS, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetActionReferencesJS, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_OnDestroy_RemoveEventHandlersJS, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_Init_SaveDeviceReadyCallbackJS, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_Init_RegisterPluginInfoJS, OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
init$Action: function () {
return controller.executeActionInsideJSNode(controller._init$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
offline$Action: function () {
return controller.executeActionInsideJSNode(controller._offline$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
online$Action: function () {
return controller.executeActionInsideJSNode(controller._online$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
deviceReady$Action: function () {
return controller.executeActionInsideJSNode(controller._deviceReady$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._offline$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Offline");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:E8PUVfEeKkCyycJbdrqYmw:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.E8PUVfEeKkCyycJbdrqYmw:u37vpPyV1HI1sqkqCluBJw", "OutSystemsUIMobile", "Offline", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WWaNxdsW2UmkKPfUm67uEw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:a8vJUGVUxU22c_WeSG3zEg", callContext.id) && model.variables.isOnlineVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kUD84LeH_Uy7yRvK3oeNmw", callContext.id);
// IsOnline = False
model.variables.isOnlineVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gMtLljXlUkmYXQUxMvdu2w", callContext.id);
// Trigger Event: NetworkStatusChangedToOffline
return controller.networkStatusChanged$Action(model.variables.isOnlineVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NX5KnAoQyU2OzU7NCPL9rQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XwMhYhWOs06ezG8aJIMKMg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:E8PUVfEeKkCyycJbdrqYmw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:E8PUVfEeKkCyycJbdrqYmw", callContext.id);
throw ex;

});
};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Z7mWgCSojEW7JzfUD15DfQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.Z7mWgCSojEW7JzfUD15DfQ:SkPgC4z24CViFRIvFRKDVw", "OutSystemsUIMobile", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gyWF6ontsUqYAjMzMpe12w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Otk89tv4YUCp0Bm1oCgZwA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_OnReady_InitJS, "Init", "OnReady", null, function ($parameters) {
}, {
Init: controller.clientActionProxies.init$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0dJC0mn66E+ejZES6YZB1w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Z7mWgCSojEW7JzfUD15DfQ", callContext.id);
}

};
Controller.prototype._online$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Online");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:NTl_t4scaEicLZhtECbVbQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.NTl_t4scaEicLZhtECbVbQ:gxSNObBKYjpeGunPtToptQ", "OutSystemsUIMobile", "Online", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LzRx3y9pjES12MMWC4tmhQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pYqhM3deHkSREvqlXE0FWQ", callContext.id) && model.variables.isOnlineVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c6bCZQaKHk+m8j2MdfCipA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mZw+QNY3pESFHCFdOPDG2g", callContext.id);
// IsOnline = True
model.variables.isOnlineVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gOgbNozBlUaa+GOa4WhsIg", callContext.id);
// Trigger Event: NetworkStatusChangedToOnline
return controller.networkStatusChanged$Action(model.variables.isOnlineVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NAfxyKoMx0ixaVkz_l1qjQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NTl_t4scaEicLZhtECbVbQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NTl_t4scaEicLZhtECbVbQ", callContext.id);
throw ex;

});
};
Controller.prototype._deviceReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DeviceReady");
callContext = controller.callContext(callContext);
var setActionReferencesJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setActionReferencesJSResult = setActionReferencesJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:bwrKwGtuH02DwwjxMPwKJg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.bwrKwGtuH02DwwjxMPwKJg:cFN0wHcismtxGOvkX7QRdQ", "OutSystemsUIMobile", "DeviceReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JbHVEG3b0ke1A+fMX5keVw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c3aq7AK8eUi33dOftqUdRA", callContext.id);
setActionReferencesJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetActionReferencesJS, "SetActionReferences", "DeviceReady", {
OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object),
OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.NetworkStatusChanged.DeviceReady$setActionReferencesJSResult"))();
jsNodeResult.offlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OfflineActionReference, OS.Types.Object);
jsNodeResult.onlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnlineActionReference, OS.Types.Object);
return jsNodeResult;
}, {
Offline: controller.clientActionProxies.offline$Action,
Online: controller.clientActionProxies.online$Action
}, {});
// SaveReferences
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wEu1V2GEHEG10FpqGNhqwQ", callContext.id);
// OfflineActionReference = SetActionReferences.OfflineActionReference
model.variables.offlineActionReferenceVar = setActionReferencesJSResult.value.offlineActionReferenceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wEu1V2GEHEG10FpqGNhqwQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// OnlineActionReference = SetActionReferences.OnlineActionReference
model.variables.onlineActionReferenceVar = setActionReferencesJSResult.value.onlineActionReferenceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G_euS9ToHEys0VV6hvoSmw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetEventListenersJS, "SetEventListeners", "DeviceReady", {
OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.Types.Object),
OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:o1EK4r+6CEiznS54vEGByQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:bwrKwGtuH02DwwjxMPwKJg", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.NetworkStatusChanged.DeviceReady$setActionReferencesJSResult", [{
name: "OfflineActionReference",
attrName: "offlineActionReferenceOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnlineActionReference",
attrName: "onlineActionReferenceOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3vle0MFFw0a6IYp6fLC0gQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.3vle0MFFw0a6IYp6fLC0gQ:CNl4oQiUHXsnPwe5Z9z0FA", "OutSystemsUIMobile", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_5sAfARb8UayxCurVMwnLA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jCj5bLwD1EaeYpfWEQUgMA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_OnDestroy_RemoveEventHandlersJS, "RemoveEventHandlers", "OnDestroy", {
offlineHandlerObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.Types.Object),
onlineHandlerObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.Types.Object),
deviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.deviceReadyActionReferenceVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:69k4OgWOFEix4f+bwbR_Sg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3vle0MFFw0a6IYp6fLC0gQ", callContext.id);
}

};
Controller.prototype._init$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Init");
callContext = controller.callContext(callContext);
var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
var saveDeviceReadyCallbackJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getNetworkStatusVar = getNetworkStatusVar;
varBag.saveDeviceReadyCallbackJSResult = saveDeviceReadyCallbackJSResult;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:P5qQ6Te1F0qfPRd1kjEZxQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.P5qQ6Te1F0qfPRd1kjEZxQ:Sjm3f9vA+1Ol+lZiy4PQIg", "OutSystemsUIMobile", "Init", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QvWreYpw4U6WLFNq6+ZVGg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fs1VpSF4qUaw6xzo_iS4VA", callContext.id);
// Execute Action: GetNetworkStatus
getNetworkStatusVar.value = OutSystemsUIMobileController.default.getNetworkStatus$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Odna7IGVRk6Y4qrW2yjkPQ", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kG8BQr7ek0GhvqUDLRsaDg", callContext.id);
// Execute Action: Online
return controller._online$Action(callContext);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4aObpbqDZ0+qXPux7GwnvQ", callContext.id);
// Execute Action: Offline
return controller._offline$Action(callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Eng+R8dYV0KZnesmImNJHQ", callContext.id);
saveDeviceReadyCallbackJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_Init_SaveDeviceReadyCallbackJS, "SaveDeviceReadyCallback", "Init", {
DeviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.NetworkStatusChanged.Init$saveDeviceReadyCallbackJSResult"))();
jsNodeResult.deviceReadyActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DeviceReadyActionReference, OS.Types.Object);
return jsNodeResult;
}, {
DeviceReady: controller.clientActionProxies.deviceReady$Action
}, {});
// SaveReference
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BHW20kLX0EeGy_V5Liu1gw", callContext.id);
// DeviceReadyActionReference = SaveDeviceReadyCallback.DeviceReadyActionReference
model.variables.deviceReadyActionReferenceVar = saveDeviceReadyCallbackJSResult.value.deviceReadyActionReferenceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PRrlaa3iX0mXex9u3_1KXw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_NetworkStatusChanged_mvc_controller_Init_RegisterPluginInfoJS, "RegisterPluginInfo", "Init", {
DeviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.deviceReadyActionReferenceVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:t7qKvYl+X0SRF98j07ZKJQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:P5qQ6Te1F0qfPRd1kjEZxQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:P5qQ6Te1F0qfPRd1kjEZxQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.NetworkStatusChanged.Init$saveDeviceReadyCallbackJSResult", [{
name: "DeviceReadyActionReference",
attrName: "deviceReadyActionReferenceOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.offline$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._offline$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.online$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._online$Action, callContext);

};
Controller.prototype.deviceReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._deviceReady$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.init$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._init$Action, callContext);

};
Controller.prototype.networkStatusChanged$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:KNabe2jYx8zVoKDWt9xjrw", "OutSystemsUIMobile", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Srj+0YkVBEGR1FPbya3RiQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ:VJqWCK_Mx40gTPAzQDzB8w", "OutSystemsUIMobile", "NetworkStatusChanged", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Srj+0YkVBEGR1FPbya3RiQ", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/NetworkStatusChanged On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/NetworkStatusChanged On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return OutSystemsUIMobileController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUIMobileLanguageResources);
});
define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS", [], function () {
return function ($actions, $roles, $public) {
$actions.Init();
};
});
define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.addEventListener("offline", $parameters.OfflineActionReference, false);
document.addEventListener("online", $parameters.OnlineActionReference, false);
};
});
define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OfflineActionReference = $actions.Offline;
$parameters.OnlineActionReference = $actions.Online;
};
});
define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.removeEventListener("offline", $parameters.offlineHandlerObj );
document.removeEventListener("online", $parameters.onlineHandlerObj );
document.removeEventListener("deviceready", $parameters.deviceReadyActionReference);
};
});
define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.DeviceReadyActionReference = function(){$actions.DeviceReady();};

};
});
define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.addEventListener("deviceready", $parameters.DeviceReadyActionReference, false);
};
});

define("OutSystemsUIMobile.Private.NetworkStatusChanged.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Otk89tv4YUCp0Bm1oCgZwA": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"G_euS9ToHEys0VV6hvoSmw": {
getter: function (varBag, idService) {
return varBag.setEventListenersJSResult.value;
}
},
"c3aq7AK8eUi33dOftqUdRA": {
getter: function (varBag, idService) {
return varBag.setActionReferencesJSResult.value;
}
},
"jCj5bLwD1EaeYpfWEQUgMA": {
getter: function (varBag, idService) {
return varBag.removeEventHandlersJSResult.value;
}
},
"fs1VpSF4qUaw6xzo_iS4VA": {
getter: function (varBag, idService) {
return varBag.getNetworkStatusVar.value;
}
},
"Eng+R8dYV0KZnesmImNJHQ": {
getter: function (varBag, idService) {
return varBag.saveDeviceReadyCallbackJSResult.value;
}
},
"PRrlaa3iX0mXex9u3_1KXw": {
getter: function (varBag, idService) {
return varBag.registerPluginInfoJSResult.value;
}
},
"6Fz8hNp33EGM7mrymXS3WA": {
getter: function (varBag, idService) {
return varBag.model.variables.isOnlineVar;
},
dataType: OS.Types.Boolean
},
"Lkbs3_xRiEqIN145tiFLaw": {
getter: function (varBag, idService) {
return varBag.model.variables.offlineActionReferenceVar;
},
dataType: OS.Types.Object
},
"WJwkG38260mcuNQVgpCwPA": {
getter: function (varBag, idService) {
return varBag.model.variables.onlineActionReferenceVar;
},
dataType: OS.Types.Object
},
"Fx2l6fSrakKgXqigIA25Yw": {
getter: function (varBag, idService) {
return varBag.model.variables.deviceReadyActionReferenceVar;
},
dataType: OS.Types.Object
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
