import {RootState} from './store'

export const selectUser = (state: RootState) => state.user
export const selectUserId = (state: RootState) => state.user.uid
export const selectEmail = (state: RootState) => state.user.email
export const selectAuth = (state: RootState) => state.user.isAuth
