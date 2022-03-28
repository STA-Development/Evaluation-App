import React from "react";
import { Box } from "@mui/material";
import AuthBackgroundVector from "../../assets/images/auth/AuthBackgroundVector";
import PassChanged from "./PassChanged";

const IndexAuth = () => {
  return (
    <Box>
      {/*<SignUp />*/}
      {/*<SignIn />*/}
      {/*<PassRecover />*/}
      {/*<PassRecoverSent />*/}
      {/*<PassRecoverNewPas />*/}
      <PassChanged />
      <Box component="div" className="childThing">
        <AuthBackgroundVector />
      </Box>
    </Box>
  );
};

export default IndexAuth;
