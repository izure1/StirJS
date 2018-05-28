/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Stir/Core.js":
/*!**************************!*\
  !*** ./src/Stir/Core.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _World = __webpack_require__(/*! ./World.js */ \"./src/Stir/World.js\");\n\nvar _World2 = _interopRequireDefault(_World);\n\nvar _StirObject = __webpack_require__(/*! ./StirObject.js */ \"./src/Stir/StirObject.js\");\n\nvar _StirObject2 = _interopRequireDefault(_StirObject);\n\nvar _StirObjectSession = __webpack_require__(/*! ./StirObjectSession.js */ \"./src/Stir/StirObjectSession.js\");\n\nvar _StirObjectSession2 = _interopRequireDefault(_StirObjectSession);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\r\n *  STIR SHORT CODE MEANING\r\n * \r\n *  u = Unique identifier = name\r\n *  w = World\r\n *  t = Target, iTem\r\n *  i = Index\r\n *  n = Number\r\n *  c = Context\r\n *  o = Option\r\n *  f = Function\r\n *  p = Property, Properties\r\n *  v = Value\r\n *  r = Return, Result\r\n * \r\n */\n\nwindow.stir = new _World2.default();\nwindow.STIR = {};\nwindow.STIR.classes = {};\nwindow.STIR.classes.StirObject = _StirObject2.default;\nwindow.STIR.classes.StirObjectSession = _StirObjectSession2.default;\nwindow.STIR.classes.World = _World2.default;\n\n//# sourceURL=webpack:///./src/Stir/Core.js?");

/***/ }),

/***/ "./src/Stir/Object/addClass.js":
/*!*************************************!*\
  !*** ./src/Stir/Object/addClass.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {String, Function} c\r\n * @returns {Boolean}\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = addClass;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction addClass(c) {\n\n    var r = void 0;\n    var t = void 0,\n        f = void 0;\n\n    if (typeof c === 'function') {\n        f = c;\n    }\n\n    r = [];\n    this.each(function () {\n\n        t = f ? f.call(this, this) : c;\n\n        c = this.className;\n        c += '';\n        c = c.split(' ');\n\n        t += '';\n        t = t.split(' ');\n\n        t = [].concat(_toConsumableArray(t), _toConsumableArray(c));\n        t = new Set(t);\n\n        t.delete('');\n\n        t = Array.from(t);\n\n        this.className = t.join(' ');\n    });\n\n    return this;\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/addClass.js?");

/***/ }),

/***/ "./src/Stir/Object/attr.js":
/*!*********************************!*\
  !*** ./src/Stir/Object/attr.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = attr;\n\nvar _arguments = __webpack_require__(/*! ../Utils/arguments.js */ \"./src/Stir/Utils/arguments.js\");\n\n/**\r\n * \r\n * @param {String, Object} o \r\n * @param {*} v \r\n */\nfunction attr(o, v) {\n\n  var t = void 0;\n  var r = void 0;\n\n  t = this;\n  r = _arguments.parseArguments.apply(t, arguments);\n\n  if (r.IS_GET) {\n    return r.VALUE;\n  }\n\n  this.each(function () {\n    _arguments.applyArguments.call(this, r.VALUE);\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/attr.js?");

/***/ }),

/***/ "./src/Stir/Object/create.js":
/*!***********************************!*\
  !*** ./src/Stir/Object/create.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = create;\n\nvar _getPropertiesProxy = __webpack_require__(/*! ./var/getPropertiesProxy.js */ \"./src/Stir/Object/var/getPropertiesProxy.js\");\n\nvar _getPropertiesProxy2 = _interopRequireDefault(_getPropertiesProxy);\n\nvar _proxyHandlerAttribute = __webpack_require__(/*! ./var/proxyHandler.attribute.js */ \"./src/Stir/Object/var/proxyHandler.attribute.js\");\n\nvar _proxyHandlerAttribute2 = _interopRequireDefault(_proxyHandlerAttribute);\n\nvar _Type = __webpack_require__(/*! ./var/Type.js */ \"./src/Stir/Object/var/Type.js\");\n\nvar _Type2 = _interopRequireDefault(_Type);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {Object} o \r\n */\nfunction create() {\n  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n\n    for (var _iterator = this.context[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var _t = _step.value;\n\n      if (_t.name !== this.name) continue;\n      throw 'Already exist identifier Object. Use another name instead.';\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  for (var p in _Type2.default) {\n    if (o[p]) continue;\n    throw _Type2.default[p].message;\n  }\n\n  var t = void 0,\n      r = void 0;\n  var w = void 0;\n\n  t = new window.STIR.classes.StirObject(this, o);\n  w = this.__system__.world;\n\n  // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.\n  // 이 프록시 객체가 world.objects 에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.\n\n  r = (0, _getPropertiesProxy2.default)(t, _proxyHandlerAttribute2.default);\n\n  w.objects.set(t.name, r);\n\n  return w.manager.getObjects(t.name);\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/create.js?");

/***/ }),

/***/ "./src/Stir/Object/css.js":
/*!********************************!*\
  !*** ./src/Stir/Object/css.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = css;\n\nvar _arguments = __webpack_require__(/*! ../Utils/arguments.js */ \"./src/Stir/Utils/arguments.js\");\n\n/**\r\n * \r\n * @param {String, Object} o \r\n * @param {*} v \r\n */\nfunction css(o, v) {\n\n  var t = void 0;\n  var r = void 0;\n\n  t = this.get();\n  t = t.style;\n  r = _arguments.parseArguments.apply(t, arguments);\n\n  if (r.IS_GET) {\n    return r.VALUE;\n  }\n\n  this.each(function () {\n    _arguments.applyArguments.call(this.style, r.VALUE);\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/css.js?");

