import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		audiolist: [
			{
				src: 'https://audio04.dmhmusic.com/71_53_T10053309326_128_4_1_0_sdk-cpm/cn/0104/M00/D5/38/ChR45V5GUyKAXRl6ADNILXTwE84654.mp3?xcode=8e5b6965f8c4a5ca70185393ef5f54ea472894b',
				title: '第1首',
				singer: '作者1111',
				coverImgUrl: "/static/logo.png"
			},
			{
				src: 'https://audio04.dmhmusic.com/71_53_T10056851085_128_4_1_0_sdk-cpm/cn/0412/M00/4A/6F/ChAKEV9jWAmAOJvcADwo_VhUxyg734.mp3?xcode=68727c95918182b670186fe4686efe2f8c16eed',
				title: '第2首',
				singer: '作者22222',
				coverImgUrl: "/static/logo.png"
			}
		],
		audiolist2: [
			{
				src: 'https://audio04.dmhmusic.com/71_53_T10049556149_128_4_1_0_sdk-cpm/cn/0209/M00/BE/57/ChR47F17MIaAUdvuAEGK8iaOIJM634.mp3?xcode=88f0d65556edaba07018548add8ac51838d088c',
				title: '第3首',
				singer: '作者3333',
				coverImgUrl: '/static/logo.png'
			}
		],
		
		
		audio:{            //当前zaudio组件渲染的音频数据
			src:'',
			title:'',
			singer:'',
			coverImgUrl:''
		},
		playinfo:{           //$audio对象当前播放的音频数据
			current:0, //当前时间
			duration:0  ,//总时间
			duration_value:0, //总长度
			current_value:0 ,//当前长度
			src:""
		},
		paused:true,  //$audio对象当前播放音频的暂停状态
		
		n_pause:false,  //$audio对象当前播放音频的意外中断的状态
	},
	mutations: {
		
	
		
		setaudio(state,data){
			state.audio=data;	
		},
		
		setplay(state,data){
			if(data.current){
				state.playinfo.current=data.current;	
			}
			if(data.duration){
				state.playinfo.duration=data.duration;	
			}
			if(data.duration_value){
				state.playinfo.duration_value=data.duration_value;	
			}
			if(data.current_value){
				state.playinfo.current_value=data.current_value;	
			}
			if(data.current_value){
				state.playinfo.current_value=data.current_value;	
			}
			if(data.src){
				state.playinfo.src=data.src;	
			}
		},
		setpause(state,data){
			state.paused = data
		},
		set_n_pause(state,data){
			state.n_pause = data
		},
		
		
		updateAudioList(state, data){
			state.audiolist=state.audiolist2
		}
	},
	actions: {},
	getters: {
		audiolist: state=>state.audiolist,
		audiolist2: state=>state.audiolist2,
	}
})

export default store
