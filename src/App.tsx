import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import IndexAuth from "./pages/auth/IndexAuth";
import AuthBackgroundVector from "./assets/images/auth/AuthBackgroundVector";

function App() {
  return (
    <Box className="bg">
      <IndexAuth />
    </Box>
  );
}

export default App;
