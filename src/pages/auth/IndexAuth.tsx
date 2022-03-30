import React from "react";
import { Box } from "@mui/material";
import AuthBackgroundVector from "../../assets/images/auth/AuthBackgroundVector";
import { Outlet } from "react-router-dom";

const IndexAuth = () => {
  return (
    <Box>
      <Outlet />
      <Box component="div" className="childThing">
        <AuthBackgroundVector />
      </Box>
    </Box>
  );
};

export default IndexAuth;
