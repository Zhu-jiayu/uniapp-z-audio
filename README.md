# uniapp 音频后台播放组件

## 特性
+ 支持H5, app, 微信小程序播放
+ 支持切换后台播放
+ 支持来电中断后续播
+ 支持全局多页面同步播放状态

## 预览
<img src="https://jingangtui.gitee.io/static/1.png" style="width:200px">
<img src="https://jingangtui.gitee.io/static/2.png" style="width:240px;margin-left: 10px">
<img src="https://jingangtui.gitee.io/static/3.png" style="width:240px;margin-left: 10px">

## 简要说明
+ 为了支持音频多页面状态同步, zaudio所有属性依赖vuex管理
+ 音频对象基于`uni.getBackgroundAudioManager`和`uni.createInnerAudioContext`创建
+ 具体使用方式,请下载示例

## 使用步骤 

0. <a href="javascript:void(0)">下载zaudio插件</a> or `npm install uniapp-zaudio`

1. 引入挂载ZAudio (main.js中)

```javascript
import store from './store'
Vue.prototype.$store = store;

// npm包引入方式
//import { ZAudio } from 'uniapp-zaudio/zaudio/index.js'

//zaudio插件方式
import { ZAudio } from 'zaudio/index.js'
Vue.use(ZAudio)
```

2. 配置ZAudioStore (store/index.js中)

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

3. 引入局部组件 
(用于小程序或app; h5已使用全局组件,无需此步)

```
// npm包引入方式
//import zaudio from 'uniapp-zaudio/zaudio/zaudio.vue';

import zaudio from '@/audio/zaudio.vue';
//...省略
export default {
	components:{zaudio},
}
```


4. 使用组件 

```
<zaudio theme="theme3" :autoplay="false" :continue="true" ref="zaudio"></zaudio>
```
	
5. 配置`mapMutations`和`mapGetters` (详见下面文档和示例)

```
computed: {
		...mapGetters(['audiolist', 'playIndex', 'playinfo', 'paused'])
	},
methods:{
	...mapMutations(['set_renderIndex', 'set_audiolist', 'set_audio']),
}
```

## 常用方法
1. 设置音频列表: 

   ```
   set_audiolist({
     data:[
   			   {
   				src: '',     //地址
   				title: '',     //标题
   				singer: '',      //作者
   				coverImgUrl: ''     //封面
   			   }
   		   ],
   		status: true      //true->更新audiolist false->覆盖audiolist
   })
   ```
	 
2. 指定zaudio渲染某首音频:  
   + 方法1: 指定索引
   key为audiolist数组中某个索引值
   ```
   this.set_renderIndex(key);  
   ```
   
   + 方法2:  指定播放信息
   参数为audiolist数组中某条数据
   ```
   this.set_audio(this.audiolist[key]);  
   ```
   
3. 指定zaudio播放或暂停(切歌播放或暂停)
   + 播放或暂停当前`渲染`的音频
   + 需放在`set_renderIndex` 或 `set_audio`之后使用
   + 播放暂停会自动判断
   + 参数true为固定值
   
    ```
	 <zaudio ref="zaudio"></zaudio>
	 this.$refs.zaudio.operation(true);    
	```
	
4. 同步渲染当前播放状态:  
   例如: <br/>
	 audiolist中有A和B两首歌, <br/>
	 当前处于列表页,列表页中zaudio渲染且播放歌曲A, <br/>
	 这时跳转详情页面,zaudio组件渲染歌曲B的信息,但未播放,<br/>
	 返回列表页需要看到当前A歌曲的播放状态.

	```javascript
	...mapGetters(['playIndex'])  //获取当前播放音频的索引值
	this.set_renderIndex(this.playIndex);  //渲染当前播放音频的状态
	```

	
	
	



## 组件参数配置

参数 | 类型 | 必填 | 描述 | 其他
-|-|-|-|-
default_cover | String | false | 默认音频封面 | 
theme | String | false | 皮肤 | `theme2` or `theme1` or `theme3`;   默认`theme1`
themeColor | String | false | 进度条颜色 |  默认 `#42b983`
stepShow | Boolean | false | 显示快进按钮 |  默认 `true`, 只作用于`theme1`
autoplay | Boolean | false | 自动播放 |  默认 `false` 
continue | Boolean | false | 下一首续播 |  默认 `true` 

## mapMutations与 mapGetters

+ mapMutations: 
  - `set_renderIndex`: 设置`zaudio组件`渲染的索引值和渲染信息

  用法:  
  
  ```
  set_renderIndex(2)   //渲染列表索引为2的数据
  ```
  
  - `set_audiolist`: 设置音频列表数据
  
   用法:  
   
   ```
	 /**
	 * @params status Boolean  true->更新audiolist false->覆盖audiolist
	 * @params data   Array    列表数据
	 **/
	 
   set_audiolist({
	   data:[
			   {
				src: '',     //地址
				title: '',     //标题
				singer: '',      //作者
				coverImgUrl: ''     //封面
			   }
		   ],
		status: true       //true->更新audiolist false->覆盖audiolist
   })
   ```

  - `set_audio`: 设置`zaudio组件`当前渲染的音频信息, 若音频信息包含在`audiolist`中, 则会更新`renderIndex`

  用法:
  ```
  set_audio({
	   	src: '',     //地址
	   	title: '',     //标题
	   	singer: '',      //作者
	   	coverImgUrl: ''     //封面
	   });
  ```

  - `set_playinfo`: 设置当前音频播放信息`(具体开发时不需要用到)`

  用法:
	
  ```
  set_playinfo({
		src: '',
		title: '',
		singer: '',
		coverImgUrl: '',
		duration: '',
		duration_value: ''
	});
  ```

  - `set_pause`: 设置当前音频暂停状态`(具体开发时不需要用到)`
  
  用法:
	
  ```
  set_pause(true);
  ```
  
  - `set_n_pause`: 设置当前音频意外中断状态`(具体开发时不需要用到)`
  
  用法:
	
  ```
  set_n_pause(false);
  ```
  
+ mapGetters:
  - audiolist: 返回音频列表数据
  - playinfo: 返回当前`正在播放`的数据
  - playIndex: 返回当前`正在播放`的数据索引值
  - n_pause: 返回意外中断状态
  -	paused: 返回音频暂停状态
  - renderIndex: 返回`zaudio组件`渲染的索引值
  - audio: 返回`zaudio组件`当前渲染的音频信息
  - renderIsPlay: 返回判断渲染与播放是否是同一首音频


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