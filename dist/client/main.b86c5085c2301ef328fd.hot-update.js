/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/shared/CardsList/Card/Menu/MenuList/MenuList.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuList/MenuList.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MenuList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar menulist_less_1 = __importDefault(__webpack_require__(/*! ./menulist.less */ \"./src/shared/CardsList/Card/Menu/MenuList/menulist.less\"));\r\nvar LIST = [\r\n    {\r\n        СhildAs: 'a',\r\n        itemWrapperClassName: menulist_less_1.default.itemWrapper,\r\n        itemClassName: menulist_less_1.default.item,\r\n        text: 'Комментарии',\r\n        href: '#comments',\r\n        href: '#comments',\r\n    },\r\n    {\r\n        СhildAs: 'a',\r\n        itemWrapperClassName: menulist_less_1.default.itemWrapper,\r\n        itemClassName: menulist_less_1.default.item,\r\n        text: 'Поделиться',\r\n        href: '#share',\r\n    },\r\n    {\r\n        СhildAs: 'a',\r\n        itemWrapperClassName: menulist_less_1.default.itemWrapper,\r\n        itemClassName: menulist_less_1.default.item,\r\n        text: 'Скрыть',\r\n        href: '#hide',\r\n    },\r\n    {\r\n        СhildAs: 'a',\r\n        itemWrapperClassName: menulist_less_1.default.itemWrapper,\r\n        itemClassName: menulist_less_1.default.item,\r\n        text: 'Сохранить',\r\n        href: '#save',\r\n    },\r\n    {\r\n        СhildAs: 'a',\r\n        itemWrapperClassName: menulist_less_1.default.itemWrapper,\r\n        itemClassName: menulist_less_1.default.item,\r\n        text: 'Пожаловаться',\r\n        href: '#report',\r\n    },\r\n    {\r\n        СhildAs: 'a',\r\n        itemWrapperClassName: menulist_less_1.default.itemWrapper + ' ' + menulist_less_1.default.itemWrapper_close,\r\n        itemClassName: menulist_less_1.default.item,\r\n        text: 'Закрыть',\r\n        href: '#close',\r\n    },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction MenuList() {\r\n    return react_1.default.createElement(GenericList_1.GenericList, { list: LIST, className: menulist_less_1.default.root });\r\n}\r\nexports.MenuList = MenuList;\r\n\n\n//# sourceURL=webpack://react-training/./src/shared/CardsList/Card/Menu/MenuList/MenuList.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ff76cea40853cad271c")
/******/ })();
/******/ 
/******/ }
);