define("PocketFestival.MainFlow.ProductDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.Layout.mvc$model", "OutSystemsUIMobile.Content.CardBackground.mvc$model", "OutSystemsUIMobile.Content.Tag.mvc$model", "OutSystemsUIMobile.Utilities.MarginContainer.mvc$model", "OutSystemsUIMobile.Adaptive.Columns3.mvc$model", "PocketFestival.model$StoreCategoriesProductsRecordList"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_Layout_mvcModel, OutSystemsUIMobile_Content_CardBackground_mvcModel, OutSystemsUIMobile_Content_Tag_mvcModel, OutSystemsUIMobile_Utilities_MarginContainer_mvcModel, OutSystemsUIMobile_Adaptive_Columns3_mvcModel) {
var OS = OutSystems.Internal;
var GetProductByIdAggrRec = (function (_super) {
__extends(GetProductByIdAggrRec, _super);
function GetProductByIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetProductByIdAggrRec.RecordListType = PocketFestivalModel.StoreCategoriesProductsRecordList;
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
this.attr("Shipping", "shippingVar", "Shipping", true, false, OS.Types.Currency, function () {
return (new OS.DataTypes.Decimal("3.99"));
}), 
this.attr("TotalAmount", "totalAmountVar", "TotalAmount", true, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Quantity", "quantityVar", "Quantity", true, false, OS.Types.Integer, function () {
return 1;
}), 
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
Model._hasValidationWidgetsValue = ((((PocketFestival_Common_Layout_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Content_CardBackground_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Content_Tag_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Utilities_MarginContainer_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Adaptive_Columns3_mvcModel.hasValidationWidgets);
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
define("PocketFestival.MainFlow.ProductDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.ProductDetail.mvc$model", "PocketFestival.MainFlow.ProductDetail.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Content.CardBackground.mvc$view", "OutSystemsUIMobile.Content.Tag.mvc$view", "OutSystemsUIMobile.Utilities.MarginContainer.mvc$view", "OutSystemsUIMobile.Adaptive.Columns3.mvc$view", "PocketFestival.model$StoreCategoriesProductsRecordList"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_ProductDetail_mvc_model, PocketFestival_MainFlow_ProductDetail_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Content_CardBackground_mvc_view, OutSystemsUIMobile_Content_Tag_mvc_view, OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, OutSystemsUIMobile_Adaptive_Columns3_mvc_view) {
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
        View.displayName = "MainFlow.ProductDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout_mvc_view, OutSystemsUIMobile_Content_CardBackground_mvc_view, OutSystemsUIMobile_Content_Tag_mvc_view, OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, OutSystemsUIMobile_Adaptive_Columns3_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_ProductDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_ProductDetail_mvc_controller;
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
extendedProperties: {
style: "border-width: 0px; text-align: center;"
},
style: "display-flex flex-direction-column full-height",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Content_CardBackground_mvc_view, {
inputs: {
MinHeight: 350,
BackgroundColor: PocketFestivalModel.staticEntities.color.black
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 350px; text-align: left;"
},
style: "padding20",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
backgroundImage: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
defaultImage: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.default.png"),
extendedProperties: {
style: "height: 100%;"
},
gridProperties: {
classes: "OSFillParent"
},
imageContent: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr,
type: /*External*/ 1,
url: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.filenameAttr,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr),
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.filenameAttr)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 0px;"
},
style: "full-height",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "text-dark-grey",
value: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).storeAttr.labelAttr,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "heading2",
value: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "text-bold",
value: model.getCachedValue(idService.getId("yPk47I01iUKtfWC6gD1L9A.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(model.variables.totalAmountVar, "$", 2, ".", ",");
}, function () {
return model.variables.totalAmountVar;
}),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Content_Tag_mvc_view, {
inputs: {
BackgroundColor: model.getCachedValue(idService.getId("sBnWENcqcU6dI33V_awyJw.BackgroundColor"), function () {
return ((model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.stockAttr.gt(OS.BuiltinFunctions.integerToDecimal(0))) ? (PocketFestivalModel.staticEntities.color.green) : (PocketFestivalModel.staticEntities.color.grey));
}, function () {
return model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.stockAttr;
}),
_backgroundColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
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
uuid: "14",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
tag: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("482_yLudz0aLQ8EC6bXyRA.Value"), function () {
return ((model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.stockAttr.gt(OS.BuiltinFunctions.integerToDecimal(0))) ? ("in stock") : ("out of stock"));
}, function () {
return model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.stockAttr;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.stockAttr)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px; padding: 0px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-grey heading5",
text: ["Tipically ready in 15 minutes"],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, {
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
uuid: "19",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
marginContainer: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Adaptive_Columns3_mvc_view, {
inputs: {
UseGutter: false
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
uuid: "20",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
column1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: (model.variables.quantityVar > 1),
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/ProductDetail/Link OnClick");
controller.addRemoveOnClick$Action(false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "minus-circle",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
column2: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: (model.variables.quantityVar).toString(),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
column3: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/ProductDetail/Link OnClick");
controller.addRemoveOnClick$Action(true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "plus-circle",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.quantityVar)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-radius: 15px; height: 100px; margin-top: 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/MyTicket", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 20px;"
},
icon: "cart-plus",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 25px;"
},
text: ["Add to cart"],
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.quantityVar)]
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.quantityVar), asPrimitiveValue(model.variables.totalAmountVar), asPrimitiveValue(model.variables.getProductByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).storeAttr.labelAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.stockAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.filenameAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.MainFlow.ProductDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.ProductDetail.mvc$debugger", "PocketFestival.model$StoreCategoriesProductsRecordList"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_ProductDetail_mvc_Debugger) {
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

OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:EnJL93jCGEqJR3fbKvpwqA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.RTaBCF32vk6_SyX3vfpTVg/ScreenDataSets.EnJL93jCGEqJR3fbKvpwqA:Uh3XfyNNDcyph_4EGtRObw", "PocketFestival", "GetProductById", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/ProductDetail/GetProductById");
return controller.callAggregate("ScreenDataSetGetProductById", "screenservices/PocketFestival/MainFlow/ProductDetail/ScreenDataSetGetProductById", "fMIG2E0JOVbaijTpLOgWXg", maxRecords, function (b) {
model.variables.getProductByIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductByIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/ProductDetail/GetProductById On After Fetch");
controller._getProductByIdOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:EnJL93jCGEqJR3fbKvpwqA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getProductById$AggrRefresh"];
// Client Actions
Controller.prototype._addRemoveOnClick$Action = function (isAddIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AddRemoveOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.MainFlow.ProductDetail.AddRemoveOnClick$vars"))());
vars.value.isAddInLocal = isAddIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:4+B4daP8jkKI0rpnOCZEZQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.RTaBCF32vk6_SyX3vfpTVg/ClientActions.4+B4daP8jkKI0rpnOCZEZQ:ojiWS1Y9lXiL+sFSSkmsOw", "PocketFestival", "AddRemoveOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:i_K0jm0k60mY9oULYG+2cA", callContext.id);
// Is One?
if((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:MfX5IXl+mkmYN6xpinztGw", callContext.id) && ((model.variables.quantityVar === 1) && !(vars.value.isAddInLocal)))) {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:NHYf5HTnrkaDRndlOrYf0Q", callContext.id);
} else {
// Set Quantity and total
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:0ps5l7tpDEGesYjVpNDoAg", callContext.id);
// Quantity = If
model.variables.quantityVar = ((vars.value.isAddInLocal) ? ((model.variables.quantityVar + 1)) : ((model.variables.quantityVar - 1)));
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:0ps5l7tpDEGesYjVpNDoAg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TotalAmount = If
model.variables.totalAmountVar = ((vars.value.isAddInLocal) ? (model.variables.totalAmountVar.plus(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr)) : (model.variables.totalAmountVar.minus(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr)));
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:8qAkhEinbUu+KBuoA3m92g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:4+B4daP8jkKI0rpnOCZEZQ", callContext.id);
}

};
Controller.registerVariableGroupType("PocketFestival.MainFlow.ProductDetail.AddRemoveOnClick$vars", [{
name: "IsAdd",
attrName: "isAddInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._getProductByIdOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetProductByIdOnAfterFetch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:7UKeinQaHk6E6S1UCSmcGg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.RTaBCF32vk6_SyX3vfpTVg/ClientActions.7UKeinQaHk6E6S1UCSmcGg:jkObsso0xeJF3xOKEP0uiw", "PocketFestival", "GetProductByIdOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Ug_aFY+sUUidXect6h7eKg", callContext.id);
// ProductId is set?
if((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:C3oT2w4EjkOPqTh0R2MIDw", callContext.id) && ((model.variables.productIdIn) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:sgTDrIuvb0evYwDe7ZovmQ", callContext.id);
// TotalAmount = GetProductById.List.Current.Products.Price
model.variables.totalAmountVar = model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:qXxj6FnrxEOmBqMMlMmeMg", callContext.id);
} else {
// ProductId not set.
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:DB32yIRwwU+6neLXd8BPkw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("In order to have a preview with data, please provide a ProductId.", /*Warning*/ 2);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:qXxj6FnrxEOmBqMMlMmeMg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:7UKeinQaHk6E6S1UCSmcGg", callContext.id);
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
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:oo4Z9LeCx0ei8OARVV2nrQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.RTaBCF32vk6_SyX3vfpTVg/ClientActions.oo4Z9LeCx0ei8OARVV2nrQ:G0LTRElbEYjyqyTMsvI7nQ", "PocketFestival", "NotImplemented", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:1e+BXA3TcEa2nw1Z4pEVzg", callContext.id);
// Not implemented message
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:+cWuAbymyESEBbMzdCnwIQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Navigate to another screen or implement the required logic.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:ffD9IAzdYUSY6UvP6Obb3A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:oo4Z9LeCx0ei8OARVV2nrQ", callContext.id);
}

};

Controller.prototype.addRemoveOnClick$Action = function (isAddIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._addRemoveOnClick$Action, callContext, isAddIn);

};
Controller.prototype.getProductByIdOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getProductByIdOnAfterFetch$Action, callContext);

};
Controller.prototype.notImplemented$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._notImplemented$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:RdfKPC4sXANm_WuMk+PPOg", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:RTaBCF32vk6_SyX3vfpTVg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.RTaBCF32vk6_SyX3vfpTVg:2BkOV2l3QCNfUUGc8XPvDg", "PocketFestival", "ProductDetail", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:RTaBCF32vk6_SyX3vfpTVg", callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
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

define("PocketFestival.MainFlow.ProductDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"89Dg2i_eakCqw6EKA4JYpQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isAddInLocal;
},
dataType: OS.Types.Boolean
},
"eb2WSMNm90euiZAjexJLyg": {
getter: function (varBag, idService) {
return varBag.model.variables.shippingVar;
},
dataType: OS.Types.Currency
},
"2MLBPPy2IUSdJbs9b7QSfA": {
getter: function (varBag, idService) {
return varBag.model.variables.totalAmountVar;
},
dataType: OS.Types.Currency
},
"d7J1gOnfh0SPRtI_p4HaAw": {
getter: function (varBag, idService) {
return varBag.model.variables.quantityVar;
},
dataType: OS.Types.Integer
},
"zttEd5CJOk6s9UBAMFB5Xw": {
getter: function (varBag, idService) {
return varBag.model.variables.productIdIn;
},
dataType: OS.Types.Integer
},
"EnJL93jCGEqJR3fbKvpwqA": {
getter: function (varBag, idService) {
return varBag.model.variables.getProductByIdAggr;
}
},
"eRwb8ZRBgE2VRfSL_Zex2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"bwn9UDobzEOFb0fjm_7HzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"8cF0cg3gYkGzs5QU5TOI9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BackgroundImage"));
})(varBag.model, idService);
}
},
"YqfOhv1SzU6EeqR7Y5_bNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tag"));
})(varBag.model, idService);
}
},
"q0g9P9unPUiEMFHMwq8UGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarginContainer"));
})(varBag.model, idService);
}
},
"eBBMC7Zyn02zm0YnjZ3Uaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column1"));
})(varBag.model, idService);
}
},
"okwjzz+u7EuFG4I8N8Abzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column2"));
})(varBag.model, idService);
}
},
"vmNTWoiHdk65apKIOjXB8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column3"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
