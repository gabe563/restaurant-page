/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/bitsumis-webfont.woff2 */ "./src/fonts/bitsumis-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/bitsumis-webfont.woff */ "./src/fonts/bitsumis-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.jpeg */ "./src/assets/bg.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Orbitron&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rajdhani&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Bitsumis';\n  /* src: url('../fonts/BITSUMIS.ttf') format('ttf'); */\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-color: rgba(17, 24, 39, 0.9);\n  --st-color: #fafaf9;\n  --nd-color: black;\n\n  --st-font: 'Bitsumis';\n  --nd-font: 'Orbitron';\n  --rd-font: 'Rajdhani';\n}\n\nbody::after {\n  content: '';\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  opacity: 70%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 665px;\n}\n\n.snack1 {\n  height: 324px;\n  width: 488px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100px;\n  background-color: var(--header-color);\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.title-div p {\n  font-family: var(--st-font);\n  font-size: 35px;\n  color: var(--st-color);\n  cursor: pointer;\n}\n\n.nut-icon {\n  color: var(--st-color);\n  cursor: pointer;\n}\n\n.pages {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 70px;\n  width: 635px;\n  height: 50px;\n  font-size: 0;\n  list-style-type: none;\n  font-family: var(--nd-font);\n  color: var(--st-color);\n  position: relative;\n}\n\n.pages li {\n  font-size: 15px;\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  z-index: 1;\n}\n\n.pages .current-box {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 140px;\n  height: 100%;\n  border: 4px solid var(--st-color);\n  border-radius: 24px;\n  z-index: 0;\n  transition: all 0.5s ease 0s;\n}\n\n.pages .start,\nli:nth-child(4).current ~ .current-box {\n  width: 120px;\n  left: 512px;\n}\n\n.pages .start,\nli:nth-child(3).current ~ .current-box {\n  left: 343px;\n}\n\n.pages .start,\nli:nth-child(2).current ~ .current-box {\n  left: 173px;\n}\n\n.pages .start,\nli:nth-child(1).current ~ .current-box {\n  width: 120px;\n  left: 3px;\n}\n\n.pages li:nth-child(1) {\n  width: 100px;\n}\n\n.pages li:nth-child(2) {\n  width: 100px;\n}\n\n.pages li:nth-child(3) {\n  width: 100px;\n}\n\n.pages li:nth-child(4) {\n  width: 100px;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 92vw;\n  height: 574px;\n  background-color: rgba(250, 250, 249, 0.9);\n  border-radius: 50px;\n  animation: fadeIn 1s;\n}\n\n.header-home {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  position: relative;\n}\n\n.header-home p {\n  margin-top: 10px;\n  font-size: 45px;\n  font-weight: 900;\n  -webkit-text-stroke: 1px black;\n}\n\n.header-home,\n.home-info {\n  font-family: var(--rd-font);\n}\n\n.home-info {\n  display: flex;\n  gap: 34px;\n  margin-top: 45px;\n  margin-left: 144px;\n  margin-right: 144px;\n}\n\n.home-txt {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 50px;\n  font-size: 33px;\n  font-weight: 800;\n}\n\n.home-txt hr {\n  display: flex;\n  align-items: center;\n  height: 4px;\n  margin-left: -10px;\n  width: 465px;\n  border: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: white;\n}\n\n.home-txt hr::before {\n  border-radius: 50%;\n  content: '';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  background-color: white;\n}\n\n.snack1 {\n  border-radius: 74px;\n}\n\n.info-cont2 {\n  max-width: 400px;\n}\n\n.menu-content {\n  display: grid;\n  place-content: center;\n  min-width: 574px;\n  width: 92vw;\n  height: 574px;\n  border-radius: 50px;\n  background-color: rgba(250, 250, 249, 0.9);\n  animation: fadeIn 1s;\n}\n\n.cake img {\n  border-radius: 35px;\n  width: 470px;\n  height: 400px;\n}\n\n.img-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n  padding: 20px;\n  width: 550px;\n  height: 140rem;\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n  height: 500px;\n  width: 92vw;\n  overflow: auto;\n}\n\n.cake {\n  overflow: hidden;\n  flex-direction: row-reverse;\n  display: flex;\n  height: 400px;\n  width: 470px;\n  transition: all 0.2s ease;\n}\n\n.cake:hover,\n.about-img img:hover {\n  transform: scale(1.1, 1.1);\n}\n\n.cake:active {\n  transform: scale(1, 1);\n}\n\n.tag {\n  font-size: 10px;\n  margin-top: 35px;\n  height: 45px;\n  min-width: 220px;\n  width: 200px;\n  color: white;\n  border-top: 26px solid rgba(251, 113, 133, 0.9);\n  border-bottom: 26px solid rgba(251, 113, 133, 0.9);\n  border-right: 14px solid transparent;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  transition: 0.2s;\n  font-family: var(--nd-font);\n  position: relative;\n}\n\n.tag p {\n  margin-left: 20px;\n}\n\n.cake:hover .tag {\n  transform: translateX(100%);\n}\n\n.home-info .cake {\n  margin-left: 30px;\n  width: 488px;\n  height: 324px;\n}\n\n.home-info .cake p {\n  margin-left: 30px;\n}\n\n.home-info .cake img {\n  width: 488px;\n  height: 324px;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  width: 92vw;\n  height: 574px;\n  padding: 100px;\n  background-color: rgba(250, 250, 249, 0.9);\n  border-radius: 50px;\n  animation: fadeIn 1s;\n}\n\n.about-txt {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 40px;\n  font-family: var(--rd-font);\n}\n\n.about-txt p:nth-child(1) {\n  font-weight: bolder;\n  -webkit-text-stroke: 1px black;\n  font-size: 45px;\n  position: relative;\n}\n\n.about-txt p:nth-child(1)::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  margin-left: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.about-txt p:nth-child(1)::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  margin-right: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.about-txt p:nth-child(2) {\n  font-size: 30px;\n  text-align: center;\n}\n\n.about-img {\n  display: flex;\n  gap: 120px;\n}\n\n.about-img img {\n  border-radius: 30px;\n  height: 176px;\n  transition: all 0.2s ease;\n}\n\n.about-img img:nth-child(3) {\n  width: 250px;\n  height: 176px;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');\n\n@font-face {\n  font-family: 'Bitsumis';\n  /* src: url('../fonts/BITSUMIS.ttf') format('ttf'); */\n  src: url('../fonts/bitsumis-webfont.woff2') format('woff2'),\n    url('../fonts/bitsumis-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-color: rgba(17, 24, 39, 0.9);\n  --st-color: #fafaf9;\n  --nd-color: black;\n\n  --st-font: 'Bitsumis';\n  --nd-font: 'Orbitron';\n  --rd-font: 'Rajdhani';\n}\n\nbody::after {\n  content: '';\n  background: url(../assets/bg.jpeg);\n  opacity: 70%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 665px;\n}\n\n.snack1 {\n  height: 324px;\n  width: 488px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100px;\n  background-color: var(--header-color);\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.title-div p {\n  font-family: var(--st-font);\n  font-size: 35px;\n  color: var(--st-color);\n  cursor: pointer;\n}\n\n.nut-icon {\n  color: var(--st-color);\n  cursor: pointer;\n}\n\n.pages {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 70px;\n  width: 635px;\n  height: 50px;\n  font-size: 0;\n  list-style-type: none;\n  font-family: var(--nd-font);\n  color: var(--st-color);\n  position: relative;\n}\n\n.pages li {\n  font-size: 15px;\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  z-index: 1;\n}\n\n.pages .current-box {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 140px;\n  height: 100%;\n  border: 4px solid var(--st-color);\n  border-radius: 24px;\n  z-index: 0;\n  transition: all 0.5s ease 0s;\n}\n\n.pages .start,\nli:nth-child(4).current ~ .current-box {\n  width: 120px;\n  left: 512px;\n}\n\n.pages .start,\nli:nth-child(3).current ~ .current-box {\n  left: 343px;\n}\n\n.pages .start,\nli:nth-child(2).current ~ .current-box {\n  left: 173px;\n}\n\n.pages .start,\nli:nth-child(1).current ~ .current-box {\n  width: 120px;\n  left: 3px;\n}\n\n.pages li:nth-child(1) {\n  width: 100px;\n}\n\n.pages li:nth-child(2) {\n  width: 100px;\n}\n\n.pages li:nth-child(3) {\n  width: 100px;\n}\n\n.pages li:nth-child(4) {\n  width: 100px;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 92vw;\n  height: 574px;\n  background-color: rgba(250, 250, 249, 0.9);\n  border-radius: 50px;\n  animation: fadeIn 1s;\n}\n\n.header-home {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  position: relative;\n}\n\n.header-home p {\n  margin-top: 10px;\n  font-size: 45px;\n  font-weight: 900;\n  -webkit-text-stroke: 1px black;\n}\n\n.header-home,\n.home-info {\n  font-family: var(--rd-font);\n}\n\n.home-info {\n  display: flex;\n  gap: 34px;\n  margin-top: 45px;\n  margin-left: 144px;\n  margin-right: 144px;\n}\n\n.home-txt {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 50px;\n  font-size: 33px;\n  font-weight: 800;\n}\n\n.home-txt hr {\n  display: flex;\n  align-items: center;\n  height: 4px;\n  margin-left: -10px;\n  width: 465px;\n  border: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: white;\n}\n\n.home-txt hr::before {\n  border-radius: 50%;\n  content: '';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  background-color: white;\n}\n\n.snack1 {\n  border-radius: 74px;\n}\n\n.info-cont2 {\n  max-width: 400px;\n}\n\n.menu-content {\n  display: grid;\n  place-content: center;\n  min-width: 574px;\n  width: 92vw;\n  height: 574px;\n  border-radius: 50px;\n  background-color: rgba(250, 250, 249, 0.9);\n  animation: fadeIn 1s;\n}\n\n.cake img {\n  border-radius: 35px;\n  width: 470px;\n  height: 400px;\n}\n\n.img-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n  padding: 20px;\n  width: 550px;\n  height: 140rem;\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n  height: 500px;\n  width: 92vw;\n  overflow: auto;\n}\n\n.cake {\n  overflow: hidden;\n  flex-direction: row-reverse;\n  display: flex;\n  height: 400px;\n  width: 470px;\n  transition: all 0.2s ease;\n}\n\n.cake:hover,\n.about-img img:hover {\n  transform: scale(1.1, 1.1);\n}\n\n.cake:active {\n  transform: scale(1, 1);\n}\n\n.tag {\n  font-size: 10px;\n  margin-top: 35px;\n  height: 45px;\n  min-width: 220px;\n  width: 200px;\n  color: white;\n  border-top: 26px solid rgba(251, 113, 133, 0.9);\n  border-bottom: 26px solid rgba(251, 113, 133, 0.9);\n  border-right: 14px solid transparent;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  transition: 0.2s;\n  font-family: var(--nd-font);\n  position: relative;\n}\n\n.tag p {\n  margin-left: 20px;\n}\n\n.cake:hover .tag {\n  transform: translateX(100%);\n}\n\n.home-info .cake {\n  margin-left: 30px;\n  width: 488px;\n  height: 324px;\n}\n\n.home-info .cake p {\n  margin-left: 30px;\n}\n\n.home-info .cake img {\n  width: 488px;\n  height: 324px;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  width: 92vw;\n  height: 574px;\n  padding: 100px;\n  background-color: rgba(250, 250, 249, 0.9);\n  border-radius: 50px;\n  animation: fadeIn 1s;\n}\n\n.about-txt {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 40px;\n  font-family: var(--rd-font);\n}\n\n.about-txt p:nth-child(1) {\n  font-weight: bolder;\n  -webkit-text-stroke: 1px black;\n  font-size: 45px;\n  position: relative;\n}\n\n.about-txt p:nth-child(1)::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  margin-left: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.about-txt p:nth-child(1)::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  margin-right: -75px;\n  bottom: 50%;\n  height: 2px;\n  width: 45px;\n  background-color: var(--nd-color);\n}\n\n.about-txt p:nth-child(2) {\n  font-size: 30px;\n  text-align: center;\n}\n\n.about-img {\n  display: flex;\n  gap: 120px;\n}\n\n.about-img img {\n  border-radius: 30px;\n  height: 176px;\n  transition: all 0.2s ease;\n}\n\n.about-img img:nth-child(3) {\n  width: 250px;\n  height: 176px;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAbout)
/* harmony export */ });
/* harmony import */ var _assets_about1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/about1.jpeg */ "./src/assets/about1.jpeg");
/* harmony import */ var _assets_about2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/about2.jpeg */ "./src/assets/about2.jpeg");
/* harmony import */ var _assets_about3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/about3.jpeg */ "./src/assets/about3.jpeg");




