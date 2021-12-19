/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/card */ \"./src/modules/card.js\");\n/* harmony import */ var _modules_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/category */ \"./src/modules/category.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n\r\n\r\n\r\n\r\n(0,_modules_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_category__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/index.js?");

/***/ }),

/***/ "./src/modules/card.js":
/*!*****************************!*\
  !*** ./src/modules/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n  let openModal = document.getElementById(\"cart\");\r\n  let modal = document.querySelector(\".cart\");\r\n  let cartClose = modal.querySelector(\".cart-close\");\r\n  openModal.addEventListener(\"click\", () => {\r\n    modal.style.display = \"flex\";\r\n  });\r\n\r\n  cartClose.addEventListener(\"click\", () => {\r\n    modal.style.display = \"\";\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/card.js?");

/***/ }),

/***/ "./src/modules/category.js":
/*!*********************************!*\
  !*** ./src/modules/category.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst category = () => {\r\n  let catalogButton = document.querySelector(\".catalog-button\");\r\n  let catalog = document.querySelector(\".catalog\");\r\n  let isOpen = false;\r\n  catalogButton.addEventListener(\"click\", () => {\r\n    isOpen = !isOpen;\r\n    isOpen ? (catalog.style.display = \"flex\") : (catalog.style.display = \"\");\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (category);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/category.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"catalogFilter\": () => (/* binding */ catalogFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter)\n/* harmony export */ });\nconst searchFilter = (data, value) => {\r\n  return data.filter((elem) => {\r\n    return elem.title.toLowerCase().includes(value.toLowerCase());\r\n  });\r\n};\r\nconst catalogFilter = (data, value) => {\r\n  return data.filter((elem) => {\r\n    return elem.category.includes(value);\r\n  });\r\n};\r\nconst priceFilter = (data, min = 1) => {\r\n  return data.filter((elem) => {\r\n    return elem.price > min;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/getDate.js":
/*!********************************!*\
  !*** ./src/modules/getDate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDate = () => {\r\n  return fetch(\r\n    \"https://mytestapp-253712-default-rtdb.firebaseio.com/goods.json\"\r\n  ).then((response) => response.json());\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDate);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/getDate.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ \"./src/modules/getDate.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\nconst load = () => {\r\n  let openModal = document.getElementById(\"cart\");\r\n  (0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((res) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet renderGoods = (data) => {\r\n  let rowNoGuttersGoods = document.querySelector(\".goods\");\r\n  rowNoGuttersGoods.innerHTML = \"\";\r\n  data.forEach((element) => {\r\n    rowNoGuttersGoods.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-sale\">${element.sale ? \"🔥Hot Sale🔥\" : \"\"}</div>\r\n        <div class=\"card-img-wrapper\">\r\n          <span\r\n            class=\"card-img-top\"\r\n            style=\"\r\n              background-image: url('${element.img}');\r\n            \"\r\n          ></span>\r\n        </div>\r\n        <div class=\"card-body justify-content-between\">\r\n          <div class=\"card-price\">${element.price} ₽</div>\r\n          <h5 class=\"card-title\">${element.title}</h5>\r\n          <button class=\"btn btn-primary\">В корзину</button>\r\n        </div>\r\n      </div>\r\n    </div>`\r\n    );\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ \"./src/modules/getDate.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\nconst search = () => {\r\n  let searchWrapperInput = document.querySelector(\".search-wrapper_input\");\r\n  let catalog = document.querySelector(\".catalog\");\r\n  let catalogList = catalog.querySelector(\"ul\");\r\n  let filterPriceRange = document.querySelector(\".filter-price_range\");\r\n  let min;\r\n  let max;\r\n\r\n  searchWrapperInput.addEventListener(\"input\", (event) => {\r\n    const value = event.target.value;\r\n    (0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((date) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(date, value)));\r\n  });\r\n\r\n  catalogList.addEventListener(\"click\", (e) => {\r\n    let value = e.target;\r\n    if (value.closest(\"li\")) {\r\n      (0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((date) =>\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_2__.catalogFilter)(date, value.innerHTML))\r\n      );\r\n    }\r\n  });\r\n\r\n  filterPriceRange.addEventListener(\"input\", (e) => {\r\n    let t = e.target.closest(\"#min\");\r\n    (0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, Number(t.value))));\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/search.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;