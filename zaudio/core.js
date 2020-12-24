import store from './store.js';
import {
	formatSeconds as format
} from './util.js';
/*
let {
		audiolist,
		playinfo,
		n_pause,
		paused,
		renderIndex,
		audio,
		playIndex,
		renderIsPlay
	} = store.getters;

*/
class ZAudio {
	$audio = null;
	constructor() {
		if (!store.state.version) {
			return throw Error('请先配置store')
		}
		this.init();

		this.appCheckReplay(this.$audio)
	}
	init(options) {
		if (this.$audio) return
		// #ifndef H5
		var audioCtx = uni.getBackgroundAudioManager()
		// #endif

		// #ifdef H5
		var audioCtx = uni.createInnerAudioContext()
		// #endif

		this.$audio = audioCtx;

		this.$audio.onCanplay(this.onCanplay.bind(this, options))
		this.$audio.onPlay(this.onPlay)
		this.$audio.onPause(this.onPause)
		this.$audio.onStop(this.onStop)
		this.$audio.onEnded(this.onEnded.bind(this, options))
		this.$audio.onTimeUpdate(this.onTimeUpdate)
		this.$audio.onError(this.onError.bind(this, options))
		
		 
	}
	onCanplay({
		autoplay
	}) {
		if (autoplay) {
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
			duration: format(this.$audio.duration),
			duration_value: this.$audio.duration
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
	onEnded({
		continue
	}) {
		store.commit("set_pause", true);
		this.$audio.startTime = 0;
		store.commit("set_playinfo", {
			current: format('0'),
			current_value: '0'
		})
		//续播
		if (
			continue) {
			this.changeplay(1);
		}
	}
	onTimeUpdate() {
		let {
			renderIsPlay,
			playinfo
		} = store.getters;
		if (renderIsPlay) {
			store.commit("set_playinfo", {
				current: this.format(this.$audio.currentTime),
				current_value: this.$audio.currentTime
			})

			// #ifndef APP-PLUS
			if (this.$audio.duration != playinfo.duration_value) {

				store.commit("set_playinfo", {
					duration: this.format(this.$audio.duration),
					duration_value: this.$audio.duration
				})
			}
			// #endif
		}
	}
	onError({
		errorCallback
	}) {
		store.commit("set_pause", true)
		typeof errorCallback === 'function' && errorCallback();
		// uni.showToast({
		// 	title: '音频播放错误',
		// 	duration: 1500,
		// 	mask: false,
		// 	icon: 'none',
		// 	position: 'center'
		// });
		store.commit("set_audio", {
			src: '',
			title: '',
			singer: '',
			coverImgUrl: ''
		})
		store.commit("set_playinfo", {

			current: 0,
			current_value: 0,
			duration: 0,
			duration_value: 0,
			title: '',
			src: ''
		});
	}

	operation() {

	}
	
	set_playinfo(value) {
		store.commit("set_playinfo", {
			current: format(value),
			current_value: value
		})
	},
	//拖动
	change(e) {
		if (this.renderIsPlay) {
			this.$audio.seek(e.detail.value);
		}
	},
	//快进
	step(type) {
		if (this.renderIsPlay) {
			var pos = !type ? this.playinfo.current_value - 15 : this.playinfo.current_value + 15;
			this.$audio.seek(pos);
		}
	},
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
