/* 
 options参数
 @param defaultCover  音频默认海报
 @param continuePlay  继续播放
 @param autoPlay      自动播放
 @param errorCallback 播放错误回调
 */
import store from './store.js';
import zaudio from './zaudio.vue';
import {
	formatSeconds as format
} from './util.js';

class ZAudio {
	audioCtx = null;
	static install(Vue, options) {
		let {
			defaultCover = '',
				autoPlay = false,
				continuePlay = false,
				errorCallback = () => uni.showToast({
					title: '音频播放错误',
					duration: 1500,
					mask: false,
					icon: 'none',
					position: 'center'
				})
		} = options;

		Vue.property.$audio = new ZAudio(options)
		Vue.component('zaudio', zaudio)
	}
	constructor(options) {
		if (!store.state.version) {
			throw Error('请先配置store')
			return
		}
		if (this.audioCtx) return
		this.defaultCover = options.defaultCover;
		this.autoPlay = options.autoPlay;
		this.continuePlay = options.continuePlay;
		this.errorCallback = options.errorCallback;

		this.init();


	}
	init() {

		// #ifndef H5
		var audioCtx = uni.getBackgroundAudioManager()
		// #endif

		// #ifdef H5
		var audioCtx = uni.createInnerAudioContext()
		// #endif

		this.audioCtx = audioCtx;

		this.audioCtx.onCanplay(this.onCanplay)
		this.audioCtx.onPlay(this.onPlay)
		this.audioCtx.onPause(this.onPause)
		this.audioCtx.onStop(this.onStop)
		this.audioCtx.onEnded(this.onEnded)
		this.audioCtx.onTimeUpdate(this.onTimeUpdate)
		this.audioCtx.onError(this.onError)

		this.appCheckReplay(this.audioCtx)
	}
	onCanplay() {
		if (this.autoPlay) {
			this.operation()
		}
	}
	onPlay() {
		const {
			src: renderSrc,
			title: renderTitle,
			singer: renderSinger,
			coverImgUrl: renderCoverImgUrl
		} = store.getters.audio;

		// #ifdef APP-PLUS
		this.set_playinfo({
			duration: format(this.audioCtx.duration),
			duration_value: this.audioCtx.duration
		});
		// #endif
		store.commit("set_pause", false)
		store.commit("set_n_pause", false)
	}
	onPause() {
		store.commit("set_pause", true)
	}
	onStop() {
		store.commit("set_pause", true)
	}
	onEnded() {
		store.commit("set_pause", true);
		this.audioCtx.startTime = 0;
		this.set_playinfo({
			current: format('0'),
			current_value: '0'
		})
		//续播
		if (this.continuePlay) {
			this.changeplay(1);
		}
	}
	onTimeUpdate() {
		let {
			renderIsPlay,
			playinfo
		} = store.getters;
		if (renderIsPlay) {
			this.set_playinfo({
				current: this.format(this.audioCtx.currentTime),
				current_value: this.audioCtx.currentTime
			})

			// #ifndef APP-PLUS
			if (this.audioCtx.duration != playinfo.duration_value) {

				this.set_playinfo({
					duration: this.format(this.audioCtx.duration),
					duration_value: this.audioCtx.duration
				})
			}
			// #endif
		}
	}
	onError() {
		store.commit("set_pause", true)
		typeof this.errorCallback === 'function' && this.errorCallback();

		store.commit("set_audio", {
			src: '',
			title: '',
			singer: '',
			coverImgUrl: ''
		})
		this.set_playinfo({
			current: 0,
			current_value: 0,
			duration: 0,
			duration_value: 0,
			title: '',
			src: ''
		});
	}


	//设置播放的进度和信息
	set_playinfo(data) {
		store.commit("set_playinfo", data)
	}
	//快进
	seek(value) {
		this.audioCtx.seek(value)
	}

	//快进,退
	stepPlay(value) {
		let {
			renderIsPlay,
			playinfo
		} = store.getters;
		if (renderIsPlay) {
			var pos = playinfo.current_value + value
			this.seek(pos);
		}
	}
	//切歌
	changeplay(count) {
		let {
			renderIndex,
			audiolist
		} = store.getters
		var nowindex = renderIndex;
		nowindex += count;
		nowindex = nowindex < 0 ? audiolist.length - 1 : nowindex > audiolist.length - 1 ? 0 : nowindex;

		store.commit("set_pause", true);
		//更新渲染数据的索引值
		store.commit("set_renderIndex", nowindex);
		this.operation();
	}

	//播放or暂停
	operation(play = false) {
		const {
			duration,
			current,
			duration_value,
			current_value,
			src
		} = store.getters.playinfo;
		const {
			src: renderSrc,
			title: renderTitle,
			singer: renderSinger,
			coverImgUrl: renderCoverImgUrl
		} = store.getters.audio;
		const {
			renderIsPlay,
			paused
		} = store.getters;
		//渲染与播放地址 不同
		if (!renderIsPlay) {
			if (paused || play) {
				// 播放 渲染的数据

				this.audioCtx.src = renderSrc;
				this.audioCtx.title = renderTitle;
				this.audioCtx.singer = renderSinger;
				this.audioCtx.coverImgUrl = renderCoverImgUrl || this.defaultCover;

				this.audioCtx.startTime = 0;
				this.audioCtx.seek(0);

				this.audioCtx.play();
				store.commit('set_pause', false)


				this.set_playinfo({
					src: renderSrc,
					title: renderTitle,
					singer: renderSinger,
					coverImgUrl: renderCoverImgUrl
				});
			} else {
				//暂停
				this.audioCtx.pause();
				store.commit('set_pause', true)
				store.commit('set_n_pause', true)

			}
		} else {
			//渲染与播放地址相同
			if (paused) {
				this.audioCtx.play();

				this.audioCtx.startTime = parseFloat(current_value);
				this.audioCtx.seek(parseFloat(current_value));
				store.commit('set_pause', false)


				this.set_playinfo({
					src: renderSrc,
					title: renderTitle,
					singer: renderSinger,
					coverImgUrl: renderCoverImgUrl
				});
			} else {
				this.audioCtx.pause();
				store.commit('set_pause', true)
				store.commit('set_n_pause', true)
			}
		}
	}

	//app端判断电话来电后, 音频意外中断之后的继续播放
	appCheckReplay(audioctx) {

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
						console.log(intent.getAction());
						var telephonyManager = plus.android.importClass("android.telephony.TelephonyManager");
						var telephonyManager = plus.android.runtimeMainActivity().getSystemService(Context.TELEPHONY_SERVICE);
						var phonetype = telephonyManager.getCallState();
						var phoneNumber = intent.getStringExtra(telephonyManager.EXTRA_INCOMING_NUMBER);

						console.log("phonetype:" + phonetype);
						console.log("phonetype:" + phoneNumber);

						if (phonetype == 0 && !store.state.n_pause) {
							audioctx.play()
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
					console.log('=============', ctCall)
					callstatus = !callstatus
					if (!callstatus && !store.state.n_pause) {
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
