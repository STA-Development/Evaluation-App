import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const Homepage = () => (
  <Grid container>
    <Sidebar />
    <Box className="outlet">
      <Outlet />
    </Box>
  </Grid>
);

export default Homepage;
