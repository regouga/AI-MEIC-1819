define("OutSystemsUIMobile.Navigation.Tabs.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.Utilities.TouchEvents.mvc$model"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobile_Utilities_TouchEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ActiveTab", "activeTabVar", "ActiveTab", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsMoving", "isMovingVar", "IsMoving", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("TabsWidth", "tabsWidthVar", "TabsWidth", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DragDirection", "dragDirectionVar", "DragDirection", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastX", "lastXVar", "LastX", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("LastY", "lastYVar", "LastY", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MoveX", "moveXVar", "MoveX", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("TabsNumber", "tabsNumberVar", "TabsNumber", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DragDirectionH", "dragDirectionHVar", "DragDirectionH", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("FirstTime", "firstTimeVar", "FirstTime", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Velocity", "velocityVar", "Velocity", true, false, OS.Types.Decimal, function () {
return (new OS.DataTypes.Decimal("0.3"));
}), 
this.attr("IsRTL", "isRTLVar", "IsRTL", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ContainsClass", "containsClassVar", "ContainsClass", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("StartingTab", "startingTabIn", "StartingTab", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_startingTabInDataFetchStatus", "_startingTabInDataFetchStatus", "_startingTabInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = OutSystemsUIMobile_Utilities_TouchEvents_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("StartingTab" in inputs) {
this.variables.startingTabIn = inputs.StartingTab;
if("_startingTabInDataFetchStatus" in inputs) {
this.variables._startingTabInDataFetchStatus = inputs._startingTabInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Navigation.Tabs.mvc$model", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.TouchEvents.mvc$view"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Navigation_Tabs_mvc_model, OutSystemsUIMobile_Navigation_Tabs_mvc_controller, OSWidgets, OutSystemsUIMobile_Utilities_TouchEvents_mvc_view) {
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
        View.displayName = "Navigation.Tabs";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUIMobile_Utilities_TouchEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Navigation_Tabs_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Navigation_Tabs_mvc_controller;
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
style: "tabs",
visible: true,
_idProps: {
service: idService,
name: "tabs"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "tabs-header",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tab1,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Navigation/Tabs/Tab1 onclick");
return controller.tabsOnClick$Action(0, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: model.getCachedValue(idService.getId("Tab1.Style"), function () {
return ("tabs-header-tab ph" + (((model.variables.activeTabVar === 0)) ? (" active") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
_idProps: {
service: idService,
name: "Tab1"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tab2,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Navigation/Tabs/Tab2 onclick");
return controller.tabsOnClick$Action(1, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: model.getCachedValue(idService.getId("Tab2.Style"), function () {
return ("tabs-header-tab ph" + (((model.variables.activeTabVar === 1)) ? (" active") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
_idProps: {
service: idService,
name: "Tab2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tab3,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Navigation/Tabs/Tab3 onclick");
return controller.tabsOnClick$Action(2, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: model.getCachedValue(idService.getId("Tab3.Style"), function () {
return ("tabs-header-tab ph" + (((model.variables.activeTabVar === 2)) ? (" active") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
_idProps: {
service: idService,
name: "Tab3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tab4,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Navigation/Tabs/Tab4 onclick");
return controller.tabsOnClick$Action(3, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: model.getCachedValue(idService.getId("Tab4.Style"), function () {
return ("tabs-header-tab ph" + (((model.variables.activeTabVar === 3)) ? (" active") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
_idProps: {
service: idService,
name: "Tab4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tab5,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Navigation/Tabs/Tab5 onclick");
return controller.tabsOnClick$Action(4, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: model.getCachedValue(idService.getId("Tab5.Style"), function () {
return ("tabs-header-tab ph" + (((model.variables.activeTabVar === 4)) ? (" active") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
_idProps: {
service: idService,
name: "Tab5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "tabs-overlay",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "tabs-content",
visible: true,
_idProps: {
service: idService,
name: "tabscontent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "tabs-content-wrapper",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("TabContentTab.Style"), function () {
return ("tabs-content-tab ph" + (((model.variables.activeTabVar === 0)) ? (" open") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
visible: true,
_idProps: {
service: idService,
name: "TabContentTab"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tabContent1,
_idProps: {
service: idService,
name: "TabContent1"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("TabContentTab2.Style"), function () {
return ("tabs-content-tab ph" + (((model.variables.activeTabVar === 1)) ? (" open") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
visible: true,
_idProps: {
service: idService,
name: "TabContentTab2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tabContent2,
_idProps: {
service: idService,
name: "TabContent2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("TabContentTab3.Style"), function () {
return ("tabs-content-tab ph" + (((model.variables.activeTabVar === 2)) ? (" open") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
visible: true,
_idProps: {
service: idService,
name: "TabContentTab3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tabContent3,
_idProps: {
service: idService,
name: "TabContent3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("TabContentTab4.Style"), function () {
return ("tabs-content-tab ph" + (((model.variables.activeTabVar === 3)) ? (" open") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
visible: true,
_idProps: {
service: idService,
name: "TabContentTab4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tabContent4,
_idProps: {
service: idService,
name: "TabContent4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("TabContentTab5.Style"), function () {
return ("tabs-content-tab ph" + (((model.variables.activeTabVar === 4)) ? (" open") : ("")));
}, function () {
return model.variables.activeTabVar;
}),
visible: true,
_idProps: {
service: idService,
name: "TabContentTab5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tabContent5,
_idProps: {
service: idService,
name: "TabContent5"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OutSystemsUIMobile_Utilities_TouchEvents_mvc_view, {
inputs: {
WidgetId: idService.getId("tabscontent")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
start$Action: function (xIn, yIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents Start");
controller.gestureStart$Action(xIn, yIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
move$Action: function (xIn, yIn, offsetXIn, offsetYIn, evtIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents Move");
controller.gestureMove$Action(xIn, yIn, offsetXIn, offsetYIn, evtIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
end$Action: function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents End");
return controller.gestureEnd$Action(offsetXIn, offsetYIn, timeTakenIn, controller.callContext(eventHandlerContext));
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
uuid: "20",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.TabsOnClick.SetTabsJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.SetLeftTabAndHeaderJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.RemoveNoTransitionJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.SetRightTabAndHeaderJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.CalculateMiddleRightJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.CalculateMiddleLeftJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.RemoveNoTransition2JS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.OnReady.setUnderlineJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.OnDestroy.DestroyJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.UpdateUI.MoveMenuJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureMove.CalculateIntervalJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureMove.PreventDefaultWDirectionJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureMove.UpdateUIJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureMove.RemoveNoTransitionJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.AddOverlay.AddOverlayJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureStart.RemoveNoTransitionJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureStart.CheckIfContainsClassJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureStart.CleanAnimationClassesJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$controller.OnOrientationChange.onOrientationChangeJS", "OutSystemsUIMobile.Navigation.Tabs.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_TabsOnClick_SetTabsJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_SetLeftTabAndHeaderJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_RemoveNoTransitionJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_SetRightTabAndHeaderJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_CalculateMiddleRightJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_CalculateMiddleLeftJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_RemoveNoTransition2JS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_OnReady_setUnderlineJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_OnDestroy_DestroyJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_UpdateUI_MoveMenuJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureMove_CalculateIntervalJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureMove_PreventDefaultWDirectionJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureMove_UpdateUIJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureMove_RemoveNoTransitionJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_AddOverlay_AddOverlayJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureStart_RemoveNoTransitionJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureStart_CheckIfContainsClassJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureStart_CleanAnimationClassesJS, OutSystemsUIMobile_Navigation_Tabs_mvc_controller_OnOrientationChange_onOrientationChangeJS, OutSystemsUIMobile_Navigation_Tabs_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onOrientationChange$Action: function () {
return controller.executeActionInsideJSNode(controller._onOrientationChange$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
tabsOnClick$Action: function (tabNumberIn) {
tabNumberIn = (tabNumberIn === undefined) ? 0 : tabNumberIn;
return controller.executeActionInsideJSNode(controller._tabsOnClick$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tabNumberIn, OS.Types.Integer)), controller.callContext(), function (actionResults) {
return {};
});
},
updateUI$Action: function () {
return controller.executeActionInsideJSNode(controller._updateUI$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._tabsOnClick$Action = function (tabNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TabsOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.TabsOnClick$vars"))());
vars.value.tabNumberInLocal = tabNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:k3jjCHzWrUyNkCbiNLAYxA:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.k3jjCHzWrUyNkCbiNLAYxA:mGMK4ewA04faAEDuocCdNQ", "OutSystemsUIMobile", "TabsOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bDfNbpaEqUKw+W4fbEhjxg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PEVfV+7VZEec2c88109z6Q", callContext.id);
// ActiveTab = TabNumber
model.variables.activeTabVar = vars.value.tabNumberInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wMyBHYb8MU+a2_SAfwjTAg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_TabsOnClick_SetTabsJS, "SetTabs", "TabsOnClick", {
id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text),
ActiveTab: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabVar, OS.Types.Integer),
IsRTL: OS.DataConversion.JSNodeParamConverter.to(model.variables.isRTLVar, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:U01wbUjyrUy9WbcOqFw17Q", callContext.id);
// Execute Action: AddOverlay
controller._addOverlay$Action(idService.getId("tabs"), callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+y0QtvROokuUycRbJ3z2cg", callContext.id);
// Trigger Event: OnTabChange
return controller.onTabChange$Action(model.variables.activeTabVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qa0L1+KRuU6N0bKJp0+SaA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:k3jjCHzWrUyNkCbiNLAYxA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:k3jjCHzWrUyNkCbiNLAYxA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.TabsOnClick$vars", [{
name: "TabNumber",
attrName: "tabNumberInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._gestureEnd$Action = function (offsetXIn, offsetYIn, timeTakenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureEnd");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureEnd$vars"))());
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.timeTakenInLocal = timeTakenIn;
var calculateMiddleRightJSResult = new OS.DataTypes.VariableHolder();
var calculateMiddleLeftJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.calculateMiddleRightJSResult = calculateMiddleRightJSResult;
varBag.calculateMiddleLeftJSResult = calculateMiddleLeftJSResult;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:wyj0PfkukEWMOkQjPQgSaw:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.wyj0PfkukEWMOkQjPQgSaw:bzrEjhnHhvleRlohLk4DeQ", "OutSystemsUIMobile", "GestureEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fp6dUjiw_kCdFdaEdvqKhA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Just Clicked?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oaS8DUqV30uYZG_GXgbivg", callContext.id) && !((vars.value.offsetXInLocal.equals(OS.BuiltinFunctions.integerToDecimal(0)) && vars.value.offsetYInLocal.equals(OS.BuiltinFunctions.integerToDecimal(0)))))) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FREMapT8KUuouijJalLCag", callContext.id) && !(model.variables.containsClassVar))) {
var block2 = false;
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
block2 = false;
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JjZPynKYskmGV_scPZCiZQ", callContext.id) && model.variables.isRTLVar)) {
// Is Left?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GlaCHtcyoEmwTf49ZV0eug", callContext.id) && (model.variables.dragDirectionHVar === "left"))) {
return OS.Flow.breakAsync();
}

} else {
// Is Left?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1V4mB+CD6UK1VF+KPwEqkQ", callContext.id) && !((model.variables.dragDirectionHVar === "left")))) {
return OS.Flow.breakAsync();
}

}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JN6fXeN_CUCLuYjYYoyOyQ", callContext.id) && (((model.variables.activeTabVar + 1)) !== (model.variables.tabsNumberVar)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PDOurGJCb0ickyE+6_2AXQ", callContext.id);
calculateMiddleLeftJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_CalculateMiddleLeftJS, "CalculateMiddleLeft", "GestureEnd", {
ActiveTab: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabVar, OS.Types.Integer),
TabsWidth: OS.DataConversion.JSNodeParamConverter.to(model.variables.tabsWidthVar, OS.Types.Integer),
MiddleX: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureEnd$calculateMiddleLeftJSResult"))();
jsNodeResult.middleXOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MiddleX, OS.Types.Integer);
return jsNodeResult;
}, {}, {});
// Did it pass half?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JbF06jOYk02gRf0NPsS3bg", callContext.id) && ((OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar)).gt(OS.BuiltinFunctions.integerToDecimal(calculateMiddleLeftJSResult.value.middleXOut)) || OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar)) && ((model.variables.dragDirectionVar) !== ("vertical"))))) {
// Is not last tab?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8F3cgKkKk0uS3oFHeGFAig", callContext.id) && (model.variables.activeTabVar <= model.variables.tabsNumberVar))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:t3Yi0FFsg0OiUNzLQachIg", callContext.id);
// ActiveTab = ActiveTab + 1
model.variables.activeTabVar = (model.variables.activeTabVar + 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:t3Yi0FFsg0OiUNzLQachIg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsMoving = False
model.variables.isMovingVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XgUZLuVcckGlxfoOZRzWBw", callContext.id);
// Trigger Event: OnTabChange2
return controller.onTabChange$Action(model.variables.activeTabVar, callContext);
}

});
} else {
// Stop move and set tab
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KAJx5nmGIkyYL1iG2jgh1Q", callContext.id);
// IsMoving = False
model.variables.isMovingVar = false;
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hU08O0pYs0mqsUGF00j9yw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_SetLeftTabAndHeaderJS, "SetLeftTabAndHeader", "GestureEnd", {
TabsWidth: OS.DataConversion.JSNodeParamConverter.to(model.variables.tabsWidthVar, OS.Types.Integer),
ActiveTab: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabVar, OS.Types.Integer),
IsRTL: OS.DataConversion.JSNodeParamConverter.to(model.variables.isRTLVar, OS.Types.Boolean),
id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Q3KcVkG+S0uaxLV7GLXBbQ", callContext.id);
// Execute Action: AddOverlay2
controller._addOverlay$Action(idService.getId("tabs"), callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8_d1kjQKa0iXzRlbh4KtqQ", callContext.id);
return OS.Flow.returnAsync();

});
} else {
// jump to block2
block2 = true;
return OS.Flow.breakAsync();
}

});
}).then(function () {
if(block2) {
return OS.Flow.breakAsync();
}

}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:D_OAm9vXTEqSvo3MCEqbkQ", callContext.id) && (model.variables.activeTabVar > 0))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VVFVrJDqeUaFqYE2i9y70Q", callContext.id);
calculateMiddleRightJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_CalculateMiddleRightJS, "CalculateMiddleRight", "GestureEnd", {
ActiveTab: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabVar, OS.Types.Integer),
TabsWidth: OS.DataConversion.JSNodeParamConverter.to(model.variables.tabsWidthVar, OS.Types.Integer),
MiddleX: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureEnd$calculateMiddleRightJSResult"))();
jsNodeResult.middleXOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MiddleX, OS.Types.Integer);
return jsNodeResult;
}, {}, {});
// Did it pass half?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JCJR9mqwRkW9IW10ZbeSzA", callContext.id) && ((OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar)).lt(OS.BuiltinFunctions.integerToDecimal(calculateMiddleRightJSResult.value.middleXOut)) || OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar)) && ((model.variables.dragDirectionVar) !== ("vertical"))))) {
// Is not first tab?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ukmvdo2UuUWtH5ezOnak6Q", callContext.id) && (model.variables.activeTabVar > 0))) {
// Stop move and set tab
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1Ieg+QlvJUWE6P_ALQmMcA", callContext.id);
// IsMoving = False
model.variables.isMovingVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1Ieg+QlvJUWE6P_ALQmMcA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ActiveTab = ActiveTab - 1
model.variables.activeTabVar = (model.variables.activeTabVar - 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OGO8USCzlEWKMmYDjc0gXg", callContext.id);
// Trigger Event: OnTabChange
return controller.onTabChange$Action(model.variables.activeTabVar, callContext);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EARSB5qVckmKlJXzKd7F8A", callContext.id);
// IsMoving = False
model.variables.isMovingVar = false;
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5lDgkHP2EUeopfV34QEUXg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_SetRightTabAndHeaderJS, "SetRightTabAndHeader", "GestureEnd", {
IsRTL: OS.DataConversion.JSNodeParamConverter.to(model.variables.isRTLVar, OS.Types.Boolean),
TabsWidth: OS.DataConversion.JSNodeParamConverter.to(model.variables.tabsWidthVar, OS.Types.Integer),
id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text),
ActiveTab: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabVar, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wVKuhgAy8kewN8yiaNDZ_w", callContext.id);
// Execute Action: AddOverlay
controller._addOverlay$Action(idService.getId("tabs"), callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wKD_Xt_3yUufAaKCarU10A", callContext.id);
return OS.Flow.returnAsync();

});
}

});
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fY_a6+3sTEqoohrz+U0gmA", callContext.id);
// IsMoving = False
model.variables.isMovingVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Pucu+pydcki3Bjma+hLMWQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_RemoveNoTransition2JS, "RemoveNoTransition2", "GestureEnd", {
id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DA5ICb4HcESe1B_3ra_PxQ", callContext.id);
return OS.Flow.returnAsync();

});
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yq+W74+hcEuaeBkIkt6KcQ", callContext.id);
// IsMoving = False
model.variables.isMovingVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mr3obQr_LkeSLJnjGcJcsw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureEnd_RemoveNoTransitionJS, "RemoveNoTransition", "GestureEnd", {
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:d0hEDgJHFUG6goZDlwD6Pg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:wyj0PfkukEWMOkQjPQgSaw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:wyj0PfkukEWMOkQjPQgSaw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureEnd$vars", [{
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "TimeTaken",
attrName: "timeTakenInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureEnd$calculateMiddleRightJSResult", [{
name: "MiddleX",
attrName: "middleXOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureEnd$calculateMiddleLeftJSResult", [{
name: "MiddleX",
attrName: "middleXOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onReady$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.OnReady$vars"))());
vars.value.idInLocal = idIn;
var setUnderlineJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.setUnderlineJSResult = setUnderlineJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:wCftP1vzukK5AXOmgRFOHA:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.wCftP1vzukK5AXOmgRFOHA:QwXb3Byv2DS6QT7buHUfjA", "OutSystemsUIMobile", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jx13eXsLf0OLf28+2lBaQg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:62F1u_FnRUmRhKZrjuunBQ", callContext.id);
setUnderlineJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_OnReady_setUnderlineJS, "setUnderline", "OnReady", {
ActiveTab: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabVar, OS.Types.Integer),
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.idInLocal, OS.Types.Text),
IsRTL: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.OnReady$setUnderlineJSResult"))();
jsNodeResult.isRTLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRTL, OS.Types.Boolean);
return jsNodeResult;
}, {
OnOrientationChange: controller.clientActionProxies.onOrientationChange$Action,
TabsOnClick: controller.clientActionProxies.tabsOnClick$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wF_GYy0HqkWX5FNHzf+tXA", callContext.id);
// IsRTL = setUnderline.IsRTL
model.variables.isRTLVar = setUnderlineJSResult.value.isRTLOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9RotyVuReUKfu+GbfbgB8Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:wCftP1vzukK5AXOmgRFOHA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.OnReady$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.OnReady$setUnderlineJSResult", [{
name: "IsRTL",
attrName: "isRTLOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:k0pFZE67OUaXNej6xqO_lw:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.k0pFZE67OUaXNej6xqO_lw:OR8W92jR_iGidUhJhw1PVA", "OutSystemsUIMobile", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9t2g7KObs0GV_cqQkLTkKg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Okn6HcscdEahDaFGdrZvhA", callContext.id);
// ActiveTab = StartingTab
model.variables.activeTabVar = model.variables.startingTabIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:khjv+3RYUUacUhUxm0DEhA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:k0pFZE67OUaXNej6xqO_lw", callContext.id);
}

};
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:5tH+ZpZ1j0C2Zs_n8dB5_w:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.5tH+ZpZ1j0C2Zs_n8dB5_w:d+0s8V3kMiJhbQzZS1XNtg", "OutSystemsUIMobile", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DDmZffo3rkGhfLiddd1_jA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ymu2_67vpkO7IwVvRU5MuQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", null, function ($parameters) {
}, {
OnOrientationChange: controller.clientActionProxies.onOrientationChange$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:n4qC3+MQaEKbuVRA8Dy+2Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5tH+ZpZ1j0C2Zs_n8dB5_w", callContext.id);
}

};
Controller.prototype._updateUI$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("UpdateUI");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:gHOYaifWo0GJfCeym90UOA:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.gHOYaifWo0GJfCeym90UOA:rjlQJUMmXL6uce4Iv4H80g", "OutSystemsUIMobile", "UpdateUI", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tekZQ+k130OcuMeC9F7M6g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aCr4E6cTe0+oxo5DPBQBEw", callContext.id) && model.variables.isMovingVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Liq5pgPK30u2udXUhZgfCg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_UpdateUI_MoveMenuJS, "MoveMenu", "UpdateUI", {
OffsetX: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar), OS.Types.Decimal),
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text)
}, function ($parameters) {
}, {
UpdateUI: controller.clientActionProxies.updateUI$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Oke04gSeSEWNNLVZ+jS+BA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e5gYcQRKYkKYzncSr+QrgQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:gHOYaifWo0GJfCeym90UOA", callContext.id);
}

};
Controller.prototype._gestureMove$Action = function (xIn, yIn, offsetXIn, offsetYIn, evtIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureMove");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureMove$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.evtInLocal = evtIn;
var calculateIntervalJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.calculateIntervalJSResult = calculateIntervalJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:5R9hdTco406b_YOfz4GlQA:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.5R9hdTco406b_YOfz4GlQA:B7C_WoGwUMhNNWJpUdVW4w", "OutSystemsUIMobile", "GestureMove", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JWEI5NgTiEKjhQFfhQtpSg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5hbKzfYqc0q82TFon8RVNQ", callContext.id) && model.variables.containsClassVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KXRouH2SAk+nT9SmquVU7Q", callContext.id);
// IsMoving = False
model.variables.isMovingVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KXRouH2SAk+nT9SmquVU7Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContainsClass = True
model.variables.containsClassVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+dT50dWit0CeG55egHjdJQ", callContext.id);
} else {
// No direction set?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YD+JTdTmj0yZqYu+9hQM1w", callContext.id) && (model.variables.dragDirectionVar === ""))) {
// Set drag direction
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HB91j0_Ek0u6J9NFhgBFiw", callContext.id);
// DragDirection = If
model.variables.dragDirectionVar = ((OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).gte(OS.BuiltinFunctions.abs(vars.value.offsetYInLocal))) ? ("horizontal") : ("vertical"));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Z6StR0p35kiR2Xl2vSakGA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureMove_UpdateUIJS, "UpdateUI", "GestureMove", null, function ($parameters) {
}, {
UpdateUI: controller.clientActionProxies.updateUI$Action
}, {});
}

// Is vertical?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pjlVZOKjS06VGYQ+LD2SeQ", callContext.id) && (model.variables.dragDirectionVar === "vertical"))) {
// Update Last Positions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UEvfC0AYOEannpwCShNijQ", callContext.id);
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UEvfC0AYOEannpwCShNijQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UEvfC0AYOEannpwCShNijQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsMoving = False
model.variables.isMovingVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nT6DVhSUk0+Z1ITTawlP9g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureMove_RemoveNoTransitionJS, "RemoveNoTransition", "GestureMove", {
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:uorByhm3J0CDYwGEgA_49A", callContext.id);
} else {
var block3 = false;
do {
block3 = false;
var block2 = false;
do {
block2 = false;
do {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2LioB+YIfkWi4ZoHaJN+Wg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureMove_PreventDefaultWDirectionJS, "PreventDefaultWDirection", "GestureMove", {
Evt: OS.DataConversion.JSNodeParamConverter.to(vars.value.evtInLocal, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
// Set drag direction
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LvaGizCnGEK68DGZ9RRZBg", callContext.id);
// DragDirectionH = If
model.variables.dragDirectionHVar = ((vars.value.offsetXInLocal.gt(OS.BuiltinFunctions.integerToDecimal(0))) ? ("right") : ("left"));
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sc9uYBc7m0aDXDW+PMVk8A", callContext.id) && model.variables.isRTLVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FdR_utf0j0GassFjK5p8Ng", callContext.id);
// TabsLimitationLeft = MoveX + X - LastX > 0
vars.value.tabsLimitationLeftVar = OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).gt(OS.BuiltinFunctions.integerToDecimal(0));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FdR_utf0j0GassFjK5p8Ng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TabsLimitationRight = MoveX + X - LastX > ActiveTab + 1 * TabsWidth
vars.value.tabsLimitationRightVar = OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).gt(OS.BuiltinFunctions.integerToDecimal(((model.variables.activeTabVar + 1) * model.variables.tabsWidthVar)));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FdR_utf0j0GassFjK5p8Ng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsBLimitsLeft = MoveX + X - LastX > ActiveTab - 1 * TabsWidth and MoveX + X - LastX < ActiveTab + 1 * TabsWidth
vars.value.isBLimitsLeftVar = (OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).gt(OS.BuiltinFunctions.integerToDecimal(((model.variables.activeTabVar - 1) * model.variables.tabsWidthVar))) && OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).lt(OS.BuiltinFunctions.integerToDecimal(((model.variables.activeTabVar + 1) * model.variables.tabsWidthVar))));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FdR_utf0j0GassFjK5p8Ng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsBLimitsRight = MoveX + X - LastX > 0 and MoveX + X - LastX < ActiveTab + 1 * TabsWidth
vars.value.isBLimitsRightVar = (OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).gt(OS.BuiltinFunctions.integerToDecimal(0)) && OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).lt(OS.BuiltinFunctions.integerToDecimal(((model.variables.activeTabVar + 1) * model.variables.tabsWidthVar))));
// isLeft?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nMuBkJi+sUiCDB7gJOK6PQ", callContext.id) && (model.variables.dragDirectionHVar === "left"))) {
break;
}

} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bi1F97FILkax4gjzB52uug", callContext.id);
// TabsLimitationLeft = MoveX + X - LastX < 0
vars.value.tabsLimitationLeftVar = OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).lt(OS.BuiltinFunctions.integerToDecimal(0));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bi1F97FILkax4gjzB52uug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TabsLimitationRight = MoveX + X - LastX < -ActiveTab + 1 * TabsWidth
vars.value.tabsLimitationRightVar = OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).lt(OS.BuiltinFunctions.integerToDecimal(-((model.variables.activeTabVar + 1) * model.variables.tabsWidthVar)));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bi1F97FILkax4gjzB52uug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsBLimitsLeft = MoveX + X - LastX < -ActiveTab - 1 * TabsWidth and MoveX + X - LastX > -ActiveTab + 1 * TabsWidth
vars.value.isBLimitsLeftVar = (OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).lt(OS.BuiltinFunctions.integerToDecimal(-((model.variables.activeTabVar - 1) * model.variables.tabsWidthVar))) && OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).gt(OS.BuiltinFunctions.integerToDecimal(-((model.variables.activeTabVar + 1) * model.variables.tabsWidthVar))));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bi1F97FILkax4gjzB52uug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsBLimitsRight = MoveX + X - LastX < 0 and MoveX + X - LastX > -ActiveTab + 1 * TabsWidth
vars.value.isBLimitsRightVar = (OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).lt(OS.BuiltinFunctions.integerToDecimal(0)) && OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(vars.value.xInLocal.minus(model.variables.lastXVar)).gt(OS.BuiltinFunctions.integerToDecimal(-((model.variables.activeTabVar + 1) * model.variables.tabsWidthVar))));
// is Left?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8Hn_GeOu4Ei6Z74Ub0GOJA", callContext.id) && !((model.variables.dragDirectionHVar === "left")))) {
break;
}

}

// Tabs limitations
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mXJPgSddDk+BriQkdUkuKQ", callContext.id) && ((((model.variables.activeTabVar + 1)) !== (model.variables.tabsNumberVar)) || vars.value.tabsLimitationRightVar))) {
// Is Between limits?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5C9yONFUB0mA0spFb8JAfg", callContext.id) && vars.value.isBLimitsRightVar)) {
// jump to block2
block2 = true;
break;
} else {
// jump to block3
block3 = true;
break;
}

} else {
// jump to block3
block3 = true;
break;
}

} while(false)
;
if((block2 || block3)) {
break;
}

// Tabs limitations
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rq+OsTlcIEucyfhuZ8+yug", callContext.id) && (((model.variables.activeTabVar) !== (0)) || vars.value.tabsLimitationLeftVar))) {
// Is Between limits?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e9a_8JxOLUS3y7BHfx0GxA", callContext.id) && !(vars.value.isBLimitsLeftVar))) {
// jump to block3
block3 = true;
break;
}

} else {
// jump to block3
block3 = true;
break;
}

} while(false)
;
if(block3) {
break;
}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:909GBYfW5UeZ7o+iDFy7zg", callContext.id);
calculateIntervalJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureMove_CalculateIntervalJS, "CalculateInterval", "GestureMove", {
X: OS.DataConversion.JSNodeParamConverter.to(vars.value.xInLocal, OS.Types.Decimal),
TabsNumber: OS.DataConversion.JSNodeParamConverter.to(model.variables.tabsNumberVar, OS.Types.Integer),
TabsWidth: OS.DataConversion.JSNodeParamConverter.to(model.variables.tabsWidthVar, OS.Types.Integer),
IsRTL: OS.DataConversion.JSNodeParamConverter.to(model.variables.isRTLVar, OS.Types.Boolean),
LastX: OS.DataConversion.JSNodeParamConverter.to(model.variables.lastXVar, OS.Types.Decimal),
FirstTime: OS.DataConversion.JSNodeParamConverter.to(model.variables.firstTimeVar, OS.Types.Boolean),
interval: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.Types.Decimal)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureMove$calculateIntervalJSResult"))();
jsNodeResult.intervalOut = OS.DataConversion.JSNodeParamConverter.from($parameters.interval, OS.Types.Decimal);
return jsNodeResult;
}, {}, {});
// Update menu X axis offset
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ixtQdNRKmkajjWMlL+MHYw", callContext.id);
// MoveX = MoveX + CalculateInterval.interval
model.variables.moveXVar = OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar).plus(calculateIntervalJSResult.value.intervalOut)));
} while(false)
;
// Update Last Positions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Fap92hzcNEOO+kc6TAfJkw", callContext.id);
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Fap92hzcNEOO+kc6TAfJkw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Fap92hzcNEOO+kc6TAfJkw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// FirstTime = False
model.variables.firstTimeVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Hn4KkoEDxU2rQHPetUlZJQ", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5R9hdTco406b_YOfz4GlQA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureMove$vars", [{
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Evt",
attrName: "evtInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}, {
name: "TabsLimitationLeft",
attrName: "tabsLimitationLeftVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "TabsLimitationRight",
attrName: "tabsLimitationRightVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsBLimitsLeft",
attrName: "isBLimitsLeftVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsBLimitsRight",
attrName: "isBLimitsRightVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureMove$calculateIntervalJSResult", [{
name: "interval",
attrName: "intervalOut",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.prototype._addOverlay$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AddOverlay");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.AddOverlay$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:UoZlkesWpUai4XvwIObGXA:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.UoZlkesWpUai4XvwIObGXA:o2xJw2T_QDeOF2xmZ8CqtQ", "OutSystemsUIMobile", "AddOverlay", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FVs1nq7iyEi6Bp3XEinQWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oO+F06G50Ui_uwdiwB9+RQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_AddOverlay_AddOverlayJS, "AddOverlay", "AddOverlay", {
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.idInLocal, OS.Types.Text),
ActiveTab: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabVar, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dFCh9YJQ8kqd7GD0P1+T_A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:UoZlkesWpUai4XvwIObGXA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.AddOverlay$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._gestureStart$Action = function (xIn, yIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureStart$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
var checkIfContainsClassJSResult = new OS.DataTypes.VariableHolder();
var cleanAnimationClassesJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkIfContainsClassJSResult = checkIfContainsClassJSResult;
varBag.cleanAnimationClassesJSResult = cleanAnimationClassesJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:nVW4pPVxaUaaDRRjarSGpg:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.nVW4pPVxaUaaDRRjarSGpg:Rkq5TYWQ_eQZQlCI+1D1Nw", "OutSystemsUIMobile", "GestureStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ezcsbTRApkWxdci4sXpVoA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3g2DjhgJC0+VSVRA82IuxQ", callContext.id);
cleanAnimationClassesJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureStart_CleanAnimationClassesJS, "CleanAnimationClasses", "GestureStart", {
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text),
Width: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer),
TabsNumber: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer),
IsRTL: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureStart$cleanAnimationClassesJSResult"))();
jsNodeResult.widthOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Width, OS.Types.Integer);
jsNodeResult.tabsNumberOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TabsNumber, OS.Types.Integer);
jsNodeResult.isRTLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRTL, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:g4XMTPzMnkim0xtcBI3SIg", callContext.id);
checkIfContainsClassJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureStart_CheckIfContainsClassJS, "CheckIfContainsClass", "GestureStart", {
TabId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text),
ContainsClass: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureStart$checkIfContainsClassJSResult"))();
jsNodeResult.containsClassOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ContainsClass, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id);
// IsMoving = True
model.variables.isMovingVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// TabsWidth = CleanAnimationClasses.Width
model.variables.tabsWidthVar = cleanAnimationClassesJSResult.value.widthOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// DragDirection = ""
model.variables.dragDirectionVar = "";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// TabsNumber = CleanAnimationClasses.TabsNumber
model.variables.tabsNumberVar = cleanAnimationClassesJSResult.value.tabsNumberOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// DragDirectionH = ""
model.variables.dragDirectionHVar = "";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// IsRTL = CleanAnimationClasses.IsRTL
model.variables.isRTLVar = cleanAnimationClassesJSResult.value.isRTLOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// MoveX = If
model.variables.moveXVar = ((model.variables.isRTLVar) ? ((model.variables.activeTabVar * model.variables.tabsWidthVar)) : ((-model.variables.activeTabVar * model.variables.tabsWidthVar)));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// FirstTime = True
model.variables.firstTimeVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L4yO+yE75UK0bE33zgEDmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// ContainsClass = CheckIfContainsClass.ContainsClass
model.variables.containsClassVar = checkIfContainsClassJSResult.value.containsClassOut;
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TMYrB81LXUmhFPbKKZWb1g", callContext.id) && model.variables.containsClassVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:K+J7M7ZDHUqlU6EPEOX8Dg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_GestureStart_RemoveNoTransitionJS, "RemoveNoTransition", "GestureStart", {
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cPbRsfL8Z0ydSlRis6Jx+g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cPbRsfL8Z0ydSlRis6Jx+g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:nVW4pPVxaUaaDRRjarSGpg", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureStart$vars", [{
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureStart$checkIfContainsClassJSResult", [{
name: "ContainsClass",
attrName: "containsClassOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Navigation.Tabs.GestureStart$cleanAnimationClassesJSResult", [{
name: "Width",
attrName: "widthOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "TabsNumber",
attrName: "tabsNumberOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "IsRTL",
attrName: "isRTLOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onOrientationChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnOrientationChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:crLJ_XSE90ef4qgpEBc1OA:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA/ClientActions.crLJ_XSE90ef4qgpEBc1OA:z9xwR1iDOnibP7AX_qstKQ", "OutSystemsUIMobile", "OnOrientationChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9S2iHiIcYEG8f6usM_E06A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SneCfKh5I0C0OzTWcaEPrQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Navigation_Tabs_mvc_controller_OnOrientationChange_onOrientationChangeJS, "onOrientationChange", "OnOrientationChange", {
TabsNumber: OS.DataConversion.JSNodeParamConverter.to(model.variables.tabsNumberVar, OS.Types.Integer),
IsRTL: OS.DataConversion.JSNodeParamConverter.to(model.variables.isRTLVar, OS.Types.Boolean),
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("tabs"), OS.Types.Text),
ActiveTab: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabVar, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vXHPGqBQoUuEoIxYUjq_iQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:crLJ_XSE90ef4qgpEBc1OA", callContext.id);
}

};

Controller.prototype.tabsOnClick$Action = function (tabNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._tabsOnClick$Action, callContext, tabNumberIn);

};
Controller.prototype.gestureEnd$Action = function (offsetXIn, offsetYIn, timeTakenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureEnd$Action, callContext, offsetXIn, offsetYIn, timeTakenIn);

};
Controller.prototype.onReady$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext, idIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.updateUI$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._updateUI$Action, callContext);

};
Controller.prototype.gestureMove$Action = function (xIn, yIn, offsetXIn, offsetYIn, evtIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureMove$Action, callContext, xIn, yIn, offsetXIn, offsetYIn, evtIn);

};
Controller.prototype.addOverlay$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._addOverlay$Action, callContext, idIn);

};
Controller.prototype.gestureStart$Action = function (xIn, yIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureStart$Action, callContext, xIn, yIn);

};
Controller.prototype.onOrientationChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onOrientationChange$Action, callContext);

};
Controller.prototype.onTabChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:4IyGEdDlC0yweUOrtzVtVQ:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ:U_QbkM0j_GlUX2v7PBinYg", "OutSystemsUIMobile", "Navigation", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:5INjFWr5dU+LXp2x9GuJNA:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.5INjFWr5dU+LXp2x9GuJNA:r7nIzc5Fhf3XtN49XDjCEw", "OutSystemsUIMobile", "Tabs", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5INjFWr5dU+LXp2x9GuJNA", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:4IyGEdDlC0yweUOrtzVtVQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Navigation/Tabs On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Navigation/Tabs On Ready");
return controller.onReady$Action(idService.getId("tabs"), callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "Navigation/Tabs On Destroy");
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
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.TabsOnClick.SetTabsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var obj = document.getElementById($parameters.id);
var moveheadertabs = obj.querySelector(".tabs-header");
var tabheaders = obj.querySelectorAll(".tabs-header-tab");
var scrolltoleftelements = 0;
var allTabsWidth = 0;

