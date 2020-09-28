import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false

App.mpType = 'app'


Vue.prototype.$store = store;
import ZAudioCtx from 'components/audio/index.js'
Vue.use(ZAudioCtx, store)





const app = new Vue({
    ...App
})
app.$mount()
