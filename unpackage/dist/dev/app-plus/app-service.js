(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/main.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 27));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 28));\n\n\n\n\n\n\nvar _zAudio = __webpack_require__(/*! @/components/z-audio */ 31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.config.productionTip = false;_App.default.mpType = 'app';\n\n\n\n// npm引用方式\n// import { ZAudio } from 'uniapp-zaudio'\n\n\nvar zaudio = new _zAudio.ZAudio({\n  continuePlay: true, //续播\n  autoPlay: false //自动播放 部分浏览器不支持\n});\n\n_vue.default.prototype.$zaudio = zaudio;\n\n\n//模拟初始数据\nvar data = [{\n  src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3',\n  title: '恭喜发财',\n  singer: '刘德华',\n  coverImgUrl: 'https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg' },\n\n{\n  src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',\n  title: '好运来',\n  singer: '作者1111',\n  coverImgUrl: 'https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg' }];\n\n\n\nzaudio.setAudio(data);\n\n\n\n\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiemF1ZGlvIiwiWkF1ZGlvIiwiY29udGludWVQbGF5IiwiYXV0b1BsYXkiLCJwcm90b3R5cGUiLCIkemF1ZGlvIiwiZGF0YSIsInNyYyIsInRpdGxlIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJzZXRBdWRpbyIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQW1CO0FBQ25COzs7Ozs7O0FBT0Esa0Usd25DQUpBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0IsQ0FFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7Ozs7QUFNQTtBQUNBOzs7QUFHQSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsY0FBSixDQUFXO0FBQ3ZCQyxjQUFZLEVBQUUsSUFEUyxFQUNIO0FBQ3BCQyxVQUFRLEVBQUUsS0FGYSxDQUVOO0FBRk0sQ0FBWCxDQUFiOztBQUtBUixhQUFJUyxTQUFKLENBQWNDLE9BQWQsR0FBd0JMLE1BQXhCOzs7QUFHQTtBQUNBLElBQUlNLElBQUksR0FBRyxDQUFDO0FBQ1ZDLEtBQUcsRUFBRSwrRkFESztBQUVWQyxPQUFLLEVBQUUsTUFGRztBQUdWQyxRQUFNLEVBQUUsS0FIRTtBQUlWQyxhQUFXLEVBQUUsbUZBSkgsRUFBRDs7QUFNVjtBQUNDSCxLQUFHLEVBQUUsaUdBRE47QUFFQ0MsT0FBSyxFQUFFLEtBRlI7QUFHQ0MsUUFBTSxFQUFFLFFBSFQ7QUFJQ0MsYUFBVyxFQUFFLG9GQUpkLEVBTlUsQ0FBWDs7OztBQWNBVixNQUFNLENBQUNXLFFBQVAsQ0FBZ0JMLElBQWhCOzs7Ozs7QUFNQSxJQUFNTSxHQUFHLEdBQUcsSUFBSWpCLFlBQUo7QUFDUkcsWUFEUSxFQUFaOztBQUdBYyxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5cclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcblxyXG5pbXBvcnQge1xyXG5cdFpBdWRpb1xyXG59IGZyb20gJ0AvY29tcG9uZW50cy96LWF1ZGlvJ1xyXG5cclxuLy8gbnBt5byV55So5pa55byPXHJcbi8vIGltcG9ydCB7IFpBdWRpbyB9IGZyb20gJ3VuaWFwcC16YXVkaW8nXHJcblxyXG5cclxubGV0IHphdWRpbyA9IG5ldyBaQXVkaW8oe1xyXG5cdGNvbnRpbnVlUGxheTogdHJ1ZSwgLy/nu63mkq1cclxuXHRhdXRvUGxheTogZmFsc2UsIC8v6Ieq5Yqo5pKt5pS+IOmDqOWIhua1j+iniOWZqOS4jeaUr+aMgVxyXG59KVxyXG4gXHJcblZ1ZS5wcm90b3R5cGUuJHphdWRpbyA9IHphdWRpb1xyXG5cclxuXHJcbi8v5qih5ouf5Yid5aeL5pWw5o2uXHJcbnZhciBkYXRhID0gW3tcclxuXHRcdHNyYzogJ2h0dHBzOi8vOTYuZi4xdGluZy5jb20vbG9jYWxfdG9fY3ViZV8yMDIwMDQxMjE4MTMvOTZrbXAzL3p6enp6bXAzLzIwMTZhSmFuLzE4WC8xOGRfRGVILzAxLm1wMycsXHJcblx0XHR0aXRsZTogJ+aBreWWnOWPkei0oicsXHJcblx0XHRzaW5nZXI6ICfliJjlvrfljY4nLFxyXG5cdFx0Y292ZXJJbWdVcmw6ICdodHRwczovL2ltZy4xdGluZy5jb20vaW1hZ2VzL3NwZWNpYWwvNzUvczE1MF9mODRlZjUwODJiMDQyMGY3NGNkMjU0NmI5ODZhYjBmYy5qcGcnXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcmM6ICdodHRwczovLzk2LmYuMXRpbmcuY29tL2xvY2FsX3RvX2N1YmVfMjAyMDA0MTIxODEzLzk2a21wMy96enp6em1wMy8yMDE1a05vdi8yNVgvMjVtX1hpYW9RLzAzLm1wMycsXHJcblx0XHR0aXRsZTogJ+Wlvei/kOadpScsXHJcblx0XHRzaW5nZXI6ICfkvZzogIUxMTExJyxcclxuXHRcdGNvdmVySW1nVXJsOiAnaHR0cHM6Ly9pbWcuMXRpbmcuY29tL2ltYWdlcy9zcGVjaWFsLzIwNC9zMTUwXzc3MjU0Y2Q0YTRkYTFhMzNiOGZhZjg5YzRjYmY2ZTQwLmpwZydcclxuXHR9XHJcbl07XHJcblxyXG56YXVkaW8uc2V0QXVkaW8oZGF0YSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcblx0Li4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages.json ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/detail/index', function () {return Vue.extend(__webpack_require__(/*! pages/detail/index.vue?mpType=page */ 22).default);});

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29OO0FBQ3BOLGdCQUFnQiwyTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJlODRhM2NcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("zaudio", { attrs: { theme: "theme1", _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "listbox"), attrs: { _i: 2 } },
        [
          _c("view"),
          _vm._l(_vm._$s(4, "f", { forItems: _vm.audiolist }), function(
            i,
            k,
            $20,
            $30
          ) {
            return _c(
              "view",
              {
                key: _vm._$s(4, "f", { forIndex: $20, key: k }),
                staticClass: _vm._$s("4-" + $30, "sc", "list"),
                attrs: { _i: "4-" + $30 }
              },
              [
                _vm._v(_vm._$s("4-" + $30, "t0-0", _vm._s(i.title))),
                _c("button", {
                  attrs: { _i: "5-" + $30 },
                  on: {
                    click: function($event) {
                      return _vm.go(k)
                    }
                  }
                }),
                _c(
                  "button",
                  {
                    attrs: { _i: "6-" + $30 },
                    on: {
                      click: function($event) {
                        return _vm.play(k)
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._$s(
                        "6-" + $30,
                        "t0-0",
                        _vm._s(
                          !_vm.paused && i.src === _vm.playinfo.src
                            ? "暂停"
                            : "播放"
                        )
                      )
                    )
                  ]
                )
              ]
            )
          })
        ],
        2
      ),
      _c("div", { staticClass: _vm._$s(7, "sc", "demo"), attrs: { _i: 7 } }, [
        _c("button", { attrs: { _i: 8 }, on: { click: _vm.reset } }),
        _c("button", { attrs: { _i: 9 }, on: { click: _vm.add } }),
        _c("button", { attrs: { _i: 10 }, on: { click: _vm.willStop } }),
        _c("button", { attrs: { _i: 11 }, on: { click: _vm.removeStop } }),
        _c("button", {
          attrs: { _i: 12 },
          on: {
            click: function($event) {
              return _vm.logPlaying("log")
            }
          }
        }),
        _c("button", {
          attrs: { _i: 13 },
          on: {
            click: function($event) {
              return _vm.offPlaying("log")
            }
          }
        }),
        _c("button", {
          attrs: { _i: 14 },
          on: {
            click: function($event) {
              return _vm.stepPlay(20)
            }
          }
        }),
        _c("button", {
          attrs: { _i: 15 },
          on: {
            click: function($event) {
              return _vm.stepPlay(-20)
            }
          }
        })
      ])
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd2QixDQUFnQiw4dkJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _zAudio = _interopRequireDefault(__webpack_require__(/*! @/components/z-audio/z-audio */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue'\nvar _default = { data: function data() {return { audiolist: this.$zaudio.audiolist, //当前音频列表\n      playIndex: this.$zaudio.playIndex, //当前播放的索引\n      paused: this.$zaudio.paused, //当前是否暂停\n      playinfo: this.$zaudio.playinfo //当前播放的信息\n    };}, components: { zaudio: _zAudio.default }, onLoad: function onLoad() {this.$zaudio.on('stop', 'aaa', function () {__f__(\"log\", 'aa', \" at pages/index/index.vue:42\");});}, onShow: function onShow() {var _this = this; //同步渲染当前的播放状态\n    this.$zaudio.syncRender(); //同步获取当前播放状态\n    this.$zaudio.syncStateOn('page-index-get-state', function (_ref) {var audiolist = _ref.audiolist,playIndex = _ref.playIndex,paused = _ref.paused,playinfo = _ref.playinfo;_this.audiolist = audiolist;_this.playIndex = playIndex;_this.paused = paused;_this.playinfo = playinfo;});}, onHide: function onHide() {//卸载page-index-get-state,提高页面性能\n    this.$zaudio.syncStateOff('page-index-get-state');}, methods: { play: function play(key) {\n      //播放或暂停\n      this.$zaudio.operate(key);\n    },\n\n    go: function go(key) {\n      uni.navigateTo({\n        url: '/pages/detail/index?key=' + key });\n\n    },\n    reset: function reset() {\n      var data = [\n      {\n        src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/21/21a_zj/01.mp3',\n        title: '二人转',\n        singer: '作者333',\n        coverImgUrl: 'https://img.1ting.com/images/special/374/s300_2f06b17427718e01e54be1cfe462f3e0.jpg' }];\n\n\n      this.$zaudio.setAudio(data);\n    },\n    add: function add() {\n      var data = [\n      {\n        src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/jn/12.jlhg/8.zhg/2.mp3',\n        title: '天边',\n        singer: '作者222',\n        coverImgUrl: 'https://img.1ting.com/images/special/377/s300_4631dc844ab6429b6bc6fe4ccdc6ed6f.jpg' }];\n\n\n      this.$zaudio.updateAudio(data);\n    },\n\n    willStop: function willStop() {var _this2 = this;\n      this.$zaudio.on('playing', 'recharge', function (info) {\n        if (info.current_value > 5) {\n          _this2.$zaudio.stop();\n\n          uni.showModal({\n            title: '打钱后才可以听',\n            content: '打钱后才可以听',\n            success: function success(res) {\n              if (res.confirm) {\n                __f__(\"log\", '用户点击确定', \" at pages/index/index.vue:105\");\n              } else if (res.cancel) {\n                __f__(\"log\", '用户点击取消', \" at pages/index/index.vue:107\");\n              }\n            } });\n\n        }\n      });\n    },\n\n    removeStop: function removeStop() {\n      this.$zaudio.off('playing', 'recharge');\n      this.$zaudio.operate();\n    },\n\n    logPlaying: function logPlaying(action) {\n      // 一个回调事件可以注册多次业务, action用于区分相同回调事件的不同业务\n      //例: playing回调时注册 打印事件\n      this.$zaudio.on('playing', action, function (info) {\n        __f__(\"log\", '播放中----' + action, info, \" at pages/index/index.vue:124\");\n      });\n    },\n    offPlaying: function offPlaying(action) {\n      //注意解除事件action必须与注册事件的action相同\n      this.$zaudio.off('playing', action);\n    },\n    stepPlay: function stepPlay(val) {\n      this.$zaudio.stepPlay(val);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJhdWRpb2xpc3QiLCIkemF1ZGlvIiwicGxheUluZGV4IiwicGF1c2VkIiwicGxheWluZm8iLCJjb21wb25lbnRzIiwiemF1ZGlvIiwib25Mb2FkIiwib24iLCJvblNob3ciLCJzeW5jUmVuZGVyIiwic3luY1N0YXRlT24iLCJvbkhpZGUiLCJzeW5jU3RhdGVPZmYiLCJtZXRob2RzIiwicGxheSIsImtleSIsIm9wZXJhdGUiLCJnbyIsInVuaSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZXNldCIsInNyYyIsInRpdGxlIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJzZXRBdWRpbyIsImFkZCIsInVwZGF0ZUF1ZGlvIiwid2lsbFN0b3AiLCJpbmZvIiwiY3VycmVudF92YWx1ZSIsInN0b3AiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJyZW1vdmVTdG9wIiwib2ZmIiwibG9nUGxheWluZyIsImFjdGlvbiIsIm9mZlBsYXlpbmciLCJzdGVwUGxheSIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLGlHLDhGQTNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7ZUFDZSxFQUNkQSxJQURjLGtCQUNQLENBQ04sT0FBTyxFQUNOQyxTQUFTLEVBQUUsS0FBS0MsT0FBTCxDQUFhRCxTQURsQixFQUM2QjtBQUNuQ0UsZUFBUyxFQUFFLEtBQUtELE9BQUwsQ0FBYUMsU0FGbEIsRUFFNkI7QUFDbkNDLFlBQU0sRUFBRSxLQUFLRixPQUFMLENBQWFFLE1BSGYsRUFHdUI7QUFDN0JDLGNBQVEs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QWFnQixPQUFiO0FBQ0EsS0F6RE87O0FBMkRSeUIsY0EzRFEsc0JBMkRHQyxNQTNESCxFQTJEVztBQUNsQjtBQUNBO0FBQ0EsV0FBSzFDLE9BQUwsQ0FBYU8sRUFBYixDQUFnQixTQUFoQixFQUEyQm1DLE1BQTNCLEVBQW1DLFVBQUFaLElBQUksRUFBSTtBQUMxQyxxQkFBWSxZQUFZWSxNQUF4QixFQUFnQ1osSUFBaEM7QUFDQSxPQUZEO0FBR0EsS0FqRU87QUFrRVJhLGNBbEVRLHNCQWtFR0QsTUFsRUgsRUFrRVc7QUFDbEI7QUFDQSxXQUFLMUMsT0FBTCxDQUFhd0MsR0FBYixDQUFpQixTQUFqQixFQUE0QkUsTUFBNUI7QUFDQSxLQXJFTztBQXNFUkUsWUF0RVEsb0JBc0VDQyxHQXRFRCxFQXNFTTtBQUNiLFdBQUs3QyxPQUFMLENBQWE0QyxRQUFiLENBQXNCQyxHQUF0QjtBQUNBLEtBeEVPLEVBL0JLLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5pbXBvcnQgemF1ZGlvIGZyb20gJ0AvY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8nO1xyXG4vLyBpbXBvcnQgemF1ZGlvIGZyb20gJ3VuaWFwcC16YXVkaW8vY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8udnVlJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGF1ZGlvbGlzdDogdGhpcy4kemF1ZGlvLmF1ZGlvbGlzdCwgLy/lvZPliY3pn7PpopHliJfooahcclxuXHRcdFx0cGxheUluZGV4OiB0aGlzLiR6YXVkaW8ucGxheUluZGV4LCAvL+W9k+WJjeaSreaUvueahOe0ouW8lVxyXG5cdFx0XHRwYXVzZWQ6IHRoaXMuJHphdWRpby5wYXVzZWQsIC8v5b2T5YmN5piv5ZCm5pqC5YGcXHJcblx0XHRcdHBsYXlpbmZvOiB0aGlzLiR6YXVkaW8ucGxheWluZm8gLy/lvZPliY3mkq3mlL7nmoTkv6Hmga9cclxuXHRcdH07XHJcblx0fSxcclxuXHRjb21wb25lbnRzOiB7IHphdWRpbzogemF1ZGlvIH0sXHJcblx0b25Mb2FkKCl7XHJcblx0XHR0aGlzLiR6YXVkaW8ub24oJ3N0b3AnLCAnYWFhJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2FhJylcclxuXHRcdH0pXHJcblx0fSxcclxuXHRvblNob3coKSB7XHJcblx0XHQvL+WQjOatpea4suafk+W9k+WJjeeahOaSreaUvueKtuaAgVxyXG5cdFx0dGhpcy4kemF1ZGlvLnN5bmNSZW5kZXIoKTtcclxuXHJcblx0XHQvL+WQjOatpeiOt+WPluW9k+WJjeaSreaUvueKtuaAgVxyXG5cdFx0dGhpcy4kemF1ZGlvLnN5bmNTdGF0ZU9uKCdwYWdlLWluZGV4LWdldC1zdGF0ZScsICh7IGF1ZGlvbGlzdCwgcGxheUluZGV4LCBwYXVzZWQsIHBsYXlpbmZvIH0pID0+IHtcclxuXHRcdFx0dGhpcy5hdWRpb2xpc3QgPSBhdWRpb2xpc3Q7XHJcblx0XHRcdHRoaXMucGxheUluZGV4ID0gcGxheUluZGV4O1xyXG5cdFx0XHR0aGlzLnBhdXNlZCA9IHBhdXNlZDtcclxuXHRcdFx0dGhpcy5wbGF5aW5mbyA9IHBsYXlpbmZvO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvbkhpZGUoKSB7XHJcblx0XHQvL+WNuOi9vXBhZ2UtaW5kZXgtZ2V0LXN0YXRlLOaPkOmrmOmhtemdouaAp+iDvVxyXG5cdFx0dGhpcy4kemF1ZGlvLnN5bmNTdGF0ZU9mZigncGFnZS1pbmRleC1nZXQtc3RhdGUnKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHBsYXkoa2V5KSB7XHJcblx0XHRcdC8v5pKt5pS+5oiW5pqC5YGcXHJcblx0XHRcdHRoaXMuJHphdWRpby5vcGVyYXRlKGtleSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdvKGtleSkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9pbmRleD9rZXk9JyArIGtleVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRyZXNldCgpIHtcclxuXHRcdFx0bGV0IGRhdGEgPSBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiAnaHR0cHM6Ly85Ni5mLjF0aW5nLmNvbS9sb2NhbF90b19jdWJlXzIwMjAwNDEyMTgxMy85NmttcDMvMjAyMC8wOC8yMS8yMWFfemovMDEubXAzJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5LqM5Lq66L2sJyxcclxuXHRcdFx0XHRcdHNpbmdlcjogJ+S9nOiAhTMzMycsXHJcblx0XHRcdFx0XHRjb3ZlckltZ1VybDogJ2h0dHBzOi8vaW1nLjF0aW5nLmNvbS9pbWFnZXMvc3BlY2lhbC8zNzQvczMwMF8yZjA2YjE3NDI3NzE4ZTAxZTU0YmUxY2ZlNDYyZjNlMC5qcGcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8uc2V0QXVkaW8oZGF0YSk7XHJcblx0XHR9LFxyXG5cdFx0YWRkKCkge1xyXG5cdFx0XHRsZXQgZGF0YSA9IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICdodHRwczovLzk2LmYuMXRpbmcuY29tL2xvY2FsX3RvX2N1YmVfMjAyMDA0MTIxODEzLzk2a21wMy9qbi8xMi5qbGhnLzguemhnLzIubXAzJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5aSp6L65JyxcclxuXHRcdFx0XHRcdHNpbmdlcjogJ+S9nOiAhTIyMicsXHJcblx0XHRcdFx0XHRjb3ZlckltZ1VybDogJ2h0dHBzOi8vaW1nLjF0aW5nLmNvbS9pbWFnZXMvc3BlY2lhbC8zNzcvczMwMF80NjMxZGM4NDRhYjY0MjliNmJjNmZlNGNjZGM2ZWQ2Zi5qcGcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8udXBkYXRlQXVkaW8oZGF0YSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHdpbGxTdG9wKCkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub24oJ3BsYXlpbmcnLCAncmVjaGFyZ2UnLCBpbmZvID0+IHtcclxuXHRcdFx0XHRpZiAoaW5mby5jdXJyZW50X3ZhbHVlID4gNSkge1xyXG5cdFx0XHRcdFx0dGhpcy4kemF1ZGlvLnN0b3AoKTtcclxuXHJcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmiZPpkrHlkI7miY3lj6/ku6XlkKwnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5omT6ZKx5ZCO5omN5Y+v5Lul5ZCsJyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyZW1vdmVTdG9wKCkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub2ZmKCdwbGF5aW5nJywgJ3JlY2hhcmdlJyk7XHJcblx0XHRcdHRoaXMuJHphdWRpby5vcGVyYXRlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGxvZ1BsYXlpbmcoYWN0aW9uKSB7XHJcblx0XHRcdC8vIOS4gOS4quWbnuiwg+S6i+S7tuWPr+S7peazqOWGjOWkmuasoeS4muWKoSwgYWN0aW9u55So5LqO5Yy65YiG55u45ZCM5Zue6LCD5LqL5Lu255qE5LiN5ZCM5Lia5YqhXHJcblx0XHRcdC8v5L6LOiBwbGF5aW5n5Zue6LCD5pe25rOo5YaMIOaJk+WNsOS6i+S7tlxyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub24oJ3BsYXlpbmcnLCBhY3Rpb24sIGluZm8gPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfmkq3mlL7kuK0tLS0tJyArIGFjdGlvbiwgaW5mbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdG9mZlBsYXlpbmcoYWN0aW9uKSB7XHJcblx0XHRcdC8v5rOo5oSP6Kej6Zmk5LqL5Lu2YWN0aW9u5b+F6aG75LiO5rOo5YaM5LqL5Lu255qEYWN0aW9u55u45ZCMXHJcblx0XHRcdHRoaXMuJHphdWRpby5vZmYoJ3BsYXlpbmcnLCBhY3Rpb24pO1xyXG5cdFx0fSxcclxuXHRcdHN0ZXBQbGF5KHZhbCkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8uc3RlcFBsYXkodmFsKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!***************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/z-audio.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z-audio.vue?vue&type=template&id=6267f38c&scoped=true& */ 9);\n/* harmony import */ var _z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./z-audio.vue?vue&type=script&lang=js& */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6267f38c\",\n  null,\n  false,\n  _z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/z-audio/z-audio.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDs7O0FBR3REO0FBQ29OO0FBQ3BOLGdCQUFnQiwyTkFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vei1hdWRpby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI2N2YzOGMmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi96LWF1ZGlvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vei1hdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjI2N2YzOGNcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/z-audio.vue?vue&type=template&id=6267f38c&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-audio.vue?vue&type=template&id=6267f38c&scoped=true& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_template_id_6267f38c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/z-audio.vue?vue&type=template&id=6267f38c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.audiolist.length > 0)
    ? _c(
        "view",
        {
          staticClass: _vm._$s(0, "sc", "imt-audio"),
          class: _vm._$s(0, "c", ["" + _vm.theme]),
          attrs: { _i: 0 }
        },
        [
          _vm._$s(1, "i", _vm.theme == "theme3")
            ? [
                _c("slider", {
                  staticClass: _vm._$s(2, "sc", "audio-slider"),
                  attrs: {
                    activeColor: _vm._$s(2, "a-activeColor", _vm.themeColor),
                    value: _vm._$s(
                      2,
                      "a-value",
                      _vm.renderData("current_value")
                    ),
                    max: _vm._$s(2, "a-max", _vm.renderData("duration_value")),
                    disabled: _vm._$s(2, "a-disabled", !_vm.renderIsPlay),
                    _i: 2
                  },
                  on: { change: _vm.change }
                }),
                _c(
                  "view",
                  { staticClass: _vm._$s(3, "sc", "top"), attrs: { _i: 3 } },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(4, "sc", "audio-control-wrapper"),
                        attrs: { _i: 4 }
                      },
                      [
                        _c("image", {
                          staticClass: _vm._$s(5, "sc", "cover"),
                          class: _vm._$s(5, "c", {
                            on: !_vm.renderData("paused")
                          }),
                          attrs: {
                            src: _vm._$s(
                              5,
                              "a-src",
                              _vm.renderData("coverImgUrl")
                            ),
                            _i: 5
                          }
                        }),
                        _vm._$s(6, "i", _vm.renderData("paused"))
                          ? _c("image", {
                              staticClass: _vm._$s(6, "sc", "play"),
                              attrs: {
                                src: _vm._$s(
                                  6,
                                  "a-src",
                                  __webpack_require__(/*! ./static/playbtn.png */ 11)
                                ),
                                _i: 6
                              },
                              on: { click: _vm.operate }
                            })
                          : _c("image", {
                              staticClass: _vm._$s(7, "sc", "play"),
                              attrs: {
                                src: _vm._$s(
                                  7,
                                  "a-src",
                                  __webpack_require__(/*! ./static/pausebtn.png */ 12)
                                ),
                                _i: 7
                              },
                              on: { click: _vm.operate }
                            })
                      ]
                    )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(8, "sc", "audio-wrapper"),
                    attrs: { _i: 8 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(9, "sc", "titlebox"),
                        attrs: { _i: 9 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(10, "sc", "title"),
                            attrs: { _i: 10 }
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                10,
                                "t0-0",
                                _vm._s(_vm.renderData("title"))
                              )
                            )
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(11, "sc", "singer"),
                            attrs: { _i: 11 }
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                11,
                                "t0-0",
                                _vm._s(_vm.renderData("singer"))
                              )
                            )
                          ]
                        )
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(12, "sc", "slidebox"),
                        attrs: { _i: 12 }
                      },
                      [
                        _c("view", [
                          _vm._v(
                            _vm._$s(
                              13,
                              "t0-0",
                              _vm._s(_vm.renderData("current"))
                            ) +
                              _vm._$s(
                                13,
                                "t0-1",
                                _vm._s(_vm.renderData("duration"))
                              )
                          )
                        ]),
                        _c("view", [
                          _c("text", {
                            attrs: { _i: 15 },
                            on: {
                              click: function($event) {
                                return _vm.changeplay(-1)
                              }
                            }
                          }),
                          _c("text", {
                            attrs: { _i: 16 },
                            on: {
                              click: function($event) {
                                return _vm.changeplay(1)
                              }
                            }
                          })
                        ])
                      ]
                    )
                  ]
                )
              ]
            : _vm._e(),
          _vm._$s(17, "i", _vm.theme == "theme2")
            ? [
                _c(
                  "view",
                  { staticClass: _vm._$s(18, "sc", "top"), attrs: { _i: 18 } },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(19, "sc", "audio-control-wrapper"),
                        style: _vm._$s(19, "s", {
                          backgroundImage:
                            "url(" + _vm.renderData("coverImgUrl") + ")"
                        }),
                        attrs: { _i: 19 }
                      },
                      [
                        [
                          _vm._$s(21, "i", _vm.renderData("paused"))
                            ? _c("image", {
                                staticClass: _vm._$s(21, "sc", "play"),
                                attrs: {
                                  src: _vm._$s(
                                    21,
                                    "a-src",
                                    __webpack_require__(/*! ./static/playbtn.png */ 11)
                                  ),
                                  _i: 21
                                },
                                on: { click: _vm.operate }
                              })
                            : _c("image", {
                                staticClass: _vm._$s(22, "sc", "play"),
                                attrs: {
                                  src: _vm._$s(
                                    22,
                                    "a-src",
                                    __webpack_require__(/*! ./static/pausebtn.png */ 12)
                                  ),
                                  _i: 22
                                },
                                on: { click: _vm.operate }
                              })
                        ]
                      ],
                      2
                    ),
                    _c("view", [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(24, "sc", "title"),
                          attrs: { _i: 24 }
                        },
                        [
                          _c("text", [
                            _vm._v(
                              _vm._$s(
                                25,
                                "t0-0",
                                _vm._s(_vm.renderData("title"))
                              )
                            )
                          ]),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(26, "sc", "audio-number"),
                              attrs: { _i: 26 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  26,
                                  "t0-0",
                                  _vm._s(_vm.renderData("current"))
                                ) +
                                  _vm._$s(
                                    26,
                                    "t0-1",
                                    _vm._s(_vm.renderData("duration"))
                                  )
                              )
                            ]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(27, "sc", "singer"),
                          attrs: { _i: 27 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              27,
                              "t0-0",
                              _vm._s(_vm.renderData("singer"))
                            )
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]
            : _vm._e(),
          _vm._$s(28, "i", _vm.theme == "theme1")
            ? [
                _c(
                  "view",
                  { staticClass: _vm._$s(29, "sc", "top"), attrs: { _i: 29 } },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(30, "sc", "audio-control-wrapper"),
                        attrs: { _i: 30 }
                      },
                      [
                        _c("image", {
                          staticClass: _vm._$s(31, "sc", "cover"),
                          class: _vm._$s(31, "c", {
                            on: !_vm.renderData("paused")
                          }),
                          attrs: {
                            src: _vm._$s(
                              31,
                              "a-src",
                              _vm.renderData("coverImgUrl")
                            ),
                            _i: 31
                          }
                        })
                      ]
                    ),
                    _c("view", [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(33, "sc", "title"),
                          attrs: { _i: 33 }
                        },
                        [
                          _vm._v(
                            _vm._$s(33, "t0-0", _vm._s(_vm.renderData("title")))
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(34, "sc", "singer"),
                          attrs: { _i: 34 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              34,
                              "t0-0",
                              _vm._s(_vm.renderData("singer"))
                            )
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(35, "sc", "audio-wrapper"),
                    attrs: { _i: 35 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(36, "sc", "audio-number"),
                        attrs: { _i: 36 }
                      },
                      [
                        _vm._v(
                          _vm._$s(36, "t0-0", _vm._s(_vm.renderData("current")))
                        )
                      ]
                    ),
                    _c("slider", {
                      staticClass: _vm._$s(37, "sc", "audio-slider"),
                      attrs: {
                        activeColor: _vm._$s(
                          37,
                          "a-activeColor",
                          _vm.themeColor
                        ),
                        value: _vm._$s(
                          37,
                          "a-value",
                          _vm.renderData("current_value")
                        ),
                        max: _vm._$s(
                          37,
                          "a-max",
                          _vm.renderData("duration_value")
                        ),
                        disabled: _vm._$s(37, "a-disabled", !_vm.renderIsPlay),
                        _i: 37
                      },
                      on: { change: _vm.change }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(38, "sc", "audio-number"),
                        attrs: { _i: 38 }
                      },
                      [
                        _vm._v(
                          _vm._$s(
                            38,
                            "t0-0",
                            _vm._s(_vm.renderData("duration"))
                          )
                        )
                      ]
                    )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(39, "sc", "audio-button-box"),
                    attrs: { _i: 39 }
                  },
                  [
                    _c("image", {
                      staticClass: _vm._$s(40, "sc", "prevbtn"),
                      attrs: {
                        src: _vm._$s(40, "a-src", __webpack_require__(/*! ./static/prev.png */ 13)),
                        _i: 40
                      },
                      on: {
                        click: function($event) {
                          return _vm.stepPlay(-15)
                        }
                      }
                    }),
                    _c("image", {
                      staticClass: _vm._$s(41, "sc", "prevplay"),
                      attrs: {
                        src: _vm._$s(41, "a-src", __webpack_require__(/*! ./static/go.png */ 14)),
                        _i: 41
                      },
                      on: {
                        click: function($event) {
                          return _vm.changeplay(-1)
                        }
                      }
                    }),
                    _vm._$s(42, "i", _vm.renderData("paused"))
                      ? _c("image", {
                          staticClass: _vm._$s(42, "sc", "play"),
                          attrs: {
                            src: _vm._$s(
                              42,
                              "a-src",
                              __webpack_require__(/*! ./static/playbtn2.png */ 15)
                            ),
                            _i: 42
                          },
                          on: { click: _vm.operate }
                        })
                      : _c("image", {
                          staticClass: _vm._$s(43, "sc", "pause"),
                          attrs: {
                            src: _vm._$s(
                              43,
                              "a-src",
                              __webpack_require__(/*! ./static/pausebtn2.png */ 16)
                            ),
                            _i: 43
                          },
                          on: { click: _vm.operate }
                        }),
                    _c("image", {
                      staticClass: _vm._$s(44, "sc", "nextplay"),
                      attrs: {
                        src: _vm._$s(44, "a-src", __webpack_require__(/*! ./static/go.png */ 14)),
                        _i: 44
                      },
                      on: {
                        click: function($event) {
                          return _vm.changeplay(1)
                        }
                      }
                    }),
                    _c("image", {
                      staticClass: _vm._$s(45, "sc", "nextbtn"),
                      attrs: {
                        src: _vm._$s(45, "a-src", __webpack_require__(/*! ./static/next.png */ 17)),
                        _i: 45
                      },
                      on: {
                        click: function($event) {
                          return _vm.stepPlay(15)
                        }
                      }
                    })
                  ]
                )
              ]
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!**********************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/static/playbtn.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/z-audio/static/playbtn.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3otYXVkaW8vc3RhdGljL3BsYXlidG4ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***********************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/static/pausebtn.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/z-audio/static/pausebtn.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3otYXVkaW8vc3RhdGljL3BhdXNlYnRuLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*******************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/static/prev.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/z-audio/static/prev.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3otYXVkaW8vc3RhdGljL3ByZXYucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*****************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/static/go.png ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/z-audio/static/go.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3otYXVkaW8vc3RhdGljL2dvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!***********************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/static/playbtn2.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/z-audio/static/playbtn2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3otYXVkaW8vc3RhdGljL3BsYXlidG4yLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/static/pausebtn2.png ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/z-audio/static/pausebtn2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3otYXVkaW8vc3RhdGljL3BhdXNlYnRuMi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*******************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/static/next.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/z-audio/static/next.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3otYXVkaW8vc3RhdGljL25leHQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/z-audio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./z-audio.vue?vue&type=script&lang=js& */ 19);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_z_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV1QixDQUFnQixxdkJBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi96LWF1ZGlvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3otYXVkaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/z-audio.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _util = __webpack_require__(/*! ./util */ 32); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { props: { theme: { type: String, // 主题 'theme1' or 'theme2'\n      default: 'theme1' }, themeColor: { type: String, default: '#42b983' } }, data: function data() {return { playinfo: this.$zaudio.playinfo, audiolist: this.$zaudio.audiolist, paused: this.$zaudio.paused, renderIsPlay: this.$zaudio.renderIsPlay, audio: this.$zaudio.renderinfo, action: Symbol('zaudio') };}, computed: { renderData: function renderData() {var _this = this;return function (name) {if (!_this.renderIsPlay) {if (name == 'paused') {return true;}return _this.audio[name];} else {if (name == 'paused') {return _this.paused;}return _this.playinfo[name];}};} }, mounted: function mounted() {var _this2 = this;this.$nextTick(function () {//修复小程序autoplay为false时的bug\n      _this2.audio = _this2.$zaudio.renderinfo;_this2.renderIsPlay = _this2.$zaudio.renderIsPlay;var action = _this2.action;_this2.$zaudio.syncStateOn(action, function (_ref) {var audiolist = _ref.audiolist,paused = _ref.paused,playinfo = _ref.playinfo,renderIsPlay = _ref.renderIsPlay,renderinfo = _ref.renderinfo;_this2.audiolist = audiolist;_this2.paused = paused;_this2.playinfo = playinfo;_this2.renderIsPlay = renderIsPlay;_this2.audio = renderinfo;});});}, methods: { //播放or暂停\n    operate: function operate() {this.$zaudio.operate();}, //进度拖到\n    change: function change(event) {if (this.renderIsPlay) {this.$zaudio.seek(event.detail.value);this.$zaudio.commit('setPlayinfo', { current: (0, _util.formatSeconds)(event.detail.value), current_value: event.detail.value });}}, //快进\n    stepPlay: function stepPlay(value) {this.$zaudio.stepPlay(value);}, //切歌\n    changeplay: function changeplay(count) {this.$zaudio.changeplay(count);} }, beforeDestroy: function beforeDestroy() {//组件卸载时卸载业务逻辑\n    var action = this.action;this.$zaudio.off('setAudio', action);this.$zaudio.off('updateAudio', action);this.$zaudio.off('canPlay', action);this.$zaudio.off('playing', action);this.$zaudio.off('pause', action);} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0dBLGtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRUEsRUFDQSxTQUNBLFNBQ0EsWUFEQSxFQUNBO0FBQ0EsdUJBRkEsRUFEQSxFQUtBLGNBQ0EsWUFEQSxFQUVBLGtCQUZBLEVBTEEsRUFEQSxFQVdBLElBWEEsa0JBV0EsQ0FDQSxTQUNBLCtCQURBLEVBRUEsaUNBRkEsRUFHQSwyQkFIQSxFQUlBLHVDQUpBLEVBS0EsOEJBTEEsRUFNQSx3QkFOQSxHQVFBLENBcEJBLEVBcUJBLFlBQ0EsVUFEQSx3QkFDQSxrQkFDQSx3QkFDQSwwQkFDQSx1QkFDQSxZQUNBLENBRUEseUJBQ0EsQ0FOQSxNQU1BLENBQ0EsdUJBQ0Esb0JBQ0EsQ0FFQSw0QkFDQSxDQUNBLENBZEEsQ0FlQSxDQWpCQSxFQXJCQSxFQXlDQSxPQXpDQSxxQkF5Q0EsbUJBQ0EsNEJBQ0E7QUFDQSwrQ0FDQSxrREFFQSwyQkFDQSwrTEFDQSw2QkFDQSx1QkFDQSwyQkFDQSxtQ0FDQSwwQkFDQSxDQU5BLEVBUUEsQ0FkQSxFQWVBLENBekRBLEVBMERBLFdBQ0E7QUFDQSxXQUZBLHFCQUVBLENBQ0EsdUJBQ0EsQ0FKQSxFQUtBO0FBQ0EsVUFOQSxrQkFNQSxLQU5BLEVBTUEsQ0FDQSx3QkFDQSxzQ0FDQSxxQ0FDQSxxREFEQSxFQUVBLGlDQUZBLElBSUEsQ0FDQSxDQWRBLEVBZUE7QUFDQSxZQWhCQSxvQkFnQkEsS0FoQkEsRUFnQkEsQ0FDQSw2QkFDQSxDQWxCQSxFQW1CQTtBQUNBLGNBcEJBLHNCQW9CQSxLQXBCQSxFQW9CQSxDQUNBLCtCQUNBLENBdEJBLEVBMURBLEVBa0ZBLGFBbEZBLDJCQWtGQSxDQUNBO0FBQ0EsNkJBQ0EscUNBQ0Esd0NBQ0Esb0NBQ0Esb0NBQ0Esa0NBQ0EsQ0ExRkEsRSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImltdC1hdWRpb1wiIDpjbGFzcz1cIltgJHt0aGVtZX1gXVwiIHYtaWY9XCJhdWRpb2xpc3QubGVuZ3RoID4gMFwiPlxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJ0aGVtZSA9PSAndGhlbWUzJ1wiPlxyXG5cdFx0XHQ8c2xpZGVyXHJcblx0XHRcdFx0Y2xhc3M9XCJhdWRpby1zbGlkZXJcIlxyXG5cdFx0XHRcdDphY3RpdmVDb2xvcj1cInRoZW1lQ29sb3JcIlxyXG5cdFx0XHRcdGJsb2NrLXNpemU9XCIwXCJcclxuXHRcdFx0XHQ6dmFsdWU9XCJyZW5kZXJEYXRhKCdjdXJyZW50X3ZhbHVlJylcIlxyXG5cdFx0XHRcdDptYXg9XCJyZW5kZXJEYXRhKCdkdXJhdGlvbl92YWx1ZScpXCJcclxuXHRcdFx0XHRAY2hhbmdlPVwiY2hhbmdlXCJcclxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCIhcmVuZGVySXNQbGF5XCJcclxuXHRcdFx0Pjwvc2xpZGVyPlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImF1ZGlvLWNvbnRyb2wtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZW5kZXJEYXRhKCdjb3ZlckltZ1VybCcpXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBjbGFzcz1cImNvdmVyXCIgOmNsYXNzPVwieyBvbjogIXJlbmRlckRhdGEoJ3BhdXNlZCcpIH1cIj48L2ltYWdlPlxyXG5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGxheWJ0bi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWlmPVwicmVuZGVyRGF0YSgncGF1c2VkJylcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wYXVzZWJ0bi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPnt7IHJlbmRlckRhdGEoJ3RpdGxlJykgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbmdlclwiPnt7IHJlbmRlckRhdGEoJ3NpbmdlcicpIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzbGlkZWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+e3sgcmVuZGVyRGF0YSgnY3VycmVudCcpIH19LyB7eyByZW5kZXJEYXRhKCdkdXJhdGlvbicpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cImNoYW5nZXBsYXkoLTEpXCI+5LiK5LiA6aaWPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJjaGFuZ2VwbGF5KDEpXCI+5LiL5LiA6aaWPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cInRoZW1lID09ICd0aGVtZTInXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1jb250cm9sLXdyYXBwZXJcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cmVuZGVyRGF0YSgnY292ZXJJbWdVcmwnKX0pYH1cIj5cclxuXHRcdFx0XHRcdDx0ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wbGF5YnRuLnBuZycpXCIgYWx0PVwiXCIgQGNsaWNrPVwib3BlcmF0ZVwiIGNsYXNzPVwicGxheVwiIHYtaWY9XCJyZW5kZXJEYXRhKCdwYXVzZWQnKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGF1c2VidG4ucG5nJylcIiBhbHQ9XCJcIiBAY2xpY2s9XCJvcGVyYXRlXCIgY2xhc3M9XCJwbGF5XCIgdi1lbHNlPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0Pnt7IHJlbmRlckRhdGEoJ3RpdGxlJykgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXVkaW8tbnVtYmVyXCI+e3sgcmVuZGVyRGF0YSgnY3VycmVudCcpIH19L3t7IHJlbmRlckRhdGEoJ2R1cmF0aW9uJykgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbmdlclwiPnt7IHJlbmRlckRhdGEoJ3NpbmdlcicpIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cInRoZW1lID09ICd0aGVtZTEnXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1jb250cm9sLXdyYXBwZXJcIj48aW1hZ2UgOnNyYz1cInJlbmRlckRhdGEoJ2NvdmVySW1nVXJsJylcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIGNsYXNzPVwiY292ZXJcIiA6Y2xhc3M9XCJ7IG9uOiAhcmVuZGVyRGF0YSgncGF1c2VkJykgfVwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj57eyByZW5kZXJEYXRhKCd0aXRsZScpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaW5nZXJcIj57eyByZW5kZXJEYXRhKCdzaW5nZXInKSB9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1udW1iZXJcIj57eyByZW5kZXJEYXRhKCdjdXJyZW50JykgfX08L3ZpZXc+XHJcblx0XHRcdFx0PHNsaWRlclxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJhdWRpby1zbGlkZXJcIlxyXG5cdFx0XHRcdFx0OmFjdGl2ZUNvbG9yPVwidGhlbWVDb2xvclwiXHJcblx0XHRcdFx0XHRibG9jay1zaXplPVwiMTZcIlxyXG5cdFx0XHRcdFx0OnZhbHVlPVwicmVuZGVyRGF0YSgnY3VycmVudF92YWx1ZScpXCJcclxuXHRcdFx0XHRcdDptYXg9XCJyZW5kZXJEYXRhKCdkdXJhdGlvbl92YWx1ZScpXCJcclxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGFuZ2VcIlxyXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiIXJlbmRlcklzUGxheVwiXHJcblx0XHRcdFx0Pjwvc2xpZGVyPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXVkaW8tbnVtYmVyXCI+e3sgcmVuZGVyRGF0YSgnZHVyYXRpb24nKSB9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1idXR0b24tYm94XCI+XHJcblx0XHRcdFx0PCEtLSDlnZfpgIAxNXMgLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wcmV2LnBuZycpXCIgY2xhc3M9XCJwcmV2YnRuXCIgQGNsaWNrPVwic3RlcFBsYXkoLTE1KVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLSDkuIrkuIDpppYgLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9nby5wbmcnKVwiIGNsYXNzPVwicHJldnBsYXlcIiBAY2xpY2s9XCJjaGFuZ2VwbGF5KC0xKVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLSDmkq3mlL4gLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wbGF5YnRuMi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWlmPVwicmVuZGVyRGF0YSgncGF1c2VkJylcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwhLS0g5pqC5YGcIC0tPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGF1c2VidG4yLnBuZycpXCIgYWx0PVwiXCIgQGNsaWNrPVwib3BlcmF0ZVwiIGNsYXNzPVwicGF1c2VcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHQ8IS0tIOS4i+S4gOmmliAtLT5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVpcmUoJy4vc3RhdGljL2dvLnBuZycpXCIgY2xhc3M9XCJuZXh0cGxheVwiIEBjbGljaz1cImNoYW5nZXBsYXkoMSlcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwhLS0g5b+r6L+bMTVzIC0tPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvbmV4dC5wbmcnKVwiIGNsYXNzPVwibmV4dGJ0blwiIEBjbGljaz1cInN0ZXBQbGF5KDE1KVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgZm9ybWF0U2Vjb25kcyB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdHRoZW1lOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZywgLy8g5Li76aKYICd0aGVtZTEnIG9yICd0aGVtZTInXHJcblx0XHRcdGRlZmF1bHQ6ICd0aGVtZTEnXHJcblx0XHR9LFxyXG5cdFx0dGhlbWVDb2xvcjoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcjNDJiOTgzJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBsYXlpbmZvOiB0aGlzLiR6YXVkaW8ucGxheWluZm8sXHJcblx0XHRcdGF1ZGlvbGlzdDogdGhpcy4kemF1ZGlvLmF1ZGlvbGlzdCxcclxuXHRcdFx0cGF1c2VkOiB0aGlzLiR6YXVkaW8ucGF1c2VkLFxyXG5cdFx0XHRyZW5kZXJJc1BsYXk6IHRoaXMuJHphdWRpby5yZW5kZXJJc1BsYXksXHJcblx0XHRcdGF1ZGlvOiB0aGlzLiR6YXVkaW8ucmVuZGVyaW5mbyxcclxuXHRcdFx0YWN0aW9uOiBTeW1ib2woJ3phdWRpbycpXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdHJlbmRlckRhdGEoKSB7XHJcblx0XHRcdHJldHVybiBuYW1lID0+IHtcclxuXHRcdFx0XHRpZiAoIXRoaXMucmVuZGVySXNQbGF5KSB7XHJcblx0XHRcdFx0XHRpZiAobmFtZSA9PSAncGF1c2VkJykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXVkaW9bbmFtZV07XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChuYW1lID09ICdwYXVzZWQnKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnBhdXNlZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucGxheWluZm9bbmFtZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdC8v5L+u5aSN5bCP56iL5bqPYXV0b3BsYXnkuLpmYWxzZeaXtueahGJ1Z1xyXG5cdFx0XHR0aGlzLmF1ZGlvID0gdGhpcy4kemF1ZGlvLnJlbmRlcmluZm87XHJcblx0XHRcdHRoaXMucmVuZGVySXNQbGF5ID0gdGhpcy4kemF1ZGlvLnJlbmRlcklzUGxheTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcclxuXHRcdFx0dGhpcy4kemF1ZGlvLnN5bmNTdGF0ZU9uKGFjdGlvbiwgKHsgYXVkaW9saXN0LCBwYXVzZWQsIHBsYXlpbmZvLCByZW5kZXJJc1BsYXksIHJlbmRlcmluZm8gfSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYXVkaW9saXN0ID0gYXVkaW9saXN0O1xyXG5cdFx0XHRcdHRoaXMucGF1c2VkID0gcGF1c2VkO1xyXG5cdFx0XHRcdHRoaXMucGxheWluZm8gPSBwbGF5aW5mbztcclxuXHRcdFx0XHR0aGlzLnJlbmRlcklzUGxheSA9IHJlbmRlcklzUGxheTtcclxuXHRcdFx0XHR0aGlzLmF1ZGlvID0gcmVuZGVyaW5mb1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8v5pKt5pS+b3LmmoLlgZxcclxuXHRcdG9wZXJhdGUoKSB7XHJcblx0XHRcdHRoaXMuJHphdWRpby5vcGVyYXRlKCk7XHJcblx0XHR9LFxyXG5cdFx0Ly/ov5vluqbmi5bliLBcclxuXHRcdGNoYW5nZShldmVudCkge1xyXG5cdFx0XHRpZiAodGhpcy5yZW5kZXJJc1BsYXkpIHtcclxuXHRcdFx0XHR0aGlzLiR6YXVkaW8uc2VlayhldmVudC5kZXRhaWwudmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMuJHphdWRpby5jb21taXQoJ3NldFBsYXlpbmZvJywge1xyXG5cdFx0XHRcdFx0Y3VycmVudDogZm9ybWF0U2Vjb25kcyhldmVudC5kZXRhaWwudmFsdWUpLFxyXG5cdFx0XHRcdFx0Y3VycmVudF92YWx1ZTogZXZlbnQuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL+W/q+i/m1xyXG5cdFx0c3RlcFBsYXkodmFsdWUpIHtcclxuXHRcdFx0dGhpcy4kemF1ZGlvLnN0ZXBQbGF5KHZhbHVlKTtcclxuXHRcdH0sXHJcblx0XHQvL+WIh+atjFxyXG5cdFx0Y2hhbmdlcGxheShjb3VudCkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8uY2hhbmdlcGxheShjb3VudCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRiZWZvcmVEZXN0cm95KCkge1xyXG5cdFx0Ly/nu4Tku7bljbjovb3ml7bljbjovb3kuJrliqHpgLvovpFcclxuXHRcdGxldCBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcclxuXHRcdHRoaXMuJHphdWRpby5vZmYoJ3NldEF1ZGlvJywgYWN0aW9uKTtcclxuXHRcdHRoaXMuJHphdWRpby5vZmYoJ3VwZGF0ZUF1ZGlvJywgYWN0aW9uKTtcclxuXHRcdHRoaXMuJHphdWRpby5vZmYoJ2NhblBsYXknLCBhY3Rpb24pO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZigncGxheWluZycsIGFjdGlvbik7XHJcblx0XHR0aGlzLiR6YXVkaW8ub2ZmKCdwYXVzZScsIGFjdGlvbik7XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuLy8gICNpZmRlZiBNUC1XRUlYSU5cclxuLnRoZW1lMyAuYXVkaW8tc2xpZGVyIHtcclxuXHRtYXJnaW4tdG9wOiAtOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gI2VuZGlmXHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!***********************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/util.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js):\\nError: ENOENT: no such file or directory, open 'C:\\\\Users\\\\16112\\\\Documents\\\\HBuilderProjects\\\\zaudio\\\\components\\\\z-audio\\\\util.ts'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 22 */
/*!*******************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/detail/index.vue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d5445b46&scoped=true&mpType=page */ 23);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d5445b46\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/detail/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29OO0FBQ3BOLGdCQUFnQiwyTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNTQ0NWI0NiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQ1NDQ1YjQ2XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2RldGFpbC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/detail/index.vue?vue&type=template&id=d5445b46&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d5445b46&scoped=true&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/detail/index.vue?vue&type=template&id=d5445b46&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("zaudio", {
        attrs: {
          theme: _vm.themelist[_vm.key].val,
          autoplay: true,
          continue: true,
          _i: 1
        }
      }),
      _vm._l(_vm._$s(2, "f", { forItems: _vm.themelist }), function(
        i,
        k,
        $20,
        $30
      ) {
        return _c(
          "button",
          {
            key: _vm._$s(2, "f", { forIndex: $20, key: k }),
            staticClass: _vm._$s("2-" + $30, "sc", "bottom"),
            attrs: { _i: "2-" + $30 },
            on: {
              click: function($event) {
                return _vm.changeTheme(k)
              }
            }
          },
          [_vm._v(_vm._$s("2-" + $30, "t0-0", _vm._s(i.name)))]
        )
      })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/detail/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 26);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd2QixDQUFnQiw4dkJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/detail/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\nvar _zAudio = _interopRequireDefault(__webpack_require__(/*! @/components/z-audio/z-audio */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue'\nvar _default = { data: function data() {return { key: 2, themelist: [{ name: '样式1', val: 'theme1' },\n\n      {\n        name: '样式2', val: 'theme2' },\n\n      {\n        name: '样式3', val: 'theme3' }] };\n\n\n\n  },\n  components: { zaudio: _zAudio.default },\n  onLoad: function onLoad(query) {var\n    key = query.key;\n    //通过索引去渲染需要播放的音频, 方法1:\n    this.$zaudio.setRender(key);\n\n    // 指定列表中具体信息,去渲染需要播放的音频, 方法2:\n    // this.$zaudio.setRender(this.audiolist[key]);\n\n    //playing回调, 注册`event-a`和`event-b`两个打印事件\n    this.$zaudio.on('playing', 'event-a', function (data) {\n      __f__(\"log\", data, 'event-a', \" at pages/detail/index.vue:39\");\n    });\n    this.$zaudio.on('playing', 'event-b', function (data) {\n      __f__(\"log\", data, 'event-b', \" at pages/detail/index.vue:42\");\n    });\n\n\n  },\n  destroyed: function destroyed() {\n    //页面卸载时卸载业务, 提高页面性能\n    this.$zaudio.off('playing', 'event-a');\n    this.$zaudio.off('playing', 'event-b');\n  },\n  methods: {\n    changeTheme: function changeTheme(k) {\n      this.key = k;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwia2V5IiwidGhlbWVsaXN0IiwibmFtZSIsInZhbCIsImNvbXBvbmVudHMiLCJ6YXVkaW8iLCJvbkxvYWQiLCJxdWVyeSIsIiR6YXVkaW8iLCJzZXRSZW5kZXIiLCJvbiIsImRlc3Ryb3llZCIsIm9mZiIsIm1ldGhvZHMiLCJjaGFuZ2VUaGVtZSIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUEsaUcsOEZBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtlQUNlLEVBQ2RBLElBRGMsa0JBQ1AsQ0FDTixPQUFPLEVBQ05DLEdBQUcsRUFBRSxDQURDLEVBRU5DLFNBQVMsRUFBRSxDQUNWLEVBQ0NDLElBQUksRUFBQyxLQUROLEVBQ1lDLEdBQUcsRUFBQyxRQURoQixFQURVOztBQUlWO0FBQ0NELFlBQUksRUFBQyxLQUROLEVBQ1lDLEdBQUcsRUFBQyxRQURoQixFQUpVOztBQU9WO0FBQ0NELFlBQUksRUFBQyxLQUROLEVBQ1lDLEdBQUcsRUFBQyxRQURoQixFQVBVLENBRkwsRUFBUDs7OztBQWNBLEdBaEJhO0FBaUJkQyxZQUFVLEVBQUUsRUFBRUMsTUFBTSxFQUFFQSxlQUFWLEVBakJFO0FBa0JkQyxRQWxCYyxrQkFrQlBDLEtBbEJPLEVBa0JBO0FBQ1BQLE9BRE8sR0FDQ08sS0FERCxDQUNQUCxHQURPO0FBRWI7QUFDQSxTQUFLUSxPQUFMLENBQWFDLFNBQWIsQ0FBdUJULEdBQXZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFLUSxPQUFMLENBQWFFLEVBQWIsQ0FBZ0IsU0FBaEIsRUFBMkIsU0FBM0IsRUFBc0MsVUFBQVgsSUFBSSxFQUFJO0FBQzdDLG1CQUFZQSxJQUFaLEVBQWlCLFNBQWpCO0FBQ0EsS0FGRDtBQUdBLFNBQUtTLE9BQUwsQ0FBYUUsRUFBYixDQUFnQixTQUFoQixFQUEyQixTQUEzQixFQUFzQyxVQUFBWCxJQUFJLEVBQUk7QUFDN0MsbUJBQVlBLElBQVosRUFBaUIsU0FBakI7QUFDQSxLQUZEOzs7QUFLQSxHQW5DYTtBQW9DZFksV0FwQ2MsdUJBb0NIO0FBQ1Y7QUFDQSxTQUFLSCxPQUFMLENBQWFJLEdBQWIsQ0FBaUIsU0FBakIsRUFBNEIsU0FBNUI7QUFDQSxTQUFLSixPQUFMLENBQWFJLEdBQWIsQ0FBaUIsU0FBakIsRUFBNEIsU0FBNUI7QUFDQSxHQXhDYTtBQXlDZEMsU0FBTyxFQUFFO0FBQ1JDLGVBRFEsdUJBQ0lDLENBREosRUFDTztBQUNkLFdBQUtmLEdBQUwsR0FBV2UsQ0FBWDtBQUNBLEtBSE8sRUF6Q0ssRSIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5pbXBvcnQgemF1ZGlvIGZyb20gJ0AvY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8nO1xyXG4vLyBpbXBvcnQgemF1ZGlvIGZyb20gJ3VuaWFwcC16YXVkaW8vY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8udnVlJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGtleTogMixcclxuXHRcdFx0dGhlbWVsaXN0OiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTon5qC35byPMScsdmFsOid0aGVtZTEnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTon5qC35byPMicsdmFsOid0aGVtZTInLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTon5qC35byPMycsdmFsOid0aGVtZTMnLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6IHsgemF1ZGlvOiB6YXVkaW8gfSxcclxuXHRvbkxvYWQocXVlcnkpIHtcclxuXHRcdGxldCB7IGtleSB9ID0gcXVlcnk7IFxyXG5cdFx0Ly/pgJrov4fntKLlvJXljrvmuLLmn5PpnIDopoHmkq3mlL7nmoTpn7PpopEsIOaWueazlTE6XHJcblx0XHR0aGlzLiR6YXVkaW8uc2V0UmVuZGVyKGtleSk7XHJcblxyXG5cdFx0Ly8g5oyH5a6a5YiX6KGo5Lit5YW35L2T5L+h5oGvLOWOu+a4suafk+mcgOimgeaSreaUvueahOmfs+mikSwg5pa55rOVMjpcclxuXHRcdC8vIHRoaXMuJHphdWRpby5zZXRSZW5kZXIodGhpcy5hdWRpb2xpc3Rba2V5XSk7XHJcblx0XHRcclxuXHRcdC8vcGxheWluZ+Wbnuiwgywg5rOo5YaMYGV2ZW50LWFg5ZKMYGV2ZW50LWJg5Lik5Liq5omT5Y2w5LqL5Lu2XHJcblx0XHR0aGlzLiR6YXVkaW8ub24oJ3BsYXlpbmcnLCAnZXZlbnQtYScsIGRhdGEgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhLCdldmVudC1hJylcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9uKCdwbGF5aW5nJywgJ2V2ZW50LWInLCBkYXRhID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSwnZXZlbnQtYicpXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cclxuXHR9LFxyXG5cdGRlc3Ryb3llZCgpe1xyXG5cdFx0Ly/pobXpnaLljbjovb3ml7bljbjovb3kuJrliqEsIOaPkOmrmOmhtemdouaAp+iDvVxyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZigncGxheWluZycsICdldmVudC1hJylcclxuXHRcdHRoaXMuJHphdWRpby5vZmYoJ3BsYXlpbmcnLCAnZXZlbnQtYicpXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRjaGFuZ2VUaGVtZShrKSB7XHJcblx0XHRcdHRoaXMua2V5ID0gaztcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 28 */
/*!****************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/App.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDOE07QUFDOU0sZ0JBQWdCLDJOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*****************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 30);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJzQixDQUFnQixpdkJBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/16112/Documents/HBuilderProjects/zaudio/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n\n  },\n  onShow: function onShow() {\n  },\n  onHide: function onHide() {\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVzs7QUFFcEIsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsR0FMYTtBQU1kQyxRQUFNLEVBQUUsa0JBQVc7O0FBRWxCLEdBUmEsRSIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG5cdFx0XG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/index.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _get(target, property, receiver) {if (typeof Reflect !== \"undefined\" && Reflect.get) {_get = Reflect.get;} else {_get = function _get(target, property, receiver) {var base = _superPropBase(target, property);if (!base) return;var desc = Object.getOwnPropertyDescriptor(base, property);if (desc.get) {return desc.get.call(receiver);}return desc.value;};}return _get(target, property, receiver || target);}function _superPropBase(object, property) {while (!Object.prototype.hasOwnProperty.call(object, property)) {object = _getPrototypeOf(object);if (object === null) break;}return object;}function _inherits(subClass, superClass) {if (typeof superClass !== \"function\" && superClass !== null) {throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === \"object\" || typeof call === \"function\")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === \"function\") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * ---------------------------------options参数\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @param defaultCover  <String>   音频默认海报\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @param continuePlay  <Boolean>  继续播放         错误播放或结束播放后执行\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @param autoPlay      <Boolean>  自动播放\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./util */ 20)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, util_1) {\n  \"use strict\";\n  Object.defineProperty(exports, \"__esModule\", { value: true });var\n  EventBus = /*#__PURE__*/function () {\n    function EventBus() {_classCallCheck(this, EventBus);\n      this._events = new Map();\n    }_createClass(EventBus, [{ key: \"on\", value: function on(\n      event, action, fn) {\n        if (event !== undefined && action !== undefined) {\n          var arr = this._events.get(event);\n          var hasAction = arr ?\n          arr.findIndex(function (i) {return i.action == action;}) :\n          -1;\n          if (hasAction > -1) {\n            return;\n          }\n          this._events.set(event, [].concat(_toConsumableArray(\n          this._events.get(event) || []), [\n          {\n            action: action,\n            fn: fn }]));\n\n\n        }\n      } }, { key: \"has\", value: function has(\n      event) {\n        return this._events.has(event);\n      } }, { key: \"emit\", value: function emit(\n      event, data) {\n        if (!this.has(event)) {\n          return false;\n        }\n        var arr = this._events.get(event);\n        arr.forEach(function (i) {\n          i.fn(data);\n        });\n      } }, { key: \"off\", value: function off(\n      event, action) {\n        if (!this.has(event)) {\n          return false;\n        }\n        var arr = this._events.get(event);\n        var newdata = arr.filter(function (i) {return i.action !== action;});\n        this._events.set(event, _toConsumableArray(newdata));\n      } }]);return EventBus;}();var\n\n  ZAudio = /*#__PURE__*/function (_EventBus) {_inherits(ZAudio, _EventBus);var _super = _createSuper(ZAudio);\n    function ZAudio(options) {var _this;_classCallCheck(this, ZAudio);\n      _this = _super.call(this);\n      _this.renderIndex = 0; // 组件渲染的索引值\n      _this.audiolist = []; //音频列表\n      _this.renderinfo = {\n        //zaudio组件-当前渲染的音频数据\n        current: 0,\n        duration: 0,\n        duration_value: 0,\n        current_value: 0,\n        src: \"\",\n        title: \"\",\n        singer: \"\",\n        coverImgUrl: \"\" };\n\n      _this.playinfo = {\n        //$zaudio对象-当前播放的音频数据\n        current: 0,\n        duration: 0,\n        duration_value: 0,\n        current_value: 0,\n        src: \"\",\n        title: \"\",\n        singer: \"\",\n        coverImgUrl: \"\" };\n\n      _this.paused = true; //$zaudio对象当前播放音频的暂停状态\n      _this.uPause = false; //$zaudio对象当前播放音频的意外中断的状态\n      _this.autoPlay = false;\n      _this.defaultCover = \"\";\n      _this.continuePlay = true;var\n      defaultCover = options.defaultCover,autoPlay = options.autoPlay,continuePlay = options.continuePlay;\n      if (_this.audioCtx)\n      return _possibleConstructorReturn(_this);\n      _this.defaultCover = defaultCover;\n      _this.autoPlay = autoPlay;\n      _this.continuePlay = continuePlay;\n      _this.init();return _this;\n    }_createClass(ZAudio, [{ key: \"init\", value: function init()\n      {var _this2 = this;\n        var audioCtx = uni.getBackgroundAudioManager();\n        this.audioCtx = audioCtx;\n        this.audioCtx.onCanplay(this.onCanplayHandle.bind(this));\n        this.audioCtx.onPlay(this.onPlayHandle.bind(this));\n        this.audioCtx.onPause(this.onPauseHandle.bind(this));\n        this.audioCtx.onStop(this.onStopHandle.bind(this));\n        this.audioCtx.onEnded(this.onEndedHandle.bind(this));\n        this.audioCtx.onTimeUpdate(this.onTimeUpdateHandle.bind(this));\n        this.audioCtx.onError(this.onErrorHandle.bind(this));\n        setTimeout(function () {\n          if (_this2.autoPlay) {\n            _this2.operate();\n          }\n        }, 500);\n        this.appCheckReplay();\n      } }, { key: \"onCanplayHandle\", value: function onCanplayHandle()\n      {\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"canPlay\", this.playinfo);\n        this.syncEmitState();\n      } }, { key: \"onPlayHandle\", value: function onPlayHandle()\n      {var _this$renderinfo =\n        this.renderinfo,renderSrc = _this$renderinfo.src,renderTitle = _this$renderinfo.title,renderSinger = _this$renderinfo.singer,renderCoverImgUrl = _this$renderinfo.coverImgUrl;\n        this.commit(\"setPlayinfo\", {\n          duration: util_1.formatSecondsSeconds(this.audioCtx.duration),\n          duration_value: this.audioCtx.duration });\n\n        this.commit(\"setPause\", false);\n        this.commit(\"setUnnormalPause\", false);\n      } }, { key: \"onPauseHandle\", value: function onPauseHandle()\n      {\n        this.commit(\"setPause\", true);\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"pause\");\n        this.syncEmitState();\n      } }, { key: \"onStopHandle\", value: function onStopHandle()\n      {\n        this.commit(\"setPause\", true);\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, 'stop');\n        this.syncEmitState();\n      } }, { key: \"onEndedHandle\", value: function onEndedHandle()\n      {\n        this.commit(\"setPause\", true);\n        this.audioCtx.startTime = 0;\n        this.commit(\"setPlayinfo\", {\n          current: util_1.formatSecondsSeconds(\"0\"),\n          current_value: \"0\" });\n\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"end\");\n        this.syncEmitState();\n        //续播\n        if (this.continuePlay) {\n          this.changeplay(1);\n        }\n      } }, { key: \"onTimeUpdateHandle\", value: function onTimeUpdateHandle()\n      {\n        if (this.renderIsPlay) {\n          //解决播放进度大于总进度问题\n          var currentTime = this.audioCtx.currentTime > this.audioCtx.duration ? this.audioCtx.duration : this.audioCtx.currentTime;\n          this.commit(\"setPlayinfo\", {\n            current: util_1.formatSecondsSeconds(currentTime),\n            current_value: currentTime });\n\n        }\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"playing\", this.playinfo);\n        this.syncEmitState();\n      } }, { key: \"onErrorHandle\", value: function onErrorHandle()\n      {\n        this.commit(\"setPause\", true);\n        this.commit(\"setRender\", {\n          src: \"\",\n          title: \"\",\n          singer: \"\",\n          coverImgUrl: \"\" });\n\n        this.commit(\"setPlayinfo\", {\n          current: 0,\n          current_value: 0,\n          duration: 0,\n          duration_value: 0,\n          title: \"\",\n          src: \"\" });\n\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"error\");\n        this.syncEmitState();\n        if (this.continuePlay) {\n          this.changeplay(1);\n        }\n      }\n      //卸载监听回调事件\n    }, { key: \"off\", value: function off(event, action) {\n        _get(_getPrototypeOf(ZAudio.prototype), \"off\", this).call(this, event, action);\n      } }, { key: \"commit\", value: function commit(\n      action, data) {\n        typeof this[action] === \"function\" && this[action](data);\n      }\n      //同步渲染当前状态 (用于不同页面zaudio组件同步播放状态)\n    }, { key: \"syncRender\", value: function syncRender() {\n        this.setRender(this.playIndex);\n      }\n      //注册一个同步获取属性的方法\n    }, { key: \"syncStateOn\", value: function syncStateOn(action, cb) {\n        typeof cb === \"function\" && _get(_getPrototypeOf(ZAudio.prototype), \"on\", this).call(this, \"syncStateOn\", action, cb);\n      }\n      //卸载同步获取属性的方法\n    }, { key: \"syncStateOff\", value: function syncStateOff(action) {\n        _get(_getPrototypeOf(ZAudio.prototype), \"off\", this).call(this, \"syncStateOn\", action);\n      }\n      //订阅同步获取属性事件\n    }, { key: \"syncEmitState\", value: function syncEmitState() {\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"syncStateOn\", {\n          renderIndex: this.renderIndex,\n          audiolist: this.audiolist,\n          renderinfo: this.renderinfo,\n          playinfo: this.playinfo,\n          paused: this.paused,\n          playIndex: this.playIndex,\n          renderIsPlay: this.renderIsPlay });\n\n      }\n      //指定位置\n    }, { key: \"seek\", value: function seek(value) {var _this3 = this;\n        this.audioCtx.seek(value);\n        setTimeout(function () {\n          _get(_getPrototypeOf(ZAudio.prototype), \"emit\", _this3).call(_this3, \"seek\", _this3.playinfo.current);\n        }, 0);\n      }\n      //快进,退\n    }, { key: \"stepPlay\", value: function stepPlay(value) {\n        if (this.renderIsPlay) {\n          var pos = this.playinfo.current_value + value;\n          this.seek(pos);\n        }\n      }\n      //切歌\n    }, { key: \"changeplay\", value: function changeplay(count) {\n        if (this.renderIsPlay) {\n          var nowindex = this.renderIndex;\n          nowindex += count;\n          nowindex =\n          nowindex < 0 ?\n          this.audiolist.length - 1 :\n          nowindex > this.audiolist.length - 1 ?\n          0 :\n          nowindex;\n          this.commit(\"setPause\", true);\n          this.operate(nowindex);\n        } else\n        {\n          this.commit(\"setPause\", true);\n          this.operate(this.renderIndex);\n        }\n      }\n      //手动播放或暂停, 并渲染对应的数据\n    }, { key: \"operate\", value: function operate(key) {\n        key !== undefined && this.commit(\"setRender\", key);\n        this.operation();\n      }\n      //暂停播放\n    }, { key: \"stop\", value: function stop() {\n        this.audioCtx.pause();\n        this.commit(\"setPause\", true);\n        this.commit(\"setUnnormalPause\", true);\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"stop\");\n      }\n      //播放,暂停事件判断,\n      //播放数据与渲染数据相同时: 播放->暂停, 暂停->播放\n      //播放数据与渲染数据不相同时: 播放渲染音频\n    }, { key: \"operation\", value: function operation() {var _this$playinfo =\n        this.playinfo,duration = _this$playinfo.duration,current = _this$playinfo.current,duration_value = _this$playinfo.duration_value,current_value = _this$playinfo.current_value,src = _this$playinfo.src;var _this$renderinfo2 =\n        this.renderinfo,renderSrc = _this$renderinfo2.src,renderTitle = _this$renderinfo2.title,renderSinger = _this$renderinfo2.singer,renderCoverImgUrl = _this$renderinfo2.coverImgUrl;\n        var renderIsPlay = this.renderIsPlay;\n        var paused = this.paused;\n        if (!renderIsPlay) {\n          //渲染与播放地址 不同\n          this.audioCtx.src = renderSrc;\n          this.audioCtx.title = renderTitle;\n          this.audioCtx.singer = renderSinger;\n          this.audioCtx.coverImgUrl = renderCoverImgUrl || this.defaultCover;\n          this.audioCtx.startTime = 0;\n          this.audioCtx.seek(0);\n          this.audioCtx.play();\n          this.commit(\"setPause\", false);\n          this.commit(\"setPlayinfo\", {\n            src: renderSrc,\n            title: renderTitle,\n            singer: renderSinger,\n            coverImgUrl: renderCoverImgUrl });\n\n        } else\n        {\n          if (paused) {\n            //渲染与播放地址相同\n            this.audioCtx.play();\n            this.audioCtx.startTime = current_value;\n            this.audioCtx.seek(current_value);\n            this.commit(\"setPause\", false);\n            this.commit(\"setPlayinfo\", {\n              src: renderSrc,\n              title: renderTitle,\n              singer: renderSinger,\n              coverImgUrl: renderCoverImgUrl });\n\n          } else\n          {\n            this.audioCtx.pause();\n            this.commit(\"setPause\", true);\n            this.commit(\"setUnnormalPause\", true);\n          }\n        }\n      }\n      //覆盖音频\n    }, { key: \"setAudio\", value: function setAudio(data) {\n        this.audiolist = _toConsumableArray(data);\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"setAudio\", this.audiolist);\n        this.syncEmitState();\n      }\n      //添加音频\n    }, { key: \"updateAudio\", value: function updateAudio(data) {var _this$audiolist;\n        (_this$audiolist = this.audiolist).push.apply(_this$audiolist, _toConsumableArray(data));\n        _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, \"updateAudio\", this.audiolist);\n        this.syncEmitState();\n      }\n      //设置当前播放信息\n    }, { key: \"setPlayinfo\", value: function setPlayinfo(data) {\n        if (data.current) {\n          this.playinfo.current = data.current;\n        }\n        if (data.duration) {\n          this.playinfo.duration = data.duration;\n        }\n        if (data.duration_value) {\n          this.playinfo.duration_value = data.duration_value;\n        }\n        if (data.current_value) {\n          this.playinfo.current_value = data.current_value;\n        }\n        if (data.src) {\n          this.playinfo.src = data.src;\n        }\n        if (data.title) {\n          this.playinfo.title = data.title;\n        }\n        if (data.singer) {\n          this.playinfo.singer = data.singer;\n        }\n        if (data.coverImgUrl) {\n          this.playinfo.coverImgUrl = data.coverImgUrl;\n        }\n      }\n      //设置暂停状态\n    }, { key: \"setPause\", value: function setPause(data) {\n        this.paused = data;\n      }\n      //设置通话时暂停状态\n    }, { key: \"setUnnormalPause\", value: function setUnnormalPause(data) {\n        this.uPause = data;\n      }\n      //设置渲染 @param 索引或渲染信息\n    }, { key: \"setRender\", value: function setRender(data) {\n        if (this.audiolist.length == 0)\n        return;\n        if (typeof data === \"number\" || typeof data === \"string\") {\n          this.renderIndex = typeof data === \"string\" ? parseInt(data) : data;\n          this.renderinfo = {\n            src: this.audiolist[data].src,\n            title: this.audiolist[data].title,\n            singer: this.audiolist[data].singer,\n            coverImgUrl: this.audiolist[data].coverImgUrl,\n            current: \"00:00\",\n            duration: \"00:00\",\n            current_value: 0,\n            duration_value: 100 };\n\n        } else\n        {\n          this.renderinfo = data;\n          var renderIndex = this.audiolist.findIndex(function (i) {return i.src == data.src;});\n          if (renderIndex >= 0) {\n            this.renderIndex = renderIndex;\n          }\n        }\n      }\n      //当前索引\n    }, { key: \"appCheckReplay\",\n\n\n\n\n\n\n\n      //app端判断电话来电后, 音频意外中断之后的继续播放\n      value: function appCheckReplay() {\n        var _t = this;\n        try {\n          if (uni.getSystemInfoSync().platform == \"android\") {\n            var main = plus.android.runtimeMainActivity();\n            var Context = plus.android.importClass(\"android.content.Context\");\n            var telephonyManager = plus.android.importClass(\"android.telephony.TelephonyManager\");\n            var telephonyManager = plus.android.\n            runtimeMainActivity().\n            getSystemService(Context.TELEPHONY_SERVICE);\n            var receiver = plus.android.implements(\"io.dcloud.android.content.BroadcastReceiver\", {\n              onReceive: function onReceive(intent) {\n                //实现onReceiver回调函数\n                plus.android.importClass(intent);\n                var telephonyManager = plus.android.importClass(\"android.telephony.TelephonyManager\");\n                var telephonyManager = plus.android.\n                runtimeMainActivity().\n                getSystemService(Context.TELEPHONY_SERVICE);\n                var phonetype = telephonyManager.getCallState();\n                var phoneNumber = intent.getStringExtra(telephonyManager.EXTRA_INCOMING_NUMBER);\n                if (phonetype == 0 && !_t.uPause) {\n                  _t.audioCtx.play();\n                }\n              } });\n\n            var IntentFilter = plus.android.importClass(\"android.content.IntentFilter\");\n            var filter = new IntentFilter();\n            filter.addAction(telephonyManager.ACTION_PHONE_STATE_CHANGED); //监听开关\n            main.registerReceiver(receiver, filter); //注册监听\n          } else\n          if (uni.getSystemInfoSync().platform == \"ios\") {\n            var callstatus = false;\n            var CTCall = plus.ios.importClass(\"CTCall\");\n            var CTCallCenter = plus.ios.importClass(\"CTCallCenter\");\n            var center = new CTCallCenter();\n            center.init();\n            center.setCallEventr(function (ctCall) {\n              callstatus = !callstatus;\n              if (!callstatus && !_t.uPause) {\n                _t.audioCtx.play();\n              } else\n              {\n                _t.audioCtx.pause();\n              }\n            });\n          }\n        }\n        catch (err) {\n          __f__(\"log\", err, \" at components/z-audio/index.ts:433\");\n        }\n      } }, { key: \"playIndex\", get: function get() {var _this4 = this;var index = this.audiolist.findIndex(function (i) {return i.src == _this4.playinfo.src;});return index <= 0 ? 0 : index;} //渲染与播放是否一致\n    }, { key: \"renderIsPlay\", get: function get() {return this.renderinfo.src == this.playinfo.src;} }]);return ZAudio;}(EventBus);\n  ZAudio.version = \"2.1.2\";\n  exports.ZAudio = ZAudio;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy96LWF1ZGlvL2luZGV4LnRzIl0sIm5hbWVzIjpbImRlZmluZSIsInJlcXVpcmUiLCJleHBvcnRzIiwidXRpbF8xIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkV2ZW50QnVzIiwiX2V2ZW50cyIsIk1hcCIsImV2ZW50IiwiYWN0aW9uIiwiZm4iLCJ1bmRlZmluZWQiLCJhcnIiLCJnZXQiLCJoYXNBY3Rpb24iLCJmaW5kSW5kZXgiLCJpIiwic2V0IiwiaGFzIiwiZGF0YSIsImZvckVhY2giLCJuZXdkYXRhIiwiZmlsdGVyIiwiWkF1ZGlvIiwib3B0aW9ucyIsInJlbmRlckluZGV4IiwiYXVkaW9saXN0IiwicmVuZGVyaW5mbyIsImN1cnJlbnQiLCJkdXJhdGlvbiIsImR1cmF0aW9uX3ZhbHVlIiwiY3VycmVudF92YWx1ZSIsInNyYyIsInRpdGxlIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJwbGF5aW5mbyIsInBhdXNlZCIsInVQYXVzZSIsImF1dG9QbGF5IiwiZGVmYXVsdENvdmVyIiwiY29udGludWVQbGF5IiwiYXVkaW9DdHgiLCJpbml0IiwidW5pIiwiZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlciIsIm9uQ2FucGxheSIsIm9uQ2FucGxheUhhbmRsZSIsImJpbmQiLCJvblBsYXkiLCJvblBsYXlIYW5kbGUiLCJvblBhdXNlIiwib25QYXVzZUhhbmRsZSIsIm9uU3RvcCIsIm9uU3RvcEhhbmRsZSIsIm9uRW5kZWQiLCJvbkVuZGVkSGFuZGxlIiwib25UaW1lVXBkYXRlIiwib25UaW1lVXBkYXRlSGFuZGxlIiwib25FcnJvciIsIm9uRXJyb3JIYW5kbGUiLCJzZXRUaW1lb3V0Iiwib3BlcmF0ZSIsImFwcENoZWNrUmVwbGF5Iiwic3luY0VtaXRTdGF0ZSIsInJlbmRlclNyYyIsInJlbmRlclRpdGxlIiwicmVuZGVyU2luZ2VyIiwicmVuZGVyQ292ZXJJbWdVcmwiLCJjb21taXQiLCJmb3JtYXRTZWNvbmRzU2Vjb25kcyIsInN0YXJ0VGltZSIsImNoYW5nZXBsYXkiLCJyZW5kZXJJc1BsYXkiLCJjdXJyZW50VGltZSIsInNldFJlbmRlciIsInBsYXlJbmRleCIsImNiIiwic2VlayIsInBvcyIsImNvdW50Iiwibm93aW5kZXgiLCJsZW5ndGgiLCJrZXkiLCJvcGVyYXRpb24iLCJwYXVzZSIsInBsYXkiLCJwdXNoIiwicGFyc2VJbnQiLCJfdCIsImdldFN5c3RlbUluZm9TeW5jIiwicGxhdGZvcm0iLCJtYWluIiwicGx1cyIsImFuZHJvaWQiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiQ29udGV4dCIsImltcG9ydENsYXNzIiwidGVsZXBob255TWFuYWdlciIsImdldFN5c3RlbVNlcnZpY2UiLCJURUxFUEhPTllfU0VSVklDRSIsInJlY2VpdmVyIiwiaW1wbGVtZW50cyIsIm9uUmVjZWl2ZSIsImludGVudCIsInBob25ldHlwZSIsImdldENhbGxTdGF0ZSIsInBob25lTnVtYmVyIiwiZ2V0U3RyaW5nRXh0cmEiLCJFWFRSQV9JTkNPTUlOR19OVU1CRVIiLCJJbnRlbnRGaWx0ZXIiLCJhZGRBY3Rpb24iLCJBQ1RJT05fUEhPTkVfU1RBVEVfQ0hBTkdFRCIsInJlZ2lzdGVyUmVjZWl2ZXIiLCJjYWxsc3RhdHVzIiwiQ1RDYWxsIiwiaW9zIiwiQ1RDYWxsQ2VudGVyIiwiY2VudGVyIiwic2V0Q2FsbEV2ZW50ciIsImN0Q2FsbCIsImVyciIsImluZGV4IiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6IjZ0SUFBQTs7Ozs7O0FBTUFBLGlDQUFPLENBQUMsbUJBQUQsRUFBWSxPQUFaLEVBQXVCLHFDQUF2QixDQUFELG1DQUFtQyxVQUFVQyxPQUFWLEVBQW1CQyxPQUFuQixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDekU7QUFDQUMsUUFBTSxDQUFDQyxjQUFQLENBQXNCSCxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFSSxLQUFLLEVBQUUsSUFBVCxFQUE3QyxFQUZ5RTtBQUduRUMsVUFIbUU7QUFJckUsd0JBQWM7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O0FBQ0g7QUFDSixPQTVhb0UsNENBaVhyRCxtQkFDWixJQUFJQyxLQUFLLEdBQUcsS0FBS2hHLFNBQUwsQ0FBZVgsU0FBZixDQUF5QixVQUFDQyxDQUFELFVBQU9BLENBQUMsQ0FBQ2dCLEdBQUYsSUFBUyxNQUFJLENBQUNJLFFBQUwsQ0FBY0osR0FBOUIsRUFBekIsQ0FBWixDQUNBLE9BQU8wRixLQUFLLElBQUksQ0FBVCxHQUFhLENBQWIsR0FBaUJBLEtBQXhCLENBQ0gsQ0FwWG9FLENBcVhyRTtBQXJYcUUsa0RBc1hsRCxDQUNmLE9BQU8sS0FBSy9GLFVBQUwsQ0FBZ0JLLEdBQWhCLElBQXVCLEtBQUtJLFFBQUwsQ0FBY0osR0FBNUMsQ0FDSCxDQXhYb0UscUJBOENwRDNCLFFBOUNvRDtBQThhekVrQixRQUFNLENBQUNvRyxPQUFQLEdBQWlCLE9BQWpCO0FBQ0EzSCxTQUFPLENBQUN1QixNQUFSLEdBQWlCQSxNQUFqQjtBQUNILENBaGJLO0FBQUEsb0dBQU4sQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1vcHRpb25z5Y+C5pWwXHJcbiAqIEBwYXJhbSBkZWZhdWx0Q292ZXIgIDxTdHJpbmc+ICAg6Z+z6aKR6buY6K6k5rW35oqlXHJcbiAqIEBwYXJhbSBjb250aW51ZVBsYXkgIDxCb29sZWFuPiAg57un57ut5pKt5pS+ICAgICAgICAg6ZSZ6K+v5pKt5pS+5oiW57uT5p2f5pKt5pS+5ZCO5omn6KGMXHJcbiAqIEBwYXJhbSBhdXRvUGxheSAgICAgIDxCb29sZWFuPiAg6Ieq5Yqo5pKt5pS+XHJcbiAqL1xyXG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL3V0aWxcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCB1dGlsXzEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgY2xhc3MgRXZlbnRCdXMge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uKGV2ZW50LCBhY3Rpb24sIGZuKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudCAhPT0gdW5kZWZpbmVkICYmIGFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5fZXZlbnRzLmdldChldmVudCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzQWN0aW9uID0gYXJyXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhcnIuZmluZEluZGV4KChpKSA9PiBpLmFjdGlvbiA9PSBhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgOiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNBY3Rpb24gPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5zZXQoZXZlbnQsIFtcclxuICAgICAgICAgICAgICAgICAgICAuLi4odGhpcy5fZXZlbnRzLmdldChldmVudCkgfHwgW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaGFzKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudHMuaGFzKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZW1pdChldmVudCwgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSB0aGlzLl9ldmVudHMuZ2V0KGV2ZW50KTtcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGkuZm4oZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvZmYoZXZlbnQsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSB0aGlzLl9ldmVudHMuZ2V0KGV2ZW50KTtcclxuICAgICAgICAgICAgbGV0IG5ld2RhdGEgPSBhcnIuZmlsdGVyKChpKSA9PiBpLmFjdGlvbiAhPT0gYWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnNldChldmVudCwgWy4uLm5ld2RhdGFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGFzcyBaQXVkaW8gZXh0ZW5kcyBFdmVudEJ1cyB7XHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckluZGV4ID0gMDsgLy8g57uE5Lu25riy5p+T55qE57Si5byV5YC8XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9saXN0ID0gW107IC8v6Z+z6aKR5YiX6KGoXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIC8vemF1ZGlv57uE5Lu2LeW9k+WJjea4suafk+eahOmfs+mikeaVsOaNrlxyXG4gICAgICAgICAgICAgICAgY3VycmVudDogMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb25fdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzaW5nZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb3ZlckltZ1VybDogXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5aW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIC8vJHphdWRpb+WvueixoS3lvZPliY3mkq3mlL7nmoTpn7PpopHmlbDmja5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uX3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogMCxcclxuICAgICAgICAgICAgICAgIHNyYzogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc2luZ2VyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY292ZXJJbWdVcmw6IFwiXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTsgLy8kemF1ZGlv5a+56LGh5b2T5YmN5pKt5pS+6Z+z6aKR55qE5pqC5YGc54q25oCBXHJcbiAgICAgICAgICAgIHRoaXMudVBhdXNlID0gZmFsc2U7IC8vJHphdWRpb+WvueixoeW9k+WJjeaSreaUvumfs+mikeeahOaEj+WkluS4reaWreeahOeKtuaAgVxyXG4gICAgICAgICAgICB0aGlzLmF1dG9QbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvdmVyID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250aW51ZVBsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgeyBkZWZhdWx0Q292ZXIsIGF1dG9QbGF5LCBjb250aW51ZVBsYXkgfSA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvQ3R4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb3ZlciA9IGRlZmF1bHRDb3ZlcjtcclxuICAgICAgICAgICAgdGhpcy5hdXRvUGxheSA9IGF1dG9QbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRpbnVlUGxheSA9IGNvbnRpbnVlUGxheTtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0N0eCA9IHVuaS5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DdHggPSBhdWRpb0N0eDtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5vbkNhbnBsYXkodGhpcy5vbkNhbnBsYXlIYW5kbGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DdHgub25QbGF5KHRoaXMub25QbGF5SGFuZGxlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4Lm9uUGF1c2UodGhpcy5vblBhdXNlSGFuZGxlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4Lm9uU3RvcCh0aGlzLm9uU3RvcEhhbmRsZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5vbkVuZGVkKHRoaXMub25FbmRlZEhhbmRsZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5vblRpbWVVcGRhdGUodGhpcy5vblRpbWVVcGRhdGVIYW5kbGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DdHgub25FcnJvcih0aGlzLm9uRXJyb3JIYW5kbGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZXJhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBDaGVja1JlcGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkNhbnBsYXlIYW5kbGUoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJjYW5QbGF5XCIsIHRoaXMucGxheWluZm8pO1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNFbWl0U3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25QbGF5SGFuZGxlKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHNyYzogcmVuZGVyU3JjLCB0aXRsZTogcmVuZGVyVGl0bGUsIHNpbmdlcjogcmVuZGVyU2luZ2VyLCBjb3ZlckltZ1VybDogcmVuZGVyQ292ZXJJbWdVcmwsIH0gPSB0aGlzLnJlbmRlcmluZm87XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGxheWluZm9cIiwge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHV0aWxfMS5mb3JtYXRTZWNvbmRzU2Vjb25kcyh0aGlzLmF1ZGlvQ3R4LmR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uX3ZhbHVlOiB0aGlzLmF1ZGlvQ3R4LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0VW5ub3JtYWxQYXVzZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uUGF1c2VIYW5kbGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGF1c2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJwYXVzZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zeW5jRW1pdFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uU3RvcEhhbmRsZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgc3VwZXIuZW1pdCgnc3RvcCcpO1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNFbWl0U3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25FbmRlZEhhbmRsZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5zdGFydFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBsYXlpbmZvXCIsIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHV0aWxfMS5mb3JtYXRTZWNvbmRzU2Vjb25kcyhcIjBcIiksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiBcIjBcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJlbmRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3luY0VtaXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAvL+e7reaSrVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250aW51ZVBsYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlcGxheSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvblRpbWVVcGRhdGVIYW5kbGUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcklzUGxheSkge1xyXG4gICAgICAgICAgICAgICAgLy/op6PlhrPmkq3mlL7ov5vluqblpKfkuo7mgLvov5vluqbpl67pophcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMuYXVkaW9DdHguY3VycmVudFRpbWUgPiB0aGlzLmF1ZGlvQ3R4LmR1cmF0aW9uID8gdGhpcy5hdWRpb0N0eC5kdXJhdGlvbiA6IHRoaXMuYXVkaW9DdHguY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBsYXlpbmZvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiB1dGlsXzEuZm9ybWF0U2Vjb25kc1NlY29uZHMoY3VycmVudFRpbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IGN1cnJlbnRUaW1lXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlci5lbWl0KFwicGxheWluZ1wiLCB0aGlzLnBsYXlpbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5zeW5jRW1pdFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uRXJyb3JIYW5kbGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGF1c2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UmVuZGVyXCIsIHtcclxuICAgICAgICAgICAgICAgIHNyYzogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc2luZ2VyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY292ZXJJbWdVcmw6IFwiXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBsYXlpbmZvXCIsIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbl92YWx1ZTogMCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBcIlwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3VwZXIuZW1pdChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNFbWl0U3RhdGUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGludWVQbGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZXBsYXkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ljbjovb3nm5HlkKzlm57osIPkuovku7ZcclxuICAgICAgICBvZmYoZXZlbnQsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdXBlci5vZmYoZXZlbnQsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbW1pdChhY3Rpb24sIGRhdGEpIHtcclxuICAgICAgICAgICAgdHlwZW9mIHRoaXNbYWN0aW9uXSA9PT0gXCJmdW5jdGlvblwiICYmIHRoaXNbYWN0aW9uXShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lkIzmraXmuLLmn5PlvZPliY3nirbmgIEgKOeUqOS6juS4jeWQjOmhtemdonphdWRpb+e7hOS7tuWQjOatpeaSreaUvueKtuaAgSlcclxuICAgICAgICBzeW5jUmVuZGVyKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFJlbmRlcih0aGlzLnBsYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5rOo5YaM5LiA5Liq5ZCM5q2l6I635Y+W5bGe5oCn55qE5pa55rOVXHJcbiAgICAgICAgc3luY1N0YXRlT24oYWN0aW9uLCBjYikge1xyXG4gICAgICAgICAgICB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlci5vbihcInN5bmNTdGF0ZU9uXCIsIGFjdGlvbiwgY2IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WNuOi9veWQjOatpeiOt+WPluWxnuaAp+eahOaWueazlVxyXG4gICAgICAgIHN5bmNTdGF0ZU9mZihhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3VwZXIub2ZmKFwic3luY1N0YXRlT25cIiwgYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orqLpmIXlkIzmraXojrflj5blsZ7mgKfkuovku7ZcclxuICAgICAgICBzeW5jRW1pdFN0YXRlKCkge1xyXG4gICAgICAgICAgICBzdXBlci5lbWl0KFwic3luY1N0YXRlT25cIiwge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVySW5kZXg6IHRoaXMucmVuZGVySW5kZXgsXHJcbiAgICAgICAgICAgICAgICBhdWRpb2xpc3Q6IHRoaXMuYXVkaW9saXN0LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyaW5mbzogdGhpcy5yZW5kZXJpbmZvLFxyXG4gICAgICAgICAgICAgICAgcGxheWluZm86IHRoaXMucGxheWluZm8sXHJcbiAgICAgICAgICAgICAgICBwYXVzZWQ6IHRoaXMucGF1c2VkLFxyXG4gICAgICAgICAgICAgICAgcGxheUluZGV4OiB0aGlzLnBsYXlJbmRleCxcclxuICAgICAgICAgICAgICAgIHJlbmRlcklzUGxheTogdGhpcy5yZW5kZXJJc1BsYXksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aMh+WumuS9jee9rlxyXG4gICAgICAgIHNlZWsodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKHZhbHVlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwic2Vla1wiLCB0aGlzLnBsYXlpbmZvLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lv6vov5ss6YCAXHJcbiAgICAgICAgc3RlcFBsYXkodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVySXNQbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5wbGF5aW5mby5jdXJyZW50X3ZhbHVlICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZWsocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIh+atjFxyXG4gICAgICAgIGNoYW5nZXBsYXkoY291bnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVySXNQbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm93aW5kZXggPSB0aGlzLnJlbmRlckluZGV4O1xyXG4gICAgICAgICAgICAgICAgbm93aW5kZXggKz0gY291bnQ7XHJcbiAgICAgICAgICAgICAgICBub3dpbmRleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgbm93aW5kZXggPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5hdWRpb2xpc3QubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5vd2luZGV4ID4gdGhpcy5hdWRpb2xpc3QubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5vd2luZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0ZShub3dpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBhdXNlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRlKHRoaXMucmVuZGVySW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omL5Yqo5pKt5pS+5oiW5pqC5YGcLCDlubbmuLLmn5Plr7nlupTnmoTmlbDmja5cclxuICAgICAgICBvcGVyYXRlKGtleSkge1xyXG4gICAgICAgICAgICBrZXkgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmNvbW1pdChcInNldFJlbmRlclwiLCBrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aaguWBnOaSreaUvlxyXG4gICAgICAgIHN0b3AoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DdHgucGF1c2UoKTtcclxuICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRVbm5vcm1hbFBhdXNlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBzdXBlci5lbWl0KFwic3RvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mkq3mlL4s5pqC5YGc5LqL5Lu25Yik5patLFxyXG4gICAgICAgIC8v5pKt5pS+5pWw5o2u5LiO5riy5p+T5pWw5o2u55u45ZCM5pe2OiDmkq3mlL4tPuaaguWBnCwg5pqC5YGcLT7mkq3mlL5cclxuICAgICAgICAvL+aSreaUvuaVsOaNruS4jua4suafk+aVsOaNruS4jeebuOWQjOaXtjog5pKt5pS+5riy5p+T6Z+z6aKRXHJcbiAgICAgICAgb3BlcmF0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGR1cmF0aW9uLCBjdXJyZW50LCBkdXJhdGlvbl92YWx1ZSwgY3VycmVudF92YWx1ZSwgc3JjLCB9ID0gdGhpcy5wbGF5aW5mbztcclxuICAgICAgICAgICAgY29uc3QgeyBzcmM6IHJlbmRlclNyYywgdGl0bGU6IHJlbmRlclRpdGxlLCBzaW5nZXI6IHJlbmRlclNpbmdlciwgY292ZXJJbWdVcmw6IHJlbmRlckNvdmVySW1nVXJsLCB9ID0gdGhpcy5yZW5kZXJpbmZvO1xyXG4gICAgICAgICAgICBsZXQgcmVuZGVySXNQbGF5ID0gdGhpcy5yZW5kZXJJc1BsYXk7XHJcbiAgICAgICAgICAgIGxldCBwYXVzZWQgPSB0aGlzLnBhdXNlZDtcclxuICAgICAgICAgICAgaWYgKCFyZW5kZXJJc1BsYXkpIHtcclxuICAgICAgICAgICAgICAgIC8v5riy5p+T5LiO5pKt5pS+5Zyw5Z2AIOS4jeWQjFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5zcmMgPSByZW5kZXJTcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnRpdGxlID0gcmVuZGVyVGl0bGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnNpbmdlciA9IHJlbmRlclNpbmdlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9DdHguY292ZXJJbWdVcmwgPSByZW5kZXJDb3ZlckltZ1VybCB8fCB0aGlzLmRlZmF1bHRDb3ZlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9DdHguc3RhcnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9DdHgucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBsYXlpbmZvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlbmRlclNyYyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVuZGVyVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2luZ2VyOiByZW5kZXJTaW5nZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJJbWdVcmw6IHJlbmRlckNvdmVySW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/muLLmn5PkuI7mkq3mlL7lnLDlnYDnm7jlkIxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnN0YXJ0VGltZSA9IGN1cnJlbnRfdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKGN1cnJlbnRfdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGF1c2VcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGxheWluZm9cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlbmRlclNyYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlbmRlclRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5nZXI6IHJlbmRlclNpbmdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJJbWdVcmw6IHJlbmRlckNvdmVySW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGF1c2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRVbm5vcm1hbFBhdXNlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6KaG55uW6Z+z6aKRXHJcbiAgICAgICAgc2V0QXVkaW8oZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvbGlzdCA9IFsuLi5kYXRhXTtcclxuICAgICAgICAgICAgc3VwZXIuZW1pdChcInNldEF1ZGlvXCIsIHRoaXMuYXVkaW9saXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zeW5jRW1pdFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5re75Yqg6Z+z6aKRXHJcbiAgICAgICAgdXBkYXRlQXVkaW8oZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvbGlzdC5wdXNoKC4uLmRhdGEpO1xyXG4gICAgICAgICAgICBzdXBlci5lbWl0KFwidXBkYXRlQXVkaW9cIiwgdGhpcy5hdWRpb2xpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNFbWl0U3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7lvZPliY3mkq3mlL7kv6Hmga9cclxuICAgICAgICBzZXRQbGF5aW5mbyhkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZm8uY3VycmVudCA9IGRhdGEuY3VycmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5mby5kdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEuZHVyYXRpb25fdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZm8uZHVyYXRpb25fdmFsdWUgPSBkYXRhLmR1cmF0aW9uX3ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmN1cnJlbnRfdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZm8uY3VycmVudF92YWx1ZSA9IGRhdGEuY3VycmVudF92YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5zcmMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZm8uc3JjID0gZGF0YS5zcmM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZm8udGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnNpbmdlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5mby5zaW5nZXIgPSBkYXRhLnNpbmdlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jb3ZlckltZ1VybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5mby5jb3ZlckltZ1VybCA9IGRhdGEuY292ZXJJbWdVcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7mmoLlgZznirbmgIFcclxuICAgICAgICBzZXRQYXVzZShkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7pgJror53ml7bmmoLlgZznirbmgIFcclxuICAgICAgICBzZXRVbm5vcm1hbFBhdXNlKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy51UGF1c2UgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuvue9rua4suafkyBAcGFyYW0g57Si5byV5oiW5riy5p+T5L+h5oGvXHJcbiAgICAgICAgc2V0UmVuZGVyKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9saXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySW5kZXggPSB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KGRhdGEpIDogZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyaW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHRoaXMuYXVkaW9saXN0W2RhdGFdLnNyYyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5hdWRpb2xpc3RbZGF0YV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2luZ2VyOiB0aGlzLmF1ZGlvbGlzdFtkYXRhXS5zaW5nZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJJbWdVcmw6IHRoaXMuYXVkaW9saXN0W2RhdGFdLmNvdmVySW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IFwiMDA6MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXCIwMDowMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb25fdmFsdWU6IDEwMCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmluZm8gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlckluZGV4ID0gdGhpcy5hdWRpb2xpc3QuZmluZEluZGV4KChpKSA9PiBpLnNyYyA9PSBkYXRhLnNyYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVuZGVySW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySW5kZXggPSByZW5kZXJJbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGdldCBwbGF5SW5kZXgoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuYXVkaW9saXN0LmZpbmRJbmRleCgoaSkgPT4gaS5zcmMgPT0gdGhpcy5wbGF5aW5mby5zcmMpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPD0gMCA/IDAgOiBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/muLLmn5PkuI7mkq3mlL7mmK/lkKbkuIDoh7RcclxuICAgICAgICBnZXQgcmVuZGVySXNQbGF5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJpbmZvLnNyYyA9PSB0aGlzLnBsYXlpbmZvLnNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9hcHDnq6/liKTmlq3nlLXor53mnaXnlLXlkI4sIOmfs+mikeaEj+WkluS4reaWreS5i+WQjueahOe7p+e7reaSreaUvlxyXG4gICAgICAgIGFwcENoZWNrUmVwbGF5KCkge1xyXG4gICAgICAgICAgICBsZXQgX3QgPSB0aGlzO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiYW5kcm9pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBDb250ZXh0ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5jb250ZW50LkNvbnRleHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbGVwaG9ueU1hbmFnZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnRlbGVwaG9ueS5UZWxlcGhvbnlNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZWxlcGhvbnlNYW5hZ2VyID0gcGx1cy5hbmRyb2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ydW50aW1lTWFpbkFjdGl2aXR5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN5c3RlbVNlcnZpY2UoQ29udGV4dC5URUxFUEhPTllfU0VSVklDRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gcGx1cy5hbmRyb2lkLmltcGxlbWVudHMoXCJpby5kY2xvdWQuYW5kcm9pZC5jb250ZW50LkJyb2FkY2FzdFJlY2VpdmVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZWNlaXZlOiBmdW5jdGlvbiAoaW50ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WunueOsG9uUmVjZWl2ZXLlm57osIPlh73mlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhpbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbGVwaG9ueU1hbmFnZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnRlbGVwaG9ueS5UZWxlcGhvbnlNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbGVwaG9ueU1hbmFnZXIgPSBwbHVzLmFuZHJvaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucnVudGltZU1haW5BY3Rpdml0eSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN5c3RlbVNlcnZpY2UoQ29udGV4dC5URUxFUEhPTllfU0VSVklDRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGhvbmV0eXBlID0gdGVsZXBob255TWFuYWdlci5nZXRDYWxsU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaG9uZU51bWJlciA9IGludGVudC5nZXRTdHJpbmdFeHRyYSh0ZWxlcGhvbnlNYW5hZ2VyLkVYVFJBX0lOQ09NSU5HX05VTUJFUik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmV0eXBlID09IDAgJiYgIV90LnVQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90LmF1ZGlvQ3R4LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgSW50ZW50RmlsdGVyID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5jb250ZW50LkludGVudEZpbHRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gbmV3IEludGVudEZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5hZGRBY3Rpb24odGVsZXBob255TWFuYWdlci5BQ1RJT05fUEhPTkVfU1RBVEVfQ0hBTkdFRCk7IC8v55uR5ZCs5byA5YWzXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5yZWdpc3RlclJlY2VpdmVyKHJlY2VpdmVyLCBmaWx0ZXIpOyAvL+azqOWGjOebkeWQrFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIENUQ2FsbCA9IHBsdXMuaW9zLmltcG9ydENsYXNzKFwiQ1RDYWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBDVENhbGxDZW50ZXIgPSBwbHVzLmlvcy5pbXBvcnRDbGFzcyhcIkNUQ2FsbENlbnRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2VudGVyID0gbmV3IENUQ2FsbENlbnRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlci5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyLnNldENhbGxFdmVudHIoZnVuY3Rpb24gKGN0Q2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsc3RhdHVzID0gIWNhbGxzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FsbHN0YXR1cyAmJiAhX3QudVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdC5hdWRpb0N0eC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdC5hdWRpb0N0eC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFpBdWRpby52ZXJzaW9uID0gXCIyLjEuMlwiO1xyXG4gICAgZXhwb3J0cy5aQXVkaW8gPSBaQXVkaW87XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!***********************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/util.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.formatSeconds = void 0;\nfunction formatSeconds(seconds) {\n  var result = typeof seconds === \"string\" ? parseFloat(seconds) : seconds;\n  if (isNaN(result))\n  return '';\n  var h = Math.floor(result / 3600) < 10 ?\n  \"0\" + Math.floor(result / 3600) :\n  Math.floor(result / 3600);\n  var m = Math.floor(result / 60 % 60) < 10 ?\n  \"0\" + Math.floor(result / 60 % 60) :\n  Math.floor(result / 60 % 60) + h * 60;\n  var s = Math.floor(result % 60) < 10 ?\n  \"0\" + Math.floor(result % 60) :\n  Math.floor(result % 60);\n  return m + \":\" + s;\n}\nexports.formatSeconds = formatSeconds;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy96LWF1ZGlvL3V0aWwuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJmb3JtYXRTZWNvbmRzIiwic2Vjb25kcyIsInJlc3VsdCIsInBhcnNlRmxvYXQiLCJpc05hTiIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyJdLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0UsYUFBUixHQUF3QixLQUFLLENBQTdCO0FBQ0EsU0FBU0EsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7QUFDNUIsTUFBSUMsTUFBTSxHQUFHLE9BQU9ELE9BQVAsS0FBbUIsUUFBbkIsR0FBOEJFLFVBQVUsQ0FBQ0YsT0FBRCxDQUF4QyxHQUFvREEsT0FBakU7QUFDQSxNQUFJRyxLQUFLLENBQUNGLE1BQUQsQ0FBVDtBQUNJLFNBQU8sRUFBUDtBQUNKLE1BQUlHLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLE1BQU0sR0FBRyxJQUFwQixJQUE0QixFQUE1QjtBQUNGLFFBQU1JLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFNLEdBQUcsSUFBcEIsQ0FESjtBQUVGSSxNQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBTSxHQUFHLElBQXBCLENBRk47QUFHQSxNQUFJTSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxNQUFNLEdBQUcsRUFBVixHQUFnQixFQUEzQixJQUFpQyxFQUFqQztBQUNGLFFBQU1JLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxNQUFNLEdBQUcsRUFBVixHQUFnQixFQUEzQixDQURKO0FBRUZJLE1BQUksQ0FBQ0MsS0FBTCxDQUFZTCxNQUFNLEdBQUcsRUFBVixHQUFnQixFQUEzQixJQUFpQ0csQ0FBQyxHQUFHLEVBRjNDO0FBR0EsTUFBSUksQ0FBQyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBTSxHQUFHLEVBQXBCLElBQTBCLEVBQTFCO0FBQ0YsUUFBTUksSUFBSSxDQUFDQyxLQUFMLENBQVdMLE1BQU0sR0FBRyxFQUFwQixDQURKO0FBRUZJLE1BQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFNLEdBQUcsRUFBcEIsQ0FGTjtBQUdBLFNBQU9NLENBQUMsR0FBRyxHQUFKLEdBQVVDLENBQWpCO0FBQ0g7QUFDRFgsT0FBTyxDQUFDRSxhQUFSLEdBQXdCQSxhQUF4QiIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLmZvcm1hdFNlY29uZHMgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIGZvcm1hdFNlY29uZHMoc2Vjb25kcykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHR5cGVvZiBzZWNvbmRzID09PSBcInN0cmluZ1wiID8gcGFyc2VGbG9hdChzZWNvbmRzKSA6IHNlY29uZHM7XHJcbiAgICBpZiAoaXNOYU4ocmVzdWx0KSlcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB2YXIgaCA9IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCkgPCAxMFxyXG4gICAgICAgID8gXCIwXCIgKyBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApXHJcbiAgICAgICAgOiBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApO1xyXG4gICAgdmFyIG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCkgJSA2MCkgPCAxMFxyXG4gICAgICAgID8gXCIwXCIgKyBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCkgJSA2MClcclxuICAgICAgICA6IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwKSAlIDYwKSArIGggKiA2MDtcclxuICAgIHZhciBzID0gTWF0aC5mbG9vcihyZXN1bHQgJSA2MCkgPCAxMFxyXG4gICAgICAgID8gXCIwXCIgKyBNYXRoLmZsb29yKHJlc3VsdCAlIDYwKVxyXG4gICAgICAgIDogTWF0aC5mbG9vcihyZXN1bHQgJSA2MCk7XHJcbiAgICByZXR1cm4gbSArIFwiOlwiICsgcztcclxufVxyXG5leHBvcnRzLmZvcm1hdFNlY29uZHMgPSBmb3JtYXRTZWNvbmRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///32\n");

/***/ })
],[[0,"app-config"]]]);