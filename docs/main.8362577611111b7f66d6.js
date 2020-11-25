/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _modules_switching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/switching */ "./js/modules/switching.js");



var toggleDisplay = function toggleDisplay() {
  return _modules_switching__WEBPACK_IMPORTED_MODULE_1__.display.classList.contains('off') ? (0,_modules_switching__WEBPACK_IMPORTED_MODULE_1__.on)() : (0,_modules_switching__WEBPACK_IMPORTED_MODULE_1__.off)();
};

_modules_switching__WEBPACK_IMPORTED_MODULE_1__.btn.addEventListener('click', toggleDisplay);

/***/ }),

/***/ "./js/modules/clickHandler.js":
/*!************************************!*\
  !*** ./js/modules/clickHandler.js ***!
  \************************************/
/*! namespace exports */
/*! export clickHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickHandler": () => /* binding */ clickHandler
/* harmony export */ });
/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate */ "./js/modules/rate.js");
/* harmony import */ var _switching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switching */ "./js/modules/switching.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ "./js/modules/weather.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./js/modules/error.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./js/modules/settings.js");






var clickHandler = function clickHandler(event) {
  var type = event.target.dataset.type;

  switch (type) {
    case 'rate':
      (0,_rate__WEBPACK_IMPORTED_MODULE_0__.default)();
      console.log('курс валют');
      break;

    case 'weather':
      display.innerHTML = (0,_weather__WEBPACK_IMPORTED_MODULE_2__.weather)();
      (0,_weather__WEBPACK_IMPORTED_MODULE_2__.getCity)();
      console.log('погода');
      break;

    case 'back':
      (0,_switching__WEBPACK_IMPORTED_MODULE_1__.backToMain)(); // clearClockInterval()

      console.log('назад');
      break;

    case 'settings':
      var form = document.forms.form;
      display.innerHTML = (0,_settings__WEBPACK_IMPORTED_MODULE_4__.settings)();
      (0,_settings__WEBPACK_IMPORTED_MODULE_4__.backChange)();
      (0,_settings__WEBPACK_IMPORTED_MODULE_4__.changeTabletColor)();
      console.log('настройки');
      break;

    default:
      display.innerHTML = (0,_error__WEBPACK_IMPORTED_MODULE_3__.default)();
      console.log('ошибка что то не так');
      break;
  }
};



/***/ }),

/***/ "./js/modules/error.js":
/*!*****************************!*\
  !*** ./js/modules/error.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ errorPage
/* harmony export */ });
function errorPage() {
  return "\n        <div class=\"errorPage\">\n            <h2>\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2>\n            <p>\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443</p>\n        </div>\n    ";
}

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/*! namespace exports */
/*! export getLinks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getMainMenu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMainMenu": () => /* binding */ getMainMenu,
/* harmony export */   "getLinks": () => /* binding */ getLinks
/* harmony export */ });
/* harmony import */ var _clickHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickHandler */ "./js/modules/clickHandler.js");
/* harmony import */ var _switching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switching */ "./js/modules/switching.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var getMainMenu = function getMainMenu() {
  return "\n        <div class=\"menu\">\n            <ul class=\"menu-list\">\n                <li data-type=\"rate\">\n                    \u041A\u0443\u0440\u0441 \u0432\u0430\u043B\u044E\u0442\n                </li>\n                <li data-type=\"weather\">\n                    \u041F\u043E\u0433\u043E\u0434\u0430\n                </li>\n                <li data-type=\"settings\">\n                    \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\n                </li>\n            </ul>\n        </div>\n    ";
};

var getLinks = function getLinks() {
  var links = document.querySelectorAll('li');
  _switching__WEBPACK_IMPORTED_MODULE_1__.backBtn.addEventListener('click', _clickHandler__WEBPACK_IMPORTED_MODULE_0__.clickHandler);

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener('click', _clickHandler__WEBPACK_IMPORTED_MODULE_0__.clickHandler);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};



/***/ }),

/***/ "./js/modules/rate.js":
/*!****************************!*\
  !*** ./js/modules/rate.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ rate
/* harmony export */ });
/* harmony import */ var _switching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switching */ "./js/modules/switching.js");

function rate() {
  _switching__WEBPACK_IMPORTED_MODULE_0__.backBtn.style.display = 'block';
  ajaxRequestToCBR();
}

