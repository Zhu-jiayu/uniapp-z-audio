/**
 * options参数
 * @param defaultCover  <String>   音频默认海报
 * @param continuePlay  <Boolean>  继续播放         错误播放或结束播放后执行
 * @param autoPlay      <Boolean>  自动播放
 */

/**----------------------------------------zaudio.on(event, action, callback) 注册回调方法
 *----------------------------------------zaudio.off(event, action) 卸载回调方法
 * @event error       错误播放时回调
 * @event playing     播放时回调         @return playinfo
 * @event canPlay     可以播放回调       @return playinfo
 * @event pause       暂停回调
 * @event ended       结束回调
 * @event setAudio    覆盖音频的回调      @return audiolist
 * @event updateAudio    添加音频的回调   @return audiolist
 * @event stop         暂停的回调        
 * @event seek         快进拖到回调        
 * 
 * -----------------------------------------zaudio 实例方法
 * @method on           回调函数注册业务事件
 * @method off          回调函数中卸载业务事件
 * @method setRender     指定音频, 渲染到zaudio组件
 * @method syncRender    同步并渲染当前的播放状态
 * @method operate       播放或暂停指定索引的音频
 * @method setAudio		   覆盖音频列表
 * @method updateAudio   添加音频列表
 * @method stop          暂停当前播放音频
 * @method stepPlay      快进快退@param number
 * **/
import {
	formatSeconds as format
} from './util.js';


class EventBus {
	constructor() {
		this._events = new Map();
	}
	on(event, action, fn) {
		if (event !== undefined && action !== undefined) {
			let arr = this._events.get(event);

			let hasAction = arr ? arr.findIndex((i) => i.action == action) : -1;
			if (hasAction > -1) {
				return
			}
			this._events.set(event, [
				...(this._events.get(event) || []),
				{
					action,
					fn
				},
			]);
		}
	}
	has(event) {
		return this._events.has(event);
	}
	emit(event, data) {
		if (!this.has(event)) {
			return false;
		}
		let arr = this._events.get(event);
		arr.forEach((i) => {
			i.fn(data);
		});
	}
	off(event, action) {
		if (!this.has(event)) {
			return false;
		}
		let arr = this._events.get(event);
		let newdata = arr.filter((i) => i.action !== action);
		this._events.set(event, [...newdata]);
	}
}

export default class ZAudio extends EventBus {

	static version = '2.1.0';

	renderIndex = 0; // 组件渲染的索引值
	audiolist = []; //音频列表
	renderinfo = { //zaudio组件-当前渲染的音频数据
		current: 0, //当前时间
		duration: 0, //总时间
		duration_value: 0, //总长度
		current_value: 0, //当前长度
		src: '', //当前音频地址
		title: '', //当前音频标题
		singer: '', //当前音频作者
		coverImgUrl: '', //当前音频封面
	};
	playinfo = { //$zaudio对象-当前播放的音频数据
		current: 0, //当前时间
		duration: 0, //总时间
		duration_value: 0, //总长度
		current_value: 0, //当前长度
		src: "", //当前音频地址	
		title: '', //当前音频标题
		singer: '', //当前音频作者
		coverImgUrl: '' //当前音频封面
	};
	paused = true; //$zaudio对象当前播放音频的暂停状态
	uPause = false; //$zaudio对象当前播放音频的意外中断的状态

	constructor(options) {
		super(options)
		let {
			defaultCover = '',
				autoPlay = false,
				continuePlay = true,
		} = options;



		if (this.audioCtx) return


		this.defaultCover = defaultCover;
		this.autoPlay = autoPlay;
		this.continuePlay = continuePlay;

		this.init();


	}
	init() {

		// #ifndef H5
		var audioCtx = uni.getBackgroundAudioManager()
		// #endif

		// #ifdef H5
		var audioCtx = uni.createInnerAudioContext()
		audioCtx.autoplay = this.autoPlay
		// #endif

		this.audioCtx = audioCtx;

		this.audioCtx.onCanplay(this.onCanplayHandle.bind(this))
		this.audioCtx.onPlay(this.onPlayHandle.bind(this))
		this.audioCtx.onPause(this.onPauseHandle.bind(this))
		this.audioCtx.onStop(this.onStopHandle.bind(this))
		this.audioCtx.onEnded(this.onEndedHandle.bind(this))
		this.audioCtx.onTimeUpdate(this.onTimeUpdateHandle.bind(this))
		this.audioCtx.onError(this.onErrorHandle.bind(this))

		// #ifndef H5
		setTimeout(() => {
			if (this.autoPlay) {
				this.operate()
			}
		}, 500)
		// #endif


		this.appCheckReplay()
	}



