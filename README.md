### uniapp 音频后台播放组件

---
#### 特性
+ 支持H5, app, 微信小程序播放
+ 支持切换后台播放
+ 支持来电中断后续播

#### 预览

<img src="screenshop/../screenshot/2.png" style="width:240px;margin-left: 10px">
<img src="screenshop/../screenshot/3.png" style="width:240px;margin-left: 10px">
<img src="screenshop/../screenshot/1.png" style="width:200px">
#### 更新日志

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

#### 使用步骤

1. 引入挂载音频对象

暴露`$audio`音频对象 和 zaudio全局音频组件(全局组件只在H5中生效)

`$audio`为`uni.getBackgroundAudioManager`或`uni.createInnerAudioContext`实例对象,具体参考uniapp文档

```javascript
import ZAudioCtx from 'components/audio/index.js'
Vue.use(ZAudioCtx)
```


2. 小程序或app中引入zaudio局部组件
h5已使用全局组件,无需此步

```
import zaudio from '@/components/audio/zaudio.vue';
//...省略
export default {
	components:{zaudio},
}
```


3. 使用组件 (详见示例`/pages/detail/index.vue`和参数配置)
  - `<zaudio :list="audiolist" :theme="theme"></zaudio>`

4. 配置vuex属性和方法(store/index.js必须)

#### 组件参数配置

参数 | 类型 | 必填 | 描述 | 其他
-|-|-|-|-
list | [Object] | true | 音频列表 |  [{`src` (音频地址), `title` (标题), `singer`(作者), `coverImgUrl`(海报)}]
theme | String | false | 皮肤 | `theme2` or `theme1`;   默认`theme1`
themeColor | String | false | 进度条颜色 |  默认 `#42b983`
stepShow | Boolean | false | 显示快进按钮 |  默认 `true`, 只作用于`theme1`
autoplay | Boolean | false | 自动播放 |  默认 `false` 


#### vuex配置
store/index.js
+ state: 
  - `audiolist`: 播放列表

  - `playIndex`: 当前播放索引
  
  - `audio`: zaudio组件的渲染的音频数据

  - `playinfo`: $audio对象当前播放的音频数据

  - `paused`: $audio对象当前播放音频的暂停状态

  - `n_pause`: $audio对象当前播放音频的意外中断的状态

+ mutations: 

  - `setaudio`: 设置zaudio组件的渲染的音频数据

  - `setplay`: 设置$audio对象当前播放的音频数据

  - `setpause`: 设置$audio对象当前播放音频的暂停状态

  - `set_n_pause`: 设置$audio对象当前播放音频的意外中断的状态
  
  - `set_playIndex`: 设置播放索引

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

![wechat](http://jingangtui.gitee.io/uniapp-z-audio/wechat.jpg)