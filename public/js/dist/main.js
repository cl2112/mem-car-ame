/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/src/data/card-refs.js":
/*!*****************************************!*\
  !*** ./public/js/src/data/card-refs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-06.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-06.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-08.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-10.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-12.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-14.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-16g.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-18.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-06.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-08.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-10.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-12.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-14.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-16.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-18.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-06.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-08.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-10.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-12.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-14.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-16.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-18.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-06.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-08.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-10.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-12.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-14.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-16.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-18.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-06.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-08.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-10.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-12.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-14.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-16.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-18.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-06.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-08.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-10.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-12.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-14.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-16.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-18.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-00.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-02.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-04.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-06.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-08.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-10.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-12.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-14.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-16.png\",\r\n    \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-18.png\",\r\n    \"evidence-Attorneys-Badge.png\"\r\n];\r\n\n\n//# sourceURL=webpack:///./public/js/src/data/card-refs.js?");

/***/ }),

/***/ "./public/js/src/data/main-menu-img-refs.js":
/*!**************************************************!*\
  !*** ./public/js/src/data/main-menu-img-refs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [\r\n\t\"AA1_Phoenix.png\",\r\n\t\"AA1_Phoenix_Back.png\",\r\n\t\"AA3_Phoenix.png\",\r\n\t\"Phoenix_wright_AA6.png\",\r\n\t\"Phoenix_Wright_Illustration.png\",\r\n\t\"Phoenix_Wright_Trilogy_Art.png\",\r\n\t\"PhoenixWright-AA5.png\",\r\n];\r\n\n\n//# sourceURL=webpack:///./public/js/src/data/main-menu-img-refs.js?");

/***/ }),

