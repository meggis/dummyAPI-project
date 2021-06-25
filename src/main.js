import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import createAxios from './utils/create-axios'
import createApi from './api/index.js'
import createStore from './store/index.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./styles/styles.css";



const baseUrl = 'https://dummyapi.io/data/api'

const axios = createAxios(baseUrl)
const api = createApi({ axios })
const store = createStore({ ...api, axios })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
