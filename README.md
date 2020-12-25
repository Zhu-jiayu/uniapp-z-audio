# uniapp 音频后台播放组件

## 特性
+ 支持H5, app, 微信小程序播放
+ 支持切换后台播放
+ 支持来电中断后续播
+ 支持全局多页面同步播放状态

## 预览
[http://jingangtui.gitee.io/uniapp-z-audio/#/](http://jingangtui.gitee.io/uniapp-z-audio/#/)

## 简要说明
+ 为了支持音频多页面状态同步, zaudio所有属性依赖vuex管理
+ 音频对象基于`uni.getBackgroundAudioManager`和`uni.createInnerAudioContext`创建
+ 具体使用方式,请下载示例

## 使用步骤 

0. <a href="https://ext.dcloud.net.cn/plugin?id=1888">插件市场下载</a> or `npm install uniapp-zaudio`
1. 配置ZAudioStore (store/index.js)

```javascript
// npm包引入方式
//import { ZAudioStore } from 'uniapp-zaudio/zaudio/index.js'

import { ZAudioStore } from "@/zaudio/index.js";
const store = new Vuex.Store({
	modules: {
		// zaudio数据
		ZAudioStore,

		//这是模拟的其他数据
		other: {
			state: {
				a: '123'
			}
		}
	}
})
```
2. 实例化ZAudio并挂载 (main.js)

```javascript
import store from './store' 
// npm包引入方式
//import { ZAudio } from 'uniapp-zaudio/zaudio/index.js'
import {ZAudio} from '@/zaudio'
let zaudio = new ZAudio({
	store: store, //此处的store必须为实例化vuex的store
	continuePlay: true, //续播
	autoPlay: true, //自动播放 部分浏览器不支持
})
Vue.prototype.$zaudio = zaudio;

//模拟音频初始数据
var data = [{
		src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3',
		title: '恭喜发财',
		singer: '刘德华',
		coverImgUrl: 'https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg'
	},
	{
		src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',
		title: '好运来',
		singer: '作者1111',
		coverImgUrl: 'https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg'
	}
];

zaudio.setAudio(data);
```



3. 引用组件 

```javascript
// npm包引入方式
//import { ZAudioTemplate } from 'uniapp-zaudio/zaudio/template'
import ZAudioTemplate from '@/zaudio/template';
export default {
	components:{zaudio: ZAudioTemplate},
}
```
```html
<zaudio theme="theme3"></zaudio>
```



## zaudio组件参数配置

参数 | 类型 | 必填 | 描述 | 其他
-|-|-|-|-
theme | String | false | 主题 | `theme2` or `theme1` or `theme3`;   默认`theme1`
themeColor | String | false | 进度条颜色 |  默认 `#42b983`

## ZAudio对象参数和方法
参数 | 类型 | 必填 | 描述 | 其他
-|-|-|-|-
store | Object | true | 实例化vuex的store |
continuePlay | Boolean | false | 下一首续播 | 默认true
autoPlay | Boolean | false | 自动播放 部分浏览器不支持 | 默认false

方法 | 类型 | 必填 | 描述 | 其他
-|-|-|-|-
onError | Function | false | 错误播放回调 | 可当做属性传入ZAudio
onCanplay | Function | false | 点击播放时回调 |  可当做属性传入ZAudio
onPlaying | Function | false | 播放中回调 | 参数为当前播放的信息, 可当做属性传入ZAudio
onPause | Function | false | 暂停回调 | 可当做属性传入ZAudio
onEnded | Function | false | 结束回调 | 可当做属性传入ZAudio
setRender | Function | false | 指定音频, 渲染到zaudio组件 | 参数number,string,object类型, 见示例
syncRender | Function | true | 同步并渲染当前的播放状态 | 必须在onshow中, 见示例
operate | Function | false | 播放或暂停指定索引的音频 | 参数number类型
setAudio | Function | false | 覆盖设置音频列表 | 赋值数组
updateAudio | Function | false | 添加音频列表 | push数组
stop | Function | false | 暂停音频 | 

## 切换后台播放配置

在manifest.json中配置
小程序

```
 "mp-weixin" : {
		"requiredBackgroundModes" : [ "audio" ],
        "appid" : "",
        "setting" : {
            "urlCheck" : false
        },
        "usingComponents" : true
    }
```
注意ios端需要打包ipa才生效
iOS

```
"ios" : {
    "UIBackgroundModes" : [ "audio" ]
}
```

## 更新日志

v2.0
- 重构逻辑, 简化使用
- 增加demo

v1.0.14
- 增加npm包引入

v1.0.0
- 简化使用方式

v0.0.55
- set_audiolist方法加入status参数,区分是否记录列表数据

v0.0.54
- 修复H5端切换歌曲报错问题

v0.0.53
- 修复android端切换歌曲报错问题

v0.0.52
- 增加getters:`renderIsPlay`
- 修复快进失效, 进度条拖动错误问题

v0.0.51
- 拆分store, 调整使用步骤

v0.0.5
- 修复多次创建监听$audio事件的问题
- 拆分渲染组件与播放音频的索引值
- 播放状态移入vuex中管理
- 增加`手动指定播放`与`多页面共享播放状态`的示例

v0.0.43
- 修复进度条不同步的bug
- 替换音频链接


v0.0.42
- 增加theme3主题

v0.0.41
- 支持下一首续播

v0.0.4
- 增加自动播放
- `theme1`主题修改
- 增加音频切换
- 主题参数变更为`theme1`和`theme2`
- 完善使用文档

v0.0.32
- 增加音频列表更新, 切换主题的示例

v0.0.3
- 增加主题选择,  自定义主题色, 隐藏快进按钮

v0.0.1
- 支持 h5, app, 微信小程序播放
- 支持小程序, app 后台播放
- 支持来电中断后续播(app 端)

## 如果你觉得这个项目不错, 欢迎[STAR!](https://github.com/P3T3R-Z/uniapp-z-audio.git)