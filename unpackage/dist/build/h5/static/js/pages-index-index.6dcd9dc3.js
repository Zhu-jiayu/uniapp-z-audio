(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"10ff":function(n,t,i){"use strict";var o=i("6c07"),e=i.n(o);e.a},"30dc":function(n,t,i){"use strict";var o;i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("zaudio",{attrs:{theme:"theme1"}}),i("v-uni-view",{staticClass:"listbox"},[i("v-uni-view",{staticStyle:{padding:"10px"}},[n._v("音频列表:")]),n._l(n.audiolist,(function(t,o){return i("v-uni-view",{key:o,staticClass:"list"},[n._v(n._s(t.title)),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.go(o)}}},[n._v("查看详情")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.play(o)}}},[n._v(n._s(n.paused||t.src!==n.playinfo.src?"播放":"暂停"))])],1)}))],2),i("div",{staticClass:"demo"},[i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.asyncSetAudio.apply(void 0,arguments)}}},[n._v("异步设置音频")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.reset.apply(void 0,arguments)}}},[n._v("覆盖音频")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.add.apply(void 0,arguments)}}},[n._v("添加音频")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.setRender.apply(void 0,arguments)}}},[n._v("渲染第2首")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.willStop.apply(void 0,arguments)}}},[n._v("注册5秒后暂停事件")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.removeStop.apply(void 0,arguments)}}},[n._v("卸载5秒后暂停事件")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.logPlaying("log")}}},[n._v("注册播放时打印事件")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.offPlaying("log")}}},[n._v("卸载播放时打印事件")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.stepPlay(20)}}},[n._v("快进20s")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.stepPlay(-20)}}},[n._v("快退20s")])],1)],1)},a=[]},5754:function(n,t,i){var o=i("24fb");t=o(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.listbox[data-v-1d5e54f0]{margin:20px 10px 10px;border:1px solid rgba(0,0,0,.2)}.listbox .list[data-v-1d5e54f0]{line-height:40px;border-top:1px solid #ccc;padding:0 10px}.listbox .list uni-button[data-v-1d5e54f0]{float:right;margin-top:5px;margin-left:5px}.demo[data-v-1d5e54f0]{margin-top:20px}.demo uni-button[data-v-1d5e54f0]{margin:5px}',""]),n.exports=t},"5fd3":function(n,t,i){"use strict";var o=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(i("107e")),a={data:function(){return{audiolist:this.$zaudio.audiolist,playIndex:this.$zaudio.playIndex,paused:this.$zaudio.paused,playinfo:this.$zaudio.playinfo}},components:{zaudio:e.default},onLoad:function(){this.$zaudio.on("stop","aaa",(function(){console.log("我是强制暂停或关闭小程序音频浮窗触发的")})),this.$zaudio.on("seek","aaa",(function(n){console.log("进度拖动A",n)})),this.$zaudio.on("seek","aaa",(function(n){console.log("进度拖动B",n)}))},onShow:function(){var n=this;this.$zaudio.syncRender(),this.$zaudio.syncStateOn("page-index-get-state",(function(t){var i=t.audiolist,o=t.playIndex,e=t.paused,a=t.playinfo;n.audiolist=i,n.playIndex=o,n.paused=e,n.playinfo=a}))},onHide:function(){this.$zaudio.syncStateOff("page-index-get-state"),this.$zaudio.off("seek","aaa"),this.$zaudio.off("stop","aaa")},methods:{play:function(n){this.$zaudio.operate(n)},go:function(n){uni.navigateTo({url:"/pages/detail/index?key="+n})},reset:function(){var n=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/21/21a_zj/01.mp3",title:"二人转",singer:"作者333",coverImgUrl:"https://img.1ting.com/images/special/374/s300_2f06b17427718e01e54be1cfe462f3e0.jpg"}];this.$zaudio.setAudio(n)},add:function(){var n=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/jn/12.jlhg/8.zhg/2.mp3",title:"天边",singer:"作者222",coverImgUrl:"https://img.1ting.com/images/special/377/s300_4631dc844ab6429b6bc6fe4ccdc6ed6f.jpg"}];this.$zaudio.updateAudio(n)},asyncSetAudio:function(){var n=this,t=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2014iSep/15F/15xwsk/21.mp3",title:"蓝莲花",singer:"许巍",coverImgUrl:"https://img.1ting.com/images/special/358/s100_6d9c9a3f9f67fa76b041561ff0042ae4.jpg"}];uni.showLoading(),setTimeout((function(){n.$zaudio.setAudio(t),n.$zaudio.setRender(0),uni.hideLoading()}),1500)},setRender:function(){this.$zaudio.setRender(1)},willStop:function(){var n=this;this.$zaudio.on("playing","recharge",(function(t){t.current_value>5&&(n.$zaudio.stop(),uni.showModal({title:"提示",content:"请续费",success:function(n){n.confirm?console.log("用户点击确定"):n.cancel&&console.log("用户点击取消")}}))}))},removeStop:function(){this.$zaudio.off("playing","recharge"),this.$zaudio.operate()},logPlaying:function(n){this.$zaudio.on("playing",n,(function(t){console.log("播放中----"+n,t)}))},offPlaying:function(n){this.$zaudio.off("playing",n)},stepPlay:function(n){this.$zaudio.stepPlay(n)}}};t.default=a},"6c07":function(n,t,i){var o=i("5754");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var e=i("4f06").default;e("f197d106",o,!0,{sourceMap:!1,shadowMode:!1})},9681:function(n,t,i){"use strict";i.r(t);var o=i("30dc"),e=i("ac89");for(var a in e)"default"!==a&&function(n){i.d(t,n,(function(){return e[n]}))}(a);i("10ff");var s,u=i("f0c5"),c=Object(u["a"])(e["default"],o["b"],o["c"],!1,null,"1d5e54f0",null,!1,o["a"],s);t["default"]=c.exports},ac89:function(n,t,i){"use strict";i.r(t);var o=i("5fd3"),e=i.n(o);for(var a in o)"default"!==a&&function(n){i.d(t,n,(function(){return o[n]}))}(a);t["default"]=e.a}}]);