/***/ "./public/js/src/game-logic/Game.js":
/*!******************************************!*\
  !*** ./public/js/src/game-logic/Game.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_card_refs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/card-refs.js */ \"./public/js/src/data/card-refs.js\");\n/* harmony import */ var _data_card_refs_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_card_refs_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_InitMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/InitMenu.js */ \"./public/js/src/menu/InitMenu.js\");\n\r\n\r\n\r\n\r\nfunction Game() {\r\n\tthis.state = {\r\n\t\thasStarted: false\r\n\t};\r\n\r\n\t// Sets the state for the game and calls the render function, starting\r\n\t// the game.\r\n\tthis.initialize = function() {\r\n\t\tthis.state = {\r\n\t\t\ttimer: 60,\r\n\t\t\tnumberOfPairs: 4,\r\n\t\t\tcorrectMatches: 0,\r\n\t\t\tcardFronts: _data_card_refs_js__WEBPACK_IMPORTED_MODULE_0___default.a,\r\n\t\t\tcardFlipped: [],\r\n\t\t\tcardsObjects: [],\r\n\t\t\thasStarted: true,\r\n\t\t\tcanSelectCard: true\r\n\t\t};\r\n\t\t\r\n\t\tthis.render();\r\n\t};\r\n\r\n\t// Picks and creates the card elements.\r\n\tthis.createCards = function() {\r\n\t\tconst cards = [];\r\n\t\tconst fronts = this.state.cardFronts;\r\n\t\tconst pairs = this.state.numberOfPairs;\r\n\t\tconst cardsPicked = pickCardsToUse();\r\n\r\n\t\t// picks the cards to be used in play and fills the cards array.\r\n\t\tfunction pickCardsToUse() {\r\n\t\t\t// Used to store the cards already selected to avoid duplicates.\r\n\t\t\tconst cardsPicked = [];\r\n\r\n\t\t\t// Loop that picks cards from the pool of cards until there are\r\n\t\t\t// enough unique cards for the number of pairs of cards needed.\r\n\t\t\twhile (cardsPicked.length < pairs) {\r\n\t\t\t\t// If there aren't enough cards pick yet...\r\n\t\t\t\t\r\n\t\t\t\t// Pick a number randomly from the array of possible cards.\r\n\t\t\t\tconst randomNumber = Math.floor(Math.random() * fronts.length);\r\n\r\n\t\t\t\t// Check if the number (card) has already been picked.\r\n\t\t\t\tif (!cardsPicked.includes(randomNumber)) {\r\n\t\t\t\t\t// If the number has not been picked yet...\r\n\r\n\t\t\t\t\t// Add the number to the cardsPicked array.\r\n\t\t\t\t\tcardsPicked.push(randomNumber);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t// Return the image location of each card picked using the \r\n\t\t\t// numbers selected as the index locations of the card pool.\r\n\t\t\treturn cardsPicked.map(v => {\r\n\t\t\t\treturn fronts[v];\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tfunction fillCards() {\r\n\t\t\t// choose a random image from the cardFronts array\r\n\t\t\tconst randomImage =\r\n\t\t\t\tcardsPicked[Math.floor(Math.random() * cardsPicked.length)];\r\n\r\n\t\t\tconst dupes = cards.reduce((acc, v) => {\r\n\t\t\t\tif (v === randomImage) {\r\n\t\t\t\t\treturn acc + 1;\r\n\t\t\t\t} else {\r\n\t\t\t\t\treturn acc;\r\n\t\t\t\t}\r\n\t\t\t}, 0);\r\n\r\n\t\t\tif (dupes < 2) {\r\n\t\t\t\tcards.push(randomImage);\r\n\r\n\t\t\t\tif (cards.length < pairs * 2) {\r\n\t\t\t\t\tfillCards();\r\n\t\t\t\t} else {\r\n\t\t\t\t\treturn cards;\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfillCards();\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfillCards();\r\n\r\n\t\treturn cards;\r\n\t};\r\n\r\n\tthis.render = function() {\r\n\t\tconst cards = this.createCards();\r\n\r\n\t\tconst menuWrapper = document.querySelector(\".menu-wrapper\");\r\n\t\tmenuWrapper.parentElement.removeChild(menuWrapper);\r\n\r\n\t\tconst imageWrapper = document.querySelector(\".image-wrapper\");\r\n\t\timageWrapper.parentElement.removeChild(imageWrapper);\r\n\r\n\t\tconst cardWrapper = document.createElement(\"div\");\r\n\t\tcardWrapper.classList.add(\"card-wrapper\");\r\n\t\tdocument.querySelector(\".container\").appendChild(cardWrapper);\r\n\r\n\t\tcards.forEach((v, i) => {\r\n\t\t\tconst cardBack = document.createElement(\"div\");\r\n\t\t\tconst cardFront = document.createElement(\"div\");\r\n\t\t\tconst card = document.createElement(\"div\");\r\n\r\n\t\t\tcardFront.style.backgroundImage = `url(\"./images/card-images/${v}\")`;\r\n\t\t\tcardFront.classList.add(\"card-front\");\r\n\r\n\t\t\tcard.classList.add(\"card\");\r\n\t\t\tcard.dataset.name = v;\r\n\t\t\tcard.dataset.index = i;\r\n\r\n\t\t\tcardBack.classList.add(\"card-back\");\r\n\r\n\t\t\tcard.appendChild(cardBack);\r\n\t\t\tcard.appendChild(cardFront);\r\n\r\n\t\t\tconsole.log(card);\r\n\r\n\t\t\tcardWrapper.appendChild(card);\r\n\r\n\t\t\tdocument\r\n\t\t\t\t.querySelectorAll(\".card\")\r\n\t\t\t\t[i].addEventListener(\"click\", e => {\r\n\t\t\t\t\tthis.checkGameState(e);\r\n\t\t\t\t});\r\n\t\t});\r\n\t};\r\n\r\n\t// Checks and handles if the cards selected match and if all the pairs of cards have been matched.\r\n\tthis.checkGameState = function(event) {\r\n\t\t// check if user clicked on the card element or card front/back and set the variable to\r\n\t\t// point to the card element.\r\n\t\tconst thisElement = event.target.classList.contains(\"card\")\r\n\t\t\t? event.target\r\n\t\t\t: event.target.parentElement;\r\n\r\n\t\t// Check if the card can be clicked on, if not, then stop execution.\r\n\t\tif (\r\n\t\t\tthisElement.classList.contains(\"card-flipped\") ||\r\n\t\t\t!this.state.canSelectCard\r\n\t\t)\r\n\t\t\treturn;\r\n\r\n\t\t// remove the ability to click on a card, wait for the animations to finish\r\n\t\tthis.disableCardSelect(1000);\r\n\r\n\t\t// add the card-flipped class\r\n\t\tthisElement.classList.add(\"card-flipped\");\r\n\r\n\t\t// Check if a card is already flipped and waiting to be matched.\r\n\t\tif (this.state.cardFlipped.length === 0) {\r\n\t\t\t// If there is no card waiting to be matched, this card is now waiting to be matched.\r\n\t\t\tthis.state.cardFlipped.push(thisElement);\r\n\r\n\t\t\t// If there is a card waiting to be matched...\r\n\t\t} else {\r\n\t\t\t// Ckeck if the card waiting to be matched and the card selected have the same name, and\r\n\t\t\t// are not the same exact card.\r\n\t\t\tif (\r\n\t\t\t\tthisElement.dataset.name ===\r\n\t\t\t\t\tthis.state.cardFlipped[0].dataset.name &&\r\n\t\t\t\tthisElement.dataset.index !==\r\n\t\t\t\t\tthis.state.cardFlipped[0].dataset.index\r\n\t\t\t) {\r\n\t\t\t\t// if there is a match\r\n\t\t\t\tconsole.log(\"Correct!\");\r\n\r\n\t\t\t\t// Increase number of correct matches. Used to check if all pairs have been matched.\r\n\t\t\t\tthis.state.correctMatches++;\r\n\r\n\t\t\t\t// Hide both of the matched cards\r\n\t\t\t\tthisElement.style.visibility = \"hidden\";\r\n\t\t\t\tthis.state.cardFlipped[0].style.visibility = \"hidden\";\r\n\r\n\t\t\t\t// Reset the card waiting to be matched.\r\n\t\t\t\tthis.state.cardFlipped = [];\r\n\t\t\t} else {\r\n\t\t\t\t// if there is NOT a match\r\n\t\t\t\tconsole.log(\"Wrong!\");\r\n\r\n\t\t\t\t// create a timeout to allow the player to see the cards flip before further actions.\r\n\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t// Remove the card-flipped class of both of the matched cards.\r\n\t\t\t\t\tthisElement.classList.toggle(\"card-flipped\");\r\n\t\t\t\t\tthis.state.cardFlipped[0].classList.toggle(\"card-flipped\");\r\n\r\n\t\t\t\t\t// Reset the card waiting to be matched.\r\n\t\t\t\t\tthis.state.cardFlipped = [];\r\n\t\t\t\t}, 1000);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// Check if the number of matched pairs equals the total number of pairs to determine if\r\n\t\t// all the pairs have been matched.\r\n\t\tif (this.state.correctMatches === this.state.numberOfPairs) {\r\n\t\t\t// If all pairs have been matched...\r\n\t\t\tconsole.log(\"Congrats, you won!\");\r\n\r\n\t\t\t// Remove the entire game board.\r\n\t\t\tconst cardWrapper = document.querySelector(\".card-wrapper\");\r\n\t\t\tcardWrapper.parentElement.removeChild(cardWrapper);\r\n\r\n\t\t\t// Return to the menu screen.\r\n\t\t\tObject(_menu_InitMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\t\t}\r\n\t};\r\n\r\n\tthis.disableCardSelect = function(time = 1500) {\r\n\t\tthis.state.canSelectCard = false;\r\n\t\tsetTimeout(() => {\r\n\t\t\tthis.state.canSelectCard = true;\r\n\t\t}, time);\r\n\t};\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\r\n\n\n//# sourceURL=webpack:///./public/js/src/game-logic/Game.js?");

