import React, { useState } from "react";
import EmptyDashboard from "./EmptyDashboard";
import FullDashboard from "./FullDashboard";
import { Box, Typography } from "@mui/material";
import { useDashboardStyles } from "../../assets/scssInJS/dashboard";

const Dashboard = () => {
  const classes = useDashboardStyles();

  const [hasInfo, setHasInfo] = useState<boolean>(false);

  return (
    <Box className={classes.dashboardPage}>
      <Typography className={classes.dashboardHeader}>Dashboard</Typography>
      {hasInfo ? <EmptyDashboard /> : <FullDashboard />}
    </Box>
  );
};

export default Dashboard;
