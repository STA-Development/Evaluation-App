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
import {useNavigate} from 'react-router-dom';
import Checkbox from "@mui/material/Checkbox";
import { useStyles } from "../../assets/scssInJS/signUp";
import SignUpImg from "../../assets/images/auth/SignUpImg";

import { setUser } from "../../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/selectors";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../data/firebase'

const SignUp = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const userInfo = useAppSelector(selectUser);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [paswordError, setPasswordError] = useState(false);
  // const count = useSelector((state: RootState) => state.user.name)




  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (name && email && password) {
      setNameError(false);
             setEmailError(false);
      setPasswordError(false);

      try{
        const user = await createUserWithEmailAndPassword(auth, email, password )
        console.log(user)

    }catch (error:any){
       console.log(error.message)
    }





      setEmail("");
      setName("");
      setPassword("");
    }else    if (!name) {
      setNameError(true);
    }else    if (!email) {
      setEmailError(true);
    }else    if (!password) {
      setPasswordError(true);
    }else{
      console.log('Something error')
    }

    console.log(`navigate('/prvate-routs')`)
  };






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
                  <Box
                      component="form"
                      noValidate
                      className="auth__input-box"
                      onSubmit={handleSubmit}
                  >
                    <TextField
                        InputLabelProps={{style: {fontSize: 14}}}
                        className={classes.authInput}
                        label="Name / Surname"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={name}
                        error={nameError}
                        onChange={getName}
                        autoComplete="name"
                    />
                    <TextField
                        InputLabelProps={{style: {fontSize: 14}}}
                        className={classes.authInput}
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        error={emailError}
                        value={email}
                        size="small"
                        onChange={getEmail}
                        autoComplete="email"
                    />
                    <TextField
                        InputLabelProps={{style: {fontSize: 14}}}
                        className={classes.authInput}
                        label="Password (6+ charachter , 1 capital letter, 1 number)"
                        type="password"
                        variant="outlined"
                        fullWidth
                        error={paswordError}
                        value={password}
                        size="small"
                        onChange={getPassword}
                        autoComplete="new-password"
                    />

                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Keep me signed in"
                        value="checkbox"
                        className={classes.authCheck}
                    />
                    <Button type="submit" variant="contained" size="large">
                      Sign Up
                    </Button>
                  </Box>
                </FormGroup>
              </Paper>
            </Grid>
            <Grid
                item
                md={7}
                sm={6}
                xs={12}
                justifyContent="flex-end"
                style={{display: "flex"}}
            >
              <Box className="auth__box-right ">
                <SignUpImg/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
  );
};

export default SignUp;
