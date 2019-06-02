define("PocketFestival.MainFlow.MyTicket.mvc$model", ["OutSystems/ClientRuntime/Main", "PocketFestival.model"], function (OutSystems, PocketFestivalModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("transp1", "transp1Var", "transp1", true, false, OS.Types.Text, function () {
return "Roma";
}), 
this.attr("transp2", "transp2Var", "transp2", true, false, OS.Types.Text, function () {
return "Algés";
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
return {
Input_transp1: OS.Model.ValidationWidgetRecord,
Input_transp2: OS.Model.ValidationWidgetRecord
};
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
return true;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("PocketFestival.MainFlow.MyTicket.mvc$view", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "react", "OutSystems/ReactView/Main", "PocketFestival.MainFlow.MyTicket.mvc$model", "PocketFestival.MainFlow.MyTicket.mvc$controller", "PocketFestival.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUIMobile.Navigation.Tabs.mvc$view", "OutSystemsUIMobile.Utilities.Separator.mvc$view"], function (OutSystems, PocketFestivalModel, PocketFestivalController, React, OSView, PocketFestival_MainFlow_MyTicket_mvc_model, PocketFestival_MainFlow_MyTicket_mvc_controller, PocketFestival_Common_Layout_mvc_view, OSWidgets, OutSystemsUIMobile_Navigation_Tabs_mvc_view, OutSystemsUIMobile_Utilities_Separator_mvc_view) {
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
        View.displayName = "MainFlow.MyTicket";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUIMobile.BaseTheme.css", "css/OutSystemsUIMobile.PhoneTheme.css", "css/PocketFestival.PocketFestival.css", "css/PocketFestival.MainFlow.MyTicket.css", "css/OutSystemsUIMobile.PhoneTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [PocketFestival_Common_Layout_mvc_view, OutSystemsUIMobile_Navigation_Tabs_mvc_view, OutSystemsUIMobile_Utilities_Separator_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PocketFestival_MainFlow_MyTicket_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PocketFestival_MainFlow_MyTicket_mvc_controller;
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
style: "text-align: center; overflow-y: hidden;"
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "margin-bottom: 30px; margin-top: 30px;"
},
gridProperties: {
classes: "ThemeGrid_Width7"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.SSCCPalletBarcode.jpg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "position: static;"
},
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUIMobile_Navigation_Tabs_mvc_view, {
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
uuid: "4",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
tab1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "user",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
tab2: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "map-signs",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
tab3: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "hotel",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
tab4: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "automobile",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
tab5: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "tree",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
tabContent1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "ticket",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Ticket holder"],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["João Pedro Fernandes"],
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "calendar",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Date of the event"],
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["11/12/13 July 2019"],
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "clock-o",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Opening hours of the doors"],
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["16h00 GMT"],
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "tag",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Price of the ticket"],
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["€149.90"],
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "chain",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Ticket operator"],
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Blueticket Portugal"],
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}),
tabContent2: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 20px; margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 16px; margin-right: 10px;"
},
icon: "map-marker",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}), "From"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedProperties: {
style: "margin-top: 10px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
prompt: model.variables.transp1Var,
style: "form-control",
variable: model.createVariable(OS.Types.Text, model.variables.transp1Var, function (value) {
model.variables.transp1Var = value;
}),
_idProps: {
service: idService,
name: "Input_transp1"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 16px; margin-right: 10px;"
},
icon: "map-marker",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}), "To"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedProperties: {
style: "margin-top: 10px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
prompt: model.variables.transp2Var,
style: "form-control",
variable: model.createVariable(OS.Types.Text, model.variables.transp2Var, function (value) {
model.variables.transp2Var = value;
}),
_idProps: {
service: idService,
name: "Input_transp2"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OutSystemsUIMobile_Utilities_Separator_mvc_view, {
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
uuid: "52",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Estimated time"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 250%; font-weight: bold;"
},
text: ["42 minutes"],
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OutSystemsUIMobile_Utilities_Separator_mvc_view, {
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
uuid: "57",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "100%"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.map.jpg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
tabContent3: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "59"
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
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Hotel Roma"],
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "star",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
gridProperties: {
marginLeft: "0"
},
icon: "star",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
gridProperties: {
marginLeft: "0"
},
icon: "star",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
gridProperties: {
marginLeft: "0"
},
icon: "star",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "margin-top: 20px;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PocketFestival.hotelromaexterior53e1a30.jpg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "user",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Booking name"],
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["João Pedro Fernandes"],
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "77"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "calendar",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "79"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Staying dates"],
_idProps: {
service: idService,
uuid: "80"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "81"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["from"],
_idProps: {
service: idService,
uuid: "82"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: [" 9th July "],
_idProps: {
service: idService,
uuid: "83"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: ["to"],
_idProps: {
service: idService,
uuid: "84"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: [" 14th July"],
_idProps: {
service: idService,
uuid: "85"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "86"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "map-marker",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "87"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "88"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Location"],
_idProps: {
service: idService,
uuid: "89"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "90"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Avenida de Roma 11, Lisbon"],
_idProps: {
service: idService,
uuid: "91"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "92"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "check",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "93"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "94"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Check in"],
_idProps: {
service: idService,
uuid: "95"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "96"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["9th July"],
_idProps: {
service: idService,
uuid: "97"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: [" starting at "],
_idProps: {
service: idService,
uuid: "98"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["15h00 GMT"],
_idProps: {
service: idService,
uuid: "99"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "100"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "sign-out",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "101"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "102"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Check out"],
_idProps: {
service: idService,
uuid: "103"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "104"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["14th July"],
_idProps: {
service: idService,
uuid: "105"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: normal;"
},
text: [" until "],
_idProps: {
service: idService,
uuid: "106"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["12h00 GMT"],
_idProps: {
service: idService,
uuid: "107"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "108"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "width: 48px;"
},
icon: "cutlery",
iconSize: /*Threetimes*/ 2,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "109"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 0px 0px 20px;"
},
gridProperties: {
classes: "ThemeGrid_Width9",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
uuid: "110"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 10px;"
},
text: ["Breakfast hours"],
_idProps: {
service: idService,
uuid: "111"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "112"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Every day from 06h30 to 12h00 GMT "],
_idProps: {
service: idService,
uuid: "113"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}),
tabContent4: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "114"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 20px; margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "115"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "116"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Car parked"],
_idProps: {
service: idService,
uuid: "117"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "118"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 250%; font-weight: bold;"
},
text: ["27-SI-69"],
_idProps: {
service: idService,
uuid: "119"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "120"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 10px;"
},
icon: "location-arrow",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "121"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Alegro Shopping Center"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "122"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 10px;"
},
icon: "map-marker",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "123"
},
_widgetRecordProvider: widgetsRecordProvider
}), "-1 / D34")), React.createElement(OutSystemsUIMobile_Utilities_Separator_mvc_view, {
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
uuid: "124",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 20px; margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "125"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "126"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 10px;"
},
icon: "automobile",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "127"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Tesla Model S P100D"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "128"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 10px;"
},
icon: "plug",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "129"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Charging (34%)")), React.createElement(OutSystemsUIMobile_Utilities_Separator_mvc_view, {
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
uuid: "130",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "131"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "132"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 10px;"
},
icon: "clock-o",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "133"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Valid until ", React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["04h00"],
_idProps: {
service: idService,
uuid: "134"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "135"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 10px;"
},
icon: "euro",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "136"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["4.09"],
_idProps: {
service: idService,
uuid: "137"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}),
tabContent5: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 20px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "138"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "139"
},
_widgetRecordProvider: widgetsRecordProvider
}, "You haven\'t purchased a camping package."), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "140"
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
uuid: "141"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "margin-right: 20px;"
},
icon: "shopping-cart",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "142"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 25px;"
},
text: ["Buy now"],
_idProps: {
service: idService,
uuid: "143"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.transp2Var), asPrimitiveValue(model.variables.transp1Var)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.transp2Var), asPrimitiveValue(model.variables.transp1Var)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("PocketFestival.MainFlow.MyTicket.mvc$controller", ["OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.languageResources", "PocketFestival.MainFlow.controller", "PocketFestival.MainFlow.MyTicket.mvc$debugger"], function (OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestivalLanguageResources, PocketFestival_MainFlowController, PocketFestival_MainFlow_MyTicket_mvc_Debugger) {
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
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:y1J3FUFFXO+Ufr2xOZJxhQ", "PocketFestival", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("HaIUGTmzUkKd4cWDLHNcow:OydMqFppTEGo+fBhX+_Fqg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.OydMqFppTEGo+fBhX+_Fqg:PbcujzDwEUXFXUg1g2Dr0Q", "PocketFestival", "MyTicket", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("HaIUGTmzUkKd4cWDLHNcow:OydMqFppTEGo+fBhX+_Fqg", callContext.id);
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

define("PocketFestival.MainFlow.MyTicket.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"IjE5T9omdEeKRmMe14+y6A": {
getter: function (varBag, idService) {
return varBag.model.variables.transp1Var;
},
dataType: OS.Types.Text
},
"VNsWwySbIk+aIF3sqBuvRA": {
getter: function (varBag, idService) {
return varBag.model.variables.transp2Var;
},
dataType: OS.Types.Text
},
"NXJoY2m570OR6jAis2OmdQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"FgpTSMhFGU+CiBKXDZhe1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab1"));
})(varBag.model, idService);
}
},
"oXapw4+U+0iEy8gOan9n0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab2"));
})(varBag.model, idService);
}
},
"Hp5LzJqnYEKeph687da_qA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab3"));
})(varBag.model, idService);
}
},
"E989kHzngUqoZBDePiHfAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab4"));
})(varBag.model, idService);
}
},
"ts84rKlDREmMejxJoCIPEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tab5"));
})(varBag.model, idService);
}
},
"V9H97QrYsUe0MH6g+lr8Cw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent1"));
})(varBag.model, idService);
}
},
"YtLtHuELZ0S_XUK7hV07xQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent2"));
})(varBag.model, idService);
}
},
"N7EtFBRXfEKQTc_GdrdPwg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_transp1"));
})(varBag.model, idService);
}
},
"VeyhpAEUFUyG73SqWaDJPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_transp2"));
})(varBag.model, idService);
}
},
"NTdg5WfJYUOsJqw9G8EH1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent3"));
})(varBag.model, idService);
}
},
"9HXq8RuhFku5z9eb5Oef7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent4"));
})(varBag.model, idService);
}
},
"zzF6YE7zv0+lAAoi2A1G8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TabContent5"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
