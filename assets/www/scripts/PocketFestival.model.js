define("PocketFestival.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$StepsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StepsRecord = (function (_super) {
__extends(StepsRecord, _super);
function StepsRecord(defaults) {
_super.apply(this, arguments);
}
StepsRecord.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.StepsRec());
}, OutSystemsUIMobileModel.StepsRec)
].concat(_super.attributesToDeclare.call(this));
};
StepsRecord.fromStructure = function (str) {
return new StepsRecord(new StepsRecord.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRecord._isAnonymousRecord = true;
StepsRecord.UniqueId = "0d776a4e-191f-af32-1030-d5ce57aa4167";
StepsRecord.init();
return StepsRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.StepsRecord = StepsRecord;

});
define("PocketFestival.model$Sample_ProductRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_ProductRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_ProductRecord = (function (_super) {
__extends(Sample_ProductRecord, _super);
function Sample_ProductRecord(defaults) {
_super.apply(this, arguments);
}
Sample_ProductRecord.attributesToDeclare = function () {
return [
this.attr("Sample_Product", "sample_ProductAttr", "Sample_Product", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsSampleDataDBModel.Sample_ProductRec());
}, OutSystemsSampleDataDBModel.Sample_ProductRec)
].concat(_super.attributesToDeclare.call(this));
};
Sample_ProductRecord.fromStructure = function (str) {
return new Sample_ProductRecord(new Sample_ProductRecord.RecordClass({
sample_ProductAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sample_ProductRecord._isAnonymousRecord = true;
Sample_ProductRecord.UniqueId = "72f4fd9c-3608-cb48-b2fd-b844a57675ee";
Sample_ProductRecord.init();
return Sample_ProductRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.Sample_ProductRecord = Sample_ProductRecord;

});
define("PocketFestival.model$Sample_ProductRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$Sample_ProductRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_ProductRecordList = (function (_super) {
__extends(Sample_ProductRecordList, _super);
function Sample_ProductRecordList(defaults) {
_super.apply(this, arguments);
}
Sample_ProductRecordList.itemType = PocketFestivalModel.Sample_ProductRecord;
return Sample_ProductRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_ProductRecordList = Sample_ProductRecordList;

});
define("PocketFestival.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$AnimationTypeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecord = (function (_super) {
__extends(AnimationTypeRecord, _super);
function AnimationTypeRecord(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.AnimationTypeRec());
}, OutSystemsUIMobileModel.AnimationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRecord.fromStructure = function (str) {
return new AnimationTypeRecord(new AnimationTypeRecord.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRecord._isAnonymousRecord = true;
AnimationTypeRecord.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
AnimationTypeRecord.init();
return AnimationTypeRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("PocketFestival.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$AnimationTypeRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = PocketFestivalModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("PocketFestival.model$SettingsRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "PocketFestival.model", "BarcodePlugin.model$SettingsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$BarcodePlugin"], function (exports, OutSystems, BarcodePluginModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var SettingsRecord = (function (_super) {
__extends(SettingsRecord, _super);
function SettingsRecord(defaults) {
_super.apply(this, arguments);
}
SettingsRecord.attributesToDeclare = function () {
return [
this.attr("Settings", "settingsAttr", "Settings", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BarcodePluginModel.SettingsRec());
}, BarcodePluginModel.SettingsRec)
].concat(_super.attributesToDeclare.call(this));
};
SettingsRecord.fromStructure = function (str) {
return new SettingsRecord(new SettingsRecord.RecordClass({
settingsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SettingsRecord._isAnonymousRecord = true;
SettingsRecord.UniqueId = "1977d006-50cb-a056-3f3d-25050260ab8f";
SettingsRecord.init();
return SettingsRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.SettingsRecord = SettingsRecord;

});
define("PocketFestival.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$AutoplayRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AutoplayRecord = (function (_super) {
__extends(AutoplayRecord, _super);
function AutoplayRecord(defaults) {
_super.apply(this, arguments);
}
AutoplayRecord.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.AutoplayRec());
}, OutSystemsUIMobileModel.AutoplayRec)
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRecord.fromStructure = function (str) {
return new AutoplayRecord(new AutoplayRecord.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRecord._isAnonymousRecord = true;
AutoplayRecord.UniqueId = "c6831d06-e579-de4e-dbcf-59e128b60b13";
AutoplayRecord.init();
return AutoplayRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.AutoplayRecord = AutoplayRecord;

});
define("PocketFestival.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$AutoplayRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = PocketFestivalModel.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AutoplayRecordList = AutoplayRecordList;

});
define("PocketFestival.model$ProductsRec", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ProductsRec = (function (_super) {
__extends(ProductsRec, _super);
function ProductsRec(defaults) {
_super.apply(this, arguments);
}
ProductsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Image", "imageAttr", "Image", false, false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Filename", "filenameAttr", "Filename", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Price", "priceAttr", "Price", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Stock", "stockAttr", "Stock", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MaxStock", "maxStockAttr", "MaxStock", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("StockThreshold", "stockThresholdAttr", "StockThreshold", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Store", "storeAttr", "Store", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
ProductsRec.init();
return ProductsRec;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.ProductsRec = ProductsRec;

});
define("PocketFestival.model$Sample_OfficeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_OfficeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_OfficeRecord = (function (_super) {
__extends(Sample_OfficeRecord, _super);
function Sample_OfficeRecord(defaults) {
_super.apply(this, arguments);
}
Sample_OfficeRecord.attributesToDeclare = function () {
return [
this.attr("Sample_Office", "sample_OfficeAttr", "Sample_Office", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsSampleDataDBModel.Sample_OfficeRec());
}, OutSystemsSampleDataDBModel.Sample_OfficeRec)
].concat(_super.attributesToDeclare.call(this));
};
Sample_OfficeRecord.fromStructure = function (str) {
return new Sample_OfficeRecord(new Sample_OfficeRecord.RecordClass({
sample_OfficeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sample_OfficeRecord._isAnonymousRecord = true;
Sample_OfficeRecord.UniqueId = "4c040c61-147b-77ac-977c-ee1a165ffad1";
Sample_OfficeRecord.init();
return Sample_OfficeRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.Sample_OfficeRecord = Sample_OfficeRecord;

});
define("PocketFestival.model$Sample_OfficeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$Sample_OfficeRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_OfficeRecordList = (function (_super) {
__extends(Sample_OfficeRecordList, _super);
function Sample_OfficeRecordList(defaults) {
_super.apply(this, arguments);
}
Sample_OfficeRecordList.itemType = PocketFestivalModel.Sample_OfficeRecord;
return Sample_OfficeRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_OfficeRecordList = Sample_OfficeRecordList;

});
define("PocketFestival.model$LegendPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$LegendPositionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var LegendPositionRecord = (function (_super) {
__extends(LegendPositionRecord, _super);
function LegendPositionRecord(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecord.attributesToDeclare = function () {
return [
this.attr("LegendPosition", "legendPositionAttr", "LegendPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.LegendPositionRec());
}, ChartsMobileModel.LegendPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
LegendPositionRecord.fromStructure = function (str) {
return new LegendPositionRecord(new LegendPositionRecord.RecordClass({
legendPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendPositionRecord._isAnonymousRecord = true;
LegendPositionRecord.UniqueId = "d2362d0d-0bb3-6623-a5f0-020a47954dfc";
LegendPositionRecord.init();
return LegendPositionRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.LegendPositionRecord = LegendPositionRecord;

});
define("PocketFestival.model$LegendPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$LegendPositionRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var LegendPositionRecordList = (function (_super) {
__extends(LegendPositionRecordList, _super);
function LegendPositionRecordList(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecordList.itemType = PocketFestivalModel.LegendPositionRecord;
return LegendPositionRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.LegendPositionRecordList = LegendPositionRecordList;

});
define("PocketFestival.model$ProductsIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ProductsRec"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ProductsIntegerRecord = (function (_super) {
__extends(ProductsIntegerRecord, _super);
function ProductsIntegerRecord(defaults) {
_super.apply(this, arguments);
}
ProductsIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Products", "productsAttr", "Products", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PocketFestivalModel.ProductsRec());
}, PocketFestivalModel.ProductsRec), 
this.attr("Quantity", "quantityAttr", "Quantity", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
ProductsIntegerRecord._isAnonymousRecord = true;
ProductsIntegerRecord.UniqueId = "29ea3fac-95eb-30bd-beff-ae897a287808";
ProductsIntegerRecord.init();
return ProductsIntegerRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.ProductsIntegerRecord = ProductsIntegerRecord;

});
define("PocketFestival.model$SettingsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$SettingsRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var SettingsRecordList = (function (_super) {
__extends(SettingsRecordList, _super);
function SettingsRecordList(defaults) {
_super.apply(this, arguments);
}
SettingsRecordList.itemType = PocketFestivalModel.SettingsRecord;
return SettingsRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.SettingsRecordList = SettingsRecordList;

});
define("PocketFestival.model$ChartFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$ChartFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ChartFormatRecord = (function (_super) {
__extends(ChartFormatRecord, _super);
function ChartFormatRecord(defaults) {
_super.apply(this, arguments);
}
ChartFormatRecord.attributesToDeclare = function () {
return [
this.attr("ChartFormat", "chartFormatAttr", "ChartFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.ChartFormatRec());
}, ChartsMobileModel.ChartFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartFormatRecord.fromStructure = function (str) {
return new ChartFormatRecord(new ChartFormatRecord.RecordClass({
chartFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartFormatRecord._isAnonymousRecord = true;
ChartFormatRecord.UniqueId = "2b9e4142-8d5c-5ca3-b04a-80be4ce98f53";
ChartFormatRecord.init();
return ChartFormatRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.ChartFormatRecord = ChartFormatRecord;

});
define("PocketFestival.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$MessageStatusRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MessageStatusRecord = (function (_super) {
__extends(MessageStatusRecord, _super);
function MessageStatusRecord(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecord.attributesToDeclare = function () {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.MessageStatusRec());
}, OutSystemsUIMobileModel.MessageStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRecord.fromStructure = function (str) {
return new MessageStatusRecord(new MessageStatusRecord.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageStatusRecord._isAnonymousRecord = true;
MessageStatusRecord.UniqueId = "63c659b6-dc55-4b0b-4f81-d60382bf5fd6";
MessageStatusRecord.init();
return MessageStatusRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.MessageStatusRecord = MessageStatusRecord;

});
define("PocketFestival.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$MessageStatusRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = PocketFestivalModel.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.MessageStatusRecordList = MessageStatusRecordList;

});
define("PocketFestival.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$MenuActionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MenuActionRecord = (function (_super) {
__extends(MenuActionRecord, _super);
function MenuActionRecord(defaults) {
_super.apply(this, arguments);
}
MenuActionRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.MenuActionRec());
}, OutSystemsUIMobileModel.MenuActionRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRecord.fromStructure = function (str) {
return new MenuActionRecord(new MenuActionRecord.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRecord._isAnonymousRecord = true;
MenuActionRecord.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
MenuActionRecord.init();
return MenuActionRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.MenuActionRecord = MenuActionRecord;

});
define("PocketFestival.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$MenuActionRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = PocketFestivalModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.MenuActionRecordList = MenuActionRecordList;

});
define("PocketFestival.model$XAxisValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$XAxisValuesTypeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeRecord = (function (_super) {
__extends(XAxisValuesTypeRecord, _super);
function XAxisValuesTypeRecord(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeRecord.attributesToDeclare = function () {
return [
this.attr("XAxisValuesType", "xAxisValuesTypeAttr", "XAxisValuesType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.XAxisValuesTypeRec());
}, ChartsMobileModel.XAxisValuesTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisValuesTypeRecord.fromStructure = function (str) {
return new XAxisValuesTypeRecord(new XAxisValuesTypeRecord.RecordClass({
xAxisValuesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisValuesTypeRecord._isAnonymousRecord = true;
XAxisValuesTypeRecord.UniqueId = "700a042c-18a5-2538-bbda-09226917700a";
XAxisValuesTypeRecord.init();
return XAxisValuesTypeRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.XAxisValuesTypeRecord = XAxisValuesTypeRecord;

});
define("PocketFestival.model$XAxisValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$XAxisValuesTypeRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeRecordList = (function (_super) {
__extends(XAxisValuesTypeRecordList, _super);
function XAxisValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeRecordList.itemType = PocketFestivalModel.XAxisValuesTypeRecord;
return XAxisValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.XAxisValuesTypeRecordList = XAxisValuesTypeRecordList;

});
define("PocketFestival.model$Sample_AccountsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_AccountsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_AccountsRecord = (function (_super) {
__extends(Sample_AccountsRecord, _super);
function Sample_AccountsRecord(defaults) {
_super.apply(this, arguments);
}
Sample_AccountsRecord.attributesToDeclare = function () {
return [
this.attr("Sample_Accounts", "sample_AccountsAttr", "Sample_Accounts", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsSampleDataDBModel.Sample_AccountsRec());
}, OutSystemsSampleDataDBModel.Sample_AccountsRec)
].concat(_super.attributesToDeclare.call(this));
};
Sample_AccountsRecord.fromStructure = function (str) {
return new Sample_AccountsRecord(new Sample_AccountsRecord.RecordClass({
sample_AccountsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sample_AccountsRecord._isAnonymousRecord = true;
Sample_AccountsRecord.UniqueId = "4f371474-bf59-3573-5b3d-642d9fa55156";
Sample_AccountsRecord.init();
return Sample_AccountsRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.Sample_AccountsRecord = Sample_AccountsRecord;

});
define("PocketFestival.model$Sample_AccountsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$Sample_AccountsRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_AccountsRecordList = (function (_super) {
__extends(Sample_AccountsRecordList, _super);
function Sample_AccountsRecordList(defaults) {
_super.apply(this, arguments);
}
Sample_AccountsRecordList.itemType = PocketFestivalModel.Sample_AccountsRecord;
return Sample_AccountsRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_AccountsRecordList = Sample_AccountsRecordList;

});
define("PocketFestival.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$StackedCardsPositionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUIMobileModel.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StackedCardsPositionList = StackedCardsPositionList;

});
define("PocketFestival.model$Sample_TransactionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_TransactionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_TransactionRecord = (function (_super) {
__extends(Sample_TransactionRecord, _super);
function Sample_TransactionRecord(defaults) {
_super.apply(this, arguments);
}
Sample_TransactionRecord.attributesToDeclare = function () {
return [
this.attr("Sample_Transaction", "sample_TransactionAttr", "Sample_Transaction", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsSampleDataDBModel.Sample_TransactionRec());
}, OutSystemsSampleDataDBModel.Sample_TransactionRec)
].concat(_super.attributesToDeclare.call(this));
};
Sample_TransactionRecord.fromStructure = function (str) {
return new Sample_TransactionRecord(new Sample_TransactionRecord.RecordClass({
sample_TransactionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sample_TransactionRecord._isAnonymousRecord = true;
Sample_TransactionRecord.UniqueId = "33d27fc1-5cf8-d702-7362-c28e11a848d5";
Sample_TransactionRecord.init();
return Sample_TransactionRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.Sample_TransactionRecord = Sample_TransactionRecord;

});
define("PocketFestival.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "PocketFestival.model", "CommonPlugin.model$ErrorRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ErrorList = ErrorList;

});
define("PocketFestival.model$StackingTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$StackingTypeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StackingTypeRecord = (function (_super) {
__extends(StackingTypeRecord, _super);
function StackingTypeRecord(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecord.attributesToDeclare = function () {
return [
this.attr("StackingType", "stackingTypeAttr", "StackingType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.StackingTypeRec());
}, ChartsMobileModel.StackingTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
StackingTypeRecord.fromStructure = function (str) {
return new StackingTypeRecord(new StackingTypeRecord.RecordClass({
stackingTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackingTypeRecord._isAnonymousRecord = true;
StackingTypeRecord.UniqueId = "35e37489-cb29-f7a3-04d5-12a403000665";
StackingTypeRecord.init();
return StackingTypeRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.StackingTypeRecord = StackingTypeRecord;

});
define("PocketFestival.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$ColumnBreakRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUIMobileModel.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ColumnBreakList = ColumnBreakList;

});
define("PocketFestival.model$StackingTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$StackingTypeRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StackingTypeRecordList = (function (_super) {
__extends(StackingTypeRecordList, _super);
function StackingTypeRecordList(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecordList.itemType = PocketFestivalModel.StackingTypeRecord;
return StackingTypeRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StackingTypeRecordList = StackingTypeRecordList;

});
define("PocketFestival.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$ColorRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIMobileModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ColorList = ColorList;

});
define("PocketFestival.model$StoreRec", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StoreRec = (function (_super) {
__extends(StoreRec, _super);
function StoreRec(defaults) {
_super.apply(this, arguments);
}
StoreRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
StoreRec.init();
return StoreRec;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.StoreRec = StoreRec;

});
define("PocketFestival.model$CategoriesRec", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var CategoriesRec = (function (_super) {
__extends(CategoriesRec, _super);
function CategoriesRec(defaults) {
_super.apply(this, arguments);
}
CategoriesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
CategoriesRec.init();
return CategoriesRec;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.CategoriesRec = CategoriesRec;

});
define("PocketFestival.model$StoreCategoriesProductsRecord", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$StoreRec", "PocketFestival.model$CategoriesRec", "PocketFestival.model$ProductsRec"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StoreCategoriesProductsRecord = (function (_super) {
__extends(StoreCategoriesProductsRecord, _super);
function StoreCategoriesProductsRecord(defaults) {
_super.apply(this, arguments);
}
StoreCategoriesProductsRecord.attributesToDeclare = function () {
return [
this.attr("Store", "storeAttr", "Store", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PocketFestivalModel.StoreRec());
}, PocketFestivalModel.StoreRec), 
this.attr("Categories", "categoriesAttr", "Categories", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PocketFestivalModel.CategoriesRec());
}, PocketFestivalModel.CategoriesRec), 
this.attr("Products", "productsAttr", "Products", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PocketFestivalModel.ProductsRec());
}, PocketFestivalModel.ProductsRec)
].concat(_super.attributesToDeclare.call(this));
};
StoreCategoriesProductsRecord._isAnonymousRecord = true;
StoreCategoriesProductsRecord.UniqueId = "b317f9ec-198c-0c72-6385-fda0d5d0b192";
StoreCategoriesProductsRecord.init();
return StoreCategoriesProductsRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.StoreCategoriesProductsRecord = StoreCategoriesProductsRecord;

});
define("PocketFestival.model$StoreCategoriesProductsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$StoreCategoriesProductsRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StoreCategoriesProductsRecordList = (function (_super) {
__extends(StoreCategoriesProductsRecordList, _super);
function StoreCategoriesProductsRecordList(defaults) {
_super.apply(this, arguments);
}
StoreCategoriesProductsRecordList.itemType = PocketFestivalModel.StoreCategoriesProductsRecord;
return StoreCategoriesProductsRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StoreCategoriesProductsRecordList = StoreCategoriesProductsRecordList;

});
define("PocketFestival.model$CategoriesRecord", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$CategoriesRec"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var CategoriesRecord = (function (_super) {
__extends(CategoriesRecord, _super);
function CategoriesRecord(defaults) {
_super.apply(this, arguments);
}
CategoriesRecord.attributesToDeclare = function () {
return [
this.attr("Categories", "categoriesAttr", "Categories", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PocketFestivalModel.CategoriesRec());
}, PocketFestivalModel.CategoriesRec)
].concat(_super.attributesToDeclare.call(this));
};
CategoriesRecord.fromStructure = function (str) {
return new CategoriesRecord(new CategoriesRecord.RecordClass({
categoriesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CategoriesRecord._isAnonymousRecord = true;
CategoriesRecord.UniqueId = "3f8c1718-a57d-84b1-c96d-5830f3b8b3e7";
CategoriesRecord.init();
return CategoriesRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.CategoriesRecord = CategoriesRecord;

});
define("PocketFestival.model$XAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$XAxisFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var XAxisFormatRecord = (function (_super) {
__extends(XAxisFormatRecord, _super);
function XAxisFormatRecord(defaults) {
_super.apply(this, arguments);
}
XAxisFormatRecord.attributesToDeclare = function () {
return [
this.attr("XAxisFormat", "xAxisFormatAttr", "XAxisFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.XAxisFormatRec());
}, ChartsMobileModel.XAxisFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisFormatRecord.fromStructure = function (str) {
return new XAxisFormatRecord(new XAxisFormatRecord.RecordClass({
xAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisFormatRecord._isAnonymousRecord = true;
XAxisFormatRecord.UniqueId = "424d57a2-d666-c8ed-b034-3600d6705eee";
XAxisFormatRecord.init();
return XAxisFormatRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.XAxisFormatRecord = XAxisFormatRecord;

});
define("PocketFestival.model$Sample_AccountsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_AccountsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_AccountsList = (function (_super) {
__extends(Sample_AccountsList, _super);
function Sample_AccountsList(defaults) {
_super.apply(this, arguments);
}
Sample_AccountsList.itemType = OutSystemsSampleDataDBModel.Sample_AccountsRec;
return Sample_AccountsList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_AccountsList = Sample_AccountsList;

});
define("PocketFestival.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$MenuActionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUIMobileModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.MenuActionList = MenuActionList;

});
define("PocketFestival.model$Sample_DepartmentList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_DepartmentRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_DepartmentList = (function (_super) {
__extends(Sample_DepartmentList, _super);
function Sample_DepartmentList(defaults) {
_super.apply(this, arguments);
}
Sample_DepartmentList.itemType = OutSystemsSampleDataDBModel.Sample_DepartmentRec;
return Sample_DepartmentList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_DepartmentList = Sample_DepartmentList;

});
define("PocketFestival.model$DataPointList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$DataPointRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var DataPointList = (function (_super) {
__extends(DataPointList, _super);
function DataPointList(defaults) {
_super.apply(this, arguments);
}
DataPointList.itemType = ChartsMobileModel.DataPointRec;
return DataPointList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.DataPointList = DataPointList;

});
define("PocketFestival.model$StackingTypeList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$StackingTypeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StackingTypeList = (function (_super) {
__extends(StackingTypeList, _super);
function StackingTypeList(defaults) {
_super.apply(this, arguments);
}
StackingTypeList.itemType = ChartsMobileModel.StackingTypeRec;
return StackingTypeList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StackingTypeList = StackingTypeList;

});
define("PocketFestival.model$LegendPositionList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$LegendPositionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var LegendPositionList = (function (_super) {
__extends(LegendPositionList, _super);
function LegendPositionList(defaults) {
_super.apply(this, arguments);
}
LegendPositionList.itemType = ChartsMobileModel.LegendPositionRec;
return LegendPositionList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.LegendPositionList = LegendPositionList;

});
define("PocketFestival.model$Sample_ProductList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_ProductRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_ProductList = (function (_super) {
__extends(Sample_ProductList, _super);
function Sample_ProductList(defaults) {
_super.apply(this, arguments);
}
Sample_ProductList.itemType = OutSystemsSampleDataDBModel.Sample_ProductRec;
return Sample_ProductList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_ProductList = Sample_ProductList;

});
define("PocketFestival.model$Sample_OfficeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_OfficeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_OfficeList = (function (_super) {
__extends(Sample_OfficeList, _super);
function Sample_OfficeList(defaults) {
_super.apply(this, arguments);
}
Sample_OfficeList.itemType = OutSystemsSampleDataDBModel.Sample_OfficeRec;
return Sample_OfficeList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_OfficeList = Sample_OfficeList;

});
define("PocketFestival.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$PositionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var PositionRecord = (function (_super) {
__extends(PositionRecord, _super);
function PositionRecord(defaults) {
_super.apply(this, arguments);
}
PositionRecord.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.PositionRec());
}, OutSystemsUIMobileModel.PositionRec)
].concat(_super.attributesToDeclare.call(this));
};
PositionRecord.fromStructure = function (str) {
return new PositionRecord(new PositionRecord.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRecord._isAnonymousRecord = true;
PositionRecord.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
PositionRecord.init();
return PositionRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.PositionRecord = PositionRecord;

});
define("PocketFestival.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$PositionRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = PocketFestivalModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.PositionRecordList = PositionRecordList;

});
define("PocketFestival.model$Sample_EmployeeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_EmployeeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_EmployeeList = (function (_super) {
__extends(Sample_EmployeeList, _super);
function Sample_EmployeeList(defaults) {
_super.apply(this, arguments);
}
Sample_EmployeeList.itemType = OutSystemsSampleDataDBModel.Sample_EmployeeRec;
return Sample_EmployeeList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_EmployeeList = Sample_EmployeeList;

});
define("PocketFestival.model$MasterDetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$MasterDetailItemRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MasterDetailItemRecord = (function (_super) {
__extends(MasterDetailItemRecord, _super);
function MasterDetailItemRecord(defaults) {
_super.apply(this, arguments);
}
MasterDetailItemRecord.attributesToDeclare = function () {
return [
this.attr("MasterDetailItem", "masterDetailItemAttr", "MasterDetailItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.MasterDetailItemRec());
}, OutSystemsUIMobileModel.MasterDetailItemRec)
].concat(_super.attributesToDeclare.call(this));
};
MasterDetailItemRecord.fromStructure = function (str) {
return new MasterDetailItemRecord(new MasterDetailItemRecord.RecordClass({
masterDetailItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MasterDetailItemRecord._isAnonymousRecord = true;
MasterDetailItemRecord.UniqueId = "c7e749f2-1266-5bf8-3f6d-7b6126e9e92e";
MasterDetailItemRecord.init();
return MasterDetailItemRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.MasterDetailItemRecord = MasterDetailItemRecord;

});
define("PocketFestival.model$MasterDetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$MasterDetailItemRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MasterDetailItemRecordList = (function (_super) {
__extends(MasterDetailItemRecordList, _super);
function MasterDetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
MasterDetailItemRecordList.itemType = PocketFestivalModel.MasterDetailItemRecord;
return MasterDetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.MasterDetailItemRecordList = MasterDetailItemRecordList;

});
define("PocketFestival.model$AdvancedDataSeriesFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$AdvancedDataSeriesFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatRecord = (function (_super) {
__extends(AdvancedDataSeriesFormatRecord, _super);
function AdvancedDataSeriesFormatRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedDataSeriesFormat", "advancedDataSeriesFormatAttr", "AdvancedDataSeriesFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.AdvancedDataSeriesFormatRec());
}, ChartsMobileModel.AdvancedDataSeriesFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedDataSeriesFormatRecord.fromStructure = function (str) {
return new AdvancedDataSeriesFormatRecord(new AdvancedDataSeriesFormatRecord.RecordClass({
advancedDataSeriesFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedDataSeriesFormatRecord._isAnonymousRecord = true;
AdvancedDataSeriesFormatRecord.UniqueId = "e3eb1896-9a1d-0856-d6aa-6db7946dac4d";
AdvancedDataSeriesFormatRecord.init();
return AdvancedDataSeriesFormatRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.AdvancedDataSeriesFormatRecord = AdvancedDataSeriesFormatRecord;

});
define("PocketFestival.model$AdvancedDataSeriesFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$AdvancedDataSeriesFormatRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatRecordList = (function (_super) {
__extends(AdvancedDataSeriesFormatRecordList, _super);
function AdvancedDataSeriesFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatRecordList.itemType = PocketFestivalModel.AdvancedDataSeriesFormatRecord;
return AdvancedDataSeriesFormatRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AdvancedDataSeriesFormatRecordList = AdvancedDataSeriesFormatRecordList;

});
define("PocketFestival.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "PocketFestival.model", "CommonPlugin.model$ErrorRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ErrorRecord = (function (_super) {
__extends(ErrorRecord, _super);
function ErrorRecord(defaults) {
_super.apply(this, arguments);
}
ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ErrorRec());
}, CommonPluginModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRecord.fromStructure = function (str) {
return new ErrorRecord(new ErrorRecord.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRecord._isAnonymousRecord = true;
ErrorRecord.UniqueId = "cbbd7d57-66e1-86ff-28ab-3b75adf75b93";
ErrorRecord.init();
return ErrorRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.ErrorRecord = ErrorRecord;

});
define("PocketFestival.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ErrorRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = PocketFestivalModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ErrorRecordList = ErrorRecordList;

});
define("PocketFestival.model$DataPointRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$DataPointRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var DataPointRecord = (function (_super) {
__extends(DataPointRecord, _super);
function DataPointRecord(defaults) {
_super.apply(this, arguments);
}
DataPointRecord.attributesToDeclare = function () {
return [
this.attr("DataPoint", "dataPointAttr", "DataPoint", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataPointRec());
}, ChartsMobileModel.DataPointRec)
].concat(_super.attributesToDeclare.call(this));
};
DataPointRecord.fromStructure = function (str) {
return new DataPointRecord(new DataPointRecord.RecordClass({
dataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataPointRecord._isAnonymousRecord = true;
DataPointRecord.UniqueId = "6ceb0a54-ddbc-9244-6ab6-6e8c847870c1";
DataPointRecord.init();
return DataPointRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.DataPointRecord = DataPointRecord;

});
define("PocketFestival.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$MessageStatusRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUIMobileModel.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.MessageStatusList = MessageStatusList;

});
define("PocketFestival.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$StackedCardsPositionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecord = (function (_super) {
__extends(StackedCardsPositionRecord, _super);
function StackedCardsPositionRecord(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecord.attributesToDeclare = function () {
return [
this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.StackedCardsPositionRec());
}, OutSystemsUIMobileModel.StackedCardsPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRecord.fromStructure = function (str) {
return new StackedCardsPositionRecord(new StackedCardsPositionRecord.RecordClass({
stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRecord._isAnonymousRecord = true;
StackedCardsPositionRecord.UniqueId = "967cb657-10fd-1a34-6ebf-0b0d8dbea56b";
StackedCardsPositionRecord.init();
return StackedCardsPositionRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("PocketFestival.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$StackedCardsPositionRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = PocketFestivalModel.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("PocketFestival.model$DataPointRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$DataPointRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var DataPointRecordList = (function (_super) {
__extends(DataPointRecordList, _super);
function DataPointRecordList(defaults) {
_super.apply(this, arguments);
}
DataPointRecordList.itemType = PocketFestivalModel.DataPointRecord;
return DataPointRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.DataPointRecordList = DataPointRecordList;

});
define("PocketFestival.model$AdvancedDataPointFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$AdvancedDataPointFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatList = (function (_super) {
__extends(AdvancedDataPointFormatList, _super);
function AdvancedDataPointFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatList.itemType = ChartsMobileModel.AdvancedDataPointFormatRec;
return AdvancedDataPointFormatList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AdvancedDataPointFormatList = AdvancedDataPointFormatList;

});
define("PocketFestival.model$XAxisValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$XAxisValuesTypeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeList = (function (_super) {
__extends(XAxisValuesTypeList, _super);
function XAxisValuesTypeList(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeList.itemType = ChartsMobileModel.XAxisValuesTypeRec;
return XAxisValuesTypeList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.XAxisValuesTypeList = XAxisValuesTypeList;

});
define("PocketFestival.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "PocketFestival.model", "ServiceCenter.model$UserRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord._isAnonymousRecord = true;
UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.UserRecord = UserRecord;

});
define("PocketFestival.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$UserRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = PocketFestivalModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.UserRecordList = UserRecordList;

});
define("PocketFestival.model$AdvancedDataPointFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$AdvancedDataPointFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatRecord = (function (_super) {
__extends(AdvancedDataPointFormatRecord, _super);
function AdvancedDataPointFormatRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedDataPointFormat", "advancedDataPointFormatAttr", "AdvancedDataPointFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.AdvancedDataPointFormatRec());
}, ChartsMobileModel.AdvancedDataPointFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedDataPointFormatRecord.fromStructure = function (str) {
return new AdvancedDataPointFormatRecord(new AdvancedDataPointFormatRecord.RecordClass({
advancedDataPointFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedDataPointFormatRecord._isAnonymousRecord = true;
AdvancedDataPointFormatRecord.UniqueId = "860a186f-93e9-fe7f-e0d4-2f4282c2ec00";
AdvancedDataPointFormatRecord.init();
return AdvancedDataPointFormatRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.AdvancedDataPointFormatRecord = AdvancedDataPointFormatRecord;

});
define("PocketFestival.model$XAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$XAxisFormatRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var XAxisFormatRecordList = (function (_super) {
__extends(XAxisFormatRecordList, _super);
function XAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisFormatRecordList.itemType = PocketFestivalModel.XAxisFormatRecord;
return XAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.XAxisFormatRecordList = XAxisFormatRecordList;

});
define("PocketFestival.model$AdvancedDataSeriesFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$AdvancedDataSeriesFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatList = (function (_super) {
__extends(AdvancedDataSeriesFormatList, _super);
function AdvancedDataSeriesFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatList.itemType = ChartsMobileModel.AdvancedDataSeriesFormatRec;
return AdvancedDataSeriesFormatList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AdvancedDataSeriesFormatList = AdvancedDataSeriesFormatList;

});
define("PocketFestival.model$AdvancedFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$AdvancedFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedFormatRecord = (function (_super) {
__extends(AdvancedFormatRecord, _super);
function AdvancedFormatRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedFormat", "advancedFormatAttr", "AdvancedFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.AdvancedFormatRec());
}, ChartsMobileModel.AdvancedFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedFormatRecord.fromStructure = function (str) {
return new AdvancedFormatRecord(new AdvancedFormatRecord.RecordClass({
advancedFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedFormatRecord._isAnonymousRecord = true;
AdvancedFormatRecord.UniqueId = "8bd0ab07-a3f3-c2d2-a572-a84134c564bd";
AdvancedFormatRecord.init();
return AdvancedFormatRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.AdvancedFormatRecord = AdvancedFormatRecord;

});
define("PocketFestival.model$ChartFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$ChartFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ChartFormatList = (function (_super) {
__extends(ChartFormatList, _super);
function ChartFormatList(defaults) {
_super.apply(this, arguments);
}
ChartFormatList.itemType = ChartsMobileModel.ChartFormatRec;
return ChartFormatList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ChartFormatList = ChartFormatList;

});
define("PocketFestival.model$ChartFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ChartFormatRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ChartFormatRecordList = (function (_super) {
__extends(ChartFormatRecordList, _super);
function ChartFormatRecordList(defaults) {
_super.apply(this, arguments);
}
ChartFormatRecordList.itemType = PocketFestivalModel.ChartFormatRecord;
return ChartFormatRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ChartFormatRecordList = ChartFormatRecordList;

});
define("PocketFestival.model$YAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$YAxisFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var YAxisFormatRecord = (function (_super) {
__extends(YAxisFormatRecord, _super);
function YAxisFormatRecord(defaults) {
_super.apply(this, arguments);
}
YAxisFormatRecord.attributesToDeclare = function () {
return [
this.attr("YAxisFormat", "yAxisFormatAttr", "YAxisFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.YAxisFormatRec());
}, ChartsMobileModel.YAxisFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxisFormatRecord.fromStructure = function (str) {
return new YAxisFormatRecord(new YAxisFormatRecord.RecordClass({
yAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxisFormatRecord._isAnonymousRecord = true;
YAxisFormatRecord.UniqueId = "9ac3a73b-5c3d-dd8f-3923-cd00427e8e10";
YAxisFormatRecord.init();
return YAxisFormatRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.YAxisFormatRecord = YAxisFormatRecord;

});
define("PocketFestival.model$YAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$YAxisFormatRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var YAxisFormatRecordList = (function (_super) {
__extends(YAxisFormatRecordList, _super);
function YAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisFormatRecordList.itemType = PocketFestivalModel.YAxisFormatRecord;
return YAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.YAxisFormatRecordList = YAxisFormatRecordList;

});
define("PocketFestival.model$ProductsIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ProductsIntegerRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ProductsIntegerRecordList = (function (_super) {
__extends(ProductsIntegerRecordList, _super);
function ProductsIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
ProductsIntegerRecordList.itemType = PocketFestivalModel.ProductsIntegerRecord;
return ProductsIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ProductsIntegerRecordList = ProductsIntegerRecordList;

});
define("PocketFestival.model$StoreList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$StoreRec"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StoreList = (function (_super) {
__extends(StoreList, _super);
function StoreList(defaults) {
_super.apply(this, arguments);
}
StoreList.itemType = PocketFestivalModel.StoreRec;
return StoreList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StoreList = StoreList;

});
define("PocketFestival.model$AdvancedFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$AdvancedFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedFormatList = (function (_super) {
__extends(AdvancedFormatList, _super);
function AdvancedFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatList.itemType = ChartsMobileModel.AdvancedFormatRec;
return AdvancedFormatList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AdvancedFormatList = AdvancedFormatList;

});
define("PocketFestival.model$Sample_TransactionTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_TransactionTypeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_TransactionTypeRecord = (function (_super) {
__extends(Sample_TransactionTypeRecord, _super);
function Sample_TransactionTypeRecord(defaults) {
_super.apply(this, arguments);
}
Sample_TransactionTypeRecord.attributesToDeclare = function () {
return [
this.attr("Sample_TransactionType", "sample_TransactionTypeAttr", "Sample_TransactionType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsSampleDataDBModel.Sample_TransactionTypeRec());
}, OutSystemsSampleDataDBModel.Sample_TransactionTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
Sample_TransactionTypeRecord.fromStructure = function (str) {
return new Sample_TransactionTypeRecord(new Sample_TransactionTypeRecord.RecordClass({
sample_TransactionTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sample_TransactionTypeRecord._isAnonymousRecord = true;
Sample_TransactionTypeRecord.UniqueId = "dc3c25e3-c272-8f54-ea67-a40bdd677778";
Sample_TransactionTypeRecord.init();
return Sample_TransactionTypeRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.Sample_TransactionTypeRecord = Sample_TransactionTypeRecord;

});
define("PocketFestival.model$Sample_TransactionTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$Sample_TransactionTypeRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_TransactionTypeRecordList = (function (_super) {
__extends(Sample_TransactionTypeRecordList, _super);
function Sample_TransactionTypeRecordList(defaults) {
_super.apply(this, arguments);
}
Sample_TransactionTypeRecordList.itemType = PocketFestivalModel.Sample_TransactionTypeRecord;
return Sample_TransactionTypeRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_TransactionTypeRecordList = Sample_TransactionTypeRecordList;

});
define("PocketFestival.model$Sample_ProductCategoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_ProductCategoryRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_ProductCategoryRecord = (function (_super) {
__extends(Sample_ProductCategoryRecord, _super);
function Sample_ProductCategoryRecord(defaults) {
_super.apply(this, arguments);
}
Sample_ProductCategoryRecord.attributesToDeclare = function () {
return [
this.attr("Sample_ProductCategory", "sample_ProductCategoryAttr", "Sample_ProductCategory", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsSampleDataDBModel.Sample_ProductCategoryRec());
}, OutSystemsSampleDataDBModel.Sample_ProductCategoryRec)
].concat(_super.attributesToDeclare.call(this));
};
Sample_ProductCategoryRecord.fromStructure = function (str) {
return new Sample_ProductCategoryRecord(new Sample_ProductCategoryRecord.RecordClass({
sample_ProductCategoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sample_ProductCategoryRecord._isAnonymousRecord = true;
Sample_ProductCategoryRecord.UniqueId = "9c4dd768-d8b7-69ef-eb4e-3054e60cbe80";
Sample_ProductCategoryRecord.init();
return Sample_ProductCategoryRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.Sample_ProductCategoryRecord = Sample_ProductCategoryRecord;

});
define("PocketFestival.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$AlertRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AlertRecord = (function (_super) {
__extends(AlertRecord, _super);
function AlertRecord(defaults) {
_super.apply(this, arguments);
}
AlertRecord.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.AlertRec());
}, OutSystemsUIMobileModel.AlertRec)
].concat(_super.attributesToDeclare.call(this));
};
AlertRecord.fromStructure = function (str) {
return new AlertRecord(new AlertRecord.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRecord._isAnonymousRecord = true;
AlertRecord.UniqueId = "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a";
AlertRecord.init();
return AlertRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.AlertRecord = AlertRecord;

});
define("PocketFestival.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$AnimationTypeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUIMobileModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AnimationTypeList = AnimationTypeList;

});
define("PocketFestival.model$Sample_EmployeeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_EmployeeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_EmployeeRecord = (function (_super) {
__extends(Sample_EmployeeRecord, _super);
function Sample_EmployeeRecord(defaults) {
_super.apply(this, arguments);
}
Sample_EmployeeRecord.attributesToDeclare = function () {
return [
this.attr("Sample_Employee", "sample_EmployeeAttr", "Sample_Employee", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsSampleDataDBModel.Sample_EmployeeRec());
}, OutSystemsSampleDataDBModel.Sample_EmployeeRec)
].concat(_super.attributesToDeclare.call(this));
};
Sample_EmployeeRecord.fromStructure = function (str) {
return new Sample_EmployeeRecord(new Sample_EmployeeRecord.RecordClass({
sample_EmployeeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sample_EmployeeRecord._isAnonymousRecord = true;
Sample_EmployeeRecord.UniqueId = "eb10e475-e240-10d2-21b9-abc00974a86c";
Sample_EmployeeRecord.init();
return Sample_EmployeeRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.Sample_EmployeeRecord = Sample_EmployeeRecord;

});
define("PocketFestival.model$Sample_EmployeeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$Sample_EmployeeRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_EmployeeRecordList = (function (_super) {
__extends(Sample_EmployeeRecordList, _super);
function Sample_EmployeeRecordList(defaults) {
_super.apply(this, arguments);
}
Sample_EmployeeRecordList.itemType = PocketFestivalModel.Sample_EmployeeRecord;
return Sample_EmployeeRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_EmployeeRecordList = Sample_EmployeeRecordList;

});
define("PocketFestival.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$ColorRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.ColorRec());
}, OutSystemsUIMobileModel.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "c47826b7-e423-2fbf-8907-84243715f5a8";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.ColorRecord = ColorRecord;

});
define("PocketFestival.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ColorRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = PocketFestivalModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ColorRecordList = ColorRecordList;

});
define("PocketFestival.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$AlertRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUIMobileModel.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AlertList = AlertList;

});
define("PocketFestival.model$AdvancedDataPointFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$AdvancedDataPointFormatRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatRecordList = (function (_super) {
__extends(AdvancedDataPointFormatRecordList, _super);
function AdvancedDataPointFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatRecordList.itemType = PocketFestivalModel.AdvancedDataPointFormatRecord;
return AdvancedDataPointFormatRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AdvancedDataPointFormatRecordList = AdvancedDataPointFormatRecordList;

});
define("PocketFestival.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$ColumnBreakRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecord = (function (_super) {
__extends(ColumnBreakRecord, _super);
function ColumnBreakRecord(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecord.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.ColumnBreakRec());
}, OutSystemsUIMobileModel.ColumnBreakRec)
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRecord.fromStructure = function (str) {
return new ColumnBreakRecord(new ColumnBreakRecord.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRecord._isAnonymousRecord = true;
ColumnBreakRecord.UniqueId = "b6adbbf4-e08b-ad29-75a6-f8f796279b71";
ColumnBreakRecord.init();
return ColumnBreakRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.ColumnBreakRecord = ColumnBreakRecord;

});
define("PocketFestival.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ColumnBreakRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = PocketFestivalModel.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("PocketFestival.model$StoreRecord", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$StoreRec"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StoreRecord = (function (_super) {
__extends(StoreRecord, _super);
function StoreRecord(defaults) {
_super.apply(this, arguments);
}
StoreRecord.attributesToDeclare = function () {
return [
this.attr("Store", "storeAttr", "Store", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PocketFestivalModel.StoreRec());
}, PocketFestivalModel.StoreRec)
].concat(_super.attributesToDeclare.call(this));
};
StoreRecord.fromStructure = function (str) {
return new StoreRecord(new StoreRecord.RecordClass({
storeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StoreRecord._isAnonymousRecord = true;
StoreRecord.UniqueId = "b2ae0f19-bb47-adf0-dd4a-a99606303e06";
StoreRecord.init();
return StoreRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.StoreRecord = StoreRecord;

});
define("PocketFestival.model$Sample_TransactionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_TransactionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_TransactionList = (function (_super) {
__extends(Sample_TransactionList, _super);
function Sample_TransactionList(defaults) {
_super.apply(this, arguments);
}
Sample_TransactionList.itemType = OutSystemsSampleDataDBModel.Sample_TransactionRec;
return Sample_TransactionList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_TransactionList = Sample_TransactionList;

});
define("PocketFestival.model$Sample_DepartmentRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_DepartmentRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_DepartmentRecord = (function (_super) {
__extends(Sample_DepartmentRecord, _super);
function Sample_DepartmentRecord(defaults) {
_super.apply(this, arguments);
}
Sample_DepartmentRecord.attributesToDeclare = function () {
return [
this.attr("Sample_Department", "sample_DepartmentAttr", "Sample_Department", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsSampleDataDBModel.Sample_DepartmentRec());
}, OutSystemsSampleDataDBModel.Sample_DepartmentRec)
].concat(_super.attributesToDeclare.call(this));
};
Sample_DepartmentRecord.fromStructure = function (str) {
return new Sample_DepartmentRecord(new Sample_DepartmentRecord.RecordClass({
sample_DepartmentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sample_DepartmentRecord._isAnonymousRecord = true;
Sample_DepartmentRecord.UniqueId = "e0401410-41d5-a24f-05f6-37b029c1246b";
Sample_DepartmentRecord.init();
return Sample_DepartmentRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.Sample_DepartmentRecord = Sample_DepartmentRecord;

});
define("PocketFestival.model$Sample_DepartmentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$Sample_DepartmentRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_DepartmentRecordList = (function (_super) {
__extends(Sample_DepartmentRecordList, _super);
function Sample_DepartmentRecordList(defaults) {
_super.apply(this, arguments);
}
Sample_DepartmentRecordList.itemType = PocketFestivalModel.Sample_DepartmentRecord;
return Sample_DepartmentRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_DepartmentRecordList = Sample_DepartmentRecordList;

});
define("PocketFestival.model$Sample_TransactionTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_TransactionTypeRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_TransactionTypeList = (function (_super) {
__extends(Sample_TransactionTypeList, _super);
function Sample_TransactionTypeList(defaults) {
_super.apply(this, arguments);
}
Sample_TransactionTypeList.itemType = OutSystemsSampleDataDBModel.Sample_TransactionTypeRec;
return Sample_TransactionTypeList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_TransactionTypeList = Sample_TransactionTypeList;

});
define("PocketFestival.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$StepsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUIMobileModel.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StepsList = StepsList;

});
define("PocketFestival.model$ProductsList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ProductsRec"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ProductsList = (function (_super) {
__extends(ProductsList, _super);
function ProductsList(defaults) {
_super.apply(this, arguments);
}
ProductsList.itemType = PocketFestivalModel.ProductsRec;
return ProductsList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ProductsList = ProductsList;

});
define("PocketFestival.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$SpeedRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var SpeedRecord = (function (_super) {
__extends(SpeedRecord, _super);
function SpeedRecord(defaults) {
_super.apply(this, arguments);
}
SpeedRecord.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIMobileModel.SpeedRec());
}, OutSystemsUIMobileModel.SpeedRec)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRecord.fromStructure = function (str) {
return new SpeedRecord(new SpeedRecord.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRecord._isAnonymousRecord = true;
SpeedRecord.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
SpeedRecord.init();
return SpeedRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.SpeedRecord = SpeedRecord;

});
define("PocketFestival.model$AdvancedFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$AdvancedFormatRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AdvancedFormatRecordList = (function (_super) {
__extends(AdvancedFormatRecordList, _super);
function AdvancedFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatRecordList.itemType = PocketFestivalModel.AdvancedFormatRecord;
return AdvancedFormatRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AdvancedFormatRecordList = AdvancedFormatRecordList;

});
define("PocketFestival.model$Sample_ProductCategoryList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsSampleDataDB.model", "PocketFestival.model", "OutSystemsSampleDataDB.model$Sample_ProductCategoryRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsSampleDataDB"], function (exports, OutSystems, OutSystemsSampleDataDBModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_ProductCategoryList = (function (_super) {
__extends(Sample_ProductCategoryList, _super);
function Sample_ProductCategoryList(defaults) {
_super.apply(this, arguments);
}
Sample_ProductCategoryList.itemType = OutSystemsSampleDataDBModel.Sample_ProductCategoryRec;
return Sample_ProductCategoryList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_ProductCategoryList = Sample_ProductCategoryList;

});
define("PocketFestival.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$PositionRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUIMobileModel.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.PositionList = PositionList;

});
define("PocketFestival.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$AutoplayRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUIMobileModel.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AutoplayList = AutoplayList;

});
define("PocketFestival.model$StoreRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$StoreRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StoreRecordList = (function (_super) {
__extends(StoreRecordList, _super);
function StoreRecordList(defaults) {
_super.apply(this, arguments);
}
StoreRecordList.itemType = PocketFestivalModel.StoreRecord;
return StoreRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StoreRecordList = StoreRecordList;

});
define("PocketFestival.model$XAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$XAxisFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var XAxisFormatList = (function (_super) {
__extends(XAxisFormatList, _super);
function XAxisFormatList(defaults) {
_super.apply(this, arguments);
}
XAxisFormatList.itemType = ChartsMobileModel.XAxisFormatRec;
return XAxisFormatList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.XAxisFormatList = XAxisFormatList;

});
define("PocketFestival.model$MasterDetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$MasterDetailItemRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var MasterDetailItemList = (function (_super) {
__extends(MasterDetailItemList, _super);
function MasterDetailItemList(defaults) {
_super.apply(this, arguments);
}
MasterDetailItemList.itemType = OutSystemsUIMobileModel.MasterDetailItemRec;
return MasterDetailItemList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.MasterDetailItemList = MasterDetailItemList;

});
define("PocketFestival.model$CategoriesList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$CategoriesRec"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var CategoriesList = (function (_super) {
__extends(CategoriesList, _super);
function CategoriesList(defaults) {
_super.apply(this, arguments);
}
CategoriesList.itemType = PocketFestivalModel.CategoriesRec;
return CategoriesList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.CategoriesList = CategoriesList;

});
define("PocketFestival.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "PocketFestival.model", "OutSystemsUIMobile.model$SpeedRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$OutSystemsUIMobile"], function (exports, OutSystems, OutSystemsUIMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUIMobileModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.SpeedList = SpeedList;

});
define("PocketFestival.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$StepsRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = PocketFestivalModel.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.StepsRecordList = StepsRecordList;

});
define("PocketFestival.model$Sample_ProductCategoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$Sample_ProductCategoryRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_ProductCategoryRecordList = (function (_super) {
__extends(Sample_ProductCategoryRecordList, _super);
function Sample_ProductCategoryRecordList(defaults) {
_super.apply(this, arguments);
}
Sample_ProductCategoryRecordList.itemType = PocketFestivalModel.Sample_ProductCategoryRecord;
return Sample_ProductCategoryRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_ProductCategoryRecordList = Sample_ProductCategoryRecordList;

});
define("PocketFestival.model$SettingsList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "PocketFestival.model", "BarcodePlugin.model$SettingsRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$BarcodePlugin"], function (exports, OutSystems, BarcodePluginModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var SettingsList = (function (_super) {
__extends(SettingsList, _super);
function SettingsList(defaults) {
_super.apply(this, arguments);
}
SettingsList.itemType = BarcodePluginModel.SettingsRec;
return SettingsList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.SettingsList = SettingsList;

});
define("PocketFestival.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "PocketFestival.model", "ServiceCenter.model$UserRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.UserList = UserList;

});
define("PocketFestival.model$Sample_TransactionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$Sample_TransactionRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var Sample_TransactionRecordList = (function (_super) {
__extends(Sample_TransactionRecordList, _super);
function Sample_TransactionRecordList(defaults) {
_super.apply(this, arguments);
}
Sample_TransactionRecordList.itemType = PocketFestivalModel.Sample_TransactionRecord;
return Sample_TransactionRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.Sample_TransactionRecordList = Sample_TransactionRecordList;

});
define("PocketFestival.model$ProductsRecord", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ProductsRec"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ProductsRecord = (function (_super) {
__extends(ProductsRecord, _super);
function ProductsRecord(defaults) {
_super.apply(this, arguments);
}
ProductsRecord.attributesToDeclare = function () {
return [
this.attr("Products", "productsAttr", "Products", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PocketFestivalModel.ProductsRec());
}, PocketFestivalModel.ProductsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProductsRecord.fromStructure = function (str) {
return new ProductsRecord(new ProductsRecord.RecordClass({
productsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProductsRecord._isAnonymousRecord = true;
ProductsRecord.UniqueId = "f3bbfe73-3e9c-ad62-2788-277a23893b07";
ProductsRecord.init();
return ProductsRecord;
})(OS.DataTypes.GenericRecord);
PocketFestivalModel.ProductsRecord = ProductsRecord;

});
define("PocketFestival.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$AlertRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = PocketFestivalModel.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.AlertRecordList = AlertRecordList;

});
define("PocketFestival.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$SpeedRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = PocketFestivalModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.SpeedRecordList = SpeedRecordList;

});
define("PocketFestival.model$ProductsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$ProductsRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var ProductsRecordList = (function (_super) {
__extends(ProductsRecordList, _super);
function ProductsRecordList(defaults) {
_super.apply(this, arguments);
}
ProductsRecordList.itemType = PocketFestivalModel.ProductsRecord;
return ProductsRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.ProductsRecordList = ProductsRecordList;

});
define("PocketFestival.model$YAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "PocketFestival.model", "ChartsMobile.model$YAxisFormatRec", "PocketFestival.referencesHealth", "PocketFestival.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, PocketFestivalModel) {
var OS = OutSystems.Internal;
var YAxisFormatList = (function (_super) {
__extends(YAxisFormatList, _super);
function YAxisFormatList(defaults) {
_super.apply(this, arguments);
}
YAxisFormatList.itemType = ChartsMobileModel.YAxisFormatRec;
return YAxisFormatList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.YAxisFormatList = YAxisFormatList;

});
define("PocketFestival.model$CategoriesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.model$CategoriesRecord"], function (exports, OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;
var CategoriesRecordList = (function (_super) {
__extends(CategoriesRecordList, _super);
function CategoriesRecordList(defaults) {
_super.apply(this, arguments);
}
CategoriesRecordList.itemType = PocketFestivalModel.CategoriesRecord;
return CategoriesRecordList;
})(OS.DataTypes.GenericRecordList);
PocketFestivalModel.CategoriesRecordList = CategoriesRecordList;

});
define("PocketFestival.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var PocketFestivalModel = exports;
Object.defineProperty(PocketFestivalModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["1914a21d-b339-4252-9de1-c5832c735ca3"];
}
});

