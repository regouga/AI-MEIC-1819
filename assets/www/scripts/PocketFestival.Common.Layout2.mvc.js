define("PocketFestival.Common.Layout2.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "OutSystemsUIMobile.controller", "PocketFestival.Common.Menu.mvc$model", "OutSystemsUIMobile.Private.PullToRefresh.mvc$model", "PocketFestival.Common.OfflineDataSyncEvents.mvc$model", "OutSystemsUIMobile.controller$MenuHide", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$LayoutReady"], function (OutSystems, PocketFestivalModel, OutSystemsUIMobileController, PocketFestival_Common_Menu_mvcModel, OutSystemsUIMobile_Private_PullToRefresh_mvcModel, PocketFestival_Common_OfflineDataSyncEvents_mvcModel) {
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
define("PocketFestival.Common.Layout2.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.Common.Layout2.mvc$model", "PocketFestival.Common.Layout2.mvc$controller", "OutSystems/ReactWidgets/Main", "PocketFestival.Common.Menu.mvc$view", "OutSystemsUIMobile.Private.PullToRefresh.mvc$view", "PocketFestival.Common.OfflineDataSyncEvents.mvc$view", "OutSystemsUIMobile.controller$MenuHide", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$LayoutReady"], function (OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController, React, OSView, PocketFestival_Common_Layout2_mvc_model, PocketFestival_Common_Layout2_mvc_controller, OSWidgets, PocketFestival_Common_Menu_mvc_view, OutSystemsUIMobile_Private_PullToRefresh_mvc_view, PocketFestival_Common_OfflineDataSyncEvents_mvc_view) {
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
        View.displayName = "Common.Layout2";
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
                return PocketFestival_Common_Layout2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_Common_Layout2_mvc_controller;
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Layout2/PageOverlay onclick");
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
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Layout2/Icon onclick");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
style: "font-size: 30px; padding: 0px;"
},
icon: "chevron-left",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
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
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "text-allign: center; font-weight: 800;"
},
text: ["Pocket Festival"],
_idProps: {
service: idService,
uuid: "10"
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
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Layout2/Icon onclick");
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
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
uuid: "13"
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
uuid: "15",
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
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(PocketFestival_Common_OfflineDataSyncEvents_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "17",
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
define("PocketFestival.Common.Layout2.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "PocketFestival.languageResources", "PocketFestival.Common.Layout2.mvc$debugger", "OutSystemsUIMobile.controller$MenuHide", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$LayoutReady"], function (OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController, PocketFestivalLanguageResources, PocketFestival_Common_Layout2_mvc_Debugger) {
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
Controller.prototype._actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncStartTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Layout2.ActionHandler_OnSyncStartTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:UQ+dNI+yKEKfVjHRloAm2Q:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q/ClientActions.UQ+dNI+yKEKfVjHRloAm2Q:2ektNiOertVLm1OnTRmYvw", "PocketFestival", "ActionHandler_OnSyncStartTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:UhBn1krnAEWXqwiCNyZopQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:wtlrigC3CU2xuc9lBOba0w", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:SswOu2t1gUKCzfLPAmETOQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:UQ+dNI+yKEKfVjHRloAm2Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:UQ+dNI+yKEKfVjHRloAm2Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Layout2.ActionHandler_OnSyncStartTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncCompleteTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Layout2.ActionHandler_OnSyncCompleteTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:t68POY5xu0+ltNkeoXz1gw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q/ClientActions.t68POY5xu0+ltNkeoXz1gw:5pj7A88XEbhULSEDVSjV6w", "PocketFestival", "ActionHandler_OnSyncCompleteTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Pd5POj1svUWM7tWyp3jbbA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:1JgIJDgieUGruJkdtxh8cw", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:hk2hdXm77EKKmfZOL6RGjw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:t68POY5xu0+ltNkeoXz1gw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:t68POY5xu0+ltNkeoXz1gw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Layout2.ActionHandler_OnSyncCompleteTrigger$vars", [{
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:l5q6QMR25Uam74atflfZyg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q/ClientActions.l5q6QMR25Uam74atflfZyg:OpiBIE1U4JYSoH2UQe6YMA", "PocketFestival", "HideMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:lS7QYsCxX0KQKlgU74owRw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:bayBFJn+90uzujAPERHQNQ", callContext.id);
// Execute Action: MenuHide
OutSystemsUIMobileController.default.menuHide$Action(callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:5aCV6_Mp_EaVAZz+v4aYaQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:l5q6QMR25Uam74atflfZyg", callContext.id);
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:j1X7g8Y9r0aHzpIcvsEjVQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q/ClientActions.j1X7g8Y9r0aHzpIcvsEjVQ:KweZS8qVT_bddAtJx+jZFQ", "PocketFestival", "OnClick2", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:N2+Pj9KOu0CRAipMnvm9bA", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:OhPs33rnNEWjKNnRi3LE6g", callContext.id);
// Destination: /PocketFestival/CheckBarecelet
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/CheckBarecelet", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:j1X7g8Y9r0aHzpIcvsEjVQ", callContext.id);
}

};
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:G8dbk9K83EGvNtJ_aQBRbA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q/ClientActions.G8dbk9K83EGvNtJ_aQBRbA:rIHbrxWR_h1iQbxhFGIR4g", "PocketFestival", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:N0u+JpuBnE27D+FRFnBPFA", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:utn5RCX_a0yRp0x_s19k8g", callContext.id);
// Destination: /PocketFestival/MainMenu
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/MainMenu", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromLeft), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:G8dbk9K83EGvNtJ_aQBRbA", callContext.id);
}

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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Layout2.ActionHandler_OnSyncErrorTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:jMzUr_JrV0i+QP4m9Cx4hg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q/ClientActions.jMzUr_JrV0i+QP4m9Cx4hg:HpfJMVJI27BCjOo98XbbIQ", "PocketFestival", "ActionHandler_OnSyncErrorTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:97c_dfi8o0afh1mX_bu_NA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:fXhFz8zf8k2Arda4ZJ1ZOg", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:+EiY1raLhkmcgCkly9SiZw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:jMzUr_JrV0i+QP4m9Cx4hg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:jMzUr_JrV0i+QP4m9Cx4hg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Layout2.ActionHandler_OnSyncErrorTrigger$vars", [{
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
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:T3MQ2vXMKE2QJvRjrIyNoA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q/ClientActions.T3MQ2vXMKE2QJvRjrIyNoA:3rQflA32J1JO3l2P69oPOg", "PocketFestival", "ActionHandler_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:iuzegvCgiUuC9ZgFPmmeEQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:fAFcjH1UuE2K_1OJA5+MuQ", callContext.id);
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:AD63ShBOAUqUiapPFJpDNw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:T3MQ2vXMKE2QJvRjrIyNoA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:T3MQ2vXMKE2QJvRjrIyNoA", callContext.id);
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:AI7M3TZEJkqK7MKsa1K_NA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q/ClientActions.AI7M3TZEJkqK7MKsa1K_NA:eAdqtY5BC4ePi_dLmkEZBA", "PocketFestival", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:UAeWXd04kkiDCQO4X_u45A", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:KgzGVtoHrkaihqZbWAbEPA", callContext.id);
// Execute Action: LayoutReady
OutSystemsUIMobileController.default.layoutReady$Action(model.variables.hideHeaderOnScrollIn, callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:a_nzgn9kLU25f91SSKbhjQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:AI7M3TZEJkqK7MKsa1K_NA", callContext.id);
}

};

Controller.prototype.actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncStartTrigger$Action, callContext, syncUnitIn);

};
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
Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};
Controller.prototype.actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncErrorTrigger$Action, callContext, syncUnitIn, errorMessageIn);

};
Controller.prototype.actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnPullToRefreshTrigger$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onPullToRefresh$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncComplete$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncStart$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncError$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:CzI5OTcBF4mbePhBwCS7kQ", "PocketFestival", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:Olxf36rp10WHku+0i8ao_Q:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.Olxf36rp10WHku+0i8ao_Q:rGKD_T4GhI7NLvbG6NnERQ", "PocketFestival", "Layout2", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:Olxf36rp10WHku+0i8ao_Q", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Layout2 On Ready");
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

define("PocketFestival.Common.Layout2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Y9xzzU2uXkuM5faSBjAZMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"HDZ6wyYVDk6eF9GZKSc68Q": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"cB1Lnfof0ka8Vtyqmzeqtg": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"EyOL4mYge0alQgGZFanquA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"n_3c9wa4C0KA02yVBJSVhw": {
getter: function (varBag, idService) {
return varBag.model.variables.usePullToRefreshIn;
},
dataType: OS.Types.Boolean
},
"a5EILItINkOdfv080yc1CA": {
getter: function (varBag, idService) {
return varBag.model.variables.hideHeaderOnScrollIn;
},
dataType: OS.Types.Boolean
},
"qBtlI6YQyUmnPK6htJiPtw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PageOverlay"));
})(varBag.model, idService);
}
},
"0YTrf5eHZkGSKlNXhhSsyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("header"));
})(varBag.model, idService);
}
},
"hMs9IuG5zUey2NiPWN6jRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"tz1t2R8V6kS6i6Q2l_Yqig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
