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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --orange: #d57d1f;\r\n  --black: rgb(25, 42, 86, 0.9);\r\n  --light-color: #666;\r\n  --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\r\n  --font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  background-color: #eee;\r\n  color: var(--black);\r\n}\r\n\r\nheader {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  box-shadow: var(--box-shadow);\r\n  width: 100%;\r\n  padding: 0.5em;\r\n  background-color: white;\r\n}\r\n\r\n.fa-cutlery {\r\n  color: var(--black);\r\n  font-size: 1.3em;\r\n}\r\n\r\n.meal-popup h4 span {\r\n  text-align: left;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n  margin-left: 0.3em;\r\n}\r\n\r\nheader .logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1em;\r\n  margin: 0 1.5em 0 0.3em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: var(--orange);\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  font-weight: 500;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  place-items: center;\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n  height: 5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 8em 0;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup p {\r\n  margin-right: 2em;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.meal-popup p {\r\n  text-align: left;\r\n  margin: 1em 1em;\r\n  line-height: 2em;\r\n  font-size: 1.1em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 25% 25%;\r\n  margin: 0 1em 5em 0;\r\n  width: 20em;\r\n  height: 33em;\r\n  background-color: white;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: auto 0;\r\n  width: 100%;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: left;\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.div-heart {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10em;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart {\r\n  margin-left: 1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n  color: var(--orange);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:hover {\r\n  color: rgb(255, 165, 0, 0.7);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:active {\r\n  color: red;\r\n}\r\n\r\n.meal .div-like .div-heart label {\r\n  font-size: 1em;\r\n  color: var(--black);\r\n  margin-left: 1.2em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal img {\r\n  width: 17em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: var(--black);\r\n  color: white;\r\n  width: 8em;\r\n  height: 2.5em;\r\n  font-weight: 500;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: medium;\r\n  place-self: center;\r\n  cursor: pointer;\r\n  margin-bottom: 3em;\r\n  border: none;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  box-shadow: var(--box-shadow);\r\n  background-color: rgb(241, 240, 240);\r\n}\r\n\r\n.meal-popup h2 {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 2.5em;\r\n}\r\n\r\n.meal-popup h4 {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  margin: 1em 1em;\r\n}\r\n\r\n/*\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n*/\r\n.meal-popup-div-img {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal-popup-div-img img {\r\n  width: 35em;\r\n  height: 30em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.meal-popup-comments-title {\r\n  margin-left: 1em;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n  width: 20em;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  width: 20em;\r\n  height: 8em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 2em;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n}\r\n\r\n.cat-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.cat-popup-div {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup-div-p {\r\n  font-size: 32px;\r\n}\r\n\r\n.cont-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup h2 {\r\n  margin-top: 2em;\r\n  font-size: 2em;\r\n}\r\n\r\n.cont-popup-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.cont-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.Ingredients {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.Ingredients ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.Ingredients ul li {\r\n  padding-bottom: 5em;\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n\r\n.Ingredients ul li img {\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n\r\n.Ingredients ul li h3 {\r\n  text-align: center;\r\n}\r\n\r\n.fa-times {\r\n  position: fixed;\r\n  top: 0.2em;\r\n  right: 1em;\r\n  color: var(--black);\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap\");\r\n\r\n:root {\r\n  --orange: #d57d1f;\r\n  --black: rgb(25, 42, 86, 0.9);\r\n  --light-color: #666;\r\n  --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\r\n  --font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  background-color: #eee;\r\n  color: var(--black);\r\n}\r\n\r\nheader {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  box-shadow: var(--box-shadow);\r\n  width: 100%;\r\n  padding: 0.5em;\r\n  background-color: white;\r\n}\r\n\r\n.fa-cutlery {\r\n  color: var(--black);\r\n  font-size: 1.3em;\r\n}\r\n\r\n.meal-popup h4 span {\r\n  text-align: left;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n  margin-left: 0.3em;\r\n}\r\n\r\nheader .logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1em;\r\n  margin: 0 1.5em 0 0.3em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: var(--orange);\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  font-weight: 500;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  place-items: center;\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n  height: 5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 8em 0;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup p {\r\n  margin-right: 2em;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.meal-popup p {\r\n  text-align: left;\r\n  margin: 1em 1em;\r\n  line-height: 2em;\r\n  font-size: 1.1em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 25% 25%;\r\n  margin: 0 1em 5em 0;\r\n  width: 20em;\r\n  height: 33em;\r\n  background-color: white;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: auto 0;\r\n  width: 100%;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: left;\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.div-heart {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10em;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart {\r\n  margin-left: 1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n  color: var(--orange);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:hover {\r\n  color: rgb(255, 165, 0, 0.7);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:active {\r\n  color: red;\r\n}\r\n\r\n.meal .div-like .div-heart label {\r\n  font-size: 1em;\r\n  color: var(--black);\r\n  margin-left: 1.2em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal img {\r\n  width: 17em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: var(--black);\r\n  color: white;\r\n  width: 8em;\r\n  height: 2.5em;\r\n  font-weight: 500;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: medium;\r\n  place-self: center;\r\n  cursor: pointer;\r\n  margin-bottom: 3em;\r\n  border: none;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  box-shadow: var(--box-shadow);\r\n  background-color: rgb(241, 240, 240);\r\n}\r\n\r\n.meal-popup h2 {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 2.5em;\r\n}\r\n\r\n.meal-popup h4 {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  margin: 1em 1em;\r\n}\r\n\r\n/*\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n*/\r\n.meal-popup-div-img {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal-popup-div-img img {\r\n  width: 35em;\r\n  height: 30em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.meal-popup-comments-title {\r\n  margin-left: 1em;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n  width: 20em;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  width: 20em;\r\n  height: 8em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 2em;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n}\r\n\r\n.cat-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.cat-popup-div {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup-div-p {\r\n  font-size: 32px;\r\n}\r\n\r\n.cont-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup h2 {\r\n  margin-top: 2em;\r\n  font-size: 2em;\r\n}\r\n\r\n.cont-popup-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.cont-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.Ingredients {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.Ingredients ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.Ingredients ul li {\r\n  padding-bottom: 5em;\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n\r\n.Ingredients ul li img {\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n\r\n.Ingredients ul li h3 {\r\n  text-align: center;\r\n}\r\n\r\n.fa-times {\r\n  position: fixed;\r\n  top: 0.2em;\r\n  right: 1em;\r\n  color: var(--black);\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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

