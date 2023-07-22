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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _modules_DomGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DomGrid */ \"./src/modules/DomGrid.js\");\n\r\n\r\n\r\nconst placementGrid = document.querySelector(\"#placement-grid\");\r\nconst placementGameBoard = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 10);\r\nconst placementDomGrid = new _modules_DomGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](placementGameBoard);\r\nplacementDomGrid.makePlacementGrid();\r\n\r\nplacementGrid.appendChild(placementDomGrid.gridContainer);\r\n\r\nconst playerSide = document.querySelector(\"#player-side\");\r\nconst playerGameBoard = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 10);\r\nplayerGameBoard.placeShipsRandomly([5, 4, 3, 2, 2, 1, 1]);\r\nconst playerDomGrid = new _modules_DomGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](playerGameBoard);\r\n// for (let i = 0; i < playerGameBoard.shipsAndLocations.length; i += 1) {\r\n//   for (\r\n//     let j = 0;\r\n//     j < playerGameBoard.shipsAndLocations[i].coordsArray.length;\r\n//     j += 1\r\n//   ) {\r\n//     grid = setSquareColor(\r\n//       grid,\r\n//       playerGameBoard.shipsAndLocations[i].coordsArray[j][0],\r\n//       playerGameBoard.shipsAndLocations[i].coordsArray[j][1],\r\n//       \"ship\"\r\n//     );\r\n//   }\r\n// }\r\n\r\nplayerSide.appendChild(playerDomGrid.gridContainer);\r\n\r\nconst hostileSide = document.querySelector(\"#hostile-side\");\r\nconst hostileGameBoard = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 10);\r\nhostileGameBoard.placeShipsRandomly([5, 4, 3, 2, 2, 1, 1]);\r\nconst hostileDomGrid = new _modules_DomGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](hostileGameBoard);\r\nhostileSide.appendChild(hostileDomGrid.gridContainer);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/DomGrid.js":
/*!********************************!*\
  !*** ./src/modules/DomGrid.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DomGrid {\r\n  constructor(gameboard) {\r\n    this.gridContainer = document.createElement(\"div\");\r\n    this.gridContainer.classList.add(\"grid-container\");\r\n\r\n    for (let i = 0; i < gameboard.height; i += 1) {\r\n      const gridRowContainer = document.createElement(\"div\");\r\n      gridRowContainer.classList.add(\"grid-row-container\");\r\n\r\n      for (let j = 0; j < gameboard.width; j += 1) {\r\n        const gridSquare = document.createElement(\"div\");\r\n        gridSquare.classList.add(\"grid-square\");\r\n        gridSquare.classList.add(\"clear\");\r\n\r\n        gridRowContainer.appendChild(gridSquare);\r\n      }\r\n\r\n      this.gridContainer.appendChild(gridRowContainer);\r\n    }\r\n  }\r\n\r\n  setSquareColor(x, y, state) {\r\n    const square = this.gridContainer.children.item(x).children.item(y);\r\n    square.classList.remove(\"clear\");\r\n\r\n    switch (state) {\r\n      case \"clear\":\r\n        square.classList.add(\"clear\");\r\n        break;\r\n      case \"hit\":\r\n        square.classList.add(\"hit\");\r\n        break;\r\n      case \"miss\":\r\n        square.classList.add(\"miss\");\r\n        break;\r\n      case \"ship\":\r\n        square.classList.add(\"ship\");\r\n        break;\r\n      case \"ship-placement\":\r\n        square.classList.add(\"ship-placement\");\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n\r\n  makePlacementGrid() {\r\n    for (let i = 0; i < this.gridContainer.children.length; i += 1) {\r\n      for (\r\n        let j = 0;\r\n        j < this.gridContainer.children.item(i).children.length;\r\n        j += 1\r\n      ) {\r\n        const gridSquare = this.gridContainer.children.item(i).children.item(j);\r\n\r\n        gridSquare.addEventListener(\"mouseover\", () => {\r\n          gridSquare.classList.add(\"ship-placement\");\r\n        });\r\n        gridSquare.addEventListener(\"mouseleave\", () => {\r\n          gridSquare.classList.remove(\"ship-placement\");\r\n        });\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomGrid);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/DomGrid.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\r\n\r\nclass Gameboard {\r\n  constructor(width, height) {\r\n    this.shipsAndLocations = [];\r\n    this.occupiedCoords = [];\r\n    this.width = width;\r\n    this.height = height;\r\n  }\r\n\r\n  placeShip(length, x, y, isHorizontal) {\r\n    const newShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\r\n    const coordsArray = [];\r\n\r\n    if (isHorizontal) {\r\n      if (y + length > this.width) {\r\n        return false;\r\n      }\r\n\r\n      for (let i = y; i < length + y; i += 1) {\r\n        coordsArray.push([x, i]);\r\n      }\r\n    } else {\r\n      if (x + length > this.height) {\r\n        return false;\r\n      }\r\n\r\n      for (let i = x; i < length + x; i += 1) {\r\n        coordsArray.push([i, y]);\r\n      }\r\n    }\r\n\r\n    for (let i = 0; i < this.occupiedCoords.length; i += 1) {\r\n      for (let j = 0; j < coordsArray.length; j += 1) {\r\n        if (\r\n          this.occupiedCoords[i][0] === coordsArray[j][0] &&\r\n          this.occupiedCoords[i][1] === coordsArray[j][1]\r\n        ) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n\r\n    this.shipsAndLocations.push({\r\n      ship: newShip,\r\n      coordsArray,\r\n    });\r\n\r\n    this.occupiedCoords = this.occupiedCoords.concat(coordsArray);\r\n\r\n    return true;\r\n  }\r\n\r\n  placeShipsRandomly(shipList) {\r\n    for (let i = 0; i < shipList.length; i += 1) {\r\n      let validPlacement;\r\n      do {\r\n        validPlacement = this.placeShip(\r\n          shipList[i],\r\n          Math.floor(Math.random() * this.height),\r\n          Math.floor(Math.random() * this.width),\r\n          Math.random() < 0.5\r\n        );\r\n      } while (!validPlacement);\r\n    }\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    for (let i = 0; i < this.shipsAndLocations.length; i += 1) {\r\n      for (\r\n        let j = 0;\r\n        j < this.shipsAndLocations[i].coordsArray.length;\r\n        j += 1\r\n      ) {\r\n        if (\r\n          x === this.shipsAndLocations[i].coordsArray[j][0] &&\r\n          y === this.shipsAndLocations[i].coordsArray[j][1]\r\n        ) {\r\n          this.shipsAndLocations[i].ship.hit();\r\n          return true;\r\n        }\r\n      }\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  allSunk() {\r\n    for (let i = 0; i < this.shipsAndLocations.length; i += 1) {\r\n      if (!this.shipsAndLocations[i].ship.isSunk()) {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length = 5) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n  }\r\n\r\n  hit() {\r\n    this.hits += 1;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.hits === this.length;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/Ship.js?");

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