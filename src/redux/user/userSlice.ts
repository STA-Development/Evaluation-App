import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthPropsState {
  user: string;
  email: string;
  uid: string;
  isAuth: boolean;
  token: string;
}

const initialState: AuthPropsState = {
  user: "",
  email: "",
  uid: "",
  token: "",
  isAuth: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload.user;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.token = action.payload.token;
      state.isAuth = false;
    },
    removeUser(state) {
      state.user = "";
      state.email = "";
      state.uid = "";
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
