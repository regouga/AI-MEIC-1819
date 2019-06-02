define("OutSystemsUIMobile.Private.MenuDrag.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.Utilities.TouchEvents.mvc$model"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobile_Utilities_TouchEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsMoving", "isMovingVar", "IsMoving", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("MoveX", "moveXVar", "MoveX", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MenuWidth", "menuWidthVar", "MenuWidth", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsOpen", "isOpenVar", "IsOpen", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("LastX", "lastXVar", "LastX", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("LastY", "lastYVar", "LastY", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DragDirection", "dragDirectionVar", "DragDirection", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("PreventDefault", "preventDefaultVar", "PreventDefault", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("FloatingActionsExists", "floatingActionsExistsVar", "FloatingActionsExists", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("BurgerMenuExists", "burgerMenuExistsVar", "BurgerMenuExists", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Velocity", "velocityVar", "Velocity", true, false, OS.Types.Decimal, function () {
return (new OS.DataTypes.Decimal("0.3"));
}), 
this.attr("BackExists", "backExistsVar", "BackExists", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsMenuHidden", "isMenuHiddenVar", "IsMenuHidden", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsRTL", "isRTLVar", "IsRTL", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("MenuId", "menuIdIn", "MenuId", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("_menuIdInDataFetchStatus", "_menuIdInDataFetchStatus", "_menuIdInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = OutSystemsUIMobile_Utilities_TouchEvents_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("MenuId" in inputs) {
this.variables.menuIdIn = inputs.MenuId;
if("_menuIdInDataFetchStatus" in inputs) {
this.variables._menuIdInDataFetchStatus = inputs._menuIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Private.MenuDrag.mvc$model", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller", "OutSystemsUIMobile.Utilities.TouchEvents.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Private_MenuDrag_mvc_model, OutSystemsUIMobile_Private_MenuDrag_mvc_controller, OutSystemsUIMobile_Utilities_TouchEvents_mvc_view, OSWidgets) {
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
        View.displayName = "Private.MenuDrag";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUIMobile_Utilities_TouchEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Private_MenuDrag_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Private_MenuDrag_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OutSystemsUIMobile_Utilities_TouchEvents_mvc_view, {
inputs: {
WidgetId: model.variables.menuIdIn,
_widgetIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
move$Action: function (xIn, yIn, offsetXIn, offsetYIn, evtIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents Move");
controller.gestureMove$Action(OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(xIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(yIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(offsetXIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(offsetYIn)), evtIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
end$Action: function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents End");
controller.gestureEnd$Action(OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(offsetXIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(offsetYIn)), timeTakenIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
start$Action: function (xIn, yIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents Start");
controller.gestureStart$Action(OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(xIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(yIn)), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
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
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureMove.SetOpacityJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureMove.PreventDefaultWDirectionJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureMove.UpdateUIJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.OpenEnitreMenuJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.GoBackJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.RemoveClasses2JS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.SendMenuToStartJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.RemoveTransitionJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.UpdateUI.MoveMenuJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureStart.CheckMenuOpenJS", "OutSystemsUIMobile.Private.MenuDrag.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureMove_SetOpacityJS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureMove_PreventDefaultWDirectionJS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureMove_UpdateUIJS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_OpenEnitreMenuJS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_GoBackJS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_RemoveClasses2JS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_SendMenuToStartJS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_RemoveTransitionJS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_UpdateUI_MoveMenuJS, OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureStart_CheckMenuOpenJS, OutSystemsUIMobile_Private_MenuDrag_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
updateUI$Action: function () {
return controller.executeActionInsideJSNode(controller._updateUI$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._gestureMove$Action = function (xIn, yIn, offsetXIn, offsetYIn, evtIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureMove");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.MenuDrag.GestureMove$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.evtInLocal = evtIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:M+wFCRh6RkmXD4FnnE8PIQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Xc4sF2idH0amt_6E9odfDg/ClientActions.M+wFCRh6RkmXD4FnnE8PIQ:CeU+HZPZFhEZb8eYbo7F8w", "OutSystemsUIMobile", "GestureMove", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QLaBQJc800yyiViVAMbd1g", callContext.id);
// No direction set?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BAZF0fjPZE+6UG0r3GFyAg", callContext.id) && (model.variables.dragDirectionVar === ""))) {
// Set drag direction
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8mgwQ4URUUykbsaz7SvPFg", callContext.id);
// DragDirection = If
model.variables.dragDirectionVar = ((OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal)).gte(OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(vars.value.offsetYInLocal)))) ? ("horizontal") : ("vertical"));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:x7pq+BeKeEGRJxSKmLQsoA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureMove_UpdateUIJS, "UpdateUI", "GestureMove", null, function ($parameters) {
}, {
UpdateUI: controller.clientActionProxies.updateUI$Action
}, {});
}

if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NFv2hGckNEms1bODHGCNaw", callContext.id) && model.variables.floatingActionsExistsVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DJ_nI818xUOafy2Q2k_jog", callContext.id);
} else {
// Menu Icons Conditions
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kZH4wnWxhk21ockwcur92w", callContext.id) && ((model.variables.backExistsVar || !(model.variables.burgerMenuExistsVar)) || model.variables.isMenuHiddenVar))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DJ_nI818xUOafy2Q2k_jog", callContext.id);
} else {
// Is vertical?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UP9CMnK2XEuAFrkw6IC+sQ", callContext.id) && (model.variables.dragDirectionVar === "vertical"))) {
// Update Last Positions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_ZJbTEgblEm2snSCAwLT2Q", callContext.id);
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_ZJbTEgblEm2snSCAwLT2Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IhQk+IzgjkmllpiIDj7IcQ", callContext.id);
} else {
do {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gg7NpMB6j0eTE0yZI1JGAA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureMove_PreventDefaultWDirectionJS, "PreventDefaultWDirection", "GestureMove", {
Evt: OS.DataConversion.JSNodeParamConverter.to(vars.value.evtInLocal, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aGLydPZqUESqPjb9QNvyNA", callContext.id) && model.variables.isRTLVar)) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kNP89H+3g0qFTTUJg1z34A", callContext.id) && !((((model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar)) < model.variables.menuWidthVar) && ((model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar)) >= 0))))) {
break;
}

} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SaTnm7aRAU+ouJZoPUtJ2g", callContext.id) && !((((model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar)) > -model.variables.menuWidthVar) && ((model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar)) <= 0))))) {
break;
}

}

// Update menu X axis offset
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tRjWk8u480ioh6fb5gSJ1g", callContext.id);
// MoveX = MoveX + X - LastX
model.variables.moveXVar = (model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar));
} while(false)
;
// Update Last Positions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:luFLQsChkk2cY5Mxx+1PYg", callContext.id);
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:luFLQsChkk2cY5Mxx+1PYg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+STFkCasnkGQ_Wu4wvjYUg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureMove_SetOpacityJS, "SetOpacity", "GestureMove", {
MenuWidth: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToDecimal(model.variables.menuWidthVar), OS.Types.Decimal),
MoveX: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar), OS.Types.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lW6aZt8KL0m7mymbuc9g3g", callContext.id);
}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:M+wFCRh6RkmXD4FnnE8PIQ", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.MenuDrag.GestureMove$vars", [{
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Evt",
attrName: "evtInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:FJuNWjBUO0qdZqIEP7l0HA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Xc4sF2idH0amt_6E9odfDg/ClientActions.FJuNWjBUO0qdZqIEP7l0HA:xs661RnPIuCGhM3453TdgQ", "OutSystemsUIMobile", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fytWxuJ8hEix41dWwPAhSg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0IqrhY4t3UKzIl9jAHW1AA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:FJuNWjBUO0qdZqIEP7l0HA", callContext.id);
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:4vAOfFq3rEKxSmZoKByrRw:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Xc4sF2idH0amt_6E9odfDg/ClientActions.4vAOfFq3rEKxSmZoKByrRw:Trm7YzDlJyl7eaZuhx7NIg", "OutSystemsUIMobile", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:do8Yww4tik6xVBVdF5HrsA", callContext.id);
// Set initial conditions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ceeDTIVG+EuMHOHXWPG5FQ", callContext.id);
// IsOpen = False
model.variables.isOpenVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ceeDTIVG+EuMHOHXWPG5FQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// MenuWidth = 0
model.variables.menuWidthVar = 0;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ceeDTIVG+EuMHOHXWPG5FQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// LastX = 0
model.variables.lastXVar = 0;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ceeDTIVG+EuMHOHXWPG5FQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// LastY = 0
model.variables.lastYVar = 0;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ceeDTIVG+EuMHOHXWPG5FQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// MoveX = 0
model.variables.moveXVar = 0;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ceeDTIVG+EuMHOHXWPG5FQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// DragDirection = ""
model.variables.dragDirectionVar = "";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ceeDTIVG+EuMHOHXWPG5FQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// PreventDefault = False
model.variables.preventDefaultVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ceeDTIVG+EuMHOHXWPG5FQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// FloatingActionsExists = False
model.variables.floatingActionsExistsVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Hasr+ggYx0WIUTRjoOV0Nw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:4vAOfFq3rEKxSmZoKByrRw", callContext.id);
}

};
Controller.prototype._gestureEnd$Action = function (offsetXIn, offsetYIn, timeTakenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureEnd");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.MenuDrag.GestureEnd$vars"))());
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.timeTakenInLocal = timeTakenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:15COh+H_uUWtDcf4uNIVbA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Xc4sF2idH0amt_6E9odfDg/ClientActions.15COh+H_uUWtDcf4uNIVbA:HDf6TGoiUhmzcMBk3IzC2Q", "OutSystemsUIMobile", "GestureEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5wtGekauaUupR+LoLLsYdw", callContext.id);
// Set not moving
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mxTNTZtjgk2hDC_NvePjJQ", callContext.id);
// IsMoving = False
model.variables.isMovingVar = false;
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ybw+QJ3D30aO2prYAIBzjg", callContext.id) && !(model.variables.isMenuHiddenVar))) {
// Just Clicked?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mkAaiCChV0Os_Gy00NZfSw", callContext.id) && ((vars.value.offsetXInLocal === 0) && (vars.value.offsetYInLocal === 0)))) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qP81_uzkKEOVYyn90MW+zA", callContext.id) && !(model.variables.isOpenVar))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wZGRIbb+ykSF5JqnkdCFcQ", callContext.id);
return ;

}

} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gVhUEz4Qt0uYCXp0Wm1ZdQ", callContext.id) && model.variables.backExistsVar)) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DzLgrELpm0ed7PZYig3AIQ", callContext.id) && model.variables.isRTLVar)) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4qJup3xT9EGPrAS9dxPK6A", callContext.id) && !((vars.value.offsetXInLocal < 0)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PtAmgp63gEKNHNBY7UsX4w", callContext.id);
return ;

}

} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RlcFJ2dwlE6v+mo1CMYrvQ", callContext.id) && !((vars.value.offsetXInLocal > 0)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Cl7eFVt8HUG2dN4g2WsuIA", callContext.id);
return ;

}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:13V3L2qE3kuSI3bSamNecg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_GoBackJS, "GoBack", "GestureEnd", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_joJfc0BVk+6tl0YWbok1A", callContext.id);
return ;

} else {
var block2 = false;
do {
block2 = false;
do {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:skYo0eVnJE2VIYgLRXVQJw", callContext.id) && model.variables.isOpenVar)) {
// Closed one third?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5hQvb1goOkS_i1hQzG_hNA", callContext.id) && (OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal).lt(OS.BuiltinFunctions.integerToDecimal((-1 * model.variables.menuWidthVar)).div(OS.BuiltinFunctions.integerToDecimal(2))) || OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal)).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar)))) {
break;
}

} else {
// Opened two thirds?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eNnaTB6IPEq7QkAY5xPknw", callContext.id) && !((OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal).gt(OS.BuiltinFunctions.integerToDecimal((1 * model.variables.menuWidthVar)).div(OS.BuiltinFunctions.integerToDecimal(2))) || OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal)).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar))))) {
break;
}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+7D3GjgWn0eOcHnc8Jszxg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_OpenEnitreMenuJS, "OpenEnitreMenu", "GestureEnd", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rJtQjbhWNEeMQINODfsInA", callContext.id);
// IsOpen = True
model.variables.isOpenVar = true;
// jump to block2
block2 = true;
break;
} while(false)
;
if(block2) {
break;
}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JRainGe7yEOXQ2Kv1koD6w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_SendMenuToStartJS, "SendMenuToStart", "GestureEnd", {
OffsetX: OS.DataConversion.JSNodeParamConverter.to(vars.value.offsetXInLocal, OS.Types.Integer),
IsRTL: OS.DataConversion.JSNodeParamConverter.to(model.variables.isRTLVar, OS.Types.Boolean),
IsOpen: OS.DataConversion.JSNodeParamConverter.to(model.variables.isOpenVar, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
// Are you dragging on the opposite direction with the menu open
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:D+1AK78zCkSwEFbDrQxgdg", callContext.id) && (((vars.value.offsetXInLocal < 0) && !(model.variables.isRTLVar)) || ((vars.value.offsetXInLocal > 0) && model.variables.isRTLVar)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:es2TuJfc00iy8GQLLzIpyg", callContext.id);
// IsOpen = False
model.variables.isOpenVar = false;
}

} while(false)
;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6YXn4u+I1k6ump3kpR+rzg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_RemoveTransitionJS, "RemoveTransition", "GestureEnd", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1CybIrksJ0uMjgnUZsRlTw", callContext.id);
return ;

}

}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:90F2isvmskWuVa0Leq1DYA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureEnd_RemoveClasses2JS, "RemoveClasses2", "GestureEnd", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wZGRIbb+ykSF5JqnkdCFcQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:15COh+H_uUWtDcf4uNIVbA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.MenuDrag.GestureEnd$vars", [{
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "TimeTaken",
attrName: "timeTakenInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.prototype._updateUI$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("UpdateUI");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:quEwrsqVhkSIy6q3VM9DLg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Xc4sF2idH0amt_6E9odfDg/ClientActions.quEwrsqVhkSIy6q3VM9DLg:G9HmnUPOUYN7iqs3Rwoqrg", "OutSystemsUIMobile", "UpdateUI", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dPL7roQPgUCxzTP_Lt7sYQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:K6SQbQ8q7Uq+FadizzAApQ", callContext.id) && model.variables.isMovingVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_xhQTFydeUO7GCKxiefA8w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_UpdateUI_MoveMenuJS, "MoveMenu", "UpdateUI", {
MoveX: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar), OS.Types.Decimal)
}, function ($parameters) {
}, {
UpdateUI: controller.clientActionProxies.updateUI$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zPK2i_tAIEyDMDYcXO2kgQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ea4TIOVQPEC6IMacLe2NCg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:quEwrsqVhkSIy6q3VM9DLg", callContext.id);
}

};
Controller.prototype._gestureStart$Action = function (xIn, yIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.MenuDrag.GestureStart$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
var checkMenuOpenJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkMenuOpenJSResult = checkMenuOpenJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:EfLa4KeBDEuQNaDfL+FABQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Xc4sF2idH0amt_6E9odfDg/ClientActions.EfLa4KeBDEuQNaDfL+FABQ:hDgH03t4YZ96gZxNvK6AeA", "OutSystemsUIMobile", "GestureStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gwBv+y0QSkyuC4Nl1XpYyg", callContext.id);
// Menu is moving
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gfQGLLDobE2pL8H7+E5Jmw", callContext.id);
// IsMoving = True
model.variables.isMovingVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HDLuqWjoOEaHVp9z8aI8Jw", callContext.id);
checkMenuOpenJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Private_MenuDrag_mvc_controller_GestureStart_CheckMenuOpenJS, "CheckMenuOpen", "GestureStart", {
BackExists: OS.DataConversion.JSNodeParamConverter.to(model.variables.backExistsVar, OS.Types.Boolean),
IsOpen: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean),
MenuWidth: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer),
isFloatingAction: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean),
isBurgerIconVisible: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean),
isBackIconVisible: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean),
IsMenuHidden: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean),
isRTL: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.MenuDrag.GestureStart$checkMenuOpenJSResult"))();
jsNodeResult.isOpenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsOpen, OS.Types.Boolean);
jsNodeResult.menuWidthOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MenuWidth, OS.Types.Integer);
jsNodeResult.isFloatingActionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isFloatingAction, OS.Types.Boolean);
jsNodeResult.isBurgerIconVisibleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isBurgerIconVisible, OS.Types.Boolean);
jsNodeResult.isBackIconVisibleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isBackIconVisible, OS.Types.Boolean);
jsNodeResult.isMenuHiddenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsMenuHidden, OS.Types.Boolean);
jsNodeResult.isRTLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isRTL, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
// Set initial conditions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id);
// BackExists = CheckMenuOpen.isBackIconVisible
model.variables.backExistsVar = checkMenuOpenJSResult.value.isBackIconVisibleOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// BurgerMenuExists = CheckMenuOpen.isBurgerIconVisible
model.variables.burgerMenuExistsVar = checkMenuOpenJSResult.value.isBurgerIconVisibleOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsMenuHidden = CheckMenuOpen.IsMenuHidden
model.variables.isMenuHiddenVar = checkMenuOpenJSResult.value.isMenuHiddenOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsOpen = CheckMenuOpen.IsOpen
model.variables.isOpenVar = checkMenuOpenJSResult.value.isOpenOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// MenuWidth = CheckMenuOpen.MenuWidth
model.variables.menuWidthVar = checkMenuOpenJSResult.value.menuWidthOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// IsRTL = CheckMenuOpen.isRTL
model.variables.isRTLVar = checkMenuOpenJSResult.value.isRTLOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// MoveX = If
model.variables.moveXVar = ((model.variables.burgerMenuExistsVar) ? (((model.variables.isOpenVar) ? (0) : (((model.variables.isRTLVar) ? (model.variables.menuWidthVar) : (-model.variables.menuWidthVar))))) : ((-model.variables.menuWidthVar * 2)));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// DragDirection = ""
model.variables.dragDirectionVar = "";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// PreventDefault = True
model.variables.preventDefaultVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDwbok0DekidtxWG3OsHFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// FloatingActionsExists = CheckMenuOpen.isFloatingAction
model.variables.floatingActionsExistsVar = checkMenuOpenJSResult.value.isFloatingActionOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9jOCeS2JcUCc_IiDvvkmkQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:EfLa4KeBDEuQNaDfL+FABQ", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.MenuDrag.GestureStart$vars", [{
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.MenuDrag.GestureStart$checkMenuOpenJSResult", [{
name: "IsOpen",
attrName: "isOpenOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "MenuWidth",
attrName: "menuWidthOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "isFloatingAction",
attrName: "isFloatingActionOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "isBurgerIconVisible",
attrName: "isBurgerIconVisibleOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "isBackIconVisible",
attrName: "isBackIconVisibleOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsMenuHidden",
attrName: "isMenuHiddenOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "isRTL",
attrName: "isRTLOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.gestureMove$Action = function (xIn, yIn, offsetXIn, offsetYIn, evtIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureMove$Action, callContext, xIn, yIn, offsetXIn, offsetYIn, evtIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.gestureEnd$Action = function (offsetXIn, offsetYIn, timeTakenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureEnd$Action, callContext, offsetXIn, offsetYIn, timeTakenIn);

};
Controller.prototype.updateUI$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._updateUI$Action, callContext);

};
Controller.prototype.gestureStart$Action = function (xIn, yIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureStart$Action, callContext, xIn, yIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:KNabe2jYx8zVoKDWt9xjrw", "OutSystemsUIMobile", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Xc4sF2idH0amt_6E9odfDg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Xc4sF2idH0amt_6E9odfDg:BKiGX4aUvvQjTtpchkI0Eg", "OutSystemsUIMobile", "MenuDrag", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Xc4sF2idH0amt_6E9odfDg", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/MenuDrag On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/MenuDrag On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
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
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureMove.SetOpacityJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var overlay = document.querySelector('.menu-background');

if(overlay) {
    overlay.classList.add('no-transition');
    
    var percentageBeforeDif = (Math.abs($parameters.MoveX) * 100) / $parameters.MenuWidth;
    var percentage = 100 - percentageBeforeDif;
    
    var newOpacity = percentage.toFixed(0)/100;
    
    if(overlay.style.opacity !== newOpacity && newOpacity.toFixed % 1 !== 0) {
        overlay.style.opacity = newOpacity;
    }
}

};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureMove.PreventDefaultWDirectionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Evt.preventDefault();
};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureMove.UpdateUIJS", [], function () {
return function ($actions, $roles, $public) {
requestAnimationFrame($actions.UpdateUI);
};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.OpenEnitreMenuJS", [], function () {
return function ($actions, $roles, $public) {
var el = document.querySelector('.app-menu-container');

el.style.transform =  "";
el.style.webkitTransform =  "";

var menu = document.querySelector('.menu');

menu.classList.add('menu--visible');

var menuOverlay = document.querySelector('.menu-background');
if(menuOverlay) {
    menuOverlay.style.opacity = "";
}
};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.GoBackJS", [], function () {
return function ($actions, $roles, $public) {
window.history.back();
};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.RemoveClasses2JS", [], function () {
return function ($actions, $roles, $public) {
var menu = document.querySelector('.menu');
var appMenu = document.querySelector('.app-menu-container');
var content = document.querySelector('.screen');

appMenu.classList.remove("no-transition");
menu.classList.remove("no-transition");
content.classList.remove("no-transition");
};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.SendMenuToStartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var menu = document.querySelector('.menu');

