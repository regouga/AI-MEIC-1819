define("OutSystemsUIMobile.Numbers.Counter.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("BackgroundColor", "backgroundColorIn", "BackgroundColor", true, false, OS.Types.Text, function () {
return OutSystemsUIMobileModel.staticEntities.color.primaryColor;
}), 
this.attr("_backgroundColorInDataFetchStatus", "_backgroundColorInDataFetchStatus", "_backgroundColorInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Height", "heightIn", "Height", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsHorizontal", "isHorizontalIn", "IsHorizontal", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isHorizontalInDataFetchStatus", "_isHorizontalInDataFetchStatus", "_isHorizontalInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("BackgroundColor" in inputs) {
this.variables.backgroundColorIn = inputs.BackgroundColor;
if("_backgroundColorInDataFetchStatus" in inputs) {
this.variables._backgroundColorInDataFetchStatus = inputs._backgroundColorInDataFetchStatus;
}

}

if("Height" in inputs) {
this.variables.heightIn = inputs.Height;
if("_heightInDataFetchStatus" in inputs) {
this.variables._heightInDataFetchStatus = inputs._heightInDataFetchStatus;
}

}

if("IsHorizontal" in inputs) {
this.variables.isHorizontalIn = inputs.IsHorizontal;
if("_isHorizontalInDataFetchStatus" in inputs) {
this.variables._isHorizontalInDataFetchStatus = inputs._isHorizontalInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Numbers.Counter.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Numbers.Counter.mvc$model", "OutSystemsUIMobile.Numbers.Counter.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Numbers_Counter_mvc_model, OutSystemsUIMobile_Numbers_Counter_mvc_controller, OSWidgets) {
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
        View.displayName = "Numbers.Counter";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Numbers_Counter_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Numbers_Counter_mvc_controller;
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
style: model.getCachedValue(idService.getId("xHc242NibUejlM_VNXabvw.Style"), function () {
return ((((((("counter" + " ") + "background-") + model.variables.backgroundColorIn) + (((model.variables.heightIn > 100)) ? (" counter-large") : (""))) + ((((model.variables.heightIn <= 100) && (model.variables.heightIn > 50))) ? (" counter-medium") : (""))) + ((((model.variables.heightIn <= 50) && (model.variables.heightIn > 0))) ? (" counter-small") : (""))) + ((!(model.variables.isHorizontalIn)) ? ("") : (" horizontal")));
}, function () {
return model.variables.backgroundColorIn;
}, function () {
return model.variables.heightIn;
}, function () {
return model.variables.isHorizontalIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._backgroundColorInDataFetchStatus, model.variables._heightInDataFetchStatus, model.variables._isHorizontalInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("c0ytFsx4l06I+wwM5RMvhQ.style"), function () {
return (((model.variables.heightIn > 0)) ? ((("height: " + (model.variables.heightIn).toString()) + "px;")) : (""));
}, function () {
return model.variables.heightIn;
})
},
style: "counter-number-container",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Center*/ 2,
content: _this.props.placeholders.number,
style: "ph counter-number",
_idProps: {
service: idService,
name: "Number"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Center*/ 2,
content: _this.props.placeholders.label,
style: "ph counter-label",
_idProps: {
service: idService,
name: "Label"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Numbers.Counter.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Numbers.Counter.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Numbers_Counter_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:0ix1sPf1lEWTg0T_NJjm1A:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A:6bHTcIPNY_uV0GjftLy2Uw", "OutSystemsUIMobile", "Numbers", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:S9CaXCDFAUmKqJvdcNvIHw:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A/NodesShownInESpaceTree.S9CaXCDFAUmKqJvdcNvIHw:VhIGSSc+MJgxvRMqjahSWw", "OutSystemsUIMobile", "Counter", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:S9CaXCDFAUmKqJvdcNvIHw", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:0ix1sPf1lEWTg0T_NJjm1A", callContext.id);
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
return OutSystemsUIMobileController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUIMobileLanguageResources);
});

define("OutSystemsUIMobile.Numbers.Counter.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"T6xG7hrXC0iC7uj4OEWWIA": {
getter: function (varBag, idService) {
return varBag.model.variables.backgroundColorIn;
},
dataType: OS.Types.Text
},
"_qtJ_d6AgkuiVufYkXCxhA": {
getter: function (varBag, idService) {
return varBag.model.variables.heightIn;
},
dataType: OS.Types.Integer
},
"nDVVU06QMk6TvsFaLnbdAw": {
getter: function (varBag, idService) {
return varBag.model.variables.isHorizontalIn;
},
dataType: OS.Types.Boolean
},
"5H4LpWpmkkWj2pl2LzdDmw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Number"));
})(varBag.model, idService);
}
},
"32lnCpVKXkKYMCrYiN1CMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
