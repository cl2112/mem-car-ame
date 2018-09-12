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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Main_MainBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main/MainBtn.js */ \"./public/js/src/menu/Main/MainBtn.js\");\n\r\n\r\n// Set up the start screen functionality\r\nfunction initMenu() {\r\n    // variables for the menu options.\r\n    const container = document.querySelector(\".container\");\r\n    const wrapper = document.createElement(\"div\");\r\n    wrapper.classList.add(\"menu-wrapper\");\r\n    container.appendChild(wrapper);\r\n\r\n    Object(_Main_MainBtn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenu);\n\n//# sourceURL=webpack:///./public/js/src/menu/InitMenu.js?");

/***/ }),

/***/ "./public/js/src/menu/Main/Arcade/ArcadeBtn.js":
/*!*****************************************************!*\
  !*** ./public/js/src/menu/Main/Arcade/ArcadeBtn.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ArcadeBtn() {\r\n    console.log(\"arcade btn clicked\", this);\r\n}\r\n\r\nmodule.exports = ArcadeBtn;\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/Arcade/ArcadeBtn.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Story_StoryBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Story/StoryBtn.js */ \"./public/js/src/menu/Main/Story/StoryBtn.js\");\n/* harmony import */ var _Arcade_ArcadeBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arcade/ArcadeBtn.js */ \"./public/js/src/menu/Main/Arcade/ArcadeBtn.js\");\n/* harmony import */ var _Arcade_ArcadeBtn_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Arcade_ArcadeBtn_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Options_OptionsBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options/OptionsBtn.js */ \"./public/js/src/menu/Main/Options/OptionsBtn.js\");\n/* harmony import */ var _Options_OptionsBtn_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Options_OptionsBtn_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Credits_CreditsBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Credits/CreditsBtn.js */ \"./public/js/src/menu/Main/Credits/CreditsBtn.js\");\n/* harmony import */ var _Credits_CreditsBtn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Credits_CreditsBtn_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/CreateBtns.js */ \"./public/js/src/menu/Utils/CreateBtns.js\");\n/* harmony import */ var _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction mainBtn() {\r\n    const mainMenuButtons = [\r\n        {\r\n            text: \"Story\",\r\n            function: _Story_StoryBtn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n        },\r\n        {\r\n            text: \"Arcade\",\r\n            function: _Arcade_ArcadeBtn_js__WEBPACK_IMPORTED_MODULE_1___default.a\r\n        },\r\n        {\r\n            text: \"Options\",\r\n            function: _Options_OptionsBtn_js__WEBPACK_IMPORTED_MODULE_2___default.a\r\n        },\r\n        {\r\n            text: \"Credits\",\r\n            function: _Credits_CreditsBtn_js__WEBPACK_IMPORTED_MODULE_3___default.a\r\n        }\r\n    ];\r\n\r\n    _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_4___default()(mainMenuButtons);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainBtn);\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/MainBtn.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Chapter1_Chapter1Btn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chapter1/Chapter1Btn.js */ \"./public/js/src/menu/Main/Story/Chapter1/Chapter1Btn.js\");\n/* harmony import */ var _MainBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MainBtn.js */ \"./public/js/src/menu/Main/MainBtn.js\");\n/* harmony import */ var _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/CreateBtns.js */ \"./public/js/src/menu/Utils/CreateBtns.js\");\n/* harmony import */ var _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\nfunction StoryBtn() {\r\n    console.log(\"story btn clicked\", this);\r\n\r\n    const storyMenuButtons = [\r\n        {\r\n            text: \"Chapter 1\",\r\n            function: _Chapter1_Chapter1Btn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n        },\r\n        {\r\n            text: \"Chapter 2\",\r\n            function: chapter2Btn\r\n        },\r\n        {\r\n            text: \"Chapter 3\",\r\n            function: chapter3Btn\r\n        },\r\n        {\r\n            text: \"Main Menu\",\r\n            function: _MainBtn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n        }\r\n    ];\r\n\r\n    _Utils_CreateBtns_js__WEBPACK_IMPORTED_MODULE_2___default()(storyMenuButtons);\r\n\r\n    \r\n\r\n    function chapter2Btn() {\r\n        console.log(\"chapter 2 btn clicked\", this);\r\n    }\r\n\r\n    function chapter3Btn() {\r\n        console.log(\"chapter 3 btn clicked\", this);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoryBtn);\n\n//# sourceURL=webpack:///./public/js/src/menu/Main/Story/StoryBtn.js?");

/***/ }),

/***/ "./public/js/src/menu/Utils/CreateBtns.js":
/*!************************************************!*\
  !*** ./public/js/src/menu/Utils/CreateBtns.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createButtons(buttons) {\r\n    const wrapper = document.querySelector('.menu-wrapper');\r\n\r\n    // remove any previous buttons\r\n    wrapper.querySelectorAll(\"div\").forEach(v => wrapper.removeChild(v));\r\n\r\n    // create the buttons for the menu options\r\n    buttons.forEach(v => {\r\n        const btn = document.createElement(\"div\");\r\n        btn.innerText = v.text;\r\n        btn.classList.add(\"menu-btn\");\r\n\r\n        btn.addEventListener(\"click\", v.function);\r\n\r\n        wrapper.appendChild(btn);\r\n    });\r\n}\r\n\r\nmodule.exports = createButtons;\n\n//# sourceURL=webpack:///./public/js/src/menu/Utils/CreateBtns.js?");

/***/ })

/******/ });