# uniapp-zaudio 背景音频播放组件

当前版本`v2.1.1`
## 预览
[http://jingangtui.gitee.io/uniapp-z-audio/#/](http://jingangtui.gitee.io/uniapp-z-audio/#/)

# 若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)

## 特性
- 支持 H5, app, 微信小程序播放
- 支持背景音频播放
- 支持多页面同步状态
- 支持 3 种 UI 样式
- 支持来电中断后续播
- 支持同一个音频回调中注册多个业务事件(v2.1.0 版本之后)

## 简要说明
- v2.1.0 版本之后不再依赖 vuex; (依赖vuex版本请查看[gitee v2.0分支](https://gitee.com/jingangtui/uniapp-z-audio.git))
- 音频对象基于`uni.getBackgroundAudioManager`和`uni.createInnerAudioContext`创建
- 具体使用方式,请下载示例

## 使用步骤
1. <a href="https://ext.dcloud.net.cn/plugin?id=1888">插件市场下载</a> or `npm install uniapp-zaudio`

2. 实例化 ZAudio 并挂载 (main.js)

注意大小写 ZAudio

```javascript
import { ZAudio } from "@/components/z-audio";

// import { ZAudio } from 'uniapp-zaudio' // npm引用方式

let zaudio = new ZAudio({
  continuePlay: true, //续播
  autoPlay: true, //自动播放 部分浏览器不支持
});
Vue.prototype.$zaudio = zaudio; //挂载vue原型链上

//模拟音频初始数据
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
```

4. 引用组件
   注意大小写 zaudio

```javascript
import zaudio from "@/components/z-audio/z-audio";
// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue' //npm引入
export default {
  components: { zaudio: zaudio },
};
```

```html
<zaudio theme="theme3"></zaudio>
```

## 注意项

- 示例在 app 运行时,注意开启网络权限,若不显示数据则重启 app 应用,或者检查网络权限问题

## zaudio 组件参数配置


| 参数       | 类型   | 必填  | 描述       | 其他                                           |
| ---------- | ------ | ----- | ---------- | ---------------------------------------------- |
| theme      | String | false | 主题       | `theme2` or `theme1` or `theme3`; 默认`theme1` |
| themeColor | String | false | 进度条颜色 | 默认 `#42b983`                                 |

用法示例:
```
<zaudio theme="theme1"  themeColor="#42b983" />
```


## ZAudio参数和实例方法


| 参数         | 类型    | 必填  | 描述                         | 其他       |
| ------------ | ------- | ----- | ---------------------------- | ---------- |
| defaultCover | String  | false | 默认音频封面 |
| continuePlay | Boolean | false | 下一首续播                   | 默认 true  |
| autoPlay     | Boolean | false | 自动播放,部分浏览器不支持    | 默认 false |

| 实例方法                    | 描述                                  | 参数                                                                                  |
| --------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| on(event, action, callback) | 回调函数中注册业务事件                | event(音频回调方法), action(业务名), callback(业务函数); 见[`音频回调事件中注册业务`](#callback) |
| off(event, action)          | 回调函数中卸载业务事件                | event(音频回调方法), action(业务名);见[`音频回调事件中注册业务`](#callback)                      |
| setRender(data)             | 指定音频索引或对象,渲染到 zaudio 组件 |  索引(number或string类型) 或 音频对象(object类型)                                                  |
| operate(index)              | 指定索引的音频, 播放或暂停             | 索引, number类型                                                          |
| setAudio(data)              | 覆盖音频列表                          | 对象数组, 例: [{src: 音频地址, title: 音频名, singer: 歌手 coverImgUrl: 封面}]   |
| updateAudio(data)           | 添加音频列表                          | 对象数组, 例: [{src: 音频地址, title: 音频名, singer: 歌手 coverImgUrl: 封面}]   |
| stop()                      | 暂停当前播放音频                      |
| stepPlay(count)             | 快进快退                              | 单位秒, number类型                                                               |
| syncRender()                | 同步渲染当前播放状态           | 见[`同步渲染当前播放状态`](#syncrender)
| syncStateOn(action, callback)           | 注册一个用于同步获取当前播放状态的事件            | action(业务名), callback(回调函数), 见[`同步获取当前音频状态`](#params)
| syncStateOff(action, callback)           | 卸载用于同步获取当前播放状态的事件             | action(业务名), callback(回调函数), 见[`同步获取当前音频状态`](#params)

用法示例:

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
zaudio.setAudio(data);
//播放或暂停第一首音频
zaudio.operate(1);
```

## <span id="callback">音频回调事件中注册业务</span>
- `zaudio.on(event, action, callback)`注册业务事件, `zaudio.off(event, action)`卸载业务事件
- `event`参数是回调方法名,见下面文档, `action`参数为自定义的业务函数名, `callback`为触发的业务函数
- 音频事件会触发不同的回调方法(如播放回调, 暂停回调), 一个回调方法可以注册多个互不影响的业务事件;
- 一个业务函数名在同一个音频回调事件中只能注册一次, 多次注册不会被覆盖


| event(音频回调名)  | 描述           | 其他                              |
| ----------- | -------------- | --------------------------------- |
| error       | 错误播放时回调 |
| playing     | 播放时回调     | callback 参数为当前播放的音频对象 |
| canPlay     | 初始播放时回调 | callback 参数为当前播放的音频对象 |
| pause       | 暂停回调       |
| ended       | 结束回调       |
| setAudio    | 覆盖音频的回调 | callback 参数为当前音频列表       |
| updateAudio | 添加音频的回调 | callback 参数为当前音频列表       |
| stop        | 收到暂停回调   |
| seek        | 快进拖动回调   |

用法示例:

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

 
## <span id="syncrender">同步渲染当前播放状态</span>
+ 适用情况: 当zaudio组件渲染了其他数据, 需要同步渲染当前的播放状态
用法示例: 
```javascript
onShow(){
	//同步渲染当前的播放状态
	this.$zaudio.syncRender();
},
```

## <span id="params">同步获取当前音频状态</span>
- 由于v2.1.x之后版本不依赖vuex, 音频状态需要手动同步获取, zaudio组件中已做此步处理;
- 如果你不需要同步获取音频属性与状态, 可以忽略此步骤

用法示例: 

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
	//同步获取当前播放状态
	this.getAudioState();
},
methods:{
	getAudioState() {
		//注册page-index-get-state, 同步获取zaudio属性状态
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
#### 音频对象属性
name | 描述 |其他
-|-|-
renderIndex | 当前zaudio渲染索引|
audiolist | 音频列表数组 | [{src:音频导致, title:音频名, singer: 作者, coverImgUrl: 音频封面}]
renderinfo | 当前渲染信息 |
playinfo | 当前播放信息|
paused | 音频暂停状态| true:暂停
playIndex | 当前播放索引|
renderIsPlay |渲染与播放是否一致 |


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

## 如果你觉得这个项目不错, 给我一个[STAR](https://gitee.com/jingangtui/uniapp-z-audio.git)
