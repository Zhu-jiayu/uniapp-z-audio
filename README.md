### uniapp 音频后台播放组件

---
#### 特性
+ 支持H5, app, 微信小程序播放
+ 支持切换后台播放
+ 支持来电中断后续播

#### 预览
<img src="screenshop/../screenshot/music.png" style="width:200px">
<img src="screenshop/../screenshot/fm.png" style="width:240px;margin-left: 20px">

#### 更新日志

v0.0.34
- 完善使用文档
- 替换音频链接
- 主题参数替换为`theme1`和`theme2`

v0.0.32
- 增加音频列表更新, 切换主题的示例

v0.0.3
- 增加皮肤选择,  自定义主题色, 隐藏快进按钮

v0.0.1
- 支持 h5, app, 微信小程序播放
- 支持小程序, app 后台播放
- 支持来电中断后续播(app 端)

#### 使用步骤

1. 创建并挂载音频对象
```javascript
// #ifndef H5
var gaudioctx=uni.getBackgroundAudioManager()
// #endif
// #ifdef H5
var gaudioctx=uni.createInnerAudioContext()
// #endif
Vue.prototype.$audio = gaudioctx
```
2. 引入并使用组件 (详见示例`/pages/detail/index.vue`和参数配置)
  - `import zaudio from '@/components/audio/zaudio';`
  - `<zaudio :info="audiolist[k]" v-if="k" :theme="theme"></zaudio>`

3. 配置vuex属性和方法

#### 参数配置

参数 | 类型 | require | 描述 | 其他
-|-|-|-|-
info | Object | true | 音频对象 | info对象: `src` (音频地址), `title` (标题), `singer`(作者), `coverImgUrl`(海报)
theme | String | false | 皮肤 | `theme2` or `theme1`;   默认`theme1`
themeColor | String | false | 进度条颜色 |  默认 `#42b983`
stepShow | Boolean | false | 显示快进按钮 |  默认 `true`



#### vuex配置
store/index.js
+ state: 
  - `audiolist`: 播放列表

  - `audiolist2`: 切换的播放列表

  - `audio`: zaudio组件的渲染的音频数据

  - `playinfo`: $audio对象当前播放的音频数据

  - `paused`: $audio对象当前播放音频的暂停状态

  - `n_pause`: $audio对象当前播放音频的意外中断的状态

+ mutations: 

  - `setaudio`: 设置zaudio组件的渲染的音频数据

  - `setplay`: 设置$audio对象当前播放的音频数据

  - `setpause`: 设置$audio对象当前播放音频的暂停状态

  - `set_n_pause`: 设置$audio对象当前播放音频的意外中断的状态

  - `updateAudioList`: 切换播放列表

#### 后台播放配置
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

iOS

```
"ios" : {
    "UIBackgroundModes" : [ "audio" ]
}
```

#### Donate
如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示鼓励

![wechat](http://cdn.jingangtui.top/wechat.jpg)