	onCanplayHandle() {
		super.emit('canPlay', this.playinfo)
	}
	onPlayHandle() {
		const {
			src: renderSrc,
			title: renderTitle,
			singer: renderSinger,
			coverImgUrl: renderCoverImgUrl
		} = this.renderinfo;

		// #ifdef APP-PLUS
		this.commit("setPlayinfo", {
			duration: format(this.audioCtx.duration),
			duration_value: this.audioCtx.duration
		});
		// #endif
		this.commit("setPause", false)
		this.commit("setUnnormalPause", false)

	}
	onPauseHandle() {
		this.commit("setPause", true)
		super.emit('pause')
	}
	onStopHandle() {
		this.commit("setPause", true)
	}
	onEndedHandle() {
		this.commit("setPause", true);
		this.audioCtx.startTime = 0;
		this.commit("setPlayinfo", {
			current: format('0'),
			current_value: '0'
		})
		super.emit('end')

		//续播
		if (this.continuePlay) {
			this.changeplay(1);
		}

	}
	onTimeUpdateHandle() {

		if (this.renderIsPlay) {
			this.commit("setPlayinfo", {
				current: format(this.audioCtx.currentTime),
				current_value: this.audioCtx.currentTime
			})

			// #ifndef APP-PLUS
			if (this.audioCtx.duration != this.playinfo.duration_value) {

				this.commit("setPlayinfo", {
					duration: format(this.audioCtx.duration),
					duration_value: this.audioCtx.duration
				})
			}
			// #endif
		}

		super.emit("playing", this.playinfo)
	}
	onErrorHandle() {
		this.commit("setPause", true)

		this.commit("setRender", {
			src: '',
			title: '',
			singer: '',
			coverImgUrl: ''
		})
		this.commit("setPlayinfo", {
			current: 0,
			current_value: 0,
			duration: 0,
			duration_value: 0,
			title: '',
			src: ''
		});
		super.emit('error')
		if (this.continuePlay) {
			this.changeplay(1);
		}
	}
	//卸载监听回调事件
	off(event, action){
		super.off(event, action)
	}
	commit(action, data) {
		typeof this[action] === 'function' && this[action](data)
	}

	//同步渲染当前状态 (用于不同页面zaudio组件同步播放状态)
	syncRender() {
		this.setRender(this.playIndex);
	}


	//指定位置
	seek(value) {
		this.audioCtx.seek(value)
		setTimeout(() => {
			super.emit('seek', this.playinfo.current)
		}, 0)

	}

	//快进,退
	stepPlay(value) {
		if (this.renderIsPlay) {
			var pos = this.playinfo.current_value + value
			this.seek(pos);
		}
	}
	//切歌
	changeplay(count) {
		if (this.renderIsPlay) {
			var nowindex = this.renderIndex;
			nowindex += count;
			nowindex = nowindex < 0 ? this.audiolist.length - 1 : nowindex > this.audiolist.length - 1 ? 0 : nowindex;
			this.commit("setPause", true);
			this.operate(nowindex)
		} else {
			this.commit("setPause", true);
			this.operate(this.renderIndex)
		}


	}
	//手动播放或暂停, 并渲染对应的数据
	operate(key) {
		key !== undefined && this.commit("setRender", key);
		this.operation();

	}
	//暂停播放
	stop() {
		this.audioCtx.pause();
		this.commit('setPause', true)
		this.commit('setUnnormalPause', true)
		super.emit('stop')
	}

	//播放,暂停事件判断, 
	//播放数据与渲染数据相同时: 播放->暂停, 暂停->播放
	//播放数据与渲染数据不相同时: 播放渲染音频
	operation() {
		const {
			duration,
			current,
			duration_value,
			current_value,
			src
		} = this.playinfo;
		const {
			src: renderSrc,
			title: renderTitle,
			singer: renderSinger,
			coverImgUrl: renderCoverImgUrl
		} = this.renderinfo;


		let renderIsPlay = this.renderIsPlay;
		let paused = this.paused;

		if (!renderIsPlay) { //渲染与播放地址 不同

			this.audioCtx.src = renderSrc;
			this.audioCtx.title = renderTitle;
			this.audioCtx.singer = renderSinger;
			this.audioCtx.coverImgUrl = renderCoverImgUrl || this.defaultCover;

			this.audioCtx.startTime = 0;
			this.audioCtx.seek(0);

			this.audioCtx.play();
			this.commit('setPause', false)
			this.commit("setPlayinfo", {
				src: renderSrc,
				title: renderTitle,
				singer: renderSinger,
				coverImgUrl: renderCoverImgUrl
			});

		} else {

			if (paused) { //渲染与播放地址相同
				this.audioCtx.play();

				this.audioCtx.startTime = parseFloat(current_value);
				this.audioCtx.seek(parseFloat(current_value));
				this.commit('setPause', false)


				this.commit("setPlayinfo", {
					src: renderSrc,
					title: renderTitle,
					singer: renderSinger,
					coverImgUrl: renderCoverImgUrl
				});
			} else {
				this.audioCtx.pause();
				this.commit('setPause', true)
				this.commit('setUnnormalPause', true)
			}
		}
	}


