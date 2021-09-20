/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereact_training"]("main",{

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.usePostsData = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nfunction usePostsData() {\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\r\n    var token = react_1.useContext(tokenContext_1.tokenContext);\r\n    react_1.useEffect(function () {\r\n        axios_1.default\r\n            .get('https://oauth.reddit.com/best?limit=10', {\r\n            headers: { Authorization: \"bearer \" + token },\r\n        })\r\n            .then(function (resp) {\r\n            var posts = resp.data.data.children.map(function (post) {\r\n                return {\r\n                    authorName: post.data.author,\r\n                    created: post.data.created,\r\n                    link: post.data.permalink,\r\n                    previewSrc: post.data.preview !== undefined\r\n                        ? post.data.preview.images[0].source.url.replaceAll('&amp;', '&')\r\n                        : null,\r\n                    score: post.data.score,\r\n                    title: post.data.title,\r\n                };\r\n            });\r\n            Promise.all(posts.map(function (post, i) {\r\n                return axios_1.default\r\n                    .get(\"https://oauth.reddit.com/user/\" + post.authorName + \"/about\", {\r\n                    headers: { Authorization: \"bearer \" + token },\r\n                })\r\n                    .then(function (resp) {\r\n                    posts[i].authorAvatarSrc =\r\n                        resp.data.data.snoovatar_img !== ''\r\n                            ? resp.data.data.snoovatar_img\r\n                            : null;\r\n                })\r\n                    .catch(console.log);\r\n            }))\r\n                .then(function () {\r\n                setData({ posts: posts });\r\n            })\r\n                .catch(console.log);\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack://react-training/./src/hooks/usePostsData.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5477102471663825f4c9")
/******/ })();
/******/ 
/******/ }
);