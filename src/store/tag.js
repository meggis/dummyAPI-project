import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  tags: null,
  loadingTags: false
}

export default ({ tagApi }) => {
  const actions = {
    async fetchTags({ commit }) {
      commit('setLoadingTags', true)
      try {
        commit('setTags', await tagApi.getTag())
      } finally {
        commit('setLoadingTags', false)
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