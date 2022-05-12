import React, {useEffect} from 'react'
import './App.css'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRouts from './routes/PrivateRouts'
import {Box} from '@mui/material'
import axiosInstance from './axiosInstance'
//import {setUser} from './redux/user/userSlice'
import {selectToken} from './redux/selectors'
import {useAppDispatch, useAppSelector} from './redux/hooks'
import {setUser} from './redux/user/userSlice'

const App = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectToken)

  useEffect(() => {
    axiosInstance
      .get('/users/me', {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((user) => {
        console.log(user)
        dispatch(
          setUser({
            firstName: user.data.firstName,
            lastName: user.data.lastName,
            uid: user.data.authUid,
            email: user.data.email,
            token: user.data.data,
          }),
        )
      })
  }, [])

  return <Box className="bg">{token ? <PrivateRouts /> : <PublicRoutes />}</Box>
}

export default App
