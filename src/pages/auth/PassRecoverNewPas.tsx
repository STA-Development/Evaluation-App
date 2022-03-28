import React from "react";
import {
  Box,
  Button,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "../../assets/scssInJS/signUp";
import ChangePassword from "../../assets/images/auth/ChangePassword";

const PassRecoverNewPas = () => {
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
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="auth__title ">
              <Box component="div" className="auth__passRecCheng">
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
                <Box className="auth__input-box">
                  <TextField
                    className={classes.authInput}
                    inputProps={{ style: { fontSize: "14px" } }}
                    label="New Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    size="small"
                    helperText="Password shall be 6+ charachter , 1 capital letter, 1 number"
                    FormHelperTextProps={{
                      classes: {
                        root: classes.recPassLabel,
                      },
                    }}
                  />

                  <TextField
                    className={classes.authInput}
                    inputProps={{ style: { fontSize: "14px" } }}
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Button variant="contained" size="large">
                  Save
                </Button>
              </FormGroup>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            md={5}
            sm={12}
            xs={12}
            justifyContent="center"
            style={{ display: "flex" }}
          >
            <Box className="auth__box-right ">
              <ChangePassword />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PassRecoverNewPas;
