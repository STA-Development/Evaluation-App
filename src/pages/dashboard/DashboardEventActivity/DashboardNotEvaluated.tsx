import React from "react";
import { Box } from "@mui/material";
import { useDashboardStyles } from "../../../assets/scssInJS/dashboard";

const DashboardNotEvaluated = () => {
  const classes = useDashboardStyles();
  return <Box className={classes.overview}></Box>;
};

export default DashboardNotEvaluated;
