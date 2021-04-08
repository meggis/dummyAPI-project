export default ({ axios }) => {
  return {
    async getPostsList() {
      const { data } = await axios.get('/post').then(({data}) => data)
      return data;
    },
    async getSinglePost(postId) {
      const { data } = await axios.get(`/post/${postId}`).then(({data}) => data)
      return data;
    },
    async getUserPostsList(userId) {
      const { data } = await axios.get(`/user/${userId}/post`).then(({data}) => data)
      return data;
    },
    async getPostsByTag(tagTitle) {
      const { data } = await axios.get(`/user/${tagTitle}/post`).then(({data}) => data)
      return data;
    }
  }
}