import Vue from 'vue'
import Vuex from 'vuex'
import zaudioModule from './zaudioModule.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	...zaudioModule
})

export default store
