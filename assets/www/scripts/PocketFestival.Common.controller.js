define("PocketFestival.Common.controller", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.Common.controller$debugger"], function (exports, OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestival_Common_Controller_debugger) {
var OS = OutSystems.Internal;
var PocketFestival_CommonController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.getDefaultTimeout = function () {
return PocketFestivalController.default.defaultTimeout;
};
Controller.prototype.handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.allExceptionsVar = allExceptionsVar;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.securityExceptionVar = securityExceptionVar;
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(OS.ErrorHandling.ignoreError(ex, callContext)) {
return OS.ErrorHandling.IGNORED_ERROR_RESULT;
}

try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA.#FlowExceptionHandler:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/FlowExceptionHandler:UlsrIzaDhijGX99XmHU1hA", "PocketFestival", "OnException", "NRFlows.FlowExceptionHandlingFlow", callContext.id, varBag);
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:DK3LlrvSEUWZyl7AA5e8Sw", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:KsUf5c+Xf0iU+KoOZfRKuQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(communicationExceptionVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:bCgcB6o6x0iCwomfyv1kvQ", callContext.id);
return ;

}

// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Jvzr2I3xGki_TxPEUyU3gw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:LYwo+iwL6EGQCSbhalO9GQ", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:VlH5r5kXNUSKtR_vby7rbA", callContext.id);
// Destination: /PocketFestival/InvalidPermissions
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/InvalidPermissions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:7YVKHJBp+0+StJdBPzZy0A", callContext.id);
// Destination: /PocketFestival/Login
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:JQXMLU7l8EOUtInh5UKA2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:udS7ULvmekaJ6jj8XEK6xQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:fXSWSf1Tr0GIlmZrafZseQ", callContext.id);
return ;

}

throw ex;
} catch (unhandledEx) {
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(!(OS.ErrorHandling.ignoreError(unhandledEx, callContext))) {
OS.ErrorHandling.handleError(unhandledEx, callContext);
OutSystemsDebugger.handleException(unhandledEx, callContext.id);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;

}

OutSystemsDebugger.handleException(unhandledEx, callContext.id);
return OS.ErrorHandling.IGNORED_ERROR_RESULT;

} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:0eZ+W3SSVk+CJcw1X48PQA.#FlowExceptionHandler", callContext.id);
}



};
return Controller;
})(OS.Controller.BaseController);
PocketFestival_CommonController.default = new Controller();
});

define("PocketFestival.Common.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JQXMLU7l8EOUtInh5UKA2w": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"DK3LlrvSEUWZyl7AA5e8Sw": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"Jvzr2I3xGki_TxPEUyU3gw": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
