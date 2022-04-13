import React, { useEffect } from "react";
import "./App.css";
import { Box } from "@mui/material";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRouts from "./routes/PrivateRouts";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./data/firebase";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { removeUser, setUser } from "./redux/user/userSlice";
import { selectUserId } from "./redux/selectors";
import {ContextProvider} from "./pages/events/createEvents/EventsContext";

function App() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            user: user.displayName,
            uid: user.uid,
            email: user.email,
            token: user.refreshToken,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, [auth, dispatch]);

  return (
    <ContextProvider>
      <Box className="bg">{userId ? <PrivateRouts /> : <PublicRoutes />}</Box>
    </ContextProvider>

  );
}

export default App;
