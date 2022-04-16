import React from "react";
import { Box, Typography } from "@mui/material";
import { useDashboardStyles } from "../../../assets/styleJs/dashboard/dashboard";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const DashboardNotEvaluated = () => {
  const classes = useDashboardStyles();
  const evalutedEmployees = [
    {
      id: uuidv4(),
      name: "Anna Cooper",
      position: "Anna Cooper",
      evalDate: "Last evaluated 6 months ago",
    },
    {
      id: uuidv4(),
      name: "Anna Cooper",
      position: "Content Writer",
      evalDate: "Last evaluated 6 months ago",
    },
    {
      id: uuidv4(),
      name: "Jenny Adams",
      position: "Content Writer",
      evalDate: "Last evaluated 6 months ago",
    },
  ];

  return (
    <Box className={classes.overview}>
      <Box className="not__eval_employees">
        <Typography
          variant="h4"
          component="h4"
          className={classes.overviewHeader}
        >
          Not Evaluated Employees
        </Typography>
        <Link to="/events" className="not__eval_employees_link">
          Set Up Evaluation {">"}
        </Link>
      </Box>
      <Box>
        {evalutedEmployees.map((data) => (
          <Box className="not__eval_employees_text" key={data.id}>
            <Typography
              variant="h6"
              component="h6"
              className={classes.notEvalEmployeesText}
            >
              {data.name}
            </Typography>
            <Typography className={classes.textPosition}>
              {data.position}
            </Typography>
            <Typography className={classes.textEvaluated}>
              {data.evalDate}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DashboardNotEvaluated;
