import axiosInstance from '../axiosInstance'

const getHeaderConfig = (token: string) => {
  return {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
}

export const afterSelf = async (token: string) => {
  return await axiosInstance.get('/users/me', getHeaderConfig(token))
}
