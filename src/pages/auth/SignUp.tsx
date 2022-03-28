import React, {useState} from "react";
import {Box, Button, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography,} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {useStyles} from "../../assets/scssInJS/signUp";
import SignUpImg from "../../assets/images/auth/SignUpImg";
import {useAppDispatch} from "../../redux/hooks";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../data/firebase";
import {setUser} from "../../redux/user/userSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const userInfo = useAppSelector(selectUser);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [paswordError, setPasswordError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (name && email && password) {
      setNameError(false);
      setEmailError(false);
      setPasswordError(false);

      await createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          console.log(user);
          console.log(auth);
          dispatch(
            setUser({
              user: name,
              email: user.email,
              id: user.uid,
              // token: user.token,
            })
          );
        })
        .catch((error: any) => {
          if (error.code === "auth/email-already-in-use") {
            alert("Email alredy un-use");
          } else {
            console.log(error.message);
          }
        });

      setEmail("");
      setName("");
      setPassword("");
    } else if (!name) {
      setNameError(true);
    } else if (!email) {
      setEmailError(true);
    } else if (!password) {
      setPasswordError(true);
    } else {
      console.log("Something error");
    }

    console.log(`navigate('/prviate-routs')`);
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
          <Grid item lg={4} md={6} sm={12} xs={12} alignItems="center">
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setName(e.target.value);
                    }}
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                    }}
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value);
                    }}
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
            lg={4}
            md={5}
            sm={12}
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
