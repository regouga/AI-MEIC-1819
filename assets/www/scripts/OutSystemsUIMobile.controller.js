define("OutSystemsUIMobile.controller$CarouselGoTo", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$CarouselGoTo.CallGoToActionJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_CarouselGoTo_CallGoToActionJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.carouselGoTo$Action = function (widgetIdIn, targetIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.CarouselGoTo$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.targetInLocal = targetIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Z5AAPK6NwEC74YLVRyAFLQ:/ClientActionFlows.Z5AAPK6NwEC74YLVRyAFLQ:OLLh9VxqqlPbZNmF9oz6tg", "OutSystemsUIMobile", "CarouselGoTo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:g8Q4KSOw+kesTnGRUDg74Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dBRtEJ1oXUeFmuSC_CWu9Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_CarouselGoTo_CallGoToActionJS, "CallGoToAction", "CarouselGoTo", {
Target: OS.DataConversion.JSNodeParamConverter.to(vars.value.targetInLocal, OS.Types.Integer),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDXwbVp8BE+5mlkO+9_7nQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Z5AAPK6NwEC74YLVRyAFLQ", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.CarouselGoTo$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Target",
attrName: "targetInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.carouselGoTo$Action = function (widgetIdIn, targetIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
targetIn = (targetIn === undefined) ? 0 : targetIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.carouselGoTo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(targetIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$CarouselGoTo.CallGoToActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId).querySelector('.carousel-container-content').goto($parameters.Target);
};
});

define("OutSystemsUIMobile.controller$CarouselNext", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$CarouselNext.CallNextActionJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_CarouselNext_CallNextActionJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.carouselNext$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.CarouselNext$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:s3o2xkm11kWBC1DM24ANFA:/ClientActionFlows.s3o2xkm11kWBC1DM24ANFA:J3+iFY53goNOwmtAB8R8ag", "OutSystemsUIMobile", "CarouselNext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UlUeFYUFyk6CQLCV7HGwwg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:53BVu_67OUOpcv5eedIWzw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_CarouselNext_CallNextActionJS, "CallNextAction", "CarouselNext", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CfcmfBv7PE6zw+XQkz6LhQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:s3o2xkm11kWBC1DM24ANFA", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.CarouselNext$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.carouselNext$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.carouselNext$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$CarouselNext.CallNextActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId).querySelector('.carousel-container-content').next();
};
});

define("OutSystemsUIMobile.controller$CarouselPrevious", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$CarouselPrevious.CallPreviousActionJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_CarouselPrevious_CallPreviousActionJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.carouselPrevious$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.CarouselPrevious$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:CffDzLB_b06BcWvnmqj02w:/ClientActionFlows.CffDzLB_b06BcWvnmqj02w:Z3J0WloxnwtHYSwZ29NVtQ", "OutSystemsUIMobile", "CarouselPrevious", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iABzbqhH5EG01r7OLD2N+g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mfJ8xdFCcEm0t1Gi9snU+Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_CarouselPrevious_CallPreviousActionJS, "CallPreviousAction", "CarouselPrevious", {
IdCarousel: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nFHHZdm9Fkmgy91n4K5uSA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:CffDzLB_b06BcWvnmqj02w", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.CarouselPrevious$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.carouselPrevious$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.carouselPrevious$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$CarouselPrevious.CallPreviousActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.IdCarousel).querySelector('.carousel-container-content').previous();
};
});

define("OutSystemsUIMobile.controller$CarouselUpdate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$CarouselUpdate.CallUpdateActionJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_CarouselUpdate_CallUpdateActionJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.carouselUpdate$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.CarouselUpdate$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Q9gj08KLHEKuYcqlD371lQ:/ClientActionFlows.Q9gj08KLHEKuYcqlD371lQ:9s8LcKIs+rayf5SvCJR0vQ", "OutSystemsUIMobile", "CarouselUpdate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FUpJO9Gw5US7hEcadm2mpQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LrnR4YHuPEaFFAmbmSTz1Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_CarouselUpdate_CallUpdateActionJS, "CallUpdateAction", "CarouselUpdate", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PMNXmASQ7EWX0M3vuqW2uA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Q9gj08KLHEKuYcqlD371lQ", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.CarouselUpdate$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.carouselUpdate$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.carouselUpdate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$CarouselUpdate.CallUpdateActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId).querySelector('.carousel-container-content').updateCarousel();
};
});

