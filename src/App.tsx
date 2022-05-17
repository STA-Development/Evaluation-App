import React, {useEffect, useState} from 'react'
import {Box, CircularProgress} from '@mui/material'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRouts from './routes/PrivateRouts'
import {useAppDispatch, useAppSelector} from './redux/hooks'
import {selectAuth} from './redux/selectors'
import {EventContextProvider} from './pages/events/createEvents/EventsContext'
import {setUser} from './redux/user/userSlice'
import {afterSelf} from './utils/authUtils'
import axiosError from './utils/axiosError'
import {AxiosError} from 'axios'

const App = () => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const isAuth = useAppSelector(selectAuth)

  const data = async () => {
    try {
      setIsLoading(true)
      const user = await afterSelf(localStorage.token)
      dispatch(
        setUser({
          firstName: user.firstName,
          lastName: user.lastName,
          authUid: user.authUid,
          email: user.email,
          salary: user.salary,
          userId: user.id,
        }),
      )
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      axiosError(err as AxiosError)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (localStorage.getItem('token')) {
        await data()
      }
    })()
  }, [])

  return (
    <EventContextProvider>
      {!isLoading ? (
        <Box className="bg">{isAuth ? <PrivateRouts /> : <PublicRoutes />}</Box>
      ) : (
        <Box className="circle">
          <CircularProgress />
        </Box>
      )}
    </EventContextProvider>
  )
}

export default App
