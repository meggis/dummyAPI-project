import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  posts: null,
  loading: false,
  postLoading: false
}

export default ({ postApi }) => {
  const actions = {
    async fetchPostsList({ commit }) {
      commit('setLoading', true)
      try {
        commit('setPosts', await postApi.getPostsList())
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchUserPosts({ commit }, userId) {
      commit('setPostLoading', true)
      try {
        const posts = await postApi.getUserPostsList(userId)
        commit('setPosts', posts)
      } finally {
        commit('setPostLoading', false)
      }
    },
    async fetchPostsByTag({ commit }, tagTitle) {
      commit('setPostLoading', true)
      try {
        const postsTag = await postApi.getPostsByTag(tagTitle)
        commit('setPosts', postsTag)
      } finally {
        commit('setPostLoading', false)
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