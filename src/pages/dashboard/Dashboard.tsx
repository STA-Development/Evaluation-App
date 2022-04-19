import React, {useState} from 'react'
import {Box, Typography} from '@mui/material'
import {useGlobalTheme} from '../../assets/style/globalVariables'
import useDashboardStyles from '../../assets/styleJs/dashboard/dashboard'
import EmptyDashboard from './EmptyDashboard'
import FullDashboard from './FullDashboard'

const Dashboard = () => {
  const classes = useDashboardStyles()
  const globalClasses = useGlobalTheme()
  const [hasInfo] = useState<boolean>(false)

  return (
    <Box>
      <Typography className={globalClasses.titleHeader}>Dashboard</Typography>
      {hasInfo ? (
        <Box className={classes.emptyDashboard}>
          <EmptyDashboard />
        </Box>
      ) : (
        <FullDashboard />
      )}
    </Box>
  )
}

export default Dashboard
