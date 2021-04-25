import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  loadingComments: false,
  comments: null
}

export default ({ commentApi }) => {
  const actions = {
    async fetchComments({ commit }, postId) {
      commit('setLoadingComments', true)
      commit('setComments', null)
        try {
          commit('setComments', await commentApi.getCommentList(postId))
        }
        finally {
          commit('setLoadingComments', false)
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