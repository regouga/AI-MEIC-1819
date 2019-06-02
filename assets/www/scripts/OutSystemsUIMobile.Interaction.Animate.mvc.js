define("OutSystemsUIMobile.Interaction.Animate.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeIn", "AnimationType", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("_animationTypeInDataFetchStatus", "_animationTypeInDataFetchStatus", "_animationTypeInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Delay", "delayIn", "Delay", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_delayInDataFetchStatus", "_delayInDataFetchStatus", "_delayInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Speed", "speedIn", "Speed", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("_speedInDataFetchStatus", "_speedInDataFetchStatus", "_speedInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("AnimationType" in inputs) {
this.variables.animationTypeIn = inputs.AnimationType;
if("_animationTypeInDataFetchStatus" in inputs) {
this.variables._animationTypeInDataFetchStatus = inputs._animationTypeInDataFetchStatus;
}

}

if("Delay" in inputs) {
this.variables.delayIn = inputs.Delay;
if("_delayInDataFetchStatus" in inputs) {
this.variables._delayInDataFetchStatus = inputs._delayInDataFetchStatus;
}

}

if("Speed" in inputs) {
this.variables.speedIn = inputs.Speed;
if("_speedInDataFetchStatus" in inputs) {
this.variables._speedInDataFetchStatus = inputs._speedInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Interaction.Animate.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Interaction.Animate.mvc$model", "OutSystemsUIMobile.Interaction.Animate.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Interaction_Animate_mvc_model, OutSystemsUIMobile_Interaction_Animate_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.Animate";
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
                return OutSystemsUIMobile_Interaction_Animate_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Interaction_Animate_mvc_controller;
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
extendedProperties: {
style: ((((("-webkit-animation-delay: " + (model.variables.delayIn).toString()) + "ms;") + "animation-delay: ") + (model.variables.delayIn).toString()) + "ms;")
},
style: model.getCachedValue(idService.getId("Content.Style"), function () {
return ("animate" + ((false) ? ("") : ((((" " + model.variables.animationTypeIn) + " ") + model.variables.speedIn))));
}, function () {
return model.variables.animationTypeIn;
}, function () {
return model.variables.speedIn;
}),
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._animationTypeInDataFetchStatus, model.variables._speedInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Interaction.Animate.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Interaction.Animate.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Interaction_Animate_mvc_Debugger) {
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
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:EpHg5wu_cXV36BMGcNgbYQ", "OutSystemsUIMobile", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:OFIbB41ivUmuIqOS_O_5CA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.OFIbB41ivUmuIqOS_O_5CA:aF3tRZJHNKpK4Qq+_VO2Eg", "OutSystemsUIMobile", "Animate", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:OFIbB41ivUmuIqOS_O_5CA", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
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

define("OutSystemsUIMobile.Interaction.Animate.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6eW3JEqQxEm4wvoIBw+Tzg": {
getter: function (varBag, idService) {
return varBag.model.variables.animationTypeIn;
},
dataType: OS.Types.Text
},
"B7ChOCRKyEuyyIt1fFAVZQ": {
getter: function (varBag, idService) {
return varBag.model.variables.delayIn;
},
dataType: OS.Types.Integer
},
"9Obsqp5AhkyAgyFWM8M84g": {
getter: function (varBag, idService) {
return varBag.model.variables.speedIn;
},
dataType: OS.Types.Text
},
"2l4hsyjgbEmqz33gwYnyDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