function aboutContent() {
  const aboutCont = document.createElement('div');
  aboutCont.classList.add('about-content');

  const aboutTxtDiv = document.createElement('div');
  aboutTxtDiv.classList.add('about-txt');

  const aboutImgDiv = document.createElement('div');
  aboutImgDiv.classList.add('about-img');

  aboutCont.appendChild(aboutTxtDiv);

  aboutTxtDiv.appendChild(createParagraph('ABOUT US'));
  aboutTxtDiv.appendChild(
    createParagraph(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempor aliquam id est. Fringilla tortor tristique tincidunt at interdum tristique. Posuere vulputate amet sit montes, ut id ullamcorper.'
    )
  );

  aboutCont.appendChild(aboutImgDiv);

  aboutImgDiv.appendChild(createAboutImg(_assets_about1_jpeg__WEBPACK_IMPORTED_MODULE_0__));
  aboutImgDiv.appendChild(createAboutImg(_assets_about2_jpeg__WEBPACK_IMPORTED_MODULE_1__));
  aboutImgDiv.appendChild(createAboutImg(_assets_about3_jpeg__WEBPACK_IMPORTED_MODULE_2__));

  return aboutCont;
}

function createParagraph(txt) {
  const p = document.createElement('p');
  p.textContent = txt;

  return p;
}

