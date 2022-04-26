import React from 'react'
import {Box, Typography} from '@mui/material'
import {useEventsStyle} from '../../../../assets/styleJs/events/events'
import EventsEmptySavedSubmissionsIcon from '../../../../assets/images/Icons/EventsEmptySavedSubmissionsIcon'

const EmptySavedSubmission = () => {
  const classes = useEventsStyle()
  return (
    <Box className={classes.eventContent}>
      <Box>
        <EventsEmptySavedSubmissionsIcon />
      </Box>
      <Box className={classes.eventEmptyText}>
        <Typography className={classes.text1}>You have not saved any submission yet.</Typography>
        <Typography className={classes.text2}>
          When you review the submitted form you can save it here.
        </Typography>
      </Box>
    </Box>
  )
}

export default EmptySavedSubmission
