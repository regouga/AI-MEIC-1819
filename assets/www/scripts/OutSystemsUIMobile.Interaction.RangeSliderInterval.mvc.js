define("OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord"], function (OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SliderObj", "sliderObjVar", "SliderObj", true, false, OS.Types.Object, function () {
return null;
}), 
this.attr("CurrentOptions", "currentOptionsVar", "CurrentOptions", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord());
}, OutSystemsUIMobileModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord), 
this.attr("MinValue", "minValueIn", "MinValue", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_minValueInDataFetchStatus", "_minValueInDataFetchStatus", "_minValueInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MaxValue", "maxValueIn", "MaxValue", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_maxValueInDataFetchStatus", "_maxValueInDataFetchStatus", "_maxValueInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("InitialIntervalStart", "initialIntervalStartIn", "InitialIntervalStart", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_initialIntervalStartInDataFetchStatus", "_initialIntervalStartInDataFetchStatus", "_initialIntervalStartInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("InitialIntervalEnd", "initialIntervalEndIn", "InitialIntervalEnd", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_initialIntervalEndInDataFetchStatus", "_initialIntervalEndInDataFetchStatus", "_initialIntervalEndInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Step", "stepIn", "Step", true, false, OS.Types.Integer, function () {
return 1;
}), 
this.attr("_stepInDataFetchStatus", "_stepInDataFetchStatus", "_stepInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowPips", "showPipsIn", "ShowPips", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_showPipsInDataFetchStatus", "_showPipsInDataFetchStatus", "_showPipsInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PipsStep", "pipsStepIn", "PipsStep", true, false, OS.Types.Integer, function () {
return -1;
}), 
this.attr("_pipsStepInDataFetchStatus", "_pipsStepInDataFetchStatus", "_pipsStepInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideIn", "ChangeEventDuringSlide", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_changeEventDuringSlideInDataFetchStatus", "_changeEventDuringSlideInDataFetchStatus", "_changeEventDuringSlideInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AdvancedFormat", "advancedFormatIn", "AdvancedFormat", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("_advancedFormatInDataFetchStatus", "_advancedFormatInDataFetchStatus", "_advancedFormatInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("MinValue" in inputs) {
this.variables.minValueIn = inputs.MinValue;
if("_minValueInDataFetchStatus" in inputs) {
this.variables._minValueInDataFetchStatus = inputs._minValueInDataFetchStatus;
}

}

if("MaxValue" in inputs) {
this.variables.maxValueIn = inputs.MaxValue;
if("_maxValueInDataFetchStatus" in inputs) {
this.variables._maxValueInDataFetchStatus = inputs._maxValueInDataFetchStatus;
}

}

if("InitialIntervalStart" in inputs) {
this.variables.initialIntervalStartIn = inputs.InitialIntervalStart;
if("_initialIntervalStartInDataFetchStatus" in inputs) {
this.variables._initialIntervalStartInDataFetchStatus = inputs._initialIntervalStartInDataFetchStatus;
}

}

if("InitialIntervalEnd" in inputs) {
this.variables.initialIntervalEndIn = inputs.InitialIntervalEnd;
if("_initialIntervalEndInDataFetchStatus" in inputs) {
this.variables._initialIntervalEndInDataFetchStatus = inputs._initialIntervalEndInDataFetchStatus;
}

}

if("Step" in inputs) {
this.variables.stepIn = inputs.Step;
if("_stepInDataFetchStatus" in inputs) {
this.variables._stepInDataFetchStatus = inputs._stepInDataFetchStatus;
}

}

if("ShowPips" in inputs) {
this.variables.showPipsIn = inputs.ShowPips;
if("_showPipsInDataFetchStatus" in inputs) {
this.variables._showPipsInDataFetchStatus = inputs._showPipsInDataFetchStatus;
}

}

if("PipsStep" in inputs) {
this.variables.pipsStepIn = inputs.PipsStep;
if("_pipsStepInDataFetchStatus" in inputs) {
this.variables._pipsStepInDataFetchStatus = inputs._pipsStepInDataFetchStatus;
}

}

if("ChangeEventDuringSlide" in inputs) {
this.variables.changeEventDuringSlideIn = inputs.ChangeEventDuringSlide;
if("_changeEventDuringSlideInDataFetchStatus" in inputs) {
this.variables._changeEventDuringSlideInDataFetchStatus = inputs._changeEventDuringSlideInDataFetchStatus;
}

}

if("AdvancedFormat" in inputs) {
this.variables.advancedFormatIn = inputs.AdvancedFormat;
if("_advancedFormatInDataFetchStatus" in inputs) {
this.variables._advancedFormatInDataFetchStatus = inputs._advancedFormatInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$model", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_model, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.RangeSliderInterval";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.Interaction.RangeSliderInterval.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUIMobile.NoUISlider.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller;
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "noUi-wrapper SliderInterval",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: model.getCachedValue(idService.getId("Slider.class"), function () {
return ((model.variables.showPipsIn) ? ("noUi-pips-margin") : (""));
}, function () {
return model.variables.showPipsIn;
})
},
visible: true,
_idProps: {
service: idService,
name: "Slider"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller.OnReady.InitSlider2JS", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller.ValuesChange.GetSelectedValueJS", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller.OnParametersChanged.UpdateSliderJS", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller.OnParametersChanged.UpdateValueJS", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$debugger", "OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller_OnReady_InitSlider2JS, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller_ValuesChange_GetSelectedValueJS, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller_OnParametersChanged_UpdateSliderJS, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller_OnParametersChanged_UpdateValueJS, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
valuesChange$Action: function (valuesIn) {
valuesIn = (valuesIn === undefined) ? null : valuesIn;
return controller.executeActionInsideJSNode(controller._valuesChange$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(valuesIn, OS.Types.Object)), controller.callContext(), function (actionResults) {
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
var initSlider2JSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.initSlider2JSResult = initSlider2JSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3EcwEcXQgUucV7HIIqlCLA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.2J3Qkb5Sd0aClRf2qgv+Kg/ClientActions.3EcwEcXQgUucV7HIIqlCLA:SRa+VM0NWPfhaR6TO5qi8w", "OutSystemsUIMobile", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bp87w3HrhE2T_nuSr7SXMQ", callContext.id);
// PipsStep not specified?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nVXLEZ_dKU2VUUJLSds6Mg", callContext.id) && (model.variables.pipsStepIn === -1))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E6sin9Y7MkO5swSHpXwE9A", callContext.id);
// PipsStep = Step
model.variables.pipsStepIn = model.variables.stepIn;
}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:snLOi7I8BUefm_ekpSVpxA", callContext.id);
initSlider2JSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller_OnReady_InitSlider2JS, "InitSlider2", "OnReady", {
SliderContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Slider"), OS.Types.Text),
AdvancedFormat: OS.DataConversion.JSNodeParamConverter.to(model.variables.advancedFormatIn, OS.Types.Text),
ShowPips: OS.DataConversion.JSNodeParamConverter.to(model.variables.showPipsIn, OS.Types.Boolean),
ChangeEventDuringSlide: OS.DataConversion.JSNodeParamConverter.to(model.variables.changeEventDuringSlideIn, OS.Types.Boolean),
InitialIntervalEnd: OS.DataConversion.JSNodeParamConverter.to(model.variables.initialIntervalEndIn, OS.Types.Integer),
InitialIntervalStart: OS.DataConversion.JSNodeParamConverter.to(model.variables.initialIntervalStartIn, OS.Types.Integer),
Step: OS.DataConversion.JSNodeParamConverter.to(model.variables.stepIn, OS.Types.Integer),
PipsStep: OS.DataConversion.JSNodeParamConverter.to(model.variables.pipsStepIn, OS.Types.Integer),
Max: OS.DataConversion.JSNodeParamConverter.to(model.variables.maxValueIn, OS.Types.Integer),
Min: OS.DataConversion.JSNodeParamConverter.to(model.variables.minValueIn, OS.Types.Integer),
SliderObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.RangeSliderInterval.OnReady$initSlider2JSResult"))();
jsNodeResult.sliderObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SliderObj, OS.Types.Object);
return jsNodeResult;
}, {
ValuesChange: controller.clientActionProxies.valuesChange$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6fOjgoG1W0ahd8nv3y1gsw", callContext.id);
// SliderObj = InitSlider2.SliderObj
model.variables.sliderObjVar = initSlider2JSResult.value.sliderObjOut;
// CurrentOptions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4RbUmpL5TEKIyguyVWSvng", callContext.id);
// CurrentOptions.InitialIntervalStart = InitialIntervalStart
model.variables.currentOptionsVar.initialIntervalStartAttr = model.variables.initialIntervalStartIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4RbUmpL5TEKIyguyVWSvng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentOptions.ChangeEventDuringSlide = ChangeEventDuringSlide
model.variables.currentOptionsVar.changeEventDuringSlideAttr = model.variables.changeEventDuringSlideIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4RbUmpL5TEKIyguyVWSvng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CurrentOptions.MaxValue = MaxValue
model.variables.currentOptionsVar.maxValueAttr = model.variables.maxValueIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4RbUmpL5TEKIyguyVWSvng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// CurrentOptions.MinValue = MinValue
model.variables.currentOptionsVar.minValueAttr = model.variables.minValueIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4RbUmpL5TEKIyguyVWSvng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// CurrentOptions.PipsStep = PipsStep
model.variables.currentOptionsVar.pipsStepAttr = model.variables.pipsStepIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4RbUmpL5TEKIyguyVWSvng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// CurrentOptions.ShowPips = ShowPips
model.variables.currentOptionsVar.showPipsAttr = model.variables.showPipsIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4RbUmpL5TEKIyguyVWSvng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// CurrentOptions.Step = Step
model.variables.currentOptionsVar.stepAttr = model.variables.stepIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4RbUmpL5TEKIyguyVWSvng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// CurrentOptions.InitialIntervalEnd = InitialIntervalEnd
model.variables.currentOptionsVar.initialIntervalEndAttr = model.variables.initialIntervalEndIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dKMuujGaFUGfB8Ft8Ja1qA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3EcwEcXQgUucV7HIIqlCLA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.RangeSliderInterval.OnReady$initSlider2JSResult", [{
name: "SliderObj",
attrName: "sliderObjOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._valuesChange$Action = function (valuesIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ValuesChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.RangeSliderInterval.ValuesChange$vars"))());
vars.value.valuesInLocal = valuesIn;
var getSelectedValueJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getSelectedValueJSResult = getSelectedValueJSResult;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+Ft0Phj48Eubfie34B6q0A:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.2J3Qkb5Sd0aClRf2qgv+Kg/ClientActions.+Ft0Phj48Eubfie34B6q0A:NE9Nez8hTR8LT9s4MsQyoQ", "OutSystemsUIMobile", "ValuesChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QWNY8gXP5kaWM2CEbdNeBg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yRWaGQAw0UiT7gZANW4STg", callContext.id);
getSelectedValueJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller_ValuesChange_GetSelectedValueJS, "GetSelectedValue", "ValuesChange", {
values: OS.DataConversion.JSNodeParamConverter.to(vars.value.valuesInLocal, OS.Types.Object),
IntervalStart: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer),
IntervalEnd: OS.DataConversion.JSNodeParamConverter.to(0, OS.Types.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Interaction.RangeSliderInterval.ValuesChange$getSelectedValueJSResult"))();
jsNodeResult.intervalStartOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IntervalStart, OS.Types.Integer);
jsNodeResult.intervalEndOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IntervalEnd, OS.Types.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3lHCx6W+jUmsgsGO1Pyqtw", callContext.id);
// Trigger Event: OnChange
return controller.onChange$Action(getSelectedValueJSResult.value.intervalStartOut, getSelectedValueJSResult.value.intervalEndOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:uS1OJVLhckCGppGUmFv_KA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+Ft0Phj48Eubfie34B6q0A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+Ft0Phj48Eubfie34B6q0A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.RangeSliderInterval.ValuesChange$vars", [{
name: "values",
attrName: "valuesInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
Controller.registerVariableGroupType("OutSystemsUIMobile.Interaction.RangeSliderInterval.ValuesChange$getSelectedValueJSResult", [{
name: "IntervalStart",
attrName: "intervalStartOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "IntervalEnd",
attrName: "intervalEndOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:PXqRPlNA4kqb66hFX2njnw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.2J3Qkb5Sd0aClRf2qgv+Kg/ClientActions.PXqRPlNA4kqb66hFX2njnw:ZKy+9eKF0WYvN3hb1SNV4A", "OutSystemsUIMobile", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KIJS1ZF9mESjktd7zUuYdg", callContext.id);
// Changed more than value?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bMkPU+Gd9UaASNlP8E0Zlg", callContext.id) && (((((((model.variables.minValueIn) !== (model.variables.currentOptionsVar.minValueAttr)) || ((model.variables.maxValueIn) !== (model.variables.currentOptionsVar.maxValueAttr))) || ((model.variables.stepIn) !== (model.variables.currentOptionsVar.stepAttr))) || ((model.variables.showPipsIn) !== (model.variables.currentOptionsVar.showPipsAttr))) || ((model.variables.pipsStepIn) !== (model.variables.currentOptionsVar.pipsStepAttr))) || ((model.variables.changeEventDuringSlideIn) !== (model.variables.currentOptionsVar.changeEventDuringSlideAttr))))) {
// PipsStep not specified?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZblOl_oNAE2LZZKxr5MnXw", callContext.id) && (model.variables.pipsStepIn === 0))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BDd0TfdlS0ixLdJyJdipJA", callContext.id);
// PipsStep = Max
model.variables.pipsStepIn = OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.max(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(((model.variables.maxValueIn - model.variables.minValueIn) + 1)).div(OS.BuiltinFunctions.integerToDecimal(model.variables.stepIn)).div(OS.BuiltinFunctions.integerToDecimal(5))), OS.BuiltinFunctions.integerToDecimal(1))));
}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wTQfJ_LWXkGGNQSl0LcnNg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller_OnParametersChanged_UpdateSliderJS, "UpdateSlider", "OnParametersChanged", {
Min: OS.DataConversion.JSNodeParamConverter.to(model.variables.minValueIn, OS.Types.Integer),
PipsStep: OS.DataConversion.JSNodeParamConverter.to((model.variables.pipsStepIn).toString(), OS.Types.Text),
Step: OS.DataConversion.JSNodeParamConverter.to(model.variables.stepIn, OS.Types.Integer),
InitialIntervalStart: OS.DataConversion.JSNodeParamConverter.to(model.variables.initialIntervalStartIn, OS.Types.Integer),
InitialIntervalEnd: OS.DataConversion.JSNodeParamConverter.to(model.variables.initialIntervalEndIn, OS.Types.Integer),
ShowPips: OS.DataConversion.JSNodeParamConverter.to(model.variables.showPipsIn, OS.Types.Boolean),
Max: OS.DataConversion.JSNodeParamConverter.to(model.variables.maxValueIn, OS.Types.Integer),
SliderObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.sliderObjVar, OS.Types.Object),
ChangeEventDuringSlide: OS.DataConversion.JSNodeParamConverter.to(model.variables.changeEventDuringSlideIn, OS.Types.Boolean)
}, function ($parameters) {
}, {
ValuesChange: controller.clientActionProxies.valuesChange$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mzcXNH3JEke_U9_SjsdNQg", callContext.id);
// CurrentOptions.ChangeEventDuringSlide = ChangeEventDuringSlide
model.variables.currentOptionsVar.changeEventDuringSlideAttr = model.variables.changeEventDuringSlideIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mzcXNH3JEke_U9_SjsdNQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentOptions.InitialIntervalStart = InitialIntervalStart
model.variables.currentOptionsVar.initialIntervalStartAttr = model.variables.initialIntervalStartIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mzcXNH3JEke_U9_SjsdNQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CurrentOptions.MaxValue = MaxValue
model.variables.currentOptionsVar.maxValueAttr = model.variables.maxValueIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mzcXNH3JEke_U9_SjsdNQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// CurrentOptions.MinValue = MinValue
model.variables.currentOptionsVar.minValueAttr = model.variables.minValueIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mzcXNH3JEke_U9_SjsdNQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// CurrentOptions.PipsStep = PipsStep
model.variables.currentOptionsVar.pipsStepAttr = model.variables.pipsStepIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mzcXNH3JEke_U9_SjsdNQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// CurrentOptions.ShowPips = ShowPips
model.variables.currentOptionsVar.showPipsAttr = model.variables.showPipsIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mzcXNH3JEke_U9_SjsdNQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// CurrentOptions.Step = Step
model.variables.currentOptionsVar.stepAttr = model.variables.stepIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mzcXNH3JEke_U9_SjsdNQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// CurrentOptions.InitialIntervalEnd = InitialIntervalEnd
model.variables.currentOptionsVar.initialIntervalEndAttr = model.variables.initialIntervalEndIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DMlNd5PMAEWjwxr9QtsEHw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LH4KgmI_dUmrJPX0JfI1gg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_controller_OnParametersChanged_UpdateValueJS, "UpdateValue", "OnParametersChanged", {
SliderObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.sliderObjVar, OS.Types.Object),
Value1: OS.DataConversion.JSNodeParamConverter.to(model.variables.initialIntervalStartIn, OS.Types.Integer),
Value2: OS.DataConversion.JSNodeParamConverter.to(model.variables.initialIntervalEndIn, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hVr8VC4lAkyGDhSTNmkMCQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:PXqRPlNA4kqb66hFX2njnw", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.valuesChange$Action = function (valuesIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._valuesChange$Action, callContext, valuesIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:EpHg5wu_cXV36BMGcNgbYQ", "OutSystemsUIMobile", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:2J3Qkb5Sd0aClRf2qgv+Kg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.2J3Qkb5Sd0aClRf2qgv+Kg:2IrAfjNgfyctZ1wtzgL9aA", "OutSystemsUIMobile", "RangeSliderInterval", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:2J3Qkb5Sd0aClRf2qgv+Kg", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/RangeSliderInterval On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/RangeSliderInterval On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller.OnReady.InitSlider2JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.SliderObj = document.getElementById( $parameters.SliderContainerId );
var rtl = document.querySelector(".is-rtl");
var direction = "ltr"

if(rtl) {
    direction = "rtl";
}

var options = {
    direction: direction,
    start: [ $parameters.InitialIntervalStart , $parameters.InitialIntervalEnd ],
    connect: true,
    step: $parameters.Step,
    range: {
        'min': $parameters.Min,
        'max': $parameters.Max 
    }
};

if($parameters.ShowPips) {
    
    // Find a PipsStep value if it was not defined
    if($parameters.PipsStep === 0) {
        if($parameters.Step !== 0) {
            $parameters.PipsStep = $parameters.Step;
        } else {
            $parameters.PipsStep = ($parameters.Max - $parameters.Min) / 5;
        }
    }
    
    // Limit the number of pips to prevent memory issues
    var pipsValues = Math.round((($parameters.Max - $parameters.Min) / $parameters.PipsStep) + 1);
    if(pipsValues > 100) {
        pipsValues = 100;
    }
    
    // Create the pips
    options.pips = {
        mode: 'count',
        values: pipsValues,
        density: 20,
        stepped: true
    };
}

var str = $parameters.AdvancedFormat;

if(str.length > 0) {
    var json = eval('(' + str + ')');   
    options = mergeJSON(options, json);
}

noUiSlider.create($parameters.SliderObj, options);

if( $parameters.ChangeEventDuringSlide ) {
    // trigger events while sliding
    $parameters.SliderObj.noUiSlider.on("update", $actions.ValuesChange);
} else {
    // only trigger events on release or tap
    $parameters.SliderObj.noUiSlider.on("set", $actions.ValuesChange);
}

function mergeJSON(target, add) {
    function isObject(obj) {
        if (typeof obj == 'object') {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return true; // search for first object prop
                }
            }
        }
        return false;
    }
    for (var key in add) {
        if (add.hasOwnProperty(key)) {
            if (target[key] && isObject(target[key]) && isObject(add[key])) {
                mergeJSON(target[key], add[key]);
            } else {
                target[key] = add[key];
            }
        }
    }
    return target;
};
};
});
define("OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller.ValuesChange.GetSelectedValueJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IntervalStart = Math.round( $parameters.values [0] );
$parameters.IntervalEnd = Math.round( $parameters.values [1] );
};
});
define("OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller.OnParametersChanged.UpdateSliderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var options = {
    start: [ $parameters.InitialIntervalStart , $parameters.InitialIntervalEnd ],
    connect: true,
    step: $parameters.Step ,
    range: {
        'min': $parameters.Min ,
        'max': $parameters.Max 
    }
};