define("OutSystemsUIMobile.controller$ConfigureOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$ConfigureOfflineDataSync.ConfigureOfflineDataSyncJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_ConfigureOfflineDataSync_ConfigureOfflineDataSyncJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.configureOfflineDataSync$Action = function (syncOnOnlineIn, syncOnResumeIn, retryOnErrorIn, retryIntervalInSecondsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.ConfigureOfflineDataSync$vars"))());
vars.value.syncOnOnlineInLocal = syncOnOnlineIn;
vars.value.syncOnResumeInLocal = syncOnResumeIn;
vars.value.retryOnErrorInLocal = retryOnErrorIn;
vars.value.retryIntervalInSecondsInLocal = retryIntervalInSecondsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:wlq1EEBDSk6XBVqBnqrN_w:/ClientActionFlows.wlq1EEBDSk6XBVqBnqrN_w:GTssLyvzPmZWPwhKS0LsMg", "OutSystemsUIMobile", "ConfigureOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dDeqycVUN0SauMDQ4RwX3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Q3ziLgpmwEiLfbtrD1nU_A", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_ConfigureOfflineDataSync_ConfigureOfflineDataSyncJS, "ConfigureOfflineDataSync", "ConfigureOfflineDataSync", {
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(vars.value.syncOnResumeInLocal, OS.Types.Boolean),
RetryIntervalInSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.retryIntervalInSecondsInLocal, OS.Types.Integer),
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(vars.value.syncOnOnlineInLocal, OS.Types.Boolean),
RetryOnError: OS.DataConversion.JSNodeParamConverter.to(vars.value.retryOnErrorInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cata8UPkrUmg_S6Y1sbHKw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:wlq1EEBDSk6XBVqBnqrN_w", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.ConfigureOfflineDataSync$vars", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnResume",
attrName: "syncOnResumeInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryOnError",
attrName: "retryOnErrorInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryIntervalInSeconds",
attrName: "retryIntervalInSecondsInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.configureOfflineDataSync$Action = function (syncOnOnlineIn, syncOnResumeIn, retryOnErrorIn, retryIntervalInSecondsIn) {
syncOnOnlineIn = (syncOnOnlineIn === undefined) ? false : syncOnOnlineIn;
syncOnResumeIn = (syncOnResumeIn === undefined) ? false : syncOnResumeIn;
retryOnErrorIn = (retryOnErrorIn === undefined) ? false : retryOnErrorIn;
retryIntervalInSecondsIn = (retryIntervalInSecondsIn === undefined) ? 0 : retryIntervalInSecondsIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.configureOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncOnOnlineIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(syncOnResumeIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(retryOnErrorIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(retryIntervalInSecondsIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$ConfigureOfflineDataSync.ConfigureOfflineDataSyncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.configure(
    $parameters.SyncOnOnline,
    $parameters.SyncOnResume,
    $parameters.RetryOnError,
    $parameters.RetryIntervalInSeconds);

};
});

define("OutSystemsUIMobile.controller$DeviceDetection", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$DeviceDetection.StatusBarOverlayJS", "OutSystemsUIMobile.controller$DeviceDetection.AndroidJS", "OutSystemsUIMobile.controller$DeviceDetection.IOSJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_DeviceDetection_StatusBarOverlayJS, OutSystemsUIMobile_controller_DeviceDetection_AndroidJS, OutSystemsUIMobile_controller_DeviceDetection_IOSJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.deviceDetection$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.DeviceDetection$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:OOQHk+EK0UyAa1lqT_YN4w:/ClientActionFlows.OOQHk+EK0UyAa1lqT_YN4w:f_ctej2K4HrVZUo5Umy6iA", "OutSystemsUIMobile", "DeviceDetection", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TteqoKGApkaHPTQdW6ZGzw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RWt+kXHuzUSxVy0cZJHDGw", callContext.id);
// If the device has a transparent status bar, applies default paddings to the required elements
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_DeviceDetection_StatusBarOverlayJS, "StatusBarOverlay", "DeviceDetection", null, function ($parameters) {
}, {}, {});
// Get User Agent
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Wa2mzxPdA0a8e0hDqn4HSw", callContext.id);
// UserAgent = ToLower
vars.value.userAgentVar = OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.getUserAgent());
// Detect Device
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ta6vx4ZVEEu2RbXqMSeC8g", callContext.id) && ((OS.BuiltinFunctions.index(vars.value.userAgentVar, "ipad", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "iphone", 0, false, false) > -1)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3ri6_EG4mkSac38Jxw9ebQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_DeviceDetection_IOSJS, "IOS", "DeviceDetection", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8RZidRamT0W1nSDxrR7HUQ", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentVar, "android", 0, false, false) > -1)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:agpOwN1zb0CaZyAJpCSfGQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_DeviceDetection_AndroidJS, "Android", "DeviceDetection", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8RZidRamT0W1nSDxrR7HUQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8RZidRamT0W1nSDxrR7HUQ", callContext.id);
}

}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:OOQHk+EK0UyAa1lqT_YN4w", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.DeviceDetection$vars", [{
name: "UserAgent",
attrName: "userAgentVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.deviceDetection$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.deviceDetection$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$DeviceDetection.StatusBarOverlayJS", [], function () {
return function ($actions, $roles, $public) {
var body = document.querySelector('body');
var statusbarHeight = body.getAttribute('data-status-bar-height');

if(statusbarHeight > 0) {
    var header = document.querySelector('.header');
    var appMenu = document.querySelector('.app-menu');
    var notification = document.querySelector('.notification');
    var sidebar = document.querySelector('.sidebar');
    var splitRightClose = document.querySelector('.split-right-close');
    var topBarLightbox = document.querySelector('.pswp__top-bar');
    var headerRight = document.querySelector('.header-right .search-input');
    var loginScreen = document.querySelector('.login-screen');
    var splashScreen = document.querySelector('.splash-screen');
    
    if(header) {
        header.style.paddingTop = statusbarHeight + "px";    
    }
    
    if(appMenu) {
        appMenu.style.paddingTop = statusbarHeight + "px";    
    }
    
    if(notification) {
        notification.style.paddingTop = (parseInt(statusbarHeight) + 20) + "px";    
    }
    
    if(sidebar) {
        sidebar.style.paddingTop = statusbarHeight + "px";    
    }
    
    if(splitRightClose) {
        splitRightClose.style.top = (parseInt(statusbarHeight) + 6) + "px";  
    }
    
    if(topBarLightbox) {
        topBarLightbox.style.top = statusbarHeight + "px"; 
    }
    
    if(headerRight) {
        headerRight.style.paddingTop = (parseInt(statusbarHeight) + 5) + "px";     
    }
    
    if(loginScreen) {
        loginScreen.style.paddingTop = statusbarHeight + "px";     
    }
    
    if(splashScreen) {
        splashScreen.style.paddingTop = statusbarHeight + "px";     
    }
}
};
});
define("OutSystemsUIMobile.controller$DeviceDetection.AndroidJS", [], function () {
return function ($actions, $roles, $public) {
var body = document.querySelector('body');

body.classList.add('android');
};
});
define("OutSystemsUIMobile.controller$DeviceDetection.IOSJS", [], function () {
return function ($actions, $roles, $public) {
var body = document.querySelector("body");

// detect iPhoneX
function detectIphoneX() {
    // devices list and their screen sizes
    var devices = [
        {width: 1125, height: 2436, description: "iphone x/xs"},
        {width: 828, height: 1792, description: "iphone xr"},
        {width: 750, height: 1624, description: "iphone xr scaled"},
        {width: 1242, height: 2688, description: "iphone xs max"}
    ];
    
    // get the device pixel ratio
    var ratio = window.devicePixelRatio || 1;

    // get the device screen dimensions
    var screen = {
        width : window.screen.width * ratio,
        height : window.screen.height * ratio
    };

    // check if the screen size matches any of the devices in the list
    for(var i = 0; i < devices.length; i++) {
	    if(devices[i].width === screen.width && devices[i].height === screen.height) {
            window.iphoneX = true;
	    }
    }
    
    if(window.iphoneX) {
        // get orientation and register an event to update it
        detectOrientation();
        window.addEventListener("orientationchange", function() {
            setTimeout(detectOrientation, 500);
        });
    }
}

// update orientation
function detectOrientation() {
    // store the notch position value
    var notchPosition;
    
    if("orientation" in window) {
        // mobile browers
        if (window.orientation == 90) {
            notchPosition = "left";
        } else if (window.orientation == -90) {
            notchPosition = "right";
        } else {
            notchPosition = "up";
        }
    } else if ("orientation" in window.screen) {
        // webkit browsers
        if( window.screen.orientation.type === "landscape-primary") {
            notchPosition = "left";
        } else if( window.screen.orientation.type === "landscape-secondary") {
            notchPosition = "right";
        } else {
            notchPosition = "up";
        }
    } else if("mozOrientation" in window.screen) {
        // firefox browsers
        if( window.screen.mozOrientation === "landscape-primary") {
            notchPosition = "left";
        } else if( window.screen.mozOrientation === "landscape-secondary") {
            notchPosition = "right";
        } else {
            notchPosition = "up";
        }
    }
    
    window.notch = notchPosition;
    updateClasses();
}

function updateClasses() {
    // set the iphonex class on the body
    body.classList.add("iphonex");
    
    // override tablet detection on landscape mode
    if (window.notch == "left" || window.notch == "right") {
        body.classList.remove("tablet");
        body.classList.add("phone");
    }
}

if(!body.classList.contains("ios")) {
    // add iOS class
    body.classList.add("ios");

    // detect iPhoneX
    detectIphoneX();

    // apply the iOS inputs fix for webviews
    osui.FixInputs();
}
};
});

define("OutSystemsUIMobile.controller$DisableCarouselSwipe", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$DisableCarouselSwipe.AddClassNoSwipeJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_DisableCarouselSwipe_AddClassNoSwipeJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.disableCarouselSwipe$Action = function (carouselIDIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.DisableCarouselSwipe$vars"))());
vars.value.carouselIDInLocal = carouselIDIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:SAFhfi45BU6VeqYFazfRRg:/ClientActionFlows.SAFhfi45BU6VeqYFazfRRg:xg+_vjYiC+hBtOPTKaEjcA", "OutSystemsUIMobile", "DisableCarouselSwipe", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:X0580Gn280imj6vUP3PEwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EA76gLu_y0WEapiQoFodxg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_DisableCarouselSwipe_AddClassNoSwipeJS, "AddClassNoSwipe", "DisableCarouselSwipe", {
CarouselID: OS.DataConversion.JSNodeParamConverter.to(vars.value.carouselIDInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PqihoXYUMkKbUMgD_UvU5w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:SAFhfi45BU6VeqYFazfRRg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.DisableCarouselSwipe$vars", [{
name: "CarouselID",
attrName: "carouselIDInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.disableCarouselSwipe$Action = function (carouselIDIn) {
carouselIDIn = (carouselIDIn === undefined) ? "" : carouselIDIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.disableCarouselSwipe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(carouselIDIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$DisableCarouselSwipe.AddClassNoSwipeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.CarouselID).querySelector('.carousel');

if(elem) {
    elem.classList.add('no-swipe');
}
};
});

define("OutSystemsUIMobile.controller$DisableTabsSwipe", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$DisableTabsSwipe.AddClassNoSwipeJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_DisableTabsSwipe_AddClassNoSwipeJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.disableTabsSwipe$Action = function (tabIDIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.DisableTabsSwipe$vars"))());
vars.value.tabIDInLocal = tabIDIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:8A4PWWqEo0eHrnR0AR3i9Q:/ClientActionFlows.8A4PWWqEo0eHrnR0AR3i9Q:1w+zs84OlzidJB6ZP8u1RQ", "OutSystemsUIMobile", "DisableTabsSwipe", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GtM0GXiS1UG1DaAH_MoTaQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:B3wXWZq7aUWYEIVdFUX_KA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_DisableTabsSwipe_AddClassNoSwipeJS, "AddClassNoSwipe", "DisableTabsSwipe", {
TabID: OS.DataConversion.JSNodeParamConverter.to(vars.value.tabIDInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2SYl0nbsbUifUcGePGHZQQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:8A4PWWqEo0eHrnR0AR3i9Q", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.DisableTabsSwipe$vars", [{
name: "TabID",
attrName: "tabIDInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.disableTabsSwipe$Action = function (tabIDIn) {
tabIDIn = (tabIDIn === undefined) ? "" : tabIDIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.disableTabsSwipe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tabIDIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$DisableTabsSwipe.AddClassNoSwipeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.TabID).querySelector('.tabs');

if(elem) {
    elem.classList.add('no-swipe');
}
};
});

define("OutSystemsUIMobile.controller$EndOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$EndOfflineDataSync.TriggerSyncCompleteEventJS", "OutSystemsUIMobile.controller$EndOfflineDataSync.TriggerSyncErrorEventJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_EndOfflineDataSync_TriggerSyncCompleteEventJS, OutSystemsUIMobile_controller_EndOfflineDataSync_TriggerSyncErrorEventJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.endOfflineDataSync$Action = function (hasErrorIn, errorMessageIn, allowRetryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.EndOfflineDataSync$vars"))());
vars.value.hasErrorInLocal = hasErrorIn;
vars.value.errorMessageInLocal = errorMessageIn;
vars.value.allowRetryInLocal = allowRetryIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:AB+048wZeESjgZV4xG1UYg:/ClientActionFlows.AB+048wZeESjgZV4xG1UYg:Wv26r+c8uLli68t4Heqvvw", "OutSystemsUIMobile", "EndOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vEmEoYJ_GUeCgNb_hSa5lQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ncGVGJ0owEmKLlIy4BaxiQ", callContext.id) && vars.value.hasErrorInLocal)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iIqr4yohpki+TJEMODfuzQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_EndOfflineDataSync_TriggerSyncErrorEventJS, "TriggerSyncErrorEvent", "EndOfflineDataSync", {
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(vars.value.errorMessageInLocal, OS.Types.Text),
AllowRetry: OS.DataConversion.JSNodeParamConverter.to(vars.value.allowRetryInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:b5IFu_KqQUCcrmTBRopVKw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v03QPIY87ECIHTsz5R0JNA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_EndOfflineDataSync_TriggerSyncCompleteEventJS, "TriggerSyncCompleteEvent", "EndOfflineDataSync", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:b5IFu_KqQUCcrmTBRopVKw", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:AB+048wZeESjgZV4xG1UYg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.EndOfflineDataSync$vars", [{
name: "HasError",
attrName: "hasErrorInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AllowRetry",
attrName: "allowRetryInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.endOfflineDataSync$Action = function (hasErrorIn, errorMessageIn, allowRetryIn) {
hasErrorIn = (hasErrorIn === undefined) ? false : hasErrorIn;
errorMessageIn = (errorMessageIn === undefined) ? "" : errorMessageIn;
allowRetryIn = (allowRetryIn === undefined) ? false : allowRetryIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.endOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hasErrorIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(allowRetryIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$EndOfflineDataSync.TriggerSyncCompleteEventJS", [], function () {
return function ($actions, $roles, $public) {
window.offlineDataSync.triggerSyncCompleteEvent();

};
});
define("OutSystemsUIMobile.controller$EndOfflineDataSync.TriggerSyncErrorEventJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.triggerSyncErrorEvent($parameters.ErrorMessage, $parameters.AllowRetry);

};
});

