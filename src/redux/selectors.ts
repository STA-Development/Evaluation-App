import { RootState } from "./store";

export const selectUser = (state: RootState) => state.user;
export const selectEmail = (state: RootState) => state.user.email;