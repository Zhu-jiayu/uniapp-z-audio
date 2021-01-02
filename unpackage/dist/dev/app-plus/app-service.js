(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/main.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {__webpack_require__(/*! uni-pages */ 2);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 27));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 28));\n\n\n\n\n\n\nvar _zAudio = __webpack_require__(/*! @/components/z-audio */ 31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.config.productionTip = false;_App.default.mpType = 'app';\n\n\n\n// npm引用方式\n// import { ZAudio } from 'uniapp-zaudio'\n\n\nvar zaudio = new _zAudio.ZAudio({\n  continuePlay: true, //续播\n  autoPlay: true, //自动播放 部分浏览器不支持\n\n  onError: function onError() {\n    uni.showToast({\n      title: '音频播放错误',\n      duration: 1500,\n      mask: false,\n      icon: 'none',\n      position: 'center' });\n\n  },\n  onCanplay: function onCanplay() {//点击开始触发\n    __f__(\"log\", 'onCanplay-------', \" at main.js:31\");\n  },\n\n  onPlaying: function onPlaying(playinfo) {//播放中\n    // console.log('onPlaying---------', playinfo)\n  },\n\n  onPause: function onPause() {//暂停\n    __f__(\"log\", 'onPause---------', \" at main.js:39\");\n  },\n  onEnded: function onEnded() {//结束\n    __f__(\"log\", 'onEnded---------', \" at main.js:42\");\n  } });\n\n\n_vue.default.prototype.$zaudio = zaudio;\n\n\n//模拟初始数据\nvar data = [{\n  src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3',\n  title: '恭喜发财',\n  singer: '刘德华',\n  coverImgUrl: 'https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg' },\n\n{\n  src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',\n  title: '好运来',\n  singer: '作者1111',\n  coverImgUrl: 'https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg' }];\n\n\n\nzaudio.setAudio(data);\n\n\n\n\n\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiemF1ZGlvIiwiWkF1ZGlvIiwiY29udGludWVQbGF5IiwiYXV0b1BsYXkiLCJvbkVycm9yIiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJkdXJhdGlvbiIsIm1hc2siLCJpY29uIiwicG9zaXRpb24iLCJvbkNhbnBsYXkiLCJvblBsYXlpbmciLCJwbGF5aW5mbyIsIm9uUGF1c2UiLCJvbkVuZGVkIiwicHJvdG90eXBlIiwiJHphdWRpbyIsImRhdGEiLCJzcmMiLCJzaW5nZXIiLCJjb3ZlckltZ1VybCIsInNldEF1ZGlvIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiNkNBQUEsd0NBQW1CO0FBQ25COzs7Ozs7O0FBT0Esa0Usd25DQUpBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0IsQ0FFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7Ozs7QUFNQTtBQUNBOzs7QUFHQSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsY0FBSixDQUFXO0FBQ3ZCQyxjQUFZLEVBQUUsSUFEUyxFQUNIO0FBQ3BCQyxVQUFRLEVBQUUsSUFGYSxFQUVQOztBQUVoQkMsU0FKdUIscUJBSWI7QUFDVEMsT0FBRyxDQUFDQyxTQUFKLENBQWM7QUFDYkMsV0FBSyxFQUFFLFFBRE07QUFFYkMsY0FBUSxFQUFFLElBRkc7QUFHYkMsVUFBSSxFQUFFLEtBSE87QUFJYkMsVUFBSSxFQUFFLE1BSk87QUFLYkMsY0FBUSxFQUFFLFFBTEcsRUFBZDs7QUFPQSxHQVpzQjtBQWF2QkMsV0FidUIsdUJBYVgsQ0FBRTtBQUNiLGlCQUFZLGtCQUFaO0FBQ0EsR0Fmc0I7O0FBaUJ2QkMsV0FqQnVCLHFCQWlCYkMsUUFqQmEsRUFpQkgsQ0FBRTtBQUNyQjtBQUNBLEdBbkJzQjs7QUFxQnZCQyxTQXJCdUIscUJBcUJiLENBQUU7QUFDWCxpQkFBWSxrQkFBWjtBQUNBLEdBdkJzQjtBQXdCdkJDLFNBeEJ1QixxQkF3QmIsQ0FBRTtBQUNYLGlCQUFZLGtCQUFaO0FBQ0EsR0ExQnNCLEVBQVgsQ0FBYjs7O0FBNkJBckIsYUFBSXNCLFNBQUosQ0FBY0MsT0FBZCxHQUF3QmxCLE1BQXhCOzs7QUFHQTtBQUNBLElBQUltQixJQUFJLEdBQUcsQ0FBQztBQUNWQyxLQUFHLEVBQUUsK0ZBREs7QUFFVmIsT0FBSyxFQUFFLE1BRkc7QUFHVmMsUUFBTSxFQUFFLEtBSEU7QUFJVkMsYUFBVyxFQUFFLG1GQUpILEVBQUQ7O0FBTVY7QUFDQ0YsS0FBRyxFQUFFLGlHQUROO0FBRUNiLE9BQUssRUFBRSxLQUZSO0FBR0NjLFFBQU0sRUFBRSxRQUhUO0FBSUNDLGFBQVcsRUFBRSxvRkFKZCxFQU5VLENBQVg7Ozs7QUFjQXRCLE1BQU0sQ0FBQ3VCLFFBQVAsQ0FBZ0JKLElBQWhCOzs7Ozs7O0FBT0EsSUFBTUssR0FBRyxHQUFHLElBQUk3QixZQUFKO0FBQ1JHLFlBRFEsRUFBWjs7QUFHQTBCLEdBQUcsQ0FBQ0MsTUFBSixHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuaW1wb3J0IHtcclxuXHRaQXVkaW9cclxufSBmcm9tICdAL2NvbXBvbmVudHMvei1hdWRpbydcclxuXHJcbi8vIG5wbeW8leeUqOaWueW8j1xyXG4vLyBpbXBvcnQgeyBaQXVkaW8gfSBmcm9tICd1bmlhcHAtemF1ZGlvJ1xyXG5cclxuXHJcbmxldCB6YXVkaW8gPSBuZXcgWkF1ZGlvKHtcclxuXHRjb250aW51ZVBsYXk6IHRydWUsIC8v57ut5pKtXHJcblx0YXV0b1BsYXk6IHRydWUsIC8v6Ieq5Yqo5pKt5pS+IOmDqOWIhua1j+iniOWZqOS4jeaUr+aMgVxyXG5cclxuXHRvbkVycm9yKCkge1xyXG5cdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdHRpdGxlOiAn6Z+z6aKR5pKt5pS+6ZSZ6K+vJyxcclxuXHRcdFx0ZHVyYXRpb246IDE1MDAsXHJcblx0XHRcdG1hc2s6IGZhbHNlLFxyXG5cdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJ1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdG9uQ2FucGxheSgpIHsgLy/ngrnlh7vlvIDlp4vop6blj5FcclxuXHRcdGNvbnNvbGUubG9nKCdvbkNhbnBsYXktLS0tLS0tJylcclxuXHR9LFxyXG5cclxuXHRvblBsYXlpbmcocGxheWluZm8pIHsgLy/mkq3mlL7kuK1cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdvblBsYXlpbmctLS0tLS0tLS0nLCBwbGF5aW5mbylcclxuXHR9LFxyXG5cclxuXHRvblBhdXNlKCkgeyAvL+aaguWBnFxyXG5cdFx0Y29uc29sZS5sb2coJ29uUGF1c2UtLS0tLS0tLS0nKVxyXG5cdH0sXHJcblx0b25FbmRlZCgpIHsgLy/nu5PmnZ9cclxuXHRcdGNvbnNvbGUubG9nKCdvbkVuZGVkLS0tLS0tLS0tJylcclxuXHR9XHJcbn0pXHJcbiBcclxuVnVlLnByb3RvdHlwZS4kemF1ZGlvID0gemF1ZGlvXHJcblxyXG5cclxuLy/mqKHmi5/liJ3lp4vmlbDmja5cclxudmFyIGRhdGEgPSBbe1xyXG5cdFx0c3JjOiAnaHR0cHM6Ly85Ni5mLjF0aW5nLmNvbS9sb2NhbF90b19jdWJlXzIwMjAwNDEyMTgxMy85NmttcDMvenp6enptcDMvMjAxNmFKYW4vMThYLzE4ZF9EZUgvMDEubXAzJyxcclxuXHRcdHRpdGxlOiAn5oGt5Zac5Y+R6LSiJyxcclxuXHRcdHNpbmdlcjogJ+WImOW+t+WNjicsXHJcblx0XHRjb3ZlckltZ1VybDogJ2h0dHBzOi8vaW1nLjF0aW5nLmNvbS9pbWFnZXMvc3BlY2lhbC83NS9zMTUwX2Y4NGVmNTA4MmIwNDIwZjc0Y2QyNTQ2Yjk4NmFiMGZjLmpwZydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNyYzogJ2h0dHBzOi8vOTYuZi4xdGluZy5jb20vbG9jYWxfdG9fY3ViZV8yMDIwMDQxMjE4MTMvOTZrbXAzL3p6enp6bXAzLzIwMTVrTm92LzI1WC8yNW1fWGlhb1EvMDMubXAzJyxcclxuXHRcdHRpdGxlOiAn5aW96L+Q5p2lJyxcclxuXHRcdHNpbmdlcjogJ+S9nOiAhTExMTEnLFxyXG5cdFx0Y292ZXJJbWdVcmw6ICdodHRwczovL2ltZy4xdGluZy5jb20vaW1hZ2VzL3NwZWNpYWwvMjA0L3MxNTBfNzcyNTRjZDRhNGRhMWEzM2I4ZmFmODljNGNiZjZlNDAuanBnJ1xyXG5cdH1cclxuXTtcclxuXHJcbnphdWRpby5zZXRBdWRpbyhkYXRhKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcblx0Li4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
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
/* 2 */
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
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 3).default);});
__definePage('pages/detail/index', function () {return Vue.extend(__webpack_require__(/*! pages/detail/index.vue?mpType=page */ 22).default);});