define("OutSystemsUIMobile.controller$GetDeviceOrientation", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$GetDeviceOrientation.CheckDeviceJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_GetDeviceOrientation_CheckDeviceJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.getDeviceOrientation$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkDeviceJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.GetDeviceOrientation$outVars"))());
varBag.callContext = callContext;
varBag.checkDeviceJSResult = checkDeviceJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:tGVz89UL+E+S9m21JwQD0w:/ClientActionFlows.tGVz89UL+E+S9m21JwQD0w:SCi++evuxn1bczgoztjvdA", "OutSystemsUIMobile", "GetDeviceOrientation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WlXLDSxzeE2HWrZvOK8R9A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gbjVoiko4UGtMqk2GHLr1g", callContext.id);
checkDeviceJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_controller_GetDeviceOrientation_CheckDeviceJS, "CheckDevice", "GetDeviceOrientation", {
Orientation: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.GetDeviceOrientation$checkDeviceJSResult"))();
jsNodeResult.orientationOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Orientation, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5mf9zMosH0iwQ_WWqvwkug", callContext.id);
// Orientation = CheckDevice.Orientation
outVars.value.orientationOut = checkDeviceJSResult.value.orientationOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eJeV2aTII0yt5v5wbvM3kg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:tGVz89UL+E+S9m21JwQD0w", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.GetDeviceOrientation$checkDeviceJSResult", [{
name: "Orientation",
attrName: "orientationOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.GetDeviceOrientation$outVars", [{
name: "Orientation",
attrName: "orientationOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.getDeviceOrientation$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.getDeviceOrientation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Orientation: OS.DataConversion.JSNodeParamConverter.to(actionResults.orientationOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUIMobile.controller$GetDeviceOrientation.CheckDeviceJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var classList = document.body.classList;

if(classList.contains("landscape")) {
    $parameters.Orientation = "landscape";
} else if(classList.contains("portrait")) {
    $parameters.Orientation = "portrait";
}
};
});

define("OutSystemsUIMobile.controller$GetDeviceType", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$GetDeviceType.CheckDeviceJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_GetDeviceType_CheckDeviceJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.getDeviceType$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkDeviceJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.GetDeviceType$outVars"))());
varBag.callContext = callContext;
varBag.checkDeviceJSResult = checkDeviceJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:V8kn6TfTuUWAmMWp18n+Vw:/ClientActionFlows.V8kn6TfTuUWAmMWp18n+Vw:aciqsMn0c++Pvt8aerBaDQ", "OutSystemsUIMobile", "GetDeviceType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZvhAJGrMGkeKAvnAYcWXlQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N9WTj9dLUkuBdvhGabzneA", callContext.id);
checkDeviceJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_controller_GetDeviceType_CheckDeviceJS, "CheckDevice", "GetDeviceType", {
Device: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.GetDeviceType$checkDeviceJSResult"))();
jsNodeResult.deviceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Device, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Z+YNE6HFAEC_aV40cAT4ZA", callContext.id);
// Device = CheckDevice.Device
outVars.value.deviceOut = checkDeviceJSResult.value.deviceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ivLLSyFVj0uFhq3EYv2bFg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:V8kn6TfTuUWAmMWp18n+Vw", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.GetDeviceType$checkDeviceJSResult", [{
name: "Device",
attrName: "deviceOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.GetDeviceType$outVars", [{
name: "Device",
attrName: "deviceOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.getDeviceType$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.getDeviceType$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Device: OS.DataConversion.JSNodeParamConverter.to(actionResults.deviceOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUIMobile.controller$GetDeviceType.CheckDeviceJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var classList = document.body.classList;

if(classList.contains("phone")) {
    $parameters.Device = "phone";
} else if(classList.contains("tablet")) {
    $parameters.Device = "tablet";
}
};
});

define("OutSystemsUIMobile.controller$GetNetworkStatus", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$GetNetworkType"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.getNetworkStatus$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getNetworkTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.GetNetworkStatus$outVars"))());
varBag.callContext = callContext;
varBag.getNetworkTypeVar = getNetworkTypeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Jy8FxeT960+JHkWnvjJmrA:/ClientActionFlows.Jy8FxeT960+JHkWnvjJmrA:gTuvmUL+3cbcFHH6LKRVTA", "OutSystemsUIMobile", "GetNetworkStatus", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xI6lj4cJrkycwMKaYxJ9qg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TzWCSMV5Y0mqa6xVBaVkbw", callContext.id);
// Execute Action: GetNetworkType
getNetworkTypeVar.value = OutSystemsUIMobileController.default.getNetworkType$Action(callContext);

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EVe_1N6TwkOPoX_6BvPMwg", callContext.id);
// IsOnline = GetNetworkType.NetworkType <> "none"
outVars.value.isOnlineOut = ((getNetworkTypeVar.value.networkTypeOut) !== ("none"));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DxBwnwxWYkGRFq2qdQoUeQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Jy8FxeT960+JHkWnvjJmrA", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.GetNetworkStatus$outVars", [{
name: "IsOnline",
attrName: "isOnlineOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.getNetworkStatus$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.getNetworkStatus$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsOnline: OS.DataConversion.JSNodeParamConverter.to(actionResults.isOnlineOut, OS.Types.Boolean)
};
});
};
});

