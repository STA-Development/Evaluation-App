import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "../../assets/scssInJS/signUp";
import ChangePassword from "../../assets/images/auth/ChangePassword";

const PassChanged = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Grid
          className="auth"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={5} md={6} sm={12}>
            <Box className="authChahgePass">
              <Box component="div" className="auth__passRec">
                <Typography variant="h2" className={classes.authHeader}>
                  Password Recovery
                </Typography>
                <Box>
                  <Typography className={classes.authText}>
                    Write your new password
                  </Typography>
                </Box>
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
              <ChangePassword />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PassChanged;
