define("PocketFestival.MainFlow.MainMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.Home.mvc$model", "OutSystemsUIMobile.Utilities.CenterContent.mvc$model", "OutSystemsUIMobile.Interaction.Animate.mvc$model"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_Home_mvcModel, OutSystemsUIMobile_Utilities_CenterContent_mvcModel, OutSystemsUIMobile_Interaction_Animate_mvcModel) {
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
Model._hasValidationWidgetsValue = ((PocketFestival_Common_Home_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Utilities_CenterContent_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Interaction_Animate_mvcModel.hasValidationWidgets);
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
define("PocketFestival.MainFlow.MainMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.MainMenu.mvc$model", "PocketFestival.MainFlow.MainMenu.mvc$controller", "PocketFestival.Common.Home.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.CenterContent.mvc$view", "OutSystemsUIMobile.Interaction.Animate.mvc$view"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_MainMenu_mvc_model, PocketFestival_MainFlow_MainMenu_mvc_controller, PocketFestival_Common_Home_mvc_view, OSWidgets, OutSystemsUIMobile_Utilities_CenterContent_mvc_view, OutSystemsUIMobile_Interaction_Animate_mvc_view) {
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
        View.displayName = "MainFlow.MainMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Home_mvc_view, OutSystemsUIMobile_Utilities_CenterContent_mvc_view, OutSystemsUIMobile_Interaction_Animate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_MainMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_MainMenu_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(PocketFestival_Common_Home_mvc_view, {
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
extendedProperties: {
style: "margin-top: 0px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Interaction_Animate_mvc_view, {
inputs: {
Speed: PocketFestivalModel.staticEntities.speed.normal,
AnimationType: PocketFestivalModel.staticEntities.animationType.scaleDown
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; margin-bottom: 22px; margin-right: 0px; margin-top: 0px; padding: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width10 ThemeGrid_Margin1First"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/MyTicket", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "ticket",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width11 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, "My Ticket")), React.createElement(OSWidgets.Container, {
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
style: "border-radius: 20px; height: 120px; margin-right: 20px; padding: 0px 10px 0px 10px;"
},
gridProperties: {
classes: "ThemeGrid_Margin1First",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/FoodStore", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
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
classes: "ThemeGrid_Width9"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "cutlery",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Food"), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; padding: 0px 10px 0px 10px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/DrinksStore", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
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
icon: "beer",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Drinks")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 22px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
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
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/GeneralStore", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "16"
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "shopping-bag",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Store"), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; padding: 20px 10px 20px 10px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Settings", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "19"
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
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "gear",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Settings")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "background-color: #dc2f23; border-radius: 20px; height: 120px; padding: 20px 10px 20px 10px;"
},
gridProperties: {
classes: "ThemeGrid_Width10 ThemeGrid_Margin1First"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Schedule", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "23"
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
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "color: #fff;"
},
icon: "navicon",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #fff;"
},
text: ["Schedule"],
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: []
}))];
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
define("PocketFestival.MainFlow.MainMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.MainMenu.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_MainMenu_mvc_Debugger) {
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
Controller.prototype._buttonOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ButtonOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:ODUZ_CXlDUGvMzleUdU6RA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.502thaGCXE2jVShV5q+DKA/ClientActions.ODUZ_CXlDUGvMzleUdU6RA:iuqkmTOvwnsThncX54GyaA", "PocketFestival", "ButtonOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:2dUw9Iijh06AUKfTykXjMQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Qu5HRFPHZ06cM6Jtoxy3Tg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:ODUZ_CXlDUGvMzleUdU6RA", callContext.id);
}

};

Controller.prototype.buttonOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:Fvi7zkjZJEJT4rHy_cn6eQ", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:502thaGCXE2jVShV5q+DKA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.502thaGCXE2jVShV5q+DKA:QlzxeC2Hi1HPDtTrFIiiOQ", "PocketFestival", "MainMenu", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:502thaGCXE2jVShV5q+DKA", callContext.id);
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

define("PocketFestival.MainFlow.MainMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"HhjqG5RyDkGUYMz58B_FTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"wuWMmvF1rU2sYbhKBMY43w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"9wAYfvU1q0Oh7jmGOuGJkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"H6f7uEzDqE6vNKX5fDBbag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"c2TyZWLKQUCowK9d8+PLxQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
