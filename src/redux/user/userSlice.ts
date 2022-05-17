import {createSlice} from '@reduxjs/toolkit'
import {IAuthPropsState} from '../../types/storeTypes'

const initialState: IAuthPropsState = {
  firstName: '',
  lastName: '',
  user: '',
  email: '',
  userId: 0,
  authUid: '',
  salary: 0,
  isAuth: false,
  token: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.user = action.payload.user
      state.email = action.payload.email
      state.authUid = action.payload.authUid
      state.userId = action.payload.userId
      state.isAuth = true
      state.salary = action.payload.salary
      state.token = action.payload.token
    },
    removeUser(state) {
      state.firstName = ''
      state.lastName = ''
      state.email = ''
      state.authUid = ''
      state.isAuth = false
      state.userId = 0
      state.salary = 0
    },
  },
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer
