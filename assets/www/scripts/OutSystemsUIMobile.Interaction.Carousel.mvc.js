define("OutSystemsUIMobile.Interaction.Carousel.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.Utilities.TouchEvents.mvc$model"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobile_Utilities_TouchEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AutplayObj", "autplayObjVar", "AutplayObj", true, false, OS.Types.Object, function () {
return null;
}), 
this.attr("CarouselObj", "carouselObjVar", "CarouselObj", true, false, OS.Types.Object, function () {
return null;
}), 
this.attr("Velocity", "velocityVar", "Velocity", true, false, OS.Types.Decimal, function () {
return (new OS.DataTypes.Decimal("0.3"));
}), 
this.attr("IsAnimating", "isAnimatingVar", "IsAnimating", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ContainsClass", "containsClassVar", "ContainsClass", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("DragDirection", "dragDirectionVar", "DragDirection", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Navigation", "navigationIn", "Navigation", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_navigationInDataFetchStatus", "_navigationInDataFetchStatus", "_navigationInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Dots", "dotsIn", "Dots", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_dotsInDataFetchStatus", "_dotsInDataFetchStatus", "_dotsInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Margin", "marginIn", "Margin", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_marginInDataFetchStatus", "_marginInDataFetchStatus", "_marginInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Padding", "paddingIn", "Padding", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_paddingInDataFetchStatus", "_paddingInDataFetchStatus", "_paddingInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Autoplay", "autoplayIn", "Autoplay", true, false, OS.Types.Text, function () {
return OutSystemsUIMobileModel.staticEntities.autoplay.disabled;
}), 
this.attr("_autoplayInDataFetchStatus", "_autoplayInDataFetchStatus", "_autoplayInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Scale", "scaleIn", "Scale", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_scaleInDataFetchStatus", "_scaleInDataFetchStatus", "_scaleInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Loop", "loopIn", "Loop", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_loopInDataFetchStatus", "_loopInDataFetchStatus", "_loopInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Center", "centerIn", "Center", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_centerInDataFetchStatus", "_centerInDataFetchStatus", "_centerInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("InitialPosition", "initialPositionIn", "InitialPosition", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_initialPositionInDataFetchStatus", "_initialPositionInDataFetchStatus", "_initialPositionInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Items", "itemsIn", "Items", true, false, OS.Types.Integer, function () {
return 1;
}), 
this.attr("_itemsInDataFetchStatus", "_itemsInDataFetchStatus", "_itemsInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("Navigation" in inputs) {
this.variables.navigationIn = inputs.Navigation;
if("_navigationInDataFetchStatus" in inputs) {
this.variables._navigationInDataFetchStatus = inputs._navigationInDataFetchStatus;
}

}

if("Dots" in inputs) {
this.variables.dotsIn = inputs.Dots;
if("_dotsInDataFetchStatus" in inputs) {
this.variables._dotsInDataFetchStatus = inputs._dotsInDataFetchStatus;
}

}

if("Margin" in inputs) {
this.variables.marginIn = inputs.Margin;
if("_marginInDataFetchStatus" in inputs) {
this.variables._marginInDataFetchStatus = inputs._marginInDataFetchStatus;
}

}

if("Padding" in inputs) {
this.variables.paddingIn = inputs.Padding;
if("_paddingInDataFetchStatus" in inputs) {
this.variables._paddingInDataFetchStatus = inputs._paddingInDataFetchStatus;
}

}

if("Autoplay" in inputs) {
this.variables.autoplayIn = inputs.Autoplay;
if("_autoplayInDataFetchStatus" in inputs) {
this.variables._autoplayInDataFetchStatus = inputs._autoplayInDataFetchStatus;
}

}

if("Scale" in inputs) {
this.variables.scaleIn = inputs.Scale;
if("_scaleInDataFetchStatus" in inputs) {
this.variables._scaleInDataFetchStatus = inputs._scaleInDataFetchStatus;
}

}

if("Loop" in inputs) {
this.variables.loopIn = inputs.Loop;
if("_loopInDataFetchStatus" in inputs) {
this.variables._loopInDataFetchStatus = inputs._loopInDataFetchStatus;
}

}

if("Center" in inputs) {
this.variables.centerIn = inputs.Center;
if("_centerInDataFetchStatus" in inputs) {
this.variables._centerInDataFetchStatus = inputs._centerInDataFetchStatus;
}

}

if("InitialPosition" in inputs) {
this.variables.initialPositionIn = inputs.InitialPosition;
if("_initialPositionInDataFetchStatus" in inputs) {
this.variables._initialPositionInDataFetchStatus = inputs._initialPositionInDataFetchStatus;
}

}

