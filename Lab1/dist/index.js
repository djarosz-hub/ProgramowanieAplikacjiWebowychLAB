/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Lab1/src/index.ts":
/*!***************************!*\
  !*** ./Lab1/src/index.ts ***!
  \***************************/
/***/ (() => {

eval("const users = [\r\n    { name: 'John', surname: 'Smith', age: 25, role: 'user' },\r\n    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },\r\n    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },\r\n];\r\nconst admins = [\r\n    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },\r\n    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },\r\n];\r\nfunction logPerson(person) {\r\n    console.log(`${person.name} ${person.surname}, age: ${person.age}, role: ${person.role}`);\r\n}\r\nfunction filterPersons(persons, criteria) {\r\n    return persons.filter(criteria);\r\n}\r\nfunction namedAdam(param) {\r\n    return param.name === 'Adam';\r\n}\r\nconst persons = [...users, ...admins];\r\nfor (const p of persons)\r\n    logPerson(p);\r\nconsole.log('---');\r\nconst ageAbove = persons.filter(p => p.age > 25);\r\nfor (const p of ageAbove)\r\n    logPerson(p);\r\nconsole.log('---');\r\nconst filtered = filterPersons(persons, namedAdam);\r\nfor (const p of filtered)\r\n    console.log(p);\r\n\n\n//# sourceURL=webpack://programowanieaplikacjiwebowychlab/./Lab1/src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Lab1/src/index.ts"]();
/******/ 	
/******/ })()
;