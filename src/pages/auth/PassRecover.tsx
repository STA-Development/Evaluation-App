import React from "react";
import {
  Box,
  Button,
  FormGroup,
  Grid,
  TextField,
  Paper,
  Typography,
} from "@mui/material";
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
            <Paper className="auth__title ">
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
              <FormGroup>
                <Box className="auth__input-box">
                  <TextField
                    className={classes.authInput}
                    inputProps={{ style: { fontSize: "14px" } }}
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Button variant="contained" size="large">
                  SEND ME LINK
                </Button>
              </FormGroup>
            </Paper>
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
