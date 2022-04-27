import React from 'react'
import {Box, Typography} from '@mui/material'
import useEventsStyle from '../../../../assets/styleJs/events/events'
import EventEmptySubmission from '../../../../assets/images/Icons/EventEmptySubmission'

const EmptySubmission = () => {
  const classes = useEventsStyle()
  return (
    <Box className={classes.eventContent}>
      <Box>
        <EventEmptySubmission />
      </Box>
      <Box className={classes.eventEmptyText}>
        <Typography className={classes.text1}>
          No one submitted their evaluation form yet.
        </Typography>
        <Typography className={classes.text2}>
          As soon as evaluator submits the form , you will be able to review it here.
        </Typography>
      </Box>
    </Box>
  )
}

export default EmptySubmission
