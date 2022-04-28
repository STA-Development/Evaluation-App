import React from 'react'
import {Box} from '@mui/material'
import SelectBox from './SelectBox'
import OverviewDashboard from './DashboardEventActivity/OverviewDashboard'
import TopPerformers from './TopPerformers'

const FullDashboard = () => (
  <Box>
    <SelectBox />
    <OverviewDashboard />
    <TopPerformers />
  </Box>
)

export default FullDashboard
