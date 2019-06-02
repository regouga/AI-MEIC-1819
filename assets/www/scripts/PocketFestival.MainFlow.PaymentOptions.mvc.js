define("PocketFestival.MainFlow.PaymentOptions.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.Layout.mvc$model", "OutSystemsUIMobile.Utilities.CenterContent.mvc$model"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_Layout_mvcModel, OutSystemsUIMobile_Utilities_CenterContent_mvcModel) {
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
Model._hasValidationWidgetsValue = (PocketFestival_Common_Layout_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Utilities_CenterContent_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Total" in inputs) {
this.variables.totalIn = OS.DataConversion.ServerDataConverter.from(inputs.Total, OS.Types.Integer);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.MainFlow.PaymentOptions.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.PaymentOptions.mvc$model", "PocketFestival.MainFlow.PaymentOptions.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.CenterContent.mvc$view"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_PaymentOptions_mvc_model, PocketFestival_MainFlow_PaymentOptions_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Utilities_CenterContent_mvc_view) {
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
        View.displayName = "MainFlow.PaymentOptions";
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
                return PocketFestival_MainFlow_PaymentOptions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_PaymentOptions_mvc_controller;
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 22px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; margin-right: 20px; padding: 20px 10px 20px 10px;"
},
gridProperties: {
classes: "ThemeGrid_Margin1First",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/ScanBarecelet", {
PaymentMethod: "MB Way",
Total: model.variables.totalIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_Width10"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.paypal2.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; padding: 20px 10px 20px 10px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/ScanBarecelet", {
PaymentMethod: "PayPal",
Total: model.variables.totalIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_Width7"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.x268mbway_tcm1064524192.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 22px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; margin-right: 20px; padding: 20px 10px 20px 10px;"
},
gridProperties: {
classes: "ThemeGrid_Margin1First",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/ScanBarecelet", {
Total: model.variables.totalIn,
PaymentMethod: "Debit Card"
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width11"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "credit-card",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Debit Card"), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; padding: 20px 10px 20px 10px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/ScanBarecelet", {
Total: model.variables.totalIn,
PaymentMethod: "Credit Card"
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width11"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "credit-card-alt",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Credit Card")))];
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
define("PocketFestival.MainFlow.PaymentOptions.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.PaymentOptions.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_PaymentOptions_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:RdfKPC4sXANm_WuMk+PPOg", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:UCsgkXPR_UmUrIvFR7qlfA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.UCsgkXPR_UmUrIvFR7qlfA:76cgYbKnp9be3A1oME1S3w", "PocketFestival", "PaymentOptions", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:UCsgkXPR_UmUrIvFR7qlfA", callContext.id);
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

define("PocketFestival.MainFlow.PaymentOptions.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"rRZgcfJ2hE+bqcCoOCfNSA": {
getter: function (varBag, idService) {
return varBag.model.variables.totalIn;
},
dataType: OS.Types.Integer
},
"z0ePQxR99EqwznMKuZTmYg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"yy2XZBnWWU2I2egjiBuNgQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"XRoFQTB_2EO_CIcK6K9kQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"dlcopwDoq0+tkWb7y0rkTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
