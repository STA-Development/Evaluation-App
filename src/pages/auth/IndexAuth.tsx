import React from 'react'
import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'
import AuthBackgroundVector from '../../assets/images/auth/AuthBackgroundVector'

const IndexAuth = () => (
  <Box>
    <Outlet />
    <Box component="div" className="auth-right-bg">
      <AuthBackgroundVector />
    </Box>
  </Box>
)

export default IndexAuth
