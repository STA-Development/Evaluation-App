import {RootState} from '../types/storeTypes'

export const selectAuthId = (state: RootState) => state.user.authUid
export const selectEmail = (state: RootState) => state.user.email
export const selectAuth = (state: RootState) => state.user.isAuth