if("Items" in inputs) {
this.variables.itemsIn = inputs.Items;
if("_itemsInDataFetchStatus" in inputs) {
this.variables._itemsInDataFetchStatus = inputs._itemsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Interaction.Carousel.mvc$model", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.TouchEvents.mvc$view"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Interaction_Carousel_mvc_model, OutSystemsUIMobile_Interaction_Carousel_mvc_controller, OSWidgets, OutSystemsUIMobile_Utilities_TouchEvents_mvc_view) {
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
        View.displayName = "Interaction.Carousel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUIMobile.Carousel.js"];
        };
        View.getBlocks = function() {
            return [OutSystemsUIMobile_Utilities_TouchEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Interaction_Carousel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Interaction_Carousel_mvc_controller;
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
extendedProperties: {
style: (("padding: 0 " + (model.variables.paddingIn).toString()) + "px")
},
style: "carousel init",
visible: true,
_idProps: {
service: idService,
name: "carousel"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "carousel-container",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.carouselItems,
style: "carousel-container-content",
_idProps: {
service: idService,
name: "CarouselItems"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/Carousel/Container onclick");
controller.previous$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("3lPAH6RnfEOChMTgNk_5Aw.Style"), function () {
return ("carousel-navigation carousel-navigation-left " + ((model.variables.navigationIn) ? ("") : (" hidden")));
}, function () {
return model.variables.navigationIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._navigationInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "angle-left",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/Carousel/Container onclick");
controller.next$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("zORsCbNZW02OmXzGBl05gg.Style"), function () {
return ("carousel-navigation carousel-navigation-right" + ((model.variables.navigationIn) ? ("") : (" hidden")));
}, function () {
return model.variables.navigationIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._navigationInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/Carousel/Icon onclick");
controller.previous$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "angle-right",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("+O3MenVcVUabQRQhNXZ1jg.Style"), function () {
return ("carousel-dots-container " + ((model.variables.dotsIn) ? ("") : ("disabled")));
}, function () {
return model.variables.dotsIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dotsInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "hide-on-service-studio",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_TouchEvents_mvc_view, {
inputs: {
WidgetId: idService.getId("carousel")
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
controller.gestureMove$Action(offsetXIn, evtIn, offsetYIn, controller.callContext(eventHandlerContext));
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
controller.gestureStart$Action(controller.callContext(eventHandlerContext));
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
controller.gestureEnd$Action(offsetXIn, timeTakenIn, 0, controller.callContext(eventHandlerContext));
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
uuid: "9",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GoTo.GetMaxElementsJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GoTo.GoToTargetJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GoTo.GoToLastJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.SetInterval.AutoplayLoopJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.Init.InitCarouselJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.Update.UpdateJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.ClearInterval.ClearIntervalJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.OnOrientationChange.OnOrientationChangeJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureStart.AddNoTransitionClassesJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureStart.RemoveNoTransitionJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureStart.CheckIfContainsClassJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureMove.AddNoTransitionClassesJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureMove.TransformUiJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureEnd.PrepareElementsJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureEnd.ChangeIsAnimatingStatusJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureEnd.BackToMiddleJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.Previous.PreviousJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.OnReady.CallingInitJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.Next.NextJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$controller.OnDestroy.RemoveListnerOnOrientationJS", "OutSystemsUIMobile.Interaction.Carousel.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GoTo_GetMaxElementsJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GoTo_GoToTargetJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GoTo_GoToLastJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_SetInterval_AutoplayLoopJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_Init_InitCarouselJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_Update_UpdateJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_ClearInterval_ClearIntervalJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_OnOrientationChange_OnOrientationChangeJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureStart_AddNoTransitionClassesJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureStart_RemoveNoTransitionJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureStart_CheckIfContainsClassJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureMove_AddNoTransitionClassesJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureMove_TransformUiJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureEnd_PrepareElementsJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureEnd_ChangeIsAnimatingStatusJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureEnd_BackToMiddleJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_Previous_PreviousJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_OnReady_CallingInitJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_Next_NextJS, OutSystemsUIMobile_Interaction_Carousel_mvc_controller_OnDestroy_RemoveListnerOnOrientationJS, OutSystemsUIMobile_Interaction_Carousel_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
next$Action: function () {
return controller.executeActionInsideJSNode(controller._next$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
previous$Action: function () {
return controller.executeActionInsideJSNode(controller._previous$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
goTo$Action: function (targetIn) {
targetIn = (targetIn === undefined) ? 0 : targetIn;
return controller.executeActionInsideJSNode(controller._goTo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(targetIn, OS.Types.Integer)), controller.callContext(), function (actionResults) {
return {};
});
},
update$Action: function () {
return controller.executeActionInsideJSNode(controller._update$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
changeIsAnimatingStatus$Action: function () {
return controller.executeActionInsideJSNode(controller._changeIsAnimatingStatus$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
onOrientationChange$Action: function () {
return controller.executeActionInsideJSNode(controller._onOrientationChange$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
},
init$Action: function () {
return controller.executeActionInsideJSNode(controller._init$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._changeIsAnimatingStatus$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ChangeIsAnimatingStatus");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:WAvNMvx6wUe6GV65E3znQA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.WAvNMvx6wUe6GV65E3znQA:BdYu0H4Rdl042dBTvBwCdw", "OutSystemsUIMobile", "ChangeIsAnimatingStatus", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:D0gD9IwydUquW60eVi8Iyg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Eqym0tjZIkqKKlI7pF1zwA", callContext.id);
// IsAnimating = False
model.variables.isAnimatingVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pemHhQF5XU6Both68tHwEA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:WAvNMvx6wUe6GV65E3znQA", callContext.id);
}

};
Controller.prototype._goTo$Action = function (targetIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GoTo");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GoTo$vars"))());
vars.value.targetInLocal = targetIn;
var getMaxElementsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getMaxElementsJSResult = getMaxElementsJSResult;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:CWD+VFGpG029nEk8wze__g:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.CWD+VFGpG029nEk8wze__g:gp2x2+w9qSGWYlTwiHA__g", "OutSystemsUIMobile", "GoTo", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UC3CrbiwV0ChmaTeRoH+cg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sFEmOQyXJ0ezgfvDjIBTZA", callContext.id);
getMaxElementsJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GoTo_GetMaxElementsJS, "GetMaxElements", "GoTo", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object),
MaxElements: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GoTo$getMaxElementsJSResult"))();
jsNodeResult.maxElementsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MaxElements, OS.Types.Integer);
return jsNodeResult;
}, {}, {});
// Autoplay?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2PMSfGW_Ik+b+AZdB26c5g", callContext.id) && ((model.variables.autoplayIn) !== (OutSystemsUIMobileModel.staticEntities.autoplay.disabled)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kyM29Rhy_kurIrr1iYgpwQ", callContext.id);
// Execute Action: ClearInterval
controller._clearInterval$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HlofwmCW_ke0p4VhABsZ7w", callContext.id);
// Execute Action: SetInterval
controller._setInterval$Action(callContext);
}

// elementExists?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:s7gavgOznEGn9dMflPWg5A", callContext.id) && (vars.value.targetInLocal >= getMaxElementsJSResult.value.maxElementsOut))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:k+312XpqU0SlT2XHRhmYbA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GoTo_GoToLastJS, "GoToLast", "GoTo", {
Target: OS.DataConversion.JSNodeParamConverter.to((getMaxElementsJSResult.value.maxElementsOut - 1), OS.Types.Integer),
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:A7Kpz3TaFEiNA++FbTwQTA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GoTo_GoToTargetJS, "GoToTarget", "GoTo", {
Target: OS.DataConversion.JSNodeParamConverter.to(vars.value.targetInLocal, OS.Types.Integer),
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mh4N83pPLkGDMYmj17l8vA", callContext.id);
// Trigger Event: OnItemChange
return controller.onItemChange$Action(vars.value.targetInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IHfUtFRocUevQbSr0aQAtw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:CWD+VFGpG029nEk8wze__g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:CWD+VFGpG029nEk8wze__g", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GoTo$vars", [{
name: "Target",
attrName: "targetInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GoTo$getMaxElementsJSResult", [{
name: "MaxElements",
attrName: "maxElementsOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._setInterval$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetInterval");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.SetInterval$vars"))());
var autoplayLoopJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.autoplayLoopJSResult = autoplayLoopJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:oBa4dSkY_kuxHi9bSEjWpw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.oBa4dSkY_kuxHi9bSEjWpw:h5zJVcy_x2kqtcxkip8sLw", "OutSystemsUIMobile", "SetInterval", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JSsfxd5Af0+VbRU3ryFTug", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:T76yv2KAtkuMsOxjk2BLAA", callContext.id) && (model.variables.autoplayIn === OutSystemsUIMobileModel.staticEntities.autoplay.slow))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6aNl+5YcWk+LxX+LiV0nmA", callContext.id);
// AutoplayValue = 8000
vars.value.autoplayValueVar = 8000;
} else {
if((model.variables.autoplayIn === OutSystemsUIMobileModel.staticEntities.autoplay.normal)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:j7tBXgwEKE2swKZgSehAvw", callContext.id);
// AutoplayValue = 5000
vars.value.autoplayValueVar = 5000;
} else {
if((model.variables.autoplayIn === OutSystemsUIMobileModel.staticEntities.autoplay.fast)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lwIBcK2o0UOJtnccABAhYg", callContext.id);
// AutoplayValue = 2000
vars.value.autoplayValueVar = 2000;
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e+TVxu0wyk+RXI7hjVLB7w", callContext.id);
return ;

}

}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RQWjFN7rF025OjDfTH0+Tg", callContext.id);
autoplayLoopJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_SetInterval_AutoplayLoopJS, "AutoplayLoop", "SetInterval", {
Autoplay: OS.DataConversion.JSNodeParamConverter.to(vars.value.autoplayValueVar, OS.Types.Integer),
AutoplayObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.SetInterval$autoplayLoopJSResult"))();
jsNodeResult.autoplayObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AutoplayObj, OS.Types.Object);
return jsNodeResult;
}, {
Next: controller.clientActionProxies.next$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eyN0M15yfkq162mddkWy+Q", callContext.id);
// AutplayObj = AutoplayLoop.AutoplayObj
model.variables.autplayObjVar = autoplayLoopJSResult.value.autoplayObjOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9XjsisFO4U2RADXHqTAV1A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:oBa4dSkY_kuxHi9bSEjWpw", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.SetInterval$vars", [{
name: "AutoplayValue",
attrName: "autoplayValueVar",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.SetInterval$autoplayLoopJSResult", [{
name: "AutoplayObj",
attrName: "autoplayObjOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._init$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Init");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:DXlhflRQHEWvJvSsH5iRaw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.DXlhflRQHEWvJvSsH5iRaw:6jjTYel73oa_wV8XO0YqNw", "OutSystemsUIMobile", "Init", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qdX_H8YBCkqR4agyGrlizQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Cv_eDfW+sEWUWEp6Kg7Waw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_Init_InitCarouselJS, "InitCarousel", "Init", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("carousel"), OS.Types.Text)
}, function ($parameters) {
}, {
Next: controller.clientActionProxies.next$Action,
Previous: controller.clientActionProxies.previous$Action,
GoTo: controller.clientActionProxies.goTo$Action,
Update: controller.clientActionProxies.update$Action
}, {});
// Autoplay?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0yZd7j2B106ErgGgLJkdzA", callContext.id) && ((model.variables.autoplayIn) !== (OutSystemsUIMobileModel.staticEntities.autoplay.disabled)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0dm82CG70kmnEhNeQtqnHQ", callContext.id);
// Execute Action: SetInterval
controller._setInterval$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7m4N+XQvZEmt6XxKkw6SQQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7m4N+XQvZEmt6XxKkw6SQQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:DXlhflRQHEWvJvSsH5iRaw", callContext.id);
}

};
Controller.prototype._update$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Update");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:LqtDhvLlC0SzTjCf7V84bg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.LqtDhvLlC0SzTjCf7V84bg:hBJyUTddXuIlld3HjXiCHA", "OutSystemsUIMobile", "Update", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kmgkPOdiakioaeE8cwV29Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:f9+ZtCnZik6lnAPRkzxFEA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_Update_UpdateJS, "Update", "Update", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lOWmSu_cj0G5v1pupnKxRQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:LqtDhvLlC0SzTjCf7V84bg", callContext.id);
}

};
Controller.prototype._clearInterval$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ClearInterval");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:aIZShmBfBkGQyjp4Sbly_g:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.aIZShmBfBkGQyjp4Sbly_g:iwaa+4QBEsdyb3ito5rOlA", "OutSystemsUIMobile", "ClearInterval", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N8+oDkjbaEe05REBeeeusg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:duQCVJ9N+kGsAf4CKWyD7Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_ClearInterval_ClearIntervalJS, "ClearInterval", "ClearInterval", {
AutoplayObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.autplayObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:neNY2GDd+EyNd1nc+kUzvA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:aIZShmBfBkGQyjp4Sbly_g", callContext.id);
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:dmX_mFSK5EawGA3ns+ZSYQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.dmX_mFSK5EawGA3ns+ZSYQ:a0LwPpGSZpRwQhlZLIrJAQ", "OutSystemsUIMobile", "OnOrientationChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8Km_DEslskirVdVMHKKazg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:u15PLDrnQke5+em9gWu1Yg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_OnOrientationChange_OnOrientationChangeJS, "OnOrientationChange", "OnOrientationChange", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:M_4E_ShDTUq9RtoJwEYnKg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:dmX_mFSK5EawGA3ns+ZSYQ", callContext.id);
}

};
Controller.prototype._gestureStart$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureStart");
callContext = controller.callContext(callContext);
var checkIfContainsClassJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkIfContainsClassJSResult = checkIfContainsClassJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:waj3mSF9JkGOuAzpKrlI3A:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.waj3mSF9JkGOuAzpKrlI3A:0Koohq_EH2EAxGjpWV9OHg", "OutSystemsUIMobile", "GestureStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hjNp7L+MwkaYiKvU1kf23g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LyLB1nW42kup_Wg2Rg_fNA", callContext.id) && model.variables.isAnimatingVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:C6MsUyJJAkGp5Sc4AB+LDQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hIXPbodJy0KvSZm6dKiSMQ", callContext.id);
// Execute Action: ClearInterval
controller._clearInterval$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:uhxwnWPtpUKODtFBAO6Cgw", callContext.id);
checkIfContainsClassJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureStart_CheckIfContainsClassJS, "CheckIfContainsClass", "GestureStart", {
CarouselId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("carousel"), OS.Types.Text),
ContainsClass: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GestureStart$checkIfContainsClassJSResult"))();
jsNodeResult.containsClassOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ContainsClass, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Z3KyOFqxEE+X1YAAI94yzQ", callContext.id);
// ContainsClass = CheckIfContainsClass.ContainsClass
model.variables.containsClassVar = checkIfContainsClassJSResult.value.containsClassOut;
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Wq_ft2MTZkuRtzS5HHxlTQ", callContext.id) && model.variables.containsClassVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5xZEefHx90Cap3rHX6dkCg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureStart_RemoveNoTransitionJS, "RemoveNoTransition", "GestureStart", {
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("carousel"), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bev2f4ARSkSExKcIgVXhKg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1EEJccKBhUmunoSfxoYHxg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureStart_AddNoTransitionClassesJS, "AddNoTransitionClasses", "GestureStart", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bev2f4ARSkSExKcIgVXhKg", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:waj3mSF9JkGOuAzpKrlI3A", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GestureStart$checkIfContainsClassJSResult", [{
name: "ContainsClass",
attrName: "containsClassOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._gestureMove$Action = function (offsetXIn, evtIn, offsetYIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureMove");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GestureMove$vars"))());
vars.value.offsetXInLocal = offsetXIn;
vars.value.evtInLocal = evtIn;
vars.value.offsetYInLocal = offsetYIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:55zuqwHA2EmTCX18apEPLw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.55zuqwHA2EmTCX18apEPLw:9i2QWR6jHTTWiyF_ovO3yw", "OutSystemsUIMobile", "GestureMove", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cV85lVICLk+9Kjuc4xpn1Q", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GkUJWprfH0KERtQdzSfuhw", callContext.id) && model.variables.isAnimatingVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SKfc+sEMIUWGjTCgabsHDg", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Wz0PtViyKESioe9oMc3jtA", callContext.id) && model.variables.containsClassVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RKe9aychX0O10bgC1WG4hg", callContext.id);
// ContainsClass = True
model.variables.containsClassVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SKfc+sEMIUWGjTCgabsHDg", callContext.id);
} else {
// No direction set?
do {
// No direction set?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7dUyT505B0G_fQYPSUlXFw", callContext.id) && (model.variables.dragDirectionVar === ""))) {
// Set drag direction
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FMkrZYOZVEuyGXUSd90y6Q", callContext.id);
// DragDirection = If
model.variables.dragDirectionVar = ((OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).gte(OS.BuiltinFunctions.abs(vars.value.offsetYInLocal))) ? ("horizontal") : ("vertical"));
// Is vertical?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:M679+1F_+U+o18fMtIgXeQ", callContext.id) && (model.variables.dragDirectionVar === "vertical"))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EWwCYy8GLUO247O8dtiyVQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureMove_AddNoTransitionClassesJS, "AddNoTransitionClasses", "GestureMove", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
break;
}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iHgxzKp3_06O4QkXfbnjIA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureMove_TransformUiJS, "TransformUi", "GestureMove", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object),
Evt: OS.DataConversion.JSNodeParamConverter.to(vars.value.evtInLocal, OS.Types.Object),
OffsetX: OS.DataConversion.JSNodeParamConverter.to(vars.value.offsetXInLocal, OS.Types.Decimal)
}, function ($parameters) {
}, {}, {});
} while(false)
;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rP45tHaYpEahR0x+sZuhCw", callContext.id);
// DragDirection = ""
model.variables.dragDirectionVar = "";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eTNT+hoK5kiO2zw4IZeXTQ", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:55zuqwHA2EmTCX18apEPLw", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GestureMove$vars", [{
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Evt",
attrName: "evtInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.prototype._gestureEnd$Action = function (offsetXIn, timeTakenIn, elementhWidthIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GestureEnd");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GestureEnd$vars"))());
vars.value.offsetXInLocal = offsetXIn;
vars.value.timeTakenInLocal = timeTakenIn;
vars.value.elementhWidthInLocal = elementhWidthIn;
var prepareElementsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.prepareElementsJSResult = prepareElementsJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:HxpArIhi5k62x2DwIHrERw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.HxpArIhi5k62x2DwIHrERw:IVLg01kQuGacbmIxK+olYA", "OutSystemsUIMobile", "GestureEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iVSvBlBvk06rBbyaXLr3gg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:22d28hoKZky+IGfGQ8ebZQ", callContext.id) && model.variables.isAnimatingVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sjsncpe76kiXfGZZoaK_4g", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SvADCcol8EipVvPTfo2jWw", callContext.id) && model.variables.containsClassVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Kj4cdBMuMk2ll9wrceCRhw", callContext.id);
// ContainsClass = True
model.variables.containsClassVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sjsncpe76kiXfGZZoaK_4g", callContext.id);
} else {
do {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OpY+PtQctUWVrMkYCbKsWg", callContext.id);
// RemoveNoTransitionClasses and GetElementWidth
prepareElementsJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureEnd_PrepareElementsJS, "PrepareElements", "GestureEnd", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object),
ElementWidth: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GestureEnd$prepareElementsJSResult"))();
jsNodeResult.elementWidthOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ElementWidth, OS.Types.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mn51pSufEE600iUAiB_IMw", callContext.id);
// ElementhWidth = PrepareElements.ElementWidth
vars.value.elementhWidthInLocal = prepareElementsJSResult.value.elementWidthOut;
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+FEm10loWkCubyW5MhNBPA", callContext.id) && vars.value.offsetXInLocal.gt(OS.BuiltinFunctions.integerToDecimal(0)))) {
// DidItPassHalf?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QyjaE+tYLEe4egNThXt4Jg", callContext.id) && (vars.value.offsetXInLocal.gt(OS.BuiltinFunctions.integerToDecimal(vars.value.elementhWidthInLocal).div(OS.BuiltinFunctions.integerToDecimal(3))) || OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:K7a4SdrvekGf1K+vbuo+gQ", callContext.id);
// Execute Action: Previous
controller._previous$Action(callContext);
break;
}

} else {
if(vars.value.offsetXInLocal.lt(OS.BuiltinFunctions.integerToDecimal(0))) {
// DidItPassHalf?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6RZYDujaIUSGVdN1W3fUxg", callContext.id) && (vars.value.offsetXInLocal.lt(OS.BuiltinFunctions.integerToDecimal(vars.value.elementhWidthInLocal).div(OS.BuiltinFunctions.integerToDecimal(3)).times(OS.BuiltinFunctions.integerToDecimal(-1))) || OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vaZFtNPZPU2banplWOZArQ", callContext.id);
// Execute Action: Next
controller._next$Action(callContext);
break;
}

}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CSNTvHM5VE65OGbW658oWw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureEnd_BackToMiddleJS, "BackToMiddle", "GestureEnd", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:srJDcyM8X0WuYhqS3YfMsA", callContext.id);
// Execute Action: ClearInterval
controller._clearInterval$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oDfXh7gCy0GB6_qRnNsETA", callContext.id);
// Execute Action: SetInterval
controller._setInterval$Action(callContext);
} while(false)
;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yK+zw5f5kUabh3j1Yvp44Q", callContext.id);
// IsAnimating = True
model.variables.isAnimatingVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oxk7Z5qsfUyOsAUFgel0jA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_GestureEnd_ChangeIsAnimatingStatusJS, "ChangeIsAnimatingStatus", "GestureEnd", null, function ($parameters) {
}, {
ChangeIsAnimatingStatus: controller.clientActionProxies.changeIsAnimatingStatus$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VD2Cx0RkW0eSzZM6NKL7UQ", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:HxpArIhi5k62x2DwIHrERw", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GestureEnd$vars", [{
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "TimeTaken",
attrName: "timeTakenInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "ElementhWidth",
attrName: "elementhWidthInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.GestureEnd$prepareElementsJSResult", [{
name: "ElementWidth",
attrName: "elementWidthOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._previous$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Previous");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:fYkirezbM0ieZWqMvq6GcA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.fYkirezbM0ieZWqMvq6GcA:NtmMSNlcwQpzk5udxv9xjA", "OutSystemsUIMobile", "Previous", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mQzEl3s_EEKy5f66HXRydQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FtyI5mSDf0yEp63mRcK4Cg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_Previous_PreviousJS, "Previous", "Previous", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Jq+AGYb5Yk2wXuH4zdlfqA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:fYkirezbM0ieZWqMvq6GcA", callContext.id);
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
var callingInitJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.callingInitJSResult = callingInitJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:F6k1xyste0KaI3m0Em+0Ng:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.F6k1xyste0KaI3m0Em+0Ng:F2CYO8++3C0860Zg2NraPQ", "OutSystemsUIMobile", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MSFIbe5GDkW8HFLc16UOBg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1jRoAX+mwUCIcBYANwncqQ", callContext.id);
callingInitJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_OnReady_CallingInitJS, "CallingInit", "OnReady", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("carousel"), OS.Types.Text),
Loop: OS.DataConversion.JSNodeParamConverter.to(model.variables.loopIn, OS.Types.Boolean),
Dots: OS.DataConversion.JSNodeParamConverter.to(model.variables.dotsIn, OS.Types.Boolean),
Center: OS.DataConversion.JSNodeParamConverter.to(model.variables.centerIn, OS.Types.Boolean),
Scale: OS.DataConversion.JSNodeParamConverter.to(model.variables.scaleIn, OS.Types.Boolean),
Items: OS.DataConversion.JSNodeParamConverter.to(model.variables.itemsIn, OS.Types.Integer),
Margin: OS.DataConversion.JSNodeParamConverter.to(model.variables.marginIn, OS.Types.Integer),
InitialPosition: OS.DataConversion.JSNodeParamConverter.to(model.variables.initialPositionIn, OS.Types.Integer),
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.OnReady$callingInitJSResult"))();
jsNodeResult.carouselObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CarouselObj, OS.Types.Object);
return jsNodeResult;
}, {
OnOrientationChange: controller.clientActionProxies.onOrientationChange$Action,
Init: controller.clientActionProxies.init$Action,
GoTo: controller.clientActionProxies.goTo$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Wj8sOTtID0WPEHxfHYo78g", callContext.id);
// CarouselObj = CallingInit.CarouselObj
model.variables.carouselObjVar = callingInitJSResult.value.carouselObjOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Tfpob+XT5UmxTmPceRSNZA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:F6k1xyste0KaI3m0Em+0Ng", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.Carousel.OnReady$callingInitJSResult", [{
name: "CarouselObj",
attrName: "carouselObjOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._next$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Next");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_KUd0lr_mUuqIYQ+cx3sOw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions._KUd0lr_mUuqIYQ+cx3sOw:duiHbnzS7hwXKvbR0pAH+w", "OutSystemsUIMobile", "Next", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JcwdlwsFvEKSf8PA6BHNMg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TgpEm+xDtE+pwfzMx1UvOg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_Next_NextJS, "Next", "Next", {
CarouselObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.carouselObjVar, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PdMcmWYg306pCXMFVAhw8g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_KUd0lr_mUuqIYQ+cx3sOw", callContext.id);
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:hPSb6euLFUqrgeNNlBVQFg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.hPSb6euLFUqrgeNNlBVQFg:oE5TCGBCloh1Z5OrUGsMow", "OutSystemsUIMobile", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZEq6UIuHWUqOBQwe4xWZ0A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pKgeKb8ISECgqtDoWamH1w", callContext.id);
// IsAnimating = False
model.variables.isAnimatingVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tU_NYbOvmEm_0h1dM0tj1Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:hPSb6euLFUqrgeNNlBVQFg", callContext.id);
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3fe18WMbuU2J3dljlSKchQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw/ClientActions.3fe18WMbuU2J3dljlSKchQ:JJVxI78r0Vb0NSrlQ7G8Ig", "OutSystemsUIMobile", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CAY2RfOWMUeX5TvjqM32Fg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9iMi9mT890aXXddmZ0kSfA", callContext.id);
// JS Node to remove EventListner orientationchange
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_Carousel_mvc_controller_OnDestroy_RemoveListnerOnOrientationJS, "RemoveListnerOnOrientation", "OnDestroy", null, function ($parameters) {
}, {
OnOrientationChange: controller.clientActionProxies.onOrientationChange$Action
}, {});
// Autoplay?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:d4DZ+Xbkk0CqAX0YaJqpMg", callContext.id) && ((model.variables.autoplayIn) !== (OutSystemsUIMobileModel.staticEntities.autoplay.disabled)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oIbocrnYrEeaaM5bZJnmbA", callContext.id);
// Execute Action: ClearInterval
controller._clearInterval$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c6BYectR1kSrQFl8hO4lrQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c6BYectR1kSrQFl8hO4lrQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3fe18WMbuU2J3dljlSKchQ", callContext.id);
}

};

Controller.prototype.changeIsAnimatingStatus$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._changeIsAnimatingStatus$Action, callContext);

};
Controller.prototype.goTo$Action = function (targetIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goTo$Action, callContext, targetIn);

};
Controller.prototype.setInterval$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setInterval$Action, callContext);

};
Controller.prototype.init$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._init$Action, callContext);

};
Controller.prototype.update$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._update$Action, callContext);

};
Controller.prototype.clearInterval$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._clearInterval$Action, callContext);

};
Controller.prototype.onOrientationChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onOrientationChange$Action, callContext);

};
Controller.prototype.gestureStart$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureStart$Action, callContext);

};
Controller.prototype.gestureMove$Action = function (offsetXIn, evtIn, offsetYIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureMove$Action, callContext, offsetXIn, evtIn, offsetYIn);

};
Controller.prototype.gestureEnd$Action = function (offsetXIn, timeTakenIn, elementhWidthIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._gestureEnd$Action, callContext, offsetXIn, timeTakenIn, elementhWidthIn);

};
Controller.prototype.previous$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._previous$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.next$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._next$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onItemChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:EpHg5wu_cXV36BMGcNgbYQ", "OutSystemsUIMobile", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:j4ETHa78c06aaqQRCkYiYw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.j4ETHa78c06aaqQRCkYiYw:GPae8tfJokBTGuwtkcnNGw", "OutSystemsUIMobile", "Carousel", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:j4ETHa78c06aaqQRCkYiYw", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/Carousel On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/Carousel On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/Carousel On Destroy");
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
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GoTo.GetMaxElementsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.MaxElements = $parameters.CarouselObj.getMaxElements();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GoTo.GoToTargetJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.goTo($parameters.Target);
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GoTo.GoToLastJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.goTo($parameters.Target);
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.SetInterval.AutoplayLoopJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.AutoplayObj = setInterval(function(){
    $actions.Next();
},$parameters.Autoplay);
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.Init.InitCarouselJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId);
element = element.querySelector('.carousel-container-content');

