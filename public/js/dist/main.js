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
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* \r\n    Start Screen\r\n*/\r\n\r\n// Set up the start screen functionality\r\nfunction initStartScreen() {\r\n    // variables for the menu options.\r\n    const container = document.querySelector(\".container\");\r\n    const wrapper = document.createElement(\"div\");\r\n    wrapper.classList.add(\"menu-wrapper\");\r\n    container.appendChild(wrapper);\r\n\r\n    mainBtn();\r\n\r\n    function mainBtn() {\r\n        const mainMenuButtons = [\r\n            {\r\n                text: \"Story\",\r\n                function: StoryBtn\r\n            },\r\n            {\r\n                text: \"Arcade\",\r\n                function: ArcadeBtn\r\n            },\r\n            {\r\n                text: \"Options\",\r\n                function: OptionsBtn\r\n            },\r\n            {\r\n                text: \"Credits\",\r\n                function: CreditsBtn\r\n            }\r\n        ];\r\n\r\n        createButtons(mainMenuButtons);\r\n\r\n        // Button functions\r\n        function StoryBtn() {\r\n            console.log(\"story btn clicked\", this);\r\n\r\n            const storyMenuButtons = [\r\n                {\r\n                    text: \"Chapter 1\",\r\n                    function: chapter1Btn\r\n                },\r\n                {\r\n                    text: \"Chapter 2\",\r\n                    function: chapter2Btn\r\n                },\r\n                {\r\n                    text: \"Chapter 3\",\r\n                    function: chapter3Btn\r\n                },\r\n                {\r\n                    text: \"Main Menu\",\r\n                    function: mainBtn\r\n                }\r\n            ];\r\n\r\n            createButtons(storyMenuButtons);\r\n\r\n            function chapter1Btn() {\r\n                console.log(\"chapter 1 btn clicked\", this);\r\n            }\r\n\r\n            function chapter2Btn() {\r\n                console.log(\"chapter 2 btn clicked\", this);\r\n            }\r\n\r\n            function chapter3Btn() {\r\n                console.log(\"chapter 3 btn clicked\", this);\r\n            }\r\n        }\r\n\r\n        function ArcadeBtn() {\r\n            console.log(\"arcade btn clicked\", this);\r\n        }\r\n\r\n        function OptionsBtn() {\r\n            console.log(\"options btn clicked\", this);\r\n        }\r\n\r\n        function CreditsBtn() {\r\n            console.log(\"creadits btn clicked\", this);\r\n        }\r\n    }\r\n\r\n    function createButtons(buttons) {\r\n        // remove any previous buttons\r\n        wrapper.querySelectorAll(\"div\").forEach(v => wrapper.removeChild(v));\r\n\r\n        // create the buttons for the menu options\r\n        buttons.forEach(v => {\r\n            const btn = document.createElement(\"div\");\r\n            btn.innerText = v.text;\r\n            btn.classList.add(\"menu-btn\");\r\n\r\n            btn.addEventListener(\"click\", v.function);\r\n\r\n            wrapper.appendChild(btn);\r\n        });\r\n    }\r\n}\r\n\r\ninitStartScreen();\r\n\r\n// document.querySelector(\"button\").addEventListener(\"click\", () => {\r\n//     if (!Game.state.hasStarted) {\r\n//         Game.initialize();\r\n//     }\r\n// });\r\n\r\nconst Game = {\r\n    state: {\r\n        hasStarted: false\r\n    },\r\n\r\n    initialize: function() {\r\n        this.state = {\r\n            timer: 60,\r\n            numberOfPairs: 4,\r\n            correctMatches: 0,\r\n            cardFronts: [\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-06.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-06.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-08.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-10.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-12.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-14.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-16g.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-18.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-06.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-08.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-10.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-12.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-14.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-16.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-18.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-06.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-08.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-10.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-12.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-14.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-16.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-18.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-06.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-08.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-10.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-12.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-14.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-16.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-18.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-06.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-08.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-10.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-12.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-14.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-16.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-18.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-06.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-08.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-10.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-12.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-14.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-16.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-18.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-00.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-02.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-04.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-06.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-08.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-10.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-12.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-14.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-16.png\",\r\n                \"DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-18.png\",\r\n                \"evidence-Attorneys-Badge.png\"\r\n            ],\r\n            cardFlipped: \"\",\r\n            cardsObjects: [],\r\n            hasStarted: true\r\n        };\r\n\r\n        this.render();\r\n    },\r\n\r\n    createCards: function() {\r\n        const cards = [];\r\n        const fronts = this.state.cardFronts;\r\n        const pairs = this.state.numberOfPairs;\r\n        const cardsPicked = pickCardsToUse();\r\n\r\n        // picks the cards to be used in play and fills the cards array.\r\n        function pickCardsToUse() {\r\n            // Used to store the cards already selected to avoid duplicates.\r\n            const cardsPicked = [];\r\n\r\n            while (cardsPicked.length < pairs) {\r\n                const randomNumber = Math.floor(Math.random() * fronts.length);\r\n\r\n                if (!cardsPicked.includes(randomNumber)) {\r\n                    cardsPicked.push(randomNumber);\r\n                }\r\n            }\r\n\r\n            return cardsPicked.map(v => {\r\n                return fronts[v];\r\n            });\r\n        }\r\n\r\n        function fillCards() {\r\n            // choose a random image from the cardFronts array\r\n            const randomImage =\r\n                cardsPicked[Math.floor(Math.random() * cardsPicked.length)];\r\n\r\n            const dupes = cards.reduce((acc, v) => {\r\n                if (v === randomImage) {\r\n                    return acc + 1;\r\n                } else {\r\n                    return acc;\r\n                }\r\n            }, 0);\r\n\r\n            if (dupes < 2) {\r\n                cards.push(randomImage);\r\n\r\n                if (cards.length < pairs * 2) {\r\n                    fillCards();\r\n                } else {\r\n                    return cards;\r\n                }\r\n            } else {\r\n                fillCards();\r\n            }\r\n        }\r\n\r\n        fillCards();\r\n\r\n        return cards;\r\n    },\r\n\r\n    render: function() {\r\n        const cards = this.createCards();\r\n\r\n        cards.forEach((v, i) => {\r\n            const cardBack = document.createElement(\"div\");\r\n            const cardFront = document.createElement(\"div\");\r\n            const card = document.createElement(\"div\");\r\n\r\n            cardFront.style.backgroundImage = `url(\"./images/card-images/${v}\")`;\r\n            cardFront.classList.add(\"card-front\");\r\n\r\n            card.classList.add(\"card\");\r\n\r\n            cardBack.classList.add(\"card-back\");\r\n\r\n            card.appendChild(cardBack);\r\n            card.appendChild(cardFront);\r\n\r\n            console.log(card);\r\n\r\n            document.querySelector(\".wrapper\").appendChild(card);\r\n\r\n            document\r\n                .querySelectorAll(\".card\")\r\n                [i].addEventListener(\"click\", function() {\r\n                    console.log(this);\r\n                    this.classList.toggle(\"card-flipped\");\r\n                });\r\n        });\r\n\r\n        // document.querySelector(\".card\").addEventListener(\"click\", function() {\r\n        //     console.log(this)\r\n        //     this.classList.toggle(\"card-flipped\");\r\n        // });\r\n    },\r\n\r\n    checkGameState: function() {}\r\n};\r\n\n\n//# sourceURL=webpack:///./public/js/src/index.js?");

/***/ })

/******/ });