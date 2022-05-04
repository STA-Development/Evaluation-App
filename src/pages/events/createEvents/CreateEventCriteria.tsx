import React from 'react'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {Box, Button, Typography} from '@mui/material'
import CriteriasPapers from './CriteriasPaper'

const CreateEventCriteria = () => {
  const classes = useCreateEventStyles()

  return (
    <Box>
      <Box className={classes.infoRootBoxCriteria}>
        <Box className={classes.criteriaHeaderBox}>
          <Typography className={classes.criteriaHeaderText}>Choose Evaluation Criteria</Typography>
          <Button
            className={classes.addButtonCriteria}
            type="submit"
            variant="contained"
            size="medium"
          >
            ADD
          </Button>
        </Box>
        <CriteriasPapers />
      </Box>
    </Box>
  )
}
export default CreateEventCriteria
