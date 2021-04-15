export default ({ axios }) => {
  return {
    async getTag() {
      const { data } = await axios.get('/tag').then(({data}) => data)
      return data;
    },
  }
}