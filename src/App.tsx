import React from "react";
import "./App.css";
import {Box} from "@mui/material";
import SignIn from "./pages/auth/SignIn";

function App() {
  return (
    <Box className="bg" sx={{display: 'flex', justifyContent: "center"}}>
      {/*<Sidebar/>*/}
      {/*<Outlet/>*/}
      {/*<SignUp/>*/}
      <SignIn/>

    </Box>
  );
}

export default App;
