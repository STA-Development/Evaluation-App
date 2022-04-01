import React, { useState } from "react";
import EmptyDashboard from "./EmptyDashboard";
import FullDashboard from "./FullDashboard";
import { Box, Typography } from "@mui/material";
import { useDashboardStyles } from "../../assets/scssInJS/dashboard";
import { useGlobalTheme } from "../../assets/style/globalVariables";

const Dashboard = () => {
  const classes = useDashboardStyles();
  const globalClasses = useGlobalTheme();
  const [hasInfo, setHasInfo] = useState<boolean>(false);

  return (
    <Box className={classes.dashboardPage}>
      <Typography className={globalClasses.titleHeader}>Dashboard</Typography>
      {hasInfo ? <EmptyDashboard /> : <FullDashboard />}
    </Box>
  );
};

export default Dashboard;