define("OutSystemsUIMobile.controller$GetNetworkType", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$GetNetworkType.CheckNetworkTypeJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_GetNetworkType_CheckNetworkTypeJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.getNetworkType$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkNetworkTypeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.GetNetworkType$outVars"))());
varBag.callContext = callContext;
varBag.checkNetworkTypeJSResult = checkNetworkTypeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+ZNpq6EuMUqlKdDF3430RQ:/ClientActionFlows.+ZNpq6EuMUqlKdDF3430RQ:TvsdHN_7gg1NKUjk3fCquQ", "OutSystemsUIMobile", "GetNetworkType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cJs2O+6qmEa1MRh3D3tRSg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DdnOaND2fkCpllA7GTAiCg", callContext.id);
checkNetworkTypeJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_controller_GetNetworkType_CheckNetworkTypeJS, "CheckNetworkType", "GetNetworkType", {
NetworkType: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.GetNetworkType$checkNetworkTypeJSResult"))();
jsNodeResult.networkTypeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.NetworkType, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5ClbImcBE0CofTng9C3dZg", callContext.id);
// NetworkType = CheckNetworkType.NetworkType
outVars.value.networkTypeOut = checkNetworkTypeJSResult.value.networkTypeOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1d7KSzcSFUmHBadz77dl9Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+ZNpq6EuMUqlKdDF3430RQ", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.GetNetworkType$checkNetworkTypeJSResult", [{
name: "NetworkType",
attrName: "networkTypeOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.GetNetworkType$outVars", [{
name: "NetworkType",
attrName: "networkTypeOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.getNetworkType$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.getNetworkType$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
NetworkType: OS.DataConversion.JSNodeParamConverter.to(actionResults.networkTypeOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUIMobile.controller$GetNetworkType.CheckNetworkTypeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (typeof navigator.connection !== "undefined") {
    //In a mobile device
    if(typeof navigator.connection.type !== "undefined"){
        $parameters.NetworkType = navigator.connection.type;
    } else {
        //In a web browser
        $parameters.NetworkType = "unknown"; //TO-DO: Improve this!!!
    }
} else {
    //In a web browser
    $parameters.NetworkType = "unknown"; //TO-DO: Improve this!!!
}
};
});

define("OutSystemsUIMobile.controller$HideHeader", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$HideHeader.HideOnScrollJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_HideHeader_HideOnScrollJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.hideHeader$Action = function (hideHeaderIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.HideHeader$vars"))());
vars.value.hideHeaderInLocal = hideHeaderIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yWN3I3mUa0+a7mgU7VdRyw:/ClientActionFlows.yWN3I3mUa0+a7mgU7VdRyw:vNzz0RmiEKZWbO63qloD+w", "OutSystemsUIMobile", "HideHeader", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RcQh4R4oTkimx1nMetHWXw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3JmP0Rp+3Uuc_SKPk_Ui0Q", callContext.id) && vars.value.hideHeaderInLocal)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YIoLAMN9y0C6r84F2nZDLg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_HideHeader_HideOnScrollJS, "HideOnScroll", "HideHeader", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kUv59cqJ6Uyzd_kOmdu1RA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sjl7Mgg+Ck2k3OuMhnkwFQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yWN3I3mUa0+a7mgU7VdRyw", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.HideHeader$vars", [{
name: "HideHeader",
attrName: "hideHeaderInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.hideHeader$Action = function (hideHeaderIn) {
hideHeaderIn = (hideHeaderIn === undefined) ? false : hideHeaderIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.hideHeader$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hideHeaderIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$HideHeader.HideOnScrollJS", [], function () {
return function ($actions, $roles, $public) {
// window.performance.timing is deprecated but the technology that MDN suggest to use is stil experimental and does not work on IE and Safari. Please visit the following link for context: 
// https://developer.mozilla.org/en-US/docs/Web/API/Performance/timing
var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;

setTimeout(function(){
    var hideOnScroll = new osui.HideOnScroll();
    hideOnScroll.init();
}, loadTime);
};
});

define("OutSystemsUIMobile.controller$IsPhone", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$GetDeviceType"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.isPhone$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.IsPhone$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceTypeVar = getDeviceTypeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yHQFd4E_hEmOMh7uK+5Fyg:/ClientActionFlows.yHQFd4E_hEmOMh7uK+5Fyg:ZYnpcJwUeFEH+GTRtDe1PQ", "OutSystemsUIMobile", "IsPhone", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sqTjqT20_kKX0XFd6smU8g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BX3uLVf1k0Wr5zgao8m4ow", callContext.id);
// Execute Action: GetDeviceType
getDeviceTypeVar.value = OutSystemsUIMobileController.default.getDeviceType$Action(callContext);

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sI5YvXpAx0yzCJClQinRcA", callContext.id);
// IsPhone = GetDeviceType.Device = "phone"
outVars.value.isPhoneOut = (getDeviceTypeVar.value.deviceOut === "phone");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HiJh7DVYkUquZoFhy0NigQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yHQFd4E_hEmOMh7uK+5Fyg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.IsPhone$outVars", [{
name: "IsPhone",
attrName: "isPhoneOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.isPhone$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.isPhone$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsPhone: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPhoneOut, OS.Types.Boolean)
};
});
};
});

define("OutSystemsUIMobile.controller$IsTablet", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$GetDeviceType"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.isTablet$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.IsTablet$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceTypeVar = getDeviceTypeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:eSfw9qKoGkSe9uxu_d4bSg:/ClientActionFlows.eSfw9qKoGkSe9uxu_d4bSg:2kD5Zyge3FmV_wGXHf_0NA", "OutSystemsUIMobile", "IsTablet", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AoelbxLQKUqZjyK10lGysw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ioZf772KpUSfGBw8JlIMDw", callContext.id);
// Execute Action: GetDeviceType
getDeviceTypeVar.value = OutSystemsUIMobileController.default.getDeviceType$Action(callContext);

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PbdePxtRWE68PTVq_rpzaw", callContext.id);
// IsTablet = GetDeviceType.Device = "tablet"
outVars.value.isTabletOut = (getDeviceTypeVar.value.deviceOut === "tablet");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JWCYa7HVNEGLLv_HARuYcQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:eSfw9qKoGkSe9uxu_d4bSg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.IsTablet$outVars", [{
name: "IsTablet",
attrName: "isTabletOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.isTablet$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.isTablet$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsTablet: OS.DataConversion.JSNodeParamConverter.to(actionResults.isTabletOut, OS.Types.Boolean)
};
});
};
});

