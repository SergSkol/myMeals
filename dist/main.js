"use strict";
(self["webpackChunkJS_capstone_project"] = self["webpackChunkJS_capstone_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  color: black;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-top: 1em;\r\n}\r\n\r\nheader .logo {\r\n  border: 2px solid black;\r\n  border-radius: 5em;\r\n  height: 4.2em;\r\n  width: 4.2em;\r\n  margin: 0 1em 0 1em;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1.2em;\r\n  margin-top: 0.55em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: #d57d1f;\r\n}\r\n\r\nheader .logo h1 span::before {\r\n  content: \"\\a\";\r\n  white-space: pre;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  border: 3px solid black;\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  place-content: center;\r\n  margin: 10em auto;\r\n  width: 20em;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 20% 25%;\r\n  margin: 0 0 15em 0;\r\n  width: 20em;\r\n  height: 15em;\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 17em;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: center;\r\n  margin-left: 4em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.div-heart {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart {\r\n  margin-right: -1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:hover {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:active {\r\n  color: red;\r\n}\r\n\r\n.meal .div-like .div-heart label {\r\n  font-size: 1em;\r\n}\r\n\r\n.meal .div-like .div-heart label::before {\r\n  /* content: \"\\a\";\r\n  white-space: pre; */\r\n}\r\n\r\n.meal .div-like .div-heart .fa-comment {\r\n  margin-right: -1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.meal img {\r\n  width: 15em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 2px 2px 2px black;\r\n  width: 10em;\r\n  height: 2.5em;\r\n  font-weight: bold;\r\n  place-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n}\r\n\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.meal-popup-div-img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n}\r\n\r\n.cat-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div-img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.cont-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup-div-p {\r\n  font-size: 32px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap\");\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  color: black;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-top: 1em;\r\n}\r\n\r\nheader .logo {\r\n  border: 2px solid black;\r\n  border-radius: 5em;\r\n  height: 4.2em;\r\n  width: 4.2em;\r\n  margin: 0 1em 0 1em;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1.2em;\r\n  margin-top: 0.55em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: #d57d1f;\r\n}\r\n\r\nheader .logo h1 span::before {\r\n  content: \"\\a\";\r\n  white-space: pre;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  border: 3px solid black;\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  place-content: center;\r\n  margin: 10em auto;\r\n  width: 20em;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 20% 25%;\r\n  margin: 0 0 15em 0;\r\n  width: 20em;\r\n  height: 15em;\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 17em;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: center;\r\n  margin-left: 4em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.div-heart {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart {\r\n  margin-right: -1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:hover {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:active {\r\n  color: red;\r\n}\r\n\r\n.meal .div-like .div-heart label {\r\n  font-size: 1em;\r\n}\r\n\r\n.meal .div-like .div-heart label::before {\r\n  /* content: \"\\a\";\r\n  white-space: pre; */\r\n}\r\n\r\n.meal .div-like .div-heart .fa-comment {\r\n  margin-right: -1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.meal img {\r\n  width: 15em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 2px 2px 2px black;\r\n  width: 10em;\r\n  height: 2.5em;\r\n  font-weight: bold;\r\n  place-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n}\r\n\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.meal-popup-div-img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n}\r\n\r\n.cat-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div-img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.cont-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup-div-p {\r\n  font-size: 32px;\r\n}\r\n"],"sourceRoot":""}]);
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module_display_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/display-home.js */ "./src/module/display-home.js");
/* harmony import */ var _module_show_popup_categories_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/show-popup-categories.js */ "./src/module/show-popup-categories.js");
/* harmony import */ var _module_show_popup_contacts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/show-popup-contacts.js */ "./src/module/show-popup-contacts.js");





(0,_module_display_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

const menuCat = document.getElementById('categories');
menuCat.addEventListener('click', () => {
  (0,_module_show_popup_categories_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

const menuCont = document.getElementById('contacts');
menuCont.addEventListener('click', () => {
  (0,_module_show_popup_contacts_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});


/***/ }),

/***/ "./src/module/add-like.js":
/*!********************************!*\
  !*** ./src/module/add-like.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function addLike(id) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/otoY0fxXk5LjLMlhzjv8/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      likes: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);

/***/ }),

/***/ "./src/module/add-new-comment.js":
/*!***************************************!*\
  !*** ./src/module/add-new-comment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-comments.js */ "./src/module/show-comments.js");


async function addNewComment(itemId, username, comment) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  await response;

  (0,_show_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(itemId);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewComment);


/***/ }),

/***/ "./src/module/count-items.js":
/*!***********************************!*\
  !*** ./src/module/count-items.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const count = (parent) => parent.childElementCount;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (count);

/***/ }),

/***/ "./src/module/display-home.js":
/*!************************************!*\
  !*** ./src/module/display-home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-popup-comment.js */ "./src/module/show-popup-comment.js");
