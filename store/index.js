import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		audiolist: [
			{
				src: 'http://m10.music.126.net/20200918103253/8cd03e094366e6ee0206e07f22a2f183/ymusic/83c9/88b2/cff8/083b74603f4731513371b5aee3903911.mp3',
				title: '第1首',
				singer: '作者1111',
				coverImgUrl: "/static/logo.png"
			},
			{
				src: 'http://m10.music.126.net/20200918103526/37dbe4ad313bab6899929bb091d3b2bb/ymusic/8367/a3b1/ec55/c05574f545748c870cb85b575b0da2ee.mp3',
				title: '第2首',
				singer: '作者22222',
				coverImgUrl: "/static/logo.png"
			}
		],
		audiolist2: [
			{
				src: 'http://m10.music.126.net/20200918103608/1ccbc963b8e7e33948b7b5571419bd6d/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3954395484/d3de/919c/fa79/5db7ba1da02b169079318f385ce65f5a.mp3',
				title: '第3首',
				singer: '作者3333',
				coverImgUrl: '/static/logo.png'
			}
		],
		
		
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
		
		n_pause:false,  //意外断开状态 
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
