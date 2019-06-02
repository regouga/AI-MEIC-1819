define("OutSystemsUIMobile.Adaptive.Gallery.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.controller$GetDeviceOrientation", "OutSystemsUIMobile.controller$IsPhone", "OutSystemsUIMobile.controller$IsTablet"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Gallery", "galleryVar", "Gallery", true, false, OS.Types.Object, function () {
return null;
}), 
this.attr("ColumnsInPhonePortrait", "columnsInPhonePortraitIn", "ColumnsInPhonePortrait", true, false, OS.Types.PhoneNumber, function () {
return "1";
}), 
this.attr("_columnsInPhonePortraitInDataFetchStatus", "_columnsInPhonePortraitInDataFetchStatus", "_columnsInPhonePortraitInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ColumnsInPhoneLandscape", "columnsInPhoneLandscapeIn", "ColumnsInPhoneLandscape", true, false, OS.Types.PhoneNumber, function () {
return "2";
}), 
this.attr("_columnsInPhoneLandscapeInDataFetchStatus", "_columnsInPhoneLandscapeInDataFetchStatus", "_columnsInPhoneLandscapeInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ColumnsInTabletPortrait", "columnsInTabletPortraitIn", "ColumnsInTabletPortrait", true, false, OS.Types.Integer, function () {
return 3;
}), 
this.attr("_columnsInTabletPortraitInDataFetchStatus", "_columnsInTabletPortraitInDataFetchStatus", "_columnsInTabletPortraitInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ColumnsInTabletLandscape", "columnsInTabletLandscapeIn", "ColumnsInTabletLandscape", true, false, OS.Types.Integer, function () {
return 4;
}), 
this.attr("_columnsInTabletLandscapeInDataFetchStatus", "_columnsInTabletLandscapeInDataFetchStatus", "_columnsInTabletLandscapeInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UseGutter", "useGutterIn", "UseGutter", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_useGutterInDataFetchStatus", "_useGutterInDataFetchStatus", "_useGutterInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("ColumnsInPhonePortrait" in inputs) {
this.variables.columnsInPhonePortraitIn = inputs.ColumnsInPhonePortrait;
if("_columnsInPhonePortraitInDataFetchStatus" in inputs) {
this.variables._columnsInPhonePortraitInDataFetchStatus = inputs._columnsInPhonePortraitInDataFetchStatus;
}

}

if("ColumnsInPhoneLandscape" in inputs) {
this.variables.columnsInPhoneLandscapeIn = inputs.ColumnsInPhoneLandscape;
if("_columnsInPhoneLandscapeInDataFetchStatus" in inputs) {
this.variables._columnsInPhoneLandscapeInDataFetchStatus = inputs._columnsInPhoneLandscapeInDataFetchStatus;
}

}

if("ColumnsInTabletPortrait" in inputs) {
this.variables.columnsInTabletPortraitIn = inputs.ColumnsInTabletPortrait;
if("_columnsInTabletPortraitInDataFetchStatus" in inputs) {
this.variables._columnsInTabletPortraitInDataFetchStatus = inputs._columnsInTabletPortraitInDataFetchStatus;
}

}

if("ColumnsInTabletLandscape" in inputs) {
this.variables.columnsInTabletLandscapeIn = inputs.ColumnsInTabletLandscape;
if("_columnsInTabletLandscapeInDataFetchStatus" in inputs) {
this.variables._columnsInTabletLandscapeInDataFetchStatus = inputs._columnsInTabletLandscapeInDataFetchStatus;
}

}

if("UseGutter" in inputs) {
this.variables.useGutterIn = inputs.UseGutter;
if("_useGutterInDataFetchStatus" in inputs) {
this.variables._useGutterInDataFetchStatus = inputs._useGutterInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Adaptive.Gallery.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Adaptive.Gallery.mvc$model", "OutSystemsUIMobile.Adaptive.Gallery.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.controller$GetDeviceOrientation", "OutSystemsUIMobile.controller$IsPhone", "OutSystemsUIMobile.controller$IsTablet"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Adaptive_Gallery_mvc_model, OutSystemsUIMobile_Adaptive_Gallery_mvc_controller, OSWidgets) {
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
        View.displayName = "Adaptive.Gallery";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUIMobile.OutSystemsUI.js", "scripts/OutSystemsUIMobile.Gallery.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Adaptive_Gallery_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Adaptive_Gallery_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "gallery-wrapper init",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Adaptive.Gallery.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnReady.InitJS", "OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnReady.OrientationChangeJS", "OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnRender.UpdateJS", "OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnOrientationChange.OrientationChangeJS", "OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnDestroy.DestroyJS", "OutSystemsUIMobile.Adaptive.Gallery.mvc$debugger", "OutSystemsUIMobile.controller$GetDeviceOrientation", "OutSystemsUIMobile.controller$IsPhone", "OutSystemsUIMobile.controller$IsTablet"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnReady_InitJS, OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnReady_OrientationChangeJS, OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnRender_UpdateJS, OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnOrientationChange_OrientationChangeJS, OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnDestroy_DestroyJS, OutSystemsUIMobile_Adaptive_Gallery_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onOrientationChange$Action: function () {
return controller.executeActionInsideJSNode(controller._onOrientationChange$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var initJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.initJSResult = initJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qoGbGHZAXEa4+eHYJZE7qA:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.9rO3FufEKECdSsZVTsJAbw/ClientActions.qoGbGHZAXEa4+eHYJZE7qA:4BTikpxZiVP9bSVjrz0cdg", "OutSystemsUIMobile", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:P1zlwxgUd0+H5AEoEfCmeQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kcpckUbBUUy5qC+a+WlUsA", callContext.id);
initJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnReady_InitJS, "Init", "OnReady", {
UseGutter: OS.DataConversion.JSNodeParamConverter.to(model.variables.useGutterIn, OS.Types.Boolean),
ColumnsInPhoneLandscape: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInPhoneLandscapeIn, OS.Types.PhoneNumber),
ColumnsInPhonePortrait: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInPhonePortraitIn, OS.Types.PhoneNumber),
ColumnsInTabletPortrait: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInTabletPortraitIn, OS.Types.Integer),
ColumnsInTabletLandscape: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInTabletLandscapeIn, OS.Types.Integer),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Content"), OS.Types.Text),
GalleryObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Adaptive.Gallery.OnReady$initJSResult"))();
jsNodeResult.galleryObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GalleryObj, OS.Types.Object);
return jsNodeResult;
}, {
GetDeviceOrientation: OutSystemsUIMobileController.default.clientActionProxies.getDeviceOrientation$Action,
IsPhone: OutSystemsUIMobileController.default.clientActionProxies.isPhone$Action,
IsTablet: OutSystemsUIMobileController.default.clientActionProxies.isTablet$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:d9SOpVzXWkqJ8PoMGYA6fA", callContext.id);
// Gallery = Init.GalleryObj
model.variables.galleryVar = initJSResult.value.galleryObjOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zx7S_RX7s0mHdCr8Xbbabg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnReady_OrientationChangeJS, "OrientationChange", "OnReady", null, function ($parameters) {
}, {
OnOrientationChange: controller.clientActionProxies.onOrientationChange$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+nCyFTw7+UG2c3MgB8Tj9g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qoGbGHZAXEa4+eHYJZE7qA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Adaptive.Gallery.OnReady$initJSResult", [{
name: "GalleryObj",
attrName: "galleryObjOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onRender$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6ndhQ0Q4eU2XguEW9E0UXw:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.9rO3FufEKECdSsZVTsJAbw/ClientActions.6ndhQ0Q4eU2XguEW9E0UXw:vcdcGfn_f+63+G2y_9l+4A", "OutSystemsUIMobile", "OnRender", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8XMzTA+_UEanZh9lhufaoA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DiMlJ0KWzkqUSOztbqj+hg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnRender_UpdateJS, "Update", "OnRender", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Content"), OS.Types.Text),
UseGutter: OS.DataConversion.JSNodeParamConverter.to(model.variables.useGutterIn, OS.Types.Boolean),
ColumnsInTabletPortrait: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInTabletPortraitIn, OS.Types.Integer),
ColumnsInPhonePortrait: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInPhonePortraitIn, OS.Types.PhoneNumber),
ColumnsInTabletLandscape: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInTabletLandscapeIn, OS.Types.Integer),
ColumnsInPhoneLandscape: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInPhoneLandscapeIn, OS.Types.PhoneNumber),
GalleryObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.galleryVar, OS.Types.Object)
}, function ($parameters) {
}, {
GetDeviceOrientation: OutSystemsUIMobileController.default.clientActionProxies.getDeviceOrientation$Action,
IsPhone: OutSystemsUIMobileController.default.clientActionProxies.isPhone$Action,
IsTablet: OutSystemsUIMobileController.default.clientActionProxies.isTablet$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mZ9m8gwl1U+dxPSA0+4_EA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6ndhQ0Q4eU2XguEW9E0UXw", callContext.id);
}

};
Controller.prototype._onOrientationChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnOrientationChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:EeyecsYChkez1RZRnpr7ew:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.9rO3FufEKECdSsZVTsJAbw/ClientActions.EeyecsYChkez1RZRnpr7ew:acw+M3dVfb1AyddczoQfSA", "OutSystemsUIMobile", "OnOrientationChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eLfXt5R8TEy2lZosPbKqPQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JD_EA+rQa0q6NZS7kCylIg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnOrientationChange_OrientationChangeJS, "OrientationChange", "OnOrientationChange", {
ColumnsInTabletLandscape: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInTabletLandscapeIn, OS.Types.Integer),
ColumnsInPhonePortrait: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInPhonePortraitIn, OS.Types.PhoneNumber),
GalleryObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.galleryVar, OS.Types.Object),
UseGutter: OS.DataConversion.JSNodeParamConverter.to(model.variables.useGutterIn, OS.Types.Boolean),
ColumnsInPhoneLandscape: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInPhoneLandscapeIn, OS.Types.PhoneNumber),
ColumnsInTabletPortrait: OS.DataConversion.JSNodeParamConverter.to(model.variables.columnsInTabletPortraitIn, OS.Types.Integer),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Content"), OS.Types.Text)
}, function ($parameters) {
}, {
GetDeviceOrientation: OutSystemsUIMobileController.default.clientActionProxies.getDeviceOrientation$Action,
IsPhone: OutSystemsUIMobileController.default.clientActionProxies.isPhone$Action,
IsTablet: OutSystemsUIMobileController.default.clientActionProxies.isTablet$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zJPJc8fSUk6ed5P6zJAatA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:EeyecsYChkez1RZRnpr7ew", callContext.id);
}

};
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:CWKf_FSr5UCLXxPtHN2mHA:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.9rO3FufEKECdSsZVTsJAbw/ClientActions.CWKf_FSr5UCLXxPtHN2mHA:lP4UfGnqhwfpifnZHu_G9g", "OutSystemsUIMobile", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RcGFjSY9gkWZEk8r6xxMyA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e6uEFQOrEUqVrtXCbc7IaA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Adaptive_Gallery_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", null, function ($parameters) {
}, {
OnOrientationChange: controller.clientActionProxies.onOrientationChange$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iVED9elSH0S3k+JdX1G4nw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:CWKf_FSr5UCLXxPtHN2mHA", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.onOrientationChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onOrientationChange$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:9GgB6wiQjkOC68Dd0FW6zQ:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ:2NfF6efgk3t7_kG4D9BKSA", "OutSystemsUIMobile", "Adaptive", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:9rO3FufEKECdSsZVTsJAbw:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.9rO3FufEKECdSsZVTsJAbw:yXFO818hyjWeuwrxYo7Teg", "OutSystemsUIMobile", "Gallery", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:9rO3FufEKECdSsZVTsJAbw", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:9GgB6wiQjkOC68Dd0FW6zQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/Gallery On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/Gallery On Render");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/Gallery On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return OutSystemsUIMobileController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUIMobileLanguageResources);
});
define("OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnReady.InitJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GalleryObj = new Gallery();

var isPortrait = $actions.GetDeviceOrientation().Orientation === "portrait";
$parameters.GalleryObj.init($parameters.WidgetId, $parameters.ColumnsInTabletLandscape, $parameters.ColumnsInTabletPortrait, $parameters.ColumnsInPhoneLandscape, $parameters.ColumnsInPhonePortrait, $actions.IsPhone().IsPhone, $actions.IsTablet().IsTablet, isPortrait, $parameters.UseGutter);
};
});
define("OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnReady.OrientationChangeJS", [], function () {
return function ($actions, $roles, $public) {
window.addEventListener("orientationchange", $actions.OnOrientationChange, false);
};
});
define("OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnRender.UpdateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var isPortrait = $actions.GetDeviceOrientation().Orientation === "portrait";
$parameters.GalleryObj.update($parameters.WidgetId, $parameters.ColumnsInTabletLandscape, $parameters.ColumnsInTabletPortrait, $parameters.ColumnsInPhoneLandscape, $parameters.ColumnsInPhonePortrait, $actions.IsPhone().IsPhone, $actions.IsTablet().IsTablet, isPortrait, $parameters.UseGutter);
};
});
define("OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnOrientationChange.OrientationChangeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
setTimeout(function() {  
    var isPortrait = $actions.GetDeviceOrientation().Orientation === "portrait";
    $parameters.GalleryObj.update($parameters.WidgetId, $parameters.ColumnsInTabletLandscape, $parameters.ColumnsInTabletPortrait, $parameters.ColumnsInPhoneLandscape, $parameters.ColumnsInPhonePortrait, $actions.IsPhone().IsPhone, $actions.IsTablet().IsTablet, isPortrait, $parameters.UseGutter);
}, 500);
};
});
define("OutSystemsUIMobile.Adaptive.Gallery.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($actions, $roles, $public) {

window.removeEventListener("orientationchange", $actions.OnOrientationChange, false);
};
});

