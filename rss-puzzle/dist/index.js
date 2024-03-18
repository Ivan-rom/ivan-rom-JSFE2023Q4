/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Answer/answer.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Answer/answer.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.answer {
    margin: 0 auto;
    display: flex;
    background-color: rgb(106, 32, 45);
    &.disabled,
    &.skipped {
        pointer-events: none;
    }
    &.disabled {
        .word {
            outline: none;
        }
    }
}

.field {
    box-shadow: 0 0 0 5px rgb(60, 18, 42) inset;
    min-width: 30px;
    min-height: 28px;
}
`, "",{"version":3,"sources":["webpack://./src/components/Answer/answer.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,aAAa;IACb,kCAAkC;IAClC;;QAEI,oBAAoB;IACxB;IACA;QACI;YACI,aAAa;QACjB;IACJ;AACJ;;AAEA;IACI,2CAA2C;IAC3C,eAAe;IACf,gBAAgB;AACpB","sourcesContent":[".answer {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    background-color: rgb(106, 32, 45);\r\n    &.disabled,\r\n    &.skipped {\r\n        pointer-events: none;\r\n    }\r\n    &.disabled {\r\n        .word {\r\n            outline: none;\r\n        }\r\n    }\r\n}\r\n\r\n.field {\r\n    box-shadow: 0 0 0 5px rgb(60, 18, 42) inset;\r\n    min-width: 30px;\r\n    min-height: 28px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Button/button.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Button/button.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --button-bg-color: rgb(254, 212, 164);
    --button-shadow-color: rgb(194, 163, 128);
}

.button {
    /* position: relative; */
    margin-top: 10px;
    transition: 0.2s;
    text-transform: uppercase;
    display: block;
    padding: 5px 20px;
    background-color: var(--button-bg-color);
    color: rgb(48, 16, 35);
    font-weight: 700;
    border-radius: 5px;

    transform: translateY(-3px);
    box-shadow: 0 3px var(--button-shadow-color);

    &:disabled {
        top: 3px;
        transform: translateY(0);
        box-shadow: 0 0 var(--button-shadow-color);
        cursor: default;
        filter: brightness(70%);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 0 var(--button-shadow-color);
    }
}
`, "",{"version":3,"sources":["webpack://./src/components/Button/button.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,yCAAyC;AAC7C;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,wCAAwC;IACxC,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;;IAElB,2BAA2B;IAC3B,4CAA4C;;IAE5C;QACI,QAAQ;QACR,wBAAwB;QACxB,0CAA0C;QAC1C,eAAe;QACf,uBAAuB;IAC3B;;IAEA;QACI,wBAAwB;QACxB,0CAA0C;IAC9C;AACJ","sourcesContent":[":root {\r\n    --button-bg-color: rgb(254, 212, 164);\r\n    --button-shadow-color: rgb(194, 163, 128);\r\n}\r\n\r\n.button {\r\n    /* position: relative; */\r\n    margin-top: 10px;\r\n    transition: 0.2s;\r\n    text-transform: uppercase;\r\n    display: block;\r\n    padding: 5px 20px;\r\n    background-color: var(--button-bg-color);\r\n    color: rgb(48, 16, 35);\r\n    font-weight: 700;\r\n    border-radius: 5px;\r\n\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 3px var(--button-shadow-color);\r\n\r\n    &:disabled {\r\n        top: 3px;\r\n        transform: translateY(0);\r\n        box-shadow: 0 0 var(--button-shadow-color);\r\n        cursor: default;\r\n        filter: brightness(70%);\r\n    }\r\n\r\n    &:active {\r\n        transform: translateY(0);\r\n        box-shadow: 0 0 var(--button-shadow-color);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Game/Game.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Game/Game.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.game {
    background-color: rgb(48, 16, 35);
    padding: 10px;
    border-radius: 10px;
    width: 700px;
    position: relative;
    z-index: 2;
}

.answers {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.data-source {
    margin-top: 20px;
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    background-color: rgb(60, 18, 42);
    min-height: 40px;
}
`, "",{"version":3,"sources":["webpack://./src/components/Game/Game.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,gBAAgB;AACpB","sourcesContent":[".game {\r\n    background-color: rgb(48, 16, 35);\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    width: 700px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.answers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.data-source {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    padding: 5px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgb(60, 18, 42);\r\n    min-height: 40px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Header/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Header/header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
    padding: 10px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(254, 212, 164);
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
}

.logo {
    display: block;
    text-decoration: none;
    color: inherit;
    font-weight: 800;
    font-size: 30px;
}

.logout-button {
    --button-bg-color: rgb(161, 43, 43);
    --button-shadow-color: rgb(104, 28, 28);

    padding: 10px;
    color: white;
    text-transform: uppercase;
}
`, "",{"version":3,"sources":["webpack://./src/components/Header/header.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,oCAAoC;IACpC,eAAe;IACf,YAAY;IACZ,MAAM;IACN,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,uCAAuC;;IAEvC,aAAa;IACb,YAAY;IACZ,yBAAyB;AAC7B","sourcesContent":[".header {\r\n    padding: 10px 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: rgb(254, 212, 164);\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.logo {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.logout-button {\r\n    --button-bg-color: rgb(161, 43, 43);\r\n    --button-shadow-color: rgb(104, 28, 28);\r\n\r\n    padding: 10px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Hints/hints.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Hints/hints.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hints {
    width: 100%;
    margin-bottom: 20px;
}

.hints-content {
    width: 100%;
    position: relative;
    top: 10px;
    z-index: 0;
}

.hints-buttons {
    display: flex;
    gap: 5px;

    :not(.active) {
        filter: grayscale(0.8);
    }
}

.hint {
    z-index: 2;
    border-radius: 5px 5px 0 0;
    text-align: center;
    position: absolute;
    transition: 0.2s;
    padding: 15px;
    top: 0;
    &:not(.button) {
        background-color: rgb(48, 16, 35);
        color: #fff;
    }

    &.translation {
        left: 0;
        right: 80px;
    }

    &.audio {
        margin: 0;
        right: 0;
        box-shadow: none;

        &:active {
            translate: 0 10px;
        }

        &.playing {
            &::before,
            &::after {
                animation: ripple 1s ease-out infinite;
                border: solid 2px rgb(48, 16, 35);
                border-radius: 5px;
                bottom: 0;
                box-sizing: border-box;
                content: '';
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
            }

            &::after {
                animation-delay: 0.5s;
            }
        }
    }

    &.shown {
        transform: translateY(-100%);
    }
}

@keyframes ripple {
    0% {
        opacity: 0.25;
    }
    100% {
        border-radius: 5px;
        opacity: 0;
        transform: scale(3);
    }
}
`, "",{"version":3,"sources":["webpack://./src/components/Hints/hints.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,QAAQ;;IAER;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI,UAAU;IACV,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,MAAM;IACN;QACI,iCAAiC;QACjC,WAAW;IACf;;IAEA;QACI,OAAO;QACP,WAAW;IACf;;IAEA;QACI,SAAS;QACT,QAAQ;QACR,gBAAgB;;QAEhB;YACI,iBAAiB;QACrB;;QAEA;YACI;;gBAEI,sCAAsC;gBACtC,iCAAiC;gBACjC,kBAAkB;gBAClB,SAAS;gBACT,sBAAsB;gBACtB,WAAW;gBACX,OAAO;gBACP,kBAAkB;gBAClB,QAAQ;gBACR,MAAM;YACV;;YAEA;gBACI,qBAAqB;YACzB;QACJ;IACJ;;IAEA;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,mBAAmB;IACvB;AACJ","sourcesContent":[".hints {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.hints-content {\r\n    width: 100%;\r\n    position: relative;\r\n    top: 10px;\r\n    z-index: 0;\r\n}\r\n\r\n.hints-buttons {\r\n    display: flex;\r\n    gap: 5px;\r\n\r\n    :not(.active) {\r\n        filter: grayscale(0.8);\r\n    }\r\n}\r\n\r\n.hint {\r\n    z-index: 2;\r\n    border-radius: 5px 5px 0 0;\r\n    text-align: center;\r\n    position: absolute;\r\n    transition: 0.2s;\r\n    padding: 15px;\r\n    top: 0;\r\n    &:not(.button) {\r\n        background-color: rgb(48, 16, 35);\r\n        color: #fff;\r\n    }\r\n\r\n    &.translation {\r\n        left: 0;\r\n        right: 80px;\r\n    }\r\n\r\n    &.audio {\r\n        margin: 0;\r\n        right: 0;\r\n        box-shadow: none;\r\n\r\n        &:active {\r\n            translate: 0 10px;\r\n        }\r\n\r\n        &.playing {\r\n            &::before,\r\n            &::after {\r\n                animation: ripple 1s ease-out infinite;\r\n                border: solid 2px rgb(48, 16, 35);\r\n                border-radius: 5px;\r\n                bottom: 0;\r\n                box-sizing: border-box;\r\n                content: '';\r\n                left: 0;\r\n                position: absolute;\r\n                right: 0;\r\n                top: 0;\r\n            }\r\n\r\n            &::after {\r\n                animation-delay: 0.5s;\r\n            }\r\n        }\r\n    }\r\n\r\n    &.shown {\r\n        transform: translateY(-100%);\r\n    }\r\n}\r\n\r\n@keyframes ripple {\r\n    0% {\r\n        opacity: 0.25;\r\n    }\r\n    100% {\r\n        border-radius: 5px;\r\n        opacity: 0;\r\n        transform: scale(3);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/LoginForm/loginForm.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/LoginForm/loginForm.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.login-form {
    background-color: rgb(48, 16, 35);
    color: white;
    padding: 10px 20px;
    width: 300px;
    border-radius: 10px;
}

.login-heading {
    text-align: center;
    font-size: 26px;
    margin: 5px 0;
}

.login-input {
    background-color: rgb(255, 222, 161);
    padding: 3px;
    border-radius: 3px;
    color: rgb(48, 16, 35);
    width: 100%;
    outline: none;
    border: none;
}

.error-list {
    margin-bottom: 10px;
}

.error-item {
    color: rgb(255, 251, 0);
    padding: 0 5px;
    font-size: 14px;
    margin: 5px 0;
}

.login-button {
    margin: 20px auto 0;
}
`, "",{"version":3,"sources":["webpack://./src/components/LoginForm/loginForm.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":[".login-form {\r\n    background-color: rgb(48, 16, 35);\r\n    color: white;\r\n    padding: 10px 20px;\r\n    width: 300px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.login-heading {\r\n    text-align: center;\r\n    font-size: 26px;\r\n    margin: 5px 0;\r\n}\r\n\r\n.login-input {\r\n    background-color: rgb(255, 222, 161);\r\n    padding: 3px;\r\n    border-radius: 3px;\r\n    color: rgb(48, 16, 35);\r\n    width: 100%;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n.error-list {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.error-item {\r\n    color: rgb(255, 251, 0);\r\n    padding: 0 5px;\r\n    font-size: 14px;\r\n    margin: 5px 0;\r\n}\r\n\r\n.login-button {\r\n    margin: 20px auto 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/WordComponent/WordComponent.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/WordComponent/WordComponent.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.word {
    color: rgb(48, 16, 35);
    cursor: pointer;
    flex-grow: 1;
    text-align: center;
    position: relative;
    top: 0;
    left: 0;
    z-index: 999;
    filter: drop-shadow(-1px 0px rgb(48, 16, 35));
    min-width: 30px;

    .word-content,
    .after {
        background-repeat: no-repeat;
        background-size: 680px 284px;
    }

    .word-content {
        font-weight: 400;
        pointer-events: none;
        display: block;
        background-color: rgb(254, 212, 164);
        padding: 5px;
        color: #fff;
        text-shadow:
            -0 -2px 0 #000000,
            0 -2px 0 #000000,
            -0 2px 0 #000000,
            0 2px 0 #000000,
            -2px -0 0 #000000,
            2px -0 0 #000000,
            -2px 0 0 #000000,
            2px 0 0 #000000,
            -1px -2px 0 #000000,
            1px -2px 0 #000000,
            -1px 2px 0 #000000,
            1px 2px 0 #000000,
            -2px -1px 0 #000000,
            2px -1px 0 #000000,
            -2px 1px 0 #000000,
            2px 1px 0 #000000,
            -2px -2px 0 #000000,
            2px -2px 0 #000000,
            -2px 2px 0 #000000,
            2px 2px 0 #000000,
            -2px -2px 0 #000000,
            2px -2px 0 #000000,
            -2px 2px 0 #000000,
            2px 2px 0 #000000;
    }

    &:not(.first) {
        .word-content {
            mask: radial-gradient(circle at 0 50%, transparent 5px, black 0);
        }
    }

    &.last {
        .after {
            display: none;
        }
    }

    .after {
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(calc(-50%));
        z-index: 999;
        width: 10px;
        height: 10px;
        background-color: rgb(254, 212, 164);
        clip-path: circle(50% at 0 50%);
    }

    &.wrong {
        box-shadow: 1px 0 red;
    }
    &.correct {
        box-shadow: 0 1px green;
    }

    &:not(.shown) {
        .word-content,
        .after {
            background-image: none !important;
        }
    }
}
`, "",{"version":3,"sources":["webpack://./src/components/WordComponent/WordComponent.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,6CAA6C;IAC7C,eAAe;;IAEf;;QAEI,4BAA4B;QAC5B,4BAA4B;IAChC;;IAEA;QACI,gBAAgB;QAChB,oBAAoB;QACpB,cAAc;QACd,oCAAoC;QACpC,YAAY;QACZ,WAAW;QACX;;;;;;;;;;;;;;;;;;;;;;;;6BAwBqB;IACzB;;IAEA;QACI;YACI,gEAAgE;QACpE;IACJ;;IAEA;QACI;YACI,aAAa;QACjB;IACJ;;IAEA;QACI,kBAAkB;QAClB,QAAQ;QACR,UAAU;QACV,iCAAiC;QACjC,YAAY;QACZ,WAAW;QACX,YAAY;QACZ,oCAAoC;QACpC,+BAA+B;IACnC;;IAEA;QACI,qBAAqB;IACzB;IACA;QACI,uBAAuB;IAC3B;;IAEA;QACI;;YAEI,iCAAiC;QACrC;IACJ;AACJ","sourcesContent":[".word {\r\n    color: rgb(48, 16, 35);\r\n    cursor: pointer;\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    filter: drop-shadow(-1px 0px rgb(48, 16, 35));\r\n    min-width: 30px;\r\n\r\n    .word-content,\r\n    .after {\r\n        background-repeat: no-repeat;\r\n        background-size: 680px 284px;\r\n    }\r\n\r\n    .word-content {\r\n        font-weight: 400;\r\n        pointer-events: none;\r\n        display: block;\r\n        background-color: rgb(254, 212, 164);\r\n        padding: 5px;\r\n        color: #fff;\r\n        text-shadow:\r\n            -0 -2px 0 #000000,\r\n            0 -2px 0 #000000,\r\n            -0 2px 0 #000000,\r\n            0 2px 0 #000000,\r\n            -2px -0 0 #000000,\r\n            2px -0 0 #000000,\r\n            -2px 0 0 #000000,\r\n            2px 0 0 #000000,\r\n            -1px -2px 0 #000000,\r\n            1px -2px 0 #000000,\r\n            -1px 2px 0 #000000,\r\n            1px 2px 0 #000000,\r\n            -2px -1px 0 #000000,\r\n            2px -1px 0 #000000,\r\n            -2px 1px 0 #000000,\r\n            2px 1px 0 #000000,\r\n            -2px -2px 0 #000000,\r\n            2px -2px 0 #000000,\r\n            -2px 2px 0 #000000,\r\n            2px 2px 0 #000000,\r\n            -2px -2px 0 #000000,\r\n            2px -2px 0 #000000,\r\n            -2px 2px 0 #000000,\r\n            2px 2px 0 #000000;\r\n    }\r\n\r\n    &:not(.first) {\r\n        .word-content {\r\n            mask: radial-gradient(circle at 0 50%, transparent 5px, black 0);\r\n        }\r\n    }\r\n\r\n    &.last {\r\n        .after {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    .after {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 100%;\r\n        transform: translateY(calc(-50%));\r\n        z-index: 999;\r\n        width: 10px;\r\n        height: 10px;\r\n        background-color: rgb(254, 212, 164);\r\n        clip-path: circle(50% at 0 50%);\r\n    }\r\n\r\n    &.wrong {\r\n        box-shadow: 1px 0 red;\r\n    }\r\n    &.correct {\r\n        box-shadow: 0 1px green;\r\n    }\r\n\r\n    &:not(.shown) {\r\n        .word-content,\r\n        .after {\r\n            background-image: none !important;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/GamePage/gamePage.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/GamePage/gamePage.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.game-page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    position: relative;
    z-index: 1;
}
`, "",{"version":3,"sources":["webpack://./src/pages/GamePage/gamePage.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd","sourcesContent":[".game-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.content {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/HomePage/homePage.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/HomePage/homePage.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.home {
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(5px);

    animation-name: appearanceHome;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
}

.home-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgb(48, 16, 35);
    color: white;
    text-align: center;

    opacity: 1;
    filter: blur(0);
    animation-name: appearance;
    animation-duration: 0.7s;
    animation-iteration-count: 1;
}

.heading {
    margin: 20px 0;
    text-transform: uppercase;
    font-weight: 300;
}

.description {
    margin: 0;
    font-size: 18px;
}

.start-button {
    font-size: 18px;
    margin: 20px auto;
}

.greeting {
    font-size: 26px;
}

.name {
    font-style: italic;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 0;
        height: 100%;
        background-color: #fff;

        animation-name: appearanceNameAfter;
        animation-duration: 2s;
        animation-delay: 0.5s;
        animation-iteration-count: 1;
    }

    animation-name: appearanceName;
    animation-duration: 2s;
    animation-iteration-count: 1;
}

@keyframes appearance {
    from {
        opacity: 0;
        filter: blur(100px);
    }

    to {
        opacity: 1;
        filter: blur(0);
    }
}
@keyframes appearanceHome {
    from {
        backdrop-filter: blur(0);
    }

    to {
        backdrop-filter: blur(5px);
    }
}

@keyframes appearanceName {
    0% {
        color: transparent;
    }
    60% {
        color: transparent;
    }
    100% {
        color: white;
    }
}

@keyframes appearanceNameAfter {
    0% {
        width: 0%;
        left: 0;
    }
    50% {
        width: 100%;
        left: 0;
    }
    65% {
        width: 100%;
        left: 0;
    }
    100% {
        width: 0;
        left: 100%;
    }
}
`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/homePage.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,0BAA0B;;IAE1B,8BAA8B;IAC9B,wBAAwB;IACxB,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;;IAElB,UAAU;IACV,eAAe;IACf,0BAA0B;IAC1B,wBAAwB;IACxB,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;;IAErB;QACI,WAAW;QACX,kBAAkB;QAClB,MAAM;QACN,QAAQ;QACR,YAAY;QACZ,sBAAsB;;QAEtB,mCAAmC;QACnC,sBAAsB;QACtB,qBAAqB;QACrB,4BAA4B;IAChC;;IAEA,8BAA8B;IAC9B,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI;QACI,UAAU;QACV,mBAAmB;IACvB;;IAEA;QACI,UAAU;QACV,eAAe;IACnB;AACJ;AACA;IACI;QACI,wBAAwB;IAC5B;;IAEA;QACI,0BAA0B;IAC9B;AACJ;;AAEA;IACI;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,SAAS;QACT,OAAO;IACX;IACA;QACI,WAAW;QACX,OAAO;IACX;IACA;QACI,WAAW;QACX,OAAO;IACX;IACA;QACI,QAAQ;QACR,UAAU;IACd;AACJ","sourcesContent":[".home {\r\n    width: 100%;\r\n    height: 100vh;\r\n    backdrop-filter: blur(5px);\r\n\r\n    animation-name: appearanceHome;\r\n    animation-duration: 0.5s;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n.home-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    padding: 10px 20px;\r\n    border-radius: 10px;\r\n    background-color: rgb(48, 16, 35);\r\n    color: white;\r\n    text-align: center;\r\n\r\n    opacity: 1;\r\n    filter: blur(0);\r\n    animation-name: appearance;\r\n    animation-duration: 0.7s;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n.heading {\r\n    margin: 20px 0;\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n}\r\n\r\n.description {\r\n    margin: 0;\r\n    font-size: 18px;\r\n}\r\n\r\n.start-button {\r\n    font-size: 18px;\r\n    margin: 20px auto;\r\n}\r\n\r\n.greeting {\r\n    font-size: 26px;\r\n}\r\n\r\n.name {\r\n    font-style: italic;\r\n    position: relative;\r\n    display: inline-block;\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        width: 0;\r\n        height: 100%;\r\n        background-color: #fff;\r\n\r\n        animation-name: appearanceNameAfter;\r\n        animation-duration: 2s;\r\n        animation-delay: 0.5s;\r\n        animation-iteration-count: 1;\r\n    }\r\n\r\n    animation-name: appearanceName;\r\n    animation-duration: 2s;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes appearance {\r\n    from {\r\n        opacity: 0;\r\n        filter: blur(100px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        filter: blur(0);\r\n    }\r\n}\r\n@keyframes appearanceHome {\r\n    from {\r\n        backdrop-filter: blur(0);\r\n    }\r\n\r\n    to {\r\n        backdrop-filter: blur(5px);\r\n    }\r\n}\r\n\r\n@keyframes appearanceName {\r\n    0% {\r\n        color: transparent;\r\n    }\r\n    60% {\r\n        color: transparent;\r\n    }\r\n    100% {\r\n        color: white;\r\n    }\r\n}\r\n\r\n@keyframes appearanceNameAfter {\r\n    0% {\r\n        width: 0%;\r\n        left: 0;\r\n    }\r\n    50% {\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n    65% {\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n    100% {\r\n        width: 0;\r\n        left: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/LoginPage/loginPage.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/LoginPage/loginPage.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.login-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/pages/LoginPage/loginPage.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":[".login-page {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
    margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
    display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
    background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
    font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
    font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
    border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
    /* 1 */
    overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
    /* 1 */
    text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type='button'],
[type='reset'],
[type='submit'] {
    -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
    vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
    overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type='checkbox'],
[type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
    height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
    display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
    display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
    display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
    display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;IACI,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;AAC1C;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;IACI,SAAS;AACb;;AAEA;;EAEE;;AAEF;IACI,cAAc;AAClB;;AAEA;;;EAGE;;AAEF;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;IACI,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;AAC7B;;AAEA;;;EAGE;;AAEF;IACI,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;AAC1B;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;IACI,6BAA6B;AACjC;;AAEA;;;EAGE;;AAEF;IACI,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;AAC7C;;AAEA;;EAEE;;AAEF;;IAEI,mBAAmB;AACvB;;AAEA;;;EAGE;;AAEF;;;IAGI,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;AAC1B;;AAEA;;EAEE;;AAEF;IACI,cAAc;AAClB;;AAEA;;;EAGE;;AAEF;;IAEI,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;IACI,kBAAkB;AACtB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;IAKI,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;AACrB;;AAEA;;;EAGE;;AAEF;;IAEI,MAAM;IACN,iBAAiB;AACrB;;AAEA;;;EAGE;;AAEF;;IAEI,MAAM;IACN,oBAAoB;AACxB;;AAEA;;EAEE;;AAEF;;;;IAII,0BAA0B;AAC9B;;AAEA;;EAEE;;AAEF;;;;IAII,kBAAkB;IAClB,UAAU;AACd;;AAEA;;EAEE;;AAEF;;;;IAII,8BAA8B;AAClC;;AAEA;;EAEE;;AAEF;IACI,8BAA8B;AAClC;;AAEA;;;;;EAKE;;AAEF;IACI,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;AAC/B;;AAEA;;EAEE;;AAEF;IACI,wBAAwB;AAC5B;;AAEA;;EAEE;;AAEF;IACI,cAAc;AAClB;;AAEA;;;EAGE;;AAEF;;IAEI,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;AACtB;;AAEA;;EAEE;;AAEF;;IAEI,YAAY;AAChB;;AAEA;;;EAGE;;AAEF;IACI,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;AAChC;;AAEA;;EAEE;;AAEF;IACI,wBAAwB;AAC5B;;AAEA;;;EAGE;;AAEF;IACI,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;AACzB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;IACI,cAAc;AAClB;;AAEA;;EAEE;;AAEF;IACI,kBAAkB;AACtB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;IACI,aAAa;AACjB;;AAEA;;EAEE;;AAEF;IACI,aAAa;AACjB","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n    display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n    background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    /* 1 */\r\n    overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    /* 1 */\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type='search'] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n    display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n    display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/login.jpg */ "./src/public/login.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;

    min-height: 100vh;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

button {
    cursor: pointer;
    border: none;
    background: none;

    &:disabled {
        cursor: default;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;;IAEvB,iBAAiB;IACjB,yDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;;IAEhB;QACI,eAAe;IACnB;AACJ","sourcesContent":["@import url(normalize.css);\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: sans-serif;\r\n\r\n    min-height: 100vh;\r\n    background-image: url('../public/login.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: none;\r\n    background: none;\r\n\r\n    &:disabled {\r\n        cursor: default;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/Answer/answer.css":
/*!******************************************!*\
  !*** ./src/components/Answer/answer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_answer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./answer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Answer/answer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_answer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_answer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_answer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_answer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Button/button.css":
/*!******************************************!*\
  !*** ./src/components/Button/button.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Button/button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Game/Game.css":
/*!**************************************!*\
  !*** ./src/components/Game/Game.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Game.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Game/Game.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Game_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Game_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Header/header.css":
/*!******************************************!*\
  !*** ./src/components/Header/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Hints/hints.css":
/*!****************************************!*\
  !*** ./src/components/Hints/hints.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hints_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./hints.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Hints/hints.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hints_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hints_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hints_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hints_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/LoginForm/loginForm.css":
/*!************************************************!*\
  !*** ./src/components/LoginForm/loginForm.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loginForm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./loginForm.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/LoginForm/loginForm.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loginForm_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loginForm_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loginForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loginForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/WordComponent/WordComponent.css":
/*!********************************************************!*\
  !*** ./src/components/WordComponent/WordComponent.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_WordComponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./WordComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/WordComponent/WordComponent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_WordComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_WordComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_WordComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_WordComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/GamePage/gamePage.css":
/*!*****************************************!*\
  !*** ./src/pages/GamePage/gamePage.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gamePage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./gamePage.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/GamePage/gamePage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gamePage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gamePage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gamePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gamePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/homePage.css":
/*!*****************************************!*\
  !*** ./src/pages/HomePage/homePage.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./homePage.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/HomePage/homePage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/LoginPage/loginPage.css":
/*!*******************************************!*\
  !*** ./src/pages/LoginPage/loginPage.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loginPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./loginPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/LoginPage/loginPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loginPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loginPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loginPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loginPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/API/api.ts":
/*!************************!*\
  !*** ./src/API/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Api {
    constructor() {
        Api.path = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/';
    }
    getRounds() {
        return __awaiter(this, arguments, void 0, function* (file = 'wordCollectionLevel1.json', folder = 'data/') {
            const rounds = yield fetch(Api.path + folder + file)
                .then((response) => response.json())
                .then((json) => json)
                .catch((err) => new Error(err));
            return rounds;
        });
    }
}


/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./src/Router.ts");

const router = new _Router__WEBPACK_IMPORTED_MODULE_0__["default"]();
router.render();


/***/ }),

/***/ "./src/BaseComponent.ts":
/*!******************************!*\
  !*** ./src/BaseComponent.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseComponent: () => (/* binding */ BaseComponent)
/* harmony export */ });
class BaseComponent {
    constructor(props, children = []) {
        const component = this.createElement((props === null || props === void 0 ? void 0 : props.tag) || 'div');
        this.component = Object.assign(component, props);
        if (props === null || props === void 0 ? void 0 : props.event)
            this.component.addEventListener(props.event.type, props.event.callback);
        this.append(children);
    }
    createElement(tagName) {
        return document.createElement(tagName);
    }
    append(children) {
        children.forEach((child) => {
            if (child instanceof BaseComponent) {
                this.component.append(child.getComponent());
            }
            else {
                this.component.append(child);
            }
        });
    }
    setDataset(name, value) {
        this.component.dataset[name] = value;
    }
    getComponent() {
        return this.component;
    }
    clear() {
        this.component.innerHTML = '';
        return this.component;
    }
}


/***/ }),

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header/Header */ "./src/components/Header/Header.ts");
/* harmony import */ var _pages_GamePage_GamePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/GamePage/GamePage */ "./src/pages/GamePage/GamePage.ts");
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.ts");
/* harmony import */ var _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/LoginPage/LoginPage */ "./src/pages/LoginPage/LoginPage.ts");




const routes = [
    {
        path: 'login',
        page: new _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_3__["default"](),
    },
    {
        path: 'home',
        page: new _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_2__["default"](),
    },
    {
        path: 'game',
        page: new _pages_GamePage_GamePage__WEBPACK_IMPORTED_MODULE_1__["default"](),
    },
];
class Router {
    constructor() {
        this.hashChangeHandler = () => {
            this.render();
        };
        this.routes = routes;
        this.hash = window.location.hash.slice(1);
        window.addEventListener('hashchange', this.hashChangeHandler);
    }
    render() {
        this.hash = window.location.hash.slice(1);
        const user = JSON.parse(localStorage.getItem('user'));
        if (!this.hash || (user && this.hash === 'login')) {
            this.setHash('home');
        }
        if (!user) {
            this.setHash('login');
        }
        let currentPage;
        if (this.hash.startsWith('game')) {
            currentPage = this.routes.find((route) => route.path === 'game');
            currentPage === null || currentPage === void 0 ? void 0 : currentPage.page.render();
        }
        else {
            currentPage = this.routes.find((route) => route.path === this.hash);
        }
        document.body.innerHTML = '';
        if (window.location.hash.slice(1) !== 'login')
            document.body.append(new _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__["default"]().getComponent());
        document.body.append(currentPage === null || currentPage === void 0 ? void 0 : currentPage.page.getComponent());
    }
    setHash(hash) {
        window.location.hash = hash;
        this.hash = hash;
    }
}


/***/ }),

/***/ "./src/components/Answer/Answer.ts":
/*!*****************************************!*\
  !*** ./src/components/Answer/Answer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Answer)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _answer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answer.css */ "./src/components/Answer/answer.css");


class Answer extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(length, sentence, dragOver, drop) {
        super({ className: 'answer' });
        this.sentence = sentence;
        this.words = [];
        this.fields = [];
        this.activeFields = [];
        for (let i = 0; i < length; i += 1) {
            this.createField(i, dragOver, drop);
            this.words[i] = null;
        }
    }
    createField(index, dragOver, drop) {
        const field = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
            className: 'field',
            ondrop: drop,
            ondragover: dragOver,
            ondragleave: this.dragLeave,
        });
        field.setDataset('index', index.toString());
        this.append([field]);
        this.fields.push(field.getComponent());
        this.activeFields.push(field.getComponent());
        this.sortFields(this.activeFields);
    }
    sortFields(fields) {
        return fields.sort((a, b) => +a.dataset.index - +b.dataset.index);
    }
    appendWord(child, index) {
        let activeFieldIndex;
        if (index) {
            activeFieldIndex = this.activeFields.findIndex((field) => field.dataset.index === index);
        }
        else {
            activeFieldIndex = 0;
        }
        const activeField = this.activeFields[activeFieldIndex];
        if (activeField) {
            const component = child instanceof _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent ? child.getComponent() : child;
            this.words[+activeField.dataset.index] = component;
            activeField.append(component);
            activeField.setAttribute('style', `width: ${component.dataset.width}px`);
            this.activeFields.splice(activeFieldIndex, 1);
        }
    }
    removeWord(index) {
        this.words.forEach((word) => {
            word === null || word === void 0 ? void 0 : word.classList.remove('correct');
            word === null || word === void 0 ? void 0 : word.classList.remove('wrong');
        });
        const field = this.fields[+index];
        this.words[+index] = null;
        this.activeFields.push(field);
        this.sortFields(this.activeFields);
        field.setAttribute('style', 'width: 0');
    }
    isSolved() {
        let result = true;
        const words = this.sentence.split(' ');
        for (let i = 0; i < this.words.length; i += 1) {
            const element = this.words[i];
            if ((element === null || element === void 0 ? void 0 : element.textContent) !== words[i]) {
                element === null || element === void 0 ? void 0 : element.classList.add('wrong');
                result = false;
            }
            else {
                element === null || element === void 0 ? void 0 : element.classList.add('correct');
            }
        }
        return result;
    }
    dragLeave(ev) {
        const target = ev.target;
        if (target.className === 'field')
            target.removeAttribute('style');
    }
    clearFields(dropElement) {
        this.activeFields.filter((field) => field !== dropElement).forEach((field) => field.removeAttribute('style'));
    }
    disable() {
        this.fields.forEach((el) => {
            const field = el;
            field.ondrop = null;
            field.ondragover = null;
            field.ondragleave = null;
        });
    }
}


/***/ }),

/***/ "./src/components/Button/Button.ts":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.css */ "./src/components/Button/button.css");


class Button extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(textContent, callback, className = '', disabled = false) {
        super({ tag: 'button', className: `button  ${className}`, onclick: callback, textContent });
        this.setDisabled(disabled);
    }
    setDisabled(disabled) {
        this.component.disabled = disabled;
    }
}


/***/ }),

/***/ "./src/components/Game/Game.ts":
/*!*************************************!*\
  !*** ./src/components/Game/Game.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _Answer_Answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Answer/Answer */ "./src/components/Answer/Answer.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.ts");
/* harmony import */ var _Hints_Hints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hints/Hints */ "./src/components/Hints/Hints.ts");
/* harmony import */ var _WordComponent_WordComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../WordComponent/WordComponent */ "./src/components/WordComponent/WordComponent.ts");
/* harmony import */ var _Game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Game.css */ "./src/components/Game/Game.css");







class Game extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(levelId, roundId, page) {
        super({ className: 'game' });
        this.currentWord = 0;
        this.page = page;
        this.levelId = levelId;
        this.roundId = roundId;
        this.hints = new _Hints_Hints__WEBPACK_IMPORTED_MODULE_4__["default"](this.page);
        this.answers = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ className: 'answers' });
        this.append([this.hints, this.answers]);
    }
    renderGame(data) {
        this.data = data;
        this.sentence = data.words[this.currentWord];
        this.imageSrc = this.data.levelData.imageSrc;
        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length, this.sentence.textExample);
        this.dataSource = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ className: 'data-source' }, this.words);
        this.button = new _Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"]('Check', () => { var _a; return ((_a = this.answer) === null || _a === void 0 ? void 0 : _a.isSolved()) && this.updateButton(true); }, 'check', true);
        this.answers.append([this.answer]);
        this.append([this.answers, this.dataSource, this.button, this.createSkipButton()]);
        this.words.forEach((word) => word.setWidth(this.imageSrc, this.currentWord));
        const arr = this.dataSource.getComponent().childNodes;
        this.hints.setText(this.sentence.textExampleTranslate);
        this.hints.setAudio(this.sentence.audioExample);
        this.hints.setWords(this.words);
        this.hints.showImage();
        this.hints.showAudio();
        this.hints.showTranslation();
        this.dataSource.getComponent().append(...(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.randomizeArray)([...arr]));
    }
    createWords(sentence) {
        const words = sentence.textExample.split(' ').map((word, i, arr) => {
            const wordComponent = new _WordComponent_WordComponent__WEBPACK_IMPORTED_MODULE_5__["default"](word, {
                onclick: this.clickHandler.bind(this),
                ondragstart: this.dragStart.bind(this),
                ontouchmove: this.dragMove.bind(this),
                ontouchend: this.dragDrop.bind(this),
                ontouchstart: this.touchStart.bind(this),
            });
            if (i === 0)
                wordComponent.getComponent().classList.add('first');
            else if (i === arr.length - 1)
                wordComponent.getComponent().classList.add('last');
            return wordComponent;
        });
        // const randomizedWords = randomizeArray<WordComponent>(words);
        return words;
    }
    createAnswer(length, sentence) {
        const answer = new _Answer_Answer__WEBPACK_IMPORTED_MODULE_2__["default"](length, sentence, this.dragoverHandler.bind(this), this.dropHandler.bind(this));
        this.answer = answer;
        return answer;
    }
    moveWord(component) {
        var _a, _b, _c, _d, _e;
        const parent = component.parentElement;
        if (parent.className === 'data-source') {
            (_a = this.answer) === null || _a === void 0 ? void 0 : _a.appendWord(component);
        }
        else {
            (_b = this.answer) === null || _b === void 0 ? void 0 : _b.removeWord(parent === null || parent === void 0 ? void 0 : parent.dataset.index);
            (_c = this.dataSource) === null || _c === void 0 ? void 0 : _c.append([component]);
        }
        (_d = this.button) === null || _d === void 0 ? void 0 : _d.setDisabled(((_e = this.dataSource) === null || _e === void 0 ? void 0 : _e.getComponent().childNodes.length) !== 0);
    }
    nextSentence() {
        var _a, _b, _c, _d, _e;
        (_a = this.answer) === null || _a === void 0 ? void 0 : _a.getComponent().classList.add('disabled');
        (_b = this.answer) === null || _b === void 0 ? void 0 : _b.disable();
        (_c = this.words) === null || _c === void 0 ? void 0 : _c.forEach((word) => word.disable());
        this.sentence = this.data.words[this.currentWord];
        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length, this.sentence.textExample);
        this.answers.append([this.answer]);
        (_d = this.dataSource) === null || _d === void 0 ? void 0 : _d.append(this.words);
        this.words.forEach((word) => word.setWidth(this.imageSrc, this.currentWord));
        const arr = this.dataSource.getComponent().childNodes;
        this.dataSource.getComponent().append(...(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.randomizeArray)([...arr]));
        (_e = this.button) === null || _e === void 0 ? void 0 : _e.setDisabled(true);
        this.updateButton();
        this.hints.setText(this.sentence.textExampleTranslate);
        this.hints.setAudio(this.sentence.audioExample);
        this.hints.setWords(this.words);
        this.hints.showImage();
        this.hints.showAudio();
        this.hints.showTranslation();
    }
    nextLevel() {
        const newHash = `game/${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.updateRoundId)(+this.levelId, +this.roundId + 1)}`;
        window.location.hash = newHash;
    }
    updateButton(isContinue = false) {
        let text = 'check';
        let callback = this.checkHandler;
        if (isContinue) {
            text = 'continue';
            callback = this.continueHandler;
        }
        this.button.getComponent().textContent = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toCapitalize)(text);
        this.button.getComponent().className = `button ${text}`;
        this.button.getComponent().onclick = callback.bind(this);
    }
    clickHandler(e) {
        this.moveWord(e.target);
    }
    checkHandler() {
        var _a, _b;
        if ((_a = this.answer) === null || _a === void 0 ? void 0 : _a.isSolved()) {
            this.updateButton(true);
            (_b = this.words) === null || _b === void 0 ? void 0 : _b.forEach((word) => word.setWidth(this.imageSrc, this.currentWord));
            this.hints.showTranslation(true);
            this.hints.showImage(true);
        }
    }
    continueHandler() {
        this.hints.showTranslation();
        this.currentWord += 1;
        if (this.currentWord === 10) {
            this.nextLevel();
        }
        else {
            this.nextSentence();
        }
    }
    createSkipButton() {
        const callback = () => {
            var _a, _b, _c, _d, _e;
            this.checkHandler();
            (_a = this.words) === null || _a === void 0 ? void 0 : _a.forEach((word) => word.disable());
            const wrongWords = (_b = this.words) === null || _b === void 0 ? void 0 : _b.filter((word) => word.getComponent().classList.contains('wrong'));
            const filteredWords = (_c = this.words) === null || _c === void 0 ? void 0 : _c.filter((word) => !word.getComponent().classList.contains('correct'));
            wrongWords === null || wrongWords === void 0 ? void 0 : wrongWords.forEach((word) => this.moveWord(word.getComponent()));
            (_d = this.sentence) === null || _d === void 0 ? void 0 : _d.textExample.split(' ').forEach((text) => {
                const wordIndex = filteredWords === null || filteredWords === void 0 ? void 0 : filteredWords.findIndex((word) => word.getComponent().textContent === text);
                const word = filteredWords[wordIndex];
                if (word) {
                    this.moveWord(word.getComponent());
                    filteredWords === null || filteredWords === void 0 ? void 0 : filteredWords.splice(wordIndex, 1);
                }
            });
            this.updateButton(true);
            this.checkHandler();
            (_e = this.answer) === null || _e === void 0 ? void 0 : _e.getComponent().classList.add('skipped');
        };
        return new _Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"]("I don't know", callback, 'skip');
    }
    dragStart(ev) {
        const target = ev.target;
        this.current = target;
    }
    dragoverHandler(ev, straightTarget) {
        var _a;
        ev.preventDefault();
        let target = ev.target;
        if (straightTarget)
            target = straightTarget;
        if (target.className === 'field' && target.children.length === 0) {
            const width = (_a = this.current) === null || _a === void 0 ? void 0 : _a.dataset.width;
            target.setAttribute('style', `width: ${width}px`);
        }
    }
    dropHandler(ev) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        ev.preventDefault();
        const target = ev.target;
        if (target.className === 'field') {
            if (((_a = this.current.parentElement) === null || _a === void 0 ? void 0 : _a.className) === 'field') {
                const currentId = this.current.parentElement.dataset.index;
                (_b = this.answer) === null || _b === void 0 ? void 0 : _b.removeWord(currentId);
            }
            (_c = this.answer) === null || _c === void 0 ? void 0 : _c.appendWord(this.current, target.dataset.index);
        }
        else {
            if (target.classList.contains('disabled'))
                return;
            const targetId = target.parentElement.dataset.index;
            (_d = this.answer) === null || _d === void 0 ? void 0 : _d.removeWord(targetId);
            if (((_e = this.current.parentElement) === null || _e === void 0 ? void 0 : _e.className) === 'field') {
                const currentId = this.current.parentElement.dataset.index;
                (_f = this.answer) === null || _f === void 0 ? void 0 : _f.removeWord(currentId);
                (_g = this.answer) === null || _g === void 0 ? void 0 : _g.appendWord(target, currentId);
            }
            else {
                (_h = this.dataSource) === null || _h === void 0 ? void 0 : _h.append([target]);
            }
            (_j = this.answer) === null || _j === void 0 ? void 0 : _j.appendWord(this.current, targetId);
        }
        (_k = this.button) === null || _k === void 0 ? void 0 : _k.setDisabled(((_l = this.dataSource) === null || _l === void 0 ? void 0 : _l.getComponent().childNodes.length) !== 0);
    }
    touchStart(e) {
        const { pageX, pageY } = e.changedTouches[0];
        this.touches = { pageX, pageY };
    }
    dragMove(e) {
        var _a, _b;
        e.preventDefault();
        const word = e.target;
        this.current = word;
        const { pageX, pageY } = e.changedTouches[0];
        word.style.position = 'absolute';
        word.style.pointerEvents = 'none';
        word.style.top = `${pageY - word.offsetHeight / 2}px`;
        word.style.left = `${pageX - word.offsetWidth / 2}px`;
        const dropElement = document.elementFromPoint(pageX, pageY);
        if (this.dropElement !== dropElement)
            this.dropElement = dropElement;
        if (((_a = this.dropElement) === null || _a === void 0 ? void 0 : _a.className) === 'field') {
            this.dragoverHandler(e, this.dropElement);
            (_b = this.answer) === null || _b === void 0 ? void 0 : _b.clearFields(this.dropElement);
        }
    }
    dragDrop(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        e.preventDefault();
        const word = e.target;
        word.style.position = 'static';
        word.style.pointerEvents = 'auto';
        word.style.top = `0`;
        word.style.left = `0`;
        const newX = e.changedTouches[0].pageX;
        const newY = e.changedTouches[0].pageY;
        if (newX === ((_a = this.touches) === null || _a === void 0 ? void 0 : _a.pageX) && newY === ((_b = this.touches) === null || _b === void 0 ? void 0 : _b.pageY)) {
            this.clickHandler(e);
            return;
        }
        (_c = this.answer) === null || _c === void 0 ? void 0 : _c.clearFields();
        if (this.current) {
            if (((_d = this.current.parentElement) === null || _d === void 0 ? void 0 : _d.className) === 'field') {
                const currentId = this.current.parentElement.dataset.index;
                (_e = this.answer) === null || _e === void 0 ? void 0 : _e.removeWord(currentId);
            }
            if (((_f = this.dropElement) === null || _f === void 0 ? void 0 : _f.className) === 'field') {
                (_g = this.answer) === null || _g === void 0 ? void 0 : _g.appendWord(this.current, (_h = this.dropElement) === null || _h === void 0 ? void 0 : _h.dataset.index);
            }
            else if (((_j = this.dropElement) === null || _j === void 0 ? void 0 : _j.classList.contains('word')) &&
                ((_l = (_k = this.dropElement) === null || _k === void 0 ? void 0 : _k.parentElement) === null || _l === void 0 ? void 0 : _l.className) === 'field') {
                const targetId = this.dropElement.parentElement.dataset.index;
                if (((_m = this.current.parentElement) === null || _m === void 0 ? void 0 : _m.className) === 'field') {
                    const currentId = this.current.parentElement.dataset.index;
                    (_o = this.answer) === null || _o === void 0 ? void 0 : _o.appendWord(this.dropElement, currentId);
                }
                else {
                    (_p = this.dataSource) === null || _p === void 0 ? void 0 : _p.append([this.dropElement]);
                }
                (_q = this.answer) === null || _q === void 0 ? void 0 : _q.removeWord(targetId);
                (_r = this.answer) === null || _r === void 0 ? void 0 : _r.appendWord(this.current, targetId);
            }
            else {
                (_s = this.dataSource) === null || _s === void 0 ? void 0 : _s.append([this.current]);
            }
        }
        (_t = this.button) === null || _t === void 0 ? void 0 : _t.setDisabled(((_u = this.dataSource) === null || _u === void 0 ? void 0 : _u.getComponent().childNodes.length) !== 0);
    }
}


/***/ }),

/***/ "./src/components/Header/Header.ts":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.ts");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ "./src/components/Header/header.css");



class Header extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super({ tag: 'header', className: 'header' });
        const clickHandler = () => {
            localStorage.removeItem('user');
            window.location.hash = 'login';
        };
        const logoutButton = new _Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"]('Log out', clickHandler, 'logout-button');
        const logo = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
            tag: 'a',
            href: '#home',
            text: 'RSS Puzzle',
            className: 'logo',
        });
        this.append([logo, logoutButton]);
    }
}


/***/ }),

/***/ "./src/components/Hints/Hints.ts":
/*!***************************************!*\
  !*** ./src/components/Hints/Hints.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hints)
/* harmony export */ });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../API/api */ "./src/API/api.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.ts");
/* harmony import */ var _hints_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hints.css */ "./src/components/Hints/hints.css");




class Hints extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(parent) {
        super({ className: 'hints' });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.isTranslation = this.user.hints.isTranslation;
        this.isAudio = this.user.hints.isAudio;
        this.isImage = this.user.hints.isImage;
        this.parent = parent;
        this.translationHint = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'hint translation' });
        const audioCallback = () => {
            var _a;
            (_a = this.audio) === null || _a === void 0 ? void 0 : _a.play();
            this.audioHint.getComponent().classList.add('playing');
            this.audioHint.setDisabled(true);
        };
        this.audioHint = new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('play', audioCallback, 'hint audio');
        this.translationButton = this.createTranslationButton();
        this.audioButton = this.createAudioButton();
        this.imageButton = this.createImageButton();
        const hints = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'hints-content' }, [this.translationHint, this.audioHint]);
        const buttons = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'hints-buttons' }, [
            this.translationButton,
            this.audioButton,
            this.imageButton,
        ]);
        this.append([buttons]);
        this.parent.append([hints]);
    }
    showTranslation(isForced = false) {
        if (this.isTranslation || isForced)
            this.translationHint.getComponent().classList.add('shown');
        else
            this.translationHint.getComponent().classList.remove('shown');
    }
    showAudio() {
        if (this.isAudio)
            this.audioHint.getComponent().classList.add('shown');
        else
            this.audioHint.getComponent().classList.remove('shown');
    }
    showImage(isForced = false) {
        var _a, _b;
        if (this.isImage || isForced)
            (_a = this.words) === null || _a === void 0 ? void 0 : _a.forEach((word) => word.getComponent().classList.add('shown'));
        else
            (_b = this.words) === null || _b === void 0 ? void 0 : _b.forEach((word) => word.getComponent().classList.remove('shown'));
    }
    setText(text) {
        this.translationHint.getComponent().textContent = text;
    }
    setAudio(audioPath) {
        var _a;
        this.audio = new Audio(`${_API_api__WEBPACK_IMPORTED_MODULE_0__["default"].path}${audioPath}`);
        console.log(this.audio);
        (_a = this.audio) === null || _a === void 0 ? void 0 : _a.addEventListener('ended', () => {
            this.audioHint.getComponent().classList.remove('playing');
            this.audioHint.setDisabled(false);
        });
    }
    setWords(words) {
        this.words = words;
    }
    createTranslationButton() {
        const callback = () => {
            this.isTranslation = !this.isTranslation;
            this.translationButton.getComponent().classList.toggle('active');
            this.saveHints();
            this.showTranslation();
        };
        const button = new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('Translation hint', callback, 'hint-button');
        if (this.isTranslation)
            button.getComponent().classList.add('active');
        return button;
    }
    createAudioButton() {
        const callback = () => {
            this.isAudio = !this.isAudio;
            this.audioButton.getComponent().classList.toggle('active');
            this.saveHints();
            this.showAudio();
        };
        const button = new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('Audio hint', callback, 'audio-button');
        if (this.isAudio)
            button.getComponent().classList.add('active');
        return button;
    }
    createImageButton() {
        const callback = () => {
            this.isImage = !this.isImage;
            this.imageButton.getComponent().classList.toggle('active');
            this.saveHints();
            this.showImage();
        };
        const button = new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('Image hint', callback, 'image-button');
        if (this.isImage)
            button.getComponent().classList.add('active');
        return button;
    }
    saveHints() {
        this.user.hints.isAudio = this.isAudio;
        this.user.hints.isImage = this.isImage;
        this.user.hints.isTranslation = this.isTranslation;
        console.log(JSON.stringify(this.user));
        localStorage.setItem('user', JSON.stringify(this.user));
    }
}


/***/ }),

/***/ "./src/components/LoginForm/LoginForm.ts":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.ts");
/* harmony import */ var _loginForm_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginForm.css */ "./src/components/LoginForm/loginForm.css");




const fields = {
    name: [
        {
            type: 'name-length',
            test: /^.{3,}$/,
            message: 'Name must be at least 3 characters long',
        },
    ],
    surname: [
        {
            type: 'surname-length',
            test: /^.{4,}$/,
            message: 'Surname must be at least 4 characters long',
        },
    ],
    errors: [
        {
            type: 'required',
            test: /^.+$/,
            message: 'This field must be filled',
        },
        {
            type: 'symbols',
            test: /^[a-zA-Z-]+$/,
            message: 'Use only English alphabet letters and the hyphen (" - ") symbol',
        },
        {
            type: 'first-letter',
            test: /^[A-Z].*$/,
            message: 'The first letter must be in uppercase',
        },
    ],
};
class LoginForm extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super({ tag: 'form', classList: ['login-form'] });
        this.component.action = '#';
        this.user = {
            name: '',
            surname: '',
            hints: {
                isAudio: true,
                isTranslation: true,
                isImage: true,
            },
        };
        this.inputs = [];
        this.fields = [this.createField(), this.createField('surname')];
        this.submitButton = this.createButton();
        this.hasErrors = false;
        this.component.onsubmit = this.submitHandler.bind(this);
        this.render();
    }
    createField(name = 'name') {
        const div = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent();
        const ul = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ tag: 'ul', className: 'error-list' });
        const label = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
            tag: 'div',
            textContent: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toCapitalize)(`${name}:`),
            className: 'label label-required',
        });
        const inputHandler = (event) => {
            ul.clear();
            this.hasErrors = false;
            this.submitButton.setDisabled(this.hasErrors);
            this.checkValues();
            const target = event.target;
            const errors = [...fields[target.name], ...fields.errors];
            this.user[name] = target.value;
            errors.forEach((error) => {
                if (!error.test.test(target.value)) {
                    const errorItem = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
                        tag: 'li',
                        className: 'error-item',
                        textContent: error.message,
                    });
                    this.hasErrors = true;
                    this.submitButton.setDisabled(this.hasErrors);
                    ul.append([errorItem]);
                }
            });
        };
        const input = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
            tag: 'input',
            name,
            className: 'login-input',
            oninput: inputHandler,
            required: true,
            type: 'text',
            id: name,
        });
        this.inputs.push(input.getComponent());
        div.append([label, input, ul]);
        return div;
    }
    submitHandler(event) {
        event.preventDefault();
        if (!this.hasErrors) {
            localStorage.setItem('user', JSON.stringify(this.user));
            window.location.hash = 'home';
        }
    }
    createButton() {
        return new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('Login', this.submitHandler.bind(this), 'login-button', this.hasErrors);
    }
    checkValues() {
        this.inputs.forEach((input) => {
            fields.errors.forEach((error) => {
                this.hasErrors = !error.test.test(input.value);
            });
        });
        this.submitButton.setDisabled(this.hasErrors);
    }
    render() {
        this.checkValues();
        this.append([
            new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
                tag: 'h2',
                className: 'login-heading',
                textContent: 'Login',
            }),
        ]);
        this.fields.forEach((field) => this.append([field]));
        this.append([this.submitButton]);
    }
}


/***/ }),

/***/ "./src/components/WordComponent/WordComponent.ts":
/*!*******************************************************!*\
  !*** ./src/components/WordComponent/WordComponent.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordComponent)
/* harmony export */ });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../API/api */ "./src/API/api.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _WordComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WordComponent.css */ "./src/components/WordComponent/WordComponent.css");



class WordComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(text, params) {
        super(Object.assign(Object.assign({}, params), { className: 'word', draggable: true }));
        const content = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'word-content', textContent: text });
        const after = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'after' });
        this.append([content, after]);
    }
    setWidth(image, rowIndex) {
        const wordComponent = this.component;
        const [word, after] = this.component.children;
        this.setDataset('width', wordComponent.offsetWidth.toString());
        wordComponent.style.width = `${wordComponent.dataset.width}px`;
        wordComponent.style.flexGrow = `0`;
        const imagePath = `${_API_api__WEBPACK_IMPORTED_MODULE_0__["default"].path}images/${image}`;
        const offsetLeft = wordComponent.offsetLeft - 15;
        const offsetTop = wordComponent.offsetHeight * rowIndex;
        word.style.backgroundImage = `url(${imagePath})`;
        word.style.backgroundPosition = `-${offsetLeft}px -${offsetTop}px`;
        after.style.backgroundImage = `url(${imagePath})`;
        after.style.backgroundPositionX = `${-(offsetLeft + word.offsetWidth)}px`;
        after.style.backgroundPositionY = `${-(offsetTop + wordComponent.offsetHeight / 2 - after.offsetHeight / 2)}px`;
    }
    disable() {
        this.component.classList.add('disabled');
        this.component.onclick = null;
        this.component.ondragstart = null;
        this.component.ontouchmove = null;
        this.component.ontouchend = null;
        this.component.ontouchstart = null;
    }
}


/***/ }),

/***/ "./src/pages/GamePage/GamePage.ts":
/*!****************************************!*\
  !*** ./src/pages/GamePage/GamePage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GamePage)
/* harmony export */ });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../API/api */ "./src/API/api.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _components_Game_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Game/Game */ "./src/components/Game/Game.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Page */ "./src/pages/Page.ts");
/* harmony import */ var _gamePage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gamePage.css */ "./src/pages/GamePage/gamePage.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class GamePage extends _Page__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super({ className: 'game-page' });
        this.content = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'content' });
        this.api = new _API_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    render() {
        this.component.innerHTML = '';
        this.append([this.content]);
        this.getRound().then((round) => {
            this.round = round;
            this.content.clear();
            this.game = new _components_Game_Game__WEBPACK_IMPORTED_MODULE_2__["default"](this.levelId, this.roundId, this.content);
            this.content.append([this.game]);
            this.game.renderGame(this.round);
        });
    }
    getRound() {
        return __awaiter(this, void 0, void 0, function* () {
            const { rounds } = yield this.api.getRounds();
            const roundId = window.location.hash.split('/')[1];
            const round = rounds.find((el) => el.levelData.id === roundId);
            [this.levelId, this.roundId] = roundId.split('_');
            return round;
        });
    }
}


/***/ }),

/***/ "./src/pages/HomePage/HomePage.ts":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Page */ "./src/pages/Page.ts");
/* harmony import */ var _homePage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homePage.css */ "./src/pages/HomePage/homePage.css");




class HomePage extends _Page__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super({ className: 'home' });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.clear();
        this.append([this.createContent()]);
    }
    createContent() {
        var _a, _b;
        this.user = JSON.parse(localStorage.getItem('user'));
        const h1 = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ tag: 'h1', textContent: 'RSS Puzzle Game', className: 'heading' });
        const greeting = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
            tag: 'p',
            className: 'greeting',
            innerHTML: `
            Hello, <span class="name">${(_a = this.user) === null || _a === void 0 ? void 0 : _a.name} ${(_b = this.user) === null || _b === void 0 ? void 0 : _b.surname}</span>!
        `,
        });
        const text = [
            new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
                tag: 'p',
                className: 'description',
                textContent: 'Click on words, collect phrases.',
            }),
            new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
                tag: 'p',
                className: 'description',
                textContent: 'Words can drag and drop. Select tooltip in the menu.',
            }),
        ];
        const clickHandler = () => {
            window.location.hash = 'game/1_01';
        };
        const button = new _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"]('Start', clickHandler, 'start-button');
        return new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ className: 'home-content' }, [h1, greeting, ...text, button]);
    }
}


/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.ts":
/*!******************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./src/pages/Page.ts");
/* harmony import */ var _loginPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginPage.css */ "./src/pages/LoginPage/loginPage.css");



class LoginPage extends _Page__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super({ className: 'login-page' });
        const form = new _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.append([form]);
    }
}


/***/ }),

/***/ "./src/pages/Page.ts":
/*!***************************!*\
  !*** ./src/pages/Page.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseComponent */ "./src/BaseComponent.ts");

class Page extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(params, content) {
        super(params);
        if (content)
            this.append([content]);
    }
    render() { }
}


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomizeArray: () => (/* binding */ randomizeArray),
/* harmony export */   toCapitalize: () => (/* binding */ toCapitalize),
/* harmony export */   updateRoundId: () => (/* binding */ updateRoundId)
/* harmony export */ });
function toCapitalize(str) {
    const last = str.slice(1);
    return str[0].toUpperCase() + last;
}
function randomizeArray(arr) {
    return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
}
function updateRoundId(levelId, roundId) {
    return [levelId, String(roundId).padStart(2, '0')].join('_');
}


/***/ }),

/***/ "./src/public/login.jpg":
/*!******************************!*\
  !*** ./src/public/login.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "027fb04eff9d19b1588e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.ts");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUdBQW1HLE1BQU0sUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsdUJBQXVCLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFC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V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FlO0FBQ2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvQW5zd2VyL2Fuc3dlci5jc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGludHMvaGludHMuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0vbG9naW5Gb3JtLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvV29yZENvbXBvbmVudC9Xb3JkQ29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL0dhbWVQYWdlL2dhbWVQYWdlLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL0hvbWVQYWdlL2hvbWVQYWdlLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL0xvZ2luUGFnZS9sb2dpblBhZ2UuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0Fuc3dlci9hbnN3ZXIuY3NzP2JhYmIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uY3NzPzFhYWMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS5jc3M/MWZjNCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5jc3M/NjkxNCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGludHMvaGludHMuY3NzP2U4NmIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS9sb2dpbkZvcm0uY3NzPzBmNjIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL1dvcmRDb21wb25lbnQvV29yZENvbXBvbmVudC5jc3M/ZWZmNCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL0dhbWVQYWdlL2dhbWVQYWdlLmNzcz9lYzA5Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvSG9tZVBhZ2UvaG9tZVBhZ2UuY3NzPzI3NmIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9Mb2dpblBhZ2UvbG9naW5QYWdlLmNzcz8xOWQ0Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvQVBJL2FwaS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9Sb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0Fuc3dlci9BbnN3ZXIudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGludHMvSGludHMudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS9Mb2dpbkZvcm0udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL1dvcmRDb21wb25lbnQvV29yZENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL0dhbWVQYWdlL0dhbWVQYWdlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvSG9tZVBhZ2UvSG9tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9Mb2dpblBhZ2UvTG9naW5QYWdlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvUGFnZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFuc3dlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA2LCAzMiwgNDUpO1xyXG4gICAgJi5kaXNhYmxlZCxcclxuICAgICYuc2tpcHBlZCB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAud29yZCB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmllbGQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYig2MCwgMTgsIDQyKSBpbnNldDtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9BbnN3ZXIvYW5zd2VyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDOztRQUVJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0k7WUFDSSxhQUFhO1FBQ2pCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hbnN3ZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgMzIsIDQ1KTtcXHJcXG4gICAgJi5kaXNhYmxlZCxcXHJcXG4gICAgJi5za2lwcGVkIHtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICYuZGlzYWJsZWQge1xcclxcbiAgICAgICAgLndvcmQge1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYig2MCwgMTgsIDQyKSBpbnNldDtcXHJcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tYnV0dG9uLWJnLWNvbG9yOiByZ2IoMjU0LCAyMTIsIDE2NCk7XHJcbiAgICAtLWJ1dHRvbi1zaGFkb3ctY29sb3I6IHJnYigxOTQsIDE2MywgMTI4KTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNvbG9yKTtcclxuICAgIGNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IHZhcigtLWJ1dHRvbi1zaGFkb3ctY29sb3IpO1xyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgdmFyKC0tYnV0dG9uLXNoYWRvdy1jb2xvcik7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHZhcigtLWJ1dHRvbi1zaGFkb3ctY29sb3IpO1xyXG4gICAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCOztJQUVsQiwyQkFBMkI7SUFDM0IsNENBQTRDOztJQUU1QztRQUNJLFFBQVE7UUFDUix3QkFBd0I7UUFDeEIsMENBQTBDO1FBQzFDLGVBQWU7UUFDZix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsMENBQTBDO0lBQzlDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJ1dHRvbi1iZy1jb2xvcjogcmdiKDI1NCwgMjEyLCAxNjQpO1xcclxcbiAgICAtLWJ1dHRvbi1zaGFkb3ctY29sb3I6IHJnYigxOTQsIDE2MywgMTI4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAzcHggdmFyKC0tYnV0dG9uLXNoYWRvdy1jb2xvcik7XFxyXFxuXFxyXFxuICAgICY6ZGlzYWJsZWQge1xcclxcbiAgICAgICAgdG9wOiAzcHg7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgdmFyKC0tYnV0dG9uLXNoYWRvdy1jb2xvcik7XFxyXFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgdmFyKC0tYnV0dG9uLXNoYWRvdy1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ2FtZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5hbnN3ZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGEtc291cmNlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCAxOCwgNDIpO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB3aWR0aDogNzAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmFuc3dlcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YS1zb3VyY2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDE4LCA0Mik7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDIxMiwgMTY0KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5sb2dvdXQtYnV0dG9uIHtcclxuICAgIC0tYnV0dG9uLWJnLWNvbG9yOiByZ2IoMTYxLCA0MywgNDMpO1xyXG4gICAgLS1idXR0b24tc2hhZG93LWNvbG9yOiByZ2IoMTA0LCAyOCwgMjgpO1xyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyx1Q0FBdUM7O0lBRXZDLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjEyLCAxNjQpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3V0LWJ1dHRvbiB7XFxyXFxuICAgIC0tYnV0dG9uLWJnLWNvbG9yOiByZ2IoMTYxLCA0MywgNDMpO1xcclxcbiAgICAtLWJ1dHRvbi1zaGFkb3ctY29sb3I6IHJnYigxMDQsIDI4LCAyOCk7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGludHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaGludHMtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5oaW50cy1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVweDtcclxuXHJcbiAgICA6bm90KC5hY3RpdmUpIHtcclxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGludCB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRvcDogMDtcclxuICAgICY6bm90KC5idXR0b24pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJi50cmFuc2xhdGlvbiB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogODBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmF1ZGlvIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IDAgMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYucGxheWluZyB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSxcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiByaXBwbGUgMXMgZWFzZS1vdXQgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNDgsIDE2LCAzNSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnNob3duIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9IaW50cy9oaW50cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7O0lBRVI7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLE1BQU07SUFDTjtRQUNJLGlDQUFpQztRQUNqQyxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsV0FBVztJQUNmOztJQUVBO1FBQ0ksU0FBUztRQUNULFFBQVE7UUFDUixnQkFBZ0I7O1FBRWhCO1lBQ0ksaUJBQWlCO1FBQ3JCOztRQUVBO1lBQ0k7O2dCQUVJLHNDQUFzQztnQkFDdEMsaUNBQWlDO2dCQUNqQyxrQkFBa0I7Z0JBQ2xCLFNBQVM7Z0JBQ1Qsc0JBQXNCO2dCQUN0QixXQUFXO2dCQUNYLE9BQU87Z0JBQ1Asa0JBQWtCO2dCQUNsQixRQUFRO2dCQUNSLE1BQU07WUFDVjs7WUFFQTtnQkFDSSxxQkFBcUI7WUFDekI7UUFDSjtJQUNKOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhpbnRzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5oaW50cy1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGludHMtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICA6bm90KC5hY3RpdmUpIHtcXHJcXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAuOCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpbnQge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgJjpub3QoLmJ1dHRvbikge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi50cmFuc2xhdGlvbiB7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5hdWRpbyB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNsYXRlOiAwIDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLnBsYXlpbmcge1xcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSxcXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGVhc2Utb3V0IGluZmluaXRlO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNDgsIDE2LCAzNSk7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5zaG93biB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmlwcGxlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxvZ2luLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmxvZ2luLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMiwgMTYxKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvci1saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1pdGVtIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTEsIDApO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0vbG9naW5Gb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9naW4tZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWhlYWRpbmcge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIyLCAxNjEpO1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLWxpc3Qge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItaXRlbSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTEsIDApO1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud29yZCB7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAwcHggcmdiKDQ4LCAxNiwgMzUpKTtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuXHJcbiAgICAud29yZC1jb250ZW50LFxyXG4gICAgLmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjgwcHggMjg0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmQtY29udGVudCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTIsIDE2NCk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtc2hhZG93OlxyXG4gICAgICAgICAgICAtMCAtMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMCAtMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgLTAgMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMCAycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAtMnB4IC0wIDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMnB4IC0wIDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgLTJweCAwIDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMnB4IDAgMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAtMXB4IC0ycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAxcHggLTJweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIC0xcHggMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMXB4IDJweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIC0ycHggLTFweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDJweCAtMXB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgLTJweCAxcHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAycHggMXB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgLTJweCAtMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMnB4IC0ycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAtMnB4IDJweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDJweCAycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAtMnB4IC0ycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAycHggLTJweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIC0ycHggMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMnB4IDJweCAwICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLmZpcnN0KSB7XHJcbiAgICAgICAgLndvcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hc2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMCA1MCUsIHRyYW5zcGFyZW50IDVweCwgYmxhY2sgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubGFzdCB7XHJcbiAgICAgICAgLmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlKSk7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTIsIDE2NCk7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDAgNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLndyb25nIHtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMCByZWQ7XHJcbiAgICB9XHJcbiAgICAmLmNvcnJlY3Qge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC5zaG93bikge1xyXG4gICAgICAgIC53b3JkLWNvbnRlbnQsXHJcbiAgICAgICAgLmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1dvcmRDb21wb25lbnQvV29yZENvbXBvbmVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLDZDQUE2QztJQUM3QyxlQUFlOztJQUVmOztRQUVJLDRCQUE0QjtRQUM1Qiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxvQ0FBb0M7UUFDcEMsWUFBWTtRQUNaLFdBQVc7UUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQXdCcUI7SUFDekI7O0lBRUE7UUFDSTtZQUNJLGdFQUFnRTtRQUNwRTtJQUNKOztJQUVBO1FBQ0k7WUFDSSxhQUFhO1FBQ2pCO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7UUFDVixpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0k7O1lBRUksaUNBQWlDO1FBQ3JDO0lBQ0o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud29yZCB7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAwcHggcmdiKDQ4LCAxNiwgMzUpKTtcXHJcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcclxcblxcclxcbiAgICAud29yZC1jb250ZW50LFxcclxcbiAgICAuYWZ0ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjgwcHggMjg0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndvcmQtY29udGVudCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDIxMiwgMTY0KTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgICAgICAgLTAgLTJweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMCAtMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAtMCAycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIDAgMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAtMnB4IC0wIDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAycHggLTAgMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0ycHggMCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMnB4IDAgMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0xcHggLTJweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMXB4IC0ycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0xcHggMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAxcHggMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAtMnB4IC0xcHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIDJweCAtMXB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAtMnB4IDFweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMnB4IDFweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgLTJweCAtMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAycHggLTJweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgLTJweCAycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIDJweCAycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0ycHggLTJweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMnB4IC0ycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0ycHggMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAycHggMnB4IDAgIzAwMDAwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOm5vdCguZmlyc3QpIHtcXHJcXG4gICAgICAgIC53b3JkLWNvbnRlbnQge1xcclxcbiAgICAgICAgICAgIG1hc2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMCA1MCUsIHRyYW5zcGFyZW50IDVweCwgYmxhY2sgMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5sYXN0IHtcXHJcXG4gICAgICAgIC5hZnRlciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWZ0ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICBsZWZ0OiAxMDAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoLTUwJSkpO1xcclxcbiAgICAgICAgei1pbmRleDogOTk5O1xcclxcbiAgICAgICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTIsIDE2NCk7XFxyXFxuICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgMCA1MCUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYud3Jvbmcge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgcmVkO1xcclxcbiAgICB9XFxyXFxuICAgICYuY29ycmVjdCB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCBncmVlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOm5vdCguc2hvd24pIHtcXHJcXG4gICAgICAgIC53b3JkLWNvbnRlbnQsXFxyXFxuICAgICAgICAuYWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nYW1lLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9HYW1lUGFnZS9nYW1lUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZS1wYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaG9tZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogYXBwZWFyYW5jZUhvbWU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcblxyXG4uaG9tZS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXJhbmNlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLmdyZWV0aW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICBhbmltYXRpb24tbmFtZTogYXBwZWFyYW5jZU5hbWVBZnRlcjtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXJhbmNlTmFtZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFwcGVhcmFuY2Uge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMTAwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGFwcGVhcmFuY2VIb21lIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXBwZWFyYW5jZU5hbWUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFwcGVhcmFuY2VOYW1lQWZ0ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgNjUlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9Ib21lUGFnZS9ob21lUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjs7SUFFMUIsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIsVUFBVTtJQUNWLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCOztJQUVyQjtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFFBQVE7UUFDUixZQUFZO1FBQ1osc0JBQXNCOztRQUV0QixtQ0FBbUM7UUFDbkMsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQiw0QkFBNEI7SUFDaEM7O0lBRUEsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsT0FBTztJQUNYO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsT0FBTztJQUNYO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsT0FBTztJQUNYO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvbWUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXJhbmNlSG9tZTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwcGVhcmFuY2U7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZXRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICBhbmltYXRpb24tbmFtZTogYXBwZWFyYW5jZU5hbWVBZnRlcjtcXHJcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXJhbmNlTmFtZTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXJhbmNlIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgZmlsdGVyOiBibHVyKDEwMHB4KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgZmlsdGVyOiBibHVyKDApO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYXBwZWFyYW5jZUhvbWUge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhcmFuY2VOYW1lIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxuICAgIDYwJSB7XFxyXFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXJhbmNlTmFtZUFmdGVyIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgd2lkdGg6IDAlO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDY1JSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubG9naW4tcGFnZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvTG9naW5QYWdlL2xvZ2luUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvZ2luLXBhZ2Uge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuLyogRG9jdW1lbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gKi9cclxuXHJcbmh0bWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG59XHJcblxyXG4vKiBTZWN0aW9uc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICovXHJcblxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gXFxgaDFcXGAgZWxlbWVudHMgd2l0aGluIFxcYHNlY3Rpb25cXGAgYW5kXHJcbiAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcclxufVxyXG5cclxuLyogR3JvdXBpbmcgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXHJcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxyXG4gKi9cclxuXHJcbmhyIHtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXHJcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnByZSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbn1cclxuXHJcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cclxuXHJcbmEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxyXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmFiYnJbdGl0bGVdIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuYixcclxuc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmNvZGUsXHJcbmtiZCxcclxuc2FtcCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXHJcbiAqIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5zdWIsXHJcbnN1cCB7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5zdWIge1xyXG4gICAgYm90dG9tOiAtMC4yNWVtO1xyXG59XHJcblxyXG5zdXAge1xyXG4gICAgdG9wOiAtMC41ZW07XHJcbn1cclxuXHJcbi8qIEVtYmVkZGVkIGNvbnRlbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEZvcm1zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5vcHRncm91cCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cclxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXHJcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cclxuICovXHJcblxyXG5idXR0b24sXHJcbnNlbGVjdCB7XHJcbiAgICAvKiAxICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5bdHlwZT0nYnV0dG9uJ10sXHJcblt0eXBlPSdyZXNldCddLFxyXG5bdHlwZT0nc3VibWl0J10ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXHJcbiAqL1xyXG5cclxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxyXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXHJcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxyXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xyXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXHJcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXHJcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmxlZ2VuZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xyXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cclxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cclxuICovXHJcblxyXG5wcm9ncmVzcyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cclxuICovXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxyXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuW3R5cGU9J2NoZWNrYm94J10sXHJcblt0eXBlPSdyYWRpbyddIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cclxuICovXHJcblxyXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuW3R5cGU9J3NlYXJjaCddIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXHJcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxyXG4gKi9cclxuXHJcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxyXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxyXG4gKi9cclxuXHJcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cclxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cclxufVxyXG5cclxuLyogSW50ZXJhY3RpdmVcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLypcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG59XHJcblxyXG4vKiBNaXNjXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbnRlbXBsYXRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cclxuICovXHJcblxyXG5baGlkZGVuXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDMUM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztFQUdFOztBQUVGO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtJQUNJLHVCQUF1QixFQUFFLE1BQU07SUFDL0IsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSxpQ0FBaUMsRUFBRSxNQUFNO0lBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQzFCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7OztFQUdFOztBQUVGO0lBQ0ksbUJBQW1CLEVBQUUsTUFBTTtJQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDN0M7O0FBRUE7O0VBRUU7O0FBRUY7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0lBR0ksaUNBQWlDLEVBQUUsTUFBTTtJQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztFQUdFOztBQUVGOztJQUVJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7SUFLSSxvQkFBb0IsRUFBRSxNQUFNO0lBQzVCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLGlCQUFpQixFQUFFLE1BQU07SUFDekIsU0FBUyxFQUFFLE1BQU07QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOztJQUVJLE1BQU07SUFDTixpQkFBaUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOztJQUVJLE1BQU07SUFDTixvQkFBb0I7QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBOztFQUVFOztBQUVGOzs7O0lBSUksOEJBQThCO0FBQ2xDOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBOzs7OztFQUtFOztBQUVGO0lBQ0ksc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixjQUFjLEVBQUUsTUFBTTtJQUN0QixjQUFjLEVBQUUsTUFBTTtJQUN0QixlQUFlLEVBQUUsTUFBTTtJQUN2QixVQUFVLEVBQUUsTUFBTTtJQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQy9COztBQUVBOztFQUVFOztBQUVGO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0lBRUksc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixVQUFVLEVBQUUsTUFBTTtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLDZCQUE2QixFQUFFLE1BQU07SUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3pCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxyXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXHJcXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICogYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9J2NoZWNrYm94J10sXFxyXFxuW3R5cGU9J3JhZGlvJ10ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3B1YmxpYy9sb2dpbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QixpQkFBaUI7SUFDakIseURBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjs7SUFFaEI7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwobm9ybWFsaXplLmNzcyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL2xvZ2luLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHJcXG4gICAgJjpkaXNhYmxlZCB7XFxyXFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fuc3dlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fuc3dlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oaW50cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hpbnRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbkZvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbkZvcm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1dvcmRDb21wb25lbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Xb3JkQ29tcG9uZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lUGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVQYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lUGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVQYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpblBhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpblBhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQXBpLnBhdGggPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JvbGxpbmctc2NvcGVzLXNjaG9vbC9yc3MtcHV6emxlLWRhdGEvbWFpbi8nO1xuICAgIH1cbiAgICBnZXRSb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAoZmlsZSA9ICd3b3JkQ29sbGVjdGlvbkxldmVsMS5qc29uJywgZm9sZGVyID0gJ2RhdGEvJykge1xuICAgICAgICAgICAgY29uc3Qgcm91bmRzID0geWllbGQgZmV0Y2goQXBpLnBhdGggKyBmb2xkZXIgKyBmaWxlKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiBqc29uKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBuZXcgRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICByZXR1cm4gcm91bmRzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vUm91dGVyJztcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbnJvdXRlci5yZW5kZXIoKTtcbiIsImV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY2hpbGRyZW4gPSBbXSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy50YWcpIHx8ICdkaXYnKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmV2ZW50KVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkRXZlbnRMaXN0ZW5lcihwcm9wcy5ldmVudC50eXBlLCBwcm9wcy5ldmVudC5jYWxsYmFjayk7XG4gICAgICAgIHRoaXMuYXBwZW5kKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY3JlYXRlRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIH1cbiAgICBhcHBlbmQoY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEJhc2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHBlbmQoY2hpbGQuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwZW5kKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldERhdGFzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGF0YXNldFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXRDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgR2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9HYW1lUGFnZS9HYW1lUGFnZSc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9Ib21lUGFnZS9Ib21lUGFnZSc7XG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlL0xvZ2luUGFnZSc7XG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICBwYWdlOiBuZXcgTG9naW5QYWdlKCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdob21lJyxcbiAgICAgICAgcGFnZTogbmV3IEhvbWVQYWdlKCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdnYW1lJyxcbiAgICAgICAgcGFnZTogbmV3IEdhbWVQYWdlKCksXG4gICAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc2hDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gICAgICAgIHRoaXMuaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMuaGFzaENoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc2ggfHwgKHVzZXIgJiYgdGhpcy5oYXNoID09PSAnbG9naW4nKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRIYXNoKCdob21lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldEhhc2goJ2xvZ2luJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlO1xuICAgICAgICBpZiAodGhpcy5oYXNoLnN0YXJ0c1dpdGgoJ2dhbWUnKSkge1xuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSB0aGlzLnJvdXRlcy5maW5kKChyb3V0ZSkgPT4gcm91dGUucGF0aCA9PT0gJ2dhbWUnKTtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID09PSBudWxsIHx8IGN1cnJlbnRQYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50UGFnZS5wYWdlLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSB0aGlzLnJvdXRlcy5maW5kKChyb3V0ZSkgPT4gcm91dGUucGF0aCA9PT0gdGhpcy5oYXNoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkgIT09ICdsb2dpbicpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChuZXcgSGVhZGVyKCkuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjdXJyZW50UGFnZSA9PT0gbnVsbCB8fCBjdXJyZW50UGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFBhZ2UucGFnZS5nZXRDb21wb25lbnQoKSk7XG4gICAgfVxuICAgIHNldEhhc2goaGFzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0ICcuL2Fuc3dlci5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5zd2VyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBzZW50ZW5jZSwgZHJhZ092ZXIsIGRyb3ApIHtcbiAgICAgICAgc3VwZXIoeyBjbGFzc05hbWU6ICdhbnN3ZXInIH0pO1xuICAgICAgICB0aGlzLnNlbnRlbmNlID0gc2VudGVuY2U7XG4gICAgICAgIHRoaXMud29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVGaWVsZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVGaWVsZChpLCBkcmFnT3ZlciwgZHJvcCk7XG4gICAgICAgICAgICB0aGlzLndvcmRzW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVGaWVsZChpbmRleCwgZHJhZ092ZXIsIGRyb3ApIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmaWVsZCcsXG4gICAgICAgICAgICBvbmRyb3A6IGRyb3AsXG4gICAgICAgICAgICBvbmRyYWdvdmVyOiBkcmFnT3ZlcixcbiAgICAgICAgICAgIG9uZHJhZ2xlYXZlOiB0aGlzLmRyYWdMZWF2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZWxkLnNldERhdGFzZXQoJ2luZGV4JywgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuYXBwZW5kKFtmaWVsZF0pO1xuICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkLmdldENvbXBvbmVudCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmVGaWVsZHMucHVzaChmaWVsZC5nZXRDb21wb25lbnQoKSk7XG4gICAgICAgIHRoaXMuc29ydEZpZWxkcyh0aGlzLmFjdGl2ZUZpZWxkcyk7XG4gICAgfVxuICAgIHNvcnRGaWVsZHMoZmllbGRzKSB7XG4gICAgICAgIHJldHVybiBmaWVsZHMuc29ydCgoYSwgYikgPT4gK2EuZGF0YXNldC5pbmRleCAtICtiLmRhdGFzZXQuaW5kZXgpO1xuICAgIH1cbiAgICBhcHBlbmRXb3JkKGNoaWxkLCBpbmRleCkge1xuICAgICAgICBsZXQgYWN0aXZlRmllbGRJbmRleDtcbiAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICBhY3RpdmVGaWVsZEluZGV4ID0gdGhpcy5hY3RpdmVGaWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuZGF0YXNldC5pbmRleCA9PT0gaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlRmllbGRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aXZlRmllbGQgPSB0aGlzLmFjdGl2ZUZpZWxkc1thY3RpdmVGaWVsZEluZGV4XTtcbiAgICAgICAgaWYgKGFjdGl2ZUZpZWxkKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZCBpbnN0YW5jZW9mIEJhc2VDb21wb25lbnQgPyBjaGlsZC5nZXRDb21wb25lbnQoKSA6IGNoaWxkO1xuICAgICAgICAgICAgdGhpcy53b3Jkc1srYWN0aXZlRmllbGQuZGF0YXNldC5pbmRleF0gPSBjb21wb25lbnQ7XG4gICAgICAgICAgICBhY3RpdmVGaWVsZC5hcHBlbmQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIGFjdGl2ZUZpZWxkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgd2lkdGg6ICR7Y29tcG9uZW50LmRhdGFzZXQud2lkdGh9cHhgKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRmllbGRzLnNwbGljZShhY3RpdmVGaWVsZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVXb3JkKGluZGV4KSB7XG4gICAgICAgIHRoaXMud29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgICAgICAgd29yZCA9PT0gbnVsbCB8fCB3b3JkID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3b3JkLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgICAgICAgIHdvcmQgPT09IG51bGwgfHwgd29yZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogd29yZC5jbGFzc0xpc3QucmVtb3ZlKCd3cm9uZycpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkc1sraW5kZXhdO1xuICAgICAgICB0aGlzLndvcmRzWytpbmRleF0gPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICAgICAgdGhpcy5zb3J0RmllbGRzKHRoaXMuYWN0aXZlRmllbGRzKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogMCcpO1xuICAgIH1cbiAgICBpc1NvbHZlZCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gdGhpcy5zZW50ZW5jZS5zcGxpdCgnICcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLndvcmRzW2ldO1xuICAgICAgICAgICAgaWYgKChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1lbnQudGV4dENvbnRlbnQpICE9PSB3b3Jkc1tpXSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3cm9uZycpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBkcmFnTGVhdmUoZXYpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ZpZWxkJylcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICAgIGNsZWFyRmllbGRzKGRyb3BFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkICE9PSBkcm9wRWxlbWVudCkuZm9yRWFjaCgoZmllbGQpID0+IGZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKSk7XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGVsO1xuICAgICAgICAgICAgZmllbGQub25kcm9wID0gbnVsbDtcbiAgICAgICAgICAgIGZpZWxkLm9uZHJhZ292ZXIgPSBudWxsO1xuICAgICAgICAgICAgZmllbGQub25kcmFnbGVhdmUgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgJy4vYnV0dG9uLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0Q29udGVudCwgY2FsbGJhY2ssIGNsYXNzTmFtZSA9ICcnLCBkaXNhYmxlZCA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKHsgdGFnOiAnYnV0dG9uJywgY2xhc3NOYW1lOiBgYnV0dG9uICAke2NsYXNzTmFtZX1gLCBvbmNsaWNrOiBjYWxsYmFjaywgdGV4dENvbnRlbnQgfSk7XG4gICAgICAgIHRoaXMuc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgIH1cbiAgICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHJhbmRvbWl6ZUFycmF5LCB0b0NhcGl0YWxpemUsIHVwZGF0ZVJvdW5kSWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgQW5zd2VyIGZyb20gJy4uL0Fuc3dlci9BbnN3ZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBIaW50cyBmcm9tICcuLi9IaW50cy9IaW50cyc7XG5pbXBvcnQgV29yZENvbXBvbmVudCBmcm9tICcuLi9Xb3JkQ29tcG9uZW50L1dvcmRDb21wb25lbnQnO1xuaW1wb3J0ICcuL0dhbWUuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbElkLCByb3VuZElkLCBwYWdlKSB7XG4gICAgICAgIHN1cGVyKHsgY2xhc3NOYW1lOiAnZ2FtZScgfSk7XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmQgPSAwO1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLmxldmVsSWQgPSBsZXZlbElkO1xuICAgICAgICB0aGlzLnJvdW5kSWQgPSByb3VuZElkO1xuICAgICAgICB0aGlzLmhpbnRzID0gbmV3IEhpbnRzKHRoaXMucGFnZSk7XG4gICAgICAgIHRoaXMuYW5zd2VycyA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnYW5zd2VycycgfSk7XG4gICAgICAgIHRoaXMuYXBwZW5kKFt0aGlzLmhpbnRzLCB0aGlzLmFuc3dlcnNdKTtcbiAgICB9XG4gICAgcmVuZGVyR2FtZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuc2VudGVuY2UgPSBkYXRhLndvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICB0aGlzLmltYWdlU3JjID0gdGhpcy5kYXRhLmxldmVsRGF0YS5pbWFnZVNyYztcbiAgICAgICAgdGhpcy53b3JkcyA9IHRoaXMuY3JlYXRlV29yZHModGhpcy5zZW50ZW5jZSk7XG4gICAgICAgIHRoaXMuYW5zd2VyID0gdGhpcy5jcmVhdGVBbnN3ZXIodGhpcy53b3Jkcy5sZW5ndGgsIHRoaXMuc2VudGVuY2UudGV4dEV4YW1wbGUpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ2RhdGEtc291cmNlJyB9LCB0aGlzLndvcmRzKTtcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgQnV0dG9uKCdDaGVjaycsICgpID0+IHsgdmFyIF9hOyByZXR1cm4gKChfYSA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNTb2x2ZWQoKSkgJiYgdGhpcy51cGRhdGVCdXR0b24odHJ1ZSk7IH0sICdjaGVjaycsIHRydWUpO1xuICAgICAgICB0aGlzLmFuc3dlcnMuYXBwZW5kKFt0aGlzLmFuc3dlcl0pO1xuICAgICAgICB0aGlzLmFwcGVuZChbdGhpcy5hbnN3ZXJzLCB0aGlzLmRhdGFTb3VyY2UsIHRoaXMuYnV0dG9uLCB0aGlzLmNyZWF0ZVNraXBCdXR0b24oKV0pO1xuICAgICAgICB0aGlzLndvcmRzLmZvckVhY2goKHdvcmQpID0+IHdvcmQuc2V0V2lkdGgodGhpcy5pbWFnZVNyYywgdGhpcy5jdXJyZW50V29yZCkpO1xuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0Q29tcG9uZW50KCkuY2hpbGROb2RlcztcbiAgICAgICAgdGhpcy5oaW50cy5zZXRUZXh0KHRoaXMuc2VudGVuY2UudGV4dEV4YW1wbGVUcmFuc2xhdGUpO1xuICAgICAgICB0aGlzLmhpbnRzLnNldEF1ZGlvKHRoaXMuc2VudGVuY2UuYXVkaW9FeGFtcGxlKTtcbiAgICAgICAgdGhpcy5oaW50cy5zZXRXb3Jkcyh0aGlzLndvcmRzKTtcbiAgICAgICAgdGhpcy5oaW50cy5zaG93SW1hZ2UoKTtcbiAgICAgICAgdGhpcy5oaW50cy5zaG93QXVkaW8oKTtcbiAgICAgICAgdGhpcy5oaW50cy5zaG93VHJhbnNsYXRpb24oKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmdldENvbXBvbmVudCgpLmFwcGVuZCguLi5yYW5kb21pemVBcnJheShbLi4uYXJyXSkpO1xuICAgIH1cbiAgICBjcmVhdGVXb3JkcyhzZW50ZW5jZSkge1xuICAgICAgICBjb25zdCB3b3JkcyA9IHNlbnRlbmNlLnRleHRFeGFtcGxlLnNwbGl0KCcgJykubWFwKCh3b3JkLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmRDb21wb25lbnQgPSBuZXcgV29yZENvbXBvbmVudCh3b3JkLCB7XG4gICAgICAgICAgICAgICAgb25jbGljazogdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvbmRyYWdzdGFydDogdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvbnRvdWNobW92ZTogdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIG9udG91Y2hlbmQ6IHRoaXMuZHJhZ0Ryb3AuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvbnRvdWNoc3RhcnQ6IHRoaXMudG91Y2hTdGFydC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMClcbiAgICAgICAgICAgICAgICB3b3JkQ29tcG9uZW50LmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0Jyk7XG4gICAgICAgICAgICBlbHNlIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICB3b3JkQ29tcG9uZW50LmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5hZGQoJ2xhc3QnKTtcbiAgICAgICAgICAgIHJldHVybiB3b3JkQ29tcG9uZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc3QgcmFuZG9taXplZFdvcmRzID0gcmFuZG9taXplQXJyYXk8V29yZENvbXBvbmVudD4od29yZHMpO1xuICAgICAgICByZXR1cm4gd29yZHM7XG4gICAgfVxuICAgIGNyZWF0ZUFuc3dlcihsZW5ndGgsIHNlbnRlbmNlKSB7XG4gICAgICAgIGNvbnN0IGFuc3dlciA9IG5ldyBBbnN3ZXIobGVuZ3RoLCBzZW50ZW5jZSwgdGhpcy5kcmFnb3ZlckhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5kcm9wSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5hbnN3ZXIgPSBhbnN3ZXI7XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuICAgIG1vdmVXb3JkKGNvbXBvbmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKHBhcmVudC5jbGFzc05hbWUgPT09ICdkYXRhLXNvdXJjZScpIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kV29yZChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKF9iID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVXb3JkKHBhcmVudCA9PT0gbnVsbCB8fCBwYXJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIChfYyA9IHRoaXMuZGF0YVNvdXJjZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFwcGVuZChbY29tcG9uZW50XSk7XG4gICAgICAgIH1cbiAgICAgICAgKF9kID0gdGhpcy5idXR0b24pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5zZXREaXNhYmxlZCgoKF9lID0gdGhpcy5kYXRhU291cmNlKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuZ2V0Q29tcG9uZW50KCkuY2hpbGROb2Rlcy5sZW5ndGgpICE9PSAwKTtcbiAgICB9XG4gICAgbmV4dFNlbnRlbmNlKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICAoX2EgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIChfYiA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGlzYWJsZSgpO1xuICAgICAgICAoX2MgPSB0aGlzLndvcmRzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZm9yRWFjaCgod29yZCkgPT4gd29yZC5kaXNhYmxlKCkpO1xuICAgICAgICB0aGlzLnNlbnRlbmNlID0gdGhpcy5kYXRhLndvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICB0aGlzLndvcmRzID0gdGhpcy5jcmVhdGVXb3Jkcyh0aGlzLnNlbnRlbmNlKTtcbiAgICAgICAgdGhpcy5hbnN3ZXIgPSB0aGlzLmNyZWF0ZUFuc3dlcih0aGlzLndvcmRzLmxlbmd0aCwgdGhpcy5zZW50ZW5jZS50ZXh0RXhhbXBsZSk7XG4gICAgICAgIHRoaXMuYW5zd2Vycy5hcHBlbmQoW3RoaXMuYW5zd2VyXSk7XG4gICAgICAgIChfZCA9IHRoaXMuZGF0YVNvdXJjZSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmFwcGVuZCh0aGlzLndvcmRzKTtcbiAgICAgICAgdGhpcy53b3Jkcy5mb3JFYWNoKCh3b3JkKSA9PiB3b3JkLnNldFdpZHRoKHRoaXMuaW1hZ2VTcmMsIHRoaXMuY3VycmVudFdvcmQpKTtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5kYXRhU291cmNlLmdldENvbXBvbmVudCgpLmNoaWxkTm9kZXM7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5nZXRDb21wb25lbnQoKS5hcHBlbmQoLi4ucmFuZG9taXplQXJyYXkoWy4uLmFycl0pKTtcbiAgICAgICAgKF9lID0gdGhpcy5idXR0b24pID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b24oKTtcbiAgICAgICAgdGhpcy5oaW50cy5zZXRUZXh0KHRoaXMuc2VudGVuY2UudGV4dEV4YW1wbGVUcmFuc2xhdGUpO1xuICAgICAgICB0aGlzLmhpbnRzLnNldEF1ZGlvKHRoaXMuc2VudGVuY2UuYXVkaW9FeGFtcGxlKTtcbiAgICAgICAgdGhpcy5oaW50cy5zZXRXb3Jkcyh0aGlzLndvcmRzKTtcbiAgICAgICAgdGhpcy5oaW50cy5zaG93SW1hZ2UoKTtcbiAgICAgICAgdGhpcy5oaW50cy5zaG93QXVkaW8oKTtcbiAgICAgICAgdGhpcy5oaW50cy5zaG93VHJhbnNsYXRpb24oKTtcbiAgICB9XG4gICAgbmV4dExldmVsKCkge1xuICAgICAgICBjb25zdCBuZXdIYXNoID0gYGdhbWUvJHt1cGRhdGVSb3VuZElkKCt0aGlzLmxldmVsSWQsICt0aGlzLnJvdW5kSWQgKyAxKX1gO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG5ld0hhc2g7XG4gICAgfVxuICAgIHVwZGF0ZUJ1dHRvbihpc0NvbnRpbnVlID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHRleHQgPSAnY2hlY2snO1xuICAgICAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLmNoZWNrSGFuZGxlcjtcbiAgICAgICAgaWYgKGlzQ29udGludWUpIHtcbiAgICAgICAgICAgIHRleHQgPSAnY29udGludWUnO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSB0aGlzLmNvbnRpbnVlSGFuZGxlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1dHRvbi5nZXRDb21wb25lbnQoKS50ZXh0Q29udGVudCA9IHRvQ2FwaXRhbGl6ZSh0ZXh0KTtcbiAgICAgICAgdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50KCkuY2xhc3NOYW1lID0gYGJ1dHRvbiAke3RleHR9YDtcbiAgICAgICAgdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50KCkub25jbGljayA9IGNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMubW92ZVdvcmQoZS50YXJnZXQpO1xuICAgIH1cbiAgICBjaGVja0hhbmRsZXIoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmICgoX2EgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzU29sdmVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uKHRydWUpO1xuICAgICAgICAgICAgKF9iID0gdGhpcy53b3JkcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKHdvcmQpID0+IHdvcmQuc2V0V2lkdGgodGhpcy5pbWFnZVNyYywgdGhpcy5jdXJyZW50V29yZCkpO1xuICAgICAgICAgICAgdGhpcy5oaW50cy5zaG93VHJhbnNsYXRpb24odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmhpbnRzLnNob3dJbWFnZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250aW51ZUhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMuaGludHMuc2hvd1RyYW5zbGF0aW9uKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmQgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmQgPT09IDEwKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRMZXZlbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0U2VudGVuY2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVTa2lwQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSGFuZGxlcigpO1xuICAgICAgICAgICAgKF9hID0gdGhpcy53b3JkcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHdvcmQpID0+IHdvcmQuZGlzYWJsZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHdyb25nV29yZHMgPSAoX2IgPSB0aGlzLndvcmRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5jb250YWlucygnd3JvbmcnKSk7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFdvcmRzID0gKF9jID0gdGhpcy53b3JkcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmZpbHRlcigod29yZCkgPT4gIXdvcmQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3JyZWN0JykpO1xuICAgICAgICAgICAgd3JvbmdXb3JkcyA9PT0gbnVsbCB8fCB3cm9uZ1dvcmRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3cm9uZ1dvcmRzLmZvckVhY2goKHdvcmQpID0+IHRoaXMubW92ZVdvcmQod29yZC5nZXRDb21wb25lbnQoKSkpO1xuICAgICAgICAgICAgKF9kID0gdGhpcy5zZW50ZW5jZSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRleHRFeGFtcGxlLnNwbGl0KCcgJykuZm9yRWFjaCgodGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmRJbmRleCA9IGZpbHRlcmVkV29yZHMgPT09IG51bGwgfHwgZmlsdGVyZWRXb3JkcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmlsdGVyZWRXb3Jkcy5maW5kSW5kZXgoKHdvcmQpID0+IHdvcmQuZ2V0Q29tcG9uZW50KCkudGV4dENvbnRlbnQgPT09IHRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBmaWx0ZXJlZFdvcmRzW3dvcmRJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHdvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlV29yZCh3b3JkLmdldENvbXBvbmVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXb3JkcyA9PT0gbnVsbCB8fCBmaWx0ZXJlZFdvcmRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaWx0ZXJlZFdvcmRzLnNwbGljZSh3b3JkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b24odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSGFuZGxlcigpO1xuICAgICAgICAgICAgKF9lID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QuYWRkKCdza2lwcGVkJyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQnV0dG9uKFwiSSBkb24ndCBrbm93XCIsIGNhbGxiYWNrLCAnc2tpcCcpO1xuICAgIH1cbiAgICBkcmFnU3RhcnQoZXYpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0YXJnZXQ7XG4gICAgfVxuICAgIGRyYWdvdmVySGFuZGxlcihldiwgc3RyYWlnaHRUYXJnZXQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgICAgICBpZiAoc3RyYWlnaHRUYXJnZXQpXG4gICAgICAgICAgICB0YXJnZXQgPSBzdHJhaWdodFRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdmaWVsZCcgJiYgdGFyZ2V0LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSAoX2EgPSB0aGlzLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhc2V0LndpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgd2lkdGg6ICR7d2lkdGh9cHhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcm9wSGFuZGxlcihldikge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnZmllbGQnKSB7XG4gICAgICAgICAgICBpZiAoKChfYSA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NOYW1lKSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJZCA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVXb3JkKGN1cnJlbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2MgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFwcGVuZFdvcmQodGhpcy5jdXJyZW50LCB0YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAoX2QgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnJlbW92ZVdvcmQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgaWYgKCgoX2UgPSB0aGlzLmN1cnJlbnQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmNsYXNzTmFtZSkgPT09ICdmaWVsZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSB0aGlzLmN1cnJlbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIChfZiA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YucmVtb3ZlV29yZChjdXJyZW50SWQpO1xuICAgICAgICAgICAgICAgIChfZyA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuYXBwZW5kV29yZCh0YXJnZXQsIGN1cnJlbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoX2ggPSB0aGlzLmRhdGFTb3VyY2UpID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5hcHBlbmQoW3RhcmdldF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9qID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5hcHBlbmRXb3JkKHRoaXMuY3VycmVudCwgdGFyZ2V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIChfayA9IHRoaXMuYnV0dG9uKSA9PT0gbnVsbCB8fCBfayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2suc2V0RGlzYWJsZWQoKChfbCA9IHRoaXMuZGF0YVNvdXJjZSkgPT09IG51bGwgfHwgX2wgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9sLmdldENvbXBvbmVudCgpLmNoaWxkTm9kZXMubGVuZ3RoKSAhPT0gMCk7XG4gICAgfVxuICAgIHRvdWNoU3RhcnQoZSkge1xuICAgICAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgdGhpcy50b3VjaGVzID0geyBwYWdlWCwgcGFnZVkgfTtcbiAgICB9XG4gICAgZHJhZ01vdmUoZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHdvcmQgPSBlLnRhcmdldDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gd29yZDtcbiAgICAgICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHdvcmQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB3b3JkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIHdvcmQuc3R5bGUudG9wID0gYCR7cGFnZVkgLSB3b3JkLm9mZnNldEhlaWdodCAvIDJ9cHhgO1xuICAgICAgICB3b3JkLnN0eWxlLmxlZnQgPSBgJHtwYWdlWCAtIHdvcmQub2Zmc2V0V2lkdGggLyAyfXB4YDtcbiAgICAgICAgY29uc3QgZHJvcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYLCBwYWdlWSk7XG4gICAgICAgIGlmICh0aGlzLmRyb3BFbGVtZW50ICE9PSBkcm9wRWxlbWVudClcbiAgICAgICAgICAgIHRoaXMuZHJvcEVsZW1lbnQgPSBkcm9wRWxlbWVudDtcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLmRyb3BFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NOYW1lKSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAgICAgdGhpcy5kcmFnb3ZlckhhbmRsZXIoZSwgdGhpcy5kcm9wRWxlbWVudCk7XG4gICAgICAgICAgICAoX2IgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsZWFyRmllbGRzKHRoaXMuZHJvcEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYWdEcm9wKGUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX20sIF9vLCBfcCwgX3EsIF9yLCBfcywgX3QsIF91O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHdvcmQgPSBlLnRhcmdldDtcbiAgICAgICAgd29yZC5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgICAgICB3b3JkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIHdvcmQuc3R5bGUudG9wID0gYDBgO1xuICAgICAgICB3b3JkLnN0eWxlLmxlZnQgPSBgMGA7XG4gICAgICAgIGNvbnN0IG5ld1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICBjb25zdCBuZXdZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgaWYgKG5ld1ggPT09ICgoX2EgPSB0aGlzLnRvdWNoZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYWdlWCkgJiYgbmV3WSA9PT0gKChfYiA9IHRoaXMudG91Y2hlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhZ2VZKSkge1xuICAgICAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIoZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKF9jID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jbGVhckZpZWxkcygpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoKChfZCA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2xhc3NOYW1lKSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJZCA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgKF9lID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5yZW1vdmVXb3JkKGN1cnJlbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKChfZiA9IHRoaXMuZHJvcEVsZW1lbnQpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jbGFzc05hbWUpID09PSAnZmllbGQnKSB7XG4gICAgICAgICAgICAgICAgKF9nID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy5hcHBlbmRXb3JkKHRoaXMuY3VycmVudCwgKF9oID0gdGhpcy5kcm9wRWxlbWVudCkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKChfaiA9IHRoaXMuZHJvcEVsZW1lbnQpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5jbGFzc0xpc3QuY29udGFpbnMoJ3dvcmQnKSkgJiZcbiAgICAgICAgICAgICAgICAoKF9sID0gKF9rID0gdGhpcy5kcm9wRWxlbWVudCkgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC5jbGFzc05hbWUpID09PSAnZmllbGQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0aGlzLmRyb3BFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoKChfbSA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX20uY2xhc3NOYW1lKSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSB0aGlzLmN1cnJlbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAoX28gPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX28gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vLmFwcGVuZFdvcmQodGhpcy5kcm9wRWxlbWVudCwgY3VycmVudElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChfcCA9IHRoaXMuZGF0YVNvdXJjZSkgPT09IG51bGwgfHwgX3AgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wLmFwcGVuZChbdGhpcy5kcm9wRWxlbWVudF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX3EgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX3EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9xLnJlbW92ZVdvcmQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgIChfciA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3IuYXBwZW5kV29yZCh0aGlzLmN1cnJlbnQsIHRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIChfcyA9IHRoaXMuZGF0YVNvdXJjZSkgPT09IG51bGwgfHwgX3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zLmFwcGVuZChbdGhpcy5jdXJyZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKF90ID0gdGhpcy5idXR0b24pID09PSBudWxsIHx8IF90ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdC5zZXREaXNhYmxlZCgoKF91ID0gdGhpcy5kYXRhU291cmNlKSA9PT0gbnVsbCB8fCBfdSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3UuZ2V0Q29tcG9uZW50KCkuY2hpbGROb2Rlcy5sZW5ndGgpICE9PSAwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHsgdGFnOiAnaGVhZGVyJywgY2xhc3NOYW1lOiAnaGVhZGVyJyB9KTtcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ2xvZ2luJztcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbG9nb3V0QnV0dG9uID0gbmV3IEJ1dHRvbignTG9nIG91dCcsIGNsaWNrSGFuZGxlciwgJ2xvZ291dC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgbG9nbyA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2EnLFxuICAgICAgICAgICAgaHJlZjogJyNob21lJyxcbiAgICAgICAgICAgIHRleHQ6ICdSU1MgUHV6emxlJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xvZ28nLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hcHBlbmQoW2xvZ28sIGxvZ291dEJ1dHRvbl0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQVBJL2FwaSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0ICcuL2hpbnRzLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcih7IGNsYXNzTmFtZTogJ2hpbnRzJyB9KTtcbiAgICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgICAgdGhpcy5pc1RyYW5zbGF0aW9uID0gdGhpcy51c2VyLmhpbnRzLmlzVHJhbnNsYXRpb247XG4gICAgICAgIHRoaXMuaXNBdWRpbyA9IHRoaXMudXNlci5oaW50cy5pc0F1ZGlvO1xuICAgICAgICB0aGlzLmlzSW1hZ2UgPSB0aGlzLnVzZXIuaGludHMuaXNJbWFnZTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25IaW50ID0gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdoaW50IHRyYW5zbGF0aW9uJyB9KTtcbiAgICAgICAgY29uc3QgYXVkaW9DYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuYXVkaW8pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvSGludC5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvSGludC5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hdWRpb0hpbnQgPSBuZXcgQnV0dG9uKCdwbGF5JywgYXVkaW9DYWxsYmFjaywgJ2hpbnQgYXVkaW8nKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbkJ1dHRvbiA9IHRoaXMuY3JlYXRlVHJhbnNsYXRpb25CdXR0b24oKTtcbiAgICAgICAgdGhpcy5hdWRpb0J1dHRvbiA9IHRoaXMuY3JlYXRlQXVkaW9CdXR0b24oKTtcbiAgICAgICAgdGhpcy5pbWFnZUJ1dHRvbiA9IHRoaXMuY3JlYXRlSW1hZ2VCdXR0b24oKTtcbiAgICAgICAgY29uc3QgaGludHMgPSBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ2hpbnRzLWNvbnRlbnQnIH0sIFt0aGlzLnRyYW5zbGF0aW9uSGludCwgdGhpcy5hdWRpb0hpbnRdKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnaGludHMtYnV0dG9ucycgfSwgW1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbkJ1dHRvbixcbiAgICAgICAgICAgIHRoaXMuYXVkaW9CdXR0b24sXG4gICAgICAgICAgICB0aGlzLmltYWdlQnV0dG9uLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5hcHBlbmQoW2J1dHRvbnNdKTtcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKFtoaW50c10pO1xuICAgIH1cbiAgICBzaG93VHJhbnNsYXRpb24oaXNGb3JjZWQgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5pc1RyYW5zbGF0aW9uIHx8IGlzRm9yY2VkKVxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbkhpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbkhpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICB9XG4gICAgc2hvd0F1ZGlvKCkge1xuICAgICAgICBpZiAodGhpcy5pc0F1ZGlvKVxuICAgICAgICAgICAgdGhpcy5hdWRpb0hpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5hdWRpb0hpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICB9XG4gICAgc2hvd0ltYWdlKGlzRm9yY2VkID0gZmFsc2UpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHRoaXMuaXNJbWFnZSB8fCBpc0ZvcmNlZClcbiAgICAgICAgICAgIChfYSA9IHRoaXMud29yZHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKCh3b3JkKSA9PiB3b3JkLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5hZGQoJ3Nob3duJykpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICAoX2IgPSB0aGlzLndvcmRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgod29yZCkgPT4gd29yZC5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpKTtcbiAgICB9XG4gICAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25IaW50LmdldENvbXBvbmVudCgpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgc2V0QXVkaW8oYXVkaW9QYXRoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpbyhgJHtBcGkucGF0aH0ke2F1ZGlvUGF0aH1gKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hdWRpbyk7XG4gICAgICAgIChfYSA9IHRoaXMuYXVkaW8pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9IaW50LmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlpbmcnKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9IaW50LnNldERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldFdvcmRzKHdvcmRzKSB7XG4gICAgICAgIHRoaXMud29yZHMgPSB3b3JkcztcbiAgICB9XG4gICAgY3JlYXRlVHJhbnNsYXRpb25CdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1RyYW5zbGF0aW9uID0gIXRoaXMuaXNUcmFuc2xhdGlvbjtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25CdXR0b24uZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLnNhdmVIaW50cygpO1xuICAgICAgICAgICAgdGhpcy5zaG93VHJhbnNsYXRpb24oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvbignVHJhbnNsYXRpb24gaGludCcsIGNhbGxiYWNrLCAnaGludC1idXR0b24nKTtcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFuc2xhdGlvbilcbiAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG4gICAgY3JlYXRlQXVkaW9CdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0F1ZGlvID0gIXRoaXMuaXNBdWRpbztcbiAgICAgICAgICAgIHRoaXMuYXVkaW9CdXR0b24uZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLnNhdmVIaW50cygpO1xuICAgICAgICAgICAgdGhpcy5zaG93QXVkaW8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvbignQXVkaW8gaGludCcsIGNhbGxiYWNrLCAnYXVkaW8tYnV0dG9uJyk7XG4gICAgICAgIGlmICh0aGlzLmlzQXVkaW8pXG4gICAgICAgICAgICBidXR0b24uZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIGNyZWF0ZUltYWdlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNJbWFnZSA9ICF0aGlzLmlzSW1hZ2U7XG4gICAgICAgICAgICB0aGlzLmltYWdlQnV0dG9uLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5zYXZlSGludHMoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ltYWdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oJ0ltYWdlIGhpbnQnLCBjYWxsYmFjaywgJ2ltYWdlLWJ1dHRvbicpO1xuICAgICAgICBpZiAodGhpcy5pc0ltYWdlKVxuICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICBzYXZlSGludHMoKSB7XG4gICAgICAgIHRoaXMudXNlci5oaW50cy5pc0F1ZGlvID0gdGhpcy5pc0F1ZGlvO1xuICAgICAgICB0aGlzLnVzZXIuaGludHMuaXNJbWFnZSA9IHRoaXMuaXNJbWFnZTtcbiAgICAgICAgdGhpcy51c2VyLmhpbnRzLmlzVHJhbnNsYXRpb24gPSB0aGlzLmlzVHJhbnNsYXRpb247XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHRvQ2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgJy4vbG9naW5Gb3JtLmNzcyc7XG5jb25zdCBmaWVsZHMgPSB7XG4gICAgbmFtZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnbmFtZS1sZW5ndGgnLFxuICAgICAgICAgICAgdGVzdDogL14uezMsfSQvLFxuICAgICAgICAgICAgbWVzc2FnZTogJ05hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBzdXJuYW1lOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdXJuYW1lLWxlbmd0aCcsXG4gICAgICAgICAgICB0ZXN0OiAvXi57NCx9JC8sXG4gICAgICAgICAgICBtZXNzYWdlOiAnU3VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGVycm9yczogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgdGVzdDogL14uKyQvLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgZmllbGQgbXVzdCBiZSBmaWxsZWQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3ltYm9scycsXG4gICAgICAgICAgICB0ZXN0OiAvXlthLXpBLVotXSskLyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2Ugb25seSBFbmdsaXNoIGFscGhhYmV0IGxldHRlcnMgYW5kIHRoZSBoeXBoZW4gKFwiIC0gXCIpIHN5bWJvbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdmaXJzdC1sZXR0ZXInLFxuICAgICAgICAgICAgdGVzdDogL15bQS1aXS4qJC8sXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGZpcnN0IGxldHRlciBtdXN0IGJlIGluIHVwcGVyY2FzZScsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoeyB0YWc6ICdmb3JtJywgY2xhc3NMaXN0OiBbJ2xvZ2luLWZvcm0nXSB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uID0gJyMnO1xuICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHN1cm5hbWU6ICcnLFxuICAgICAgICAgICAgaGludHM6IHtcbiAgICAgICAgICAgICAgICBpc0F1ZGlvOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzVHJhbnNsYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgaXNJbWFnZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXRzID0gW107XG4gICAgICAgIHRoaXMuZmllbGRzID0gW3RoaXMuY3JlYXRlRmllbGQoKSwgdGhpcy5jcmVhdGVGaWVsZCgnc3VybmFtZScpXTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbnN1Ym1pdCA9IHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBjcmVhdGVGaWVsZChuYW1lID0gJ25hbWUnKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IG5ldyBCYXNlQ29tcG9uZW50KCk7XG4gICAgICAgIGNvbnN0IHVsID0gbmV3IEJhc2VDb21wb25lbnQoeyB0YWc6ICd1bCcsIGNsYXNzTmFtZTogJ2Vycm9yLWxpc3QnIH0pO1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogdG9DYXBpdGFsaXplKGAke25hbWV9OmApLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGFiZWwgbGFiZWwtcmVxdWlyZWQnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1bC5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5oYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnNldERpc2FibGVkKHRoaXMuaGFzRXJyb3JzKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tWYWx1ZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IFsuLi5maWVsZHNbdGFyZ2V0Lm5hbWVdLCAuLi5maWVsZHMuZXJyb3JzXTtcbiAgICAgICAgICAgIHRoaXMudXNlcltuYW1lXSA9IHRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IudGVzdC50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JJdGVtID0gbmV3IEJhc2VDb21wb25lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZXJyb3ItaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzRXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uc2V0RGlzYWJsZWQodGhpcy5oYXNFcnJvcnMpO1xuICAgICAgICAgICAgICAgICAgICB1bC5hcHBlbmQoW2Vycm9ySXRlbV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsb2dpbi1pbnB1dCcsXG4gICAgICAgICAgICBvbmlucHV0OiBpbnB1dEhhbmRsZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGlkOiBuYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbnB1dHMucHVzaChpbnB1dC5nZXRDb21wb25lbnQoKSk7XG4gICAgICAgIGRpdi5hcHBlbmQoW2xhYmVsLCBpbnB1dCwgdWxdKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMuaGFzRXJyb3JzKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnaG9tZSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbignTG9naW4nLCB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSwgJ2xvZ2luLWJ1dHRvbicsIHRoaXMuaGFzRXJyb3JzKTtcbiAgICB9XG4gICAgY2hlY2tWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBmaWVsZHMuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNFcnJvcnMgPSAhZXJyb3IudGVzdC50ZXN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uc2V0RGlzYWJsZWQodGhpcy5oYXNFcnJvcnMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5hcHBlbmQoW1xuICAgICAgICAgICAgbmV3IEJhc2VDb21wb25lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdsb2dpbi1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ0xvZ2luJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHRoaXMuYXBwZW5kKFtmaWVsZF0pKTtcbiAgICAgICAgdGhpcy5hcHBlbmQoW3RoaXMuc3VibWl0QnV0dG9uXSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9BUEkvYXBpJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCAnLi9Xb3JkQ29tcG9uZW50LmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodGV4dCwgcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKSwgeyBjbGFzc05hbWU6ICd3b3JkJywgZHJhZ2dhYmxlOiB0cnVlIH0pKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnd29yZC1jb250ZW50JywgdGV4dENvbnRlbnQ6IHRleHQgfSk7XG4gICAgICAgIGNvbnN0IGFmdGVyID0gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdhZnRlcicgfSk7XG4gICAgICAgIHRoaXMuYXBwZW5kKFtjb250ZW50LCBhZnRlcl0pO1xuICAgIH1cbiAgICBzZXRXaWR0aChpbWFnZSwgcm93SW5kZXgpIHtcbiAgICAgICAgY29uc3Qgd29yZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50O1xuICAgICAgICBjb25zdCBbd29yZCwgYWZ0ZXJdID0gdGhpcy5jb21wb25lbnQuY2hpbGRyZW47XG4gICAgICAgIHRoaXMuc2V0RGF0YXNldCgnd2lkdGgnLCB3b3JkQ29tcG9uZW50Lm9mZnNldFdpZHRoLnRvU3RyaW5nKCkpO1xuICAgICAgICB3b3JkQ29tcG9uZW50LnN0eWxlLndpZHRoID0gYCR7d29yZENvbXBvbmVudC5kYXRhc2V0LndpZHRofXB4YDtcbiAgICAgICAgd29yZENvbXBvbmVudC5zdHlsZS5mbGV4R3JvdyA9IGAwYDtcbiAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gYCR7QXBpLnBhdGh9aW1hZ2VzLyR7aW1hZ2V9YDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHdvcmRDb21wb25lbnQub2Zmc2V0TGVmdCAtIDE1O1xuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSB3b3JkQ29tcG9uZW50Lm9mZnNldEhlaWdodCAqIHJvd0luZGV4O1xuICAgICAgICB3b3JkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZVBhdGh9KWA7XG4gICAgICAgIHdvcmQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYC0ke29mZnNldExlZnR9cHggLSR7b2Zmc2V0VG9wfXB4YDtcbiAgICAgICAgYWZ0ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlUGF0aH0pYDtcbiAgICAgICAgYWZ0ZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IGAkey0ob2Zmc2V0TGVmdCArIHdvcmQub2Zmc2V0V2lkdGgpfXB4YDtcbiAgICAgICAgYWZ0ZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IGAkey0ob2Zmc2V0VG9wICsgd29yZENvbXBvbmVudC5vZmZzZXRIZWlnaHQgLyAyIC0gYWZ0ZXIub2Zmc2V0SGVpZ2h0IC8gMil9cHhgO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbmNsaWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub25kcmFnc3RhcnQgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbnRvdWNoc3RhcnQgPSBudWxsO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9BUEkvYXBpJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBHYW1lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2FtZS9HYW1lJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL1BhZ2UnO1xuaW1wb3J0ICcuL2dhbWVQYWdlLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGFnZSBleHRlbmRzIFBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7IGNsYXNzTmFtZTogJ2dhbWUtcGFnZScgfSk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnY29udGVudCcgfSk7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLmFwcGVuZChbdGhpcy5jb250ZW50XSk7XG4gICAgICAgIHRoaXMuZ2V0Um91bmQoKS50aGVuKChyb3VuZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3VuZCA9IHJvdW5kO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLmxldmVsSWQsIHRoaXMucm91bmRJZCwgdGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoW3RoaXMuZ2FtZV0pO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlckdhbWUodGhpcy5yb3VuZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRSb3VuZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcm91bmRzIH0gPSB5aWVsZCB0aGlzLmFwaS5nZXRSb3VuZHMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kSWQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpWzFdO1xuICAgICAgICAgICAgY29uc3Qgcm91bmQgPSByb3VuZHMuZmluZCgoZWwpID0+IGVsLmxldmVsRGF0YS5pZCA9PT0gcm91bmRJZCk7XG4gICAgICAgICAgICBbdGhpcy5sZXZlbElkLCB0aGlzLnJvdW5kSWRdID0gcm91bmRJZC5zcGxpdCgnXycpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdW5kO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9QYWdlJztcbmltcG9ydCAnLi9ob21lUGFnZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoeyBjbGFzc05hbWU6ICdob21lJyB9KTtcbiAgICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmFwcGVuZChbdGhpcy5jcmVhdGVDb250ZW50KCldKTtcbiAgICB9XG4gICAgY3JlYXRlQ29udGVudCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgICAgY29uc3QgaDEgPSBuZXcgQmFzZUNvbXBvbmVudCh7IHRhZzogJ2gxJywgdGV4dENvbnRlbnQ6ICdSU1MgUHV6emxlIEdhbWUnLCBjbGFzc05hbWU6ICdoZWFkaW5nJyB9KTtcbiAgICAgICAgY29uc3QgZ3JlZXRpbmcgPSBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgICAgICB0YWc6ICdwJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dyZWV0aW5nJyxcbiAgICAgICAgICAgIGlubmVySFRNTDogYFxyXG4gICAgICAgICAgICBIZWxsbywgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHsoX2EgPSB0aGlzLnVzZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lfSAkeyhfYiA9IHRoaXMudXNlcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN1cm5hbWV9PC9zcGFuPiFcclxuICAgICAgICBgLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGV4dCA9IFtcbiAgICAgICAgICAgIG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdwJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdDbGljayBvbiB3b3JkcywgY29sbGVjdCBwaHJhc2VzLicsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdwJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdXb3JkcyBjYW4gZHJhZyBhbmQgZHJvcC4gU2VsZWN0IHRvb2x0aXAgaW4gdGhlIG1lbnUuJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICdnYW1lLzFfMDEnO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uKCdTdGFydCcsIGNsaWNrSGFuZGxlciwgJ3N0YXJ0LWJ1dHRvbicpO1xuICAgICAgICByZXR1cm4gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdob21lLWNvbnRlbnQnIH0sIFtoMSwgZ3JlZXRpbmcsIC4uLnRleHQsIGJ1dHRvbl0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0vTG9naW5Gb3JtJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL1BhZ2UnO1xuaW1wb3J0ICcuL2xvZ2luUGFnZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgUGFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHsgY2xhc3NOYW1lOiAnbG9naW4tcGFnZScgfSk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgTG9naW5Gb3JtKCk7XG4gICAgICAgIHRoaXMuYXBwZW5kKFtmb3JtXSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL0Jhc2VDb21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcywgY29udGVudCkge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgICAgICBpZiAoY29udGVudClcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKFtjb250ZW50XSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHsgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ2FwaXRhbGl6ZShzdHIpIHtcbiAgICBjb25zdCBsYXN0ID0gc3RyLnNsaWNlKDEpO1xuICAgIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIGxhc3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gcmFuZG9taXplQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5zb3J0KCgpID0+IChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUm91bmRJZChsZXZlbElkLCByb3VuZElkKSB7XG4gICAgcmV0dXJuIFtsZXZlbElkLCBTdHJpbmcocm91bmRJZCkucGFkU3RhcnQoMiwgJzAnKV0uam9pbignXycpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9BcHAnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==