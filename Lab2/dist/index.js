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

/***/ "./Lab2/src/Animal.ts":
/*!****************************!*\
  !*** ./Lab2/src/Animal.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animal)\n/* harmony export */ });\nclass Animal {\r\n    constructor(theName) {\r\n        this.name = theName;\r\n    }\r\n    move(distanceInMeters = 0) {\r\n        console.log(`${this.name} moved ${distanceInMeters}m.`);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab2/src/Animal.ts?");

/***/ }),

/***/ "./Lab2/src/Horse.ts":
/*!***************************!*\
  !*** ./Lab2/src/Horse.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Horse)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./Lab2/src/Animal.ts\");\n\r\nclass Horse extends _Animal__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(name) {\r\n        super(name);\r\n    }\r\n    move(distanceInMeters = 45) {\r\n        console.log(\"Galloping...\");\r\n        super.move(distanceInMeters);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab2/src/Horse.ts?");

/***/ }),

/***/ "./Lab2/src/Snake.ts":
/*!***************************!*\
  !*** ./Lab2/src/Snake.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Snake)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./Lab2/src/Animal.ts\");\n\r\nclass Snake extends _Animal__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(name) {\r\n        super(name);\r\n    }\r\n    move(distanceInMeters = 5) {\r\n        console.log(\"Slithering...\");\r\n        super.move(distanceInMeters);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab2/src/Snake.ts?");

/***/ }),

/***/ "./Lab2/src/index.ts":
/*!***************************!*\
  !*** ./Lab2/src/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./Lab2/src/Snake.ts\");\n/* harmony import */ var _Horse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Horse */ \"./Lab2/src/Horse.ts\");\n\r\n\r\nlet sam = new _Snake__WEBPACK_IMPORTED_MODULE_0__.default(\"Sammy the Python\");\r\nlet tom = new _Horse__WEBPACK_IMPORTED_MODULE_1__.default(\"Tommy the Palomino\");\r\nsam.move();\r\ntom.move(34);\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab2/src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Lab2/src/index.ts");
/******/ 	
/******/ })()
;