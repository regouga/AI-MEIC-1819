define("ChartsMobile.model$legendItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var legendItemRec = (function (_super) {
__extends(legendItemRec, _super);
function legendItemRec(defaults) {
_super.apply(this, arguments);
}
legendItemRec.attributesToDeclare = function () {
return [
this.attr("align", "alignAttr", "align", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("verticalAlign", "verticalAlignAttr", "verticalAlign", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("layout", "layoutAttr", "layout", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("enabled", "enabledAttr", "enabled", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("floating", "floatingAttr", "floating", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("itemMarginBottom", "itemMarginBottomAttr", "itemMarginBottom", true, false, OS.Types.Integer, function () {
return 10;
})
].concat(_super.attributesToDeclare.call(this));
};
legendItemRec.init();
return legendItemRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.legendItemRec = legendItemRec;

});
define("ChartsMobile.model$legendItemList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$legendItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var legendItemList = (function (_super) {
__extends(legendItemList, _super);
function legendItemList(defaults) {
_super.apply(this, arguments);
}
legendItemList.itemType = ChartsMobileModel.legendItemRec;
return legendItemList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.legendItemList = legendItemList;

});
define("ChartsMobile.model$DataItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataItemRec = (function (_super) {
__extends(DataItemRec, _super);
function DataItemRec(defaults) {
_super.apply(this, arguments);
}
DataItemRec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("y", "yAttr", "y", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("sliced", "slicedAttr", "sliced", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("selected", "selectedAttr", "selected", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("custom", "customAttr", "custom", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("color", "colorAttr", "color", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
DataItemRec.init();
return DataItemRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.DataItemRec = DataItemRec;

});
define("ChartsMobile.model$labelsRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var labelsRec = (function (_super) {
__extends(labelsRec, _super);
function labelsRec(defaults) {
_super.apply(this, arguments);
}
labelsRec.attributesToDeclare = function () {
return [
this.attr("rotation", "rotationAttr", "rotation", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
labelsRec.fromStructure = function (str) {
return new labelsRec(new labelsRec.RecordClass({
rotationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
labelsRec.init();
return labelsRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.labelsRec = labelsRec;

});
define("ChartsMobile.model$tooltipRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var tooltipRec = (function (_super) {
__extends(tooltipRec, _super);
function tooltipRec(defaults) {
_super.apply(this, arguments);
}
tooltipRec.attributesToDeclare = function () {
return [
this.attr("pointFormat", "pointFormatAttr", "pointFormat", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
tooltipRec.fromStructure = function (str) {
return new tooltipRec(new tooltipRec.RecordClass({
pointFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
tooltipRec.init();
return tooltipRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.tooltipRec = tooltipRec;

});
define("ChartsMobile.model$tooltipRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$tooltipRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var tooltipRecord = (function (_super) {
__extends(tooltipRecord, _super);
function tooltipRecord(defaults) {
_super.apply(this, arguments);
}
tooltipRecord.attributesToDeclare = function () {
return [
this.attr("tooltip", "tooltipAttr", "tooltip", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.tooltipRec());
}, ChartsMobileModel.tooltipRec)
].concat(_super.attributesToDeclare.call(this));
};
tooltipRecord.fromStructure = function (str) {
return new tooltipRecord(new tooltipRecord.RecordClass({
tooltipAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
tooltipRecord._isAnonymousRecord = true;
tooltipRecord.UniqueId = "071b16af-4c8a-c3a9-f6a0-9e8df7617baa";
tooltipRecord.init();
return tooltipRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.tooltipRecord = tooltipRecord;

});
define("ChartsMobile.model$titleRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var titleRec = (function (_super) {
__extends(titleRec, _super);
function titleRec(defaults) {
_super.apply(this, arguments);
}
titleRec.attributesToDeclare = function () {
return [
this.attr("text", "textAttr", "text", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
titleRec.fromStructure = function (str) {
return new titleRec(new titleRec.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
titleRec.init();
return titleRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.titleRec = titleRec;

});
define("ChartsMobile.model$stackLabelsRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var stackLabelsRec = (function (_super) {
__extends(stackLabelsRec, _super);
function stackLabelsRec(defaults) {
_super.apply(this, arguments);
}
stackLabelsRec.attributesToDeclare = function () {
return [
this.attr("enabled", "enabledAttr", "enabled", true, false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
stackLabelsRec.fromStructure = function (str) {
return new stackLabelsRec(new stackLabelsRec.RecordClass({
enabledAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
stackLabelsRec.init();
return stackLabelsRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.stackLabelsRec = stackLabelsRec;

});
define("ChartsMobile.model$yAxisRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$titleRec", "ChartsMobile.model$stackLabelsRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var yAxisRec = (function (_super) {
__extends(yAxisRec, _super);
function yAxisRec(defaults) {
_super.apply(this, arguments);
}
yAxisRec.attributesToDeclare = function () {
return [
this.attr("title", "titleAttr", "title", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.titleRec());
}, ChartsMobileModel.titleRec), 
this.attr("reversedStacks", "reversedStacksAttr", "reversedStacks", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("stackLabels", "stackLabelsAttr", "stackLabels", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.stackLabelsRec());
}, ChartsMobileModel.stackLabelsRec), 
this.attr("tickInterval", "tickIntervalAttr", "tickInterval", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("max", "maxAttr", "max", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("min", "minAttr", "min", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
yAxisRec.init();
return yAxisRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.yAxisRec = yAxisRec;

});
define("ChartsMobile.model$YAxesRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var YAxesRec = (function (_super) {
__extends(YAxesRec, _super);
function YAxesRec(defaults) {
_super.apply(this, arguments);
}
YAxesRec.attributesToDeclare = function () {
return [
this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Title", "titleAttr", "Title", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
YAxesRec.init();
return YAxesRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.YAxesRec = YAxesRec;

});
define("ChartsMobile.model$YAxesRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$YAxesRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var YAxesRecord = (function (_super) {
__extends(YAxesRecord, _super);
function YAxesRecord(defaults) {
_super.apply(this, arguments);
}
YAxesRecord.attributesToDeclare = function () {
return [
this.attr("YAxes", "yAxesAttr", "YAxes", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.YAxesRec());
}, ChartsMobileModel.YAxesRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxesRecord.fromStructure = function (str) {
return new YAxesRecord(new YAxesRecord.RecordClass({
yAxesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxesRecord._isAnonymousRecord = true;
YAxesRecord.UniqueId = "09730fbc-2998-92e9-f9e4-270a5cb22999";
YAxesRecord.init();
return YAxesRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.YAxesRecord = YAxesRecord;

});
define("ChartsMobile.model$StackingTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var StackingTypeRec = (function (_super) {
__extends(StackingTypeRec, _super);
function StackingTypeRec(defaults) {
_super.apply(this, arguments);
}
StackingTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
StackingTypeRec.init();
return StackingTypeRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.StackingTypeRec = StackingTypeRec;

});
define("ChartsMobile.model$eventsRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var eventsRec = (function (_super) {
__extends(eventsRec, _super);
function eventsRec(defaults) {
_super.apply(this, arguments);
}
eventsRec.attributesToDeclare = function () {
return [
this.attr("click", "clickAttr", "click", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eventsRec.fromStructure = function (str) {
return new eventsRec(new eventsRec.RecordClass({
clickAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eventsRec.init();
return eventsRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.eventsRec = eventsRec;

});
define("ChartsMobile.model$PointItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$eventsRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var PointItemRec = (function (_super) {
__extends(PointItemRec, _super);
function PointItemRec(defaults) {
_super.apply(this, arguments);
}
PointItemRec.attributesToDeclare = function () {
return [
this.attr("events", "eventsAttr", "events", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.eventsRec());
}, ChartsMobileModel.eventsRec)
].concat(_super.attributesToDeclare.call(this));
};
PointItemRec.fromStructure = function (str) {
return new PointItemRec(new PointItemRec.RecordClass({
eventsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PointItemRec.init();
return PointItemRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.PointItemRec = PointItemRec;

});
define("ChartsMobile.model$PointItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$PointItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var PointItemRecord = (function (_super) {
__extends(PointItemRecord, _super);
function PointItemRecord(defaults) {
_super.apply(this, arguments);
}
PointItemRecord.attributesToDeclare = function () {
return [
this.attr("PointItem", "pointItemAttr", "PointItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PointItemRec());
}, ChartsMobileModel.PointItemRec)
].concat(_super.attributesToDeclare.call(this));
};
PointItemRecord.fromStructure = function (str) {
return new PointItemRecord(new PointItemRecord.RecordClass({
pointItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PointItemRecord._isAnonymousRecord = true;
PointItemRecord.UniqueId = "d99b9c3e-4df1-c1c5-4c6a-61acf9f3daee";
PointItemRecord.init();
return PointItemRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.PointItemRecord = PointItemRecord;

});
define("ChartsMobile.model$PointItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$PointItemRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var PointItemRecordList = (function (_super) {
__extends(PointItemRecordList, _super);
function PointItemRecordList(defaults) {
_super.apply(this, arguments);
}
PointItemRecordList.itemType = ChartsMobileModel.PointItemRecord;
return PointItemRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.PointItemRecordList = PointItemRecordList;

});
define("ChartsMobile.model$DataLabelRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataLabelRec = (function (_super) {
__extends(DataLabelRec, _super);
function DataLabelRec(defaults) {
_super.apply(this, arguments);
}
DataLabelRec.attributesToDeclare = function () {
return [
this.attr("enabled", "enabledAttr", "enabled", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("format", "formatAttr", "format", true, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
DataLabelRec.init();
return DataLabelRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.DataLabelRec = DataLabelRec;

});
define("ChartsMobile.model$pieRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataLabelRec", "ChartsMobile.model$PointItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var pieRec = (function (_super) {
__extends(pieRec, _super);
function pieRec(defaults) {
_super.apply(this, arguments);
}
pieRec.attributesToDeclare = function () {
return [
this.attr("allowPointSelect", "allowPointSelectAttr", "allowPointSelect", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("cursor", "cursorAttr", "cursor", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("dataLabels", "dataLabelsAttr", "dataLabels", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataLabelRec());
}, ChartsMobileModel.DataLabelRec), 
this.attr("point", "pointAttr", "point", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PointItemRec());
}, ChartsMobileModel.PointItemRec), 
this.attr("animation", "animationAttr", "animation", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("showInLegend", "showInLegendAttr", "showInLegend", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("borderColor", "borderColorAttr", "borderColor", true, false, OS.Types.Text, function () {
return "rgba(255,255,255,0)";
})
].concat(_super.attributesToDeclare.call(this));
};
pieRec.init();
return pieRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.pieRec = pieRec;

});
define("ChartsMobile.model$PlotOptionSerieItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$PointItemRec", "ChartsMobile.model$DataLabelRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var PlotOptionSerieItemRec = (function (_super) {
__extends(PlotOptionSerieItemRec, _super);
function PlotOptionSerieItemRec(defaults) {
_super.apply(this, arguments);
}
PlotOptionSerieItemRec.attributesToDeclare = function () {
return [
this.attr("cursor", "cursorAttr", "cursor", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("point", "pointAttr", "point", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PointItemRec());
}, ChartsMobileModel.PointItemRec), 
this.attr("dataLabels", "dataLabelsAttr", "dataLabels", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataLabelRec());
}, ChartsMobileModel.DataLabelRec), 
this.attr("stacking", "stackingAttr", "stacking", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("innerSize", "innerSizeAttr", "innerSize", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("borderRadius", "borderRadiusAttr", "borderRadius", true, false, OS.Types.Integer, function () {
return 1;
}), 
this.attr("borderWidth", "borderWidthAttr", "borderWidth", true, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
PlotOptionSerieItemRec.init();
return PlotOptionSerieItemRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.PlotOptionSerieItemRec = PlotOptionSerieItemRec;

});
define("ChartsMobile.model$markerRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var markerRec = (function (_super) {
__extends(markerRec, _super);
function markerRec(defaults) {
_super.apply(this, arguments);
}
markerRec.attributesToDeclare = function () {
return [
this.attr("enabled", "enabledAttr", "enabled", true, false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
markerRec.fromStructure = function (str) {
return new markerRec(new markerRec.RecordClass({
enabledAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
markerRec.init();
return markerRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.markerRec = markerRec;

});
define("ChartsMobile.model$lineRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataLabelRec", "ChartsMobile.model$PointItemRec", "ChartsMobile.model$markerRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var lineRec = (function (_super) {
__extends(lineRec, _super);
function lineRec(defaults) {
_super.apply(this, arguments);
}
lineRec.attributesToDeclare = function () {
return [
this.attr("allowPointSelect", "allowPointSelectAttr", "allowPointSelect", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("cursor", "cursorAttr", "cursor", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("dataLabels", "dataLabelsAttr", "dataLabels", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataLabelRec());
}, ChartsMobileModel.DataLabelRec), 
this.attr("point", "pointAttr", "point", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PointItemRec());
}, ChartsMobileModel.PointItemRec), 
this.attr("marker", "markerAttr", "marker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.markerRec());
}, ChartsMobileModel.markerRec), 
this.attr("animation", "animationAttr", "animation", true, false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
lineRec.init();
return lineRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.lineRec = lineRec;

});
define("ChartsMobile.model$columnRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataLabelRec", "ChartsMobile.model$PointItemRec", "ChartsMobile.model$markerRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var columnRec = (function (_super) {
__extends(columnRec, _super);
function columnRec(defaults) {
_super.apply(this, arguments);
}
columnRec.attributesToDeclare = function () {
return [
this.attr("allowPointSelect", "allowPointSelectAttr", "allowPointSelect", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("cursor", "cursorAttr", "cursor", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("dataLabels", "dataLabelsAttr", "dataLabels", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataLabelRec());
}, ChartsMobileModel.DataLabelRec), 
this.attr("point", "pointAttr", "point", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PointItemRec());
}, ChartsMobileModel.PointItemRec), 
this.attr("marker", "markerAttr", "marker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.markerRec());
}, ChartsMobileModel.markerRec), 
this.attr("animation", "animationAttr", "animation", true, false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
columnRec.init();
return columnRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.columnRec = columnRec;

});
define("ChartsMobile.model$areaRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataLabelRec", "ChartsMobile.model$PointItemRec", "ChartsMobile.model$markerRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var areaRec = (function (_super) {
__extends(areaRec, _super);
function areaRec(defaults) {
_super.apply(this, arguments);
}
areaRec.attributesToDeclare = function () {
return [
this.attr("allowPointSelect", "allowPointSelectAttr", "allowPointSelect", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("cursor", "cursorAttr", "cursor", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("dataLabels", "dataLabelsAttr", "dataLabels", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataLabelRec());
}, ChartsMobileModel.DataLabelRec), 
this.attr("point", "pointAttr", "point", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PointItemRec());
}, ChartsMobileModel.PointItemRec), 
this.attr("marker", "markerAttr", "marker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.markerRec());
}, ChartsMobileModel.markerRec)
].concat(_super.attributesToDeclare.call(this));
};
areaRec.init();
return areaRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.areaRec = areaRec;

});
define("ChartsMobile.model$barRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataLabelRec", "ChartsMobile.model$PointItemRec", "ChartsMobile.model$markerRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var barRec = (function (_super) {
__extends(barRec, _super);
function barRec(defaults) {
_super.apply(this, arguments);
}
barRec.attributesToDeclare = function () {
return [
this.attr("allowPointSelect", "allowPointSelectAttr", "allowPointSelect", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("cursor", "cursorAttr", "cursor", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("dataLabels", "dataLabelsAttr", "dataLabels", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataLabelRec());
}, ChartsMobileModel.DataLabelRec), 
this.attr("point", "pointAttr", "point", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PointItemRec());
}, ChartsMobileModel.PointItemRec), 
this.attr("marker", "markerAttr", "marker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.markerRec());
}, ChartsMobileModel.markerRec)
].concat(_super.attributesToDeclare.call(this));
};
barRec.init();
return barRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.barRec = barRec;

});
define("ChartsMobile.model$plotOptionRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$pieRec", "ChartsMobile.model$PlotOptionSerieItemRec", "ChartsMobile.model$lineRec", "ChartsMobile.model$columnRec", "ChartsMobile.model$areaRec", "ChartsMobile.model$barRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var plotOptionRec = (function (_super) {
__extends(plotOptionRec, _super);
function plotOptionRec(defaults) {
_super.apply(this, arguments);
}
plotOptionRec.attributesToDeclare = function () {
return [
this.attr("pie", "pieAttr", "pie", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.pieRec());
}, ChartsMobileModel.pieRec), 
this.attr("series", "seriesAttr", "series", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PlotOptionSerieItemRec());
}, ChartsMobileModel.PlotOptionSerieItemRec), 
this.attr("line", "lineAttr", "line", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.lineRec());
}, ChartsMobileModel.lineRec), 
this.attr("column", "columnAttr", "column", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.columnRec());
}, ChartsMobileModel.columnRec), 
this.attr("area", "areaAttr", "area", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.areaRec());
}, ChartsMobileModel.areaRec), 
this.attr("bar", "barAttr", "bar", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.barRec());
}, ChartsMobileModel.barRec)
].concat(_super.attributesToDeclare.call(this));
};
plotOptionRec.init();
return plotOptionRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.plotOptionRec = plotOptionRec;

});
define("ChartsMobile.model$plotOptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$plotOptionRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var plotOptionRecord = (function (_super) {
__extends(plotOptionRecord, _super);
function plotOptionRecord(defaults) {
_super.apply(this, arguments);
}
plotOptionRecord.attributesToDeclare = function () {
return [
this.attr("plotOption", "plotOptionAttr", "plotOption", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.plotOptionRec());
}, ChartsMobileModel.plotOptionRec)
].concat(_super.attributesToDeclare.call(this));
};
plotOptionRecord.fromStructure = function (str) {
return new plotOptionRecord(new plotOptionRecord.RecordClass({
plotOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
plotOptionRecord._isAnonymousRecord = true;
plotOptionRecord.UniqueId = "98bc8991-c03c-3dcd-adc4-fc428bc5ef67";
plotOptionRecord.init();
return plotOptionRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.plotOptionRecord = plotOptionRecord;

});
define("ChartsMobile.model$plotOptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$plotOptionRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var plotOptionRecordList = (function (_super) {
__extends(plotOptionRecordList, _super);
function plotOptionRecordList(defaults) {
_super.apply(this, arguments);
}
plotOptionRecordList.itemType = ChartsMobileModel.plotOptionRecord;
return plotOptionRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.plotOptionRecordList = plotOptionRecordList;

});
define("ChartsMobile.model$PlotOptionSerieItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$PlotOptionSerieItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var PlotOptionSerieItemRecord = (function (_super) {
__extends(PlotOptionSerieItemRecord, _super);
function PlotOptionSerieItemRecord(defaults) {
_super.apply(this, arguments);
}
PlotOptionSerieItemRecord.attributesToDeclare = function () {
return [
this.attr("PlotOptionSerieItem", "plotOptionSerieItemAttr", "PlotOptionSerieItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PlotOptionSerieItemRec());
}, ChartsMobileModel.PlotOptionSerieItemRec)
].concat(_super.attributesToDeclare.call(this));
};
PlotOptionSerieItemRecord.fromStructure = function (str) {
return new PlotOptionSerieItemRecord(new PlotOptionSerieItemRecord.RecordClass({
plotOptionSerieItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PlotOptionSerieItemRecord._isAnonymousRecord = true;
PlotOptionSerieItemRecord.UniqueId = "21fe1dc5-36b3-f293-718b-adca0d7b68b7";
PlotOptionSerieItemRecord.init();
return PlotOptionSerieItemRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.PlotOptionSerieItemRecord = PlotOptionSerieItemRecord;

});
define("ChartsMobile.model$PlotOptionSerieItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$PlotOptionSerieItemRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var PlotOptionSerieItemRecordList = (function (_super) {
__extends(PlotOptionSerieItemRecordList, _super);
function PlotOptionSerieItemRecordList(defaults) {
_super.apply(this, arguments);
}
PlotOptionSerieItemRecordList.itemType = ChartsMobileModel.PlotOptionSerieItemRecord;
return PlotOptionSerieItemRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.PlotOptionSerieItemRecordList = PlotOptionSerieItemRecordList;

});
define("ChartsMobile.model$SSDataSeriesFormatItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSDataSeriesFormatItemRec = (function (_super) {
__extends(SSDataSeriesFormatItemRec, _super);
function SSDataSeriesFormatItemRec(defaults) {
_super.apply(this, arguments);
}
SSDataSeriesFormatItemRec.attributesToDeclare = function () {
return [
this.attr("DataSeriesName", "dataSeriesNameAttr", "DataSeriesName", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("DataSeriesJSON", "dataSeriesJSONAttr", "DataSeriesJSON", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
SSDataSeriesFormatItemRec.init();
return SSDataSeriesFormatItemRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SSDataSeriesFormatItemRec = SSDataSeriesFormatItemRec;

});
define("ChartsMobile.model$SSDataSeriesFormatItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSDataSeriesFormatItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSDataSeriesFormatItemRecord = (function (_super) {
__extends(SSDataSeriesFormatItemRecord, _super);
function SSDataSeriesFormatItemRecord(defaults) {
_super.apply(this, arguments);
}
SSDataSeriesFormatItemRecord.attributesToDeclare = function () {
return [
this.attr("SSDataSeriesFormatItem", "sSDataSeriesFormatItemAttr", "SSDataSeriesFormatItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SSDataSeriesFormatItemRec());
}, ChartsMobileModel.SSDataSeriesFormatItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SSDataSeriesFormatItemRecord.fromStructure = function (str) {
return new SSDataSeriesFormatItemRecord(new SSDataSeriesFormatItemRecord.RecordClass({
sSDataSeriesFormatItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SSDataSeriesFormatItemRecord._isAnonymousRecord = true;
SSDataSeriesFormatItemRecord.UniqueId = "14a6ded5-bd51-5063-f85c-e037259b4016";
SSDataSeriesFormatItemRecord.init();
return SSDataSeriesFormatItemRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SSDataSeriesFormatItemRecord = SSDataSeriesFormatItemRecord;

});
define("ChartsMobile.model$SSDataSeriesFormatItemList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSDataSeriesFormatItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSDataSeriesFormatItemList = (function (_super) {
__extends(SSDataSeriesFormatItemList, _super);
function SSDataSeriesFormatItemList(defaults) {
_super.apply(this, arguments);
}
SSDataSeriesFormatItemList.itemType = ChartsMobileModel.SSDataSeriesFormatItemRec;
return SSDataSeriesFormatItemList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SSDataSeriesFormatItemList = SSDataSeriesFormatItemList;

});
define("ChartsMobile.model$YAxesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$YAxesRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var YAxesRecordList = (function (_super) {
__extends(YAxesRecordList, _super);
function YAxesRecordList(defaults) {
_super.apply(this, arguments);
}
YAxesRecordList.itemType = ChartsMobileModel.YAxesRecord;
return YAxesRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.YAxesRecordList = YAxesRecordList;

});
define("ChartsMobile.model$eventsList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$eventsRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var eventsList = (function (_super) {
__extends(eventsList, _super);
function eventsList(defaults) {
_super.apply(this, arguments);
}
eventsList.itemType = ChartsMobileModel.eventsRec;
return eventsList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.eventsList = eventsList;

});
define("ChartsMobile.model$", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.Types.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.TextList = TextList;

});
define("ChartsMobile.model$xAxisRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$labelsRec", "ChartsMobile.model$titleRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var xAxisRec = (function (_super) {
__extends(xAxisRec, _super);
function xAxisRec(defaults) {
_super.apply(this, arguments);
}
xAxisRec.attributesToDeclare = function () {
return [
this.attr("categories", "categoriesAttr", "categories", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, OS.DataTypes.TextList), 
this.attr("type", "typeAttr", "type", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("labels", "labelsAttr", "labels", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.labelsRec());
}, ChartsMobileModel.labelsRec), 
this.attr("max", "maxAttr", "max", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("min", "minAttr", "min", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("title", "titleAttr", "title", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.titleRec());
}, ChartsMobileModel.titleRec)
].concat(_super.attributesToDeclare.call(this));
};
xAxisRec.init();
return xAxisRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.xAxisRec = xAxisRec;

});
define("ChartsMobile.model$xAxisRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$xAxisRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var xAxisRecord = (function (_super) {
__extends(xAxisRecord, _super);
function xAxisRecord(defaults) {
_super.apply(this, arguments);
}
xAxisRecord.attributesToDeclare = function () {
return [
this.attr("xAxis", "xAxisAttr", "xAxis", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.xAxisRec());
}, ChartsMobileModel.xAxisRec)
].concat(_super.attributesToDeclare.call(this));
};
xAxisRecord.fromStructure = function (str) {
return new xAxisRecord(new xAxisRecord.RecordClass({
xAxisAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
xAxisRecord._isAnonymousRecord = true;
xAxisRecord.UniqueId = "d723d7d7-e180-5717-ecb5-d63d07c1dcf4";
xAxisRecord.init();
return xAxisRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.xAxisRecord = xAxisRecord;

});
define("ChartsMobile.model$xAxisRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$xAxisRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var xAxisRecordList = (function (_super) {
__extends(xAxisRecordList, _super);
function xAxisRecordList(defaults) {
_super.apply(this, arguments);
}
xAxisRecordList.itemType = ChartsMobileModel.xAxisRecord;
return xAxisRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.xAxisRecordList = xAxisRecordList;

});
define("ChartsMobile.model$SSChartFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSChartFormatRec = (function (_super) {
__extends(SSChartFormatRec, _super);
function SSChartFormatRec(defaults) {
_super.apply(this, arguments);
}
SSChartFormatRec.attributesToDeclare = function () {
return [
this.attr("ShowDataPointValues", "showDataPointValuesAttr", "ShowDataPointValues", false, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("UseAnimation", "useAnimationAttr", "UseAnimation", false, false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
SSChartFormatRec.init();
return SSChartFormatRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SSChartFormatRec = SSChartFormatRec;

});
define("ChartsMobile.model$LegendPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var LegendPositionRec = (function (_super) {
__extends(LegendPositionRec, _super);
function LegendPositionRec(defaults) {
_super.apply(this, arguments);
}
LegendPositionRec.attributesToDeclare = function () {
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
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
LegendPositionRec.init();
return LegendPositionRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.LegendPositionRec = LegendPositionRec;

});
define("ChartsMobile.model$LegendPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$LegendPositionRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.LegendPositionRecord = LegendPositionRecord;

});
define("ChartsMobile.model$LegendPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$LegendPositionRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var LegendPositionRecordList = (function (_super) {
__extends(LegendPositionRecordList, _super);
function LegendPositionRecordList(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecordList.itemType = ChartsMobileModel.LegendPositionRecord;
return LegendPositionRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.LegendPositionRecordList = LegendPositionRecordList;

});
define("ChartsMobile.model$lineList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$lineRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var lineList = (function (_super) {
__extends(lineList, _super);
function lineList(defaults) {
_super.apply(this, arguments);
}
lineList.itemType = ChartsMobileModel.lineRec;
return lineList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.lineList = lineList;

});
define("ChartsMobile.model$DataItemList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataItemList = (function (_super) {
__extends(DataItemList, _super);
function DataItemList(defaults) {
_super.apply(this, arguments);
}
DataItemList.itemType = ChartsMobileModel.DataItemRec;
return DataItemList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.DataItemList = DataItemList;

});
define("ChartsMobile.model$SeriesItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataItemList", "ChartsMobile.model$PointItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SeriesItemRec = (function (_super) {
__extends(SeriesItemRec, _super);
function SeriesItemRec(defaults) {
_super.apply(this, arguments);
}
SeriesItemRec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("colorByPoint", "colorByPointAttr", "colorByPoint", false, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("data", "dataAttr", "data", true, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataItemList());
}, ChartsMobileModel.DataItemList), 
this.attr("point", "pointAttr", "point", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.PointItemRec());
}, ChartsMobileModel.PointItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesItemRec.init();
return SeriesItemRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SeriesItemRec = SeriesItemRec;

});
define("ChartsMobile.model$SeriesItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SeriesItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SeriesItemRecord = (function (_super) {
__extends(SeriesItemRecord, _super);
function SeriesItemRecord(defaults) {
_super.apply(this, arguments);
}
SeriesItemRecord.attributesToDeclare = function () {
return [
this.attr("SeriesItem", "seriesItemAttr", "SeriesItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SeriesItemRec());
}, ChartsMobileModel.SeriesItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesItemRecord.fromStructure = function (str) {
return new SeriesItemRecord(new SeriesItemRecord.RecordClass({
seriesItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesItemRecord._isAnonymousRecord = true;
SeriesItemRecord.UniqueId = "8d14db52-60a4-f7a4-be0c-c0cd5293bb68";
SeriesItemRecord.init();
return SeriesItemRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SeriesItemRecord = SeriesItemRecord;

});
define("ChartsMobile.model$SeriesItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SeriesItemRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SeriesItemRecordList = (function (_super) {
__extends(SeriesItemRecordList, _super);
function SeriesItemRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesItemRecordList.itemType = ChartsMobileModel.SeriesItemRecord;
return SeriesItemRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SeriesItemRecordList = SeriesItemRecordList;

});
define("ChartsMobile.model$titleRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$titleRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var titleRecord = (function (_super) {
__extends(titleRecord, _super);
function titleRecord(defaults) {
_super.apply(this, arguments);
}
titleRecord.attributesToDeclare = function () {
return [
this.attr("title", "titleAttr", "title", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.titleRec());
}, ChartsMobileModel.titleRec)
].concat(_super.attributesToDeclare.call(this));
};
titleRecord.fromStructure = function (str) {
return new titleRecord(new titleRecord.RecordClass({
titleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
titleRecord._isAnonymousRecord = true;
titleRecord.UniqueId = "28c609f6-0bec-ee3e-805d-b9e332bec5b4";
titleRecord.init();
return titleRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.titleRecord = titleRecord;

});
define("ChartsMobile.model$ChartFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var ChartFormatRec = (function (_super) {
__extends(ChartFormatRec, _super);
function ChartFormatRec(defaults) {
_super.apply(this, arguments);
}
ChartFormatRec.attributesToDeclare = function () {
return [
this.attr("ShowDataPointValues", "showDataPointValuesAttr", "ShowDataPointValues", false, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("UseAnimation", "useAnimationAttr", "UseAnimation", true, false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
ChartFormatRec.init();
return ChartFormatRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.ChartFormatRec = ChartFormatRec;

});
define("ChartsMobile.model$ChartFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$ChartFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.ChartFormatRecord = ChartFormatRecord;

});
define("ChartsMobile.model$SSAdvanceFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSAdvanceFormatRec = (function (_super) {
__extends(SSAdvanceFormatRec, _super);
function SSAdvanceFormatRec(defaults) {
_super.apply(this, arguments);
}
SSAdvanceFormatRec.attributesToDeclare = function () {
return [
this.attr("XAxisJSON", "xAxisJSONAttr", "XAxisJSON", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("YAxisJSON", "yAxisJSONAttr", "YAxisJSON", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("HighchartsJSON", "highchartsJSONAttr", "HighchartsJSON", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
SSAdvanceFormatRec.init();
return SSAdvanceFormatRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SSAdvanceFormatRec = SSAdvanceFormatRec;

});
define("ChartsMobile.model$SSAdvanceFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSAdvanceFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSAdvanceFormatRecord = (function (_super) {
__extends(SSAdvanceFormatRecord, _super);
function SSAdvanceFormatRecord(defaults) {
_super.apply(this, arguments);
}
SSAdvanceFormatRecord.attributesToDeclare = function () {
return [
this.attr("SSAdvanceFormat", "sSAdvanceFormatAttr", "SSAdvanceFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SSAdvanceFormatRec());
}, ChartsMobileModel.SSAdvanceFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
SSAdvanceFormatRecord.fromStructure = function (str) {
return new SSAdvanceFormatRecord(new SSAdvanceFormatRecord.RecordClass({
sSAdvanceFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SSAdvanceFormatRecord._isAnonymousRecord = true;
SSAdvanceFormatRecord.UniqueId = "89012dad-6783-07f9-7672-66cf4b146adc";
SSAdvanceFormatRecord.init();
return SSAdvanceFormatRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SSAdvanceFormatRecord = SSAdvanceFormatRecord;

});
define("ChartsMobile.model$SSAdvanceFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSAdvanceFormatRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSAdvanceFormatRecordList = (function (_super) {
__extends(SSAdvanceFormatRecordList, _super);
function SSAdvanceFormatRecordList(defaults) {
_super.apply(this, arguments);
}
SSAdvanceFormatRecordList.itemType = ChartsMobileModel.SSAdvanceFormatRecord;
return SSAdvanceFormatRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SSAdvanceFormatRecordList = SSAdvanceFormatRecordList;

});
define("ChartsMobile.model$XAxisValuesTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeRec = (function (_super) {
__extends(XAxisValuesTypeRec, _super);
function XAxisValuesTypeRec(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
XAxisValuesTypeRec.init();
return XAxisValuesTypeRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.XAxisValuesTypeRec = XAxisValuesTypeRec;

});
define("ChartsMobile.model$XAxisValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxisValuesTypeRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.XAxisValuesTypeRecord = XAxisValuesTypeRecord;

});
define("ChartsMobile.model$XAxisValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxisValuesTypeRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeRecordList = (function (_super) {
__extends(XAxisValuesTypeRecordList, _super);
function XAxisValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeRecordList.itemType = ChartsMobileModel.XAxisValuesTypeRecord;
return XAxisValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.XAxisValuesTypeRecordList = XAxisValuesTypeRecordList;

});
define("ChartsMobile.model$ChartRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var ChartRec = (function (_super) {
__extends(ChartRec, _super);
function ChartRec(defaults) {
_super.apply(this, arguments);
}
ChartRec.attributesToDeclare = function () {
return [
this.attr("plotShadow", "plotShadowAttr", "plotShadow", true, false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("type", "typeAttr", "type", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("renderTo", "renderToAttr", "renderTo", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("height", "heightAttr", "height", true, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("animation", "animationAttr", "animation", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("backgroundColor", "backgroundColorAttr", "backgroundColor", true, false, OS.Types.Text, function () {
return "rgba(255, 255, 255, 0)";
})
].concat(_super.attributesToDeclare.call(this));
};
ChartRec.init();
return ChartRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.ChartRec = ChartRec;

});
define("ChartsMobile.model$SeriesItemList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SeriesItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SeriesItemList = (function (_super) {
__extends(SeriesItemList, _super);
function SeriesItemList(defaults) {
_super.apply(this, arguments);
}
SeriesItemList.itemType = ChartsMobileModel.SeriesItemRec;
return SeriesItemList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SeriesItemList = SeriesItemList;

});
define("ChartsMobile.model$HighChartRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$ChartRec", "ChartsMobile.model$titleRec", "ChartsMobile.model$tooltipRec", "ChartsMobile.model$plotOptionRec", "ChartsMobile.model$SeriesItemList", "ChartsMobile.model$legendItemRec", "ChartsMobile.model$xAxisRec", "ChartsMobile.model$yAxisRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var HighChartRec = (function (_super) {
__extends(HighChartRec, _super);
function HighChartRec(defaults) {
_super.apply(this, arguments);
}
HighChartRec.attributesToDeclare = function () {
return [
this.attr("chart", "chartAttr", "chart", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.ChartRec());
}, ChartsMobileModel.ChartRec), 
this.attr("title", "titleAttr", "title", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.titleRec());
}, ChartsMobileModel.titleRec), 
this.attr("tooltip", "tooltipAttr", "tooltip", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.tooltipRec());
}, ChartsMobileModel.tooltipRec), 
this.attr("plotOptions", "plotOptionsAttr", "plotOptions", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.plotOptionRec());
}, ChartsMobileModel.plotOptionRec), 
this.attr("series", "seriesAttr", "series", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SeriesItemList());
}, ChartsMobileModel.SeriesItemList), 
this.attr("legend", "legendAttr", "legend", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.legendItemRec());
}, ChartsMobileModel.legendItemRec), 
this.attr("xAxis", "xAxisAttr", "xAxis", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.xAxisRec());
}, ChartsMobileModel.xAxisRec), 
this.attr("yAxis", "yAxisAttr", "yAxis", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.yAxisRec());
}, ChartsMobileModel.yAxisRec), 
this.attr("containerId", "containerIdAttr", "containerId", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
HighChartRec.init();
return HighChartRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.HighChartRec = HighChartRec;

});
define("ChartsMobile.model$HighChartList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$HighChartRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var HighChartList = (function (_super) {
__extends(HighChartList, _super);
function HighChartList(defaults) {
_super.apply(this, arguments);
}
HighChartList.itemType = ChartsMobileModel.HighChartRec;
return HighChartList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.HighChartList = HighChartList;

});
define("ChartsMobile.model$HighChartRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$HighChartRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var HighChartRecord = (function (_super) {
__extends(HighChartRecord, _super);
function HighChartRecord(defaults) {
_super.apply(this, arguments);
}
HighChartRecord.attributesToDeclare = function () {
return [
this.attr("HighChart", "highChartAttr", "HighChart", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.HighChartRec());
}, ChartsMobileModel.HighChartRec)
].concat(_super.attributesToDeclare.call(this));
};
HighChartRecord.fromStructure = function (str) {
return new HighChartRecord(new HighChartRecord.RecordClass({
highChartAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HighChartRecord._isAnonymousRecord = true;
HighChartRecord.UniqueId = "34d2a9a4-1f0c-04f9-6fa6-cdc65effe25f";
HighChartRecord.init();
return HighChartRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.HighChartRecord = HighChartRecord;

});
define("ChartsMobile.model$lineRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$lineRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var lineRecord = (function (_super) {
__extends(lineRecord, _super);
function lineRecord(defaults) {
_super.apply(this, arguments);
}
lineRecord.attributesToDeclare = function () {
return [
this.attr("line", "lineAttr", "line", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.lineRec());
}, ChartsMobileModel.lineRec)
].concat(_super.attributesToDeclare.call(this));
};
lineRecord.fromStructure = function (str) {
return new lineRecord(new lineRecord.RecordClass({
lineAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
lineRecord._isAnonymousRecord = true;
lineRecord.UniqueId = "39c487a8-f418-0912-72b6-e0d14b87bcfa";
lineRecord.init();
return lineRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.lineRecord = lineRecord;

});
define("ChartsMobile.model$lineRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$lineRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var lineRecordList = (function (_super) {
__extends(lineRecordList, _super);
function lineRecordList(defaults) {
_super.apply(this, arguments);
}
lineRecordList.itemType = ChartsMobileModel.lineRecord;
return lineRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.lineRecordList = lineRecordList;

});
define("ChartsMobile.model$StackingTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$StackingTypeRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.StackingTypeRecord = StackingTypeRecord;

});
define("ChartsMobile.model$StackingTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$StackingTypeRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var StackingTypeRecordList = (function (_super) {
__extends(StackingTypeRecordList, _super);
function StackingTypeRecordList(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecordList.itemType = ChartsMobileModel.StackingTypeRecord;
return StackingTypeRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.StackingTypeRecordList = StackingTypeRecordList;

});
define("ChartsMobile.model$labelsRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$labelsRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var labelsRecord = (function (_super) {
__extends(labelsRecord, _super);
function labelsRecord(defaults) {
_super.apply(this, arguments);
}
labelsRecord.attributesToDeclare = function () {
return [
this.attr("labels", "labelsAttr", "labels", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.labelsRec());
}, ChartsMobileModel.labelsRec)
].concat(_super.attributesToDeclare.call(this));
};
labelsRecord.fromStructure = function (str) {
return new labelsRecord(new labelsRecord.RecordClass({
labelsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
labelsRecord._isAnonymousRecord = true;
labelsRecord.UniqueId = "3a53c0a0-4da4-9534-722e-fd10ff706aab";
labelsRecord.init();
return labelsRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.labelsRecord = labelsRecord;

});
define("ChartsMobile.model$SSDataSeriesFormatItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSDataSeriesFormatItemRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSDataSeriesFormatItemRecordList = (function (_super) {
__extends(SSDataSeriesFormatItemRecordList, _super);
function SSDataSeriesFormatItemRecordList(defaults) {
_super.apply(this, arguments);
}
SSDataSeriesFormatItemRecordList.itemType = ChartsMobileModel.SSDataSeriesFormatItemRecord;
return SSDataSeriesFormatItemRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SSDataSeriesFormatItemRecordList = SSDataSeriesFormatItemRecordList;

});
define("ChartsMobile.model$stackLabelsRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$stackLabelsRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var stackLabelsRecord = (function (_super) {
__extends(stackLabelsRecord, _super);
function stackLabelsRecord(defaults) {
_super.apply(this, arguments);
}
stackLabelsRecord.attributesToDeclare = function () {
return [
this.attr("stackLabels", "stackLabelsAttr", "stackLabels", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.stackLabelsRec());
}, ChartsMobileModel.stackLabelsRec)
].concat(_super.attributesToDeclare.call(this));
};
stackLabelsRecord.fromStructure = function (str) {
return new stackLabelsRecord(new stackLabelsRecord.RecordClass({
stackLabelsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
stackLabelsRecord._isAnonymousRecord = true;
stackLabelsRecord.UniqueId = "3cf75b4b-937c-2ea9-dfc1-1e84ca3966fd";
stackLabelsRecord.init();
return stackLabelsRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.stackLabelsRecord = stackLabelsRecord;

});
define("ChartsMobile.model$pieRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$pieRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var pieRecord = (function (_super) {
__extends(pieRecord, _super);
function pieRecord(defaults) {
_super.apply(this, arguments);
}
pieRecord.attributesToDeclare = function () {
return [
this.attr("pie", "pieAttr", "pie", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.pieRec());
}, ChartsMobileModel.pieRec)
].concat(_super.attributesToDeclare.call(this));
};
pieRecord.fromStructure = function (str) {
return new pieRecord(new pieRecord.RecordClass({
pieAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
pieRecord._isAnonymousRecord = true;
pieRecord.UniqueId = "3f8a9be6-89db-b00b-3eaa-f4e206618ba2";
pieRecord.init();
return pieRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.pieRecord = pieRecord;

});
define("ChartsMobile.model$XAxesRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxesRec = (function (_super) {
__extends(XAxesRec, _super);
function XAxesRec(defaults) {
_super.apply(this, arguments);
}
XAxesRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "title", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("LabelsRotation", "labelsRotationAttr", "labelsRotation", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MinValue", "minValueAttr", "minValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MaxValue", "maxValueAttr", "maxValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
XAxesRec.init();
return XAxesRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.XAxesRec = XAxesRec;

});
define("ChartsMobile.model$XAxesList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxesRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxesList = (function (_super) {
__extends(XAxesList, _super);
function XAxesList(defaults) {
_super.apply(this, arguments);
}
XAxesList.itemType = ChartsMobileModel.XAxesRec;
return XAxesList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.XAxesList = XAxesList;

});
define("ChartsMobile.model$XAxisFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxisFormatRec = (function (_super) {
__extends(XAxisFormatRec, _super);
function XAxisFormatRec(defaults) {
_super.apply(this, arguments);
}
XAxisFormatRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("LabelsRotation", "labelsRotationAttr", "LabelsRotation", false, false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
XAxisFormatRec.init();
return XAxisFormatRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.XAxisFormatRec = XAxisFormatRec;

});
define("ChartsMobile.model$XAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxisFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.XAxisFormatRecord = XAxisFormatRecord;

});
define("ChartsMobile.model$ChartRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$ChartRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var ChartRecord = (function (_super) {
__extends(ChartRecord, _super);
function ChartRecord(defaults) {
_super.apply(this, arguments);
}
ChartRecord.attributesToDeclare = function () {
return [
this.attr("Chart", "chartAttr", "Chart", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.ChartRec());
}, ChartsMobileModel.ChartRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartRecord.fromStructure = function (str) {
return new ChartRecord(new ChartRecord.RecordClass({
chartAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartRecord._isAnonymousRecord = true;
ChartRecord.UniqueId = "60c0eb96-7674-6216-236a-33a6fde51bea";
ChartRecord.init();
return ChartRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.ChartRecord = ChartRecord;

});
define("ChartsMobile.model$ChartRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$ChartRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var ChartRecordList = (function (_super) {
__extends(ChartRecordList, _super);
function ChartRecordList(defaults) {
_super.apply(this, arguments);
}
ChartRecordList.itemType = ChartsMobileModel.ChartRecord;
return ChartRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.ChartRecordList = ChartRecordList;

});
define("ChartsMobile.model$SSChartFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSChartFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSChartFormatRecord = (function (_super) {
__extends(SSChartFormatRecord, _super);
function SSChartFormatRecord(defaults) {
_super.apply(this, arguments);
}
SSChartFormatRecord.attributesToDeclare = function () {
return [
this.attr("SSChartFormat", "sSChartFormatAttr", "SSChartFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SSChartFormatRec());
}, ChartsMobileModel.SSChartFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
SSChartFormatRecord.fromStructure = function (str) {
return new SSChartFormatRecord(new SSChartFormatRecord.RecordClass({
sSChartFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SSChartFormatRecord._isAnonymousRecord = true;
SSChartFormatRecord.UniqueId = "d8d14f67-d283-2c87-9492-57ced46dc655";
SSChartFormatRecord.init();
return SSChartFormatRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SSChartFormatRecord = SSChartFormatRecord;

});
define("ChartsMobile.model$SSChartFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSChartFormatRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSChartFormatRecordList = (function (_super) {
__extends(SSChartFormatRecordList, _super);
function SSChartFormatRecordList(defaults) {
_super.apply(this, arguments);
}
SSChartFormatRecordList.itemType = ChartsMobileModel.SSChartFormatRecord;
return SSChartFormatRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SSChartFormatRecordList = SSChartFormatRecordList;

});
define("ChartsMobile.model$HighChartRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$HighChartRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var HighChartRecordList = (function (_super) {
__extends(HighChartRecordList, _super);
function HighChartRecordList(defaults) {
_super.apply(this, arguments);
}
HighChartRecordList.itemType = ChartsMobileModel.HighChartRecord;
return HighChartRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.HighChartRecordList = HighChartRecordList;

});
define("ChartsMobile.model$markerRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$markerRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var markerRecord = (function (_super) {
__extends(markerRecord, _super);
function markerRecord(defaults) {
_super.apply(this, arguments);
}
markerRecord.attributesToDeclare = function () {
return [
this.attr("marker", "markerAttr", "marker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.markerRec());
}, ChartsMobileModel.markerRec)
].concat(_super.attributesToDeclare.call(this));
};
markerRecord.fromStructure = function (str) {
return new markerRecord(new markerRecord.RecordClass({
markerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
markerRecord._isAnonymousRecord = true;
markerRecord.UniqueId = "4d6b02d0-13ae-4005-57d0-b016da83f772";
markerRecord.init();
return markerRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.markerRecord = markerRecord;

});
define("ChartsMobile.model$areaList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$areaRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var areaList = (function (_super) {
__extends(areaList, _super);
function areaList(defaults) {
_super.apply(this, arguments);
}
areaList.itemType = ChartsMobileModel.areaRec;
return areaList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.areaList = areaList;

});
define("ChartsMobile.model$DataPointRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataPointRec = (function (_super) {
__extends(DataPointRec, _super);
function DataPointRec(defaults) {
_super.apply(this, arguments);
}
DataPointRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("DataSeriesName", "dataSeriesNameAttr", "DataSeriesName", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Tooltip", "tooltipAttr", "Tooltip", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Color", "colorAttr", "Color", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
DataPointRec.init();
return DataPointRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.DataPointRec = DataPointRec;

});
define("ChartsMobile.model$DataPointList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataPointRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataPointList = (function (_super) {
__extends(DataPointList, _super);
function DataPointList(defaults) {
_super.apply(this, arguments);
}
DataPointList.itemType = ChartsMobileModel.DataPointRec;
return DataPointList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.DataPointList = DataPointList;

});
define("ChartsMobile.model$StackingTypeList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$StackingTypeRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var StackingTypeList = (function (_super) {
__extends(StackingTypeList, _super);
function StackingTypeList(defaults) {
_super.apply(this, arguments);
}
StackingTypeList.itemType = ChartsMobileModel.StackingTypeRec;
return StackingTypeList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.StackingTypeList = StackingTypeList;

});
define("ChartsMobile.model$LegendPositionList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$LegendPositionRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var LegendPositionList = (function (_super) {
__extends(LegendPositionList, _super);
function LegendPositionList(defaults) {
_super.apply(this, arguments);
}
LegendPositionList.itemType = ChartsMobileModel.LegendPositionRec;
return LegendPositionList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.LegendPositionList = LegendPositionList;

});
define("ChartsMobile.model$AdvancedDataSeriesFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatRec = (function (_super) {
__extends(AdvancedDataSeriesFormatRec, _super);
function AdvancedDataSeriesFormatRec(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatRec.attributesToDeclare = function () {
return [
this.attr("DataSeriesName", "dataSeriesNameAttr", "DataSeriesName", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("DataSeriesJSON", "dataSeriesJSONAttr", "DataSeriesJSON", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AdvancedDataSeriesFormatRec.init();
return AdvancedDataSeriesFormatRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.AdvancedDataSeriesFormatRec = AdvancedDataSeriesFormatRec;

});
define("ChartsMobile.model$AdvancedDataSeriesFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedDataSeriesFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.AdvancedDataSeriesFormatRecord = AdvancedDataSeriesFormatRecord;

});
define("ChartsMobile.model$AdvancedDataSeriesFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedDataSeriesFormatRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatRecordList = (function (_super) {
__extends(AdvancedDataSeriesFormatRecordList, _super);
function AdvancedDataSeriesFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatRecordList.itemType = ChartsMobileModel.AdvancedDataSeriesFormatRecord;
return AdvancedDataSeriesFormatRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.AdvancedDataSeriesFormatRecordList = AdvancedDataSeriesFormatRecordList;

});
define("ChartsMobile.model$XAxesRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxesRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxesRecord = (function (_super) {
__extends(XAxesRecord, _super);
function XAxesRecord(defaults) {
_super.apply(this, arguments);
}
XAxesRecord.attributesToDeclare = function () {
return [
this.attr("XAxes", "xAxesAttr", "XAxes", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.XAxesRec());
}, ChartsMobileModel.XAxesRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxesRecord.fromStructure = function (str) {
return new XAxesRecord(new XAxesRecord.RecordClass({
xAxesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxesRecord._isAnonymousRecord = true;
XAxesRecord.UniqueId = "d997b96c-2ce4-f21d-a216-2ad8f92f777a";
XAxesRecord.init();
return XAxesRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.XAxesRecord = XAxesRecord;

});
define("ChartsMobile.model$XAxesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxesRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxesRecordList = (function (_super) {
__extends(XAxesRecordList, _super);
function XAxesRecordList(defaults) {
_super.apply(this, arguments);
}
XAxesRecordList.itemType = ChartsMobileModel.XAxesRecord;
return XAxesRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.XAxesRecordList = XAxesRecordList;

});
define("ChartsMobile.model$areaRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$areaRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var areaRecord = (function (_super) {
__extends(areaRecord, _super);
function areaRecord(defaults) {
_super.apply(this, arguments);
}
areaRecord.attributesToDeclare = function () {
return [
this.attr("area", "areaAttr", "area", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.areaRec());
}, ChartsMobileModel.areaRec)
].concat(_super.attributesToDeclare.call(this));
};
areaRecord.fromStructure = function (str) {
return new areaRecord(new areaRecord.RecordClass({
areaAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
areaRecord._isAnonymousRecord = true;
areaRecord.UniqueId = "6ac1e799-8990-5f9c-4e16-b1bc414e4025";
areaRecord.init();
return areaRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.areaRecord = areaRecord;

});
define("ChartsMobile.model$DataPointRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataPointRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.DataPointRecord = DataPointRecord;

});
define("ChartsMobile.model$SSParameterRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSChartFormatRec", "ChartsMobile.model$XAxesRec", "ChartsMobile.model$YAxesRec", "ChartsMobile.model$SSAdvanceFormatRec", "ChartsMobile.model$SSDataSeriesFormatItemList"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSParameterRec = (function (_super) {
__extends(SSParameterRec, _super);
function SSParameterRec(defaults) {
_super.apply(this, arguments);
}
SSParameterRec.attributesToDeclare = function () {
return [
this.attr("Legend", "legendAttr", "legend", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("Height", "heightAttr", "height", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("StackingType", "stackingTypeAttr", "stackingType", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("ChartFormat", "chartFormatAttr", "ChartFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SSChartFormatRec());
}, ChartsMobileModel.SSChartFormatRec), 
this.attr("XAxis", "xAxisAttr", "xAxis", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.XAxesRec());
}, ChartsMobileModel.XAxesRec), 
this.attr("YAxis", "yAxisAttr", "yAxis", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.YAxesRec());
}, ChartsMobileModel.YAxesRec), 
this.attr("AdvanceFormat", "advanceFormatAttr", "AdvanceFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SSAdvanceFormatRec());
}, ChartsMobileModel.SSAdvanceFormatRec), 
this.attr("DataSeriesFormats", "dataSeriesFormatsAttr", "DataSeriesFormats", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SSDataSeriesFormatItemList());
}, ChartsMobileModel.SSDataSeriesFormatItemList)
].concat(_super.attributesToDeclare.call(this));
};
SSParameterRec.init();
return SSParameterRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SSParameterRec = SSParameterRec;

});
define("ChartsMobile.model$DataPointRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataPointRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataPointRecordList = (function (_super) {
__extends(DataPointRecordList, _super);
function DataPointRecordList(defaults) {
_super.apply(this, arguments);
}
DataPointRecordList.itemType = ChartsMobileModel.DataPointRecord;
return DataPointRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.DataPointRecordList = DataPointRecordList;

});
define("ChartsMobile.model$AdvancedDataPointFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataPointRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatRec = (function (_super) {
__extends(AdvancedDataPointFormatRec, _super);
function AdvancedDataPointFormatRec(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatRec.attributesToDeclare = function () {
return [
this.attr("DataPoint", "dataPointAttr", "DataPoint", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataPointRec());
}, ChartsMobileModel.DataPointRec), 
this.attr("DataPointJSON", "dataPointJSONAttr", "DataPointJSON", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AdvancedDataPointFormatRec.init();
return AdvancedDataPointFormatRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.AdvancedDataPointFormatRec = AdvancedDataPointFormatRec;

});
define("ChartsMobile.model$AdvancedDataPointFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedDataPointFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatList = (function (_super) {
__extends(AdvancedDataPointFormatList, _super);
function AdvancedDataPointFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatList.itemType = ChartsMobileModel.AdvancedDataPointFormatRec;
return AdvancedDataPointFormatList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.AdvancedDataPointFormatList = AdvancedDataPointFormatList;

});
define("ChartsMobile.model$columnRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$columnRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var columnRecord = (function (_super) {
__extends(columnRecord, _super);
function columnRecord(defaults) {
_super.apply(this, arguments);
}
columnRecord.attributesToDeclare = function () {
return [
this.attr("column", "columnAttr", "column", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.columnRec());
}, ChartsMobileModel.columnRec)
].concat(_super.attributesToDeclare.call(this));
};
columnRecord.fromStructure = function (str) {
return new columnRecord(new columnRecord.RecordClass({
columnAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
columnRecord._isAnonymousRecord = true;
columnRecord.UniqueId = "99372c24-e21a-de3d-163c-088b22c14297";
columnRecord.init();
return columnRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.columnRecord = columnRecord;

});
define("ChartsMobile.model$columnRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$columnRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var columnRecordList = (function (_super) {
__extends(columnRecordList, _super);
function columnRecordList(defaults) {
_super.apply(this, arguments);
}
columnRecordList.itemType = ChartsMobileModel.columnRecord;
return columnRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.columnRecordList = columnRecordList;

});
define("ChartsMobile.model$titleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$titleRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var titleRecordList = (function (_super) {
__extends(titleRecordList, _super);
function titleRecordList(defaults) {
_super.apply(this, arguments);
}
titleRecordList.itemType = ChartsMobileModel.titleRecord;
return titleRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.titleRecordList = titleRecordList;

});
define("ChartsMobile.model$DataItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataItemRecord = (function (_super) {
__extends(DataItemRecord, _super);
function DataItemRecord(defaults) {
_super.apply(this, arguments);
}
DataItemRecord.attributesToDeclare = function () {
return [
this.attr("DataItem", "dataItemAttr", "DataItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataItemRec());
}, ChartsMobileModel.DataItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DataItemRecord.fromStructure = function (str) {
return new DataItemRecord(new DataItemRecord.RecordClass({
dataItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataItemRecord._isAnonymousRecord = true;
DataItemRecord.UniqueId = "a673699e-334e-c13c-e8b7-1d04bf4e5179";
DataItemRecord.init();
return DataItemRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.DataItemRecord = DataItemRecord;

});
define("ChartsMobile.model$DataItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataItemRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataItemRecordList = (function (_super) {
__extends(DataItemRecordList, _super);
function DataItemRecordList(defaults) {
_super.apply(this, arguments);
}
DataItemRecordList.itemType = ChartsMobileModel.DataItemRecord;
return DataItemRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.DataItemRecordList = DataItemRecordList;

});
define("ChartsMobile.model$XAxisValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxisValuesTypeRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeList = (function (_super) {
__extends(XAxisValuesTypeList, _super);
function XAxisValuesTypeList(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeList.itemType = ChartsMobileModel.XAxisValuesTypeRec;
return XAxisValuesTypeList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.XAxisValuesTypeList = XAxisValuesTypeList;

});
define("ChartsMobile.model$YAxisFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var YAxisFormatRec = (function (_super) {
__extends(YAxisFormatRec, _super);
function YAxisFormatRec(defaults) {
_super.apply(this, arguments);
}
YAxisFormatRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
}), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
}), 
this.attr("ValuesPrefix", "valuesPrefixAttr", "ValuesPrefix", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("ValuesSuffix", "valuesSuffixAttr", "ValuesSuffix", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
})
].concat(_super.attributesToDeclare.call(this));
};
YAxisFormatRec.init();
return YAxisFormatRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.YAxisFormatRec = YAxisFormatRec;

});
define("ChartsMobile.model$DataLabelRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataLabelRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataLabelRecord = (function (_super) {
__extends(DataLabelRecord, _super);
function DataLabelRecord(defaults) {
_super.apply(this, arguments);
}
DataLabelRecord.attributesToDeclare = function () {
return [
this.attr("DataLabel", "dataLabelAttr", "DataLabel", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataLabelRec());
}, ChartsMobileModel.DataLabelRec)
].concat(_super.attributesToDeclare.call(this));
};
DataLabelRecord.fromStructure = function (str) {
return new DataLabelRecord(new DataLabelRecord.RecordClass({
dataLabelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataLabelRecord._isAnonymousRecord = true;
DataLabelRecord.UniqueId = "82039da8-8d39-9da4-2c55-f3923bd33915";
DataLabelRecord.init();
return DataLabelRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.DataLabelRecord = DataLabelRecord;

});
define("ChartsMobile.model$SSParameterList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSParameterRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSParameterList = (function (_super) {
__extends(SSParameterList, _super);
function SSParameterList(defaults) {
_super.apply(this, arguments);
}
SSParameterList.itemType = ChartsMobileModel.SSParameterRec;
return SSParameterList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SSParameterList = SSParameterList;

});
define("ChartsMobile.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "ChartsMobile.model", "ServiceCenter.model$UserRec", "ChartsMobile.referencesHealth", "ChartsMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, ChartsMobileModel) {
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
ChartsMobileModel.UserRecord = UserRecord;

});
define("ChartsMobile.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$UserRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = ChartsMobileModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.UserRecordList = UserRecordList;

});
define("ChartsMobile.model$AdvancedDataPointFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedDataPointFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.AdvancedDataPointFormatRecord = AdvancedDataPointFormatRecord;

});
define("ChartsMobile.model$XAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxisFormatRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxisFormatRecordList = (function (_super) {
__extends(XAxisFormatRecordList, _super);
function XAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisFormatRecordList.itemType = ChartsMobileModel.XAxisFormatRecord;
return XAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.XAxisFormatRecordList = XAxisFormatRecordList;

});
define("ChartsMobile.model$AdvancedDataSeriesFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedDataSeriesFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatList = (function (_super) {
__extends(AdvancedDataSeriesFormatList, _super);
function AdvancedDataSeriesFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatList.itemType = ChartsMobileModel.AdvancedDataSeriesFormatRec;
return AdvancedDataSeriesFormatList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.AdvancedDataSeriesFormatList = AdvancedDataSeriesFormatList;

});
define("ChartsMobile.model$AdvancedFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedDataPointFormatList", "ChartsMobile.model$AdvancedDataSeriesFormatList"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedFormatRec = (function (_super) {
__extends(AdvancedFormatRec, _super);
function AdvancedFormatRec(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatRec.attributesToDeclare = function () {
return [
this.attr("DataPointFormats", "dataPointFormatsAttr", "DataPointFormats", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.AdvancedDataPointFormatList());
}, ChartsMobileModel.AdvancedDataPointFormatList), 
this.attr("DataSeriesFormats", "dataSeriesFormatsAttr", "DataSeriesFormats", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.AdvancedDataSeriesFormatList());
}, ChartsMobileModel.AdvancedDataSeriesFormatList), 
this.attr("XAxisJSON", "xAxisJSONAttr", "XAxisJSON", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("YAxisJSON", "yAxisJSONAttr", "YAxisJSON", false, false, OS.Types.Text, function () {
return "";
}), 
this.attr("HighchartsJSON", "highchartsJSONAttr", "HighchartsJSON", false, false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AdvancedFormatRec.init();
return AdvancedFormatRec;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.AdvancedFormatRec = AdvancedFormatRec;

});
define("ChartsMobile.model$AdvancedFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.AdvancedFormatRecord = AdvancedFormatRecord;

});
define("ChartsMobile.model$ChartFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$ChartFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var ChartFormatList = (function (_super) {
__extends(ChartFormatList, _super);
function ChartFormatList(defaults) {
_super.apply(this, arguments);
}
ChartFormatList.itemType = ChartsMobileModel.ChartFormatRec;
return ChartFormatList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.ChartFormatList = ChartFormatList;

});
define("ChartsMobile.model$ChartFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$ChartFormatRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var ChartFormatRecordList = (function (_super) {
__extends(ChartFormatRecordList, _super);
function ChartFormatRecordList(defaults) {
_super.apply(this, arguments);
}
ChartFormatRecordList.itemType = ChartsMobileModel.ChartFormatRecord;
return ChartFormatRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.ChartFormatRecordList = ChartFormatRecordList;

});
define("ChartsMobile.model$YAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$YAxisFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
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
ChartsMobileModel.YAxisFormatRecord = YAxisFormatRecord;

});
define("ChartsMobile.model$YAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$YAxisFormatRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var YAxisFormatRecordList = (function (_super) {
__extends(YAxisFormatRecordList, _super);
function YAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisFormatRecordList.itemType = ChartsMobileModel.YAxisFormatRecord;
return YAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.YAxisFormatRecordList = YAxisFormatRecordList;

});
define("ChartsMobile.model$DataLabelList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataLabelRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataLabelList = (function (_super) {
__extends(DataLabelList, _super);
function DataLabelList(defaults) {
_super.apply(this, arguments);
}
DataLabelList.itemType = ChartsMobileModel.DataLabelRec;
return DataLabelList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.DataLabelList = DataLabelList;

});
define("ChartsMobile.model$yAxisRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$yAxisRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var yAxisRecord = (function (_super) {
__extends(yAxisRecord, _super);
function yAxisRecord(defaults) {
_super.apply(this, arguments);
}
yAxisRecord.attributesToDeclare = function () {
return [
this.attr("yAxis", "yAxisAttr", "yAxis", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.yAxisRec());
}, ChartsMobileModel.yAxisRec)
].concat(_super.attributesToDeclare.call(this));
};
yAxisRecord.fromStructure = function (str) {
return new yAxisRecord(new yAxisRecord.RecordClass({
yAxisAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
yAxisRecord._isAnonymousRecord = true;
yAxisRecord.UniqueId = "90cf8951-86e4-99c0-ccf9-e0b47d1a0733";
yAxisRecord.init();
return yAxisRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.yAxisRecord = yAxisRecord;

});
define("ChartsMobile.model$AdvancedFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedFormatList = (function (_super) {
__extends(AdvancedFormatList, _super);
function AdvancedFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatList.itemType = ChartsMobileModel.AdvancedFormatRec;
return AdvancedFormatList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.AdvancedFormatList = AdvancedFormatList;

});
define("ChartsMobile.model$barRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$barRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var barRecord = (function (_super) {
__extends(barRecord, _super);
function barRecord(defaults) {
_super.apply(this, arguments);
}
barRecord.attributesToDeclare = function () {
return [
this.attr("bar", "barAttr", "bar", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.barRec());
}, ChartsMobileModel.barRec)
].concat(_super.attributesToDeclare.call(this));
};
barRecord.fromStructure = function (str) {
return new barRecord(new barRecord.RecordClass({
barAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
barRecord._isAnonymousRecord = true;
barRecord.UniqueId = "957fca98-bff6-489c-cc7e-4460c7e84123";
barRecord.init();
return barRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.barRecord = barRecord;

});
define("ChartsMobile.model$xAxisList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$xAxisRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var xAxisList = (function (_super) {
__extends(xAxisList, _super);
function xAxisList(defaults) {
_super.apply(this, arguments);
}
xAxisList.itemType = ChartsMobileModel.xAxisRec;
return xAxisList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.xAxisList = xAxisList;

});
define("ChartsMobile.model$plotOptionList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$plotOptionRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var plotOptionList = (function (_super) {
__extends(plotOptionList, _super);
function plotOptionList(defaults) {
_super.apply(this, arguments);
}
plotOptionList.itemType = ChartsMobileModel.plotOptionRec;
return plotOptionList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.plotOptionList = plotOptionList;

});
define("ChartsMobile.model$yAxisRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$yAxisRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var yAxisRecordList = (function (_super) {
__extends(yAxisRecordList, _super);
function yAxisRecordList(defaults) {
_super.apply(this, arguments);
}
yAxisRecordList.itemType = ChartsMobileModel.yAxisRecord;
return yAxisRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.yAxisRecordList = yAxisRecordList;

});
define("ChartsMobile.model$pieList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$pieRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var pieList = (function (_super) {
__extends(pieList, _super);
function pieList(defaults) {
_super.apply(this, arguments);
}
pieList.itemType = ChartsMobileModel.pieRec;
return pieList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.pieList = pieList;

});
define("ChartsMobile.model$columnList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$columnRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var columnList = (function (_super) {
__extends(columnList, _super);
function columnList(defaults) {
_super.apply(this, arguments);
}
columnList.itemType = ChartsMobileModel.columnRec;
return columnList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.columnList = columnList;

});
define("ChartsMobile.model$PointItemList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$PointItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var PointItemList = (function (_super) {
__extends(PointItemList, _super);
function PointItemList(defaults) {
_super.apply(this, arguments);
}
PointItemList.itemType = ChartsMobileModel.PointItemRec;
return PointItemList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.PointItemList = PointItemList;

});
define("ChartsMobile.model$eventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$eventsRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var eventsRecord = (function (_super) {
__extends(eventsRecord, _super);
function eventsRecord(defaults) {
_super.apply(this, arguments);
}
eventsRecord.attributesToDeclare = function () {
return [
this.attr("events", "eventsAttr", "events", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.eventsRec());
}, ChartsMobileModel.eventsRec)
].concat(_super.attributesToDeclare.call(this));
};
eventsRecord.fromStructure = function (str) {
return new eventsRecord(new eventsRecord.RecordClass({
eventsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eventsRecord._isAnonymousRecord = true;
eventsRecord.UniqueId = "a64921e6-bc48-3cf7-8107-f4a1f446bdab";
eventsRecord.init();
return eventsRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.eventsRecord = eventsRecord;

});
define("ChartsMobile.model$labelsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$labelsRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var labelsRecordList = (function (_super) {
__extends(labelsRecordList, _super);
function labelsRecordList(defaults) {
_super.apply(this, arguments);
}
labelsRecordList.itemType = ChartsMobileModel.labelsRecord;
return labelsRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.labelsRecordList = labelsRecordList;

});
define("ChartsMobile.model$tooltipList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$tooltipRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var tooltipList = (function (_super) {
__extends(tooltipList, _super);
function tooltipList(defaults) {
_super.apply(this, arguments);
}
tooltipList.itemType = ChartsMobileModel.tooltipRec;
return tooltipList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.tooltipList = tooltipList;

});
define("ChartsMobile.model$eventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$eventsRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var eventsRecordList = (function (_super) {
__extends(eventsRecordList, _super);
function eventsRecordList(defaults) {
_super.apply(this, arguments);
}
eventsRecordList.itemType = ChartsMobileModel.eventsRecord;
return eventsRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.eventsRecordList = eventsRecordList;

});
define("ChartsMobile.model$AdvancedDataPointFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedDataPointFormatRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatRecordList = (function (_super) {
__extends(AdvancedDataPointFormatRecordList, _super);
function AdvancedDataPointFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatRecordList.itemType = ChartsMobileModel.AdvancedDataPointFormatRecord;
return AdvancedDataPointFormatRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.AdvancedDataPointFormatRecordList = AdvancedDataPointFormatRecordList;

});
define("ChartsMobile.model$barRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$barRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var barRecordList = (function (_super) {
__extends(barRecordList, _super);
function barRecordList(defaults) {
_super.apply(this, arguments);
}
barRecordList.itemType = ChartsMobileModel.barRecord;
return barRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.barRecordList = barRecordList;

});
define("ChartsMobile.model$SSParameterRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSParameterRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSParameterRecord = (function (_super) {
__extends(SSParameterRecord, _super);
function SSParameterRecord(defaults) {
_super.apply(this, arguments);
}
SSParameterRecord.attributesToDeclare = function () {
return [
this.attr("SSParameter", "sSParameterAttr", "SSParameter", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.SSParameterRec());
}, ChartsMobileModel.SSParameterRec)
].concat(_super.attributesToDeclare.call(this));
};
SSParameterRecord.fromStructure = function (str) {
return new SSParameterRecord(new SSParameterRecord.RecordClass({
sSParameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SSParameterRecord._isAnonymousRecord = true;
SSParameterRecord.UniqueId = "b8fcab91-4a8d-b6d2-67f3-b00fe18a56d9";
SSParameterRecord.init();
return SSParameterRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.SSParameterRecord = SSParameterRecord;

});
define("ChartsMobile.model$SSAdvanceFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSAdvanceFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSAdvanceFormatList = (function (_super) {
__extends(SSAdvanceFormatList, _super);
function SSAdvanceFormatList(defaults) {
_super.apply(this, arguments);
}
SSAdvanceFormatList.itemType = ChartsMobileModel.SSAdvanceFormatRec;
return SSAdvanceFormatList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SSAdvanceFormatList = SSAdvanceFormatList;

});
define("ChartsMobile.model$yAxisList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$yAxisRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var yAxisList = (function (_super) {
__extends(yAxisList, _super);
function yAxisList(defaults) {
_super.apply(this, arguments);
}
yAxisList.itemType = ChartsMobileModel.yAxisRec;
return yAxisList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.yAxisList = yAxisList;

});
define("ChartsMobile.model$YAxesList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$YAxesRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var YAxesList = (function (_super) {
__extends(YAxesList, _super);
function YAxesList(defaults) {
_super.apply(this, arguments);
}
YAxesList.itemType = ChartsMobileModel.YAxesRec;
return YAxesList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.YAxesList = YAxesList;

});
define("ChartsMobile.model$pieRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$pieRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var pieRecordList = (function (_super) {
__extends(pieRecordList, _super);
function pieRecordList(defaults) {
_super.apply(this, arguments);
}
pieRecordList.itemType = ChartsMobileModel.pieRecord;
return pieRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.pieRecordList = pieRecordList;

});
define("ChartsMobile.model$tooltipRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$tooltipRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var tooltipRecordList = (function (_super) {
__extends(tooltipRecordList, _super);
function tooltipRecordList(defaults) {
_super.apply(this, arguments);
}
tooltipRecordList.itemType = ChartsMobileModel.tooltipRecord;
return tooltipRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.tooltipRecordList = tooltipRecordList;

});
define("ChartsMobile.model$AdvancedFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$AdvancedFormatRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var AdvancedFormatRecordList = (function (_super) {
__extends(AdvancedFormatRecordList, _super);
function AdvancedFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatRecordList.itemType = ChartsMobileModel.AdvancedFormatRecord;
return AdvancedFormatRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.AdvancedFormatRecordList = AdvancedFormatRecordList;

});
define("ChartsMobile.model$DataLabelRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$DataLabelRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var DataLabelRecordList = (function (_super) {
__extends(DataLabelRecordList, _super);
function DataLabelRecordList(defaults) {
_super.apply(this, arguments);
}
DataLabelRecordList.itemType = ChartsMobileModel.DataLabelRecord;
return DataLabelRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.DataLabelRecordList = DataLabelRecordList;

});
define("ChartsMobile.model$areaRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$areaRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var areaRecordList = (function (_super) {
__extends(areaRecordList, _super);
function areaRecordList(defaults) {
_super.apply(this, arguments);
}
areaRecordList.itemType = ChartsMobileModel.areaRecord;
return areaRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.areaRecordList = areaRecordList;

});
define("ChartsMobile.model$titleList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$titleRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var titleList = (function (_super) {
__extends(titleList, _super);
function titleList(defaults) {
_super.apply(this, arguments);
}
titleList.itemType = ChartsMobileModel.titleRec;
return titleList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.titleList = titleList;

});
define("ChartsMobile.model$labelsList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$labelsRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var labelsList = (function (_super) {
__extends(labelsList, _super);
function labelsList(defaults) {
_super.apply(this, arguments);
}
labelsList.itemType = ChartsMobileModel.labelsRec;
return labelsList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.labelsList = labelsList;

});
define("ChartsMobile.model$ChartList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$ChartRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var ChartList = (function (_super) {
__extends(ChartList, _super);
function ChartList(defaults) {
_super.apply(this, arguments);
}
ChartList.itemType = ChartsMobileModel.ChartRec;
return ChartList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.ChartList = ChartList;

});
define("ChartsMobile.model$stackLabelsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$stackLabelsRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var stackLabelsRecordList = (function (_super) {
__extends(stackLabelsRecordList, _super);
function stackLabelsRecordList(defaults) {
_super.apply(this, arguments);
}
stackLabelsRecordList.itemType = ChartsMobileModel.stackLabelsRecord;
return stackLabelsRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.stackLabelsRecordList = stackLabelsRecordList;

});
define("ChartsMobile.model$XAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$XAxisFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var XAxisFormatList = (function (_super) {
__extends(XAxisFormatList, _super);
function XAxisFormatList(defaults) {
_super.apply(this, arguments);
}
XAxisFormatList.itemType = ChartsMobileModel.XAxisFormatRec;
return XAxisFormatList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.XAxisFormatList = XAxisFormatList;

});
define("ChartsMobile.model$legendItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$legendItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var legendItemRecord = (function (_super) {
__extends(legendItemRecord, _super);
function legendItemRecord(defaults) {
_super.apply(this, arguments);
}
legendItemRecord.attributesToDeclare = function () {
return [
this.attr("legendItem", "legendItemAttr", "legendItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.legendItemRec());
}, ChartsMobileModel.legendItemRec)
].concat(_super.attributesToDeclare.call(this));
};
legendItemRecord.fromStructure = function (str) {
return new legendItemRecord(new legendItemRecord.RecordClass({
legendItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
legendItemRecord._isAnonymousRecord = true;
legendItemRecord.UniqueId = "e3944c4e-f711-c65e-410f-9e95395bba61";
legendItemRecord.init();
return legendItemRecord;
})(OS.DataTypes.GenericRecord);
ChartsMobileModel.legendItemRecord = legendItemRecord;

});
define("ChartsMobile.model$SSChartFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSChartFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSChartFormatList = (function (_super) {
__extends(SSChartFormatList, _super);
function SSChartFormatList(defaults) {
_super.apply(this, arguments);
}
SSChartFormatList.itemType = ChartsMobileModel.SSChartFormatRec;
return SSChartFormatList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SSChartFormatList = SSChartFormatList;

});
define("ChartsMobile.model$barList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$barRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var barList = (function (_super) {
__extends(barList, _super);
function barList(defaults) {
_super.apply(this, arguments);
}
barList.itemType = ChartsMobileModel.barRec;
return barList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.barList = barList;

});
define("ChartsMobile.model$legendItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$legendItemRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var legendItemRecordList = (function (_super) {
__extends(legendItemRecordList, _super);
function legendItemRecordList(defaults) {
_super.apply(this, arguments);
}
legendItemRecordList.itemType = ChartsMobileModel.legendItemRecord;
return legendItemRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.legendItemRecordList = legendItemRecordList;

});
define("ChartsMobile.model$markerList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$markerRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var markerList = (function (_super) {
__extends(markerList, _super);
function markerList(defaults) {
_super.apply(this, arguments);
}
markerList.itemType = ChartsMobileModel.markerRec;
return markerList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.markerList = markerList;

});
define("ChartsMobile.model$SSParameterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$SSParameterRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var SSParameterRecordList = (function (_super) {
__extends(SSParameterRecordList, _super);
function SSParameterRecordList(defaults) {
_super.apply(this, arguments);
}
SSParameterRecordList.itemType = ChartsMobileModel.SSParameterRecord;
return SSParameterRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.SSParameterRecordList = SSParameterRecordList;

});
define("ChartsMobile.model$stackLabelsList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$stackLabelsRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var stackLabelsList = (function (_super) {
__extends(stackLabelsList, _super);
function stackLabelsList(defaults) {
_super.apply(this, arguments);
}
stackLabelsList.itemType = ChartsMobileModel.stackLabelsRec;
return stackLabelsList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.stackLabelsList = stackLabelsList;

});
define("ChartsMobile.model$markerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$markerRecord"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var markerRecordList = (function (_super) {
__extends(markerRecordList, _super);
function markerRecordList(defaults) {
_super.apply(this, arguments);
}
markerRecordList.itemType = ChartsMobileModel.markerRecord;
return markerRecordList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.markerRecordList = markerRecordList;

});
define("ChartsMobile.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "ChartsMobile.model", "ServiceCenter.model$UserRec", "ChartsMobile.referencesHealth", "ChartsMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, ChartsMobileModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.UserList = UserList;

});
define("ChartsMobile.model$PlotOptionSerieItemList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$PlotOptionSerieItemRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var PlotOptionSerieItemList = (function (_super) {
__extends(PlotOptionSerieItemList, _super);
function PlotOptionSerieItemList(defaults) {
_super.apply(this, arguments);
}
PlotOptionSerieItemList.itemType = ChartsMobileModel.PlotOptionSerieItemRec;
return PlotOptionSerieItemList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.PlotOptionSerieItemList = PlotOptionSerieItemList;

});
define("ChartsMobile.model$YAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "ChartsMobile.model", "ChartsMobile.model$YAxisFormatRec"], function (exports, OutSystems, ChartsMobileModel) {
var OS = OutSystems.Internal;
var YAxisFormatList = (function (_super) {
__extends(YAxisFormatList, _super);
function YAxisFormatList(defaults) {
_super.apply(this, arguments);
}
YAxisFormatList.itemType = ChartsMobileModel.YAxisFormatRec;
return YAxisFormatList;
})(OS.DataTypes.GenericRecordList);
ChartsMobileModel.YAxisFormatList = YAxisFormatList;

});
define("ChartsMobile.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ChartsMobileModel = exports;
Object.defineProperty(ChartsMobileModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"];
}
});

