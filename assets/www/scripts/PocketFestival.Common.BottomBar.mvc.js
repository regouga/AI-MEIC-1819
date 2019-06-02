define("PocketFestival.Common.BottomBar.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model"], function (OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ActiveItem", "activeItemIn", "ActiveItem", true, false, OS.Types.Integer, function () {
return -1;
}), 
this.attr("_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("ActiveItem" in inputs) {
this.variables.activeItemIn = inputs.ActiveItem;
if("_activeItemInDataFetchStatus" in inputs) {
this.variables._activeItemInDataFetchStatus = inputs._activeItemInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.Common.BottomBar.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.Common.BottomBar.mvc$model", "PocketFestival.Common.BottomBar.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_Common_BottomBar_mvc_model, PocketFestival_Common_BottomBar_mvc_controller, OSWidgets) {
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
        View.displayName = "Common.BottomBar";
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
                return PocketFestival_Common_BottomBar_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_Common_BottomBar_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar-wrapper",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar ph",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("PocketFestival.Common.BottomBar.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.Common.BottomBar.mvc$controller.OnReady.AddActiveJS", "PocketFestival.Common.BottomBar.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_Common_BottomBar_mvc_controller_OnReady_AddActiveJS, PocketFestival_Common_BottomBar_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:hcmDvX9rMEivW7nC+dRQZg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A/ClientActions.hcmDvX9rMEivW7nC+dRQZg:drG3eZu_C+RtBrEa0lWWrA", "PocketFestival", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:pv9S9iYb6EmpKH1mPLQCJQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:OrSKTDbcYU6CkP1gnygyFw", callContext.id);
controller.safeExecuteJSNode(PocketFestival_Common_BottomBar_mvc_controller_OnReady_AddActiveJS, "AddActive", "OnReady", {
Active: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeItemIn, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:bJ3mOy806UmCxhFWu+oqVQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:hcmDvX9rMEivW7nC+dRQZg", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:oKkyEUBrmxiTW1blzDc3iw", "PocketFestival", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:dSzNMjNIS0mNfvatsj3j0A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A:u9CZF1sIKUJiMVjTWpmpYg", "PocketFestival", "BottomBar", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:dSzNMjNIS0mNfvatsj3j0A", callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/BottomBar On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return PocketFestivalController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, PocketFestivalLanguageResources);
});
define("PocketFestival.Common.BottomBar.mvc$controller.OnReady.AddActiveJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(document.querySelector('.bottom-bar')) {
    if(document.querySelector('.bottom-bar').children[$parameters.Active]) {
        document.querySelector('.bottom-bar').children[$parameters.Active].classList.add("active");
    }
}
};
});

define("PocketFestival.Common.BottomBar.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"OrSKTDbcYU6CkP1gnygyFw": {
getter: function (varBag, idService) {
return varBag.addActiveJSResult.value;
}
},
"lLKWeUj6uUqBTToFg1P84w": {
getter: function (varBag, idService) {
return varBag.model.variables.activeItemIn;
},
dataType: OS.Types.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