function createAboutImg(imgName) {
  const img = document.createElement('img');
  img.src = imgName;

  return img;
}

function getAbout() {
  const infoCont = document.querySelector('.info');
  infoCont.appendChild(aboutContent());
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHome)
/* harmony export */ });
/* harmony import */ var _assets_snack1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/snack1.jpeg */ "./src/assets/snack1.jpeg");


function homeContent() {
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('home-content');

  const headerHomeContent = document.createElement('div');
  headerHomeContent.classList.add('header-home');

  const homeHeaderTxt = document.createElement('p');
  homeHeaderTxt.textContent = 'ENJOY THE BEST CAKES MADE FOR';

  const homeHeaderIcon = document.createElement('iconify-icon');
  homeHeaderIcon.setAttribute('icon', 'fluent-emoji:robot');
  homeHeaderIcon.setAttribute('width', '93');
  homeHeaderIcon.setAttribute('height', '90');

  const homeInfoContainer = document.createElement('div');
  homeInfoContainer.classList.add('home-info');

  const cakeDiv = document.createElement('div');
  cakeDiv.classList.add('cake');

  const tagDiv = document.createElement('div');
  tagDiv.classList.add('tag');

  const tagP = document.createElement('p');
  tagP.textContent = 'Scraps Muffins $ 4.99';

  const homeInfoImage = document.createElement('img');
  homeInfoImage.src = _assets_snack1_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  homeInfoImage.setAttribute('draggable', 'false');
  homeInfoImage.classList.add('snack1');

  const homeInfoTxtCont = document.createElement('div');
  homeInfoTxtCont.classList.add('home-txt');

  const InfoTxtCont = document.createElement('div');
  InfoTxtCont.classList.add('info-cont1');

  const homeInfoTxt1 = document.createElement('p');
  homeInfoTxt1.textContent = 'Best Quality For The Lowest Price.';

  const homeInfoLine = document.createElement('hr');

  const InfoTxtCont2 = document.createElement('div');
  InfoTxtCont2.classList.add('info-cont2');

  const homeInfoTxt2 = document.createElement('p');
  homeInfoTxt2.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate elit eu neque tellus scelerisque odio.';

  homeInfoContainer.appendChild(homeInfoTxtCont);
  homeInfoContainer.appendChild(cakeDiv);

  cakeDiv.appendChild(homeInfoImage);
  cakeDiv.appendChild(tagDiv);
  tagDiv.appendChild(tagP);

  homeInfoTxtCont.appendChild(InfoTxtCont);
  homeInfoTxtCont.appendChild(InfoTxtCont2);

  InfoTxtCont.appendChild(homeInfoTxt1);
  InfoTxtCont.appendChild(homeInfoLine);

  InfoTxtCont2.appendChild(homeInfoTxt2);

  contentDiv.appendChild(headerHomeContent);
  contentDiv.appendChild(homeInfoContainer);

  headerHomeContent.appendChild(homeHeaderTxt);

  headerHomeContent.appendChild(homeHeaderIcon);

  return contentDiv;
}

