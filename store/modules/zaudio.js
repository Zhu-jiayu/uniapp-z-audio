
const store = {
	namespaced: false,
    state: {
    	renderIndex: 0, // 组件渲染的索引值
    	audiolist: [],  //音频列表
    
    
    	audio: { 		 //zaudio组件-当前渲染的音频数据
    		current: 0,  		//当前时间
    		duration: 0, 		//总时间
    		duration_value: 0,  //总长度
    		current_value: 0,   //当前长度
    		src: '',     		//当前音频地址
    		title: '',	 		//当前音频标题
    		singer: '',  		//当前音频作者
    		coverImgUrl: '',    //当前音频封面
    	},
    	playinfo: {      //$audio对象-当前播放的音频数据
    		current: 0,   		//当前时间
    		duration: 0, 		//总时间
    		duration_value: 0,  //总长度
    		current_value: 0,   //当前长度
    		src: "",			//当前音频地址	
    		title: '',			//当前音频标题
    		singer: '',			//当前音频作者
    		coverImgUrl: ''		//当前音频封面
    	},
    	paused: true, //$audio对象当前播放音频的暂停状态
    
    	n_pause: false, //$audio对象当前播放音频的意外中断的状态
    
    
    },
    mutations: {
    
    	//设置音频列表数据
    	set_audiolist(state, data) {
    		state.audiolist.push(...data)
    		return Promise.resolve(state.audiolist)
    	},
    	//设置zaudio组件当前渲染的音频信息
    	set_audio(state, data) {
    		state.audio = data;
    		let renderIndex = state.audiolist.findIndex(i => i.src == data.src);
    
    		if(renderIndex>=0){
    			this.commit('set_renderIndex', renderIndex)
    		}
    		
    	},
    	//设置当前播放信息
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
    		if (state.audiolist.length == 0) return
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
    	audio: state => state.audio,
    	playIndex: state => {
    		let index = state.audiolist.findIndex(i => i.src == state.playinfo.src)
    		return index <= 0 ? 0 : index
    	}
    }
}
export default store