// Add actions
element.next = function() { $actions.Next(); };
element.previous = function() { $actions.Previous(); };
element.goto = function(i) { $actions.GoTo(i); };
element.updateCarousel = function() { $actions.Update(); };


};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.Update.UpdateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.updateCarousel();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.ClearInterval.ClearIntervalJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
clearInterval($parameters.AutoplayObj);
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.OnOrientationChange.OnOrientationChangeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.onOrientationChange();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureStart.AddNoTransitionClassesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.addNoTransitionClasses();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureStart.RemoveNoTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id);
var carouselContent = el.querySelector(".carousel-container-content");

carouselContent.classList.remove("no-transition");
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureStart.CheckIfContainsClassJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var carouselSwipe = document.getElementById($parameters.CarouselId);

if(carouselSwipe.classList.contains('no-swipe')){
    $parameters.ContainsClass = true;
} else {
    $parameters.ContainsClass = false;
}
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureMove.AddNoTransitionClassesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.addNoTransitionClasses();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureMove.TransformUiJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.gestureMove($parameters.OffsetX);
$parameters.Evt.preventDefault();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureEnd.PrepareElementsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.removeNoTransitionClasses();
$parameters.ElementWidth = $parameters.CarouselObj.getNodeWidth();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureEnd.ChangeIsAnimatingStatusJS", [], function () {
return function ($actions, $roles, $public) {
var TimeoutClear = setTimeout(function(){
    $actions.ChangeIsAnimatingStatus();
    clearTimeout(TimeoutClear);
},300);
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.GestureEnd.BackToMiddleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.backToMiddle();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.Previous.PreviousJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.previous();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.OnReady.CallingInitJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.addEventListener('orientationchange', $actions.OnOrientationChange);
$parameters.CarouselObj = new newCarousel();

var opts = {
    
    //OS parameters
    widgetId: $parameters.WidgetId,
    margin: $parameters.Margin,
    initialPosition: $parameters.InitialPosition,
    items: $parameters.Items,
    center: $parameters.Center,
    scale: $parameters.Scale,
    loop: $parameters.Loop,
    dots: $parameters.Dots,
    
    //OS actions
    initAction: $actions.Init(),
    goToAction: $actions.GoTo
};

$parameters.CarouselObj.init(opts);
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.Next.NextJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CarouselObj.next();
};
});
define("OutSystemsUIMobile.Interaction.Carousel.mvc$controller.OnDestroy.RemoveListnerOnOrientationJS", [], function () {
return function ($actions, $roles, $public) {
window.removeEventListener('orientationchange', $actions.OnOrientationChange);
};
});

