import Vue from 'vue'
import Vuex from 'vuex'
import {
	ZAudioStore
} from "@/components/zaudio/index.js";
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