function ajaxRequestToCBR() {
  var compare = function compare(yesterdayVal, todayValue) {
    return yesterdayVal > todayValue ? '&#9650;' : '&#9660;';
  };

  var request = new XMLHttpRequest();
  request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js', true);

  request.onload = function () {
    if (request.status === 200) {
      var file = JSON.parse(request.responseText);
      display.innerHTML = "\n                <div class=\"rate\">\n                    <div class=\"rate-block\">\n                        <div class=\"valute\">\n                            <p>".concat(file.Valute.EUR.Name, ": </p>\n                            <p>").concat(file.Valute.EUR.Value, " \u0440\u0443\u0431.</p>\n                            <p>").concat(compare(file.Valute.EUR.Previous, file.Valute.EUR.Value), "</p>\n                        </div>\n                        <div class=\"valute\">\n                            <p>").concat(file.Valute.USD.Name, ": </p>\n                            <p>").concat(file.Valute.USD.Value, " \u0440\u0443\u0431.</p>\n                            <p>").concat(compare(file.Valute.USD.Previous, file.Valute.USD.Value), "</p>\n                        </div>\n                        <div class=\"valute\">\n                            <p>").concat(file.Valute.CNY.Name, ": </p>\n                            <p>").concat(file.Valute.CNY.Value, " \u0440\u0443\u0431.</p>\n                            <p>").concat(compare(file.Valute.CNY.Previous, file.Valute.CNY.Value), "</p>\n                        </div>\n                    </div>\n                </div>\n            ");
    }
  };

  request.send();
}

/***/ }),

/***/ "./js/modules/settings.js":
/*!********************************!*\
  !*** ./js/modules/settings.js ***!
  \********************************/
/*! namespace exports */
/*! export backChange [provided] [no usage info] [missing usage info prevents renaming] */
/*! export changeTabletColor [provided] [no usage info] [missing usage info prevents renaming] */
/*! export settings [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settings": () => /* binding */ settings,
/* harmony export */   "backChange": () => /* binding */ backChange,
/* harmony export */   "changeTabletColor": () => /* binding */ changeTabletColor
/* harmony export */ });
/* harmony import */ var _switching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switching */ "./js/modules/switching.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var body = document.body;

function settings() {
  _switching__WEBPACK_IMPORTED_MODULE_0__.backBtn.style.display = 'block';
  return "\n        <div id=\"settings\" class=\"settings display-size\">\n            <form action=\"#\" name=\"form\">\n                <fieldset class=\"setBack\">\n                    <p>\u0424\u043E\u043D</p>\n                    <div>\n                        <label><input value=\"wood\" name=\"background\" type=\"radio\">&nbsp; &nbsp;\u0414\u0435\u0440\u0435\u0432\u043E</label>\n                        <label><input value=\"night\" name=\"background\" type=\"radio\">&nbsp; &nbsp;\u041D\u043E\u0447\u044C</label>\n                        <label><input value=\"meadow\" name=\"background\" type=\"radio\">&nbsp; &nbsp;\u041B\u0443\u0433</label>\n                        <label><input value=\"space\" name=\"background\" type=\"radio\">&nbsp; &nbsp;\u041A\u043E\u0441\u043C\u043E\u0441</label>\n                    </div>\n                </fieldset>\n                <fieldset>\n                    <div id=\"colorVal\">\n                        <p>\u0426\u0432\u0435\u0442 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0430</p>\n                        <input name=\"color\" type=\"color\">\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    ";
}

function setBackground(name) {
  body.style.background = "url(\"img/".concat(name, ".jpg\")");
  body.style.backgroundSize = 'cover';
}

function backChange() {
  var backgroundRadio = form.elements.background;

  var _iterator = _createForOfIteratorHelper(backgroundRadio),
      _step;

  try {
    var _loop = function _loop() {
      var radio = _step.value;
      radio.addEventListener('focus', function () {
        switch (radio.value) {
          case 'wood':
            setBackground('wood');
            break;

          case 'night':
            setBackground('night');
            break;

          case 'meadow':
            setBackground('meadow');
            break;

          case 'space':
            setBackground('space');
            break;
        }
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function changeTabletColor() {
  var colorOfTablet = form.elements.color;
  var colorVal = document.getElementById('colorVal');
  var tablet = document.getElementById('tablet');
  colorVal.addEventListener('change', function () {
    tablet.style.background = colorOfTablet.value;
  });
}



/***/ }),

/***/ "./js/modules/switching.js":
/*!*********************************!*\
  !*** ./js/modules/switching.js ***!
  \*********************************/
/*! namespace exports */
/*! export backBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export backToMain [provided] [no usage info] [missing usage info prevents renaming] */
/*! export btn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export display [provided] [no usage info] [missing usage info prevents renaming] */
/*! export off [provided] [no usage info] [missing usage info prevents renaming] */
/*! export on [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => /* binding */ on,
/* harmony export */   "off": () => /* binding */ off,
/* harmony export */   "btn": () => /* binding */ btn,
/* harmony export */   "display": () => /* binding */ display,
/* harmony export */   "backBtn": () => /* binding */ backBtn,
/* harmony export */   "backToMain": () => /* binding */ backToMain
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./js/modules/menu.js");
/* harmony import */ var _clickHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickHandler */ "./js/modules/clickHandler.js");


var display = document.getElementById('display');
var btn = document.getElementById('btn');
var backBtn = document.getElementById('back');

var backToMain = function backToMain() {
  backBtn.style.display = 'none';
  display.innerHTML = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.getMainMenu)();
  backBtn.removeEventListener('click', _clickHandler__WEBPACK_IMPORTED_MODULE_1__.clickHandler);
  (0,_menu__WEBPACK_IMPORTED_MODULE_0__.getLinks)();
};

function off() {
  display.classList.remove('on');
  display.classList.add('off');
  display.innerHTML = '';
  btn.style.background = '#5e6163';
  backBtn.style.display = 'none';
  setTimeout(function () {
    btn.style.removeProperty('background');
  }, 500);
}

function on() {
  display.classList.remove('off');
  display.classList.add('on');
  btn.setAttribute('disabled', 'disabled');
  btn.style.background = '#5e6163';
  setTimeout(function () {
    btn.style.removeProperty('background');
    btn.removeAttribute('disabled');
    display.innerHTML = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.getMainMenu)();
    (0,_menu__WEBPACK_IMPORTED_MODULE_0__.getLinks)();
  }, 1200);
}



