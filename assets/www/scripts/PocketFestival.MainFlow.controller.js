define("PocketFestival.MainFlow.controller", ["exports", "OutSystems/ClientRuntime/Main", "PocketFestival.model", "PocketFestival.controller", "PocketFestival.Common.controller", "PocketFestival.MainFlow.controller$debugger"], function (exports, OutSystems, PocketFestivalModel, PocketFestivalController, PocketFestival_CommonController, PocketFestival_MainFlow_Controller_debugger) {
var OS = OutSystems.Internal;
var PocketFestival_MainFlowController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.getDefaultTimeout = function () {
return PocketFestivalController.default.defaultTimeout;
};
Controller.prototype.handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
OS.Logger.trace("MainFlow", OS.Exceptions.getMessage(ex), ex.name);
return PocketFestival_CommonController.default.handleError(ex, callContext);


};
return Controller;
})(OS.Controller.BaseController);
PocketFestival_MainFlowController.default = new Controller();
});

define("PocketFestival.MainFlow.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});
