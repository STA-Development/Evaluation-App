import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { useDashboardStyles } from "../assets/scssInJS/dashboard";

const Homepage = () => {
  const classes = useDashboardStyles();

  return (
    <Grid container className="privatePage">
      <Sidebar />
      <Outlet />
    </Grid>
  );
};

export default Homepage;
