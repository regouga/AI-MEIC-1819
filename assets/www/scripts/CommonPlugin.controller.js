define("CommonPlugin.controller$ConsoleLog", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$ConsoleLog.WriteToConsoleJS"], function (exports, OutSystems, CommonPluginModel, CommonPluginController, CommonPlugin_controller_ConsoleLog_WriteToConsoleJS) {
var OS = OutSystems.Internal;
CommonPluginController.default.consoleLog$Action = function (componentIn, textIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CommonPlugin.ConsoleLog$vars"))());
vars.value.componentInLocal = componentIn;
vars.value.textInLocal = textIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
try {try {OutSystemsDebugger.push("2RVlWxf02UGcRV38GnsBnw:IfbV0ADy_kiR4zP5KDcw9Q:/ClientActionFlows.IfbV0ADy_kiR4zP5KDcw9Q:OU2tNUttyIWMFRIO8A2DQw", "CommonPlugin", "ConsoleLog", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:Wd5n3AxPV0WckHFIQHxP5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:e6Wkj6QP4U+WuK+gQKuLVg", callContext.id);
controller.safeExecuteJSNode(CommonPlugin_controller_ConsoleLog_WriteToConsoleJS, "WriteToConsole", "ConsoleLog", {
Component: OS.DataConversion.JSNodeParamConverter.to(vars.value.componentInLocal, OS.Types.Text),
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.textInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:mbZ2y2WMyEyS98s+VoXOBw", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("ConsoleLog.ConsoleLog", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:Ee_cdoYt3Uaogs7YLizQnQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:Fw_Bp7g0JUie5FY93dgv8w", callContext.id);
return ;

}

throw ex;
})();
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("2RVlWxf02UGcRV38GnsBnw:IfbV0ADy_kiR4zP5KDcw9Q", callContext.id);
}

};
var controller = CommonPluginController.default;
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.ConsoleLog$vars", [{
name: "Component",
attrName: "componentInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CommonPluginController.default.clientActionProxies.consoleLog$Action = function (componentIn, textIn) {
componentIn = (componentIn === undefined) ? "" : componentIn;
textIn = (textIn === undefined) ? "" : textIn;
return controller.executeActionInsideJSNode(CommonPluginController.default.consoleLog$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(componentIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(textIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("CommonPlugin.controller$ConsoleLog.WriteToConsoleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
console.log('> ' + $parameters.Component + ': ' + $parameters.Text);
};
});

define("CommonPlugin.controller$GetDeviceID", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$GetDeviceID.GetDeviceHwIdJS"], function (exports, OutSystems, CommonPluginModel, CommonPluginController, CommonPlugin_controller_GetDeviceID_GetDeviceHwIdJS) {
var OS = OutSystems.Internal;
CommonPluginController.default.getDeviceID$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceHwIdJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CommonPlugin.GetDeviceID$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceHwIdJSResult = getDeviceHwIdJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("2RVlWxf02UGcRV38GnsBnw:cDhSsjh6U06i7yTSjitYmg:/ClientActionFlows.cDhSsjh6U06i7yTSjitYmg:XSBBZTSIvDgP+S_sVuiVMw", "CommonPlugin", "GetDeviceID", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:9G+UKX+5CkqL+IVbK8xmxg", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:HUHDvTAbX0yTHPJsmvdhZA", callContext.id);
getDeviceHwIdJSResult.value = controller.safeExecuteJSNode(CommonPlugin_controller_GetDeviceID_GetDeviceHwIdJS, "GetDeviceHwId", "GetDeviceID", {
deviceHwId: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CommonPlugin.GetDeviceID$getDeviceHwIdJSResult"))();
jsNodeResult.deviceHwIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.deviceHwId, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:gAYOQOsQPkmmnLcz02HNdw", callContext.id);
// DeviceHwId = GetDeviceHwId.deviceHwId
outVars.value.deviceHwIdOut = getDeviceHwIdJSResult.value.deviceHwIdOut;
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:90Gs+yWxhEOUrET44ep9jg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("2RVlWxf02UGcRV38GnsBnw:cDhSsjh6U06i7yTSjitYmg", callContext.id);
}

};
var controller = CommonPluginController.default;
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetDeviceID$getDeviceHwIdJSResult", [{
name: "deviceHwId",
attrName: "deviceHwIdOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetDeviceID$outVars", [{
name: "DeviceHwId",
attrName: "deviceHwIdOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CommonPluginController.default.clientActionProxies.getDeviceID$Action = function () {
return controller.executeActionInsideJSNode(CommonPluginController.default.getDeviceID$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DeviceHwId: OS.DataConversion.JSNodeParamConverter.to(actionResults.deviceHwIdOut, OS.Types.Text)
};
});
};
});
define("CommonPlugin.controller$GetDeviceID.GetDeviceHwIdJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.deviceHwId = device.uuid;
};
});

