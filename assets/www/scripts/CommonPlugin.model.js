define("CommonPlugin.model$Mobile_OperatingSystemRec", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRec = (function (_super) {
__extends(Mobile_OperatingSystemRec, _super);
function Mobile_OperatingSystemRec(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Mobile_OperatingSystemRec.init();
return Mobile_OperatingSystemRec;
})(OS.DataTypes.GenericRecord);
CommonPluginModel.Mobile_OperatingSystemRec = Mobile_OperatingSystemRec;

});
define("CommonPlugin.model$PluginLicenseRec", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseRec = (function (_super) {
__extends(PluginLicenseRec, _super);
function PluginLicenseRec(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRec.attributesToDeclare = function () {
return [
this.attr("PluginName", "pluginNameAttr", "PluginName", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("MobileOperatingSystemId", "mobileOperatingSystemIdAttr", "MobileOperatingSystemId", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("License", "licenseAttr", "License", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("SubscriptionKey", "subscriptionKeyAttr", "SubscriptionKey", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("SubscriptionToken", "subscriptionTokenAttr", "SubscriptionToken", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("LastUpdate", "lastUpdateAttr", "LastUpdate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
PluginLicenseRec.init();
return PluginLicenseRec;
})(OS.DataTypes.GenericRecord);
CommonPluginModel.PluginLicenseRec = PluginLicenseRec;

});
define("CommonPlugin.model$ErrorRec", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var ErrorRec = (function (_super) {
__extends(ErrorRec, _super);
function ErrorRec(defaults) {
_super.apply(this, arguments);
}
ErrorRec.attributesToDeclare = function () {
return [
this.attr("ErrorCode", "errorCodeAttr", "ErrorCode", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ErrorRec.init();
return ErrorRec;
})(OS.DataTypes.GenericRecord);
CommonPluginModel.ErrorRec = ErrorRec;

});
define("CommonPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
CommonPluginModel.ErrorList = ErrorList;

});
define("CommonPlugin.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecord = (function (_super) {
__extends(Mobile_OperatingSystemRecord, _super);
function Mobile_OperatingSystemRecord(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecord.attributesToDeclare = function () {
return [
this.attr("Mobile_OperatingSystem", "mobile_OperatingSystemAttr", "Mobile_OperatingSystem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.Mobile_OperatingSystemRec());
}, CommonPluginModel.Mobile_OperatingSystemRec)
].concat(_super.attributesToDeclare.call(this));
};
Mobile_OperatingSystemRecord.fromStructure = function (str) {
return new Mobile_OperatingSystemRecord(new Mobile_OperatingSystemRecord.RecordClass({
mobile_OperatingSystemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Mobile_OperatingSystemRecord._isAnonymousRecord = true;
Mobile_OperatingSystemRecord.UniqueId = "f56bdc75-0614-38d3-e901-3cdbe4073c38";
Mobile_OperatingSystemRecord.init();
return Mobile_OperatingSystemRecord;
})(OS.DataTypes.GenericRecord);
CommonPluginModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("CommonPlugin.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.itemType = CommonPluginModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
CommonPluginModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("CommonPlugin.model$PluginLicenseRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$PluginLicenseRec"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseRecord = (function (_super) {
__extends(PluginLicenseRecord, _super);
function PluginLicenseRecord(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRecord.attributesToDeclare = function () {
return [
this.attr("PluginLicense", "pluginLicenseAttr", "PluginLicense", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.PluginLicenseRec());
}, CommonPluginModel.PluginLicenseRec)
].concat(_super.attributesToDeclare.call(this));
};
PluginLicenseRecord.fromStructure = function (str) {
return new PluginLicenseRecord(new PluginLicenseRecord.RecordClass({
pluginLicenseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PluginLicenseRecord._isAnonymousRecord = true;
PluginLicenseRecord.UniqueId = "4f3ba093-4c73-508e-cfa6-9aca510d9587";
PluginLicenseRecord.init();
return PluginLicenseRecord;
})(OS.DataTypes.GenericRecord);
CommonPluginModel.PluginLicenseRecord = PluginLicenseRecord;

});
define("CommonPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, CommonPluginModel) {
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
CommonPluginModel.ErrorRecord = ErrorRecord;

});
define("CommonPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$ErrorRecord"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = CommonPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
CommonPluginModel.ErrorRecordList = ErrorRecordList;

});
define("CommonPlugin.model$PluginLicenseList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$PluginLicenseRec"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseList = (function (_super) {
__extends(PluginLicenseList, _super);
function PluginLicenseList(defaults) {
_super.apply(this, arguments);
}
PluginLicenseList.itemType = CommonPluginModel.PluginLicenseRec;
return PluginLicenseList;
})(OS.DataTypes.GenericRecordList);
CommonPluginModel.PluginLicenseList = PluginLicenseList;

});
define("CommonPlugin.model$PluginLicenseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$PluginLicenseRecord"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseRecordList = (function (_super) {
__extends(PluginLicenseRecordList, _super);
function PluginLicenseRecordList(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRecordList.itemType = CommonPluginModel.PluginLicenseRecord;
return PluginLicenseRecordList;
})(OS.DataTypes.GenericRecordList);
CommonPluginModel.PluginLicenseRecordList = PluginLicenseRecordList;

});
define("CommonPlugin.model$Mobile_OperatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec"], function (exports, OutSystems, CommonPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.itemType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
CommonPluginModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("CommonPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var CommonPluginModel = exports;
Object.defineProperty(CommonPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"];
}
});

CommonPluginModel.staticEntities = {};
CommonPluginModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return CommonPluginModel.module.staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(CommonPluginModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(CommonPluginModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(CommonPluginModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(CommonPluginModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

});