define("OutSystemsUIMobile.Adaptive.Gallery.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"kcpckUbBUUy5qC+a+WlUsA": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"zx7S_RX7s0mHdCr8Xbbabg": {
getter: function (varBag, idService) {
return varBag.orientationChangeJSResult.value;
}
},
"DiMlJ0KWzkqUSOztbqj+hg": {
getter: function (varBag, idService) {
return varBag.updateJSResult.value;
}
},
"JD_EA+rQa0q6NZS7kCylIg": {
getter: function (varBag, idService) {
return varBag.orientationChangeJSResult.value;
}
},
"e6uEFQOrEUqVrtXCbc7IaA": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"AacEy++vhkKoXcLp9rKibA": {
getter: function (varBag, idService) {
return varBag.model.variables.galleryVar;
},
dataType: OS.Types.Object
},
"2SE9mYjevEepcWUtfuCNew": {
getter: function (varBag, idService) {
return varBag.model.variables.columnsInPhonePortraitIn;
},
dataType: OS.Types.PhoneNumber
},
"HdBHPU2OVkajtU1qBB8Htw": {
getter: function (varBag, idService) {
return varBag.model.variables.columnsInPhoneLandscapeIn;
},
dataType: OS.Types.PhoneNumber
},
"ufC_SwAWNk6GU8aNuvYjRg": {
getter: function (varBag, idService) {
return varBag.model.variables.columnsInTabletPortraitIn;
},
dataType: OS.Types.Integer
},
"Wxs31Plvcky742ESwkLHuw": {
getter: function (varBag, idService) {
return varBag.model.variables.columnsInTabletLandscapeIn;
},
dataType: OS.Types.Integer
},
"Y3aXUNBpK0uXquSnNp66Og": {
getter: function (varBag, idService) {
return varBag.model.variables.useGutterIn;
},
dataType: OS.Types.Boolean
},
"XSuwFetIpkaLw4HRUd5+4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
