(function(){"use strict";eval('\n// CONCATENATED MODULE: ./js/modules/rate.js\n\nfunction rate() {\n  backBtn.style.display = \'block\';\n  ajaxRequestToCBR();\n}\n\nfunction ajaxRequestToCBR() {\n  var compare = function compare(yesterdayVal, todayValue) {\n    return yesterdayVal > todayValue ? \'&#9650;\' : \'&#9660;\';\n  };\n\n  var request = new XMLHttpRequest();\n  request.open(\'GET\', \'https://www.cbr-xml-daily.ru/daily_json.js\', true);\n\n  request.onload = function () {\n    if (request.status === 200) {\n      var file = JSON.parse(request.responseText);\n      display.innerHTML = "\\n                <div class=\\"rate\\">\\n                    <div class=\\"rate-block\\">\\n                        <div class=\\"valute\\">\\n                            <p>".concat(file.Valute.EUR.Name, ": </p>\\n                            <p>").concat(file.Valute.EUR.Value, " \\u0440\\u0443\\u0431.</p>\\n                            <p>").concat(compare(file.Valute.EUR.Previous, file.Valute.EUR.Value), "</p>\\n                        </div>\\n                        <div class=\\"valute\\">\\n                            <p>").concat(file.Valute.USD.Name, ": </p>\\n                            <p>").concat(file.Valute.USD.Value, " \\u0440\\u0443\\u0431.</p>\\n                            <p>").concat(compare(file.Valute.USD.Previous, file.Valute.USD.Value), "</p>\\n                        </div>\\n                        <div class=\\"valute\\">\\n                            <p>").concat(file.Valute.CNY.Name, ": </p>\\n                            <p>").concat(file.Valute.CNY.Value, " \\u0440\\u0443\\u0431.</p>\\n                            <p>").concat(compare(file.Valute.CNY.Previous, file.Valute.CNY.Value), "</p>\\n                        </div>\\n                    </div>\\n                </div>\\n            ");\n    }\n  };\n\n  request.send();\n}\n// CONCATENATED MODULE: ./js/modules/weather.js\n\n\nvar weather = function weather() {\n  backBtn.style.display = \'block\';\n  return "\\n        <div class=\\"weather\\" id=\\"weather\\">\\n            <form action=\\"#\\" name=\\"weatherCity\\">\\n                <label for=\\"city\\">\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0433\\u043E\\u0440\\u043E\\u0434 </label>\\n                <input type=\\"text\\" name=\\"city\\" id=\\"city\\">\\n                <input type=\\"submit\\" value=\\"\\u0423\\u0437\\u043D\\u0430\\u0442\\u044C \\u043F\\u043E\\u0433\\u043E\\u0434\\u0443\\">\\n            </form>\\n            <div id=\\"resultWeather\\" class=\\"resultWeather\\"></div>\\n        </div>\\n    ";\n};\n\nfunction getCity() {\n  var dataWeather = document.forms.weatherCity; // console.log(dataWeather)\n\n  dataWeather.addEventListener(\'submit\', function (event) {\n    event.preventDefault();\n    var current = dataWeather.city.value; // console.log(current)\n\n    ajaxWeather(current.trim());\n    dataWeather.city.value = \'\';\n  });\n}\n\nfunction ajaxWeather(city) {\n  var apiKey = \'a62e19be51e2d4a10ac473cf6ef0b1d3\';\n  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");\n  var requestWeather = new XMLHttpRequest();\n  requestWeather.open(\'GET\', apiUrl, true);\n\n  requestWeather.onload = function () {\n    if (requestWeather.status === 200) {\n      var file = JSON.parse(requestWeather.responseText);\n      console.log(file);\n      switching_display.innerHTML = "\\n                <div class=\\"temperature\\">\\n                    <div class=\\"block\\">\\n                        <h3>".concat(file.name, " (").concat(file.sys.country, ")</h3>\\n                        <div class=\\"weather_img\\"><img src=\\"https://openweathermap.org/img/wn/").concat(file.weather[0].icon, ".png\\"\\" alt=\\"weather\\"></div>\\n                        <div class=\\"weather_block\\">\\n                            <p>\\u0422\\u0435\\u043C\\u043F\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430, <sup>o</sup>C:</p>\\n                            <p>").concat(Math.round(file.main.temp), "</p>\\n                        </div>\\n                        <div class=\\"weather_block\\">\\n                            <p>\\u041E\\u0449\\u0443\\u0449\\u0430\\u0435\\u0442\\u0441\\u044F \\u043A\\u0430\\u043A, <sup>o</sup>C:</p>\\n                            <p>").concat(Math.round(file.main.feels_like), "</p>\\n                        </div>\\n                        <div class=\\"weather_block\\">\\n                            <p>\\u041D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u0432\\u0435\\u0442\\u0440\\u0430:</p> \\n                            <p>").concat(windDir(file.wind.deg), "</p>\\n                        </div>\\n                        <div class=\\"weather_block\\">\\n                            <p>\\u0421\\u043A\\u043E\\u0440\\u043E\\u0441\\u0442\\u044C \\u0432\\u0435\\u0442\\u0440\\u0430, \\u043C/\\u0441:</p>\\n                            <p>").concat(file.wind.speed, "</p>\\n                        </div>\\n                        <div class=\\"weather_block\\">\\n                            <p>\\u0412\\u043B\\u0430\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C, %:</p>\\n                            <p>").concat(file.main.humidity, "</p>\\n                        </div>\\n                    </div>\\n                </div>\\n            ");\n    } else {\n      console.log(\'нет такого\');\n      switching_display.innerHTML = "\\n                \\n                <div class=\\"weatherEr\\">\\n                    <h3>\\u041D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u043E \\u0442\\u0430\\u043A\\u043E\\u0433\\u043E</h3>\\n                    <p>\\u041F\\u043E\\u043F\\u0440\\u043E\\u0431\\u0443\\u0439\\u0442\\u0435 \\u0435\\u0449\\u0435 \\u0440\\u0430\\u0437</p>\\n                </div>\\n            ";\n    }\n  };\n\n  requestWeather.send();\n}\n\nfunction windDir(numVal) {\n  if (numVal <= 22.5) return "Северное";else if (numVal <= 67.5) return "Северо-Восточное";else if (numVal <= 112.5) return "Востоное";else if (numVal <= 157.5) return "Юго-Восточное";else if (numVal <= 202.5) return "Южное";else if (numVal <= 247.5) return "Юго-Западное";else if (numVal <= 292.5) return "Западное";else if (numVal <= 337.5) return "Северо-Западное";else if (numVal <= 360) return "Северное";\n}\n\n\n// CONCATENATED MODULE: ./js/modules/error.js\nfunction errorPage() {\n  return "\\n        <div class=\\"errorPage\\">\\n            <h2>\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A</h2>\\n            <p>\\u041F\\u0435\\u0440\\u0435\\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0443</p>\\n        </div>\\n    ";\n}\n// CONCATENATED MODULE: ./js/modules/settings.js\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar body = document.body;\n\nfunction settings() {\n  backBtn.style.display = \'block\';\n  return "\\n        <div id=\\"settings\\" class=\\"settings display-size\\">\\n            <form action=\\"#\\" name=\\"form\\">\\n                <fieldset class=\\"setBack\\">\\n                    <p>\\u0424\\u043E\\u043D</p>\\n                    <div>\\n                        <label><input value=\\"wood\\" name=\\"background\\" type=\\"radio\\">&nbsp; &nbsp;\\u0414\\u0435\\u0440\\u0435\\u0432\\u043E</label>\\n                        <label><input value=\\"night\\" name=\\"background\\" type=\\"radio\\">&nbsp; &nbsp;\\u041D\\u043E\\u0447\\u044C</label>\\n                        <label><input value=\\"meadow\\" name=\\"background\\" type=\\"radio\\">&nbsp; &nbsp;\\u041B\\u0443\\u0433</label>\\n                        <label><input value=\\"space\\" name=\\"background\\" type=\\"radio\\">&nbsp; &nbsp;\\u041A\\u043E\\u0441\\u043C\\u043E\\u0441</label>\\n                    </div>\\n                </fieldset>\\n                <fieldset>\\n                    <div id=\\"colorVal\\">\\n                        <p>\\u0426\\u0432\\u0435\\u0442 \\u043F\\u043B\\u0430\\u043D\\u0448\\u0435\\u0442\\u0430</p>\\n                        <input name=\\"color\\" type=\\"color\\">\\n                    </div>\\n                </fieldset>\\n            </form>\\n        </div>\\n    ";\n}\n\nfunction setBackground(name) {\n  body.style.background = "url(\\"img/".concat(name, ".jpg\\")");\n  body.style.backgroundSize = \'cover\';\n}\n\nfunction backChange() {\n  var backgroundRadio = form.elements.background;\n\n  var _iterator = _createForOfIteratorHelper(backgroundRadio),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var radio = _step.value;\n      radio.addEventListener(\'focus\', function () {\n        switch (radio.value) {\n          case \'wood\':\n            setBackground(\'wood\');\n            break;\n\n          case \'night\':\n            setBackground(\'night\');\n            break;\n\n          case \'meadow\':\n            setBackground(\'meadow\');\n            break;\n\n          case \'space\':\n            setBackground(\'space\');\n            break;\n        }\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction changeTabletColor() {\n  var colorOfTablet = form.elements.color;\n  var colorVal = document.getElementById(\'colorVal\');\n  var tablet = document.getElementById(\'tablet\');\n  colorVal.addEventListener(\'change\', function () {\n    tablet.style.background = colorOfTablet.value;\n  });\n}\n\n\n// CONCATENATED MODULE: ./js/modules/clickHandler.js\n\n\n\n\n\n\nvar clickHandler = function clickHandler(event) {\n  var type = event.target.dataset.type;\n\n  switch (type) {\n    case \'rate\':\n      rate();\n      console.log(\'курс валют\');\n      break;\n\n    case \'weather\':\n      display.innerHTML = weather();\n      getCity();\n      console.log(\'погода\');\n      break;\n\n    case \'back\':\n      backToMain(); // clearClockInterval()\n\n      console.log(\'назад\');\n      break;\n\n    case \'settings\':\n      var form = document.forms.form;\n      display.innerHTML = settings();\n      backChange();\n      changeTabletColor();\n      console.log(\'настройки\');\n      break;\n\n    default:\n      display.innerHTML = errorPage();\n      console.log(\'ошибка что то не так\');\n      break;\n  }\n};\n\n\n// CONCATENATED MODULE: ./js/modules/menu.js\nfunction menu_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = menu_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction menu_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return menu_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return menu_arrayLikeToArray(o, minLen); }\n\nfunction menu_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar getMainMenu = function getMainMenu() {\n  return "\\n        <div class=\\"menu\\">\\n            <ul class=\\"menu-list\\">\\n                <li data-type=\\"rate\\">\\n                    \\u041A\\u0443\\u0440\\u0441 \\u0432\\u0430\\u043B\\u044E\\u0442\\n                </li>\\n                <li data-type=\\"weather\\">\\n                    \\u041F\\u043E\\u0433\\u043E\\u0434\\u0430\\n                </li>\\n                <li data-type=\\"settings\\">\\n                    \\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\\n                </li>\\n            </ul>\\n        </div>\\n    ";\n};\n\nvar getLinks = function getLinks() {\n  var links = document.querySelectorAll(\'li\');\n  backBtn.addEventListener(\'click\', clickHandler);\n\n  var _iterator = menu_createForOfIteratorHelper(links),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var link = _step.value;\n      link.addEventListener(\'click\', clickHandler);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n\n// CONCATENATED MODULE: ./js/modules/switching.js\n\n\nvar switching_display = document.getElementById(\'display\');\nvar btn = document.getElementById(\'btn\');\nvar backBtn = document.getElementById(\'back\');\n\nvar backToMain = function backToMain() {\n  backBtn.style.display = \'none\';\n  switching_display.innerHTML = getMainMenu();\n  backBtn.removeEventListener(\'click\', clickHandler);\n  getLinks();\n};\n\nfunction off() {\n  switching_display.classList.remove(\'on\');\n  switching_display.classList.add(\'off\');\n  switching_display.innerHTML = \'\';\n  btn.style.background = \'#5e6163\';\n  backBtn.style.display = \'none\';\n  setTimeout(function () {\n    btn.style.removeProperty(\'background\');\n  }, 500);\n}\n\nfunction on() {\n  switching_display.classList.remove(\'off\');\n  switching_display.classList.add(\'on\');\n  btn.setAttribute(\'disabled\', \'disabled\');\n  btn.style.background = \'#5e6163\';\n  setTimeout(function () {\n    btn.style.removeProperty(\'background\');\n    btn.removeAttribute(\'disabled\');\n    switching_display.innerHTML = getMainMenu();\n    getLinks();\n  }, 1200);\n}\n\n\n// CONCATENATED MODULE: ./js/index.js\n\n\n\nvar toggleDisplay = function toggleDisplay() {\n  return switching_display.classList.contains(\'off\') ? on() : off();\n};\n\nbtn.addEventListener(\'click\', toggleDisplay);\n\n//# sourceURL=webpack:///./js/index.js_+_7_modules?')})();