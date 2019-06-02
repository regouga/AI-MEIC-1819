define("OutSystemsUIMobile.Private.PullToRefresh.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (OutSystems, OutSystemsUIMobileModel) {
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
define("OutSystemsUIMobile.Private.PullToRefresh.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Private.PullToRefresh.mvc$model", "OutSystemsUIMobile.Private.PullToRefresh.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Private_PullToRefresh_mvc_model, OutSystemsUIMobile_Private_PullToRefresh_mvc_controller, OSWidgets) {
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
        View.displayName = "Private.PullToRefresh";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUIMobile.PullToRefresh.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUIMobile_Private_PullToRefresh_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Private_PullToRefresh_mvc_controller;
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
gridProperties: {
classes: "OSInline"
},
style: "js-block",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "js-block-left",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, "JS"), React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "js-block-right",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Pull to refresh")), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pull-to-refresh",
visible: true,
_idProps: {
service: idService,
name: "ptr"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "genericon",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "angle-down",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Arrow"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pull-to-refresh-loading",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "spinner",
iconSize: /*FontSize*/ 0,
style: "icon fa-spin",
visible: true,
_idProps: {
service: idService,
name: "Spinner"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Private.PullToRefresh.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Private.PullToRefresh.mvc$controller.OnDestroy.ClearEventListenerJS", "OutSystemsUIMobile.Private.PullToRefresh.mvc$controller.OnReady.initJS", "OutSystemsUIMobile.Private.PullToRefresh.mvc$controller.OnReady.GetContentContainerIdJS", "OutSystemsUIMobile.Private.PullToRefresh.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Private_PullToRefresh_mvc_controller_OnDestroy_ClearEventListenerJS, OutSystemsUIMobile_Private_PullToRefresh_mvc_controller_OnReady_initJS, OutSystemsUIMobile_Private_PullToRefresh_mvc_controller_OnReady_GetContentContainerIdJS, OutSystemsUIMobile_Private_PullToRefresh_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
triggerOnContentPull$Action: function () {
return controller.executeActionInsideJSNode(controller._triggerOnContentPull$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._triggerOnContentPull$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnContentPull");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_0laDf5__kOJhvI1_424ew:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions._0laDf5__kOJhvI1_424ew:62xX60XwbzUg5vgJQxlB5g", "OutSystemsUIMobile", "TriggerOnContentPull", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mWp1Yc50+EGwUCjACJDJqw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HKmP3qs4C0mcJnkn9rORgg", callContext.id);
// Trigger Event: OnContentPull
return controller.onContentPull$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TMRCSW785EauzqrECk23lg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_0laDf5__kOJhvI1_424ew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_0laDf5__kOJhvI1_424ew", callContext.id);
throw ex;

});
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6nKSMAgHak68wO2Y9y643Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions.6nKSMAgHak68wO2Y9y643Q:IUMLpJbEbntAEiZd6S+tVg", "OutSystemsUIMobile", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KqoO6JGhCU62OAwlzzMyRQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sUIZe8xHJ0SExQnX3vUkyw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_PullToRefresh_mvc_controller_OnDestroy_ClearEventListenerJS, "ClearEventListener", "OnDestroy", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6KZmFGBufESndoXJplFdtA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6nKSMAgHak68wO2Y9y643Q", callContext.id);
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
var getContentContainerIdJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getContentContainerIdJSResult = getContentContainerIdJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:xqjnsZNrekqcLnhh1HpN1w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions.xqjnsZNrekqcLnhh1HpN1w:3WWyNj9OTSE313702uQw3Q", "OutSystemsUIMobile", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ym7afnt11EeUcgyMBl3Bfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DJj76FOv10ColJHlDXkBIA", callContext.id);
getContentContainerIdJSResult.value = controller.safeExecuteJSNode(OutSystemsUIMobile_Private_PullToRefresh_mvc_controller_OnReady_GetContentContainerIdJS, "GetContentContainerId", "OnReady", {
ContentContainerObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUIMobile.Private.PullToRefresh.OnReady$getContentContainerIdJSResult"))();
jsNodeResult.contentContainerObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ContentContainerObj, OS.Types.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:r+qiFkF9g0uPjRnDkwAnpA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUIMobile_Private_PullToRefresh_mvc_controller_OnReady_initJS, "init", "OnReady", {
PullToRefreshContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ptr"), OS.Types.Text),
ContentContainerObj: OS.DataConversion.JSNodeParamConverter.to(getContentContainerIdJSResult.value.contentContainerObjOut, OS.Types.Object)
}, function ($parameters) {
}, {
TriggerOnContentPull: controller.clientActionProxies.triggerOnContentPull$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NnkT8par+UuiklF6LXV4uQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:xqjnsZNrekqcLnhh1HpN1w", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUIMobile.Private.PullToRefresh.OnReady$getContentContainerIdJSResult", [{
name: "ContentContainerObj",
attrName: "contentContainerObjOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.triggerOnContentPull$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnContentPull$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onContentPull$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:KNabe2jYx8zVoKDWt9xjrw", "OutSystemsUIMobile", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:0CUMdi+WJ0GCaNq7Fn3OEQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ:khUWP1ndWV05gYXa8SN4tA", "OutSystemsUIMobile", "PullToRefresh", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:0CUMdi+WJ0GCaNq7Fn3OEQ", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/PullToRefresh On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/PullToRefresh On Destroy");
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
define("OutSystemsUIMobile.Private.PullToRefresh.mvc$controller.OnDestroy.ClearEventListenerJS", [], function () {
return function ($actions, $roles, $public) {
WebPullToRefresh.destroy();
};
});
define("OutSystemsUIMobile.Private.PullToRefresh.mvc$controller.OnReady.initJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var loadingFunction = function() {
    return new Promise( function( resolve, reject ) {
        setTimeout(function(){
            $actions.TriggerOnContentPull();
        }, 1000)
        resolve();
    } );
};

WebPullToRefresh.init( {
    // Pointer to function that does the loading and returns a promise
    loadingFunction: loadingFunction,
        
    // Element holding dragable content area
    contentEl: $parameters.ContentContainerObj , 

    // Element holding pull to refresh loading area
    ptrEl: document.getElementById( $parameters.PullToRefreshContainerId ),
        
    // Element that contains the scroll bar; leave null if no container with overflow exists
    scrollEl: $parameters.ContentContainerObj ,
        
    // Number of pixels of panning until refresh 
    distanceToRefresh: 40,
        
    // Dragging resistance level
    resistance: 2.5
});
};
});
define("OutSystemsUIMobile.Private.PullToRefresh.mvc$controller.OnReady.GetContentContainerIdJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var contentEl = document.querySelector(".content");
$parameters.ContentContainerObj = contentEl;
};
});

define("OutSystemsUIMobile.Private.PullToRefresh.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"sUIZe8xHJ0SExQnX3vUkyw": {
getter: function (varBag, idService) {
return varBag.clearEventListenerJSResult.value;
}
},
"r+qiFkF9g0uPjRnDkwAnpA": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"DJj76FOv10ColJHlDXkBIA": {
getter: function (varBag, idService) {
return varBag.getContentContainerIdJSResult.value;
}
},
"_38ICwXsa0KJTcoPIIcIkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ptr"));
})(varBag.model, idService);
}
},
"X7xBlRUizUivZdrWXuBz9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Arrow"));
})(varBag.model, idService);
}
},
"fmHWAkK9CEG6fwehAe9_JQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Spinner"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
