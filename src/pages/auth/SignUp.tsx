import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "../../assets/styles";

const SignUp = () => {
  const classes = useStyles();
  return (
    <Box className="auth__title">
      <Box component="div" className="auth__title-text">
        <Typography variant="h2" className={classes.authText}>
          Sign up
        </Typography>
        <Box>
          <Typography className="auth__inner-text">
            Already have an account?{" "}
          </Typography>
          <a>Sign in</a>
        </Box>
      </Box>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="checkbox" /> <label>asd</label>
      <button>Sgn In</button>
    </Box>
  );
};

export default SignUp;
