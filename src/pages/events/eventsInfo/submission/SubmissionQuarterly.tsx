import React from 'react'
import {NavLink} from 'react-router-dom'
import {ISubmissionDataTypes} from '../../../../types/submissionsType'
import useSubmissionsStyle from '../../../../assets/styleJs/submissions/submissions'
import {Box, Button, Divider, Typography} from '@mui/material'

const SubmissionQuarterly = ({
  color,
  status,
  employeesName,
  employeesPosition,
  employerName,
  employerPosition,
  savedSubmission,
  date,
}: ISubmissionDataTypes) => {
  const classes = useSubmissionsStyle()

  return (
    <Box className={`submission__quarterly border__color_${color}`}>
      <Box className="submission__quarterly_categories">
        <Typography
          variant="h6"
          component="h6"
          className={`${classes.statusName} status__color_${color}`}
        >
          {status}
        </Typography>
        <Typography>Submitted on : {date}</Typography>
      </Box>

      <Typography className={classes.header} variant="h4" component="h4">
        Quarterly Development Team Evoluation
      </Typography>
      <Divider className={classes.divider} />

      <Box className="submission__quarterly_evaluators">
        <Box>
          <Typography className={classes.evaluatorName} variant="h5" component="h5">
            {employeesName}
          </Typography>
          <Typography className={classes.evaluatorPosition}>{employeesPosition}</Typography>

          <Typography className={classes.submitedReview}>submitted review for</Typography>

          <Typography className={classes.evaluatorName} variant="h5" component="h5">
            {employerName}
          </Typography>
          <Typography className={classes.evaluatorPosition}>{employerPosition}</Typography>
          <Typography className={classes.savedSubmission}>
            {savedSubmission && 'Saved Submission'}
          </Typography>
        </Box>
        <Box className={savedSubmission ? classes.viewFormBox : classes.viewButtonDown}>
          <NavLink to="submissions/view-form" className="text-decoration-none">
            <Button variant="text" className={classes.viewFormButton}>
              View form
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  )
}

export default SubmissionQuarterly
