import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  users: null,
  loading: false,
  user: null
}

export default ({ userApi }) => {
  const actions = {
    async fetchUsers({ commit }) {
      commit('setLoading', true)
      try {
        //nazywasz set + nazwa key w initialState
        //metoda commit służy do przypisania za pomocą 'set+'nazwaState', po przecinku tego co ma być wykonane
        commit('setUsers', await userApi.getUsers())
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchUser({ commit }, userId) {
      commit('setUser', await userApi.getUser(userId))
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