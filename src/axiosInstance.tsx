import axios from 'axios'
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_SERVICE_ENDPOINT,
})

axiosInstance.interceptors.response.use((response) => response, (error => {
  if (error.response.data.statusCode > 400 && error.response.data.statusCode < 500) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data?.message,
    })
  }
}))

export default axiosInstance
