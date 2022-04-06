import React from "react";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useGlobalTheme} from "../../../assets/style/globalVariables";
import {useDashboardStyles} from "../../../assets/styleJs/dashboard/dashboard";
import {useEventsStyle} from "../../../assets/styleJs/events/events";

ChartJS.register(ArcElement, Tooltip, Legend);

const OngoingEvent = () => {
  const eventClass = useEventsStyle();
  const globalClasses = useGlobalTheme();
  const classes = useDashboardStyles();

  const dataEvents = [
    {
      id: Math.random(),
      data: 70,
      color: "blue",

    },
    {
      id: Math.random(),
      data: 30,
      color: "#ccc",

    },

  ];


  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: dataEvents.map((data) => data.data),
        backgroundColor: dataEvents.map((data) => data.color),
        borderColor: dataEvents.map((data) => data.color),
        borderWidth: 1,

      },
    ],
    option: {
      maintainAspectRatio: false,
    },
  };

  return (
    <Box>
      <Box className='event__header'>
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
      <Box className='ongoingEvents'>
        <Grid container className='ongoingEvents__grid'>
          <Grid item md={6}>
            <Box className='ongoingEvents__chart'>
              <Doughnut data={data}/>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className='ongoingEvents__percent'>
              <Typography variant='h4' component='h4'>70%</Typography>
              <Typography>In Progress</Typography>
            </Box>
          </Grid>
          <Divider className={eventClass.ongoingEventsDivider}/>
          <Grid item md={12}>
            <Box className='ongoingEvents__quarterly'>
              <Typography component='h5'>Quarterly Development Team Evoluation</Typography>
              <Box className='ongoingEvents__date'>
                <Grid container>
                  <Grid item md={6}>
                    <Typography> Start Date: </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography> Oct 15 2020 </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography> End Date: </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography> Dec 30 2020 </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
};

export default OngoingEvent;
