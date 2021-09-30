import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  users: null,
  loading: false,
  userLoading: false,
  user: null,
}

export default ({ userApi }) => {
  const actions = {
    async fetchUsers({ commit }) {
      commit('setLoading', true)
      try {
        commit('setUsers', await userApi.getUsers())
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchUser({ commit }, userId) {
      commit('setUserLoading', true)
      try {
      commit('setUser', await userApi.getUser(userId))
    } finally {
      commit('setUserLoading', false)
    }
    },
    async destroyUser({ commit }) {
      commit('setUser', null)
    },

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