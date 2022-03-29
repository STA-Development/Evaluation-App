import React, {useState} from "react";
import {Box, Button, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography,} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {useStyles} from "../../assets/scssInJS/signUp";
import SignInImg from "../../assets/images/auth/SignInImg";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../data/firebase'
import {Link, useNavigate} from "react-router-dom";


const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log(auth)
      if (auth.currentUser) {
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Box>
      <Grid
        className="auth authGrid"
        container
      >
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Paper className="auth__title ">
            <Box className="auth__title-text">
              <Typography variant="h2" className={classes.authHeader}>
                Sign In
              </Typography>
              <Box>
                <Typography className={classes.authText}>
                  Already have an account?
                </Typography>

                <Link to='/'>Sign up now</Link>
              </Box>
            </Box>
            <FormGroup>
              <Box component='form' className="auth__input-box" onSubmit={handleSignIn}>
                <TextField
                  className={classes.authInput}
                  inputProps={{style: {fontSize: "14px"}}}
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  size="small"
                  value={email}
                  autoComplete="email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}

                />
                <TextField
                  className={classes.authInput}
                  inputProps={{style: {fontSize: "14px"}}}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}

                />

                <FormControlLabel
                  control={<Checkbox/>}
                  label="Keep me signed in"
                  value="checkbox"
                  className={classes.authCheck}
                />

                <Button variant="contained" size="large" type='submit'>
                  Sign In
                </Button>
              </Box>
            </FormGroup>
            <Link to='/password-recover-email' className="auth__forgot-pass">
              Forgot Password?
            </Link>
          </Paper>
        </Grid>
        <Grid
          item
          lg={4}
          md={5}
          sm={12}
          xs={12}
        >
          <Box className="auth__box-right ">
            <SignInImg/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
