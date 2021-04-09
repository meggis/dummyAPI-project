  
import axios from 'axios'

const headers = { 'app-id': '606f19f56a2b4a20c816bc4c' }

export default baseUrl => {
  const axiosInstance = axios.create({ baseURL: baseUrl, headers })

  axiosInstance.setLocaleInterceptor = function (localeState) {
    this.interceptors.request.use(config => {
      if (config.params) {
        config.params.locale = localeState.selected
      }
      
      return config
    })
  }

  return axiosInstance
}