ChartsMobileModel.staticEntities = {};
ChartsMobileModel.staticEntities.stackingType = {};
var getStackingTypeRecord = function (record) {
return ChartsMobileModel.module.staticEntities["1aaafcbe-99a5-4857-83f2-e4754e65edcf"][record];
};
Object.defineProperty(ChartsMobileModel.staticEntities.stackingType, "stacked100Percent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("5a048369-2987-4af5-b052-ab363ac4b748"));
}
});

Object.defineProperty(ChartsMobileModel.staticEntities.stackingType, "noStacking", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("b664d44a-e707-43cc-b782-cc4fd9c3ce8a"));
}
});

Object.defineProperty(ChartsMobileModel.staticEntities.stackingType, "stacked", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("f5816dfa-da3b-4031-aa5f-06a7a08dcc94"));
}
});

ChartsMobileModel.staticEntities.legendPosition = {};
var getLegendPositionRecord = function (record) {
return ChartsMobileModel.module.staticEntities["6f55558f-9a5c-49bb-bc32-8180c0ac0d73"][record];
};
Object.defineProperty(ChartsMobileModel.staticEntities.legendPosition, "bottom", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("24063cd8-b015-4fb7-8ceb-c4cf65110444"));
}
});

Object.defineProperty(ChartsMobileModel.staticEntities.legendPosition, "right", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("2c2e4610-d5b5-4738-9474-83ca4e40f33b"));
}
});