function getHome() {
  const infoCont = document.querySelector('.info');
  infoCont.appendChild(homeContent());
}


/***/ }),

/***/ "./src/loadWebsite.js":
/*!****************************!*\
  !*** ./src/loadWebsite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadUp)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_3__);





// Create header content
function header() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title-div');

  const nutIcon = document.createElement('iconify-icon');
  nutIcon.setAttribute('icon', 'bi:nut-fill');
  nutIcon.setAttribute('width', '48');
  nutIcon.setAttribute('height', '45');
  nutIcon.classList.add('nut-icon');

  const title = document.createElement('p');
  title.textContent = `ROBOT\'S CAKES`;

  const pages = document.createElement('ul');
  pages.classList.add('pages');

  const home = document.createElement('li');
  home.textContent = 'Home';
  home.setAttribute('id', 'homeBtn');
  home.classList.add('current');

  const menu = document.createElement('li');
  menu.textContent = 'Menu';
  menu.setAttribute('id', 'menuBtn');

  const about = document.createElement('li');
  about.textContent = 'About';
  about.setAttribute('id', 'aboutBtn');

  const contact = document.createElement('li');
  contact.textContent = 'Contact';
  contact.setAttribute('id', 'contactBtn');

  const currBox = document.createElement('div');
  currBox.classList.add('current-box');
  currBox.classList.add('start');

  pages.appendChild(home);
  pages.appendChild(menu);
  pages.appendChild(about);
  pages.appendChild(contact);

  pages.appendChild(currBox);

  titleDiv.appendChild(nutIcon);
  titleDiv.appendChild(title);

  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(pages);

  return headerDiv;
}

// Create info div
function mainContent() {
  const infoCont = document.createElement('div');
  infoCont.classList.add('info');
  infoCont.classList.add('home');

  return infoCont;
}

// Add current class to btns on click
function changeBetweenPages() {
  const headerTxt = document.querySelector('.title-div p');
  const nutIcon = document.querySelector('.nut-icon');

  const HomeBtn = document.getElementById('homeBtn');
  const MenuBtn = document.getElementById('menuBtn');
  const AboutBtn = document.getElementById('aboutBtn');
  const ContactBtn = document.getElementById('contactBtn');

  headerTxt.addEventListener('click', () => {
    addCurrent(HomeBtn);
    removeCurrent(ContactBtn);
    removeCurrent(AboutBtn);
    removeCurrent(MenuBtn);
  });

  nutIcon.addEventListener('click', () => {
    addCurrent(HomeBtn);
    removeCurrent(ContactBtn);
    removeCurrent(AboutBtn);
    removeCurrent(MenuBtn);
  });

  HomeBtn.addEventListener('click', () => {
    addCurrent(HomeBtn);
    removeCurrent(ContactBtn);
    removeCurrent(AboutBtn);
    removeCurrent(MenuBtn);
  });

  MenuBtn.addEventListener('click', () => {
    addCurrent(MenuBtn);
    removeCurrent(HomeBtn);
    removeCurrent(AboutBtn);
    removeCurrent(ContactBtn);
  });

  AboutBtn.addEventListener('click', () => {
    addCurrent(AboutBtn);
    removeCurrent(HomeBtn);
    removeCurrent(MenuBtn);
    removeCurrent(ContactBtn);
  });

  ContactBtn.addEventListener('click', () => {
    addCurrent(ContactBtn);
    removeCurrent(HomeBtn);
    removeCurrent(AboutBtn);
    removeCurrent(MenuBtn);
  });

  function addCurrent(el) {
    el.classList.add('current');
    return el;
  }

  function removeCurrent(el) {
    el.classList.remove('current');
  }
}

// Add info div a class
function addInfoClass() {
  const infoCont = document.querySelector('.info');

  const headerTxt = document.querySelector('.title-div p');
  const nutIcon = document.querySelector('.nut-icon');

  const HomeBtn = document.getElementById('homeBtn');
  const MenuBtn = document.getElementById('menuBtn');
  const AboutBtn = document.getElementById('aboutBtn');
  const ContactBtn = document.getElementById('contactBtn');

  headerTxt.addEventListener('click', () => {
    infoCont.classList.add('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('about');
    infoCont.classList.remove('contact');
  });

  nutIcon.addEventListener('click', () => {
    infoCont.classList.add('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('about');
    infoCont.classList.remove('contact');
  });

  HomeBtn.addEventListener('click', () => {
    infoCont.classList.add('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('about');
    infoCont.classList.remove('contact');
  });

  MenuBtn.addEventListener('click', () => {
    infoCont.classList.add('menu');
    infoCont.classList.remove('home');
    infoCont.classList.remove('about');
    infoCont.classList.remove('contact');
  });

  AboutBtn.addEventListener('click', () => {
    infoCont.classList.add('about');
    infoCont.classList.remove('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('contact');
  });

  ContactBtn.addEventListener('click', () => {
    infoCont.classList.add('contact');
    infoCont.classList.remove('home');
    infoCont.classList.remove('menu');
    infoCont.classList.remove('about');
  });
}

// Change content on click
function changeContent() {
  const infoCont = document.querySelector('.info');

  const headerTxt = document.querySelector('.title-div p');
  const nutIcon = document.querySelector('.nut-icon');

  const HomeBtn = document.getElementById('homeBtn');
  const MenuBtn = document.getElementById('menuBtn');
  const AboutBtn = document.getElementById('aboutBtn');
  const ContactBtn = document.getElementById('contactBtn');

  headerTxt.addEventListener('click', () => {
    if (infoCont.classList.contains('home')) {
      if (HomeBtn.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
  });

  nutIcon.addEventListener('click', () => {
    if (infoCont.classList.contains('home')) {
      if (HomeBtn.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
  });

  HomeBtn.addEventListener('click', e => {
    if (infoCont.classList.contains('home')) {
      if (e.target.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
  });

  MenuBtn.addEventListener('click', e => {
    if (infoCont.classList.contains('menu')) {
      if (e.target.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  });

  AboutBtn.addEventListener('click', e => {
    if (infoCont.classList.contains('about')) {
      if (e.target.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  });

  ContactBtn.addEventListener('click', e => {
    if (infoCont.classList.contains('contact')) {
      if (e.target.classList.contains('current')) return;
      changeBetweenPages();
      infoCont.textContent = '';
      _contact__WEBPACK_IMPORTED_MODULE_3___default()();
    }
  });
}

// Load all the content
function loadUp() {
  const contentDiv = document.getElementById('content');

  contentDiv.appendChild(header());
  contentDiv.appendChild(mainContent());
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  addInfoClass();
  changeContent();
  changeBetweenPages();
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMenu)
/* harmony export */ });
/* harmony import */ var _assets_food1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/food1.jpeg */ "./src/assets/food1.jpeg");
/* harmony import */ var _assets_food2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/food2.jpeg */ "./src/assets/food2.jpeg");
/* harmony import */ var _assets_food3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/food3.jpeg */ "./src/assets/food3.jpeg");
/* harmony import */ var _assets_food4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/food4.jpeg */ "./src/assets/food4.jpeg");
/* harmony import */ var _assets_food5_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/food5.jpeg */ "./src/assets/food5.jpeg");






