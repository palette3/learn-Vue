import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false


import HiWrold from '@/components/HiWorld.vue'
Vue.component("HiWorld", HiWrold)


new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
}).$mount('#app')

// import obj from '.data'
// console.log(obj,"obj");
// import {obj2,obj3} from './data/index.js'
// console.log(obj2,obj3)

import './assets/css/main.css'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')