	//覆盖音频
	setAudio(data) {
		this.audiolist = [...data];
		super.emit("setAudio", this.audiolist)
	}
	//添加音频
	updateAudio(data) {
		this.audiolist.push(...data)
		super.emit("updateAudio", this.audiolist)
	}

	//设置当前播放信息
	setPlayinfo(data) {
		if (data.current) {
			this.playinfo.current = data.current
		}
		if (data.duration) {
			this.playinfo.duration = data.duration
		}
		if (data.duration_value) {
			this.playinfo.duration_value = data.duration_value
		}
		if (data.current_value) {
			this.playinfo.current_value = data.current_value
		}
		if (data.src) {
			this.playinfo.src = data.src
		}
		if (data.title) {
			this.playinfo.title = data.title
		}
		if (data.singer) {
			this.playinfo.singer = data.singer
		}
		if (data.coverImgUrl) {
			this.playinfo.coverImgUrl = data.coverImgUrl
		}

	}
	//设置暂停状态
	setPause(data) {
		this.paused = data
	}
	//设置通话时暂停状态
	setUnnormalPause(data) {
		this.uPause = data
	}

	//设置渲染 @param 索引或渲染信息
	setRender(data) {
		if (this.audiolist.length == 0) return

		if (typeof data === 'number' || typeof data === 'string') {
			this.renderIndex = data * 1;
			this.renderinfo = {
				src: this.audiolist[data].src,
				title: this.audiolist[data].title,
				singer: this.audiolist[data].singer,
				coverImgUrl: this.audiolist[data].coverImgUrl,
				current: '00:00',
				duration: '00:00',
				current_value: 0,
				duration_value: 100
			}
		} else {
			this.renderinfo = data;
			let renderIndex = this.audiolist.findIndex(i => i.src == data.src);
			if (renderIndex >= 0) {
				this.renderIndex = renderIndex;
			}

		}
	}

	//当前索引
	get playIndex() {
		let index = this.audiolist.findIndex(i => i.src == this.playinfo.src)
		return index <= 0 ? 0 : index
	}
	//渲染与播放是否一致
	get renderIsPlay() {
		return this.renderinfo.src == this.playinfo.src
	}


	//app端判断电话来电后, 音频意外中断之后的继续播放
	appCheckReplay() {
		let _t = this;
		// #ifdef APP-PLUS
		try {
			if (uni.getSystemInfoSync().platform == 'android') {

				var main = plus.android.runtimeMainActivity();
				var Context = plus.android.importClass("android.content.Context");

				var telephonyManager = plus.android.importClass("android.telephony.TelephonyManager");

				var telephonyManager = plus.android.runtimeMainActivity().getSystemService(Context.TELEPHONY_SERVICE);

				var receiver = plus.android.implements('io.dcloud.android.content.BroadcastReceiver', {
					onReceive: function(context, intent) { //实现onReceiver回调函数  
						plus.android.importClass(intent);
						var telephonyManager = plus.android.importClass("android.telephony.TelephonyManager");
						var telephonyManager = plus.android.runtimeMainActivity().getSystemService(Context.TELEPHONY_SERVICE);
						var phonetype = telephonyManager.getCallState();
						var phoneNumber = intent.getStringExtra(telephonyManager.EXTRA_INCOMING_NUMBER);


						if (phonetype == 0 && !_t.uPause) {
							_t.audioctx.play()
						}
					}
				});
				var IntentFilter = plus.android.importClass('android.content.IntentFilter');
				var filter = new IntentFilter();
				filter.addAction(telephonyManager.ACTION_PHONE_STATE_CHANGED); //监听开关  
				main.registerReceiver(receiver, filter); //注册监听 

			} else if (uni.getSystemInfoSync().platform == 'ios') {
				var callstatus = false
				var CTCall = plus.ios.importClass('CTCall');
				var CTCallCenter = plus.ios.importClass('CTCallCenter');
				var center = new CTCallCenter();
				center.init()
				center.setCallEventr(function(ctCall) {

					callstatus = !callstatus
					if (!callstatus && !_t.uPause) {
						audioctx.play()
					} else {
						audioctx.pause()
					}
				})
			}

		} catch (err) {
			console.log(err)
		}

		// #endif
	}



}
