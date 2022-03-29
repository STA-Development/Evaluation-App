import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

const Homepage = () => {
  return (
    <Box>
      <Sidebar/>
      <Outlet/>
    </Box>
  );
};

export default Homepage;