/***/ }),

/***/ "./src/Stir/Object/each.js":
/*!*********************************!*\
  !*** ./src/Stir/Object/each.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = each;\n\nvar _context = __webpack_require__(/*! ../Utils/context.js */ \"./src/Stir/Utils/context.js\");\n\n/**\r\n * \r\n * @param {Function} f\r\n */\nfunction each() {\n  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function job() {};\n\n\n  var c = (0, _context.getContext)(this.context);\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = c[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var t = _step.value;\n      f.call(t, t);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/each.js?");

/***/ }),

/***/ "./src/Stir/Object/findClass.js":
/*!**************************************!*\
  !*** ./src/Stir/Object/findClass.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {String, Object} c\r\n * @param {*} StirObjectSession\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = findClass;\nfunction findClass(c) {\n\n  var r = void 0;\n\n  r = [];\n  this.each(function () {\n\n    if (this.hasClass(c)) r.push(this);\n  });\n\n  return new window.STIR.classes.StirObjectSession(this.name, r, this.world);\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/findClass.js?");

/***/ }),

/***/ "./src/Stir/Object/get.js":
/*!********************************!*\
  !*** ./src/Stir/Object/get.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = get;\n\nvar _context = __webpack_require__(/*! ../Utils/context.js */ \"./src/Stir/Utils/context.js\");\n\n/**\r\n * \r\n * @param {Number} i\r\n */\nfunction get() {\n  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n\n  var t = void 0;\n\n  t = (0, _context.getContext)(this.context);\n  t = t.values();\n  t = Array.from(t);\n\n  if (n < 0) {\n    n = t.length + n;\n  }\n\n  return t[n];\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/get.js?");

/***/ }),

/***/ "./src/Stir/Object/hasClass.js":
/*!*************************************!*\
  !*** ./src/Stir/Object/hasClass.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {String, Function} c\r\n * @returns {Boolean}\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = hasClass;\nfunction hasClass(c) {\n\n  var r = void 0;\n  var t = void 0,\n      f = void 0;\n\n  r = 0;\n\n  if (typeof c === 'function') {\n    f = c;\n  }\n\n  this.each(function () {\n\n    t = f ? f.call(this, this) : c;\n\n    c = this.className;\n    c += '';\n    c = c.split(' ');\n\n    // if it doesn't has same classname\n    if (c.indexOf(t) === -1) {\n      r++;\n    }\n  });\n\n  return !r;\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/hasClass.js?");

/***/ }),

/***/ "./src/Stir/Object/notClass.js":
/*!*************************************!*\
  !*** ./src/Stir/Object/notClass.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {String, Object} c\r\n * @param {*} StirObjectSession\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = notClass;\nfunction notClass(c) {\n\n  var r = void 0;\n\n  r = [];\n  this.each(function () {\n\n    if (!this.hasClass(c)) r.push(this);\n  });\n\n  return new window.STIR.classes.StirObjectSession(this.name, r, this.world);\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/notClass.js?");

/***/ }),

/***/ "./src/Stir/Object/removeClass.js":
/*!****************************************!*\
  !*** ./src/Stir/Object/removeClass.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {String, Function} c\r\n * @returns {Boolean}\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = removeClass;\nfunction removeClass(c) {\n\n    var r = void 0;\n    var t = void 0,\n        f = void 0;\n\n    if (typeof c === 'function') {\n        f = c;\n    }\n\n    r = [];\n    this.each(function () {\n\n        t = f ? f.call(this, this) : c;\n\n        c = this.className;\n        c += '';\n        c = c.split(' ');\n\n        t += '';\n        t = t.split(' ');\n\n        c = c.filter(function (s) {\n            return t.indexOf(s) === -1;\n        });\n        t = new Set(c);\n\n        t.delete('');\n\n        t = Array.from(t);\n\n        this.className = t.join(' ');\n    });\n\n    return this;\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/removeClass.js?");

/***/ }),

/***/ "./src/Stir/Object/toggleClass.js":
/*!****************************************!*\
  !*** ./src/Stir/Object/toggleClass.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {String, Function} c\r\n * @returns {Boolean}\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = toggleClass;\nfunction toggleClass(c) {\n\n  var r = void 0;\n  var t = void 0,\n      f = void 0;\n\n  if (typeof c === 'function') {\n    f = c;\n  }\n\n  r = [];\n  this.each(function () {\n\n    t = f ? f.call(this, this) : c;\n    t = t.split(' ');\n\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var u = _step.value;\n\n\n        if (this.hasClass(u)) this.removeClass(u);else this.addClass(u);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/toggleClass.js?");

/***/ }),

/***/ "./src/Stir/Object/var/DEFAULT_ATTRIBUTE.js":
/*!**************************************************!*\
  !*** ./src/Stir/Object/var/DEFAULT_ATTRIBUTE.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  type: null,\n  src: null,\n  loop: null,\n  static: false,\n  timescale: 1,\n  className: '',\n  text: '',\n  scene: 'main'\n\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/var/DEFAULT_ATTRIBUTE.js?");

/***/ }),

/***/ "./src/Stir/Object/var/DEFAULT_STYLE.js":
/*!**********************************************!*\
  !*** ./src/Stir/Object/var/DEFAULT_STYLE.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  fontSize: 10,\n  fontFamily: 'arial, sans-serif',\n  fontWeight: 'normal',\n  fontStyle: 'normal',\n  textAlign: 'left',\n  width: 10,\n  height: 10,\n  color: 'black',\n  borderWidth: 0,\n  borderColor: 'black',\n  shadowColor: 'black',\n  shadowBlur: 0,\n  shadowOffsetX: 0,\n  shadowOffsetY: 0,\n  position: 'absolute',\n  bottom: 0,\n  left: 0,\n  perspective: 100,\n  opacity: 1,\n  rotate: 0,\n  scale: 1,\n  blur: 0,\n  gradientDirection: 0,\n  gradientType: 'direction',\n  gradient: {},\n  pointerEvents: true,\n  display: 'block',\n  lineHeight: '100%',\n  verticalAlign: 'top',\n  zIndex: 0\n\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/var/DEFAULT_STYLE.js?");

/***/ }),

