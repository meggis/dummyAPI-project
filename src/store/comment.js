import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  comment: null,
  loading: false,
  comments: null
}

export default ({ commentApi }) => {
  const actions = {
    async fetchComment({ commit }, postId) {
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