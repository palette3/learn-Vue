import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import HiWrold from '@/components/HiWorld.vue'
Vue.component("HiWorld",HiWrold)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
