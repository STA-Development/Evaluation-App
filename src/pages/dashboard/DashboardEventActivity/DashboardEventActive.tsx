import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDashboardStyles } from "../../../assets/scssInJS/dashboard";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardEventActive = () => {
  const classes = useDashboardStyles();

  const dataStyles = [
    {
      id: 1,
      data: 13,
      color: "rgba(178, 228, 213, 1)",
      name: "Rock Stars",
    },
    {
      id: 2,
      data: 10,
      color: "rgba(177, 142, 166, 1)",
      name: "Good Potential",
    },
    {
      id: 3,
      data: 4,
      color: "rgba(242, 166, 166, 1)",
      name: "Need Help",
    },
    {
      id: 4,
      data: 7,
      color: "rgba(231, 243, 238, 1)",
      name: "Waitng For The Evoluation",
    },
  ];

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: dataStyles.map((data) => data.data),
        backgroundColor: dataStyles.map((data) => data.color),
        borderColor: dataStyles.map((data) => data.color),
        borderWidth: 1,
        hoverOffset: 15,
      },
    ],
    option: {
      maintainAspectRatio: false,
    },
  };

  return (
    <Box className={classes.overview}>
      <Typography
        variant="h4"
        component="h4"
        className={classes.overviewHeader}
      >
        Overview
      </Typography>
      <Grid container>
        <Grid item md={6}>
          <Box className="canvasStyle">
            <Pie data={data} />
          </Box>
        </Grid>
        <Grid item md={1}>
          <Typography component="span" className={classes.overViewTitle} />
        </Grid>
        <Grid item md={5}>
          <Box className="overViewEval">
            <Box className="overViewEvalFeedback">
              {dataStyles.map((data) => (
                <Box key={data.id}>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ backgroundColor: data.color }}
                  />
                  <Typography>{data.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardEventActive;
