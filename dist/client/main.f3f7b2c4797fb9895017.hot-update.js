/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/utils/js/msToTimeBefore.ts":
/*!****************************************!*\
  !*** ./src/utils/js/msToTimeBefore.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.msToTimeBefore = void 0;\r\nvar getNumeralForm_1 = __webpack_require__(/*! ./getNumeralForm */ \"./src/utils/js/getNumeralForm.ts\");\r\nfunction msToTimeBefore(ms) {\r\n    var seconds = parseInt((ms / 1000).toFixed(1));\r\n    var minutes = parseInt((ms / (1000 * 60)).toFixed(1));\r\n    var hours = parseInt((ms / (1000 * 60 * 60)).toFixed(1));\r\n    var days = parseInt((ms / (1000 * 60 * 60 * 24)).toFixed(1));\r\n    var time;\r\n    if (seconds < 60) {\r\n        time = seconds + +getNumeralForm_1.getNumeralForm('секунду', 'секунды', 'секунд', seconds);\r\n    }\r\n    else if (minutes < 60) {\r\n        time = minutes + +getNumeralForm_1.getNumeralForm('минуту', 'минуты', 'минут', minutes);\r\n    }\r\n    else if (hours < 24) {\r\n        time = hours + +getNumeralForm_1.getNumeralForm('час', 'часа', 'часов', hours);\r\n    }\r\n    else {\r\n        time = days + +getNumeralForm_1.getNumeralForm('день', 'дня', 'дней', days);\r\n    }\r\n    return time;\r\n}\r\nexports.msToTimeBefore = msToTimeBefore;\r\n\n\n//# sourceURL=webpack://react-training/./src/utils/js/msToTimeBefore.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e01e3b8c9fcb3b2af502")
/******/ })();
/******/ 
/******/ }
);