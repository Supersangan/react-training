/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar noop = function () { };\r\nfunction GenericList(_a) {\r\n    var list = _a.list, className = _a.className;\r\n    return (react_1.default.createElement(\"ul\", { className: className }, list.map(function (_a) {\r\n        var СhildAs = _a.СhildAs, text = _a.text, _b = _a.onClick, onClick = _b === void 0 ? noop : _b, itemWrapperClassName = _a.itemWrapperClassName, itemClassName = _a.itemClassName, id = _a.id, href = _a.href, icon = _a.icon;\r\n        return (react_1.default.createElement(\"li\", { key: id, className: itemWrapperClassName },\r\n            СhildAs && (react_1.default.createElement(СhildAs, { className: itemClassName, onClick: function () { return onClick(id); }, href: href },\r\n                ison && (react_1.default.createElement(\"span\", __assign({ className: true }, ), icon)),\r\n                text)),\r\n            !СhildAs && react_1.default.createElement(react_1.default.Fragment, null, text)));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack://react-training/./src/shared/GenericList/GenericList.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("69a806bf9e6adc18d017")
/******/ })();
/******/ 
/******/ }
);