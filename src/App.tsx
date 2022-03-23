import React from "react";
import "./App.css";
import {Box} from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./pages/navbar/Navbar";


function App() {
    return (
        <Box className="bg">
            <Navbar/>
            <AppRoutes/>
        </Box>
    );
}

export default App;
