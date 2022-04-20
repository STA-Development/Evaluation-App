import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRouts from "./routes/PrivateRouts";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./data/firebase";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { removeUser, setUser } from "./redux/user/userSlice";
import { selectUserId } from "./redux/selectors";

function App() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(removeUser());
    }
  });

  return (
    <Box className="bg">{userId ? <PrivateRouts /> : <PublicRoutes />}</Box>
  );
}

export default App;