if(!$parameters.IsRTL) {
    if($parameters.OffsetX < 0 || !$parameters.IsOpen) {    
        close();
    }
} else {
    if($parameters.OffsetX > 0 || !$parameters.IsOpen) {
        close();
    }
}


function close() {
    var appMenu = document.querySelector('.app-menu-container');
    var menuOverlay = document.querySelector('.menu-background');

    if(menuOverlay) {
        menuOverlay.style.opacity = "";
    }
    
    appMenu.style.transform =  "";
    appMenu.style.webkitTransform =  "";
    
    menu.classList.remove('menu--visible');
    
    menu.addEventListener("transitionend", OnTransitionEnd, false);
}

function OnTransitionEnd() {
    menu.classList.remove('menu--animatable');
    menu.removeEventListener("transitionend", OnTransitionEnd);
}

};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureEnd.RemoveTransitionJS", [], function () {
return function ($actions, $roles, $public) {
var menu = document.querySelector('.menu');
var appMenu = document.querySelector('.app-menu-container');
var menuBackground = document.querySelector('.menu-background');

menu.classList.remove('no-transition');
appMenu.classList.remove("no-transition");

if(menuBackground) {
    menuBackground.classList.remove("no-transition");
}

menu.classList.add('menu--animatable');


};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.UpdateUI.MoveMenuJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.querySelector('.app-menu-container');

