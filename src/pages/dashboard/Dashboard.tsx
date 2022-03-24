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
          <Typography className={classes.dashText1}>
            No dashboard information is available yet.
          </Typography>
          <Typography className={classes.dashText2}>
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