import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import useDashboardStyles from '../../assets/styleJs/dashboard/dashboard'
import DashboardPageEmptyIcon from '../../assets/images/Icons/DashboardPageEmptyIcon'

const EmptyDashboard = () => {
  const classes = useDashboardStyles()
  return (
    <Box className={classes.dashboardContent}>
      <Box>
        <DashboardPageEmptyIcon />
      </Box>
      <Box className={classes.dashboardEmptyText}>
        <Typography className={classes.dashText1}>
          No dashboard information is available yet.
        </Typography>
        <Typography className={classes.dashText2}>
          To see dashboard information you need to set up evaluation event first.
        </Typography>
        <Link to={'/events-create'} className="text-decoration-none">
          <Button variant="contained">CREATE EVENT</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default EmptyDashboard