/* harmony import */ var _add_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-like.js */ "./src/module/add-like.js");
/* harmony import */ var _count_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count-items.js */ "./src/module/count-items.js");
/* harmony import */ var _display_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-likes.js */ "./src/module/display-likes.js");




// import displayComments from './display-comments.js';

async function getData() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
  const data = await response.json();
  const lengthData = data.meals.length;
  const header = document.querySelector('.head');
  const random = document.querySelector('.random');
  const listSection = document.querySelector('.home');
  listSection.before(header);
  listSection.before(random);
  listSection.replaceChildren();
  for (let i = 0; i < lengthData; i += 1) {
    const list = document.createElement('div');
    list.className = 'meal';

    const div = document.createElement('div');
    div.className = 'div-img';
    list.appendChild(div);

    const descrpt1 = document.createElement('img');
    descrpt1.src = `${data.meals[i].strMealThumb}`;
    div.appendChild(descrpt1);

    const div2 = document.createElement('div');
    div2.className = 'div-like';
    list.appendChild(div2);

    const p = document.createElement('p');
    p.textContent = `${data.meals[i].strMeal}`;
    div2.appendChild(p);

    const div3 = document.createElement('div');
    div3.className = 'div-heart';
    div3.id = 'div-heart';
    div2.appendChild(div3);

    // # likes
    const like = document.createElement('i');
    like.className = 'fa-solid fa-heart';
    like.id = data.meals[i].idMeal;
    div3.appendChild(like);

    (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.meals[i].idMeal);

    const likeCount = document.createElement('label');
    likeCount.id = `id${data.meals[i].idMeal}`;
    likeCount.innerHTML = '';
    div3.appendChild(likeCount);

    // #comments
    // const comments = document.createElement('i');
    // comments.className = 'fa-solid fa-comment';
    // comments.id = data.meals[i].idMeal;
    // div3.appendChild(comments);

    // displayComments(data.meals[i].idMeal);

    // const commentsCount = document.createElement('label');
    // commentsCount.id = `comment${data.meals[i].idMeal}`;
    // commentsCount.innerHTML = '';
    // div3.appendChild(commentsCount);

    // button

    const button = document.createElement('button');
    button.id = data.meals[i].idMeal;
    button.innerHTML = 'Comment';
    list.appendChild(button);

    listSection.append(list);

    button.addEventListener('click', (e) => {
      const { id } = e.target;
      (0,_show_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
    });

    comments.addEventListener('click', (e) => {
      const { id } = e.target;
      (0,_show_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
    });

    like.addEventListener('click', (e) => {
      const { id } = e.target;
      (0,_add_like_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
      (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
    });
  }
  const parent = document.getElementById('data');
  const counter = document.getElementById('meals');
  counter.innerHTML = `Meals${(0,_count_items_js__WEBPACK_IMPORTED_MODULE_2__["default"])(parent)}`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/module/display-likes.js":
/*!*************************************!*\
  !*** ./src/module/display-likes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function showlikes(id) {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/otoY0fxXk5LjLMlhzjv8/likes',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  try {
    const data = await response.json();
    const likeCount = document.getElementById(`id${id}`);
    data.map((like) => {
      if (like.item_id === id) {
        likeCount.textContent = `${like.likes}`;
      }
      return true;
    });
  } catch (err) {
    // do nothing
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showlikes);

/***/ }),

/***/ "./src/module/show-comments.js":
/*!*************************************!*\
  !*** ./src/module/show-comments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function showCommentsList(id) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const mealBtn = document.getElementById(id);
  if (mealBtn) {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

    try {
      const data = await response.json();

      const parent = document.querySelector('.meal-popup-comments-container');
      parent.innerHTML = '';
      const title = document.createElement('h3');
      title.className = 'meal-popup-comments-title';
      title.innerHTML = `Comments (${data.length || 0})`;
      parent.appendChild(title);

      data.forEach((comment) => {
        const commentRow = document.createElement('p');
        commentRow.className = 'meal-popup-comments-row';
        commentRow.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment} `;
        parent.appendChild(commentRow);
      });
    } catch (err) {
      // do nothing
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentsList);


/***/ }),

/***/ "./src/module/show-popup-categories.js":
/*!*********************************************!*\
  !*** ./src/module/show-popup-categories.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function showPopupCategories() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();

  const mainSection = document.querySelector('header');
  const cat = document.createElement('div');
  cat.className = 'cat-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'cat-popup-close-icon fa fa-times';
  cat.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    cat.remove();
  });

  data.categories.forEach((dataCat) => {
    const div = document.createElement('div');
    div.className = 'cat-popup-div';
    cat.appendChild(div);

    const divImg = document.createElement('div');
    divImg.className = 'cat-popup-div-img';
    cat.appendChild(divImg);

    const img = document.createElement('img');
    img.src = `${dataCat.strCategoryThumb}`;
    div.appendChild(img);

    const p1 = document.createElement('h2');
    p1.textContent = `${dataCat.strCategory}`;
    div.appendChild(p1);

    mainSection.appendChild(cat);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopupCategories);


/***/ }),

