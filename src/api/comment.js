export default ({ axios }) => {
  return {
    async getCommentList(postId) {
      const { data } = await axios.get(`/post/${postId}/comment`).then(({data}) => data)
      console.log(data)
      return data;
    },
  }
}