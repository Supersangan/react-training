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
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menulist_less_1 = __importDefault(__webpack_require__(/*! ./menulist.less */ \"./src/shared/CardsList/Card/Menu/MenuList/menulist.less\"));\r\nvar LIST = [\r\n    {\r\n        СhildAs: 'a',\r\n        itemWrapperClassName: menulist_less_1.default.itemWrapper,\r\n        itemClassName: menulist_less_1.default.item,\r\n        text: 'Комментарии',\r\n        href: '#comments',\r\n        svg: react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" }))\r\n    }(templateObject_1 || (templateObject_1 = __makeTemplateObject([\",\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper,\\n    itemClassName: styles.item,\\n    text: '\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F',\\n    href: '#share',\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper,\\n    itemClassName: styles.item,\\n    text: '\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C',\\n    href: '#hide',\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper,\\n    itemClassName: styles.item,\\n    text: '\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C',\\n    href: '#save',\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper,\\n    itemClassName: styles.item,\\n    text: '\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F',\\n    href: '#report',\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper + ' ' + styles.itemWrapper_close,\\n    itemClassName: styles.item,\\n    text: '\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C',\\n    href: '#close',\\n  },\\n].map(generateId);\\n\\nexport function MenuList() {\\n  return <GenericList list={LIST} className={styles.root} />;\\n}\\n\"], [\",\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper,\\n    itemClassName: styles.item,\\n    text: '\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F',\\n    href: '#share',\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper,\\n    itemClassName: styles.item,\\n    text: '\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C',\\n    href: '#hide',\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper,\\n    itemClassName: styles.item,\\n    text: '\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C',\\n    href: '#save',\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper,\\n    itemClassName: styles.item,\\n    text: '\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F',\\n    href: '#report',\\n  },\\n  {\\n    \\u0421hildAs: 'a' as const,\\n    itemWrapperClassName: styles.itemWrapper + ' ' + styles.itemWrapper_close,\\n    itemClassName: styles.item,\\n    text: '\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C',\\n    href: '#close',\\n  },\\n].map(generateId);\\n\\nexport function MenuList() {\\n  return <GenericList list={LIST} className={styles.root} />;\\n}\\n\"])))\r\n];\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack://react-training/./src/shared/CardsList/Card/Menu/MenuList/MenuList.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b51c7eb8f9be6185779e")
/******/ })();
/******/ 
/******/ }
);