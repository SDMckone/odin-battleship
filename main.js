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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _modules_DomGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DomGrid */ \"./src/modules/DomGrid.js\");\n\r\n\r\n\r\nconst placementGrid = document.querySelector(\"#placement-grid\");\r\nconst playerGameBoard = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 10);\r\nconst playerDomGrid = new _modules_DomGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](playerGameBoard);\r\nconst placementDomGrid = new _modules_DomGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](playerGameBoard, playerDomGrid);\r\n\r\nplacementDomGrid.makePlacementGrid([5, 4, 3, 2, 2, 1, 1]);\r\n\r\nplacementGrid.appendChild(placementDomGrid.gridContainer);\r\n\r\nconst playerSide = document.querySelector(\"#player-side\");\r\n\r\nplayerSide.appendChild(playerDomGrid.gridContainer);\r\n\r\nconst hostileSide = document.querySelector(\"#hostile-side\");\r\nconst hostileGameBoard = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 10);\r\nhostileGameBoard.placeShipsRandomly([5, 4, 3, 2, 2, 1, 1]);\r\nconst hostileDomGrid = new _modules_DomGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](hostileGameBoard, playerDomGrid);\r\nhostileDomGrid.makeHostileGrid();\r\nhostileSide.appendChild(hostileDomGrid.gridContainer);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/AiPlayer.js":
/*!*********************************!*\
  !*** ./src/modules/AiPlayer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AiPlayer {\r\n  constructor(gameBoard) {\r\n    this.gameBoard = gameBoard;\r\n    this.coordList = [];\r\n\r\n    for (let i = 0; i < gameBoard.width; i += 1) {\r\n      for (let j = 0; j < gameBoard.height; j += 1) {\r\n        this.coordList.push([i, j]);\r\n      }\r\n    }\r\n  }\r\n\r\n  makeMove() {\r\n    const index = Math.floor(Math.random() * this.coordList.length);\r\n\r\n    const coords = this.coordList[index];\r\n    this.coordList.splice(index, 1);\r\n\r\n    const returnArray = [];\r\n\r\n    returnArray.push(this.gameBoard.receiveAttack(coords[0], coords[1]));\r\n    returnArray.push(coords);\r\n\r\n    return returnArray;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AiPlayer);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/AiPlayer.js?");

/***/ }),