if( $parameters.ShowPips ) {
    options.pips = {
        mode: 'count',
        values: (($parameters.Max - $parameters.Min))/($parameters.PipsStep) + 1,
        density: ( $parameters.Max - $parameters.Min ) * 100
    };
}

$parameters.SliderObj.noUiSlider.destroy();
noUiSlider.create($parameters.SliderObj, options);

if( $parameters.ChangeEventDuringSlide ) {
    // trigger events while sliding
    $parameters.SliderObj.noUiSlider.on("update", $actions.ValuesChange);
} else {
    // only trigger events on release or tap
    $parameters.SliderObj.noUiSlider.on("set", $actions.ValuesChange);
}
};
});
define("OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$controller.OnParametersChanged.UpdateValueJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.SliderObj.noUiSlider.set([$parameters.Value1, $parameters.Value2]);
};
});

define("OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"snLOi7I8BUefm_ekpSVpxA": {
getter: function (varBag, idService) {
return varBag.initSlider2JSResult.value;
}
},
"AqY+8LaqKkOzS42S831WFw": {
getter: function (varBag, idService) {
return varBag.vars.value.valuesInLocal;
},
dataType: OS.Types.Object
},
"yRWaGQAw0UiT7gZANW4STg": {
getter: function (varBag, idService) {
return varBag.getSelectedValueJSResult.value;
}
},
"wTQfJ_LWXkGGNQSl0LcnNg": {
getter: function (varBag, idService) {
return varBag.updateSliderJSResult.value;
}
},
"LH4KgmI_dUmrJPX0JfI1gg": {
getter: function (varBag, idService) {
return varBag.updateValueJSResult.value;
}
},
"KiSIli5tXUG2JNUOjQI3Jw": {
getter: function (varBag, idService) {
return varBag.model.variables.sliderObjVar;
},
dataType: OS.Types.Object
},
"lJXyOS5p_UC34gsv0yDWMA": {
getter: function (varBag, idService) {
return varBag.model.variables.currentOptionsVar;
}
},
"ZapcrkVLmUmy5eaxpOAcqQ": {
getter: function (varBag, idService) {
return varBag.model.variables.minValueIn;
},
dataType: OS.Types.Integer
},
"pktNfkT1j0SX0uc05wvY8w": {
getter: function (varBag, idService) {
return varBag.model.variables.maxValueIn;
},
dataType: OS.Types.Integer
},
"NlscAvFmx0+Ozc4JcfyFoA": {
getter: function (varBag, idService) {
return varBag.model.variables.initialIntervalStartIn;
},
dataType: OS.Types.Integer
},
"2B9m2of3pEqO_0hE8L3cGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.initialIntervalEndIn;
},
dataType: OS.Types.Integer
},
"loOPUE0CQkONO962czZHdQ": {
getter: function (varBag, idService) {
return varBag.model.variables.stepIn;
},
dataType: OS.Types.Integer
},
"iiB99NNvy0+XcIdBs_ZUhg": {
getter: function (varBag, idService) {
return varBag.model.variables.showPipsIn;
},
dataType: OS.Types.Boolean
},
"zUkHheho70CxYhErroqsqg": {
getter: function (varBag, idService) {
return varBag.model.variables.pipsStepIn;
},
dataType: OS.Types.Integer
},
"9__0V6pfO0KUwCSlWt_BvA": {
getter: function (varBag, idService) {
return varBag.model.variables.changeEventDuringSlideIn;
},
dataType: OS.Types.Boolean
},
"Fc1sfNUvfkOZxTdVtPK0SA": {
getter: function (varBag, idService) {
return varBag.model.variables.advancedFormatIn;
},
dataType: OS.Types.Text
},
"lU2NLQVoZkig2ywaYl4pvQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Slider"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
