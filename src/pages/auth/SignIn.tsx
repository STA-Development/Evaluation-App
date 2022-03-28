import React, {useState} from "react";
import {Box, Button, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography,} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {useStyles} from "../../assets/scssInJS/signUp";
import SignInImg from "../../assets/images/auth/SignInImg";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../data/firebase'


const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log(auth)
      if (auth.currentUser) {
        console.log(auth.currentUser)
        console.log(`navigate('/private-route')`)
      }
    } catch (error) {
      console.log(error)
    }
  }


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
          <Grid item lg={4} md={6} sm={12} xs={12}>
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
                    onChange={(e) => setEmail(e.target.value)}

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
                    onChange={(e) => setPassword(e.target.value)}

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
              <a href='#!' className="auth__forgot-pass">
                Forgot Password?
              </a>
            </Paper>
          </Grid>
          <Grid
            item
            lg={4}
            md={5}
            sm={12}
            xs={12}
            justifyContent="center"
            style={{display: "flex"}}
          >
            <Box className="auth__box-right ">
              <SignInImg/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignIn;