/***/ "./src/modules/DomGrid.js":
/*!********************************!*\
  !*** ./src/modules/DomGrid.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AiPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AiPlayer */ \"./src/modules/AiPlayer.js\");\n\r\n\r\nclass DomGrid {\r\n  constructor(gameboard, otherDomGrid = null) {\r\n    this.gridContainer = document.createElement(\"div\");\r\n    this.gridContainer.classList.add(\"grid-container\");\r\n    this.gameboard = gameboard;\r\n    this.otherDomGrid = otherDomGrid;\r\n\r\n    for (let i = 0; i < this.gameboard.height; i += 1) {\r\n      const gridRowContainer = document.createElement(\"div\");\r\n      gridRowContainer.classList.add(\"grid-row-container\");\r\n\r\n      for (let j = 0; j < this.gameboard.width; j += 1) {\r\n        const gridSquare = document.createElement(\"div\");\r\n        gridSquare.classList.add(\"grid-square\");\r\n        gridSquare.classList.add(\"clear\");\r\n\r\n        gridRowContainer.appendChild(gridSquare);\r\n      }\r\n\r\n      this.gridContainer.appendChild(gridRowContainer);\r\n    }\r\n  }\r\n\r\n  setSquareColor(x, y, state) {\r\n    const square = this.gridContainer.children.item(x).children.item(y);\r\n    square.classList.remove(\"clear\", \"hit\", \"miss\", \"ship\", \"ship-placement\");\r\n\r\n    switch (state) {\r\n      case \"clear\":\r\n        square.classList.add(\"clear\");\r\n        break;\r\n      case \"hit\":\r\n        square.classList.add(\"hit\");\r\n        break;\r\n      case \"miss\":\r\n        square.classList.add(\"miss\");\r\n        break;\r\n      case \"ship\":\r\n        square.classList.add(\"ship\");\r\n        break;\r\n      case \"ship-placement\":\r\n        square.classList.add(\"ship-placement\");\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n\r\n  renderShips() {\r\n    for (let i = 0; i < this.gameboard.shipsAndLocations.length; i += 1) {\r\n      for (\r\n        let j = 0;\r\n        j < this.gameboard.shipsAndLocations[i].coordsArray.length;\r\n        j += 1\r\n      ) {\r\n        this.setSquareColor(\r\n          this.gameboard.shipsAndLocations[i].coordsArray[j][0],\r\n          this.gameboard.shipsAndLocations[i].coordsArray[j][1],\r\n          \"ship\"\r\n        );\r\n      }\r\n    }\r\n  }\r\n\r\n  makeHostileGrid() {\r\n    const ai = new _AiPlayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.otherDomGrid.gameboard);\r\n\r\n    for (let i = 0; i < this.gridContainer.children.length; i += 1) {\r\n      for (\r\n        let j = 0;\r\n        j < this.gridContainer.children.item(i).children.length;\r\n        j += 1\r\n      ) {\r\n        const gridSquare = this.gridContainer.children.item(i).children.item(j);\r\n        gridSquare.classList.add(\"hostile-side\");\r\n\r\n        gridSquare.addEventListener(\"click\", () => {\r\n          if (gridSquare.classList.contains(\"clear\")) {\r\n            const wasHit = this.gameboard.receiveAttack(i, j);\r\n            gridSquare.classList.remove(\"clear\");\r\n\r\n            if (wasHit) {\r\n              gridSquare.classList.add(\"hit\");\r\n            } else {\r\n              gridSquare.classList.add(\"miss\");\r\n            }\r\n            const aiMove = ai.makeMove();\r\n\r\n            if (aiMove[0]) {\r\n              this.otherDomGrid.setSquareColor(\r\n                aiMove[1][0],\r\n                aiMove[1][1],\r\n                \"hit\"\r\n              );\r\n            } else {\r\n              this.otherDomGrid.setSquareColor(\r\n                aiMove[1][0],\r\n                aiMove[1][1],\r\n                \"miss\"\r\n              );\r\n            }\r\n          }\r\n          if (this.gameboard.allSunk()) {\r\n            console.log(\"Won\");\r\n          }\r\n        });\r\n      }\r\n    }\r\n  }\r\n\r\n  makePlacementGrid(shipList) {\r\n    let horizontal = false;\r\n    let shipListIndex = 0;\r\n\r\n    for (let i = 0; i < this.gridContainer.children.length; i += 1) {\r\n      for (\r\n        let j = 0;\r\n        j < this.gridContainer.children.item(i).children.length;\r\n        j += 1\r\n      ) {\r\n        const gridSquare = this.gridContainer.children.item(i).children.item(j);\r\n\r\n        const shipPlacementCallback = () => {\r\n          if (horizontal) {\r\n            for (let k = 0; k < shipList[shipListIndex]; k += 1) {\r\n              if (\r\n                !this.gameboard.isCoordOccupied(i, j + k) &&\r\n                i < this.gameboard.height &&\r\n                j + k < this.gameboard.width\r\n              ) {\r\n                this.setSquareColor(i, j + k, \"ship-placement\");\r\n              }\r\n            }\r\n          } else {\r\n            for (let k = 0; k < shipList[shipListIndex]; k += 1) {\r\n              if (\r\n                !this.gameboard.isCoordOccupied(i + k, j) &&\r\n                i + k < this.gameboard.height &&\r\n                j < this.gameboard.width\r\n              ) {\r\n                this.setSquareColor(i + k, j, \"ship-placement\");\r\n              }\r\n            }\r\n          }\r\n        };\r\n        gridSquare.addEventListener(\"mouseover\", shipPlacementCallback);\r\n\r\n        const mouseLeaveCallback = () => {\r\n          if (horizontal) {\r\n            for (let k = 0; k < shipList[shipListIndex]; k += 1) {\r\n              if (\r\n                !this.gameboard.isCoordOccupied(i, j + k) &&\r\n                i < this.gameboard.height &&\r\n                j + k < this.gameboard.width\r\n              ) {\r\n                this.setSquareColor(i, j + k, \"clear\");\r\n              }\r\n            }\r\n          } else {\r\n            for (let k = 0; k < shipList[shipListIndex]; k += 1) {\r\n              if (\r\n                !this.gameboard.isCoordOccupied(i + k, j) &&\r\n                i + k < this.gameboard.height &&\r\n                j < this.gameboard.width\r\n              ) {\r\n                this.setSquareColor(i + k, j, \"clear\");\r\n              }\r\n            }\r\n          }\r\n        };\r\n        gridSquare.addEventListener(\"mouseleave\", mouseLeaveCallback);\r\n\r\n        gridSquare.addEventListener(\"click\", () => {\r\n          if (\r\n            this.gameboard.placeShip(shipList[shipListIndex], i, j, horizontal)\r\n          ) {\r\n            this.renderShips();\r\n            shipListIndex += 1;\r\n            gridSquare.removeEventListener(\"mouseover\", shipPlacementCallback);\r\n            gridSquare.removeEventListener(\"mouseleave\", mouseLeaveCallback);\r\n\r\n            if (shipListIndex === shipList.length) {\r\n              document.querySelector(\"#start-screen\").style.display = \"none\";\r\n              document.body.classList.remove(\"low-opacity-bg\");\r\n              document\r\n                .querySelector(\"#content\")\r\n                .classList.remove(\"low-opacity\");\r\n              this.otherDomGrid.renderShips();\r\n            }\r\n          }\r\n        });\r\n\r\n        gridSquare.addEventListener(\"contextmenu\", mouseLeaveCallback);\r\n        gridSquare.addEventListener(\"contextmenu\", (event) => {\r\n          event.preventDefault();\r\n          horizontal = !horizontal;\r\n        });\r\n        gridSquare.addEventListener(\"contextmenu\", shipPlacementCallback);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomGrid);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/DomGrid.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\r\n\r\nclass Gameboard {\r\n  constructor(width, height) {\r\n    this.shipsAndLocations = [];\r\n    this.occupiedCoords = [];\r\n    this.width = width;\r\n    this.height = height;\r\n  }\r\n\r\n  placeShip(length, x, y, isHorizontal) {\r\n    const newShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\r\n    const coordsArray = [];\r\n\r\n    if (isHorizontal) {\r\n      if (y + length > this.width) {\r\n        return false;\r\n      }\r\n\r\n      for (let i = y; i < length + y; i += 1) {\r\n        coordsArray.push([x, i]);\r\n      }\r\n    } else {\r\n      if (x + length > this.height) {\r\n        return false;\r\n      }\r\n\r\n      for (let i = x; i < length + x; i += 1) {\r\n        coordsArray.push([i, y]);\r\n      }\r\n    }\r\n\r\n    for (let i = 0; i < this.occupiedCoords.length; i += 1) {\r\n      for (let j = 0; j < coordsArray.length; j += 1) {\r\n        if (\r\n          this.occupiedCoords[i][0] === coordsArray[j][0] &&\r\n          this.occupiedCoords[i][1] === coordsArray[j][1]\r\n        ) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n\r\n    this.shipsAndLocations.push({\r\n      ship: newShip,\r\n      coordsArray,\r\n    });\r\n\r\n    this.occupiedCoords = this.occupiedCoords.concat(coordsArray);\r\n\r\n    return true;\r\n  }\r\n\r\n  placeShipsRandomly(shipList) {\r\n    for (let i = 0; i < shipList.length; i += 1) {\r\n      let validPlacement;\r\n      do {\r\n        validPlacement = this.placeShip(\r\n          shipList[i],\r\n          Math.floor(Math.random() * this.height),\r\n          Math.floor(Math.random() * this.width),\r\n          Math.random() < 0.5\r\n        );\r\n      } while (!validPlacement);\r\n    }\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    for (let i = 0; i < this.shipsAndLocations.length; i += 1) {\r\n      for (\r\n        let j = 0;\r\n        j < this.shipsAndLocations[i].coordsArray.length;\r\n        j += 1\r\n      ) {\r\n        if (\r\n          x === this.shipsAndLocations[i].coordsArray[j][0] &&\r\n          y === this.shipsAndLocations[i].coordsArray[j][1]\r\n        ) {\r\n          this.shipsAndLocations[i].ship.hit();\r\n          return true;\r\n        }\r\n      }\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  allSunk() {\r\n    for (let i = 0; i < this.shipsAndLocations.length; i += 1) {\r\n      if (!this.shipsAndLocations[i].ship.isSunk()) {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n\r\n  isCoordOccupied(x, y) {\r\n    for (let i = 0; i < this.occupiedCoords.length; i += 1) {\r\n      if (this.occupiedCoords[i][0] === x && this.occupiedCoords[i][1] === y) {\r\n        return true;\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/modules/Gameboard.js?");

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