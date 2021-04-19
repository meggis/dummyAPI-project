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
    },
    // async geocode() {
    //   const { data } = await axios.get('https://maps.googleapis.com/maps/api/geocode/json')
    // return data} 
      // {
    //     params:{
    //       address: location,
    //       key: 'AIzaSyCjI8uvW3pBshFMBLFvVxM-eOcruzODYYA'
    //     }
    //   })
    //   .then(function(response) {
    //     console.log(response)
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
    // }
  }
}