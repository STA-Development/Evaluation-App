import React from "react";
import { Box } from "@mui/material";
import AuthBackgroundVector from "../../assets/images/auth/AuthBackgroundVector";
import SignUp from '../auth/SignUp'


const IndexAuth = () => {
  return (
    <Box>
      <SignUp/>
      {/*<SignIn />*/}
      {/*<PassRecover />*/}
      {/*<PassRecoverSent />*/}
      {/*<PassRecoverNewPas />*/}
      {/*<PassChanged />*/}
      <Box component="div" className="childThing">
        <AuthBackgroundVector />
      </Box>
    </Box>
  );
};

export default IndexAuth;
