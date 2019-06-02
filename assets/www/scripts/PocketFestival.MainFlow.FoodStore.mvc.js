define("PocketFestival.MainFlow.FoodStore.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.Layout.mvc$model", "OutSystemsUIMobile.Utilities.CenterContent.mvc$model", "OutSystemsUIMobile.Interaction.Animate.mvc$model", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$model"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_Layout_mvcModel, OutSystemsUIMobile_Utilities_CenterContent_mvcModel, OutSystemsUIMobile_Interaction_Animate_mvcModel, OutSystemsUIMobile_Utilities_VerticalAlign_mvcModel) {
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
Model._hasValidationWidgetsValue = (((PocketFestival_Common_Layout_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Utilities_CenterContent_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Interaction_Animate_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Utilities_VerticalAlign_mvcModel.hasValidationWidgets);
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
define("PocketFestival.MainFlow.FoodStore.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.FoodStore.mvc$model", "PocketFestival.MainFlow.FoodStore.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.CenterContent.mvc$view", "OutSystemsUIMobile.Interaction.Animate.mvc$view", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$view"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_FoodStore_mvc_model, PocketFestival_MainFlow_FoodStore_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Utilities_CenterContent_mvc_view, OutSystemsUIMobile_Interaction_Animate_mvc_view, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view) {
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
        View.displayName = "MainFlow.FoodStore";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout_mvc_view, OutSystemsUIMobile_Utilities_CenterContent_mvc_view, OutSystemsUIMobile_Interaction_Animate_mvc_view, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_FoodStore_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_FoodStore_mvc_controller;
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 22px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; margin-right: 20px; padding: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Margin1First",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Food", {
Store: PocketFestivalModel.staticEntities.store.pizzaHut
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 100px;"
},
gridProperties: {
classes: "ThemeGrid_Width9"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_CenterContent_mvc_view, {
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
uuid: "8",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: PlaceholderContent.Empty,
center: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_Width8"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.pizzahut.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: []
}))), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; padding: 0px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "37.5%"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Food", {
Store: PocketFestivalModel.staticEntities.store.mcDonalds
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 100px;"
},
gridProperties: {
classes: "ThemeGrid_Width9"
},
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_CenterContent_mvc_view, {
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
uuid: "12",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: PlaceholderContent.Empty,
center: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "margin-top: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.mcdonalds.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: []
})))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 22px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
uuid: "15",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; margin-right: 20px; padding: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Margin1First",
width: "37.5%"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/FoodStore/Button OnClick");
controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
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
extendedProperties: {
style: "height: 100px;"
},
gridProperties: {
classes: "ThemeGrid_Width9"
},
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_CenterContent_mvc_view, {
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
placeholders: {
top: PlaceholderContent.Empty,
center: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "margin-top: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.kfc.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: []
}))), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; padding: 0px 10px 20px 0px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "37.5%"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/FoodStore/Button OnClick");
controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 100px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_CenterContent_mvc_view, {
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
uuid: "22",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: PlaceholderContent.Empty,
center: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: (auto); margin-top: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.portugalia.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: []
})))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 22px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
uuid: "25",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; margin-right: 20px; padding: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Margin1First",
width: "37.5%"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/FoodStore/Button OnClick");
controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 100px;"
},
gridProperties: {
classes: "ThemeGrid_Width9"
},
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_CenterContent_mvc_view, {
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
uuid: "28",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: PlaceholderContent.Empty,
center: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "margin-top: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.Vitaminas.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: []
}))), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 20px; height: 120px; padding: 0px 10px 20px 0px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "37.5%"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/FoodStore/Button OnClick");
controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 100px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_CenterContent_mvc_view, {
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
uuid: "32",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: PlaceholderContent.Empty,
center: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: (auto); margin-top: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.joshuas.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: []
})))];
})
},
_dependencies: []
}))];
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
define("PocketFestival.MainFlow.FoodStore.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.FoodStore.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_FoodStore_mvc_Debugger) {
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:TAJ3X2n9JECEsyQf4s8NPg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.ltLoDDkBQEO+ZPc3kTGOmg/ClientActions.TAJ3X2n9JECEsyQf4s8NPg:JfOAORVWZbkG2fSqH8MSag", "PocketFestival", "ButtonOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:u_pwjwlDy02QM0MLx8DO7g", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Wkd_wzytPUahpObEw35TMw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:TAJ3X2n9JECEsyQf4s8NPg", callContext.id);
}

};

Controller.prototype.buttonOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:RdfKPC4sXANm_WuMk+PPOg", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:ltLoDDkBQEO+ZPc3kTGOmg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.ltLoDDkBQEO+ZPc3kTGOmg:IAp__Qx9lvSOKZYxmuKyXg", "PocketFestival", "FoodStore", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:ltLoDDkBQEO+ZPc3kTGOmg", callContext.id);
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

define("PocketFestival.MainFlow.FoodStore.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LAESH3ZwY0OyvlhK6lZJOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"btfRjCT8pUK3480UeU3W_A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"rFV484qXS0qApPRfJfH5CA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"zddqb0lp8UWwASfBnSv+lw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"RLs7qKhFi0WUDFJNVwxDHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"A0mEBZQU+EaXJBS28UgwSA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"nDTfm4EuhEqezUHBRaDUDw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"7pEXNzAom0OaOViStne9aA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"1rn4TT_3DUyqQyucjhpKRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"jIhDzd68akeFdvi7UVG+Kw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"R9bHBHImxkiKBDm974nkeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"MCRUfQc5xE6pnI3kXGfjsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"cPLYEZhdCUW9x4SoakERLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"lBogRZocRkm6wklS32QNRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"ww1JHAhWf0OFAN+V0_mbEA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"4fJ7nxnkpkqAV_zf0AhgjQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"hGOl_1G_E06yJ9fP237ZSg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"CJpun9pbbkqQwS9DcHZiZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"Rbv_kBelIEmbbjegWhUylg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"yS_SeD+LtUKewIszcvEgdw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"yDn5HpTE20SqgZ+2+sCMKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"_82rwkfjH0CWn8lb3Sh6Fw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"c1MfZJOifkyRJB0nlSGCTA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"2VKu9MJ6uUWoZHmX2GOYXw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"smcgqW6QBkGvwd0jA24zQQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"U6xbSJCjYEOqff2IrFoxcQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
