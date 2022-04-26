import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Button, Typography} from '@mui/material'
import EventsNoEventIcon from '../../../../assets/images/Icons/EventsNoEventIcon'
import {useEventsStyle} from '../../../../assets/styleJs/events/events'

const EmptyEvents = () => {
  const classes = useEventsStyle()
  return (
    <Box className={classes.eventContent}>
      <Box>
        <EventsNoEventIcon />
      </Box>
      <Box className={classes.eventEmptyText}>
        <Typography className={classes.text1}>
          No dashboard information is available yet.
        </Typography>
        <Typography className={classes.text2}>
          To see dashboard information you need to set up evaluation event first.
        </Typography>
        <Link className="text__decoration_none" to={'/'}>
          <Button variant="contained">CREATE EVENT</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default EmptyEvents