function setRightTab() {
    var el = obj.querySelector(".tabs-content-wrapper");
    var width = -(($parameters.ActiveTab) * el.offsetWidth);

    if($parameters.IsRTL) {
        width = ($parameters.ActiveTab) * el.offsetWidth;
    }
          
    el.style.webkitTransform =  "translateX(" + width + "px) translateZ(0)";
    el.style.transform =  "translateX(" + width + "px) translateZ(0)";
}

function setUnderLine() {
    var activeWidth = obj.querySelector(".tabs-header-tab.active").offsetWidth;
    var activeTab = obj.querySelector(".tabs-header-tab.active");
    var position = 0;
    
    for(var i = 0; i < tabheaders.length; i++) {
        if(!tabheaders[i].classList.contains("active")) {
           position = position + tabheaders[i].offsetWidth;
        } else {
            break;
        }
    }

    if($parameters.IsRTL) {
        position = -position;
    }
    
    boundingRight = Math.round(tabheaders[$parameters.ActiveTab].getBoundingClientRect().right);
    screenBoundingWidthRight = moveheadertabs.offsetWidth - 40;
    boundingLeft = Math.round(tabheaders[$parameters.ActiveTab].getBoundingClientRect().left);
    screenBoundingWidthLeft = 40;
    
    if(boundingRight < screenBoundingWidthRight && boundingLeft > 40){
        //do nothing
    } else {
        if($parameters.IsRTL) {
            doRightScroll();
        } else {
            doScroll();
        }
    }
}

