# uniapp 音频后台播放组件

## 预览
[http://jingangtui.gitee.io/uniapp-z-audio/#/](http://jingangtui.gitee.io/uniapp-z-audio/#/)


## 特性
+ 支持H5, app, 微信小程序播放
+ 支持切换后台播放
+ 支持全局多页面同步播放状态
+ 内含3种常用UI样式
+ 支持来电中断后续播



## 简要说明
+ 为了支持音频多页面状态同步, zaudio依赖vuex管理
+ 音频对象基于`uni.getBackgroundAudioManager`和`uni.createInnerAudioContext`创建
+ 具体使用方式,请下载示例
+ 若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)

## 使用步骤 

1. <a href="https://ext.dcloud.net.cn/plugin?id=1888">插件市场下载</a> or `npm install uniapp-zaudio`
2. 配置ZAudioStore (store/index.js)

```javascript
// npm引用方式
// import { ZAudioStore } from 'uniapp-zaudio'

import {AudioStore} from "@/components/z-audio/index.js";
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

3. 实例化ZAudio并挂载 (main.js)

注意大小写ZAudio

```javascript
import store from './store' 
import {ZAudio} from '@/components/z-audio'
// npm引用方式
// import { ZAudio } from 'uniapp-zaudio'
let zaudio = new ZAudio({
	store: store, //此处的store必须为实例化vuex的store
	continuePlay: true, //续播
	autoPlay: true, //自动播放 浏览器不支持
	onPlaying(info){ //播放中回调函数, 参数为当前播放音频的数据
		console.log(info)
	}
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



4. 引用组件 
注意大小写zaudio
```javascript
import zaudio from '@/components/z-audio/z-audio';
// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue'
export default {
	components:{zaudio: zaudio},
}
```
```html
<zaudio theme="theme3"></zaudio>
```
## 注意项
+ 示例在app运行时,注意开启网络权限,若不显示数据则重启app应用,或者检查网络权限问题


## zaudio组件参数配置

若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)


参数 | 类型 | 必填 | 描述 | 其他
-|-|-|-|-
theme | String | false | 主题 | `theme2` or `theme1` or `theme3`;   默认`theme1`
themeColor | String | false | 进度条颜色 |  默认 `#42b983`

## ZAudio对象参数和回调函数

若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)

参数 | 类型 | 必填 | 描述 | 其他
-|-| - | - | -
store | Object | true | 实例化vuex的store |-
continuePlay | Boolean | false | 下一首续播 | 默认true
autoPlay | Boolean | false | 自动播放,浏览器不支持 | 默认false



回调函数|必填|描述|其他
-|-|-|-
onError|false|错误播放回调|
onCanplay|false|点击播放时回调|
onPlaying|false|播放中回调| 回调函数参数:当前播放音频的数据
onPause|false|暂停回调|
onEnded|false|结束回调|



用法举例
```javascript
new ZAudio({
	store: store,
	autoPlay: true,
	onPlaying(info){
		console.log(info)
	}
	//...其他参数或回调
})
```
## ZAudio实例化对象方法


若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)


方法|必填|描述|其他
-|-|-|-
onError| false|错误播放回调|
onCanplay|false|点击播放时回调| 
onPlaying|false|播放中回调|
onPause|false|暂停回调|
onEnded|false| 结束回调|
setRender|false| 指定音频, 渲染到zaudio组件 | 参数number,string,object类型, 见示例
syncRender| true | 同步并渲染当前的播放状态 | 必须在onshow中, 见示例
operate| false | 播放或暂停指定索引的音频 | 参数number类型, 自动判断播放或暂停
setAudio| true | 覆盖设置音频列表 | 参数:对象数组 [{src: 音频地址, title: 音频名, singer: 歌手 coverImgUrl: 封面}]
updateAudio | false| 添加音频列表| 参数:对象数组 [{src: 音频地址, title: 音频名, singer: 歌手 coverImgUrl: 封面}]
stop|false|暂停当前播放音频|


用法举例
```javascript
let zaudio = new ZAudio({store: store})
//添加音频
zaudio.setAudio([{
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
])
//播放中回调
zaudio.onCanplay=info=>{
	console.log(info)
}
//播放或暂停第一首音频
zaudio.operate(1)
```
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

## 如果你觉得这个项目不错, 欢迎[STAR!](https://github.com/P3T3R-Z/uniapp-z-audio.git)