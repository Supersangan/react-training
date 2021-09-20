/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar msToTimeBefore_1 = __webpack_require__(/*! ../../../utils/js/msToTimeBefore */ \"./src/utils/js/msToTimeBefore.ts\");\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\r\nfunction Card(_a) {\r\n    var post = _a.post;\r\n    var authorName = post.authorName, created = post.created, link = post.link, previewSrc = post.previewSrc, score = post.score, title = post.title, authorAvatarSrc = post.authorAvatarSrc;\r\n    var published = msToTimeBefore_1.msToTime(created - Date.now());\r\n    console.log(published);\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { link: link, title: title, published: published, authorName: authorName, authorAvatarSrc: authorAvatarSrc, score: score }),\r\n        react_1.default.createElement(Preview_1.Preview, { src: previewSrc }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack://react-training/./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/utils/js/getNumeralForm.ts":
/*!****************************************!*\
  !*** ./src/utils/js/getNumeralForm.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getNumeralForm = void 0;\r\nfunction getNumeralForm(one, two, five, val) {\r\n    var n = Math.abs(val);\r\n    n %= 100;\r\n    if (n >= 5 && n <= 20) {\r\n        return five;\r\n    }\r\n    n %= 10;\r\n    if (n === 1) {\r\n        return one;\r\n    }\r\n    if (n >= 2 && n <= 4) {\r\n        return two;\r\n    }\r\n    return five;\r\n}\r\nexports.getNumeralForm = getNumeralForm;\r\n\n\n//# sourceURL=webpack://react-training/./src/utils/js/getNumeralForm.ts?");

/***/ }),

/***/ "./src/utils/js/msToTimeBefore.ts":
/*!****************************************!*\
  !*** ./src/utils/js/msToTimeBefore.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.msToTime = void 0;\r\nvar getNumeralForm_1 = __webpack_require__(/*! ./getNumeralForm */ \"./src/utils/js/getNumeralForm.ts\");\r\nfunction msToTime(ms) {\r\n    var seconds = parseInt((ms / 1000).toFixed(1));\r\n    var minutes = parseInt((ms / (1000 * 60)).toFixed(1));\r\n    var hours = parseInt((ms / (1000 * 60 * 60)).toFixed(1));\r\n    var days = parseInt((ms / (1000 * 60 * 60 * 24)).toFixed(1));\r\n    var time;\r\n    if (seconds < 60) {\r\n        time = seconds + getNumeralForm_1.getNumeralForm('секунду', 'секунды', 'секунд', seconds);\r\n    }\r\n    else if (minutes < 60) {\r\n        time = minutes + getNumeralForm_1.getNumeralForm('минуту', 'минуты', 'минут', minutes);\r\n    }\r\n    else if (hours < 24) {\r\n        time = hours + getNumeralForm_1.getNumeralForm('час', 'часа', 'часов', hours);\r\n    }\r\n    else {\r\n        time = days + getNumeralForm_1.getNumeralForm('день', 'дня', 'дней', days);\r\n    }\r\n}\r\nexports.msToTime = msToTime;\r\n\n\n//# sourceURL=webpack://react-training/./src/utils/js/msToTimeBefore.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb2c38241989b918f18d")
/******/ })();
/******/ 
/******/ }
);