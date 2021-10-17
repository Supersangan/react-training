/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");;
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");;
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");;
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: ./src/main.global.css
// Exports
/* harmony default export */ const main_global = ({

});

;// CONCATENATED MODULE: external "react-hot-loader/root"
const root_namespaceObject = require("react-hot-loader/root");;
;// CONCATENATED MODULE: ./src/shared/Header/header.css
// Exports
/* harmony default export */ const header = ({
	"header": "header__header--1FWjL"
});

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");;
;// CONCATENATED MODULE: ./src/store/me/actions.ts

var ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: ME_REQUEST,
}); };
var ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: ME_REQUEST_SUCCESS,
    data: data,
}); };
var ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: ME_REQUEST_ERROR,
    error: error,
}); };
var meRequestAsync = function () {
    return function (dispatch, getState) {
        dispatch(meRequest());
        external_axios_default().get('https://oauth.reddit.com/api/v1/me', {
            headers: { Authorization: "bearer " + getState().token },
        })
            .then(function (resp) {
            var userData = resp.data;
            dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
        })
            .catch(function (error) {
            console.log(error);
            dispatch(meRequestError(String(error)));
        });
    };
};

;// CONCATENATED MODULE: ./src/hooks/useUserData.ts



function useUserData() {
    var data = (0,external_react_redux_namespaceObject.useSelector)(function (state) { return state.me.data; });
    var loading = (0,external_react_redux_namespaceObject.useSelector)(function (state) { return state.me.loading; });
    var token = (0,external_react_redux_namespaceObject.useSelector)(function (state) { return state.token; });
    var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    (0,external_react_namespaceObject.useEffect)(function () {
        if (!token)
            return;
        dispatch(meRequestAsync());
    }, [token]);
    return {
        data: data,
        loading: loading,
    };
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/searchblock.css
// Exports
/* harmony default export */ const searchblock = ({
	"searchBlock": "searchblock__searchBlock--3k13m"
});

;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");;
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/Break/break.css
// Exports
/* harmony default export */ const Break_break = ({
	"s4": "break__s4--2y665",
	"s6": "break__s6--2ANC3",
	"s8": "break__s8--1w4wi",
	"s12": "break__s12--VvXWv",
	"s16": "break__s16--1tvPe",
	"s20": "break__s20--3L9vW",
	"top": "break__top--3vWQe",
	"inline": "break__inline--1bIim",
	"m4": "break__m4--1bTeZ",
	"m6": "break__m6--H0P6X",
	"m8": "break__m8--22nky",
	"m12": "break__m12--3ztoq",
	"m16": "break__m16--2g0aw",
	"m20": "break__m20--1DFvj",
	"t4": "break__t4--3Li_U",
	"t6": "break__t6--3fiIi",
	"t8": "break__t8--3O0Un",
	"t12": "break__t12--1Ytg5",
	"t16": "break__t16--2ur6s",
	"t20": "break__t20--AJxeq",
	"d4": "break__d4--1DM6q",
	"d6": "break__d6--1WaNk",
	"d8": "break__d8--2muB0",
	"d12": "break__d12--2ar5K",
	"d16": "break__d16--Y3uo7",
	"d20": "break__d20--1a3K4"
});

;// CONCATENATED MODULE: ./src/shared/Break/Break.tsx



function Break(props) {
    var _a, _b, _c, _d, _e;
    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var classes = external_classnames_default()(Break_break["s" + size], (_a = {}, _a[Break_break["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[Break_break["t" + tabletSize]] = tabletSize, _b), (_c = {}, _c[Break_break["d" + desktopSize]] = desktopSize, _c), (_d = {}, _d[Break_break.inline] = inline, _d), (_e = {}, _e[Break_break.top] = top, _e));
    return external_react_default().createElement("div", { className: classes });
}

;// CONCATENATED MODULE: ./src/shared/Break/index.ts


;// CONCATENATED MODULE: ./src/shared/icons/IconAnon.tsx

function IconAnon(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconComments.tsx

function IconComments(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconHide.tsx

function IconHide(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconMenu.tsx

function IconMenu(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        external_react_default().createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        external_react_default().createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconReport.tsx

function IconReport(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconSave.tsx

function IconSave(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconShare.tsx

function IconShare(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/index.ts








;// CONCATENATED MODULE: ./src/shared/InlineText/inlinetext.css
// Exports
/* harmony default export */ const inlinetext = ({
	"s28": "inlinetext__s28--2W9de",
	"s20": "inlinetext__s20--34PFq",
	"s16": "inlinetext__s16--NgBSL",
	"s14": "inlinetext__s14--2nnZ5",
	"s12": "inlinetext__s12--3SQ0h",
	"s10": "inlinetext__s10--3omjI",
	"bold": "inlinetext__bold--FP13o",
	"black": "inlinetext__black--Anehe",
	"orange": "inlinetext__orange--1pTZi",
	"green": "inlinetext__green--2rKrh",
	"white": "inlinetext__white--3GJPa",
	"grayF4": "inlinetext__grayF4--13try",
	"grayF3": "inlinetext__grayF3--3j-nz",
	"grayD9": "inlinetext__grayD9--3nwjs",
	"grayC4": "inlinetext__grayC4--2Q9L5",
	"gray99": "inlinetext__gray99--3ID7P",
	"gray66": "inlinetext__gray66--35XKo",
	"m28": "inlinetext__m28--3FmCE",
	"m20": "inlinetext__m20--kB1ZQ",
	"m16": "inlinetext__m16--QuUgt",
	"m14": "inlinetext__m14--2hd0G",
	"m12": "inlinetext__m12--1V996",
	"m10": "inlinetext__m10--3enmv",
	"t28": "inlinetext__t28--1YQE_",
	"t20": "inlinetext__t20--2Ibg_",
	"t16": "inlinetext__t16--qgQ0V",
	"t14": "inlinetext__t14--1iEhK",
	"t12": "inlinetext__t12--2xBjJ",
	"t10": "inlinetext__t10--pyKQ5",
	"d28": "inlinetext__d28--135wk",
	"d20": "inlinetext__d20--vownb",
	"d16": "inlinetext__d16--2rRel",
	"d14": "inlinetext__d14--3F7H4",
	"d12": "inlinetext__d12--3qO4H",
	"d10": "inlinetext__d10--2rOTc"
});

;// CONCATENATED MODULE: ./src/shared/InlineText/InlineText.tsx



var EColors;
(function (EColors) {
    EColors["inherit"] = "inherit";
    EColors["black"] = "black";
    EColors["orange"] = "orange";
    EColors["green"] = "green";
    EColors["white"] = "white";
    EColors["grayF4"] = "grayF4";
    EColors["grayF3"] = "grayF3";
    EColors["grayD9"] = "grayD9";
    EColors["grayC4"] = "grayC4";
    EColors["gray99"] = "gray99";
    EColors["gray66"] = "gray66";
})(EColors || (EColors = {}));
function InlineText(props) {
    var _a, _b, _c, _d;
    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColors.inherit : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var classes = external_classnames_default()(inlinetext["s" + size], inlinetext[color], (_a = {}, _a[inlinetext.bold] = bold, _a), (_b = {}, _b[inlinetext["m" + mobileSize]] = mobileSize, _b), (_c = {}, _c[inlinetext["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[inlinetext["d" + desktopSize]] = desktopSize, _d));
    return external_react_default().createElement(As, { className: classes }, children);
}

;// CONCATENATED MODULE: ./src/shared/InlineText/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/userblock.css
// Exports
/* harmony default export */ const userblock = ({
	"root": "userblock__root--k-Ikf",
	"avatarBox": "userblock__avatarBox--39ScI",
	"avatarImage": "userblock__avatarImage--3g8IT",
	"username": "userblock__username--1EVWz"
});

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx





var HOMEPAGE = 'C:\Users\sanga';
var CLIENT_ID = 'undefined';
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (external_react_default().createElement("a", { className: userblock.root, href: "https://www.reddit.com/api/v1/authorize?client_id=" + CLIENT_ID + "&response_type=code&state=random_string&redirect_uri=" + HOMEPAGE + "/auth&duration=permanent&scope=read identity submit" },
        external_react_default().createElement("div", { className: userblock.avatarBox }, avatarSrc ? (external_react_default().createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock.avatarImage })) : (external_react_default().createElement(IconAnon, null))),
        external_react_default().createElement("div", { className: userblock.username },
            external_react_default().createElement(Break, { size: 12 }),
            loading ? (external_react_default().createElement(InlineText, { size: 20, color: EColors.gray99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (external_react_default().createElement(InlineText, { size: 20, color: username ? EColors.black : EColors.gray99 }, username || 'Аноним')))));
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/SearchBlock.tsx




function SearchBlock() {
    var _a = useUserData(), data = _a.data, loading = _a.loading;
    return (external_react_default().createElement("div", { className: searchblock.searchBlock },
        external_react_default().createElement(UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/sortblock.css
// Exports
/* harmony default export */ const sortblock = ({
	"sortBlock": "sortblock__sortBlock--4Fasu"
});

;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/SortBlock.tsx


function SortBlock() {
    return (external_react_default().createElement("div", { className: sortblock.sortBlock }, "sorting dropdown"));
}

;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/threadtitle.css
// Exports
/* harmony default export */ const threadtitle = ({
	"threadTitle": "threadtitle__threadTitle--1uMoM"
});

;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/ThreadTitle.tsx


function ThreadTitle() {
    return (external_react_default().createElement("h1", { className: threadtitle.threadTitle }, "Header"));
}

;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/Header.tsx





function Header() {
    return (external_react_default().createElement("header", { className: header.header },
        external_react_default().createElement(SearchBlock, null),
        external_react_default().createElement(ThreadTitle, null),
        external_react_default().createElement(SortBlock, null)));
}

;// CONCATENATED MODULE: ./src/shared/Header/index.ts


;// CONCATENATED MODULE: ./src/shared/Content/content.css
// Exports
/* harmony default export */ const content = ({
	"content": "content__content--3z6rw"
});

;// CONCATENATED MODULE: ./src/shared/Content/Content.tsx


function Content(_a) {
    var children = _a.children;
    return (external_react_default().createElement("main", { className: content.content }, children));
}

;// CONCATENATED MODULE: ./src/shared/Content/index.ts


;// CONCATENATED MODULE: ./src/shared/Layout/layout.css
// Exports
/* harmony default export */ const layout = ({
	"layout": "layout__layout--1BrJT"
});

;// CONCATENATED MODULE: ./src/shared/Layout/Layout.tsx


function Layout(_a) {
    var children = _a.children;
    return (external_react_default().createElement("div", { className: layout.layout }, children));
}

;// CONCATENATED MODULE: ./src/shared/Layout/index.ts


;// CONCATENATED MODULE: ./src/utils/js/getNumeralForm.ts
function getNumeralForm(one, two, five, val) {
    var n = Math.abs(val);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

;// CONCATENATED MODULE: ./src/utils/js/msToTimeBefore.ts

function msToTimeBefore(ms) {
    var seconds = parseInt((ms / 1000).toFixed(1));
    var minutes = parseInt((ms / (1000 * 60)).toFixed(1));
    var hours = parseInt((ms / (1000 * 60 * 60)).toFixed(1));
    var days = parseInt((ms / (1000 * 60 * 60 * 24)).toFixed(1));
    var time;
    if (seconds < 60) {
        time = seconds + ' ' + getNumeralForm('секунду', 'секунды', 'секунд', seconds);
    }
    else if (minutes < 60) {
        time = minutes + ' ' + getNumeralForm('минуту', 'минуты', 'минут', minutes);
    }
    else if (hours < 24) {
        time = hours + ' ' + getNumeralForm('час', 'часа', 'часов', hours);
    }
    else {
        time = days + ' ' + getNumeralForm('день', 'дня', 'дней', days);
    }
    return time;
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/card.css
// Exports
/* harmony default export */ const card = ({
	"card": "card__card--fbpLh"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/Actions/SaveButton/savebutton.css
// Exports
/* harmony default export */ const savebutton = ({
	"saveButton": "savebutton__saveButton--2hjdh"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx


function SaveButton() {
    return (external_react_default().createElement("button", { className: savebutton.saveButton },
        external_react_default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            external_react_default().createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            external_react_default().createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/Actions/SaveButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/Actions/actions.css
// Exports
/* harmony default export */ const actions = ({
	"actions": "actions__actions--24uZg"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/Actions/Actions.tsx



function Actions() {
    return (external_react_default().createElement("div", { className: actions.actions },
        external_react_default().createElement(SaveButton, null),
        external_react_default().createElement(SaveButton, null)));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/Actions/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css
// Exports
/* harmony default export */ const commentsbutton = ({
	"commentsButton": "commentsbutton__commentsButton--fFgq8",
	"commentsIcon": "commentsbutton__commentsIcon--jP_tI",
	"commentsNumber": "commentsbutton__commentsNumber--7Zhzs"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx


function CommentsButton() {
    return (external_react_default().createElement("button", { className: commentsbutton.commentsButton },
        external_react_default().createElement("svg", { className: commentsbutton.commentsIcon, width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            external_react_default().createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        external_react_default().createElement("span", { className: commentsbutton.commentsNumber }, "12")));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/CommentsButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/controls.css
// Exports
/* harmony default export */ const controls = ({
	"controls": "controls__controls--1d2gg"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css
// Exports
/* harmony default export */ const karmacounter = ({
	"karmaCounter": "karmacounter__karmaCounter--2sONS",
	"karmaUp": "karmacounter__karmaUp--11EGS",
	"karmaValue": "karmacounter__karmaValue--RDHhX",
	"karmaDown": "karmacounter__karmaDown--2s4RX"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx


function KarmaCounter(_a) {
    var score = _a.score;
    return (external_react_default().createElement("div", { className: karmacounter.karmaCounter },
        external_react_default().createElement("button", { className: karmacounter.karmaUp },
            external_react_default().createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                external_react_default().createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
        external_react_default().createElement("span", { className: karmacounter.karmaValue }, score),
        external_react_default().createElement("button", { className: karmacounter.karmaDown },
            external_react_default().createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                external_react_default().createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/Controls.tsx





function Controls(_a) {
    var score = _a.score;
    return (external_react_default().createElement("div", { className: controls.controls },
        external_react_default().createElement(KarmaCounter, { score: score }),
        external_react_default().createElement(CommentsButton, null),
        external_react_default().createElement(Actions, null)));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/index.ts


;// CONCATENATED MODULE: ./src/shared/Dropdown/dropdown.css
// Exports
/* harmony default export */ const dropdown = ({
	"container": "dropdown__container--1PHA3"
});

;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");;
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/Dropdown/DropdownModal/dropdownmodal.css
// Exports
/* harmony default export */ const dropdownmodal = ({
	"container": "dropdownmodal__container--1UUq0",
	"wrapper": "dropdownmodal__wrapper--2TXHV"
});

;// CONCATENATED MODULE: ./src/shared/Dropdown/DropdownModal/DropdownModal.tsx



function DropdownModal(_a) {
    var children = _a.children, setIsDropdownOpen = _a.setIsDropdownOpen, onClose = _a.onClose, left = _a.left, top = _a.top, width = _a.width;
    var node = document.querySelector('#dropdownModal_root');
    if (!node)
        return null;
    var ref = (0,external_react_namespaceObject.useRef)(null);
    (0,external_react_namespaceObject.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node &&
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return external_react_dom_default().createPortal(external_react_default().createElement("div", { className: dropdownmodal.container, style: { left: left, top: top, width: width }, ref: ref },
        external_react_default().createElement("div", { className: dropdownmodal.wrapper, onClick: function () { return setIsDropdownOpen(false); } }, children)), node);
}

;// CONCATENATED MODULE: ./src/shared/Dropdown/DropdownModal/index.ts


;// CONCATENATED MODULE: ./src/shared/Dropdown/Dropdown.tsx



var NOOP = function () { };
function Dropdown(_a) {
    var button = _a.button, children = _a.children, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c, _d = _a.onClose, onClose = _d === void 0 ? NOOP : _d;
    var _e = external_react_default().useState(isOpen), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];
    var _f = external_react_default().useState(0), left = _f[0], setLeft = _f[1];
    var _g = external_react_default().useState(0), top = _g[0], setTop = _g[1];
    var _h = external_react_default().useState(0), width = _h[0], setWidth = _h[1];
    external_react_default().useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    external_react_default().useEffect(function () { return (isDropdownOpen ? onOpen() : onClose()); }, [isDropdownOpen]);
    var ref = (0,external_react_namespaceObject.useRef)(null);
    function setModalAttributes(ref) {
        var _a;
        var rect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!rect)
            return;
        setLeft(rect.left + scrollX);
        setTop(rect.top + rect.height + scrollY);
        setWidth(rect.width);
    }
    var handleOpen = function (event) {
        if (!isOpen) {
            setModalAttributes(ref);
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    (0,external_react_namespaceObject.useEffect)(function () {
        if (!isDropdownOpen)
            return;
        function handleResize() {
            setModalAttributes(ref);
        }
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [isDropdownOpen]);
    return (external_react_default().createElement("div", { className: dropdown.container },
        external_react_default().createElement("div", { onClick: handleOpen, ref: ref }, button),
        isDropdownOpen && (external_react_default().createElement(DropdownModal, { children: children, onClose: function () {
                setIsDropdownOpen(false);
            }, setIsDropdownOpen: setIsDropdownOpen, left: left, top: top, width: width }))));
}

;// CONCATENATED MODULE: ./src/shared/Dropdown/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/menu.css
// Exports
/* harmony default export */ const menu = ({
	"root": "menu__root--vm4x0",
	"menuButton": "menu__menuButton--1zAaD",
	"menuIcon": "menu__menuIcon--3Y0-7"
});

;// CONCATENATED MODULE: ./src/shared/Icon/icon.css
// Exports
/* harmony default export */ const icon = ({
	"icon": "icon__icon--3Z6TM",
	"s32": "icon__s32--11sPZ",
	"s28": "icon__s28--3GNgu",
	"s24": "icon__s24--WqSGq",
	"s20": "icon__s20--HY8bp",
	"s18": "icon__s18--3ssnf",
	"s16": "icon__s16--6BeWI",
	"s14": "icon__s14--2ProU",
	"s12": "icon__s12--3MUIY",
	"s10": "icon__s10--1yIGc",
	"s8": "icon__s8--2njjB",
	"m32": "icon__m32--BJ_Zn",
	"m28": "icon__m28--1GLGx",
	"m24": "icon__m24--3mmDr",
	"m20": "icon__m20--1buH_",
	"m18": "icon__m18--2bxOK",
	"m16": "icon__m16--9Um-5",
	"m14": "icon__m14--2Mug7",
	"m12": "icon__m12--1KTAF",
	"m10": "icon__m10--1FFSl",
	"m8": "icon__m8--1KXNU",
	"t32": "icon__t32--2CRon",
	"t28": "icon__t28--1vVMK",
	"t24": "icon__t24--ie3IY",
	"t20": "icon__t20--23N1c",
	"t18": "icon__t18--2fTE1",
	"t16": "icon__t16--1CR5c",
	"t14": "icon__t14--10zvE",
	"t12": "icon__t12--39h3l",
	"t10": "icon__t10--1g9bW",
	"t8": "icon__t8--2O-uk",
	"d32": "icon__d32--28cn3",
	"d28": "icon__d28--2jo73",
	"d24": "icon__d24--8BUOz",
	"d20": "icon__d20--eiyEo",
	"d18": "icon__d18--2bVQi",
	"d16": "icon__d16--3Jog-",
	"d14": "icon__d14--2wVnN",
	"d12": "icon__d12--GxdHE",
	"d10": "icon__d10--2ygSt",
	"d8": "icon__d8--1C2Iy"
});

;// CONCATENATED MODULE: ./src/shared/icons/IconUnwrap.tsx

function IconUnwrap(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 13 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6.5 7L5.57483e-07 0.623141L0.703795 -1.55181e-06L6.5 5.6864L12.2962 -5.38365e-07L13 0.623142L6.5 7Z", fill: "#CC6633" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconCode.tsx

function IconCode(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 20 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconImage.tsx

function IconImage(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconDocument.tsx

function IconDocument(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconSend.tsx

function IconSend(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 9 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.50001 0.560486L8.68001 4.93888L7.87405 5.70078L4.50001 2.1666L1.12597 5.70078L0.320007 4.93888L4.50001 0.560486ZM1.09064 4.919L1.10643 4.93392L4.50001 1.37927L7.89359 4.93392L7.90937 4.919L4.50001 1.34782L1.09064 4.919Z", fill: "white" }),
        external_react_default().createElement("rect", { x: "5.04218", y: "2.04486", width: "7.6356", height: "1.0842", transform: "rotate(90 5.04218 2.04486)", fill: "white" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconEmoji.tsx

function IconEmoji(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18.5 9.5C18.5 14.4706 14.4706 18.5 9.5 18.5C4.52944 18.5 0.5 14.4706 0.5 9.5C0.5 4.52944 4.52944 0.5 9.5 0.5C14.4706 0.5 18.5 4.52944 18.5 9.5Z", stroke: "#CC6633", strokeLinecap: "round", strokeLinejoin: "round" }),
        external_react_default().createElement("path", { d: "M5.70001 11.4C5.70001 11.4 7.12501 13.3 9.50001 13.3C11.875 13.3 13.3 11.4 13.3 11.4", stroke: "#CC6633", strokeLinecap: "round", strokeLinejoin: "round" }),
        external_react_default().createElement("path", { d: "M6.64999 6.64954H6.65999", stroke: "#CC6633", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        external_react_default().createElement("path", { d: "M12.35 6.64954H12.36", stroke: "#CC6633", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconPluse.tsx

function IconPluse(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 7 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M4.1523 2.8066H7V3.96226H4.1523V7H2.8477V3.96226H0V2.8066H2.8477V0H4.1523V2.8066Z", fill: "white" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconPDF.tsx

function IconPDF(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconA.tsx

function IconA(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconAnswer.tsx

function IconAnswer(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconVoice.tsx

function IconVoice(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconDownload.tsx

function IconDownload(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 14 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconLink.tsx

function IconLink(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 20 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconPencil.tsx

function IconPencil(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconRefresh.tsx

function IconRefresh(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/icons/IconUser.tsx

function IconUser(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? width : _b;
    return (external_react_default().createElement("svg", { width: width, height: height, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z", fill: "#999999" })));
}

;// CONCATENATED MODULE: ./src/shared/Icon/Icon.tsx




















var EIcons;
(function (EIcons) {
    EIcons["comments"] = "comments";
    EIcons["hide"] = "hide";
    EIcons["menu"] = "menu";
    EIcons["report"] = "report";
    EIcons["save"] = "save";
    EIcons["share"] = "share";
    EIcons["code"] = "code";
    EIcons["image"] = "image";
    EIcons["document"] = "document";
    EIcons["download"] = "download";
    EIcons["user"] = "user";
    EIcons["refresh"] = "refresh";
    EIcons["link"] = "link";
    EIcons["voice"] = "voice";
    EIcons["answer"] = "answer";
    EIcons["pencil"] = "pencil";
    EIcons["a"] = "a";
    EIcons["pdf"] = "pdf";
    EIcons["unwrap"] = "unwrap";
    EIcons["pluse"] = "pluse";
    EIcons["send"] = "send";
    EIcons["emoji"] = "emoji";
})(EIcons || (EIcons = {}));
var components = {
    comments: IconComments,
    hide: IconHide,
    menu: IconMenu,
    report: IconReport,
    save: IconSave,
    share: IconShare,
    code: IconCode,
    image: IconImage,
    document: IconDocument,
    download: IconDownload,
    user: IconUser,
    refresh: IconRefresh,
    link: IconLink,
    voice: IconVoice,
    answer: IconAnswer,
    pencil: IconPencil,
    a: IconA,
    pdf: IconPDF,
    unwrap: IconUnwrap,
    pluse: IconPluse,
    emoji: IconEmoji,
    send: IconSend,
};
function Icon(props) {
    var _a, _b, _c;
    var _d = props.name, name = _d === void 0 ? EIcons.share : _d, _e = props.size, size = _e === void 0 ? 16 : _e, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var IconComponent = components[name];
    var classes = external_classnames_default()(icon.icon, icon["s" + size], (_a = {}, _a[icon["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[icon["t" + tabletSize]] = tabletSize, _b), (_c = {}, _c[icon["d" + desktopSize]] = desktopSize, _c));
    return (external_react_default().createElement("span", { className: classes },
        external_react_default().createElement(IconComponent, null)));
}

;// CONCATENATED MODULE: ./src/shared/Icon/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/MenuList/menulist.css
// Exports
/* harmony default export */ const menulist = ({
	"root": "menulist__root--3FmFI",
	"itemWrapper": "menulist__itemWrapper--3Td9r",
	"itemWrapper_tabletMin": "menulist__itemWrapper_tabletMin--3FxeU",
	"item": "menulist__item--qqlTw",
	"item_close": "menulist__item_close--290rd",
	"icon": "menulist__icon--1o178",
	"itemWrapper_tabletMax": "menulist__itemWrapper_tabletMax--fIvHV"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/MenuList/MenuList.tsx





function MenuList() {
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("ul", { className: menulist.root },
            external_react_default().createElement("li", { className: menulist.itemWrapper + ' ' + menulist.itemWrapper_tabletMin },
                external_react_default().createElement("a", { className: menulist.item, href: "#comments" },
                    external_react_default().createElement(Icon, { name: EIcons.comments, size: 16 }),
                    external_react_default().createElement(Break, { size: 6, inline: true }),
                    external_react_default().createElement(InlineText, { size: 14, mobileSize: 12 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"))),
            external_react_default().createElement("li", { className: menulist.itemWrapper + ' ' + menulist.itemWrapper_tabletMin },
                external_react_default().createElement("a", { className: menulist.item, href: "#share" },
                    external_react_default().createElement(Icon, { name: EIcons.share, size: 16 }),
                    external_react_default().createElement(Break, { size: 6, inline: true }),
                    external_react_default().createElement(InlineText, { size: 14, mobileSize: 12 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"))),
            external_react_default().createElement("li", { className: menulist.itemWrapper },
                external_react_default().createElement("a", { className: menulist.item, href: "#hide" },
                    external_react_default().createElement(Icon, { name: EIcons.hide, size: 16 }),
                    external_react_default().createElement(Break, { size: 6, inline: true }),
                    external_react_default().createElement(InlineText, { size: 14, mobileSize: 12 }, "\u0421\u043A\u0440\u044B\u0442\u044C"))),
            external_react_default().createElement("li", { className: menulist.itemWrapper + ' ' + menulist.itemWrapper_tabletMin },
                external_react_default().createElement("a", { className: menulist.item, href: "#save" },
                    external_react_default().createElement(Icon, { name: EIcons.save, size: 16 }),
                    external_react_default().createElement(Break, { size: 6, mobileSize: 12, inline: true }),
                    external_react_default().createElement(InlineText, { size: 14, mobileSize: 12 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))),
            external_react_default().createElement("li", { className: menulist.itemWrapper },
                external_react_default().createElement("a", { className: menulist.item, href: "#report" },
                    external_react_default().createElement(Icon, { name: EIcons.report, size: 16 }),
                    external_react_default().createElement(Break, { size: 6, inline: true }),
                    external_react_default().createElement(InlineText, { size: 14, mobileSize: 12 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))),
            external_react_default().createElement("li", { className: menulist.itemWrapper + ' ' + menulist.itemWrapper_tabletMax },
                external_react_default().createElement("a", { className: menulist.item + ' ' + menulist.item_close, href: "#close" },
                    external_react_default().createElement(InlineText, { size: 14 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/MenuList/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/Menu.tsx





function Menu() {
    return (external_react_default().createElement("div", { className: menu.root },
        external_react_default().createElement(Dropdown, { button: external_react_default().createElement("button", { className: menu.menuButton },
                external_react_default().createElement("span", { className: menu.menuIcon },
                    external_react_default().createElement(IconMenu, null))) },
            external_react_default().createElement(MenuList, null))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Preview/preview.css
// Exports
/* harmony default export */ const preview = ({
	"preview": "preview__preview--1drxs",
	"previewImg": "preview__previewImg--2ucf0"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Preview/Preview.tsx


function Preview(_a) {
    var src = _a.src;
    return (external_react_default().createElement("div", { className: preview.preview },
        external_react_default().createElement("img", { className: preview.previewImg, src: src, alt: "preview" })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Preview/index.ts


;// CONCATENATED MODULE: ./src/shared/CreatedAt/createdat.css
// Exports
/* harmony default export */ const createdat = ({
	"root": "createdat__root--hIbSe",
	"publishedLabel": "createdat__publishedLabel--3HAp0"
});

;// CONCATENATED MODULE: ./src/shared/CreatedAt/CreatedAt.tsx


function CreatedAt(_a) {
    var _b = _a.labeled, labeled = _b === void 0 ? false : _b, text = _a.text;
    return (external_react_default().createElement("span", { className: createdat.root },
        labeled && external_react_default().createElement("span", { className: createdat.publishedLabel }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
        text,
        " \u043D\u0430\u0437\u0430\u0434"));
}

;// CONCATENATED MODULE: ./src/shared/CreatedAt/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/TextContent/textcontent.css
// Exports
/* harmony default export */ const textcontent = ({
	"textContent": "textcontent__textContent--2MDiU",
	"metaData": "textcontent__metaData--25U5U",
	"userLink": "textcontent__userLink--3_ubw",
	"avatar": "textcontent__avatar--2Xw0t",
	"username": "textcontent__username--1VONy",
	"title": "textcontent__title--3fGJL",
	"card": "textcontent__card--2aIq1",
	"postLink": "textcontent__postLink--39Tvn"
});

;// CONCATENATED MODULE: ./src/shared/AuthorLink/AuthorAvatar/authoravatar.css
// Exports
/* harmony default export */ const authoravatar = ({
	"root": "authoravatar__root--jz2ka"
});

;// CONCATENATED MODULE: ./src/shared/AuthorLink/AuthorAvatar/AuthorAvatar.tsx


function AuthorAvatar(_a) {
    var src = _a.src;
    src = src ? src : "https://cdn.dribbble.com/users/939433/screenshots/13626869/image.png?compress=1&resize=100x100";
    return external_react_default().createElement("img", { className: authoravatar.root, src: src, alt: "avatar" });
}

;// CONCATENATED MODULE: ./src/shared/AuthorLink/AuthorAvatar/index.ts


;// CONCATENATED MODULE: ./src/shared/AuthorLink/authorlink.css
// Exports
/* harmony default export */ const authorlink = ({
	"root": "authorlink__root--27z0w"
});

;// CONCATENATED MODULE: ./src/shared/AuthorLink/AuthorLink.tsx


function AuthorLink(_a) {
    var href = _a.href, children = _a.children;
    return (external_react_default().createElement("a", { className: authorlink.root, href: href }, children));
}

;// CONCATENATED MODULE: ./src/shared/AuthorLink/index.ts


;// CONCATENATED MODULE: ./src/shared/AuthorLink/AuthorName/authorname.css
// Exports
/* harmony default export */ const authorname = ({
	"root": "authorname__root--c-Ulm"
});

;// CONCATENATED MODULE: ./src/shared/AuthorLink/AuthorName/AuthorName.tsx


function AuthorName(_a) {
    var name = _a.name;
    return (external_react_default().createElement("span", { className: authorname.root }, name));
}

;// CONCATENATED MODULE: ./src/shared/AuthorLink/AuthorName/index.ts


;// CONCATENATED MODULE: external "react-router-dom"
const external_react_router_dom_namespaceObject = require("react-router-dom");;
;// CONCATENATED MODULE: ./src/shared/CardsList/Card/TextContent/TextContent.tsx







function TextContent(props) {
    var link = props.link, title = props.title, published = props.published, authorName = props.authorName, authorAvatarSrc = props.authorAvatarSrc;
    return (external_react_default().createElement("div", { className: textcontent.textContent },
        external_react_default().createElement("div", { className: textcontent.metaData },
            external_react_default().createElement(AuthorLink, { href: "#user-link" },
                external_react_default().createElement(AuthorAvatar, { src: authorAvatarSrc }),
                external_react_default().createElement(AuthorName, { name: authorName })),
            external_react_default().createElement(CreatedAt, { labeled: true, text: published })),
        external_react_default().createElement("h2", { className: textcontent.title },
            external_react_default().createElement(external_react_router_dom_namespaceObject.Link, { className: textcontent.postLink, to: "/posts/" + link }, title))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/TextContent/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Card.tsx







function Card(_a) {
    var post = _a.post;
    var authorName = post.authorName, created = post.created, link = post.link, score = post.score, title = post.title;
    var previewSrc = post.previewSrc, authorAvatarSrc = post.authorAvatarSrc;
    previewSrc =
        previewSrc == null
            ? 'https://cdn.dribbble.com/users/2859475/screenshots/6960566/media/f3575c6f3f42056195c42591e1ff99a5.jpg'
            : previewSrc;
    authorAvatarSrc =
        authorAvatarSrc == null
            ? 'https://cdn.dribbble.com/users/939433/screenshots/13626869/image.png?compress=1&resize=100x100'
            : authorAvatarSrc;
    var published = msToTimeBefore(Date.now() - created * 1000);
    return (external_react_default().createElement("li", { className: card.card },
        external_react_default().createElement(TextContent, { link: link, title: title, published: published, authorName: authorName, authorAvatarSrc: authorAvatarSrc }),
        external_react_default().createElement(Preview, { src: previewSrc }),
        external_react_default().createElement(Menu, null),
        external_react_default().createElement(Controls, { score: score })));
}
function msToTimeFrom(arg0) {
    throw new Error('Function not implemented.');
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/cardslist.css
// Exports
/* harmony default export */ const cardslist = ({
	"loadMore": "cardslist__loadMore--28v8R",
	"loadMoreButton": "cardslist__loadMoreButton--3LjP2",
	"cardsList": "cardslist__cardsList--3Y_Nu"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardsList.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





function CardsList() {
    var token = (0,external_react_redux_namespaceObject.useSelector)(function (state) { return state.token; });
    var _a = (0,external_react_namespaceObject.useState)([]), posts = _a[0], setPosts = _a[1];
    var _b = (0,external_react_namespaceObject.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0,external_react_namespaceObject.useState)(''), errorLoading = _c[0], setErrorLoading = _c[1];
    var _d = (0,external_react_namespaceObject.useState)(''), nextAfter = _d[0], setNextAfter = _d[1];
    var _e = (0,external_react_namespaceObject.useState)(true), firstLoading = _e[0], setFirstLoading = _e[1];
    var _f = (0,external_react_namespaceObject.useState)(0), loadingsCount = _f[0], setLoadingsCount = _f[1];
    var bottomOfList = (0,external_react_namespaceObject.useRef)(null);
    (0,external_react_namespaceObject.useEffect)(function () {
        function load() {
            return __awaiter(this, void 0, void 0, function () {
                var response, posts_1, after, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!nextAfter && !firstLoading)
                                return [2 /*return*/];
                            setLoading(true);
                            setErrorLoading('');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, external_axios_default().get('https://oauth.reddit.com/best/', {
                                    headers: { Authorization: "bearer " + token },
                                    params: {
                                        limit: 2,
                                        after: nextAfter,
                                    },
                                })];
                        case 2:
                            response = _a.sent();
                            if (response.data.kind != 'Listing')
                                return [2 /*return*/];
                            posts_1 = response.data.data.children.map(function (post) {
                                return {
                                    id: post.data.id,
                                    authorName: post.data.author,
                                    created: post.data.created,
                                    link: post.data.id,
                                    previewSrc: post.data.preview !== undefined
                                        ? post.data.preview.images[0].source.url.replaceAll('&amp;', '&')
                                        : null,
                                    score: post.data.score,
                                    title: post.data.title,
                                };
                            });
                            after = response.data.data.after;
                            setPosts(function (prevPosts) { return prevPosts.concat.apply(prevPosts, posts_1); });
                            setNextAfter(after);
                            setLoadingsCount(loadingsCount + 1);
                            setFirstLoading(false);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            setErrorLoading(String(error_1));
                            return [3 /*break*/, 4];
                        case 4:
                            setLoading(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting && loadingsCount < 3) {
                load();
            }
        }, {
            rootMargin: '10px',
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [token, nextAfter, loadingsCount, firstLoading]);
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("ul", { className: cardslist.cardsList },
            posts.length === 0 && !loading && !errorLoading && (external_react_default().createElement("div", { style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
            posts.map(function (post) {
                return external_react_default().createElement(Card, { key: post.id, post: post });
            }),
            external_react_default().createElement("div", { ref: bottomOfList }),
            loading && external_react_default().createElement("div", { style: { textAlign: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),
            errorLoading && (external_react_default().createElement("div", { role: "alert", style: { textAlign: 'center' } }, errorLoading))),
        loadingsCount === 3 && (external_react_default().createElement("div", { className: cardslist.loadMore },
            external_react_default().createElement("button", { className: cardslist.loadMoreButton, onClick: function () { return setLoadingsCount(0); } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435...")))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/index.ts


;// CONCATENATED MODULE: ./src/shared/context/userContext.tsx


var userContext = external_react_default().createContext({});
function UserContextProvider(_a) {
    var children = _a.children;
    var data = useUserData().data;
    return external_react_default().createElement(userContext.Provider, { value: data }, children);
}

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
;// CONCATENATED MODULE: ./src/store/me/reducer.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var meReducer = function (state, action) {
    switch (action.type) {
        case ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        case ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/token/actions.ts
var SET_TOKEN = 'SET_TOKEN';
var setToken = function (token) { return ({
    type: SET_TOKEN,
    token: token,
}); };
var saveToken = function () {
    return function (dispatch) {
        var token = window.__token__ != 'undefined' ? window.__token__ : localStorage.getItem('token');
        if (token) {
            localStorage.setItem('token', token);
        }
        dispatch(setToken(token));
    };
};

;// CONCATENATED MODULE: ./src/store/reducer.ts
var reducer_assign = (undefined && undefined.__assign) || function () {
    reducer_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return reducer_assign.apply(this, arguments);
};



var initialState = {
    commentText: 'Привет, Skillbox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {},
    },
};
// UPDATE_COMMENT
var UPDATE_COMMENT = 'UPDATE_COMMENT';
var updateComment = function (text) { return ({
    type: UPDATE_COMMENT,
    text: text,
}); };
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_COMMENT:
            return reducer_assign(reducer_assign({}, state), { commentText: action.text });
        case SET_TOKEN:
            return reducer_assign(reducer_assign({}, state), { token: action.token });
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return reducer_assign(reducer_assign({}, state), { me: meReducer(state.me, action) });
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/hooks/useToken.ts



function useToken() {
    var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    (0,external_react_namespaceObject.useEffect)(function () {
        dispatch(saveToken());
    }, []);
}

;// CONCATENATED MODULE: ./src/shared/Token/Token.tsx

function Token() {
    useToken();
    return null;
}

;// CONCATENATED MODULE: ./src/shared/Token/index.ts


;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "react-router"
const external_react_router_namespaceObject = require("react-router");;
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");;
;// CONCATENATED MODULE: ./src/shared/CommentForm/commentform.css
// Exports
/* harmony default export */ const commentform = ({
	"form": "commentform__form--nmH4h",
	"input": "commentform__input--Cyl5U",
	"controls": "commentform__controls--3_ByL",
	"buttonPluse": "commentform__buttonPluse--1NwkB",
	"controlsButtons": "commentform__controlsButtons--1jvWH",
	"controlsButton": "commentform__controlsButton--Lgvid",
	"buttonEmoji": "commentform__buttonEmoji--xRIix",
	"buttonSubmit": "commentform__buttonSubmit--2kC8E",
	"buttonText": "commentform__buttonText--1Y1G0",
	"buttonArrow": "commentform__buttonArrow--kj4Z7"
});

;// CONCATENATED MODULE: ./src/shared/CommentForm/CommentForm.tsx
var CommentForm_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var CommentForm_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






function SaveFormStateToRedux() {
    var values = (0,external_formik_namespaceObject.useFormikContext)().values;
    var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    (0,external_react_namespaceObject.useEffect)(function () {
        if (!values)
            return;
        dispatch(updateComment(values.comment));
        console.log(values.comment);
    }, [values]);
    return null;
}
;
function CommentForm() {
    var _this = this;
    var commentInitialvalue = (0,external_react_redux_namespaceObject.useSelector)(function (state) { return state.commentText; });
    var initialValues = {
        comment: commentInitialvalue,
    };
    return (external_react_default().createElement(external_formik_namespaceObject.Formik, { initialValues: initialValues, onSubmit: function (values) { return CommentForm_awaiter(_this, void 0, void 0, function () {
            return CommentForm_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (response) { return setTimeout(response, 500); })];
                    case 1:
                        _a.sent();
                        alert(JSON.stringify(values));
                        return [2 /*return*/];
                }
            });
        }); } }, function (_a) {
        var values = _a.values, errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit, isSubmitting = _a.isSubmitting;
        return (external_react_default().createElement("form", { className: commentform.form, onSubmit: handleSubmit },
            external_react_default().createElement("button", { className: commentform.buttonPluse, type: "button" },
                external_react_default().createElement(Icon, { name: EIcons.pluse, size: 10 })),
            external_react_default().createElement("textarea", { className: commentform.input, name: "comment", defaultValue: values.comment, onChange: handleChange }),
            errors.comment && touched.comment && errors.comment,
            external_react_default().createElement("div", { className: commentform.controls },
                external_react_default().createElement("div", { className: commentform.controlsButtons },
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.code })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.image })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.document })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.download })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.user })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.refresh })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.link })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.voice })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.answer })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.pencil })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.a })),
                    external_react_default().createElement("button", { className: commentform.controlsButton, type: "button" },
                        external_react_default().createElement(Icon, { name: EIcons.pdf }))),
                external_react_default().createElement("button", { className: commentform.buttonEmoji, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.emoji, size: 20 })),
                external_react_default().createElement("button", { className: commentform.buttonSubmit, type: "submit", disabled: isSubmitting },
                    external_react_default().createElement("span", { className: commentform.buttonText }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
                    external_react_default().createElement("span", { className: commentform.buttonArrow },
                        external_react_default().createElement(Icon, { name: EIcons.send, size: 10 })))),
            external_react_default().createElement(SaveFormStateToRedux, null)));
    }));
}

;// CONCATENATED MODULE: ./src/shared/CommentForm/index.ts


;// CONCATENATED MODULE: ./src/shared/CommentFormContainer/CommentFormContainer.tsx


function CommentFormContainer() {
    return external_react_default().createElement(CommentForm, null);
}

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/KarmaCounter/karmacounter.css
// Exports
/* harmony default export */ const KarmaCounter_karmacounter = ({
	"root": "karmacounter__root--3Nt7e",
	"karmaValue": "karmacounter__karmaValue--3Y1TF",
	"sRow": "karmacounter__sRow--1vy9P",
	"sColumn": "karmacounter__sColumn--2HPPD",
	"mRow": "karmacounter__mRow--3swLW",
	"mColumn": "karmacounter__mColumn--PIqJP",
	"tRow": "karmacounter__tRow--1IQ1d",
	"tColumn": "karmacounter__tColumn--31Y4B",
	"dRow": "karmacounter__dRow--22eJF",
	"dColumn": "karmacounter__dColumn--1nf6w"
});

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/KarmaCounter/KarmaCounter.tsx



var EDirection;
(function (EDirection) {
    EDirection["row"] = "Row";
    EDirection["column"] = "Column";
})(EDirection || (EDirection = {}));
function KarmaCounter_KarmaCounter(props) {
    var _a, _b, _c;
    var score = props.score, _d = props.direction, direction = _d === void 0 ? 'row' : _d, mobileDirection = props.mobileDirection, tabletDirection = props.tabletDirection, desktopDirection = props.desktopDirection;
    var classes = external_classnames_default()(KarmaCounter_karmacounter.root, KarmaCounter_karmacounter["s" + direction], (_a = {}, _a[KarmaCounter_karmacounter["m" + mobileDirection]] = mobileDirection, _a), (_b = {}, _b[KarmaCounter_karmacounter["t" + tabletDirection]] = tabletDirection, _b), (_c = {}, _c[KarmaCounter_karmacounter["d" + desktopDirection]] = desktopDirection, _c));
    return (external_react_default().createElement("div", { className: classes },
        external_react_default().createElement("button", { className: KarmaCounter_karmacounter.karmaUp },
            external_react_default().createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                external_react_default().createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
        external_react_default().createElement("span", { className: KarmaCounter_karmacounter.karmaValue }, score),
        external_react_default().createElement("button", { className: KarmaCounter_karmacounter.karmaDown },
            external_react_default().createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                external_react_default().createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })))));
}

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/KarmaCounter/index.ts


;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/comment.css
// Exports
/* harmony default export */ const comment = ({
	"root": "comment__root--3M9FO",
	"controls": "comment__controls--3w_rN",
	"aside": "comment__aside--2tjp3",
	"asideKarmaCounter": "comment__asideKarmaCounter--1XEj5",
	"indent": "comment__indent--3wwJv",
	"header": "comment__header--29sYg",
	"text": "comment__text--2iwq4",
	"actions": "comment__actions--3oCAK",
	"actionsButton": "comment__actionsButton--1bOmg",
	"actionsIcon": "comment__actionsIcon--25j5G",
	"actionsIconShare": "comment__actionsIconShare--N5rJq",
	"actionsIconReport": "comment__actionsIconReport--3b7-b",
	"actionsLabel": "comment__actionsLabel--wCpwt",
	"controlsKarmaCounter": "comment__controlsKarmaCounter--zId--"
});

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/Header/header.css
// Exports
/* harmony default export */ const Header_header = ({
	"root": "header__root--2tsj9",
	"label": "header__label--jl4WC",
	"metaData": "header__metaData--2Jalw"
});

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/Header/Header.tsx






function Header_Header() {
    return (external_react_default().createElement("div", { className: Header_header.root },
        external_react_default().createElement("span", { className: Header_header.label }, "\u041B\u0438\u0433\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432"),
        external_react_default().createElement("div", { className: Header_header.metaData },
            external_react_default().createElement(AuthorLink, { href: "#user-link" },
                external_react_default().createElement(AuthorAvatar, null),
                external_react_default().createElement(AuthorName, { name: "\u0421\u0435\u0440\u0433\u0435\u0439 \u041C\u0430\u0440\u0433\u0443\u043B\u0438\u0441" })),
            external_react_default().createElement(CreatedAt, { text: "3 \u0447\u0430\u0441\u0430" }))));
}

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/Header/index.ts


;// CONCATENATED MODULE: ./src/shared/AnswerForm/answerform.css
// Exports
/* harmony default export */ const answerform = ({
	"form": "answerform__form--1fYEQ",
	"input": "answerform__input--2be7I",
	"controls": "answerform__controls--24FFQ",
	"buttonPluse": "answerform__buttonPluse--pVmPb",
	"controlsButtons": "answerform__controlsButtons--11r5p",
	"controlsButton": "answerform__controlsButton--3Z1V0",
	"buttonEmoji": "answerform__buttonEmoji--2RM4I",
	"buttonSubmit": "answerform__buttonSubmit--2J3FS",
	"buttonText": "answerform__buttonText--sVCkR",
	"buttonArrow": "answerform__buttonArrow--1HW8y"
});

;// CONCATENATED MODULE: ./src/shared/AnswerForm/AnswerForm.tsx



function AnswerForm(_a) {
    var userName = _a.userName;
    var ref = (0,external_react_namespaceObject.useRef)(null);
    (0,external_react_namespaceObject.useEffect)(function () {
        if (!ref.current)
            return;
        ref.current.focus();
        ref.current.selectionStart = ref.current.value.length;
        ref.current.selectionEnd = ref.current.value.length;
    }, []);
    function handleSumbit(event) {
        var _a;
        event.preventDefault();
        console.log((_a = ref.current) === null || _a === void 0 ? void 0 : _a.value);
    }
    return (external_react_default().createElement("form", { className: answerform.form, onSubmit: handleSumbit },
        external_react_default().createElement("button", { className: answerform.buttonPluse, type: "button" },
            external_react_default().createElement(Icon, { name: EIcons.pluse, size: 10 })),
        external_react_default().createElement("textarea", { className: answerform.input, defaultValue: userName + ", ", ref: ref }),
        external_react_default().createElement("div", { className: answerform.controls },
            external_react_default().createElement("div", { className: answerform.controlsButtons },
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.code })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.image })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.document })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.download })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.user })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.refresh })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.link })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.voice })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.answer })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.pencil })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.a })),
                external_react_default().createElement("button", { className: answerform.controlsButton, type: "button" },
                    external_react_default().createElement(Icon, { name: EIcons.pdf }))),
            external_react_default().createElement("button", { className: answerform.buttonEmoji, type: "button" },
                external_react_default().createElement(Icon, { name: EIcons.emoji, size: 20 })),
            external_react_default().createElement("button", { className: answerform.buttonSubmit, type: "submit" },
                external_react_default().createElement("span", { className: answerform.buttonText }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442"),
                external_react_default().createElement("span", { className: answerform.buttonArrow },
                    external_react_default().createElement(Icon, { name: EIcons.send, size: 10 }))))));
}

;// CONCATENATED MODULE: ./src/shared/AnswerForm/index.ts


;// CONCATENATED MODULE: ./src/shared/Answer/answer.css
// Exports
/* harmony default export */ const answer = ({
	"shadow": "answer__shadow--1itLT",
	"modal": "answer__modal--NUWjg"
});

;// CONCATENATED MODULE: ./src/shared/Answer/Answer.tsx




function Answer(_a) {
    var userName = _a.userName, onClose = _a.onClose;
    var ref = (0,external_react_namespaceObject.useRef)(null);
    (0,external_react_namespaceObject.useEffect)(function () {
        function handleClick(event) {
            var _a;
            event.stopPropagation();
            if (event.target instanceof Node &&
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick, true);
        return function () {
            document.removeEventListener('click', handleClick, true);
        };
    }, []);
    var node = document.querySelector('#answer_root');
    if (!node)
        return null;
    return external_react_dom_default().createPortal(external_react_default().createElement("div", { className: answer.shadow },
        external_react_default().createElement("div", { className: answer.modal, ref: ref },
            external_react_default().createElement(AnswerForm, { userName: userName }))), node);
}

;// CONCATENATED MODULE: ./src/shared/Answer/index.ts


;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/AnswerButton/answerbutton.css
// Exports
/* harmony default export */ const answerbutton = ({
	"root": "answerbutton__root--TI3sb",
	"icon": "answerbutton__icon--2yFf-"
});

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/AnswerButton/AnswerButton.tsx




function AnswerButton(_a) {
    var userName = _a.userName;
    var _b = (0,external_react_namespaceObject.useState)(false), isAnswerFormOpened = _b[0], setIsAnswerFormOpened = _b[1];
    function handleClick(event) {
        setIsAnswerFormOpened(!isAnswerFormOpened);
    }
    return (external_react_default().createElement("button", { className: answerbutton.root, onClick: handleClick },
        external_react_default().createElement("span", { className: answerbutton.icon },
            external_react_default().createElement(IconComments, { width: "14px" })),
        "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C",
        isAnswerFormOpened && (external_react_default().createElement(Answer, { userName: userName, onClose: function () {
                setIsAnswerFormOpened(false);
            } }))));
}

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/AnswerButton/index.ts


;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/Comment.tsx






function Comment(_a) {
    var children = _a.children;
    return (external_react_default().createElement("div", { className: comment.root },
        external_react_default().createElement("div", { className: comment.aside },
            external_react_default().createElement("div", { className: comment.asideKarmaCounter },
                external_react_default().createElement(KarmaCounter_KarmaCounter, { score: 103, direction: EDirection.column })),
            external_react_default().createElement("span", { className: comment.indent })),
        external_react_default().createElement("div", { className: comment.content },
            external_react_default().createElement("div", { className: comment.header },
                external_react_default().createElement(Header_Header, null)),
            external_react_default().createElement("p", { className: comment.text }, "\u041A\u0430\u043A \u0443\u0436\u0435 \u043D\u0435\u043E\u0434\u043D\u043E\u043A\u0440\u0430\u0442\u043D\u043E \u0443\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u043E, \u0441\u0442\u0440\u0435\u043C\u044F\u0449\u0438\u0435\u0441\u044F \u0432\u044B\u0442\u0435\u0441\u043D\u0438\u0442\u044C \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E, \u043D\u0430\u043D\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043F\u043E\u0434\u0432\u0435\u0440\u0433\u043D\u0443\u0442\u044B \u0446\u0435\u043B\u043E\u0439 \u0441\u0435\u0440\u0438\u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439. \u0412 \u0441\u0432\u043E\u0451\u043C \u0441\u0442\u0440\u0435\u043C\u043B\u0435\u043D\u0438\u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0436\u0438\u0437\u043D\u0438, \u043E\u043D\u0438 \u0437\u0430\u0431\u044B\u0432\u0430\u044E\u0442, \u0447\u0442\u043E \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u044F\u0432\u043B\u044F\u0435\u0442 \u0441\u0440\u043E\u0447\u043D\u0443\u044E \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F."),
            external_react_default().createElement("div", { className: comment.controls },
                external_react_default().createElement("div", { className: comment.controlsKarmaCounter },
                    external_react_default().createElement(KarmaCounter_KarmaCounter, { score: 103 })),
                external_react_default().createElement(AnswerButton, { userName: "\u0421\u0435\u0440\u0433\u0435\u0439 \u041C\u0430\u0440\u0433\u0443\u043B\u0438\u0441" }),
                external_react_default().createElement("div", { className: comment.actions },
                    external_react_default().createElement("button", { className: comment.actionsButton },
                        external_react_default().createElement("span", { className: comment.actionsIcon },
                            external_react_default().createElement("span", { className: comment.actionsIconShare },
                                external_react_default().createElement(IconShare, null))),
                        external_react_default().createElement("span", { className: comment.actionsLabel }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
                    external_react_default().createElement("button", { className: comment.actionsButton },
                        external_react_default().createElement("span", { className: comment.actionsIcon },
                            external_react_default().createElement("span", { className: comment.actionsIconReport },
                                external_react_default().createElement(IconReport, null))),
                        external_react_default().createElement("span", { className: comment.actionsLabel }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))),
            children)));
}

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comment/index.ts


;// CONCATENATED MODULE: ./src/shared/Post/Comments/comments.css
// Exports
/* harmony default export */ const comments = ({
	"root": "comments__root--2Lx8b",
	"commentForm": "comments__commentForm--w5gc-",
	"sorting": "comments__sorting--1KG-f"
});

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Sorting/sorting.css
// Exports
/* harmony default export */ const sorting = ({
	"root": "sorting__root--3XsXt"
});

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Sorting/Sorting.tsx


function Sorting() {
    return (external_react_default().createElement("div", { className: sorting.root }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E: \u041B\u0443\u0447\u0448\u0438\u0435"));
}

;// CONCATENATED MODULE: ./src/shared/Post/Comments/Sorting/index.ts


;// CONCATENATED MODULE: ./src/shared/Post/Comments/Comments.tsx





function Comments() {
    return (external_react_default().createElement("div", { className: comments.root },
        external_react_default().createElement("div", { className: comments.sorting },
            external_react_default().createElement(Sorting, null)),
        external_react_default().createElement("div", { className: comments.commentForm },
            external_react_default().createElement(CommentFormContainer, null)),
        external_react_default().createElement(Comment, null,
            external_react_default().createElement(Comment, null),
            external_react_default().createElement(Comment, null,
                external_react_default().createElement(Comment, null),
                external_react_default().createElement(Comment, null)),
            external_react_default().createElement(Comment, null))));
}

;// CONCATENATED MODULE: ./src/shared/Post/Comments/index.ts


;// CONCATENATED MODULE: ./src/shared/Post/post.css
// Exports
/* harmony default export */ const post = ({
	"modal": "post__modal--75X8Z",
	"content": "post__content--3guAH",
	"close": "post__close--3TG_d"
});

;// CONCATENATED MODULE: ./src/shared/Post/Post.tsx





function Post() {
    var ref = (0,external_react_namespaceObject.useRef)(null);
    var history = (0,external_react_router_namespaceObject.useHistory)();
    (0,external_react_namespaceObject.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node &&
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                history.push('/');
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return external_react_dom_default().createPortal(external_react_default().createElement("div", { className: post.modal, ref: ref },
        external_react_default().createElement("h2", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
        external_react_default().createElement("div", { className: post.content },
            external_react_default().createElement("p", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, reprehenderit quo? Unde earum ab provident molestias beatae maxime vero at."),
            external_react_default().createElement("p", null, "Suscipit cupiditate molestias quam nihil! Accusantium a esse fugiat. Dolore, vel. Tempora quaerat ex numquam animi esse voluptatem? Iste, reprehenderit."),
            external_react_default().createElement("p", null, "Et quasi vitae perspiciatis. Dolor quae nostrum quaerat aliquam adipisci beatae aliquid. Aut, magni asperiores reprehenderit aliquid nobis praesentium totam?")),
        external_react_default().createElement(Comments, null)), node);
}

;// CONCATENATED MODULE: ./src/shared/Post/index.ts


;// CONCATENATED MODULE: ./src/shared/Page404/page404.css
// Exports
/* harmony default export */ const page404 = ({
	"root": "page404__root--1DGxG",
	"title": "page404__title--2aZQF",
	"text": "page404__text--WfSMy",
	"link": "page404__link--JMkWP"
});

;// CONCATENATED MODULE: ./src/shared/Page404/Page404.tsx



function Page404() {
    return (external_react_default().createElement("div", { className: page404.root },
        external_react_default().createElement("h1", { className: page404.title }, "\u041E\u0448\u0438\u0431\u043A\u0430 404 \u2014 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 =("),
        external_react_default().createElement("p", { className: page404.text },
            "\u041D\u043E \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 ",
            external_react_default().createElement(external_react_router_dom_namespaceObject.Link, { className: page404.link, to: "/posts/" }, "\u043F\u0435\u0440\u0435\u0439\u0442\u0438"),
            " \u043A \u043B\u0443\u0447\u0448\u0438\u043C \u043F\u043E\u0441\u0442\u0430\u043C")));
}

;// CONCATENATED MODULE: ./src/shared/Page404/index.ts


;// CONCATENATED MODULE: ./src/App.tsx

















var store = (0,external_redux_namespaceObject.createStore)(rootReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
function AppComponent() {
    var _a = (0,external_react_namespaceObject.useState)(false), mounted = _a[0], setMounted = _a[1];
    (0,external_react_namespaceObject.useEffect)(function () {
        setMounted(true);
    }, []);
    return (external_react_default().createElement(external_react_redux_namespaceObject.Provider, { store: store }, mounted && (external_react_default().createElement(external_react_router_dom_namespaceObject.BrowserRouter, null,
        external_react_default().createElement(external_react_router_dom_namespaceObject.Switch, null,
            external_react_default().createElement(external_react_router_dom_namespaceObject.Redirect, { exact: true, from: "/", to: "/posts/" }),
            external_react_default().createElement(external_react_router_dom_namespaceObject.Redirect, { from: "/auth", to: "/posts/" })),
        external_react_default().createElement(Token, null),
        external_react_default().createElement(UserContextProvider, null,
            external_react_default().createElement(Layout, null,
                external_react_default().createElement(Header, null),
                external_react_default().createElement(Content, null,
                    external_react_default().createElement(external_react_router_dom_namespaceObject.Switch, null,
                        external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: "/posts/" },
                            external_react_default().createElement(CardsList, null),
                            external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: "/posts/:id", component: Post })),
                        external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: "/" },
                            external_react_default().createElement(Page404, null))))))))));
}
var App = (0,root_namespaceObject.hot)(function () { return external_react_default().createElement(AppComponent, null); });

;// CONCATENATED MODULE: ./src/server/indexHtmlTemplate.js
var indexHtmlTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script>\n    window.__token__ = '" + token + "';\n  </script>\n</head>\n<body>\n\n  <div id=\"react_root\">" + content + "</div>\n  <div id=\"modal_root\"></div>\n  <div id=\"dropdownModal_root\"></div>\n  <div id=\"answer_root\"></div>\n  \n</body>\n</html>\n"; };

;// CONCATENATED MODULE: ./src/server/server.js





var PORT = process.env.PORT || 3000;
var app = external_express_default()();
app.use('/static', external_express_default().static('./dist/client'));
app.get('/auth', function (req, res) {
    external_axios_default().post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=http://localhost:3000/auth", {
        auth: { username: 'undefined', password: 'undefined' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    })
        .then(function (_a) {
        var data = _a.data;
        res.send(indexHtmlTemplate(server_default().renderToString(App()), data['access_token']));
    })
        .catch(console.log);
});
app.listen(PORT, function (err) {
    if (err) {
        console.log('Server starting faild: ', err);
    }
    console.log("Server started on http://localhost:" + PORT);
});
app.get('*', function (req, res) {
    res.send(indexHtmlTemplate(server_default().renderToString(App())));
});

/******/ })()
;