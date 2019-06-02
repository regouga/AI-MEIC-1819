define("PocketFestival.MainFlow.CheckBarecelet.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "PocketFestival.Common.Layout.mvc$model", "OutSystemsUIMobile.Utilities.CenterContent.mvc$model", "BarcodePlugin.model$SettingsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "PocketFestival.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode"], function (OutSystems, PocketFestivalModel, BarcodePluginModel, CommonPluginModel, BarcodePluginController, PocketFestival_Common_Layout_mvcModel, OutSystemsUIMobile_Utilities_CenterContent_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = (PocketFestival_Common_Layout_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Utilities_CenterContent_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.MainFlow.CheckBarecelet.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.CheckBarecelet.mvc$model", "PocketFestival.MainFlow.CheckBarecelet.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.CenterContent.mvc$view", "BarcodePlugin.model$SettingsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "PocketFestival.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode"], function (OutSystems, PocketFestivalModel, PocketFestivalController, BarcodePluginModel, CommonPluginModel, BarcodePluginController, React, OSView, PocketFestival_MainFlow_CheckBarecelet_mvc_model, PocketFestival_MainFlow_CheckBarecelet_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Utilities_CenterContent_mvc_view) {
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
        View.displayName = "MainFlow.CheckBarecelet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout_mvc_view, OutSystemsUIMobile_Utilities_CenterContent_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_CheckBarecelet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_CheckBarecelet_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(PocketFestival_Common_Layout_mvc_view, {
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
return [React.createElement(OutSystemsUIMobile_Utilities_CenterContent_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: PlaceholderContent.Empty,
center: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Utilities_CenterContent_mvc_view, {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: PlaceholderContent.Empty,
center: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold; margin-bottom: 30px; width: 50px;"
},
text: ["Bracelet not associated!"],
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 30px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 15px; height: 100px; margin-top: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/CheckBarecelet/Button OnClick");
return controller.action1$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px; padding: 0px 5px 0px 0px;"
},
icon: "barcode",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 25px;"
},
text: ["Scan bracelet"],
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: []
})];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.MainFlow.CheckBarecelet.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.CheckBarecelet.mvc$debugger", "BarcodePlugin.model$SettingsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "PocketFestival.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode"], function (OutSystems, PocketFestivalModel, PocketFestivalController, BarcodePluginModel, CommonPluginModel, BarcodePluginController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_CheckBarecelet_mvc_Debugger) {
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
Controller.prototype._action1$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action1");
callContext = controller.callContext(callContext);
var scanBarcodeVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.scanBarcodeVar = scanBarcodeVar;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:Yj1PKhQ1j0edEJ7cc0Rd6A:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.WlNGZbhLKUGkHub8j9KFcA/ClientActions.Yj1PKhQ1j0edEJ7cc0Rd6A:Ch1CvCJcQd72mrrGiMRg7w", "PocketFestival", "Action1", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:_SYUV8A+ekmLqEfnLAMf1w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:BYztyvXE2Ei88X_ffO+YCA", callContext.id);
// Execute Action: ScanBarcode
model.flush();
return BarcodePluginController.default.scanBarcode$Action("Please, scan your bracelet\'s barcode", "Please point your camera at the QR code.", new BarcodePluginModel.SettingsRec(), callContext).then(function (value) {
scanBarcodeVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:yGQZcU_Z_EuYHu82UkYEFA", callContext.id);
// Destination: /PocketFestival/User
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/User", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:Yj1PKhQ1j0edEJ7cc0Rd6A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:Yj1PKhQ1j0edEJ7cc0Rd6A", callContext.id);
throw ex;

});
};
Controller.prototype._action2$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action2");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:agzdXSG8cUe7cqCUNeF0Yg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.WlNGZbhLKUGkHub8j9KFcA/ClientActions.agzdXSG8cUe7cqCUNeF0Yg:hhcgflVjzm8S2C7OGuwfsQ", "PocketFestival", "Action2", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:WriCpRnbgkSC8vEPLMrDjA", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:npejEnL7PEm1MhU7GDPqNA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:agzdXSG8cUe7cqCUNeF0Yg", callContext.id);
}

};

Controller.prototype.action1$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action1$Action, callContext);

};
Controller.prototype.action2$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action2$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:Fvi7zkjZJEJT4rHy_cn6eQ", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:WlNGZbhLKUGkHub8j9KFcA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.WlNGZbhLKUGkHub8j9KFcA:pMdQgvIvPKXZUYSPkuhc5A", "PocketFestival", "CheckBarecelet", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:WlNGZbhLKUGkHub8j9KFcA", callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return PocketFestival_MainFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return PocketFestivalController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, PocketFestivalLanguageResources);
});

define("PocketFestival.MainFlow.CheckBarecelet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"BYztyvXE2Ei88X_ffO+YCA": {
getter: function (varBag, idService) {
return varBag.scanBarcodeVar.value;
}
},
"ubTBUkhVjki5_5OodltPUg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"3VW8cmQe9k6RCaNSzToBAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"7k5sX0JEBEqUAR5t+ncw4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"3EBz14rKXUqo8XXrEYnzyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"Il8gNQF5gEeWMt_udXdZOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"gkS5vLaDskGzUhfpK76spw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"ZE2MjRj1dk2ay86B57MnZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
