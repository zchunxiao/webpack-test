/******/ var __webpack_modules__ = ({

/***/ "./src/components/MyComponents.js":
/*!****************************************!*\
  !*** ./src/components/MyComponents.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MyComponent = () => {
  return 'Hello from MyComponent!';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComponent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MyComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/MyComponents */ "./src/components/MyComponents.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/helper */ "./src/utils/helper.js");


const app = document.getElementById('app');
app.innerHTML = `<h1>${(0,_components_MyComponents__WEBPACK_IMPORTED_MODULE_0__["default"])()}</h1>`;
const helperText = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.someHelper)();
console.log(helperText);

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   someHelper: () => (/* binding */ someHelper)
/* harmony export */ });
const someHelper = () => {
  return 'This is a helper function!';
};

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	try {
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	} catch(e) {
/******/ 		module.error = e;
/******/ 		throw e;
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the module cache
/******/ __webpack_require__.c = __webpack_module_cache__;
/******/ 
/******/ // expose the module execution interceptor
/******/ __webpack_require__.i = [];
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hot module replacement */
/******/ (() => {
/******/ 	var currentModuleData = {};
/******/ 	var installedModules = __webpack_require__.c;
/******/ 	
/******/ 	// module and require creation
/******/ 	var currentChildModule;
/******/ 	var currentParents = [];
/******/ 	
/******/ 	// status
/******/ 	var registeredStatusHandlers = [];
/******/ 	var currentStatus = "idle";
/******/ 	
/******/ 	// while downloading
/******/ 	var blockingPromises = 0;
/******/ 	var blockingPromisesWaiting = [];
/******/ 	
/******/ 	// The update info
/******/ 	var currentUpdateApplyHandlers;
/******/ 	var queuedInvalidatedModules;
/******/ 	
/******/ 	__webpack_require__.hmrD = currentModuleData;
/******/ 	
/******/ 	__webpack_require__.i.push(function (options) {
/******/ 		var module = options.module;
/******/ 		var require = createRequire(options.require, options.id);
/******/ 		module.hot = createModuleHotObject(options.id, module);
/******/ 		module.parents = currentParents;
/******/ 		module.children = [];
/******/ 		currentParents = [];
/******/ 		options.require = require;
/******/ 	});
/******/ 	
/******/ 	__webpack_require__.hmrC = {};
/******/ 	__webpack_require__.hmrI = {};
/******/ 	
/******/ 	function createRequire(require, moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return require;
/******/ 		var fn = function (request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					var parents = installedModules[request].parents;
/******/ 					if (parents.indexOf(moduleId) === -1) {
/******/ 						parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					currentParents = [moduleId];
/******/ 					currentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				// eslint-disable-next-line no-console
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				currentParents = [];
/******/ 			}
/******/ 			return require(request);
/******/ 		};
/******/ 		var createPropertyDescriptor = function (name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function () {
/******/ 					return require[name];
/******/ 				},
/******/ 				set: function (value) {
/******/ 					require[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in require) {
/******/ 			if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function (chunkId, fetchPriority) {
/******/ 			return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function createModuleHotObject(moduleId, me) {
/******/ 		var _main = currentChildModule !== moduleId;
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_acceptedErrorHandlers: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: _main,
/******/ 			_requireSelf: function () {
/******/ 				currentParents = me.parents.slice();
/******/ 				currentChildModule = _main ? undefined : moduleId;
/******/ 				__webpack_require__(moduleId);
/******/ 			},
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function (dep, callback, errorHandler) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object" && dep !== null) {
/******/ 					for (var i = 0; i < dep.length; i++) {
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 					}
/******/ 				} else {
/******/ 					hot._acceptedDependencies[dep] = callback || function () {};
/******/ 					hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 				}
/******/ 			},
/******/ 			decline: function (dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object" && dep !== null)
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function (callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function (callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function (callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function () {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (currentStatus) {
/******/ 					case "idle":
/******/ 						currentUpdateApplyHandlers = [];
/******/ 						Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 							__webpack_require__.hmrI[key](
/******/ 								moduleId,
/******/ 								currentUpdateApplyHandlers
/******/ 							);
/******/ 						});
/******/ 						setStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 							__webpack_require__.hmrI[key](
/******/ 								moduleId,
/******/ 								currentUpdateApplyHandlers
/******/ 							);
/******/ 						});
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 							moduleId
/******/ 						);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function (l) {
/******/ 				if (!l) return currentStatus;
/******/ 				registeredStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function (l) {
/******/ 				registeredStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function (l) {
/******/ 				var idx = registeredStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// inherit from previous dispose call
/******/ 			data: currentModuleData[moduleId]
/******/ 		};
/******/ 		currentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	function setStatus(newStatus) {
/******/ 		currentStatus = newStatus;
/******/ 		var results = [];
/******/ 	
/******/ 		for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 			results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 	
/******/ 		return Promise.all(results).then(function () {});
/******/ 	}
/******/ 	
/******/ 	function unblock() {
/******/ 		if (--blockingPromises === 0) {
/******/ 			setStatus("ready").then(function () {
/******/ 				if (blockingPromises === 0) {
/******/ 					var list = blockingPromisesWaiting;
/******/ 					blockingPromisesWaiting = [];
/******/ 					for (var i = 0; i < list.length; i++) {
/******/ 						list[i]();
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function trackBlockingPromise(promise) {
/******/ 		switch (currentStatus) {
/******/ 			case "ready":
/******/ 				setStatus("prepare");
/******/ 			/* fallthrough */
/******/ 			case "prepare":
/******/ 				blockingPromises++;
/******/ 				promise.then(unblock, unblock);
/******/ 				return promise;
/******/ 			default:
/******/ 				return promise;
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function waitForBlockingPromises(fn) {
/******/ 		if (blockingPromises === 0) return fn();
/******/ 		return new Promise(function (resolve) {
/******/ 			blockingPromisesWaiting.push(function () {
/******/ 				resolve(fn());
/******/ 			});
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotCheck(applyOnUpdate) {
/******/ 		if (currentStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		return setStatus("check")
/******/ 			.then(__webpack_require__.hmrM)
/******/ 			.then(function (update) {
/******/ 				if (!update) {
/******/ 					return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 						function () {
/******/ 							return null;
/******/ 						}
/******/ 					);
/******/ 				}
/******/ 	
/******/ 				return setStatus("prepare").then(function () {
/******/ 					var updatedModules = [];
/******/ 					currentUpdateApplyHandlers = [];
/******/ 	
/******/ 					return Promise.all(
/******/ 						Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 							promises,
/******/ 							key
/******/ 						) {
/******/ 							__webpack_require__.hmrC[key](
/******/ 								update.c,
/******/ 								update.r,
/******/ 								update.m,
/******/ 								promises,
/******/ 								currentUpdateApplyHandlers,
/******/ 								updatedModules
/******/ 							);
/******/ 							return promises;
/******/ 						}, [])
/******/ 					).then(function () {
/******/ 						return waitForBlockingPromises(function () {
/******/ 							if (applyOnUpdate) {
/******/ 								return internalApply(applyOnUpdate);
/******/ 							}
/******/ 							return setStatus("ready").then(function () {
/******/ 								return updatedModules;
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if (currentStatus !== "ready") {
/******/ 			return Promise.resolve().then(function () {
/******/ 				throw new Error(
/******/ 					"apply() is only allowed in ready status (state: " +
/******/ 						currentStatus +
/******/ 						")"
/******/ 				);
/******/ 			});
/******/ 		}
/******/ 		return internalApply(options);
/******/ 	}
/******/ 	
/******/ 	function internalApply(options) {
/******/ 		options = options || {};
/******/ 	
/******/ 		applyInvalidatedModules();
/******/ 	
/******/ 		var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 			return handler(options);
/******/ 		});
/******/ 		currentUpdateApplyHandlers = undefined;
/******/ 	
/******/ 		var errors = results
/******/ 			.map(function (r) {
/******/ 				return r.error;
/******/ 			})
/******/ 			.filter(Boolean);
/******/ 	
/******/ 		if (errors.length > 0) {
/******/ 			return setStatus("abort").then(function () {
/******/ 				throw errors[0];
/******/ 			});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		var disposePromise = setStatus("dispose");
/******/ 	
/******/ 		results.forEach(function (result) {
/******/ 			if (result.dispose) result.dispose();
/******/ 		});
/******/ 	
/******/ 		// Now in "apply" phase
/******/ 		var applyPromise = setStatus("apply");
/******/ 	
/******/ 		var error;
/******/ 		var reportError = function (err) {
/******/ 			if (!error) error = err;
/******/ 		};
/******/ 	
/******/ 		var outdatedModules = [];
/******/ 		results.forEach(function (result) {
/******/ 			if (result.apply) {
/******/ 				var modules = result.apply(reportError);
/******/ 				if (modules) {
/******/ 					for (var i = 0; i < modules.length; i++) {
/******/ 						outdatedModules.push(modules[i]);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				return setStatus("fail").then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 	
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 	
/******/ 			return setStatus("idle").then(function () {
/******/ 				return outdatedModules;
/******/ 			});
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function applyInvalidatedModules() {
/******/ 		if (queuedInvalidatedModules) {
/******/ 			if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 			Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 				queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 					__webpack_require__.hmrI[key](
/******/ 						moduleId,
/******/ 						currentUpdateApplyHandlers
/******/ 					);
/******/ 				});
/******/ 			});
/******/ 			queuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 

//# sourceMappingURL=bundle.js.map