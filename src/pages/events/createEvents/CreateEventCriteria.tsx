import React from 'react'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {Box} from '@mui/material'
import CriteriasPapers from './CriteriasPaper'

const CreateEventCriteria = () => {
  const classes = useCreateEventStyles()

  return (
    <Box>
      <Box className={classes.infoRootBoxCriteria}>
        <CriteriasPapers />
      </Box>
    </Box>
  )
}
export default CreateEventCriteria
