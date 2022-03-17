import React from "react";
import { Box } from "@mui/material";
import SignUp from "./SignUp";
import SignUpImg from "../../assets/images/auth/SignUpImg";

const IndexAuth = () => {
  return (
    <Box className="bg auth">
      <SignUp />
      <SignUpImg />
    </Box>
  );
};

export default IndexAuth;
