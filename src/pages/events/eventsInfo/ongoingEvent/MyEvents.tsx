import React from 'react'
import {Box, Typography} from '@mui/material'
import {useGlobalTheme} from '../../../../assets/style/globalVariables'
import TableContent from './eventTable/TableContent'

const MyEvents = () => {
  const globalClasses = useGlobalTheme()
  return (
    <Box>
      <Typography variant="h4" component="h4" className={globalClasses.contentHeader}>
        My Events
      </Typography>
      <Box>
        <TableContent />
      </Box>
    </Box>
  )
}

export default MyEvents
