import {createSlice} from '@reduxjs/toolkit'
import {IAuthPropsState} from '../../types/storeTypes'

const initialState: IAuthPropsState = {
  user: '',
  firstName: '',
  lastName: '',
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
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.uid = action.payload.uid
      state.email = action.payload.email
      state.token = action.payload.token
      state.isAuth = false
    },
    removeUser(state) {
      state.firstName = ''
      state.lastName = ''
      state.email = ''
      state.uid = ''
      state.isAuth = false
      state.token = ''
    },
  },
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer
