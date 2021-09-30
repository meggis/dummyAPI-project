  
import axios from 'axios'

const headers = { 'app-id': '61562942bfcffa660b81be92' }


export default (baseUrl) => {
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
