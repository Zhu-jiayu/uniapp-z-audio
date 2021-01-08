(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************!*\
  !*** E:/work/uniapp-zaudio-example/main.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 26));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 27));\n\n\n\n\n\n\nvar _uniappZaudio = _interopRequireDefault(__webpack_require__(/*! @/components/uniapp-zaudio */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.config.productionTip = false;_App.default.mpType = 'app';\n// import ZAudio from 'uniapp-zaudio' // npm引用方式\n\n\nvar zaudio = new _uniappZaudio.default({\n  continuePlay: true, //续播\n  autoPlay: false //自动播放 部分浏览器不支持\n});\n\n_vue.default.prototype.$zaudio = zaudio;\n\n\n//模拟初始数据\nvar data = [{\n  src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3',\n  title: '恭喜发财',\n  singer: '刘德华',\n  coverImgUrl: 'https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg' },\n\n{\n  src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',\n  title: '好运来',\n  singer: '作者1111',\n  coverImgUrl: 'https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg' }];\n\n\n// 设置音频数据\nzaudio.setAudio(data);\n\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiemF1ZGlvIiwiWkF1ZGlvIiwiY29udGludWVQbGF5IiwiYXV0b1BsYXkiLCJwcm90b3R5cGUiLCIkemF1ZGlvIiwiZGF0YSIsInNyYyIsInRpdGxlIiwic2luZ2VyIiwiY292ZXJJbWdVcmwiLCJzZXRBdWRpbyIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQW1CO0FBQ25COzs7Ozs7O0FBT0Esc0csd25DQUpBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0IsQ0FFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFHQTs7O0FBR0EsSUFBSUMsTUFBTSxHQUFHLElBQUlDLHFCQUFKLENBQVc7QUFDdkJDLGNBQVksRUFBRSxJQURTLEVBQ0g7QUFDcEJDLFVBQVEsRUFBRSxLQUZhLENBRU47QUFGTSxDQUFYLENBQWI7O0FBS0FSLGFBQUlTLFNBQUosQ0FBY0MsT0FBZCxHQUF3QkwsTUFBeEI7OztBQUdBO0FBQ0EsSUFBSU0sSUFBSSxHQUFHLENBQUM7QUFDVkMsS0FBRyxFQUFFLCtGQURLO0FBRVZDLE9BQUssRUFBRSxNQUZHO0FBR1ZDLFFBQU0sRUFBRSxLQUhFO0FBSVZDLGFBQVcsRUFBRSxtRkFKSCxFQUFEOztBQU1WO0FBQ0NILEtBQUcsRUFBRSxpR0FETjtBQUVDQyxPQUFLLEVBQUUsS0FGUjtBQUdDQyxRQUFNLEVBQUUsUUFIVDtBQUlDQyxhQUFXLEVBQUUsb0ZBSmQsRUFOVSxDQUFYOzs7QUFhQTtBQUNBVixNQUFNLENBQUNXLFFBQVAsQ0FBZ0JMLElBQWhCOzs7QUFHQSxJQUFNTSxHQUFHLEdBQUcsSUFBSWpCLFlBQUo7QUFDUkcsWUFEUSxFQUFaOztBQUdBYyxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5cclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcblxyXG5pbXBvcnQgWkF1ZGlvIGZyb20gJ0AvY29tcG9uZW50cy91bmlhcHAtemF1ZGlvJ1xyXG4vLyBpbXBvcnQgWkF1ZGlvIGZyb20gJ3VuaWFwcC16YXVkaW8nIC8vIG5wbeW8leeUqOaWueW8j1xyXG5cclxuXHJcbmxldCB6YXVkaW8gPSBuZXcgWkF1ZGlvKHtcclxuXHRjb250aW51ZVBsYXk6IHRydWUsIC8v57ut5pKtXHJcblx0YXV0b1BsYXk6IGZhbHNlLCAvL+iHquWKqOaSreaUviDpg6jliIbmtY/op4jlmajkuI3mlK/mjIFcclxufSlcclxuIFxyXG5WdWUucHJvdG90eXBlLiR6YXVkaW8gPSB6YXVkaW9cclxuXHJcblxyXG4vL+aooeaLn+WIneWni+aVsOaNrlxyXG52YXIgZGF0YSA9IFt7XHJcblx0XHRzcmM6ICdodHRwczovLzk2LmYuMXRpbmcuY29tL2xvY2FsX3RvX2N1YmVfMjAyMDA0MTIxODEzLzk2a21wMy96enp6em1wMy8yMDE2YUphbi8xOFgvMThkX0RlSC8wMS5tcDMnLFxyXG5cdFx0dGl0bGU6ICfmga3llpzlj5HotKInLFxyXG5cdFx0c2luZ2VyOiAn5YiY5b635Y2OJyxcclxuXHRcdGNvdmVySW1nVXJsOiAnaHR0cHM6Ly9pbWcuMXRpbmcuY29tL2ltYWdlcy9zcGVjaWFsLzc1L3MxNTBfZjg0ZWY1MDgyYjA0MjBmNzRjZDI1NDZiOTg2YWIwZmMuanBnJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3JjOiAnaHR0cHM6Ly85Ni5mLjF0aW5nLmNvbS9sb2NhbF90b19jdWJlXzIwMjAwNDEyMTgxMy85NmttcDMvenp6enptcDMvMjAxNWtOb3YvMjVYLzI1bV9YaWFvUS8wMy5tcDMnLFxyXG5cdFx0dGl0bGU6ICflpb3ov5DmnaUnLFxyXG5cdFx0c2luZ2VyOiAn5L2c6ICFMTExMScsXHJcblx0XHRjb3ZlckltZ1VybDogJ2h0dHBzOi8vaW1nLjF0aW5nLmNvbS9pbWFnZXMvc3BlY2lhbC8yMDQvczE1MF83NzI1NGNkNGE0ZGExYTMzYjhmYWY4OWM0Y2JmNmU0MC5qcGcnLFxyXG5cdH1cclxuXTtcclxuLy8g6K6+572u6Z+z6aKR5pWw5o2uXHJcbnphdWRpby5zZXRBdWRpbyhkYXRhKVxyXG5cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************!*\
  !*** E:/work/uniapp-zaudio-example/pages.json ***!
  \************************************************/
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
__definePage('pages/detail/index', function () {return Vue.extend(__webpack_require__(/*! pages/detail/index.vue?mpType=page */ 21).default);});

/***/ }),
/* 2 */
/*!***********************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/pages/index/index.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYmU4NGEzY1wiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************************************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/uniapp-zaudio-example/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!***********************************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/uniapp-zaudio-example/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _zaudio = _interopRequireDefault(__webpack_require__(/*! @/components/uniapp-zaudio/zaudio */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import zaudio from 'uniapp-zaudio/zaudio'\nvar _default = { data: function data() {return { audiolist: this.$zaudio.audiolist, //当前音频列表\n      playIndex: this.$zaudio.playIndex, //当前播放的索引\n      paused: this.$zaudio.paused, //当前是否暂停\n      playinfo: this.$zaudio.playinfo //当前播放的信息\n    };}, components: { zaudio: _zaudio.default }, onLoad: function onLoad() {//注意: 不同的回调方法, 相同的业务函数方法名, 不会相互影响;\n    this.$zaudio.on('stop', 'aaa', function () {__f__(\"log\", '我是强制暂停或关闭小程序音频浮窗触发的', \" at pages/index/index.vue:43\");});this.$zaudio.on('seek', 'aaa', function (time) {__f__(\"log\", '进度拖动A', time, \" at pages/index/index.vue:46\");}); //注意: 相同的回调方法, 且相同的业务函数方法名, 只作用于第一次注册的业务\n    this.$zaudio.on('seek', 'aaa', function (time) {__f__(\"log\", '进度拖动B', time, \" at pages/index/index.vue:50\");});}, onShow: function onShow() {var _this = this; //同步渲染当前的播放状态\n    this.$zaudio.syncRender(); //同步获取当前播放状态\n    this.$zaudio.syncStateOn('page-index-get-state', function (_ref) {var audiolist = _ref.audiolist,playIndex = _ref.playIndex,paused = _ref.paused,playinfo = _ref.playinfo;_this.audiolist = audiolist;_this.playIndex = playIndex;_this.paused = paused;_this.playinfo = playinfo;});\n  },\n  onHide: function onHide() {\n    //卸载不需要的业务和获取播放状态的业务,提高页面性能\n    this.$zaudio.syncStateOff('page-index-get-state');\n    this.$zaudio.off('seek', 'aaa');\n    this.$zaudio.off('stop', 'aaa');\n  },\n  methods: {\n    play: function play(key) {\n      //播放或暂停\n      this.$zaudio.operate(key);\n    },\n\n    go: function go(key) {\n      uni.navigateTo({\n        url: '/pages/detail/index?key=' + key });\n\n    },\n    reset: function reset() {\n      var data = [\n      {\n        src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/21/21a_zj/01.mp3',\n        title: '二人转',\n        singer: '作者333',\n        coverImgUrl: 'https://img.1ting.com/images/special/374/s300_2f06b17427718e01e54be1cfe462f3e0.jpg' }];\n\n\n      this.$zaudio.setAudio(data);\n    },\n    add: function add() {\n      var data = [\n      {\n        src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/jn/12.jlhg/8.zhg/2.mp3',\n        title: '天边',\n        singer: '作者222',\n        coverImgUrl: 'https://img.1ting.com/images/special/377/s300_4631dc844ab6429b6bc6fe4ccdc6ed6f.jpg' }];\n\n\n      this.$zaudio.updateAudio(data);\n    },\n\n    willStop: function willStop() {var _this2 = this;\n      this.$zaudio.on('playing', 'recharge', function (info) {\n        if (info.current_value > 5) {\n          _this2.$zaudio.stop();\n\n          uni.showModal({\n            title: '打钱后才可以听',\n            content: '打钱后才可以听',\n            success: function success(res) {\n              if (res.confirm) {\n                __f__(\"log\", '用户点击确定', \" at pages/index/index.vue:115\");\n              } else if (res.cancel) {\n                __f__(\"log\", '用户点击取消', \" at pages/index/index.vue:117\");\n              }\n            } });\n\n        }\n      });\n    },\n\n    removeStop: function removeStop() {\n      this.$zaudio.off('playing', 'recharge');\n      this.$zaudio.operate();\n    },\n\n    logPlaying: function logPlaying(action) {\n      // 一个回调事件可以注册多次业务, action用于区分相同回调事件的不同业务\n      //例: playing回调时注册 打印事件\n      this.$zaudio.on('playing', action, function (info) {\n        __f__(\"log\", '播放中----' + action, info, \" at pages/index/index.vue:134\");\n      });\n    },\n    offPlaying: function offPlaying(action) {\n      //注意解除事件action必须与注册事件的action相同\n      this.$zaudio.off('playing', action);\n    },\n    stepPlay: function stepPlay(val) {\n      this.$zaudio.stepPlay(val);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJhdWRpb2xpc3QiLCIkemF1ZGlvIiwicGxheUluZGV4IiwicGF1c2VkIiwicGxheWluZm8iLCJjb21wb25lbnRzIiwiemF1ZGlvIiwib25Mb2FkIiwib24iLCJ0aW1lIiwib25TaG93Iiwic3luY1JlbmRlciIsInN5bmNTdGF0ZU9uIiwib25IaWRlIiwic3luY1N0YXRlT2ZmIiwib2ZmIiwibWV0aG9kcyIsInBsYXkiLCJrZXkiLCJvcGVyYXRlIiwiZ28iLCJ1bmkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVzZXQiLCJzcmMiLCJ0aXRsZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwic2V0QXVkaW8iLCJhZGQiLCJ1cGRhdGVBdWRpbyIsIndpbGxTdG9wIiwiaW5mbyIsImN1cnJlbnRfdmFsdWUiLCJzdG9wIiwic2hvd01vZGFsIiwiY29udGVudCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiY2FuY2VsIiwicmVtb3ZlU3RvcCIsImxvZ1BsYXlpbmciLCJhY3Rpb24iLCJvZmZQbGF5aW5nIiwic3RlcFBsYXkiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxzRyw4RkEzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO2VBQ2UsRUFDZEEsSUFEYyxrQkFDUCxDQUNOLE9BQU8sRUFDTkMsU0FBUyxFQUFFLEtBQUtDLE9BQUwsQ0FBYUQsU0FEbEIsRUFDNkI7QUFDbkNFLGVBQVMsRUFBRSxLQUFLRCxPQUFMLENBQWFDLFNBRmxCLEVBRTZCO0FBQ25DQyxZQUFNLEVBQUUsS0FBS0YsT0FBTCxDQUFhRSxNQUhmLEVBR3VCO0FBQzdC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QWQsYUFBRyxDQUFDZSxTQUFKLENBQWM7QUFDYlYsaUJBQUssRUFBRSxTQURNO0FBRWJXLG1CQUFPLEVBQUUsU0FGSTtBQUdiQyxtQkFBTyxFQUFFLGlCQUFTQyxHQUFULEVBQWM7QUFDdEIsa0JBQUlBLEdBQUcsQ0FBQ0MsT0FBUixFQUFpQjtBQUNoQiw2QkFBWSxRQUFaO0FBQ0EsZUFGRCxNQUVPLElBQUlELEdBQUcsQ0FBQ0UsTUFBUixFQUFnQjtBQUN0Qiw2QkFBWSxRQUFaO0FBQ0E7QUFDRCxhQVRZLEVBQWQ7O0FBV0E7QUFDRCxPQWhCRDtBQWlCQSxLQXBETzs7QUFzRFJDLGNBdERRLHdCQXNESztBQUNaLFdBQUt6QyxPQUFMLENBQWFjLEdBQWIsQ0FBaUIsU0FBakIsRUFBNEIsVUFBNUI7QUFDQSxXQUFLZCxPQUFMLENBQWFrQixPQUFiO0FBQ0EsS0F6RE87O0FBMkRSd0IsY0EzRFEsc0JBMkRHQyxNQTNESCxFQTJEVztBQUNsQjtBQUNBO0FBQ0EsV0FBSzNDLE9BQUwsQ0FBYU8sRUFBYixDQUFnQixTQUFoQixFQUEyQm9DLE1BQTNCLEVBQW1DLFVBQUFYLElBQUksRUFBSTtBQUMxQyxxQkFBWSxZQUFZVyxNQUF4QixFQUFnQ1gsSUFBaEM7QUFDQSxPQUZEO0FBR0EsS0FqRU87QUFrRVJZLGNBbEVRLHNCQWtFR0QsTUFsRUgsRUFrRVc7QUFDbEI7QUFDQSxXQUFLM0MsT0FBTCxDQUFhYyxHQUFiLENBQWlCLFNBQWpCLEVBQTRCNkIsTUFBNUI7QUFDQSxLQXJFTztBQXNFUkUsWUF0RVEsb0JBc0VDQyxHQXRFRCxFQXNFTTtBQUNiLFdBQUs5QyxPQUFMLENBQWE2QyxRQUFiLENBQXNCQyxHQUF0QjtBQUNBLEtBeEVPLEVBekNLLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5pbXBvcnQgemF1ZGlvIGZyb20gJ0AvY29tcG9uZW50cy91bmlhcHAtemF1ZGlvL3phdWRpbyc7XHJcbi8vIGltcG9ydCB6YXVkaW8gZnJvbSAndW5pYXBwLXphdWRpby96YXVkaW8nXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YXVkaW9saXN0OiB0aGlzLiR6YXVkaW8uYXVkaW9saXN0LCAvL+W9k+WJjemfs+mikeWIl+ihqFxyXG5cdFx0XHRwbGF5SW5kZXg6IHRoaXMuJHphdWRpby5wbGF5SW5kZXgsIC8v5b2T5YmN5pKt5pS+55qE57Si5byVXHJcblx0XHRcdHBhdXNlZDogdGhpcy4kemF1ZGlvLnBhdXNlZCwgLy/lvZPliY3mmK/lkKbmmoLlgZxcclxuXHRcdFx0cGxheWluZm86IHRoaXMuJHphdWRpby5wbGF5aW5mbyAvL+W9k+WJjeaSreaUvueahOS/oeaBr1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6IHsgemF1ZGlvOiB6YXVkaW8gfSxcclxuXHRvbkxvYWQoKXtcclxuXHRcdC8v5rOo5oSPOiDkuI3lkIznmoTlm57osIPmlrnms5UsIOebuOWQjOeahOS4muWKoeWHveaVsOaWueazleWQjSwg5LiN5Lya55u45LqS5b2x5ZONO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9uKCdzdG9wJywgJ2FhYScsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfmiJHmmK/lvLrliLbmmoLlgZzmiJblhbPpl63lsI/nqIvluo/pn7PpopHmta7nqpfop6blj5HnmoQnKVxyXG5cdFx0fSlcclxuXHRcdHRoaXMuJHphdWRpby5vbignc2VlaycsICdhYWEnLCBmdW5jdGlvbih0aW1lKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+i/m+W6puaLluWKqEEnLCB0aW1lKVxyXG5cdFx0fSlcclxuXHRcdC8v5rOo5oSPOiDnm7jlkIznmoTlm57osIPmlrnms5UsIOS4lOebuOWQjOeahOS4muWKoeWHveaVsOaWueazleWQjSwg5Y+q5L2c55So5LqO56ys5LiA5qyh5rOo5YaM55qE5Lia5YqhXHJcblx0XHR0aGlzLiR6YXVkaW8ub24oJ3NlZWsnLCAnYWFhJywgZnVuY3Rpb24odGltZSl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfov5vluqbmi5bliqhCJywgdGltZSlcclxuXHRcdH0pXHJcblx0fSxcclxuXHRvblNob3coKSB7XHJcblx0XHQvL+WQjOatpea4suafk+W9k+WJjeeahOaSreaUvueKtuaAgVxyXG5cdFx0dGhpcy4kemF1ZGlvLnN5bmNSZW5kZXIoKVxyXG5cclxuXHRcdC8v5ZCM5q2l6I635Y+W5b2T5YmN5pKt5pS+54q25oCBXHJcblx0XHR0aGlzLiR6YXVkaW8uc3luY1N0YXRlT24oJ3BhZ2UtaW5kZXgtZ2V0LXN0YXRlJywgKHsgYXVkaW9saXN0LCBwbGF5SW5kZXgsIHBhdXNlZCwgcGxheWluZm8gfSkgPT4ge1xyXG5cdFx0XHR0aGlzLmF1ZGlvbGlzdCA9IGF1ZGlvbGlzdDtcclxuXHRcdFx0dGhpcy5wbGF5SW5kZXggPSBwbGF5SW5kZXg7XHJcblx0XHRcdHRoaXMucGF1c2VkID0gcGF1c2VkO1xyXG5cdFx0XHR0aGlzLnBsYXlpbmZvID0gcGxheWluZm87XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uSGlkZSgpIHtcclxuXHRcdC8v5Y246L295LiN6ZyA6KaB55qE5Lia5Yqh5ZKM6I635Y+W5pKt5pS+54q25oCB55qE5Lia5YqhLOaPkOmrmOmhtemdouaAp+iDvVxyXG5cdFx0dGhpcy4kemF1ZGlvLnN5bmNTdGF0ZU9mZigncGFnZS1pbmRleC1nZXQtc3RhdGUnKTtcclxuXHRcdHRoaXMuJHphdWRpby5vZmYoJ3NlZWsnLCAnYWFhJyk7XHJcblx0XHR0aGlzLiR6YXVkaW8ub2ZmKCdzdG9wJywgJ2FhYScpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0cGxheShrZXkpIHtcclxuXHRcdFx0Ly/mkq3mlL7miJbmmoLlgZxcclxuXHRcdFx0dGhpcy4kemF1ZGlvLm9wZXJhdGUoa2V5KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z28oa2V5KSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvZGV0YWlsL2luZGV4P2tleT0nICsga2V5XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHJlc2V0KCkge1xyXG5cdFx0XHRsZXQgZGF0YSA9IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICdodHRwczovLzk2LmYuMXRpbmcuY29tL2xvY2FsX3RvX2N1YmVfMjAyMDA0MTIxODEzLzk2a21wMy8yMDIwLzA4LzIxLzIxYV96ai8wMS5tcDMnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICfkuozkurrovawnLFxyXG5cdFx0XHRcdFx0c2luZ2VyOiAn5L2c6ICFMzMzJyxcclxuXHRcdFx0XHRcdGNvdmVySW1nVXJsOiAnaHR0cHM6Ly9pbWcuMXRpbmcuY29tL2ltYWdlcy9zcGVjaWFsLzM3NC9zMzAwXzJmMDZiMTc0Mjc3MThlMDFlNTRiZTFjZmU0NjJmM2UwLmpwZydcclxuXHRcdFx0XHR9XHJcblx0XHRcdF07XHJcblx0XHRcdHRoaXMuJHphdWRpby5zZXRBdWRpbyhkYXRhKTtcclxuXHRcdH0sXHJcblx0XHRhZGQoKSB7XHJcblx0XHRcdGxldCBkYXRhID0gW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogJ2h0dHBzOi8vOTYuZi4xdGluZy5jb20vbG9jYWxfdG9fY3ViZV8yMDIwMDQxMjE4MTMvOTZrbXAzL2puLzEyLmpsaGcvOC56aGcvMi5tcDMnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICflpKnovrknLFxyXG5cdFx0XHRcdFx0c2luZ2VyOiAn5L2c6ICFMjIyJyxcclxuXHRcdFx0XHRcdGNvdmVySW1nVXJsOiAnaHR0cHM6Ly9pbWcuMXRpbmcuY29tL2ltYWdlcy9zcGVjaWFsLzM3Ny9zMzAwXzQ2MzFkYzg0NGFiNjQyOWI2YmM2ZmU0Y2NkYzZlZDZmLmpwZydcclxuXHRcdFx0XHR9XHJcblx0XHRcdF07XHJcblx0XHRcdHRoaXMuJHphdWRpby51cGRhdGVBdWRpbyhkYXRhKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0d2lsbFN0b3AoKSB7XHJcblx0XHRcdHRoaXMuJHphdWRpby5vbigncGxheWluZycsICdyZWNoYXJnZScsIGluZm8gPT4ge1xyXG5cdFx0XHRcdGlmIChpbmZvLmN1cnJlbnRfdmFsdWUgPiA1KSB7XHJcblx0XHRcdFx0XHR0aGlzLiR6YXVkaW8uc3RvcCgpO1xyXG5cclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+aJk+mSseWQjuaJjeWPr+S7peWQrCcsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmiZPpkrHlkI7miY3lj6/ku6XlkKwnLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbW92ZVN0b3AoKSB7XHJcblx0XHRcdHRoaXMuJHphdWRpby5vZmYoJ3BsYXlpbmcnLCAncmVjaGFyZ2UnKTtcclxuXHRcdFx0dGhpcy4kemF1ZGlvLm9wZXJhdGUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bG9nUGxheWluZyhhY3Rpb24pIHtcclxuXHRcdFx0Ly8g5LiA5Liq5Zue6LCD5LqL5Lu25Y+v5Lul5rOo5YaM5aSa5qyh5Lia5YqhLCBhY3Rpb27nlKjkuo7ljLrliIbnm7jlkIzlm57osIPkuovku7bnmoTkuI3lkIzkuJrliqFcclxuXHRcdFx0Ly/kvos6IHBsYXlpbmflm57osIPml7bms6jlhowg5omT5Y2w5LqL5Lu2XHJcblx0XHRcdHRoaXMuJHphdWRpby5vbigncGxheWluZycsIGFjdGlvbiwgaW5mbyA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+aSreaUvuS4rS0tLS0nICsgYWN0aW9uLCBpbmZvKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0b2ZmUGxheWluZyhhY3Rpb24pIHtcclxuXHRcdFx0Ly/ms6jmhI/op6PpmaTkuovku7ZhY3Rpb27lv4XpobvkuI7ms6jlhozkuovku7bnmoRhY3Rpb27nm7jlkIxcclxuXHRcdFx0dGhpcy4kemF1ZGlvLm9mZigncGxheWluZycsIGFjdGlvbik7XHJcblx0XHR9LFxyXG5cdFx0c3RlcFBsYXkodmFsKSB7XHJcblx0XHRcdHRoaXMuJHphdWRpby5zdGVwUGxheSh2YWwpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

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
/*!*************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/zaudio.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zaudio.vue?vue&type=template&id=abdab3e4&scoped=true& */ 9);\n/* harmony import */ var _zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zaudio.vue?vue&type=script&lang=js& */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"abdab3e4\",\n  null,\n  false,\n  _zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/uniapp-zaudio/zaudio.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDs7O0FBR3JEO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vemF1ZGlvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYmRhYjNlNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3phdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3phdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhYmRhYjNlNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3VuaWFwcC16YXVkaW8vemF1ZGlvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!********************************************************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/zaudio.vue?vue&type=template&id=abdab3e4&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./zaudio.vue?vue&type=template&id=abdab3e4&scoped=true& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_template_id_abdab3e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/uniapp-zaudio-example/components/uniapp-zaudio/zaudio.vue?vue&type=template&id=abdab3e4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!*********************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/static/playbtn.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/uniapp-zaudio/static/playbtn.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3VuaWFwcC16YXVkaW8vc3RhdGljL3BsYXlidG4ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/static/pausebtn.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/uniapp-zaudio/static/pausebtn.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3VuaWFwcC16YXVkaW8vc3RhdGljL3BhdXNlYnRuLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!******************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/static/prev.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/uniapp-zaudio/static/prev.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3VuaWFwcC16YXVkaW8vc3RhdGljL3ByZXYucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/static/go.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/uniapp-zaudio/static/go.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3VuaWFwcC16YXVkaW8vc3RhdGljL2dvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/static/playbtn2.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/uniapp-zaudio/static/playbtn2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3VuaWFwcC16YXVkaW8vc3RhdGljL3BsYXlidG4yLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***********************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/static/pausebtn2.png ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/uniapp-zaudio/static/pausebtn2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3VuaWFwcC16YXVkaW8vc3RhdGljL3BhdXNlYnRuMi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!******************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/static/next.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/uniapp-zaudio/static/next.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3VuaWFwcC16YXVkaW8vc3RhdGljL25leHQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**************************************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/zaudio.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./zaudio.vue?vue&type=script&lang=js& */ 19);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlpQixDQUFnQixva0JBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3phdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3phdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/uniapp-zaudio-example/components/uniapp-zaudio/zaudio.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    theme: {\n      type: String, // 主题 'theme1' or 'theme2'\n      default: 'theme1' },\n\n    themeColor: {\n      type: String,\n      default: '#42b983' } },\n\n\n  data: function data() {\n    return {\n      playinfo: this.$zaudio.playinfo,\n      audiolist: this.$zaudio.audiolist,\n      paused: this.$zaudio.paused,\n      renderIsPlay: this.$zaudio.renderIsPlay,\n      audio: this.$zaudio.renderinfo,\n      action: Symbol('zaudio') };\n\n  },\n  computed: {\n    renderData: function renderData() {var _this = this;\n      return function (name) {\n        if (!_this.renderIsPlay) {\n          if (name == 'paused') {\n            return true;\n          }\n\n          return _this.audio[name];\n        } else {\n          if (name == 'paused') {\n            return _this.paused;\n          }\n\n          return _this.playinfo[name];\n        }\n      };\n    } },\n\n\n  mounted: function mounted() {var _this2 = this;\n    this.$nextTick(function () {\n      //修复小程序autoplay为false时的bug\n      _this2.audio = _this2.$zaudio.renderinfo;\n      _this2.renderIsPlay = _this2.$zaudio.renderIsPlay;\n\n      var action = _this2.action;\n      _this2.$zaudio.syncStateOn(action, function (_ref) {var audiolist = _ref.audiolist,paused = _ref.paused,playinfo = _ref.playinfo,renderIsPlay = _ref.renderIsPlay,renderinfo = _ref.renderinfo;\n        _this2.audiolist = audiolist;\n        _this2.paused = paused;\n        _this2.playinfo = playinfo;\n        _this2.renderIsPlay = renderIsPlay;\n        _this2.audio = renderinfo;\n      });\n\n    });\n  },\n  methods: {\n    //播放or暂停\n    operate: function operate() {\n      this.$zaudio.operate();\n    },\n    //进度拖到\n    change: function change(event) {\n      if (this.renderIsPlay) {\n        this.$zaudio.seek(event.detail.value);\n      }\n    },\n    //快进\n    stepPlay: function stepPlay(value) {\n      this.$zaudio.stepPlay(value);\n    },\n    //切歌\n    changeplay: function changeplay(count) {\n      this.$zaudio.changeplay(count);\n    } },\n\n  beforeDestroy: function beforeDestroy() {\n    //组件卸载时卸载业务逻辑\n    var action = this.action;\n    this.$zaudio.off('setAudio', action);\n    this.$zaudio.off('updateAudio', action);\n    this.$zaudio.off('canPlay', action);\n    this.$zaudio.off('playing', action);\n    this.$zaudio.off('pause', action);\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmlhcHAtemF1ZGlvL3phdWRpby52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR0E7QUFDQTtBQUNBO0FBQ0Esa0JBREEsRUFDQTtBQUNBLHVCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBTEEsRUFEQTs7O0FBV0EsTUFYQSxrQkFXQTtBQUNBO0FBQ0EscUNBREE7QUFFQSx1Q0FGQTtBQUdBLGlDQUhBO0FBSUEsNkNBSkE7QUFLQSxvQ0FMQTtBQU1BLDhCQU5BOztBQVFBLEdBcEJBO0FBcUJBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BZEE7QUFlQSxLQWpCQSxFQXJCQTs7O0FBeUNBLFNBekNBLHFCQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTs7QUFRQSxLQWRBO0FBZUEsR0F6REE7QUEwREE7QUFDQTtBQUNBLFdBRkEscUJBRUE7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBLFVBTkEsa0JBTUEsS0FOQSxFQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQTtBQVdBO0FBQ0EsWUFaQSxvQkFZQSxLQVpBLEVBWUE7QUFDQTtBQUNBLEtBZEE7QUFlQTtBQUNBLGNBaEJBLHNCQWdCQSxLQWhCQSxFQWdCQTtBQUNBO0FBQ0EsS0FsQkEsRUExREE7O0FBOEVBLGVBOUVBLDJCQThFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F0RkEsRSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImltdC1hdWRpb1wiIDpjbGFzcz1cIltgJHt0aGVtZX1gXVwiIHYtaWY9XCJhdWRpb2xpc3QubGVuZ3RoID4gMFwiPlxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJ0aGVtZSA9PSAndGhlbWUzJ1wiPlxyXG5cdFx0XHQ8c2xpZGVyXHJcblx0XHRcdFx0Y2xhc3M9XCJhdWRpby1zbGlkZXJcIlxyXG5cdFx0XHRcdDphY3RpdmVDb2xvcj1cInRoZW1lQ29sb3JcIlxyXG5cdFx0XHRcdGJsb2NrLXNpemU9XCIwXCJcclxuXHRcdFx0XHQ6dmFsdWU9XCJyZW5kZXJEYXRhKCdjdXJyZW50X3ZhbHVlJylcIlxyXG5cdFx0XHRcdDptYXg9XCJyZW5kZXJEYXRhKCdkdXJhdGlvbl92YWx1ZScpXCJcclxuXHRcdFx0XHRAY2hhbmdlPVwiY2hhbmdlXCJcclxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCIhcmVuZGVySXNQbGF5XCJcclxuXHRcdFx0Pjwvc2xpZGVyPlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImF1ZGlvLWNvbnRyb2wtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZW5kZXJEYXRhKCdjb3ZlckltZ1VybCcpXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBjbGFzcz1cImNvdmVyXCIgOmNsYXNzPVwieyBvbjogIXJlbmRlckRhdGEoJ3BhdXNlZCcpIH1cIj48L2ltYWdlPlxyXG5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGxheWJ0bi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWlmPVwicmVuZGVyRGF0YSgncGF1c2VkJylcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wYXVzZWJ0bi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPnt7IHJlbmRlckRhdGEoJ3RpdGxlJykgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbmdlclwiPnt7IHJlbmRlckRhdGEoJ3NpbmdlcicpIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzbGlkZWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+e3sgcmVuZGVyRGF0YSgnY3VycmVudCcpIH19LyB7eyByZW5kZXJEYXRhKCdkdXJhdGlvbicpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cImNoYW5nZXBsYXkoLTEpXCI+5LiK5LiA6aaWPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJjaGFuZ2VwbGF5KDEpXCI+5LiL5LiA6aaWPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cInRoZW1lID09ICd0aGVtZTInXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1jb250cm9sLXdyYXBwZXJcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cmVuZGVyRGF0YSgnY292ZXJJbWdVcmwnKX0pYH1cIj5cclxuXHRcdFx0XHRcdDx0ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wbGF5YnRuLnBuZycpXCIgYWx0PVwiXCIgQGNsaWNrPVwib3BlcmF0ZVwiIGNsYXNzPVwicGxheVwiIHYtaWY9XCJyZW5kZXJEYXRhKCdwYXVzZWQnKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGF1c2VidG4ucG5nJylcIiBhbHQ9XCJcIiBAY2xpY2s9XCJvcGVyYXRlXCIgY2xhc3M9XCJwbGF5XCIgdi1lbHNlPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0Pnt7IHJlbmRlckRhdGEoJ3RpdGxlJykgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXVkaW8tbnVtYmVyXCI+e3sgcmVuZGVyRGF0YSgnY3VycmVudCcpIH19L3t7IHJlbmRlckRhdGEoJ2R1cmF0aW9uJykgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbmdlclwiPnt7IHJlbmRlckRhdGEoJ3NpbmdlcicpIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cInRoZW1lID09ICd0aGVtZTEnXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1jb250cm9sLXdyYXBwZXJcIj48aW1hZ2UgOnNyYz1cInJlbmRlckRhdGEoJ2NvdmVySW1nVXJsJylcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIGNsYXNzPVwiY292ZXJcIiA6Y2xhc3M9XCJ7IG9uOiAhcmVuZGVyRGF0YSgncGF1c2VkJykgfVwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj57eyByZW5kZXJEYXRhKCd0aXRsZScpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaW5nZXJcIj57eyByZW5kZXJEYXRhKCdzaW5nZXInKSB9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1udW1iZXJcIj57eyByZW5kZXJEYXRhKCdjdXJyZW50JykgfX08L3ZpZXc+XHJcblx0XHRcdFx0PHNsaWRlclxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJhdWRpby1zbGlkZXJcIlxyXG5cdFx0XHRcdFx0OmFjdGl2ZUNvbG9yPVwidGhlbWVDb2xvclwiXHJcblx0XHRcdFx0XHRibG9jay1zaXplPVwiMTZcIlxyXG5cdFx0XHRcdFx0OnZhbHVlPVwicmVuZGVyRGF0YSgnY3VycmVudF92YWx1ZScpXCJcclxuXHRcdFx0XHRcdDptYXg9XCJyZW5kZXJEYXRhKCdkdXJhdGlvbl92YWx1ZScpXCJcclxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGFuZ2VcIlxyXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiIXJlbmRlcklzUGxheVwiXHJcblx0XHRcdFx0Pjwvc2xpZGVyPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXVkaW8tbnVtYmVyXCI+e3sgcmVuZGVyRGF0YSgnZHVyYXRpb24nKSB9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1idXR0b24tYm94XCI+XHJcblx0XHRcdFx0PCEtLSDlnZfpgIAxNXMgLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wcmV2LnBuZycpXCIgY2xhc3M9XCJwcmV2YnRuXCIgQGNsaWNrPVwic3RlcFBsYXkoLTE1KVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLSDkuIrkuIDpppYgLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9nby5wbmcnKVwiIGNsYXNzPVwicHJldnBsYXlcIiBAY2xpY2s9XCJjaGFuZ2VwbGF5KC0xKVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLSDmkq3mlL4gLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wbGF5YnRuMi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWlmPVwicmVuZGVyRGF0YSgncGF1c2VkJylcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwhLS0g5pqC5YGcIC0tPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGF1c2VidG4yLnBuZycpXCIgYWx0PVwiXCIgQGNsaWNrPVwib3BlcmF0ZVwiIGNsYXNzPVwicGF1c2VcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHQ8IS0tIOS4i+S4gOmmliAtLT5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVpcmUoJy4vc3RhdGljL2dvLnBuZycpXCIgY2xhc3M9XCJuZXh0cGxheVwiIEBjbGljaz1cImNoYW5nZXBsYXkoMSlcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwhLS0g5b+r6L+bMTVzIC0tPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvbmV4dC5wbmcnKVwiIGNsYXNzPVwibmV4dGJ0blwiIEBjbGljaz1cInN0ZXBQbGF5KDE1KVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHByb3BzOiB7XHJcblx0XHR0aGVtZToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsIC8vIOS4u+mimCAndGhlbWUxJyBvciAndGhlbWUyJ1xyXG5cdFx0XHRkZWZhdWx0OiAndGhlbWUxJ1xyXG5cdFx0fSxcclxuXHRcdHRoZW1lQ29sb3I6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnIzQyYjk4MydcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwbGF5aW5mbzogdGhpcy4kemF1ZGlvLnBsYXlpbmZvLFxyXG5cdFx0XHRhdWRpb2xpc3Q6IHRoaXMuJHphdWRpby5hdWRpb2xpc3QsXHJcblx0XHRcdHBhdXNlZDogdGhpcy4kemF1ZGlvLnBhdXNlZCxcclxuXHRcdFx0cmVuZGVySXNQbGF5OiB0aGlzLiR6YXVkaW8ucmVuZGVySXNQbGF5LFxyXG5cdFx0XHRhdWRpbzogdGhpcy4kemF1ZGlvLnJlbmRlcmluZm8sXHJcblx0XHRcdGFjdGlvbjogU3ltYm9sKCd6YXVkaW8nKVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRyZW5kZXJEYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4gbmFtZSA9PiB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnJlbmRlcklzUGxheSkge1xyXG5cdFx0XHRcdFx0aWYgKG5hbWUgPT0gJ3BhdXNlZCcpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmF1ZGlvW25hbWVdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAobmFtZSA9PSAncGF1c2VkJykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXVzZWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBsYXlpbmZvW25hbWVdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHQvL+S/ruWkjeWwj+eoi+W6j2F1dG9wbGF55Li6ZmFsc2Xml7bnmoRidWdcclxuXHRcdFx0dGhpcy5hdWRpbyA9IHRoaXMuJHphdWRpby5yZW5kZXJpbmZvO1xyXG5cdFx0XHR0aGlzLnJlbmRlcklzUGxheSA9IHRoaXMuJHphdWRpby5yZW5kZXJJc1BsYXk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgYWN0aW9uID0gdGhpcy5hY3Rpb247XHJcblx0XHRcdHRoaXMuJHphdWRpby5zeW5jU3RhdGVPbihhY3Rpb24sICh7IGF1ZGlvbGlzdCwgcGF1c2VkLCBwbGF5aW5mbywgcmVuZGVySXNQbGF5LCByZW5kZXJpbmZvIH0pID0+IHtcclxuXHRcdFx0XHR0aGlzLmF1ZGlvbGlzdCA9IGF1ZGlvbGlzdDtcclxuXHRcdFx0XHR0aGlzLnBhdXNlZCA9IHBhdXNlZDtcclxuXHRcdFx0XHR0aGlzLnBsYXlpbmZvID0gcGxheWluZm87XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJJc1BsYXkgPSByZW5kZXJJc1BsYXk7XHJcblx0XHRcdFx0dGhpcy5hdWRpbyA9IHJlbmRlcmluZm9cclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHQvL+aSreaUvm9y5pqC5YGcXHJcblx0XHRvcGVyYXRlKCkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub3BlcmF0ZSgpO1xyXG5cdFx0fSxcclxuXHRcdC8v6L+b5bqm5ouW5YiwXHJcblx0XHRjaGFuZ2UoZXZlbnQpIHtcclxuXHRcdFx0aWYgKHRoaXMucmVuZGVySXNQbGF5KSB7XHJcblx0XHRcdFx0dGhpcy4kemF1ZGlvLnNlZWsoZXZlbnQuZGV0YWlsLnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8v5b+r6L+bXHJcblx0XHRzdGVwUGxheSh2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8uc3RlcFBsYXkodmFsdWUpO1xyXG5cdFx0fSxcclxuXHRcdC8v5YiH5q2MXHJcblx0XHRjaGFuZ2VwbGF5KGNvdW50KSB7XHJcblx0XHRcdHRoaXMuJHphdWRpby5jaGFuZ2VwbGF5KGNvdW50KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGJlZm9yZURlc3Ryb3koKSB7XHJcblx0XHQvL+e7hOS7tuWNuOi9veaXtuWNuOi9veS4muWKoemAu+i+kVxyXG5cdFx0bGV0IGFjdGlvbiA9IHRoaXMuYWN0aW9uO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZignc2V0QXVkaW8nLCBhY3Rpb24pO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZigndXBkYXRlQXVkaW8nLCBhY3Rpb24pO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZignY2FuUGxheScsIGFjdGlvbik7XHJcblx0XHR0aGlzLiR6YXVkaW8ub2ZmKCdwbGF5aW5nJywgYWN0aW9uKTtcclxuXHRcdHRoaXMuJHphdWRpby5vZmYoJ3BhdXNlJywgYWN0aW9uKTtcclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG4vLyAgI2lmZGVmIE1QLVdFSVhJTlxyXG4udGhlbWUzIC5hdWRpby1zbGlkZXIge1xyXG5cdG1hcmdpbi10b3A6IC04cHggIWltcG9ydGFudDtcclxufVxyXG4vLyAjZW5kaWZcclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
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
/* 21 */
/*!************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/pages/detail/index.vue?mpType=page ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d5445b46&scoped=true&mpType=page */ 22);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d5445b46\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/detail/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNTQ0NWI0NiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDU0NDViNDZcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZGV0YWlsL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!******************************************************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/pages/detail/index.vue?vue&type=template&id=d5445b46&scoped=true&mpType=page ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d5445b46&scoped=true&mpType=page */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5445b46_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 23 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/uniapp-zaudio-example/pages/detail/index.vue?vue&type=template&id=d5445b46&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* 24 */
/*!************************************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/pages/detail/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/uniapp-zaudio-example/pages/detail/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\nvar _zaudio = _interopRequireDefault(__webpack_require__(/*! @/components/uniapp-zaudio/zaudio */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n// import zaudio from 'uniapp-zaudio/zaudio'\nvar _default = { data: function data() {return { key: 2, themelist: [{ name: '样式1', val: 'theme1' },\n\n      {\n        name: '样式2', val: 'theme2' },\n\n      {\n        name: '样式3', val: 'theme3' }] };\n\n\n\n  },\n  components: { zaudio: _zaudio.default },\n  onLoad: function onLoad(query) {var\n    key = query.key;\n    //通过索引去渲染需要播放的音频, 方法1:\n    this.$zaudio.setRender(key);\n\n    // 指定列表中具体信息,去渲染需要播放的音频, 方法2:\n    // this.$zaudio.setRender(this.audiolist[key]);\n\n    //playing回调, 注册`event-a`和`event-b`两个打印事件\n    this.$zaudio.on('playing', 'event-a', function (data) {\n      __f__(\"log\", data, 'event-a', \" at pages/detail/index.vue:39\");\n    });\n    this.$zaudio.on('playing', 'event-b', function (data) {\n      __f__(\"log\", data, 'event-b', \" at pages/detail/index.vue:42\");\n    });\n\n\n  },\n  destroyed: function destroyed() {\n    //页面卸载时卸载业务, 提高页面性能\n    this.$zaudio.off('playing', 'event-a');\n    this.$zaudio.off('playing', 'event-b');\n  },\n  methods: {\n    changeTheme: function changeTheme(k) {\n      this.key = k;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBLHNHOzs7Ozs7O0FBQ0E7ZUFDQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLE1BREEsRUFFQSxZQUNBLEVBQ0EsV0FEQSxFQUNBLGFBREEsRUFEQTs7QUFJQTtBQUNBLG1CQURBLEVBQ0EsYUFEQSxFQUpBOztBQU9BO0FBQ0EsbUJBREEsRUFDQSxhQURBLEVBUEEsQ0FGQTs7OztBQWNBLEdBaEJBO0FBaUJBLHlDQWpCQTtBQWtCQSxRQWxCQSxrQkFrQkEsS0FsQkEsRUFrQkE7QUFDQSxPQURBLEdBQ0EsS0FEQSxDQUNBLEdBREE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBOzs7QUFLQSxHQW5DQTtBQW9DQSxXQXBDQSx1QkFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXhDQTtBQXlDQTtBQUNBLGVBREEsdUJBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBLEVBekNBLEUiLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8emF1ZGlvIDp0aGVtZT1cInRoZW1lbGlzdFtrZXldLnZhbFwiIDphdXRvcGxheT1cInRydWVcIiA6Y29udGludWU9XCJ0cnVlXCI+PC96YXVkaW8+XHJcblx0XHQ8YnV0dG9uIEBjbGljaz1cImNoYW5nZVRoZW1lKGspXCIgY2xhc3M9XCJib3R0b21cIiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJtaW5pXCIgdi1mb3I9XCIoaSwgaykgaW4gdGhlbWVsaXN0XCIgOmtleT1cImtcIj57eyBpLm5hbWUgfX08L2J1dHRvbj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgemF1ZGlvIGZyb20gJ0AvY29tcG9uZW50cy91bmlhcHAtemF1ZGlvL3phdWRpbyc7XHJcbi8vIGltcG9ydCB6YXVkaW8gZnJvbSAndW5pYXBwLXphdWRpby96YXVkaW8nXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0a2V5OiAyLFxyXG5cdFx0XHR0aGVtZWxpc3Q6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOifmoLflvI8xJyx2YWw6J3RoZW1lMScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOifmoLflvI8yJyx2YWw6J3RoZW1lMicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOifmoLflvI8zJyx2YWw6J3RoZW1lMycsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcG9uZW50czogeyB6YXVkaW86IHphdWRpbyB9LFxyXG5cdG9uTG9hZChxdWVyeSkge1xyXG5cdFx0bGV0IHsga2V5IH0gPSBxdWVyeTsgXHJcblx0XHQvL+mAmui/h+e0ouW8leWOu+a4suafk+mcgOimgeaSreaUvueahOmfs+mikSwg5pa55rOVMTpcclxuXHRcdHRoaXMuJHphdWRpby5zZXRSZW5kZXIoa2V5KTtcclxuXHJcblx0XHQvLyDmjIflrprliJfooajkuK3lhbfkvZPkv6Hmga8s5Y675riy5p+T6ZyA6KaB5pKt5pS+55qE6Z+z6aKRLCDmlrnms5UyOlxyXG5cdFx0Ly8gdGhpcy4kemF1ZGlvLnNldFJlbmRlcih0aGlzLmF1ZGlvbGlzdFtrZXldKTtcclxuXHRcdFxyXG5cdFx0Ly9wbGF5aW5n5Zue6LCDLCDms6jlhoxgZXZlbnQtYWDlkoxgZXZlbnQtYmDkuKTkuKrmiZPljbDkuovku7ZcclxuXHRcdHRoaXMuJHphdWRpby5vbigncGxheWluZycsICdldmVudC1hJywgZGF0YSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEsJ2V2ZW50LWEnKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiR6YXVkaW8ub24oJ3BsYXlpbmcnLCAnZXZlbnQtYicsIGRhdGEgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhLCdldmVudC1iJylcclxuXHRcdH0pO1xyXG5cdFx0XHJcblxyXG5cdH0sXHJcblx0ZGVzdHJveWVkKCl7XHJcblx0XHQvL+mhtemdouWNuOi9veaXtuWNuOi9veS4muWKoSwg5o+Q6auY6aG16Z2i5oCn6IO9XHJcblx0XHR0aGlzLiR6YXVkaW8ub2ZmKCdwbGF5aW5nJywgJ2V2ZW50LWEnKVxyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZigncGxheWluZycsICdldmVudC1iJylcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGNoYW5nZVRoZW1lKGspIHtcclxuXHRcdFx0dGhpcy5rZXkgPSBrO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbmJvZHkge1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4uYm90dG9tIHtcclxuXHRtYXJnaW46IDIwcnB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 27 */
/*!*********************************************!*\
  !*** E:/work/uniapp-zaudio-example/App.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 28);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!**********************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 29);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThoQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/uniapp-zaudio-example/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n\n  },\n  onShow: function onShow() {\n  },\n  onHide: function onHide() {\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVzs7QUFFcEIsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsR0FMYTtBQU1kQyxRQUFNLEVBQUUsa0JBQVc7O0FBRWxCLEdBUmEsRSIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG5cdFx0XG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!***********************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _zaudio = _interopRequireDefault(__webpack_require__(/*! ./dist/zaudio.js */ 31));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =\n_zaudio.default;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmlhcHAtemF1ZGlvL2luZGV4LmpzIl0sIm5hbWVzIjpbIlpBdWRpbyJdLCJtYXBwaW5ncyI6InVGQUFBLHNGO0FBQ2VBLGUiLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWkF1ZGlvIGZyb20gXCIuL2Rpc3QvemF1ZGlvLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBaQXVkaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*****************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/dist/zaudio.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _get(target, property, receiver) {if (typeof Reflect !== \"undefined\" && Reflect.get) {_get = Reflect.get;} else {_get = function _get(target, property, receiver) {var base = _superPropBase(target, property);if (!base) return;var desc = Object.getOwnPropertyDescriptor(base, property);if (desc.get) {return desc.get.call(receiver);}return desc.value;};}return _get(target, property, receiver || target);}function _superPropBase(object, property) {while (!Object.prototype.hasOwnProperty.call(object, property)) {object = _getPrototypeOf(object);if (object === null) break;}return object;}function _inherits(subClass, superClass) {if (typeof superClass !== \"function\" && superClass !== null) {throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === \"object\" || typeof call === \"function\")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === \"function\") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar zaudioCbName;\n(function (zaudioCbName) {\n  zaudioCbName[\"onError\"] = \"error\";\n  zaudioCbName[\"onTimeUpdate\"] = \"playing\";\n  zaudioCbName[\"onCanplay\"] = \"canPlay\";\n  zaudioCbName[\"onPause\"] = \"pause\";\n  zaudioCbName[\"onEnded\"] = \"ended\";\n  zaudioCbName[\"setAudio\"] = \"setAudio\";\n  zaudioCbName[\"updateAudio\"] = \"updateAudio\";\n  zaudioCbName[\"seek\"] = \"seek\";\n  zaudioCbName[\"onStop\"] = \"stop\";\n  zaudioCbName[\"syncStateOn\"] = \"syncStateOn\";\n})(zaudioCbName || (zaudioCbName = {}));\nvar util_1 = __webpack_require__(/*! ./util */ 32);\n/**\r\n                                 * ZAudio类\r\n                                 * @class ZAudio\r\n                                 * @constructor\r\n                                 * @param    {String}    defaultCover    音频默认封面\r\n                                 * @param    {Boolean}   continuePlay    继续播放,错误播放或结束播放后执行\r\n                                 * @param    {Boolean}   autoPlay        自动播放,部分浏览器不支持\r\n                                 * @property {Number}         renderIndex     当前渲染索引\r\n                                 * @property {<audioinfo>}      renderinfo      当前渲染数据\r\n                                 * @property {Array<audio>}   audiolist       音频列表数组\r\n                                 * @property {<audioinfo>}      playinfo        当前播放数据\r\n                                 * @property {Boolean}        paused          音频暂停状态\r\n                                 * @property {Number}         playIndex       当前播放索引\r\n                                 * @property {Boolean}        renderIsPlay    渲染与播放是否一致\r\n                                 *\r\n                                 * @method on(event, action, fn)       回调函数注册业务事件\r\n                                 * @method off(event, action)          回调函数中卸载业务事件\r\n                                 * @method setRender(data)             指定音频, 渲染到zaudio组件\r\n                                 * @method syncRender()    \t\t\t\t\t\t 同步并渲染当前的播放状态\r\n                                 * @method operate(index)       \t\t\t 播放或暂停指定索引的音频\r\n                                 * @method setAudio(list)\t\t   \t\t\t\t 覆盖音频列表\r\n                                 * @method updateAudio(list)   \t\t\t\t 添加音频列表\r\n                                 * @method stop()          \t\t\t\t\t\t 强制暂停当前播放音频\r\n                                 * @method stepPlay(count)      \t\t\t\t快进快退\r\n                                 * @method syncStateOn(action, cb)       \t注册一个用于同步获取当前播放状态的事件\r\n                                 * @method syncStateOff(action)     \t\t卸载用于同步获取当前播放状态的事件\r\n                                 *\r\n                                 *\r\n                                 * **/var\nZAudio = /*#__PURE__*/function (_util_1$EventBus) {_inherits(ZAudio, _util_1$EventBus);var _super = _createSuper(ZAudio);\n  function ZAudio(options) {var _this;_classCallCheck(this, ZAudio);\n    _this = _super.call(this);\n    _this.renderIndex = 0;\n    _this.audiolist = [];\n    _this.renderinfo = {\n      current: 0,\n      duration: 0,\n      duration_value: 0,\n      current_value: 0,\n      src: \"\",\n      title: \"\",\n      singer: \"\",\n      coverImgUrl: \"\" };\n\n    _this.playinfo = {\n      current: 0,\n      duration: 0,\n      duration_value: 0,\n      current_value: 0,\n      src: \"\",\n      title: \"\",\n      singer: \"\",\n      coverImgUrl: \"\" };\n\n    _this.paused = true;\n    _this.uPause = false;\n    _this.autoPlay = false;\n    _this.defaultCover = \"\";\n    _this.continuePlay = true;var\n    defaultCover = options.defaultCover,autoPlay = options.autoPlay,continuePlay = options.continuePlay;\n    if (_this.audioCtx)\n    return _possibleConstructorReturn(_this);\n    _this.defaultCover = defaultCover;\n    _this.autoPlay = autoPlay;\n    _this.continuePlay = continuePlay;\n    _this.init();return _this;\n  }_createClass(ZAudio, [{ key: \"init\", value: function init()\n    {var _this2 = this;\n\n      var audioCtx = uni.getBackgroundAudioManager();\n\n\n\n\n\n      this.audioCtx = audioCtx;\n      this.audioCtx.onCanplay(this.onCanplayHandler.bind(this));\n      this.audioCtx.onPlay(this.onPlayHandler.bind(this));\n      this.audioCtx.onPause(this.onPauseHandler.bind(this));\n      this.audioCtx.onStop(this.onStopHandler.bind(this));\n      this.audioCtx.onEnded(this.onEndedHandler.bind(this));\n      //fix: 节流触发播放中的回调函数,\n      //由于播放回调时间间隔有误差,设置1000ms时,会跳过某一秒; 经测试900ms是最准确的保证每一秒都有回调,\n      var throttlePlaying = util_1.throttle(this.onTimeUpdateHandler, 900).bind(this);\n      this.audioCtx.onTimeUpdate(throttlePlaying);\n      this.audioCtx.onError(this.onErrorHandler.bind(this));\n      //fix: 修复iOS原生音频切换不起作用\n\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        var bgMusic = plus.audio.createPlayer();\n        bgMusic.addEventListener(\"prev\", function () {\n          _this2.changeplay(-1);\n        });\n        bgMusic.addEventListener(\"next\", function () {\n          _this2.changeplay(1);\n        });\n      }\n\n\n      setTimeout(function () {\n        if (_this2.autoPlay) {\n          _this2.operate();\n        }\n      }, 500);\n\n      this.appCheckReplay();\n    }\n    /**\r\n       * @description 回调中卸载业务事件\r\n       * @param {<zaudioCbName>}   event     回调名称枚举值,具体看types.ts\r\n       * @param {Sting}         action    业务函数名,用于区分不同业务\r\n       * @returns undefined\r\n       * **/ }, { key: \"off\", value: function off(\n    event, action) {\n      _get(_getPrototypeOf(ZAudio.prototype), \"off\", this).call(this, event, action);\n    }\n    /**\r\n       * @description 回调中注册业务事件\r\n       * @param {<zaudioCbName>}        event     回调名称枚举值,具体看types.ts\r\n       * @param {Sting}              action    业务函数名,用于区分不同业务\r\n       * @param {function(object|string|number|undefined):undefined}      fn      业务函数, 参数或为音频状态\r\n       * @returns undefined\r\n       * **/ }, { key: \"on\", value: function on(\n    event, action, fn) {\n      _get(_getPrototypeOf(ZAudio.prototype), \"on\", this).call(this, event, action, fn);\n    }\n    /**\r\n       * @description 订阅触发音频回调\r\n       * @param {<zaudioCbName>}        event      回调名称枚举值,具体看types.ts\r\n       * @param {object|string|number|undefined}     data        订阅触发回调时,传的音频属性\r\n       * @returns undefined\r\n       * **/ }, { key: \"emit\", value: function emit(\n    event, data) {\n      _get(_getPrototypeOf(ZAudio.prototype), \"emit\", this).call(this, event, data);\n    } }, { key: \"commit\", value: function commit(\n    action, data) {\n      typeof this[action] === \"function\" && this[action](data);\n    } }, { key: \"onCanplayHandler\", value: function onCanplayHandler()\n    {\n      this.emit(zaudioCbName.onCanplay, this.playinfo);\n      this.syncStateEmit();\n    } }, { key: \"onPlayHandler\", value: function onPlayHandler()\n    {\n\n      this.commit(\"setPlayinfo\", {\n        duration: util_1.formatSeconds(this.audioCtx.duration),\n        duration_value: this.audioCtx.duration });\n\n\n      this.commit(\"setPause\", false);\n      this.commit(\"setUnnormalPause\", false);\n    } }, { key: \"onPauseHandler\", value: function onPauseHandler()\n    {\n      this.commit(\"setPause\", true);\n      this.emit(zaudioCbName.onPause);\n      this.syncStateEmit();\n    } }, { key: \"onStopHandler\", value: function onStopHandler()\n    {\n      this.commit(\"setPause\", true);\n      this.emit(zaudioCbName.onStop);\n      this.syncStateEmit();\n    } }, { key: \"onEndedHandler\", value: function onEndedHandler()\n    {\n      this.commit(\"setPause\", true);\n      this.audioCtx.startTime = 0;\n      this.commit(\"setPlayinfo\", {\n        current: util_1.formatSeconds(\"0\"),\n        current_value: \"0\" });\n\n      this.emit(zaudioCbName.onEnded);\n      this.syncStateEmit();\n      //续播\n      if (this.continuePlay) {\n        this.changeplay(1);\n      }\n    } }, { key: \"onTimeUpdateHandler\", value: function onTimeUpdateHandler()\n    {\n\n      if (this.renderIsPlay) {\n        //fix: 解决播放进度大于总进度问题\n        var currentTime = this.audioCtx.currentTime > this.audioCtx.duration ?\n        this.audioCtx.duration :\n        this.audioCtx.currentTime;\n        this.commit(\"setPlayinfo\", {\n          current: util_1.formatSeconds(currentTime),\n          current_value: currentTime });\n\n\n\n\n\n\n\n\n\n\n      }\n      this.emit(zaudioCbName.onTimeUpdate, this.playinfo);\n      this.syncStateEmit();\n    } }, { key: \"onErrorHandler\", value: function onErrorHandler()\n    {\n      this.commit(\"setPause\", true);\n      this.commit(\"setRender\", {\n        src: \"\",\n        title: \"\",\n        singer: \"\",\n        coverImgUrl: \"\" });\n\n      this.commit(\"setPlayinfo\", {\n        current: 0,\n        current_value: 0,\n        duration: 0,\n        duration_value: 0,\n        title: \"\",\n        src: \"\" });\n\n      this.emit(zaudioCbName.onError);\n      this.syncStateEmit();\n      if (this.continuePlay) {\n        this.changeplay(1);\n      }\n    }\n    //同步渲染当前状态 (用于不同页面zaudio组件同步播放状态)\n  }, { key: \"syncRender\", value: function syncRender() {\n      this.setRender(this.playIndex);\n    }\n    //注册一个同步获取属性的方法\n  }, { key: \"syncStateOn\", value: function syncStateOn(action, fn) {\n      typeof fn === \"function\" && this.on(zaudioCbName.syncStateOn, action, fn);\n    }\n    //卸载同步获取属性的方法\n  }, { key: \"syncStateOff\", value: function syncStateOff(action) {\n      this.off(zaudioCbName.syncStateOn, action);\n    }\n    //订阅同步获取属性事件\n  }, { key: \"syncStateEmit\", value: function syncStateEmit() {\n      this.emit(zaudioCbName.syncStateOn, {\n        renderIndex: this.renderIndex,\n        audiolist: this.audiolist,\n        renderinfo: this.renderinfo,\n        playinfo: this.playinfo,\n        paused: this.paused,\n        playIndex: this.playIndex,\n        renderIsPlay: this.renderIsPlay });\n\n    }\n    //指定位置\n  }, { key: \"seek\", value: function seek(value) {\n      this.audioCtx.seek(value);\n      this.commit(\"setPlayinfo\", {\n        current: util_1.formatSeconds(value),\n        current_value: value });\n\n      // setTimeout(() => {\n      //   this.emit(zaudioCbName.seek, this.playinfo.current);\n      // }, 0);\n      this.emit(zaudioCbName.seek, this.playinfo.current);\n    }\n    //快进,退\n  }, { key: \"stepPlay\", value: function stepPlay(value) {\n      if (this.renderIsPlay) {\n        var pos = this.playinfo.current_value + value;\n        this.seek(pos);\n      }\n    }\n    //切歌\n  }, { key: \"changeplay\", value: function changeplay(count) {\n      if (this.renderIsPlay) {\n        var nowindex = this.renderIndex;\n        nowindex += count;\n        nowindex =\n        nowindex < 0 ?\n        this.audiolist.length - 1 :\n        nowindex > this.audiolist.length - 1 ?\n        0 :\n        nowindex;\n        this.commit(\"setPause\", true);\n        this.operate(nowindex);\n      } else\n      {\n        this.commit(\"setPause\", true);\n        this.operate(this.renderIndex);\n      }\n    }\n    //手动播放或暂停, 并渲染对应的数据\n  }, { key: \"operate\", value: function operate(key) {\n      key !== undefined && this.commit(\"setRender\", key);\n      this.operation();\n    }\n    //强制暂停播放\n  }, { key: \"stop\", value: function stop() {\n      this.audioCtx.pause();\n      this.commit(\"setPause\", true);\n      this.commit(\"setUnnormalPause\", true);\n      this.emit(zaudioCbName.onStop);\n    }\n    //播放,暂停事件判断,\n    //播放数据与渲染数据相同时: 播放->暂停, 暂停->播放\n    //播放数据与渲染数据不相同时: 播放渲染音频\n  }, { key: \"operation\", value: function operation() {var _this$playinfo =\n      this.playinfo,duration = _this$playinfo.duration,current = _this$playinfo.current,duration_value = _this$playinfo.duration_value,current_value = _this$playinfo.current_value,src = _this$playinfo.src;var _this$renderinfo =\n      this.renderinfo,renderSrc = _this$renderinfo.src,renderTitle = _this$renderinfo.title,renderSinger = _this$renderinfo.singer,renderCoverImgUrl = _this$renderinfo.coverImgUrl;\n      var renderIsPlay = this.renderIsPlay;\n      var paused = this.paused;\n      if (!renderIsPlay) {\n        //渲染与播放地址 不同\n        this.audioCtx.src = renderSrc;\n        this.audioCtx.title = renderTitle;\n        this.audioCtx.singer = renderSinger;\n        this.audioCtx.coverImgUrl = renderCoverImgUrl || this.defaultCover;\n        this.audioCtx.startTime = 0;\n        this.audioCtx.seek(0);\n        this.audioCtx.play();\n        this.commit(\"setPause\", false);\n        this.commit(\"setPlayinfo\", {\n          src: renderSrc,\n          title: renderTitle,\n          singer: renderSinger,\n          coverImgUrl: renderCoverImgUrl });\n\n      } else\n      {\n        if (paused) {\n          //渲染与播放地址相同\n          this.audioCtx.play();\n          this.audioCtx.startTime = current_value;\n          this.audioCtx.seek(current_value);\n          this.commit(\"setPause\", false);\n          this.commit(\"setPlayinfo\", {\n            src: renderSrc,\n            title: renderTitle,\n            singer: renderSinger,\n            coverImgUrl: renderCoverImgUrl });\n\n        } else\n        {\n          this.audioCtx.pause();\n          this.commit(\"setPause\", true);\n          this.commit(\"setUnnormalPause\", true);\n        }\n      }\n    }\n    //覆盖音频\n  }, { key: \"setAudio\", value: function setAudio(data) {\n      this.audiolist = _toConsumableArray(data);\n      this.emit(zaudioCbName.setAudio, this.audiolist);\n      this.syncStateEmit();\n    }\n    //添加音频\n  }, { key: \"updateAudio\", value: function updateAudio(data) {var _this$audiolist;\n      (_this$audiolist = this.audiolist).push.apply(_this$audiolist, _toConsumableArray(data));\n      this.emit(zaudioCbName.updateAudio, this.audiolist);\n      this.syncStateEmit();\n    }\n    //设置当前播放信息\n  }, { key: \"setPlayinfo\", value: function setPlayinfo(data) {\n      if (data.current) {\n        this.playinfo.current = data.current;\n      }\n      if (data.duration) {\n        this.playinfo.duration = data.duration;\n      }\n      if (data.duration_value) {\n        this.playinfo.duration_value = data.duration_value;\n      }\n      if (data.current_value) {\n        this.playinfo.current_value = data.current_value;\n      }\n      if (data.src) {\n        this.playinfo.src = data.src;\n      }\n      if (data.title) {\n        this.playinfo.title = data.title;\n      }\n      if (data.singer) {\n        this.playinfo.singer = data.singer;\n      }\n      if (data.coverImgUrl) {\n        this.playinfo.coverImgUrl = data.coverImgUrl;\n      }\n    }\n    //设置暂停状态\n  }, { key: \"setPause\", value: function setPause(data) {\n      this.paused = data;\n    }\n    //设置通话时暂停状态\n  }, { key: \"setUnnormalPause\", value: function setUnnormalPause(data) {\n      this.uPause = data;\n    }\n    //设置渲染 @param 索引或渲染信息\n  }, { key: \"setRender\", value: function setRender(data) {\n      if (this.audiolist.length == 0)\n      return;\n      if (typeof data === \"number\" || typeof data === \"string\") {\n        this.renderIndex = typeof data === \"string\" ? parseInt(data) : data;\n        this.renderinfo = {\n          src: this.audiolist[this.renderIndex].src,\n          title: this.audiolist[this.renderIndex].title,\n          singer: this.audiolist[this.renderIndex].singer,\n          coverImgUrl: this.audiolist[this.renderIndex].coverImgUrl,\n          current: \"00:00\",\n          duration: \"00:00\",\n          current_value: 0,\n          duration_value: 100 };\n\n      } else\n      {\n        this.renderinfo = data;\n        var renderIndex = this.audiolist.findIndex(function (i) {return i.src == data.src;});\n        if (renderIndex >= 0) {\n          this.renderIndex = renderIndex;\n        }\n      }\n    }\n    //当前索引\n  }, { key: \"appCheckReplay\",\n\n\n\n\n\n\n\n    //app端判断电话来电后, 音频意外中断之后的继续播放\n    value: function appCheckReplay() {\n      var _t = this;\n\n      try {\n        if (uni.getSystemInfoSync().platform == \"android\") {\n          var main = plus.android.runtimeMainActivity();\n          var Context = plus.android.importClass(\"android.content.Context\");\n          var telephonyManager = plus.android.importClass(\"android.telephony.TelephonyManager\");\n          var telephonyManager = plus.android.\n          runtimeMainActivity().\n          getSystemService(Context.TELEPHONY_SERVICE);\n          var receiver = plus.android.implements(\"io.dcloud.android.content.BroadcastReceiver\", {\n            onReceive: function onReceive(intent) {\n              //实现onReceiver回调函数\n              plus.android.importClass(intent);\n              var telephonyManager = plus.android.importClass(\"android.telephony.TelephonyManager\");\n              var telephonyManager = plus.android.\n              runtimeMainActivity().\n              getSystemService(Context.TELEPHONY_SERVICE);\n              var phonetype = telephonyManager.getCallState();\n              var phoneNumber = intent.getStringExtra(telephonyManager.EXTRA_INCOMING_NUMBER);\n              if (phonetype == 0 && !_t.uPause) {\n                _t.audioCtx.play();\n              }\n            } });\n\n          var IntentFilter = plus.android.importClass(\"android.content.IntentFilter\");\n          var filter = new IntentFilter();\n          filter.addAction(telephonyManager.ACTION_PHONE_STATE_CHANGED); //监听开关\n          main.registerReceiver(receiver, filter); //注册监听\n        } else\n        if (uni.getSystemInfoSync().platform == \"ios\") {\n          var callstatus = false;\n          var CTCall = plus.ios.importClass(\"CTCall\");\n          var CTCallCenter = plus.ios.importClass(\"CTCallCenter\");\n          var center = new CTCallCenter();\n          center.init();\n          center.setCallEventr(function (ctCall) {\n            callstatus = !callstatus;\n            if (!callstatus && !_t.uPause) {\n              _t.audioCtx.play();\n            } else\n            {\n              _t.audioCtx.pause();\n            }\n          });\n        }\n      }\n      catch (err) {\n        __f__(\"warn\", err, \" at components/uniapp-zaudio/dist/zaudio.js:490\");\n      }\n\n    } }, { key: \"playIndex\", get: function get() {var _this3 = this;var index = this.audiolist.findIndex(function (i) {return i.src == _this3.playinfo.src;});return index <= 0 ? 0 : index;} //渲染与播放是否一致\n  }, { key: \"renderIsPlay\", get: function get() {return this.renderinfo.src == this.playinfo.src;} }]);return ZAudio;}(util_1.EventBus);\nexports.default = ZAudio;\nZAudio.version = \"2.2.0\";\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmlhcHAtemF1ZGlvL2Rpc3QvemF1ZGlvLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiemF1ZGlvQ2JOYW1lIiwidXRpbF8xIiwicmVxdWlyZSIsIlpBdWRpbyIsIm9wdGlvbnMiLCJyZW5kZXJJbmRleCIsImF1ZGlvbGlzdCIsInJlbmRlcmluZm8iLCJjdXJyZW50IiwiZHVyYXRpb24iLCJkdXJhdGlvbl92YWx1ZSIsImN1cnJlbnRfdmFsdWUiLCJzcmMiLCJ0aXRsZSIsInNpbmdlciIsImNvdmVySW1nVXJsIiwicGxheWluZm8iLCJwYXVzZWQiLCJ1UGF1c2UiLCJhdXRvUGxheSIsImRlZmF1bHRDb3ZlciIsImNvbnRpbnVlUGxheSIsImF1ZGlvQ3R4IiwiaW5pdCIsInVuaSIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJvbkNhbnBsYXkiLCJvbkNhbnBsYXlIYW5kbGVyIiwiYmluZCIsIm9uUGxheSIsIm9uUGxheUhhbmRsZXIiLCJvblBhdXNlIiwib25QYXVzZUhhbmRsZXIiLCJvblN0b3AiLCJvblN0b3BIYW5kbGVyIiwib25FbmRlZCIsIm9uRW5kZWRIYW5kbGVyIiwidGhyb3R0bGVQbGF5aW5nIiwidGhyb3R0bGUiLCJvblRpbWVVcGRhdGVIYW5kbGVyIiwib25UaW1lVXBkYXRlIiwib25FcnJvciIsIm9uRXJyb3JIYW5kbGVyIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwbGF0Zm9ybSIsImJnTXVzaWMiLCJwbHVzIiwiYXVkaW8iLCJjcmVhdGVQbGF5ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbmdlcGxheSIsInNldFRpbWVvdXQiLCJvcGVyYXRlIiwiYXBwQ2hlY2tSZXBsYXkiLCJldmVudCIsImFjdGlvbiIsImZuIiwiZGF0YSIsImVtaXQiLCJzeW5jU3RhdGVFbWl0IiwiY29tbWl0IiwiZm9ybWF0U2Vjb25kcyIsInN0YXJ0VGltZSIsInJlbmRlcklzUGxheSIsImN1cnJlbnRUaW1lIiwic2V0UmVuZGVyIiwicGxheUluZGV4Iiwib24iLCJzeW5jU3RhdGVPbiIsIm9mZiIsInNlZWsiLCJwb3MiLCJjb3VudCIsIm5vd2luZGV4IiwibGVuZ3RoIiwia2V5IiwidW5kZWZpbmVkIiwib3BlcmF0aW9uIiwicGF1c2UiLCJyZW5kZXJTcmMiLCJyZW5kZXJUaXRsZSIsInJlbmRlclNpbmdlciIsInJlbmRlckNvdmVySW1nVXJsIiwicGxheSIsInNldEF1ZGlvIiwicHVzaCIsInVwZGF0ZUF1ZGlvIiwicGFyc2VJbnQiLCJmaW5kSW5kZXgiLCJpIiwiX3QiLCJtYWluIiwiYW5kcm9pZCIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJDb250ZXh0IiwiaW1wb3J0Q2xhc3MiLCJ0ZWxlcGhvbnlNYW5hZ2VyIiwiZ2V0U3lzdGVtU2VydmljZSIsIlRFTEVQSE9OWV9TRVJWSUNFIiwicmVjZWl2ZXIiLCJpbXBsZW1lbnRzIiwib25SZWNlaXZlIiwiaW50ZW50IiwicGhvbmV0eXBlIiwiZ2V0Q2FsbFN0YXRlIiwicGhvbmVOdW1iZXIiLCJnZXRTdHJpbmdFeHRyYSIsIkVYVFJBX0lOQ09NSU5HX05VTUJFUiIsIkludGVudEZpbHRlciIsImZpbHRlciIsImFkZEFjdGlvbiIsIkFDVElPTl9QSE9ORV9TVEFURV9DSEFOR0VEIiwicmVnaXN0ZXJSZWNlaXZlciIsImNhbGxzdGF0dXMiLCJDVENhbGwiLCJpb3MiLCJDVENhbGxDZW50ZXIiLCJjZW50ZXIiLCJzZXRDYWxsRXZlbnRyIiwiY3RDYWxsIiwiZXJyIiwiaW5kZXgiLCJFdmVudEJ1cyIsImRlZmF1bHQiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSw2QztBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLEtBQUssRUFBRSxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsWUFBSjtBQUNBLENBQUMsVUFBVUEsWUFBVixFQUF3QjtBQUNyQkEsY0FB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dUIsS0FBS0ksUUFBTCxDQUFjSixHQUE1QyxDQUNILEMscUJBellnQlgsTUFBTSxDQUFDeUgsUTtBQWljNUI1SCxPQUFPLENBQUM2SCxPQUFSLEdBQWtCeEgsTUFBbEI7QUFDQUEsTUFBTSxDQUFDeUgsT0FBUCxHQUFpQixPQUFqQixDIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHphdWRpb0NiTmFtZTtcclxuKGZ1bmN0aW9uICh6YXVkaW9DYk5hbWUpIHtcclxuICAgIHphdWRpb0NiTmFtZVtcIm9uRXJyb3JcIl0gPSBcImVycm9yXCI7XHJcbiAgICB6YXVkaW9DYk5hbWVbXCJvblRpbWVVcGRhdGVcIl0gPSBcInBsYXlpbmdcIjtcclxuICAgIHphdWRpb0NiTmFtZVtcIm9uQ2FucGxheVwiXSA9IFwiY2FuUGxheVwiO1xyXG4gICAgemF1ZGlvQ2JOYW1lW1wib25QYXVzZVwiXSA9IFwicGF1c2VcIjtcclxuICAgIHphdWRpb0NiTmFtZVtcIm9uRW5kZWRcIl0gPSBcImVuZGVkXCI7XHJcbiAgICB6YXVkaW9DYk5hbWVbXCJzZXRBdWRpb1wiXSA9IFwic2V0QXVkaW9cIjtcclxuICAgIHphdWRpb0NiTmFtZVtcInVwZGF0ZUF1ZGlvXCJdID0gXCJ1cGRhdGVBdWRpb1wiO1xyXG4gICAgemF1ZGlvQ2JOYW1lW1wic2Vla1wiXSA9IFwic2Vla1wiO1xyXG4gICAgemF1ZGlvQ2JOYW1lW1wib25TdG9wXCJdID0gXCJzdG9wXCI7XHJcbiAgICB6YXVkaW9DYk5hbWVbXCJzeW5jU3RhdGVPblwiXSA9IFwic3luY1N0YXRlT25cIjtcclxufSkoemF1ZGlvQ2JOYW1lIHx8ICh6YXVkaW9DYk5hbWUgPSB7fSkpO1xyXG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xyXG4vKipcclxuICogWkF1ZGlv57G7XHJcbiAqIEBjbGFzcyBaQXVkaW9cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSAgICB7U3RyaW5nfSAgICBkZWZhdWx0Q292ZXIgICAg6Z+z6aKR6buY6K6k5bCB6Z2iXHJcbiAqIEBwYXJhbSAgICB7Qm9vbGVhbn0gICBjb250aW51ZVBsYXkgICAg57un57ut5pKt5pS+LOmUmeivr+aSreaUvuaIlue7k+adn+aSreaUvuWQjuaJp+ihjFxyXG4gKiBAcGFyYW0gICAge0Jvb2xlYW59ICAgYXV0b1BsYXkgICAgICAgIOiHquWKqOaSreaUvizpg6jliIbmtY/op4jlmajkuI3mlK/mjIFcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9ICAgICAgICAgcmVuZGVySW5kZXggICAgIOW9k+WJjea4suafk+e0ouW8lVxyXG4gKiBAcHJvcGVydHkgezxhdWRpb2luZm8+fSAgICAgIHJlbmRlcmluZm8gICAgICDlvZPliY3muLLmn5PmlbDmja5cclxuICogQHByb3BlcnR5IHtBcnJheTxhdWRpbz59ICAgYXVkaW9saXN0ICAgICAgIOmfs+mikeWIl+ihqOaVsOe7hFxyXG4gKiBAcHJvcGVydHkgezxhdWRpb2luZm8+fSAgICAgIHBsYXlpbmZvICAgICAgICDlvZPliY3mkq3mlL7mlbDmja5cclxuICogQHByb3BlcnR5IHtCb29sZWFufSAgICAgICAgcGF1c2VkICAgICAgICAgIOmfs+mikeaaguWBnOeKtuaAgVxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gICAgICAgICBwbGF5SW5kZXggICAgICAg5b2T5YmN5pKt5pS+57Si5byVXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gICAgICAgIHJlbmRlcklzUGxheSAgICDmuLLmn5PkuI7mkq3mlL7mmK/lkKbkuIDoh7RcclxuICpcclxuICogQG1ldGhvZCBvbihldmVudCwgYWN0aW9uLCBmbikgICAgICAg5Zue6LCD5Ye95pWw5rOo5YaM5Lia5Yqh5LqL5Lu2XHJcbiAqIEBtZXRob2Qgb2ZmKGV2ZW50LCBhY3Rpb24pICAgICAgICAgIOWbnuiwg+WHveaVsOS4reWNuOi9veS4muWKoeS6i+S7tlxyXG4gKiBAbWV0aG9kIHNldFJlbmRlcihkYXRhKSAgICAgICAgICAgICDmjIflrprpn7PpopEsIOa4suafk+WIsHphdWRpb+e7hOS7tlxyXG4gKiBAbWV0aG9kIHN5bmNSZW5kZXIoKSAgICBcdFx0XHRcdFx0XHQg5ZCM5q2l5bm25riy5p+T5b2T5YmN55qE5pKt5pS+54q25oCBXHJcbiAqIEBtZXRob2Qgb3BlcmF0ZShpbmRleCkgICAgICAgXHRcdFx0IOaSreaUvuaIluaaguWBnOaMh+Wumue0ouW8leeahOmfs+mikVxyXG4gKiBAbWV0aG9kIHNldEF1ZGlvKGxpc3QpXHRcdCAgIFx0XHRcdFx0IOimhueblumfs+mikeWIl+ihqFxyXG4gKiBAbWV0aG9kIHVwZGF0ZUF1ZGlvKGxpc3QpICAgXHRcdFx0XHQg5re75Yqg6Z+z6aKR5YiX6KGoXHJcbiAqIEBtZXRob2Qgc3RvcCgpICAgICAgICAgIFx0XHRcdFx0XHRcdCDlvLrliLbmmoLlgZzlvZPliY3mkq3mlL7pn7PpopFcclxuICogQG1ldGhvZCBzdGVwUGxheShjb3VudCkgICAgICBcdFx0XHRcdOW/q+i/m+W/q+mAgFxyXG4gKiBAbWV0aG9kIHN5bmNTdGF0ZU9uKGFjdGlvbiwgY2IpICAgICAgIFx05rOo5YaM5LiA5Liq55So5LqO5ZCM5q2l6I635Y+W5b2T5YmN5pKt5pS+54q25oCB55qE5LqL5Lu2XHJcbiAqIEBtZXRob2Qgc3luY1N0YXRlT2ZmKGFjdGlvbikgICAgIFx0XHTljbjovb3nlKjkuo7lkIzmraXojrflj5blvZPliY3mkq3mlL7nirbmgIHnmoTkuovku7ZcclxuICpcclxuICpcclxuICogKiovXHJcbmNsYXNzIFpBdWRpbyBleHRlbmRzIHV0aWxfMS5FdmVudEJ1cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmF1ZGlvbGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVuZGVyaW5mbyA9IHtcclxuICAgICAgICAgICAgY3VycmVudDogMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uX3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICBzcmM6IFwiXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBzaW5nZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIGNvdmVySW1nVXJsOiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wbGF5aW5mbyA9IHtcclxuICAgICAgICAgICAgY3VycmVudDogMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uX3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICBzcmM6IFwiXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBzaW5nZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIGNvdmVySW1nVXJsOiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudVBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdXRvUGxheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvdmVyID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNvbnRpbnVlUGxheSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHsgZGVmYXVsdENvdmVyLCBhdXRvUGxheSwgY29udGludWVQbGF5IH0gPSBvcHRpb25zO1xyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvQ3R4KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q292ZXIgPSBkZWZhdWx0Q292ZXI7XHJcbiAgICAgICAgdGhpcy5hdXRvUGxheSA9IGF1dG9QbGF5O1xyXG4gICAgICAgIHRoaXMuY29udGludWVQbGF5ID0gY29udGludWVQbGF5O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdmFyIGF1ZGlvQ3R4ID0gdW5pLmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuYXVkaW9DdHggPSBhdWRpb0N0eDtcclxuICAgICAgICB0aGlzLmF1ZGlvQ3R4Lm9uQ2FucGxheSh0aGlzLm9uQ2FucGxheUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5vblBsYXkodGhpcy5vblBsYXlIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9DdHgub25QYXVzZSh0aGlzLm9uUGF1c2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9DdHgub25TdG9wKHRoaXMub25TdG9wSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmF1ZGlvQ3R4Lm9uRW5kZWQodGhpcy5vbkVuZGVkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvL2ZpeDog6IqC5rWB6Kem5Y+R5pKt5pS+5Lit55qE5Zue6LCD5Ye95pWwLFxyXG4gICAgICAgIC8v55Sx5LqO5pKt5pS+5Zue6LCD5pe26Ze06Ze06ZqU5pyJ6K+v5beuLOiuvue9rjEwMDBtc+aXtizkvJrot7Pov4fmn5DkuIDnp5I7IOe7j+a1i+ivlTkwMG1z5piv5pyA5YeG56Gu55qE5L+d6K+B5q+P5LiA56eS6YO95pyJ5Zue6LCDLFxyXG4gICAgICAgIGxldCB0aHJvdHRsZVBsYXlpbmcgPSB1dGlsXzEudGhyb3R0bGUodGhpcy5vblRpbWVVcGRhdGVIYW5kbGVyLCA5MDApLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5vblRpbWVVcGRhdGUodGhyb3R0bGVQbGF5aW5nKTtcclxuICAgICAgICB0aGlzLmF1ZGlvQ3R4Lm9uRXJyb3IodGhpcy5vbkVycm9ySGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvL2ZpeDog5L+u5aSNaU9T5Y6f55Sf6Z+z6aKR5YiH5o2i5LiN6LW35L2c55SoXHJcblxyXG4gICAgICAgIGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnTXVzaWMgPSBwbHVzLmF1ZGlvLmNyZWF0ZVBsYXllcigpO1xyXG4gICAgICAgICAgICBiZ011c2ljLmFkZEV2ZW50TGlzdGVuZXIoXCJwcmV2XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlcGxheSgtMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiZ011c2ljLmFkZEV2ZW50TGlzdGVuZXIoXCJuZXh0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlcGxheSgxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9QbGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZXJhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwQ2hlY2tSZXBsYXkoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWbnuiwg+S4reWNuOi9veS4muWKoeS6i+S7tlxyXG4gICAgICogQHBhcmFtIHs8emF1ZGlvQ2JOYW1lPn0gICBldmVudCAgICAg5Zue6LCD5ZCN56ew5p6a5Li+5YC8LOWFt+S9k+eci3R5cGVzLnRzXHJcbiAgICAgKiBAcGFyYW0ge1N0aW5nfSAgICAgICAgIGFjdGlvbiAgICDkuJrliqHlh73mlbDlkI0s55So5LqO5Yy65YiG5LiN5ZCM5Lia5YqhXHJcbiAgICAgKiBAcmV0dXJucyB1bmRlZmluZWRcclxuICAgICAqICoqL1xyXG4gICAgb2ZmKGV2ZW50LCBhY3Rpb24pIHtcclxuICAgICAgICBzdXBlci5vZmYoZXZlbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDlm57osIPkuK3ms6jlhozkuJrliqHkuovku7ZcclxuICAgICAqIEBwYXJhbSB7PHphdWRpb0NiTmFtZT59ICAgICAgICBldmVudCAgICAg5Zue6LCD5ZCN56ew5p6a5Li+5YC8LOWFt+S9k+eci3R5cGVzLnRzXHJcbiAgICAgKiBAcGFyYW0ge1N0aW5nfSAgICAgICAgICAgICAgYWN0aW9uICAgIOS4muWKoeWHveaVsOWQjSznlKjkuo7ljLrliIbkuI3lkIzkuJrliqFcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24ob2JqZWN0fHN0cmluZ3xudW1iZXJ8dW5kZWZpbmVkKTp1bmRlZmluZWR9ICAgICAgZm4gICAgICDkuJrliqHlh73mlbAsIOWPguaVsOaIluS4uumfs+mikeeKtuaAgVxyXG4gICAgICogQHJldHVybnMgdW5kZWZpbmVkXHJcbiAgICAgKiAqKi9cclxuICAgIG9uKGV2ZW50LCBhY3Rpb24sIGZuKSB7XHJcbiAgICAgICAgc3VwZXIub24oZXZlbnQsIGFjdGlvbiwgZm4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g6K6i6ZiF6Kem5Y+R6Z+z6aKR5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gezx6YXVkaW9DYk5hbWU+fSAgICAgICAgZXZlbnQgICAgICDlm57osIPlkI3np7DmnprkuL7lgLws5YW35L2T55yLdHlwZXMudHNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHN0cmluZ3xudW1iZXJ8dW5kZWZpbmVkfSAgICAgZGF0YSAgICAgICAg6K6i6ZiF6Kem5Y+R5Zue6LCD5pe2LOS8oOeahOmfs+mikeWxnuaAp1xyXG4gICAgICogQHJldHVybnMgdW5kZWZpbmVkXHJcbiAgICAgKiAqKi9cclxuICAgIGVtaXQoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBzdXBlci5lbWl0KGV2ZW50LCBkYXRhKTtcclxuICAgIH1cclxuICAgIGNvbW1pdChhY3Rpb24sIGRhdGEpIHtcclxuICAgICAgICB0eXBlb2YgdGhpc1thY3Rpb25dID09PSBcImZ1bmN0aW9uXCIgJiYgdGhpc1thY3Rpb25dKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgb25DYW5wbGF5SGFuZGxlcigpIHtcclxuICAgICAgICB0aGlzLmVtaXQoemF1ZGlvQ2JOYW1lLm9uQ2FucGxheSwgdGhpcy5wbGF5aW5mbyk7XHJcbiAgICAgICAgdGhpcy5zeW5jU3RhdGVFbWl0KCk7XHJcbiAgICB9XHJcbiAgICBvblBsYXlIYW5kbGVyKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbW1pdChcInNldFBsYXlpbmZvXCIsIHtcclxuICAgICAgICAgICAgZHVyYXRpb246IHV0aWxfMS5mb3JtYXRTZWNvbmRzKHRoaXMuYXVkaW9DdHguZHVyYXRpb24pLFxyXG4gICAgICAgICAgICBkdXJhdGlvbl92YWx1ZTogdGhpcy5hdWRpb0N0eC5kdXJhdGlvbixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jb21taXQoXCJzZXRVbm5vcm1hbFBhdXNlXCIsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIG9uUGF1c2VIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGF1c2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KHphdWRpb0NiTmFtZS5vblBhdXNlKTtcclxuICAgICAgICB0aGlzLnN5bmNTdGF0ZUVtaXQoKTtcclxuICAgIH1cclxuICAgIG9uU3RvcEhhbmRsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVtaXQoemF1ZGlvQ2JOYW1lLm9uU3RvcCk7XHJcbiAgICAgICAgdGhpcy5zeW5jU3RhdGVFbWl0KCk7XHJcbiAgICB9XHJcbiAgICBvbkVuZGVkSGFuZGxlcigpIHtcclxuICAgICAgICB0aGlzLmNvbW1pdChcInNldFBhdXNlXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9DdHguc3RhcnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmNvbW1pdChcInNldFBsYXlpbmZvXCIsIHtcclxuICAgICAgICAgICAgY3VycmVudDogdXRpbF8xLmZvcm1hdFNlY29uZHMoXCIwXCIpLFxyXG4gICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiBcIjBcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVtaXQoemF1ZGlvQ2JOYW1lLm9uRW5kZWQpO1xyXG4gICAgICAgIHRoaXMuc3luY1N0YXRlRW1pdCgpO1xyXG4gICAgICAgIC8v57ut5pKtXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGludWVQbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlcGxheSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblRpbWVVcGRhdGVIYW5kbGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcklzUGxheSkge1xyXG4gICAgICAgICAgICAvL2ZpeDog6Kej5Yaz5pKt5pS+6L+b5bqm5aSn5LqO5oC76L+b5bqm6Zeu6aKYXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMuYXVkaW9DdHguY3VycmVudFRpbWUgPiB0aGlzLmF1ZGlvQ3R4LmR1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuYXVkaW9DdHguZHVyYXRpb25cclxuICAgICAgICAgICAgICAgIDogdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZTtcclxuICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQbGF5aW5mb1wiLCB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiB1dGlsXzEuZm9ybWF0U2Vjb25kcyhjdXJyZW50VGltZSksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiBjdXJyZW50VGltZSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCh6YXVkaW9DYk5hbWUub25UaW1lVXBkYXRlLCB0aGlzLnBsYXlpbmZvKTtcclxuICAgICAgICB0aGlzLnN5bmNTdGF0ZUVtaXQoKTtcclxuICAgIH1cclxuICAgIG9uRXJyb3JIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGF1c2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb21taXQoXCJzZXRSZW5kZXJcIiwge1xyXG4gICAgICAgICAgICBzcmM6IFwiXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBzaW5nZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIGNvdmVySW1nVXJsOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGxheWluZm9cIiwge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICAgICAgZHVyYXRpb25fdmFsdWU6IDAsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBzcmM6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KHphdWRpb0NiTmFtZS5vbkVycm9yKTtcclxuICAgICAgICB0aGlzLnN5bmNTdGF0ZUVtaXQoKTtcclxuICAgICAgICBpZiAodGhpcy5jb250aW51ZVBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VwbGF5KDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5ZCM5q2l5riy5p+T5b2T5YmN54q25oCBICjnlKjkuo7kuI3lkIzpobXpnaJ6YXVkaW/nu4Tku7blkIzmraXmkq3mlL7nirbmgIEpXHJcbiAgICBzeW5jUmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0UmVuZGVyKHRoaXMucGxheUluZGV4KTtcclxuICAgIH1cclxuICAgIC8v5rOo5YaM5LiA5Liq5ZCM5q2l6I635Y+W5bGe5oCn55qE5pa55rOVXHJcbiAgICBzeW5jU3RhdGVPbihhY3Rpb24sIGZuKSB7XHJcbiAgICAgICAgdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgJiYgdGhpcy5vbih6YXVkaW9DYk5hbWUuc3luY1N0YXRlT24sIGFjdGlvbiwgZm4pO1xyXG4gICAgfVxyXG4gICAgLy/ljbjovb3lkIzmraXojrflj5blsZ7mgKfnmoTmlrnms5VcclxuICAgIHN5bmNTdGF0ZU9mZihhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm9mZih6YXVkaW9DYk5hbWUuc3luY1N0YXRlT24sIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICAvL+iuoumYheWQjOatpeiOt+WPluWxnuaAp+S6i+S7tlxyXG4gICAgc3luY1N0YXRlRW1pdCgpIHtcclxuICAgICAgICB0aGlzLmVtaXQoemF1ZGlvQ2JOYW1lLnN5bmNTdGF0ZU9uLCB7XHJcbiAgICAgICAgICAgIHJlbmRlckluZGV4OiB0aGlzLnJlbmRlckluZGV4LFxyXG4gICAgICAgICAgICBhdWRpb2xpc3Q6IHRoaXMuYXVkaW9saXN0LFxyXG4gICAgICAgICAgICByZW5kZXJpbmZvOiB0aGlzLnJlbmRlcmluZm8sXHJcbiAgICAgICAgICAgIHBsYXlpbmZvOiB0aGlzLnBsYXlpbmZvLFxyXG4gICAgICAgICAgICBwYXVzZWQ6IHRoaXMucGF1c2VkLFxyXG4gICAgICAgICAgICBwbGF5SW5kZXg6IHRoaXMucGxheUluZGV4LFxyXG4gICAgICAgICAgICByZW5kZXJJc1BsYXk6IHRoaXMucmVuZGVySXNQbGF5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy/mjIflrprkvY3nva5cclxuICAgIHNlZWsodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvQ3R4LnNlZWsodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGxheWluZm9cIiwge1xyXG4gICAgICAgICAgICBjdXJyZW50OiB1dGlsXzEuZm9ybWF0U2Vjb25kcyh2YWx1ZSksXHJcbiAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgdGhpcy5lbWl0KHphdWRpb0NiTmFtZS5zZWVrLCB0aGlzLnBsYXlpbmZvLmN1cnJlbnQpO1xyXG4gICAgICAgIC8vIH0sIDApO1xyXG4gICAgICAgIHRoaXMuZW1pdCh6YXVkaW9DYk5hbWUuc2VlaywgdGhpcy5wbGF5aW5mby5jdXJyZW50KTtcclxuICAgIH1cclxuICAgIC8v5b+r6L+bLOmAgFxyXG4gICAgc3RlcFBsYXkodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJJc1BsYXkpIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMucGxheWluZm8uY3VycmVudF92YWx1ZSArIHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNlZWsocG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIh+atjFxyXG4gICAgY2hhbmdlcGxheShjb3VudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcklzUGxheSkge1xyXG4gICAgICAgICAgICBsZXQgbm93aW5kZXggPSB0aGlzLnJlbmRlckluZGV4O1xyXG4gICAgICAgICAgICBub3dpbmRleCArPSBjb3VudDtcclxuICAgICAgICAgICAgbm93aW5kZXggPVxyXG4gICAgICAgICAgICAgICAgbm93aW5kZXggPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmF1ZGlvbGlzdC5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgOiBub3dpbmRleCA+IHRoaXMuYXVkaW9saXN0Lmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbm93aW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGF1c2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3BlcmF0ZShub3dpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBhdXNlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm9wZXJhdGUodGhpcy5yZW5kZXJJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/miYvliqjmkq3mlL7miJbmmoLlgZwsIOW5tua4suafk+WvueW6lOeahOaVsOaNrlxyXG4gICAgb3BlcmF0ZShrZXkpIHtcclxuICAgICAgICBrZXkgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmNvbW1pdChcInNldFJlbmRlclwiLCBrZXkpO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uKCk7XHJcbiAgICB9XHJcbiAgICAvL+W8uuWItuaaguWBnOaSreaUvlxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbW1pdChcInNldFVubm9ybWFsUGF1c2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KHphdWRpb0NiTmFtZS5vblN0b3ApO1xyXG4gICAgfVxyXG4gICAgLy/mkq3mlL4s5pqC5YGc5LqL5Lu25Yik5patLFxyXG4gICAgLy/mkq3mlL7mlbDmja7kuI7muLLmn5PmlbDmja7nm7jlkIzml7Y6IOaSreaUvi0+5pqC5YGcLCDmmoLlgZwtPuaSreaUvlxyXG4gICAgLy/mkq3mlL7mlbDmja7kuI7muLLmn5PmlbDmja7kuI3nm7jlkIzml7Y6IOaSreaUvua4suafk+mfs+mikVxyXG4gICAgb3BlcmF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHVyYXRpb24sIGN1cnJlbnQsIGR1cmF0aW9uX3ZhbHVlLCBjdXJyZW50X3ZhbHVlLCBzcmMsIH0gPSB0aGlzLnBsYXlpbmZvO1xyXG4gICAgICAgIGNvbnN0IHsgc3JjOiByZW5kZXJTcmMsIHRpdGxlOiByZW5kZXJUaXRsZSwgc2luZ2VyOiByZW5kZXJTaW5nZXIsIGNvdmVySW1nVXJsOiByZW5kZXJDb3ZlckltZ1VybCwgfSA9IHRoaXMucmVuZGVyaW5mbztcclxuICAgICAgICBsZXQgcmVuZGVySXNQbGF5ID0gdGhpcy5yZW5kZXJJc1BsYXk7XHJcbiAgICAgICAgbGV0IHBhdXNlZCA9IHRoaXMucGF1c2VkO1xyXG4gICAgICAgIGlmICghcmVuZGVySXNQbGF5KSB7XHJcbiAgICAgICAgICAgIC8v5riy5p+T5LiO5pKt5pS+5Zyw5Z2AIOS4jeWQjFxyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnNyYyA9IHJlbmRlclNyYztcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC50aXRsZSA9IHJlbmRlclRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnNpbmdlciA9IHJlbmRlclNpbmdlcjtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5jb3ZlckltZ1VybCA9IHJlbmRlckNvdmVySW1nVXJsIHx8IHRoaXMuZGVmYXVsdENvdmVyO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnN0YXJ0VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KFwic2V0UGF1c2VcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBsYXlpbmZvXCIsIHtcclxuICAgICAgICAgICAgICAgIHNyYzogcmVuZGVyU3JjLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlbmRlclRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc2luZ2VyOiByZW5kZXJTaW5nZXIsXHJcbiAgICAgICAgICAgICAgICBjb3ZlckltZ1VybDogcmVuZGVyQ292ZXJJbWdVcmwsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgLy/muLLmn5PkuI7mkq3mlL7lnLDlnYDnm7jlkIxcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9DdHgucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5zdGFydFRpbWUgPSBjdXJyZW50X3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKGN1cnJlbnRfdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRQYXVzZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBsYXlpbmZvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlbmRlclNyYyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVuZGVyVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2luZ2VyOiByZW5kZXJTaW5nZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJJbWdVcmw6IHJlbmRlckNvdmVySW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdChcInNldFBhdXNlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXQoXCJzZXRVbm5vcm1hbFBhdXNlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/opobnm5bpn7PpopFcclxuICAgIHNldEF1ZGlvKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvbGlzdCA9IFsuLi5kYXRhXTtcclxuICAgICAgICB0aGlzLmVtaXQoemF1ZGlvQ2JOYW1lLnNldEF1ZGlvLCB0aGlzLmF1ZGlvbGlzdCk7XHJcbiAgICAgICAgdGhpcy5zeW5jU3RhdGVFbWl0KCk7XHJcbiAgICB9XHJcbiAgICAvL+a3u+WKoOmfs+mikVxyXG4gICAgdXBkYXRlQXVkaW8oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9saXN0LnB1c2goLi4uZGF0YSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KHphdWRpb0NiTmFtZS51cGRhdGVBdWRpbywgdGhpcy5hdWRpb2xpc3QpO1xyXG4gICAgICAgIHRoaXMuc3luY1N0YXRlRW1pdCgpO1xyXG4gICAgfVxyXG4gICAgLy/orr7nva7lvZPliY3mkq3mlL7kv6Hmga9cclxuICAgIHNldFBsYXlpbmZvKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWluZm8uY3VycmVudCA9IGRhdGEuY3VycmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5aW5mby5kdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmR1cmF0aW9uX3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWluZm8uZHVyYXRpb25fdmFsdWUgPSBkYXRhLmR1cmF0aW9uX3ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5jdXJyZW50X3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWluZm8uY3VycmVudF92YWx1ZSA9IGRhdGEuY3VycmVudF92YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuc3JjKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWluZm8uc3JjID0gZGF0YS5zcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWluZm8udGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5zaW5nZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5aW5mby5zaW5nZXIgPSBkYXRhLnNpbmdlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuY292ZXJJbWdVcmwpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5aW5mby5jb3ZlckltZ1VybCA9IGRhdGEuY292ZXJJbWdVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/orr7nva7mmoLlgZznirbmgIFcclxuICAgIHNldFBhdXNlKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnBhdXNlZCA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICAvL+iuvue9rumAmuivneaXtuaaguWBnOeKtuaAgVxyXG4gICAgc2V0VW5ub3JtYWxQYXVzZShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy51UGF1c2UgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgLy/orr7nva7muLLmn5MgQHBhcmFtIOe0ouW8leaIlua4suafk+S/oeaBr1xyXG4gICAgc2V0UmVuZGVyKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb2xpc3QubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJJbmRleCA9IHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoZGF0YSkgOiBkYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IHRoaXMuYXVkaW9saXN0W3RoaXMucmVuZGVySW5kZXhdLnNyYyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmF1ZGlvbGlzdFt0aGlzLnJlbmRlckluZGV4XS50aXRsZSxcclxuICAgICAgICAgICAgICAgIHNpbmdlcjogdGhpcy5hdWRpb2xpc3RbdGhpcy5yZW5kZXJJbmRleF0uc2luZ2VyLFxyXG4gICAgICAgICAgICAgICAgY292ZXJJbWdVcmw6IHRoaXMuYXVkaW9saXN0W3RoaXMucmVuZGVySW5kZXhdLmNvdmVySW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDogXCIwMDowMFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IFwiMDA6MDBcIixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbl92YWx1ZTogMTAwLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgbGV0IHJlbmRlckluZGV4ID0gdGhpcy5hdWRpb2xpc3QuZmluZEluZGV4KChpKSA9PiBpLnNyYyA9PSBkYXRhLnNyYyk7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckluZGV4ID0gcmVuZGVySW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgZ2V0IHBsYXlJbmRleCgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmF1ZGlvbGlzdC5maW5kSW5kZXgoKGkpID0+IGkuc3JjID09IHRoaXMucGxheWluZm8uc3JjKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggPD0gMCA/IDAgOiBpbmRleDtcclxuICAgIH1cclxuICAgIC8v5riy5p+T5LiO5pKt5pS+5piv5ZCm5LiA6Ie0XHJcbiAgICBnZXQgcmVuZGVySXNQbGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmluZm8uc3JjID09IHRoaXMucGxheWluZm8uc3JjO1xyXG4gICAgfVxyXG4gICAgLy9hcHDnq6/liKTmlq3nlLXor53mnaXnlLXlkI4sIOmfs+mikeaEj+WkluS4reaWreS5i+WQjueahOe7p+e7reaSreaUvlxyXG4gICAgYXBwQ2hlY2tSZXBsYXkoKSB7XHJcbiAgICAgICAgbGV0IF90ID0gdGhpcztcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiYW5kcm9pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgQ29udGV4dCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5Db250ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbGVwaG9ueU1hbmFnZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnRlbGVwaG9ueS5UZWxlcGhvbnlNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbGVwaG9ueU1hbmFnZXIgPSBwbHVzLmFuZHJvaWRcclxuICAgICAgICAgICAgICAgICAgICAucnVudGltZU1haW5BY3Rpdml0eSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldFN5c3RlbVNlcnZpY2UoQ29udGV4dC5URUxFUEhPTllfU0VSVklDRSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVjZWl2ZXIgPSBwbHVzLmFuZHJvaWQuaW1wbGVtZW50cyhcImlvLmRjbG91ZC5hbmRyb2lkLmNvbnRlbnQuQnJvYWRjYXN0UmVjZWl2ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVjZWl2ZTogZnVuY3Rpb24gKGludGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WunueOsG9uUmVjZWl2ZXLlm57osIPlh73mlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKGludGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZWxlcGhvbnlNYW5hZ2VyID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC50ZWxlcGhvbnkuVGVsZXBob255TWFuYWdlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbGVwaG9ueU1hbmFnZXIgPSBwbHVzLmFuZHJvaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ydW50aW1lTWFpbkFjdGl2aXR5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRTeXN0ZW1TZXJ2aWNlKENvbnRleHQuVEVMRVBIT05ZX1NFUlZJQ0UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGhvbmV0eXBlID0gdGVsZXBob255TWFuYWdlci5nZXRDYWxsU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBob25lTnVtYmVyID0gaW50ZW50LmdldFN0cmluZ0V4dHJhKHRlbGVwaG9ueU1hbmFnZXIuRVhUUkFfSU5DT01JTkdfTlVNQkVSKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBob25ldHlwZSA9PSAwICYmICFfdC51UGF1c2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90LmF1ZGlvQ3R4LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBJbnRlbnRGaWx0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLmNvbnRlbnQuSW50ZW50RmlsdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IG5ldyBJbnRlbnRGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlci5hZGRBY3Rpb24odGVsZXBob255TWFuYWdlci5BQ1RJT05fUEhPTkVfU1RBVEVfQ0hBTkdFRCk7IC8v55uR5ZCs5byA5YWzXHJcbiAgICAgICAgICAgICAgICBtYWluLnJlZ2lzdGVyUmVjZWl2ZXIocmVjZWl2ZXIsIGZpbHRlcik7IC8v5rOo5YaM55uR5ZCsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBDVENhbGwgPSBwbHVzLmlvcy5pbXBvcnRDbGFzcyhcIkNUQ2FsbFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBDVENhbGxDZW50ZXIgPSBwbHVzLmlvcy5pbXBvcnRDbGFzcyhcIkNUQ2FsbENlbnRlclwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBjZW50ZXIgPSBuZXcgQ1RDYWxsQ2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnNldENhbGxFdmVudHIoZnVuY3Rpb24gKGN0Q2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxzdGF0dXMgPSAhY2FsbHN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGxzdGF0dXMgJiYgIV90LnVQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdC5hdWRpb0N0eC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdC5hdWRpb0N0eC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBaQXVkaW87XHJcblpBdWRpby52ZXJzaW9uID0gXCIyLjIuMFwiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!***************************************************************************!*\
  !*** E:/work/uniapp-zaudio-example/components/uniapp-zaudio/dist/util.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.EventBus = exports.throttle = exports.formatSeconds = void 0;\nfunction formatSeconds(seconds) {\n  var result = typeof seconds === \"string\" ? parseFloat(seconds) : seconds;\n  if (isNaN(result))\n  return \"\";\n  var h = Math.floor(result / 3600) < 10 ?\n  \"0\" + Math.floor(result / 3600) :\n  Math.floor(result / 3600);\n  var m = Math.floor(result / 60 % 60) < 10 ?\n  \"0\" + Math.floor(result / 60 % 60) :\n  Math.floor(result / 60 % 60) + h * 60;\n  var s = Math.floor(result % 60) < 10 ?\n  \"0\" + Math.floor(result % 60) :\n  Math.floor(result % 60);\n  return \"\".concat(m, \":\").concat(s);\n}\nexports.formatSeconds = formatSeconds;\nfunction throttle(fn, wait) {\n  var previous = 0;\n  return function () {\n    var context = this;\n    var now = Date.now();\n    //每隔一段时间执行一次；\n    if (now - previous > wait) {for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {arg[_key] = arguments[_key];}\n      fn.apply(context, arg);\n      previous = now;\n    }\n  };\n}\nexports.throttle = throttle;var\nEventBus = /*#__PURE__*/function () {\n  function EventBus() {_classCallCheck(this, EventBus);\n    this._events = new Map();\n  }_createClass(EventBus, [{ key: \"on\", value: function on(\n    event, action, fn) {\n      if (event !== undefined && action !== undefined) {\n        var arr = this._events.get(event);\n        var hasAction = arr ?\n        arr.findIndex(function (i) {return i.action == action;}) :\n        -1;\n        if (hasAction > -1) {\n          return;\n        }\n        this._events.set(event, [].concat(_toConsumableArray(\n        this._events.get(event) || []), [\n        {\n          action: action,\n          fn: fn }]));\n\n\n      }\n    } }, { key: \"has\", value: function has(\n    event) {\n      return this._events.has(event);\n    } }, { key: \"emit\", value: function emit(\n    event, data) {\n      if (!this.has(event)) {\n        return;\n      }\n      var arr = this._events.get(event);\n      arr.forEach(function (i) {\n        i.fn(data);\n      });\n    } }, { key: \"off\", value: function off(\n    event, action) {\n      if (!this.has(event)) {\n        return;\n      }\n      var arr = this._events.get(event);\n      var newdata = arr.filter(function (i) {return i.action !== action;});\n      this._events.set(event, _toConsumableArray(newdata));\n    } }]);return EventBus;}();\n\nexports.EventBus = EventBus;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmlhcHAtemF1ZGlvL2Rpc3QvdXRpbC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkV2ZW50QnVzIiwidGhyb3R0bGUiLCJmb3JtYXRTZWNvbmRzIiwic2Vjb25kcyIsInJlc3VsdCIsInBhcnNlRmxvYXQiLCJpc05hTiIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyIsImZuIiwid2FpdCIsInByZXZpb3VzIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcmciLCJhcHBseSIsIl9ldmVudHMiLCJNYXAiLCJldmVudCIsImFjdGlvbiIsInVuZGVmaW5lZCIsImFyciIsImdldCIsImhhc0FjdGlvbiIsImZpbmRJbmRleCIsImkiLCJzZXQiLCJoYXMiLCJkYXRhIiwiZm9yRWFjaCIsIm5ld2RhdGEiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7QUFDQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxLQUFLLEVBQUUsSUFBVCxFQUE3QztBQUNBRCxPQUFPLENBQUNFLFFBQVIsR0FBbUJGLE9BQU8sQ0FBQ0csUUFBUixHQUFtQkgsT0FBTyxDQUFDSSxhQUFSLEdBQXdCLEtBQUssQ0FBbkU7QUFDQSxTQUFTQSxhQUFULENBQXVCQyxPQUF2QixFQUFnQztBQUM1QixNQUFJQyxNQUFNLEdBQUcsT0FBT0QsT0FBUCxLQUFtQixRQUFuQixHQUE4QkUsVUFBVSxDQUFDRixPQUFELENBQXhDLEdBQW9EQSxPQUFqRTtBQUNBLE1BQUlHLEtBQUssQ0FBQ0YsTUFBRCxDQUFUO0FBQ0ksU0FBTyxFQUFQO0FBQ0osTUFBSUcsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBTSxHQUFHLElBQXBCLElBQTRCLEVBQTVCO0FBQ0YsUUFBTUksSUFBSSxDQUFDQyxLQUFMLENBQVdMLE1BQU0sR0FBRyxJQUFwQixDQURK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QXNCO0FBQ2xCO0FBQ0g7QUFDRCxVQUFJRyxHQUFHLEdBQUcsS0FBS0wsT0FBTCxDQUFhTSxHQUFiLENBQWlCSixLQUFqQixDQUFWO0FBQ0EsVUFBSVksT0FBTyxHQUFHVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxVQUFDTixDQUFELFVBQU9BLENBQUMsQ0FBQ04sTUFBRixLQUFhQSxNQUFwQixFQUFYLENBQWQ7QUFDQSxXQUFLSCxPQUFMLENBQWFVLEdBQWIsQ0FBaUJSLEtBQWpCLHFCQUE0QlksT0FBNUI7QUFDSCxLOztBQUVMcEMsT0FBTyxDQUFDRSxRQUFSLEdBQW1CQSxRQUFuQiIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRXZlbnRCdXMgPSBleHBvcnRzLnRocm90dGxlID0gZXhwb3J0cy5mb3JtYXRTZWNvbmRzID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBmb3JtYXRTZWNvbmRzKHNlY29uZHMpIHtcclxuICAgIHZhciByZXN1bHQgPSB0eXBlb2Ygc2Vjb25kcyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlRmxvYXQoc2Vjb25kcykgOiBzZWNvbmRzO1xyXG4gICAgaWYgKGlzTmFOKHJlc3VsdCkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBsZXQgaCA9IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCkgPCAxMFxyXG4gICAgICAgID8gXCIwXCIgKyBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApXHJcbiAgICAgICAgOiBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApO1xyXG4gICAgbGV0IG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCkgJSA2MCkgPCAxMFxyXG4gICAgICAgID8gXCIwXCIgKyBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCkgJSA2MClcclxuICAgICAgICA6IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwKSAlIDYwKSArIGggKiA2MDtcclxuICAgIGxldCBzID0gTWF0aC5mbG9vcihyZXN1bHQgJSA2MCkgPCAxMFxyXG4gICAgICAgID8gXCIwXCIgKyBNYXRoLmZsb29yKHJlc3VsdCAlIDYwKVxyXG4gICAgICAgIDogTWF0aC5mbG9vcihyZXN1bHQgJSA2MCk7XHJcbiAgICByZXR1cm4gYCR7bX06JHtzfWA7XHJcbn1cclxuZXhwb3J0cy5mb3JtYXRTZWNvbmRzID0gZm9ybWF0U2Vjb25kcztcclxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcclxuICAgIGxldCBwcmV2aW91cyA9IDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZykge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcclxuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAvL+avj+malOS4gOauteaXtumXtOaJp+ihjOS4gOasoe+8m1xyXG4gICAgICAgIGlmIChub3cgLSBwcmV2aW91cyA+IHdhaXQpIHtcclxuICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJnKTtcclxuICAgICAgICAgICAgcHJldmlvdXMgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRocm90dGxlID0gdGhyb3R0bGU7XHJcbmNsYXNzIEV2ZW50QnVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIG9uKGV2ZW50LCBhY3Rpb24sIGZuKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuX2V2ZW50cy5nZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICBsZXQgaGFzQWN0aW9uID0gYXJyXHJcbiAgICAgICAgICAgICAgICA/IGFyci5maW5kSW5kZXgoKGkpID0+IGkuYWN0aW9uID09IGFjdGlvbilcclxuICAgICAgICAgICAgICAgIDogLTE7XHJcbiAgICAgICAgICAgIGlmIChoYXNBY3Rpb24gPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5zZXQoZXZlbnQsIFtcclxuICAgICAgICAgICAgICAgIC4uLih0aGlzLl9ldmVudHMuZ2V0KGV2ZW50KSB8fCBbXSksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGZuLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFzKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5oYXMoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgZW1pdChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXMoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuX2V2ZW50cy5nZXQoZXZlbnQpO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgICAgIGkuZm4oZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvZmYoZXZlbnQsIGFjdGlvbikge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXMoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuX2V2ZW50cy5nZXQoZXZlbnQpO1xyXG4gICAgICAgIGxldCBuZXdkYXRhID0gYXJyLmZpbHRlcigoaSkgPT4gaS5hY3Rpb24gIT09IGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLnNldChldmVudCwgWy4uLm5ld2RhdGFdKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkV2ZW50QnVzID0gRXZlbnRCdXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ })
],[[0,"app-config"]]]);