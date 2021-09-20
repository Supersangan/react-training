/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/utils/js/getNumeralForm.ts":
/*!****************************************!*\
  !*** ./src/utils/js/getNumeralForm.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getNumeralForm = void 0;\r\nfunction getNumeralForm(one, two, five, val) {\r\n    var n = Math.abs(val);\r\n    n %= 100;\r\n    if (n >= 5 && n <= 20) {\r\n        return forms.five;\r\n    }\r\n    n %= 10;\r\n    if (n === 1) {\r\n        return forms.one;\r\n    }\r\n    if (n >= 2 && n <= 4) {\r\n        return forms.two;\r\n    }\r\n    return forms.five;\r\n}\r\nexports.getNumeralForm = getNumeralForm;\r\n\n\n//# sourceURL=webpack://react-training/./src/utils/js/getNumeralForm.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("47820bf28047de71f9fa")
/******/ })();
/******/ 
/******/ }
);