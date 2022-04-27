import {store} from '../redux/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface IAuthPropsState {
  user: string
  email: string
  uid: string
  isAuth: boolean
  token: string
}
