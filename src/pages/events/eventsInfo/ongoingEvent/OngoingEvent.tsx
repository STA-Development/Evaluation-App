import React from "react";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useGlobalTheme} from "../../../../assets/style/globalVariables";
import {useDashboardStyles} from "../../../../assets/styleJs/dashboard/dashboard";
import {useEventsStyle} from "../../../../assets/styleJs/events/events";
import {randomColor, randomNumber} from "../../../../assets/styleJs/utils";


ChartJS.register(ArcElement, Tooltip, Legend);

const OngoingEvent = () => {
  const eventClass = useEventsStyle();
  const globalClasses = useGlobalTheme();
  const classes = useDashboardStyles();


  const data = [
    {
      datasets: [
        {
          label: "# of Votes",
          data: [
            randomNumber(),
            randomNumber(),
          ],
          backgroundColor: [
            `rgb(${randomColor()} ${randomColor()} ${randomColor()} )`,
            `rgb(${randomColor()} ${randomColor()} ${randomColor()} )`
          ],
          borderWidth: 1,
        },
      ],

      option: {
        maintainAspectRatio: false,
      },
      header: "Quarterly Development Team Evoluation",
      percent: "70%",
      dataStart: "Oct 15 2020",
      dataEnd: "Dec 30 2020",
      id: Math.random(),
    },
    {
      datasets: [
        {
          label: "# of Votes",
          data: [
            randomNumber(),
            randomNumber(),
          ],
          backgroundColor: [
            `rgb(${randomColor()} ${randomColor()} ${randomColor()} )`,
            `rgb(${randomColor()} ${randomColor()} ${randomColor()} )`,
          ],
          borderWidth: 1,
        },
      ],

      option: {
        maintainAspectRatio: false,
      },
      header: "Quarterly Development Team Evoluation",
      percent: "50%",
      dataStart: "Oct 15 2020",
      dataEnd: "Dec 30 2020",
      id: Math.random(),
    },
    {
      datasets: [
        {
          label: "# of Votes",
          data: [
            randomNumber(),
            randomNumber(),
          ],
          backgroundColor: [
            `rgb(${randomColor()} ${randomColor()} ${randomColor()} )`,
            `rgb(${randomColor()} ${randomColor()} ${randomColor()} )`,
          ],
          borderWidth: 1,
        },
      ],

      option: {
        maintainAspectRatio: false,
      },
      header: "Quarterly Development Team Evoluation",
      percent: "20%",
      dataStart: "Oct 15 2020",
      dataEnd: "Dec 30 2020",
      id: Math.random(),
    },
  ];

  return (
    <Box>
      <Box className="event__header">
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
                  <Doughnut data={item}/>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className="ongoingEvents__percent">
                  <Typography variant="h4" component="h4">
                    {item.datasets[0].data[0]}
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