define("OutSystemsUIMobile.controller$LayoutReady", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$PreviewInDevices", "OutSystemsUIMobile.controller$DeviceDetection", "OutSystemsUIMobile.controller$HideHeader"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.layoutReady$Action = function (hideHeaderOnScrollIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.LayoutReady$vars"))());
vars.value.hideHeaderOnScrollInLocal = hideHeaderOnScrollIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:gMQKaTC8KUWmUEZZexJTUA:/ClientActionFlows.gMQKaTC8KUWmUEZZexJTUA:p9f2VtlGKfv9AF3qAiy0OQ", "OutSystemsUIMobile", "LayoutReady", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nv6CGv91ZEC553LJXqmGZg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:83Zgi17Bm0O2SGK7j15OtA", callContext.id);
// Execute Action: DeviceDetection
OutSystemsUIMobileController.default.deviceDetection$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:x5EIg0T9LkCZ99G_0kP64w", callContext.id);
// Execute Action: PreviewInDevices
OutSystemsUIMobileController.default.previewInDevices$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E7sEqVzT0ECAYxEv56NPlw", callContext.id);
// Execute Action: HideHeader
OutSystemsUIMobileController.default.hideHeader$Action(vars.value.hideHeaderOnScrollInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xz_lS09TxkawPtD9+erq_A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:gMQKaTC8KUWmUEZZexJTUA", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.LayoutReady$vars", [{
name: "HideHeaderOnScroll",
attrName: "hideHeaderOnScrollInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.layoutReady$Action = function (hideHeaderOnScrollIn) {
hideHeaderOnScrollIn = (hideHeaderOnScrollIn === undefined) ? false : hideHeaderOnScrollIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.layoutReady$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hideHeaderOnScrollIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsUIMobile.controller$ListItemHint", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$ListItemHint.ListItemAnimateJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_ListItemHint_ListItemAnimateJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.listItemHint$Action = function (listIdIn, hasLeftActionIn, hasRightActionIn, animationTimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.ListItemHint$vars"))());
vars.value.listIdInLocal = listIdIn;
vars.value.hasLeftActionInLocal = hasLeftActionIn;
vars.value.hasRightActionInLocal = hasRightActionIn;
vars.value.animationTimeInLocal = animationTimeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zInTb5waXk6r33Wt42NZGg:/ClientActionFlows.zInTb5waXk6r33Wt42NZGg:gMnw0BRFMaqUMGagmo0l8w", "OutSystemsUIMobile", "ListItemHint", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TqkjCJNYoUiv3yTkFD6Q_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HI7FczBGrEKwVfINKPZ6vA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_ListItemHint_ListItemAnimateJS, "ListItemAnimate", "ListItemHint", {
AnimationTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.animationTimeInLocal, OS.Types.Decimal),
ListId: OS.DataConversion.JSNodeParamConverter.to(vars.value.listIdInLocal, OS.Types.Text),
HasRightAction: OS.DataConversion.JSNodeParamConverter.to(vars.value.hasRightActionInLocal, OS.Types.Boolean),
HasLeftAction: OS.DataConversion.JSNodeParamConverter.to(vars.value.hasLeftActionInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:R5jQfKdCSkuzzP2KGVEAiA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zInTb5waXk6r33Wt42NZGg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.ListItemHint$vars", [{
name: "ListId",
attrName: "listIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "HasLeftAction",
attrName: "hasLeftActionInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HasRightAction",
attrName: "hasRightActionInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AnimationTime",
attrName: "animationTimeInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.listItemHint$Action = function (listIdIn, hasLeftActionIn, hasRightActionIn, animationTimeIn) {
listIdIn = (listIdIn === undefined) ? "" : listIdIn;
hasLeftActionIn = (hasLeftActionIn === undefined) ? false : hasLeftActionIn;
hasRightActionIn = (hasRightActionIn === undefined) ? false : hasRightActionIn;
animationTimeIn = (animationTimeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : animationTimeIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.listItemHint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(listIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(hasLeftActionIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(hasRightActionIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(animationTimeIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$ListItemHint.ListItemAnimateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var timeoutVar;
var timeAnimation = $parameters.AnimationTime / 6;

var waitListRender = function() {
    listEl = document.querySelector('#' + $parameters.ListId);

    if(!listEl.classList.contains('list-loading')) { 
        listAnimateItems();
        clearTimeout(timeoutVar);
    } else {
        timeoutVar = setTimeout(waitListRender, 50);
    }
};

var listAnimateItems = function() {
    setTimeout(function(){
        listElement = document.getElementById($parameters.ListId).childNodes[1];
        listItemContentLeft = listElement.querySelector('.active-screen .list-item-left-actions');
        listItemContentRight = listElement.querySelector('.active-screen .list-item-right-actions');
        
        listElement.style.pointerEvents = 'none';
        
        if($parameters.HasLeftAction && $parameters.HasRightAction || $parameters.HasLeftAction) {
            listItemContentLeft.classList.add('has-content-animation');
            listItemContentLeft.setAttribute('style', 'width:75px; transition: all ' + timeAnimation + 'ms !important;');
            
            setTimeout(function(){
                listItemContentLeft.style.width = '';
                
                listItemContentLeft.addEventListener("transitionend", function(event) {
                    listItemContentLeft.classList.remove('has-content-animation');
                    listItemContentLeft.removeAttribute('style');
                    listElement.style.pointerEvents = '';
                }, false);
                
            },timeAnimation * 3);
            
        } else if($parameters.HasRightAction) {
            listItemContentRight.classList.add('has-content-animation-right');
            listItemContentRight.setAttribute('style', 'width:75px; transition: all ' + timeAnimation + 'ms !important; height: ' + listElement.offsetHeight + 'px;');
            
            setTimeout(function(){
                listItemContentRight.style.width = '';
                
                listItemContentRight.addEventListener("transitionend", function(event) {
                    listItemContentRight.classList.remove('has-content-animation-right');
                    listItemContentRight.removeAttribute('style');
                    listElement.style.pointerEvents = '';
                }, false);

            }, timeAnimation * 3);
        }    
    },timeAnimation); // waiting for screen transition ends
};

waitListRender();

};
});

define("OutSystemsUIMobile.controller$MenuHide", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$MenuHide.ToggleLayoutClassJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_MenuHide_ToggleLayoutClassJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.menuHide$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:rTUt1ZeC60SXXTbA17bXvg:/ClientActionFlows.rTUt1ZeC60SXXTbA17bXvg:9wus3R2NT4E2dl0Wq_9FyA", "OutSystemsUIMobile", "MenuHide", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GDX+rV1O5kq12XItQlSn0Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9md9YTHjZkiZZN3suuWnkg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_MenuHide_ToggleLayoutClassJS, "ToggleLayoutClass", "MenuHide", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MHbbMoVcvUqcZ22JkcaTVA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:rTUt1ZeC60SXXTbA17bXvg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.clientActionProxies.menuHide$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.menuHide$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$MenuHide.ToggleLayoutClassJS", [], function () {
return function ($actions, $roles, $public) {
var menu = document.querySelector('.menu');
var appMenu = document.querySelector('.app-menu-container');
var menuOverlay = document.querySelector('.menu-background');

menu.classList.remove('menu--visible');

 if(menuOverlay) {
        menuOverlay.style.opacity = "";
}

appMenu.style.transform =  "";
appMenu.style.webkitTransform =  "";

function OnTransitionEnd() {
    menu.classList.remove('menu--animatable');
    
    menu.removeEventListener("transitionend", OnTransitionEnd);
}

menu.addEventListener("transitionend", OnTransitionEnd, false);
};
});

define("OutSystemsUIMobile.controller$MenuShow", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$MenuShow.ToggleLayoutClassJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_MenuShow_ToggleLayoutClassJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.menuShow$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:kaZY_xZ0Q0WkzEXP5e61QQ:/ClientActionFlows.kaZY_xZ0Q0WkzEXP5e61QQ:whjCi4Co3B26RD81JWzqZQ", "OutSystemsUIMobile", "MenuShow", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1F_gKW0w3kiU1fVedwTQPA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+p4JrADMgEuyMGCRVuSHCA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_MenuShow_ToggleLayoutClassJS, "ToggleLayoutClass", "MenuShow", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tLfQai9OfkS9OKvWPJfK5w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:kaZY_xZ0Q0WkzEXP5e61QQ", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.clientActionProxies.menuShow$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.menuShow$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$MenuShow.ToggleLayoutClassJS", [], function () {
return function ($actions, $roles, $public) {
var myMenu = document.querySelector(".menu");

myMenu.classList.add('menu--visible');
myMenu.classList.add('menu--animatable');
};
});

define("OutSystemsUIMobile.controller$MoveElement", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$MoveElement.MoveElementJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_MoveElement_MoveElementJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.moveElement$Action = function (elementIn, targetIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.MoveElement$vars"))());
vars.value.elementInLocal = elementIn;
vars.value.targetInLocal = targetIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:fKauCzBE8E+Jnb0QL5gRGQ:/ClientActionFlows.fKauCzBE8E+Jnb0QL5gRGQ:ggxrPrnn7zaODAlE+TXLgw", "OutSystemsUIMobile", "MoveElement", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:X4j8W89180G23LxsRYkLpA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ys785lY_qE6ziCYEBGOpgw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_MoveElement_MoveElementJS, "MoveElement", "MoveElement", {
Target: OS.DataConversion.JSNodeParamConverter.to(vars.value.targetInLocal, OS.Types.Object),
Element: OS.DataConversion.JSNodeParamConverter.to(vars.value.elementInLocal, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oolQX8C0XUGcbQqdZ6H8Hg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:fKauCzBE8E+Jnb0QL5gRGQ", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.MoveElement$vars", [{
name: "Element",
attrName: "elementInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}, {
name: "Target",
attrName: "targetInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.moveElement$Action = function (elementIn, targetIn) {
elementIn = (elementIn === undefined) ? null : elementIn;
targetIn = (targetIn === undefined) ? null : targetIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.moveElement$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(elementIn, OS.Types.Object), OS.DataConversion.JSNodeParamConverter.from(targetIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$MoveElement.MoveElementJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Target && $parameters.Element) {
    var screenEl = document.getElementById($parameters.Element);
    var element = document.querySelector($parameters.Target);
    
    if(screenEl && element) {
        element.appendChild(screenEl);
    }
}
};
});

define("OutSystemsUIMobile.controller$PreviewInDevices", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$PreviewInDevices.DetectPreviewInDevicesJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_PreviewInDevices_DetectPreviewInDevicesJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.previewInDevices$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.PreviewInDevices$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:NbOckAGFXESom8tE91RycA:/ClientActionFlows.NbOckAGFXESom8tE91RycA:OHMRloJebIQItnUk6nbIJQ", "OutSystemsUIMobile", "PreviewInDevices", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sUoEZhrvbEuF6HCvCEDvVQ", callContext.id);
// iPhoneX Preview CSS
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pXgbImTph0amgXBBKeCMoA", callContext.id);
// PreviewCSS = "/* iPhoneX Preview in Devices */
//
//.iphonex .bottom-bar-wrapper {    
//    padding-bottom: 5px;    
//}
//
//.iphonex .action-sheet {
//    padding-bottom: 5px; 
//}
//
//.iphonex .screen > .floating-actions .floating-actions-icon {    
//    margin-bottom: 35px; 
//}
//
///* portrait only */
//.iphonex.portrait .header,
//.iphonex.portrait .notification {
//    padding-top: 35px;
//}
//
//.iphonex.portrait .app-menu,
//.iphonex.portrait .sidebar {
//    padding-top: 35px;
//    padding-bottom: 5px;
//}
//
//.iphonex.portrait .split-right-close {
//    top: 41px;
//}
//
//.iphonex.portrait .header-right .search-input {
//    padding-top: 40px;
//}
//
//.iphonex.portrait .header-right .search-input:after {
//    top: 50px; 
//}
//
//.iphonex.portrait .feedback-message {
//    padding-top: 45px;
//}
//
///* landscape */
//.iphonex.landscape .app-menu,
//.iphonex.landscape .sidebar {
//    padding-bottom: 5px;
//}
//
//.iphonex.landscape .app-menu-links {
//    padding-left: 35px; 
//}
//
//.iphonex.landscape .header,
//.iphonex.landscape .main-content,
//.iphonex.landscape .bottom-bar-wrapper {
//    padding-left: 35px;
//    padding-right: 35px;
//}"
vars.value.previewCSSVar = "/* iPhoneX Preview in Devices */\r\n\r\n.iphonex .bottom-bar-wrapper {    \r\n    padding-bottom: 5px;    \r\n}\r\n\r\n.iphonex .action-sheet {\r\n    padding-bottom: 5px; \r\n}\r\n\r\n.iphonex .screen > .floating-actions .floating-actions-icon {    \r\n    margin-bottom: 35px; \r\n}\r\n\r\n/* portrait only */\r\n.iphonex.portrait .header,\r\n.iphonex.portrait .notification {\r\n    padding-top: 35px;\r\n}\r\n\r\n.iphonex.portrait .app-menu,\r\n.iphonex.portrait .sidebar {\r\n    padding-top: 35px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.iphonex.portrait .split-right-close {\r\n    top: 41px;\r\n}\r\n\r\n.iphonex.portrait .header-right .search-input {\r\n    padding-top: 40px;\r\n}\r\n\r\n.iphonex.portrait .header-right .search-input:after {\r\n    top: 50px; \r\n}\r\n\r\n.iphonex.portrait .feedback-message {\r\n    padding-top: 45px;\r\n}\r\n\r\n/* landscape */\r\n.iphonex.landscape .app-menu,\r\n.iphonex.landscape .sidebar {\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.iphonex.landscape .app-menu-links {\r\n    padding-left: 35px; \r\n}\r\n\r\n.iphonex.landscape .header,\r\n.iphonex.landscape .main-content,\r\n.iphonex.landscape .bottom-bar-wrapper {\r\n    padding-left: 35px;\r\n    padding-right: 35px;\r\n}";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NuLUeUgpEUCTkx4KpN0klA", callContext.id);
// Detects the Preview In Devices and adds support for the iPhoneX if needed
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_PreviewInDevices_DetectPreviewInDevicesJS, "DetectPreviewInDevices", "PreviewInDevices", {
PreviewCSS: OS.DataConversion.JSNodeParamConverter.to(vars.value.previewCSSVar, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lbIIpqHAUECLHUDQU3_2eA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NbOckAGFXESom8tE91RycA", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.PreviewInDevices$vars", [{
name: "PreviewCSS",
attrName: "previewCSSVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.previewInDevices$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.previewInDevices$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$PreviewInDevices.DetectPreviewInDevicesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var body = document.querySelector('body');
var isIframe;
var isPreviewInDevices;

// detect Preview in Devices
function detectPreviewInDevices() {
    isIframe = window.self !== window.top;
    
    if(isIframe) {
       isPreviewInDevices = window.top.document.querySelector(".marvel-device") !== null;
    }
    
    if(isPreviewInDevices) {
        if(window.top.document.querySelector(".marvel-device").classList.contains("iphone-x")) {
            body.classList.add('ios');
            body.classList.add('iphonex');
            addIphoneXPreview();
        }
    }
}

function addIphoneXPreview() {
  
  var stylesEl = document.getElementById("preview-css");

  if (stylesEl === null) {
      var css = $parameters.PreviewCSS;
      var style = document.createElement('style');
      style.type = 'text/css';
      style.id = "preview-css";
      
      if (style.styleSheet){
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      
      document.body.appendChild(style);
  }
}

detectPreviewInDevices();
};
});

define("OutSystemsUIMobile.controller$SetActiveElement", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$SetActiveElement.SetActiveElementJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_SetActiveElement_SetActiveElementJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.setActiveElement$Action = function (widgetIdIn, isActiveIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.SetActiveElement$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.isActiveInLocal = isActiveIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:WkrqyYiP70KuHnjgeUkWGg:/ClientActionFlows.WkrqyYiP70KuHnjgeUkWGg:I2b8Zr3PNrHEpFk5NfTEHQ", "OutSystemsUIMobile", "SetActiveElement", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:njUly_cwd0Khl3g1Ftrcng", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IO79uJFMWEeJUfqEirGmkg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_SetActiveElement_SetActiveElementJS, "SetActiveElement", "SetActiveElement", {
IsActive: OS.DataConversion.JSNodeParamConverter.to(vars.value.isActiveInLocal, OS.Types.Boolean),
ID: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GWR2eHd5v0GLCZnFxKd8bQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:WkrqyYiP70KuHnjgeUkWGg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.SetActiveElement$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsActive",
attrName: "isActiveInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.setActiveElement$Action = function (widgetIdIn, isActiveIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
isActiveIn = (isActiveIn === undefined) ? false : isActiveIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.setActiveElement$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(isActiveIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$SetActiveElement.SetActiveElementJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.ID);

if($parameters.IsActive) {
    elem.classList.add('active-element');    
} else {
    elem.classList.remove('active-element');
}
};
});

define("OutSystemsUIMobile.controller$SetMenuIcon", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$SetMenuIcon.FindMenuLinksJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_SetMenuIcon_FindMenuLinksJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.setMenuIcon$Action = function (menuActionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.SetMenuIcon$vars"))());
vars.value.menuActionInLocal = menuActionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ZETeHV+it0+N0my823scLA:/ClientActionFlows.ZETeHV+it0+N0my823scLA:OeQOXwaNHPTf7CGzS_zxVA", "OutSystemsUIMobile", "SetMenuIcon", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NmF_8AW1KkGeiFIvO9blhA", callContext.id);
// Auto?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZKUCOQN2MU6NhBsUtij4aw", callContext.id) && (vars.value.menuActionInLocal === OutSystemsUIMobileModel.staticEntities.menuAction.auto))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:u1xwWmjOrUmCUq_MktIlVg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_SetMenuIcon_FindMenuLinksJS, "FindMenuLinks", "SetMenuIcon", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pJbaDv6PLE2VHW9iYjYl2Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rXkEjvPVHkmK4GMFMM9AuQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ZETeHV+it0+N0my823scLA", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.SetMenuIcon$vars", [{
name: "MenuAction",
attrName: "menuActionInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.setMenuIcon$Action = function (menuActionIn) {
menuActionIn = (menuActionIn === undefined) ? "" : menuActionIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.setMenuIcon$Action.bind(controller, menuActionIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$SetMenuIcon.FindMenuLinksJS", [], function () {
return function ($actions, $roles, $public) {
var appMenu = Array.prototype.slice.call(document.querySelectorAll(".bottom-bar a")),
    bottomBar = Array.prototype.slice.call(document.querySelectorAll(".app-menu a"))

var links = appMenu.concat(bottomBar);

var showMenu = false;

for (var i = 0; i < links.length; i++) {
    /* removing platform timestamps */
    var timestampIndex = window.location.href.indexOf("_ts")-1;
    var currentPage = timestampIndex > 0 ? window.location.href.substring(0, timestampIndex) : window.location.href;
    if(links[i].attributes["href"]) {
        if (currentPage.indexOf(links[i].attributes["href"].value) >= 0 || 
            currentPage[currentPage.length-1] === "/") {
            showMenu = (window.history ? window.history.length > 0 : true);        
        }
    }
}

if(showMenu) {
    document.querySelector(".app-menu-icon").classList.remove('back');
} else {
    document.querySelector(".app-menu-icon").classList.add('back');
}
};
});

define("OutSystemsUIMobile.controller$ShowPassword", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$ShowPassword.ShowPasswordJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_ShowPassword_ShowPasswordJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.showPassword$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IPzU9ikG0ESQIuRuOj5wDw:/ClientActionFlows.IPzU9ikG0ESQIuRuOj5wDw:lJ4lmQ10Wr5ZRybYhjPvFA", "OutSystemsUIMobile", "ShowPassword", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PKLSaVAA3Ueb1liPdD5UMg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bxp8S_H10kKMTwwJmoLfTQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_ShowPassword_ShowPasswordJS, "ShowPassword", "ShowPassword", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TOjICRQzdEKCDowrukraiQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IPzU9ikG0ESQIuRuOj5wDw", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.clientActionProxies.showPassword$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.showPassword$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$ShowPassword.ShowPasswordJS", [], function () {
return function ($actions, $roles, $public) {
var inputPassword = document.querySelector('.login-password');

var typeInputPassword = inputPassword.type;

if(typeInputPassword === 'password') {
    inputPassword.setAttribute('type', 'text');
} else {
    inputPassword.setAttribute('type', 'password');   
}
};
});

define("OutSystemsUIMobile.controller$StartOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$StartOfflineDataSync.CallBlockHandlerJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_StartOfflineDataSync_CallBlockHandlerJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.startOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.StartOfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.discardPendingSyncUnitsInLocal = discardPendingSyncUnitsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6wYKHDHaTk24G0Nx4wSdrQ:/ClientActionFlows.6wYKHDHaTk24G0Nx4wSdrQ:2SNtvnkT1b8WqhGDzt_zZg", "OutSystemsUIMobile", "StartOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eCwp1y5OvEmtYkivpmfoog", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0Tc16cg8iEuflVtN94J9Dg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_StartOfflineDataSync_CallBlockHandlerJS, "CallBlockHandler", "StartOfflineDataSync", {
SyncUnit: OS.DataConversion.JSNodeParamConverter.to(vars.value.syncUnitInLocal, OS.Types.Text),
DiscardPendingUnits: OS.DataConversion.JSNodeParamConverter.to(vars.value.discardPendingSyncUnitsInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9YoiDsnfdEadz05S8x5_ZA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6wYKHDHaTk24G0Nx4wSdrQ", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.StartOfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "DiscardPendingSyncUnits",
attrName: "discardPendingSyncUnitsInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.startOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
discardPendingSyncUnitsIn = (discardPendingSyncUnitsIn === undefined) ? false : discardPendingSyncUnitsIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.startOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(discardPendingSyncUnitsIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$StartOfflineDataSync.CallBlockHandlerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.offlineDataSync) {
    window.offlineDataSync.sync($parameters.SyncUnit, $parameters.DiscardPendingUnits);
}
};
});

define("OutSystemsUIMobile.controller$SwipeLeft", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$SwipeLeft.SwipeLeftJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_SwipeLeft_SwipeLeftJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.swipeLeft$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.SwipeLeft$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:fk74nHYtG0aQv3rJupL3Yg:/ClientActionFlows.fk74nHYtG0aQv3rJupL3Yg:ceF14EguNKvC31gdsgLvow", "OutSystemsUIMobile", "SwipeLeft", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:s+iPGCWs_k+MMYfN3ziU3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bYAjhTuI_UCBz++CrCJsBg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_SwipeLeft_SwipeLeftJS, "SwipeLeft", "SwipeLeft", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1c7eHc5sLkWMsIBVVyheOw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:fk74nHYtG0aQv3rJupL3Yg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.SwipeLeft$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.swipeLeft$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.swipeLeft$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$SwipeLeft.SwipeLeftJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element;

var swipeActionInterval = setInterval(function(){
    
    element = document.getElementById($parameters.WidgetId);

    if( element !== null) {
        element.querySelector('.stackedcards-container').leftAction();
        clearInterval(swipeActionInterval);
    }
    
}, 100)
};
});

define("OutSystemsUIMobile.controller$SwipeRight", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$SwipeRight.SwipeRightJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_SwipeRight_SwipeRightJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.swipeRight$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.SwipeRight$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6tQbuDWdOEWMYpjaBjycWw:/ClientActionFlows.6tQbuDWdOEWMYpjaBjycWw:+zPJ0t7ahTNYxb9xNmiVyA", "OutSystemsUIMobile", "SwipeRight", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VuD5cPGfhkeiduZM4nLpWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NdVbtmiNvESSTFMxbhkzFA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_SwipeRight_SwipeRightJS, "SwipeRight", "SwipeRight", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WNVQ6nuIvkGGt1RcEa_mpg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6tQbuDWdOEWMYpjaBjycWw", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.SwipeRight$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.swipeRight$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.swipeRight$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$SwipeRight.SwipeRightJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element;

var swipeActionInterval = setInterval(function(){
    
    element = document.getElementById($parameters.WidgetId);

    if( element !== null) {
        element.querySelector('.stackedcards-container').rightAction();
        clearInterval(swipeActionInterval);
    }
    
}, 100)
};
});

define("OutSystemsUIMobile.controller$SwipeTop", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$SwipeTop.SwipeTopJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_SwipeTop_SwipeTopJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.swipeTop$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.SwipeTop$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:8YOsHAWvHESA5NDmbFugGA:/ClientActionFlows.8YOsHAWvHESA5NDmbFugGA:fW2Qb0Uk9KLV9FGB9BjYyw", "OutSystemsUIMobile", "SwipeTop", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QM9QmX8J80OsfJOs1nLE0w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VGBdXlToIUWYcJSWS4uVRg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_SwipeTop_SwipeTopJS, "SwipeTop", "SwipeTop", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_UhNcUdIkEWxi1lLtcZXcA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:8YOsHAWvHESA5NDmbFugGA", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.SwipeTop$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.swipeTop$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.swipeTop$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$SwipeTop.SwipeTopJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element;

var swipeActionInterval = setInterval(function(){
    
    element = document.getElementById($parameters.WidgetId);

    if( element !== null) {
        element.querySelector('.stackedcards-container').topAction();
        clearInterval(swipeActionInterval);
    }
    
}, 100)
};
});