/***/ }),

/***/ "./js/modules/weather.js":
/*!*******************************!*\
  !*** ./js/modules/weather.js ***!
  \*******************************/
/*! namespace exports */
/*! export getCity [provided] [no usage info] [missing usage info prevents renaming] */
/*! export weather [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weather": () => /* binding */ weather,
/* harmony export */   "getCity": () => /* binding */ getCity
/* harmony export */ });
/* harmony import */ var _switching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switching */ "./js/modules/switching.js");


var weather = function weather() {
  _switching__WEBPACK_IMPORTED_MODULE_0__.backBtn.style.display = 'block';
  return "\n        <div class=\"weather\" id=\"weather\">\n            <form action=\"#\" name=\"weatherCity\">\n                <label for=\"city\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434 </label>\n                <input type=\"text\" name=\"city\" id=\"city\">\n                <input type=\"submit\" value=\"\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0433\u043E\u0434\u0443\">\n            </form>\n            <div id=\"resultWeather\" class=\"resultWeather\"></div>\n        </div>\n    ";
};

function getCity() {
  var dataWeather = document.forms.weatherCity; // console.log(dataWeather)

  dataWeather.addEventListener('submit', function (event) {
    event.preventDefault();
    var current = dataWeather.city.value; // console.log(current)

    ajaxWeather(current.trim());
    dataWeather.city.value = '';
  });
}

function ajaxWeather(city) {
  var apiKey = 'a62e19be51e2d4a10ac473cf6ef0b1d3';
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");
  var requestWeather = new XMLHttpRequest();
  requestWeather.open('GET', apiUrl, true);

  requestWeather.onload = function () {
    if (requestWeather.status === 200) {
      var file = JSON.parse(requestWeather.responseText);
      console.log(file);
      _switching__WEBPACK_IMPORTED_MODULE_0__.display.innerHTML = "\n                <div class=\"temperature\">\n                    <div class=\"block\">\n                        <h3>".concat(file.name, " (").concat(file.sys.country, ")</h3>\n                        <div class=\"weather_img\"><img src=\"https://openweathermap.org/img/wn/").concat(file.weather[0].icon, ".png\"\" alt=\"weather\"></div>\n                        <div class=\"weather_block\">\n                            <p>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430, <sup>o</sup>C:</p>\n                            <p>").concat(Math.round(file.main.temp), "</p>\n                        </div>\n                        <div class=\"weather_block\">\n                            <p>\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A, <sup>o</sup>C:</p>\n                            <p>").concat(Math.round(file.main.feels_like), "</p>\n                        </div>\n                        <div class=\"weather_block\">\n                            <p>\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0435\u0442\u0440\u0430:</p> \n                            <p>").concat(windDir(file.wind.deg), "</p>\n                        </div>\n                        <div class=\"weather_block\">\n                            <p>\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u0442\u0440\u0430, \u043C/\u0441:</p>\n                            <p>").concat(file.wind.speed, "</p>\n                        </div>\n                        <div class=\"weather_block\">\n                            <p>\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C, %:</p>\n                            <p>").concat(file.main.humidity, "</p>\n                        </div>\n                    </div>\n                </div>\n            ");
    } else {
      console.log('нет такого');
      _switching__WEBPACK_IMPORTED_MODULE_0__.display.innerHTML = "\n                \n                <div class=\"weatherEr\">\n                    <h3>\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u0430\u043A\u043E\u0433\u043E</h3>\n                    <p>\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437</p>\n                </div>\n            ";
    }
  };

  requestWeather.send();
}

function windDir(numVal) {
  if (numVal <= 22.5) return "Северное";else if (numVal <= 67.5) return "Северо-Восточное";else if (numVal <= 112.5) return "Востоное";else if (numVal <= 157.5) return "Юго-Восточное";else if (numVal <= 202.5) return "Южное";else if (numVal <= 247.5) return "Юго-Западное";else if (numVal <= 292.5) return "Западное";else if (numVal <= 337.5) return "Северо-Западное";else if (numVal <= 360) return "Северное";
}



/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.8362577611111b7f66d6.js.map