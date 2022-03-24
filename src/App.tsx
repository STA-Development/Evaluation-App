import React from "react";
import "./App.css";
import {Box} from "@mui/material";
import Sidebar from "./pages/sidebar/Sidebar";
import {Outlet} from 'react-router-dom'

function App() {
    return (
        <Box className="bg" sx={{display: 'flex', justifyContent: "center"}}>
            <Sidebar/>
            <Outlet/>
        </Box>
    );
}

export default App;