function menuContent() {
  const menuCont = document.createElement('div');
  menuCont.classList.add('menu-content');

  const scrollBar = document.createElement('div');
  scrollBar.classList.add('scrollbar');

  const imagesCont = document.createElement('div');
  imagesCont.classList.add('img-cont');

  imagesCont.appendChild(createDivCake(_assets_food1_jpeg__WEBPACK_IMPORTED_MODULE_0__, 'Tools & Screws Cake $ 50.99'));
  imagesCont.appendChild(createDivCake(_assets_food2_jpeg__WEBPACK_IMPORTED_MODULE_1__, 'Formula 1 Cake Set $ 29.99'));
  imagesCont.appendChild(createDivCake(_assets_food3_jpeg__WEBPACK_IMPORTED_MODULE_2__, 'Electric Tools Cake $ 15.50'));
  imagesCont.appendChild(createDivCake(_assets_food4_jpeg__WEBPACK_IMPORTED_MODULE_3__, 'Rusty Tools Cake $ 45.05'));
  imagesCont.appendChild(createDivCake(_assets_food5_jpeg__WEBPACK_IMPORTED_MODULE_4__, 'All In One Box Cake $ 70.00'));

  scrollBar.appendChild(imagesCont);

  menuCont.appendChild(scrollBar);

  return menuCont;
}