PocketFestivalModel.staticEntities = {};
PocketFestivalModel.staticEntities.store = {};
var getStoreRecord = function (record) {
return PocketFestivalModel.module.staticEntities["162c71e8-2493-4116-a76c-396aa5e03abb"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.store, "licorBeirao", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStoreRecord("0b99e11b-150f-45cf-a867-7faa7165095b"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.store, "pizzaHut", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStoreRecord("11127c97-b0b9-41fa-9fec-84705a9eb340"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.store, "sagres", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStoreRecord("28fd3e3a-5787-4681-ba98-dd8cd5610103"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.store, "casalGarcia", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStoreRecord("36e2cee8-5d1f-447d-a289-ca7a518367d6"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.store, "mcDonalds", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStoreRecord("c67b79d8-5bee-4952-9466-9312b1ea5963"));
}
});

PocketFestivalModel.staticEntities.categories = {};
var getCategoriesRecord = function (record) {
return PocketFestivalModel.module.staticEntities["3cf34c49-b066-4ac1-9e32-d514c1bb3b58"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.categories, "food", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getCategoriesRecord("46acfb15-21d5-4d6c-ad3f-9b997ca1b877"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.categories, "drinks", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getCategoriesRecord("5b80dbd0-a3ba-414c-91b4-f6142b68a8a6"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.categories, "store", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getCategoriesRecord("c6f9ffb3-f41c-4e06-b42d-d6ac94c3fc6c"));
}
});

PocketFestivalModel.staticEntities.products = {};
var getProductsRecord = function (record) {
return PocketFestivalModel.module.staticEntities["aec75c70-12a3-465a-a3e4-4ab6e7287c4b"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.products, "record11", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("00017bd5-3ffd-4434-9095-8524e2224c3c"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record15", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("03e8f432-f899-45d6-bdcf-5c988a7f96b8"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record18", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("0f9147d6-32d9-48ff-83ab-600bf3490487"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record9", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("20647d96-ebf3-4fb8-9695-f63244a1fd3b"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record13", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("30e0c71e-8e42-4144-8aea-3d059eca4d11"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record17", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("4557cd23-cb49-4355-8044-34eaf1286f06"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record7", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("7defa38d-557d-485b-9558-44fd2e71e56e"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record2", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("7e8262eb-4800-4bcc-81f1-587bd8d5f619"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record3", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("86d8d133-ce2c-4194-811b-6c1e99c51ec3"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record4", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("a8e01e3b-ba51-4f47-b301-8557edce0882"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record8", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("acd12f45-b8ff-4d0d-be7b-d13a2ce49f54"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record12", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("b4044e6c-5389-4a33-befe-2fb1429c4d65"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record16", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("c20fbd06-ab35-4fc8-8558-7acf4099beb9"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record14", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("de05e8e8-518e-4a0c-afab-532401f8b25f"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record10", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("ef5cde9d-cc0d-4cef-b793-da815f59f6bc"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record5", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("f2a377c8-6960-4d3c-a27a-7465a3c66819"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record6", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("f4d9e61d-a5c8-4a33-8722-095173ab377d"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.products, "record1", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getProductsRecord("fc136e42-a05f-4185-9c0d-8b20e0b2ac1e"));
}
});

PocketFestivalModel.staticEntities.stackingType = {};
var getStackingTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["1aaafcbe-99a5-4857-83f2-e4754e65edcf"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.stackingType, "stacked100Percent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("5a048369-2987-4af5-b052-ab363ac4b748"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.stackingType, "noStacking", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("b664d44a-e707-43cc-b782-cc4fd9c3ce8a"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.stackingType, "stacked", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("f5816dfa-da3b-4031-aa5f-06a7a08dcc94"));
}
});

PocketFestivalModel.staticEntities.legendPosition = {};
var getLegendPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["6f55558f-9a5c-49bb-bc32-8180c0ac0d73"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.legendPosition, "bottom", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("24063cd8-b015-4fb7-8ceb-c4cf65110444"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.legendPosition, "right", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("2c2e4610-d5b5-4738-9474-83ca4e40f33b"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.legendPosition, "inside", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("33fda788-9eba-426b-be1d-284323c6ae2a"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.legendPosition, "left", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("5314c097-85bd-407c-84f9-f0ebd17b75ce"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.legendPosition, "hidden", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("6519bee3-d71b-41ae-8e57-a377f8aaa6c3"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.legendPosition, "top", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("e0495156-d508-4fc2-a3ed-77a194c65b49"));
}
});

PocketFestivalModel.staticEntities.xAxisValuesType = {};
var getXAxisValuesTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["e24bffa0-82f5-4cd2-9d43-97b142649f77"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.xAxisValuesType, "text", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getXAxisValuesTypeRecord("31d40404-1f4d-4f1a-8c04-aa7377da778a"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.xAxisValuesType, "auto", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getXAxisValuesTypeRecord("6599ec19-4160-4794-81cd-6ba06b0bb84d"));
}
});

PocketFestivalModel.staticEntities.sample_TransactionType = {};
var getSample_TransactionTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["47a79537-db1b-4dab-bfba-354f95935ad0"].staticEntities["9c6d6ba4-db05-4894-923c-e60ebbf34856"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.sample_TransactionType, "groceries", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_TransactionTypeRecord("2e8a21b3-9dbe-422c-8d62-d28b79e9858e"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.sample_TransactionType, "transfers", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_TransactionTypeRecord("6708fa81-f2af-41b0-893f-463927874efc"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.sample_TransactionType, "cash", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_TransactionTypeRecord("9d45b68b-6ccb-45ae-8469-b3deb31fc7fa"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.sample_TransactionType, "eatingOut", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_TransactionTypeRecord("da37c59e-834a-4bd3-8d10-c93c245ddcd7"));
}
});

PocketFestivalModel.staticEntities.sample_ProductCategory = {};
var getSample_ProductCategoryRecord = function (record) {
return OS.ApplicationInfo.getModules()["47a79537-db1b-4dab-bfba-354f95935ad0"].staticEntities["b5180355-7091-4ebd-9ec7-db6055ccaccc"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.sample_ProductCategory, "audio", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_ProductCategoryRecord("03d3cb93-0a63-4040-b872-c4b46c0fd87c"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.sample_ProductCategory, "accessories", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_ProductCategoryRecord("589ba8e1-60de-4d22-a717-c9637a66ccc2"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.sample_ProductCategory, "phones", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_ProductCategoryRecord("9e90d1ca-dba1-4810-a954-41d7d53b9231"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.sample_ProductCategory, "storage", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_ProductCategoryRecord("bd250672-303a-4cf4-883a-f5b5fa0528f2"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.sample_ProductCategory, "laptops", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_ProductCategoryRecord("cea3dae2-8421-45a4-abdd-61ea60b324b9"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.sample_ProductCategory, "printers", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSample_ProductCategoryRecord("f043d746-924f-4810-a192-4a4a45d35710"));
}
});

PocketFestivalModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

PocketFestivalModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

PocketFestivalModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4a5b3b8d-44e7-4c03-9b89-453fa2feee20"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.color, "white", {
get: function () {
return getColorRecord("05505a13-1fe9-4adf-9845-11368c74e98b");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("0772a1e6-baf6-4f8d-9b63-aef9b16bec31");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "black", {
get: function () {
return getColorRecord("26ba2ced-6bce-452f-b33a-7874dc80d8d1");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("3269784e-d6b0-46db-a0b5-5a9a64ee0e41");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "none", {
get: function () {
return getColorRecord("342260d0-74a4-44fd-9e9d-f0505a330244");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("833f5f9b-2325-4b92-9285-e14aa1a17c25");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("94682198-3a70-458e-9889-3eef131d1b00");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "primaryColor", {
get: function () {
return getColorRecord("9bd951e1-c94c-434b-85cb-a4cde3ffe638");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ad00278a-a271-46de-ac30-9f99c87f97a4");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.color, "grey", {
get: function () {
return getColorRecord("f986e894-0745-46fd-aa63-7680b5fd9234");
}
});

PocketFestivalModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

PocketFestivalModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

PocketFestivalModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

PocketFestivalModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

PocketFestivalModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

PocketFestivalModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.messageStatus, "hidden", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.messageStatus, "read", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.messageStatus, "sent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf"));
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.messageStatus, "received", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94"));
}
});

PocketFestivalModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

PocketFestivalModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(PocketFestivalModel.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(PocketFestivalModel.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

});
