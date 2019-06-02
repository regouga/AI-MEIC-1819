define("OutSystemsUIMobile.model$Espace_ReferenceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$Espace_ReferenceRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var Espace_ReferenceRecord = (function (_super) {
__extends(Espace_ReferenceRecord, _super);
function Espace_ReferenceRecord(defaults) {
_super.apply(this, arguments);
}
Espace_ReferenceRecord.attributesToDeclare = function () {
return [
this.attr("Espace_Reference", "espace_ReferenceAttr", "Espace_Reference", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.Espace_ReferenceRec());
}, ServiceCenterModel.Espace_ReferenceRec)
].concat(_super.attributesToDeclare.call(this));
};
Espace_ReferenceRecord.fromStructure = function (str) {
return new Espace_ReferenceRecord(new Espace_ReferenceRecord.RecordClass({
espace_ReferenceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Espace_ReferenceRecord._isAnonymousRecord = true;
Espace_ReferenceRecord.UniqueId = "00d9030e-cdd6-e653-c433-b8d974361bea";
Espace_ReferenceRecord.init();
return Espace_ReferenceRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.Espace_ReferenceRecord = Espace_ReferenceRecord;

});
define("OutSystemsUIMobile.model$Espace_ReferenceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$Espace_ReferenceRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var Espace_ReferenceRecordList = (function (_super) {
__extends(Espace_ReferenceRecordList, _super);
function Espace_ReferenceRecordList(defaults) {
_super.apply(this, arguments);
}
Espace_ReferenceRecordList.itemType = OutSystemsUIMobileModel.Espace_ReferenceRecord;
return Espace_ReferenceRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.Espace_ReferenceRecordList = Espace_ReferenceRecordList;

});
define("OutSystemsUIMobile.model$StepsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var StepsRec = (function (_super) {
__extends(StepsRec, _super);
function StepsRec(defaults) {
_super.apply(this, arguments);
}
StepsRec.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
StepsRec.fromStructure = function (str) {
return new StepsRec(new StepsRec.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRec.init();
return StepsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.StepsRec = StepsRec;

});
define("OutSystemsUIMobile.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$StepsRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.StepsRecord = StepsRecord;

});
define("OutSystemsUIMobile.model$AnimationTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AnimationTypeRec = (function (_super) {
__extends(AnimationTypeRec, _super);
function AnimationTypeRec(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRec.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRec.fromStructure = function (str) {
return new AnimationTypeRec(new AnimationTypeRec.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRec.init();
return AnimationTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.AnimationTypeRec = AnimationTypeRec;

});
define("OutSystemsUIMobile.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AnimationTypeRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("OutSystemsUIMobile.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AnimationTypeRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = OutSystemsUIMobileModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("OutSystemsUIMobile.model$MessageStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MessageStatusRec = (function (_super) {
__extends(MessageStatusRec, _super);
function MessageStatusRec(defaults) {
_super.apply(this, arguments);
}
MessageStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRec.init();
return MessageStatusRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.MessageStatusRec = MessageStatusRec;

});
define("OutSystemsUIMobile.model$AutoplayRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AutoplayRec = (function (_super) {
__extends(AutoplayRec, _super);
function AutoplayRec(defaults) {
_super.apply(this, arguments);
}
AutoplayRec.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRec.fromStructure = function (str) {
return new AutoplayRec(new AutoplayRec.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRec.init();
return AutoplayRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.AutoplayRec = AutoplayRec;

});
define("OutSystemsUIMobile.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AutoplayRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.AutoplayRecord = AutoplayRecord;

});
define("OutSystemsUIMobile.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AutoplayRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = OutSystemsUIMobileModel.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.AutoplayRecordList = AutoplayRecordList;

});
define("OutSystemsUIMobile.model$SpeedRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var SpeedRec = (function (_super) {
__extends(SpeedRec, _super);
function SpeedRec(defaults) {
_super.apply(this, arguments);
}
SpeedRec.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
SpeedRec.fromStructure = function (str) {
return new SpeedRec(new SpeedRec.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRec.init();
return SpeedRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.SpeedRec = SpeedRec;

});
define("OutSystemsUIMobile.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MessageStatusRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.MessageStatusRecord = MessageStatusRecord;

});
define("OutSystemsUIMobile.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MessageStatusRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = OutSystemsUIMobileModel.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.MessageStatusRecordList = MessageStatusRecordList;

});
define("OutSystemsUIMobile.model$MenuActionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MenuActionRec = (function (_super) {
__extends(MenuActionRec, _super);
function MenuActionRec(defaults) {
_super.apply(this, arguments);
}
MenuActionRec.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRec.fromStructure = function (str) {
return new MenuActionRec(new MenuActionRec.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRec.init();
return MenuActionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.MenuActionRec = MenuActionRec;

});
define("OutSystemsUIMobile.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MenuActionRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.MenuActionRecord = MenuActionRecord;

});
define("OutSystemsUIMobile.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MenuActionRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = OutSystemsUIMobileModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.MenuActionRecordList = MenuActionRecordList;

});
define("OutSystemsUIMobile.model$StackedCardsPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRec = (function (_super) {
__extends(StackedCardsPositionRec, _super);
function StackedCardsPositionRec(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRec.fromStructure = function (str) {
return new StackedCardsPositionRec(new StackedCardsPositionRec.RecordClass({
labelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRec.init();
return StackedCardsPositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.StackedCardsPositionRec = StackedCardsPositionRec;

});
define("OutSystemsUIMobile.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$StackedCardsPositionRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUIMobileModel.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.StackedCardsPositionList = StackedCardsPositionList;

});
define("OutSystemsUIMobile.model$ColumnBreakRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ColumnBreakRec = (function (_super) {
__extends(ColumnBreakRec, _super);
function ColumnBreakRec(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRec.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRec.fromStructure = function (str) {
return new ColumnBreakRec(new ColumnBreakRec.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRec.init();
return ColumnBreakRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.ColumnBreakRec = ColumnBreakRec;

});
define("OutSystemsUIMobile.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$ColumnBreakRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUIMobileModel.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.ColumnBreakList = ColumnBreakList;

});
define("OutSystemsUIMobile.model$ColorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ColorRec = (function (_super) {
__extends(ColorRec, _super);
function ColorRec(defaults) {
_super.apply(this, arguments);
}
ColorRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ColorRec.fromStructure = function (str) {
return new ColorRec(new ColorRec.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRec.init();
return ColorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.ColorRec = ColorRec;

});
define("OutSystemsUIMobile.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$ColorRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIMobileModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.ColorList = ColorList;

});
define("OutSystemsUIMobile.model$Espace_VersionList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$Espace_VersionRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var Espace_VersionList = (function (_super) {
__extends(Espace_VersionList, _super);
function Espace_VersionList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionList.itemType = ServiceCenterModel.Espace_VersionRec;
return Espace_VersionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.Espace_VersionList = Espace_VersionList;

});
define("OutSystemsUIMobile.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MenuActionRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUIMobileModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.MenuActionList = MenuActionList;

});
define("OutSystemsUIMobile.model$MasterDetailItemRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MasterDetailItemRec = (function (_super) {
__extends(MasterDetailItemRec, _super);
function MasterDetailItemRec(defaults) {
_super.apply(this, arguments);
}
MasterDetailItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Title", "titleAttr", "Title", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("ImageUrl", "imageUrlAttr", "ImageUrl", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
MasterDetailItemRec.init();
return MasterDetailItemRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.MasterDetailItemRec = MasterDetailItemRec;

});
define("OutSystemsUIMobile.model$PositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var PositionRec = (function (_super) {
__extends(PositionRec, _super);
function PositionRec(defaults) {
_super.apply(this, arguments);
}
PositionRec.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PositionRec.fromStructure = function (str) {
return new PositionRec(new PositionRec.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRec.init();
return PositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.PositionRec = PositionRec;

});
define("OutSystemsUIMobile.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$PositionRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.PositionRecord = PositionRecord;

});
define("OutSystemsUIMobile.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$PositionRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = OutSystemsUIMobileModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.PositionRecordList = PositionRecordList;

});
define("OutSystemsUIMobile.model$MasterDetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MasterDetailItemRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.MasterDetailItemRecord = MasterDetailItemRecord;

});
define("OutSystemsUIMobile.model$MasterDetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MasterDetailItemRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MasterDetailItemRecordList = (function (_super) {
__extends(MasterDetailItemRecordList, _super);
function MasterDetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
MasterDetailItemRecordList.itemType = OutSystemsUIMobileModel.MasterDetailItemRecord;
return MasterDetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.MasterDetailItemRecordList = MasterDetailItemRecordList;

});
define("OutSystemsUIMobile.model$EspaceList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$EspaceRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var EspaceList = (function (_super) {
__extends(EspaceList, _super);
function EspaceList(defaults) {
_super.apply(this, arguments);
}
EspaceList.itemType = ServiceCenterModel.EspaceRec;
return EspaceList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.EspaceList = EspaceList;

});
define("OutSystemsUIMobile.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MessageStatusRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUIMobileModel.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.MessageStatusList = MessageStatusList;

});
define("OutSystemsUIMobile.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$StackedCardsPositionRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("OutSystemsUIMobile.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$StackedCardsPositionRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = OutSystemsUIMobileModel.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("InitialIntervalEnd", "initialIntervalEndAttr", "InitialIntervalEnd", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("InitialIntervalStart", "initialIntervalStartAttr", "InitialIntervalStart", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Step", "stepAttr", "Step", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord._isAnonymousRecord = true;
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.UniqueId = "845b5f28-a6e4-8277-561b-d4b51c5e965a";
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.init();
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord = BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;

});
define("OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList.itemType = OutSystemsUIMobileModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList = BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList;

});
define("OutSystemsUIMobile.model$EspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$EspaceRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var EspaceRecord = (function (_super) {
__extends(EspaceRecord, _super);
function EspaceRecord(defaults) {
_super.apply(this, arguments);
}
EspaceRecord.attributesToDeclare = function () {
return [
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.EspaceRec());
}, ServiceCenterModel.EspaceRec)
].concat(_super.attributesToDeclare.call(this));
};
EspaceRecord.fromStructure = function (str) {
return new EspaceRecord(new EspaceRecord.RecordClass({
espaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EspaceRecord._isAnonymousRecord = true;
EspaceRecord.UniqueId = "a702e171-772a-9b89-c17e-2544ab6d1d29";
EspaceRecord.init();
return EspaceRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.EspaceRecord = EspaceRecord;

});
define("OutSystemsUIMobile.model$EspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$EspaceRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var EspaceRecordList = (function (_super) {
__extends(EspaceRecordList, _super);
function EspaceRecordList(defaults) {
_super.apply(this, arguments);
}
EspaceRecordList.itemType = OutSystemsUIMobileModel.EspaceRecord;
return EspaceRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.EspaceRecordList = EspaceRecordList;

});
define("OutSystemsUIMobile.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$UserRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.UserRecord = UserRecord;

});
define("OutSystemsUIMobile.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$UserRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = OutSystemsUIMobileModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.UserRecordList = UserRecordList;

});
define("OutSystemsUIMobile.model$ActivationRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$ActivationRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ActivationRecord = (function (_super) {
__extends(ActivationRecord, _super);
function ActivationRecord(defaults) {
_super.apply(this, arguments);
}
ActivationRecord.attributesToDeclare = function () {
return [
this.attr("Activation", "activationAttr", "Activation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.ActivationRec());
}, ServiceCenterModel.ActivationRec)
].concat(_super.attributesToDeclare.call(this));
};
ActivationRecord.fromStructure = function (str) {
return new ActivationRecord(new ActivationRecord.RecordClass({
activationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActivationRecord._isAnonymousRecord = true;
ActivationRecord.UniqueId = "886d2dd6-1407-08fe-8df9-6213b169d599";
ActivationRecord.init();
return ActivationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.ActivationRecord = ActivationRecord;

});
define("OutSystemsUIMobile.model$ActivationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$ActivationRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ActivationRecordList = (function (_super) {
__extends(ActivationRecordList, _super);
function ActivationRecordList(defaults) {
_super.apply(this, arguments);
}
ActivationRecordList.itemType = OutSystemsUIMobileModel.ActivationRecord;
return ActivationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.ActivationRecordList = ActivationRecordList;

});
define("OutSystemsUIMobile.model$Espace_VersionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$Espace_VersionRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var Espace_VersionRecord = (function (_super) {
__extends(Espace_VersionRecord, _super);
function Espace_VersionRecord(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRecord.attributesToDeclare = function () {
return [
this.attr("Espace_Version", "espace_VersionAttr", "Espace_Version", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.Espace_VersionRec());
}, ServiceCenterModel.Espace_VersionRec)
].concat(_super.attributesToDeclare.call(this));
};
Espace_VersionRecord.fromStructure = function (str) {
return new Espace_VersionRecord(new Espace_VersionRecord.RecordClass({
espace_VersionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Espace_VersionRecord._isAnonymousRecord = true;
Espace_VersionRecord.UniqueId = "a30dbf03-0b81-3bab-70c6-b26430e8789b";
Espace_VersionRecord.init();
return Espace_VersionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.Espace_VersionRecord = Espace_VersionRecord;

});
define("OutSystemsUIMobile.model$Espace_VersionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$Espace_VersionRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var Espace_VersionRecordList = (function (_super) {
__extends(Espace_VersionRecordList, _super);
function Espace_VersionRecordList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRecordList.itemType = OutSystemsUIMobileModel.Espace_VersionRecord;
return Espace_VersionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.Espace_VersionRecordList = Espace_VersionRecordList;

});
define("OutSystemsUIMobile.model$AlertRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AlertRec = (function (_super) {
__extends(AlertRec, _super);
function AlertRec(defaults) {
_super.apply(this, arguments);
}
AlertRec.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AlertRec.fromStructure = function (str) {
return new AlertRec(new AlertRec.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRec.init();
return AlertRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.AlertRec = AlertRec;

});
define("OutSystemsUIMobile.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AlertRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.AlertRecord = AlertRecord;

});
define("OutSystemsUIMobile.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AnimationTypeRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUIMobileModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.AnimationTypeList = AnimationTypeList;

});
define("OutSystemsUIMobile.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$ColorRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.ColorRecord = ColorRecord;

});
define("OutSystemsUIMobile.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$ColorRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = OutSystemsUIMobileModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.ColorRecordList = ColorRecordList;

});
define("OutSystemsUIMobile.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AlertRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUIMobileModel.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.AlertList = AlertList;

});
define("OutSystemsUIMobile.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$ColumnBreakRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.ColumnBreakRecord = ColumnBreakRecord;

});
define("OutSystemsUIMobile.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$ColumnBreakRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = OutSystemsUIMobileModel.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("OutSystemsUIMobile.model$Espace_ReferenceList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$Espace_ReferenceRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var Espace_ReferenceList = (function (_super) {
__extends(Espace_ReferenceList, _super);
function Espace_ReferenceList(defaults) {
_super.apply(this, arguments);
}
Espace_ReferenceList.itemType = ServiceCenterModel.Espace_ReferenceRec;
return Espace_ReferenceList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.Espace_ReferenceList = Espace_ReferenceList;

});
define("OutSystemsUIMobile.model$ActivationList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$ActivationRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var ActivationList = (function (_super) {
__extends(ActivationList, _super);
function ActivationList(defaults) {
_super.apply(this, arguments);
}
ActivationList.itemType = ServiceCenterModel.ActivationRec;
return ActivationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.ActivationList = ActivationList;

});
define("OutSystemsUIMobile.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$StepsRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUIMobileModel.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.StepsList = StepsList;

});
define("OutSystemsUIMobile.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$SpeedRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
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
OutSystemsUIMobileModel.SpeedRecord = SpeedRecord;

});
define("OutSystemsUIMobile.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$PositionRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUIMobileModel.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.PositionList = PositionList;

});
define("OutSystemsUIMobile.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AutoplayRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUIMobileModel.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.AutoplayList = AutoplayList;

});
define("OutSystemsUIMobile.model$MasterDetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$MasterDetailItemRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var MasterDetailItemList = (function (_super) {
__extends(MasterDetailItemList, _super);
function MasterDetailItemList(defaults) {
_super.apply(this, arguments);
}
MasterDetailItemList.itemType = OutSystemsUIMobileModel.MasterDetailItemRec;
return MasterDetailItemList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.MasterDetailItemList = MasterDetailItemList;

});
define("OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("InitialValue", "initialValueAttr", "InitialValue", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Step", "stepAttr", "Step", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord._isAnonymousRecord = true;
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.UniqueId = "e57d7c30-9592-d9b0-9e76-04ad507fe534";
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.init();
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIMobileModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord = BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;

});
define("OutSystemsUIMobile.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$SpeedRec"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUIMobileModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.SpeedList = SpeedList;

});
define("OutSystemsUIMobile.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$StepsRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = OutSystemsUIMobileModel.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.StepsRecordList = StepsRecordList;

});
define("OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList.itemType = OutSystemsUIMobileModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList = BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList;

});
define("OutSystemsUIMobile.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "OutSystemsUIMobile.model", "ServiceCenter.model$UserRec", "OutSystemsUIMobile.referencesHealth", "OutSystemsUIMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.UserList = UserList;

});
define("OutSystemsUIMobile.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$AlertRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = OutSystemsUIMobileModel.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.AlertRecordList = AlertRecordList;

});
define("OutSystemsUIMobile.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.model$SpeedRecord"], function (exports, OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = OutSystemsUIMobileModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIMobileModel.SpeedRecordList = SpeedRecordList;

});
define("OutSystemsUIMobile.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var OutSystemsUIMobileModel = exports;
Object.defineProperty(OutSystemsUIMobileModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"];
}
});

