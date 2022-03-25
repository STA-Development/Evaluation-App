import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthPropsState {
  user: string;
  email: string;
  id: string;
  isAuth: boolean;
}

const initialState: AuthPropsState = {
  user: '',
  email: '',
  id: '',
  isAuth: true
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload.user;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isAuth = false;
    },
    removeUser(state) {
      state.user = '';
      state.email = '';
      state.id = '';
      state.isAuth = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