define("OutSystemsUIMobile.controller$TabGoTo", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$TabGoTo.ChangeTabJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_TabGoTo_ChangeTabJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.tabGoTo$Action = function (widgetIdIn, tabNumberIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.TabGoTo$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.tabNumberInLocal = tabNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:uBmPnAyh10iXcs4yts2GGw:/ClientActionFlows.uBmPnAyh10iXcs4yts2GGw:1VdEnntLTOC4fCY4OV+ZAg", "OutSystemsUIMobile", "TabGoTo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PZmGGuUzaEmvKzzO7xFVXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DkGb6z63NUeOAN_exev1sA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_TabGoTo_ChangeTabJS, "ChangeTab", "TabGoTo", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
TabNumber: OS.DataConversion.JSNodeParamConverter.to(vars.value.tabNumberInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L5BRA4V2M0CBIiYdrVYnsw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:uBmPnAyh10iXcs4yts2GGw", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.TabGoTo$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TabNumber",
attrName: "tabNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.tabGoTo$Action = function (widgetIdIn, tabNumberIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
tabNumberIn = (tabNumberIn === undefined) ? 0 : tabNumberIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.tabGoTo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(tabNumberIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$TabGoTo.ChangeTabJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId);
var countTabs = element.querySelectorAll(".tabs-header-tab").length -1;
var tabsElement = element.querySelectorAll(".tabs-header-tab");
var countEmptyTabs = element.querySelectorAll(".tabs-header-tab.ph");
var isEmpty = 0;

for(i = 0; i < tabsElement.length; i++) {
    
    if(countEmptyTabs[i].childNodes.length === 0) {
       isEmpty = isEmpty + 1;
    }
}


if(($parameters.TabNumber + 1) <= countTabs) {
    element.changeTab($parameters.TabNumber);
} else {
    element.changeTab(countTabs - isEmpty);
}









};
});

