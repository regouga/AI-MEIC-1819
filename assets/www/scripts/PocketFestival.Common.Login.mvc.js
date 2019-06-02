define("PocketFestival.Common.Login.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "OutSystemsUIMobile.controller", "PocketFestival.controller", "OutSystemsUIMobile.controller$ShowPassword", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "PocketFestival.controller$OfflineDataSync", "PocketFestival.controller$OfflineDataSyncConfiguration"], function (OutSystems, PocketFestivalModel, OutSystemsUIMobileController, PocketFestivalController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UsernameVal", "usernameValVar", "UsernameVal", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("PasswordVal", "passwordValVar", "PasswordVal", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.Types.Boolean, function () {
return false;
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
return {
Input_UsernameVal: OS.Model.ValidationWidgetRecord,
Input_PasswordVal: OS.Model.ValidationWidgetRecord
};
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return true;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.Common.Login.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.Common.Login.mvc$model", "PocketFestival.Common.Login.mvc$controller", "PocketFestival.Common.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Interaction.AnimatedLabel.mvc$view", "OutSystemsUIMobile.controller$ShowPassword", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "PocketFestival.controller$OfflineDataSync", "PocketFestival.controller$OfflineDataSyncConfiguration"], function (OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController, React, OSView, PocketFestival_Common_Login_mvc_model, PocketFestival_Common_Login_mvc_controller, PocketFestival_Common_LayoutBlank_mvc_view, OSWidgets, OutSystemsUIMobile_Interaction_AnimatedLabel_mvc_view) {
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
        View.displayName = "Common.Login";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/PocketFestival.Common.Login.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_LayoutBlank_mvc_view, OutSystemsUIMobile_Interaction_AnimatedLabel_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_Common_Login_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_Common_Login_mvc_controller;
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
style: "login-screen",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-logo",
visible: true,
_idProps: {
service: idService,
uuid: "2"
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
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "10px"
},
style: "h4",
value: model.getCachedValue(idService.getId("nwGsk7OR9Um1e+b5NbK7Qg.Value"), function () {
return OS.BuiltinFunctions.getEntryEspaceName();
}),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 0px;"
},
style: "login-form",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Interaction_AnimatedLabel_mvc_view, {
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
uuid: "7",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "user",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon1"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Username"];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 250,
style: "form-control",
variable: model.createVariable(OS.Types.Text, model.variables.usernameValVar, function (value) {
model.variables.usernameValVar = value;
}),
_idProps: {
service: idService,
name: "Input_UsernameVal"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.usernameValVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "OSAutoMarginTop",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Interaction_AnimatedLabel_mvc_view, {
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "lock",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon2"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Password"];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: true,
maxLength: 0,
style: "form-control login-password",
variable: model.createVariable(OS.Types.Text, model.variables.passwordValVar, function (value) {
model.variables.passwordValVar = value;
}),
_idProps: {
service: idService,
name: "Input_PasswordVal"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Login/Link OnClick");
controller.togglePassword$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "eye",
iconSize: /*FontSize*/ 0,
style: model.getCachedValue(idService.getId("oF3s+ZJieE2_mtNN5GElJQ.Style"), function () {
return ("icon show-password" + (((model.variables.passwordValVar === "")) ? (" hidden") : ("")));
}, function () {
return model.variables.passwordValVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.passwordValVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "login-button",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isExecutingVar),
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Login/Button OnClick");
return controller.login$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn background-white",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.isExecutingVar), false, this, function () {
return ["Login"];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "spinner",
iconSize: /*FontSize*/ 0,
style: "icon fa-spin",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.passwordValVar), asPrimitiveValue(model.variables.usernameValVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.Common.Login.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "OutSystemsUIMobile.controller", "PocketFestival.languageResources", "PocketFestival.Common.controller", "PocketFestival.Common.Login.mvc$controller.OnReady.EnterOnClickJS", "PocketFestival.Common.Login.mvc$debugger", "OutSystemsUIMobile.controller$ShowPassword", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile", "PocketFestival.controller$OfflineDataSync", "PocketFestival.controller$OfflineDataSyncConfiguration"], function (OutSystems, PocketFestivalModel, PocketFestivalController, OutSystemsUIMobileController, PocketFestivalLanguageResources, PocketFestival_CommonController, PocketFestival_Common_Login_mvc_controller_OnReady_EnterOnClickJS, PocketFestival_Common_Login_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
login$Action: function () {
return controller.executeActionInsideJSNode(controller._login$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions
Controller.prototype.doLogout$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("DoLogout", "screenservices/PocketFestival/Common/Login/ActionDoLogout", "Cg8gNuliLsUIBqj+HwiU_g", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}).then(function (outputs) {
});
};
Controller.prototype.doLogin$ServerAction = function (usernameIn, passwordIn, callContext) {
var controller = this.controller;
var inputs = {
Username: OS.DataConversion.ServerDataConverter.to(usernameIn, OS.Types.Text),
Password: OS.DataConversion.ServerDataConverter.to(passwordIn, OS.Types.Text)
};
return controller.callServerAction("DoLogin", "screenservices/PocketFestival/Common/Login/ActionDoLogin", "vfbPTjNiI5xvC+ShuCiaiA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}).then(function (outputs) {
});
};

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._togglePassword$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TogglePassword");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:dCQcBcDHJEmJo0Y4WlY5BA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.VS1qHpBGZUqUgYIoclboTA/ClientActions.dCQcBcDHJEmJo0Y4WlY5BA:DjDGAguRaS3VZRTqEB21Pg", "PocketFestival", "TogglePassword", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:8D6bfH2PaEO7tikaBLdDpw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:v6MBbP4zz0OnW4RRfwiWxg", callContext.id);
// Execute Action: ShowPassword
OutSystemsUIMobileController.default.showPassword$Action(callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:W1qqBgPgk0WipJK35oE0Mg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:dCQcBcDHJEmJo0Y4WlY5BA", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0X7ACHGNnkGyGBFfOJFJUQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.VS1qHpBGZUqUgYIoclboTA/ClientActions.0X7ACHGNnkGyGBFfOJFJUQ:sZWOD_yfkW45fMegFmypAg", "PocketFestival", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:JaaaLYy9z067NXOE_9+YVA", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:xGiBTk8P+EGYdV05rFmWJw", callContext.id);
controller.safeExecuteJSNode(PocketFestival_Common_Login_mvc_controller_OnReady_EnterOnClickJS, "EnterOnClick", "OnReady", null, function ($parameters) {
}, {
Login: controller.clientActionProxies.login$Action
}, {});
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:5dFccNAeCUydW+SmUP1CPw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:0X7ACHGNnkGyGBFfOJFJUQ", callContext.id);
}

};
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:b7RuF3SuUEW1xlYa566wSA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.VS1qHpBGZUqUgYIoclboTA/ClientActions.b7RuF3SuUEW1xlYa566wSA:Dw3JflqYXt5pZxqzh_OmZw", "PocketFestival", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Hphb9H2FbEuiTlRBDrTAxA", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Xv_j7m7jhUOwhlJahdJvYA", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:zqyyJ2_pnEqxz5RVZgX4XQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:b7RuF3SuUEW1xlYa566wSA", callContext.id);
}

};
Controller.prototype._syncOnLogin$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SyncOnLogin");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:dS3MjSADgEmd2w6DFeDT1g:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.VS1qHpBGZUqUgYIoclboTA/ClientActions.dS3MjSADgEmd2w6DFeDT1g:dflEFJref831lUt5gD2udg", "PocketFestival", "SyncOnLogin", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:ooMcvp93dk+rxekeKNBD7A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:_JvNI8ngLEeyYrrTEuSMlA", callContext.id);
// Execute Action: OfflineDataSync
model.flush();
return PocketFestivalController.default.offlineDataSync$Action("", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:4Jal71eAWUGCY4_mjnH0kw", callContext.id);
// Destination: /PocketFestival/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((("/" + OS.BuiltinFunctions.getEntryEspaceName()) + "/"), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("Login.SyncOnLogin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:bo7OZDhzNkiMx1EB7ncjmA", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:NrunGMf+2Uu5QDDe9l+paA", callContext.id);
// Execute Action: DoLogout
model.flush();
return controller.doLogout$ServerAction(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:PmADfqiBkEyL9tXeJR0RZg", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:9ZUtdIWZtkiQAv9L76tdzA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:5Ok7BDjf4UW+WZnurfad4g", callContext.id);
return OS.Flow.returnAsync();

});
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:dS3MjSADgEmd2w6DFeDT1g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:dS3MjSADgEmd2w6DFeDT1g", callContext.id);
throw ex;

});
};
Controller.prototype._login$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Login");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var offlineDataSyncConfigurationVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.offlineDataSyncConfigurationVar = offlineDataSyncConfigurationVar;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:FNKEm+c_DUa707TmYMeHvQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.VS1qHpBGZUqUgYIoclboTA/ClientActions.FNKEm+c_DUa707TmYMeHvQ:oAFt_5y+GcxLEELyeaoj8w", "PocketFestival", "Login", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:6KLwhZL_OEqC1ll87Hk8uw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:50cmf7bIUUW2_ynIMkvjcA", callContext.id);
// IsExecuting = True
model.variables.isExecutingVar = true;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:28jFlRPt2ke+igANn3ZgGA", callContext.id);
// Execute Action: DoLogin
model.flush();
return controller.doLogin$ServerAction(model.variables.usernameValVar, model.variables.passwordValVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:CkYL7UPOpEC3XxqVJaACTQ", callContext.id);
// Execute Action: OfflineDataSyncConfiguration
offlineDataSyncConfigurationVar.value = PocketFestivalController.default.offlineDataSyncConfiguration$Action(callContext);

}).then(function () {
// Configuration.SyncOnLogin?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:0LxJseTOUkSHpDGjl2Eyzw", callContext.id) && offlineDataSyncConfigurationVar.value.syncOnLoginOut)) {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:gKfvsfnaS02cfiKlZPq8eQ", callContext.id);
// Execute Action: SyncOnLogin
return controller._syncOnLogin$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:JyONxPCZqU+Bm_5Z3dQ3ow", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Nx_H6d1b50CixuTl5xVVzg", callContext.id);
// Destination: /PocketFestival/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((("/" + OS.BuiltinFunctions.getEntryEspaceName()) + "/"), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Login.Login", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:rJwkqdpOIkexHFl61gJckQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:2q7KcCZgeUSwjUEiUqtC7A", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:OpKuGIgcwEe7iT8mEQjLcQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:2zefS0642E+U+XHece8CQw", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:FNKEm+c_DUa707TmYMeHvQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:FNKEm+c_DUa707TmYMeHvQ", callContext.id);
throw ex;

});
};

