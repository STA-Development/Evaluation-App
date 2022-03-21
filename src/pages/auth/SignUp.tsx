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
import SignUpImg from "../../assets/images/auth/SignUpImg";

const SignUp = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Grid
          container
          className="auth"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item md={5} sm={6} xs={12} alignItems="center">
            <Paper className="auth__title ">
              <Box component="div" className="auth__title-text">
                <Typography
                  variant="h2"
                  className={classes.authHeader}
                  gutterBottom
                >
                  Sign up
                </Typography>
                <Box>
                  <Typography className={classes.authText}>
                    Already have an account?
                  </Typography>

                  <Button variant="text">Sign in</Button>
                </Box>
              </Box>
              <FormGroup>
                <Box className="auth__input-box">
                  <TextField
                    inputProps={{ style: { fontSize: "14px" } }}
                    className={classes.authInput}
                    label="Name / Surname"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                  <TextField
                    inputProps={{ style: { fontSize: "14px" } }}
                    className={classes.authInput}
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    size="small"
                  />
                  <TextField
                    inputProps={{ style: { fontSize: "14px" } }}
                    className={classes.authInput}
                    label="Password (6+ charachter , 1 capital letter, 1 number)"
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
                  Sign Up
                </Button>
              </FormGroup>
            </Paper>
          </Grid>
          <Grid
            item
            md={7}
            sm={6}
            xs={12}
            justifyContent="flex-end"
            style={{ display: "flex" }}
          >
            <Box className="auth__box-right ">
              <SignUpImg />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignUp;