/***/ "./src/Stir/Object/var/INIT_ATTRIBUTE.js":
/*!***********************************************!*\
  !*** ./src/Stir/Object/var/INIT_ATTRIBUTE.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  sprite: {\n    loop: true\n  },\n\n  text: {\n    text: 'Hello'\n  }\n\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/var/INIT_ATTRIBUTE.js?");

/***/ }),

/***/ "./src/Stir/Object/var/INIT_STYLE.js":
/*!*******************************************!*\
  !*** ./src/Stir/Object/var/INIT_STYLE.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  camera: {\n    width: 0,\n    height: 0,\n    perspective: 0\n  }\n\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/var/INIT_STYLE.js?");

/***/ }),

/***/ "./src/Stir/Object/var/Type.js":
/*!*************************************!*\
  !*** ./src/Stir/Object/var/Type.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  type: {\n    lists: ['camera', 'square', 'circle', 'text', 'image', 'sprite', 'video'],\n    get message() {\n      return '\\'type\\' option is must be require. select one from next: ' + this.lists.join(', ');\n    }\n  }\n\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/var/Type.js?");

/***/ }),

/***/ "./src/Stir/Object/var/getPropertiesProxy.js":
/*!***************************************************!*\
  !*** ./src/Stir/Object/var/getPropertiesProxy.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {StirObject} t\r\n * target to observed object\r\n * @param {Object} h\r\n * namespace object for handler functions\r\n * @returns {Proxy} \r\n * \r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getPropertiesProxy;\nfunction getPropertiesProxy(t, h) {\n\n  return new Proxy(t, {\n    get: function get(t, p) {\n      return t[p];\n    },\n    set: function set(t, p, v) {\n      t[p] = h[p] ? h[p].call(t, v) : v;\n      return true;\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/Stir/Object/var/getPropertiesProxy.js?");

/***/ }),

/***/ "./src/Stir/Object/var/proxyHandler.attribute.js":
/*!*******************************************************!*\
  !*** ./src/Stir/Object/var/proxyHandler.attribute.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar handler = void 0;\n\nhandler = {};\n\nexports.default = handler;\n\n//# sourceURL=webpack:///./src/Stir/Object/var/proxyHandler.attribute.js?");

/***/ }),

/***/ "./src/Stir/Object/var/proxyHandler.style.js":
/*!***************************************************!*\
  !*** ./src/Stir/Object/var/proxyHandler.style.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar handler = void 0;\n\nhandler = {};\n\nexports.default = handler;\n\n//# sourceURL=webpack:///./src/Stir/Object/var/proxyHandler.style.js?");

/***/ }),

/***/ "./src/Stir/StirObject.js":
/*!********************************!*\
  !*** ./src/Stir/StirObject.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _StirObjectSession2 = __webpack_require__(/*! ./StirObjectSession.js */ \"./src/Stir/StirObjectSession.js\");\n\nvar _StirObjectSession3 = _interopRequireDefault(_StirObjectSession2);\n\nvar _DEFAULT_STYLE = __webpack_require__(/*! ./Object/var/DEFAULT_STYLE.js */ \"./src/Stir/Object/var/DEFAULT_STYLE.js\");\n\nvar _DEFAULT_STYLE2 = _interopRequireDefault(_DEFAULT_STYLE);\n\nvar _DEFAULT_ATTRIBUTE = __webpack_require__(/*! ./Object/var/DEFAULT_ATTRIBUTE.js */ \"./src/Stir/Object/var/DEFAULT_ATTRIBUTE.js\");\n\nvar _DEFAULT_ATTRIBUTE2 = _interopRequireDefault(_DEFAULT_ATTRIBUTE);\n\nvar _INIT_STYLE = __webpack_require__(/*! ./Object/var/INIT_STYLE.js */ \"./src/Stir/Object/var/INIT_STYLE.js\");\n\nvar _INIT_STYLE2 = _interopRequireDefault(_INIT_STYLE);\n\nvar _INIT_ATTRIBUTE = __webpack_require__(/*! ./Object/var/INIT_ATTRIBUTE.js */ \"./src/Stir/Object/var/INIT_ATTRIBUTE.js\");\n\nvar _INIT_ATTRIBUTE2 = _interopRequireDefault(_INIT_ATTRIBUTE);\n\nvar _getPropertiesProxy = __webpack_require__(/*! ./Object/var/getPropertiesProxy.js */ \"./src/Stir/Object/var/getPropertiesProxy.js\");\n\nvar _getPropertiesProxy2 = _interopRequireDefault(_getPropertiesProxy);\n\nvar _proxyHandlerStyle = __webpack_require__(/*! ./Object/var/proxyHandler.style.js */ \"./src/Stir/Object/var/proxyHandler.style.js\");\n\nvar _proxyHandlerStyle2 = _interopRequireDefault(_proxyHandlerStyle);\n\nvar _context = __webpack_require__(/*! ./Utils/context.js */ \"./src/Stir/Utils/context.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar StirObject = function (_StirObjectSession) {\n  _inherits(StirObject, _StirObjectSession);\n\n  function StirObject(t, o) {\n    _classCallCheck(this, StirObject);\n\n    var _this = _possibleConstructorReturn(this, (StirObject.__proto__ || Object.getPrototypeOf(StirObject)).call(this, t.name, [], t.__system__.world));\n\n    delete _this.context;\n    _this.__initAttribute(o);\n    _this.__initFromType(_this.type);\n\n    return _this;\n  }\n\n  return StirObject;\n}(_StirObjectSession3.default);\n\n_context.setHiddenContext.call(StirObject.prototype, '__initAttribute', function () {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\n  Object.assign(this, _DEFAULT_ATTRIBUTE2.default, a);\n\n  this.__origin__.style = Object.assign({}, _DEFAULT_STYLE2.default, s);\n\n  _context.setHiddenContext.call(this, 'context', (0, _context.getContext)([this]));\n  _context.setHiddenContext.call(this, 'style', (0, _getPropertiesProxy2.default)(this.__origin__.style, _proxyHandlerStyle2.default), {\n    enumerable: true\n  });\n});\n\n_context.setHiddenContext.call(_StirObjectSession3.default.prototype, '__initFromType', function (t) {\n\n  var a = void 0,\n      s = void 0;\n\n  a = _INIT_ATTRIBUTE2.default[t] || {};\n  s = _INIT_STYLE2.default[t] || {};\n\n  Object.assign(this, a);\n  Object.assign(this.style, s);\n});\n\n/* \r\n *  StirObject 객체에서는 생성할 수 없게 만듭니다.\r\n *  이는 세션 전용 메서드입니다.\r\n * \r\n */\n\ndelete StirObject.prototype.create;\n\nexports.default = StirObject;\n\n//# sourceURL=webpack:///./src/Stir/StirObject.js?");

