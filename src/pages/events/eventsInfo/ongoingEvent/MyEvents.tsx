import React from "react";
import { Box, Typography } from "@mui/material";
import { useGlobalTheme } from "../../../../assets/style/globalVariables";

const MyEvents = () => {
  const globalClasses = useGlobalTheme();

  return (
    <Box>
      <Typography
        variant="h5"
        component="h4"
        className={globalClasses.contentHeader}
      >
        My Events
      </Typography>
    </Box>
  );
};

export default MyEvents;
