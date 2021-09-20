/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar CreatedAt_1 = __webpack_require__(/*! ./CreatedAt */ \"./src/shared/CardsList/Card/TextContent/CreatedAt/index.ts\");\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\r\nfunction TextContent(props) {\r\n    var link = props.link, title = props.title, published = props.published, authorName = props.authorName, authorAvatarSrc = props.authorAvatarSrc, score = props.score;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_css_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: textcontent_css_1.default.avatar, src: authorAvatarSrc || https }) //cdn.dribbble.com/users/939433/screenshots/13626869/image.png?compress=1&resize=100x100\"}\r\n            ,\r\n                \"//cdn.dribbble.com/users/939433/screenshots/13626869/image.png?compress=1&resize=100x100\\\"} alt=\\\"avatar\\\" />\",\r\n                react_1.default.createElement(\"a\", { className: textcontent_css_1.default.username, href: \"#user-url\" }, authorName)),\r\n            react_1.default.createElement(CreatedAt_1.CreatedAt, { published: published })),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_css_1.default.title },\r\n            react_1.default.createElement(\"a\", { className: textcontent_css_1.default.postLink, href: \"#\" + link }, title))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack://react-training/./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2363859ba0e79ceba7e1")
/******/ })();
/******/ 
/******/ }
);