/***/ }),

/***/ "./src/Stir/StirObjectSession.js":
/*!***************************************!*\
  !*** ./src/Stir/StirObjectSession.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _context = __webpack_require__(/*! ./Utils/context.js */ \"./src/Stir/Utils/context.js\");\n\nvar _addClass = __webpack_require__(/*! ./Object/addClass.js */ \"./src/Stir/Object/addClass.js\");\n\nvar _addClass2 = _interopRequireDefault(_addClass);\n\nvar _attr = __webpack_require__(/*! ./Object/attr.js */ \"./src/Stir/Object/attr.js\");\n\nvar _attr2 = _interopRequireDefault(_attr);\n\nvar _create = __webpack_require__(/*! ./Object/create.js */ \"./src/Stir/Object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _css = __webpack_require__(/*! ./Object/css.js */ \"./src/Stir/Object/css.js\");\n\nvar _css2 = _interopRequireDefault(_css);\n\nvar _each = __webpack_require__(/*! ./Object/each.js */ \"./src/Stir/Object/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nvar _findClass = __webpack_require__(/*! ./Object/findClass.js */ \"./src/Stir/Object/findClass.js\");\n\nvar _findClass2 = _interopRequireDefault(_findClass);\n\nvar _get = __webpack_require__(/*! ./Object/get.js */ \"./src/Stir/Object/get.js\");\n\nvar _get2 = _interopRequireDefault(_get);\n\nvar _hasClass = __webpack_require__(/*! ./Object/hasClass.js */ \"./src/Stir/Object/hasClass.js\");\n\nvar _hasClass2 = _interopRequireDefault(_hasClass);\n\nvar _notClass = __webpack_require__(/*! ./Object/notClass.js */ \"./src/Stir/Object/notClass.js\");\n\nvar _notClass2 = _interopRequireDefault(_notClass);\n\nvar _removeClass = __webpack_require__(/*! ./Object/removeClass.js */ \"./src/Stir/Object/removeClass.js\");\n\nvar _removeClass2 = _interopRequireDefault(_removeClass);\n\nvar _toggleClass = __webpack_require__(/*! ./Object/toggleClass.js */ \"./src/Stir/Object/toggleClass.js\");\n\nvar _toggleClass2 = _interopRequireDefault(_toggleClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StirObjectSession = function StirObjectSession(u, c, w) {\n    _classCallCheck(this, StirObjectSession);\n\n    u += '';\n\n    // 객체 그 자체\n    // 배열 목록\n    // 아예 없을 경우\n\n    _context.setHiddenContext.call(this, 'name', u);\n    _context.setHiddenContext.call(this, '__origin__', {});\n    _context.setHiddenContext.call(this, '__system__', {});\n    _context.setHiddenContext.call(this, 'context', (0, _context.getContext)(c), {\n        configurable: true\n    });\n\n    this.__system__.world = w;\n};\n\n// regist method function\n\nStirObjectSession.prototype.addClass = _addClass2.default;\nStirObjectSession.prototype.attr = _attr2.default;\nStirObjectSession.prototype.create = _create2.default;\nStirObjectSession.prototype.css = _css2.default;\nStirObjectSession.prototype.each = _each2.default;\nStirObjectSession.prototype.findClass = _findClass2.default;\nStirObjectSession.prototype.get = _get2.default;\nStirObjectSession.prototype.hasClass = _hasClass2.default;\nStirObjectSession.prototype.notClass = _notClass2.default;\nStirObjectSession.prototype.removeClass = _removeClass2.default;\nStirObjectSession.prototype.toggleClass = _toggleClass2.default;\n\nexports.default = StirObjectSession;\n\n//# sourceURL=webpack:///./src/Stir/StirObjectSession.js?");

/***/ }),

/***/ "./src/Stir/Utils/CreateUUID.js":
/*!**************************************!*\
  !*** ./src/Stir/Utils/CreateUUID.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = CreateUUID;\nfunction CreateUUID() {\n\n  var r = void 0;\n  var n = void 0,\n      v = void 0;\n\n  r = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n    n = Math.random() * 16 | 0, v = c == 'x' ? n : n & 0x3 | 0x8;\n    return v.toString(16);\n  });\n\n  return new String(r);\n};\n\n//# sourceURL=webpack:///./src/Stir/Utils/CreateUUID.js?");

/***/ }),

