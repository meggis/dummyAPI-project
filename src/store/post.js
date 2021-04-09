import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  posts: null,
  loading: false,
  post: null,

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
    async fetchSinglePost({ commit }, postId) {
      commit('setPost', await postApi.getSinglePost(postId))
    },
    // async fetchUserPosts({ commit }, userId) {
    //   commit('setUserPosts', await postApi.getUserPostsList(userId))
    // },
    // async getPostsByTag({ commit }, tagTitle) {
    //   commit('setTagPosts', await postApi.getPostsByTag(tagTitle))
    // }
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