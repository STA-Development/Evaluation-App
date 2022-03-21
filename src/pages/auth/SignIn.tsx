import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useStyles } from "../../assets/scssInJS/signUp";
import SignInImg from "../../assets/images/auth/SignInImg";

const SignIn = () => {
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
              <Box component="div" className="auth__title-text">
                <Typography variant="h2" className={classes.authHeader}>
                  Sign In
                </Typography>
                <Box>
                  <Typography className={classes.authText}>
                    Already have an account?
                  </Typography>

                  <Button variant="text">Sign up now</Button>
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
                  <TextField
                    className={classes.authInput}
                    inputProps={{ style: { fontSize: "14px" } }}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Keep me signed in"
                  value="checkbox"
                  className={classes.authCheck}
                />

                <Button variant="contained" size="large">
                  Sign In
                </Button>
                <a href="!#" className="auth__forgot-pass">
                  Forgot Password?
                </a>
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
              <SignInImg />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignIn;
