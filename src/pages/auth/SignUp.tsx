import React from "react";
import {Box} from "@mui/material";

const SignUp = () => {
    return (
        <Box className="auth__title">
            <h2>Sign Up</h2>
            <p>Already have an account? </p>
            <button>Sgn In</button>
            <input type="text"/>
        </Box>
    );
};

export default SignUp;
