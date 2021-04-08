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

/***/ "./Lab3/src/Board.ts":
/*!***************************!*\
  !*** ./Lab3/src/Board.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./Lab3/src/Cell.ts\");\n\r\nclass Board {\r\n    constructor(size) {\r\n        this.currentSymbol = 1;\r\n        this.cells = new Array(size);\r\n        this.tableSize = size;\r\n        let table = document.getElementById(\"tictactoe\");\r\n        let i = 0;\r\n        for (let r = 0; r < size; r++) {\r\n            let row = table.insertRow(r);\r\n            for (let c = 0; c < size; c++) {\r\n                let cell = row.insertCell(c);\r\n                cell.className = \"cell\";\r\n                const newCell = new _Cell__WEBPACK_IMPORTED_MODULE_0__.default(cell, r, c);\r\n                this.cells[i] = newCell;\r\n                cell.addEventListener(\"click\", () => this.makeMove(newCell), false);\r\n                i++;\r\n            }\r\n        }\r\n    }\r\n    setHeaderValue(currSymbol) {\r\n        const header = document.getElementById('header');\r\n        let val = \"\";\r\n        switch (currSymbol) {\r\n            case 1: {\r\n                val = 'Ruch: krzyżyk';\r\n                break;\r\n            }\r\n            case -1: {\r\n                val = 'Ruch: kółko';\r\n                break;\r\n            }\r\n            case 10: {\r\n                val = 'Wygrywa krzyżyk';\r\n                break;\r\n            }\r\n            case -10: {\r\n                val = 'Wygrywa kółko';\r\n                break;\r\n            }\r\n            case 0: {\r\n                val = 'Remis!';\r\n                break;\r\n            }\r\n        }\r\n        header.innerHTML = val;\r\n    }\r\n    makeMove(cell) {\r\n        if (cell.setCellValue(this.currentSymbol)) {\r\n            if (this.checkForGameFinish()) {\r\n                return;\r\n            }\r\n            this.currentSymbol *= -1;\r\n            this.setHeaderValue(this.currentSymbol);\r\n        }\r\n    }\r\n    checkForGameFinish() {\r\n        const size = this.tableSize;\r\n        if (this.rowCheck(size)) {\r\n            this.setHeaderValue(this.currentSymbol * 10);\r\n            return true;\r\n        }\r\n        if (this.columnCheck(size)) {\r\n            this.setHeaderValue(this.currentSymbol * 10);\r\n            return true;\r\n        }\r\n        if (this.diagonalCheck(size)) {\r\n            this.setHeaderValue(this.currentSymbol * 10);\r\n            return true;\r\n        }\r\n        if (this.tieCheck(size)) {\r\n            this.setHeaderValue(0);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    rowCheck(size) {\r\n        const cells = this.cellsWithActualSymbol();\r\n        if (cells.length < size) {\r\n            return false;\r\n        }\r\n        for (let r = 0; r < size; r++) {\r\n            let correctCellsInRow = 0;\r\n            for (let c = 0; c < size; c++) {\r\n                for (const cell of cells) {\r\n                    if (cell.colPos === c && cell.rowPos === r) {\r\n                        correctCellsInRow++;\r\n                    }\r\n                }\r\n            }\r\n            if (correctCellsInRow === size) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    columnCheck(size) {\r\n        const cells = this.cellsWithActualSymbol();\r\n        if (cells.length < size) {\r\n            return false;\r\n        }\r\n        for (let c = 0; c < size; c++) {\r\n            let correctCellsInColumn = 0;\r\n            for (let r = 0; r < size; r++) {\r\n                for (const cell of cells) {\r\n                    if (cell.colPos === c && cell.rowPos === r) {\r\n                        correctCellsInColumn++;\r\n                    }\r\n                }\r\n            }\r\n            if (correctCellsInColumn === size) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    diagonalCheck(size) {\r\n        const cells = this.cellsWithActualSymbol();\r\n        if (cells.length < size) {\r\n            return false;\r\n        }\r\n        let correctCellsDiagonally = 0;\r\n        for (let d = 0; d < size; d++) {\r\n            for (const cell of cells) {\r\n                if (cell.colPos === d && cell.rowPos === d) {\r\n                    correctCellsDiagonally++;\r\n                }\r\n            }\r\n        }\r\n        if (correctCellsDiagonally === size) {\r\n            return true;\r\n        }\r\n        let correctCellsDiagonallyReverse = 0;\r\n        for (let d = 0; d < size; d++) {\r\n            for (const cell of cells) {\r\n                if (cell.colPos === size - 1 - d && cell.rowPos === d) {\r\n                    correctCellsDiagonallyReverse++;\r\n                }\r\n            }\r\n        }\r\n        if (correctCellsDiagonallyReverse === size) {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    tieCheck(size) {\r\n        return false;\r\n    }\r\n    cellsWithActualSymbol() {\r\n        const correctCells = [];\r\n        for (const cell of this.cells) {\r\n            if (cell.cellValue === this.currentSymbol)\r\n                correctCells.push(cell);\r\n        }\r\n        return correctCells;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab3/src/Board.ts?");

/***/ }),

/***/ "./Lab3/src/Cell.ts":
/*!**************************!*\
  !*** ./Lab3/src/Cell.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cell)\n/* harmony export */ });\nclass Cell {\r\n    constructor(cell, rowPos, colPos) {\r\n        this.htmlElement = cell;\r\n        this.rowPos = rowPos;\r\n        this.colPos = colPos;\r\n    }\r\n    setCellValue(value) {\r\n        if (this.cellValue === 1 || this.cellValue === -1)\r\n            return false;\r\n        this.cellValue = value;\r\n        switch (this.cellValue) {\r\n            case -1: {\r\n                this.htmlElement.innerHTML = \"O\";\r\n                break;\r\n            }\r\n            case 1: {\r\n                this.htmlElement.innerHTML = \"X\";\r\n                break;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab3/src/Cell.ts?");

/***/ }),

/***/ "./Lab3/src/index.ts":
/*!***************************!*\
  !*** ./Lab3/src/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./Lab3/src/Board.ts\");\n\r\nlet tableSize = 3;\r\nconst board = new _Board__WEBPACK_IMPORTED_MODULE_0__.default(tableSize);\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab3/src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Lab3/src/index.ts");
/******/ 	
/******/ })()
;