/***/ "./src/Stir/Utils/animate.js":
/*!***********************************!*\
  !*** ./src/Stir/Utils/animate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = animate;\nfunction run(n, c, g, d, step, complete) {\n\n  var f = void 0;\n  var r = void 0;\n\n  f = 1000 / 60;\n  r = g - c;\n\n  // animate complete\n  if (n + f > d) {\n\n    if (!n) {\n      step(g);\n    }\n\n    complete();\n    return;\n  }\n\n  // if not yet....\n  // run next tick\n  setTimeout(function () {\n\n    n += f;\n\n    step(c + n / d * r - 0);\n    run(n, c, g, d, step, complete);\n  }, f);\n}\n\nfunction animate(c, g) {\n  var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};\n  var complete = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};\n\n\n  c -= 0;\n  g -= 0;\n  d -= 0;\n\n  run(0, c, g, d, step, complete);\n};\n\n//# sourceURL=webpack:///./src/Stir/Utils/animate.js?");

/***/ }),

/***/ "./src/Stir/Utils/arguments.js":
/*!*************************************!*\
  !*** ./src/Stir/Utils/arguments.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction getProperties() {\n  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.keys(this);\n\n\n  var r = {};\n\n  if (!Array.isArray(t)) {\n    t = [t];\n  }\n\n  for (var p in this) {\n    if (t.indexOf(p) !== -1) r[p] = this[p];\n  }\n\n  return r;\n}\n\nfunction parseArguments(p, v) {\n\n  /*\r\n   *  넘겨온 매개변수 갯수에 따라서 할 일을 결정합니다.\r\n   * \r\n   *  예를 들어, 매개변수가 없을 경우, 객체의 모든 속성들을 Object 자료형으로 넘깁니다.\r\n   *  매개변수가 한 개일 때는, 객체의 해당 속성값만을 넘깁니다.\r\n   * \r\n   *  두 개 이상부터는 값 대입입니다.\r\n   *  그러나 예외적으로 매개변수가 한 개임에도 불구하고, Object 자료형이라면 대입으로 간주합니다.\r\n   * \r\n   */\n\n  var t = void 0;\n  var r = void 0,\n      k = void 0;\n\n  t = this;\n  r = {\n    IS_GET: arguments.length < 2 && (typeof p === 'undefined' ? 'undefined' : _typeof(p)) !== 'object',\n    VALUE: {}\n  };\n\n  // StirObject 객체 자기자신을 파싱하는 경우\n  // 세션 중 맨 처음 객체만을 받아옵니다.\n\n  if (this instanceof window.STIR.classes.StirObjectSession) {\n    t = this.get();\n  }\n\n  if (r.IS_GET) {\n\n    // Context 결과가 비어있는 세션에서 속성값을 얻어오려했을 때\n    // undefined 를 반환합니다.\n\n    if (!t) {\n      r.VALUE = undefined;\n      return r;\n    }\n\n    // Object.method()\n    if (!arguments.length) {\n      r.VALUE = getProperties.call(this);\n    }\n    // Object.method('property')\n    else {\n        r.VALUE = this[p];\n      }\n\n    return r;\n  }\n\n  /*\r\n   *  대입하는 매개변수입니다.\r\n   *  대입해야 할 값들을 Object 자료형으로 반환해줍니다.\r\n   * \r\n   */\n\n  // Object.method('property', 'value')\n  if (p instanceof String) p = p.toString();\n  if (typeof p === 'string') {\n    r.VALUE[p] = v;\n  }\n\n  // Object.method({ ... })\n  else if ((typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object') {\n      r.VALUE = p;\n    }\n\n  return r;\n};\n\nfunction applyArguments(o) {\n  for (var p in o) {\n    this[p] = o[p];\n  }\n}\n\nexports.parseArguments = parseArguments;\nexports.applyArguments = applyArguments;\nexports.getProperties = getProperties;\n\n//# sourceURL=webpack:///./src/Stir/Utils/arguments.js?");

/***/ }),

/***/ "./src/Stir/Utils/context.js":
/*!***********************************!*\
  !*** ./src/Stir/Utils/context.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {Array, Set, Map, Object} c\r\n * @description convert to Set Object from Array, Set, Map Object.\r\n * @returns {Set} c\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction getContext(c) {\n  if (!c) {\n    c = [];\n  }\n\n  if (c instanceof Map) {\n    c = Array.from(c).map(function (t) {\n      return t[1];\n    });\n  }\n\n  if (!(c instanceof Set)) {\n    c = new Set(c);\n  }\n\n  return c;\n}\n\n/**\r\n * \r\n * @param {Object} p \r\n * @param {*} v \r\n */\nfunction setHiddenContext(p, v) {\n  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n\n  var r = void 0;\n\n  r = {};\n  r.get = function () {\n    return v;\n  };\n\n  Object.assign(r, o);\n  Object.defineProperty(this, p, r);\n}\n\nexports.getContext = getContext;\nexports.setHiddenContext = setHiddenContext;\n\n//# sourceURL=webpack:///./src/Stir/Utils/context.js?");

/***/ }),

/***/ "./src/Stir/WebGL/shaderSource/fragment.c":
/*!************************************************!*\
  !*** ./src/Stir/WebGL/shaderSource/fragment.c ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#version 300 es\\r\\n \\r\\n// 프래그먼트 쉐이더는 기본 정밀도를 가지고 있지 않으므로 선언을 해야합니다.\\r\\n// mediump은 기본값으로 적당합니다. \\\"중간 정도 정밀도\\\"를 의미합니다.\\r\\nprecision mediump float;\\r\\n \\r\\n// 프래그먼트 쉐이더(fragment shader)에서 출력을 선언 해야합니다.\\r\\nout vec4 outColor;\\r\\n \\r\\nvoid main() {\\r\\n  // 붉은-보라색으로 출력하게 설정합니다.\\r\\n  outColor = vec4(1, 0, 0.5, 1);\\r\\n}\"\n\n//# sourceURL=webpack:///./src/Stir/WebGL/shaderSource/fragment.c?");

/***/ }),

