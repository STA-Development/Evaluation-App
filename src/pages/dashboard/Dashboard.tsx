import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useDashboardStyles} from "../../assets/scssInJS/dashboard";
import DashboardPageEmptyIcon from "../../assets/images/Icons/DashboardPageEmptyIcon"
import {Link} from "react-router-dom";

const Dashboard = () => {
    const classes = useDashboardStyles()
    return (
        <Box className={classes.dashboardPage}>
            <Typography className={classes.dashboardHeader}>
                Dashboard
            </Typography>
            <Box className={classes.dashboardContent}>
                <Box className={classes.dashboardEmptyImg}>
                    <DashboardPageEmptyIcon/>
                </Box>
                <Box className={classes.dashboardEmptyText}>
                    <Typography
                        sx={{marginTop: "25px", fontWeight: "700", fontFamily: "Montserrat", fontSize: "18px"}}>
                        No dashboard information is available yet.
                    </Typography>
                    <Typography
                        sx={{
                            width: "365px",
                            textAlign: "center",
                            flexDirection: "column",
                            fontWeight: "400",
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                            margin: "20px"
                        }}>
                        To see dashboard information you need to set up evaluation event first.
                    </Typography>
                    <Link style={{textDecoration: "none"}} to={"/events-create"}>
                        <Button variant="contained">CREATE EVENT</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;