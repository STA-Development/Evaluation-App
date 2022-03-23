import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  // const user = useSelector((s) => s.user.name);
  // const mail = useSelector(selectEmail);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [paswordError, setPasswordError] = useState(false);

  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // console.log('Name - ',name);
  };
  const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // console.log('Email - ', email);
  };

  const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    //console.log('Password - ', name);
  };
  const handleSubmitBtn = () => {
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (name && email && password) {
      setNameError(false);
      setEmailError(false);
      setPasswordError(false);

      dispatch(setUser("asd"));

      console.log(name, email, password);

      setEmail("");
      setName("");
      setPassword("");
    }
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
  };

  // console.log(user);

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
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    className={classes.authInput}
                    label="Name / Surname"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={name}
                    error={nameError}
                    onChange={getName}
                  />
                  <TextField
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    className={classes.authInput}
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    error={emailError}
                    value={email}
                    size="small"
                    onChange={getEmail}
                  />
                  <TextField
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    className={classes.authInput}
                    label="Password (6+ charachter , 1 capital letter, 1 number)"
                    type="password"
                    variant="outlined"
                    fullWidth
                    error={paswordError}
                    value={password}
                    size="small"
                    onChange={getPassword}
                  />
                </Box>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Keep me signed in"
                  value="checkbox"
                  className={classes.authCheck}
                />
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSubmitBtn}
                >
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
