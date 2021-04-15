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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Lab4/src/styles/styles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Lab4/src/styles/styles.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #eeeea7;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab4/src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./Lab4/src/styles/styles.scss":
/*!*************************************!*\
  !*** ./Lab4/src/styles/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Lab4/src/styles/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab4/src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./Lab4/src/gamesEnum.ts":
/*!*******************************!*\
  !*** ./Lab4/src/gamesEnum.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Games\": () => (/* binding */ Games)\n/* harmony export */ });\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n})(Games || (Games = {}));\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab4/src/gamesEnum.ts?");

/***/ }),

/***/ "./Lab4/src/index.ts":
/*!***************************!*\
  !*** ./Lab4/src/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamesEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamesEnum */ \"./Lab4/src/gamesEnum.ts\");\n/* harmony import */ var _tictactoe_tictactoe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tictactoe/tictactoe */ \"./Lab4/src/tictactoe/tictactoe.ts\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.scss */ \"./Lab4/src/styles/styles.scss\");\n\r\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.init();\r\n    }\r\n    init() {\r\n        const menuContainer = (document.createElement('div'));\r\n        const gameContainer = (document.createElement('div'));\r\n        const list = document.createElement('ul');\r\n        menuContainer.setAttribute(\"id\", \"gameList\");\r\n        gameContainer.setAttribute(\"id\", \"gameSpot\");\r\n        for (const gameKind of Object.keys(_gamesEnum__WEBPACK_IMPORTED_MODULE_0__.Games)) {\r\n            if (isNaN(Number(gameKind)))\r\n                continue;\r\n            const game = gameFactory.getGame(Number(gameKind));\r\n            const item = document.createElement('li');\r\n            item.appendChild(document.createTextNode(game.name));\r\n            item.addEventListener(\"click\", () => {\r\n                gameContainer.innerHTML = \"\";\r\n                gameContainer.appendChild(game.getGameElement());\r\n            });\r\n            list.appendChild(item);\r\n        }\r\n        menuContainer.appendChild(list);\r\n        const main = document.createElement('main');\r\n        main.setAttribute('id', 'mainContainer');\r\n        main.appendChild(menuContainer);\r\n        main.appendChild(gameContainer);\r\n        document.body.appendChild(main);\r\n    }\r\n}\r\nclass GameFactory {\r\n    getGame(game) {\r\n        switch (game) {\r\n            case _gamesEnum__WEBPACK_IMPORTED_MODULE_0__.Games.TicTacToe:\r\n                return new _tictactoe_tictactoe__WEBPACK_IMPORTED_MODULE_1__.TicTacToe;\r\n            default:\r\n                throw new Error('invalid game');\r\n        }\r\n    }\r\n}\r\nlet gameFactory = new GameFactory();\r\nnew App();\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab4/src/index.ts?");

/***/ }),

