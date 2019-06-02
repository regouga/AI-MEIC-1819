require(["OutSystems/ClientRuntime/Main", "PocketFestival.appDefinition", "OutSystems/ClientRuntime/Debugger"], function (OutSystems, PocketFestivalAppDefinition, Debugger) {
var OS = OutSystems.Internal;
if(OS.Navigation.ensureRequestSecurity()) {
return;
}

OutSystemsDebugger.initialize().then(function () {
return OS.Application.initialize(PocketFestivalAppDefinition, OS.Interfaces.Application.InitializationType.Full, new OS.Format.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new OS.Format.NumberFormatInfo(".", "")).then(function (success) {
function initViewPromise() {
return OS.Flow.promise(function (resolve, reject) {
require(["OutSystems/ReactView/Main", "fastclick"], function (OSView, FastClick) {
try {OSView.Router.load(OS.Application);
FastClick.attach(document.body);
resolve();
} catch (error) {
reject(error);
}

});
});
};
if(success) {
return initViewPromise();
}


});
}).catch(function (error) {
OS.ErrorHandling.handleError(error);
});
});