/***/ "./src/Stir/WebGL/shaderSource/vertex.c":
/*!**********************************************!*\
  !*** ./src/Stir/WebGL/shaderSource/vertex.c ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#version 300 es\\r\\n \\r\\n// attribute는 버텍스 쉐이더에 대한 입력(in)입니다.\\r\\n// 버퍼로 부터 받은 데이터입니다.\\r\\nin vec4 a_position;\\r\\n \\r\\n// 모든 쉐이더는 main 함수를 가지고 있습니다.\\r\\nvoid main() {\\r\\n \\r\\n  // gl_Position는 버텍스 쉐이더가 설정을 담당하는 내장 변수입니다.\\r\\n  gl_Position = a_position;\\r\\n}\"\n\n//# sourceURL=webpack:///./src/Stir/WebGL/shaderSource/vertex.c?");

/***/ }),

/***/ "./src/Stir/World.js":
/*!***************************!*\
  !*** ./src/Stir/World.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// manager\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Manager = __webpack_require__(/*! ./World/Manager.js */ \"./src/Stir/World/Manager.js\");\n\nvar _Manager2 = _interopRequireDefault(_Manager);\n\nvar _DeltaTimer = __webpack_require__(/*! ./World/DeltaTimer.js */ \"./src/Stir/World/DeltaTimer.js\");\n\nvar _DeltaTimer2 = _interopRequireDefault(_DeltaTimer);\n\nvar _init = __webpack_require__(/*! ./World/init.js */ \"./src/Stir/World/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nvar _world = __webpack_require__(/*! ./World/world.js */ \"./src/Stir/World/world.js\");\n\nvar _world2 = _interopRequireDefault(_world);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// namespace tree\n\n\n// functions \nvar ns = {\n  init: _init2.default,\n  world: _world2.default\n};\n\n/*\r\n *  변수 ns 구조체를 순회하며, 구조대로 하위 네임스페이스를 만들거나, 함수를 할당합니다.\r\n *  \r\n *  각 함수는 자신이 호출된 world 의 정보를 __world__ 라는 속성값으로 가지게 됩니다.\r\n *  이 함수는 마무리 될 때까지 재귀적으로 호출됩니다.\r\n * \r\n */\n\nfunction registRecursiver(ns, t, W) {\n\n  for (var p in ns) {\n\n    if (typeof ns[p] === 'function') {\n\n      t[p] = ns[p].bind(W);\n    } else {\n\n      t[p] = {};\n      registRecursiver(ns[p], t[p], W);\n    }\n  }\n}\n\nfunction World() {\n  var _this = this;\n\n  if (!(this instanceof World)) {\n    throw 'Class constructor Test cannot be invoked without \\'new\\'';\n  }\n\n  this.objects = new Map();\n  this.manager = new _Manager2.default(this);\n  this.deltaTimer = new _DeltaTimer2.default();\n  this.gl = null;\n\n  /*\r\n   *  검색결과를 알려줍니다.\r\n   *  검색은 현재 WorldManager가 objects에서 name 매개변수와 일치하는 결과를 반환합니다.\r\n   * \r\n   */\n\n  var f = function f(u) {\n    return _this.manager.getObjects(u);\n  };\n\n  registRecursiver(ns, f, this);\n  return f;\n}\n\nexports.default = World;\n\n//# sourceURL=webpack:///./src/Stir/World.js?");

/***/ }),

/***/ "./src/Stir/World/DeltaTimer.js":
/*!**************************************!*\
  !*** ./src/Stir/World/DeltaTimer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction DeltaTimer() {\n\n  this.start = null;\n  this.before = null;\n  this.current = null;\n  this.stop = false;\n}\n\nDeltaTimer.prototype.init = function () {\n  this.start = performance.now();\n  this.before = performance.now();\n  this.current = performance.now();\n};\n\n/**\r\n * @description\r\n * Update tick time. It's returns interval of tick time with before.\r\n * \r\n * @returns {Number}\r\n */\nDeltaTimer.prototype.update = function () {\n\n  if (this.stop) {\n    return this.current - this.before;\n  }\n\n  this.before = this.current;\n  this.current = performance.now();\n\n  return this.current - this.before;\n};\n\nDeltaTimer.prototype.uptime = function () {\n  return this.current - this.start;\n};\n\n/**\r\n * @description\r\n * It's suppress update method.\r\n * update method will be ignored before using play method.\r\n */\nDeltaTimer.prototype.pause = function () {\n  this.stop = true;\n};\n\nDeltaTimer.prototype.play = function () {\n  this.stop = false;\n};\n\nexports.default = DeltaTimer;\n\n//# sourceURL=webpack:///./src/Stir/World/DeltaTimer.js?");

/***/ }),

/***/ "./src/Stir/World/Manager.js":
/*!***********************************!*\
  !*** ./src/Stir/World/Manager.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _StirObjectSession = __webpack_require__(/*! ../StirObjectSession.js */ \"./src/Stir/StirObjectSession.js\");\n\nvar _StirObjectSession2 = _interopRequireDefault(_StirObjectSession);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction WorldManager(world) {\n  this.world = world;\n}\n\nWorldManager.prototype.getObjects = function (u) {\n\n  var t = void 0;\n\n  u += '';\n  t = this.world.objects.get(u);\n  t = t || [];\n\n  if (u === '*') {\n    t = Array.from(this.world.objects).map(function (t) {\n      return t[1];\n    });\n  }\n\n  if (!Array.isArray(t)) {\n    t = [t];\n  }\n\n  return new _StirObjectSession2.default(u, t, this.world);\n};\n\nexports.default = WorldManager;\n\n//# sourceURL=webpack:///./src/Stir/World/Manager.js?");

/***/ }),

/***/ "./src/Stir/World/init.js":
/*!********************************!*\
  !*** ./src/Stir/World/init.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// shader source\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = init;\n\nvar _vertex = __webpack_require__(/*! ../WebGL/shaderSource/vertex.c */ \"./src/Stir/WebGL/shaderSource/vertex.c\");\n\nvar _vertex2 = _interopRequireDefault(_vertex);\n\nvar _fragment = __webpack_require__(/*! ../WebGL/shaderSource/fragment.c */ \"./src/Stir/WebGL/shaderSource/fragment.c\");\n\nvar _fragment2 = _interopRequireDefault(_fragment);\n\nvar _shader = __webpack_require__(/*! ./shader.js */ \"./src/Stir/World/shader.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {String, HTMLCanvasElement} q \r\n */\nfunction getCanvas(q) {\n\n  var canvas = void 0;\n\n  if (typeof q === 'string') {\n    canvas = document.querySelector(q);\n  }\n\n  if (q instanceof HTMLCanvasElement) {\n    canvas = q;\n  }\n\n  return canvas;\n}\n\n// shader manager\nfunction init() {\n  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\n  var canvas = void 0;\n  var gl = void 0;\n\n  canvas = getCanvas(o.canvas);\n\n  if (!canvas) {\n    throw 'The canvas not exists.';\n  }\n\n  gl = canvas.getContext('webgl2');\n\n  if (!gl) {\n    throw 'Your browser doesn\\'t support Stir.js';\n  }\n\n  // Create shader program\n\n  var vertexShader = void 0;\n  var fragmentShader = void 0;\n\n  vertexShader = (0, _shader.createShader)(gl, gl.VERTEX_SHADER, _vertex2.default);\n  fragmentShader = (0, _shader.createShader)(gl, gl.FRAGMENT_SHADER, _fragment2.default);\n\n  if (!(vertexShader && fragmentShader)) {\n    throw 'Something wrong happened when initing.';\n  }\n\n  var program = (0, _shader.createProgram)(gl, vertexShader, fragmentShader);\n\n  if (!program) {\n    throw 'Something wrong happened when initing.';\n  }\n\n  var positionBuffer = void 0;\n  var positions = void 0;\n  var positionAttributeLocation = void 0;\n\n  positionAttributeLocation = gl.getAttribLocation(program, \"a_position\");\n  positionBuffer = gl.createBuffer();\n  positions = [0, 0, 0, 0.5, 0.7, 0];\n\n  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);\n\n  // run deltaTimer run\n  this.deltaTimer.init();\n  this.gl = gl;\n};\n\n//# sourceURL=webpack:///./src/Stir/World/init.js?");

/***/ }),

/***/ "./src/Stir/World/shader.js":
/*!**********************************!*\
  !*** ./src/Stir/World/shader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction createShader(gl, type, source) {\n  var shader = gl.createShader(type);\n  gl.shaderSource(shader, source);\n  gl.compileShader(shader);\n  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n  if (success) {\n    return shader;\n  }\n\n  console.log(gl.getShaderInfoLog(shader));\n  gl.deleteShader(shader);\n}\n\nfunction createProgram(gl, vertexShader, fragmentShader) {\n  var program = gl.createProgram();\n  gl.attachShader(program, vertexShader);\n  gl.attachShader(program, fragmentShader);\n  gl.linkProgram(program);\n  var success = gl.getProgramParameter(program, gl.LINK_STATUS);\n  if (success) {\n    return program;\n  }\n\n  console.log(gl.getProgramInfoLog(program));\n  gl.deleteProgram(program);\n}\n\nexports.createShader = createShader;\nexports.createProgram = createProgram;\n\n//# sourceURL=webpack:///./src/Stir/World/shader.js?");

/***/ }),

