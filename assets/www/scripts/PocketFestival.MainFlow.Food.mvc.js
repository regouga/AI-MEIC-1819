define("PocketFestival.MainFlow.Food.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.Common.Layout.mvc$model", "OutSystemsUIMobile.Content.SectionExpandable.mvc$model", "OutSystemsUIMobile.Content.Tag.mvc$model", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$model", "OutSystemsUIMobile.Utilities.MarginContainer.mvc$model", "OutSystemsUIMobile.Adaptive.Gallery.mvc$model", "OutSystemsUIMobile.Content.CardBackground.mvc$model", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$model", "PocketFestival.model$StoreCategoriesProductsRecordList", "PocketFestival.model$ProductsRecordList"], function (OutSystems, PocketFestivalModel, PocketFestival_Common_Layout_mvcModel, OutSystemsUIMobile_Content_SectionExpandable_mvcModel, OutSystemsUIMobile_Content_Tag_mvcModel, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvcModel, OutSystemsUIMobile_Utilities_MarginContainer_mvcModel, OutSystemsUIMobile_Adaptive_Gallery_mvcModel, OutSystemsUIMobile_Content_CardBackground_mvcModel, OutSystemsUIMobile_Utilities_VerticalAlign_mvcModel) {
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
var GetProductByCategoryIdAggrRec = (function (_super) {
__extends(GetProductByCategoryIdAggrRec, _super);
function GetProductByCategoryIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetProductByCategoryIdAggrRec.RecordListType = PocketFestivalModel.ProductsRecordList;
GetProductByCategoryIdAggrRec.init();
return GetProductByCategoryIdAggrRec;
})(OS.Model.AggregateRecord);
var GetProductsAggrRec = (function (_super) {
__extends(GetProductsAggrRec, _super);
function GetProductsAggrRec(defaults) {
_super.apply(this, arguments);
}
GetProductsAggrRec.RecordListType = PocketFestivalModel.ProductsRecordList;
GetProductsAggrRec.init();
return GetProductsAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SearchKeyword", "searchKeywordVar", "SearchKeyword", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("MinPriceSelected", "minPriceSelectedVar", "MinPriceSelected", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MaxPriceSelected", "maxPriceSelectedVar", "MaxPriceSelected", true, false, OS.Types.Integer, function () {
return 20;
}), 
this.attr("MaxRecords", "maxRecordsVar", "MaxRecords", true, false, OS.Types.Integer, function () {
return 20;
}), 
this.attr("Store", "storeIn", "Store", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_storeInDataFetchStatus", "_storeInDataFetchStatus", "_storeInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ProductId", "productIdIn", "ProductId", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_productIdInDataFetchStatus", "_productIdInDataFetchStatus", "_productIdInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetProductById", "getProductByIdAggr", "getProductByIdAggr", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetProductByIdAggrRec());
}, GetProductByIdAggrRec), 
this.attr("GetProductByCategoryId", "getProductByCategoryIdAggr", "getProductByCategoryIdAggr", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetProductByCategoryIdAggrRec());
}, GetProductByCategoryIdAggrRec), 
this.attr("GetProducts", "getProductsAggr", "getProductsAggr", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetProductsAggrRec());
}, GetProductsAggrRec)
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
Model._hasValidationWidgetsValue = (((((((PocketFestival_Common_Layout_mvcModel.hasValidationWidgets || OutSystemsUIMobile_Content_SectionExpandable_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Content_Tag_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Interaction_RangeSliderInterval_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Utilities_MarginContainer_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Adaptive_Gallery_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Content_CardBackground_mvcModel.hasValidationWidgets) || OutSystemsUIMobile_Utilities_VerticalAlign_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Store" in inputs) {
this.variables.storeIn = OS.DataConversion.ServerDataConverter.from(inputs.Store, OS.Types.Integer);
}

if("ProductId" in inputs) {
this.variables.productIdIn = OS.DataConversion.ServerDataConverter.from(inputs.ProductId, OS.Types.Integer);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.MainFlow.Food.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.Food.mvc$model", "PocketFestival.MainFlow.Food.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Content.SectionExpandable.mvc$view", "OutSystemsUIMobile.Content.Tag.mvc$view", "OutSystemsUIMobile.Interaction.RangeSliderInterval.mvc$view", "OutSystemsUIMobile.Utilities.MarginContainer.mvc$view", "OutSystemsUIMobile.Adaptive.Gallery.mvc$view", "OutSystemsUIMobile.Content.CardBackground.mvc$view", "OutSystemsUIMobile.Utilities.VerticalAlign.mvc$view", "PocketFestival.model$StoreCategoriesProductsRecordList", "PocketFestival.model$ProductsRecordList"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_Food_mvc_model, PocketFestival_MainFlow_Food_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Content_SectionExpandable_mvc_view, OutSystemsUIMobile_Content_Tag_mvc_view, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_view, OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, OutSystemsUIMobile_Adaptive_Gallery_mvc_view, OutSystemsUIMobile_Content_CardBackground_mvc_view, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view) {
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
        View.displayName = "MainFlow.Food";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout_mvc_view, OutSystemsUIMobile_Content_SectionExpandable_mvc_view, OutSystemsUIMobile_Content_Tag_mvc_view, OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_view, OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, OutSystemsUIMobile_Adaptive_Gallery_mvc_view, OutSystemsUIMobile_Content_CardBackground_mvc_view, OutSystemsUIMobile_Utilities_VerticalAlign_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_Food_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_Food_mvc_controller;
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
style: "background-white",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Content_SectionExpandable_mvc_view, {
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-bold text-uppercase",
text: ["Filter"],
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding20",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-uppercase text-bold",
text: ["Filter By:"],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Food/Link OnClick");
return controller.rangeSliderIntervalOnChange$Action(model.variables.minPriceSelectedVar, model.variables.maxPriceSelectedVar, true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Content_Tag_mvc_view, {
inputs: {
BackgroundColor: PocketFestivalModel.staticEntities.color.grey
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
uuid: "11",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
tag: new PlaceholderContent(function () {
return ["Clear"];
})
},
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 20px;"
},
style: "text-primary-color text-bold",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Price"), React.createElement(OutSystemsUIMobile_Interaction_RangeSliderInterval_mvc_view, {
inputs: {
ChangeEventDuringSlide: false,
MinValue: 0,
ShowPips: false,
InitialIntervalEnd: model.variables.maxPriceSelectedVar,
MaxValue: 600,
InitialIntervalStart: model.variables.minPriceSelectedVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onChange$Action: function (intervalStartIn, intervalEndIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/RangeSliderInterval OnChange");
return controller.rangeSliderIntervalOnChange$Action(intervalStartIn, intervalEndIn, false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "13",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("4q3N54Q1A0KoSMmkp+9dOA.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.integerToDecimal(model.variables.minPriceSelectedVar), "$", 2, ".", ",");
}, function () {
return model.variables.minPriceSelectedVar;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("mtgH+rGO7UeLphkJpDqNNA.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.integerToDecimal(model.variables.maxPriceSelectedVar), "$", 2, ".", ",");
}, function () {
return model.variables.maxPriceSelectedVar;
}),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.minPriceSelectedVar), asPrimitiveValue(model.variables.maxPriceSelectedVar)]
}), React.createElement(OutSystemsUIMobile_Utilities_MarginContainer_mvc_view, {
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
marginContainer: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUIMobile_Adaptive_Gallery_mvc_view, {
inputs: {
ColumnsInPhonePortrait: "2",
ColumnsInPhoneLandscape: "2",
ColumnsInTabletLandscape: 4,
ColumnsInTabletPortrait: 3
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
onScrollEnding: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Food/List OnScrollEnding");
return controller.onScrollEnding$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
source: model.variables.getProductByCategoryIdAggr.listOut,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.filenameAttr)]
}, React.createElement(OutSystemsUIMobile_Content_CardBackground_mvc_view, {
inputs: {
MinHeight: 200,
BackgroundColor: PocketFestivalModel.staticEntities.color.grey
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
uuid: "23",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Food/Container onclick");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
style: "height: 200px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "height: 10px; padding: 0px;"
},
gridProperties: {
classes: "ThemeGrid_Width1"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/Cart", {
ProductId: model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.idAttr
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "plus-square-o",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
backgroundImage: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
type: /*External*/ 1,
url: model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.filenameAttr,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.filenameAttr)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "28"
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
uuid: "29",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
verticalAlign: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "margin-top: 0px;"
},
style: "text-dark-grey heading5",
value: model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "text-bold",
value: model.getCachedValue(idService.getId("Hlt1eGhRbEeNTYSJUbr0Eg.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr, "$", 2, ".", ",");
}, function () {
return model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr;
}),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr)
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr)]
})))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByCategoryIdAggr.listOut), asPrimitiveValue(model.variables.minPriceSelectedVar), asPrimitiveValue(model.variables.maxPriceSelectedVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.MainFlow.Food.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.Food.mvc$debugger", "PocketFestival.model$StoreCategoriesProductsRecordList", "PocketFestival.model$ProductsRecordList"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_Food_mvc_Debugger) {
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

OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:TAhedVtj_ECXH0gJhSE9Mw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ScreenDataSets.TAhedVtj_ECXH0gJhSE9Mw:dPGZ0eZwN4ot_xSHiFdZ+g", "PocketFestival", "GetProductById", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Food/GetProductById");
return controller.callAggregate("ScreenDataSetGetProductById", "screenservices/PocketFestival/MainFlow/Food/ScreenDataSetGetProductById", "vLWF5yF1tmlmS0sFbF_YHw", maxRecords, function (b) {
model.variables.getProductByIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductByIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
});

}, function () {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:TAhedVtj_ECXH0gJhSE9Mw", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getProductByCategoryId$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:d5NZn_E7P0iCkGTgC8v7XQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ScreenDataSets.d5NZn_E7P0iCkGTgC8v7XQ:90cPXXkjBpZP_hmUx9DgGA", "PocketFestival", "GetProductByCategoryId", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Food/GetProductByCategoryId");
return controller.callAggregate("ScreenDataSetGetProductByCategoryId", "screenservices/PocketFestival/MainFlow/Food/ScreenDataSetGetProductByCategoryId", "atEb9bsKtQL0TFBfyoeINw", maxRecords, function (b) {
model.variables.getProductByCategoryIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductByCategoryIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductByCategoryIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Food/GetProductByCategoryId On After Fetch");
controller._getProductByCategoryIdOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:d5NZn_E7P0iCkGTgC8v7XQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getProducts$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:YZp09cGUhky4GpkbjFPM6Q:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ScreenDataSets.YZp09cGUhky4GpkbjFPM6Q:j9Vv1dC7A0bzOEjcpaoRLw", "PocketFestival", "GetProducts", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Food/GetProducts");
return controller.callAggregate("ScreenDataSetGetProducts", "screenservices/PocketFestival/MainFlow/Food/ScreenDataSetGetProducts", "t2kOiMAGFsuCEj3SvTNh1A", maxRecords, function (b) {
model.variables.getProductsAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductsAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
});

}, function () {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:YZp09cGUhky4GpkbjFPM6Q", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getProductById$AggrRefresh", "getProductByCategoryId$AggrRefresh", "getProducts$AggrRefresh"];
// Client Actions
Controller.prototype._input_SearchOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Input_SearchOnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:ILXcLvWPwkqtDQ3ckqqV9g:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ClientActions.ILXcLvWPwkqtDQ3ckqqV9g:F+eSTbbFXyLTYe47b+E4BA", "PocketFestival", "Input_SearchOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:CKN0yfLrakiq6FPGBxyxHA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:YdUYIT5k3EWGn61WTz9XQg", callContext.id);
// Refresh Query: GetProductByCategoryId
var result = controller.getProductByCategoryId$AggrRefresh(model.variables.maxRecordsVar);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:0xj8cGh0XUCKeEWY5SFQmA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:ILXcLvWPwkqtDQ3ckqqV9g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:ILXcLvWPwkqtDQ3ckqqV9g", callContext.id);
throw ex;

});
};
Controller.prototype._onScrollEnding$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnScrollEnding");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.MainFlow.Food.OnScrollEnding$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:krwTU1p0c0u3n34jOJJ6OA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ClientActions.krwTU1p0c0u3n34jOJJ6OA:AMhrnocdF7NoSsUJEIZS1g", "PocketFestival", "OnScrollEnding", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:a6F018JjXUOGdosLq5HxOg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:5IVJrAkj20mDol4uNOVd+Q", callContext.id) && model.variables.getProductByCategoryIdAggr.isDataFetchedAttr)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:QBv7WTiaCEKk5wi8C6H3bA", callContext.id) && (model.variables.getProductByCategoryIdAggr.listOut.length >= (model.variables.maxRecordsVar - vars.value.incrementRecordsVar)))) {
// MaxRecords += IncrementRecords
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:geID0VcNfEODkkgkY_QPuA", callContext.id);
// MaxRecords = MaxRecords + IncrementRecords
model.variables.maxRecordsVar = (model.variables.maxRecordsVar + vars.value.incrementRecordsVar);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:PqJA+8xysE63XwiJpgwH5A", callContext.id);
// Refresh Query: GetProductByCategoryId
var result = controller.getProductByCategoryId$AggrRefresh(model.variables.maxRecordsVar);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:GkZqN3Niik+8ldGc0zclIw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:qeyf+apBe0epqT1IUVo+mA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:S88Iw_2Bj0mbpyAnFwyNrQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:krwTU1p0c0u3n34jOJJ6OA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:krwTU1p0c0u3n34jOJJ6OA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.MainFlow.Food.OnScrollEnding$vars", [{
name: "IncrementRecords",
attrName: "incrementRecordsVar",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 20;
}
}]);
Controller.prototype._rangeSliderIntervalOnChange$Action = function (intervalStartIn, intervalEndIn, resetSlideIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RangeSliderIntervalOnChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PocketFestival.MainFlow.Food.RangeSliderIntervalOnChange$vars"))());
vars.value.intervalStartInLocal = intervalStartIn;
vars.value.intervalEndInLocal = intervalEndIn;
vars.value.resetSlideInLocal = resetSlideIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:_gpuX6TiQ0G3r+xqCl581w:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ClientActions._gpuX6TiQ0G3r+xqCl581w:dsbbuCD2ExyUikG_ZmdLzA", "PocketFestival", "RangeSliderIntervalOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:iez3YO5UMkimz8M_x2Oxzg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Reset
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:DpHHoixsxUS9L6KMquaxYw", callContext.id);
// MinPriceSelected = IntervalStart
model.variables.minPriceSelectedVar = vars.value.intervalStartInLocal;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:DpHHoixsxUS9L6KMquaxYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// MaxPriceSelected = IntervalEnd
model.variables.maxPriceSelectedVar = vars.value.intervalEndInLocal;
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:DpHHoixsxUS9L6KMquaxYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// MinPriceSelected = If
model.variables.minPriceSelectedVar = ((vars.value.resetSlideInLocal) ? (0) : (model.variables.minPriceSelectedVar));
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:DpHHoixsxUS9L6KMquaxYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// MaxPriceSelected = If
model.variables.maxPriceSelectedVar = ((vars.value.resetSlideInLocal) ? (600) : (model.variables.maxPriceSelectedVar));
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:BnYs20zVOUOJ5gmngWEGdg", callContext.id);
// Refresh Query: GetProductByCategoryId
var result = controller.getProductByCategoryId$AggrRefresh(50);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:Bevz1sOO50K4FRaB453Odg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:_gpuX6TiQ0G3r+xqCl581w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:_gpuX6TiQ0G3r+xqCl581w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("PocketFestival.MainFlow.Food.RangeSliderIntervalOnChange$vars", [{
name: "IntervalStart",
attrName: "intervalStartInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "IntervalEnd",
attrName: "intervalEndInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "ResetSlide",
attrName: "resetSlideInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._action1$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action1");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:MSfEeIRDrUWI6yGmFHxzLA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ClientActions.MSfEeIRDrUWI6yGmFHxzLA:Qp2YmeGiLC1abYK0swjF_w", "PocketFestival", "Action1", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:9GS1_KKsoECgtrWCLjCosQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:DssjtQ4aUk2R4v4olz0fow", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:MSfEeIRDrUWI6yGmFHxzLA", callContext.id);
}

};
Controller.prototype._onClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:URjveb97l0+0ORtUqXvqtQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ClientActions.URjveb97l0+0ORtUqXvqtQ:IqSXjqG_7G3M2swiCcc7HQ", "PocketFestival", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:fXxn9kd2HEqRO3S9cyw4rg", callContext.id);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:sl_H_IVNK0KhXY3wSD43Ew", callContext.id);
// Destination: /PocketFestival/ProductDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/PocketFestival/ProductDetail", {
ProductId: model.variables.getProductByCategoryIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.idAttr
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:URjveb97l0+0ORtUqXvqtQ", callContext.id);
}

};
Controller.prototype._getProductByCategoryIdOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetProductByCategoryIdOnAfterFetch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:QZEYmXUQEkqeUOv1fx9VgQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg/ClientActions.QZEYmXUQEkqeUOv1fx9VgQ:2fmrj9cg8QeisxgTOJwkUA", "PocketFestival", "GetProductByCategoryIdOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:uqz0wDhf1USlpArQcqbbkQ", callContext.id);
// CategoryId is set?
if((OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:0lCVW1vYAE+aVisBuHYw8A", callContext.id) && ((model.variables.storeIn) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:K3KzQWoW8UKV_8tI2y2rLA", callContext.id);
} else {
// CategoryId not set.
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:bj7uA5kgWEG2IkLssjnesw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("In order to have a preview with data, please provide a CategoryId.", /*Warning*/ 2);
OutSystemsDebugger.handleBreakpoint("HaIUGTmzUkKd4cWDLHNcow:K3KzQWoW8UKV_8tI2y2rLA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:QZEYmXUQEkqeUOv1fx9VgQ", callContext.id);
}

};