OutSystemsUIMobileModel.staticEntities = {};
OutSystemsUIMobileModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

OutSystemsUIMobileModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

OutSystemsUIMobileModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["4a5b3b8d-44e7-4c03-9b89-453fa2feee20"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "white", {
get: function () {
return getColorRecord("05505a13-1fe9-4adf-9845-11368c74e98b");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("0772a1e6-baf6-4f8d-9b63-aef9b16bec31");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "black", {
get: function () {
return getColorRecord("26ba2ced-6bce-452f-b33a-7874dc80d8d1");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("3269784e-d6b0-46db-a0b5-5a9a64ee0e41");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "none", {
get: function () {
return getColorRecord("342260d0-74a4-44fd-9e9d-f0505a330244");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("833f5f9b-2325-4b92-9285-e14aa1a17c25");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("94682198-3a70-458e-9889-3eef131d1b00");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "primaryColor", {
get: function () {
return getColorRecord("9bd951e1-c94c-434b-85cb-a4cde3ffe638");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ad00278a-a271-46de-ac30-9f99c87f97a4");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.color, "grey", {
get: function () {
return getColorRecord("f986e894-0745-46fd-aa63-7680b5fd9234");
}
});

OutSystemsUIMobileModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

OutSystemsUIMobileModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

OutSystemsUIMobileModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

OutSystemsUIMobileModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

OutSystemsUIMobileModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

OutSystemsUIMobileModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.messageStatus, "hidden", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2"));
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.messageStatus, "read", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc"));
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.messageStatus, "sent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf"));
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.messageStatus, "received", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94"));
}
});

OutSystemsUIMobileModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

OutSystemsUIMobileModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OutSystemsUIMobileModel.module.staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(OutSystemsUIMobileModel.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(OutSystemsUIMobileModel.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

});
