import React from 'react'
import {Box, Button, Divider, Grid, Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'
import {useGlobalTheme} from '../../../../assets/style/globalVariables'
import useDashboardStyles from '../../../../assets/styleJs/dashboard/dashboard'
import {useEventsStyle} from '../../../../assets/styleJs/events/events'
import ProgressBar from 'react-customizable-progressbar'
import {data} from './ongoindEventData'

const OngoingEvent = () => {
  const eventClass = useEventsStyle()
  const globalClasses = useGlobalTheme()
  const classes = useDashboardStyles()

  return (
    <Box>
      <Box className="events__header">
        <Typography variant="h4" component="h4" className={classes.overviewHeader}>
          Ongoing Events
        </Typography>
        <NavLink className="text__decoration_none" to={'/'}>
          <Button variant="contained" size="large" className={globalClasses.button}>
            CREATE EVENT
          </Button>
        </NavLink>
      </Box>
      <Box className="ongoing__events-statistic">
        {data.map((item) => (
          <Box className="ongoing__events" key={item.id}>
            <Grid container>
              <Grid item md={6}>
                <Box>
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
                <Box className="ongoing__events-percent">
                  <Typography variant="h4" component="h4">
                    {item.progress}%
                  </Typography>
                  <Typography>In Progress</Typography>
                </Box>
              </Grid>

              <Divider className={eventClass.ongoingEventsDivider} />
              <Grid item md={12}>
                <Box className="ongoing__events-quarterly">
                  <Typography component="h5">{item.header}</Typography>
                  <Box className="ongoing__events-date">
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
  )
}

export default OngoingEvent
