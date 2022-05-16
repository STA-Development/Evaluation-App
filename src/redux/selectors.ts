import {RootState} from '../types/storeTypes'

export const selectAuthId = (state: RootState) => state.user.authUid
export const selectEmail = (state: RootState) => state.user.email
export const selectAuth = (state: RootState) => state.user.isAuth
export const selectFirstName = (state: RootState) => state.user.firstName
export const selectLastName = (state: RootState) => state.user.lastName
