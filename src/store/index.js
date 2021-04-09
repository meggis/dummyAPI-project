import Vue from 'vue'
import Vuex from 'vuex'

import createUserStore from './user'
import createUserPost from './post'

Vue.use(Vuex)

//podpinanie pod store i przekazywanie parametrów
export default (deps) => {
  return new Vuex.Store({
    modules: {
      user: createUserStore(deps),
      post: createUserPost(deps)
    },
  })
}