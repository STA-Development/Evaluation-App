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

export interface AuthPropsState {
  name:string,
  email:string
  isAuth: boolean,
  userId:number
}

const initialState: AuthPropsState = {
  name:'',
  email:'',
  isAuth:false,
  userId:0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<string>) => {
      state.name = action.payload;
    },
    setMail: (state, action: PayloadAction<string>) => {
       state.email = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser,setMail } = userSlice.actions

export default userSlice.reducer
