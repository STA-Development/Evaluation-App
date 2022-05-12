import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://161.35.144.15:3000/',
})

export default axiosInstance