/***/ "./src/module/show-popup-comment.js":
/*!******************************************!*\
  !*** ./src/module/show-popup-comment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_new_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-comment.js */ "./src/module/add-new-comment.js");
/* harmony import */ var _show_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-comments.js */ "./src/module/show-comments.js");



async function showPopupComment(id) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();

  const mainSection = document.querySelector('header');
  const meal = document.createElement('div');
  meal.className = 'meal-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'meal-popup-close-icon fa fa-times';
  meal.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    meal.remove();
  });

  const div = document.createElement('div');
  div.className = 'meal-popup-div-img';
  meal.appendChild(div);

  const img = document.createElement('img');
  img.src = `${data.meals[0].strMealThumb}`;
  div.appendChild(img);

  const p1 = document.createElement('h2');
  p1.textContent = `${data.meals[0].strMeal}`;
  meal.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = `Category: ${data.meals[0].strCategory}`;
  meal.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = `Area: ${data.meals[0].strArea}`;
  meal.appendChild(p3);

  const d = document.createElement('p');
  d.textContent = `${data.meals[0].strInstructions}`;
  meal.appendChild(d);

  // Comments
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'meal-popup-comments-container';
  meal.appendChild(commentsContainer);

  (0,_show_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);

  const form = document.createElement('form');
  form.className = 'meal-popup-add-comment-form';
  meal.appendChild(form);

  const formTitle = document.createElement('h3');
  formTitle.className = 'meal-popup-add-comment-form-title';
  formTitle.innerHTML = 'Add a comment';
  form.appendChild(formTitle);

  const formUsername = document.createElement('input');
  formUsername.className = 'meal-popup-add-comment-form-username';
  formUsername.setAttribute('placeholder', 'Your name');
  form.appendChild(formUsername);

  const formComment = document.createElement('textarea');
  formComment.className = 'meal-popup-add-comment-form-comment';
  formComment.setAttribute('placeholder', 'Your insights');
  form.appendChild(formComment);

  const formBtn = document.createElement('button');
  formBtn.className = 'meal-popup-add-comment-form-btn';
  formBtn.setAttribute('placeholder', 'Your comment');
  formBtn.innerHTML = 'Comment';
  form.appendChild(formBtn);

  const formResContainer = document.createElement('p');
  formResContainer.className = 'meal-popup-add-comment-form-res';
  form.appendChild(formResContainer);

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (formUsername.value && formComment.value) {
      (0,_add_new_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id, formUsername.value, formComment.value);
    } else {
      const formRes = document.createElement('p');
      formRes.className = 'meal-popup-add-comment-form-res';
      formRes.innerHTML = 'Username and comment should not be empty';
      formResContainer.innerHTML = '';
      formResContainer.appendChild(formRes);
    }
  });

  mainSection.appendChild(meal);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopupComment);


/***/ }),

