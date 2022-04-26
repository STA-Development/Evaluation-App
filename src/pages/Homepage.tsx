import React from 'react'
import {Outlet} from 'react-router-dom'
import {Box, Grid} from '@mui/material'
import Sidebar from './sidebar/Sidebar'

const Homepage = () => (
  <Grid container>
    <Sidebar />
    <Box className="outlet">
      <Outlet />
    </Box>
  </Grid>
)

export default Homepage
