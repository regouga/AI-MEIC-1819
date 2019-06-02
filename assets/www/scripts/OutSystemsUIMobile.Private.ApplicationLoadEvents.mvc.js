define("OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MinimumDisplayTimeMs", "minimumDisplayTimeMsIn", "MinimumDisplayTimeMs", true, false, OS.Types.Integer, function () {
return 1000;
}), 
this.attr("_minimumDisplayTimeMsInDataFetchStatus", "_minimumDisplayTimeMsInDataFetchStatus", "_minimumDisplayTimeMsInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
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
if("MinimumDisplayTimeMs" in inputs) {
this.variables.minimumDisplayTimeMsIn = inputs.MinimumDisplayTimeMs;
if("_minimumDisplayTimeMsInDataFetchStatus" in inputs) {
this.variables._minimumDisplayTimeMsInDataFetchStatus = inputs._minimumDisplayTimeMsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$model", "OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$controller"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_model, OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_controller) {
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
        View.displayName = "Private.ApplicationLoadEvents";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$controller.OnInitialize.RegisterListenersJS", "OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_controller_OnInitialize_RegisterListenersJS, OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
triggerOnUpgradeProgress$Action: function (completedIn, totalIn) {
completedIn = (completedIn === undefined) ? 0 : completedIn;
totalIn = (totalIn === undefined) ? 0 : totalIn;
return controller.executeActionInsideJSNode(controller._triggerOnUpgradeProgress$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(completedIn, OS.Types.Integer), OS.DataConversion.JSNodeParamConverter.from(totalIn, OS.Types.Integer)), controller.callContext(), function (actionResults) {
return {};
});
},
triggerOnLoadComplete$Action: function (redirectURLIn) {
redirectURLIn = (redirectURLIn === undefined) ? "" : redirectURLIn;
return controller.executeActionInsideJSNode(controller._triggerOnLoadComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(redirectURLIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._triggerOnUpgradeProgress$Action = function (completedIn, totalIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnUpgradeProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.ApplicationLoadEvents.TriggerOnUpgradeProgress$vars"))());
vars.value.completedInLocal = completedIn;
vars.value.totalInLocal = totalIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:RqMqHwpiAke_+FcFSnn0fg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.RqMqHwpiAke_+FcFSnn0fg:BK_PAlXBJNHLli4ldMmYuA", "OutSystemsUIMobile", "TriggerOnUpgradeProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dqYgtPLrvUG_uinULDTEDQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7lJa2zMxqk6tDUHAhjtcIg", callContext.id);
// Trigger Event: OnUpgradeProgress
return controller.onUpgradeProgress$Action(vars.value.completedInLocal, vars.value.totalInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ECF6JbpUu0KfWmvsu2YhIQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RqMqHwpiAke_+FcFSnn0fg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RqMqHwpiAke_+FcFSnn0fg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.ApplicationLoadEvents.TriggerOnUpgradeProgress$vars", [{
name: "Completed",
attrName: "completedInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Total",
attrName: "totalInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._triggerOnLoadComplete$Action = function (redirectURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnLoadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.ApplicationLoadEvents.TriggerOnLoadComplete$vars"))());
vars.value.redirectURLInLocal = redirectURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+Skia0zMp0OdhlLXzyENOA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.+Skia0zMp0OdhlLXzyENOA:7hrFWyFLZKwtpN4vKDR2Tw", "OutSystemsUIMobile", "TriggerOnLoadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lVdLXzveHEi6fq0v1_kRfQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zaCq6hHgA0+zTve2EVUlDA", callContext.id);
// Trigger Event: OnLoadComplete
return controller.onLoadComplete$Action(vars.value.redirectURLInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YSNMvtmZkU2xMT_Kcj+jSg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+Skia0zMp0OdhlLXzyENOA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+Skia0zMp0OdhlLXzyENOA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.ApplicationLoadEvents.TriggerOnLoadComplete$vars", [{
name: "RedirectURL",
attrName: "redirectURLInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:F8tpsFSD_UKGnUVr9ud4bA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.F8tpsFSD_UKGnUVr9ud4bA:3lDWfJoDgmCqG1TkQWM_aw", "OutSystemsUIMobile", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dTId22GxXkqJF26JapieWw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iW7rR+64JU29M2auV6jnZQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_controller_OnInitialize_RegisterListenersJS, "RegisterListeners", "OnInitialize", {
MinDisplayTimeMs: OS.DataConversion.JSNodeParamConverter.to(model.variables.minimumDisplayTimeMsIn, OS.Types.Integer)
}, function ($parameters) {
}, {
TriggerOnUpgradeProgress: controller.clientActionProxies.triggerOnUpgradeProgress$Action,
TriggerOnLoadComplete: controller.clientActionProxies.triggerOnLoadComplete$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QPSDH0Y5rkaQvGw8vhmeAw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:F8tpsFSD_UKGnUVr9ud4bA", callContext.id);
}

};

Controller.prototype.triggerOnUpgradeProgress$Action = function (completedIn, totalIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnUpgradeProgress$Action, callContext, completedIn, totalIn);

};
Controller.prototype.triggerOnLoadComplete$Action = function (redirectURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnLoadComplete$Action, callContext, redirectURLIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onUpgradeProgress$Action = function () {
return Promise.resolve();
};
Controller.prototype.onLoadComplete$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:KNabe2jYx8zVoKDWt9xjrw", "OutSystemsUIMobile", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:jkMO6fNONk68dfPLs8KxXg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg:Dy+I5sLbDhBizM2v0jmU8A", "OutSystemsUIMobile", "ApplicationLoadEvents", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:jkMO6fNONk68dfPLs8KxXg", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/ApplicationLoadEvents On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
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
define("OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$controller.OnInitialize.RegisterListenersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
    var start = new Date();
    // Check if the app is currently being upgraded
    var isUpgrading = $public.ApplicationLifecycle.isUpgradingVersion();
    
    var progressCallback = function(loaded, total) { 
        $actions.TriggerOnUpgradeProgress(loaded, total); 
    };
    
    var finishCallback = function() {
        var elapsedMs = new Date() - start;
        var timeout = Math.max($parameters.MinDisplayTimeMs - elapsedMs, 0);
        setTimeout(function() {
            $actions.TriggerOnLoadComplete(window.location.href);    
        }, timeout);
    };
    
    // When there is no upgrade, we need to mimic the progress using the MinDisplayTimeMs
    if (!isUpgrading) {
        var loaded = 0;
        var interval = Math.ceil($parameters.MinDisplayTimeMs / 10);
        var timerId = setInterval(function() {
            progressCallback(++loaded, 10);
            if (loaded === 10) {
                clearInterval(timerId);
            }
        }, interval);
    }
    $public.ApplicationLifecycle.listen({
        // When there is no upgrade, we'll provide the feedback
        onUpgradeProgress: isUpgrading ? progressCallback : null,
        onLoadComplete: finishCallback
    });
};
});

define("OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"y_QGn_nTNkKk5ifahW1jPA": {
getter: function (varBag, idService) {
return varBag.vars.value.completedInLocal;
},
dataType: OS.Types.Integer
},
"vBDB5qcszk+1Sp+OHgtCiw": {
getter: function (varBag, idService) {
return varBag.vars.value.totalInLocal;
},
dataType: OS.Types.Integer
},
"I+VKpnJej0iaD6F8iscSXA": {
getter: function (varBag, idService) {
return varBag.vars.value.redirectURLInLocal;
},
dataType: OS.Types.Text
},
"iW7rR+64JU29M2auV6jnZQ": {
getter: function (varBag, idService) {
return varBag.registerListenersJSResult.value;
}
},
"024sl3u8qUejQwcB4vBCtQ": {
getter: function (varBag, idService) {
return varBag.model.variables.minimumDisplayTimeMsIn;
},
dataType: OS.Types.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
