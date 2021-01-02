# uniapp 背景音频播放组件

## 预览

[http://jingangtui.gitee.io/uniapp-z-audio/#/](http://jingangtui.gitee.io/uniapp-z-audio/#/)

## 特性

- 支持 H5, app, 微信小程序播放
- 支持切换后台播放
- 支持全局多页面同步播放状态
- 内含 3 种常用 UI 样式
- 支持来电中断后续播
- 支持一个音频回调事件注册多个业务事件(v2.1.0 版本之后)

## 简要说明

- v2.1.0 版本之后不再依赖 vuex;
- 音频对象基于`uni.getBackgroundAudioManager`和`uni.createInnerAudioContext`创建
- 具体使用方式,请下载示例
- 若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)

## 使用步骤

# 下面文档请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git), dcloud 的 markdown 有 bug, 部分字段不显示

1. <a href="https://ext.dcloud.net.cn/plugin?id=1888">插件市场下载</a> or `npm install uniapp-zaudio`

2. 实例化 ZAudio 并挂载 (main.js)

注意大小写 ZAudio

```javascript
import { ZAudio } from "@/components/z-audio";
// npm引用方式
// import { ZAudio } from 'uniapp-zaudio'
let zaudio = new ZAudio({
  continuePlay: true, //续播
  autoPlay: true, //自动播放 部分浏览器不支持
});
Vue.prototype.$zaudio = zaudio;
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
zaudio.setAudio(data);
```

4. 引用组件
   注意大小写 zaudio

```javascript
import zaudio from "@/components/z-audio/z-audio";
// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue'
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

若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)

| 参数       | 类型   | 必填  | 描述       | 其他                                           |
| ---------- | ------ | ----- | ---------- | ---------------------------------------------- |
| theme      | String | false | 主题       | `theme2` or `theme1` or `theme3`; 默认`theme1` |
| themeColor | String | false | 进度条颜色 | 默认 `#42b983`                                 |

## ZAudio参数和实例方法

若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)

| 参数         | 类型    | 必填  | 描述                         | 其他       |
| ------------ | ------- | ----- | ---------------------------- | ---------- |
| defaultCover | String  | false | 音频海报(背景播放时用与展示) |
| continuePlay | Boolean | false | 下一首续播                   | 默认 true  |
| autoPlay     | Boolean | false | 自动播放,部分浏览器不支持    | 默认 false |

| 实例方法                    | 描述                                  | 其他                                                                                  |
| --------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| on(event, action, callback) | 回调函数中注册业务事件                | 参数: event(音频回调方法), action(业务名), callback(业务函数); 见`回调与注册业务事件` |
| off(event, action)          | 回调函数中卸载业务事件                | 参数: event(音频回调方法), action(业务名);见`回调与注册业务事件`                      |
| setRender(data)             | 指定音频索引或对象,渲染到 zaudio 组件 | 参数 data:number,string,object                                                        |
| syncRender()                | 同步并渲染当前的播放状态              |
| operate(index)              | 播放或暂停指定索引的音频              | 参数 index: number                                                                    |
| setAudio(data)              | 覆盖音频列表                          | 参数 data:对象数组 [{src: 音频地址, title: 音频名, singer: 歌手 coverImgUrl: 封面}]   |
| updateAudio(data)           | 添加音频列表                          | 参数 data:对象数组 [{src: 音频地址, title: 音频名, singer: 歌手 coverImgUrl: 封面}]   |
| stop()                      | 暂停当前播放音频                      |
| stepPlay(count)             | 快进快退                              | 参数 count:number                                                                     |

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

## 音频回调事件与注册业务

- 音频播放会触发不同的回调方法(如播放回调, 暂停回调), 一个回调方法可以注册多个互不影响的业务事件;
- 用法`zaudio.on(event, action, callback)`, `zaudio.off(event, action)`, `event`参数见下面文档, `action`参数为自定义的业务函数名, `callback`为触发的业务函数
- 一个业务函数名在同一个音频回调事件中只能注册一次

若文档展示不全,请查看[gitee](https://gitee.com/jingangtui/uniapp-z-audio.git)或下载[示例](https://ext.dcloud.net.cn/plugin?id=1888)

| event(音频回调事件)  | 描述           | 其他                              |
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

```javasctipt
let zaudio = new ZAudio();

//播放回调注册事件A
zaudio.on('playing', 'event-a', info=>{
	console.log('事件A----',info)
})
//播放回调注册事件B
zaudio.on('playing', 'event-b', info=>{
	console.log('事件B----',info)
})

//----当你播放音频时, 会同时打`事件A`和`事件B`


//卸载播放回调中的事件A, 注意action要和注册时一致
zaudio.off('playing', 'event-a')

//-----卸载后只打印`事件B`

```

## 获取音频属性

- 如果你不需要获取音频进度或属性,你可以忽略此步
- v2.1.0 版本不再依赖 vuex, 所以获取音频属性时, 你需要在页面中注册一个获取音频播放进度属性的事件;

```javascript
data(){
	return {
			audiolist: this.$zaudio.audiolist, //当前音频列表
			playIndex: this.$zaudio.playIndex, //当前播放的索引
			paused: this.$zaudio.paused, //当前是否暂停
			playinfo: this.$zaudio.playinfo //当前播放的信息

	}
}
onLoad(){
	this.getAudioState
},
methods:{
	getAudioState(){
		let action = 'getAudioState';

		//设置音频回调时同步音频列表
		this.$zaudio.on('setAudio', action, list => {
			this.audiolist = [...list];
		});
		//更新音频回调时同步音频列表
		this.$zaudio.on('updateAudio', action, list => {
			this.audiolist = [...list];
		});
		//开始播放回调时同步正在播放的音频进度, 暂停状态, 正在播放索引
		this.$zaudio.on('canPlay', action, data => {
			this.playinfo = data;
			this.paused = this.$zaudio.paused;
			this.playIndex = this.$zaudio.playIndex;
		});
		//播放中回调,同步正在播放的音频进度
		this.$zaudio.on('playing', action, data => {
			this.playinfo = data;
		});
		//播放暂停回调同步音频暂停状态
		this.$zaudio.on('pause', action, () => {
			this.paused = this.$zaudio.paused;
		});
	}
}
```
## 音频对象属性
name | 描述 |其他
-|-|-
renderIndex | 当前zaudio渲染索引|
audiolist | 音频列表数组 | [{src:音频导致, title:音频名, singer: 作者, coverImgUrl: 音频封面}]
renderinfo | 当前渲染信息 |
playinfo | 当前播放信息|
paused | 音频暂停状态| true:暂停
playIndex | 当前播放索引|
renderIsPlay |渲染与播放是否一致 |
用法示例:
```javascript
let zaudio=new ZAudio();
zaudio.playinfo; // 音频播放信息
zaudio.paused;   //音频暂停状态
```

## 切换后台播放配置

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
