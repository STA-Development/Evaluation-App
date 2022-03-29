import React from "react";
import {Box, Button, Grid, Typography} from "@mui/material";
import {useStyles} from "../../assets/scssInJS/signUp";
import PasswordRecovery from "../../assets/images/auth/PasswordRecovery";
import {useNavigate} from "react-router-dom";

const PassRecover = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleResend = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    navigate('/password-recover-email')
  }
  const handleSignIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/sign-in');
  }
  return (
    <Box>
      <Grid
        className="auth authGrid"
        container

      >
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Box className="auth__title ">
            <Box component="div" className="auth__passResend">
              <Typography variant="h2" className={classes.authHeader}>
                Password Recovery
              </Typography>
              <Box>
                <Typography className={classes.authText}>
                  Write your email , we will send you recovery link{" "}
                </Typography>
              </Box>
              <Box className="btnGroup">
                <Button variant="outlined" size="large" onClick={handleResend}>
                  Resend
                </Button>
                <Button variant="contained" size="large" onClick={handleSignIn}>
                  Sign In
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid className={classes.passRecGrid}
              item
              lg={4}
              md={5}
              sm={12}
              xs={12}>
          <Box className="auth__box-right ">
            <PasswordRecovery/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PassRecover;