/***/ }),

/***/ "./public/js/src/index.js":
/*!********************************!*\
  !*** ./public/js/src/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_InitMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/InitMenu.js */ \"./public/js/src/menu/InitMenu.js\");\n\r\n\r\nObject(_menu_InitMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./public/js/src/index.js?");

/***/ }),

/***/ "./public/js/src/menu/InitMenu.js":
/*!****************************************!*\
  !*** ./public/js/src/menu/InitMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Main_MainBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main/MainBtn.js */ \"./public/js/src/menu/Main/MainBtn.js\");\n\r\n\r\n// Set up the start screen functionality\r\nfunction initMenu() {\r\n    // variables for the menu options.\r\n    const container = document.querySelector(\".container\");\r\n    const menuWrapper = document.createElement(\"div\");\r\n    const imageWrapper = document.createElement(\"div\");\r\n    menuWrapper.classList.add(\"menu-wrapper\");\r\n    imageWrapper.classList.add(\"image-wrapper\");\r\n    container.appendChild(menuWrapper);\r\n    container.appendChild(imageWrapper);\r\n\r\n    \r\n    Object(_Main_MainBtn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenu);\n\n//# sourceURL=webpack:///./public/js/src/menu/InitMenu.js?");

/***/ }),

/***/ "./public/js/src/menu/Main/Arcade/ArcadeBtn.js":
/*!*****************************************************!*\
  !*** ./public/js/src/menu/Main/Arcade/ArcadeBtn.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Start_StartBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Start/StartBtn.js */ \"./public/js/src/menu/Main/Arcade/Start/StartBtn.js\");\n/* harmony import */ var _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/CreateBtns.js */ \"./public/js/src/menu/Utils/CreateBtns.js\");\n\r\n\r\n\r\n\r\nfunction ArcadeBtn() {\r\n    console.log(\"arcade btn clicked\", this);\r\n\r\n    const arcadeMenuButtons = [\r\n        {\r\n            text: 'Start',\r\n            function: _Start_StartBtn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n        }\r\n    ];\r\n\r\n    Object(_Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arcadeMenuButtons);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArcadeBtn);\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/Arcade/ArcadeBtn.js?");

