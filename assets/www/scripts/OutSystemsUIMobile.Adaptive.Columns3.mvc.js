define("OutSystemsUIMobile.Adaptive.Columns3.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model"], function (OutSystems, OutSystemsUIMobileModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UseGutter", "useGutterIn", "UseGutter", true, false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_useGutterInDataFetchStatus", "_useGutterInDataFetchStatus", "_useGutterInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PhonePortraitBreak", "phonePortraitBreakIn", "PhonePortraitBreak", true, false, OS.Types.Text, function () {
return OutSystemsUIMobileModel.staticEntities.columnBreak.breakNone;
}), 
this.attr("_phonePortraitBreakInDataFetchStatus", "_phonePortraitBreakInDataFetchStatus", "_phonePortraitBreakInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PhoneLandscapeBreak", "phoneLandscapeBreakIn", "PhoneLandscapeBreak", true, false, OS.Types.Text, function () {
return OutSystemsUIMobileModel.staticEntities.columnBreak.breakNone;
}), 
this.attr("_phoneLandscapeBreakInDataFetchStatus", "_phoneLandscapeBreakInDataFetchStatus", "_phoneLandscapeBreakInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TabletPortraitBreak", "tabletPortraitBreakIn", "TabletPortraitBreak", true, false, OS.Types.Text, function () {
return OutSystemsUIMobileModel.staticEntities.columnBreak.breakNone;
}), 
this.attr("_tabletPortraitBreakInDataFetchStatus", "_tabletPortraitBreakInDataFetchStatus", "_tabletPortraitBreakInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TabletLandscapeBreak", "tabletLandscapeBreakIn", "TabletLandscapeBreak", true, false, OS.Types.Text, function () {
return OutSystemsUIMobileModel.staticEntities.columnBreak.breakNone;
}), 
this.attr("_tabletLandscapeBreakInDataFetchStatus", "_tabletLandscapeBreakInDataFetchStatus", "_tabletLandscapeBreakInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("UseGutter" in inputs) {
this.variables.useGutterIn = inputs.UseGutter;
if("_useGutterInDataFetchStatus" in inputs) {
this.variables._useGutterInDataFetchStatus = inputs._useGutterInDataFetchStatus;
}

}

if("PhonePortraitBreak" in inputs) {
this.variables.phonePortraitBreakIn = inputs.PhonePortraitBreak;
if("_phonePortraitBreakInDataFetchStatus" in inputs) {
this.variables._phonePortraitBreakInDataFetchStatus = inputs._phonePortraitBreakInDataFetchStatus;
}

}

if("PhoneLandscapeBreak" in inputs) {
this.variables.phoneLandscapeBreakIn = inputs.PhoneLandscapeBreak;
if("_phoneLandscapeBreakInDataFetchStatus" in inputs) {
this.variables._phoneLandscapeBreakInDataFetchStatus = inputs._phoneLandscapeBreakInDataFetchStatus;
}

}

if("TabletPortraitBreak" in inputs) {
this.variables.tabletPortraitBreakIn = inputs.TabletPortraitBreak;
if("_tabletPortraitBreakInDataFetchStatus" in inputs) {
this.variables._tabletPortraitBreakInDataFetchStatus = inputs._tabletPortraitBreakInDataFetchStatus;
}

}

