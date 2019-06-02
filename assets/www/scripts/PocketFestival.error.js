try {require(["OutSystems/ClientRuntime/Main", "PocketFestival.appDefinition"], function (OutSystems, PocketFestivalAppDefinition) {
var OS = OutSystems.Internal;
OS.ErrorScreen.initializeErrorPage(PocketFestivalAppDefinition, OS.Application);
});
} catch (ex) {
console.error(e);
}