function createDivCake(cake, txt) {
  const div = document.createElement('div');
  div.classList.add('cake');

  const div2 = document.createElement('div');
  div2.classList.add('img-box');

  div.appendChild(div2);

  div2.appendChild(createCake(cake));

  div.appendChild(createTag(txt));

  return div;
}

function createCake(cake) {
  const img = document.createElement('img');
  img.setAttribute('draggable', 'false');
  img.src = cake;

  return img;
}

function createTag(txt) {
  const div = document.createElement('div');
  div.classList.add('tag');

  div.appendChild(createParagraph(txt));

  return div;
}

function createParagraph(txt) {
  const p = document.createElement('p');
  p.textContent = txt;

  return p;
}

function getMenu() {
  const infoCont = document.querySelector('.info');
  infoCont.appendChild(menuContent());
}


/***/ }),

/***/ "./src/assets/about1.jpeg":
/*!********************************!*\
  !*** ./src/assets/about1.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "about1.jpeg";

/***/ }),

/***/ "./src/assets/about2.jpeg":
/*!********************************!*\
  !*** ./src/assets/about2.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "about2.jpeg";

/***/ }),

/***/ "./src/assets/about3.jpeg":
/*!********************************!*\
  !*** ./src/assets/about3.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "about3.jpeg";

/***/ }),