/***/ }),

/***/ "./public/js/src/menu/Main/Arcade/Start/StartBtn.js":
/*!**********************************************************!*\
  !*** ./public/js/src/menu/Main/Arcade/Start/StartBtn.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_logic_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../game-logic/Game.js */ \"./public/js/src/game-logic/Game.js\");\n\r\n\r\nfunction StartBtn () {\r\n    const game = new _game_logic_Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    game.initialize();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartBtn);\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/Arcade/Start/StartBtn.js?");

/***/ }),

/***/ "./public/js/src/menu/Main/Credits/CreditsBtn.js":
/*!*******************************************************!*\
  !*** ./public/js/src/menu/Main/Credits/CreditsBtn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function CreditsBtn() {\r\n    console.log(\"creadits btn clicked\", this);\r\n}\r\n\r\nmodule.exports = CreditsBtn;\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/Credits/CreditsBtn.js?");

/***/ }),

/***/ "./public/js/src/menu/Main/MainBtn.js":
/*!********************************************!*\
  !*** ./public/js/src/menu/Main/MainBtn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Story_StoryBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Story/StoryBtn.js */ \"./public/js/src/menu/Main/Story/StoryBtn.js\");\n/* harmony import */ var _Arcade_ArcadeBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arcade/ArcadeBtn.js */ \"./public/js/src/menu/Main/Arcade/ArcadeBtn.js\");\n/* harmony import */ var _Options_OptionsBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options/OptionsBtn.js */ \"./public/js/src/menu/Main/Options/OptionsBtn.js\");\n/* harmony import */ var _Options_OptionsBtn_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Options_OptionsBtn_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Credits_CreditsBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Credits/CreditsBtn.js */ \"./public/js/src/menu/Main/Credits/CreditsBtn.js\");\n/* harmony import */ var _Credits_CreditsBtn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Credits_CreditsBtn_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/CreateBtns.js */ \"./public/js/src/menu/Utils/CreateBtns.js\");\n/* harmony import */ var _Utils_ChangeImg_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/ChangeImg.js */ \"./public/js/src/menu/Utils/ChangeImg.js\");\n/* harmony import */ var _data_main_menu_img_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/main-menu-img-refs.js */ \"./public/js/src/data/main-menu-img-refs.js\");\n/* harmony import */ var _data_main_menu_img_refs_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_main_menu_img_refs_js__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction mainBtn() {\r\n    const mainMenuButtons = [\r\n        {\r\n            text: \"Story\",\r\n            function: _Story_StoryBtn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n        },\r\n        {\r\n            text: \"Arcade\",\r\n            function: _Arcade_ArcadeBtn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n        },\r\n        {\r\n            text: \"Options\",\r\n            function: _Options_OptionsBtn_js__WEBPACK_IMPORTED_MODULE_2___default.a\r\n        },\r\n        {\r\n            text: \"Credits\",\r\n            function: _Credits_CreditsBtn_js__WEBPACK_IMPORTED_MODULE_3___default.a\r\n        }\r\n    ];\r\n\r\n    const mainImage = 'Trilogy_Phoenix_Point.png';\r\n\r\n    Object(_Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(mainMenuButtons);\r\n    Object(_Utils_ChangeImg_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_data_main_menu_img_refs_js__WEBPACK_IMPORTED_MODULE_6___default.a[Math.floor(Math.random() * _data_main_menu_img_refs_js__WEBPACK_IMPORTED_MODULE_6___default.a.length)]);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainBtn);\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/MainBtn.js?");

/***/ }),

/***/ "./public/js/src/menu/Main/Options/OptionsBtn.js":
/*!*******************************************************!*\
  !*** ./public/js/src/menu/Main/Options/OptionsBtn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function OptionsBtn() {\r\n    console.log(\"options btn clicked\", this);\r\n}\r\n\r\nmodule.exports = OptionsBtn;\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/Options/OptionsBtn.js?");

/***/ }),

/***/ "./public/js/src/menu/Main/Story/Chapter1/Chapter1Btn.js":
/*!***************************************************************!*\
  !*** ./public/js/src/menu/Main/Story/Chapter1/Chapter1Btn.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction chapter1Btn() {\r\n    console.log(\"chapter 1 btn clicked\", this);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (chapter1Btn);\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/Story/Chapter1/Chapter1Btn.js?");

/***/ }),

