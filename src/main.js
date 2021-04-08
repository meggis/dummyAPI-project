import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createAxios from './utils/create-axios'
import createApi from './api/index.js'
import createStore from './store/index'

Vue.config.productionTip = false

const baseUrl = 'https://dummyapi.io/data/api'

const axios = createAxios(baseUrl)
const api = createApi({ axios })
const store = createStore({ ...api, axios })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
