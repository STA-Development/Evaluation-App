import React, { useEffect } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useStyles } from "../../assets/scssInJS/signUp";
import ChangePassword from "../../assets/images/auth/ChangePassword";
import CheckedGreenIcon from "../../assets/images/Icons/CheckedGreenIcon";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/images/Icons/CloseIcon";

const PassChanged = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate("/sign-in");
  };

  return (
    <Box>
      <Grid className="auth authGrid" container>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Paper className="auth__title">
            <Box className="authChagePass">
              <Button
                variant="text"
                className={classes.changedButton}
                onClick={handleClose}
              >
                <CloseIcon />
              </Button>
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
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <Box className="auth__box_right ">
            <ChangePassword />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PassChanged;
