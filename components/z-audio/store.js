export default {
	namespaced: false,
	state: {
		version: '2.0.23',
		renderIndex: 0, // 组件渲染的索引值
		audiolist: [], //音频列表


		audio: { //zaudio组件-当前渲染的音频数据
			current: 0, //当前时间
			duration: 0, //总时间
			duration_value: 0, //总长度
			current_value: 0, //当前长度
			src: '', //当前音频地址
			title: '', //当前音频标题
			singer: '', //当前音频作者
			coverImgUrl: '', //当前音频封面
		},
		playinfo: { //$zaudio对象-当前播放的音频数据
			current: 0, //当前时间
			duration: 0, //总时间
			duration_value: 0, //总长度
			current_value: 0, //当前长度
			src: "", //当前音频地址	
			title: '', //当前音频标题
			singer: '', //当前音频作者
			coverImgUrl: '' //当前音频封面
		},
		paused: true, //$zaudio对象当前播放音频的暂停状态

		n_pause: false, //$zaudio对象当前播放音频的意外中断的状态


	},
	mutations: {
		//覆盖音频
		set_audiolist(state, data) {
			state.audiolist = [...data]
		},
		//添加音频
		updata_audiolist(state, data) {
			state.audiolist.push(...data)
		},

		//设置当前播放信息
		set_playinfo(state, data) {

			if (data.current) {
				state.playinfo.current = data.current
			}
			if (data.duration) {
				state.playinfo.duration = data.duration
			}
			if (data.duration_value) {
				state.playinfo.duration_value = data.duration_value
			}
			if (data.current_value) {
				state.playinfo.current_value = data.current_value
			}
			if (data.src) {
				state.playinfo.src = data.src
			}
			if (data.title) {
				state.playinfo.title = data.title
			}
			if (data.singer) {
				state.playinfo.singer = data.singer
			}
			if (data.coverImgUrl) {
				state.playinfo.coverImgUrl = data.coverImgUrl
			}
			// for (var i in data) {
			// 	if (state.playinfo.hasOwnProperty(i)) {
			// 		state.playinfo[i] = data[i]
			// 	}
			// }

		},
		set_pause(state, data) {
			state.paused = data
		},
		set_n_pause(state, data) {
			state.n_pause = data
		},

		//设置渲染索引 和 渲染信息
		set_render(state, data) {
			if (state.audiolist.length == 0) return

			if (typeof data === 'number' || typeof data === 'string') {
				state.renderIndex = data * 1;
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
			} else {
				state.audio = data;
				let renderIndex = state.audiolist.findIndex(i => i.src == data.src);
				if (renderIndex >= 0) {
					state.renderIndex = renderIndex;
				}

			}
		},

	},
	getters: {
		audiolist: state => state.audiolist,
		playinfo: state => state.playinfo,
		n_pause: state => state.n_pause,
		paused: state => state.paused,
		renderIndex: state => state.renderIndex,
		audio: state => state.audio,
		playIndex: state => {
			let index = state.audiolist.findIndex(i => i.src == state.playinfo.src)
			return index <= 0 ? 0 : index
		},
		renderIsPlay: state => {
			return state.audio.src == state.playinfo.src
		}
	}
}
