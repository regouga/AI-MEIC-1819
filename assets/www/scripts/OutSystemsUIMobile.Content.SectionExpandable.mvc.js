define("OutSystemsUIMobile.Content.SectionExpandable.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsExpanded", "isExpandedIn", "IsExpanded", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isExpandedInDataFetchStatus", "_isExpandedInDataFetchStatus", "_isExpandedInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UsePadding", "usePaddingIn", "UsePadding", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_usePaddingInDataFetchStatus", "_usePaddingInDataFetchStatus", "_usePaddingInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("IsExpanded" in inputs) {
this.variables.isExpandedIn = inputs.IsExpanded;
if("_isExpandedInDataFetchStatus" in inputs) {
this.variables._isExpandedInDataFetchStatus = inputs._isExpandedInDataFetchStatus;
}

}

if("UsePadding" in inputs) {
this.variables.usePaddingIn = inputs.UsePadding;
if("_usePaddingInDataFetchStatus" in inputs) {
this.variables._usePaddingInDataFetchStatus = inputs._usePaddingInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Content.SectionExpandable.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Content.SectionExpandable.mvc$model", "OutSystemsUIMobile.Content.SectionExpandable.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Content_SectionExpandable_mvc_model, OutSystemsUIMobile_Content_SectionExpandable_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.SectionExpandable";
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
                return OutSystemsUIMobile_Content_SectionExpandable_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Content_SectionExpandable_mvc_controller;
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
style: model.getCachedValue(idService.getId("88G14r_hw0egg3iLCzg_eg.Style"), function () {
return ("section-expandable" + ((model.variables.isExpandedIn) ? (" open") : ("")));
}, function () {
return model.variables.isExpandedIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isExpandedInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Content/SectionExpandable/Container onclick");
return controller.onExpandOrCollapse$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "section-expandable-title",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title,
style: "dividers full-width text-ellipsis",
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "section-expandable-icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("TL_9tU1yO0uy2h1JKfIMFg.Style"), function () {
return ("section-expandable-content" + ((model.variables.usePaddingIn) ? ("") : (" no-padding")));
}, function () {
return model.variables.usePaddingIn;
}),
visible: model.variables.isExpandedIn,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._usePaddingInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isExpandedInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Content.SectionExpandable.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Content.SectionExpandable.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Content_SectionExpandable_mvc_Debugger) {
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
Controller.prototype._onExpandOrCollapse$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnExpandOrCollapse");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:opbrpXF6EU+1ARHKc2L2BA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA/ClientActions.opbrpXF6EU+1ARHKc2L2BA:wLh_3a+igALlZ1Sls7msVA", "OutSystemsUIMobile", "OnExpandOrCollapse", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RZXfflfoKEKAKYzbnFiQMQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:a0gbiTxvhkeo0Kpdto2DCg", callContext.id);
// IsExpanded = notIsExpanded
model.variables.isExpandedIn = !(model.variables.isExpandedIn);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vNwp_k6DdEqMOCzbHlypWw", callContext.id);
// Trigger Event: OnToggle
return controller.onToggle$Action(model.variables.isExpandedIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0LRzVu1sqUW7ctrhuFKCKg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:opbrpXF6EU+1ARHKc2L2BA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:opbrpXF6EU+1ARHKc2L2BA", callContext.id);
throw ex;

});
};

Controller.prototype.onExpandOrCollapse$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onExpandOrCollapse$Action, callContext);

};
Controller.prototype.onToggle$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:W4tVYRPWGlLfmpemutsc0A", "OutSystemsUIMobile", "Content", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:uKq8oThFUECByYxX7CPfyA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA:JowuatN_jJzpPhLHOK0h7g", "OutSystemsUIMobile", "SectionExpandable", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:uKq8oThFUECByYxX7CPfyA", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
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

define("OutSystemsUIMobile.Content.SectionExpandable.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"YUkKd6UcK0SDGDLGea98bg": {
getter: function (varBag, idService) {
return varBag.model.variables.isExpandedIn;
},
dataType: OS.Types.Boolean
},
"laD7zJRb90Cp81esibgoSA": {
getter: function (varBag, idService) {
return varBag.model.variables.usePaddingIn;
},
dataType: OS.Types.Boolean
},
"errYrYVyAEy79wImfXIMBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"Alz3FQsG5EWEq8nn0rMnOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
