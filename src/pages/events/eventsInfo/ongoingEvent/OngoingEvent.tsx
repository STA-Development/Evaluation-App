import React from "react";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useGlobalTheme} from "../../../../assets/style/globalVariables";
import {useDashboardStyles} from "../../../../assets/styleJs/dashboard/dashboard";
import {useEventsStyle} from "../../../../assets/styleJs/events/events";
import {randomColor, randomNumber} from "../../../../assets/styleJs/utils";
import ProgressBar from "react-customizable-progressbar";

ChartJS.register(ArcElement, Tooltip, Legend);

const OngoingEvent = () => {
  const eventClass = useEventsStyle();
  const globalClasses = useGlobalTheme();
  const classes = useDashboardStyles();

  const data = [
    {
      header: "Quarterly Development Team Evoluation",
      progress: randomNumber(),
      color: `rgb(${randomColor()} ${randomColor()}  ${randomColor()})`,
      dataStart: "Oct 15 2020",
      dataEnd: "Dec 30 2020",
      id: Math.random(),
    },
    {
      header: "Quarterly Development Team Evoluation",
      progress: randomNumber(),
      color: `rgb(${randomColor()} ${randomColor()}  ${randomColor()})`,
      dataStart: "Oct 15 2020",
      dataEnd: "Dec 30 2020",
      id: Math.random(),
    },
    {
      header: "Quarterly Development Team Evoluation",
      progress: randomNumber(),
      color: `rgb(${randomColor()} ${randomColor()}  ${randomColor()})`,
      dataStart: "Oct 15 2020",
      dataEnd: "Dec 30 2020",
      id: Math.random(),
    },
  ];

  return (
    <Box>
      <Box className="events__header">
        <Typography
          variant="h4"
          component="h4"
          className={classes.overviewHeader}
        >
          Ongoing Events
        </Typography>
        <NavLink style={{textDecoration: "none"}} to={"/"}>
          <Button
            variant="contained"
            size="large"
            className={globalClasses.button}
          >
            CREATE EVENT
          </Button>
        </NavLink>
      </Box>
      <Box className="ongoingEvents__statistic">
        {data.map((item) => (
          <Box className="ongoingEvents" key={item.id}>
            <Grid container className="ongoingEvents__grid">
              <Grid item md={6}>
                <Box className="ongoingEvents__chart">
                  <ProgressBar
                    radius={40}
                    progress={item.progress}
                    strokeWidth={18}
                    strokeColor={item.color}
                    strokeLinecap="square"
                    trackStrokeWidth={18}
                  />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className="ongoingEvents__percent">
                  <Typography variant="h4" component="h4">
                    {item.progress}%
                  </Typography>
                  <Typography>In Progress</Typography>
                </Box>
              </Grid>

              <Divider className={eventClass.ongoingEventsDivider}/>
              <Grid item md={12}>
                <Box className="ongoingEvents__quarterly">
                  <Typography component="h5">{item.header}</Typography>
                  <Box className="ongoingEvents__date">
                    <Grid container>
                      <Grid item md={6}>
                        <Typography> Start Date: </Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography> {item.dataStart}</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography> End Date: </Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography> {item.dataEnd}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OngoingEvent;
