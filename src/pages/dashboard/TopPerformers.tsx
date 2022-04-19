import React from 'react'
import {Box, Typography} from '@mui/material'
import useDashboardStyles from '../../assets/styleJs/dashboard/dashboard'
import SliderPerformers from './SliderPerformers'

const TopPerformers = () => {
  const classes = useDashboardStyles()
  return (
    <Box>
      <Typography variant="h4" component="h4" className={classes.dashboardHeader}>
        Top Performers
      </Typography>

      <SliderPerformers />
    </Box>
  )
}

export default TopPerformers
