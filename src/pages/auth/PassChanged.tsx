import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useStyles } from "../../assets/scssInJS/signUp";
import ChangePassword from "../../assets/images/auth/ChangePassword";
import CheckedGreenIcon from "../../assets/images/Icons/CheckedGreenIcon";

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
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Paper className="authChahgePass auth__title">
              <Box component="div" className="auth__passRec">
                <Typography variant="h2" className={classes.authHeader}>
                  Password Recovery
                </Typography>
                <Box>
                  <Typography className={classes.authText}>
                    Write your new password
                  </Typography>
                </Box>
                <Box>
                  <CheckedGreenIcon />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid
            item
            lg={4}
            md={5}
            sm={12}
            xs={12}
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