Controller.prototype.togglePassword$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._togglePassword$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.syncOnLogin$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._syncOnLogin$Action, callContext);

};
Controller.prototype.login$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._login$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:oKkyEUBrmxiTW1blzDc3iw", "PocketFestival", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:VS1qHpBGZUqUgYIoclboTA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.VS1qHpBGZUqUgYIoclboTA:VBio5_Zr3TALHNXRvkn1JA", "PocketFestival", "Login", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:VS1qHpBGZUqUgYIoclboTA", callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Login On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Login On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("PocketFestival.Common.Login.mvc$controller.OnReady.EnterOnClickJS", [], function () {
return function ($actions, $roles, $public) {
document.addEventListener('keypress', function enterLogin(e){
    if(e.which == 13) {
        $actions.Login();
        document.removeEventListener('keypress', enterLogin);
    }
});

 
};
});

define("PocketFestival.Common.Login.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"xGiBTk8P+EGYdV05rFmWJw": {
getter: function (varBag, idService) {
return varBag.enterOnClickJSResult.value;
}
},
"bo7OZDhzNkiMx1EB7ncjmA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"rJwkqdpOIkexHFl61gJckQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"CkYL7UPOpEC3XxqVJaACTQ": {
getter: function (varBag, idService) {
return varBag.offlineDataSyncConfigurationVar.value;
}
},
"4cKNQhpTVUi6M4q0B39N_Q": {
getter: function (varBag, idService) {
return varBag.model.variables.usernameValVar;
},
dataType: OS.Types.Text
},
"weD5laumz0GvQP7uKuvlzA": {
getter: function (varBag, idService) {
return varBag.model.variables.passwordValVar;
},
dataType: OS.Types.Text
},
"CrlroHS0tEKrUhp3i0L_0A": {
getter: function (varBag, idService) {
return varBag.model.variables.isExecutingVar;
},
dataType: OS.Types.Boolean
},
"lga_PEHXR0u_0YArqw_1jg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"dSGb3pa4ZUKVkNWg10EWmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"eFhSUez6GEmOysRvfbQGHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon1"));
})(varBag.model, idService);
}
},
"il0SD8N2DEyEI_G+ghSzsw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"k6LzN9nisUGKJLMXeXmjuA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_UsernameVal"));
})(varBag.model, idService);
}
},
"llTvMwg740mmAXujP3ndsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"dlm5hYVdAk6wdeDW3RCrHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon2"));
})(varBag.model, idService);
}
},
"EAeA7jgPkUuj1vjQG67lPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"u2g6PU2jskKSvNdZV1i1gw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_PasswordVal"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
