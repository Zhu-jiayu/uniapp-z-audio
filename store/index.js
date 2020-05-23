import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		
		audio:{
			src:'',
			title:'',
			singer:'',
			coverImgUrl:''
		},
		playinfo:{
			current:0, //当前时间
			duration:0  ,//总时间
			duration_value:0, //总长度
			current_value:0 ,//当前长度
			src:""
		},
		paused:true,
		
		n_pause:false  //意外断开状态 
	},
	mutations: {
		
	
		
		setaudio(state,data){
			state.audio=data;	
		},
		setnextaudio(state,data){
			state.nextaudio=data
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
		}
	},
	actions: {}
})

export default store
