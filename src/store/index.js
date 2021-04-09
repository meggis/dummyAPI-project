import Vue from 'vue'
import Vuex from 'vuex'

import createUserStore from './user'

Vue.use(Vuex)

//podpinanie pod store i przekazywanie parametrów
export default (deps) => {
  return new Vuex.Store({
    modules: {
      user: createUserStore(deps)
    },
  })
}