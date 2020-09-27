import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		renderIndex: 0, //正在播放的索引
		audiolist: [],


		audio: { //当前zaudio组件渲染的音频数据
			current: 0, //当前时间
			duration: 0, //总时间
			duration_value: 0, //总长度
			current_value: 0, //当前长度
			src: '',
			title: '',
			singer: '',
			coverImgUrl: '',
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

		//保存音频列表
		set_audiolist(state, data) {
			state.audiolist.push(...data)

		},

		set_audio(state, data) {
			state.audio = data;
			let renderIndex = state.audiolist.findIndex(i => i.url == data.url);


			this.commit('set_renderIndex', renderIndex || 0)
		},
		//设置播放信息
		set_playinfo(state, data) {
			for (var i in data) {
				if (state.playinfo.hasOwnProperty(i)) {
					state.playinfo[i] = data[i]
				}
			}

		},
		set_pause(state, data) {
			state.paused = data
		},
		set_n_pause(state, data) {
			state.n_pause = data
		},

		//设置渲染索引 和 渲染信息
		set_renderIndex(state, data) {
			state.renderIndex = data;
			// if (state.audiolist.length == 0) return
			state.audio = {
				src: state.audiolist[data].src,
				title: state.audiolist[data].title,
				singer: state.audiolist[data].singer,
				coverImgUrl: state.audiolist[data].coverImgUrl,
				current: '00:00',
				duration: '00:00',
				current_value: 0,
				duration_value: 100
			}
		}

	},
	getters: {
		audiolist: state => state.audiolist,
		playinfo: state => state.playinfo,
		n_pause: state => state.n_pause,
		paused: state => state.paused,
		renderIndex: state => state.renderIndex,
		audio: state => state.audio
	}
})

export default store