/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29OO0FBQ3BOLGdCQUFnQiwyTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJlODRhM2NcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 5 */
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
      _c("zaudio", { attrs: { theme: "theme3", _i: 1 } }),
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
/* 6 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Downloads/HBuilderX.2.7.7.20200522-alpha.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony import */ var _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_2_7_7_20200522_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd2QixDQUFnQiw4dkJBQUcsRUFBQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjcuNy4yMDIwMDUyMi1hbHBoYS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi43LjcuMjAyMDA1MjItYWxwaGEuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNy43LjIwMjAwNTIyLWFscGhhLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/16112/Documents/HBuilderProjects/zaudio/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _zAudio = _interopRequireDefault(__webpack_require__(/*! @/components/z-audio/z-audio */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}\n// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue'\nvar _default = {\n  data: function data() {\n    return {\n      audiolist: this.$zaudio.audiolist, //当前音频列表\n      playIndex: this.$zaudio.playIndex, //当前播放的索引\n      paused: this.$zaudio.paused, //当前是否暂停\n      playinfo: this.$zaudio.playinfo //当前播放的信息\n    };\n  },\n  components: { zaudio: _zAudio.default },\n\n  onLoad: function onLoad() {\n\n    this.getListData();\n  },\n  onShow: function onShow() {\n    //进入其他页面, zaudio组件渲染了其他数据\n    //每次页面onshow时同步zaudio组件当前的播放状态\n    this.$zaudio.syncRender();\n  },\n\n  methods: {\n\n    play: function play(key) {\n      //播放或暂停\n      this.$zaudio.operate(key);\n    },\n\n    go: function go(key) {\n      uni.navigateTo({\n        url: '/pages/detail/index?key=' + key });\n\n    },\n    reset: function reset() {\n      var data = [\n      {\n        src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/21/21a_zj/01.mp3',\n        title: '二人转',\n        singer: '作者333',\n        coverImgUrl: 'https://img.1ting.com/images/special/374/s300_2f06b17427718e01e54be1cfe462f3e0.jpg' }];\n\n\n      this.$zaudio.setAudio(data);\n    },\n    add: function add() {\n      var data = [\n      {\n        src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/jn/12.jlhg/8.zhg/2.mp3',\n        title: '天边',\n        singer: '作者222',\n        coverImgUrl: 'https://img.1ting.com/images/special/377/s300_4631dc844ab6429b6bc6fe4ccdc6ed6f.jpg' }];\n\n\n      this.$zaudio.updateAudio(data);\n    },\n\n    willStop: function willStop() {var _this = this;\n      this.$zaudio.on('playing', 'recharge', function (info) {\n        if (info.current_value > 5) {\n          _this.$zaudio.stop();\n\n          uni.showModal({\n            title: '打钱后才可以听',\n            content: '打钱后才可以听',\n            success: function success(res) {\n              if (res.confirm) {\n                __f__(\"log\", '用户点击确定', \" at pages/index/index.vue:96\");\n              } else if (res.cancel) {\n                __f__(\"log\", '用户点击取消', \" at pages/index/index.vue:98\");\n              }\n            } });\n\n        }\n      });\n\n    },\n\n    removeStop: function removeStop() {\n      this.$zaudio.off('playing', 'recharge');\n      this.$zaudio.operate();\n    },\n\n    logPlaying: function logPlaying(action) {\n      // 一个回调事件可以注册多次业务, action用于区分相同回调事件的不同业务\n      //例: playing回调时注册 打印事件\n      this.$zaudio.on('playing', action, function (info) {\n        __f__(\"log\", '播放中----' + action, info, \" at pages/index/index.vue:116\");\n      });\n    },\n    offPlaying: function offPlaying(action) {\n      //注意解除事件action必须与注册事件的action相同\n      this.$zaudio.off('playing', action);\n    },\n    stepPlay: function stepPlay(val) {\n      this.$zaudio.stepPlay(val);\n    },\n\n    //--------------获取音频列表的播放状态和列表数据\n    getListData: function getListData() {var _this2 = this;\n      var action = 'getAudioListState';\n\n      //设置音频回调\n      this.$zaudio.on('setAudio', action, function (list) {\n        _this2.audiolist = _toConsumableArray(list);\n      });\n      //更新音频回调\n      this.$zaudio.on('updateAudio', action, function (list) {\n        _this2.audiolist = _toConsumableArray(list);\n      });\n      //开始播放回调\n      this.$zaudio.on('canPlay', action, function (data) {\n        _this2.playinfo = data;\n        _this2.renderIsPlay = _this2.$zaudio.renderIsPlay;\n        _this2.audio = _this2.$zaudio.renderinfo;\n        _this2.paused = _this2.$zaudio.paused;\n      });\n      //播放中回调\n      this.$zaudio.on('playing', action, function (data) {\n        _this2.playinfo = data;\n      });\n      //播放暂停回调\n      this.$zaudio.on('pause', action, function () {\n        _this2.paused = _this2.$zaudio.paused;\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxpRztBQUNBO2VBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSx1Q0FEQSxFQUNBO0FBQ0EsdUNBRkEsRUFFQTtBQUNBLGlDQUhBLEVBR0E7QUFDQSxxQ0FKQSxDQUlBO0FBSkE7QUFNQSxHQVJBO0FBU0EseUNBVEE7O0FBV0EsUUFYQSxvQkFXQTs7QUFFQTtBQUNBLEdBZEE7QUFlQSxRQWZBLG9CQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FuQkE7O0FBcUJBOztBQUVBLFFBRkEsZ0JBRUEsR0FGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7O0FBT0EsTUFQQSxjQU9BLEdBUEEsRUFPQTtBQUNBO0FBQ0EsNkNBREE7O0FBR0EsS0FYQTtBQVlBLFNBWkEsbUJBWUE7QUFDQTtBQUNBO0FBQ0EsZ0dBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBO0FBSUEseUdBSkEsRUFEQTs7O0FBUUE7QUFDQSxLQXRCQTtBQXVCQSxPQXZCQSxpQkF1QkE7QUFDQTtBQUNBO0FBQ0EsOEZBREE7QUFFQSxtQkFGQTtBQUdBLHVCQUhBO0FBSUEseUdBSkEsRUFEQTs7O0FBUUE7QUFDQSxLQWpDQTs7QUFtQ0EsWUFuQ0Esc0JBbUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBREE7QUFFQSw4QkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLGVBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxhQVRBOztBQVdBO0FBQ0EsT0FoQkE7O0FBa0JBLEtBdERBOztBQXdEQSxjQXhEQSx3QkF3REE7QUFDQTtBQUNBO0FBQ0EsS0EzREE7O0FBNkRBLGNBN0RBLHNCQTZEQSxNQTdEQSxFQTZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBbkVBO0FBb0VBLGNBcEVBLHNCQW9FQSxNQXBFQSxFQW9FQTtBQUNBO0FBQ0E7QUFDQSxLQXZFQTtBQXdFQSxZQXhFQSxvQkF3RUEsR0F4RUEsRUF3RUE7QUFDQTtBQUNBLEtBMUVBOztBQTRFQTtBQUNBLGVBN0VBLHlCQTZFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0F2R0EsRUFyQkEsRSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PHphdWRpbyB0aGVtZT1cInRoZW1lM1wiPjwvemF1ZGlvPlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwibGlzdGJveFwiPlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cInBhZGRpbmc6MTBweFwiPumfs+mikeWIl+ihqDo8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGksIGspIGluIGF1ZGlvbGlzdFwiIDprZXk9XCJrXCIgY2xhc3M9XCJsaXN0XCI+XHJcblx0XHRcdFx0e3sgaS50aXRsZSB9fVxyXG5cdFx0XHRcdDxidXR0b24gc2l6ZT1cIm1pbmlcIiBAY2xpY2s9XCJnbyhrKVwiPuafpeeci+ivpuaDhTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gc2l6ZT1cIm1pbmlcIiBAY2xpY2s9XCJwbGF5KGspXCI+e3sgIXBhdXNlZCAmJiBpLnNyYyA9PT0gcGxheWluZm8uc3JjID8gJ+aaguWBnCcgOiAn5pKt5pS+JyB9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImRlbW9cIj5cclxuXHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJyZXNldFwiIHNpemU9XCJtaW5pXCI+6KaG55uW6Z+z6aKRPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwiYWRkXCIgc2l6ZT1cIm1pbmlcIj7mt7vliqDpn7PpopE8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJ3aWxsU3RvcFwiIHNpemU9XCJtaW5pXCI+5rOo5YaMNeenkuWQjuaaguWBnOS6i+S7tjwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIEBjbGljaz1cInJlbW92ZVN0b3BcIiBzaXplPVwibWluaVwiPuWNuOi9vTXnp5LlkI7mmoLlgZzkuovku7Y8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJsb2dQbGF5aW5nKCdsb2cnKVwiIHNpemU9XCJtaW5pXCI+5rOo5YaM5pKt5pS+5pe25omT5Y2w5LqL5Lu2PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwib2ZmUGxheWluZygnbG9nJylcIiBzaXplPVwibWluaVwiPuWNuOi9veaSreaUvuaXtuaJk+WNsOS6i+S7tjwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIEBjbGljaz1cInN0ZXBQbGF5KDIwKVwiIHNpemU9XCJtaW5pXCI+5b+r6L+bMjBzPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwic3RlcFBsYXkoLTIwKVwiIHNpemU9XCJtaW5pXCI+5b+r6YCAMjBzPC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgemF1ZGlvIGZyb20gJ0AvY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8nO1xyXG4vLyBpbXBvcnQgemF1ZGlvIGZyb20gJ3VuaWFwcC16YXVkaW8vY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8udnVlJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGF1ZGlvbGlzdDogdGhpcy4kemF1ZGlvLmF1ZGlvbGlzdCwgLy/lvZPliY3pn7PpopHliJfooahcclxuXHRcdFx0cGxheUluZGV4OiB0aGlzLiR6YXVkaW8ucGxheUluZGV4LCAvL+W9k+WJjeaSreaUvueahOe0ouW8lVxyXG5cdFx0XHRwYXVzZWQ6IHRoaXMuJHphdWRpby5wYXVzZWQsIC8v5b2T5YmN5piv5ZCm5pqC5YGcXHJcblx0XHRcdHBsYXlpbmZvOiB0aGlzLiR6YXVkaW8ucGxheWluZm8gLy/lvZPliY3mkq3mlL7nmoTkv6Hmga9cclxuXHRcdH07XHJcblx0fSxcclxuXHRjb21wb25lbnRzOiB7IHphdWRpbzogemF1ZGlvIH0sXHJcblxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdFxyXG5cdFx0dGhpcy5nZXRMaXN0RGF0YSgpXHJcblx0fSxcclxuXHRvblNob3coKSB7XHJcblx0XHQvL+i/m+WFpeWFtuS7lumhtemdoiwgemF1ZGlv57uE5Lu25riy5p+T5LqG5YW25LuW5pWw5o2uXHJcblx0XHQvL+avj+asoemhtemdom9uc2hvd+aXtuWQjOatpXphdWRpb+e7hOS7tuW9k+WJjeeahOaSreaUvueKtuaAgVxyXG5cdFx0dGhpcy4kemF1ZGlvLnN5bmNSZW5kZXIoKTtcclxuXHR9LFxyXG5cclxuXHRtZXRob2RzOiB7XHJcblx0XHRcclxuXHRcdHBsYXkoa2V5KSB7XHJcblx0XHRcdC8v5pKt5pS+5oiW5pqC5YGcXHJcblx0XHRcdHRoaXMuJHphdWRpby5vcGVyYXRlKGtleSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdvKGtleSkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9pbmRleD9rZXk9JyArIGtleVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRyZXNldCgpIHtcclxuXHRcdFx0bGV0IGRhdGEgPSBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiAnaHR0cHM6Ly85Ni5mLjF0aW5nLmNvbS9sb2NhbF90b19jdWJlXzIwMjAwNDEyMTgxMy85NmttcDMvMjAyMC8wOC8yMS8yMWFfemovMDEubXAzJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5LqM5Lq66L2sJyxcclxuXHRcdFx0XHRcdHNpbmdlcjogJ+S9nOiAhTMzMycsXHJcblx0XHRcdFx0XHRjb3ZlckltZ1VybDogJ2h0dHBzOi8vaW1nLjF0aW5nLmNvbS9pbWFnZXMvc3BlY2lhbC8zNzQvczMwMF8yZjA2YjE3NDI3NzE4ZTAxZTU0YmUxY2ZlNDYyZjNlMC5qcGcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8uc2V0QXVkaW8oZGF0YSk7XHJcblx0XHR9LFxyXG5cdFx0YWRkKCkge1xyXG5cdFx0XHRsZXQgZGF0YSA9IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICdodHRwczovLzk2LmYuMXRpbmcuY29tL2xvY2FsX3RvX2N1YmVfMjAyMDA0MTIxODEzLzk2a21wMy9qbi8xMi5qbGhnLzguemhnLzIubXAzJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5aSp6L65JyxcclxuXHRcdFx0XHRcdHNpbmdlcjogJ+S9nOiAhTIyMicsXHJcblx0XHRcdFx0XHRjb3ZlckltZ1VybDogJ2h0dHBzOi8vaW1nLjF0aW5nLmNvbS9pbWFnZXMvc3BlY2lhbC8zNzcvczMwMF80NjMxZGM4NDRhYjY0MjliNmJjNmZlNGNjZGM2ZWQ2Zi5qcGcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8udXBkYXRlQXVkaW8oZGF0YSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHdpbGxTdG9wKCkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub24oJ3BsYXlpbmcnLCAncmVjaGFyZ2UnLCBpbmZvID0+IHtcclxuXHRcdFx0XHRpZiAoaW5mby5jdXJyZW50X3ZhbHVlID4gNSkge1xyXG5cdFx0XHRcdFx0dGhpcy4kemF1ZGlvLnN0b3AoKTtcclxuXHJcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmiZPpkrHlkI7miY3lj6/ku6XlkKwnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5omT6ZKx5ZCO5omN5Y+v5Lul5ZCsJyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZW1vdmVTdG9wKCkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub2ZmKCdwbGF5aW5nJywgJ3JlY2hhcmdlJylcclxuXHRcdFx0dGhpcy4kemF1ZGlvLm9wZXJhdGUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bG9nUGxheWluZyhhY3Rpb24pe1xyXG5cdFx0XHQvLyDkuIDkuKrlm57osIPkuovku7blj6/ku6Xms6jlhozlpJrmrKHkuJrliqEsIGFjdGlvbueUqOS6juWMuuWIhuebuOWQjOWbnuiwg+S6i+S7tueahOS4jeWQjOS4muWKoVxyXG5cdFx0XHQvL+S+izogcGxheWluZ+Wbnuiwg+aXtuazqOWGjCDmiZPljbDkuovku7ZcclxuXHRcdFx0dGhpcy4kemF1ZGlvLm9uKCdwbGF5aW5nJywgYWN0aW9uLCBpbmZvID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5pKt5pS+5LitLS0tLScgKyBhY3Rpb24sIGluZm8pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvZmZQbGF5aW5nKGFjdGlvbikge1xyXG5cdFx0XHQvL+azqOaEj+ino+mZpOS6i+S7tmFjdGlvbuW/hemhu+S4juazqOWGjOS6i+S7tueahGFjdGlvbuebuOWQjFxyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub2ZmKCdwbGF5aW5nJywgYWN0aW9uKTtcclxuXHRcdH0sXHJcblx0XHRzdGVwUGxheSh2YWwpe1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8uc3RlcFBsYXkodmFsKVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLeiOt+WPlumfs+mikeWIl+ihqOeahOaSreaUvueKtuaAgeWSjOWIl+ihqOaVsOaNrlxyXG5cdFx0Z2V0TGlzdERhdGEoKXtcclxuXHRcdFx0bGV0IGFjdGlvbiA9ICdnZXRBdWRpb0xpc3RTdGF0ZSc7XHJcblx0XHRcdFxyXG5cdFx0XHQvL+iuvue9rumfs+mikeWbnuiwg1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub24oJ3NldEF1ZGlvJywgYWN0aW9uLCBsaXN0ID0+IHtcclxuXHRcdFx0XHR0aGlzLmF1ZGlvbGlzdCA9IFsuLi5saXN0XTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8v5pu05paw6Z+z6aKR5Zue6LCDXHJcblx0XHRcdHRoaXMuJHphdWRpby5vbigndXBkYXRlQXVkaW8nLCBhY3Rpb24sIGxpc3QgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYXVkaW9saXN0ID0gWy4uLmxpc3RdO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly/lvIDlp4vmkq3mlL7lm57osINcclxuXHRcdFx0dGhpcy4kemF1ZGlvLm9uKCdjYW5QbGF5JywgYWN0aW9uLCBkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXlpbmZvID0gZGF0YTtcclxuXHRcdFx0XHR0aGlzLnJlbmRlcklzUGxheSA9IHRoaXMuJHphdWRpby5yZW5kZXJJc1BsYXk7XHJcblx0XHRcdFx0dGhpcy5hdWRpbyA9IHRoaXMuJHphdWRpby5yZW5kZXJpbmZvO1xyXG5cdFx0XHRcdHRoaXMucGF1c2VkID0gdGhpcy4kemF1ZGlvLnBhdXNlZDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8v5pKt5pS+5Lit5Zue6LCDXHJcblx0XHRcdHRoaXMuJHphdWRpby5vbigncGxheWluZycsIGFjdGlvbiwgZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5aW5mbyA9IGRhdGE7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvL+aSreaUvuaaguWBnOWbnuiwg1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub24oJ3BhdXNlJywgYWN0aW9uLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wYXVzZWQgPSB0aGlzLiR6YXVkaW8ucGF1c2VkO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4ubGlzdGJveCB7XHJcblx0bWFyZ2luOiAyMHB4IDEwcHggMTBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0Lmxpc3Qge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHJcblx0XHRidXR0b24ge1xyXG5cdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5kZW1vIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdGJ1dHRvbiB7XHJcblx0XHRtYXJnaW46IDVweDtcclxuXHR9XHJcbn1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _util = __webpack_require__(/*! ./util.js */ 20);function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var _default =\n\n{\n  props: {\n    theme: {\n      type: String, // 主题 'theme1' or 'theme2'\n      default: 'theme1' },\n\n    themeColor: {\n      type: String,\n      default: '#42b983' } },\n\n\n  data: function data() {\n    return {\n      playinfo: this.$zaudio.playinfo,\n      audiolist: this.$zaudio.audiolist,\n      paused: this.$zaudio.paused,\n      renderIsPlay: this.$zaudio.renderIsPlay,\n      audio: this.$zaudio.renderinfo,\n      action: Symbol('zaudio') };\n\n  },\n  computed: {\n    renderData: function renderData() {var _this = this;\n      return function (name) {\n        if (!_this.renderIsPlay) {\n          if (name == 'paused') {\n            return true;\n          }\n          return _this.audio[name];\n        } else {\n          if (name == 'paused') {\n            return _this.paused;\n          }\n          return _this.playinfo[name];\n        }\n      };\n    } },\n\n\n  mounted: function mounted() {var _this2 = this;\n    this.$nextTick(function () {\n      var action = _this2.action;\n      //设置音频回调\n      _this2.$zaudio.on('setAudio', action, function (list) {\n        _this2.audiolist = _toConsumableArray(list);\n      });\n      //更新音频回调\n      _this2.$zaudio.on('updateAudio', action, function (list) {\n        _this2.audiolist = _toConsumableArray(list);\n      });\n      //开始播放回调\n      _this2.$zaudio.on('canPlay', action, function (data) {\n        _this2.playinfo = data;\n        _this2.renderIsPlay = _this2.$zaudio.renderIsPlay;\n        _this2.audio = _this2.$zaudio.renderinfo;\n        _this2.paused = _this2.$zaudio.paused;\n      });\n      //播放中回调\n      _this2.$zaudio.on('playing', action, function (data) {\n        _this2.playinfo = data;\n      });\n      //播放暂停回调\n      _this2.$zaudio.on('pause', action, function () {\n        _this2.paused = _this2.$zaudio.paused;\n      });\n    });\n  },\n  methods: {\n    //播放or暂停\n    operate: function operate() {\n      this.$zaudio.operate();\n    },\n    //进度拖到\n    change: function change(event) {\n      if (this.renderIsPlay) {\n        this.$zaudio.seek(event.detail.value);\n        this.$zaudio.commit('setPlayinfo', {\n          current: (0, _util.formatSeconds)(event.detail.value),\n          current_value: event.detail.value });\n\n      }\n    },\n    //快进\n    stepPlay: function stepPlay(value) {\n      this.$zaudio.stepPlay(value);\n    },\n    //切歌\n    changeplay: function changeplay(count) {\n      this.$zaudio.changeplay(count);\n    } },\n\n  beforeDestroy: function beforeDestroy() {\n    //组件卸载时卸载业务逻辑\n    var action = this.action;\n    this.$zaudio.off('setAudio', action);\n    this.$zaudio.off('updateAudio', action);\n    this.$zaudio.off('canPlay', action);\n    this.$zaudio.off('playing', action);\n    this.$zaudio.off('pause', action);\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy96LWF1ZGlvL3otYXVkaW8udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0dBLHFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQURBLEVBQ0E7QUFDQSx1QkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQUxBLEVBREE7OztBQVdBLE1BWEEsa0JBV0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsdUNBRkE7QUFHQSxpQ0FIQTtBQUlBLDZDQUpBO0FBS0Esb0NBTEE7QUFNQSw4QkFOQTs7QUFRQSxHQXBCQTtBQXFCQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FaQTtBQWFBLEtBZkEsRUFyQkE7OztBQXVDQSxTQXZDQSxxQkF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQXpCQTtBQTBCQSxHQWxFQTtBQW1FQTtBQUNBO0FBQ0EsV0FGQSxxQkFFQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0EsVUFOQSxrQkFNQSxLQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFEQTtBQUVBLDJDQUZBOztBQUlBO0FBQ0EsS0FkQTtBQWVBO0FBQ0EsWUFoQkEsb0JBZ0JBLEtBaEJBLEVBZ0JBO0FBQ0E7QUFDQSxLQWxCQTtBQW1CQTtBQUNBLGNBcEJBLHNCQW9CQSxLQXBCQSxFQW9CQTtBQUNBO0FBQ0EsS0F0QkEsRUFuRUE7O0FBMkZBLGVBM0ZBLDJCQTJGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FuR0EsRSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImltdC1hdWRpb1wiIDpjbGFzcz1cIltgJHt0aGVtZX1gXVwiIHYtaWY9XCJhdWRpb2xpc3QubGVuZ3RoID4gMFwiPlxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJ0aGVtZSA9PSAndGhlbWUzJ1wiPlxyXG5cdFx0XHQ8c2xpZGVyXHJcblx0XHRcdFx0Y2xhc3M9XCJhdWRpby1zbGlkZXJcIlxyXG5cdFx0XHRcdDphY3RpdmVDb2xvcj1cInRoZW1lQ29sb3JcIlxyXG5cdFx0XHRcdGJsb2NrLXNpemU9XCIwXCJcclxuXHRcdFx0XHQ6dmFsdWU9XCJyZW5kZXJEYXRhKCdjdXJyZW50X3ZhbHVlJylcIlxyXG5cdFx0XHRcdDptYXg9XCJyZW5kZXJEYXRhKCdkdXJhdGlvbl92YWx1ZScpXCJcclxuXHRcdFx0XHRAY2hhbmdlPVwiY2hhbmdlXCJcclxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCIhcmVuZGVySXNQbGF5XCJcclxuXHRcdFx0Pjwvc2xpZGVyPlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImF1ZGlvLWNvbnRyb2wtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZW5kZXJEYXRhKCdjb3ZlckltZ1VybCcpXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBjbGFzcz1cImNvdmVyXCIgOmNsYXNzPVwieyBvbjogIXJlbmRlckRhdGEoJ3BhdXNlZCcpIH1cIj48L2ltYWdlPlxyXG5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGxheWJ0bi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWlmPVwicmVuZGVyRGF0YSgncGF1c2VkJylcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wYXVzZWJ0bi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPnt7IHJlbmRlckRhdGEoJ3RpdGxlJykgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbmdlclwiPnt7IHJlbmRlckRhdGEoJ3NpbmdlcicpIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzbGlkZWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+e3sgcmVuZGVyRGF0YSgnY3VycmVudCcpIH19LyB7eyByZW5kZXJEYXRhKCdkdXJhdGlvbicpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cImNoYW5nZXBsYXkoLTEpXCI+5LiK5LiA6aaWPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJjaGFuZ2VwbGF5KDEpXCI+5LiL5LiA6aaWPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cInRoZW1lID09ICd0aGVtZTInXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1jb250cm9sLXdyYXBwZXJcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cmVuZGVyRGF0YSgnY292ZXJJbWdVcmwnKX0pYH1cIj5cclxuXHRcdFx0XHRcdDx0ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wbGF5YnRuLnBuZycpXCIgYWx0PVwiXCIgQGNsaWNrPVwib3BlcmF0ZVwiIGNsYXNzPVwicGxheVwiIHYtaWY9XCJyZW5kZXJEYXRhKCdwYXVzZWQnKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGF1c2VidG4ucG5nJylcIiBhbHQ9XCJcIiBAY2xpY2s9XCJvcGVyYXRlXCIgY2xhc3M9XCJwbGF5XCIgdi1lbHNlPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0Pnt7IHJlbmRlckRhdGEoJ3RpdGxlJykgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXVkaW8tbnVtYmVyXCI+e3sgcmVuZGVyRGF0YSgnY3VycmVudCcpIH19L3t7IHJlbmRlckRhdGEoJ2R1cmF0aW9uJykgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbmdlclwiPnt7IHJlbmRlckRhdGEoJ3NpbmdlcicpIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cInRoZW1lID09ICd0aGVtZTEnXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1jb250cm9sLXdyYXBwZXJcIj48aW1hZ2UgOnNyYz1cInJlbmRlckRhdGEoJ2NvdmVySW1nVXJsJylcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIGNsYXNzPVwiY292ZXJcIiA6Y2xhc3M9XCJ7IG9uOiAhcmVuZGVyRGF0YSgncGF1c2VkJykgfVwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj57eyByZW5kZXJEYXRhKCd0aXRsZScpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaW5nZXJcIj57eyByZW5kZXJEYXRhKCdzaW5nZXInKSB9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1udW1iZXJcIj57eyByZW5kZXJEYXRhKCdjdXJyZW50JykgfX08L3ZpZXc+XHJcblx0XHRcdFx0PHNsaWRlclxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJhdWRpby1zbGlkZXJcIlxyXG5cdFx0XHRcdFx0OmFjdGl2ZUNvbG9yPVwidGhlbWVDb2xvclwiXHJcblx0XHRcdFx0XHRibG9jay1zaXplPVwiMTZcIlxyXG5cdFx0XHRcdFx0OnZhbHVlPVwicmVuZGVyRGF0YSgnY3VycmVudF92YWx1ZScpXCJcclxuXHRcdFx0XHRcdDptYXg9XCJyZW5kZXJEYXRhKCdkdXJhdGlvbl92YWx1ZScpXCJcclxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGFuZ2VcIlxyXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiIXJlbmRlcklzUGxheVwiXHJcblx0XHRcdFx0Pjwvc2xpZGVyPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXVkaW8tbnVtYmVyXCI+e3sgcmVuZGVyRGF0YSgnZHVyYXRpb24nKSB9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpby1idXR0b24tYm94XCI+XHJcblx0XHRcdFx0PCEtLSDlnZfpgIAxNXMgLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wcmV2LnBuZycpXCIgY2xhc3M9XCJwcmV2YnRuXCIgQGNsaWNrPVwic3RlcFBsYXkoLTE1KVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLSDkuIrkuIDpppYgLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9nby5wbmcnKVwiIGNsYXNzPVwicHJldnBsYXlcIiBAY2xpY2s9XCJjaGFuZ2VwbGF5KC0xKVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLSDmkq3mlL4gLS0+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1aXJlKCcuL3N0YXRpYy9wbGF5YnRuMi5wbmcnKVwiIGFsdD1cIlwiIEBjbGljaz1cIm9wZXJhdGVcIiBjbGFzcz1cInBsYXlcIiB2LWlmPVwicmVuZGVyRGF0YSgncGF1c2VkJylcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwhLS0g5pqC5YGcIC0tPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvcGF1c2VidG4yLnBuZycpXCIgYWx0PVwiXCIgQGNsaWNrPVwib3BlcmF0ZVwiIGNsYXNzPVwicGF1c2VcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHQ8IS0tIOS4i+S4gOmmliAtLT5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVpcmUoJy4vc3RhdGljL2dvLnBuZycpXCIgY2xhc3M9XCJuZXh0cGxheVwiIEBjbGljaz1cImNoYW5nZXBsYXkoMSlcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwhLS0g5b+r6L+bMTVzIC0tPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWlyZSgnLi9zdGF0aWMvbmV4dC5wbmcnKVwiIGNsYXNzPVwibmV4dGJ0blwiIEBjbGljaz1cInN0ZXBQbGF5KDE1KVwiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgZm9ybWF0U2Vjb25kcyB9IGZyb20gJy4vdXRpbC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdHRoZW1lOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZywgLy8g5Li76aKYICd0aGVtZTEnIG9yICd0aGVtZTInXHJcblx0XHRcdGRlZmF1bHQ6ICd0aGVtZTEnXHJcblx0XHR9LFxyXG5cdFx0dGhlbWVDb2xvcjoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcjNDJiOTgzJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBsYXlpbmZvOiB0aGlzLiR6YXVkaW8ucGxheWluZm8sXHJcblx0XHRcdGF1ZGlvbGlzdDogdGhpcy4kemF1ZGlvLmF1ZGlvbGlzdCxcclxuXHRcdFx0cGF1c2VkOiB0aGlzLiR6YXVkaW8ucGF1c2VkLFxyXG5cdFx0XHRyZW5kZXJJc1BsYXk6IHRoaXMuJHphdWRpby5yZW5kZXJJc1BsYXksXHJcblx0XHRcdGF1ZGlvOiB0aGlzLiR6YXVkaW8ucmVuZGVyaW5mbyxcclxuXHRcdFx0YWN0aW9uOiBTeW1ib2woJ3phdWRpbycpXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdHJlbmRlckRhdGEoKSB7XHJcblx0XHRcdHJldHVybiBuYW1lID0+IHtcclxuXHRcdFx0XHRpZiAoIXRoaXMucmVuZGVySXNQbGF5KSB7XHJcblx0XHRcdFx0XHRpZiAobmFtZSA9PSAncGF1c2VkJykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmF1ZGlvW25hbWVdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAobmFtZSA9PSAncGF1c2VkJykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXVzZWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wbGF5aW5mb1tuYW1lXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0bGV0IGFjdGlvbiA9IHRoaXMuYWN0aW9uO1xyXG5cdFx0XHQvL+iuvue9rumfs+mikeWbnuiwg1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub24oJ3NldEF1ZGlvJywgYWN0aW9uLCBsaXN0ID0+IHtcclxuXHRcdFx0XHR0aGlzLmF1ZGlvbGlzdCA9IFsuLi5saXN0XTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8v5pu05paw6Z+z6aKR5Zue6LCDXHJcblx0XHRcdHRoaXMuJHphdWRpby5vbigndXBkYXRlQXVkaW8nLCBhY3Rpb24sIGxpc3QgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYXVkaW9saXN0ID0gWy4uLmxpc3RdO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly/lvIDlp4vmkq3mlL7lm57osINcclxuXHRcdFx0dGhpcy4kemF1ZGlvLm9uKCdjYW5QbGF5JywgYWN0aW9uLCBkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXlpbmZvID0gZGF0YTtcclxuXHRcdFx0XHR0aGlzLnJlbmRlcklzUGxheSA9IHRoaXMuJHphdWRpby5yZW5kZXJJc1BsYXk7XHJcblx0XHRcdFx0dGhpcy5hdWRpbyA9IHRoaXMuJHphdWRpby5yZW5kZXJpbmZvO1xyXG5cdFx0XHRcdHRoaXMucGF1c2VkID0gdGhpcy4kemF1ZGlvLnBhdXNlZDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8v5pKt5pS+5Lit5Zue6LCDXHJcblx0XHRcdHRoaXMuJHphdWRpby5vbigncGxheWluZycsIGFjdGlvbiwgZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5aW5mbyA9IGRhdGE7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvL+aSreaUvuaaguWBnOWbnuiwg1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8ub24oJ3BhdXNlJywgYWN0aW9uLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wYXVzZWQgPSB0aGlzLiR6YXVkaW8ucGF1c2VkO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly/mkq3mlL5vcuaaguWBnFxyXG5cdFx0b3BlcmF0ZSgpIHtcclxuXHRcdFx0dGhpcy4kemF1ZGlvLm9wZXJhdGUoKTtcclxuXHRcdH0sXHJcblx0XHQvL+i/m+W6puaLluWIsFxyXG5cdFx0Y2hhbmdlKGV2ZW50KSB7XHJcblx0XHRcdGlmICh0aGlzLnJlbmRlcklzUGxheSkge1xyXG5cdFx0XHRcdHRoaXMuJHphdWRpby5zZWVrKGV2ZW50LmRldGFpbC52YWx1ZSk7XHJcblx0XHRcdFx0dGhpcy4kemF1ZGlvLmNvbW1pdCgnc2V0UGxheWluZm8nLCB7XHJcblx0XHRcdFx0XHRjdXJyZW50OiBmb3JtYXRTZWNvbmRzKGV2ZW50LmRldGFpbC52YWx1ZSksXHJcblx0XHRcdFx0XHRjdXJyZW50X3ZhbHVlOiBldmVudC5kZXRhaWwudmFsdWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8v5b+r6L+bXHJcblx0XHRzdGVwUGxheSh2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLiR6YXVkaW8uc3RlcFBsYXkodmFsdWUpO1xyXG5cdFx0fSxcclxuXHRcdC8v5YiH5q2MXHJcblx0XHRjaGFuZ2VwbGF5KGNvdW50KSB7XHJcblx0XHRcdHRoaXMuJHphdWRpby5jaGFuZ2VwbGF5KGNvdW50KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGJlZm9yZURlc3Ryb3koKSB7XHJcblx0XHQvL+e7hOS7tuWNuOi9veaXtuWNuOi9veS4muWKoemAu+i+kVxyXG5cdFx0bGV0IGFjdGlvbiA9IHRoaXMuYWN0aW9uO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZignc2V0QXVkaW8nLCBhY3Rpb24pO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZigndXBkYXRlQXVkaW8nLCBhY3Rpb24pO1xyXG5cdFx0dGhpcy4kemF1ZGlvLm9mZignY2FuUGxheScsIGFjdGlvbik7XHJcblx0XHR0aGlzLiR6YXVkaW8ub2ZmKCdwbGF5aW5nJywgYWN0aW9uKTtcclxuXHRcdHRoaXMuJHphdWRpby5vZmYoJ3BhdXNlJywgYWN0aW9uKTtcclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG4vLyAgI2lmZGVmIE1QLVdFSVhJTlxyXG4udGhlbWUzIC5hdWRpby1zbGlkZXIge1xyXG5cdG1hcmdpbi10b3A6IC04cHggIWltcG9ydGFudDtcclxufVxyXG4vLyAjZW5kaWZcclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!***********************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/util.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.formatSeconds = void 0;var formatSeconds = function formatSeconds(seconds) {\n  if (isNaN(seconds)) return;\n  var result = parseInt(seconds);\n  var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n  var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60) +\n  h * 60;\n  var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n  return \"\".concat(m, \":\").concat(s);\n};exports.formatSeconds = formatSeconds;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy96LWF1ZGlvL3V0aWwuanMiXSwibmFtZXMiOlsiZm9ybWF0U2Vjb25kcyIsInNlY29uZHMiLCJpc05hTiIsInJlc3VsdCIsInBhcnNlSW50IiwiaCIsIk1hdGgiLCJmbG9vciIsIm0iLCJzIl0sIm1hcHBpbmdzIjoiNkZBQU8sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxPQUFPLEVBQUk7QUFDdkMsTUFBSUMsS0FBSyxDQUFDRCxPQUFELENBQVQsRUFBb0I7QUFDcEIsTUFBSUUsTUFBTSxHQUFHQyxRQUFRLENBQUNILE9BQUQsQ0FBckI7QUFDQSxNQUFJSSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFNLEdBQUcsSUFBcEIsSUFBNEIsRUFBNUIsR0FBaUMsTUFBTUcsSUFBSSxDQUFDQyxLQUFMLENBQVdKLE1BQU0sR0FBRyxJQUFwQixDQUF2QyxHQUFtRUcsSUFBSSxDQUFDQyxLQUFMLENBQVdKLE1BQU0sR0FBRyxJQUFwQixDQUEzRTtBQUNBLE1BQUlLLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlKLE1BQU0sR0FBRyxFQUFULEdBQWMsRUFBMUIsSUFBaUMsRUFBakMsR0FBc0MsTUFBTUcsSUFBSSxDQUFDQyxLQUFMLENBQVlKLE1BQU0sR0FBRyxFQUFULEdBQWMsRUFBMUIsQ0FBNUMsR0FBNkVHLElBQUksQ0FBQ0MsS0FBTCxDQUFZSixNQUFNLEdBQUcsRUFBVCxHQUFjLEVBQTFCO0FBQ3BGRSxHQUFDLEdBQUcsRUFETDtBQUVBLE1BQUlJLENBQUMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVlKLE1BQU0sR0FBRyxFQUFyQixJQUE0QixFQUE1QixHQUFpQyxNQUFNRyxJQUFJLENBQUNDLEtBQUwsQ0FBWUosTUFBTSxHQUFHLEVBQXJCLENBQXZDLEdBQW1FRyxJQUFJLENBQUNDLEtBQUwsQ0FBWUosTUFBTSxHQUFHLEVBQXJCLENBQTNFO0FBQ0EsbUJBQVVLLENBQVYsY0FBZUMsQ0FBZjtBQUNBLENBUk0sQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtYXRTZWNvbmRzID0gc2Vjb25kcyA9PiB7XHJcblx0aWYgKGlzTmFOKHNlY29uZHMpKSByZXR1cm5cclxuXHRsZXQgcmVzdWx0ID0gcGFyc2VJbnQoc2Vjb25kcylcclxuXHRsZXQgaCA9IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCkgOiBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApXHJcblx0bGV0IG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSArXHJcblx0XHRoICogNjBcclxuXHRsZXQgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpXHJcblx0cmV0dXJuIGAke219OiR7c31gXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\nvar _zAudio = _interopRequireDefault(__webpack_require__(/*! @/components/z-audio/z-audio */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue'\nvar _default = { data: function data() {return { key: 2, themelist: [{ name: '样式1', val: 'theme1' },\n\n      {\n        name: '样式2', val: 'theme2' },\n\n      {\n        name: '样式3', val: 'theme3' }] };\n\n\n\n  },\n  components: { zaudio: _zAudio.default },\n  onLoad: function onLoad(query) {var\n    key = query.key;\n    //通过索引去渲染需要播放的音频, 方法1:\n    this.$zaudio.setRender(key);\n\n    // 指定列表中具体信息,去渲染需要播放的音频, 方法2:\n    // this.$zaudio.setRender(this.audiolist[key]);\n\n  },\n  methods: {\n    changeTheme: function changeTheme(k) {\n      this.key = k;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBLGlHOzs7Ozs7O0FBQ0E7ZUFDQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLE1BREEsRUFFQSxZQUNBLEVBQ0EsV0FEQSxFQUNBLGFBREEsRUFEQTs7QUFJQTtBQUNBLG1CQURBLEVBQ0EsYUFEQSxFQUpBOztBQU9BO0FBQ0EsbUJBREEsRUFDQSxhQURBLEVBUEEsQ0FGQTs7OztBQWNBLEdBaEJBO0FBaUJBLHlDQWpCQTtBQWtCQSxRQWxCQSxrQkFrQkEsS0FsQkEsRUFrQkE7QUFDQSxPQURBLEdBQ0EsS0FEQSxDQUNBLEdBREE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0ExQkE7QUEyQkE7QUFDQSxlQURBLHVCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQSxFQTNCQSxFIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PHphdWRpbyA6dGhlbWU9XCJ0aGVtZWxpc3Rba2V5XS52YWxcIiA6YXV0b3BsYXk9XCJ0cnVlXCIgOmNvbnRpbnVlPVwidHJ1ZVwiPjwvemF1ZGlvPlxyXG5cdFx0PGJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VUaGVtZShrKVwiIGNsYXNzPVwiYm90dG9tXCIgdHlwZT1cInByaW1hcnlcIiBzaXplPVwibWluaVwiIHYtZm9yPVwiKGksIGspIGluIHRoZW1lbGlzdFwiIDprZXk9XCJrXCI+e3sgaS5uYW1lIH19PC9idXR0b24+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHphdWRpbyBmcm9tICdAL2NvbXBvbmVudHMvei1hdWRpby96LWF1ZGlvJztcclxuLy8gaW1wb3J0IHphdWRpbyBmcm9tICd1bmlhcHAtemF1ZGlvL2NvbXBvbmVudHMvei1hdWRpby96LWF1ZGlvLnZ1ZSdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRrZXk6IDIsXHJcblx0XHRcdHRoZW1lbGlzdDogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6J+agt+W8jzEnLHZhbDondGhlbWUxJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6J+agt+W8jzInLHZhbDondGhlbWUyJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6J+agt+W8jzMnLHZhbDondGhlbWUzJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fSxcclxuXHRjb21wb25lbnRzOiB7IHphdWRpbzogemF1ZGlvIH0sXHJcblx0b25Mb2FkKHF1ZXJ5KSB7XHJcblx0XHRsZXQgeyBrZXkgfSA9IHF1ZXJ5OyBcclxuXHRcdC8v6YCa6L+H57Si5byV5Y675riy5p+T6ZyA6KaB5pKt5pS+55qE6Z+z6aKRLCDmlrnms5UxOlxyXG5cdFx0dGhpcy4kemF1ZGlvLnNldFJlbmRlcihrZXkpO1xyXG5cclxuXHRcdC8vIOaMh+WumuWIl+ihqOS4reWFt+S9k+S/oeaBryzljrvmuLLmn5PpnIDopoHmkq3mlL7nmoTpn7PpopEsIOaWueazlTI6XHJcblx0XHQvLyB0aGlzLiR6YXVkaW8uc2V0UmVuZGVyKHRoaXMuYXVkaW9saXN0W2tleV0pO1xyXG5cdFx0XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRjaGFuZ2VUaGVtZShrKSB7XHJcblx0XHRcdHRoaXMua2V5ID0gaztcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5ib2R5IHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJvdHRvbSB7XHJcblx0bWFyZ2luOiAyMHJweDtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

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
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });Object.defineProperty(exports, \"ZAudio\", { enumerable: true, get: function get() {return _ZAudio.default;} });Object.defineProperty(exports, \"zaudio\", { enumerable: true, get: function get() {return _zAudio.default;} });var _ZAudio = _interopRequireDefault(__webpack_require__(/*! ./ZAudio.ts */ 32));\nvar _zAudio = _interopRequireDefault(__webpack_require__(/*! ./z-audio.vue */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy96LWF1ZGlvL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwUkFBQTtBQUNBLGtGIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFpBdWRpbyBmcm9tIFwiLi9aQXVkaW8udHNcIlxyXG5pbXBvcnQgemF1ZGlvIGZyb20gXCIuL3otYXVkaW8udnVlXCJcclxuZXhwb3J0IHtcclxuXHRaQXVkaW8sXHJcblx0emF1ZGlvXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*************************************************************************************!*\
  !*** C:/Users/16112/Documents/HBuilderProjects/zaudio/components/z-audio/ZAudio.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: Cannot find module 'C:\\\\Users\\\\16112\\\\Downloads\\\\HBuilderX.2.7.7.20200522-alpha.full\\\\HBuilderX\\\\plugins\\\\compile-typescript\\\\node_modules\\\\typescript'\\n    at Function.Module._resolveFilename (module.js:547:15)\\n    at Function.Module._resolveFilename (C:\\\\Users\\\\16112\\\\Downloads\\\\HBuilderX.2.7.7.20200522-alpha.full\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\module-alias\\\\index.js:49:29)\\n    at Function.Module._load (module.js:474:25)\\n    at Module.require (module.js:596:17)\\n    at require (internal/module.js:11:18)\\n    at Object.<anonymous> (C:\\\\Users\\\\16112\\\\Downloads\\\\HBuilderX.2.7.7.20200522-alpha.full\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\ts-loader\\\\dist\\\\utils.js:6:20)\\n    at Module._compile (module.js:652:30)\\n    at Object.Module._extensions..js (module.js:663:10)\\n    at Module.load (module.js:565:32)\\n    at tryModuleLoad (module.js:505:12)\\n    at Function.Module._load (module.js:497:3)\\n    at Module.require (module.js:596:17)\\n    at require (internal/module.js:11:18)\\n    at Object.<anonymous> (C:\\\\Users\\\\16112\\\\Downloads\\\\HBuilderX.2.7.7.20200522-alpha.full\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\ts-loader\\\\dist\\\\after-compile.js:6:17)\\n    at Module._compile (module.js:652:30)\\n    at Object.Module._extensions..js (module.js:663:10)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzMi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ })
],[[0,"app-config"]]]);