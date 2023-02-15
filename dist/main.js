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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*:before,\\n*:after {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  font-family: inherit;\\n}\\n\\nbody {\\n  background-color: #334155;\\n  height: 100vh;\\n  font-size: 16px;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n}\\n\\nbutton {\\n  background-color: #cbd5e1;\\n  border: 2px solid #e2e8f0;\\n  border-radius: 8px;\\n  outline: none;\\n  padding: 8px 10px;\\n  width: 120px;\\n  height: 100%;\\n}\\nbutton:hover {\\n  background-color: #f1f5f9;\\n  cursor: pointer;\\n}\\n\\n#reset {\\n  background: transparent;\\n  color: #f1f5f9;\\n  border: 1px solid #f1f5f9;\\n}\\n#reset:hover {\\n  background-color: #94a3b8;\\n  color: #0f172a;\\n}\\n\\n.main-container {\\n  height: 100%;\\n  display: flex;\\n  flex-flow: column;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n  gap: 1.5rem;\\n}\\n.main-container .chessboard {\\n  display: flex;\\n  border: 1px solid #94a3b8;\\n  background-color: #94a3b8;\\n  border-radius: 6px;\\n  padding: 5px;\\n  box-shadow: 2px 5px 7px #0f172a;\\n}\\n.main-container .grid-item {\\n  width: 75px;\\n  height: 75px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.main-container .column {\\n  width: 100%;\\n  height: 100%;\\n}\\n.main-container .black {\\n  background-color: #0f172a;\\n}\\n.main-container .white {\\n  background-color: #64748b;\\n}\\n.main-container .buttons {\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-start;\\n  gap: 1rem;\\n}\\n\\n.output-container {\\n  display: flex;\\n  border: 2px solid #0f172a;\\n  width: 30%;\\n  height: 125px;\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.output-container .output-left {\\n  display: flex;\\n  align-items: center;\\n  padding-left: 7px;\\n  border-right: 2px solid #0f172a;\\n  width: 40%;\\n  flex-shrink: 0;\\n}\\n.output-container .output-left .output-titles {\\n  display: flex;\\n  flex-flow: column;\\n  gap: 5px;\\n}\\n.output-container .output-left .initial-output {\\n  display: flex;\\n  flex-flow: column;\\n  padding-left: 15px;\\n  gap: 5px;\\n}\\n.output-container .output-left p {\\n  font-size: 1rem;\\n  word-wrap: break-word;\\n}\\n.output-container .output-left span {\\n  font-weight: 500;\\n}\\n.output-container .output-right p {\\n  color: #0f172a;\\n  overflow-wrap: break-word;\\n}\\n\\n.fa-chess-knight {\\n  font-size: 3rem;\\n  color: #f1f5f9;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knights/./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://knights/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://knights/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://knights/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://knights/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://knights/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://knights/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://knights/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://knights/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://knights/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n\n\n\n_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initChessboard();\n\n\n//# sourceURL=webpack://knights/./src/index.js?");

/***/ }),

/***/ "./src/modules/gamelogic.js":
/*!**********************************!*\
  !*** ./src/modules/gamelogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\nclass Game {\n  constructor() {\n    this.start = [];\n    this.end = [];\n    this.moves = [];\n  }\n\n  getStart() {\n    return this.start;\n  }\n\n  getEnd() {\n    return this.end;\n  }\n\n  setStart(coords) {\n    this.start = [...coords];\n    console.log(`Set start to: ${coords}`);\n  }\n\n  setEnd(coords) {\n    this.end = [...coords];\n    console.log(`Set end to: ${coords}`);\n  }\n\n  getCoords(e) {\n    const x = parseInt(e.target.dataset.x);\n    const y = parseInt(e.target.dataset.y);\n\n    return [x, y];\n  }\n\n  initGame() {\n    this.start = [];\n    this.end = [];\n    this.moves = [];\n    return `Game Initialized: Start:${this.start} End:${this.end} Moves:${this.moves}`;\n  }\n}\n\nconst game = new Game();\n\n\n\n\n//# sourceURL=webpack://knights/./src/modules/gamelogic.js?");

/***/ }),

/***/ "./src/modules/queue.js":
/*!******************************!*\
  !*** ./src/modules/queue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queue)\n/* harmony export */ });\nclass Queue {\n  constructor() {\n    this.elements = {};\n    this.head = 0;\n    this.tail = 0;\n  }\n\n  enqueue(element) {\n    this.elements[this.tail] = element;\n    this.tail++;\n  }\n\n  dequeue() {\n    let item = this.elements[this.head];\n    delete this.elements[this.head];\n    this.head++;\n    return item;\n  }\n\n  peek() {\n    if (this.isEmpty) return \"Underflow: No elements in queue..\";\n    return this.elements[this.head];\n  }\n\n  get length() {\n    return this.tail - this.head;\n  }\n\n  get isEmpty() {\n    return this.length === 0;\n  }\n}\n\n\n//# sourceURL=webpack://knights/./src/modules/queue.js?");

/***/ }),

