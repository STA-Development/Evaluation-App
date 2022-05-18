import {store} from '../redux/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface IAuthPropsState {
  firstName: string
  lastName: string
  email: string
  isAuth: boolean
  userId: number
  salary: number
  authUid: string
  token: string
}