/***/ "./src/Stir/World/world.js":
/*!*********************************!*\
  !*** ./src/Stir/World/world.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = world;\nfunction world() {\n  return this;\n};\n\n//# sourceURL=webpack:///./src/Stir/World/world.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/Stir/Core.js ./src/Stir/Object/addClass.js ./src/Stir/Object/attr.js ./src/Stir/Object/create.js ./src/Stir/Object/css.js ./src/Stir/Object/each.js ./src/Stir/Object/findClass.js ./src/Stir/Object/get.js ./src/Stir/Object/hasClass.js ./src/Stir/Object/notClass.js ./src/Stir/Object/removeClass.js ./src/Stir/Object/toggleClass.js ./src/Stir/Object/var/DEFAULT_ATTRIBUTE.js ./src/Stir/Object/var/DEFAULT_STYLE.js ./src/Stir/Object/var/getPropertiesProxy.js ./src/Stir/Object/var/INIT_ATTRIBUTE.js ./src/Stir/Object/var/INIT_STYLE.js ./src/Stir/Object/var/proxyHandler.attribute.js ./src/Stir/Object/var/proxyHandler.style.js ./src/Stir/Object/var/Type.js ./src/Stir/StirObject.js ./src/Stir/StirObjectSession.js ./src/Stir/Utils/animate.js ./src/Stir/Utils/arguments.js ./src/Stir/Utils/context.js ./src/Stir/Utils/CreateUUID.js ./src/Stir/World.js ./src/Stir/World/DeltaTimer.js ./src/Stir/World/init.js ./src/Stir/World/Manager.js ./src/Stir/World/shader.js ./src/Stir/World/world.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/Stir/Core.js */\"./src/Stir/Core.js\");\n__webpack_require__(/*! ./src/Stir/Object/addClass.js */\"./src/Stir/Object/addClass.js\");\n__webpack_require__(/*! ./src/Stir/Object/attr.js */\"./src/Stir/Object/attr.js\");\n__webpack_require__(/*! ./src/Stir/Object/create.js */\"./src/Stir/Object/create.js\");\n__webpack_require__(/*! ./src/Stir/Object/css.js */\"./src/Stir/Object/css.js\");\n__webpack_require__(/*! ./src/Stir/Object/each.js */\"./src/Stir/Object/each.js\");\n__webpack_require__(/*! ./src/Stir/Object/findClass.js */\"./src/Stir/Object/findClass.js\");\n__webpack_require__(/*! ./src/Stir/Object/get.js */\"./src/Stir/Object/get.js\");\n__webpack_require__(/*! ./src/Stir/Object/hasClass.js */\"./src/Stir/Object/hasClass.js\");\n__webpack_require__(/*! ./src/Stir/Object/notClass.js */\"./src/Stir/Object/notClass.js\");\n__webpack_require__(/*! ./src/Stir/Object/removeClass.js */\"./src/Stir/Object/removeClass.js\");\n__webpack_require__(/*! ./src/Stir/Object/toggleClass.js */\"./src/Stir/Object/toggleClass.js\");\n__webpack_require__(/*! ./src/Stir/Object/var/DEFAULT_ATTRIBUTE.js */\"./src/Stir/Object/var/DEFAULT_ATTRIBUTE.js\");\n__webpack_require__(/*! ./src/Stir/Object/var/DEFAULT_STYLE.js */\"./src/Stir/Object/var/DEFAULT_STYLE.js\");\n__webpack_require__(/*! ./src/Stir/Object/var/getPropertiesProxy.js */\"./src/Stir/Object/var/getPropertiesProxy.js\");\n__webpack_require__(/*! ./src/Stir/Object/var/INIT_ATTRIBUTE.js */\"./src/Stir/Object/var/INIT_ATTRIBUTE.js\");\n__webpack_require__(/*! ./src/Stir/Object/var/INIT_STYLE.js */\"./src/Stir/Object/var/INIT_STYLE.js\");\n__webpack_require__(/*! ./src/Stir/Object/var/proxyHandler.attribute.js */\"./src/Stir/Object/var/proxyHandler.attribute.js\");\n__webpack_require__(/*! ./src/Stir/Object/var/proxyHandler.style.js */\"./src/Stir/Object/var/proxyHandler.style.js\");\n__webpack_require__(/*! ./src/Stir/Object/var/Type.js */\"./src/Stir/Object/var/Type.js\");\n__webpack_require__(/*! ./src/Stir/StirObject.js */\"./src/Stir/StirObject.js\");\n__webpack_require__(/*! ./src/Stir/StirObjectSession.js */\"./src/Stir/StirObjectSession.js\");\n__webpack_require__(/*! ./src/Stir/Utils/animate.js */\"./src/Stir/Utils/animate.js\");\n__webpack_require__(/*! ./src/Stir/Utils/arguments.js */\"./src/Stir/Utils/arguments.js\");\n__webpack_require__(/*! ./src/Stir/Utils/context.js */\"./src/Stir/Utils/context.js\");\n__webpack_require__(/*! ./src/Stir/Utils/CreateUUID.js */\"./src/Stir/Utils/CreateUUID.js\");\n__webpack_require__(/*! ./src/Stir/World.js */\"./src/Stir/World.js\");\n__webpack_require__(/*! ./src/Stir/World/DeltaTimer.js */\"./src/Stir/World/DeltaTimer.js\");\n__webpack_require__(/*! ./src/Stir/World/init.js */\"./src/Stir/World/init.js\");\n__webpack_require__(/*! ./src/Stir/World/Manager.js */\"./src/Stir/World/Manager.js\");\n__webpack_require__(/*! ./src/Stir/World/shader.js */\"./src/Stir/World/shader.js\");\nmodule.exports = __webpack_require__(/*! ./src/Stir/World/world.js */\"./src/Stir/World/world.js\");\n\n\n//# sourceURL=webpack:///multi_./src/Stir/Core.js_./src/Stir/Object/addClass.js_./src/Stir/Object/attr.js_./src/Stir/Object/create.js_./src/Stir/Object/css.js_./src/Stir/Object/each.js_./src/Stir/Object/findClass.js_./src/Stir/Object/get.js_./src/Stir/Object/hasClass.js_./src/Stir/Object/notClass.js_./src/Stir/Object/removeClass.js_./src/Stir/Object/toggleClass.js_./src/Stir/Object/var/DEFAULT_ATTRIBUTE.js_./src/Stir/Object/var/DEFAULT_STYLE.js_./src/Stir/Object/var/getPropertiesProxy.js_./src/Stir/Object/var/INIT_ATTRIBUTE.js_./src/Stir/Object/var/INIT_STYLE.js_./src/Stir/Object/var/proxyHandler.attribute.js_./src/Stir/Object/var/proxyHandler.style.js_./src/Stir/Object/var/Type.js_./src/Stir/StirObject.js_./src/Stir/StirObjectSession.js_./src/Stir/Utils/animate.js_./src/Stir/Utils/arguments.js_./src/Stir/Utils/context.js_./src/Stir/Utils/CreateUUID.js_./src/Stir/World.js_./src/Stir/World/DeltaTimer.js_./src/Stir/World/init.js_./src/Stir/World/Manager.js_./src/Stir/World/shader.js_./src/Stir/World/world.js?");

/***/ })

/******/ });