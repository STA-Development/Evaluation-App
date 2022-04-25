import {createSlice} from '@reduxjs/toolkit'
import {IAuthPropsState} from '../../types/types'

const initialState: IAuthPropsState = {
  user: '',
  email: '',
  uid: '',
  token: '',
  isAuth: true,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user
      state.email = action.payload.email
      state.uid = action.payload.uid
      state.token = action.payload.token
      state.isAuth = false
    },
    removeUser(state) {
      state.user = ''
      state.email = ''
      state.uid = ''
      state.isAuth = false
    },
  },
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer
