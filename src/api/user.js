//skąd jest brany axios?
export default ({ axios }) => {
  return {
    async getUsers () {
      const { data } = await axios.get('/user').then(({data}) => data)
      return data;
    },
    async getUser(userId) {
      const { data } = await axios.get(`/user/${userId}`)
      return data;
    }
  }
}