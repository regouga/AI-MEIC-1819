define("PocketFestival.Common.Menu.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.UserInfo.mvc$model", "OutSystemsUIMobile.Private.MenuDrag.mvc$model"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_UserInfo_mvcModel, OutSystemsUIMobile_Private_MenuDrag_mvcModel) {
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
Model._hasValidationWidgetsValue = (PocketFestival_Common_UserInfo_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Private_MenuDrag_mvcModel.hasValidationWidgets);
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
define("PocketFestival.Common.Menu.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.Common.Menu.mvc$model", "PocketFestival.Common.Menu.mvc$controller", "OutSystems/ReactWidgets/Main", "PocketFestival.Common.UserInfo.mvc$view", "OutSystemsUIMobile.Private.MenuDrag.mvc$view"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_Common_Menu_mvc_model, PocketFestival_Common_Menu_mvc_controller, OSWidgets, PocketFestival_Common_UserInfo_mvc_view, OutSystemsUIMobile_Private_MenuDrag_mvc_view) {
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
        View.displayName = "Common.Menu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_UserInfo_mvc_view, OutSystemsUIMobile_Private_MenuDrag_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_Common_Menu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_Common_Menu_mvc_controller;
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
style: "app-menu-container",
visible: true,
_idProps: {
service: idService,
name: "AppMenuContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 0px;"
},
style: "app-menu",
visible: true,
_idProps: {
service: idService,
name: "AppMenu"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(PocketFestival_Common_UserInfo_mvc_view, {
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "app-menu-links",
visible: true,
_idProps: {
service: idService,
name: "PageLinks"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "LoginInfo"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "user-info-logout",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Menu/Link OnClick");
return controller.clientLogout$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "sign-out",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon3"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Logout"))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "user-info-login",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/PocketFestival/Login", {}),
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "sign-in",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon4"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Login"))];
})))), React.createElement(OutSystemsUIMobile_Private_MenuDrag_mvc_view, {
inputs: {
MenuId: idService.getId("AppMenuContainer")
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
uuid: "11",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("PocketFestival.Common.Menu.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.Common.Menu.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_Common_Menu_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.doLogout$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("DoLogout", "screenservices/PocketFestival/Common/Menu/ActionDoLogout", "Cg8gNuliLsUIBqj+HwiU_g", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}).then(function (outputs) {
});
};

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._clientLogout$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ClientLogout");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:91PXH_UYP0uIvlt_z_5kcA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.94GVU1BsYUqQOglrcXd4_w/ClientActions.91PXH_UYP0uIvlt_z_5kcA:Chx_jj97c0U4Wv3H6OQO8g", "PocketFestival", "ClientLogout", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:RILj4Ele+06M_QAsYXQaPQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:FmtdYyxHmEyrSsOL5VJLIA", callContext.id);
// Execute Action: DoLogout
model.flush();
return controller.doLogout$ServerAction(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:VQP4+PIzdUCmtrhbGZQm8g", callContext.id);
// Destination: /PocketFestival/Login
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:91PXH_UYP0uIvlt_z_5kcA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:91PXH_UYP0uIvlt_z_5kcA", callContext.id);
throw ex;

});
};

Controller.prototype.clientLogout$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._clientLogout$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:oKkyEUBrmxiTW1blzDc3iw", "PocketFestival", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:94GVU1BsYUqQOglrcXd4_w:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.94GVU1BsYUqQOglrcXd4_w:dki2BNlepy9Us8Rff3DA7g", "PocketFestival", "Menu", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:94GVU1BsYUqQOglrcXd4_w", callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
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

define("PocketFestival.Common.Menu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"ER6rVj8FtkWcQUoyY37zYg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AppMenuContainer"));
})(varBag.model, idService);
}
},
"yMS2oMp5TEipYXWe136oAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AppMenu"));
})(varBag.model, idService);
}
},
"LE5qtk3QRE+r71kAG1FnlQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PageLinks"));
})(varBag.model, idService);
}
},
"fwQiXUq8mEaaT04aICyDrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LoginInfo"));
})(varBag.model, idService);
}
},
"6TeqL8tRE0qoew9UgRWk2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon3"));
})(varBag.model, idService);
}
},
"7FKV+tg8B0KblCBrVpAOOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon4"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
