import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {Grid} from "@mui/material";

const Homepage = () => {
  return (
    <Grid container>
      <Sidebar/>
      <Outlet/>
    </Grid>
  );
};

export default Homepage;