define("PocketFestival.Common.Layout.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "OutSystemsUIMobile.controller", "PocketFestival.Common.Menu.mvc$model", "OutSystemsUIMobile.Private.PullToRefresh.mvc$model", "PocketFestival.Common.OfflineDataSyncEvents.mvc$model", "OutSystemsUIMobile.controller$LayoutReady", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$MenuHide"], function (OutSystems, PocketFestivalModel, OutSystemsUIMobileController, PocketFestival_Common_Menu_mvcModel, OutSystemsUIMobile_Private_PullToRefresh_mvcModel, PocketFestival_Common_OfflineDataSyncEvents_mvcModel) {
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
define("PocketFestival.Common.Layout.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.Common.Layout.mvc$model", "PocketFestival.Common.Layout.mvc$controller", "OutSystems/ReactWidgets/Main", "PocketFestival.Common.Menu.mvc$view", "OutSystemsUIMobile.Private.PullToRefresh.mvc$view", "PocketFestival.Common.OfflineDataSyncEvents.mvc$view", "OutSystemsUIMobile.controller$LayoutReady", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$MenuHide"], function (OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController, React, OSView, PocketFestival_Common_Layout_mvc_model, PocketFestival_Common_Layout_mvc_controller, OSWidgets, PocketFestival_Common_Menu_mvc_view, OutSystemsUIMobile_Private_PullToRefresh_mvc_view, PocketFestival_Common_OfflineDataSyncEvents_mvc_view) {
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
        View.displayName = "Common.Layout";
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
                return PocketFestival_Common_Layout_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_Common_Layout_mvc_controller;
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Layout/PageOverlay onclick");
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Layout/Icon onclick");
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Layout/Icon onclick");
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
define("PocketFestival.Common.Layout.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "PocketFestival.languageResources", "PocketFestival.Common.Layout.mvc$debugger", "OutSystemsUIMobile.controller$LayoutReady", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "OutSystemsUIMobile.controller$MenuHide"], function (OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController, PocketFestivalLanguageResources, PocketFestival_Common_Layout_mvc_Debugger) {
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
Controller.prototype._actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncErrorTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Layout.ActionHandler_OnSyncErrorTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:QePwP025QE6riw97VAS2hg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.QePwP025QE6riw97VAS2hg:iqobtSZk8Zd9u0aJR9m1VA", "PocketFestival", "ActionHandler_OnSyncErrorTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:iQTrF0AmH02e+Fy+MpmPcQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:J7I52GfFUkCPa3L5wN94WA", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:KADkTcfbAk+ejyjYD2Qd+Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:QePwP025QE6riw97VAS2hg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:QePwP025QE6riw97VAS2hg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Layout.ActionHandler_OnSyncErrorTrigger$vars", [{
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:z5B7Ri4H+Uutkm38cysbHw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.z5B7Ri4H+Uutkm38cysbHw:U5z+994x4RyjJvuUErILyw", "PocketFestival", "OnClick2", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Kb5xFnla7Eu8UjxhuzWXCg", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:XNrYEacSNUKoWHsZdRLQFw", callContext.id);
// Destination: /PocketFestival/CheckBarecelet
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/CheckBarecelet", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:z5B7Ri4H+Uutkm38cysbHw", callContext.id);
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
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:zh9bWra78UycWrp3O8lzTw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.zh9bWra78UycWrp3O8lzTw:N7uFUj1gwV_BO57x_q8Rcg", "PocketFestival", "ActionHandler_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:IoQC95N_o0ixH+Mdq9_w9Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:piqx0thFREOlGMoQ5oAs_A", callContext.id);
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:d0JKCZtl0EyLxXu_9Ab2aA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:zh9bWra78UycWrp3O8lzTw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:zh9bWra78UycWrp3O8lzTw", callContext.id);
throw ex;

});
};
Controller.prototype._actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncCompleteTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Layout.ActionHandler_OnSyncCompleteTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:EIGiXKM2202iusSczFjO6w:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.EIGiXKM2202iusSczFjO6w:9fRMnhvPGQuuTcCmwidZ7Q", "PocketFestival", "ActionHandler_OnSyncCompleteTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:s42orZw32kC15O4bILUWUQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:cmCCTi3PoUic4LpHsMXepQ", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:lMvYjJhwoEC3pkOD4_JjVA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:EIGiXKM2202iusSczFjO6w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:EIGiXKM2202iusSczFjO6w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Layout.ActionHandler_OnSyncCompleteTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:1qEOap+Fj0++FL2Qvw1gtw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.1qEOap+Fj0++FL2Qvw1gtw:0SOaiqA9dGtiWr5aCnVfOg", "PocketFestival", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:BjDfhvXT1EuRvdXHbJafTg", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:2lxPluRObEWS9dUxIV8Eyw", callContext.id);
// Execute Action: LayoutReady
OutSystemsUIMobileController.default.layoutReady$Action(model.variables.hideHeaderOnScrollIn, callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:VLMXyRj+tke2e8IiZLPkWw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:1qEOap+Fj0++FL2Qvw1gtw", callContext.id);
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:HB66b13CVU6J17DYZXhLeA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.HB66b13CVU6J17DYZXhLeA:gRDgLWa6UAwNUr5E7zV0kQ", "PocketFestival", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:cL3FXTd1qkW0ebICAJejvg", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:UNTp+WQ+iUqUb_lb5iawBg", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:HB66b13CVU6J17DYZXhLeA", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Layout.ActionHandler_OnSyncStartTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:tJpBuL4kxUGuPemEt1pY9Q:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.tJpBuL4kxUGuPemEt1pY9Q:1DnYjv5Rs5FJ8x+UPnJ_7Q", "PocketFestival", "ActionHandler_OnSyncStartTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:V2HSL7ibr06Aj814XJM9WA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:aAkvSf1ONUWcP7YkNzaSFQ", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:QIGYE2Yefk2rxQz9GaFAQw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:tJpBuL4kxUGuPemEt1pY9Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:tJpBuL4kxUGuPemEt1pY9Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.Common.Layout.ActionHandler_OnSyncStartTrigger$vars", [{
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:w4bx2srRdUS5s7GGL1oWWg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.w4bx2srRdUS5s7GGL1oWWg:eAGTQCT20p5sZItsIVin0A", "PocketFestival", "HideMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:W+mZP9IOXUixePEgozTppA", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:kgjyl1NlO0GKQwAu+dms2A", callContext.id);
// Execute Action: MenuHide
OutSystemsUIMobileController.default.menuHide$Action(callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:z95t3a1dQkCuThiMC9_hqw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:w4bx2srRdUS5s7GGL1oWWg", callContext.id);
}

};

Controller.prototype.actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncErrorTrigger$Action, callContext, syncUnitIn, errorMessageIn);

};
Controller.prototype.onClick2$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick2$Action, callContext);

};
Controller.prototype.actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnPullToRefreshTrigger$Action, callContext);

};
Controller.prototype.actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncCompleteTrigger$Action, callContext, syncUnitIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};
Controller.prototype.actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncStartTrigger$Action, callContext, syncUnitIn);

};
Controller.prototype.hideMenu$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._hideMenu$Action, callContext);

};
Controller.prototype.onPullToRefresh$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncComplete$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncStart$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:CzI5OTcBF4mbePhBwCS7kQ", "PocketFestival", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:A3CPaT75a0KxzHXTIsSbxg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg:w6O0+tTsBNjQJ0UEN0IcwA", "PocketFestival", "Layout", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:A3CPaT75a0KxzHXTIsSbxg", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Layout On Ready");
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

define("PocketFestival.Common.Layout.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"WGlWafgk_kOKm74luUcM5w": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"CmpkjX6SC0qeS0lrUl9FMg": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"hay2Dy7QpUiAep8Tf9rBdA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"ctxBTMwmfUGxEW7ZVXv57w": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"jHEgvDZM_UOsjxFYvZLdDQ": {
getter: function (varBag, idService) {
return varBag.model.variables.usePullToRefreshIn;
},
dataType: OS.Types.Boolean
},
"R4bSMYUeMEWlB6vgCdkL1w": {
getter: function (varBag, idService) {
return varBag.model.variables.hideHeaderOnScrollIn;
},
dataType: OS.Types.Boolean
},
"RUHfXf0Tj0unRIiv+eVyKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PageOverlay"));
})(varBag.model, idService);
}
},
"mZEBj46tyEmPXsTwwLryOg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("header"));
})(varBag.model, idService);
}
},
"j3ltwQxOe0GNCz3WiPE0+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"4z4V8RlWp0WI1PqeqBSLTA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
