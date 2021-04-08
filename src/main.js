import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$headers = { 'app-id': '606f19f56a2b4a20c816bc4c' }

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
