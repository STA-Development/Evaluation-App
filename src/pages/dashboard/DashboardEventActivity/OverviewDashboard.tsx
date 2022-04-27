import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import DashboardEventActive from './DashboardEventActive'
import DashboardNotEvaluated from './DashboardNotEvaluated'
import useDashboardStyles from '../../../assets/styleJs/dashboard/dashboard'

const OverviewDashboard = () => {
  const classes = useDashboardStyles()
  return (
    <Box>
      <Typography
        variant="h4"
        component="h4"
        className={classes.dashboardHeader}
      >
        Recent Evoluation Event Activity
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <DashboardEventActive />
        </Grid>
        <Grid item md={6} sm={12}>
          <DashboardNotEvaluated />
        </Grid>
      </Grid>
    </Box>
  )
}

export default OverviewDashboard
