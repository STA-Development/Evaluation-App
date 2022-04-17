import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface AuthPropsState {
  user: string
  email: string
  uid: string
  isAuth: boolean
  token: string
}

const initialState: AuthPropsState = {
  user: '',
  email: '',
  uid: '',
  token: '',
  isAuth: true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload.user
      // eslint-disable-next-line no-param-reassign
      state.email = action.payload.email
      // eslint-disable-next-line no-param-reassign
      state.uid = action.payload.uid
      // eslint-disable-next-line no-param-reassign
      state.token = action.payload.token
      // eslint-disable-next-line no-param-reassign
      state.isAuth = false
    },
    removeUser(state) {
      // eslint-disable-next-line no-param-reassign
      state.user = ''
      // eslint-disable-next-line no-param-reassign
      state.email = ''
      // eslint-disable-next-line no-param-reassign
      state.uid = ''
      // eslint-disable-next-line no-param-reassign
      state.isAuth = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer
