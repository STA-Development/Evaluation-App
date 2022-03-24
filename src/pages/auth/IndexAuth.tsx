import React from "react";
import {Box} from "@mui/material";
import SignUp from "./SignUp";
import AuthBackgroundVector from "../../assets/images/auth/AuthBackgroundVector";

const IndexAuth = () => {
    return (
        <Box className="bg auth">
            <div>
                <SignUp/>
            </div>

            <div className="testStyles">
                <p></p>
                <div className="childThing">
                    <AuthBackgroundVector/>
                </div>
            </div>

        </Box>
    );
};

export default IndexAuth;
