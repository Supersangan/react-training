/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    console.log('3pr6xGqci--_mOnIpz9ubA');\r\n    return (react_1.default.createElement(\"a\", { className: userblock_css_1.default.root, href: \"https://www.reddit.com/api/v1/authorize?client_id=&response_type=code&state=random_string&redirect_uri=http://localhost:3000&duration=permanent&scope=read identity submit\\\"}\\n    >\\n      <div className={styles.avatarBox}>\\n        {avatarSrc ? (\\n          <img\\n            src={avatarSrc}\\n            alt=\\\"user avatar\\\"\\n            className={styles.avatarImage}\\n          />\\n        ) : (\\n          <IconAnon />\\n        )}\\n      </div>\\n\\n      <div className={styles.username}>\\n        <Break size={12} />\\n        <Text size={20} color={username ? EColors.black : EColors.gray99}>\\n          {username || '\\u0410\\u043D\\u043E\\u043D\\u0438\\u043C'}\\n        </Text>\\n      </div>\\n    </a>\\n  );\\n}\\n\" }));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack://react-training/./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("81f825161451b462e7ec")
/******/ })();
/******/ 
/******/ }
);