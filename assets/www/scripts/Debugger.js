define('OutSystems/ClientRuntime/RuntimeDebuggerAPI',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BreakpointType;
    (function (BreakpointType) {
        BreakpointType[BreakpointType["Normal"] = 0] = "Normal";
        BreakpointType[BreakpointType["AtFunctionReturn"] = 1] = "AtFunctionReturn";
        BreakpointType[BreakpointType["BetweenAssignments"] = 2] = "BetweenAssignments";
    })(BreakpointType = exports.BreakpointType || (exports.BreakpointType = {}));
});

define('OutSystems/ClientRuntime/Debugger',["require", "exports", "./Logger", "./DataTypes", "./Model", "./Navigation", "./Exceptions", "./RuntimeDebuggerAPI"], function (require, exports, Logger, DataTypes_1, Model_1, Navigation, Exceptions, RuntimeDebuggerAPI_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HEADER_KEYS = {
        CallContextId: "ccid",
        DebugStop: "dbg-stop",
        DebugBreakpointId: "dbg-bkp"
    };
    var CommandType;
    (function (CommandType) {
        CommandType[CommandType["StepOver"] = 0] = "StepOver";
        CommandType[CommandType["StepInto"] = 1] = "StepInto";
        CommandType[CommandType["StepOut"] = 2] = "StepOut";
        CommandType[CommandType["Continue"] = 3] = "Continue";
        CommandType[CommandType["ContinueToHere"] = 4] = "ContinueToHere";
        CommandType[CommandType["None"] = 5] = "None";
    })(CommandType = exports.CommandType || (exports.CommandType = {}));
    var InitializationStatus;
    (function (InitializationStatus) {
        InitializationStatus[InitializationStatus["Unprepared"] = 0] = "Unprepared";
        InitializationStatus[InitializationStatus["WaitingForClient"] = 1] = "WaitingForClient";
        InitializationStatus[InitializationStatus["Prepared"] = 2] = "Prepared";
    })(InitializationStatus = exports.InitializationStatus || (exports.InitializationStatus = {}));
    var BreakpointId = (function () {
        function BreakpointId(moduleKey, objectKey, compoundKey, debuggerHash) {
            if (moduleKey === void 0) { moduleKey = null; }
            if (objectKey === void 0) { objectKey = null; }
            if (compoundKey === void 0) { compoundKey = null; }
            if (debuggerHash === void 0) { debuggerHash = null; }
            this.moduleKey = moduleKey;
            this.objectKey = objectKey;
            this.compoundKey = compoundKey;
            this.debuggerHash = debuggerHash;
        }
        BreakpointId.prototype.init = function (breakpointIdStr) {
            if (!breakpointIdStr) {
                return;
            }
            var parts = breakpointIdStr.split(BreakpointId.SeparatorChar);
            this.moduleKey = parts[0];
            this.objectKey = parts[1];
            this.compoundKey = parts.length > 2 && parts[2] ? parts[2] : null;
            this.debuggerHash = parts.length > 3 && parts[3] ? parts[3] : null;
        };
        BreakpointId.parse = function (breakpointIdStr) {
            if (!breakpointIdStr) {
                return null;
            }
            try {
                var breakpoint = new BreakpointId();
                breakpoint.init(breakpointIdStr);
                return breakpoint;
            }
            catch (error) {
                return null;
            }
        };
        BreakpointId.prototype.equals = function (b1) {
            if (!b1) {
                return false;
            }
            return b1.moduleKey === this.moduleKey && b1.objectKey === this.objectKey;
        };
        BreakpointId.prototype.toString = function (fullKey) {
            if (fullKey === void 0) { fullKey = false; }
            if (!fullKey) {
                return this.moduleKey + BreakpointId.SeparatorChar +
                    (this.objectKey || "");
            }
            else {
                return this.moduleKey + BreakpointId.SeparatorChar +
                    (this.objectKey || "") + BreakpointId.SeparatorChar +
                    (this.compoundKey || "") + BreakpointId.SeparatorChar +
                    (this.debuggerHash || "");
            }
        };
        BreakpointId.SeparatorChar = ":";
        return BreakpointId;
    }());
    exports.BreakpointId = BreakpointId;
    var DebugCommand = (function () {
        function DebugCommand(_commandType, _stackLevel) {
            if (_commandType === void 0) { _commandType = CommandType.None; }
            if (_stackLevel === void 0) { _stackLevel = -1; }
            this._commandType = _commandType;
            this._stackLevel = _stackLevel;
        }
        DebugCommand.prototype.resetCommandState = function () {
            this._commandType = CommandType.None;
            this._stackLevel = -1;
        };
        Object.defineProperty(DebugCommand.prototype, "commandType", {
            get: function () {
                return this._commandType;
            },
            set: function (stepType) {
                this._commandType = stepType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DebugCommand.prototype, "stackLevel", {
            get: function () {
                return this._stackLevel;
            },
            set: function (stackLevel) {
                this._stackLevel = stackLevel;
            },
            enumerable: true,
            configurable: true
        });
        return DebugCommand;
    }());
    exports.DebugCommand = DebugCommand;
    var LocalState = (function () {
        function LocalState(elementKey, moduleName, elementName, elementType, varBag) {
            this.elementKey = elementKey;
            this.moduleName = moduleName;
            this.elementName = elementName;
            this.elementType = elementType;
            this.varBag = varBag;
            this.currentBreakpoint = null;
            this.previousBreakpoint = null;
            this.breakpointType = null;
            this.extraInfo = null;
            this.functionLeft = "";
        }
        LocalState.prototype.refreshLocalState = function (currentBreakpoint, breakpointType, extraInfo) {
            this.previousBreakpoint = this.currentBreakpoint;
            this.currentBreakpoint = currentBreakpoint;
            this.breakpointType = breakpointType;
            this.extraInfo = extraInfo;
        };
        return LocalState;
    }());
    exports.LocalState = LocalState;
    var ThreadState = (function () {
        function ThreadState() {
            this.callStack = new Array();
            this._command = new DebugCommand();
            this._continueToHereBreakpoint = undefined;
            this._stopImmediately = false;
        }
        ThreadState.prototype.pushCallOnStack = function (elementKey, moduleName, elementName, elementType, varBag) {
            this.callStack.push(new LocalState(elementKey, moduleName, elementName, elementType, varBag));
        };
        ThreadState.prototype.popCallOnStack = function () {
            var lastState = this.callStack.pop();
            if (this.callStack.length > 0) {
                this.peekLastCallOnStack().functionLeft = lastState.elementName;
            }
            return lastState;
        };
        ThreadState.prototype.peekLastCallOnStack = function () {
            if (this.callStack.length <= 0) {
                return;
            }
            return this.callStack[this.callStack.length - 1];
        };
        ThreadState.prototype.getCallOnStack = function (position) {
            if (position < 0 || position >= this.callStack.length) {
                logMessage("The received stack level is not valid. Received '" + position + "', current thread stack length '" + this.callStack.length + "'");
                return;
            }
            return this.callStack[position];
        };
        ThreadState.prototype.refreshLastCallOnStack = function (currentBreakpoint, breakpointType, extraInfo) {
            this.peekLastCallOnStack().refreshLocalState(currentBreakpoint, breakpointType, extraInfo);
        };
        Object.defineProperty(ThreadState.prototype, "command", {
            get: function () {
                return this._command;
            },
            set: function (command) {
                this._command = command;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreadState.prototype, "stackLevel", {
            get: function () {
                return this.callStack.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreadState.prototype, "stopImmediately", {
            get: function () {
                return this._stopImmediately;
            },
            set: function (value) {
                this._stopImmediately = value || false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreadState.prototype, "continueToBreakpoint", {
            get: function () {
                return this._continueToHereBreakpoint;
            },
            set: function (value) {
                this._continueToHereBreakpoint = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreadState.prototype, "threadStartName", {
            get: function () {
                return this._threadStartName || "";
            },
            set: function (value) {
                this._threadStartName = value;
            },
            enumerable: true,
            configurable: true
        });
        ThreadState.prototype.getThreadStack = function () {
            return this.callStack.map(function (localState) {
                return {
                    currentBreakpoint: localState.currentBreakpoint != null ? localState.currentBreakpoint.toString(true) : null,
                    previousBreakpoint: localState.previousBreakpoint != null ? localState.previousBreakpoint.toString(true) : null,
                    breakpointType: localState.breakpointType != null ? localState.breakpointType : RuntimeDebuggerAPI_1.BreakpointType.Normal,
                    extraInfo: localState.extraInfo,
                    elementKey: localState.elementKey != null ? localState.elementKey.toString(true) : null,
                    elementName: localState.elementName,
                    elementType: localState.elementType,
                    functionLeft: localState.functionLeft,
                    moduleName: localState.moduleName
                };
            });
        };
        return ThreadState;
    }());
    exports.ThreadState = ThreadState;
    function logMessage(message) {
        Logger.log("Debugger", message);
    }
    var Indexer = /^([0-9]+)$/;
    var UnsuportedIndexer = /\[[^\]]*[^0-9\]]+[^\]]*\]/;
    var FunctionReturnVariablePath = "$return";
    var DebuggerBase = (function () {
        function DebuggerBase() {
            this.isInSession = false;
            this.breakpoints = new Map();
            this.callContexts = new Map();
            this.initializationStatus = InitializationStatus.Unprepared;
            this._pauseOnAllExceptions = false;
            this.exceptionsMap = new Map();
            this.pausedOnAnException = false;
            this.allowedModules = new Map();
        }
        Object.defineProperty(DebuggerBase.prototype, "BreakpointType", {
            get: function () {
                return RuntimeDebuggerAPI_1.BreakpointType;
            },
            enumerable: true,
            configurable: true
        });
        DebuggerBase.prototype.isPausedOnException = function () {
            return this.pausedOnAnException;
        };
        Object.defineProperty(DebuggerBase.prototype, "version", {
            get: function () {
                return 3;
            },
            enumerable: true,
            configurable: true
        });
        DebuggerBase.prototype.startSession = function () {
            if (this.isInSession) {
                logMessage("Debugger is already in session");
                return;
            }
            if (this.pendingInitializationHandler) {
                this.initializationStatus = InitializationStatus.Prepared;
                this.pendingInitializationHandler();
                this.pendingInitializationHandler = null;
            }
            this.isInSession = true;
        };
        DebuggerBase.prototype.endSession = function () {
            if (!this.isInSession) {
                logMessage("Can't end an unexisting session");
                return;
            }
            this.isInSession = false;
        };
        DebuggerBase.prototype.addBreakpoint = function (breakpointId) {
            if (BreakpointId.parse(breakpointId) === null) {
                logMessage("Cannot convert '" + breakpointId + "' to a BreakpointId");
                return;
            }
            if (this.breakpoints.get(breakpointId)) {
                logMessage("Breakpoint with id '" + breakpointId + "' already registered");
                return;
            }
            this.breakpoints.set(breakpointId, true);
        };
        DebuggerBase.prototype.addBreakpoints = function (breakpointIds) {
            var _this = this;
            breakpointIds.forEach(function (bi) { return _this.addBreakpoint(bi); });
        };
        DebuggerBase.prototype.allowBreakpointsFromModule = function (key) {
            if (this.allowedModules.get(key)) {
                logMessage("Module with key '" + key + "' is already allowed");
                return;
            }
            this.allowedModules.set(key, true);
        };
        DebuggerBase.prototype.removeBreakpoint = function (breakpointId) {
            if (BreakpointId.parse(breakpointId) === null) {
                logMessage("Cannot convert '" + breakpointId + "' to a BreakpointId");
                return;
            }
            if (!this.breakpoints.delete(breakpointId)) {
                logMessage("Breakpoint with id '" + breakpointId + "'  isn't registered");
            }
        };
        DebuggerBase.prototype.clearBreakpoints = function () {
            this.breakpoints.clear();
        };
        DebuggerBase.prototype.push = function (breakpointIdStr, moduleName, elementName, elementType, callContextId, varBag) {
            if (!this.isInSession) {
                return;
            }
            var breakpointId = BreakpointId.parse(breakpointIdStr);
            if (!breakpointId) {
                logMessage("Error when parsing breakpointId '" + breakpointIdStr + "'");
                return;
            }
            var threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                threadState = new ThreadState();
                this.callContexts.set(callContextId, threadState);
            }
            threadState.pushCallOnStack(breakpointId, moduleName, elementName, elementType, varBag);
        };
        DebuggerBase.prototype.pop = function (breakpointIdStr, callContextId) {
            if (!this.isInSession) {
                return;
            }
            var breakpointId = BreakpointId.parse(breakpointIdStr);
            if (!breakpointId) {
                logMessage("Error when parsing breakpointId '" + breakpointIdStr + "'");
                return;
            }
            var threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                logMessage("There is no action to end to callContextId '" + callContextId.toString() + "'");
                return;
            }
            var lastVal = threadState.peekLastCallOnStack();
            if (!lastVal.elementKey.equals(breakpointId)) {
                logMessage("Action to end didn't match to current running action. Running action key: '" + lastVal.elementKey.toString() + "', tried to end: '" + breakpointId.toString() + "'");
                return;
            }
            threadState.popCallOnStack();
            if (threadState.stackLevel <= 0) {
                this.callContexts.delete(callContextId);
                this.exceptionsMap.delete(callContextId);
            }
        };
        DebuggerBase.prototype.stepInto = function (callContextId) {
            this.fillCommandByCallContextId(callContextId, CommandType.StepInto);
        };
        DebuggerBase.prototype.stepOver = function (callContextId) {
            this.fillCommandByCallContextId(callContextId, CommandType.StepOver);
        };
        DebuggerBase.prototype.stepOut = function (callContextId) {
            this.fillCommandByCallContextId(callContextId, CommandType.StepOut);
        };
        DebuggerBase.prototype.continue = function (callContextId) {
            this.fillCommandByCallContextId(callContextId, CommandType.Continue);
        };
        DebuggerBase.prototype.continueToHere = function (breakpointIdStr, callContextId) {
            var breakpointId = BreakpointId.parse(breakpointIdStr);
            if (!breakpointId) {
                logMessage("Error when parsing breakpointId '" + breakpointIdStr + "'");
                return;
            }
            this.fillCommandByCallContextId(callContextId, CommandType.ContinueToHere);
            var threadState = this.callContexts.get(callContextId);
            threadState.continueToBreakpoint = breakpointId;
        };
        DebuggerBase.prototype.pauseOnAllExceptions = function (isEnabled) {
            this._pauseOnAllExceptions = isEnabled;
        };
        DebuggerBase.prototype.fillCommandByCallContextId = function (callContextId, commandType) {
            if (!this.isInSession) {
                logMessage("Cannot preform debug actions out of a session context");
                return;
            }
            var threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                logMessage("No match for callContextId '" + callContextId + "'");
                return;
            }
            threadState.command.commandType = commandType;
            threadState.command.stackLevel = threadState.stackLevel;
        };
        DebuggerBase.prototype.handleFunctionCall = function (functionCaller, resultType, callContextId) {
            var value = functionCaller();
            if (!this.isInSession) {
                return value;
            }
            var threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                logMessage("There is no callContext registered with Id '" + callContextId + "'");
                return value;
            }
            var localState = threadState.getCallOnStack(threadState.stackLevel - 1);
            var breakpoint = localState.currentBreakpoint || localState.elementKey;
            this.handleBreakpoint(breakpoint.toString(true), callContextId, RuntimeDebuggerAPI_1.BreakpointType.AtFunctionReturn, DebuggerDataConverter.to(value, localState.varBag.callContext, null, null, resultType));
            return value;
        };
        DebuggerBase.prototype.handleBreakpoint = function (breakpointIdStr, callContextId, breakpointType, extraInfo) {
            if (breakpointType === void 0) { breakpointType = RuntimeDebuggerAPI_1.BreakpointType.Normal; }
            if (!this.isInSession) {
                return true;
            }
            var breakpointId = BreakpointId.parse(breakpointIdStr);
            if (!breakpointId) {
                logMessage("Error when parsing breakpointId '" + breakpointIdStr + "'");
                return true;
            }
            var threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                logMessage("Trying to handle breakpoint with id '" + breakpointIdStr + "', but there is no callContext registered with Id '" + callContextId + "'");
                return true;
            }
            threadState.refreshLastCallOnStack(breakpointId, breakpointType, extraInfo);
            if (!this.allowedModules.get(breakpointId.moduleKey)) {
                Logger.trace("Debugger", "Skipping breakpoint '" + breakpointIdStr + "' because breakpoints from module with key '" + breakpointId.moduleKey + "' are to be ignored.");
                return true;
            }
            if (threadState.stopImmediately || (this.breakpoints.get(breakpointIdStr) && threadState.command.commandType !== CommandType.ContinueToHere && breakpointType === RuntimeDebuggerAPI_1.BreakpointType.Normal)) {
                threadState.stopImmediately = false;
                this.resetStateAndCallDebugger(threadState, callContextId);
                return true;
            }
            switch (threadState.command.commandType) {
                case CommandType.StepInto:
                    this.resetStateAndCallDebugger(threadState, callContextId);
                    break;
                case CommandType.StepOut:
                    if (threadState.stackLevel < threadState.command.stackLevel) {
                        this.resetStateAndCallDebugger(threadState, callContextId);
                    }
                    break;
                case CommandType.StepOver:
                    if (threadState.stackLevel <= threadState.command.stackLevel && breakpointType === RuntimeDebuggerAPI_1.BreakpointType.Normal) {
                        this.resetStateAndCallDebugger(threadState, callContextId);
                    }
                    break;
                case CommandType.ContinueToHere:
                    if (breakpointId.equals(threadState.continueToBreakpoint) && breakpointType === RuntimeDebuggerAPI_1.BreakpointType.Normal) {
                        threadState.continueToBreakpoint = undefined;
                        this.resetStateAndCallDebugger(threadState, callContextId);
                    }
                    break;
                default:
                    break;
            }
            return true;
        };
        DebuggerBase.prototype.resetStateAndCallDebugger = function (threadState, callContextId) {
            threadState.command.resetCommandState();
            this.callDebugger(callContextId);
        };
        DebuggerBase.prototype.handleException = function (error, callContextId) {
            if (!this.isInSession) {
                return;
            }
            if (Exceptions.isSystem(error)) {
                return;
            }
            var threadState = this.callContexts.get(callContextId);
            var errorMessage = Exceptions.getMessage(error);
            if (!threadState) {
                logMessage("Trying to handle Exception with message '" + errorMessage + "', but there is no callContext registered with Id '" + callContextId + "'");
                return;
            }
            var registeredError = this.exceptionsMap.get(callContextId);
            if (error === registeredError) {
                return;
            }
            this.exceptionsMap.set(callContextId, error);
            if (this._pauseOnAllExceptions) {
                this.pausedOnAnException = true;
                try {
                    this.callDebugger(callContextId);
                }
                finally {
                    this.pausedOnAnException = false;
                }
            }
        };
        DebuggerBase.prototype.getExceptionMessage = function (callContextId) {
            var threadState = this.getThreadState(callContextId);
            if (!threadState) {
                return;
            }
            var exception = this.exceptionsMap.get(callContextId);
            if (exception === undefined) {
                logMessage("There is no Exception associated to callContext with Id '" + callContextId + "'");
                return;
            }
            return Exceptions.getMessage(exception);
        };
        DebuggerBase.prototype.getThreadState = function (callContextId) {
            if (!this.isInSession) {
                logMessage("Cannot perform debug actions out of a session context");
                return;
            }
            var threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                logMessage("There is no callContext registered with Id '" + callContextId + "'");
                return;
            }
            return threadState;
        };
        DebuggerBase.prototype.getThreadStack = function (callContextId) {
            var threadState = this.getThreadState(callContextId);
            if (threadState) {
                return threadState.getThreadStack();
            }
        };
        DebuggerBase.prototype.parse = function (breakpointIdStr) {
            return BreakpointId.parse(breakpointIdStr);
        };
        DebuggerBase.prototype.initialize = function (waitForClient) {
            var _this = this;
            switch (this.initializationStatus) {
                case InitializationStatus.WaitingForClient:
                    return Promise.reject("Debugger already waiting for client initialization");
                case InitializationStatus.Prepared:
                    return Promise.reject("Debugger already initialized");
                default:
                    break;
            }
            if (waitForClient === undefined) {
                waitForClient = !!Navigation.getSearchParameterValue("_waitForClient");
            }
            return new Promise(function (resolve, reject) {
                if (waitForClient && !_this.isInSession) {
                    _this.initializationStatus = InitializationStatus.WaitingForClient;
                    _this.pendingInitializationHandler = resolve;
                }
                else {
                    _this.initializationStatus = InitializationStatus.Prepared;
                    resolve();
                }
            });
        };
        DebuggerBase.prototype.registerMetaInfo = function (variablesMapping) {
            if (!this.metaInfoMap) {
                this.metaInfoMap = new Map();
            }
            for (var variableKey in variablesMapping) {
                if (variablesMapping.hasOwnProperty(variableKey) && !this.metaInfoMap.get(variableKey)) {
                    this.metaInfoMap.set(variableKey, variablesMapping[variableKey]);
                }
            }
        };
        DebuggerBase.prototype.getRuntimeExpression = function (variableKey, actionKey) {
            if (!this.metaInfoMap) {
                logMessage("MetaInfo not registered yet.");
                return;
            }
            var runtimeVariable = this.metaInfoMap.get(variableKey);
            if (!runtimeVariable) {
                logMessage("There is no mapping defined for variable with the key '" + variableKey + "', that was evaluated in the context of the action with the key '" + actionKey + "'.");
                return;
            }
            return runtimeVariable;
        };
        DebuggerBase.prototype.innerEvaluateVariable = function (callContextId, stackLevel, actionKey, variableKey) {
            var threadState = this.getThreadState(callContextId);
            if (!threadState) {
                return;
            }
            var localState = threadState.getCallOnStack(stackLevel);
            if (!localState) {
                return;
            }
            var runtimeVariable = this.getRuntimeExpression(variableKey, actionKey);
            if (!runtimeVariable) {
                logMessage("Failed to get runtime variable expression. CallContextId '" + callContextId + "', stackLevel '" + stackLevel + "'");
                return;
            }
            var result = undefined;
            try {
                result = runtimeVariable.getter(localState.varBag, localState.varBag.idService);
            }
            catch (e) {
            }
            finally {
                if (result === undefined) {
                    logMessage("Couldn't evaluate variable with key '" + variableKey + "', that was evaluated in the context of the action with the key '" + actionKey + "' at stack level '" + stackLevel + "' of callContextId '" + callContextId + "'.");
                    return;
                }
            }
            return result;
        };
        DebuggerBase.prototype.splitPath = function (path) {
            if (UnsuportedIndexer.test(path)) {
                return undefined;
            }
            return !!path ? path.split(/[.\[\]]/).filter(function (s) { return s !== ""; }).slice(1) : undefined;
        };
        DebuggerBase.prototype.evaluateVariable = function (callContextId, stackLevel, actionKey, variableKey, path, depth) {
            if (variableKey === "" && path === FunctionReturnVariablePath) {
                var threadState_1 = this.getThreadState(callContextId);
                if (!threadState_1) {
                    return;
                }
                var localState_1 = threadState_1.getCallOnStack(stackLevel);
                if (!localState_1) {
                    return;
                }
                return localState_1.extraInfo;
            }
            var result = this.innerEvaluateVariable(callContextId, stackLevel, actionKey, variableKey);
            if (result === undefined) {
                return;
            }
            if (UnsuportedIndexer.test(path)) {
                return undefined;
            }
            var threadState = this.callContexts.get(callContextId);
            var localState = threadState.getCallOnStack(stackLevel);
            var runtimeVariable = this.getRuntimeExpression(variableKey, actionKey);
            var pathArray = this.splitPath(path);
            return DebuggerDataConverter.to(result, localState.varBag.callContext, pathArray, depth, runtimeVariable.dataType);
        };
        DebuggerBase.prototype.getRequestHeaders = function (callContextId) {
            if (!this.isInSession) {
                return;
            }
            var threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                logMessage("There is no callContext registered with Id '" + callContextId + "'");
                return;
            }
            var headers = {};
            headers[HEADER_KEYS.CallContextId] = String(callContextId);
            var cmd = threadState.command;
            if (cmd && cmd.commandType === CommandType.StepInto) {
                headers[HEADER_KEYS.DebugStop] = "true";
            }
            else if (threadState.continueToBreakpoint && cmd.commandType === CommandType.ContinueToHere) {
                headers[HEADER_KEYS.DebugBreakpointId] = String(threadState.continueToBreakpoint);
            }
            return headers;
        };
        DebuggerBase.prototype.processResponseHeaders = function (callContextId, headers) {
            if (!this.isInSession) {
                return;
            }
            var threadState = this.getThreadState(callContextId);
            if (headers && threadState) {
                if ((headers[HEADER_KEYS.DebugStop] || "").toLowerCase() === "true") {
                    threadState.stopImmediately = true;
                }
                else if (headers[HEADER_KEYS.DebugBreakpointId]) {
                    threadState.command.commandType = CommandType.ContinueToHere;
                    threadState.continueToBreakpoint = BreakpointId.parse(headers[HEADER_KEYS.DebugBreakpointId]);
                }
                else if (threadState.command.commandType === CommandType.StepInto) {
                    threadState.command.commandType = CommandType.Continue;
                }
            }
        };
        DebuggerBase.prototype.getThreadStartName = function (callContextId) {
            return this.getThreadState(callContextId).threadStartName;
        };
        DebuggerBase.prototype.setThreadStartName = function (callContextId, threadStartName) {
            if (!this.isInSession) {
                return;
            }
            if (!this.callContexts) {
                logMessage("No call context dictionary initialized yet");
                return;
            }
            if (!this.callContexts.get(callContextId)) {
                logMessage("No thread state for this context id");
                return;
            }
            this.callContexts.get(callContextId).threadStartName = threadStartName;
        };
        return DebuggerBase;
    }());
    exports.DebuggerBase = DebuggerBase;
    var RuntimeDebugger = (function (_super) {
        __extends(RuntimeDebugger, _super);
        function RuntimeDebugger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RuntimeDebugger.prototype.callDebugger = function (callContextId) {
            debugger;
        };
        return RuntimeDebugger;
    }(DebuggerBase));
    var DebuggerDataConverter;
    (function (DebuggerDataConverter) {
        var DataFetchStatusProp = "DataFetchStatus";
        var IsDataFetchedProp = "IsDataFetched";
        var HasFetchErrorProp = "HasFetchError";
        function to(value, callContext, path, depth, dataType) {
            if (depth === void 0) { depth = -1; }
            var nextDepth = Math.max(-1, depth - 1);
            if (value instanceof DataTypes_1.GenericRecord) {
                var record = value;
                var attributes = record.getAttributes();
                if (path && path.length > 0) {
                    var currentPath_1 = path[0];
                    path = path.slice(1);
                    if (value instanceof Model_1.DataSourceRecord) {
                        var dataSource = value;
                        if (currentPath_1 === "HasFetchError") {
                            return to(dataSource.hasFetchErrorAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                        }
                        else if (currentPath_1 === "IsDataFetched") {
                            return to(dataSource.isDataFetchedAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                        }
                    }
                    attributes = attributes.filter(function (attr) { return attr.name === currentPath_1; });
                    if (attributes.length === 0) {
                        logMessage("No attribute matching the given path '" + currentPath_1 + "'.");
                        return;
                    }
                    else {
                        var attr = attributes[0];
                        return to(record[attr.attrName], callContext, path, depth, attr.dataType);
                    }
                }
                if (depth === 0) {
                    return buildValueTypeObject(null, DataTypes_1.DataTypes.Record);
                }
                var result = {};
                for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                    var attr = attributes_1[_i];
                    result[attr.name] = to(record[attr.attrName], callContext, path, nextDepth, attr.dataType);
                }
                if (value instanceof Model_1.DataSourceRecord) {
                    var dataSource = value;
                    delete result[DataFetchStatusProp];
                    result[IsDataFetchedProp] = to(dataSource.isDataFetchedAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                    result[HasFetchErrorProp] = to(dataSource.hasFetchErrorAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                }
                return buildValueTypeObject(result, DataTypes_1.DataTypes.Record);
            }
            else if (value instanceof DataTypes_1.List) {
                var list = value;
                var listItemType = undefined;
                var getItemTypeFunc = list.constructor.getItemType;
                if (getItemTypeFunc) {
                    listItemType = list.constructor.getItemType();
                }
                var iterationContext = callContext.iterationContext;
                var result = void 0;
                var rowNumber = iterationContext.getCurrentRowNumber(list);
                if (path && path.length > 0) {
                    var currentPath = path[0];
                    path = path.slice(1);
                    if (currentPath === "CurrentRowNumber") {
                        return to(rowNumber, callContext, path, depth, DataTypes_1.DataTypes.Integer);
                    }
                    else if (currentPath === "Current") {
                        return to(list.isEmpty ? list.emptyListItem : list.getItem(rowNumber), callContext, path, depth, listItemType);
                    }
                    else if (currentPath === "Empty") {
                        return to(list.isEmpty, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                    }
                    else if (currentPath === "Length") {
                        return to(list.length, callContext, path, depth, DataTypes_1.DataTypes.Integer);
                    }
                    else {
                        var indexerResult = Indexer.exec(currentPath);
                        if (indexerResult) {
                            var resultInNumber = parseInt(indexerResult[1], 10);
                            if (resultInNumber >= 0 && resultInNumber < list.length) {
                                return to(list.getItem(resultInNumber), callContext, path, depth, listItemType);
                            }
                            logMessage("Index out of bounds '" + resultInNumber + "'.");
                            return;
                        }
                        else {
                            logMessage("No '" + currentPath + "' attribute on Type 'List'.");
                            return;
                        }
                    }
                }
                if (depth === 0) {
                    return buildValueTypeObject(null, DataTypes_1.DataTypes.RecordList);
                }
                result = {
                    CurrentRowNumber: to(rowNumber, callContext, path, nextDepth, DataTypes_1.DataTypes.Integer),
                    Current: to(list.isEmpty ? list.emptyListItem : list.getItem(rowNumber), callContext, path, nextDepth, listItemType),
                    Empty: to(list.isEmpty, callContext, path, nextDepth, DataTypes_1.DataTypes.Boolean),
                    Length: to(list.length, callContext, path, nextDepth, DataTypes_1.DataTypes.Integer)
                };
                for (var i = 0; i < list.length; i++) {
                    result["[" + i + "]"] = to(list.getItem(i), callContext, path, nextDepth, listItemType);
                }
                return buildValueTypeObject(result, DataTypes_1.DataTypes.RecordList);
            }
            else if (value instanceof Model_1.WidgetRecord) {
                if (depth === 0) {
                    return buildValueTypeObject(null, DataTypes_1.DataTypes.Record);
                }
                var record = value;
                if (path && path.length > 0) {
                    var currentPath = path[0];
                    path = path.slice(1);
                    if (currentPath === "Id") {
                        return to(record.idAttr, callContext, path, depth, DataTypes_1.DataTypes.Text);
                    }
                    else if (record instanceof Model_1.ValidationWidgetRecord) {
                        if (currentPath === "Valid") {
                            return to(record.validAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                        }
                        else if (currentPath === "ValidationMessage") {
                            return to(record.validationMessageAttr, callContext, path, depth, DataTypes_1.DataTypes.Text);
                        }
                    }
                    logMessage("No attribute matching the given path '" + currentPath + "'.");
                    return;
                }
                var result = {
                    Id: to(record.idAttr, callContext, path, nextDepth, DataTypes_1.DataTypes.Text)
                };
                if (record instanceof Model_1.ValidationWidgetRecord) {
                    result.Valid = to(record.validAttr, callContext, path, nextDepth, DataTypes_1.DataTypes.Boolean);
                    result.ValidationMessage = to(record.validationMessageAttr, callContext, path, nextDepth, DataTypes_1.DataTypes.Text);
                }
                return buildValueTypeObject(result, DataTypes_1.DataTypes.Record);
            }
            else if (dataType !== undefined) {
                if (path && path.length > 0) {
                    logMessage("Cannot perform a inner evaluation to a Basic Type. Trying to evaluate '" + path[0] + "' for a variable of type '" + DataTypes_1.DataTypes[dataType] + "'.");
                    return;
                }
                return basicTypeToDebuggerData(value, dataType);
            }
            else {
                logMessage("Variable Type didn't match any case. " + typeof value);
                return;
            }
        }
        DebuggerDataConverter.to = to;
        function basicTypeToDebuggerData(value, dataType) {
            switch (dataType) {
                case DataTypes_1.DataTypes.Integer:
                case DataTypes_1.DataTypes.Text:
                case DataTypes_1.DataTypes.PhoneNumber:
                case DataTypes_1.DataTypes.Email:
                case DataTypes_1.DataTypes.Boolean:
                    return buildValueTypeObject(value, dataType);
                case DataTypes_1.DataTypes.LongInteger:
                case DataTypes_1.DataTypes.Decimal:
                case DataTypes_1.DataTypes.Currency:
                    return buildValueTypeObject(value.toString(), dataType);
                case DataTypes_1.DataTypes.Date:
                    return buildValueTypeObject(value.toISODate(), dataType);
                case DataTypes_1.DataTypes.DateTime:
                    return buildValueTypeObject(value.toString(), dataType);
                case DataTypes_1.DataTypes.Time:
                    return buildValueTypeObject(value.toISOTime(), dataType);
                case DataTypes_1.DataTypes.BinaryData:
                    return buildValueTypeObject(value.length, dataType);
                case DataTypes_1.DataTypes.Object:
                    return buildValueTypeObject(null, dataType);
                case DataTypes_1.DataTypes.Record:
                    logMessage("Record is not a basic type");
                    return;
                case DataTypes_1.DataTypes.RecordList:
                    logMessage("RecordList is not a basic type");
                    return;
                default:
                    logMessage("Unknown data type " + dataType);
                    return;
            }
        }
        function buildValueTypeObject(value, dataType) {
            return {
                value: value,
                type: DataTypes_1.DataTypes[dataType]
            };
        }
    })(DebuggerDataConverter = exports.DebuggerDataConverter || (exports.DebuggerDataConverter = {}));
    var globalObj = typeof window !== "undefined" ? window : global;
    globalObj.OutSystemsDebugger = new RuntimeDebugger();
});

