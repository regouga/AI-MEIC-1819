define("BarcodePlugin.model$SettingsRec", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var SettingsRec = (function (_super) {
__extends(SettingsRec, _super);
function SettingsRec(defaults) {
_super.apply(this, arguments);
}
SettingsRec.attributesToDeclare = function () {
return [
this.attr("Camera", "cameraAttr", "Camera", false, false, OS.Types.Text, function () {
return "back";
}), 
this.attr("Flash", "flashAttr", "Flash", false, false, OS.Types.Text, function () {
return "auto";
}), 
this.attr("DrawSight", "drawSightAttr", "DrawSight", false, false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
SettingsRec.init();
return SettingsRec;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.SettingsRec = SettingsRec;

});
define("BarcodePlugin.model$SettingsRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$SettingsRec"], function (exports, OutSystems, BarcodePluginModel) {
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
BarcodePluginModel.SettingsRecord = SettingsRecord;

});
define("BarcodePlugin.model$SettingsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$SettingsRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var SettingsRecordList = (function (_super) {
__extends(SettingsRecordList, _super);
function SettingsRecordList(defaults) {
_super.apply(this, arguments);
}
SettingsRecordList.itemType = BarcodePluginModel.SettingsRecord;
return SettingsRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.SettingsRecordList = SettingsRecordList;

});
define("BarcodePlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "BarcodePlugin.model", "CommonPlugin.model$ErrorRec", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ErrorList = ErrorList;

});
define("BarcodePlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "BarcodePlugin.model", "CommonPlugin.model$ErrorRec", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, BarcodePluginModel) {
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
BarcodePluginModel.ErrorRecord = ErrorRecord;

});
define("BarcodePlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ErrorRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = BarcodePluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ErrorRecordList = ErrorRecordList;

});
define("BarcodePlugin.model$SettingsList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$SettingsRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var SettingsList = (function (_super) {
__extends(SettingsList, _super);
function SettingsList(defaults) {
_super.apply(this, arguments);
}
SettingsList.itemType = BarcodePluginModel.SettingsRec;
return SettingsList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.SettingsList = SettingsList;

});
define("BarcodePlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var BarcodePluginModel = exports;
Object.defineProperty(BarcodePluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["b8b551da-aebd-4a2d-80c8-28ff1ea1bf98"];
}
});

BarcodePluginModel.staticEntities = {};
});
