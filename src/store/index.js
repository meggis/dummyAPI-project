import Vue from 'vue'
import Vuex from 'vuex'

import createUserStore from './user'
import createPostStore from './post'
import createCommentsStore from './comment'
import createTagStore from './tag'

Vue.use(Vuex)

//podpinanie pod store i przekazywanie parametrów
export default (deps) => {
  return new Vuex.Store({
    modules: {
      user: createUserStore(deps),
      post: createPostStore(deps),
      comment: createCommentsStore(deps),
      tag: createTagStore(deps)
    },
  })
}