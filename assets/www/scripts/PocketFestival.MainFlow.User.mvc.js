define("PocketFestival.MainFlow.User.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.Layout2.mvc$model", "OutSystemsUIMobile.Utilities.CenterContent.mvc$model", "OutSystemsUIMobile.Utilities.Separator.mvc$model", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$model"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_Layout2_mvcModel, OutSystemsUIMobile_Utilities_CenterContent_mvcModel, OutSystemsUIMobile_Utilities_Separator_mvcModel, OutSystemsUIMobile_Utilities_VerticalAlign_mvcModel) {
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
Model._hasValidationWidgetsValue = (((PocketFestival_Common_Layout2_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Utilities_CenterContent_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Utilities_Separator_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Utilities_VerticalAlign_mvcModel.hasValidationWidgets);
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
define("PocketFestival.MainFlow.User.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.User.mvc$model", "PocketFestival.MainFlow.User.mvc$controller", "PocketFestival.Common.Layout2.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.CenterContent.mvc$view", "OutSystemsUIMobile.Utilities.Separator.mvc$view", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$view"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_User_mvc_model, PocketFestival_MainFlow_User_mvc_controller, PocketFestival_Common_Layout2_mvc_view, OSWidgets, OutSystemsUIMobile_Utilities_CenterContent_mvc_view, OutSystemsUIMobile_Utilities_Separator_mvc_view, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view) {
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
        View.displayName = "MainFlow.User";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout2_mvc_view, OutSystemsUIMobile_Utilities_CenterContent_mvc_view, OutSystemsUIMobile_Utilities_Separator_mvc_view, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_User_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_User_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(PocketFestival_Common_Layout2_mvc_view, {
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
top: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "padding: 10px;"
},
gridProperties: {
classes: "ThemeGrid_Width4"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.eef5495d9c.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
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
}, "Smart Bracelet", React.DOM.br(), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #008000; font-weight: bold;"
},
text: ["Connected"],
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), " "), React.createElement(OutSystemsUIMobile_Utilities_Separator_mvc_view, {
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
uuid: "6",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
center: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
}, React.createElement(OSWidgets.ListItem, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/User/ListItem1 OnClick");
controller.listItem1OnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
uuid: "10",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 40px;"
},
gridProperties: {
classes: "ThemeGrid_Width1"
},
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px;"
},
icon: "battery-three-quarters",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Battery remaining: ", React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold; margin-left: 10px;"
},
text: ["97%"],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
extendedProperties: {
style: "width: 100px;"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/User", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item-action list-item-action-primary",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Update")];
})
}
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ListItem, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/User/ListItem2 OnClick");
controller.listItem1OnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 40px;"
},
gridProperties: {
classes: "ThemeGrid_Width1"
},
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px;"
},
icon: "refresh",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Last sync:", React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold; margin-left: 10px;"
},
text: [" just now"],
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/User", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item-action list-item-action-primary",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Sync")];
})
}
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ListItem, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/User/ListItem3 OnClick");
controller.listItem1OnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
uuid: "24",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 40px;"
},
gridProperties: {
classes: "ThemeGrid_Width1"
},
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px;"
},
icon: "battery-empty",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Low power mode: ", React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold; margin-left: 10px;"
},
text: ["off"],
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/User", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item-action list-item-action-primary",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, "On")];
})
}
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ListItem, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/User/ListItem4 OnClick");
controller.listItem1OnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
uuid: "31",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 40px;"
},
gridProperties: {
classes: "ThemeGrid_Width1"
},
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px;"
},
icon: "credit-card",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Default banking card: ", React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold; margin-left: 10px;"
},
text: ["Visa"],
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/User", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item-action list-item-action-primary",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Change")];
})
}
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ListItem, {
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Settings", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
uuid: "38",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 40px;"
},
gridProperties: {
classes: "ThemeGrid_Width1"
},
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px;"
},
icon: "ellipsis-h",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
})), "More settings"];
})
},
_dependencies: []
})];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/User", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item-action list-item-action-primary",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "angle-right",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
}
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ListItem, {
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/CheckBarecelet", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
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
uuid: "45",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 40px;"
},
gridProperties: {
classes: "ThemeGrid_Width1"
},
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px;"
},
icon: "sign-out",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
})), "Disconnect bracelet"];
})
},
_dependencies: []
})];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/User", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item-action list-item-action-primary",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "angle-right",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
}
})))];
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
define("PocketFestival.MainFlow.User.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.User.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_User_mvc_Debugger) {
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
Controller.prototype._listItem1OnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ListItem1OnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:5zzP__cQk0WPKBvsNA1qmw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.V2OXGTfc6USa36tMdZV_bA/ClientActions.5zzP__cQk0WPKBvsNA1qmw:O8tQTm2oRJrpGs8AlM35sg", "PocketFestival", "ListItem1OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:ytqOcqpArkK+S4VdHZAlhw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:UGtdtIiKlUCQAOwy0oFxUg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:5zzP__cQk0WPKBvsNA1qmw", callContext.id);
}

};

Controller.prototype.listItem1OnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._listItem1OnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:Fvi7zkjZJEJT4rHy_cn6eQ", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:V2OXGTfc6USa36tMdZV_bA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.V2OXGTfc6USa36tMdZV_bA:HNUbOGhw3tPlYJZ5M9LzFg", "PocketFestival", "User", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:V2OXGTfc6USa36tMdZV_bA", callContext.id);
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

define("PocketFestival.MainFlow.User.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"STTubcq2O0q7O0tSOhbB8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"_YrtEKUG7U+7o2F4ysvblQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"qKvqfD5kEkCcT1OvxXckSg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Center"));
})(varBag.model, idService);
}
},
"VGm7WNDuFkau_rtohVIo0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem1"));
})(varBag.model, idService);
}
},
"d1dLddRQxki2C4_4H8FXvg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"DJqpkLVKckS3buCRFklwZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem2"));
})(varBag.model, idService);
}
},
"wrXYcznGuEGwv2Tr7z7Tlg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"yBpaKdhnyk+0fNlpwRhpZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem3"));
})(varBag.model, idService);
}
},
"8q1Knou1ukONW4VLiMGkew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"yEDGDG3WKk+Bdty6Th188g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem4"));
})(varBag.model, idService);
}
},
"eLfd8QBXdU6WYeuRo8owQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"v+uPSUpPUUqBEXmG+hKnuA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem5"));
})(varBag.model, idService);
}
},
"aijwBjBPokmhqiHjA0yh5Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"LSt4LmMAJ0i2MuUWdGf5Jw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem6"));
})(varBag.model, idService);
}
},
"yOmCkA6bjEyqH5m4MBJjcg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"D2vHcQ6QDk2sz7ga3oU5qg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
