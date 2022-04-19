import React, {useState} from 'react'
import {Box, Typography} from '@mui/material'
import EmptyDashboard from './EmptyDashboard'
import FullDashboard from './FullDashboard'
import useDashboardStyles from '../../assets/styleJs/dashboard/dashboard'
import {useGlobalTheme} from '../../assets/style/globalVariables'

const Dashboard = () => {
  const classes = useDashboardStyles()
  const globalClasses = useGlobalTheme()
  const [hasInfo] = useState<boolean>(false)

  return (
    <Box className={classes.dashboardPage}>
      <Typography className={globalClasses.titleHeader}>Dashboard</Typography>
      {hasInfo ? (
        <Box>
          <EmptyDashboard />
        </Box>
      ) : (
        <Box>
          <FullDashboard />
        </Box>
      )}
    </Box>
  )
}

export default Dashboard
