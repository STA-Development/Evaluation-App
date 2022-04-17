import {configureStore} from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import userSlice from './user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
