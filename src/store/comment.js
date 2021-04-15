import post from '../api/post'
import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  comment: null,
  loading: false,
  postId: post.id
}

export default ({ commentApi }) => {
  const actions = {
    async fetchComment({ commit }, postId) {
      commit('setLoading', true)
        try {
          commit('setComment', await commentApi.getCommentList(postId))
        }
        finally {
          commit('setLoading', false)
          console.log(`${postId}`)
        }
    }
  }
  const mutations = {}
  const getters = {}

  return {
    namespaced: true,
    state: { ...initialState },
    actions,
    mutations: {
      ...createSettersFromStateKeys(initialState),
      ...mutations,
    },
    getters,
  }
}