import React, {useEffect} from 'react'
import './App.css'
import {Box} from '@mui/material'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRouts from './routes/PrivateRouts'
import {useAppSelector} from './redux/hooks'
import {selectToken, selectUserId} from './redux/selectors'
import {EventContextProvider} from './pages/events/createEvents/EventsContext'
import axiosInstance from './axiosInstance'

const App = () => {
  // const dispatch = useAppDispatch()
  const token = useAppSelector(selectToken)
  const userId = useAppSelector(selectUserId)
  //const [user, setUser] = useState()
  const headerConfig = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const data = async () => {
    const asd = await axiosInstance
      .get('/users/me', headerConfig)
      .then((authData: any) => {
        console.log('app', authData)
        const user = authData.data
        console.log('app user', user)
        // dispatch(
        //   setUser({
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     uid: user.authUid,
        //     email: user.email,
        //     token,
        //   }),
        // )
        window.location.reload()
      })
      .catch((err) => {
        console.log('handlesubmit error for blog ', err)
      })
    console.log(asd)
  }

  useEffect(() => {
    data()
  }, [token])

  return (
    <EventContextProvider>
      <Box className="bg">{userId ? <PrivateRouts /> : <PublicRoutes />}</Box>a
    </EventContextProvider>
  )
}

export default App
