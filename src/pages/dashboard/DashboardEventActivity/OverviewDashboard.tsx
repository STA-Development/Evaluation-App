import React from "react";
import DashboardEventActive from "./DashboardEventActive";
import { Box, Grid, Typography } from "@mui/material";
import DashboardNotEvaluated from "./DashboardNotEvaluated";
import { useGlobalTheme } from "../../../assets/style/globalVariables";

const OverviewDashboard = () => {
  const classes = useGlobalTheme();
  return (
    <Box>
      <Typography variant="h5" component="h4" className={classes.contentHeader}>
        Recent Evoluation Event Activity
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={7} sm={12}>
          <DashboardEventActive />
        </Grid>
        <Grid item md={5} sm={12}>
          <DashboardNotEvaluated />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverviewDashboard;
