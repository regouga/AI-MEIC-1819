define("OutSystemsUIMobile.Utilities.VerticalAlign.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Utilities.VerticalAlign.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$model", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_model, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_controller, OSWidgets) {
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
        View.displayName = "Utilities.VerticalAlign";
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
                return OutSystemsUIMobile_Utilities_VerticalAlign_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Utilities_VerticalAlign_mvc_controller;
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
content: _this.props.placeholders.verticalAlign,
style: "vertical-align",
_idProps: {
service: idService,
name: "VerticalAlign"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Utilities.VerticalAlign.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_Debugger) {
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
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:rsYpB7aBTsN2vMZnsvaGCg", "OutSystemsUIMobile", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:d0JLQ_3dcE6gXGmirWk1Ag:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.d0JLQ_3dcE6gXGmirWk1Ag:ns6qhLPAH5pmEdMl4fBstg", "OutSystemsUIMobile", "VerticalAlign", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:d0JLQ_3dcE6gXGmirWk1Ag", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
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

define("OutSystemsUIMobile.Utilities.VerticalAlign.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"+aYVapg6OEKa7DH6fO8UEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
