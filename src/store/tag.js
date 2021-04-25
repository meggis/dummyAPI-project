import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  tags: null,
  loadingTags: false
}

//{} mówią o tym że bieżemy ten obiekt i wposujemy co wyciągamy z tego obiektu
export default ({ tagApi }) => {
  const actions = {
    async fetchTags({ commit }) {
      commit('setLoadingTags', true)
      try {
        //nazywasz set + nazwa key w initialState
        //metoda commit służy do przypisania za pomocą 'set+'nazwaState', po przecinku tego co ma być wykonane
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
    //wypakowana lista initialState
    state: { ...initialState },
    actions,
    mutations: {
      ...createSettersFromStateKeys(initialState),
      ...mutations,
    },
    getters,
  }
}