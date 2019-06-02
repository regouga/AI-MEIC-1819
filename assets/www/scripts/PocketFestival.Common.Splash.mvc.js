define("PocketFestival.Common.Splash.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.LayoutBlank.mvc$model", "OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$model"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_LayoutBlank_mvcModel, OutSystemsUIMobile_Private_ApplicationLoadEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Percentage", "percentageVar", "Percentage", true, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
percentageVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Model._hasValidationWidgetsValue = (PocketFestival_Common_LayoutBlank_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Private_ApplicationLoadEvents_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.Common.Splash.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.Common.Splash.mvc$model", "PocketFestival.Common.Splash.mvc$controller", "PocketFestival.Common.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Private.ApplicationLoadEvents.mvc$view"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_Common_Splash_mvc_model, PocketFestival_Common_Splash_mvc_controller, PocketFestival_Common_LayoutBlank_mvc_view, OSWidgets, OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_view) {
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
        View.displayName = "Common.Splash";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/PocketFestival.Common.Splash.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_LayoutBlank_mvc_view, OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_Common_Splash_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_Common_Splash_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(PocketFestival_Common_LayoutBlank_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splash-screen",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splash-logo",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-logo",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "40px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.Logo.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "10px"
},
style: "h4",
value: model.getCachedValue(idService.getId("pxWn_Two0Eiw8GMPohFmDw.Value"), function () {
return OS.BuiltinFunctions.getEntryEspaceName();
}),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splash-loading",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, "LOADING"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: ("splash-loading" + " OSAutoMarginTop"),
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "OSLoaderContainer",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (("width: " + (model.variables.percentageVar).toString()) + "%")
},
style: "OSLoadingBar",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OutSystemsUIMobile_Private_ApplicationLoadEvents_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onUpgradeProgress$Action: function (completedIn, totalIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/ApplicationLoadEvents OnUpgradeProgress");
controller.onUpgradeProgress$Action(completedIn, totalIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onLoadComplete$Action: function (redirectURLIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/ApplicationLoadEvents OnLoadComplete");
controller.onLoadComplete$Action(redirectURLIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "11",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.percentageVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.Common.Splash.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.Common.controller", "PocketFestival.Common.Splash.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_CommonController, PocketFestival_Common_Splash_mvc_Debugger) {
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
Controller.prototype._onLoadComplete$Action = function (redirectURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnLoadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Splash.OnLoadComplete$vars"))());
vars.value.redirectURLInLocal = redirectURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:3V2gR+6wKkakE+payaDLxg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.xlEZeLaDmE2qy537bgjnfg/ClientActions.3V2gR+6wKkakE+payaDLxg:M0RJaxNLWeShq8qbk6ynFA", "PocketFestival", "OnLoadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:bi9y1F_f1k6ZIHAL7KQFdw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:bFtb_mt5nkGxaEPfIOM_Tg", callContext.id);
// Destination: /PocketFestival/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.redirectURLInLocal, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:3V2gR+6wKkakE+payaDLxg", callContext.id);
}

};
Controller.registerVariableGroupType("PocketFestival.Common.Splash.OnLoadComplete$vars", [{
name: "RedirectURL",
attrName: "redirectURLInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onUpgradeProgress$Action = function (completedIn, totalIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnUpgradeProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.Common.Splash.OnUpgradeProgress$vars"))());
vars.value.completedInLocal = completedIn;
vars.value.totalInLocal = totalIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:edFXxLYQdkSu9sbK5Sg6xg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.xlEZeLaDmE2qy537bgjnfg/ClientActions.edFXxLYQdkSu9sbK5Sg6xg:3Ld11PnanMTf1ZfQ4PuPEQ", "PocketFestival", "OnUpgradeProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:4wAmCyAQ_UGf238L8+t3xw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:srAmsUxoakSlfHSWAMOa5Q", callContext.id);
// Percentage = Completed / Total * 100
model.variables.percentageVar = OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(vars.value.completedInLocal).div(OS.BuiltinFunctions.integerToDecimal(vars.value.totalInLocal)).times(OS.BuiltinFunctions.integerToDecimal(100))));
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:MEliSB1WH0aDpsWJUl_vaw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:edFXxLYQdkSu9sbK5Sg6xg", callContext.id);
}

};
Controller.registerVariableGroupType("PocketFestival.Common.Splash.OnUpgradeProgress$vars", [{
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

Controller.prototype.onLoadComplete$Action = function (redirectURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onLoadComplete$Action, callContext, redirectURLIn);

};
Controller.prototype.onUpgradeProgress$Action = function (completedIn, totalIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onUpgradeProgress$Action, callContext, completedIn, totalIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:oKkyEUBrmxiTW1blzDc3iw", "PocketFestival", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:xlEZeLaDmE2qy537bgjnfg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.xlEZeLaDmE2qy537bgjnfg:fJXzbTB1nhq1QwgB_0BwQw", "PocketFestival", "Splash", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:xlEZeLaDmE2qy537bgjnfg", callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return PocketFestival_CommonController.default.handleError(ex, this.callContext());
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

define("PocketFestival.Common.Splash.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Kgt8wvFnSU+5tZ3QdrH+6w": {
getter: function (varBag, idService) {
return varBag.vars.value.redirectURLInLocal;
},
dataType: OS.Types.Text
},
"23CyHHqbC0a7ou_TqKj_ZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.completedInLocal;
},
dataType: OS.Types.Integer
},
"uzB5AujvJ0qcqoe6FIilEg": {
getter: function (varBag, idService) {
return varBag.vars.value.totalInLocal;
},
dataType: OS.Types.Integer
},
"_NcvBk8z_k6Qsi9SoSFYYA": {
getter: function (varBag, idService) {
return varBag.model.variables.percentageVar;
},
dataType: OS.Types.Integer
},
"dFeZ8BT8Lk2oCbOPSdmHew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