Object.defineProperty(ChartsMobileModel.staticEntities.legendPosition, "inside", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("33fda788-9eba-426b-be1d-284323c6ae2a"));
}
});

Object.defineProperty(ChartsMobileModel.staticEntities.legendPosition, "left", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("5314c097-85bd-407c-84f9-f0ebd17b75ce"));
}
});

Object.defineProperty(ChartsMobileModel.staticEntities.legendPosition, "hidden", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("6519bee3-d71b-41ae-8e57-a377f8aaa6c3"));
}
});

Object.defineProperty(ChartsMobileModel.staticEntities.legendPosition, "top", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getLegendPositionRecord("e0495156-d508-4fc2-a3ed-77a194c65b49"));
}
});

ChartsMobileModel.staticEntities.xAxisValuesType = {};
var getXAxisValuesTypeRecord = function (record) {
return ChartsMobileModel.module.staticEntities["e24bffa0-82f5-4cd2-9d43-97b142649f77"][record];
};
Object.defineProperty(ChartsMobileModel.staticEntities.xAxisValuesType, "text", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getXAxisValuesTypeRecord("31d40404-1f4d-4f1a-8c04-aa7377da778a"));
}
});

Object.defineProperty(ChartsMobileModel.staticEntities.xAxisValuesType, "auto", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getXAxisValuesTypeRecord("6599ec19-4160-4794-81cd-6ba06b0bb84d"));
}
});

});
