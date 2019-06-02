define("PocketFestival.MainFlow.Cart.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.Layout.mvc$model", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$model", "OutSystemsUIMobile.Numbers.Counter.mvc$model", "PocketFestival.model$ProductsIntegerRecordList"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_Layout_mvcModel, OutSystemsUIMobile_Utilities_VerticalAlign_mvcModel, OutSystemsUIMobile_Numbers_Counter_mvcModel) {
var OS = OutSystems.Internal;
var GetProductByIdAggrRec = (function (_super) {
__extends(GetProductByIdAggrRec, _super);
function GetProductByIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetProductByIdAggrRec.RecordListType = PocketFestivalModel.ProductsIntegerRecordList;
GetProductByIdAggrRec.init();
return GetProductByIdAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("TotalAmount", "totalAmountVar", "TotalAmount", true, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("SelectedProductIds", "selectedProductIdsVar", "SelectedProductIds", true, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.IntegerList());
}, OS.DataTypes.IntegerList), 
this.attr("ProductId", "productIdIn", "ProductId", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_productIdInDataFetchStatus", "_productIdInDataFetchStatus", "_productIdInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetProductById", "getProductByIdAggr", "getProductByIdAggr", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetProductByIdAggrRec());
}, GetProductByIdAggrRec)
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
Model._hasValidationWidgetsValue = ((PocketFestival_Common_Layout_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Utilities_VerticalAlign_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Numbers_Counter_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ProductId" in inputs) {
this.variables.productIdIn = OS.DataConversion.ServerDataConverter.from(inputs.ProductId, OS.Types.Integer);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.MainFlow.Cart.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.Cart.mvc$model", "PocketFestival.MainFlow.Cart.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$view", "OutSystemsUIMobile.Numbers.Counter.mvc$view", "PocketFestival.model$ProductsIntegerRecordList"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_Cart_mvc_model, PocketFestival_MainFlow_Cart_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, OutSystemsUIMobile_Numbers_Counter_mvc_view) {
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
        View.displayName = "MainFlow.Cart";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout_mvc_view, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, OutSystemsUIMobile_Numbers_Counter_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_Cart_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_Cart_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(PocketFestival_Common_Layout_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column background-white full-height",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.getProductByIdAggr.listOut,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 97px;"
},
gridProperties: {
classes: "OSInline",
width: "97px"
},
style: "",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 100%;"
},
gridProperties: {
classes: "OSFillParent"
},
imageContent: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr,
style: "border-radius4",
type: /*External*/ 1,
url: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.filenameAttr,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr),
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6",
marginLeft: "15px"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "heading5 text-grey",
value: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Expression, {
style: "text-bold padding-top heading2",
value: model.getCachedValue(idService.getId("TpP5CcE380ep6usw4dX6vQ.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr, "$", 2, ".", ",");
}, function () {
return model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr;
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width2 ThemeGrid_MarginGutter"
},
style: "display-flex flex-direction-column justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Cart/Link OnClick");
controller.addRemoveOnClick$Action(true, model.variables.getProductByIdAggr.listOut.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "angle-up",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: (model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).quantityAttr).toString(),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Link, {
enabled: (model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).quantityAttr > 1),
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Cart/Link OnClick");
controller.addRemoveOnClick$Action(false, model.variables.getProductByIdAggr.listOut.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
}, React.createElement(OSWidgets.Icon, {
icon: "angle-down",
iconSize: /*Twotimes*/ 1,
style: model.getCachedValue(idService.getId("YbqKZFYHI0qR0gE03NdotQ.Style"), function () {
return ("icon " + (((model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).quantityAttr === 1)) ? ("text-grey") : ("")));
}, function () {
return model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).quantityAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
}))))];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Cart/List Action OnClick");
controller.deleteOnClick$Action(model.variables.getProductByIdAggr.listOut.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item-action background-red text-white",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "remove",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).quantityAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.filenameAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.getProductByIdAggr.dataFetchStatusAttr)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "20",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width5"
},
style: "padding20",
visible: true,
_idProps: {
service: idService,
name: "Total"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Numbers_Counter_mvc_view, {
inputs: {
BackgroundColor: PocketFestivalModel.staticEntities.color.none,
IsHorizontal: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "22",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
number: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_Width3"
},
style: "text-bold heading1",
value: model.getCachedValue(idService.getId("aEJPpOlDAE2U1abpb1o37A.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(model.variables.totalAmountVar, "$", 2, ".", ",");
}, function () {
return model.variables.totalAmountVar;
}),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Total")];
})
},
_dependencies: [asPrimitiveValue(model.variables.totalAmountVar)]
})), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 15px; height: 100px; margin-top: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width5 ThemeGrid_MarginGutter"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/PaymentOptions", {
Total: OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(model.variables.totalAmountVar))
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 0px; padding: 0px 5px 0px 0px;"
},
icon: "shopping-cart",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 25px;"
},
text: ["Checkout"],
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.totalAmountVar)]
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.totalAmountVar), asPrimitiveValue(model.variables.getProductByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.MainFlow.Cart.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.Cart.mvc$debugger", "PocketFestival.model$ProductsIntegerRecordList"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_Cart_mvc_Debugger) {
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
Controller.prototype.getProductById$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:Pvq6fvFO3USaM8RIjosiLg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.iiGmDZveTkOl359s7LVLgg/ScreenDataSets.Pvq6fvFO3USaM8RIjosiLg:CbkM3txEaYtKq9rVu4d21w", "PocketFestival", "GetProductById", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Cart/GetProductById");
return controller.callAggregate("ScreenDataSetGetProductById", "screenservices/PocketFestival/MainFlow/Cart/ScreenDataSetGetProductById", "hskcpdedzUWC1ZofRsxC2A", maxRecords, function (b) {
model.variables.getProductByIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductByIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Cart/GetProductById On After Fetch");
controller._getProductsOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:Pvq6fvFO3USaM8RIjosiLg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getProductById$AggrRefresh"];
// Client Actions
Controller.prototype._getProductsOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetProductsOnAfterFetch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:9FEfFX3xkUSKrVNBiJ4dkw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.iiGmDZveTkOl359s7LVLgg/ClientActions.9FEfFX3xkUSKrVNBiJ4dkw:W6+2_vBakkMJG9Ry5ofGNA", "PocketFestival", "GetProductsOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:c3NafA6lXEu_N9BIJsWDTw", callContext.id);
// Foreach GetProductById.List
callContext.iterationContext.registerIterationStart(model.variables.getProductByIdAggr.listOut);
try {var getProductByIdIterator = callContext.iterationContext.getIterator(model.variables.getProductByIdAggr.listOut);
var getProductByIdIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:IV4D6I+PV0OfDu1DCAG8JQ", callContext.id) && (getProductByIdIndex < model.variables.getProductByIdAggr.listOut.length))) {
getProductByIdIterator.currentRowNumber = getProductByIdIndex;
if((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:EUvu_5JzvkGhDTfYZXggog", callContext.id) && (model.variables.getProductByIdAggr.listOut.getItem(getProductByIdIndex.valueOf()).productsAttr.idAttr === model.variables.selectedProductIdsVar.getCurrent(callContext.iterationContext)))) {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:einOjc1l+UOomhyWvWFrNA", callContext.id);
// TotalAmount = TotalAmount + GetProductById.List.Current.Products.Price * GetProductById.List.Current.Quantity
model.variables.totalAmountVar = model.variables.totalAmountVar.plus(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr.times(OS.BuiltinFunctions.integerToDecimal(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).quantityAttr)));
}

getProductByIdIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.getProductByIdAggr.listOut);
}

OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Av9qbSuMR0OIacz8y0faNQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:9FEfFX3xkUSKrVNBiJ4dkw", callContext.id);
}

};
Controller.prototype._addToList$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AddToList");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:e0WvIPmHikC7+x173X46hg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.iiGmDZveTkOl359s7LVLgg/ClientActions.e0WvIPmHikC7+x173X46hg:v7tscgMRx7U+j6lTlm02Yg", "PocketFestival", "AddToList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Bnn5F+Hfi0SpEFnyaIyypQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:MP4LU6j8LEWzjlcjEQlOOQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.selectedProductIdsVar, model.variables.productIdIn, callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:W0mduOIqaE+_IB4H8N9YqQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:e0WvIPmHikC7+x173X46hg", callContext.id);
}

};
Controller.prototype._notImplemented$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("NotImplemented");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:XDnLXPQEekGnTvF3WHNoTQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.iiGmDZveTkOl359s7LVLgg/ClientActions.XDnLXPQEekGnTvF3WHNoTQ:MfGE2_GOAhKvH4_0PFNaaQ", "PocketFestival", "NotImplemented", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:6CH4MEQCPUOuO8zwvRPfXg", callContext.id);
// Not implemented message
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:G+RGFDtPZEK+cIqdLcLycw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Navigate to another screen or implement the required logic.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:ltcj4eCpTUuOfqAttJHphQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:XDnLXPQEekGnTvF3WHNoTQ", callContext.id);
}

};
Controller.prototype._addRemoveOnClick$Action = function (isAddIn, rowNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AddRemoveOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.MainFlow.Cart.AddRemoveOnClick$vars"))());
vars.value.isAddInLocal = isAddIn;
vars.value.rowNumberInLocal = rowNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:JRyxiTKkvUiIuQ7hVQ9yjA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.iiGmDZveTkOl359s7LVLgg/ClientActions.JRyxiTKkvUiIuQ7hVQ9yjA:sTWQTHUEXh45MarlVXIOrg", "PocketFestival", "AddRemoveOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:8uhdQdbL7Um70E8uNsIn_g", callContext.id);
// Set Quantity and total
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:+5vWlamcN0eorm6Ce6+l1A", callContext.id);
// GetProductById.List[RowNumber].Quantity = If
model.variables.getProductByIdAggr.listOut.getItem(vars.value.rowNumberInLocal).quantityAttr = ((vars.value.isAddInLocal) ? ((model.variables.getProductByIdAggr.listOut.getItem(vars.value.rowNumberInLocal).quantityAttr + 1)) : ((model.variables.getProductByIdAggr.listOut.getItem(vars.value.rowNumberInLocal).quantityAttr - 1)));
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:+5vWlamcN0eorm6Ce6+l1A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TotalAmount = If
model.variables.totalAmountVar = ((vars.value.isAddInLocal) ? (model.variables.totalAmountVar.plus(model.variables.getProductByIdAggr.listOut.getItem(vars.value.rowNumberInLocal).productsAttr.priceAttr)) : (model.variables.totalAmountVar.minus(model.variables.getProductByIdAggr.listOut.getItem(vars.value.rowNumberInLocal).productsAttr.priceAttr)));
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:058_VaR+20GJFGo3Py1bZA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:JRyxiTKkvUiIuQ7hVQ9yjA", callContext.id);
}

};
Controller.registerVariableGroupType("PocketFestival.MainFlow.Cart.AddRemoveOnClick$vars", [{
name: "IsAdd",
attrName: "isAddInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RowNumber",
attrName: "rowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._deleteOnClick$Action = function (rowNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DeleteOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.MainFlow.Cart.DeleteOnClick$vars"))());
vars.value.rowNumberInLocal = rowNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:yRI7jQnOKECNfDvlqkKQ9A:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.iiGmDZveTkOl359s7LVLgg/ClientActions.yRI7jQnOKECNfDvlqkKQ9A:LDD3XorzCJ_loCiw710S_g", "PocketFestival", "DeleteOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:3zU4gf4tLE2tEcVrwSij5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:uRht7pzgTUuD3ItscD0Pvw", callContext.id);
// TotalAmount = TotalAmount - GetProductById.List[RowNumber].Quantity * GetProductById.List[RowNumber].Products.Price
model.variables.totalAmountVar = model.variables.totalAmountVar.minus(OS.BuiltinFunctions.integerToDecimal(model.variables.getProductByIdAggr.listOut.getItem(vars.value.rowNumberInLocal).quantityAttr).times(model.variables.getProductByIdAggr.listOut.getItem(vars.value.rowNumberInLocal).productsAttr.priceAttr));
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:B3gUHALtSkGmZLs9pJhpJA", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.getProductByIdAggr.listOut, model.variables.getProductByIdAggr.listOut.getCurrentRowNumber(callContext.iterationContext), callContext);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:FAE+XJnMHUeAKXDwN9Ivfw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:yRI7jQnOKECNfDvlqkKQ9A", callContext.id);
}

};
Controller.registerVariableGroupType("PocketFestival.MainFlow.Cart.DeleteOnClick$vars", [{
name: "RowNumber",
attrName: "rowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);

Controller.prototype.getProductsOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getProductsOnAfterFetch$Action, callContext);

};
Controller.prototype.addToList$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._addToList$Action, callContext);

};
Controller.prototype.notImplemented$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._notImplemented$Action, callContext);

};
Controller.prototype.addRemoveOnClick$Action = function (isAddIn, rowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._addRemoveOnClick$Action, callContext, isAddIn, rowNumberIn);

};
Controller.prototype.deleteOnClick$Action = function (rowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._deleteOnClick$Action, callContext, rowNumberIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:y1J3FUFFXO+Ufr2xOZJxhQ", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:iiGmDZveTkOl359s7LVLgg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.iiGmDZveTkOl359s7LVLgg:MmZfd24neBvagkyVta3RxA", "PocketFestival", "Cart", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:iiGmDZveTkOl359s7LVLgg", callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Cart On Initialize");
return controller.addToList$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return PocketFestival_MainFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return PocketFestivalController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, PocketFestivalLanguageResources);
});