/***/ "./src/module/show-popup-contacts.js":
/*!*******************************************!*\
  !*** ./src/module/show-popup-contacts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showPopupContacts = () => {
  const mainSection = document.querySelector('header');
  const cont = document.createElement('div');
  cont.className = 'cont-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'cont-popup-close-icon fa fa-times';
  cont.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    cont.remove();
  });

  const div = document.createElement('div');
  div.className = 'cont-popup-div';
  cont.appendChild(div);

  const p1 = document.createElement('h2');
  p1.textContent = 'Contacts:';
  div.appendChild(p1);

  const p2 = document.createElement('p');
  p2.className = 'cont-popup-p';
  p2.innerHTML = ` 
  👤 Odai Alazzeh <br>
      GitHub: @odaialazzeh <br>
      Twitter: @odaialazzeh4 <br>
      <a href="https://www.linkedin.com/in/odai-alazzeh-01546024a/">LinkedIn</a> <br>
      <br>
  👤 Sergiy Shkolnik <br>
    GitHub: @SergSkol <br>
    Twitter: @sps676 <br>
    <a href="https://www.linkedin.com/in/sergiy-shkolnik-7801a53/">LinkedIn</a> <br>
    `;
  div.appendChild(p2);

  mainSection.appendChild(cont);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopupContacts);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNkdBQTZHLElBQUksSUFBSSxJQUFJLG1DQUFtQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQzlNO0FBQ0EsZ0RBQWdELGdCQUFnQiwyQ0FBMkMsd0JBQXdCLG9CQUFvQixtQkFBbUIsS0FBSyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixrQ0FBa0MsMEJBQTBCLHNCQUFzQixLQUFLLHNCQUFzQiw4QkFBOEIseUJBQXlCLG9CQUFvQixtQkFBbUIsMEJBQTBCLEtBQUsseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLHlCQUF5QixLQUFLLDhCQUE4Qix5QkFBeUIscUJBQXFCLEtBQUssc0NBQXNDLHVCQUF1Qix1QkFBdUIsS0FBSyx1QkFBdUIsb0JBQW9CLDBCQUEwQix1QkFBdUIsS0FBSywwQkFBMEIsd0JBQXdCLEtBQUssOEJBQThCLDZCQUE2QixpQ0FBaUMsd0JBQXdCLHVCQUF1QixLQUFLLGdCQUFnQix5QkFBeUIsZ0JBQWdCLGNBQWMsa0JBQWtCLDhCQUE4QixLQUFLLG1CQUFtQix1QkFBdUIsdUJBQXVCLHVCQUF1QixLQUFLLGVBQWUsb0JBQW9CLGlEQUFpRCw0QkFBNEIsd0JBQXdCLGtCQUFrQixLQUFLLGVBQWUsb0JBQW9CLHVDQUF1Qyx5QkFBeUIsa0JBQWtCLG1CQUFtQixLQUFLLHlCQUF5QixvQkFBb0IsMEJBQTBCLHFDQUFxQywwQkFBMEIsa0JBQWtCLEtBQUssMkJBQTJCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0IsZ0JBQWdCLEtBQUssOENBQThDLHlCQUF5Qix1QkFBdUIsc0JBQXNCLEtBQUssb0RBQW9ELGdDQUFnQyxLQUFLLHFEQUFxRCxpQkFBaUIsS0FBSywwQ0FBMEMscUJBQXFCLEtBQUssa0RBQWtELDBCQUEwQix3QkFBd0IsT0FBTyxnREFBZ0QseUJBQXlCLHVCQUF1QixzQkFBc0IsS0FBSyxrQkFBa0IseUJBQXlCLHlCQUF5QixLQUFLLG1CQUFtQixrQkFBa0IsS0FBSyxnQkFBZ0IseUJBQXlCLDhCQUE4QixvQ0FBb0Msa0JBQWtCLG9CQUFvQix3QkFBd0IseUJBQXlCLHNCQUFzQixLQUFLLG9CQUFvQiwyQkFBMkIsdUJBQXVCLHlCQUF5QixLQUFLLHFCQUFxQixzQkFBc0IsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsZ0NBQWdDLHlCQUF5QixtQkFBbUIsbUJBQW1CLDZCQUE2QixLQUFLLGdDQUFnQyxzQkFBc0IsbUJBQW1CLHNCQUFzQixnQkFBZ0Isa0JBQWtCLEtBQUssNkJBQTZCLGtDQUFrQyx5QkFBeUIsS0FBSyxzQ0FBc0MsMEJBQTBCLG9CQUFvQiw2QkFBNkIseUJBQXlCLDBCQUEwQixLQUFLLCtDQUErQyx5QkFBeUIsbUJBQW1CLEtBQUssOENBQThDLHlCQUF5QixtQkFBbUIsS0FBSyxpQ0FBaUMsVUFBVSxtQkFBbUIsT0FBTyxnQkFBZ0Isb0JBQW9CLE9BQU8sS0FBSywwQ0FBMEMsbUNBQW1DLDZCQUE2QixzQkFBc0IsbUJBQW1CLHVCQUF1Qix5QkFBeUIseUJBQXlCLEtBQUssb0JBQW9CLG9CQUFvQixzQkFBc0Isc0JBQXNCLGdCQUFnQixpQkFBaUIsOEJBQThCLGdDQUFnQyx5QkFBeUIsbUJBQW1CLG1CQUFtQiw2QkFBNkIsS0FBSywrQkFBK0Isc0JBQXNCLG1CQUFtQixzQkFBc0IsZ0JBQWdCLGtCQUFrQixLQUFLLDRCQUE0QixrQ0FBa0MseUJBQXlCLEtBQUsscUJBQXFCLG9CQUFvQixzQkFBc0Isc0JBQXNCLGdCQUFnQixpQkFBaUIsOEJBQThCLGdDQUFnQyx5QkFBeUIsbUJBQW1CLG1CQUFtQiw2QkFBNkIsa0JBQWtCLEtBQUssZ0NBQWdDLHNCQUFzQixtQkFBbUIsc0JBQXNCLGdCQUFnQixrQkFBa0IsS0FBSyx3QkFBd0Isa0NBQWtDLHlCQUF5QixLQUFLLDBCQUEwQixzQkFBc0IsS0FBSyxXQUFXLGdGQUFnRixVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUs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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUM7O0FBRUE7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDOztBQUVBO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDs7QUFFQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7O0FBRUE7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsNkRBQWdCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBYTtBQUNuQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvRmhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9hZGQtbGlrZS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9hZGQtbmV3LWNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvY291bnQtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvZGlzcGxheS1ob21lLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2Rpc3BsYXktbGlrZXMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvc2hvdy1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9zaG93LXBvcHVwLWNhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvc2hvdy1wb3B1cC1jb21tZW50LmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL3Nob3ctcG9wdXAtY29udGFjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7NzAwOzkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxyXFxuICBoZWlnaHQ6IDQuMmVtO1xcclxcbiAgd2lkdGg6IDQuMmVtO1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMS4yZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjU1ZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBoMSBzcGFuIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZDU3ZDFmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaDEgc3Bhbjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcYVxcXCI7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCAjbWVhbHMge1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIC0zLjVlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBoMiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwZW0gYXV0bztcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDIwJSAyNSU7XFxyXFxuICBtYXJnaW46IDAgMCAxNWVtIDA7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxN2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogNGVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5kaXYtaGVhcnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5kaXYtaGVhcnQgLmZhLWhlYXJ0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IC5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCAuZmEtaGVhcnQ6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIC8qIGNvbnRlbnQ6IFxcXCJcXFxcYVxcXCI7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCAuZmEtY29tbWVudCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC0xZW07XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LWltZyB7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIGltZyB7XFxyXFxuICB3aWR0aDogMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMi41ZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbSBoMiB7XFxyXFxuICBtYXJnaW46IDNlbSAwIC0zZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMzZTNlM2U7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwYWRkaW5nOiAwIDMycHggMCAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1jbG9zZS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMThweDtcXHJcXG4gIHJpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1kaXYtaW1nIHtcXHJcXG4gIG1hcmdpbjogMTBweCA1MHB4IDEwcHggNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybSB7XFxyXFxuICBtYXJnaW46IDAgMCAxMDBweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXVzZXJuYW1lIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcclxcbiAgMCUge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXJlcyB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlLWNvbG9yO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMzZTNlM2U7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwYWRkaW5nOiAwIDMycHggMCAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwLWNsb3NlLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxOHB4O1xcclxcbiAgcmlnaHQ6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAtZGl2LWltZyB7XFxyXFxuICBtYXJnaW46IDEwcHggNTBweCAxMHB4IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjM2UzZTNlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgcGFkZGluZzogMCAzMnB4IDAgMzJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udC1wb3B1cC1jbG9zZS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMThweDtcXHJcXG4gIHJpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwLWRpdiB7XFxyXFxuICBtYXJnaW46IDEwcHggNTBweCAxMHB4IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAtZGl2LXAge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Us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LGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDEwMDszMDA7NDAwOzcwMDs5MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xcclxcbiAgaGVpZ2h0OiA0LjJlbTtcXHJcXG4gIHdpZHRoOiA0LjJlbTtcXHJcXG4gIG1hcmdpbjogMCAxZW0gMCAxZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBoMSB7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC41NWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaDEgc3BhbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2Q1N2QxZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHNwYW46OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGFcXFwiO1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgI21lYWxzIHtcXHJcXG4gIG1hcmdpbjogMCAxZW0gMCAtMy41ZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgaDIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMGVtIGF1dG87XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyMCUgMjUlO1xcclxcbiAgbWFyZ2luOiAwIDAgMTVlbSAwO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDE1ZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTdlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDRlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LWhlYXJ0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IC5mYS1oZWFydCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC0xZW07XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCAuZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5kaXYtaGVhcnQgLmZhLWhlYXJ0OmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCBsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5kaXYtaGVhcnQgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICAvKiBjb250ZW50OiBcXFwiXFxcXGFcXFwiO1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5kaXYtaGVhcnQgLmZhLWNvbW1lbnQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi1pbWcge1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCBpbWcge1xcclxcbiAgd2lkdGg6IDE1ZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxuICBoZWlnaHQ6IDIuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYW5kb20gaDIge1xcclxcbiAgbWFyZ2luOiAzZW0gMCAtM2VtIDA7XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjM2UzZTNlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgcGFkZGluZzogMCAzMnB4IDAgMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtY2xvc2UtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE4cHg7XFxyXFxuICByaWdodDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtZGl2LWltZyB7XFxyXFxuICBtYXJnaW46IDEwcHggNTBweCAxMHB4IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0ge1xcclxcbiAgbWFyZ2luOiAwIDAgMTAwcHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS11c2VybmFtZSB7XFxyXFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxyXFxuICB3aWR0aDogMjU2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxyXFxuICB3aWR0aDogMjU2cHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlLWNvbG9yIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1yZXMge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZS1jb2xvcjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMjU2cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjM2UzZTNlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgcGFkZGluZzogMCAzMnB4IDAgMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cC1jbG9zZS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMThweDtcXHJcXG4gIHJpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwLWRpdi1pbWcge1xcclxcbiAgbWFyZ2luOiAxMHB4IDUwcHggMTBweCA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udC1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgIzNlM2UzZTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHBhZGRpbmc6IDAgMzJweCAwIDMycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wdXAtY2xvc2UtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE4cHg7XFxyXFxuICByaWdodDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cC1kaXYge1xcclxcbiAgbWFyZ2luOiAxMHB4IDUwcHggMTBweCA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwLWRpdi1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4vbW9kdWxlL2Rpc3BsYXktaG9tZS5qcyc7XHJcbmltcG9ydCBzaG93UG9wdXBDYXRlZ29yaWVzIGZyb20gJy4vbW9kdWxlL3Nob3ctcG9wdXAtY2F0ZWdvcmllcy5qcyc7XHJcbmltcG9ydCBzaG93UG9wdXBDb250YWN0cyBmcm9tICcuL21vZHVsZS9zaG93LXBvcHVwLWNvbnRhY3RzLmpzJztcclxuXHJcbmdldERhdGEoKTtcclxuXHJcbmNvbnN0IG1lbnVDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcmllcycpO1xyXG5tZW51Q2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNob3dQb3B1cENhdGVnb3JpZXMoKTtcclxufSk7XHJcblxyXG5jb25zdCBtZW51Q29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cycpO1xyXG5tZW51Q29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzaG93UG9wdXBDb250YWN0cygpO1xyXG59KTtcclxuIiwiYXN5bmMgZnVuY3Rpb24gYWRkTGlrZShpZCkge1xuICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvb3RvWTBmeFhrNUxqTE1saHpqdjgvbGlrZXMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICBsaWtlczogMSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5leHBvcnQgZGVmYXVsdCBhZGRMaWtlOyIsImltcG9ydCBzaG93Q29tbWVudHNMaXN0IGZyb20gJy4vc2hvdy1jb21tZW50cy5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZE5ld0NvbW1lbnQoaXRlbUlkLCB1c2VybmFtZSwgY29tbWVudCkge1xuICBjb25zdCBhcGlLZXkgPSAndG5FMms2UDVCZFoySENUamJkMFYnO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwaUtleX0vY29tbWVudHMvYCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY29tbWVudCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgYXdhaXQgcmVzcG9uc2U7XG5cbiAgc2hvd0NvbW1lbnRzTGlzdChpdGVtSWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGROZXdDb21tZW50O1xuIiwiY29uc3QgY291bnQgPSAocGFyZW50KSA9PiBwYXJlbnQuY2hpbGRFbGVtZW50Q291bnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50OyIsImltcG9ydCBzaG93UG9wdXBDb21tZW50IGZyb20gJy4vc2hvdy1wb3B1cC1jb21tZW50LmpzJztcclxuaW1wb3J0IGFkZExpa2UgZnJvbSAnLi9hZGQtbGlrZS5qcyc7XHJcbmltcG9ydCBjb3VudCBmcm9tICcuL2NvdW50LWl0ZW1zLmpzJztcclxuaW1wb3J0IHNob3dsaWtlcyBmcm9tICcuL2Rpc3BsYXktbGlrZXMuanMnO1xyXG4vLyBpbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vZGlzcGxheS1jb21tZW50cy5qcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP3MnKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGxlbmd0aERhdGEgPSBkYXRhLm1lYWxzLmxlbmd0aDtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZCcpO1xyXG4gIGNvbnN0IHJhbmRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20nKTtcclxuICBjb25zdCBsaXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XHJcbiAgbGlzdFNlY3Rpb24uYmVmb3JlKGhlYWRlcik7XHJcbiAgbGlzdFNlY3Rpb24uYmVmb3JlKHJhbmRvbSk7XHJcbiAgbGlzdFNlY3Rpb24ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhEYXRhOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpc3QuY2xhc3NOYW1lID0gJ21lYWwnO1xyXG5cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdkaXYtaW1nJztcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBjb25zdCBkZXNjcnB0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZGVzY3JwdDEuc3JjID0gYCR7ZGF0YS5tZWFsc1tpXS5zdHJNZWFsVGh1bWJ9YDtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcnB0MSk7XHJcblxyXG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Mi5jbGFzc05hbWUgPSAnZGl2LWxpa2UnO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChkaXYyKTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IGAke2RhdGEubWVhbHNbaV0uc3RyTWVhbH1gO1xyXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYzLmNsYXNzTmFtZSA9ICdkaXYtaGVhcnQnO1xyXG4gICAgZGl2My5pZCA9ICdkaXYtaGVhcnQnO1xyXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChkaXYzKTtcclxuXHJcbiAgICAvLyAjIGxpa2VzXHJcbiAgICBjb25zdCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgbGlrZS5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtaGVhcnQnO1xyXG4gICAgbGlrZS5pZCA9IGRhdGEubWVhbHNbaV0uaWRNZWFsO1xyXG4gICAgZGl2My5hcHBlbmRDaGlsZChsaWtlKTtcclxuXHJcbiAgICBzaG93bGlrZXMoZGF0YS5tZWFsc1tpXS5pZE1lYWwpO1xyXG5cclxuICAgIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsaWtlQ291bnQuaWQgPSBgaWQke2RhdGEubWVhbHNbaV0uaWRNZWFsfWA7XHJcbiAgICBsaWtlQ291bnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkaXYzLmFwcGVuZENoaWxkKGxpa2VDb3VudCk7XHJcblxyXG4gICAgLy8gI2NvbW1lbnRzXHJcbiAgICAvLyBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIC8vIGNvbW1lbnRzLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1jb21tZW50JztcclxuICAgIC8vIGNvbW1lbnRzLmlkID0gZGF0YS5tZWFsc1tpXS5pZE1lYWw7XHJcbiAgICAvLyBkaXYzLmFwcGVuZENoaWxkKGNvbW1lbnRzKTtcclxuXHJcbiAgICAvLyBkaXNwbGF5Q29tbWVudHMoZGF0YS5tZWFsc1tpXS5pZE1lYWwpO1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgLy8gY29tbWVudHNDb3VudC5pZCA9IGBjb21tZW50JHtkYXRhLm1lYWxzW2ldLmlkTWVhbH1gO1xyXG4gICAgLy8gY29tbWVudHNDb3VudC5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGRpdjMuYXBwZW5kQ2hpbGQoY29tbWVudHNDb3VudCk7XHJcblxyXG4gICAgLy8gYnV0dG9uXHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uaWQgPSBkYXRhLm1lYWxzW2ldLmlkTWVhbDtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnQ29tbWVudCc7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgbGlzdFNlY3Rpb24uYXBwZW5kKGxpc3QpO1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0O1xyXG4gICAgICBzaG93UG9wdXBDb21tZW50KGlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQ7XHJcbiAgICAgIHNob3dQb3B1cENvbW1lbnQoaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0O1xyXG4gICAgICBhZGRMaWtlKGlkKTtcclxuICAgICAgc2hvd2xpa2VzKGlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YScpO1xyXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbHMnKTtcclxuICBjb3VudGVyLmlubmVySFRNTCA9IGBNZWFscyR7Y291bnQocGFyZW50KX1gO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhO1xyXG4iLCJhc3luYyBmdW5jdGlvbiBzaG93bGlrZXMoaWQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvb3RvWTBmeFhrNUxqTE1saHpqdjgvbGlrZXMnLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWQke2lkfWApO1xuICAgIGRhdGEubWFwKChsaWtlKSA9PiB7XG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBpZCkge1xuICAgICAgICBsaWtlQ291bnQudGV4dENvbnRlbnQgPSBgJHtsaWtlLmxpa2VzfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dsaWtlczsiLCJhc3luYyBmdW5jdGlvbiBzaG93Q29tbWVudHNMaXN0KGlkKSB7XHJcbiAgY29uc3QgYXBpS2V5ID0gJ3RuRTJrNlA1QmRaMkhDVGpiZDBWJztcclxuICBjb25zdCBtZWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGlmIChtZWFsQnRuKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwaUtleX0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLXBvcHVwLWNvbW1lbnRzLWNvbnRhaW5lcicpO1xyXG4gICAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtY29tbWVudHMtdGl0bGUnO1xyXG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7ZGF0YS5sZW5ndGggfHwgMH0pYDtcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29tbWVudFJvdy5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1jb21tZW50cy1yb3cnO1xyXG4gICAgICAgIGNvbW1lbnRSb3cuaW5uZXJIVE1MID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9OiAke2NvbW1lbnQuY29tbWVudH0gYDtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29tbWVudFJvdyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dDb21tZW50c0xpc3Q7XHJcbiIsImFzeW5jIGZ1bmN0aW9uIHNob3dQb3B1cENhdGVnb3JpZXMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCcpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IGNhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXQuY2xhc3NOYW1lID0gJ2NhdC1wb3B1cCc7XG5cbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjbG9zZUljb24uY2xhc3NOYW1lID0gJ2NhdC1wb3B1cC1jbG9zZS1pY29uIGZhIGZhLXRpbWVzJztcbiAgY2F0LmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNhdC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgZGF0YS5jYXRlZ29yaWVzLmZvckVhY2goKGRhdGFDYXQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2NhdC1wb3B1cC1kaXYnO1xuICAgIGNhdC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgY29uc3QgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2SW1nLmNsYXNzTmFtZSA9ICdjYXQtcG9wdXAtZGl2LWltZyc7XG4gICAgY2F0LmFwcGVuZENoaWxkKGRpdkltZyk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gYCR7ZGF0YUNhdC5zdHJDYXRlZ29yeVRodW1ifWA7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSBgJHtkYXRhQ2F0LnN0ckNhdGVnb3J5fWA7XG4gICAgZGl2LmFwcGVuZENoaWxkKHAxKTtcblxuICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGNhdCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXBDYXRlZ29yaWVzO1xuIiwiaW1wb3J0IGFkZE5ld0NvbW1lbnQgZnJvbSAnLi9hZGQtbmV3LWNvbW1lbnQuanMnO1xuaW1wb3J0IHNob3dDb21tZW50c0xpc3QgZnJvbSAnLi9zaG93LWNvbW1lbnRzLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gc2hvd1BvcHVwQ29tbWVudChpZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwJztcblxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1jbG9zZS1pY29uIGZhIGZhLXRpbWVzJztcbiAgbWVhbC5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZWFsLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWRpdi1pbWcnO1xuICBtZWFsLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBgJHtkYXRhLm1lYWxzWzBdLnN0ck1lYWxUaHVtYn1gO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHAxLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZWFsc1swXS5zdHJNZWFsfWA7XG4gIG1lYWwuYXBwZW5kQ2hpbGQocDEpO1xuXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi50ZXh0Q29udGVudCA9IGBDYXRlZ29yeTogJHtkYXRhLm1lYWxzWzBdLnN0ckNhdGVnb3J5fWA7XG4gIG1lYWwuYXBwZW5kQ2hpbGQocDIpO1xuXG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMy50ZXh0Q29udGVudCA9IGBBcmVhOiAke2RhdGEubWVhbHNbMF0uc3RyQXJlYX1gO1xuICBtZWFsLmFwcGVuZENoaWxkKHAzKTtcblxuICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZWFsc1swXS5zdHJJbnN0cnVjdGlvbnN9YDtcbiAgbWVhbC5hcHBlbmRDaGlsZChkKTtcblxuICAvLyBDb21tZW50c1xuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1jb21tZW50cy1jb250YWluZXInO1xuICBtZWFsLmFwcGVuZENoaWxkKGNvbW1lbnRzQ29udGFpbmVyKTtcblxuICBzaG93Q29tbWVudHNMaXN0KGlkKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0nO1xuICBtZWFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGZvcm1UaXRsZS5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXRpdGxlJztcbiAgZm9ybVRpdGxlLmlubmVySFRNTCA9ICdBZGQgYSBjb21tZW50JztcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gIGNvbnN0IGZvcm1Vc2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZvcm1Vc2VybmFtZS5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXVzZXJuYW1lJztcbiAgZm9ybVVzZXJuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVVzZXJuYW1lKTtcblxuICBjb25zdCBmb3JtQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGZvcm1Db21tZW50LmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tY29tbWVudCc7XG4gIGZvcm1Db21tZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBpbnNpZ2h0cycpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Db21tZW50KTtcblxuICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZvcm1CdG4uY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1idG4nO1xuICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBjb21tZW50Jyk7XG4gIGZvcm1CdG4uaW5uZXJIVE1MID0gJ0NvbW1lbnQnO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdG4pO1xuXG4gIGNvbnN0IGZvcm1SZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvcm1SZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1yZXMnO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1SZXNDb250YWluZXIpO1xuXG4gIGZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZm9ybVVzZXJuYW1lLnZhbHVlICYmIGZvcm1Db21tZW50LnZhbHVlKSB7XG4gICAgICBhZGROZXdDb21tZW50KGlkLCBmb3JtVXNlcm5hbWUudmFsdWUsIGZvcm1Db21tZW50LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZm9ybVJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGZvcm1SZXMuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1yZXMnO1xuICAgICAgZm9ybVJlcy5pbm5lckhUTUwgPSAnVXNlcm5hbWUgYW5kIGNvbW1lbnQgc2hvdWxkIG5vdCBiZSBlbXB0eSc7XG4gICAgICBmb3JtUmVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgZm9ybVJlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUmVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1lYWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXBDb21tZW50O1xuIiwiY29uc3Qgc2hvd1BvcHVwQ29udGFjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udC5jbGFzc05hbWUgPSAnY29udC1wb3B1cCc7XG5cbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjbG9zZUljb24uY2xhc3NOYW1lID0gJ2NvbnQtcG9wdXAtY2xvc2UtaWNvbiBmYSBmYS10aW1lcyc7XG4gIGNvbnQuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSAnY29udC1wb3B1cC1kaXYnO1xuICBjb250LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwMS50ZXh0Q29udGVudCA9ICdDb250YWN0czonO1xuICBkaXYuYXBwZW5kQ2hpbGQocDEpO1xuXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi5jbGFzc05hbWUgPSAnY29udC1wb3B1cC1wJztcbiAgcDIuaW5uZXJIVE1MID0gYCBcbiAg8J+RpCBPZGFpIEFsYXp6ZWggPGJyPlxuICAgICAgR2l0SHViOiBAb2RhaWFsYXp6ZWggPGJyPlxuICAgICAgVHdpdHRlcjogQG9kYWlhbGF6emVoNCA8YnI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL29kYWktYWxhenplaC0wMTU0NjAyNGEvXCI+TGlua2VkSW48L2E+IDxicj5cbiAgICAgIDxicj5cbiAg8J+RpCBTZXJnaXkgU2hrb2xuaWsgPGJyPlxuICAgIEdpdEh1YjogQFNlcmdTa29sIDxicj5cbiAgICBUd2l0dGVyOiBAc3BzNjc2IDxicj5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NlcmdpeS1zaGtvbG5pay03ODAxYTUzL1wiPkxpbmtlZEluPC9hPiA8YnI+XG4gICAgYDtcbiAgZGl2LmFwcGVuZENoaWxkKHAyKTtcblxuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChjb250KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQb3B1cENvbnRhY3RzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9