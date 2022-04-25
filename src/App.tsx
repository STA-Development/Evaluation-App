import React  from "react";
import "./App.css";
import { Box } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRouts from "./routes/PrivateRouts";
import { auth } from "./data/firebase";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { removeUser, setUser } from "./redux/user/userSlice";
import { selectUserId } from "./redux/selectors";
import {EventContextProvider} from "./pages/events/createEvents/EventsContext";

const App = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectUserId)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          user: user.displayName,
          uid: user.uid,
          email: user.email,
          token: user.refreshToken,
        }),
      )
    } else {
      dispatch(removeUser())
    }
  })

  return (
    <EventContextProvider>
      <Box className="bg">{userId ? <PrivateRouts /> : <PublicRoutes />}</Box>
    </EventContextProvider>

  );
}

export default App