define("OutSystemsUIMobile.Interaction.Carousel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"1PhuMfdOG0KuA0h4I6xELw": {
getter: function (varBag, idService) {
return varBag.vars.value.targetInLocal;
},
dataType: OS.Types.Integer
},
"sFEmOQyXJ0ezgfvDjIBTZA": {
getter: function (varBag, idService) {
return varBag.getMaxElementsJSResult.value;
}
},
"A7Kpz3TaFEiNA++FbTwQTA": {
getter: function (varBag, idService) {
return varBag.goToTargetJSResult.value;
}
},
"k+312XpqU0SlT2XHRhmYbA": {
getter: function (varBag, idService) {
return varBag.goToLastJSResult.value;
}
},
"qPh85cAgOkiXoMOKbL2DWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.autoplayValueVar;
},
dataType: OS.Types.Integer
},
"RQWjFN7rF025OjDfTH0+Tg": {
getter: function (varBag, idService) {
return varBag.autoplayLoopJSResult.value;
}
},
"Cv_eDfW+sEWUWEp6Kg7Waw": {
getter: function (varBag, idService) {
return varBag.initCarouselJSResult.value;
}
},
"f9+ZtCnZik6lnAPRkzxFEA": {
getter: function (varBag, idService) {
return varBag.updateJSResult.value;
}
},
"duQCVJ9N+kGsAf4CKWyD7Q": {
getter: function (varBag, idService) {
return varBag.clearIntervalJSResult.value;
}
},
"u15PLDrnQke5+em9gWu1Yg": {
getter: function (varBag, idService) {
return varBag.onOrientationChangeJSResult.value;
}
},
"1EEJccKBhUmunoSfxoYHxg": {
getter: function (varBag, idService) {
return varBag.addNoTransitionClassesJSResult.value;
}
},
"5xZEefHx90Cap3rHX6dkCg": {
getter: function (varBag, idService) {
return varBag.removeNoTransitionJSResult.value;
}
},
"uhxwnWPtpUKODtFBAO6Cgw": {
getter: function (varBag, idService) {
return varBag.checkIfContainsClassJSResult.value;
}
},
"AfF1tnuvB06kw8cwuzSTtg": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.Types.Decimal
},
"pYNsEYxK_ku763IO+mlBVw": {
getter: function (varBag, idService) {
return varBag.vars.value.evtInLocal;
},
dataType: OS.Types.Object
},
"zaU73WcBg0Kjluho6e3hqg": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.Types.Decimal
},
"EWwCYy8GLUO247O8dtiyVQ": {
getter: function (varBag, idService) {
return varBag.addNoTransitionClassesJSResult.value;
}
},
"iHgxzKp3_06O4QkXfbnjIA": {
getter: function (varBag, idService) {
return varBag.transformUiJSResult.value;
}
},
"HFJaZZVeCUaP3GPKMeTzcw": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.Types.Decimal
},
"QNJ0i_3jJEiyNud4kCDJDQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeTakenInLocal;
},
dataType: OS.Types.Decimal
},
"rH1CLXQqmUKN3YFIyW4D_A": {
getter: function (varBag, idService) {
return varBag.vars.value.elementhWidthInLocal;
},
dataType: OS.Types.Integer
},
"OpY+PtQctUWVrMkYCbKsWg": {
getter: function (varBag, idService) {
return varBag.prepareElementsJSResult.value;
}
},
"oxk7Z5qsfUyOsAUFgel0jA": {
getter: function (varBag, idService) {
return varBag.changeIsAnimatingStatusJSResult.value;
}
},
"CSNTvHM5VE65OGbW658oWw": {
getter: function (varBag, idService) {
return varBag.backToMiddleJSResult.value;
}
},
"FtyI5mSDf0yEp63mRcK4Cg": {
getter: function (varBag, idService) {
return varBag.previousJSResult.value;
}
},
"1jRoAX+mwUCIcBYANwncqQ": {
getter: function (varBag, idService) {
return varBag.callingInitJSResult.value;
}
},
"TgpEm+xDtE+pwfzMx1UvOg": {
getter: function (varBag, idService) {
return varBag.nextJSResult.value;
}
},
"9iMi9mT890aXXddmZ0kSfA": {
getter: function (varBag, idService) {
return varBag.removeListnerOnOrientationJSResult.value;
}
},
"fMqYC4g4vUm5NGh7JYTcRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.autplayObjVar;
},
dataType: OS.Types.Object
},
"7vnk3mjoZEyjOGPcJ+nZ8g": {
getter: function (varBag, idService) {
return varBag.model.variables.carouselObjVar;
},
dataType: OS.Types.Object
},
"DBbmwL0R5keWDgOgI3z8dw": {
getter: function (varBag, idService) {
return varBag.model.variables.velocityVar;
},
dataType: OS.Types.Decimal
},
"_C2Yxl8tHki1uZcfmC5T2w": {
getter: function (varBag, idService) {
return varBag.model.variables.isAnimatingVar;
},
dataType: OS.Types.Boolean
},
"rh62LaBvZ0m3Te2EpMzxHQ": {
getter: function (varBag, idService) {
return varBag.model.variables.containsClassVar;
},
dataType: OS.Types.Boolean
},
"F26USlbF60SF3JI_udNpWw": {
getter: function (varBag, idService) {
return varBag.model.variables.dragDirectionVar;
},
dataType: OS.Types.Text
},
"sLTvoCx5mkSx6GtSFIKYRw": {
getter: function (varBag, idService) {
return varBag.model.variables.navigationIn;
},
dataType: OS.Types.Boolean
},
"pQcYIqB2vEi2MHYUhDGAtw": {
getter: function (varBag, idService) {
return varBag.model.variables.dotsIn;
},
dataType: OS.Types.Boolean
},
"fdUWeGcRGU2vZ3LE_ROfCg": {
getter: function (varBag, idService) {
return varBag.model.variables.marginIn;
},
dataType: OS.Types.Integer
},
"+PXC03YM1EODLGyRT82mcw": {
getter: function (varBag, idService) {
return varBag.model.variables.paddingIn;
},
dataType: OS.Types.Integer
},
"00GCsVRuL0mx8TPbpV3lTg": {
getter: function (varBag, idService) {
return varBag.model.variables.autoplayIn;
},
dataType: OS.Types.Text
},
"xFr01i2+3UWNa3L6yzUg5Q": {
getter: function (varBag, idService) {
return varBag.model.variables.scaleIn;
},
dataType: OS.Types.Boolean
},
"bIFpGHf5BUWSw8+_pEZJxw": {
getter: function (varBag, idService) {
return varBag.model.variables.loopIn;
},
dataType: OS.Types.Boolean
},
"sTnRSURgLEy6uj1NjVrkGg": {
getter: function (varBag, idService) {
return varBag.model.variables.centerIn;
},
dataType: OS.Types.Boolean
},
"3FtmbGDJ1k+pdlh_Ntwvlg": {
getter: function (varBag, idService) {
return varBag.model.variables.initialPositionIn;
},
dataType: OS.Types.Integer
},
"V8_KlvL3tk+TKCtRoNXhAQ": {
getter: function (varBag, idService) {
return varBag.model.variables.itemsIn;
},
dataType: OS.Types.Integer
},
"MXAoQvs4JU2XwGtkbqXXXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("carousel"));
})(varBag.model, idService);
}
},
"HZLBmPnEbkSlBYmQPJNekg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CarouselItems"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
