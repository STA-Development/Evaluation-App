import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useStyles } from "../../assets/scssInJS/signUp";
import PasswordRecovery from "../../assets/images/auth/PasswordRecovery";

const PassRecover = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Grid
          className="auth"
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item lg={5} md={6} sm={12}>
            <Box className="auth__title ">
              <Box component="div" className="auth__passRec">
                <Typography variant="h2" className={classes.authHeader}>
                  Password Recovery
                </Typography>
                <Box>
                  <Typography className={classes.authText}>
                    Write your email , we will send you recovery link{" "}
                  </Typography>
                </Box>
              </Box>

              <Box className="btnGroup">
                <Button variant="outlined" size="large">
                  Resend
                </Button>
                <Button variant="contained" size="large">
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={7}
            md={6}
            sm={12}
            justifyContent="center"
            style={{ display: "flex" }}
          >
            <Box className="auth__box-right ">
              <PasswordRecovery />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PassRecover;
