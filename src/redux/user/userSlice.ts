// import { createSlice,PayloadAction} from "@reduxjs/toolkit";
// import type {RootState} from '../store'
//
// interface AuthPropsData{
//   name:string,
//   email:string,
//
//
// }
//
// export const initialState: AuthPropsData = {
//   name: "",
//   email: "",
// };
//
// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers:  {
//     setUser:  (state, action: PayloadAction<string>) => {
//       return state.name = action.payload;
//     },
//     setMail: (state, action: PayloadAction<string>) => {
//       return state.email = action.payload;
//     },
//   },
// });
//
// export const { setUser, setMail } = userSlice.actions;
// export default userSlice.reducer;
//
//  export const selectName = (e:RootState) => e.user.name;
// // export const selectEmail = (e) => e.user.email;

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from '../store'
export interface AuthPropsState {
  user:string,
  email:string
  isAuth: boolean,
}

const initialState: AuthPropsState = {
  user:'',
  email:'',
  isAuth:true,

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<any>) => {
      console.log(action, 7777)
      state.user = action.payload.name
      state.email = action.payload.email
      state.isAuth = false
    },

  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions
export const selectUser = (state:RootState)=> state.user
export const selectEmail = (state:RootState)=> state.user.email
export default userSlice.reducer
