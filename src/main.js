import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createAxios from './utils/create-axios'
import createApi from './api/index.js'
import createStore from './store'

//Regułą aby wyłączyć informację w konsoli 'You are running Vue in development mode.'
Vue.config.productionTip = false


const baseUrl = 'https://dummyapi.io/data/api'

const axios = createAxios(baseUrl)
const api = createApi({ axios })
const store = createStore({ ...api, axios })

//tutaj wrzucasz wszystkie nowe obiekty
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
