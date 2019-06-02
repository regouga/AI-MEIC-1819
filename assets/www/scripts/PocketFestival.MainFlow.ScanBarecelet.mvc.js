define("PocketFestival.MainFlow.ScanBarecelet.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "PocketFestival.Common.Layout.mvc$model", "OutSystemsUIMobile.Utilities.CenterContent.mvc$model", "OutSystemsUIMobile.Utilities.Separator.mvc$model", "BarcodePlugin.model$SettingsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "PocketFestival.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode"], function (OutSystems, PocketFestivalModel, BarcodePluginModel, CommonPluginModel, BarcodePluginController, PocketFestival_Common_Layout_mvcModel, OutSystemsUIMobile_Utilities_CenterContent_mvcModel, OutSystemsUIMobile_Utilities_Separator_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Total", "totalIn", "Total", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_totalInDataFetchStatus", "_totalInDataFetchStatus", "_totalInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PaymentMethod", "paymentMethodIn", "PaymentMethod", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("_paymentMethodInDataFetchStatus", "_paymentMethodInDataFetchStatus", "_paymentMethodInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((PocketFestival_Common_Layout_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Utilities_CenterContent_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Utilities_Separator_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Total" in inputs) {
this.variables.totalIn = OS.DataConversion.ServerDataConverter.from(inputs.Total, OS.Types.Integer);
}

if("PaymentMethod" in inputs) {
this.variables.paymentMethodIn = OS.DataConversion.ServerDataConverter.from(inputs.PaymentMethod, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.MainFlow.ScanBarecelet.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.ScanBarecelet.mvc$model", "PocketFestival.MainFlow.ScanBarecelet.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.CenterContent.mvc$view", "OutSystemsUIMobile.Utilities.Separator.mvc$view", "BarcodePlugin.model$SettingsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "PocketFestival.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode"], function (OutSystems, PocketFestivalModel, PocketFestivalController, BarcodePluginModel, CommonPluginModel, BarcodePluginController, React, OSView, PocketFestival_MainFlow_ScanBarecelet_mvc_model, PocketFestival_MainFlow_ScanBarecelet_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Utilities_CenterContent_mvc_view, OutSystemsUIMobile_Utilities_Separator_mvc_view) {
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
        View.displayName = "MainFlow.ScanBarecelet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout_mvc_view, OutSystemsUIMobile_Utilities_CenterContent_mvc_view, OutSystemsUIMobile_Utilities_Separator_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_ScanBarecelet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_ScanBarecelet_mvc_controller;
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
gridProperties: {
classes: "ThemeGrid_Width5"
},
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
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["Bracelet number:"],
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: [" 5601312089278", React.DOM.br()],
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["Ticket holder:"],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: [" João Pedro Fernandes", React.DOM.br()],
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OutSystemsUIMobile_Utilities_Separator_mvc_view, {
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
uuid: "11",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width5 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["Total Price: ", React.DOM.br()],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: [" "],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: model.getCachedValue(idService.getId("rzOx1C8Pkk2nTbT0zVw5WA.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.integerToDecimal(model.variables.totalIn), "$", 2, ".", ",");
}, function () {
return model.variables.totalIn;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width5 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["Selected method: ", React.DOM.br()],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: [" "],
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.paymentMethodIn,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OutSystemsUIMobile_Utilities_Separator_mvc_view, {
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
uuid: "20",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "22"
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
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Checkout", {
Total: model.variables.totalIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px; padding: 0px 5px 0px 0px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 25px;"
},
text: ["Confirm"],
_idProps: {
service: idService,
uuid: "27"
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
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.paymentMethodIn), asPrimitiveValue(model.variables.totalIn)]
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.paymentMethodIn), asPrimitiveValue(model.variables.totalIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.paymentMethodIn), asPrimitiveValue(model.variables.totalIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.MainFlow.ScanBarecelet.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.ScanBarecelet.mvc$debugger", "BarcodePlugin.model$SettingsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "PocketFestival.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode"], function (OutSystems, PocketFestivalModel, PocketFestivalController, BarcodePluginModel, CommonPluginModel, BarcodePluginController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_ScanBarecelet_mvc_Debugger) {
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:JrtADK42iUGjHsuEuJ0h3w:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.K64n7rowi0+YmdNcms_cfg/ClientActions.JrtADK42iUGjHsuEuJ0h3w:19dONC2FS6GJk_eIDWb6Yg", "PocketFestival", "Action2", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:kuzPJuR0hkeQ3X02WNOsxg", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:rmQ7sJuJ4E+uVv1BV1QPiA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:JrtADK42iUGjHsuEuJ0h3w", callContext.id);
}

};
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
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:mIXXn+NJSk20jjk6M_rXJA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.K64n7rowi0+YmdNcms_cfg/ClientActions.mIXXn+NJSk20jjk6M_rXJA:CdwCZSaZZj1CjzkteknWDw", "PocketFestival", "Action1", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:TForVYkUBk+7XRwXYz4MgQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:KX6mAUnlNEe8g+sreNLLFQ", callContext.id);
// Execute Action: ScanBarcode
model.flush();
return BarcodePluginController.default.scanBarcode$Action("Please, scan your bracelet\'s barcode", "Please point your camera at the QR code.", new BarcodePluginModel.SettingsRec(), callContext).then(function (value) {
scanBarcodeVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:AtW9Be1PGESRW8owV2cVdw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:mIXXn+NJSk20jjk6M_rXJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:mIXXn+NJSk20jjk6M_rXJA", callContext.id);
throw ex;

});
};

Controller.prototype.action2$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action2$Action, callContext);

};
Controller.prototype.action1$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action1$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:y1J3FUFFXO+Ufr2xOZJxhQ", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:K64n7rowi0+YmdNcms_cfg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.K64n7rowi0+YmdNcms_cfg:2y+akPKsIc2AjBRd4EfPOw", "PocketFestival", "ScanBarecelet", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:K64n7rowi0+YmdNcms_cfg", callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/ScanBarecelet On Render");
return controller.action1$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

define("PocketFestival.MainFlow.ScanBarecelet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"KX6mAUnlNEe8g+sreNLLFQ": {
getter: function (varBag, idService) {
return varBag.scanBarcodeVar.value;
}
},
"Lf+Ccxpb4UmYJM6ATj2vYg": {
getter: function (varBag, idService) {
return varBag.model.variables.totalIn;
},
dataType: OS.Types.Integer
},
"5RdGD1D0bEmc7jM2gfor3w": {
getter: function (varBag, idService) {
return varBag.model.variables.paymentMethodIn;
},
dataType: OS.Types.Text
},
"mUUyQLzf7kC7U1f5WiIynw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"AIv1Mcp9oUejdbpqNsYKzw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"rbcBhPlMFkS5n8sFldyRug": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"8ds7SHWa7EmD8M+lcG7QVA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"NncsuyqGpkOH8Z4tc3oGMQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"eWto1CL7bkGvHcituW0mtQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"ZXM4ngcq7EWs9wF0pL23Yw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
