import React from "react";
import {Box, Typography} from "@mui/material";
import {useDashboardStyles} from "../../../assets/scssInJS/dashboard";
import {Link} from "react-router-dom";

const DashboardNotEvaluated = () => {
  const classes = useDashboardStyles();
  const evalutedEmployees = [
    {
      id: Math.random(),
      name: "Anna Cooper",
      position: "Anna Cooper",
      evalDate: "Last evaluated 6 months ago",
    },
    {
      id: Math.random(),
      name: "Anna Cooper",
      position: "Content Writer",
      evalDate: "Last evaluated 6 months ago",
    },
    {
      id: Math.random(),
      name: "Jenny Adams",
      position: "Content Writer",
      evalDate: "Last evaluated 6 months ago",
    },
  ];

  return (
    <Box className={classes.overview}>
      <Box className="notEvalEmployes">
        <Typography
          variant="h4"
          component="h4"
          className={classes.overviewHeader}
        >
          Not Evaluated Employees
        </Typography>
        <Link to="/events" className="notEvalEmployes__link">
          Set Up Evaluation {">"}
        </Link>
      </Box>
      <Box className="notEvalEmployies__lists">
        {evalutedEmployees.map((data) => (
          <Box className="notEvalEmployies__text" key={data.id}>
            <Typography
              variant="h6"
              component="h6"
              className={classes.notEvalEmployiesText}
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
