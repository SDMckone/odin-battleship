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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_generateGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/generateGrid */ \"./src/modules/generateGrid.js\");\n/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\");\n\r\n\r\n\r\nconst playerSide = document.querySelector(\"#player-side\");\r\nconst playerGameBoard = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](10, 10);\r\nplayerSide.appendChild((0,_modules_generateGrid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerGameBoard, 10, 10, false));\r\n\r\nconst hostileSide = document.querySelector(\"#hostile-side\");\r\nconst hostileGameBoard = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](10, 10);\r\nhostileGameBoard.placeShip(5, 0, 0, true);\r\nhostileSide.appendChild((0,_modules_generateGrid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hostileGameBoard, 10, 10, true));\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\r\n\r\nclass Gameboard {\r\n  constructor(width, height) {\r\n    this.shipsAndLocations = [];\r\n    this.occupiedCoords = [];\r\n    this.width = width;\r\n    this.height = height;\r\n  }\r\n\r\n  placeShip(length, x, y, isHorizontal) {\r\n    const newShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\r\n    const coordsArray = [];\r\n\r\n    if (isHorizontal) {\r\n      if (y + length > this.width) {\r\n        return false;\r\n      }\r\n\r\n      for (let i = y; i < length + y; i += 1) {\r\n        coordsArray.push([x, i]);\r\n      }\r\n    } else {\r\n      if (x + length > this.height) {\r\n        return false;\r\n      }\r\n\r\n      for (let i = x; i < length + x; i += 1) {\r\n        coordsArray.push([i, y]);\r\n      }\r\n    }\r\n\r\n    for (let i = 0; i < this.occupiedCoords.length; i += 1) {\r\n      for (let j = 0; j < coordsArray.length; j += 1) {\r\n        if (\r\n          this.occupiedCoords[i][0] === coordsArray[j][0] &&\r\n          this.occupiedCoords[i][1] === coordsArray[j][1]\r\n        ) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n\r\n    this.shipsAndLocations.push({\r\n      ship: newShip,\r\n      coordsArray,\r\n    });\r\n\r\n    this.occupiedCoords = this.occupiedCoords.concat(coordsArray);\r\n\r\n    return true;\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    for (let i = 0; i < this.shipsAndLocations.length; i += 1) {\r\n      for (\r\n        let j = 0;\r\n        j < this.shipsAndLocations[i].coordsArray.length;\r\n        j += 1\r\n      ) {\r\n        if (\r\n          x === this.shipsAndLocations[i].coordsArray[j][0] &&\r\n          y === this.shipsAndLocations[i].coordsArray[j][1]\r\n        ) {\r\n          this.shipsAndLocations[i].ship.hit();\r\n          return true;\r\n        }\r\n      }\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  allSunk() {\r\n    for (let i = 0; i < this.shipsAndLocations.length; i += 1) {\r\n      if (!this.shipsAndLocations[i].ship.isSunk()) {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n\r\n  getOccupiedCoords() {\r\n    return this.occupiedCoords;\r\n  }\r\n\r\n  getShipsAndLocations() {\r\n    return this.shipsAndLocations;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length = 5) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n  }\r\n\r\n  hit() {\r\n    this.hits += 1;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.hits === this.length;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/Ship.js?");

/***/ }),

/***/ "./src/modules/generateGrid.js":
/*!*************************************!*\
  !*** ./src/modules/generateGrid.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateGrid(gameboard, width, height, hostileSide) {\r\n  const gridContainer = document.createElement(\"div\");\r\n  gridContainer.classList.add(\"grid-container\");\r\n\r\n  for (let i = 0; i < height; i += 1) {\r\n    const gridRowContainer = document.createElement(\"div\");\r\n    gridRowContainer.classList.add(\"grid-row-container\");\r\n\r\n    for (let j = 0; j < width; j += 1) {\r\n      const gridSquare = document.createElement(\"div\");\r\n      gridSquare.classList.add(\"grid-square\");\r\n      gridSquare.classList.add(\"clear\");\r\n      if (hostileSide) {\r\n        gridSquare.classList.add(\"hostile-side\");\r\n\r\n        gridSquare.addEventListener(\"click\", () => {\r\n          if (gridSquare.classList.contains(\"clear\")) {\r\n            const wasHit = gameboard.receiveAttack(i, j);\r\n            gridSquare.classList.remove(\"clear\");\r\n\r\n            if (wasHit) {\r\n              gridSquare.classList.add(\"hit\");\r\n            } else {\r\n              gridSquare.classList.add(\"miss\");\r\n            }\r\n          }\r\n        });\r\n      }\r\n\r\n      gridRowContainer.appendChild(gridSquare);\r\n    }\r\n\r\n    gridContainer.appendChild(gridRowContainer);\r\n  }\r\n\r\n  return gridContainer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateGrid);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/generateGrid.js?");

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