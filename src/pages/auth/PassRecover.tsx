import React,{useState} from "react";
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
import {  sendPasswordResetEmail ,sendSignInLinkToEmail} from "firebase/auth";
import {auth} from '../../data/firebase'

const PassRecover = () => {
  const classes = useStyles();
const [email, setEmail] = useState('');
const [error, setError] = useState(false);


const actionCodeSettings = {
    url: 'http://localhost:3000/signin',
    handleCodeInApp: true,
}




const handleRecoverPass =async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();


        await sendPasswordResetEmail(auth, email)
            .then((link)=>{
              console.log("link", link)
              console.log(`navigate('/passrecovernew pass rout')`)
              console.log("auth", auth)
              setEmail('');
            })
            .catch ((error)=>{
              console.log(error)
              setError(true)
            })



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
                <Box component='form' className="auth__input-box"  onSubmit={handleRecoverPass}>
                  <TextField
                    className={classes.authInput}
                    inputProps={{ style: { fontSize: "14px" } }}
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    size="small"
                    value={email}
                    error={error}
                    autoComplete="email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />

                <Button variant="contained" size="large" type='submit'>
                  SEND ME LINK
                </Button>
                </Box>
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