/***/ "./Lab4/src/tictactoe/Board.ts":
/*!*************************************!*\
  !*** ./Lab4/src/tictactoe/Board.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./Lab4/src/tictactoe/Cell.ts\");\n\r\nclass Board {\r\n    constructor(size) {\r\n        this.currentSymbol = 1;\r\n        this.cells = new Array(size);\r\n        this.tableSize = size;\r\n        let table = document.getElementById(\"tictactoe\");\r\n        let i = 0;\r\n        for (let r = 0; r < size; r++) {\r\n            let row = table.insertRow(r);\r\n            for (let c = 0; c < size; c++) {\r\n                let cell = row.insertCell(c);\r\n                cell.className = \"cell\";\r\n                const newCell = new _Cell__WEBPACK_IMPORTED_MODULE_0__.default(cell, r, c);\r\n                this.cells[i] = newCell;\r\n                cell.addEventListener(\"click\", () => this.makeMove(newCell), false);\r\n                i++;\r\n            }\r\n        }\r\n    }\r\n    setHeaderValue(currSymbol) {\r\n        const header = document.getElementById('tttHeader');\r\n        let val = \"\";\r\n        switch (currSymbol) {\r\n            case 1: {\r\n                val = 'Ruch: krzyżyk';\r\n                break;\r\n            }\r\n            case -1: {\r\n                val = 'Ruch: kółko';\r\n                break;\r\n            }\r\n            case 10: {\r\n                val = 'Wygrywa krzyżyk';\r\n                break;\r\n            }\r\n            case -10: {\r\n                val = 'Wygrywa kółko';\r\n                break;\r\n            }\r\n            case 0: {\r\n                val = 'Remis!';\r\n                break;\r\n            }\r\n        }\r\n        header.innerHTML = val;\r\n    }\r\n    makeMove(cell) {\r\n        if (cell.setCellValue(this.currentSymbol)) {\r\n            if (this.checkForGameFinish()) {\r\n                return;\r\n            }\r\n            this.currentSymbol *= -1;\r\n            this.setHeaderValue(this.currentSymbol);\r\n        }\r\n    }\r\n    checkForGameFinish() {\r\n        const size = this.tableSize;\r\n        if (this.rowCheck(size)) {\r\n            this.setHeaderValue(this.currentSymbol * 10);\r\n            return true;\r\n        }\r\n        if (this.columnCheck(size)) {\r\n            this.setHeaderValue(this.currentSymbol * 10);\r\n            return true;\r\n        }\r\n        if (this.diagonalCheck(size)) {\r\n            this.setHeaderValue(this.currentSymbol * 10);\r\n            return true;\r\n        }\r\n        if (this.tieCheck(size)) {\r\n            this.setHeaderValue(0);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    rowCheck(size) {\r\n        const cells = this.cellsWithActualSymbol();\r\n        if (cells.length < size) {\r\n            return false;\r\n        }\r\n        for (let r = 0; r < size; r++) {\r\n            let correctCellsInRow = 0;\r\n            for (let c = 0; c < size; c++) {\r\n                for (const cell of cells) {\r\n                    if (cell.colPos === c && cell.rowPos === r) {\r\n                        correctCellsInRow++;\r\n                    }\r\n                }\r\n            }\r\n            if (correctCellsInRow === size) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    columnCheck(size) {\r\n        const cells = this.cellsWithActualSymbol();\r\n        if (cells.length < size) {\r\n            return false;\r\n        }\r\n        for (let c = 0; c < size; c++) {\r\n            let correctCellsInColumn = 0;\r\n            for (let r = 0; r < size; r++) {\r\n                for (const cell of cells) {\r\n                    if (cell.colPos === c && cell.rowPos === r) {\r\n                        correctCellsInColumn++;\r\n                    }\r\n                }\r\n            }\r\n            if (correctCellsInColumn === size) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    diagonalCheck(size) {\r\n        const cells = this.cellsWithActualSymbol();\r\n        if (cells.length < size) {\r\n            return false;\r\n        }\r\n        let correctCellsDiagonally = 0;\r\n        for (let d = 0; d < size; d++) {\r\n            for (const cell of cells) {\r\n                if (cell.rowPos === d && cell.colPos === d ||\r\n                    cell.colPos === size - 1 - d && cell.rowPos === d) {\r\n                    correctCellsDiagonally++;\r\n                }\r\n            }\r\n        }\r\n        if (correctCellsDiagonally === size) {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    tieCheck(size) {\r\n        return false;\r\n    }\r\n    cellsWithActualSymbol() {\r\n        const correctCells = [];\r\n        for (const cell of this.cells) {\r\n            if (cell.cellValue === this.currentSymbol)\r\n                correctCells.push(cell);\r\n        }\r\n        return correctCells;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab4/src/tictactoe/Board.ts?");

/***/ }),

/***/ "./Lab4/src/tictactoe/Cell.ts":
/*!************************************!*\
  !*** ./Lab4/src/tictactoe/Cell.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cell)\n/* harmony export */ });\nclass Cell {\r\n    constructor(cell, rowPos, colPos) {\r\n        this.htmlElement = cell;\r\n        this.rowPos = rowPos;\r\n        this.colPos = colPos;\r\n    }\r\n    setCellValue(value) {\r\n        if (this.cellValue === 1 || this.cellValue === -1)\r\n            return false;\r\n        this.cellValue = value;\r\n        switch (this.cellValue) {\r\n            case -1: {\r\n                this.htmlElement.innerHTML = \"O\";\r\n                break;\r\n            }\r\n            case 1: {\r\n                this.htmlElement.innerHTML = \"X\";\r\n                break;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab4/src/tictactoe/Cell.ts?");

/***/ }),

/***/ "./Lab4/src/tictactoe/tictactoe.ts":
/*!*****************************************!*\
  !*** ./Lab4/src/tictactoe/tictactoe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TicTacToe\": () => (/* binding */ TicTacToe)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./Lab4/src/tictactoe/Board.ts\");\n\r\nclass TicTacToe {\r\n    constructor() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n    }\r\n    getGameElement() {\r\n        const container = document.createElement('div');\r\n        const header = document.createElement('div');\r\n        header.setAttribute('id', 'tttHeader');\r\n        const table = document.createElement('table');\r\n        table.setAttribute('id', 'tictactoe');\r\n        container.appendChild(document.createTextNode(\"Hello TicTacToe\"));\r\n        container.appendChild(header);\r\n        container.appendChild(table);\r\n        let tableSize = 3;\r\n        setTimeout(() => new _Board__WEBPACK_IMPORTED_MODULE_0__.default(tableSize), 1);\r\n        return container;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab4/src/tictactoe/tictactoe.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Lab4/src/index.ts");
/******/ 	
/******/ })()
;