/***/ "./src/modules/shortestpath.js":
/*!*************************************!*\
  !*** ./src/modules/shortestpath.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getShortestPath\": () => (/* binding */ getShortestPath)\n/* harmony export */ });\n/* harmony import */ var _queue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue.js */ \"./src/modules/queue.js\");\n\n\n// TODO gets steps but sometimes is wrong--need to fix\n\nclass Node {\n  constructor(x, y, numberOfMoves, parent = null) {\n    this.x = x;\n    this.y = y;\n    this.numberOfMoves = numberOfMoves;\n    this.parent = parent;\n  }\n\n  getPositionString() {\n    return `${this.x}, ${this.y}`;\n  }\n\n  getParent() {\n    return this.parent;\n  }\n}\n\nconst validMoves = [\n  [1, 2],\n  [2, 1],\n  [-1, 2],\n  [-2, 1],\n  [-2, -1],\n  [-1, -2],\n  [1, -2],\n  [2, -1],\n];\n\nfunction getShortestPath(startX, startY, targetX, targetY) {\n  const queue = new _queue_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const startNode = new Node(startX, startY, 0);\n\n  queue.enqueue(startNode);\n\n  const visitedNodes = new Set();\n\n  while (!queue.isEmpty) {\n    const currentNode = queue.dequeue();\n\n    const { x, y, numberOfMoves } = currentNode;\n\n    if (x === targetX && y === targetY) {\n      let finalNode = currentNode;\n      let finalPath = getPath(startNode, finalNode);\n\n      return { numberOfMoves, finalPath };\n    }\n\n    visitedNodes.add(currentNode.getPositionString());\n\n    for (const neighbor of getNeighbors(x, y)) {\n      const [neighborX, neighborY] = neighbor;\n      const neighborNode = new Node(\n        neighborX,\n        neighborY,\n        numberOfMoves + 1,\n        currentNode\n      );\n\n      if (visitedNodes.has(neighborNode.getPositionString())) continue;\n\n      queue.enqueue(neighborNode);\n    }\n  }\n}\n\nfunction getNeighbors(x, y) {\n  const neighbors = [];\n\n  for (const move of validMoves) {\n    const [xChange, yChange] = move;\n\n    const neighborX = x + xChange;\n    const neighborY = y + yChange;\n\n    if (neighborX < 0 || neighborX > 7) continue;\n    if (neighborY < 0 || neighborY > 7) continue;\n\n    neighbors.push([neighborX, neighborY]);\n  }\n  return neighbors;\n}\n\nfunction getPath(startNode, finalNode) {\n  let parentNode = finalNode.parent;\n  let path = [];\n\n  path.push([finalNode.x, finalNode.y]);\n\n  while (parentNode.parent !== null) {\n    path.push([parentNode.x, parentNode.y]);\n    parentNode = parentNode.parent;\n  }\n\n  path.push([startNode.x, startNode.y]);\n\n  // push the final node first, then the path, then the start node to get\n  // the path in reverse order, then call the .reverse() method to put\n  // in order from start coordinate to end coordinate.\n\n  path.reverse();\n\n  return path;\n}\n\n\n//# sourceURL=webpack://knights/./src/modules/shortestpath.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamelogic.js */ \"./src/modules/gamelogic.js\");\n/* harmony import */ var _shortestpath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortestpath.js */ \"./src/modules/shortestpath.js\");\n\n\n\nclass UI {\n  static drawEvenRow() {\n    const container = document.querySelector(\".chessboard\");\n    container.innerHTML += `\n    <div class=\"column\">\n    <div class=\"grid-item black\"></div>\n    <div class=\"grid-item white\"></div>\n    <div class=\"grid-item black\"></div>\n    <div class=\"grid-item white\"></div>\n    <div class=\"grid-item black\"></div>\n    <div class=\"grid-item white\"></div>\n    <div class=\"grid-item black\"></div>\n    <div class=\"grid-item white\"></div>\n    </div>\n    `;\n  }\n\n  static drawOddRow() {\n    const container = document.querySelector(\".chessboard\");\n    container.innerHTML += `\n    <div class=\"column\">\n    <div class=\"grid-item white\"></div>\n    <div class=\"grid-item black\"></div>\n    <div class=\"grid-item white\"></div>\n    <div class=\"grid-item black\"></div>\n    <div class=\"grid-item white\"></div>\n    <div class=\"grid-item black\"></div>\n    <div class=\"grid-item white\"></div>\n    <div class=\"grid-item black\"></div>\n    </div>\n    `;\n  }\n\n  static clearContainer() {\n    document.querySelector(\".chessboard\").innerHTML = \"\";\n  }\n\n  static clearOuputs() {\n    document.getElementById(\"startOutput\").innerHTML = \"-\";\n    document.getElementById(\"targetOutput\").innerHTML = \"-\";\n    document.getElementById(\"numOfMoves\").innerHTML = \"-\";\n    document.querySelector(\".output-right\").innerHTML = \"\";\n  }\n\n  static setStartPosition(e) {\n    e.preventDefault();\n    const allSquares = [...document.querySelectorAll(\".grid-item\")];\n    allSquares.forEach((square) => {\n      square.addEventListener(\"click\", UI.placeKnight);\n    });\n  }\n\n  static setEndPosition(e) {\n    e.preventDefault();\n    const allSquares = [...document.querySelectorAll(\".grid-item\")];\n    allSquares.forEach((square) => {\n      square.addEventListener(\"click\", UI.placeKnight);\n    });\n  }\n\n  static initChessboard() {\n    UI.clearContainer();\n    UI.clearOuputs();\n\n    for (let row = 0; row < 8; row++) {\n      row % 2 === 0 ? UI.drawOddRow() : UI.drawEvenRow();\n    }\n\n    _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.initGame();\n\n    UI.setIndexes();\n    UI.addEventListener();\n  }\n\n  static placeKnight(e) {\n    const squares = [...document.querySelectorAll(\".grid-item\")];\n    const startOutput = document.getElementById(\"startOutput\");\n    const targetOutput = document.getElementById(\"targetOutput\");\n\n    if (e.target.tagName !== \"DIV\") return;\n\n    if (_gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.start.length > 0) {\n      e.target.style.backgroundColor = \"#06b6d4\";\n      _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.setEnd(_gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.getCoords(e));\n      targetOutput.innerHTML = `[${_gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.getCoords(e)}]`;\n    } else {\n      e.target.innerHTML = `<i class=\"fas fa-chess-knight\"></i>`;\n      _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.setStart(_gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.getCoords(e));\n      startOutput.innerHTML = `[${_gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.getCoords(e)}]`;\n    }\n\n    squares.forEach((square) => {\n      square.removeEventListener(\"click\", UI.placeKnight);\n    });\n  }\n\n  static addEventListener() {\n    const resetBtn = document.getElementById(\"reset\");\n    const startBtn = document.getElementById(\"start\");\n    const endBtn = document.getElementById(\"end\");\n    const pathBtn = document.getElementById(\"path\");\n\n    startBtn.addEventListener(\"click\", UI.setStartPosition);\n\n    endBtn.addEventListener(\"click\", UI.setEndPosition);\n\n    resetBtn.addEventListener(\"click\", UI.initChessboard);\n\n    pathBtn.addEventListener(\"click\", UI.showShortestPath);\n  }\n\n  static setIndexes() {\n    const columns = [...document.querySelectorAll(\".column\")];\n    const children = [];\n\n    columns.forEach((column) => children.push([...column.children]));\n\n    for (let x = 0; x < children.length; x++) {\n      children[x].forEach((child) => {\n        child.setAttribute(\"data-x\", `${x}`);\n      });\n\n      for (let y = children.length - 1; y >= 0; y--) {\n        // flips the y index so [0,0] is bottom left rather than top left\n        let remaining = children.length - 1 - y;\n\n        children.forEach((child) =>\n          child[y].setAttribute(\"data-y\", `${remaining}`)\n        );\n      }\n    }\n  }\n\n  static showShortestPath(e) {\n    e.preventDefault();\n\n    const movesListContainer = document.querySelector(\".moves\");\n    const btn = document.getElementById(\"path\");\n    const movesOutput = document.getElementById(\"numOfMoves\");\n\n    console.log(movesListContainer);\n\n    const startX = _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.start[0];\n    const startY = _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.start[1];\n    const endX = _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.end[0];\n    const endY = _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.game.end[1];\n\n    const path = (0,_shortestpath_js__WEBPACK_IMPORTED_MODULE_1__.getShortestPath)(startX, startY, endX, endY);\n\n    const moves = path.finalPath;\n\n    const squares = [...document.querySelectorAll(\".grid-item\")];\n\n    movesOutput.innerHTML = path.numberOfMoves;\n\n    moves.slice(1, moves.length - 1).forEach((move) => {\n      movesListContainer.innerHTML += `[${move}] -> `;\n    });\n\n    movesListContainer.innerHTML += `[${moves[moves.length - 1]}]`;\n\n    squares.forEach((square) => {\n      // let startSquareCoords = moves[0];\n      // let endSquareCoords = moves[moves.length - 1];\n      // let jumps = moves.slice(1, moves.length - 1);\n      let coords = [square.dataset.x, square.dataset.y];\n    });\n\n    btn.removeEventListener(\"click\", UI.showShortestPath);\n  }\n}\n\n\n//# sourceURL=webpack://knights/./src/modules/ui.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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