import React, { useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "../../assets/scssInJS/signUp";
import ChangePassword from "../../assets/images/auth/ChangePassword";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../../data/firebase";
import { useNavigate } from "react-router-dom";

const PassRecoverNewPas = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [resetPass, setResetPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  function getParameterByName(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    let regexS = "[\\?&]" + name + "=([^&#]*)";
    let regex = new RegExp(regexS);
    let results = regex.exec(window.location.href);
    if (results == null) return "";
    else return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  let actionCode = getParameterByName("oobCode");

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (resetPass === confirmPass) {
      confirmPasswordReset(auth, actionCode, resetPass)
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.log(error);
        });
      setResetPass("");
      setConfirmPass("");
      navigate("/password-changed");
    } else {
      setError(true);
    }
  };

  return (
    <Box>
      <Grid className="auth authGrid" container>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Paper className="auth__title ">
            <Box className="auth__passRecCheng">
              <Typography variant="h2" className={classes.authHeader}>
                Password Recovery
              </Typography>
              <Box>
                <Typography className={classes.authText}>
                  Write your new password
                </Typography>
              </Box>
            </Box>
            <FormGroup>
              <Box
                component="form"
                className="auth__input-box"
                onSubmit={handleResetPassword}
              >
                <TextField
                  className={classes.authInput}
                  inputProps={{ style: { fontSize: "14px" } }}
                  label="New Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  error={error}
                  size="small"
                  helperText="Password shall be 6+ charachter , 1 capital letter, 1 number"
                  FormHelperTextProps={{
                    classes: {
                      root: classes.recPassLabel,
                    },
                  }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setResetPass(e.target.value);
                  }}
                />

                <TextField
                  className={classes.authInput}
                  inputProps={{ style: { fontSize: "14px" } }}
                  label="Confirm password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  error={error}
                  size="small"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setConfirmPass(e.target.value);
                  }}
                />
                <Button variant="contained" size="large" type="submit">
                  Save
                </Button>
              </Box>
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <Box className="auth__box-right ">
            <ChangePassword />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PassRecoverNewPas;