define("OutSystemsUIMobile.controller$ToggleSidebar", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$ToggleSidebar.ToggleSidebarJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_ToggleSidebar_ToggleSidebarJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.toggleSidebar$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.ToggleSidebar$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qit9KmBqB0mQXaPFQSKnRg:/ClientActionFlows.qit9KmBqB0mQXaPFQSKnRg:+YxuPDqzbYs86tfGDBBOCA", "OutSystemsUIMobile", "ToggleSidebar", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8esdRllSMUqw9Hqhwp+AdQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jaHB+obidUu+wcGD9DdGOw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_ToggleSidebar_ToggleSidebarJS, "ToggleSidebar", "ToggleSidebar", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JRPe6doJ_kS6syI0E_xQkA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qit9KmBqB0mQXaPFQSKnRg", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.ToggleSidebar$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.toggleSidebar$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.toggleSidebar$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$ToggleSidebar.ToggleSidebarJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// toggle Sidebar

var el;
var isOpen;

if($parameters.WidgetId !== "") {
    el = document.querySelector("#" + $parameters.WidgetId + " .sidebar");
}

if(el !== null) {
    isOpen = el.classList.contains("sidebar-open");
    
    if(isOpen) {
        el.classList.remove("sidebar-open");
    } else {
        el.classList.add("sidebar-open");
    }
}
};
});

define("OutSystemsUIMobile.controller$UpdateStackedCards", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$UpdateStackedCards.UpdateUiJS"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobile_controller_UpdateStackedCards_UpdateUiJS) {
var OS = OutSystems.Internal;
OutSystemsUIMobileController.default.updateStackedCards$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.UpdateStackedCards$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qVJTiEelwUyyAIZ8YvF0kA:/ClientActionFlows.qVJTiEelwUyyAIZ8YvF0kA:hzL+nPej9tKKmrfRb_zaFQ", "OutSystemsUIMobile", "UpdateStackedCards", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3o5Fg1Sy30SjMSRtsAXFvQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xMKXLKzze0S3+ZodJF1oqw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_controller_UpdateStackedCards_UpdateUiJS, "UpdateUi", "UpdateStackedCards", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2ps+Ax4uM0++BiukTNgv2g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qVJTiEelwUyyAIZ8YvF0kA", callContext.id);
}

};
var controller = OutSystemsUIMobileController.default;
OutSystemsUIMobileController.default.constructor.registerVariableGroupType("OutSystemsUIMobile.UpdateStackedCards$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIMobileController.default.clientActionProxies.updateStackedCards$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIMobileController.default.updateStackedCards$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUIMobile.controller$UpdateStackedCards.UpdateUiJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId).querySelector('.stackedcards-container').updateUi();
};
});