function doScroll() {
    
    var tabscount = $parameters.ActiveTab;
    
    for(i = 0; i < tabscount; i++) {
        scrolltoleftelements = scrolltoleftelements + tabheaders[i].offsetWidth;
    }
    
    setTimeout(function(){
        moveheadertabs.scrollLeft = (scrolltoleftelements - ((moveheadertabs.offsetWidth - (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));
    },10);
}

function doRightScroll() {
    
    var tabscount = $parameters.ActiveTab;
    
    if(document.body.classList.contains('android')){
        
        for(i = 0; i < tabscount; i++) {
            scrolltoleftelements = scrolltoleftelements + tabheaders[i].offsetWidth;
        }
        
        for(i = 0; i < tabheaders.length; i++) {
            allTabsWidth = allTabsWidth + tabheaders[i].offsetWidth;
        }
        
        setTimeout(function(){
            
            moveheadertabs.scrollLeft = (allTabsWidth - scrolltoleftelements - ((moveheadertabs.offsetWidth + (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));
            
        },10);
        
    } else {
        
        for(i = 0; i < tabscount; i++) {
            scrolltoleftelements = scrolltoleftelements - tabheaders[i].offsetWidth;
        }
        
        setTimeout(function(){
            
            moveheadertabs.scrollLeft =  (scrolltoleftelements + ((moveheadertabs.offsetWidth - (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));
            //moveheadertabs.scrollLeft = moveheadertabs.offsetWidth - scrolltoleftelements;
            //moveheadertabs.scrollLeft = (scrolltoleftelements + ((moveheadertabs.offsetWidth + (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2)) - (tabheaders[$parameters.ActiveTab].getBoundingClientRect().right - tabheaders[$parameters.ActiveTab].getBoundingClientRect().left);
        
        },10);
        
    }
    
}


setTimeout(function() { 
    setUnderLine(); 
    setRightTab();
}, 10);
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.SetLeftTabAndHeaderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var width = -($parameters.ActiveTab * $parameters.TabsWidth);
var obj = document.getElementById($parameters.id);

var el = obj.querySelector('.tabs-content-wrapper');
var moveheadertabs = obj.querySelector('.tabs-header');
var tabheaders = obj.querySelectorAll('.tabs-header-tab');
var scrolltoleftelements = 0;
var allTabsWidth = 0;

if($parameters.IsRTL) {
    width = ($parameters.ActiveTab * $parameters.TabsWidth);
}

el.style.transform =  "translateX(" + width + "px) translateZ(0)";
el.style.webkitTransform =  "translateX(" + width + "px) translateZ(0)";

setTimeout(function() {
    var activeWidth = obj.querySelector('.tabs-header-tab.active').offsetWidth;
    var tabheaders = obj.querySelectorAll('.tabs-header-tab');
    var moveheadertabs = obj.querySelector('.tabs-header');
    var position = 0;
    
    for(var i = 0; i < tabheaders.length; i++) {
        if(!tabheaders[i].classList.contains("active")) {
           position = position + tabheaders[i].offsetWidth;
        } else {
            break;
        }
    }
    
    if($parameters.IsRTL) {
        position = -position;
    }
    
    boundingRight = Math.round(tabheaders[$parameters.ActiveTab].getBoundingClientRect().right);
    screenBoundingWidthRight = moveheadertabs.offsetWidth - 40;
    boundingLeft = Math.round(tabheaders[$parameters.ActiveTab].getBoundingClientRect().left);
    screenBoundingWidthLeft = 40;
    
    if(boundingRight < screenBoundingWidthRight && boundingLeft > 40){
        //do nothing
    } else {
        if($parameters.IsRTL) {
            doRightScroll();
        } else {
            doScroll();
        }
    }
    
}, 0)

function doScroll() {
    
    var tabscount = $parameters.ActiveTab;
    
    for(i = 0; i < tabscount; i++) {
        scrolltoleftelements = scrolltoleftelements + tabheaders[i].offsetWidth;
    }
    
    setTimeout(function(){
        moveheadertabs.scrollLeft = (scrolltoleftelements - ((moveheadertabs.offsetWidth - (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));
    },10);
}

function doRightScroll() {
    
    var tabscount = $parameters.ActiveTab;
    
    if(document.body.classList.contains('android')){
        
        for(i = 0; i < tabscount; i++) {
            scrolltoleftelements = scrolltoleftelements + tabheaders[i].offsetWidth;
        }
        
        for(i = 0; i < tabheaders.length; i++) {
            allTabsWidth = allTabsWidth + tabheaders[i].offsetWidth;
        }
        
        setTimeout(function(){
            
            moveheadertabs.scrollLeft = (allTabsWidth - scrolltoleftelements - ((moveheadertabs.offsetWidth + (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));
            
        },10);
        
    } else {
        
        for(i = 0; i < tabscount; i++) {
            scrolltoleftelements = scrolltoleftelements - tabheaders[i].offsetWidth;
        }
        
        setTimeout(function(){
            
            moveheadertabs.scrollLeft =  (scrolltoleftelements + ((moveheadertabs.offsetWidth - (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));

        },10);
        
    }
    
}

el.classList.remove('no-transition');
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.RemoveNoTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id);
var tabsContent = el.querySelector(".tabs-content-wrapper");

tabsContent.classList.remove("no-transition");
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.SetRightTabAndHeaderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var width = -(($parameters.ActiveTab) * $parameters.TabsWidth);
var obj = document.getElementById($parameters.id);

var el = obj.querySelector(".tabs-content-wrapper");
var moveheadertabs = obj.querySelector(".tabs-header");
var tabheaders = obj.querySelectorAll(".tabs-header-tab");
var scrolltoleftelements = 0;
var allTabsWidth = 0;

if($parameters.IsRTL) {
    width = (($parameters.ActiveTab) * $parameters.TabsWidth);
}

el.style.transform =  "translateX(" + width + "px) translateZ(0)";
el.style.webkitTransform =  "translateX(" + width + "px) translateZ(0)";    


setTimeout(function() {
    var activeWidth = obj.querySelector('.tabs-header-tab.active').offsetWidth;
    var tabheaders = obj.querySelectorAll('.tabs-header-tab');
    var moveheadertabs = obj.querySelector('.tabs-header');
    var position = 0;
    
    for(var i = 0; i < tabheaders.length; i++) {
        if(!tabheaders[i].classList.contains("active")) {
           position = position + tabheaders[i].offsetWidth;
        } else {
            break;
        }
    }    
    
    if($parameters.IsRTL) {
        position = -position;
    }
    
    boundingRight = Math.round(tabheaders[$parameters.ActiveTab].getBoundingClientRect().right);
    screenBoundingWidthRight = moveheadertabs.offsetWidth - 40;
    boundingLeft = Math.round(tabheaders[$parameters.ActiveTab].getBoundingClientRect().left);
    screenBoundingWidthLeft = 40;
    
    if(boundingRight < screenBoundingWidthRight && boundingLeft > 40){
        //do nothing
    } else {
        if($parameters.IsRTL) {
            doRightScroll();
        } else {
            doScroll();
        }
    }
}, 0)

function doScroll() {
    
    var tabscount = $parameters.ActiveTab;
    
    for(i = 0; i < tabscount; i++) {
        scrolltoleftelements = scrolltoleftelements + tabheaders[i].offsetWidth;
    }
    
    setTimeout(function(){
        moveheadertabs.scrollLeft = (scrolltoleftelements - ((moveheadertabs.offsetWidth - (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));
    },10);
}

function doRightScroll() {
    
    var tabscount = $parameters.ActiveTab;
    
    if(document.body.classList.contains('android')){
        
        for(i = 0; i < tabscount; i++) {
            scrolltoleftelements = scrolltoleftelements + tabheaders[i].offsetWidth;
        }
        
        for(i = 0; i < tabheaders.length; i++) {
            allTabsWidth = allTabsWidth + tabheaders[i].offsetWidth;
        }
        
        setTimeout(function(){
            
            moveheadertabs.scrollLeft = (allTabsWidth - scrolltoleftelements - ((moveheadertabs.offsetWidth + (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));
            
        },10);
        
    } else {
        
        for(i = 0; i < tabscount; i++) {
            scrolltoleftelements = scrolltoleftelements - tabheaders[i].offsetWidth;
        }
        
        setTimeout(function(){
            
            moveheadertabs.scrollLeft =  (scrolltoleftelements + ((moveheadertabs.offsetWidth - (tabheaders[$parameters.ActiveTab].offsetWidth)) / 2));

        },10);
        
    }
    
}

el.classList.remove("no-transition");
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.CalculateMiddleRightJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.MiddleX = ($parameters.TabsWidth * $parameters.ActiveTab)-(1*$parameters.TabsWidth/2);

};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.CalculateMiddleLeftJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.MiddleX = (($parameters.TabsWidth * $parameters.ActiveTab) + $parameters.TabsWidth)-(1*$parameters.TabsWidth/2)

};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureEnd.RemoveNoTransition2JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var obj = document.getElementById($parameters.id);
var el = obj.querySelector('.tabs-content-wrapper');

el.classList.remove("no-transition");
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.OnReady.setUnderlineJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.addEventListener('orientationchange', $actions.OnOrientationChange);
var obj = document.getElementById($parameters.Id); 

//Global Action
var element = document.getElementById($parameters.Id).parentElement;
element.changeTab = function(i) { $actions.TabsOnClick(i); };

    var isRTL = document.querySelector('.is-rtl');
    
    if(isRTL) {
        $parameters.IsRTL = true;
    }
    
    setUnderLine(); 
    setRightTab();

function setRightTab() {
    var el = obj.querySelector(".tabs-content-wrapper");
    var width = -(($parameters.ActiveTab) * el.offsetWidth);
    
    if($parameters.IsRTL) {
        width = (($parameters.ActiveTab) * el.offsetWidth);
    }
    
    el.style.transform =  "translateX(" + width + "px) translateZ(0)";
    el.style.webkitTransform =  "translateX(" + width + "px) translateZ(0)";
    
    addOverlay();
}

function setUnderLine() {
    var activeWidth = obj.querySelector(".tabs-header-tab.active").offsetWidth;
    var activeTab = obj.querySelector(".tabs-header-tab.active");
    var tabheaders = obj.querySelectorAll(".tabs-header-tab");
    var tabheadercontent = obj.querySelector(".tabs-header-content");
    var position = 0;
    
    for(var i = 0; i < tabheaders.length; i++) {
        tabheaders[i].style.transform =  "translateX(0) translateZ(0)";
        
        if(!tabheaders[i].classList.contains("active")) {
           position = position + tabheaders[i].offsetWidth;
        } else {
            break;
        }
    }
}

function addOverlay() {
    //Add Overlay
    var tabHeaderWidth = obj.querySelector(".tabs-header");
    var tabheaders = obj.querySelectorAll(".tabs-header-tab");
    var tabOverlay = element.querySelector(".tabs-overlay");
    var tabWidth = 0;
    
    for(i = 0; i < tabheaders.length; i++) {
        
        tabWidth = tabWidth + tabheaders[i].offsetWidth;
        if(tabWidth > (tabHeaderWidth.offsetWidth + 10)) {
            if(tabOverlay.classList.contains("ph")){
                tabOverlay.classList.remove("ph");
            }
            
            if($parameters.IsRTL) {
                tabOverlay.classList.add("left");
            } else {
                tabOverlay.classList.add("right");
                
            }
            break;
        } else {
            if(!tabOverlay.classList.contains("ph")){
                tabOverlay.classList.add("ph");
            }
        }
    }
}

};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($actions, $roles, $public) {
window.removeEventListener('orientationchange', $actions.OnOrientationChange);
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.UpdateUI.MoveMenuJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id).querySelector(".tabs-content-wrapper");

el.style.transform =  "translateX(" + $parameters.OffsetX + "px)";
el.style.webkitTransform =  "translateX(" + $parameters.OffsetX + "px)";

requestAnimationFrame($actions.UpdateUI);
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureMove.CalculateIntervalJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.FirstTime) {
    if($parameters.IsRTL) {
    $parameters.interval = (-($parameters.X - $parameters.LastX))/($parameters.TabsNumber * $parameters.TabsWidth);
    } else {
        $parameters.interval = (($parameters.X - $parameters.LastX))/($parameters.TabsNumber * $parameters.TabsWidth);
    }
} else {
    $parameters.interval = $parameters.X - $parameters.LastX;
}

};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureMove.PreventDefaultWDirectionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Evt.preventDefault();

};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureMove.UpdateUIJS", [], function () {
return function ($actions, $roles, $public) {
requestAnimationFrame($actions.UpdateUI);
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureMove.RemoveNoTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id);
var tabsContent = el.querySelector(".tabs-content-wrapper");

tabsContent.classList.remove("no-transition");
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.AddOverlay.AddOverlayJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var isRTL = document.querySelector('.is-rtl'); 
var element = document.getElementById($parameters.Id).parentElement;
var tabOverlay = element.querySelector(".tabs-overlay");
var countTabs = element.querySelectorAll(".tabs-header-tab").length -1;
var tabsElement = element.querySelectorAll(".tabs-header-tab");
var countEmptyTabs = element.querySelectorAll(".tabs-header-tab.ph");
var isEmpty = 0;

for(i = 0; i < tabsElement.length; i++) {
    
    if(countEmptyTabs[i].childNodes.length === 0) {
       isEmpty = isEmpty + 1;
    }
}
    
setTimeout(function() {
    if($parameters.ActiveTab == (countTabs - isEmpty)) {
        if(isRTL) {
            
            if(tabOverlay.classList.contains("left")){
                tabOverlay.classList.remove("left");
            }
            
        } else {
            
            if(tabOverlay.classList.contains("right")){
                tabOverlay.classList.remove("right");
            }
            
        }
    } else {
        if(isRTL){
            
            if(!tabOverlay.classList.contains("left")){
                tabOverlay.classList.add("left");
            }
            
        } else {
            
            if(!tabOverlay.classList.contains("right")){
                tabOverlay.classList.add("right");
            }
            
        }
    }
}, 0)
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureStart.RemoveNoTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id);
var tabsContent = el.querySelector(".tabs-content-wrapper");

tabsContent.classList.remove("no-transition");
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureStart.CheckIfContainsClassJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var tabSwipe = document.getElementById($parameters.TabId);

if(tabSwipe.classList.contains('no-swipe')){
    $parameters.ContainsClass = true;
} else {
    $parameters.ContainsClass = false;
}
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.GestureStart.CleanAnimationClassesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var tabsNumber = 0;
var el = document.getElementById($parameters.Id);
var tabsChildren = el.querySelector(".tabs-header").children;
var tabsContent = el.querySelector(".tabs-content-wrapper");
var isRTL = document.querySelector('.is-rtl');

for(var i=0; i < tabsChildren.length; i++) {
    if(tabsChildren[i].innerHTML !== "") {
        tabsNumber++;
    }
}
        
$parameters.Width = el.offsetWidth;
$parameters.TabsNumber = tabsNumber;

if(isRTL) {
    $parameters.IsRTL = true;
}

tabsContent.classList.add("no-transition");
};
});
define("OutSystemsUIMobile.Navigation.Tabs.mvc$controller.OnOrientationChange.onOrientationChangeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
setTimeout(function() {
    setUnderLine();
    setRightTab();
}, 300);

var obj = document.getElementById($parameters.Id);

function setRightTab() {
    var el = obj.querySelector(".tabs-content-wrapper");
    var width = -(($parameters.ActiveTab) * el.offsetWidth);
    
    if($parameters.IsRTL) {
        width = (($parameters.ActiveTab) * el.offsetWidth);
    }
    
    el.style.transform =  "translateX(" + width + "px) translateZ(0)";
    el.style.webkitTransform =  "translateX(" + width + "px) translateZ(0)";
}

function setUnderLine() {
    var activeWidth = obj.querySelector(".tabs-header-tab.active").offsetWidth;
    var activeTab = obj.querySelector(".tabs-header-tab.active");
    var tabheaders = obj.querySelectorAll(".tabs-header-tab");
    var moveheadertabs = obj.querySelector('.tabs-header');
    var position = 0;
    
    for(var i = 0; i < tabheaders.length; i++) {
        if(!tabheaders[i].classList.contains("active")) {
           position = position + tabheaders[i].offsetWidth;
        } else {
            break;
        }
    }
    
    if($parameters.IsRTL) {
        position = -position;
        moveheadertabs.scrollLeft = ((moveheadertabs.offsetWidth - tabheaders[$parameters.ActiveTab].offsetWidth) /2) * (($parameters.TabsNumber - $parameters.ActiveTab) - 2);
    } else {
        moveheadertabs.scrollLeft = ((moveheadertabs.offsetWidth - tabheaders[$parameters.ActiveTab].offsetWidth) /2) * ($parameters.ActiveTab - 1);
    }

}

};
});

define("OutSystemsUIMobile.Navigation.Tabs.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"RyJFn0Ch8Ei5sErr38GbHQ": {
getter: function (varBag, idService) {
return varBag.vars.value.tabNumberInLocal;
},
dataType: OS.Types.Integer
},
"wMyBHYb8MU+a2_SAfwjTAg": {
getter: function (varBag, idService) {
return varBag.setTabsJSResult.value;
}
},
"rxAYHc7ftkqw58oMu8WSgQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.Types.Decimal
},
"BnGUhr9KS0O8N0R4nV7JTw": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.Types.Decimal
},
"qGXKmCYo002Owl2VhkLDzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeTakenInLocal;
},
dataType: OS.Types.Decimal
},
"hU08O0pYs0mqsUGF00j9yw": {
getter: function (varBag, idService) {
return varBag.setLeftTabAndHeaderJSResult.value;
}
},
"mr3obQr_LkeSLJnjGcJcsw": {
getter: function (varBag, idService) {
return varBag.removeNoTransitionJSResult.value;
}
},
"5lDgkHP2EUeopfV34QEUXg": {
getter: function (varBag, idService) {
return varBag.setRightTabAndHeaderJSResult.value;
}
},
"VVFVrJDqeUaFqYE2i9y70Q": {
getter: function (varBag, idService) {
return varBag.calculateMiddleRightJSResult.value;
}
},
"PDOurGJCb0ickyE+6_2AXQ": {
getter: function (varBag, idService) {
return varBag.calculateMiddleLeftJSResult.value;
}
},
"Pucu+pydcki3Bjma+hLMWQ": {
getter: function (varBag, idService) {
return varBag.removeNoTransition2JSResult.value;
}
},
"VWx2M8PvEUyEZ+Ngvg4yIA": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.Types.Text
},
"62F1u_FnRUmRhKZrjuunBQ": {
getter: function (varBag, idService) {
return varBag.setUnderlineJSResult.value;
}
},
"ymu2_67vpkO7IwVvRU5MuQ": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"Liq5pgPK30u2udXUhZgfCg": {
getter: function (varBag, idService) {
return varBag.moveMenuJSResult.value;
}
},
"8RqReF_GGEKy46A3eayYsw": {
getter: function (varBag, idService) {
return varBag.vars.value.tabsLimitationLeftVar;
},
dataType: OS.Types.Boolean
},
"DqtguUQfn0+R2xnPy3vQOg": {
getter: function (varBag, idService) {
return varBag.vars.value.tabsLimitationRightVar;
},
dataType: OS.Types.Boolean
},
"3HESxFKC60yU5zk06zbY_g": {
getter: function (varBag, idService) {
return varBag.vars.value.isBLimitsLeftVar;
},
dataType: OS.Types.Boolean
},
"l_WWSnaLdU6SW5_tLZf_Gg": {
getter: function (varBag, idService) {
return varBag.vars.value.isBLimitsRightVar;
},
dataType: OS.Types.Boolean
},
"wBq7_ZNh60ChqlLwgzIK8w": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.Types.Decimal
},
"WTysAJqsnEKuKAGf68huMw": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.Types.Decimal
},
"bjqxJJXa6UOlVJhp5vBAaA": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.Types.Decimal
},
"mdzHGEheqEuLWktXhClByA": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.Types.Decimal
},
"qBVwD_Cn7Ey6AxTw4u4czw": {
getter: function (varBag, idService) {
return varBag.vars.value.evtInLocal;
},
dataType: OS.Types.Object
},
"909GBYfW5UeZ7o+iDFy7zg": {
getter: function (varBag, idService) {
return varBag.calculateIntervalJSResult.value;
}
},
"2LioB+YIfkWi4ZoHaJN+Wg": {
getter: function (varBag, idService) {
return varBag.preventDefaultWDirectionJSResult.value;
}
},
"Z6StR0p35kiR2Xl2vSakGA": {
getter: function (varBag, idService) {
return varBag.updateUIJSResult.value;
}
},
"nT6DVhSUk0+Z1ITTawlP9g": {
getter: function (varBag, idService) {
return varBag.removeNoTransitionJSResult.value;
}
},
"kRHGiHer_k69O9MilktMDw": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.Types.Text
},
"oO+F06G50Ui_uwdiwB9+RQ": {
getter: function (varBag, idService) {
return varBag.addOverlayJSResult.value;
}
},
"0ghQkwMB4EeXzz+HFhha3A": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.Types.Decimal
},
"tg72QBDu90OaCgUzLotORA": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.Types.Decimal
},
"K+J7M7ZDHUqlU6EPEOX8Dg": {
getter: function (varBag, idService) {
return varBag.removeNoTransitionJSResult.value;
}
},
"g4XMTPzMnkim0xtcBI3SIg": {
getter: function (varBag, idService) {
return varBag.checkIfContainsClassJSResult.value;
}
},
"3g2DjhgJC0+VSVRA82IuxQ": {
getter: function (varBag, idService) {
return varBag.cleanAnimationClassesJSResult.value;
}
},
"SneCfKh5I0C0OzTWcaEPrQ": {
getter: function (varBag, idService) {
return varBag.onOrientationChangeJSResult.value;
}
},
"zKVHGAQJTUCgJBlZ2v7J5w": {
getter: function (varBag, idService) {
return varBag.model.variables.activeTabVar;
},
dataType: OS.Types.Integer
},
"r_MX1q+2DEyvhsQXbJuurg": {
getter: function (varBag, idService) {
return varBag.model.variables.isMovingVar;
},
dataType: OS.Types.Boolean
},
"fRF9abSpIUanJooHgAhlZQ": {
getter: function (varBag, idService) {
return varBag.model.variables.tabsWidthVar;
},
dataType: OS.Types.Integer
},
"rKS3OK5+dEClWlUeI7+CKw": {
getter: function (varBag, idService) {
return varBag.model.variables.dragDirectionVar;
},
dataType: OS.Types.Text
},
"jbHyY9H1K0eN8BxRC3dmTQ": {
getter: function (varBag, idService) {
return varBag.model.variables.lastXVar;
},
dataType: OS.Types.Decimal
},
"m8tz5xDcPE+xMyOstfZLzA": {
getter: function (varBag, idService) {
return varBag.model.variables.lastYVar;
},
dataType: OS.Types.Decimal
},
"NUEt2vjgFk+m5Zc+HQPnjw": {
getter: function (varBag, idService) {
return varBag.model.variables.moveXVar;
},
dataType: OS.Types.Integer
},
"87n+6B4ZSkKaPJjw8A6Vxw": {
getter: function (varBag, idService) {
return varBag.model.variables.tabsNumberVar;
},
dataType: OS.Types.Integer
},
"qx6XsRbOdUO_XoIgDOc84A": {
getter: function (varBag, idService) {
return varBag.model.variables.dragDirectionHVar;
},
dataType: OS.Types.Text
},
"gNfv0Dt0okaB2EeyVZUHIg": {
getter: function (varBag, idService) {
return varBag.model.variables.firstTimeVar;
},
dataType: OS.Types.Boolean
},
"GOm1Rcqhm0eS71gU+P_hEA": {
getter: function (varBag, idService) {
return varBag.model.variables.velocityVar;
},
dataType: OS.Types.Decimal
},
"9JwTh0hWtkiWmV93luwPog": {
getter: function (varBag, idService) {
return varBag.model.variables.isRTLVar;
},
dataType: OS.Types.Boolean
},
"0nbj73rZlEi+EB8LYpQwFg": {
getter: function (varBag, idService) {
return varBag.model.variables.containsClassVar;
},
dataType: OS.Types.Boolean
},
"mhg+c9lQ2EaKomkA2M0EeQ": {
getter: function (varBag, idService) {
return varBag.model.variables.startingTabIn;
},
dataType: OS.Types.Integer
},
"mHHqFuOybEqhHPcgscxxRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("tabs"));
})(varBag.model, idService);
}
},
"1j8VpT1fhECDhkAWU+Tzgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab1"));
})(varBag.model, idService);
}
},
"3h0VdY_PNEaB8ZYZDlwMAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab2"));
})(varBag.model, idService);
}
},
"5kloghtzaEiEjsoAmdG26A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab3"));
})(varBag.model, idService);
}
},
"AnANN92LREyDK8y7KwpT4g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab4"));
})(varBag.model, idService);
}
},
"vuYwlRCCjkuXoUkMR5LtZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab5"));
})(varBag.model, idService);
}
},
"Yg6hyOhhVk6PLB673ahAxQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("tabscontent"));
})(varBag.model, idService);
}
},
"GR3GT3ogTU2XnuoMw8J8mg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContentTab"));
})(varBag.model, idService);
}
},
"2gtluMxHn0GTTsbl1am8Zw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent1"));
})(varBag.model, idService);
}
},
"A69pmr20lE+udl01U2s7jg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContentTab2"));
})(varBag.model, idService);
}
},
"3wIqDMYJ3kW9IYz9RDmdmQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent2"));
})(varBag.model, idService);
}
},
"Bt9wMw1QmUaAobCiN4BphQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContentTab3"));
})(varBag.model, idService);
}
},
"InTIHxHkAUGewqwv2BYO6g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent3"));
})(varBag.model, idService);
}
},
"oqnJvxQWSEWyhTryCoNZHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContentTab4"));
})(varBag.model, idService);
}
},
"PvbxGzB_H0yHwvh0vB9gkg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent4"));
})(varBag.model, idService);
}
},
"IdMeV8eGzEe4VYnqLiC96A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContentTab5"));
})(varBag.model, idService);
}
},
"GgEoHLI6LUCYfsFCChpHgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent5"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
