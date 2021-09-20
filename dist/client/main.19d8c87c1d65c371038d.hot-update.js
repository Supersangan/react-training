/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/utils/js/msToTime.ts":
/*!**********************************!*\
  !*** ./src/utils/js/msToTime.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.msToTime = void 0;\r\nfunction msToTime(ms) {\r\n    var seconds = parseInt(ms / 1000).toFixed(1);\r\n    var minutes = parseInt(ms / (1000 * 60)).toFixed(1);\r\n    var hours = parseInt(ms / (1000 * 60 * 60)).toFixed(1);\r\n    var days = parseInt(ms / (1000 * 60 * 60 * 24)).toFixed(1);\r\n    if (seconds < 60)\r\n        return seconds + \" Sec\";\r\n    else if (minutes < 60)\r\n        return minutes + \" Min\";\r\n    else if (hours < 24)\r\n        return hours + \" Hrs\";\r\n    else\r\n        return days + \" Days\";\r\n}\r\nexports.msToTime = msToTime;\r\n\n\n//# sourceURL=webpack://react-training/./src/utils/js/msToTime.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("29353fe656f6455f4005")
/******/ })();
/******/ 
/******/ }
);