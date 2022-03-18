import React from "react";
import {Box, Button, FormControlLabel, FormGroup, TextField, Typography,} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {useStyles} from "../../assets/scssInJS/signUp";

const SignUp = () => {
    const classes = useStyles()

    return (
        <Box className="auth__title">
            <Box component="div" className="auth__title-text">
                <Typography variant="h2" className={classes.authHeader}>
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
                <Box className='auth__input'>
                    <TextField label="Name / Surname" variant="outlined"
                               className='auth__input-box' size='small'
                               fullWidth/>
                    <TextField label="Email" variant="outlined" type="email" fullWidth size='small'/>
                    <TextField
                        className={classes.authInput}
                        label="Password (6+ charachter , 1 capital letter, 1 number)"
                        type="password"
                        variant="outlined"
                        fullWidth
                        size='small'
                    />
                </Box>

                <FormControlLabel
                    control={<Checkbox/>}
                    label="Keep me signed in"
                    value="checkbox"
                    className={classes.authCheck}
                />

                <Button variant="contained" size='large'>Sign Up</Button>
            </FormGroup>
        </Box>
    );
};

export default SignUp;
