import React from "react";
import "./App.css";
import {Box} from "@mui/material";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRouts from "./routes/PrivateRouts";

function App() {
  const isTrue = true
  return (
    <Box className="bg center">
      {isTrue ? <PublicRoutes/> : <PrivateRouts/>}
    </Box>
  );
}

export default App;