/***/ "./public/js/src/menu/Main/Story/StoryBtn.js":
/*!***************************************************!*\
  !*** ./public/js/src/menu/Main/Story/StoryBtn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Chapter1_Chapter1Btn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chapter1/Chapter1Btn.js */ \"./public/js/src/menu/Main/Story/Chapter1/Chapter1Btn.js\");\n/* harmony import */ var _MainBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MainBtn.js */ \"./public/js/src/menu/Main/MainBtn.js\");\n/* harmony import */ var _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/CreateBtns.js */ \"./public/js/src/menu/Utils/CreateBtns.js\");\n/* harmony import */ var _Utils_ChangeImg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/ChangeImg.js */ \"./public/js/src/menu/Utils/ChangeImg.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction StoryBtn() {\r\n    console.log(\"story btn clicked\", this);\r\n\r\n    const storyMenuButtons = [\r\n        {\r\n            text: \"Chapter 1\",\r\n            function: _Chapter1_Chapter1Btn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n        },\r\n        {\r\n            text: \"Chapter 2\",\r\n            function: chapter2Btn\r\n        },\r\n        {\r\n            text: \"Chapter 3\",\r\n            function: chapter3Btn\r\n        },\r\n        {\r\n            text: \"Main Menu\",\r\n            function: _MainBtn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n        }\r\n    ];\r\n\r\n    const mainImage = 'AA1_Phoenix.png'\r\n\r\n    Object(_Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(storyMenuButtons);\r\n    Object(_Utils_ChangeImg_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(mainImage)\r\n    \r\n\r\n    function chapter2Btn() {\r\n        console.log(\"chapter 2 btn clicked\", this);\r\n    }\r\n\r\n    function chapter3Btn() {\r\n        console.log(\"chapter 3 btn clicked\", this);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoryBtn);\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/Story/StoryBtn.js?");

/***/ }),

/***/ "./public/js/src/menu/Utils/ChangeImg.js":
/*!***********************************************!*\
  !*** ./public/js/src/menu/Utils/ChangeImg.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ChangeImg(image) {\r\n    const wrapper = document.querySelector('.image-wrapper');\r\n\r\n    // remove any previous images\r\n    wrapper.querySelectorAll(\"div\").forEach(v => wrapper.removeChild(v));\r\n\r\n    // Create the image elements.\r\n    const mainImage = document.createElement('div');\r\n    mainImage.style.backgroundImage = `url(./images/menu-images/${image})`;\r\n    mainImage.classList.add('main-image');\r\n\r\n    const mainImageBackground1 = document.createElement('div');\r\n    mainImageBackground1.classList.add('main-image-background-1');\r\n    const mainImageBackground2 = document.createElement('div');\r\n    mainImageBackground2.classList.add('main-image-background-2');\r\n    const mainImageBackground3 = document.createElement('div');\r\n    mainImageBackground3.classList.add('main-image-background-3');\r\n\r\n    const imageTop = document.createElement('div');\r\n    imageTop.classList.add('image-top');\r\n\r\n    const imageBottom = document.createElement('div');\r\n    imageBottom.classList.add('image-bottom');\r\n\r\n    wrapper.appendChild(mainImage);\r\n    wrapper.appendChild(mainImageBackground1);\r\n    wrapper.appendChild(mainImageBackground2);\r\n    wrapper.appendChild(mainImageBackground3);\r\n    wrapper.appendChild(imageTop);\r\n    wrapper.appendChild(imageBottom);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangeImg);\n\n//# sourceURL=webpack:///./public/js/src/menu/Utils/ChangeImg.js?");

/***/ }),

/***/ "./public/js/src/menu/Utils/CreateBtns.js":
/*!************************************************!*\
  !*** ./public/js/src/menu/Utils/CreateBtns.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createButtons(buttons) {\r\n    const wrapper = document.querySelector('.menu-wrapper');\r\n\r\n    // remove any previous buttons\r\n    wrapper.querySelectorAll(\"div\").forEach(v => wrapper.removeChild(v));\r\n\r\n    // create the buttons for the menu options\r\n    buttons.forEach(v => {\r\n        const btn = document.createElement(\"div\");\r\n        btn.innerText = v.text;\r\n        btn.classList.add(\"menu-btn\");\r\n\r\n        btn.addEventListener(\"click\", v.function);\r\n\r\n        wrapper.appendChild(btn);\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createButtons);\n\n//# sourceURL=webpack:///./public/js/src/menu/Utils/CreateBtns.js?");

/***/ })

/******/ });