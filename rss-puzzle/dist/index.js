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
    transition: 0.2s;
    &.disabled,
    &.skipped {
        pointer-events: none;
    }
    &.disabled {
        .word {
            outline: none;
        }
    }
    &.completed {
        opacity: 0;
    }
}

.field {
    box-shadow: 0 0 0 5px rgb(60, 18, 42) inset;
    min-width: 30px;
    min-height: 28px;
}
`, "",{"version":3,"sources":["webpack://./src/components/Answer/answer.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,aAAa;IACb,kCAAkC;IAClC,gBAAgB;IAChB;;QAEI,oBAAoB;IACxB;IACA;QACI;YACI,aAAa;QACjB;IACJ;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI,2CAA2C;IAC3C,eAAe;IACf,gBAAgB;AACpB","sourcesContent":[".answer {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    background-color: rgb(106, 32, 45);\r\n    transition: 0.2s;\r\n    &.disabled,\r\n    &.skipped {\r\n        pointer-events: none;\r\n    }\r\n    &.disabled {\r\n        .word {\r\n            outline: none;\r\n        }\r\n    }\r\n    &.completed {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.field {\r\n    box-shadow: 0 0 0 5px rgb(60, 18, 42) inset;\r\n    min-width: 30px;\r\n    min-height: 28px;\r\n}\r\n"],"sourceRoot":""}]);
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
`, "",{"version":3,"sources":["webpack://./src/components/Button/button.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,wCAAwC;IACxC,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;;IAElB,2BAA2B;IAC3B,4CAA4C;;IAE5C;QACI,QAAQ;QACR,wBAAwB;QACxB,0CAA0C;QAC1C,eAAe;QACf,uBAAuB;IAC3B;;IAEA;QACI,wBAAwB;QACxB,0CAA0C;IAC9C;AACJ","sourcesContent":[":root {\r\n    --button-bg-color: rgb(254, 212, 164);\r\n    --button-shadow-color: rgb(194, 163, 128);\r\n}\r\n\r\n.button {\r\n    margin-top: 10px;\r\n    transition: 0.2s;\r\n    text-transform: uppercase;\r\n    display: block;\r\n    padding: 5px 20px;\r\n    background-color: var(--button-bg-color);\r\n    color: rgb(48, 16, 35);\r\n    font-weight: 700;\r\n    border-radius: 5px;\r\n\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 3px var(--button-shadow-color);\r\n\r\n    &:disabled {\r\n        top: 3px;\r\n        transform: translateY(0);\r\n        box-shadow: 0 0 var(--button-shadow-color);\r\n        cursor: default;\r\n        filter: brightness(70%);\r\n    }\r\n\r\n    &:active {\r\n        transform: translateY(0);\r\n        box-shadow: 0 0 var(--button-shadow-color);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
    border-radius: 10px 10px 10px 0;
    width: 700px;
    position: relative;
    z-index: 2;
}

.answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 670px 284px;
    background-position: center;
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

.buttons {
    display: flex;
    gap: 5px;
    align-items: center;

    .hints-buttons {
        margin-right: auto;
    }
}

.info {
    color: #fff;
    opacity: 0;
    transition: 0.2s;
    &.reveal {
        opacity: 1;
    }
}
`, "",{"version":3,"sources":["webpack://./src/components/Game/Game.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,aAAa;IACb,+BAA+B;IAC/B,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,4BAA4B;IAC5B,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;;IAEnB;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI,WAAW;IACX,UAAU;IACV,gBAAgB;IAChB;QACI,UAAU;IACd;AACJ","sourcesContent":[".game {\r\n    background-color: rgb(48, 16, 35);\r\n    padding: 10px;\r\n    border-radius: 10px 10px 10px 0;\r\n    width: 700px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.answers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 670px 284px;\r\n    background-position: center;\r\n}\r\n\r\n.data-source {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    padding: 5px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgb(60, 18, 42);\r\n    min-height: 40px;\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    gap: 5px;\r\n    align-items: center;\r\n\r\n    .hints-buttons {\r\n        margin-right: auto;\r\n    }\r\n}\r\n\r\n.info {\r\n    color: #fff;\r\n    opacity: 0;\r\n    transition: 0.2s;\r\n    &.reveal {\r\n        opacity: 1;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.2s;
    &.hidden {
        transform: translateY(-100%);
    }
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
`, "",{"version":3,"sources":["webpack://./src/components/Header/header.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,YAAY;IACZ,MAAM;IACN,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,uCAAuC;;IAEvC,aAAa;IACb,YAAY;IACZ,yBAAyB;AAC7B","sourcesContent":[".header {\r\n    padding: 10px 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    transition: 0.2s;\r\n    &.hidden {\r\n        transform: translateY(-100%);\r\n    }\r\n}\r\n\r\n.logo {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.logout-button {\r\n    --button-bg-color: rgb(161, 43, 43);\r\n    --button-shadow-color: rgb(104, 28, 28);\r\n\r\n    padding: 10px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../public/button-translation.png */ "./src/public/button-translation.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../public/button-audio.png */ "./src/public/button-audio.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../public/button-image.png */ "./src/public/button-image.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../public/hint-audio.png */ "./src/public/hint-audio.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
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

    .image::after {
        content: '';
        width: 25px;
        height: 25px;
        display: block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
    }

    .button {
        padding: 5px;
    }

    .hint-button .image::after {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    }

    .audio-button .image::after {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    }
    .image-button .image::after {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    }
}

.hint {
    z-index: 2;
    border-radius: 10px 10px 0 0;
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
        padding: 0;
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

    &.audio .image::after {
        content: '';
        width: 40px;
        height: 40px;
        margin: 2px 7px 8px;
        display: block;
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
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
`, "",{"version":3,"sources":["webpack://./src/components/Hints/hints.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,QAAQ;;IAER;QACI,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,WAAW;QACX,YAAY;QACZ,cAAc;QACd,4BAA4B;QAC5B,2BAA2B;QAC3B,qBAAqB;IACzB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,yDAA0D;IAC9D;;IAEA;QACI,yDAAoD;IACxD;IACA;QACI,yDAAoD;IACxD;AACJ;;AAEA;IACI,UAAU;IACV,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,MAAM;IACN;QACI,iCAAiC;QACjC,WAAW;IACf;;IAEA;QACI,OAAO;QACP,WAAW;IACf;;IAEA;QACI,SAAS;QACT,UAAU;QACV,QAAQ;QACR,gBAAgB;;QAEhB;YACI,iBAAiB;QACrB;;QAEA;YACI;;gBAEI,sCAAsC;gBACtC,iCAAiC;gBACjC,kBAAkB;gBAClB,SAAS;gBACT,sBAAsB;gBACtB,WAAW;gBACX,OAAO;gBACP,kBAAkB;gBAClB,QAAQ;gBACR,MAAM;YACV;;YAEA;gBACI,qBAAqB;YACzB;QACJ;IACJ;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,WAAW;QACX,WAAW;QACX,YAAY;QACZ,mBAAmB;QACnB,cAAc;QACd,yDAAkD;QAClD,4BAA4B;QAC5B,2BAA2B;QAC3B,qBAAqB;IACzB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,mBAAmB;IACvB;AACJ","sourcesContent":[".hints {\n    width: 100%;\n    margin-bottom: 20px;\n}\n\n.hints-content {\n    width: 100%;\n    position: relative;\n    top: 10px;\n    z-index: 0;\n}\n\n.hints-buttons {\n    display: flex;\n    gap: 5px;\n\n    :not(.active) {\n        filter: grayscale(0.8);\n    }\n\n    .image::after {\n        content: '';\n        width: 25px;\n        height: 25px;\n        display: block;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 100%;\n    }\n\n    .button {\n        padding: 5px;\n    }\n\n    .hint-button .image::after {\n        background-image: url(../../public/button-translation.png);\n    }\n\n    .audio-button .image::after {\n        background-image: url(../../public/button-audio.png);\n    }\n    .image-button .image::after {\n        background-image: url(../../public/button-image.png);\n    }\n}\n\n.hint {\n    z-index: 2;\n    border-radius: 10px 10px 0 0;\n    text-align: center;\n    position: absolute;\n    transition: 0.2s;\n    padding: 15px;\n    top: 0;\n    &:not(.button) {\n        background-color: rgb(48, 16, 35);\n        color: #fff;\n    }\n\n    &.translation {\n        left: 0;\n        right: 80px;\n    }\n\n    &.audio {\n        margin: 0;\n        padding: 0;\n        right: 0;\n        box-shadow: none;\n\n        &:active {\n            translate: 0 10px;\n        }\n\n        &.playing {\n            &::before,\n            &::after {\n                animation: ripple 1s ease-out infinite;\n                border: solid 2px rgb(48, 16, 35);\n                border-radius: 5px;\n                bottom: 0;\n                box-sizing: border-box;\n                content: '';\n                left: 0;\n                position: absolute;\n                right: 0;\n                top: 0;\n            }\n\n            &::after {\n                animation-delay: 0.5s;\n            }\n        }\n    }\n\n    &.shown {\n        transform: translateY(-100%);\n    }\n\n    &.audio .image::after {\n        content: '';\n        width: 40px;\n        height: 40px;\n        margin: 2px 7px 8px;\n        display: block;\n        background-image: url(../../public/hint-audio.png);\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 100%;\n    }\n}\n\n@keyframes ripple {\n    0% {\n        opacity: 0.25;\n    }\n    100% {\n        border-radius: 5px;\n        opacity: 0;\n        transform: scale(3);\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Selector/selector.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Selector/selector.css ***!
  \************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.selector {
    display: inline-flex;
    background-color: rgb(48, 16, 35);
    padding: 10px;
    color: #fff;
    gap: 20px;
    border-radius: 0 0 10px 10px;

    .select {
        margin-left: 10px;
        background-color: rgb(254, 212, 164);

        .option {
            &.completed {
                background-color: rgb(227, 254, 164);
            }
        }
    }
}
`, "",{"version":3,"sources":["webpack://./src/components/Selector/selector.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,iCAAiC;IACjC,aAAa;IACb,WAAW;IACX,SAAS;IACT,4BAA4B;;IAE5B;QACI,iBAAiB;QACjB,oCAAoC;;QAEpC;YACI;gBACI,oCAAoC;YACxC;QACJ;IACJ;AACJ","sourcesContent":[".selector {\r\n    display: inline-flex;\r\n    background-color: rgb(48, 16, 35);\r\n    padding: 10px;\r\n    color: #fff;\r\n    gap: 20px;\r\n    border-radius: 0 0 10px 10px;\r\n\r\n    .select {\r\n        margin-left: 10px;\r\n        background-color: rgb(254, 212, 164);\r\n\r\n        .option {\r\n            &.completed {\r\n                background-color: rgb(227, 254, 164);\r\n            }\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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

    position: relative;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &.in {
        animation: insideContent ease-in-out var(--transition-duration);
    }
    &.out {
        animation: insideContent ease-in-out var(--transition-duration) alternate-reverse;
    }
    &:not(&.in, &.out) {
        z-index: 1;
    }
}

@keyframes insideContent {
    from {
        opacity: 0;
        filter: blur(100px);
    }
    to {
        opacity: 1;
        filter: blur(0);
    }
}
`, "",{"version":3,"sources":["webpack://./src/pages/GamePage/gamePage.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;;IAEb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC;QACI,+DAA+D;IACnE;IACA;QACI,iFAAiF;IACrF;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;QACV,mBAAmB;IACvB;IACA;QACI,UAAU;QACV,eAAe;IACnB;AACJ","sourcesContent":[".game-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n    position: relative;\r\n}\r\n\r\n.content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    &.in {\r\n        animation: insideContent ease-in-out var(--transition-duration);\r\n    }\r\n    &.out {\r\n        animation: insideContent ease-in-out var(--transition-duration) alternate-reverse;\r\n    }\r\n    &:not(&.in, &.out) {\r\n        z-index: 1;\r\n    }\r\n}\r\n\r\n@keyframes insideContent {\r\n    from {\r\n        opacity: 0;\r\n        filter: blur(100px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        filter: blur(0);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/homePage.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;;IAElB,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;;IAErB;QACI,WAAW;QACX,kBAAkB;QAClB,MAAM;QACN,QAAQ;QACR,YAAY;QACZ,sBAAsB;;QAEtB,mCAAmC;QACnC,sBAAsB;QACtB,qBAAqB;QACrB,4BAA4B;IAChC;;IAEA,8BAA8B;IAC9B,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,SAAS;QACT,OAAO;IACX;IACA;QACI,WAAW;QACX,OAAO;IACX;IACA;QACI,WAAW;QACX,OAAO;IACX;IACA;QACI,QAAQ;QACR,UAAU;IACd;AACJ","sourcesContent":[".home {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.home-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    padding: 10px 20px;\r\n    border-radius: 10px;\r\n    background-color: rgb(48, 16, 35);\r\n    color: white;\r\n    text-align: center;\r\n\r\n    opacity: 1;\r\n    filter: blur(0);\r\n}\r\n\r\n.heading {\r\n    margin: 20px 0;\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n}\r\n\r\n.description {\r\n    margin: 0;\r\n    font-size: 18px;\r\n}\r\n\r\n.start-button {\r\n    font-size: 18px;\r\n    margin: 20px auto;\r\n}\r\n\r\n.greeting {\r\n    font-size: 26px;\r\n}\r\n\r\n.name {\r\n    font-style: italic;\r\n    position: relative;\r\n    display: inline-block;\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        width: 0;\r\n        height: 100%;\r\n        background-color: #fff;\r\n\r\n        animation-name: appearanceNameAfter;\r\n        animation-duration: 2s;\r\n        animation-delay: 0.5s;\r\n        animation-iteration-count: 1;\r\n    }\r\n\r\n    animation-name: appearanceName;\r\n    animation-duration: 2s;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes appearanceName {\r\n    0% {\r\n        color: transparent;\r\n    }\r\n    60% {\r\n        color: transparent;\r\n    }\r\n    100% {\r\n        color: white;\r\n    }\r\n}\r\n\r\n@keyframes appearanceNameAfter {\r\n    0% {\r\n        width: 0%;\r\n        left: 0;\r\n    }\r\n    50% {\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n    65% {\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n    100% {\r\n        width: 0;\r\n        left: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/Statistic/statistic.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Statistic/statistic.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../public/hint-audio.png */ "./src/public/hint-audio.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.statistic {
    &.in {
        animation: insideContent ease-in-out var(--transition-duration);
    }
    &.out {
        animation: insideContent ease-in-out var(--transition-duration) alternate-reverse;
    }
}

.statistic-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(48, 16, 35);
    color: #fff;
    padding: 15px;
    border-radius: 10px;

    .artwork-wrapper {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .artwork {
            width: 250px;
            margin-bottom: 10px;
        }
    }

    .list-wrapper {
        margin-bottom: 20px;

        .list-title {
            font-size: 30px;
            margin-bottom: 5px;
        }

        .words {
            padding: 10px;
            background-color: rgb(60, 18, 42);
            border-radius: 10px;

            .element {
                margin: 20px;
                margin-left: 10px;
                display: flex;
                align-items: center;
                gap: 5px;

                &:first-of-type {
                    margin-top: 5px;
                }
                &:last-of-type {
                    margin-bottom: 5px;
                }

                .audio {
                    padding: 3px;
                    margin-top: 0;
                    margin-right: 10px;
                    .image::after {
                        content: '';
                        width: 15px;
                        height: 15px;
                        display: block;
                        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 100%;
                    }

                    &.playing {
                        &::before,
                        &::after {
                            animation: ripple 1s ease-out infinite;
                            border: solid 2px var(--button-bg-color);
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
            }
        }
    }
    .continue {
        margin: 10px auto 0;
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

@keyframes insideContent {
    from {
        opacity: 0;
        filter: blur(100px);
    }
    to {
        opacity: 1;
        filter: blur(0);
    }
}
`, "",{"version":3,"sources":["webpack://./src/pages/Statistic/statistic.css"],"names":[],"mappings":"AAAA;IACI;QACI,+DAA+D;IACnE;IACA;QACI,iFAAiF;IACrF;AACJ;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,iCAAiC;IACjC,WAAW;IACX,aAAa;IACb,mBAAmB;;IAEnB;QACI,mBAAmB;QACnB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;QACvB;YACI,YAAY;YACZ,mBAAmB;QACvB;IACJ;;IAEA;QACI,mBAAmB;;QAEnB;YACI,eAAe;YACf,kBAAkB;QACtB;;QAEA;YACI,aAAa;YACb,iCAAiC;YACjC,mBAAmB;;YAEnB;gBACI,YAAY;gBACZ,iBAAiB;gBACjB,aAAa;gBACb,mBAAmB;gBACnB,QAAQ;;gBAER;oBACI,eAAe;gBACnB;gBACA;oBACI,kBAAkB;gBACtB;;gBAEA;oBACI,YAAY;oBACZ,aAAa;oBACb,kBAAkB;oBAClB;wBACI,WAAW;wBACX,WAAW;wBACX,YAAY;wBACZ,cAAc;wBACd,yDAAkD;wBAClD,4BAA4B;wBAC5B,2BAA2B;wBAC3B,qBAAqB;oBACzB;;oBAEA;wBACI;;4BAEI,sCAAsC;4BACtC,wCAAwC;4BACxC,kBAAkB;4BAClB,SAAS;4BACT,sBAAsB;4BACtB,WAAW;4BACX,OAAO;4BACP,kBAAkB;4BAClB,QAAQ;4BACR,MAAM;wBACV;;wBAEA;4BACI,qBAAqB;wBACzB;oBACJ;gBACJ;YACJ;QACJ;IACJ;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,UAAU;QACV,mBAAmB;IACvB;IACA;QACI,UAAU;QACV,eAAe;IACnB;AACJ","sourcesContent":[".statistic {\r\n    &.in {\r\n        animation: insideContent ease-in-out var(--transition-duration);\r\n    }\r\n    &.out {\r\n        animation: insideContent ease-in-out var(--transition-duration) alternate-reverse;\r\n    }\r\n}\r\n\r\n.statistic-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: rgb(48, 16, 35);\r\n    color: #fff;\r\n    padding: 15px;\r\n    border-radius: 10px;\r\n\r\n    .artwork-wrapper {\r\n        margin-bottom: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        .artwork {\r\n            width: 250px;\r\n            margin-bottom: 10px;\r\n        }\r\n    }\r\n\r\n    .list-wrapper {\r\n        margin-bottom: 20px;\r\n\r\n        .list-title {\r\n            font-size: 30px;\r\n            margin-bottom: 5px;\r\n        }\r\n\r\n        .words {\r\n            padding: 10px;\r\n            background-color: rgb(60, 18, 42);\r\n            border-radius: 10px;\r\n\r\n            .element {\r\n                margin: 20px;\r\n                margin-left: 10px;\r\n                display: flex;\r\n                align-items: center;\r\n                gap: 5px;\r\n\r\n                &:first-of-type {\r\n                    margin-top: 5px;\r\n                }\r\n                &:last-of-type {\r\n                    margin-bottom: 5px;\r\n                }\r\n\r\n                .audio {\r\n                    padding: 3px;\r\n                    margin-top: 0;\r\n                    margin-right: 10px;\r\n                    .image::after {\r\n                        content: '';\r\n                        width: 15px;\r\n                        height: 15px;\r\n                        display: block;\r\n                        background-image: url(../../public/hint-audio.png);\r\n                        background-repeat: no-repeat;\r\n                        background-position: center;\r\n                        background-size: 100%;\r\n                    }\r\n\r\n                    &.playing {\r\n                        &::before,\r\n                        &::after {\r\n                            animation: ripple 1s ease-out infinite;\r\n                            border: solid 2px var(--button-bg-color);\r\n                            border-radius: 5px;\r\n                            bottom: 0;\r\n                            box-sizing: border-box;\r\n                            content: '';\r\n                            left: 0;\r\n                            position: absolute;\r\n                            right: 0;\r\n                            top: 0;\r\n                        }\r\n\r\n                        &::after {\r\n                            animation-delay: 0.5s;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    .continue {\r\n        margin: 10px auto 0;\r\n    }\r\n}\r\n\r\n@keyframes ripple {\r\n    0% {\r\n        opacity: 0.25;\r\n    }\r\n    100% {\r\n        border-radius: 5px;\r\n        opacity: 0;\r\n        transform: scale(3);\r\n    }\r\n}\r\n\r\n@keyframes insideContent {\r\n    from {\r\n        opacity: 0;\r\n        filter: blur(100px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        filter: blur(0);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/page.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/page.css ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.2s;
    backdrop-filter: blur(5px);
}

.in {
    animation: inside ease-in-out var(--transition-duration);
    backdrop-filter: blur(0);
}

.out {
    animation: outside ease-in-out var(--transition-duration);
    backdrop-filter: blur(0);
}

@keyframes inside {
    from {
        top: 100%;
    }
    to {
        top: 0;
    }
}

@keyframes outside {
    from {
        scale: 1;
    }
    to {
        scale: 0;
    }
}
`, "",{"version":3,"sources":["webpack://./src/pages/page.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,wDAAwD;IACxD,wBAAwB;AAC5B;;AAEA;IACI,yDAAyD;IACzD,wBAAwB;AAC5B;;AAEA;IACI;QACI,SAAS;IACb;IACA;QACI,MAAM;IACV;AACJ;;AAEA;IACI;QACI,QAAQ;IACZ;IACA;QACI,QAAQ;IACZ;AACJ","sourcesContent":[".main {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 0.2s;\n    backdrop-filter: blur(5px);\n}\n\n.in {\n    animation: inside ease-in-out var(--transition-duration);\n    backdrop-filter: blur(0);\n}\n\n.out {\n    animation: outside ease-in-out var(--transition-duration);\n    backdrop-filter: blur(0);\n}\n\n@keyframes inside {\n    from {\n        top: 100%;\n    }\n    to {\n        top: 0;\n    }\n}\n\n@keyframes outside {\n    from {\n        scale: 1;\n    }\n    to {\n        scale: 0;\n    }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --transition-duration: 1s;
}

* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;

    min-height: 100vh;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    overflow: hidden;
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
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;;IAEvB,iBAAiB;IACjB,yDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;;IAE5B,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;;IAEhB;QACI,eAAe;IACnB;AACJ","sourcesContent":["@import url(normalize.css);\r\n\r\n:root {\r\n    --transition-duration: 1s;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: sans-serif;\r\n\r\n    min-height: 100vh;\r\n    background-image: url('../public/login.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: none;\r\n    background: none;\r\n\r\n    &:disabled {\r\n        cursor: default;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/components/Selector/selector.css":
/*!**********************************************!*\
  !*** ./src/components/Selector/selector.css ***!
  \**********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_selector_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./selector.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Selector/selector.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_selector_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_selector_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_selector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_selector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/pages/Statistic/statistic.css":
/*!*******************************************!*\
  !*** ./src/pages/Statistic/statistic.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_statistic_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./statistic.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/Statistic/statistic.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_statistic_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_statistic_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_statistic_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_statistic_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/page.css":
/*!****************************!*\
  !*** ./src/pages/page.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./page.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
        return __awaiter(this, void 0, void 0, function* () {
            const levelId = +window.location.hash.split('/')[1].split('_')[0];
            if (levelId <= 6 && levelId >= 1)
                Api.currentLevel = levelId;
            const file = `wordCollectionLevel${Api.currentLevel}.json`;
            const folder = 'data/';
            const rounds = yield fetch(Api.path + folder + file)
                .then((response) => response.json())
                .then((json) => json)
                .catch((err) => new Error(err));
            return rounds;
        });
    }
}
Api.currentLevel = 1;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


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
    render(parent = document.body) {
        this.component.classList.remove('out');
        this.component.classList.add('in');
        parent.appendChild(this.component);
        this.component.onanimationend = () => {
            this.component.classList.remove('in');
            this.component.onanimationend = null;
        };
    }
    clear() {
        this.component.classList.remove('in');
        this.component.classList.add('out');
        this.component.onanimationend = () => {
            this.component.classList.remove('out');
            this.component.remove();
            this.component.onanimationend = null;
        };
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
/* harmony import */ var _pages_Statistic_Statistic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Statistic/Statistic */ "./src/pages/Statistic/Statistic.ts");





const routes = {
    login: new _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_3__["default"](),
    home: new _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_2__["default"](),
    game: new _pages_GamePage_GamePage__WEBPACK_IMPORTED_MODULE_1__["default"](),
    statistic: new _pages_Statistic_Statistic__WEBPACK_IMPORTED_MODULE_4__["default"](),
};
class Router {
    constructor() {
        this.hashChangeHandler = () => {
            this.render();
        };
        this.header = new _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__["default"]();
        document.body.appendChild(this.header.getComponent());
        this.routes = routes;
        this.hash = window.location.hash.slice(1);
        window.addEventListener('hashchange', this.hashChangeHandler);
    }
    render() {
        this.hash = window.location.hash.slice(1);
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || (user && this.hash === 'login')) {
            this.setHash('login');
            this.header.getComponent().classList.add('hidden');
            this.updatePage('login');
        }
        else {
            this.header.getComponent().classList.remove('hidden');
            if (this.hash === 'home') {
                this.updatePage('home');
            }
            else if (this.hash.startsWith('game')) {
                this.updatePage('game');
            }
            else if (this.hash === 'statistic') {
                this.updatePage('statistic');
            }
            else {
                this.setHash('home');
            }
        }
    }
    setHash(hash) {
        window.location.hash = hash;
        this.hash = hash;
    }
    updatePage(pageName) {
        var _a;
        if (this.currentPage === this.routes[pageName])
            return;
        (_a = this.currentPage) === null || _a === void 0 ? void 0 : _a.clear();
        this.currentPage = this.routes[pageName];
        this.currentPage.render();
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
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../API/api */ "./src/API/api.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _Answer_Answer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Answer/Answer */ "./src/components/Answer/Answer.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.ts");
/* harmony import */ var _Hints_Hints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Hints/Hints */ "./src/components/Hints/Hints.ts");
/* harmony import */ var _WordComponent_WordComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../WordComponent/WordComponent */ "./src/components/WordComponent/WordComponent.ts");
/* harmony import */ var _Game_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Game.css */ "./src/components/Game/Game.css");








class Game extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(levelId, roundId, page, roundTransition, roundsCount) {
        super({ className: 'game' });
        this.currentWord = 0;
        this.buttons = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'buttons' });
        this.page = page;
        this.levelId = levelId;
        this.roundId = roundId;
        this.roundsCount = roundsCount;
        this.hints = new _Hints_Hints__WEBPACK_IMPORTED_MODULE_5__["default"](this.page, this.buttons);
        this.answers = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'answers' });
        this.roundTransition = roundTransition;
        this.append([this.hints, this.answers]);
    }
    renderGame(data) {
        this.data = data;
        this.statistic = { levelData: data.levelData, words: [] };
        this.sentence = data.words[this.currentWord];
        this.imageSrc = this.data.levelData.imageSrc;
        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length, this.sentence.textExample);
        this.dataSource = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'data-source' }, this.words);
        this.button = new _Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"]('Check', () => { }, 'check', true);
        this.updateButton();
        this.skipButton = this.createSkipButton();
        this.buttons.append([this.button, this.skipButton]);
        this.answers.append([this.answer]);
        this.append([this.answers, this.dataSource, this.buttons]);
        this.words.forEach((word) => word.setWidth(this.imageSrc, this.currentWord));
        const arr = this.dataSource.getComponent().childNodes;
        this.hints.setText(this.sentence.textExampleTranslate);
        this.hints.setAudio(this.sentence.audioExample);
        this.hints.setWords(this.words);
        this.hints.showImage();
        this.hints.showAudio();
        this.hints.showTranslation();
        this.dataSource.getComponent().append(...(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.randomizeArray)([...arr]));
    }
    createWords(sentence) {
        const words = sentence.textExample.split(' ').map((word, i, arr) => {
            const wordComponent = new _WordComponent_WordComponent__WEBPACK_IMPORTED_MODULE_6__["default"](word, {
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
        return words;
    }
    createAnswer(length, sentence) {
        const answer = new _Answer_Answer__WEBPACK_IMPORTED_MODULE_3__["default"](length, sentence, this.dragoverHandler.bind(this), this.dropHandler.bind(this));
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
        this.dataSource.getComponent().append(...(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.randomizeArray)([...arr]));
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
        const newHash = `game/${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.updateRoundId)(+this.levelId, +this.roundId + 1)}`;
        window.location.hash = newHash;
        this.roundTransition(newHash);
    }
    updateButton(isContinue = false) {
        let text = 'check';
        let callback = this.checkHandler;
        if (isContinue) {
            text = 'continue';
            callback = this.continueHandler;
        }
        this.button.getComponent().textContent = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toCapitalize)(text);
        this.button.getComponent().className = `button ${text}`;
        this.button.getComponent().onclick = callback.bind(this);
    }
    clickHandler(e) {
        this.moveWord(e.target);
    }
    checkHandler(e, isSkipped = false) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if ((_a = this.answer) === null || _a === void 0 ? void 0 : _a.isSolved()) {
            (_b = this.skipButton) === null || _b === void 0 ? void 0 : _b.setDisabled(true);
            this.updateButton(true);
            (_c = this.words) === null || _c === void 0 ? void 0 : _c.forEach((word) => word.setWidth(this.imageSrc, this.currentWord));
            this.hints.showTranslation(true);
            this.hints.showImage(true);
            (_d = this.statistic) === null || _d === void 0 ? void 0 : _d.words.push(Object.assign(Object.assign({}, this.sentence), { isSkipped }));
            if (this.currentWord === 9) {
                const user = JSON.parse(localStorage.getItem('user'));
                if (!user.completedRounds[+this.levelId]) {
                    user.completedRounds[+this.levelId] = {
                        rounds: [+this.roundId],
                        roundsCount: this.roundsCount,
                    };
                }
                else {
                    user.completedRounds[+this.levelId].rounds.push(+this.roundId);
                    const arr = Array.from(new Set(user.completedRounds[+this.levelId].rounds));
                    user.completedRounds[+this.levelId].rounds = arr;
                }
                user.completedRounds[+this.levelId].rounds.sort((a, b) => a - b);
                user.lastRound = `${this.levelId}_${(+this.roundId + 1).toString().padStart(2, '0')}`;
                localStorage.setItem('user', JSON.stringify(user));
                const info = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
                    className: 'info',
                    textContent: `${(_e = this.data) === null || _e === void 0 ? void 0 : _e.levelData.name} - ${(_f = this.data) === null || _f === void 0 ? void 0 : _f.levelData.author} (${(_g = this.data) === null || _g === void 0 ? void 0 : _g.levelData.year})`,
                });
                this.dataSource.append([info]);
                this.answers.getComponent().style.backgroundImage = `url("${_API_api__WEBPACK_IMPORTED_MODULE_0__["default"].path}images/${this.data.levelData.imageSrc}")`;
                this.answers.getComponent().childNodes.forEach((answer, i) => {
                    setTimeout(() => {
                        answer.classList.add('completed');
                        if (i === 9)
                            info.getComponent().classList.add('reveal');
                    }, 50 * i);
                });
                this.button.getComponent().textContent = 'Next round';
                (_h = this.skipButton) === null || _h === void 0 ? void 0 : _h.getComponent().remove();
                localStorage.setItem('statistic', JSON.stringify(this.statistic));
                this.buttons.append([
                    new _Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"]('Results', () => {
                        window.location.hash = 'statistic';
                    }, 'result'),
                ]);
            }
        }
    }
    continueHandler() {
        var _a;
        this.hints.showTranslation();
        (_a = this.skipButton) === null || _a === void 0 ? void 0 : _a.setDisabled(false);
        this.currentWord += 1;
        if (this.currentWord === 10) {
            this.nextLevel();
        }
        else {
            this.nextSentence();
        }
    }
    createSkipButton() {
        const callback = (e) => {
            var _a, _b, _c, _d, _e;
            this.checkHandler(e);
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
            this.checkHandler(e, true);
            (_e = this.answer) === null || _e === void 0 ? void 0 : _e.getComponent().classList.add('skipped');
        };
        return new _Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"]("I don't know", callback, 'skip');
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
    constructor(page, parent) {
        super({ className: 'hints' });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.isTranslation = this.user.hints.isTranslation;
        this.isAudio = this.user.hints.isAudio;
        this.isImage = this.user.hints.isImage;
        this.page = page;
        this.translationHint = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'hint translation' });
        const audioCallback = () => {
            var _a;
            (_a = this.audio) === null || _a === void 0 ? void 0 : _a.play();
            this.audioHint.getComponent().classList.add('playing');
            this.audioHint.setDisabled(true);
        };
        this.audioHint = new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('', audioCallback, 'hint audio');
        this.audioHint.append([new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'image' })]);
        this.translationButton = this.createTranslationButton();
        this.audioButton = this.createAudioButton();
        this.imageButton = this.createImageButton();
        const hints = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'hints-content' }, [this.translationHint, this.audioHint]);
        const buttons = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'hints-buttons' }, [
            this.translationButton,
            this.audioButton,
            this.imageButton,
        ]);
        parent.append([buttons]);
        this.page.append([hints]);
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
        const button = new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('', callback, 'hint-button');
        button.append([new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'image' })]);
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
        const button = new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('', callback, 'audio-button');
        button.append([new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'image' })]);
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
        const button = new _Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('', callback, 'image-button');
        button.append([new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'image' })]);
        if (this.isImage)
            button.getComponent().classList.add('active');
        return button;
    }
    saveHints() {
        this.user.hints.isAudio = this.isAudio;
        this.user.hints.isImage = this.isImage;
        this.user.hints.isTranslation = this.isTranslation;
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
            completedRounds: {},
            lastRound: '',
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
            ul.getComponent().innerHTML = '';
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

/***/ "./src/components/Selector/Selector.ts":
/*!*********************************************!*\
  !*** ./src/components/Selector/Selector.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _selector_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selector.css */ "./src/components/Selector/selector.css");



class Selector extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(roundsCount, roundTransition, currentRound = 1, currentLevel = 1) {
        super({ className: 'selector' });
        this.roundsCount = roundsCount;
        this.currentRound = currentRound;
        this.currentLevel = currentLevel;
        this.roundTransition = roundTransition;
        this.append([this.createSelector(), this.createSelector('levels', 45)]);
    }
    createSelector(name = 'rounds', count = 6) {
        var _a, _b;
        const wrapper = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
            className: 'selector-wrapper',
            textContent: `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toCapitalize)(name)}:`,
            onchange: this.changeHandler.bind(this),
        });
        const selector = new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ tag: 'select', className: `select ${name}`, name });
        const optionsCount = name === 'rounds' ? count : this.roundsCount;
        const { completedRounds } = JSON.parse(localStorage.getItem('user'));
        const rounds = completedRounds[this.currentRound];
        for (let i = 1; i <= optionsCount; i += 1) {
            let className = 'option';
            if (rounds) {
                if (name === 'levels') {
                    className += rounds.rounds.includes(i) ? ' completed' : '';
                }
                else if (completedRounds[i]) {
                    className +=
                        ((_a = completedRounds[i]) === null || _a === void 0 ? void 0 : _a.roundsCount) === ((_b = completedRounds[i]) === null || _b === void 0 ? void 0 : _b.rounds.length) ? ' completed' : '';
                }
            }
            selector.append([
                new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({
                    tag: 'option',
                    className,
                    value: `${i}`,
                    textContent: `${i}`,
                    selected: name === 'rounds' ? i === this.currentRound : i === this.currentLevel,
                }),
            ]);
        }
        wrapper.append([selector]);
        return wrapper;
    }
    changeHandler(e) {
        const target = e.target;
        if (target.name === 'rounds') {
            const newHash = `game/${target.value}_01`;
            window.location.hash = newHash;
            this.roundTransition(newHash);
        }
        else {
            const newHash = `game/${this.currentRound}_${target.value.padStart(2, '0')}`;
            window.location.hash = newHash;
            this.roundTransition(newHash);
        }
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
/* harmony import */ var _components_Selector_Selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Selector/Selector */ "./src/components/Selector/Selector.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Page */ "./src/pages/Page.ts");
/* harmony import */ var _gamePage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamePage.css */ "./src/pages/GamePage/gamePage.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class GamePage extends _Page__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super({ className: 'game-page' });
        this.api = new _API_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.hash = window.location.hash;
    }
    render(isRoundTransition = false) {
        this.hash = window.location.hash;
        if (!isRoundTransition)
            super.render();
        this.content = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'content' });
        this.append([this.content]);
        this.getRound().then((round) => {
            var _a;
            (_a = this.game) === null || _a === void 0 ? void 0 : _a.getComponent().remove();
            this.round = round;
            this.game = new _components_Game_Game__WEBPACK_IMPORTED_MODULE_2__["default"](this.levelId, this.roundId, this.content, this.roundTransition.bind(this), this.roundsCount);
            this.content.append([
                this.game,
                new _components_Selector_Selector__WEBPACK_IMPORTED_MODULE_3__["default"](this.roundsCount, this.roundTransition.bind(this), +this.levelId, +this.roundId),
            ]);
            this.game.renderGame(this.round);
            this.content.render(this.component);
        });
    }
    clear() {
        super.clear();
        this.component.onanimationend = () => {
            this.component.innerHTML = '';
            this.component.remove();
        };
    }
    roundTransition(newHash = 'game/1_01') {
        if (newHash !== this.hash) {
            const content = this.content;
            content.clear();
            content.getComponent().onanimationend = () => {
                content.getComponent().innerHTML = '';
                content.getComponent().remove();
                this.hash = newHash;
                this.render(true);
            };
        }
    }
    getRound() {
        return __awaiter(this, void 0, void 0, function* () {
            const { rounds, roundsCount } = yield this.api.getRounds();
            this.roundsCount = roundsCount;
            const roundId = this.hash.split('/')[1];
            [this.levelId, this.roundId] = roundId.split('_');
            if (+this.levelId > 6 || +this.levelId < 1) {
                window.location.hash = `game/1_01`;
                this.hash = `game/1_01`;
                return this.getRound();
            }
            if (+this.roundId > roundsCount) {
                window.location.hash = `game/${+this.levelId + 1}_01`;
                this.hash = `game/${+this.levelId + 1}_01`;
                return this.getRound();
            }
            const round = rounds.find((el) => el.levelData.id === roundId);
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
            const { lastRound } = JSON.parse(localStorage.getItem('user'));
            window.location.hash = `game/${lastRound}`;
        };
        const button = new _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"]('Start', clickHandler, 'start-button');
        return new _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ className: 'home-content' }, [h1, greeting, ...text, button]);
    }
    render() {
        this.append([this.createContent()]);
        super.render();
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
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ "./src/pages/page.css");


class Page extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(params = {}) {
        const newParams = Object.assign(params, { className: `${params.className} main` });
        super(newParams);
    }
    render() {
        this.component.classList.remove('out');
        this.component.classList.add('in');
        document.body.appendChild(this.component);
        this.component.onanimationend = () => {
            this.component.classList.remove('in');
            this.component.onanimationend = null;
        };
    }
}


/***/ }),

/***/ "./src/pages/Statistic/Statistic.ts":
/*!******************************************!*\
  !*** ./src/pages/Statistic/Statistic.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Statistic)
/* harmony export */ });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../API/api */ "./src/API/api.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Page */ "./src/pages/Page.ts");
/* harmony import */ var _statistic_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistic.css */ "./src/pages/Statistic/statistic.css");





class Statistic extends _Page__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super({ className: 'statistic' });
        this.data = JSON.parse(localStorage.getItem('statistic'));
    }
    render() {
        this.component.innerHTML = '';
        this.data = JSON.parse(localStorage.getItem('statistic'));
        const content = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'statistic-content' });
        const knownWords = this.data.words.filter((word) => !word.isSkipped);
        const unknownWords = this.data.words.filter((word) => word.isSkipped);
        const button = new _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('Continue', () => {
            window.location.hash = `game/${JSON.parse(localStorage.getItem('user')).lastRound}`;
        }, 'continue');
        content.append([this.createImage(), this.createList(knownWords), this.createList(unknownWords, true), button]);
        this.append([content]);
        super.render();
    }
    createList(words, isSkipped = false) {
        const title = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
            className: 'list-title',
            textContent: isSkipped ? "I don't know" : 'I know',
        });
        const ul = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ tag: 'ul', className: 'words' });
        words.forEach((word) => {
            const audio = new Audio(`${_API_api__WEBPACK_IMPORTED_MODULE_0__["default"].path}${word.audioExample}`);
            const button = new _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]('', () => { }, 'audio');
            audio.addEventListener('ended', () => {
                button.getComponent().classList.remove('playing');
                button.setDisabled(false);
            });
            const callback = () => {
                audio.play();
                button.getComponent().classList.add('playing');
                button.setDisabled(true);
            };
            button.getComponent().onclick = callback;
            button.append([new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'image' })]);
            const sentence = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'sentence', textContent: word.textExample });
            const li = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ tag: 'li', className: 'element' }, [button, sentence]);
            ul.append([li]);
        });
        const wrapper = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'list-wrapper' }, [title, ul]);
        return wrapper;
    }
    createImage() {
        const text = `${this.data.levelData.name} - ${this.data.levelData.author} (${this.data.levelData.year})`;
        const information = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'artwork-information', textContent: text });
        const image = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
            tag: 'img',
            className: 'artwork',
            src: `${_API_api__WEBPACK_IMPORTED_MODULE_0__["default"].path}images/${this.data.levelData.cutSrc}`,
            alt: text,
        });
        const wrapper = new _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'artwork-wrapper' }, [image, information]);
        return wrapper;
    }
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

/***/ "./src/public/button-audio.png":
/*!*************************************!*\
  !*** ./src/public/button-audio.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c313f407c1d50f171aa.png";

/***/ }),

/***/ "./src/public/button-image.png":
/*!*************************************!*\
  !*** ./src/public/button-image.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b90182a84d24b4499409.png";

/***/ }),

/***/ "./src/public/button-translation.png":
/*!*******************************************!*\
  !*** ./src/public/button-translation.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "961151dd0e67e9b37408.png";

/***/ }),

/***/ "./src/public/hint-audio.png":
/*!***********************************!*\
  !*** ./src/public/hint-audio.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd8efadece5f65c44f8c.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLDJXQUEyVywyQkFBMkIsK0NB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QTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlETztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FlO0FBQ2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvQW5zd2VyL2Fuc3dlci5jc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGludHMvaGludHMuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0vbG9naW5Gb3JtLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0b3Ivc2VsZWN0b3IuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9Xb3JkQ29tcG9uZW50L1dvcmRDb21wb25lbnQuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvR2FtZVBhZ2UvZ2FtZVBhZ2UuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvSG9tZVBhZ2UvaG9tZVBhZ2UuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvTG9naW5QYWdlL2xvZ2luUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9TdGF0aXN0aWMvc3RhdGlzdGljLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL3BhZ2UuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0Fuc3dlci9hbnN3ZXIuY3NzP2JhYmIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uY3NzPzFhYWMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS5jc3M/MWZjNCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5jc3M/NjkxNCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGludHMvaGludHMuY3NzP2U4NmIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS9sb2dpbkZvcm0uY3NzPzBmNjIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL1NlbGVjdG9yL3NlbGVjdG9yLmNzcz9kZGRlIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9Xb3JkQ29tcG9uZW50L1dvcmRDb21wb25lbnQuY3NzP2VmZjQiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9HYW1lUGFnZS9nYW1lUGFnZS5jc3M/ZWMwOSIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL0hvbWVQYWdlL2hvbWVQYWdlLmNzcz8yNzZiIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvTG9naW5QYWdlL2xvZ2luUGFnZS5jc3M/MTlkNCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL1N0YXRpc3RpYy9zdGF0aXN0aWMuY3NzP2I0OWIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9wYWdlLmNzcz9jNWFlIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvQVBJL2FwaS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9Sb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0Fuc3dlci9BbnN3ZXIudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSGludHMvSGludHMudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS9Mb2dpbkZvcm0udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL1NlbGVjdG9yL1NlbGVjdG9yLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9Xb3JkQ29tcG9uZW50L1dvcmRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9HYW1lUGFnZS9HYW1lUGFnZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL0hvbWVQYWdlL0hvbWVQYWdlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvTG9naW5QYWdlL0xvZ2luUGFnZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL1BhZ2UudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9TdGF0aXN0aWMvU3RhdGlzdGljLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYW5zd2VyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDMyLCA0NSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgJi5kaXNhYmxlZCxcclxuICAgICYuc2tpcHBlZCB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAud29yZCB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5jb21wbGV0ZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiKDYwLCAxOCwgNDIpIGluc2V0O1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjhweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0Fuc3dlci9hbnN3ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCOztRQUVJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0k7WUFDSSxhQUFhO1FBQ2pCO0lBQ0o7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFuc3dlciB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA2LCAzMiwgNDUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICAmLmRpc2FibGVkLFxcclxcbiAgICAmLnNraXBwZWQge1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5kaXNhYmxlZCB7XFxyXFxuICAgICAgICAud29yZCB7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmLmNvbXBsZXRlZCB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5maWVsZCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2IoNjAsIDE4LCA0MikgaW5zZXQ7XFxyXFxuICAgIG1pbi13aWR0aDogMzBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMjhweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLWJ1dHRvbi1iZy1jb2xvcjogcmdiKDI1NCwgMjEyLCAxNjQpO1xyXG4gICAgLS1idXR0b24tc2hhZG93LWNvbG9yOiByZ2IoMTk0LCAxNjMsIDEyOCk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1jb2xvcik7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCB2YXIoLS1idXR0b24tc2hhZG93LWNvbG9yKTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHZhcigtLWJ1dHRvbi1zaGFkb3ctY29sb3IpO1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCB2YXIoLS1idXR0b24tc2hhZG93LWNvbG9yKTtcclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCOztJQUVsQiwyQkFBMkI7SUFDM0IsNENBQTRDOztJQUU1QztRQUNJLFFBQVE7UUFDUix3QkFBd0I7UUFDeEIsMENBQTBDO1FBQzFDLGVBQWU7UUFDZix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsMENBQTBDO0lBQzlDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJ1dHRvbi1iZy1jb2xvcjogcmdiKDI1NCwgMjEyLCAxNjQpO1xcclxcbiAgICAtLWJ1dHRvbi1zaGFkb3ctY29sb3I6IHJnYigxOTQsIDE2MywgMTI4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IHZhcigtLWJ1dHRvbi1zaGFkb3ctY29sb3IpO1xcclxcblxcclxcbiAgICAmOmRpc2FibGVkIHtcXHJcXG4gICAgICAgIHRvcDogM3B4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHZhcigtLWJ1dHRvbi1zaGFkb3ctY29sb3IpO1xcclxcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHZhcigtLWJ1dHRvbi1zaGFkb3ctY29sb3IpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdhbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDA7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYW5zd2VycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NzBweCAyODRweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGEtc291cmNlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCAxOCwgNDIpO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuaGludHMtYnV0dG9ucyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgJi5yZXZlYWwge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1COztJQUVuQjtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7UUFDSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMDtcXHJcXG4gICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NzBweCAyODRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YS1zb3VyY2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDE4LCA0Mik7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC5oaW50cy1idXR0b25zIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICAmLnJldmVhbCB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5sb2dvdXQtYnV0dG9uIHtcclxuICAgIC0tYnV0dG9uLWJnLWNvbG9yOiByZ2IoMTYxLCA0MywgNDMpO1xyXG4gICAgLS1idXR0b24tc2hhZG93LWNvbG9yOiByZ2IoMTA0LCAyOCwgMjgpO1xyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEI7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHVDQUF1Qzs7SUFFdkMsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgJi5oaWRkZW4ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvdXQtYnV0dG9uIHtcXHJcXG4gICAgLS1idXR0b24tYmctY29sb3I6IHJnYigxNjEsIDQzLCA0Myk7XFxyXFxuICAgIC0tYnV0dG9uLXNoYWRvdy1jb2xvcjogcmdiKDEwNCwgMjgsIDI4KTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL3B1YmxpYy9idXR0b24tdHJhbnNsYXRpb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vcHVibGljL2J1dHRvbi1hdWRpby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi8uLi9wdWJsaWMvYnV0dG9uLWltYWdlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uLy4uL3B1YmxpYy9oaW50LWF1ZGlvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhpbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaGludHMtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4uaGludHMtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcblxuICAgIDpub3QoLmFjdGl2ZSkge1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjgpO1xuICAgIH1cblxuICAgIC5pbWFnZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIH1cblxuICAgIC5idXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgLmhpbnQtYnV0dG9uIC5pbWFnZTo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgfVxuXG4gICAgLmF1ZGlvLWJ1dHRvbiAuaW1hZ2U6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIH1cbiAgICAuaW1hZ2UtYnV0dG9uIC5pbWFnZTo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgfVxufVxuXG4uaGludCB7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRvcDogMDtcbiAgICAmOm5vdCguYnV0dG9uKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJi50cmFuc2xhdGlvbiB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiA4MHB4O1xuICAgIH1cblxuICAgICYuYXVkaW8ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5wbGF5aW5nIHtcbiAgICAgICAgICAgICY6OmJlZm9yZSxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHJpcHBsZSAxcyBlYXNlLW91dCBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNDgsIDE2LCAzNSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuc2hvd24ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIH1cblxuICAgICYuYXVkaW8gLmltYWdlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW46IDJweCA3cHggOHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9IaW50cy9oaW50cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7O0lBRVI7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0kseURBQTBEO0lBQzlEOztJQUVBO1FBQ0kseURBQW9EO0lBQ3hEO0lBQ0E7UUFDSSx5REFBb0Q7SUFDeEQ7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLE1BQU07SUFDTjtRQUNJLGlDQUFpQztRQUNqQyxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsV0FBVztJQUNmOztJQUVBO1FBQ0ksU0FBUztRQUNULFVBQVU7UUFDVixRQUFRO1FBQ1IsZ0JBQWdCOztRQUVoQjtZQUNJLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJOztnQkFFSSxzQ0FBc0M7Z0JBQ3RDLGlDQUFpQztnQkFDakMsa0JBQWtCO2dCQUNsQixTQUFTO2dCQUNULHNCQUFzQjtnQkFDdEIsV0FBVztnQkFDWCxPQUFPO2dCQUNQLGtCQUFrQjtnQkFDbEIsUUFBUTtnQkFDUixNQUFNO1lBQ1Y7O1lBRUE7Z0JBQ0kscUJBQXFCO1lBQ3pCO1FBQ0o7SUFDSjs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QseURBQWtEO1FBQ2xELDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhpbnRzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5oaW50cy1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uaGludHMtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICA6bm90KC5hY3RpdmUpIHtcXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAuOCk7XFxuICAgIH1cXG5cXG4gICAgLmltYWdlOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5idXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5oaW50LWJ1dHRvbiAuaW1hZ2U6OmFmdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9wdWJsaWMvYnV0dG9uLXRyYW5zbGF0aW9uLnBuZyk7XFxuICAgIH1cXG5cXG4gICAgLmF1ZGlvLWJ1dHRvbiAuaW1hZ2U6OmFmdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9wdWJsaWMvYnV0dG9uLWF1ZGlvLnBuZyk7XFxuICAgIH1cXG4gICAgLmltYWdlLWJ1dHRvbiAuaW1hZ2U6OmFmdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9wdWJsaWMvYnV0dG9uLWltYWdlLnBuZyk7XFxuICAgIH1cXG59XFxuXFxuLmhpbnQge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgdG9wOiAwO1xcbiAgICAmOm5vdCguYnV0dG9uKSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICAmLnRyYW5zbGF0aW9uIHtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogODBweDtcXG4gICAgfVxcblxcbiAgICAmLmF1ZGlvIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuXFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNsYXRlOiAwIDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLnBsYXlpbmcge1xcbiAgICAgICAgICAgICY6OmJlZm9yZSxcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGVhc2Utb3V0IGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNDgsIDE2LCAzNSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5zaG93biB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICB9XFxuXFxuICAgICYuYXVkaW8gLmltYWdlOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgbWFyZ2luOiAycHggN3B4IDhweDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL3B1YmxpYy9oaW50LWF1ZGlvLnBuZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxvZ2luLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmxvZ2luLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMiwgMTYxKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvci1saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1pdGVtIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTEsIDApO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0vbG9naW5Gb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9naW4tZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWhlYWRpbmcge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIyLCAxNjEpO1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLWxpc3Qge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItaXRlbSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTEsIDApO1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0b3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG5cclxuICAgIC5zZWxlY3Qge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDIxMiwgMTY0KTtcclxuXHJcbiAgICAgICAgLm9wdGlvbiB7XHJcbiAgICAgICAgICAgICYuY29tcGxldGVkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDI1NCwgMTY0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1NlbGVjdG9yL3NlbGVjdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0lBQ1QsNEJBQTRCOztJQUU1QjtRQUNJLGlCQUFpQjtRQUNqQixvQ0FBb0M7O1FBRXBDO1lBQ0k7Z0JBQ0ksb0NBQW9DO1lBQ3hDO1FBQ0o7SUFDSjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3RvciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxyXFxuXFxyXFxuICAgIC5zZWxlY3Qge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTIsIDE2NCk7XFxyXFxuXFxyXFxuICAgICAgICAub3B0aW9uIHtcXHJcXG4gICAgICAgICAgICAmLmNvbXBsZXRlZCB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDI1NCwgMTY0KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud29yZCB7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCAxNiwgMzUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAwcHggcmdiKDQ4LCAxNiwgMzUpKTtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuXHJcbiAgICAud29yZC1jb250ZW50LFxyXG4gICAgLmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjgwcHggMjg0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmQtY29udGVudCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTIsIDE2NCk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtc2hhZG93OlxyXG4gICAgICAgICAgICAtMCAtMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMCAtMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgLTAgMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMCAycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAtMnB4IC0wIDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMnB4IC0wIDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgLTJweCAwIDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMnB4IDAgMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAtMXB4IC0ycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAxcHggLTJweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIC0xcHggMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMXB4IDJweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIC0ycHggLTFweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDJweCAtMXB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgLTJweCAxcHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAycHggMXB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgLTJweCAtMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMnB4IC0ycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAtMnB4IDJweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDJweCAycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAtMnB4IC0ycHggMCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAycHggLTJweCAwICMwMDAwMDAsXHJcbiAgICAgICAgICAgIC0ycHggMnB4IDAgIzAwMDAwMCxcclxuICAgICAgICAgICAgMnB4IDJweCAwICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLmZpcnN0KSB7XHJcbiAgICAgICAgLndvcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hc2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMCA1MCUsIHRyYW5zcGFyZW50IDVweCwgYmxhY2sgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubGFzdCB7XHJcbiAgICAgICAgLmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlKSk7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTIsIDE2NCk7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDAgNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLndyb25nIHtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMCByZWQ7XHJcbiAgICB9XHJcbiAgICAmLmNvcnJlY3Qge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC5zaG93bikge1xyXG4gICAgICAgIC53b3JkLWNvbnRlbnQsXHJcbiAgICAgICAgLmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1dvcmRDb21wb25lbnQvV29yZENvbXBvbmVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLDZDQUE2QztJQUM3QyxlQUFlOztJQUVmOztRQUVJLDRCQUE0QjtRQUM1Qiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxvQ0FBb0M7UUFDcEMsWUFBWTtRQUNaLFdBQVc7UUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQXdCcUI7SUFDekI7O0lBRUE7UUFDSTtZQUNJLGdFQUFnRTtRQUNwRTtJQUNKOztJQUVBO1FBQ0k7WUFDSSxhQUFhO1FBQ2pCO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7UUFDVixpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0k7O1lBRUksaUNBQWlDO1FBQ3JDO0lBQ0o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud29yZCB7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAwcHggcmdiKDQ4LCAxNiwgMzUpKTtcXHJcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcclxcblxcclxcbiAgICAud29yZC1jb250ZW50LFxcclxcbiAgICAuYWZ0ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjgwcHggMjg0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndvcmQtY29udGVudCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDIxMiwgMTY0KTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgICAgICAgLTAgLTJweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMCAtMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAtMCAycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIDAgMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAtMnB4IC0wIDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAycHggLTAgMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0ycHggMCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMnB4IDAgMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0xcHggLTJweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMXB4IC0ycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0xcHggMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAxcHggMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAtMnB4IC0xcHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIDJweCAtMXB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAtMnB4IDFweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMnB4IDFweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgLTJweCAtMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAycHggLTJweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgLTJweCAycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIDJweCAycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0ycHggLTJweCAwICMwMDAwMDAsXFxyXFxuICAgICAgICAgICAgMnB4IC0ycHggMCAjMDAwMDAwLFxcclxcbiAgICAgICAgICAgIC0ycHggMnB4IDAgIzAwMDAwMCxcXHJcXG4gICAgICAgICAgICAycHggMnB4IDAgIzAwMDAwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOm5vdCguZmlyc3QpIHtcXHJcXG4gICAgICAgIC53b3JkLWNvbnRlbnQge1xcclxcbiAgICAgICAgICAgIG1hc2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMCA1MCUsIHRyYW5zcGFyZW50IDVweCwgYmxhY2sgMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5sYXN0IHtcXHJcXG4gICAgICAgIC5hZnRlciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWZ0ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICBsZWZ0OiAxMDAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoLTUwJSkpO1xcclxcbiAgICAgICAgei1pbmRleDogOTk5O1xcclxcbiAgICAgICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTIsIDE2NCk7XFxyXFxuICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgMCA1MCUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYud3Jvbmcge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgcmVkO1xcclxcbiAgICB9XFxyXFxuICAgICYuY29ycmVjdCB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCBncmVlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOm5vdCguc2hvd24pIHtcXHJcXG4gICAgICAgIC53b3JkLWNvbnRlbnQsXFxyXFxuICAgICAgICAuYWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nYW1lLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICYuaW4ge1xyXG4gICAgICAgIGFuaW1hdGlvbjogaW5zaWRlQ29udGVudCBlYXNlLWluLW91dCB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgICYub3V0IHtcclxuICAgICAgICBhbmltYXRpb246IGluc2lkZUNvbnRlbnQgZWFzZS1pbi1vdXQgdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikgYWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgICB9XHJcbiAgICAmOm5vdCgmLmluLCAmLm91dCkge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5zaWRlQ29udGVudCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cigxMDBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvR2FtZVBhZ2UvZ2FtZVBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDO1FBQ0ksK0RBQStEO0lBQ25FO0lBQ0E7UUFDSSxpRkFBaUY7SUFDckY7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lLXBhZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICYuaW4ge1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBpbnNpZGVDb250ZW50IGVhc2UtaW4tb3V0IHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcclxcbiAgICB9XFxyXFxuICAgICYub3V0IHtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogaW5zaWRlQ29udGVudCBlYXNlLWluLW91dCB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKSBhbHRlcm5hdGUtcmV2ZXJzZTtcXHJcXG4gICAgfVxcclxcbiAgICAmOm5vdCgmLmluLCAmLm91dCkge1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGluc2lkZUNvbnRlbnQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaG9tZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBibHVyKDApO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4uZ3JlZXRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXJhbmNlTmFtZUFmdGVyO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwcGVhcmFuY2VOYW1lO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXBwZWFyYW5jZU5hbWUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFwcGVhcmFuY2VOYW1lQWZ0ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgNjUlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9Ib21lUGFnZS9ob21lUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCOztJQUVyQjtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFFBQVE7UUFDUixZQUFZO1FBQ1osc0JBQXNCOztRQUV0QixtQ0FBbUM7UUFDbkMsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQiw0QkFBNEI7SUFDaEM7O0lBRUEsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxPQUFPO0lBQ1g7SUFDQTtRQUNJLFdBQVc7UUFDWCxPQUFPO0lBQ1g7SUFDQTtRQUNJLFdBQVc7UUFDWCxPQUFPO0lBQ1g7SUFDQTtRQUNJLFFBQVE7UUFDUixVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG9tZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZXRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICBhbmltYXRpb24tbmFtZTogYXBwZWFyYW5jZU5hbWVBZnRlcjtcXHJcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXJhbmNlTmFtZTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXJhbmNlTmFtZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcbiAgICA2MCUge1xcclxcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyYW5jZU5hbWVBZnRlciB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICA2NSUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxvZ2luLXBhZ2Uge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0xvZ2luUGFnZS9sb2dpblBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2dpbi1wYWdlIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL3B1YmxpYy9oaW50LWF1ZGlvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnN0YXRpc3RpYyB7XHJcbiAgICAmLmluIHtcclxuICAgICAgICBhbmltYXRpb246IGluc2lkZUNvbnRlbnQgZWFzZS1pbi1vdXQgdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICAmLm91dCB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBpbnNpZGVDb250ZW50IGVhc2UtaW4tb3V0IHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhdGlzdGljLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTYsIDM1KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLmFydHdvcmstd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAuYXJ0d29yayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgLmxpc3QtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53b3JkcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgMTgsIDQyKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAgIC5lbGVtZW50IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmF1ZGlvIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYucGxheWluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiByaXBwbGUgMXMgZWFzZS1vdXQgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1idXR0b24tYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGludWUge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmlwcGxlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjI1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnNpZGVDb250ZW50IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDEwMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9TdGF0aXN0aWMvc3RhdGlzdGljLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO1FBQ0ksK0RBQStEO0lBQ25FO0lBQ0E7UUFDSSxpRkFBaUY7SUFDckY7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CO1FBQ0ksbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QjtZQUNJLFlBQVk7WUFDWixtQkFBbUI7UUFDdkI7SUFDSjs7SUFFQTtRQUNJLG1CQUFtQjs7UUFFbkI7WUFDSSxlQUFlO1lBQ2Ysa0JBQWtCO1FBQ3RCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGlDQUFpQztZQUNqQyxtQkFBbUI7O1lBRW5CO2dCQUNJLFlBQVk7Z0JBQ1osaUJBQWlCO2dCQUNqQixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsUUFBUTs7Z0JBRVI7b0JBQ0ksZUFBZTtnQkFDbkI7Z0JBQ0E7b0JBQ0ksa0JBQWtCO2dCQUN0Qjs7Z0JBRUE7b0JBQ0ksWUFBWTtvQkFDWixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEI7d0JBQ0ksV0FBVzt3QkFDWCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCx5REFBa0Q7d0JBQ2xELDRCQUE0Qjt3QkFDNUIsMkJBQTJCO3dCQUMzQixxQkFBcUI7b0JBQ3pCOztvQkFFQTt3QkFDSTs7NEJBRUksc0NBQXNDOzRCQUN0Qyx3Q0FBd0M7NEJBQ3hDLGtCQUFrQjs0QkFDbEIsU0FBUzs0QkFDVCxzQkFBc0I7NEJBQ3RCLFdBQVc7NEJBQ1gsT0FBTzs0QkFDUCxrQkFBa0I7NEJBQ2xCLFFBQVE7NEJBQ1IsTUFBTTt3QkFDVjs7d0JBRUE7NEJBQ0kscUJBQXFCO3dCQUN6QjtvQkFDSjtnQkFDSjtZQUNKO1FBQ0o7SUFDSjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN0YXRpc3RpYyB7XFxyXFxuICAgICYuaW4ge1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBpbnNpZGVDb250ZW50IGVhc2UtaW4tb3V0IHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcclxcbiAgICB9XFxyXFxuICAgICYub3V0IHtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogaW5zaWRlQ29udGVudCBlYXNlLWluLW91dCB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKSBhbHRlcm5hdGUtcmV2ZXJzZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3RhdGlzdGljLWNvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE2LCAzNSk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgICAuYXJ0d29yay13cmFwcGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIC5hcnR3b3JrIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGlzdC13cmFwcGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgICAubGlzdC10aXRsZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC53b3JkcyB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDE4LCA0Mik7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuZWxlbWVudCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuYXVkaW8ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZTo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vcHVibGljL2hpbnQtYXVkaW8ucG5nKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmLnBsYXlpbmcge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGVhc2Utb3V0IGluZmluaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1idXR0b24tYmctY29sb3IpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5jb250aW51ZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0byAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmlwcGxlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaW5zaWRlQ29udGVudCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIGZpbHRlcjogYmx1cigxMDBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5pbiB7XG4gICAgYW5pbWF0aW9uOiBpbnNpZGUgZWFzZS1pbi1vdXQgdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApO1xufVxuXG4ub3V0IHtcbiAgICBhbmltYXRpb246IG91dHNpZGUgZWFzZS1pbi1vdXQgdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApO1xufVxuXG5Aa2V5ZnJhbWVzIGluc2lkZSB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIG91dHNpZGUge1xuICAgIGZyb20ge1xuICAgICAgICBzY2FsZTogMTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBzY2FsZTogMDtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9wYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHdEQUF3RDtJQUN4RCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5REFBeUQ7SUFDekQsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLE1BQU07SUFDVjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFFBQVE7SUFDWjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uaW4ge1xcbiAgICBhbmltYXRpb246IGluc2lkZSBlYXNlLWluLW91dCB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApO1xcbn1cXG5cXG4ub3V0IHtcXG4gICAgYW5pbWF0aW9uOiBvdXRzaWRlIGVhc2UtaW4tb3V0IHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCk7XFxufVxcblxcbkBrZXlmcmFtZXMgaW5zaWRlIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgb3V0c2lkZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgc2NhbGU6IDE7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgc2NhbGU6IDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXHJcblxyXG4vKiBEb2N1bWVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXHJcbiAqL1xyXG5cclxuaHRtbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXHJcbn1cclxuXHJcbi8qIFNlY3Rpb25zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxyXG4gKi9cclxuXHJcbm1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcclxuICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xyXG59XHJcblxyXG4vKiBHcm91cGluZyBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cclxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXHJcbiAqL1xyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cclxuICAgIGhlaWdodDogMDsgLyogMSAqL1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxucHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxufVxyXG5cclxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXHJcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuYWJiclt0aXRsZV0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5iLFxyXG5zdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuY29kZSxcclxua2JkLFxyXG5zYW1wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4vKipcclxuICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cclxuICogYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnN1Yixcclxuc3VwIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbnN1YiB7XHJcbiAgICBib3R0b206IC0wLjI1ZW07XHJcbn1cclxuXHJcbnN1cCB7XHJcbiAgICB0b3A6IC0wLjVlbTtcclxufVxyXG5cclxuLyogRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLyogRm9ybXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbm9wdGdyb3VwLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXHJcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXHJcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxyXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gICAgLyogMSAqL1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cclxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuc2VsZWN0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5idXR0b24sXHJcblt0eXBlPSdidXR0b24nXSxcclxuW3R5cGU9J3Jlc2V0J10sXHJcblt0eXBlPSdzdWJtaXQnXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXHJcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cclxuICovXHJcblxyXG5idXR0b246LW1vei1mb2N1c3JpbmcsXHJcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcclxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXHJcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XHJcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuZmllbGRzZXQge1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cclxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cclxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxyXG4gKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxubGVnZW5kIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXHJcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbnByb2dyZXNzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXHJcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cclxuICovXHJcblxyXG5bdHlwZT0nY2hlY2tib3gnXSxcclxuW3R5cGU9J3JhZGlvJ10ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxyXG4gKi9cclxuXHJcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cclxuICovXHJcblxyXG5bdHlwZT0nc2VhcmNoJ10ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cclxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXHJcbiAqL1xyXG5cclxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xyXG4gICAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xyXG59XHJcblxyXG4vKiBJbnRlcmFjdGl2ZVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLypcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cclxuICovXHJcblxyXG5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbn1cclxuXHJcbi8qIE1pc2NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXHJcbiAqL1xyXG5cclxudGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxyXG4gKi9cclxuXHJcbltoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtJQUNJLGlCQUFpQixFQUFFLE1BQU07SUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUMxQzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0lBQ0ksU0FBUztBQUNiOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0lBQ0ksdUJBQXVCLEVBQUUsTUFBTTtJQUMvQixTQUFTLEVBQUUsTUFBTTtJQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLGlDQUFpQyxFQUFFLE1BQU07SUFDekMsY0FBYyxFQUFFLE1BQU07QUFDMUI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSxtQkFBbUIsRUFBRSxNQUFNO0lBQzNCLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUM3Qzs7QUFFQTs7RUFFRTs7QUFFRjs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztFQUdFOztBQUVGOzs7SUFHSSxpQ0FBaUMsRUFBRSxNQUFNO0lBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0lBRUksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztJQUtJLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0lBRUksTUFBTTtJQUNOLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0lBRUksTUFBTTtJQUNOLG9CQUFvQjtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztJQUlJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7SUFDSSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDL0I7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7RUFHRTs7QUFFRjs7SUFFSSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0lBQ0ksNkJBQTZCLEVBQUUsTUFBTTtJQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDekI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG4vKiBEb2N1bWVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxyXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcclxcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcclxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gKiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gICAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcclxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxcXHJcXG5bdHlwZT0ncmFkaW8nXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3RpdmVcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1pc2NcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vcHVibGljL2xvZ2luLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1Qjs7SUFFdkIsaUJBQWlCO0lBQ2pCLHlEQUE0QztJQUM1QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0Qjs7SUFFNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjs7SUFFaEI7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwobm9ybWFsaXplLmNzcyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvbG9naW4uanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcblxcclxcbiAgICAmOmRpc2FibGVkIHtcXHJcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5zd2VyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5zd2VyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hpbnRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGludHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luRm9ybS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luRm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VsZWN0b3IuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWxlY3Rvci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vV29yZENvbXBvbmVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1dvcmRDb21wb25lbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZVBhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZVBhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luUGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luUGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhdGlzdGljLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhdGlzdGljLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBBcGkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBBcGkucGF0aCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Jzcy1wdXp6bGUtZGF0YS9tYWluLyc7XG4gICAgfVxuICAgIGdldFJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxldmVsSWQgPSArd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKVsxXS5zcGxpdCgnXycpWzBdO1xuICAgICAgICAgICAgaWYgKGxldmVsSWQgPD0gNiAmJiBsZXZlbElkID49IDEpXG4gICAgICAgICAgICAgICAgQXBpLmN1cnJlbnRMZXZlbCA9IGxldmVsSWQ7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gYHdvcmRDb2xsZWN0aW9uTGV2ZWwke0FwaS5jdXJyZW50TGV2ZWx9Lmpzb25gO1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyID0gJ2RhdGEvJztcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kcyA9IHlpZWxkIGZldGNoKEFwaS5wYXRoICsgZm9sZGVyICsgZmlsZSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoanNvbikgPT4ganNvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gbmV3IEVycm9yKGVycikpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdW5kcztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQXBpLmN1cnJlbnRMZXZlbCA9IDE7XG5leHBvcnQgZGVmYXVsdCBBcGk7XG4iLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vUm91dGVyJztcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbnJvdXRlci5yZW5kZXIoKTtcbiIsImV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY2hpbGRyZW4gPSBbXSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy50YWcpIHx8ICdkaXYnKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmV2ZW50KVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkRXZlbnRMaXN0ZW5lcihwcm9wcy5ldmVudC50eXBlLCBwcm9wcy5ldmVudC5jYWxsYmFjayk7XG4gICAgICAgIHRoaXMuYXBwZW5kKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY3JlYXRlRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIH1cbiAgICBhcHBlbmQoY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEJhc2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHBlbmQoY2hpbGQuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwZW5kKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldERhdGFzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGF0YXNldFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXRDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgICB9XG4gICAgcmVuZGVyKHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3V0Jyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2luJyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uYW5pbWF0aW9uZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW4nKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uYW5pbWF0aW9uZW5kID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luJyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ291dCcpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbmFuaW1hdGlvbmVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUoJ291dCcpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbmFuaW1hdGlvbmVuZCA9IG51bGw7XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgR2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9HYW1lUGFnZS9HYW1lUGFnZSc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9Ib21lUGFnZS9Ib21lUGFnZSc7XG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlL0xvZ2luUGFnZSc7XG5pbXBvcnQgU3RhdGlzdGljIGZyb20gJy4vcGFnZXMvU3RhdGlzdGljL1N0YXRpc3RpYyc7XG5jb25zdCByb3V0ZXMgPSB7XG4gICAgbG9naW46IG5ldyBMb2dpblBhZ2UoKSxcbiAgICBob21lOiBuZXcgSG9tZVBhZ2UoKSxcbiAgICBnYW1lOiBuZXcgR2FtZVBhZ2UoKSxcbiAgICBzdGF0aXN0aWM6IG5ldyBTdGF0aXN0aWMoKSxcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc2hDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcbiAgICAgICAgdGhpcy5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5oYXNoQ2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgICAgICBpZiAoIXVzZXIgfHwgKHVzZXIgJiYgdGhpcy5oYXNoID09PSAnbG9naW4nKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRIYXNoKCdsb2dpbicpO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2UoJ2xvZ2luJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlci5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc2ggPT09ICdob21lJykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZSgnaG9tZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNoLnN0YXJ0c1dpdGgoJ2dhbWUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZSgnZ2FtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNoID09PSAnc3RhdGlzdGljJykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZSgnc3RhdGlzdGljJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhhc2goJ2hvbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRIYXNoKGhhc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICAgICAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICAgIH1cbiAgICB1cGRhdGVQYWdlKHBhZ2VOYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMucm91dGVzW3BhZ2VOYW1lXSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgKF9hID0gdGhpcy5jdXJyZW50UGFnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnJvdXRlc1twYWdlTmFtZV07XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UucmVuZGVyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0ICcuL2Fuc3dlci5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5zd2VyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBzZW50ZW5jZSwgZHJhZ092ZXIsIGRyb3ApIHtcbiAgICAgICAgc3VwZXIoeyBjbGFzc05hbWU6ICdhbnN3ZXInIH0pO1xuICAgICAgICB0aGlzLnNlbnRlbmNlID0gc2VudGVuY2U7XG4gICAgICAgIHRoaXMud29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVGaWVsZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVGaWVsZChpLCBkcmFnT3ZlciwgZHJvcCk7XG4gICAgICAgICAgICB0aGlzLndvcmRzW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVGaWVsZChpbmRleCwgZHJhZ092ZXIsIGRyb3ApIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmaWVsZCcsXG4gICAgICAgICAgICBvbmRyb3A6IGRyb3AsXG4gICAgICAgICAgICBvbmRyYWdvdmVyOiBkcmFnT3ZlcixcbiAgICAgICAgICAgIG9uZHJhZ2xlYXZlOiB0aGlzLmRyYWdMZWF2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZWxkLnNldERhdGFzZXQoJ2luZGV4JywgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuYXBwZW5kKFtmaWVsZF0pO1xuICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkLmdldENvbXBvbmVudCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmVGaWVsZHMucHVzaChmaWVsZC5nZXRDb21wb25lbnQoKSk7XG4gICAgICAgIHRoaXMuc29ydEZpZWxkcyh0aGlzLmFjdGl2ZUZpZWxkcyk7XG4gICAgfVxuICAgIHNvcnRGaWVsZHMoZmllbGRzKSB7XG4gICAgICAgIHJldHVybiBmaWVsZHMuc29ydCgoYSwgYikgPT4gK2EuZGF0YXNldC5pbmRleCAtICtiLmRhdGFzZXQuaW5kZXgpO1xuICAgIH1cbiAgICBhcHBlbmRXb3JkKGNoaWxkLCBpbmRleCkge1xuICAgICAgICBsZXQgYWN0aXZlRmllbGRJbmRleDtcbiAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICBhY3RpdmVGaWVsZEluZGV4ID0gdGhpcy5hY3RpdmVGaWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuZGF0YXNldC5pbmRleCA9PT0gaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlRmllbGRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aXZlRmllbGQgPSB0aGlzLmFjdGl2ZUZpZWxkc1thY3RpdmVGaWVsZEluZGV4XTtcbiAgICAgICAgaWYgKGFjdGl2ZUZpZWxkKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZCBpbnN0YW5jZW9mIEJhc2VDb21wb25lbnQgPyBjaGlsZC5nZXRDb21wb25lbnQoKSA6IGNoaWxkO1xuICAgICAgICAgICAgdGhpcy53b3Jkc1srYWN0aXZlRmllbGQuZGF0YXNldC5pbmRleF0gPSBjb21wb25lbnQ7XG4gICAgICAgICAgICBhY3RpdmVGaWVsZC5hcHBlbmQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIGFjdGl2ZUZpZWxkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgd2lkdGg6ICR7Y29tcG9uZW50LmRhdGFzZXQud2lkdGh9cHhgKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRmllbGRzLnNwbGljZShhY3RpdmVGaWVsZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVXb3JkKGluZGV4KSB7XG4gICAgICAgIHRoaXMud29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgICAgICAgd29yZCA9PT0gbnVsbCB8fCB3b3JkID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3b3JkLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgICAgICAgIHdvcmQgPT09IG51bGwgfHwgd29yZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogd29yZC5jbGFzc0xpc3QucmVtb3ZlKCd3cm9uZycpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkc1sraW5kZXhdO1xuICAgICAgICB0aGlzLndvcmRzWytpbmRleF0gPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICAgICAgdGhpcy5zb3J0RmllbGRzKHRoaXMuYWN0aXZlRmllbGRzKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogMCcpO1xuICAgIH1cbiAgICBpc1NvbHZlZCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gdGhpcy5zZW50ZW5jZS5zcGxpdCgnICcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLndvcmRzW2ldO1xuICAgICAgICAgICAgaWYgKChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1lbnQudGV4dENvbnRlbnQpICE9PSB3b3Jkc1tpXSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3cm9uZycpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBkcmFnTGVhdmUoZXYpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ZpZWxkJylcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICAgIGNsZWFyRmllbGRzKGRyb3BFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkICE9PSBkcm9wRWxlbWVudCkuZm9yRWFjaCgoZmllbGQpID0+IGZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKSk7XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGVsO1xuICAgICAgICAgICAgZmllbGQub25kcm9wID0gbnVsbDtcbiAgICAgICAgICAgIGZpZWxkLm9uZHJhZ292ZXIgPSBudWxsO1xuICAgICAgICAgICAgZmllbGQub25kcmFnbGVhdmUgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgJy4vYnV0dG9uLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0Q29udGVudCwgY2FsbGJhY2ssIGNsYXNzTmFtZSA9ICcnLCBkaXNhYmxlZCA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKHsgdGFnOiAnYnV0dG9uJywgY2xhc3NOYW1lOiBgYnV0dG9uICAke2NsYXNzTmFtZX1gLCBvbmNsaWNrOiBjYWxsYmFjaywgdGV4dENvbnRlbnQgfSk7XG4gICAgICAgIHRoaXMuc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgIH1cbiAgICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH1cbn1cbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQVBJL2FwaSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyByYW5kb21pemVBcnJheSwgdG9DYXBpdGFsaXplLCB1cGRhdGVSb3VuZElkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IEFuc3dlciBmcm9tICcuLi9BbnN3ZXIvQW5zd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgSGludHMgZnJvbSAnLi4vSGludHMvSGludHMnO1xuaW1wb3J0IFdvcmRDb21wb25lbnQgZnJvbSAnLi4vV29yZENvbXBvbmVudC9Xb3JkQ29tcG9uZW50JztcbmltcG9ydCAnLi9HYW1lLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobGV2ZWxJZCwgcm91bmRJZCwgcGFnZSwgcm91bmRUcmFuc2l0aW9uLCByb3VuZHNDb3VudCkge1xuICAgICAgICBzdXBlcih7IGNsYXNzTmFtZTogJ2dhbWUnIH0pO1xuICAgICAgICB0aGlzLmN1cnJlbnRXb3JkID0gMDtcbiAgICAgICAgdGhpcy5idXR0b25zID0gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdidXR0b25zJyB9KTtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5sZXZlbElkID0gbGV2ZWxJZDtcbiAgICAgICAgdGhpcy5yb3VuZElkID0gcm91bmRJZDtcbiAgICAgICAgdGhpcy5yb3VuZHNDb3VudCA9IHJvdW5kc0NvdW50O1xuICAgICAgICB0aGlzLmhpbnRzID0gbmV3IEhpbnRzKHRoaXMucGFnZSwgdGhpcy5idXR0b25zKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJzID0gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdhbnN3ZXJzJyB9KTtcbiAgICAgICAgdGhpcy5yb3VuZFRyYW5zaXRpb24gPSByb3VuZFRyYW5zaXRpb247XG4gICAgICAgIHRoaXMuYXBwZW5kKFt0aGlzLmhpbnRzLCB0aGlzLmFuc3dlcnNdKTtcbiAgICB9XG4gICAgcmVuZGVyR2FtZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuc3RhdGlzdGljID0geyBsZXZlbERhdGE6IGRhdGEubGV2ZWxEYXRhLCB3b3JkczogW10gfTtcbiAgICAgICAgdGhpcy5zZW50ZW5jZSA9IGRhdGEud29yZHNbdGhpcy5jdXJyZW50V29yZF07XG4gICAgICAgIHRoaXMuaW1hZ2VTcmMgPSB0aGlzLmRhdGEubGV2ZWxEYXRhLmltYWdlU3JjO1xuICAgICAgICB0aGlzLndvcmRzID0gdGhpcy5jcmVhdGVXb3Jkcyh0aGlzLnNlbnRlbmNlKTtcbiAgICAgICAgdGhpcy5hbnN3ZXIgPSB0aGlzLmNyZWF0ZUFuc3dlcih0aGlzLndvcmRzLmxlbmd0aCwgdGhpcy5zZW50ZW5jZS50ZXh0RXhhbXBsZSk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnZGF0YS1zb3VyY2UnIH0sIHRoaXMud29yZHMpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBCdXR0b24oJ0NoZWNrJywgKCkgPT4geyB9LCAnY2hlY2snLCB0cnVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b24oKTtcbiAgICAgICAgdGhpcy5za2lwQnV0dG9uID0gdGhpcy5jcmVhdGVTa2lwQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuYnV0dG9ucy5hcHBlbmQoW3RoaXMuYnV0dG9uLCB0aGlzLnNraXBCdXR0b25dKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJzLmFwcGVuZChbdGhpcy5hbnN3ZXJdKTtcbiAgICAgICAgdGhpcy5hcHBlbmQoW3RoaXMuYW5zd2VycywgdGhpcy5kYXRhU291cmNlLCB0aGlzLmJ1dHRvbnNdKTtcbiAgICAgICAgdGhpcy53b3Jkcy5mb3JFYWNoKCh3b3JkKSA9PiB3b3JkLnNldFdpZHRoKHRoaXMuaW1hZ2VTcmMsIHRoaXMuY3VycmVudFdvcmQpKTtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5kYXRhU291cmNlLmdldENvbXBvbmVudCgpLmNoaWxkTm9kZXM7XG4gICAgICAgIHRoaXMuaGludHMuc2V0VGV4dCh0aGlzLnNlbnRlbmNlLnRleHRFeGFtcGxlVHJhbnNsYXRlKTtcbiAgICAgICAgdGhpcy5oaW50cy5zZXRBdWRpbyh0aGlzLnNlbnRlbmNlLmF1ZGlvRXhhbXBsZSk7XG4gICAgICAgIHRoaXMuaGludHMuc2V0V29yZHModGhpcy53b3Jkcyk7XG4gICAgICAgIHRoaXMuaGludHMuc2hvd0ltYWdlKCk7XG4gICAgICAgIHRoaXMuaGludHMuc2hvd0F1ZGlvKCk7XG4gICAgICAgIHRoaXMuaGludHMuc2hvd1RyYW5zbGF0aW9uKCk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5nZXRDb21wb25lbnQoKS5hcHBlbmQoLi4ucmFuZG9taXplQXJyYXkoWy4uLmFycl0pKTtcbiAgICB9XG4gICAgY3JlYXRlV29yZHMoc2VudGVuY2UpIHtcbiAgICAgICAgY29uc3Qgd29yZHMgPSBzZW50ZW5jZS50ZXh0RXhhbXBsZS5zcGxpdCgnICcpLm1hcCgod29yZCwgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3b3JkQ29tcG9uZW50ID0gbmV3IFdvcmRDb21wb25lbnQod29yZCwge1xuICAgICAgICAgICAgICAgIG9uY2xpY2s6IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgb25kcmFnc3RhcnQ6IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgb250b3VjaG1vdmU6IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvbnRvdWNoZW5kOiB0aGlzLmRyYWdEcm9wLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgb250b3VjaHN0YXJ0OiB0aGlzLnRvdWNoU3RhcnQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGkgPT09IDApXG4gICAgICAgICAgICAgICAgd29yZENvbXBvbmVudC5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QuYWRkKCdmaXJzdCcpO1xuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgd29yZENvbXBvbmVudC5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QuYWRkKCdsYXN0Jyk7XG4gICAgICAgICAgICByZXR1cm4gd29yZENvbXBvbmVudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB3b3JkcztcbiAgICB9XG4gICAgY3JlYXRlQW5zd2VyKGxlbmd0aCwgc2VudGVuY2UpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gbmV3IEFuc3dlcihsZW5ndGgsIHNlbnRlbmNlLCB0aGlzLmRyYWdvdmVySGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLmRyb3BIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmFuc3dlciA9IGFuc3dlcjtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG4gICAgbW92ZVdvcmQoY29tcG9uZW50KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNvbXBvbmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAocGFyZW50LmNsYXNzTmFtZSA9PT0gJ2RhdGEtc291cmNlJykge1xuICAgICAgICAgICAgKF9hID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRXb3JkKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoX2IgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbW92ZVdvcmQocGFyZW50ID09PSBudWxsIHx8IHBhcmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgKF9jID0gdGhpcy5kYXRhU291cmNlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuYXBwZW5kKFtjb21wb25lbnRdKTtcbiAgICAgICAgfVxuICAgICAgICAoX2QgPSB0aGlzLmJ1dHRvbikgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnNldERpc2FibGVkKCgoX2UgPSB0aGlzLmRhdGFTb3VyY2UpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRDb21wb25lbnQoKS5jaGlsZE5vZGVzLmxlbmd0aCkgIT09IDApO1xuICAgIH1cbiAgICBuZXh0U2VudGVuY2UoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIChfYSA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgKF9iID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kaXNhYmxlKCk7XG4gICAgICAgIChfYyA9IHRoaXMud29yZHMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb3JFYWNoKCh3b3JkKSA9PiB3b3JkLmRpc2FibGUoKSk7XG4gICAgICAgIHRoaXMuc2VudGVuY2UgPSB0aGlzLmRhdGEud29yZHNbdGhpcy5jdXJyZW50V29yZF07XG4gICAgICAgIHRoaXMud29yZHMgPSB0aGlzLmNyZWF0ZVdvcmRzKHRoaXMuc2VudGVuY2UpO1xuICAgICAgICB0aGlzLmFuc3dlciA9IHRoaXMuY3JlYXRlQW5zd2VyKHRoaXMud29yZHMubGVuZ3RoLCB0aGlzLnNlbnRlbmNlLnRleHRFeGFtcGxlKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJzLmFwcGVuZChbdGhpcy5hbnN3ZXJdKTtcbiAgICAgICAgKF9kID0gdGhpcy5kYXRhU291cmNlKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuYXBwZW5kKHRoaXMud29yZHMpO1xuICAgICAgICB0aGlzLndvcmRzLmZvckVhY2goKHdvcmQpID0+IHdvcmQuc2V0V2lkdGgodGhpcy5pbWFnZVNyYywgdGhpcy5jdXJyZW50V29yZCkpO1xuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0Q29tcG9uZW50KCkuY2hpbGROb2RlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmdldENvbXBvbmVudCgpLmFwcGVuZCguLi5yYW5kb21pemVBcnJheShbLi4uYXJyXSkpO1xuICAgICAgICAoX2UgPSB0aGlzLmJ1dHRvbikgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnNldERpc2FibGVkKHRydWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmhpbnRzLnNldFRleHQodGhpcy5zZW50ZW5jZS50ZXh0RXhhbXBsZVRyYW5zbGF0ZSk7XG4gICAgICAgIHRoaXMuaGludHMuc2V0QXVkaW8odGhpcy5zZW50ZW5jZS5hdWRpb0V4YW1wbGUpO1xuICAgICAgICB0aGlzLmhpbnRzLnNldFdvcmRzKHRoaXMud29yZHMpO1xuICAgICAgICB0aGlzLmhpbnRzLnNob3dJbWFnZSgpO1xuICAgICAgICB0aGlzLmhpbnRzLnNob3dBdWRpbygpO1xuICAgICAgICB0aGlzLmhpbnRzLnNob3dUcmFuc2xhdGlvbigpO1xuICAgIH1cbiAgICBuZXh0TGV2ZWwoKSB7XG4gICAgICAgIGNvbnN0IG5ld0hhc2ggPSBgZ2FtZS8ke3VwZGF0ZVJvdW5kSWQoK3RoaXMubGV2ZWxJZCwgK3RoaXMucm91bmRJZCArIDEpfWA7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbmV3SGFzaDtcbiAgICAgICAgdGhpcy5yb3VuZFRyYW5zaXRpb24obmV3SGFzaCk7XG4gICAgfVxuICAgIHVwZGF0ZUJ1dHRvbihpc0NvbnRpbnVlID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHRleHQgPSAnY2hlY2snO1xuICAgICAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLmNoZWNrSGFuZGxlcjtcbiAgICAgICAgaWYgKGlzQ29udGludWUpIHtcbiAgICAgICAgICAgIHRleHQgPSAnY29udGludWUnO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSB0aGlzLmNvbnRpbnVlSGFuZGxlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1dHRvbi5nZXRDb21wb25lbnQoKS50ZXh0Q29udGVudCA9IHRvQ2FwaXRhbGl6ZSh0ZXh0KTtcbiAgICAgICAgdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50KCkuY2xhc3NOYW1lID0gYGJ1dHRvbiAke3RleHR9YDtcbiAgICAgICAgdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50KCkub25jbGljayA9IGNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMubW92ZVdvcmQoZS50YXJnZXQpO1xuICAgIH1cbiAgICBjaGVja0hhbmRsZXIoZSwgaXNTa2lwcGVkID0gZmFsc2UpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaDtcbiAgICAgICAgaWYgKChfYSA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNTb2x2ZWQoKSkge1xuICAgICAgICAgICAgKF9iID0gdGhpcy5za2lwQnV0dG9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0RGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbih0cnVlKTtcbiAgICAgICAgICAgIChfYyA9IHRoaXMud29yZHMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb3JFYWNoKCh3b3JkKSA9PiB3b3JkLnNldFdpZHRoKHRoaXMuaW1hZ2VTcmMsIHRoaXMuY3VycmVudFdvcmQpKTtcbiAgICAgICAgICAgIHRoaXMuaGludHMuc2hvd1RyYW5zbGF0aW9uKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5oaW50cy5zaG93SW1hZ2UodHJ1ZSk7XG4gICAgICAgICAgICAoX2QgPSB0aGlzLnN0YXRpc3RpYykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLndvcmRzLnB1c2goT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNlbnRlbmNlKSwgeyBpc1NraXBwZWQgfSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmQgPT09IDkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIuY29tcGxldGVkUm91bmRzWyt0aGlzLmxldmVsSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuY29tcGxldGVkUm91bmRzWyt0aGlzLmxldmVsSWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRzOiBbK3RoaXMucm91bmRJZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZHNDb3VudDogdGhpcy5yb3VuZHNDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuY29tcGxldGVkUm91bmRzWyt0aGlzLmxldmVsSWRdLnJvdW5kcy5wdXNoKCt0aGlzLnJvdW5kSWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKG5ldyBTZXQodXNlci5jb21wbGV0ZWRSb3VuZHNbK3RoaXMubGV2ZWxJZF0ucm91bmRzKSk7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuY29tcGxldGVkUm91bmRzWyt0aGlzLmxldmVsSWRdLnJvdW5kcyA9IGFycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXNlci5jb21wbGV0ZWRSb3VuZHNbK3RoaXMubGV2ZWxJZF0ucm91bmRzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgICAgICAgICAgICB1c2VyLmxhc3RSb3VuZCA9IGAke3RoaXMubGV2ZWxJZH1fJHsoK3RoaXMucm91bmRJZCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogYCR7KF9lID0gdGhpcy5kYXRhKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UubGV2ZWxEYXRhLm5hbWV9IC0gJHsoX2YgPSB0aGlzLmRhdGEpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5sZXZlbERhdGEuYXV0aG9yfSAoJHsoX2cgPSB0aGlzLmRhdGEpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy5sZXZlbERhdGEueWVhcn0pYCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYXBwZW5kKFtpbmZvXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzLmdldENvbXBvbmVudCgpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke0FwaS5wYXRofWltYWdlcy8ke3RoaXMuZGF0YS5sZXZlbERhdGEuaW1hZ2VTcmN9XCIpYDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlcnMuZ2V0Q29tcG9uZW50KCkuY2hpbGROb2Rlcy5mb3JFYWNoKChhbnN3ZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gOSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5hZGQoJ3JldmVhbCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MCAqIGkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmdldENvbXBvbmVudCgpLnRleHRDb250ZW50ID0gJ05leHQgcm91bmQnO1xuICAgICAgICAgICAgICAgIChfaCA9IHRoaXMuc2tpcEJ1dHRvbikgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmdldENvbXBvbmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0aXN0aWMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRpc3RpYykpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5hcHBlbmQoW1xuICAgICAgICAgICAgICAgICAgICBuZXcgQnV0dG9uKCdSZXN1bHRzJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnc3RhdGlzdGljJztcbiAgICAgICAgICAgICAgICAgICAgfSwgJ3Jlc3VsdCcpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRpbnVlSGFuZGxlcigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmhpbnRzLnNob3dUcmFuc2xhdGlvbigpO1xuICAgICAgICAoX2EgPSB0aGlzLnNraXBCdXR0b24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXREaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmQgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmQgPT09IDEwKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRMZXZlbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0U2VudGVuY2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVTa2lwQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IChlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgdGhpcy5jaGVja0hhbmRsZXIoZSk7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLndvcmRzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgod29yZCkgPT4gd29yZC5kaXNhYmxlKCkpO1xuICAgICAgICAgICAgY29uc3Qgd3JvbmdXb3JkcyA9IChfYiA9IHRoaXMud29yZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5maWx0ZXIoKHdvcmQpID0+IHdvcmQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3cm9uZycpKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkV29yZHMgPSAoX2MgPSB0aGlzLndvcmRzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZmlsdGVyKCh3b3JkKSA9PiAhd29yZC5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvcnJlY3QnKSk7XG4gICAgICAgICAgICB3cm9uZ1dvcmRzID09PSBudWxsIHx8IHdyb25nV29yZHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdyb25nV29yZHMuZm9yRWFjaCgod29yZCkgPT4gdGhpcy5tb3ZlV29yZCh3b3JkLmdldENvbXBvbmVudCgpKSk7XG4gICAgICAgICAgICAoX2QgPSB0aGlzLnNlbnRlbmNlKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudGV4dEV4YW1wbGUuc3BsaXQoJyAnKS5mb3JFYWNoKCh0ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd29yZEluZGV4ID0gZmlsdGVyZWRXb3JkcyA9PT0gbnVsbCB8fCBmaWx0ZXJlZFdvcmRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaWx0ZXJlZFdvcmRzLmZpbmRJbmRleCgod29yZCkgPT4gd29yZC5nZXRDb21wb25lbnQoKS50ZXh0Q29udGVudCA9PT0gdGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd29yZCA9IGZpbHRlcmVkV29yZHNbd29yZEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAod29yZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVXb3JkKHdvcmQuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdvcmRzID09PSBudWxsIHx8IGZpbHRlcmVkV29yZHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpbHRlcmVkV29yZHMuc3BsaWNlKHdvcmRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbih0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIYW5kbGVyKGUsIHRydWUpO1xuICAgICAgICAgICAgKF9lID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QuYWRkKCdza2lwcGVkJyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQnV0dG9uKFwiSSBkb24ndCBrbm93XCIsIGNhbGxiYWNrLCAnc2tpcCcpO1xuICAgIH1cbiAgICBkcmFnU3RhcnQoZXYpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0YXJnZXQ7XG4gICAgfVxuICAgIGRyYWdvdmVySGFuZGxlcihldiwgc3RyYWlnaHRUYXJnZXQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgICAgICBpZiAoc3RyYWlnaHRUYXJnZXQpXG4gICAgICAgICAgICB0YXJnZXQgPSBzdHJhaWdodFRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdmaWVsZCcgJiYgdGFyZ2V0LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSAoX2EgPSB0aGlzLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhc2V0LndpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgd2lkdGg6ICR7d2lkdGh9cHhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcm9wSGFuZGxlcihldikge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnZmllbGQnKSB7XG4gICAgICAgICAgICBpZiAoKChfYSA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NOYW1lKSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJZCA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVXb3JkKGN1cnJlbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2MgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFwcGVuZFdvcmQodGhpcy5jdXJyZW50LCB0YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAoX2QgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnJlbW92ZVdvcmQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgaWYgKCgoX2UgPSB0aGlzLmN1cnJlbnQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmNsYXNzTmFtZSkgPT09ICdmaWVsZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSB0aGlzLmN1cnJlbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIChfZiA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YucmVtb3ZlV29yZChjdXJyZW50SWQpO1xuICAgICAgICAgICAgICAgIChfZyA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuYXBwZW5kV29yZCh0YXJnZXQsIGN1cnJlbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoX2ggPSB0aGlzLmRhdGFTb3VyY2UpID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5hcHBlbmQoW3RhcmdldF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9qID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5hcHBlbmRXb3JkKHRoaXMuY3VycmVudCwgdGFyZ2V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIChfayA9IHRoaXMuYnV0dG9uKSA9PT0gbnVsbCB8fCBfayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2suc2V0RGlzYWJsZWQoKChfbCA9IHRoaXMuZGF0YVNvdXJjZSkgPT09IG51bGwgfHwgX2wgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9sLmdldENvbXBvbmVudCgpLmNoaWxkTm9kZXMubGVuZ3RoKSAhPT0gMCk7XG4gICAgfVxuICAgIHRvdWNoU3RhcnQoZSkge1xuICAgICAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgdGhpcy50b3VjaGVzID0geyBwYWdlWCwgcGFnZVkgfTtcbiAgICB9XG4gICAgZHJhZ01vdmUoZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHdvcmQgPSBlLnRhcmdldDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gd29yZDtcbiAgICAgICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHdvcmQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB3b3JkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIHdvcmQuc3R5bGUudG9wID0gYCR7cGFnZVkgLSB3b3JkLm9mZnNldEhlaWdodCAvIDJ9cHhgO1xuICAgICAgICB3b3JkLnN0eWxlLmxlZnQgPSBgJHtwYWdlWCAtIHdvcmQub2Zmc2V0V2lkdGggLyAyfXB4YDtcbiAgICAgICAgY29uc3QgZHJvcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYLCBwYWdlWSk7XG4gICAgICAgIGlmICh0aGlzLmRyb3BFbGVtZW50ICE9PSBkcm9wRWxlbWVudClcbiAgICAgICAgICAgIHRoaXMuZHJvcEVsZW1lbnQgPSBkcm9wRWxlbWVudDtcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLmRyb3BFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NOYW1lKSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAgICAgdGhpcy5kcmFnb3ZlckhhbmRsZXIoZSwgdGhpcy5kcm9wRWxlbWVudCk7XG4gICAgICAgICAgICAoX2IgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsZWFyRmllbGRzKHRoaXMuZHJvcEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYWdEcm9wKGUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX20sIF9vLCBfcCwgX3EsIF9yLCBfcywgX3QsIF91O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHdvcmQgPSBlLnRhcmdldDtcbiAgICAgICAgd29yZC5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgICAgICB3b3JkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIHdvcmQuc3R5bGUudG9wID0gYDBgO1xuICAgICAgICB3b3JkLnN0eWxlLmxlZnQgPSBgMGA7XG4gICAgICAgIGNvbnN0IG5ld1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICBjb25zdCBuZXdZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgaWYgKG5ld1ggPT09ICgoX2EgPSB0aGlzLnRvdWNoZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYWdlWCkgJiYgbmV3WSA9PT0gKChfYiA9IHRoaXMudG91Y2hlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhZ2VZKSkge1xuICAgICAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIoZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKF9jID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jbGVhckZpZWxkcygpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoKChfZCA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2xhc3NOYW1lKSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJZCA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgKF9lID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5yZW1vdmVXb3JkKGN1cnJlbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKChfZiA9IHRoaXMuZHJvcEVsZW1lbnQpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jbGFzc05hbWUpID09PSAnZmllbGQnKSB7XG4gICAgICAgICAgICAgICAgKF9nID0gdGhpcy5hbnN3ZXIpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy5hcHBlbmRXb3JkKHRoaXMuY3VycmVudCwgKF9oID0gdGhpcy5kcm9wRWxlbWVudCkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKChfaiA9IHRoaXMuZHJvcEVsZW1lbnQpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5jbGFzc0xpc3QuY29udGFpbnMoJ3dvcmQnKSkgJiZcbiAgICAgICAgICAgICAgICAoKF9sID0gKF9rID0gdGhpcy5kcm9wRWxlbWVudCkgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC5jbGFzc05hbWUpID09PSAnZmllbGQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0aGlzLmRyb3BFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoKChfbSA9IHRoaXMuY3VycmVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX20uY2xhc3NOYW1lKSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSB0aGlzLmN1cnJlbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAoX28gPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX28gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vLmFwcGVuZFdvcmQodGhpcy5kcm9wRWxlbWVudCwgY3VycmVudElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChfcCA9IHRoaXMuZGF0YVNvdXJjZSkgPT09IG51bGwgfHwgX3AgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wLmFwcGVuZChbdGhpcy5kcm9wRWxlbWVudF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX3EgPSB0aGlzLmFuc3dlcikgPT09IG51bGwgfHwgX3EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9xLnJlbW92ZVdvcmQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgIChfciA9IHRoaXMuYW5zd2VyKSA9PT0gbnVsbCB8fCBfciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3IuYXBwZW5kV29yZCh0aGlzLmN1cnJlbnQsIHRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIChfcyA9IHRoaXMuZGF0YVNvdXJjZSkgPT09IG51bGwgfHwgX3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zLmFwcGVuZChbdGhpcy5jdXJyZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKF90ID0gdGhpcy5idXR0b24pID09PSBudWxsIHx8IF90ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdC5zZXREaXNhYmxlZCgoKF91ID0gdGhpcy5kYXRhU291cmNlKSA9PT0gbnVsbCB8fCBfdSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3UuZ2V0Q29tcG9uZW50KCkuY2hpbGROb2Rlcy5sZW5ndGgpICE9PSAwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHsgdGFnOiAnaGVhZGVyJywgY2xhc3NOYW1lOiAnaGVhZGVyJyB9KTtcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ2xvZ2luJztcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbG9nb3V0QnV0dG9uID0gbmV3IEJ1dHRvbignTG9nIG91dCcsIGNsaWNrSGFuZGxlciwgJ2xvZ291dC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgbG9nbyA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2EnLFxuICAgICAgICAgICAgaHJlZjogJyNob21lJyxcbiAgICAgICAgICAgIHRleHQ6ICdSU1MgUHV6emxlJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xvZ28nLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hcHBlbmQoW2xvZ28sIGxvZ291dEJ1dHRvbl0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQVBJL2FwaSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0ICcuL2hpbnRzLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHBhZ2UsIHBhcmVudCkge1xuICAgICAgICBzdXBlcih7IGNsYXNzTmFtZTogJ2hpbnRzJyB9KTtcbiAgICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgICAgdGhpcy5pc1RyYW5zbGF0aW9uID0gdGhpcy51c2VyLmhpbnRzLmlzVHJhbnNsYXRpb247XG4gICAgICAgIHRoaXMuaXNBdWRpbyA9IHRoaXMudXNlci5oaW50cy5pc0F1ZGlvO1xuICAgICAgICB0aGlzLmlzSW1hZ2UgPSB0aGlzLnVzZXIuaGludHMuaXNJbWFnZTtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbkhpbnQgPSBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ2hpbnQgdHJhbnNsYXRpb24nIH0pO1xuICAgICAgICBjb25zdCBhdWRpb0NhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5hdWRpbykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9IaW50LmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9IaW50LnNldERpc2FibGVkKHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmF1ZGlvSGludCA9IG5ldyBCdXR0b24oJycsIGF1ZGlvQ2FsbGJhY2ssICdoaW50IGF1ZGlvJyk7XG4gICAgICAgIHRoaXMuYXVkaW9IaW50LmFwcGVuZChbbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdpbWFnZScgfSldKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbkJ1dHRvbiA9IHRoaXMuY3JlYXRlVHJhbnNsYXRpb25CdXR0b24oKTtcbiAgICAgICAgdGhpcy5hdWRpb0J1dHRvbiA9IHRoaXMuY3JlYXRlQXVkaW9CdXR0b24oKTtcbiAgICAgICAgdGhpcy5pbWFnZUJ1dHRvbiA9IHRoaXMuY3JlYXRlSW1hZ2VCdXR0b24oKTtcbiAgICAgICAgY29uc3QgaGludHMgPSBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ2hpbnRzLWNvbnRlbnQnIH0sIFt0aGlzLnRyYW5zbGF0aW9uSGludCwgdGhpcy5hdWRpb0hpbnRdKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnaGludHMtYnV0dG9ucycgfSwgW1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbkJ1dHRvbixcbiAgICAgICAgICAgIHRoaXMuYXVkaW9CdXR0b24sXG4gICAgICAgICAgICB0aGlzLmltYWdlQnV0dG9uLFxuICAgICAgICBdKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZChbYnV0dG9uc10pO1xuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kKFtoaW50c10pO1xuICAgIH1cbiAgICBzaG93VHJhbnNsYXRpb24oaXNGb3JjZWQgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5pc1RyYW5zbGF0aW9uIHx8IGlzRm9yY2VkKVxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbkhpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbkhpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICB9XG4gICAgc2hvd0F1ZGlvKCkge1xuICAgICAgICBpZiAodGhpcy5pc0F1ZGlvKVxuICAgICAgICAgICAgdGhpcy5hdWRpb0hpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5hdWRpb0hpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICB9XG4gICAgc2hvd0ltYWdlKGlzRm9yY2VkID0gZmFsc2UpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHRoaXMuaXNJbWFnZSB8fCBpc0ZvcmNlZClcbiAgICAgICAgICAgIChfYSA9IHRoaXMud29yZHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKCh3b3JkKSA9PiB3b3JkLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC5hZGQoJ3Nob3duJykpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICAoX2IgPSB0aGlzLndvcmRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgod29yZCkgPT4gd29yZC5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpKTtcbiAgICB9XG4gICAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25IaW50LmdldENvbXBvbmVudCgpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgc2V0QXVkaW8oYXVkaW9QYXRoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpbyhgJHtBcGkucGF0aH0ke2F1ZGlvUGF0aH1gKTtcbiAgICAgICAgKF9hID0gdGhpcy5hdWRpbykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0hpbnQuZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgICAgICAgICAgdGhpcy5hdWRpb0hpbnQuc2V0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0V29yZHMod29yZHMpIHtcbiAgICAgICAgdGhpcy53b3JkcyA9IHdvcmRzO1xuICAgIH1cbiAgICBjcmVhdGVUcmFuc2xhdGlvbkJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzVHJhbnNsYXRpb24gPSAhdGhpcy5pc1RyYW5zbGF0aW9uO1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbkJ1dHRvbi5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUhpbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dUcmFuc2xhdGlvbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uKCcnLCBjYWxsYmFjaywgJ2hpbnQtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmQoW25ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnaW1hZ2UnIH0pXSk7XG4gICAgICAgIGlmICh0aGlzLmlzVHJhbnNsYXRpb24pXG4gICAgICAgICAgICBidXR0b24uZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIGNyZWF0ZUF1ZGlvQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNBdWRpbyA9ICF0aGlzLmlzQXVkaW87XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQnV0dG9uLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5zYXZlSGludHMoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0F1ZGlvKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oJycsIGNhbGxiYWNrLCAnYXVkaW8tYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmQoW25ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnaW1hZ2UnIH0pXSk7XG4gICAgICAgIGlmICh0aGlzLmlzQXVkaW8pXG4gICAgICAgICAgICBidXR0b24uZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIGNyZWF0ZUltYWdlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNJbWFnZSA9ICF0aGlzLmlzSW1hZ2U7XG4gICAgICAgICAgICB0aGlzLmltYWdlQnV0dG9uLmdldENvbXBvbmVudCgpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5zYXZlSGludHMoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ltYWdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oJycsIGNhbGxiYWNrLCAnaW1hZ2UtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmQoW25ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnaW1hZ2UnIH0pXSk7XG4gICAgICAgIGlmICh0aGlzLmlzSW1hZ2UpXG4gICAgICAgICAgICBidXR0b24uZ2V0Q29tcG9uZW50KCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIHNhdmVIaW50cygpIHtcbiAgICAgICAgdGhpcy51c2VyLmhpbnRzLmlzQXVkaW8gPSB0aGlzLmlzQXVkaW87XG4gICAgICAgIHRoaXMudXNlci5oaW50cy5pc0ltYWdlID0gdGhpcy5pc0ltYWdlO1xuICAgICAgICB0aGlzLnVzZXIuaGludHMuaXNUcmFuc2xhdGlvbiA9IHRoaXMuaXNUcmFuc2xhdGlvbjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyB0b0NhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0ICcuL2xvZ2luRm9ybS5jc3MnO1xuY29uc3QgZmllbGRzID0ge1xuICAgIG5hbWU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ25hbWUtbGVuZ3RoJyxcbiAgICAgICAgICAgIHRlc3Q6IC9eLnszLH0kLyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdOYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgc3VybmFtZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VybmFtZS1sZW5ndGgnLFxuICAgICAgICAgICAgdGVzdDogL14uezQsfSQvLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1N1cm5hbWUgbXVzdCBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBlcnJvcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgIHRlc3Q6IC9eLiskLyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIG11c3QgYmUgZmlsbGVkJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N5bWJvbHMnLFxuICAgICAgICAgICAgdGVzdDogL15bYS16QS1aLV0rJC8sXG4gICAgICAgICAgICBtZXNzYWdlOiAnVXNlIG9ubHkgRW5nbGlzaCBhbHBoYWJldCBsZXR0ZXJzIGFuZCB0aGUgaHlwaGVuIChcIiAtIFwiKSBzeW1ib2wnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnZmlyc3QtbGV0dGVyJyxcbiAgICAgICAgICAgIHRlc3Q6IC9eW0EtWl0uKiQvLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBmaXJzdCBsZXR0ZXIgbXVzdCBiZSBpbiB1cHBlcmNhc2UnLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHsgdGFnOiAnZm9ybScsIGNsYXNzTGlzdDogWydsb2dpbi1mb3JtJ10gfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbiA9ICcjJztcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBzdXJuYW1lOiAnJyxcbiAgICAgICAgICAgIGhpbnRzOiB7XG4gICAgICAgICAgICAgICAgaXNBdWRpbzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc1RyYW5zbGF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzSW1hZ2U6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGVkUm91bmRzOiB7fSxcbiAgICAgICAgICAgIGxhc3RSb3VuZDogJycsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXRzID0gW107XG4gICAgICAgIHRoaXMuZmllbGRzID0gW3RoaXMuY3JlYXRlRmllbGQoKSwgdGhpcy5jcmVhdGVGaWVsZCgnc3VybmFtZScpXTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbnN1Ym1pdCA9IHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBjcmVhdGVGaWVsZChuYW1lID0gJ25hbWUnKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IG5ldyBCYXNlQ29tcG9uZW50KCk7XG4gICAgICAgIGNvbnN0IHVsID0gbmV3IEJhc2VDb21wb25lbnQoeyB0YWc6ICd1bCcsIGNsYXNzTmFtZTogJ2Vycm9yLWxpc3QnIH0pO1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogdG9DYXBpdGFsaXplKGAke25hbWV9OmApLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGFiZWwgbGFiZWwtcmVxdWlyZWQnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1bC5nZXRDb21wb25lbnQoKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMuaGFzRXJyb3JzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5zZXREaXNhYmxlZCh0aGlzLmhhc0Vycm9ycyk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrVmFsdWVzKCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBbLi4uZmllbGRzW3RhcmdldC5uYW1lXSwgLi4uZmllbGRzLmVycm9yc107XG4gICAgICAgICAgICB0aGlzLnVzZXJbbmFtZV0gPSB0YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yLnRlc3QudGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9ySXRlbSA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Vycm9yLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnNldERpc2FibGVkKHRoaXMuaGFzRXJyb3JzKTtcbiAgICAgICAgICAgICAgICAgICAgdWwuYXBwZW5kKFtlcnJvckl0ZW1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbG9naW4taW5wdXQnLFxuICAgICAgICAgICAgb25pbnB1dDogaW5wdXRIYW5kbGVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBpZDogbmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW5wdXRzLnB1c2goaW5wdXQuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICBkaXYuYXBwZW5kKFtsYWJlbCwgaW5wdXQsIHVsXSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0Vycm9ycykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ2hvbWUnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCdXR0b24oJ0xvZ2luJywgdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyksICdsb2dpbi1idXR0b24nLCB0aGlzLmhhc0Vycm9ycyk7XG4gICAgfVxuICAgIGNoZWNrVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgZmllbGRzLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzRXJyb3JzID0gIWVycm9yLnRlc3QudGVzdChpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnNldERpc2FibGVkKHRoaXMuaGFzRXJyb3JzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNoZWNrVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuYXBwZW5kKFtcbiAgICAgICAgICAgIG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbG9naW4taGVhZGluZycsXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdMb2dpbicsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB0aGlzLmFwcGVuZChbZmllbGRdKSk7XG4gICAgICAgIHRoaXMuYXBwZW5kKFt0aGlzLnN1Ym1pdEJ1dHRvbl0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHRvQ2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCAnLi9zZWxlY3Rvci5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3IgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihyb3VuZHNDb3VudCwgcm91bmRUcmFuc2l0aW9uLCBjdXJyZW50Um91bmQgPSAxLCBjdXJyZW50TGV2ZWwgPSAxKSB7XG4gICAgICAgIHN1cGVyKHsgY2xhc3NOYW1lOiAnc2VsZWN0b3InIH0pO1xuICAgICAgICB0aGlzLnJvdW5kc0NvdW50ID0gcm91bmRzQ291bnQ7XG4gICAgICAgIHRoaXMuY3VycmVudFJvdW5kID0gY3VycmVudFJvdW5kO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGN1cnJlbnRMZXZlbDtcbiAgICAgICAgdGhpcy5yb3VuZFRyYW5zaXRpb24gPSByb3VuZFRyYW5zaXRpb247XG4gICAgICAgIHRoaXMuYXBwZW5kKFt0aGlzLmNyZWF0ZVNlbGVjdG9yKCksIHRoaXMuY3JlYXRlU2VsZWN0b3IoJ2xldmVscycsIDQ1KV0pO1xuICAgIH1cbiAgICBjcmVhdGVTZWxlY3RvcihuYW1lID0gJ3JvdW5kcycsIGNvdW50ID0gNikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gbmV3IEJhc2VDb21wb25lbnQoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3Itd3JhcHBlcicsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogYCR7dG9DYXBpdGFsaXplKG5hbWUpfTpgLFxuICAgICAgICAgICAgb25jaGFuZ2U6IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBuZXcgQmFzZUNvbXBvbmVudCh7IHRhZzogJ3NlbGVjdCcsIGNsYXNzTmFtZTogYHNlbGVjdCAke25hbWV9YCwgbmFtZSB9KTtcbiAgICAgICAgY29uc3Qgb3B0aW9uc0NvdW50ID0gbmFtZSA9PT0gJ3JvdW5kcycgPyBjb3VudCA6IHRoaXMucm91bmRzQ291bnQ7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkUm91bmRzIH0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgICAgICBjb25zdCByb3VuZHMgPSBjb21wbGV0ZWRSb3VuZHNbdGhpcy5jdXJyZW50Um91bmRdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBvcHRpb25zQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdvcHRpb24nO1xuICAgICAgICAgICAgaWYgKHJvdW5kcykge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnbGV2ZWxzJykge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gcm91bmRzLnJvdW5kcy5pbmNsdWRlcyhpKSA/ICcgY29tcGxldGVkJyA6ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21wbGV0ZWRSb3VuZHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAoKF9hID0gY29tcGxldGVkUm91bmRzW2ldKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eucm91bmRzQ291bnQpID09PSAoKF9iID0gY29tcGxldGVkUm91bmRzW2ldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iucm91bmRzLmxlbmd0aCkgPyAnIGNvbXBsZXRlZCcgOiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmQoW1xuICAgICAgICAgICAgICAgIG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aX1gLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogYCR7aX1gLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogbmFtZSA9PT0gJ3JvdW5kcycgPyBpID09PSB0aGlzLmN1cnJlbnRSb3VuZCA6IGkgPT09IHRoaXMuY3VycmVudExldmVsLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgICAgd3JhcHBlci5hcHBlbmQoW3NlbGVjdG9yXSk7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cbiAgICBjaGFuZ2VIYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQubmFtZSA9PT0gJ3JvdW5kcycpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hhc2ggPSBgZ2FtZS8ke3RhcmdldC52YWx1ZX1fMDFgO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBuZXdIYXNoO1xuICAgICAgICAgICAgdGhpcy5yb3VuZFRyYW5zaXRpb24obmV3SGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdIYXNoID0gYGdhbWUvJHt0aGlzLmN1cnJlbnRSb3VuZH1fJHt0YXJnZXQudmFsdWUucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBuZXdIYXNoO1xuICAgICAgICAgICAgdGhpcy5yb3VuZFRyYW5zaXRpb24obmV3SGFzaCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQXBpIGZyb20gJy4uLy4uL0FQSS9hcGknO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0ICcuL1dvcmRDb21wb25lbnQuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpLCB7IGNsYXNzTmFtZTogJ3dvcmQnLCBkcmFnZ2FibGU6IHRydWUgfSkpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICd3b3JkLWNvbnRlbnQnLCB0ZXh0Q29udGVudDogdGV4dCB9KTtcbiAgICAgICAgY29uc3QgYWZ0ZXIgPSBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ2FmdGVyJyB9KTtcbiAgICAgICAgdGhpcy5hcHBlbmQoW2NvbnRlbnQsIGFmdGVyXSk7XG4gICAgfVxuICAgIHNldFdpZHRoKGltYWdlLCByb3dJbmRleCkge1xuICAgICAgICBjb25zdCB3b3JkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IFt3b3JkLCBhZnRlcl0gPSB0aGlzLmNvbXBvbmVudC5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5zZXREYXRhc2V0KCd3aWR0aCcsIHdvcmRDb21wb25lbnQub2Zmc2V0V2lkdGgudG9TdHJpbmcoKSk7XG4gICAgICAgIHdvcmRDb21wb25lbnQuc3R5bGUud2lkdGggPSBgJHt3b3JkQ29tcG9uZW50LmRhdGFzZXQud2lkdGh9cHhgO1xuICAgICAgICB3b3JkQ29tcG9uZW50LnN0eWxlLmZsZXhHcm93ID0gYDBgO1xuICAgICAgICBjb25zdCBpbWFnZVBhdGggPSBgJHtBcGkucGF0aH1pbWFnZXMvJHtpbWFnZX1gO1xuICAgICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gd29yZENvbXBvbmVudC5vZmZzZXRMZWZ0IC0gMTU7XG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHdvcmRDb21wb25lbnQub2Zmc2V0SGVpZ2h0ICogcm93SW5kZXg7XG4gICAgICAgIHdvcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlUGF0aH0pYDtcbiAgICAgICAgd29yZC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgLSR7b2Zmc2V0TGVmdH1weCAtJHtvZmZzZXRUb3B9cHhgO1xuICAgICAgICBhZnRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VQYXRofSlgO1xuICAgICAgICBhZnRlci5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gYCR7LShvZmZzZXRMZWZ0ICsgd29yZC5vZmZzZXRXaWR0aCl9cHhgO1xuICAgICAgICBhZnRlci5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gYCR7LShvZmZzZXRUb3AgKyB3b3JkQ29tcG9uZW50Lm9mZnNldEhlaWdodCAvIDIgLSBhZnRlci5vZmZzZXRIZWlnaHQgLyAyKX1weGA7XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uY2xpY2sgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbmRyYWdzdGFydCA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub250b3VjaGVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9udG91Y2hzdGFydCA9IG51bGw7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uL0FQSS9hcGknO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HYW1lL0dhbWUnO1xuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0b3IvU2VsZWN0b3InO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vUGFnZSc7XG5pbXBvcnQgJy4vZ2FtZVBhZ2UuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQYWdlIGV4dGVuZHMgUGFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHsgY2xhc3NOYW1lOiAnZ2FtZS1wYWdlJyB9KTtcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQXBpKCk7XG4gICAgICAgIHRoaXMuaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIH1cbiAgICByZW5kZXIoaXNSb3VuZFRyYW5zaXRpb24gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgaWYgKCFpc1JvdW5kVHJhbnNpdGlvbilcbiAgICAgICAgICAgIHN1cGVyLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ2NvbnRlbnQnIH0pO1xuICAgICAgICB0aGlzLmFwcGVuZChbdGhpcy5jb250ZW50XSk7XG4gICAgICAgIHRoaXMuZ2V0Um91bmQoKS50aGVuKChyb3VuZCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5nYW1lKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Q29tcG9uZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnJvdW5kID0gcm91bmQ7XG4gICAgICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLmxldmVsSWQsIHRoaXMucm91bmRJZCwgdGhpcy5jb250ZW50LCB0aGlzLnJvdW5kVHJhbnNpdGlvbi5iaW5kKHRoaXMpLCB0aGlzLnJvdW5kc0NvdW50KTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoW1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICBuZXcgU2VsZWN0b3IodGhpcy5yb3VuZHNDb3VudCwgdGhpcy5yb3VuZFRyYW5zaXRpb24uYmluZCh0aGlzKSwgK3RoaXMubGV2ZWxJZCwgK3RoaXMucm91bmRJZCksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJHYW1lKHRoaXMucm91bmQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbmRlcih0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgc3VwZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub25hbmltYXRpb25lbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByb3VuZFRyYW5zaXRpb24obmV3SGFzaCA9ICdnYW1lLzFfMDEnKSB7XG4gICAgICAgIGlmIChuZXdIYXNoICE9PSB0aGlzLmhhc2gpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgICAgICBjb250ZW50LmNsZWFyKCk7XG4gICAgICAgICAgICBjb250ZW50LmdldENvbXBvbmVudCgpLm9uYW5pbWF0aW9uZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuZ2V0Q29tcG9uZW50KCkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgY29udGVudC5nZXRDb21wb25lbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc2ggPSBuZXdIYXNoO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKHRydWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3VuZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcm91bmRzLCByb3VuZHNDb3VudCB9ID0geWllbGQgdGhpcy5hcGkuZ2V0Um91bmRzKCk7XG4gICAgICAgICAgICB0aGlzLnJvdW5kc0NvdW50ID0gcm91bmRzQ291bnQ7XG4gICAgICAgICAgICBjb25zdCByb3VuZElkID0gdGhpcy5oYXNoLnNwbGl0KCcvJylbMV07XG4gICAgICAgICAgICBbdGhpcy5sZXZlbElkLCB0aGlzLnJvdW5kSWRdID0gcm91bmRJZC5zcGxpdCgnXycpO1xuICAgICAgICAgICAgaWYgKCt0aGlzLmxldmVsSWQgPiA2IHx8ICt0aGlzLmxldmVsSWQgPCAxKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgZ2FtZS8xXzAxYDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc2ggPSBgZ2FtZS8xXzAxYDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSb3VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCt0aGlzLnJvdW5kSWQgPiByb3VuZHNDb3VudCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYGdhbWUvJHsrdGhpcy5sZXZlbElkICsgMX1fMDFgO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzaCA9IGBnYW1lLyR7K3RoaXMubGV2ZWxJZCArIDF9XzAxYDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSb3VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91bmQgPSByb3VuZHMuZmluZCgoZWwpID0+IGVsLmxldmVsRGF0YS5pZCA9PT0gcm91bmRJZCk7XG4gICAgICAgICAgICByZXR1cm4gcm91bmQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL1BhZ2UnO1xuaW1wb3J0ICcuL2hvbWVQYWdlLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7IGNsYXNzTmFtZTogJ2hvbWUnIH0pO1xuICAgICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICAgIGNvbnN0IGgxID0gbmV3IEJhc2VDb21wb25lbnQoeyB0YWc6ICdoMScsIHRleHRDb250ZW50OiAnUlNTIFB1enpsZSBHYW1lJywgY2xhc3NOYW1lOiAnaGVhZGluZycgfSk7XG4gICAgICAgIGNvbnN0IGdyZWV0aW5nID0gbmV3IEJhc2VDb21wb25lbnQoe1xuICAgICAgICAgICAgdGFnOiAncCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdncmVldGluZycsXG4gICAgICAgICAgICBpbm5lckhUTUw6IGBcclxuICAgICAgICAgICAgSGVsbG8sIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7KF9hID0gdGhpcy51c2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZX0gJHsoX2IgPSB0aGlzLnVzZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdXJuYW1lfTwvc3Bhbj4hXHJcbiAgICAgICAgYCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBbXG4gICAgICAgICAgICBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAncCcsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnQ2xpY2sgb24gd29yZHMsIGNvbGxlY3QgcGhyYXNlcy4nLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAncCcsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnV29yZHMgY2FuIGRyYWcgYW5kIGRyb3AuIFNlbGVjdCB0b29sdGlwIGluIHRoZSBtZW51LicsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBsYXN0Um91bmQgfSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBnYW1lLyR7bGFzdFJvdW5kfWA7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oJ1N0YXJ0JywgY2xpY2tIYW5kbGVyLCAnc3RhcnQtYnV0dG9uJyk7XG4gICAgICAgIHJldHVybiBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ2hvbWUtY29udGVudCcgfSwgW2gxLCBncmVldGluZywgLi4udGV4dCwgYnV0dG9uXSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoW3RoaXMuY3JlYXRlQ29udGVudCgpXSk7XG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0vTG9naW5Gb3JtJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL1BhZ2UnO1xuaW1wb3J0ICcuL2xvZ2luUGFnZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgUGFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHsgY2xhc3NOYW1lOiAnbG9naW4tcGFnZScgfSk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgTG9naW5Gb3JtKCk7XG4gICAgICAgIHRoaXMuYXBwZW5kKFtmb3JtXSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0ICcuL3BhZ2UuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgICAgICBjb25zdCBuZXdQYXJhbXMgPSBPYmplY3QuYXNzaWduKHBhcmFtcywgeyBjbGFzc05hbWU6IGAke3BhcmFtcy5jbGFzc05hbWV9IG1haW5gIH0pO1xuICAgICAgICBzdXBlcihuZXdQYXJhbXMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUoJ291dCcpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdpbicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub25hbmltYXRpb25lbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbicpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQub25hbmltYXRpb25lbmQgPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQVBJL2FwaSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9QYWdlJztcbmltcG9ydCAnLi9zdGF0aXN0aWMuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpYyBleHRlbmRzIFBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7IGNsYXNzTmFtZTogJ3N0YXRpc3RpYycgfSk7XG4gICAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRpc3RpYycpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGlzdGljJykpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdzdGF0aXN0aWMtY29udGVudCcgfSk7XG4gICAgICAgIGNvbnN0IGtub3duV29yZHMgPSB0aGlzLmRhdGEud29yZHMuZmlsdGVyKCh3b3JkKSA9PiAhd29yZC5pc1NraXBwZWQpO1xuICAgICAgICBjb25zdCB1bmtub3duV29yZHMgPSB0aGlzLmRhdGEud29yZHMuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmlzU2tpcHBlZCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oJ0NvbnRpbnVlJywgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgZ2FtZS8ke0pTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkubGFzdFJvdW5kfWA7XG4gICAgICAgIH0sICdjb250aW51ZScpO1xuICAgICAgICBjb250ZW50LmFwcGVuZChbdGhpcy5jcmVhdGVJbWFnZSgpLCB0aGlzLmNyZWF0ZUxpc3Qoa25vd25Xb3JkcyksIHRoaXMuY3JlYXRlTGlzdCh1bmtub3duV29yZHMsIHRydWUpLCBidXR0b25dKTtcbiAgICAgICAgdGhpcy5hcHBlbmQoW2NvbnRlbnRdKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XG4gICAgfVxuICAgIGNyZWF0ZUxpc3Qod29yZHMsIGlzU2tpcHBlZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbmV3IEJhc2VDb21wb25lbnQoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGlzdC10aXRsZScsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogaXNTa2lwcGVkID8gXCJJIGRvbid0IGtub3dcIiA6ICdJIGtub3cnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdWwgPSBuZXcgQmFzZUNvbXBvbmVudCh7IHRhZzogJ3VsJywgY2xhc3NOYW1lOiAnd29yZHMnIH0pO1xuICAgICAgICB3b3Jkcy5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgJHtBcGkucGF0aH0ke3dvcmQuYXVkaW9FeGFtcGxlfWApO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvbignJywgKCkgPT4geyB9LCAnYXVkaW8nKTtcbiAgICAgICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoKS5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldERpc2FibGVkKHRydWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoKS5vbmNsaWNrID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBidXR0b24uYXBwZW5kKFtuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ2ltYWdlJyB9KV0pO1xuICAgICAgICAgICAgY29uc3Qgc2VudGVuY2UgPSBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ3NlbnRlbmNlJywgdGV4dENvbnRlbnQ6IHdvcmQudGV4dEV4YW1wbGUgfSk7XG4gICAgICAgICAgICBjb25zdCBsaSA9IG5ldyBCYXNlQ29tcG9uZW50KHsgdGFnOiAnbGknLCBjbGFzc05hbWU6ICdlbGVtZW50JyB9LCBbYnV0dG9uLCBzZW50ZW5jZV0pO1xuICAgICAgICAgICAgdWwuYXBwZW5kKFtsaV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnbGlzdC13cmFwcGVyJyB9LCBbdGl0bGUsIHVsXSk7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cbiAgICBjcmVhdGVJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGAke3RoaXMuZGF0YS5sZXZlbERhdGEubmFtZX0gLSAke3RoaXMuZGF0YS5sZXZlbERhdGEuYXV0aG9yfSAoJHt0aGlzLmRhdGEubGV2ZWxEYXRhLnllYXJ9KWA7XG4gICAgICAgIGNvbnN0IGluZm9ybWF0aW9uID0gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdhcnR3b3JrLWluZm9ybWF0aW9uJywgdGV4dENvbnRlbnQ6IHRleHQgfSk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEJhc2VDb21wb25lbnQoe1xuICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FydHdvcmsnLFxuICAgICAgICAgICAgc3JjOiBgJHtBcGkucGF0aH1pbWFnZXMvJHt0aGlzLmRhdGEubGV2ZWxEYXRhLmN1dFNyY31gLFxuICAgICAgICAgICAgYWx0OiB0ZXh0LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAnYXJ0d29yay13cmFwcGVyJyB9LCBbaW1hZ2UsIGluZm9ybWF0aW9uXSk7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0b0NhcGl0YWxpemUoc3RyKSB7XG4gICAgY29uc3QgbGFzdCA9IHN0ci5zbGljZSgxKTtcbiAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBsYXN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbWl6ZUFycmF5KGFycikge1xuICAgIHJldHVybiBhcnIuc29ydCgoKSA9PiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvdW5kSWQobGV2ZWxJZCwgcm91bmRJZCkge1xuICAgIHJldHVybiBbbGV2ZWxJZCwgU3RyaW5nKHJvdW5kSWQpLnBhZFN0YXJ0KDIsICcwJyldLmpvaW4oJ18nKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vQXBwJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=