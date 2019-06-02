define("PocketFestival.MainFlow.Checkout.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.Layout.mvc$model", "OutSystemsUIMobile.Utilities.MarginContainer.mvc$model", "OutSystemsUIMobile.Content.Tag.mvc$model", "OutSystemsUIMobile.Interaction.Animate.mvc$model", "OutSystemsUIMobile.Utilities.Separator.mvc$model", "OutSystemsUIMobile.Interaction.Carousel.mvc$model"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_Layout_mvcModel, OutSystemsUIMobile_Utilities_MarginContainer_mvcModel, OutSystemsUIMobile_Content_Tag_mvcModel, OutSystemsUIMobile_Interaction_Animate_mvcModel, OutSystemsUIMobile_Utilities_Separator_mvcModel, OutSystemsUIMobile_Interaction_Carousel_mvcModel) {
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
Model._hasValidationWidgetsValue = (((((PocketFestival_Common_Layout_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Utilities_MarginContainer_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Content_Tag_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Interaction_Animate_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Utilities_Separator_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Interaction_Carousel_mvcModel.hasValidationWidgets);
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
define("PocketFestival.MainFlow.Checkout.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.Checkout.mvc$model", "PocketFestival.MainFlow.Checkout.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.MarginContainer.mvc$view", "OutSystemsUIMobile.Content.Tag.mvc$view", "OutSystemsUIMobile.Interaction.Animate.mvc$view", "OutSystemsUIMobile.Utilities.Separator.mvc$view", "OutSystemsUIMobile.Interaction.Carousel.mvc$view"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_Checkout_mvc_model, PocketFestival_MainFlow_Checkout_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, OutSystemsUIMobile_Content_Tag_mvc_view, OutSystemsUIMobile_Interaction_Animate_mvc_view, OutSystemsUIMobile_Utilities_Separator_mvc_view, OutSystemsUIMobile_Interaction_Carousel_mvc_view) {
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
        View.displayName = "MainFlow.Checkout";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout_mvc_view, OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, OutSystemsUIMobile_Content_Tag_mvc_view, OutSystemsUIMobile_Interaction_Animate_mvc_view, OutSystemsUIMobile_Utilities_Separator_mvc_view, OutSystemsUIMobile_Interaction_Carousel_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_Checkout_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_Checkout_mvc_controller;
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "min-height: 250px"
},
style: "background-white",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, {
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
marginContainer: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
extendedProperties: {
style: "margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Content_Tag_mvc_view, {
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
tag: new PlaceholderContent(function () {
return ["May 15, 2019"];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
extendedProperties: {
style: "margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "heading1 text-bold",
value: model.getCachedValue(idService.getId("8UfnVuktrEmSMSCCXpyZiA.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.integerToDecimal(model.variables.totalIn), "$", 2, ".", ",");
}, function () {
return model.variables.totalIn;
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.totalIn)]
})), React.createElement(OutSystemsUIMobile_Interaction_Animate_mvc_view, {
inputs: {
AnimationType: PocketFestivalModel.staticEntities.animationType.bottomToTop
},
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
uuid: "8",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, {
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
uuid: "9",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
marginContainer: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
style: "negative-margin",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "shadow-lvl1 margin20 background-white circle negative-margin position-relative border-primary-color border-top border-left border-right",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Interaction_Animate_mvc_view, {
inputs: {
AnimationType: PocketFestivalModel.staticEntities.animationType.scale
},
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
uuid: "12",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Checkout/Icon onclick");
controller.action1$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon margin20 text-primary-color",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
style: ("shadow-lvl1 negative-margin background-primary-color border-radius4 padding" + " OSAutoMarginTop"),
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "heading4",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 30px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, {
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
uuid: "17",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
marginContainer: new PlaceholderContent(function () {
return ["Order complete!"];
})
},
_dependencies: []
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
uuid: "18",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, {
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
uuid: "19",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
marginContainer: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-bold heading3",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, "How to get your items:", React.createElement(OutSystemsUIMobile_Interaction_Carousel_mvc_view, {
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
uuid: "21",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
carouselItems: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 50px; margin-bottom: 10px; margin-top: 10px; padding: 10px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["1. Go to the store where you purchased the items"],
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 50px; margin-bottom: 10px; margin-top: 10px; padding: 10px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["2. Go to the \"PocketFestival\" line"],
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 50px; margin-bottom: 10px; margin-top: 10px; padding: 10px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["3. Tap your bracelet on the reader"],
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 50px; margin-bottom: 10px; margin-top: 10px; padding: 10px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["4. Enjoy your items!"],
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))];
})
},
_dependencies: []
}))];
})
},
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding20 display-flex justify-content-space-around",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Left*/ 1,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-bold heading5",
text: ["Transaction Date"],
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-dark-grey",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, "2018-05-15")), React.createElement(OSWidgets.Container, {
align: /*Left*/ 1,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-bold heading5",
text: ["Card Ending"],
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-dark-grey",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, "276"))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.totalIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.MainFlow.Checkout.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.Checkout.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_Checkout_mvc_Debugger) {
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:1_jQLDl+8UuvRvwrRH9CvQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.L628L+bboEStYw7DWN+2RA/ClientActions.1_jQLDl+8UuvRvwrRH9CvQ:B6rhFc6b6nBsE1wmiWy0Rw", "PocketFestival", "Action1", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:KvRNdhAMbUG4qMBSEBXfnw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:0x0ZNUIrc0yJ9CspyQDtbw", callContext.id);
// Execute Action: OnClick
controller._onClick$Action(callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:YJZOifagZEu9Grair4_Kjg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Your order #45 is now ready for pick up!", /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:aXYdn8bCEUuPw92gdWetxw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:1_jQLDl+8UuvRvwrRH9CvQ", callContext.id);
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:HH+MiefFSkeW6TLRbZ3HZQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.L628L+bboEStYw7DWN+2RA/ClientActions.HH+MiefFSkeW6TLRbZ3HZQ:pEVG_cWXl48plmTpMpCSSQ", "PocketFestival", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:3F+K9Oara0KGASD181jOVw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:9vbMShRB5UGfeDVCLfzL0A", callContext.id);
// Destination: /PocketFestival/MainMenu
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/MainMenu", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:HH+MiefFSkeW6TLRbZ3HZQ", callContext.id);
}

};