el.style.transform =  "translateX(" + $parameters.MoveX + "px)";
el.style.webkitTransform =  "translateX(" + $parameters.MoveX + "px)";

requestAnimationFrame($actions.UpdateUI);
};
});
define("OutSystemsUIMobile.Private.MenuDrag.mvc$controller.GestureStart.CheckMenuOpenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var layoutOpen = document.querySelector('.menu.menu--visible');
var menu = document.querySelector('.menu');
var appMenu = document.querySelector('.app-menu-container');
var isTablet = document.querySelector('body.tablet.landscape');
var isRTL = document.querySelector('.is-rtl');

var burgerIcon = document.querySelector('.app-menu-icon .app-menu-burger');
var backIcon = document.querySelector('.app-menu-icon.back .app-menu-back');

if(!$parameters.BackExists) {
    menu.classList.add("no-transition");
    appMenu.classList.add("no-transition");
}

if (layoutOpen !== null) {
    $parameters.IsOpen = true;
}

$parameters.MenuWidth = document.querySelector('.app-menu').offsetWidth;
var floatingActions = document.querySelector('.floating-actions--visible');

if (floatingActions !== null) {
    $parameters.isFloatingAction = true;
}

 if (burgerIcon !== null && backIcon === null) {
    $parameters.isBurgerIconVisible = true;
} else if (backIcon !== null) {
    $parameters.isBackIconVisible = true;
} else if (burgerIcon === null && backIcon === null) {
    $parameters.IsMenuHidden = true;
}

if(isRTL) {
    $parameters.isRTL = true;
}



};
});

define("OutSystemsUIMobile.Private.MenuDrag.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"5jrODjkkaEWdu2PiCfJ6gg": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.Types.Integer
},
"m92oQL6Kwk+TbMJ1dx2aaQ": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.Types.Integer
},
"zILSQDODzk2wrB5Rlbp+ng": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.Types.Integer
},
"4r7Qfv5vxUiUijUR4vFeVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.Types.Integer
},
"RYmg2F_5oEaeCNnQmDvPkw": {
getter: function (varBag, idService) {
return varBag.vars.value.evtInLocal;
},
dataType: OS.Types.Object
},
"+STFkCasnkGQ_Wu4wvjYUg": {
getter: function (varBag, idService) {
return varBag.setOpacityJSResult.value;
}
},
"gg7NpMB6j0eTE0yZI1JGAA": {
getter: function (varBag, idService) {
return varBag.preventDefaultWDirectionJSResult.value;
}
},
"x7pq+BeKeEGRJxSKmLQsoA": {
getter: function (varBag, idService) {
return varBag.updateUIJSResult.value;
}
},
"vv7acF5V0EOnADgeI03mqw": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.Types.Integer
},
"wbzoNLvOqE6fqjWpacpcLw": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.Types.Integer
},
"LesmAad6Rkq5Zxgr2YypnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeTakenInLocal;
},
dataType: OS.Types.Decimal
},
"+7D3GjgWn0eOcHnc8Jszxg": {
getter: function (varBag, idService) {
return varBag.openEnitreMenuJSResult.value;
}
},
"13V3L2qE3kuSI3bSamNecg": {
getter: function (varBag, idService) {
return varBag.goBackJSResult.value;
}
},
"90F2isvmskWuVa0Leq1DYA": {
getter: function (varBag, idService) {
return varBag.removeClasses2JSResult.value;
}
},
"JRainGe7yEOXQ2Kv1koD6w": {
getter: function (varBag, idService) {
return varBag.sendMenuToStartJSResult.value;
}
},
"6YXn4u+I1k6ump3kpR+rzg": {
getter: function (varBag, idService) {
return varBag.removeTransitionJSResult.value;
}
},
"_xhQTFydeUO7GCKxiefA8w": {
getter: function (varBag, idService) {
return varBag.moveMenuJSResult.value;
}
},
"a2I+J_EJNk+Tm5pxrEqsFg": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.Types.Integer
},
"DFKsKJafw0mckpYJrRyA9Q": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.Types.Integer
},
"HDLuqWjoOEaHVp9z8aI8Jw": {
getter: function (varBag, idService) {
return varBag.checkMenuOpenJSResult.value;
}
},
"0eEuN1vNK0CUs+g7uk9WYg": {
getter: function (varBag, idService) {
return varBag.model.variables.isMovingVar;
},
dataType: OS.Types.Boolean
},
"_6iSvSsMdE+smvkdsRA+_w": {
getter: function (varBag, idService) {
return varBag.model.variables.moveXVar;
},
dataType: OS.Types.Integer
},
"jzs540jW60aZXxrXnOKkLA": {
getter: function (varBag, idService) {
return varBag.model.variables.menuWidthVar;
},
dataType: OS.Types.Integer
},
"qtAUURqSpUiKi2yCoV5hGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isOpenVar;
},
dataType: OS.Types.Boolean
},
"Wiczb+7leEOWV3v8kYUy6w": {
getter: function (varBag, idService) {
return varBag.model.variables.lastXVar;
},
dataType: OS.Types.Integer
},
"GTy7jJQh4UqSfuXcJKUBmQ": {
getter: function (varBag, idService) {
return varBag.model.variables.lastYVar;
},
dataType: OS.Types.Integer
},
"P9VTaOGn5EGoFUGtK934Ng": {
getter: function (varBag, idService) {
return varBag.model.variables.dragDirectionVar;
},
dataType: OS.Types.Text
},
"s5fWSjDJOk6aU1vcNgWgfw": {
getter: function (varBag, idService) {
return varBag.model.variables.preventDefaultVar;
},
dataType: OS.Types.Boolean
},
"x_kv8vHWnke5Ht4R06RIng": {
getter: function (varBag, idService) {
return varBag.model.variables.floatingActionsExistsVar;
},
dataType: OS.Types.Boolean
},
"BP4YVxN9SkGFILK26h838g": {
getter: function (varBag, idService) {
return varBag.model.variables.burgerMenuExistsVar;
},
dataType: OS.Types.Boolean
},
"Jj_gKIhfEUSf2TfNuWNObg": {
getter: function (varBag, idService) {
return varBag.model.variables.velocityVar;
},
dataType: OS.Types.Decimal
},
"pfJ+ZDmBYESGDN8HC5ZcDA": {
getter: function (varBag, idService) {
return varBag.model.variables.backExistsVar;
},
dataType: OS.Types.Boolean
},
"HbvVhvQFBkmkEWiUBfHIWw": {
getter: function (varBag, idService) {
return varBag.model.variables.isMenuHiddenVar;
},
dataType: OS.Types.Boolean
},
"mj9AhtU05U6pI6kr7B95Hw": {
getter: function (varBag, idService) {
return varBag.model.variables.isRTLVar;
},
dataType: OS.Types.Boolean
},
"BkEPc51+pk6wKWUZeTYQPg": {
getter: function (varBag, idService) {
return varBag.model.variables.menuIdIn;
},
dataType: OS.Types.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