const menuLogo = document.querySelector('.logo');
menuLogo.addEventListener('click', () => {
  (0,_module_display_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

const menuMeals = document.getElementById('meals');
menuMeals.addEventListener('click', () => {
  (0,_module_display_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

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

async function getData(filter = '') {
  let response;
  if (filter === '') {
    response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
  } else {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`);
  }
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

    const button = document.createElement('button');
    button.id = data.meals[i].idMeal;
    button.innerHTML = 'Comment';
    list.appendChild(button);

    listSection.append(list);

    button.addEventListener('click', (e) => {
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
  counter.innerHTML = `Meals (${(0,_count_items_js__WEBPACK_IMPORTED_MODULE_2__["default"])(parent)})`;
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
        likeCount.textContent = `${like.likes} likes`;
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
/* harmony import */ var _display_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-home.js */ "./src/module/display-home.js");


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

    img.addEventListener('click', () => {
      (0,_display_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCat.strCategory);
      cat.remove();
    });

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
  closeIcon.className = 'fa fa-times';
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

  const IngredientsDiv = document.createElement('div');
  IngredientsDiv.className = 'Ingredients';
  meal.appendChild(IngredientsDiv);

  const Ingredients = document.createElement('ul');
  IngredientsDiv.appendChild(Ingredients);

  for (let i = 9; i < 29; i += 1) {
    const value = Object.values(data.meals[0])[i];
    if (value !== '') {
      const IngredientsItems1 = document.createElement('li');
      Ingredients.appendChild(IngredientsItems1);

      const imgIngredients1 = document.createElement('img');
      imgIngredients1.src = `https://www.themealdb.com/images/ingredients/${value}.png`;
      IngredientsItems1.appendChild(imgIngredients1);

      const IngredientsName1 = document.createElement('h3');
      IngredientsName1.textContent = value;
      IngredientsItems1.appendChild(IngredientsName1);
    }
  }

  const Category = document.createElement('h4');
  Category.textContent = 'Category: ';
  meal.appendChild(Category);

  const CategorySpan1 = document.createElement('span');
  CategorySpan1.textContent = data.meals[0].strCategory;
  Category.appendChild(CategorySpan1);

  const Area = document.createElement('h4');
  Area.textContent = 'Area: ';
  meal.appendChild(Area);

  const CategorySpan2 = document.createElement('span');
  CategorySpan2.textContent = data.meals[0].strArea;
  Area.appendChild(CategorySpan2);

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

  const p1 = document.createElement('h2');
  p1.textContent = 'Contacts:';
  cont.appendChild(p1);

  const div = document.createElement('div');
  div.className = 'cont-popup-div';
  cont.appendChild(div);

  const div1 = document.createElement('div');
  div.appendChild(div1);

  const p2 = document.createElement('p');
  p2.className = 'cont-popup-p';
  p2.innerHTML = ` 
  👤 Odai Alazzeh <br>
      GitHub: @odaialazzeh <br>
      Twitter: @odaialazzeh4 <br>
      <a href="https://www.linkedin.com/in/odai-alazzeh-01546024a/">LinkedIn</a>`;
  div1.appendChild(p2);

  const div2 = document.createElement('div');
  div.appendChild(div2);

  const p3 = document.createElement('p');
  p3.className = 'cont-popup-p';
  p3.innerHTML = ` 
  👤 Sergiy Shkolnik <br>
  GitHub: @SergSkol <br>
  Twitter: @sps676 <br>
  <a href="https://www.linkedin.com/in/sergiy-shkolnik-7801a53/">LinkedIn</a>`;
  div2.appendChild(p3);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxLQUFLLEtBQUssVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQWE7QUFDbkIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5SGhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvYWRkLWxpa2UuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvYWRkLW5ldy1jb21tZW50LmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2NvdW50LWl0ZW1zLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2Rpc3BsYXktaG9tZS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9kaXNwbGF5LWxpa2VzLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL3Nob3ctY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvc2hvdy1wb3B1cC1jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL3Nob3ctcG9wdXAtY29tbWVudC5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9zaG93LXBvcHVwLWNvbnRhY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDEwMDszMDA7NDAwOzcwMDs5MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tb3JhbmdlOiAjZDU3ZDFmO1xcclxcbiAgLS1ibGFjazogcmdiKDI1LCA0MiwgODYsIDAuOSk7XFxyXFxuICAtLWxpZ2h0LWNvbG9yOiAjNjY2O1xcclxcbiAgLS1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgLS1mb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mYS1jdXRsZXJ5IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cCBoNCBzcGFuIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgbWFyZ2luOiAwIDEuNWVtIDAgMC4zZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBoMSBzcGFuIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCAjbWVhbHMge1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIC0zLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogNWVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBoMiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luOiA4ZW0gMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udC1wb3B1cCBwIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgbWFyZ2luOiAxZW0gMWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDI1JSAyNSU7XFxyXFxuICBtYXJnaW46IDAgMWVtIDVlbSAwO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDMzZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LWhlYXJ0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IC5mYS1oZWFydCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCAuZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDE2NSwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5kaXYtaGVhcnQgLmZhLWhlYXJ0OmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCBsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBtYXJnaW4tbGVmdDogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5kaXYtaW1nIHtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZWFsIGltZyB7XFxyXFxuICB3aWR0aDogMTdlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDhlbTtcXHJcXG4gIGhlaWdodDogMi41ZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbSBoMiB7XFxyXFxuICBtYXJnaW46IDNlbSAwIC0zZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQwLCAyNDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cCBoMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIGg0IHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBtYXJnaW46IDFlbSAxZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuLm1lYWwtcG9wdXAtY2xvc2UtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE4cHg7XFxyXFxuICByaWdodDogMjhweDtcXHJcXG59XFxyXFxuKi9cXHJcXG4ubWVhbC1wb3B1cC1kaXYtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1kaXYtaW1nIGltZyB7XFxyXFxuICB3aWR0aDogMzVlbTtcXHJcXG4gIGhlaWdodDogMzBlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1jb21tZW50cy10aXRsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tdXNlcm5hbWUge1xcclxcbiAgcGFkZGluZzogMC40ZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1jb21tZW50IHtcXHJcXG4gIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogOGVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcclxcbiAgMCUge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXJlcyB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlLWNvbG9yO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQwLCAyNDApO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwLWNsb3NlLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxOHB4O1xcclxcbiAgcmlnaHQ6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAtZGl2IGltZyB7XFxyXFxuICBtYXJnaW46IDEwcHggNTBweCAxMHB4IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAtZGl2IHtcXHJcXG4gIG1hcmdpbjogMTBweCA1MHB4IDEwcHggNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cC1kaXYtcCB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDAsIDI0MCk7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwYWRkaW5nOiAwIDMycHggMCAzMnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwIGgyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udC1wb3B1cC1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwLWNsb3NlLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxOHB4O1xcclxcbiAgcmlnaHQ6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5JbmdyZWRpZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHVsIGxpIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1ZW07XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHVsIGxpIGltZyB7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHVsIGxpIGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMC4yZW07XFxyXFxuICByaWdodDogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FB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RSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDEwMDszMDA7NDAwOzcwMDs5MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tb3JhbmdlOiAjZDU3ZDFmO1xcclxcbiAgLS1ibGFjazogcmdiKDI1LCA0MiwgODYsIDAuOSk7XFxyXFxuICAtLWxpZ2h0LWNvbG9yOiAjNjY2O1xcclxcbiAgLS1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgLS1mb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mYS1jdXRsZXJ5IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cCBoNCBzcGFuIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgbWFyZ2luOiAwIDEuNWVtIDAgMC4zZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBoMSBzcGFuIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCAjbWVhbHMge1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIC0zLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogNWVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBoMiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luOiA4ZW0gMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udC1wb3B1cCBwIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgbWFyZ2luOiAxZW0gMWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDI1JSAyNSU7XFxyXFxuICBtYXJnaW46IDAgMWVtIDVlbSAwO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDMzZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LWhlYXJ0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IC5mYS1oZWFydCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCAuZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDE2NSwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5kaXYtaGVhcnQgLmZhLWhlYXJ0OmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCBsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBtYXJnaW4tbGVmdDogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5kaXYtaW1nIHtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZWFsIGltZyB7XFxyXFxuICB3aWR0aDogMTdlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDhlbTtcXHJcXG4gIGhlaWdodDogMi41ZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbSBoMiB7XFxyXFxuICBtYXJnaW46IDNlbSAwIC0zZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQwLCAyNDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cCBoMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIGg0IHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBtYXJnaW46IDFlbSAxZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuLm1lYWwtcG9wdXAtY2xvc2UtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE4cHg7XFxyXFxuICByaWdodDogMjhweDtcXHJcXG59XFxyXFxuKi9cXHJcXG4ubWVhbC1wb3B1cC1kaXYtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1kaXYtaW1nIGltZyB7XFxyXFxuICB3aWR0aDogMzVlbTtcXHJcXG4gIGhlaWdodDogMzBlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1jb21tZW50cy10aXRsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tdXNlcm5hbWUge1xcclxcbiAgcGFkZGluZzogMC40ZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1jb21tZW50IHtcXHJcXG4gIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogOGVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcclxcbiAgMCUge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXJlcyB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlLWNvbG9yO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQwLCAyNDApO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwLWNsb3NlLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxOHB4O1xcclxcbiAgcmlnaHQ6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAtZGl2IGltZyB7XFxyXFxuICBtYXJnaW46IDEwcHggNTBweCAxMHB4IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAtZGl2IHtcXHJcXG4gIG1hcmdpbjogMTBweCA1MHB4IDEwcHggNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cC1kaXYtcCB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDAsIDI0MCk7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwYWRkaW5nOiAwIDMycHggMCAzMnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwIGgyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udC1wb3B1cC1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwLWNsb3NlLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxOHB4O1xcclxcbiAgcmlnaHQ6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5JbmdyZWRpZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHVsIGxpIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1ZW07XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHVsIGxpIGltZyB7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHVsIGxpIGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMC4yZW07XFxyXFxuICByaWdodDogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGUvZGlzcGxheS1ob21lLmpzJztcclxuaW1wb3J0IHNob3dQb3B1cENhdGVnb3JpZXMgZnJvbSAnLi9tb2R1bGUvc2hvdy1wb3B1cC1jYXRlZ29yaWVzLmpzJztcclxuaW1wb3J0IHNob3dQb3B1cENvbnRhY3RzIGZyb20gJy4vbW9kdWxlL3Nob3ctcG9wdXAtY29udGFjdHMuanMnO1xyXG5cclxuZ2V0RGF0YSgpO1xyXG5cclxuY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG5tZW51TG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBnZXREYXRhKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgbWVudU1lYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWxzJyk7XHJcbm1lbnVNZWFscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBnZXREYXRhKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgbWVudUNhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWVzJyk7XHJcbm1lbnVDYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc2hvd1BvcHVwQ2F0ZWdvcmllcygpO1xyXG59KTtcclxuXHJcbmNvbnN0IG1lbnVDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzJyk7XHJcbm1lbnVDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNob3dQb3B1cENvbnRhY3RzKCk7XHJcbn0pO1xyXG4iLCJhc3luYyBmdW5jdGlvbiBhZGRMaWtlKGlkKSB7XG4gIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9vdG9ZMGZ4WGs1TGpMTWxoemp2OC9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIGxpa2VzOiAxLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGFkZExpa2U7IiwiaW1wb3J0IHNob3dDb21tZW50c0xpc3QgZnJvbSAnLi9zaG93LWNvbW1lbnRzLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gYWRkTmV3Q29tbWVudChpdGVtSWQsIHVzZXJuYW1lLCBjb21tZW50KSB7XG4gIGNvbnN0IGFwaUtleSA9ICd0bkUyazZQNUJkWjJIQ1RqYmQwVic7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBpS2V5fS9jb21tZW50cy9gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBjb21tZW50LFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuICBhd2FpdCByZXNwb25zZTtcblxuICBzaG93Q29tbWVudHNMaXN0KGl0ZW1JZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE5ld0NvbW1lbnQ7XG4iLCJjb25zdCBjb3VudCA9IChwYXJlbnQpID0+IHBhcmVudC5jaGlsZEVsZW1lbnRDb3VudDtcblxuZXhwb3J0IGRlZmF1bHQgY291bnQ7IiwiaW1wb3J0IHNob3dQb3B1cENvbW1lbnQgZnJvbSAnLi9zaG93LXBvcHVwLWNvbW1lbnQuanMnO1xyXG5pbXBvcnQgYWRkTGlrZSBmcm9tICcuL2FkZC1saWtlLmpzJztcclxuaW1wb3J0IGNvdW50IGZyb20gJy4vY291bnQtaXRlbXMuanMnO1xyXG5pbXBvcnQgc2hvd2xpa2VzIGZyb20gJy4vZGlzcGxheS1saWtlcy5qcyc7XHJcbi8vIGltcG9ydCBkaXNwbGF5Q29tbWVudHMgZnJvbSAnLi9kaXNwbGF5LWNvbW1lbnRzLmpzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoZmlsdGVyID0gJycpIHtcclxuICBsZXQgcmVzcG9uc2U7XHJcbiAgaWYgKGZpbHRlciA9PT0gJycpIHtcclxuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP3MnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz0ke2ZpbHRlcn1gKTtcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBsZW5ndGhEYXRhID0gZGF0YS5tZWFscy5sZW5ndGg7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWQnKTtcclxuICBjb25zdCByYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJyk7XHJcbiAgY29uc3QgbGlzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG4gIGxpc3RTZWN0aW9uLmJlZm9yZShoZWFkZXIpO1xyXG4gIGxpc3RTZWN0aW9uLmJlZm9yZShyYW5kb20pO1xyXG4gIGxpc3RTZWN0aW9uLnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoRGF0YTsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaXN0LmNsYXNzTmFtZSA9ICdtZWFsJztcclxuXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSAnZGl2LWltZyc7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgY29uc3QgZGVzY3JwdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGRlc2NycHQxLnNyYyA9IGAke2RhdGEubWVhbHNbaV0uc3RyTWVhbFRodW1ifWA7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzY3JwdDEpO1xyXG5cclxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjIuY2xhc3NOYW1lID0gJ2Rpdi1saWtlJztcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2Mik7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1lYWxzW2ldLnN0ck1lYWx9YDtcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2My5jbGFzc05hbWUgPSAnZGl2LWhlYXJ0JztcclxuICAgIGRpdjMuaWQgPSAnZGl2LWhlYXJ0JztcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoZGl2Myk7XHJcblxyXG4gICAgLy8gIyBsaWtlc1xyXG4gICAgY29uc3QgbGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGxpa2UuY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWhlYXJ0JztcclxuICAgIGxpa2UuaWQgPSBkYXRhLm1lYWxzW2ldLmlkTWVhbDtcclxuICAgIGRpdjMuYXBwZW5kQ2hpbGQobGlrZSk7XHJcblxyXG4gICAgc2hvd2xpa2VzKGRhdGEubWVhbHNbaV0uaWRNZWFsKTtcclxuXHJcbiAgICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGlrZUNvdW50LmlkID0gYGlkJHtkYXRhLm1lYWxzW2ldLmlkTWVhbH1gO1xyXG4gICAgbGlrZUNvdW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgZGl2My5hcHBlbmRDaGlsZChsaWtlQ291bnQpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmlkID0gZGF0YS5tZWFsc1tpXS5pZE1lYWw7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gJ0NvbW1lbnQnO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgIGxpc3RTZWN0aW9uLmFwcGVuZChsaXN0KTtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldDtcclxuICAgICAgc2hvd1BvcHVwQ29tbWVudChpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQ7XHJcbiAgICAgIGFkZExpa2UoaWQpO1xyXG4gICAgICBzaG93bGlrZXMoaWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhJyk7XHJcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFscycpO1xyXG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gYE1lYWxzICgke2NvdW50KHBhcmVudCl9KWA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XHJcbiIsImFzeW5jIGZ1bmN0aW9uIHNob3dsaWtlcyhpZCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL290b1kwZnhYazVMakxNbGh6anY4L2xpa2VzJyxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWQke2lkfWApO1xyXG4gICAgZGF0YS5tYXAoKGxpa2UpID0+IHtcclxuICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gaWQpIHtcclxuICAgICAgICBsaWtlQ291bnQudGV4dENvbnRlbnQgPSBgJHtsaWtlLmxpa2VzfSBsaWtlc2A7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vIGRvIG5vdGhpbmdcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dsaWtlczsiLCJhc3luYyBmdW5jdGlvbiBzaG93Q29tbWVudHNMaXN0KGlkKSB7XG4gIGNvbnN0IGFwaUtleSA9ICd0bkUyazZQNUJkWjJIQ1RqYmQwVic7XG4gIGNvbnN0IG1lYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlmIChtZWFsQnRuKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcGlLZXl9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLXBvcHVwLWNvbW1lbnRzLWNvbnRhaW5lcicpO1xuICAgICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtY29tbWVudHMtdGl0bGUnO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2RhdGEubGVuZ3RoIHx8IDB9KWA7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICBkYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29tbWVudFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29tbWVudFJvdy5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1jb21tZW50cy1yb3cnO1xuICAgICAgICBjb21tZW50Um93LmlubmVySFRNTCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9IGA7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb21tZW50Um93KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93Q29tbWVudHNMaXN0O1xuIiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi9kaXNwbGF5LWhvbWUuanMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2hvd1BvcHVwQ2F0ZWdvcmllcygpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvY2F0ZWdvcmllcy5waHAnKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IGNhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhdC5jbGFzc05hbWUgPSAnY2F0LXBvcHVwJztcclxuXHJcbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSAnY2F0LXBvcHVwLWNsb3NlLWljb24gZmEgZmEtdGltZXMnO1xyXG4gIGNhdC5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xyXG5cclxuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjYXQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRhdGEuY2F0ZWdvcmllcy5mb3JFYWNoKChkYXRhQ2F0KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSAnY2F0LXBvcHVwLWRpdic7XHJcbiAgICBjYXQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBjb25zdCBkaXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkltZy5jbGFzc05hbWUgPSAnY2F0LXBvcHVwLWRpdi1pbWcnO1xyXG4gICAgY2F0LmFwcGVuZENoaWxkKGRpdkltZyk7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gYCR7ZGF0YUNhdC5zdHJDYXRlZ29yeVRodW1ifWA7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwMS50ZXh0Q29udGVudCA9IGAke2RhdGFDYXQuc3RyQ2F0ZWdvcnl9YDtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwMSk7XHJcblxyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBnZXREYXRhKGRhdGFDYXQuc3RyQ2F0ZWdvcnkpO1xyXG4gICAgICBjYXQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChjYXQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXBDYXRlZ29yaWVzO1xyXG4iLCJpbXBvcnQgYWRkTmV3Q29tbWVudCBmcm9tICcuL2FkZC1uZXctY29tbWVudC5qcyc7XHJcbmltcG9ydCBzaG93Q29tbWVudHNMaXN0IGZyb20gJy4vc2hvdy1jb21tZW50cy5qcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzaG93UG9wdXBDb21tZW50KGlkKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke2lkfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbiAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lYWwuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAnO1xyXG5cclxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgY2xvc2VJY29uLmNsYXNzTmFtZSA9ICdmYSBmYS10aW1lcyc7XHJcbiAgbWVhbC5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xyXG5cclxuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtZWFsLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtZGl2LWltZyc7XHJcbiAgbWVhbC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWcuc3JjID0gYCR7ZGF0YS5tZWFsc1swXS5zdHJNZWFsVGh1bWJ9YDtcclxuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHAxLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZWFsc1swXS5zdHJNZWFsfWA7XHJcbiAgbWVhbC5hcHBlbmRDaGlsZChwMSk7XHJcblxyXG4gIGNvbnN0IEluZ3JlZGllbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgSW5ncmVkaWVudHNEaXYuY2xhc3NOYW1lID0gJ0luZ3JlZGllbnRzJztcclxuICBtZWFsLmFwcGVuZENoaWxkKEluZ3JlZGllbnRzRGl2KTtcclxuXHJcbiAgY29uc3QgSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIEluZ3JlZGllbnRzRGl2LmFwcGVuZENoaWxkKEluZ3JlZGllbnRzKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDk7IGkgPCAyOTsgaSArPSAxKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC52YWx1ZXMoZGF0YS5tZWFsc1swXSlbaV07XHJcbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IEluZ3JlZGllbnRzSXRlbXMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgSW5ncmVkaWVudHMuYXBwZW5kQ2hpbGQoSW5ncmVkaWVudHNJdGVtczEpO1xyXG5cclxuICAgICAgY29uc3QgaW1nSW5ncmVkaWVudHMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIGltZ0luZ3JlZGllbnRzMS5zcmMgPSBgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9pbWFnZXMvaW5ncmVkaWVudHMvJHt2YWx1ZX0ucG5nYDtcclxuICAgICAgSW5ncmVkaWVudHNJdGVtczEuYXBwZW5kQ2hpbGQoaW1nSW5ncmVkaWVudHMxKTtcclxuXHJcbiAgICAgIGNvbnN0IEluZ3JlZGllbnRzTmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICBJbmdyZWRpZW50c05hbWUxLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgIEluZ3JlZGllbnRzSXRlbXMxLmFwcGVuZENoaWxkKEluZ3JlZGllbnRzTmFtZTEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gIENhdGVnb3J5LnRleHRDb250ZW50ID0gJ0NhdGVnb3J5OiAnO1xyXG4gIG1lYWwuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnkpO1xyXG5cclxuICBjb25zdCBDYXRlZ29yeVNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIENhdGVnb3J5U3BhbjEudGV4dENvbnRlbnQgPSBkYXRhLm1lYWxzWzBdLnN0ckNhdGVnb3J5O1xyXG4gIENhdGVnb3J5LmFwcGVuZENoaWxkKENhdGVnb3J5U3BhbjEpO1xyXG5cclxuICBjb25zdCBBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBBcmVhLnRleHRDb250ZW50ID0gJ0FyZWE6ICc7XHJcbiAgbWVhbC5hcHBlbmRDaGlsZChBcmVhKTtcclxuXHJcbiAgY29uc3QgQ2F0ZWdvcnlTcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBDYXRlZ29yeVNwYW4yLnRleHRDb250ZW50ID0gZGF0YS5tZWFsc1swXS5zdHJBcmVhO1xyXG4gIEFyZWEuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlTcGFuMik7XHJcblxyXG4gIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZC50ZXh0Q29udGVudCA9IGAke2RhdGEubWVhbHNbMF0uc3RySW5zdHJ1Y3Rpb25zfWA7XHJcbiAgbWVhbC5hcHBlbmRDaGlsZChkKTtcclxuXHJcbiAgLy8gQ29tbWVudHNcclxuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbW1lbnRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWNvbW1lbnRzLWNvbnRhaW5lcic7XHJcbiAgbWVhbC5hcHBlbmRDaGlsZChjb21tZW50c0NvbnRhaW5lcik7XHJcblxyXG4gIHNob3dDb21tZW50c0xpc3QoaWQpO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGZvcm0uY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybSc7XHJcbiAgbWVhbC5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBmb3JtVGl0bGUuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS10aXRsZSc7XHJcbiAgZm9ybVRpdGxlLmlubmVySFRNTCA9ICdBZGQgYSBjb21tZW50JztcclxuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGZvcm1Vc2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZm9ybVVzZXJuYW1lLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tdXNlcm5hbWUnO1xyXG4gIGZvcm1Vc2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVVzZXJuYW1lKTtcclxuXHJcbiAgY29uc3QgZm9ybUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIGZvcm1Db21tZW50LmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tY29tbWVudCc7XHJcbiAgZm9ybUNvbW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIGluc2lnaHRzJyk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQ29tbWVudCk7XHJcblxyXG4gIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBmb3JtQnRuLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tYnRuJztcclxuICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBjb21tZW50Jyk7XHJcbiAgZm9ybUJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCc7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnRuKTtcclxuXHJcbiAgY29uc3QgZm9ybVJlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBmb3JtUmVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tcmVzJztcclxuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1SZXNDb250YWluZXIpO1xyXG5cclxuICBmb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChmb3JtVXNlcm5hbWUudmFsdWUgJiYgZm9ybUNvbW1lbnQudmFsdWUpIHtcclxuICAgICAgYWRkTmV3Q29tbWVudChpZCwgZm9ybVVzZXJuYW1lLnZhbHVlLCBmb3JtQ29tbWVudC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmb3JtUmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBmb3JtUmVzLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tcmVzJztcclxuICAgICAgZm9ybVJlcy5pbm5lckhUTUwgPSAnVXNlcm5hbWUgYW5kIGNvbW1lbnQgc2hvdWxkIG5vdCBiZSBlbXB0eSc7XHJcbiAgICAgIGZvcm1SZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGZvcm1SZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJlcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1lYWwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXBDb21tZW50O1xyXG4iLCJjb25zdCBzaG93UG9wdXBDb250YWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250LmNsYXNzTmFtZSA9ICdjb250LXBvcHVwJztcclxuXHJcbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSAnY29udC1wb3B1cC1jbG9zZS1pY29uIGZhIGZhLXRpbWVzJztcclxuICBjb250LmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XHJcblxyXG4gIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwMS50ZXh0Q29udGVudCA9ICdDb250YWN0czonO1xyXG4gIGNvbnQuYXBwZW5kQ2hpbGQocDEpO1xyXG5cclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuY2xhc3NOYW1lID0gJ2NvbnQtcG9wdXAtZGl2JztcclxuICBjb250LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQoZGl2MSk7XHJcblxyXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAyLmNsYXNzTmFtZSA9ICdjb250LXBvcHVwLXAnO1xyXG4gIHAyLmlubmVySFRNTCA9IGAgXHJcbiAg8J+RpCBPZGFpIEFsYXp6ZWggPGJyPlxyXG4gICAgICBHaXRIdWI6IEBvZGFpYWxhenplaCA8YnI+XHJcbiAgICAgIFR3aXR0ZXI6IEBvZGFpYWxhenplaDQgPGJyPlxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL29kYWktYWxhenplaC0wMTU0NjAyNGEvXCI+TGlua2VkSW48L2E+YDtcclxuICBkaXYxLmFwcGVuZENoaWxkKHAyKTtcclxuXHJcbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcclxuXHJcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcDMuY2xhc3NOYW1lID0gJ2NvbnQtcG9wdXAtcCc7XHJcbiAgcDMuaW5uZXJIVE1MID0gYCBcclxuICDwn5GkIFNlcmdpeSBTaGtvbG5payA8YnI+XHJcbiAgR2l0SHViOiBAU2VyZ1Nrb2wgPGJyPlxyXG4gIFR3aXR0ZXI6IEBzcHM2NzYgPGJyPlxyXG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2VyZ2l5LXNoa29sbmlrLTc4MDFhNTMvXCI+TGlua2VkSW48L2E+YDtcclxuICBkaXYyLmFwcGVuZENoaWxkKHAzKTtcclxuXHJcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXBDb250YWN0cztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9