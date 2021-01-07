interface audio {
    src: string;
    title: string;
    singer: string;
    coverImgUrl: string;
}
interface audioInfo extends audio {
    current: string | number;
    duration: string | number;
    duration_value: number;
    current_value: number;
}
interface zaudioProperty {
    renderIndex: number;
    audiolist: Array<audio>;
    renderinfo: audioInfo;
    playinfo: audioInfo;
    paused: boolean;
    uPause: boolean;
    audioCtx: any;
    autoPlay: boolean;
    defaultCover: string;
    continuePlay: boolean;
}
declare enum zaudioCbName {
    onError = "error",
    onTimeUpdate = "playing",
    onCanplay = "canPlay",
    onPause = "pause",
    onEnded = "ended",
    setAudio = "setAudio",
    updateAudio = "updateAudio",
    seek = "seek",
    onStop = "stop",
    syncStateOn = "syncStateOn"
}
import { EventBus } from "./util";
/**
 * ZAudio类
 * @class ZAudio
 * @constructor
 * @param    {String}    defaultCover    音频默认封面
 * @param    {Boolean}   continuePlay    继续播放,错误播放或结束播放后执行
 * @param    {Boolean}   autoPlay        自动播放,部分浏览器不支持
 * @property {Number}         renderIndex     当前渲染索引
 * @property {<audioinfo>}      renderinfo      当前渲染数据
 * @property {Array<audio>}   audiolist       音频列表数组
 * @property {<audioinfo>}      playinfo        当前播放数据
 * @property {Boolean}        paused          音频暂停状态
 * @property {Number}         playIndex       当前播放索引
 * @property {Boolean}        renderIsPlay    渲染与播放是否一致
 *
 * @method on(event, action, fn)       回调函数注册业务事件
 * @method off(event, action)          回调函数中卸载业务事件
 * @method setRender(data)             指定音频, 渲染到zaudio组件
 * @method syncRender()    						 同步并渲染当前的播放状态
 * @method operate(index)       			 播放或暂停指定索引的音频
 * @method setAudio(list)		   				 覆盖音频列表
 * @method updateAudio(list)   				 添加音频列表
 * @method stop()          						 强制暂停当前播放音频
 * @method stepPlay(count)      				快进快退
 * @method syncStateOn(action, cb)       	注册一个用于同步获取当前播放状态的事件
 * @method syncStateOff(action)     		卸载用于同步获取当前播放状态的事件
 *
 *
 * **/
export declare class ZAudio extends EventBus implements zaudioProperty {
    static version: string;
    renderIndex: number;
    audiolist: Array<audio>;
    renderinfo: audioInfo;
    playinfo: audioInfo;
    paused: boolean;
    uPause: boolean;
    audioCtx: any;
    autoPlay: boolean;
    defaultCover: string;
    continuePlay: boolean;
    constructor(options: {
        defaultCover: string;
        autoPlay: boolean;
        continuePlay: boolean;
    });
    private init;
    /**
     * @description 回调中卸载业务事件
     * @param {<zaudioCbName>}   event     回调名称枚举值,具体看types.ts
     * @param {Sting}         action    业务函数名,用于区分不同业务
     * @returns undefined
     * **/
    off(event: zaudioCbName, action: string): void;
    /**
     * @description 回调中注册业务事件
     * @param {<zaudioCbName>}        event     回调名称枚举值,具体看types.ts
     * @param {Sting}              action    业务函数名,用于区分不同业务
     * @param {function(object|string|number|undefined):undefined}      fn      业务函数, 参数或为音频状态
     * @returns undefined
     * **/
    on(event: zaudioCbName, action: string, fn: (arg0?: any) => void): void;
    /**
     * @description 订阅触发音频回调
     * @param {<zaudioCbName>}        event      回调名称枚举值,具体看types.ts
     * @param {object|string|number|undefined}     data        订阅触发回调时,传的音频属性
     * @returns undefined
     * **/
    emit(event: zaudioCbName, data?: any): void;
    private commit;
    private onCanplayHandler;
    private onPlayHandler;
    private onPauseHandler;
    private onStopHandler;
    private onEndedHandler;
    private onTimeUpdateHandler;
    private onErrorHandler;
    syncRender(): void;
    syncStateOn(action: string, fn: () => {}): void;
    syncStateOff(action: string): void;
    syncEmitState(): void;
    seek(value: number): void;
    stepPlay(value: number): void;
    changeplay(count: number): void;
    operate(key?: any): void;
    stop(): void;
    private operation;
    setAudio(data: Array<audio>): void;
    updateAudio(data: Array<audio>): void;
    setPlayinfo(data: audioInfo): void;
    setPause(data: boolean): void;
    setUnnormalPause(data: boolean): void;
    setRender(data: number | string | audioInfo): void;
    get playIndex(): number;
    get renderIsPlay(): boolean;
    private appCheckReplay;
}
export {};
