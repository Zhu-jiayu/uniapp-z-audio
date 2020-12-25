import Vue from 'vue'
import Vuex from 'vuex'

// npm引用方式
// import { ZAudio } from 'uniapp-zaudio/zaudio/index.js'

import {
	ZAudioStore
} from "@/zaudio/index.js";


Vue.use(Vuex)



const store = new Vuex.Store({
	modules: {
		// zaudio组件状态数据
		ZAudioStore: ZAudioStore,

		//这是其他数据
		other: {
			state: {
				a: '123'
			}
		}
	}
})


export default store