define("PocketFestival.MainFlow.Cart.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"xqqVS8QVh02u5emaxDN6aQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isAddInLocal;
},
dataType: OS.Types.Boolean
},
"AmoufxmMq0ifaTnpMuS_Sg": {
getter: function (varBag, idService) {
return varBag.vars.value.rowNumberInLocal;
},
dataType: OS.Types.Integer
},
"+Z5fAJQyi0C4ialYmEFVvg": {
getter: function (varBag, idService) {
return varBag.vars.value.rowNumberInLocal;
},
dataType: OS.Types.Integer
},
"jvDA2z9ra0qdpSWzPHvWgw": {
getter: function (varBag, idService) {
return varBag.model.variables.totalAmountVar;
},
dataType: OS.Types.Currency
},
"+Y_DXIWjXU6Th6FBMqjcSA": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedProductIdsVar;
}
},
"YSvzw7G2_0WEXblkmNk5HQ": {
getter: function (varBag, idService) {
return varBag.model.variables.productIdIn;
},
dataType: OS.Types.Integer
},
"Pvq6fvFO3USaM8RIjosiLg": {
getter: function (varBag, idService) {
return varBag.model.variables.getProductByIdAggr;
}
},
"JVIhRCQtREOjhmk8HHCahw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"oLqm3J1120uec8DrgGT7og": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem1"));
})(varBag.model, idService);
}
},
"4+vC3Df5HUGE0eIZgWzJZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
},
"nN7mTtrzdEaH3epsPy7fVw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Total"));
})(varBag.model, idService);
}
},
"t190oVTVBk+FzkIvovjybw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Number"));
})(varBag.model, idService);
}
},
"nBZ2wFOLv0W4ogQISTyumw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