Controller.prototype.action1$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action1$Action, callContext);

};
Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:RdfKPC4sXANm_WuMk+PPOg", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:L628L+bboEStYw7DWN+2RA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.L628L+bboEStYw7DWN+2RA:yDD5sSZvSP3KKRWZVHk3Mg", "PocketFestival", "Checkout", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:L628L+bboEStYw7DWN+2RA", callContext.id);
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

define("PocketFestival.MainFlow.Checkout.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"L5QdsMYrCk2cMAIkDSfAig": {
getter: function (varBag, idService) {
return varBag.model.variables.totalIn;
},
dataType: OS.Types.Integer
},
"fivFlIRINEimDYho8n21hQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"BIipJbnfkEiOacdv5dzemg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarginContainer"));
})(varBag.model, idService);
}
},
"tTm_gZFf9kyrgOPoahEDvQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tag"));
})(varBag.model, idService);
}
},
"XZ10+13lw0KYDeia6zKGrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"vWEbbDOXYUK4JxaauXmEWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarginContainer"));
})(varBag.model, idService);
}
},
"biLhz3Tsn0+6asspEdYD2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"H_jKtDovbk+Drwflsbkinw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarginContainer"));
})(varBag.model, idService);
}
},
"lxzoA4PBuU21mr8unP3nZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarginContainer"));
})(varBag.model, idService);
}
},
"XzGwhKeifkWIW8xgyfWsRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CarouselItems"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
