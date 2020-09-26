import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		playIndex: 0, //正在播放的索引
		audiolist: [{
				src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',
				title: '好运来',
				singer: '作者1111',
				coverImgUrl: "/static/logo.png"
			},
			{
				src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2014eMay/29L/29dance/31.mp3',
				title: 'remix版好运来',
				singer: '作者22222',
				coverImgUrl: "/static/logo.png"
			}
		],


		audio: { //当前zaudio组件渲染的音频数据
			src: '',
			title: '',
			singer: '',
			coverImgUrl: ''
		},
		playinfo: { //$audio对象当前播放的音频数据
			current: 0, //当前时间
			duration: 0, //总时间
			duration_value: 0, //总长度
			current_value: 0, //当前长度
			src: "",
			title: '',
			singer: '',
			coverImgUrl: ''
		},
		paused: true, //$audio对象当前播放音频的暂停状态

		n_pause: false, //$audio对象当前播放音频的意外中断的状态


	},
	mutations: {



		setaudio(state, data) {
			state.audio = data;
		},

		setplay(state, data) {
			if (data.current) {
				state.playinfo.current = data.current;
			}
			if (data.duration) {
				state.playinfo.duration = data.duration;
			}
			if (data.duration_value) {
				state.playinfo.duration_value = data.duration_value;
			}
			if (data.current_value) {
				state.playinfo.current_value = data.current_value;
			}
			if (data.current_value) {
				state.playinfo.current_value = data.current_value;
			}
			if (data.src) {
				state.playinfo.src = data.src;
			}
			if (data.title) {
				state.playinfo.title = data.title;
			}
			if (data.singer) {
				state.playinfo.singer = data.singer;
			}
			if (data.coverImgUrl) {
				state.playinfo.coverImgUrl = data.coverImgUrl;
			}
		},
		setpause(state, data) {
			state.paused = data
		},
		set_n_pause(state, data) {
			state.n_pause = data
		},
		set_playIndex(state, data){
			state.playIndex = data
		}

	},
	actions: {},
	getters: {
		audiolist: state => state.audiolist,
		playinfo: state => state.playinfo,
		n_pause:  state => state.n_pause,
		paused:  state => state.paused,
		playIndex: state => state.playIndex
	}
})

export default store