define("CommonPlugin.controller$GetOperatingSystem", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$ConsoleLog", "CommonPlugin.controller$GetPlatform"], function (exports, OutSystems, CommonPluginModel, CommonPluginController) {
var OS = OutSystems.Internal;
CommonPluginController.default.getOperatingSystem$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getPlatformVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CommonPlugin.GetOperatingSystem$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getPlatformVar = getPlatformVar;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("2RVlWxf02UGcRV38GnsBnw:Ze8J_VSL_0eQIykA3o4BBg:/ClientActionFlows.Ze8J_VSL_0eQIykA3o4BBg:9VxvMZE_duhKNcwftkxBjw", "CommonPlugin", "GetOperatingSystem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:B5_bd6cdlki6xufNb+0JNg", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:DvmB0iP02UW8PwntHq+08A", callContext.id);
// Execute Action: GetPlatform
getPlatformVar.value = CommonPluginController.default.getPlatform$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:qCN3JNtm50qeD1TKckkj4g", callContext.id) && ("android" === getPlatformVar.value.platformOut))) {
// Android
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:39VKoED9ZkuxES2mX9QwAQ", callContext.id);
// OperatingSystemsId = Android
outVars.value.operatingSystemsIdOut = CommonPluginModel.staticEntities.mobile_OperatingSystem.android;
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:ZKIGUzncPEG02ohbK2mRKA", callContext.id);
} else {
if(("ios" === getPlatformVar.value.platformOut)) {
// iOS
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:QUC6kYZ2P0mYhhRuloztUg", callContext.id);
// OperatingSystemsId = iOS
outVars.value.operatingSystemsIdOut = CommonPluginModel.staticEntities.mobile_OperatingSystem.iOS;
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:ZKIGUzncPEG02ohbK2mRKA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:SrZPGp9PrE+gzQ2NdKUYBA", callContext.id);
// OperatingSystemsId = Other
outVars.value.operatingSystemsIdOut = CommonPluginModel.staticEntities.mobile_OperatingSystem.other;
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:gkMS4unAK0ek2sUmX9UH0g", callContext.id);
}

}

} catch (ex) {
(function () {
OS.Logger.trace("GetOperatingSystem.GetOperatingSystem", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:xPlcJ7U120Gi+s1A77uCBw", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:cURUvnK8i0us8TbHQkQh_g", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("CommonPlugins", allExceptionsVar.value.exceptionMessageAttr, callContext);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:1g7uO80Rlk2o8vB2tJzZIw", callContext.id);
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("2RVlWxf02UGcRV38GnsBnw:Ze8J_VSL_0eQIykA3o4BBg", callContext.id);
}

};
var controller = CommonPluginController.default;
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetOperatingSystem$outVars", [{
name: "OperatingSystemsId",
attrName: "operatingSystemsIdOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CommonPluginController.default.clientActionProxies.getOperatingSystem$Action = function () {
return controller.executeActionInsideJSNode(CommonPluginController.default.getOperatingSystem$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OperatingSystemsId: actionResults.operatingSystemsIdOut
};
});
};
});

define("CommonPlugin.controller$GetPlatform", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$GetPlatform.RunCordovaJS", "CommonPlugin.controller$ConsoleLog"], function (exports, OutSystems, CommonPluginModel, CommonPluginController, CommonPlugin_controller_GetPlatform_RunCordovaJS) {
var OS = OutSystems.Internal;
CommonPluginController.default.getPlatform$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var runCordovaJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CommonPlugin.GetPlatform$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.runCordovaJSResult = runCordovaJSResult;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("2RVlWxf02UGcRV38GnsBnw:_zCgJYNs2U66GpWGlbXN_A:/ClientActionFlows._zCgJYNs2U66GpWGlbXN_A:gStHqKqax4AlaAUjaNdTFQ", "CommonPlugin", "GetPlatform", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:d1zrCiIEAEm16eKp8zWiYA", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:UBBb++M6WE27nb7425jocg", callContext.id);
runCordovaJSResult.value = controller.safeExecuteJSNode(CommonPlugin_controller_GetPlatform_RunCordovaJS, "RunCordova", "GetPlatform", {
PlatformId: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CommonPlugin.GetPlatform$runCordovaJSResult"))();
jsNodeResult.platformIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PlatformId, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:g27KO8Is+keVNyj0BYxgJw", callContext.id);
// Platform = ToLower
outVars.value.platformOut = OS.BuiltinFunctions.toLower(runCordovaJSResult.value.platformIdOut);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:Cy_soWUcPU2VTiZi0v5_AA", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("GetPlatform.GetPlatform", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:MachDuI2UkWeqXyvoGZWcw", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:tUJoTArkKk6RShm13B7atg", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("CommonPlugins", allExceptionsVar.value.exceptionMessageAttr, callContext);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:EfkA1_HiJkGz7U9MPYauNg", callContext.id);
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("2RVlWxf02UGcRV38GnsBnw:_zCgJYNs2U66GpWGlbXN_A", callContext.id);
}

};
var controller = CommonPluginController.default;
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$runCordovaJSResult", [{
name: "PlatformId",
attrName: "platformIdOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$outVars", [{
name: "Platform",
attrName: "platformOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CommonPluginController.default.clientActionProxies.getPlatform$Action = function () {
return controller.executeActionInsideJSNode(CommonPluginController.default.getPlatform$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Platform: OS.DataConversion.JSNodeParamConverter.to(actionResults.platformOut, OS.Types.Text)
};
});
};
});
define("CommonPlugin.controller$GetPlatform.RunCordovaJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.PlatformId = cordova.platformId;
};
});

