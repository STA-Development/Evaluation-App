import React from 'react'
import {Box, Typography} from '@mui/material'
import HorizontalLabelPositionBelowStepper from '../createEventsPageComponenets/CreateEventsStepper'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'

const CreateEventHeader = () => {
  const classes = useCreateEventStyles()

  return (
    <Box>
      <Box className={classes.headerTitle}>
        <Typography className={classes.headerRegular}>Events /</Typography>
        <Typography className={classes.headerTitleBold}>Create Event</Typography>
      </Box>
      <Box className={classes.createEventStepper}>
        <HorizontalLabelPositionBelowStepper />
      </Box>
    </Box>
  )
}

export default CreateEventHeader
