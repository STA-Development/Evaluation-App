import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_SERVICE_ENDPOINT,
})

export default axiosInstance
