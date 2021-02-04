# uniapp-zaudio 背景音频播放组件

当前版本`v2.2.51`, 查看版本`console.log(ZAudio.version)`
## 预览
[http://jingangtui.gitee.io/uniapp-z-audio/#/](http://jingangtui.gitee.io/uniapp-z-audio/#/)

# 若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)

## 特性
- 支持 H5, app, 微信小程序播放
- 支持背景音频播放
- 支持多页面同步状态
- 支持 3 种 UI 样式
- 支持来电中断后续播
- 支持同一个音频回调中注册多个业务事件(v2.1.0 后版本)

## 简要说明
- 插件分为`ZAudio`类和 `zaudio` 组件, `ZAudio`类处理音频播放逻辑, `zaudio`组件用于渲染
- `ZAudio`基于`uni.getBackgroundAudioManager`和`uni.createInnerAudioContext`创建
- 示例在 app 运行时,注意开启网络权限,若不显示数据则重启 app 应用,或者检查网络权限问题
- v2.0 版本依赖vuex, v2.1.0 后版本不依赖 vuex, 建议下载最新版本
- 如果你觉得这个项目不错, 或是想增加新功能 [欢迎Star Fork PR](https://gitee.com/jingangtui/uniapp-z-audio.git)

## 使用步骤
1. <a href="https://ext.dcloud.net.cn/plugin?id=1888">插件市场下载</a> 或 `npm install uniapp-zaudio`;


2. 实例化 ZAudio类 并挂载

_注意大小写:ZAudio是类_

_HbuilderX插件导入方式, import可能需要修改目录名哦_

```javascript
import ZAudio from '@/components/uniapp-zaudio' //HbuilderX插件导入方式, import可能需要修改目录名哦
// import ZAudio from 'uniapp-zaudio' // npm引用方式

let zaudio = new ZAudio({
  continuePlay: true, //续播
  autoPlay: true, //自动播放 部分浏览器不支持
});
Vue.prototype.$zaudio = zaudio; //挂载vue原型链上

//模拟音频初始数据,切勿业务中使用
var data = [
  {
    src:
      "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3",
    title: "恭喜发财",
    singer: "刘德华",
    coverImgUrl:
      "https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg",
  },
  {
    src:
      "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3",
    title: "好运来",
    singer: "作者1111",
    coverImgUrl:
      "https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg",
  },
];
zaudio.setAudio(data); //添加音频
zaudio.setRender(0)//渲染第一首音频
```

3. 引用组件

_注意大小写:zaudio是组件_

```html
<zaudio theme="theme3"></zaudio>
```
```javascript
import zaudio from '@/components/uniapp-zaudio/zaudio';
// import zaudio from 'uniapp-zaudio/zaudio'
export default {
  components: { zaudio: zaudio },
};
```




## < zaudio > 组件参数配置


| 参数       | 类型   | 必填  | 描述       | 其他                                           |
| ---------- | ------ | ----- | ---------- | ---------------------------------------------- |
| theme      | String | false | 主题       | `theme2` or `theme1` or `theme3`; 默认`theme1` |
| themeColor | String | false | 进度条颜色 | 默认 `#42b983`                                 |

+ 用法示例:
```
<zaudio theme="theme1"  themeColor="#42b983" />
```


## ZAudio对象的参数和实例方法


| 参数         | 类型    | 必填  | 描述                         | 其他       |
| ------------ | ------- | ----- | ---------------------------- | ---------- |
| defaultCover | String  | false | 默认音频封面 |
| continuePlay | Boolean | false | 自动播放下一首,完成后从头播放                   | 默认 true  |
| autoPlay     | Boolean | false | 自动播放,部分浏览器不支持    | 默认 false |

| 实例方法                    | 描述							| 参数															|
| --------------------------- | -------------------------------------| -------------------------------------------------------------------------------------|
| on(event, action, fn) | 回调函数中注册业务事件		| event(音频回调方法), action(业务名), fn(业务函数); 见[`音频回调事件中注册业务`](#fn)|
| off(event, action)          | 回调函数中卸载业务事件, 重要	| event(音频回调方法), action(业务名);见[`音频回调事件中注册业务`](#fn)|
| setAudio(data)              | 设置音频列表(audiolist赋值)	| 对象数组, 例: [{src: 音频地址, title: 音频名, singer: 歌手 coverImgUrl: 封面}]|
| updateAudio(data)           | 添加音频列表(push数据到audiolist)| 对象数组, 例: [{src: 音频地址, title: 音频名, singer: 歌手 coverImgUrl: 封面}]|
| setRender(data)             | 指定音频索引或对象,渲染到 zaudio 组件, 可用于异步渲染|  索引(number或string类型) 或 音频对象(object类型)				|
| operate(index)              | 指定索引, 自动判断播放暂停,并渲染对应的音频数据,没有索引时则判断当前音频	| 索引, Number或undefined											|
| stop()						| 停止播放音频 (强制停止)										|
| stepPlay(count)             | 快进快退						| 单位秒, Number类型											|
| syncRender()					| 实时渲染当前播放状态,见[`实时渲染当前播放状态`](#syncrender)	|
| syncStateOn(action, fn)           | 注册一个用于实时获取当前播放状态的事件,用法见[`获取音频播放状态和属性`](#params)            | action(业务名), fn(回调函数,回调参数见[`音频对象属性`](#property))
| syncStateOff(action)           | 卸载用于实时获取当前播放状态的事件,用法见[`获取音频播放状态和属性`](#params)             | action(与注册时的业务名对应)

+ 用法示例:

初始化ZAudio类, 并渲染音频
```javascript
let zaudio = new ZAudio({
  continuePlay: true, //续播
  autoPlay: true, //自动播放 部分浏览器不支持
});
var data = [
  {
    src:
      "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3",
    title: "恭喜发财",
    singer: "刘德华",
    coverImgUrl:
      "https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg",
  },
  {
    src:
      "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3",
    title: "好运来",
    singer: "作者1111",
    coverImgUrl:
      "https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg",
  },
];


// 设置音频数据
zaudio.setAudio(data)
//渲染第一首音频
zaudio.setRender(0)

```


异步加载
```js
setTimeout(()=>{
	zaudio.setAudio(data);
	zaudio.operate(0); //手动去渲染第1首音频
},2000)

```

## <span id="fn">音频回调事件中注册业务</span>
- 音频事件会触发不同的回调(如播放回调, 暂停回调), 而一个回调中允许注册多个互不影响的业务事件
- `zaudio.on(event, action, fn)`: 注册业务事件
- `zaudio.off(event, action)`: 卸载业务事件, 页面卸载时可以卸载不必要的业务事件, 这样可以提高页面性能
- `event`: 回调方法名,具体表格如下
- `action`: 自定义的业务名, 一个业务名在同一个音频回调中只能注册一次, 多次注册不会被覆盖
- `fn`: 触发的业务函数, 部分回调会实时返回当前播放的状态, 见下表




| event(音频回调名)  |action(自定义业务名)| 描述           |  fn参数                              |
| -----------| ---- | -------------- | --------------------------------- |
| waiting      |类型string或symbol | 加载音频时回调 | 当前加载状态
| error       |类型string或symbol| 错误播放时回调 |
| playing     |类型string或symbol| 播放时回调     | 实时返回当前播放的音频对象 |
| canPlay     |类型string或symbol| 初始播放时回调 | 当前播放的音频对象 |
| pause       |类型string或symbol| 暂停回调       |
| ended       |类型string或symbol| 结束回调       |
| setAudio    |类型string或symbol| 覆盖音频的回调 | 当前音频列表       |
| updateAudio |类型string或symbol| 添加音频的回调 | 当前音频列表       |
| stop        |类型string或symbol| 强制停止播放回调, 小程序音频浮窗关闭回调   |
| seek        |类型string或symbol| 快进拖动回调   | 当前跳转的时间点

+ 用法示例:

一个playing回调,触发两个业务事件
```javascript
	onLoad(query) {
		//playing回调, 注册`event-a`和`event-b`两个打印事件
		this.$zaudio.on('playing', 'event-a', data => {
			console.log(data,'event-a')
		});
		this.$zaudio.on('playing', 'event-b', data => {
			console.log(data,'event-b')
		});
	},
	
	destroyed(){
			//页面卸载时卸载业务, 提高页面性能
		this.$zaudio.off('playing', 'event-a')
		this.$zaudio.off('playing', 'event-b')
	}
```

 
## <span id="syncrender">实时渲染当前播放状态到zaudio组件</span>
+ 适用情况: 当zaudio组件渲染了非当前播放的数据, 且需要实时渲染当前的播放状态时
+ 用法示例: 
```javascript
onShow(){
	//实时渲染当前的播放状态
	this.$zaudio.syncRender();
},
```

## <span id="params">实时获取音频播放状态和属性</span>
- 由于v2.1.x之后版本不依赖vuex, 音频状态需要使用`syncStateOn`方法来实时监听获取
- `syncStateOn(action, fn)`: 注册一个获取音频播放状态和属性的事件
- `syncStateOff(action)`: 卸载获取音频播放状态和属性的事件, 页面卸载时卸载该事件, 这样可以提高页面性能
- `action`: 自定义业务名, 用于区分多个不同的`实时获取音频播放状态和属性`事件
- `fn`: 实时获取音频播放状态和属性的回调, 回调参数见[`音频对象属性`](#property)

+ 用法示例: 

```javascript
data(){
	return {
			audiolist: this.$zaudio.audiolist, //当前音频列表
			playIndex: this.$zaudio.playIndex, //当前播放的索引
			paused: this.$zaudio.paused, //当前是否暂停
			playinfo: this.$zaudio.playinfo //当前播放的信息

	}
}
onShow(){
	//获取音频播放状态和属性
	this.getAudioState();
},
methods:{
	getAudioState() {
		//注册page-index-get-state, 实时获取zaudio属性状态
		this.$zaudio.syncStateOn('page-index-get-state', ({ audiolist, playIndex, paused, playinfo }) => {
			this.audiolist = audiolist;
			this.playIndex = playIndex;
			this.paused = paused;
			this.playinfo = playinfo;
		});
	}
},
onHide(){
	//卸载page-index-get-state,提高页面性能
	this.$zaudio.syncStateOff('page-index-get-state')
}
```
## <span id="property">音频对象属性</span>
name | 描述 |其他
-|-|-
renderIndex | 当前zaudio渲染索引|
audiolist | 音频列表数组 | [{src:音频导致, title:音频名, singer: 作者, coverImgUrl: 音频封面}]
renderinfo | 当前渲染信息 |
playinfo | 当前播放信息|
paused | 音频暂停状态| true:暂停
playIndex | 当前播放索引|
renderIsPlay |渲染与播放是否一致 |
loading | 加载状态

+ 用法示例:
```
let zaudio = new ZAudio();
console.log(zaudio.audiolist); //获取当前的音频列表数据
console.log(zaudio.renderIndex); //获取当前zaudio组件渲染音频的索引值
```
注意: 上面的获取的属性不是实时的状态, 实时获取见[`实时获取音频播放状态和属性`](#params)

## 背景播放配置

在 manifest.json 中配置
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

注意 ios 端需要打包 ipa 才生效
iOS

```
"ios" : {
    "UIBackgroundModes" : [ "audio" ]
}
```


## 如果你觉得这个项目不错, 或是想增加新功能 [欢迎Star Fork PR](https://gitee.com/jingangtui/uniapp-z-audio.git)

