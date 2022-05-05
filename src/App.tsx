import React from 'react'
import './App.css'
import {auth} from './data/firebase'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRouts from './routes/PrivateRouts'
import {onAuthStateChanged} from 'firebase/auth'
import {Box} from '@mui/material'
import {useAppDispatch, useAppSelector} from './redux/hooks'
import {removeUser, setUser} from './redux/user/userSlice'
import {selectUserId} from './redux/selectors'

const App = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectUserId)

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      //console.log(user.accessToken)
      dispatch(
        setUser({
          user: user.displayName,
          uid: user.uid,
          email: user.email,
          token: await user.getIdToken(),
        }),
      )
    } else {
      dispatch(removeUser())
    }
  })

  return <Box className="bg">{userId ? <PrivateRouts /> : <PublicRoutes />}</Box>
}

export default App
