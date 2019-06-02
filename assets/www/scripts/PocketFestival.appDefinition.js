define("PocketFestival.appDefinition", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
return {
environmentKey: "814748dd-98ba-4483-9741-8d28deb24967",
environmentName: "Development",
applicationKey: "8ede64e2-d350-454b-991c-70a8bf3a0447",
applicationName: "Pocket Festival",
userProviderName: "Users",
debugEnabled: true,
homeModuleName: "PocketFestival",
homeModuleKey: "1914a21d-b339-4252-9de1-c5832c735ca3",
homeModuleControllerName: "PocketFestival.controller",
homeModuleLanguageResourcesName: "PocketFestival.languageResources",
defaultTransition: "SlideFromRight",
errorPageConfig: {
showExceptionStack: false
}
};
});
