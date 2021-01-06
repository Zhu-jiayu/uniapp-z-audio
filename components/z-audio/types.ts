interface audio {
  src: string; //音频地址
  title: string; //音频标题
  singer: string; //音频作者
  coverImgUrl: string; //音频封面
}

interface audioInfo extends audio {
  current: string | number; //当前播放时间
  duration: string | number; //总时间
  duration_value: number; //总时长
  current_value: number; //当前播放时长
} 
export enum eventName {
  error = "error", //错误播放时回调
  playing = "playing", //播放时回调
  canPlay = "canPlay", //可以播放回调
  pause = "pause", //暂停回调
  ended = "ended", //结束回调
  setAudio = "setAudio", //覆盖音频的回调
  updateAudio = "updateAudio", //添加音频的回调
  seek = "seek", //快进拖到回调
  stop = "stop", //小程序音频浮窗关闭回调, 停止播放回调
  syncStateOn = "syncStateOn", //同步获取属性回调
}
 
