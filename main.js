import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$store = store;

Vue.config.productionTip = false

App.mpType = 'app'


//组件引用方式
// import { ZAudio } from 'components/zaudio/index.js'

// npm引用方式
import { ZAudio } from 'zaudio/index.js'


Vue.use(ZAudio)





const app = new Vue({
	...App
})
app.$mount()
