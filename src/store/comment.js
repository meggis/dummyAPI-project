import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  loading: false,
  comments: null
}

export default ({ commentApi }) => {
  const actions = {
    async fetchComments({ commit }, postId) {
      commit('setComments', null)
      commit('setLoading', true)
        try {
          commit('setComments', await commentApi.getCommentList(postId))
        }
        finally {
          commit('setLoading', false)
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