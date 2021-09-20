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
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getNumeralForm = void 0;\r\nfunction getNumeralForm(forms, val) {\r\n    var n = Math.abs(val);\r\n    n %= 100;\r\n    if (n >= 5 && n <= 20) {\r\n        return forms.five;\r\n    }\r\n    n %= 10;\r\n    if (n === 1) {\r\n        return forms.one;\r\n    }\r\n    if (n >= 2 && n <= 4) {\r\n        return forms.two;\r\n    }\r\n    return forms.five;\r\n}\r\nexports.getNumeralForm = getNumeralForm;\r\n\n\n//# sourceURL=webpack://react-training/./src/utils/js/getNumeralForm.ts?");

/***/ }),

/***/ "./src/utils/js/msToTime.ts":
/*!**********************************!*\
  !*** ./src/utils/js/msToTime.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.msToTime = void 0;\r\nvar getNumeralForm_1 = __webpack_require__(/*! ./getNumeralForm */ \"./src/utils/js/getNumeralForm.ts\");\r\nfunction msToTime(ms) {\r\n    var seconds = parseInt((ms / 1000).toFixed(1));\r\n    var minutes = parseInt((ms / (1000 * 60)).toFixed(1));\r\n    var hours = parseInt((ms / (1000 * 60 * 60)).toFixed(1));\r\n    var days = parseInt((ms / (1000 * 60 * 60 * 24)).toFixed(1));\r\n    if (seconds < 60)\r\n        return;\r\n    time = seconds + getNumeralForm_1.getNumeralForm;\r\n    if (minutes < 60)\r\n        return minutes;\r\n    else if (hours < 24)\r\n        return hours;\r\n    else\r\n        return days;\r\n}\r\nexports.msToTime = msToTime;\r\n\n\n//# sourceURL=webpack://react-training/./src/utils/js/msToTime.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89b87652665acc9a4718")
/******/ })();
/******/ 
/******/ }
);