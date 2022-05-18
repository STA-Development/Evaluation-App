import axios from 'axios'

const axiosData = axios.create({
  baseURL: 'http://161.35.144.15:3030',
})

export default axiosData
