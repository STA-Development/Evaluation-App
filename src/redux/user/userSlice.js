import { createSlice } from "@reduxjs/toolkit";

export const initialAuth = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialAuth,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
    setMail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUser, setMail } = userSlice.actions;
export default userSlice.reducer;

// export const selectName = (e) => e.user.name;
// export const selectEmail = (e) => e.user.email;