define("CommonPlugin.controller$GetUserAgent", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$GetUserAgent.GettingUAJS", "CommonPlugin.controller$ConsoleLog"], function (exports, OutSystems, CommonPluginModel, CommonPluginController, CommonPlugin_controller_GetUserAgent_GettingUAJS) {
var OS = OutSystems.Internal;
CommonPluginController.default.getUserAgent$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var gettingUAJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CommonPlugin.GetUserAgent$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.gettingUAJSResult = gettingUAJSResult;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("2RVlWxf02UGcRV38GnsBnw:8QNUOThpnUaT8kWextkFPw:/ClientActionFlows.8QNUOThpnUaT8kWextkFPw:OQqKF9Yi6CVP75FR6fcmag", "CommonPlugin", "GetUserAgent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:ZYTZwNvQ7EOi5bn5QKyGrA", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:xIM8tYYsqEmgOmXxmLNjkA", callContext.id);
gettingUAJSResult.value = controller.safeExecuteJSNode(CommonPlugin_controller_GetUserAgent_GettingUAJS, "GettingUA", "GetUserAgent", {
UserAgent: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CommonPlugin.GetUserAgent$gettingUAJSResult"))();
jsNodeResult.userAgentOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UserAgent, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:S4Auv9vvp0G7KpC7CfI9IQ", callContext.id);
// UserAgent = GettingUA.UserAgent
outVars.value.userAgentOut = gettingUAJSResult.value.userAgentOut;
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:CyBV5X9hb0K_y8kYvcPplA", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("GetUserAgent.GetUserAgent", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:DWFOFItvHki2Ay8VEDSLPA", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:c7hGcBg3EEK0TXs96zsaGg", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("CommonPlugins", allExceptionsVar.value.exceptionMessageAttr, callContext);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:+Am7JCtPpUKjAkeqMWcygA", callContext.id);
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("2RVlWxf02UGcRV38GnsBnw:8QNUOThpnUaT8kWextkFPw", callContext.id);
}

};
var controller = CommonPluginController.default;
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetUserAgent$gettingUAJSResult", [{
name: "UserAgent",
attrName: "userAgentOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetUserAgent$outVars", [{
name: "UserAgent",
attrName: "userAgentOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CommonPluginController.default.clientActionProxies.getUserAgent$Action = function () {
return controller.executeActionInsideJSNode(CommonPluginController.default.getUserAgent$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UserAgent: OS.DataConversion.JSNodeParamConverter.to(actionResults.userAgentOut, OS.Types.Text)
};
});
};
});
define("CommonPlugin.controller$GetUserAgent.GettingUAJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.UserAgent = navigator.userAgent;
};
});