define("OutSystemsUIMobile.controller", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller$debugger"], function (exports, OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobile_Controller_debugger) {
var OS = OutSystems.Internal;
var OutSystemsUIMobileController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return OutSystemsUIMobileController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
OutSystemsUIMobileController.default = new Controller();
});
define("OutSystemsUIMobile.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Iv4qqL2CAUyTooBa4SSJpg": {
getter: function (varBag, idService) {
return varBag.vars.value.elementInLocal;
},
dataType: OS.Types.Object
},
"Tn+H6xGcAUWzRA9GgwDPeA": {
getter: function (varBag, idService) {
return varBag.vars.value.targetInLocal;
},
dataType: OS.Types.Object
},
"ys785lY_qE6ziCYEBGOpgw": {
getter: function (varBag, idService) {
return varBag.moveElementJSResult.value;
}
},
"iR_mzVvx4EWGZU1VRw3FkQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncOnOnlineInLocal;
},
dataType: OS.Types.Boolean
},
"7JGqGYj7tE+x8vgdNQiHAA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncOnResumeInLocal;
},
dataType: OS.Types.Boolean
},
"3veDb5FLK0GnedPWNQeZTw": {
getter: function (varBag, idService) {
return varBag.vars.value.retryOnErrorInLocal;
},
dataType: OS.Types.Boolean
},
"aWKSMdKBYUipICKoqyHvUA": {
getter: function (varBag, idService) {
return varBag.vars.value.retryIntervalInSecondsInLocal;
},
dataType: OS.Types.Integer
},
"Q3ziLgpmwEiLfbtrD1nU_A": {
getter: function (varBag, idService) {
return varBag.configureOfflineDataSyncJSResult.value;
}
},
"tZjZovcHS0yJd7OvtytkJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"yFRpWSObyUqhUpN24G94fA": {
getter: function (varBag, idService) {
return varBag.vars.value.discardPendingSyncUnitsInLocal;
},
dataType: OS.Types.Boolean
},
"0Tc16cg8iEuflVtN94J9Dg": {
getter: function (varBag, idService) {
return varBag.callBlockHandlerJSResult.value;
}
},
"dsUlges1bEaJZgxAH5ixpQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"VGBdXlToIUWYcJSWS4uVRg": {
getter: function (varBag, idService) {
return varBag.swipeTopJSResult.value;
}
},
"lox_6jGjDkaqtFjZZDxrRA": {
getter: function (varBag, idService) {
return varBag.vars.value.menuActionInLocal;
},
dataType: OS.Types.Text
},
"u1xwWmjOrUmCUq_MktIlVg": {
getter: function (varBag, idService) {
return varBag.findMenuLinksJSResult.value;
}
},
"ObH9X2EVfE2QMmbmUEtQ2g": {
getter: function (varBag, idService) {
return varBag.vars.value.hideHeaderInLocal;
},
dataType: OS.Types.Boolean
},
"YIoLAMN9y0C6r84F2nZDLg": {
getter: function (varBag, idService) {
return varBag.hideOnScrollJSResult.value;
}
},
"bQKATDoEQ0W7bsABQuI4fA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"jaHB+obidUu+wcGD9DdGOw": {
getter: function (varBag, idService) {
return varBag.toggleSidebarJSResult.value;
}
},
"5Xc9s8o640OnMfDi59LYUg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"Q46YfT8QYEW25B5LNZozRg": {
getter: function (varBag, idService) {
return varBag.vars.value.targetInLocal;
},
dataType: OS.Types.Integer
},
"dBRtEJ1oXUeFmuSC_CWu9Q": {
getter: function (varBag, idService) {
return varBag.callGoToActionJSResult.value;
}
},
"2T8OZEsJu0ySMPfim+kqxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.tabIDInLocal;
},
dataType: OS.Types.Text
},
"B3wXWZq7aUWYEIVdFUX_KA": {
getter: function (varBag, idService) {
return varBag.addClassNoSwipeJSResult.value;
}
},
"LFGiQlQsl0S6Vbs+hRPR+w": {
getter: function (varBag, idService) {
return varBag.vars.value.hideHeaderOnScrollInLocal;
},
dataType: OS.Types.Boolean
},
"bfGKJ1B_sk65pnXBgj4EhA": {
getter: function (varBag, idService) {
return varBag.vars.value.listIdInLocal;
},
dataType: OS.Types.Text
},
"xb07J7dEDEm05wY1sZpuZg": {
getter: function (varBag, idService) {
return varBag.vars.value.hasLeftActionInLocal;
},
dataType: OS.Types.Boolean
},
"lhbvA9M+YUGFlaR8fZIBVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasRightActionInLocal;
},
dataType: OS.Types.Boolean
},
"SG5ALp9a6UqadpEzOTCXsw": {
getter: function (varBag, idService) {
return varBag.vars.value.animationTimeInLocal;
},
dataType: OS.Types.Decimal
},
"HI7FczBGrEKwVfINKPZ6vA": {
getter: function (varBag, idService) {
return varBag.listItemAnimateJSResult.value;
}
},
"P9DByrkeYEWaLabmT75fAw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPhoneOut;
},
dataType: OS.Types.Boolean
},
"BX3uLVf1k0Wr5zgao8m4ow": {
getter: function (varBag, idService) {
return varBag.getDeviceTypeVar.value;
}
},
"ItfV8gXRx0ihT6BbYk+NBw": {
getter: function (varBag, idService) {
return varBag.vars.value.carouselIDInLocal;
},
dataType: OS.Types.Text
},
"EA76gLu_y0WEapiQoFodxg": {
getter: function (varBag, idService) {
return varBag.addClassNoSwipeJSResult.value;
}
},
"2v19Xbd0EEeAUeDvE9Jb9g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"xMKXLKzze0S3+ZodJF1oqw": {
getter: function (varBag, idService) {
return varBag.updateUiJSResult.value;
}
},
"E7XleKb+UkCOQdHGwDB4ZA": {
getter: function (varBag, idService) {
return varBag.vars.value.previewCSSVar;
},
dataType: OS.Types.Text
},
"NuLUeUgpEUCTkx4KpN0klA": {
getter: function (varBag, idService) {
return varBag.detectPreviewInDevicesJSResult.value;
}
},
"nnXQzS8kxU+Julm22dIqIw": {
getter: function (varBag, idService) {
return varBag.vars.value.userAgentVar;
},
dataType: OS.Types.Text
},
"RWt+kXHuzUSxVy0cZJHDGw": {
getter: function (varBag, idService) {
return varBag.statusBarOverlayJSResult.value;
}
},
"agpOwN1zb0CaZyAJpCSfGQ": {
getter: function (varBag, idService) {
return varBag.androidJSResult.value;
}
},
"3ri6_EG4mkSac38Jxw9ebQ": {
getter: function (varBag, idService) {
return varBag.iOSJSResult.value;
}
},
"RcUKCznBskGsiPDjBehj5g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"RAfjTcfSlU6imxmQMnCpsw": {
getter: function (varBag, idService) {
return varBag.vars.value.tabNumberInLocal;
},
dataType: OS.Types.Integer
},
"DkGb6z63NUeOAN_exev1sA": {
getter: function (varBag, idService) {
return varBag.changeTabJSResult.value;
}
},
"z3SR6adZJUWjR4CsYqcFRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"bYAjhTuI_UCBz++CrCJsBg": {
getter: function (varBag, idService) {
return varBag.swipeLeftJSResult.value;
}
},
"n8TPmPwhBU2KRXr3lW5hzQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.networkTypeOut;
},
dataType: OS.Types.Text
},
"DdnOaND2fkCpllA7GTAiCg": {
getter: function (varBag, idService) {
return varBag.checkNetworkTypeJSResult.value;
}
},
"qLA8zbYCJ0GeeKTA6l0_Dg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"NdVbtmiNvESSTFMxbhkzFA": {
getter: function (varBag, idService) {
return varBag.swipeRightJSResult.value;
}
},
"sSpuHDYDoE2Ew8OgBXKTvw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isOnlineOut;
},
dataType: OS.Types.Boolean
},
"TzWCSMV5Y0mqa6xVBaVkbw": {
getter: function (varBag, idService) {
return varBag.getNetworkTypeVar.value;
}
},
"Vb34NY3zYEGX4ikxHnvp0A": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"53BVu_67OUOpcv5eedIWzw": {
getter: function (varBag, idService) {
return varBag.callNextActionJSResult.value;
}
},
"4CpUHNaQRUume7E1q0Su+g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"X_gFhwE7Lkiq7jKcqYRqDA": {
getter: function (varBag, idService) {
return varBag.vars.value.isActiveInLocal;
},
dataType: OS.Types.Boolean
},
"IO79uJFMWEeJUfqEirGmkg": {
getter: function (varBag, idService) {
return varBag.setActiveElementJSResult.value;
}
},
"A2ILCIEO7EGW0QZ6CB6LJg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"mfJ8xdFCcEm0t1Gi9snU+Q": {
getter: function (varBag, idService) {
return varBag.callPreviousActionJSResult.value;
}
},
"P_GwkYB2Qky8mj5wnK0Usg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"LrnR4YHuPEaFFAmbmSTz1Q": {
getter: function (varBag, idService) {
return varBag.callUpdateActionJSResult.value;
}
},
"9md9YTHjZkiZZN3suuWnkg": {
getter: function (varBag, idService) {
return varBag.toggleLayoutClassJSResult.value;
}
},
"+I9JkjJjakK280+6IfwP8w": {
getter: function (varBag, idService) {
return varBag.vars.value.hasErrorInLocal;
},
dataType: OS.Types.Boolean
},
"DCs_wh+rgEKLx0aKR_Y_vA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"cgGNyx+ntUSOxm5inqsadA": {
getter: function (varBag, idService) {
return varBag.vars.value.allowRetryInLocal;
},
dataType: OS.Types.Boolean
},
"v03QPIY87ECIHTsz5R0JNA": {
getter: function (varBag, idService) {
return varBag.triggerSyncCompleteEventJSResult.value;
}
},
"iIqr4yohpki+TJEMODfuzQ": {
getter: function (varBag, idService) {
return varBag.triggerSyncErrorEventJSResult.value;
}
},
"QphTtzz8LUSMkYDEPg6ugQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.deviceOut;
},
dataType: OS.Types.Text
},
"N9WTj9dLUkuBdvhGabzneA": {
getter: function (varBag, idService) {
return varBag.checkDeviceJSResult.value;
}
},
"eyb8jAm6+kSOcY1dlExx2g": {
getter: function (varBag, idService) {
return varBag.outVars.value.orientationOut;
},
dataType: OS.Types.Text
},
"gbjVoiko4UGtMqk2GHLr1g": {
getter: function (varBag, idService) {
return varBag.checkDeviceJSResult.value;
}
},
"bxp8S_H10kKMTwwJmoLfTQ": {
getter: function (varBag, idService) {
return varBag.showPasswordJSResult.value;
}
},
"lGYz479sKE2RJjD9e6HHYg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isTabletOut;
},
dataType: OS.Types.Boolean
},
"ioZf772KpUSfGBw8JlIMDw": {
getter: function (varBag, idService) {
return varBag.getDeviceTypeVar.value;
}
},
"+p4JrADMgEuyMGCRVuSHCA": {
getter: function (varBag, idService) {
return varBag.toggleLayoutClassJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