if("TabletLandscapeBreak" in inputs) {
this.variables.tabletLandscapeBreakIn = inputs.TabletLandscapeBreak;
if("_tabletLandscapeBreakInDataFetchStatus" in inputs) {
this.variables._tabletLandscapeBreakInDataFetchStatus = inputs._tabletLandscapeBreakInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUIMobile.Adaptive.Columns3.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUIMobile.Adaptive.Columns3.mvc$model", "OutSystemsUIMobile.Adaptive.Columns3.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, React, OSView, OutSystemsUIMobile_Adaptive_Columns3_mvc_model, OutSystemsUIMobile_Adaptive_Columns3_mvc_controller, OSWidgets) {
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
        View.displayName = "Adaptive.Columns3";
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
                return OutSystemsUIMobile_Adaptive_Columns3_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUIMobile_Adaptive_Columns3_mvc_controller;
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
style: model.getCachedValue(idService.getId("HePkT9Q7ykGz6oaSCMWtnA.Style"), function () {
return ((((((((("columns cols3" + ((model.variables.useGutterIn) ? (" gutter") : (""))) + " phone-portrait-") + model.variables.phonePortraitBreakIn) + " phone-landscape-") + model.variables.phoneLandscapeBreakIn) + " tablet-portrait-") + model.variables.tabletPortraitBreakIn) + " tablet-landscape-") + model.variables.tabletLandscapeBreakIn);
}, function () {
return model.variables.useGutterIn;
}, function () {
return model.variables.phonePortraitBreakIn;
}, function () {
return model.variables.phoneLandscapeBreakIn;
}, function () {
return model.variables.tabletPortraitBreakIn;
}, function () {
return model.variables.tabletLandscapeBreakIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useGutterInDataFetchStatus, model.variables._phonePortraitBreakInDataFetchStatus, model.variables._phoneLandscapeBreakInDataFetchStatus, model.variables._tabletPortraitBreakInDataFetchStatus, model.variables._tabletLandscapeBreakInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.column1,
gridProperties: {
classes: "OSInline"
},
style: "col",
_idProps: {
service: idService,
name: "Column1"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.column2,
gridProperties: {
classes: "OSInline"
},
style: "col",
_idProps: {
service: idService,
name: "Column2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.column3,
gridProperties: {
classes: "OSInline"
},
style: "col",
_idProps: {
service: idService,
name: "Column3"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUIMobile.Adaptive.Columns3.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUIMobile.model", "OutSystemsUIMobile.controller", "OutSystemsUIMobile.languageResources", "OutSystemsUIMobile.Adaptive.Columns3.mvc$debugger"], function (OutSystems, OutSystemsUIMobileModel, OutSystemsUIMobileController, OutSystemsUIMobileLanguageResources, OutSystemsUIMobile_Adaptive_Columns3_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:9GgB6wiQjkOC68Dd0FW6zQ:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ:2NfF6efgk3t7_kG4D9BKSA", "OutSystemsUIMobile", "Adaptive", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:tms4TjNF8kaDdawdyO7Hkg:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.tms4TjNF8kaDdawdyO7Hkg:6Fo+17puSAUFlkoabGdGjg", "OutSystemsUIMobile", "Columns3", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:tms4TjNF8kaDdawdyO7Hkg", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:9GgB6wiQjkOC68Dd0FW6zQ", callContext.id);
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

define("OutSystemsUIMobile.Adaptive.Columns3.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"x1qYKxVZHk2PJ+p8JZT0aQ": {
getter: function (varBag, idService) {
return varBag.model.variables.useGutterIn;
},
dataType: OS.Types.Boolean
},
"NTVaa6jh5k2TLerunbcEKg": {
getter: function (varBag, idService) {
return varBag.model.variables.phonePortraitBreakIn;
},
dataType: OS.Types.Text
},
"lKykDFvVbUKAptP91_uY9g": {
getter: function (varBag, idService) {
return varBag.model.variables.phoneLandscapeBreakIn;
},
dataType: OS.Types.Text
},
"Efs8bUvVc0OxEktp0_XZ1g": {
getter: function (varBag, idService) {
return varBag.model.variables.tabletPortraitBreakIn;
},
dataType: OS.Types.Text
},
"RmoChzqaiUuyPyU8gAtgzA": {
getter: function (varBag, idService) {
return varBag.model.variables.tabletLandscapeBreakIn;
},
dataType: OS.Types.Text
},
"2KGoj7psrk2cCtUuhjtBgQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column1"));
})(varBag.model, idService);
}
},
"5mH67Ynh3kC78IO5JyxFSQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column2"));
})(varBag.model, idService);
}
},
"euo7QK1BJ0Km6C6JkoTZ1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column3"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