/***/ "./src/assets/bg.jpeg":
/*!****************************!*\
  !*** ./src/assets/bg.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg.jpeg";

/***/ }),

/***/ "./src/assets/food1.jpeg":
/*!*******************************!*\
  !*** ./src/assets/food1.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "food1.jpeg";

/***/ }),

/***/ "./src/assets/food2.jpeg":
/*!*******************************!*\
  !*** ./src/assets/food2.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "food2.jpeg";

/***/ }),

/***/ "./src/assets/food3.jpeg":
/*!*******************************!*\
  !*** ./src/assets/food3.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "food3.jpeg";

/***/ }),

/***/ "./src/assets/food4.jpeg":
/*!*******************************!*\
  !*** ./src/assets/food4.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "food4.jpeg";

/***/ }),

/***/ "./src/assets/food5.jpeg":
/*!*******************************!*\
  !*** ./src/assets/food5.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "food5.jpeg";

/***/ }),

/***/ "./src/assets/snack1.jpeg":
/*!********************************!*\
  !*** ./src/assets/snack1.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "snack1.jpeg";

/***/ }),

/***/ "./src/fonts/bitsumis-webfont.woff":
/*!*****************************************!*\
  !*** ./src/fonts/bitsumis-webfont.woff ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bitsumis-webfont.woff";

/***/ }),

/***/ "./src/fonts/bitsumis-webfont.woff2":
/*!******************************************!*\
  !*** ./src/fonts/bitsumis-webfont.woff2 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bitsumis-webfont.woff2";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _loadWebsite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadWebsite */ "./src/loadWebsite.js");



(0,_loadWebsite__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map