import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2'
import {AxiosError} from 'axios'
import {IAxiosData} from '../types/axiosError'

const axiosError = (err: AxiosError) => {
  const data: IAxiosData = err.response?.data as IAxiosData
  if (data.statusCode > 400 && data.statusCode < 500) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: data.message,
    })
  }
}

export default axiosError
