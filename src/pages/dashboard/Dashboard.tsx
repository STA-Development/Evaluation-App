import React, {useState} from "react";
import EmptyDashboard from "./EmptyDashboard";
import FullDashboard from "./FullDashboard";
import {Box, Typography} from "@mui/material";
import {useDashboardStyles} from "../../assets/styleJs/dashboard/dashboard";
import {useGlobalTheme} from "../../assets/style/globalVariables";

const Dashboard = () => {
  const classes = useDashboardStyles();
  const globalClasses = useGlobalTheme();
  const [hasInfo, setHasInfo] = useState<boolean>(false);

  return (
    <Box>
      <Typography className={globalClasses.titleHeader}>Dashboard</Typography>
      {hasInfo ? (
        <Box className={classes.emptyDashboard}>
          <EmptyDashboard/>
        </Box>
      ) : <FullDashboard/>}
    </Box>
  );
};

export default Dashboard;