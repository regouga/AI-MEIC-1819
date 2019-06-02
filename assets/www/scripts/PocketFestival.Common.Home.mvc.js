define("PocketFestival.Common.Home.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "OutSystemsUIMobile.controller", "PocketFestival.Common.Menu.mvc$model", "OutSystemsUIMobile.Private.PullToRefresh.mvc$model", "PocketFestival.Common.OfflineDataSyncEvents.mvc$model", "OutSystemsUIMobile.controller$MenuHide", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$LayoutReady"], function (OutSystems, PocketFestivalModel, OutSystemsUIMobileController, PocketFestival_Common_Menu_mvcModel, OutSystemsUIMobile_Private_PullToRefresh_mvcModel, PocketFestival_Common_OfflineDataSyncEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UsePullToRefresh", "usePullToRefreshIn", "UsePullToRefresh", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HideHeaderOnScroll", "hideHeaderOnScrollIn", "HideHeaderOnScroll", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = ((PocketFestival_Common_Menu_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Private_PullToRefresh_mvcModel.hasValidationWidgets) || PocketFestival_Common_OfflineDataSyncEvents_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("UsePullToRefresh" in inputs) {
this.variables.usePullToRefreshIn = inputs.UsePullToRefresh;
if("_usePullToRefreshInDataFetchStatus" in inputs) {
this.variables._usePullToRefreshInDataFetchStatus = inputs._usePullToRefreshInDataFetchStatus;
}

}

if("HideHeaderOnScroll" in inputs) {
this.variables.hideHeaderOnScrollIn = inputs.HideHeaderOnScroll;
if("_hideHeaderOnScrollInDataFetchStatus" in inputs) {
this.variables._hideHeaderOnScrollInDataFetchStatus = inputs._hideHeaderOnScrollInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.Common.Home.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.Common.Home.mvc$model", "PocketFestival.Common.Home.mvc$controller", "OutSystems/ReactWidgets/Main", "PocketFestival.Common.Menu.mvc$view", "OutSystemsUIMobile.Private.PullToRefresh.mvc$view", "PocketFestival.Common.OfflineDataSyncEvents.mvc$view", "OutSystemsUIMobile.controller$MenuHide", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$LayoutReady"], function (OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController, React, OSView, PocketFestival_Common_Home_mvc_model, PocketFestival_Common_Home_mvc_controller, OSWidgets, PocketFestival_Common_Menu_mvc_view, OutSystemsUIMobile_Private_PullToRefresh_mvc_view, PocketFestival_Common_OfflineDataSyncEvents_mvc_view) {
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
        View.displayName = "Common.Home";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUIMobile.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Menu_mvc_view, OutSystemsUIMobile_Private_PullToRefresh_mvc_view, PocketFestival_Common_OfflineDataSyncEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_Common_Home_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_Common_Home_mvc_controller;
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
style: "layout",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "menu",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Home/PageOverlay onclick");
controller.hideMenu$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "menu-background",
visible: true,
_idProps: {
service: idService,
name: "PageOverlay"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(PocketFestival_Common_Menu_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "3",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "screen",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("header.Style"), function () {
return ("header" + ((!(model.variables.hideHeaderOnScrollIn)) ? ("") : (" hide")));
}, function () {
return model.variables.hideHeaderOnScrollIn;
}),
visible: true,
_idProps: {
service: idService,
name: "header"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideHeaderOnScrollInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center; height: 50pt;"
},
style: "header-top",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width2"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 100%;"
},
gridProperties: {
classes: "ThemeGrid_Width11 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "text-allign: center; font-weight: 800;"
},
text: ["Pocket Festival"],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width2 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Home/Icon onclick");
controller.onClick2$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
style: "font-size: 30px; padding: 0px;"
},
icon: "plug",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "main-content",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.usePullToRefreshIn, true, this, function () {
return [React.createElement(OutSystemsUIMobile_Private_PullToRefresh_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onContentPull$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/PullToRefresh OnContentPull");
return controller.actionHandler_OnPullToRefreshTrigger$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "14",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "offline-data-sync",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(PocketFestival_Common_OfflineDataSyncEvents_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSyncError$Action: function (syncUnitIn, errorMessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncError");
return controller.actionHandler_OnSyncErrorTrigger$Action(syncUnitIn, errorMessageIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSyncStart$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncStart");
return controller.actionHandler_OnSyncStartTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSyncComplete$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncComplete");
return controller.actionHandler_OnSyncCompleteTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "16",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("PocketFestival.Common.Home.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "PocketFestival.languageResources", "PocketFestival.Common.Home.mvc$debugger", "OutSystemsUIMobile.controller$MenuHide", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$LayoutReady"], function (OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController, PocketFestivalLanguageResources, PocketFestival_Common_Home_mvc_Debugger) {
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
Controller.prototype._actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncCompleteTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Home.ActionHandler_OnSyncCompleteTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:4XucGGwIgUOQGcd1zRKbcw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA/ClientActions.4XucGGwIgUOQGcd1zRKbcw:oCszd_f1gNPQ7uXZ_fsxbg", "PocketFestival", "ActionHandler_OnSyncCompleteTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:5ulby3TMikKM_nClkZDl3A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Hhvo0qId0Eu8Ei3SwjLJCw", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:j51IeOfLAUm8wuHWTTKSQA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:4XucGGwIgUOQGcd1zRKbcw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:4XucGGwIgUOQGcd1zRKbcw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Home.ActionHandler_OnSyncCompleteTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._hideMenu$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HideMenu");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:sMTkIkkuCE+N2Y4DOuTgww:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA/ClientActions.sMTkIkkuCE+N2Y4DOuTgww:ANnWtJnbRCa+6JTz8oMr3w", "PocketFestival", "HideMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:1_6yJ2lbA0yyz6l6HgxAww", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:GVMhGon2nEWiWM_3hIgzGA", callContext.id);
// Execute Action: MenuHide
OutSystemsUIMobileController.default.menuHide$Action(callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:4S5Kq4ELr0KjJrmNe1C1EA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:sMTkIkkuCE+N2Y4DOuTgww", callContext.id);
}

};
Controller.prototype._onClick2$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick2");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:KjJTchGivkOs5wCux18sgw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA/ClientActions.KjJTchGivkOs5wCux18sgw:IoUTVY4byEkJ7jv+ncPV8g", "PocketFestival", "OnClick2", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:XpBHc3HPLUmVhf+hNWsCDQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:lLQX44cGmEOC5wVRY1ATEw", callContext.id);
// Destination: /PocketFestival/CheckBarecelet
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/CheckBarecelet", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:KjJTchGivkOs5wCux18sgw", callContext.id);
}

};
Controller.prototype._actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncStartTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Home.ActionHandler_OnSyncStartTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:FysBeSuJkkGHJpLeDLT5EA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA/ClientActions.FysBeSuJkkGHJpLeDLT5EA:mGssFVH2ZzgQJ5aM36KZTg", "PocketFestival", "ActionHandler_OnSyncStartTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:MdcUaMzKfUqpT_YundDthA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:y3qI6SOCnkebg2NwWt56WQ", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:kPbpNvyr4Uq1AHAq0Bw8Zg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:FysBeSuJkkGHJpLeDLT5EA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:FysBeSuJkkGHJpLeDLT5EA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Home.ActionHandler_OnSyncStartTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:D8u_h8t+_kOu9JvdupVi9Q:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA/ClientActions.D8u_h8t+_kOu9JvdupVi9Q:5KkeyaUqZW0VexIygeiShA", "PocketFestival", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:LOvVk9zW4UO0h9HtqTFkmw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:DI7N5hFDika8crVS7rjJ0g", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:D8u_h8t+_kOu9JvdupVi9Q", callContext.id);
}

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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:63pdqyhw+0GxuOXXQ87pcw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA/ClientActions.63pdqyhw+0GxuOXXQ87pcw:XUWf3ve7eOyU9I3+pOVetg", "PocketFestival", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:l6wTNnJA7EOhZIJoX5eAbQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:KfSQhLCMLk+xrOk2oXEHMw", callContext.id);
// Execute Action: LayoutReady
OutSystemsUIMobileController.default.layoutReady$Action(model.variables.hideHeaderOnScrollIn, callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:rBdyeduTw06YSsL0Gr8TDA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:63pdqyhw+0GxuOXXQ87pcw", callContext.id);
}

};
Controller.prototype._actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnPullToRefreshTrigger");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:YT+9zJA+ykes36xRfUxiwg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA/ClientActions.YT+9zJA+ykes36xRfUxiwg:iyXxco9eppWgBelHlQS7zw", "PocketFestival", "ActionHandler_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:CsfdhLj6wk28gIR0dOd8kg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:P3K8RSgFAUuNU3BuyV253Q", callContext.id);
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:2B4Z_1FiokOWiQFOZvd3JQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:YT+9zJA+ykes36xRfUxiwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:YT+9zJA+ykes36xRfUxiwg", callContext.id);
throw ex;

});
};
Controller.prototype._actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncErrorTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Home.ActionHandler_OnSyncErrorTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0hkS4IEju0WbLWGF8sghLw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA/ClientActions.0hkS4IEju0WbLWGF8sghLw:Lb+seiNBo0Lcg_iqapio2w", "PocketFestival", "ActionHandler_OnSyncErrorTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:E7An2dSQbEuBlJGaGsY7Wg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:aMtPov76xEiyiKT7kA2BzQ", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:AEA3qHJcpUGO6SEdbfRGvQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:0hkS4IEju0WbLWGF8sghLw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:0hkS4IEju0WbLWGF8sghLw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Home.ActionHandler_OnSyncErrorTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncCompleteTrigger$Action, callContext, syncUnitIn);

};
Controller.prototype.hideMenu$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._hideMenu$Action, callContext);

};
Controller.prototype.onClick2$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick2$Action, callContext);

};
Controller.prototype.actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncStartTrigger$Action, callContext, syncUnitIn);

};
Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnPullToRefreshTrigger$Action, callContext);

};
Controller.prototype.actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncErrorTrigger$Action, callContext, syncUnitIn, errorMessageIn);

};
Controller.prototype.onPullToRefresh$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncStart$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncComplete$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:CzI5OTcBF4mbePhBwCS7kQ", "PocketFestival", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:o0B84a+F6k+uDv_WfT1iGA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.o0B84a+F6k+uDv_WfT1iGA:Ams75SNGbvtwM19fwJsQcA", "PocketFestival", "Home", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:o0B84a+F6k+uDv_WfT1iGA", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Home On Ready");
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

define("PocketFestival.Common.Home.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"tGwrpA13k0awfsY93l5K8A": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"aAIdRDtkREWrh31h7zBNzw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"5ocmR0Jy6UiRJPEucbaGJw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"a_vy_B+RjUGSUraoNPkTFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"YKY1k1QixES6lzmzSXgFhA": {
getter: function (varBag, idService) {
return varBag.model.variables.usePullToRefreshIn;
},
dataType: OS.Types.Boolean
},
"eJ5cu2phn0e7goIqbe6xKg": {
getter: function (varBag, idService) {
return varBag.model.variables.hideHeaderOnScrollIn;
},
dataType: OS.Types.Boolean
},
"3czd9epS0024tGsIIgDFRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PageOverlay"));
})(varBag.model, idService);
}
},
"n8HP+Ysg+UCmrvPS9mTvCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("header"));
})(varBag.model, idService);
}
},
"vTRXmICbr0KwRHGVSNO_ag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Wbfk0vnwR0C3PqWrf1D6BQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