Controller.prototype.input_SearchOnChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._input_SearchOnChange$Action, callContext);

};
Controller.prototype.onScrollEnding$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onScrollEnding$Action, callContext);

};
Controller.prototype.rangeSliderIntervalOnChange$Action = function (intervalStartIn, intervalEndIn, resetSlideIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._rangeSliderIntervalOnChange$Action, callContext, intervalStartIn, intervalEndIn, resetSlideIn);

};
Controller.prototype.action1$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action1$Action, callContext);

};
Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};
Controller.prototype.getProductByCategoryIdOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getProductByCategoryIdOnAfterFetch$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:RdfKPC4sXANm_WuMk+PPOg", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:zL4PMlZ9iUO2S77c3SiCBg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zL4PMlZ9iUO2S77c3SiCBg:_DnsbXBDUHk8PsY0M+s57w", "PocketFestival", "Food", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:zL4PMlZ9iUO2S77c3SiCBg", callContext.id);
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

define("PocketFestival.MainFlow.Food.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"RxAnMhclVUOQ1GpTpBQeMw": {
getter: function (varBag, idService) {
return varBag.vars.value.incrementRecordsVar;
},
dataType: OS.Types.Integer
},
"dof79HAMY0K6zVg7xzgzCw": {
getter: function (varBag, idService) {
return varBag.vars.value.intervalStartInLocal;
},
dataType: OS.Types.Integer
},
"4eydusZf4EmJLzH7AE2XOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.intervalEndInLocal;
},
dataType: OS.Types.Integer
},
"i9xzbqcsLkSAeUTh6LxAGA": {
getter: function (varBag, idService) {
return varBag.vars.value.resetSlideInLocal;
},
dataType: OS.Types.Boolean
},
"oyYauZnivkKqWojQqnh75w": {
getter: function (varBag, idService) {
return varBag.model.variables.searchKeywordVar;
},
dataType: OS.Types.Text
},
"LtsMrMpljk+t7pCq9AjNFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.minPriceSelectedVar;
},
dataType: OS.Types.Integer
},
"0iXxT6kVH0qIKU3dxazvew": {
getter: function (varBag, idService) {
return varBag.model.variables.maxPriceSelectedVar;
},
dataType: OS.Types.Integer
},
"BymUzmBWfEae+K4eyy4l+g": {
getter: function (varBag, idService) {
return varBag.model.variables.maxRecordsVar;
},
dataType: OS.Types.Integer
},
"OLJDJn51Xk28NRu4egex5g": {
getter: function (varBag, idService) {
return varBag.model.variables.storeIn;
},
dataType: OS.Types.Integer
},
"goaPLz5eNkug2oq708IWng": {
getter: function (varBag, idService) {
return varBag.model.variables.productIdIn;
},
dataType: OS.Types.Integer
},
"TAhedVtj_ECXH0gJhSE9Mw": {
getter: function (varBag, idService) {
return varBag.model.variables.getProductByIdAggr;
}
},
"d5NZn_E7P0iCkGTgC8v7XQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getProductByCategoryIdAggr;
}
},
"YZp09cGUhky4GpkbjFPM6Q": {
getter: function (varBag, idService) {
return varBag.model.variables.getProductsAggr;
}
},
"3I9Vw+9FCEKPcLvJhSKDyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"_RBw7vSfPk6fmmh05WPTNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"C8CDO0yRKUiRjDcmLF3Cuw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"UFCtbGUiG0S3RKBrPoBVxg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tag"));
})(varBag.model, idService);
}
},
"cSweO5dKYkeVCAQfZW6LaQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarginContainer"));
})(varBag.model, idService);
}
},
"KZxLKRnu1keU8HP1u2BqgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"eeHpS_s_MUW7pyultZ6cPw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"KPQObjsO0UyyuRNOqaZCUA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BackgroundImage"));
})(varBag.model, idService);
}
},
"9puCSB+BHEaUvN6JfDKUPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("VerticalAlign"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
