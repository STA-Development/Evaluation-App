import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "../../assets/styles";
import Checkbox from "@mui/material/Checkbox";

const SignUp = () => {
  const classes = useStyles();

  return (
    <Box className="auth__title">
      <Box component="div" className="auth__title-text">
        <Typography variant="h2" className={classes.authText}>
          Sign up
        </Typography>
        <Box>
          <Typography className="auth__inner-text">
            Already have an account?{" "}
          </Typography>
          <a>Sign in</a>
        </Box>
      </Box>
      <FormGroup>
        <TextField label="Name / Surname" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" type="email" fullWidth />
        <TextField
          label="Password (6+ charachter , 1 capital letter, 1 number)"
          type="password"
          variant="outlined"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Keep me signed in"
          value="checkbox"
        />

        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </FormGroup>
    </Box>
  );
};

export default SignUp;
