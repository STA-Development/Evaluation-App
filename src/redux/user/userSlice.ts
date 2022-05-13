import {createSlice} from '@reduxjs/toolkit'
import {IAuthPropsState} from '../../types/storeTypes'

const initialState: IAuthPropsState = {
  firstName: '',
  lastName: '',
  user: '',
  email: '',
  uid: '',
  token: '',
  isAuth: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.firstName = action.payload?.firstName
      state.lastName = action.payload?.lastName
      state.user = action.payload?.user
      state.email = action.payload?.email
      state.uid = action.payload?.uid
      state.token = action.payload?.token
      state.isAuth = true
    },
    removeUser(state) {
      state.firstName = ''
      state.lastName = ''
      state.user = ''
      state.email = ''
      state.uid = ''
      state.isAuth = false
      state.token = ''
    },
  },
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer
