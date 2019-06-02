define("BarcodePlugin.controller$CheckBarcodePlugin", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "BarcodePlugin.controller$CheckBarcodePlugin.IsPluginAvailableJSJS", "CommonPlugin.controller$IsCordovaDefined", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, BarcodePluginModel, BarcodePluginController, CommonPluginController, CommonPluginModel, BarcodePlugin_controller_CheckBarcodePlugin_IsPluginAvailableJSJS) {
var OS = OutSystems.Internal;
BarcodePluginController.default.checkBarcodePlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var isPluginAvailableJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BarcodePlugin.CheckBarcodePlugin$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.isPluginAvailableJSJSResult = isPluginAvailableJSJSResult;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("2lG1uL2uLUqAyCj_HqG_mA:fH3jvysbR0SGdPEDtto7pQ:/ClientActionFlows.fH3jvysbR0SGdPEDtto7pQ:HTNnLjuglRN87YS9qR3M8A", "BarcodePlugin", "CheckBarcodePlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GnnpVWfFak+09gDXhiatGQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:nU_NA6jDN06P3LCfB+nkQw", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:3KNCpdQqsUKVso583nvR+Q", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ka07d5Z+wUO9P8q2r6Ad6A", callContext.id);
// Checks if the barcode scanner plugin is loaded and ready to be used.
isPluginAvailableJSJSResult.value = controller.safeExecuteJSNode(BarcodePlugin_controller_CheckBarcodePlugin_IsPluginAvailableJSJS, "IsPluginAvailableJS", "CheckBarcodePlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.CheckBarcodePlugin$isPluginAvailableJSJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:r2NNo+9PFk+vEX6xm+2Rdg", callContext.id) && isPluginAvailableJSJSResult.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:UlTp+_pXMU+Ins4ubsUbXQ", callContext.id);
// IsAvailable = IsPluginAvailableJS.IsAvailable
outVars.value.isAvailableOut = isPluginAvailableJSJSResult.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:UlTp+_pXMU+Ins4ubsUbXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:UlTp+_pXMU+Ins4ubsUbXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:2G4T9fpZM0+mcUag3Sgamg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ZRxEJxA9n0uPhQ7TS8aS6A", callContext.id);
// Error.ErrorCode = 2
outVars.value.errorOut.errorCodeAttr = "2";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ZRxEJxA9n0uPhQ7TS8aS6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Barcode Plugin is unavailable"
outVars.value.errorOut.errorMessageAttr = "Barcode Plugin is unavailable";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ZRxEJxA9n0uPhQ7TS8aS6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:d98VdAsHQ0CgSOIw15ULKg", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ltu+qjJ4_kq8eM4RQruRjQ", callContext.id);
// Error.ErrorCode = 1
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ltu+qjJ4_kq8eM4RQruRjQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Cordova is not available"
outVars.value.errorOut.errorMessageAttr = "Cordova is not available";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ltu+qjJ4_kq8eM4RQruRjQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:4U2FrrmEdUSnN6oThz0rcQ", callContext.id);
}

} catch (ex) {
(function () {
OS.Logger.trace("CheckBarcodePlugin.CheckBarcodePlugin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:HyVKgjJxLEqWSPc6Hx4dWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:wFtoLDmoVEafaS5UGo9rag", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:wFtoLDmoVEafaS5UGo9rag", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:wFtoLDmoVEafaS5UGo9rag", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:IplFO_04IUq4kYHarh6u1Q", callContext.id);
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
OutSystemsDebugger.pop("2lG1uL2uLUqAyCj_HqG_mA:fH3jvysbR0SGdPEDtto7pQ", callContext.id);
}

};
var controller = BarcodePluginController.default;
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.CheckBarcodePlugin$isPluginAvailableJSJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.CheckBarcodePlugin$outVars", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
BarcodePluginController.default.clientActionProxies.checkBarcodePlugin$Action = function () {
return controller.executeActionInsideJSNode(BarcodePluginController.default.checkBarcodePlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.Types.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("BarcodePlugin.controller$CheckBarcodePlugin.IsPluginAvailableJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = !!window.cloudSky && !!window.cloudSky.zBar;
};
});

define("BarcodePlugin.controller$ScanBarcode", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.controller", "CommonPlugin.model", "BarcodePlugin.controller$ScanBarcode.RunCodeScannerJS", "CommonPlugin.model$ErrorRec", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin", "BarcodePlugin.controller$CheckBarcodePlugin", "BarcodePlugin.model$SettingsRec"], function (exports, OutSystems, BarcodePluginModel, BarcodePluginController, CommonPluginModel, BarcodePlugin_controller_ScanBarcode_RunCodeScannerJS) {
var OS = OutSystems.Internal;
BarcodePluginController.default.scanBarcode$Action = function (helperTitleIn, helperInstructionsIn, settingsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$vars"))());
vars.value.helperTitleInLocal = helperTitleIn;
vars.value.helperInstructionsInLocal = helperInstructionsIn;
vars.value.settingsInLocal = settingsIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkBarcodePluginVar = new OS.DataTypes.VariableHolder();
var runCodeScannerJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkBarcodePluginVar = checkBarcodePluginVar;
varBag.runCodeScannerJSResult = runCodeScannerJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("2lG1uL2uLUqAyCj_HqG_mA:ToX+i4lIJ0WMAkuX0BnZyw:/ClientActionFlows.ToX+i4lIJ0WMAkuX0BnZyw:VE3XgtEVmJnQ5GfAlPmBGA", "BarcodePlugin", "ScanBarcode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:fNCKWfqJM0ed5O_D+ROgSQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:vZ8GL7fcd06TMZzYgN0P2w", callContext.id);
// Execute Action: CheckBarcodePlugin
checkBarcodePluginVar.value = BarcodePluginController.default.checkBarcodePlugin$Action(callContext);

// Is Barcode available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:FoYmwZEWbEWPuKn4cgESMw", callContext.id) && checkBarcodePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GmUu6kHDok6Ns3QAP_F8yg", callContext.id);
// Use this action to trigger the barcode reader.
return controller.safeExecuteAsyncJSNode(BarcodePlugin_controller_ScanBarcode_RunCodeScannerJS, "RunCodeScanner", "ScanBarcode", {
DrawSight: OS.DataConversion.JSNodeParamConverter.to(vars.value.settingsInLocal.drawSightAttr, OS.Types.Boolean),
TextTitle: OS.DataConversion.JSNodeParamConverter.to(vars.value.helperTitleInLocal, OS.Types.Text),
Camera: OS.DataConversion.JSNodeParamConverter.to(vars.value.settingsInLocal.cameraAttr, OS.Types.Text),
Flash: OS.DataConversion.JSNodeParamConverter.to(vars.value.settingsInLocal.flashAttr, OS.Types.Text),
TextInstructions: OS.DataConversion.JSNodeParamConverter.to(vars.value.helperInstructionsInLocal, OS.Types.Text),
ScannedBarCode: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$runCodeScannerJSResult"))();
jsNodeResult.scannedBarCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ScannedBarCode, OS.Types.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.Types.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.Types.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
runCodeScannerJSResult.value = results;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:5NK1DmWDgEmVFDkkddMESg", callContext.id) && runCodeScannerJSResult.value.successOut)) {
// Set Values
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GO+bJ+IFaUGvj0vacURYwA", callContext.id);
// ScanResult = RunCodeScanner.ScannedBarCode
outVars.value.scanResultOut = runCodeScannerJSResult.value.scannedBarCodeOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GO+bJ+IFaUGvj0vacURYwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GO+bJ+IFaUGvj0vacURYwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = RunCodeScanner.Success
outVars.value.successOut = runCodeScannerJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GO+bJ+IFaUGvj0vacURYwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GI51I_Gb1UmY_ycTVnx4Fg", callContext.id);
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ihWtvtJyEkyDTTlfOHgaxA", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ihWtvtJyEkyDTTlfOHgaxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = RunCodeScanner.ErrorMessage
outVars.value.errorOut.errorMessageAttr = runCodeScannerJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ihWtvtJyEkyDTTlfOHgaxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = 3
outVars.value.errorOut.errorCodeAttr = "3";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:CskaqBBeiUmiI83uQJIaOg", callContext.id);
}

});
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:Jy7aMvlNQEmRgye8grz2UA", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:Jy7aMvlNQEmRgye8grz2UA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CheckBarcodePlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkBarcodePluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:Jy7aMvlNQEmRgye8grz2UA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = CheckBarcodePlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkBarcodePluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:0WO1OG4Z4kCqCwoa9K0qcQ", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("ScanBarcode.ScanBarcode", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:4RgGwli7+UellBRPLj3lDg", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:21Vg6FDl80SAmJuv3Y7VIg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:21Vg6FDl80SAmJuv3Y7VIg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:21Vg6FDl80SAmJuv3Y7VIg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:m7a7VSp_JkuPpSidym9v0g", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("2lG1uL2uLUqAyCj_HqG_mA:ToX+i4lIJ0WMAkuX0BnZyw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("2lG1uL2uLUqAyCj_HqG_mA:ToX+i4lIJ0WMAkuX0BnZyw", callContext.id);
throw ex;

});
};
var controller = BarcodePluginController.default;
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$vars", [{
name: "HelperTitle",
attrName: "helperTitleInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "Scan QR Code";
}
}, {
name: "HelperInstructions",
attrName: "helperInstructionsInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "Please point your camera at the QR code.";
}
}, {
name: "Settings",
attrName: "settingsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new BarcodePluginModel.SettingsRec();
},
complexType: BarcodePluginModel.SettingsRec
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$runCodeScannerJSResult", [{
name: "ScannedBarCode",
attrName: "scannedBarCodeOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$outVars", [{
name: "ScanResult",
attrName: "scanResultOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
BarcodePluginController.default.clientActionProxies.scanBarcode$Action = function (helperTitleIn, helperInstructionsIn, settingsIn) {
helperTitleIn = (helperTitleIn === undefined) ? "Scan QR Code" : helperTitleIn;
helperInstructionsIn = (helperInstructionsIn === undefined) ? "Please point your camera at the QR code." : helperInstructionsIn;
settingsIn = (settingsIn === undefined) ? new BarcodePluginModel.SettingsRec() : settingsIn;
return controller.executeActionInsideJSNode(BarcodePluginController.default.scanBarcode$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(helperTitleIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(helperInstructionsIn, OS.Types.Text), settingsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ScanResult: OS.DataConversion.JSNodeParamConverter.to(actionResults.scanResultOut, OS.Types.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.Types.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("BarcodePlugin.controller$ScanBarcode.RunCodeScannerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var params = {
  'text_title': $parameters.TextTitle,
  'text_instructions':  $parameters.TextInstructions,
  'camera' :  $parameters.Camera,
  'flash' :  $parameters.Flash,
  'drawSight' : $parameters.DrawSight
};

function onSuccessZBarScan (ScannedBarcode) {
    $parameters.ScannedBarCode = ScannedBarcode;
    $parameters.Success = true;
    $resolve();
}

function onFailZBarScan (error) {
    $parameters.ErrorMessage = error;
    $parameters.Success = false;
    $resolve();
}

cloudSky.zBar.scan(params, onSuccessZBarScan, onFailZBarScan);
});
};
});

define("BarcodePlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.controller$debugger"], function (exports, OutSystems, BarcodePluginModel, BarcodePlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var BarcodePluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return BarcodePluginController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
BarcodePluginController.default = new Controller();
});
define("BarcodePlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"GOXacJk_YkGTfN0HaxoW+A": {
getter: function (varBag, idService) {
return varBag.vars.value.helperTitleInLocal;
},
dataType: OS.Types.Text
},
"Xh6J9iHycUGOklYePXGqhg": {
getter: function (varBag, idService) {
return varBag.vars.value.helperInstructionsInLocal;
},
dataType: OS.Types.Text
},
"IuOyEHC5X0ugD1EOprttDA": {
getter: function (varBag, idService) {
return varBag.vars.value.settingsInLocal;
}
},
"LiTtKuEjW0SaQhZFUQ+bQQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.scanResultOut;
},
dataType: OS.Types.Text
},
"4bn1cHLM0kO2h5x82tv8Kg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.Types.Boolean
},
"7Dd1YZN9DUiC0HBjhIqxYg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"4RgGwli7+UellBRPLj3lDg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"vZ8GL7fcd06TMZzYgN0P2w": {
getter: function (varBag, idService) {
return varBag.checkBarcodePluginVar.value;
}
},
"GmUu6kHDok6Ns3QAP_F8yg": {
getter: function (varBag, idService) {
return varBag.runCodeScannerJSResult.value;
}
},
"txaF3YomHESErMjPDkkRIw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.Types.Boolean
},
"O6IeRs8WL0SDuIUS79j5GQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"HyVKgjJxLEqWSPc6Hx4dWQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"nU_NA6jDN06P3LCfB+nkQw": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"ka07d5Z+wUO9P8q2r6Ad6A": {
getter: function (varBag, idService) {
return varBag.isPluginAvailableJSJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
