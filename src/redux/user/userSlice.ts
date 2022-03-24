import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthPropsState {
  user: string;
  email: string;
  isAuth: boolean;
}

const initialState: AuthPropsState = {
  user: "",
  email: "",
  isAuth: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload.name;
      state.email = action.payload.email;
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