define("CommonPlugin.controller$IsCordovaDefined", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$IsCordovaDefined.CheckCordovaJS", "CommonPlugin.controller$ConsoleLog"], function (exports, OutSystems, CommonPluginModel, CommonPluginController, CommonPlugin_controller_IsCordovaDefined_CheckCordovaJS) {
var OS = OutSystems.Internal;
CommonPluginController.default.isCordovaDefined$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkCordovaJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CommonPlugin.IsCordovaDefined$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkCordovaJSResult = checkCordovaJSResult;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("2RVlWxf02UGcRV38GnsBnw:rskHrrrsh0OmpgOW+lYShg:/ClientActionFlows.rskHrrrsh0OmpgOW+lYShg:YtM_I6LIptbHjkieZB4Esg", "CommonPlugin", "IsCordovaDefined", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:87k72IxmkkeboH_8IOZkGQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:iwNlpL8UE0+bhXiDl1Ba0w", callContext.id);
checkCordovaJSResult.value = controller.safeExecuteJSNode(CommonPlugin_controller_IsCordovaDefined_CheckCordovaJS, "CheckCordova", "IsCordovaDefined", {
CordovaLoaded: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CommonPlugin.IsCordovaDefined$checkCordovaJSResult"))();
jsNodeResult.cordovaLoadedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CordovaLoaded, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:6aTkzKt7WEapdqJMr22gnw", callContext.id);
// IsLoaded = CheckCordova.CordovaLoaded
outVars.value.isLoadedOut = checkCordovaJSResult.value.cordovaLoadedOut;
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:+OcFCFWdbkK_7I5JsTPsAQ", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("IsCordovaDefined.IsCordovaDefined", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:aO7LrRjX+kKCQqC1v4dS6w", callContext.id);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:qZyLN17iC0OdMhS87Rcj9w", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("CommonPlugins", allExceptionsVar.value.exceptionMessageAttr, callContext);
OutSystemsDebugger.handleBreakpoint("2RVlWxf02UGcRV38GnsBnw:4H_9VTtTjkyiYsDC8tE9fw", callContext.id);
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("2RVlWxf02UGcRV38GnsBnw:rskHrrrsh0OmpgOW+lYShg", callContext.id);
}

};
var controller = CommonPluginController.default;
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.IsCordovaDefined$checkCordovaJSResult", [{
name: "CordovaLoaded",
attrName: "cordovaLoadedOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.IsCordovaDefined$outVars", [{
name: "IsLoaded",
attrName: "isLoadedOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
CommonPluginController.default.clientActionProxies.isCordovaDefined$Action = function () {
return controller.executeActionInsideJSNode(CommonPluginController.default.isCordovaDefined$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsLoaded: OS.DataConversion.JSNodeParamConverter.to(actionResults.isLoadedOut, OS.Types.Boolean)
};
});
};
});
define("CommonPlugin.controller$IsCordovaDefined.CheckCordovaJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(typeof(cordova) === "undefined")
    $parameters.CordovaLoaded = false;
else
    $parameters.CordovaLoaded = true;
};
});

define("CommonPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.controller$debugger"], function (exports, OutSystems, CommonPluginModel, CommonPlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var CommonPluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return CommonPluginController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
CommonPluginController.default = new Controller();
});
define("CommonPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"4+VaUzBHZkGcKv9z8dqemQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.platformOut;
},
dataType: OS.Types.Text
},
"MachDuI2UkWeqXyvoGZWcw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"UBBb++M6WE27nb7425jocg": {
getter: function (varBag, idService) {
return varBag.runCordovaJSResult.value;
}
},
"a68I3K7WWEapyynjtli4CQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.userAgentOut;
},
dataType: OS.Types.Text
},
"DWFOFItvHki2Ay8VEDSLPA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"xIM8tYYsqEmgOmXxmLNjkA": {
getter: function (varBag, idService) {
return varBag.gettingUAJSResult.value;
}
},
"IaHxFZ9N6E6PBpsBUnBLkw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isLoadedOut;
},
dataType: OS.Types.Boolean
},
"aO7LrRjX+kKCQqC1v4dS6w": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"iwNlpL8UE0+bhXiDl1Ba0w": {
getter: function (varBag, idService) {
return varBag.checkCordovaJSResult.value;
}
},
"mx+Lvml6DESfx1zcGZbYHQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.deviceHwIdOut;
},
dataType: OS.Types.Text
},
"HUHDvTAbX0yTHPJsmvdhZA": {
getter: function (varBag, idService) {
return varBag.getDeviceHwIdJSResult.value;
}
},
"nI+W_07mW0evSvbAZpInLw": {
getter: function (varBag, idService) {
return varBag.vars.value.componentInLocal;
},
dataType: OS.Types.Text
},
"c0pMcG1yE0mPrusvcHKtYQ": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.Types.Text
},
"Ee_cdoYt3Uaogs7YLizQnQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"e6Wkj6QP4U+WuK+gQKuLVg": {
getter: function (varBag, idService) {
return varBag.writeToConsoleJSResult.value;
}
},
"_1xnc0gJ_EKrn0W+ImRJug": {
getter: function (varBag, idService) {
return varBag.outVars.value.operatingSystemsIdOut;
},
dataType: OS.Types.Text
},
"xPlcJ7U120Gi+s1A77uCBw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"DvmB0iP02UW8PwntHq+08A": {
getter: function (varBag, idService) {
return varBag.getPlatformVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
