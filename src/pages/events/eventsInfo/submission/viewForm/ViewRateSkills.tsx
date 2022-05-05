import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import UnCheckedIcon from '../../../../../assets/images/Icons/UnCheckedIcon'
import CheckedIcon from '../../../../../assets/images/Icons/CheckedIcon'
import useViewForm from '../../../../../assets/styleJs/viewForm/viewForm'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Pagination,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import ModalSubmission from './ModalSubmission'

const ViewRateSkills = () => {
  const classes = useViewForm()
  const [savedSubmissions, setSavedSubmissions] = useState<boolean>(false)
  const handleClose = () => setSavedSubmissions(false)

  const handleSaveSubmission = () => {
    setSavedSubmissions(true)
  }

  const skillsCategories = [
    {
      id: uuidv4(),
      name: 'Career growth',
    },
    {
      id: uuidv4(),
      name: 'Punctuality',
    },
    {
      id: uuidv4(),
      name: 'Acuracy',
    },
    {
      id: uuidv4(),
      name: 'Career growth',
    },
  ]

  return (
    <>
      <Paper className="paper">
        <Box className="paper__subcriteria">
          <FormControlLabel
            control={
              <Checkbox defaultChecked icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />
            }
            label="Include all subcriteria scores"
            labelPlacement="start"
            className="paper__label"
          />
        </Box>
        <Typography variant="h6" className={classes.checkSkills}>
          Personal Skills
        </Typography>
        <Box className="paper__skills-label-box">
          <Typography className={classes.paperReportLabel}>
            You can choose which score include in the report
          </Typography>

          <FormGroup className={classes.formGroupLabel}>
            <FormControlLabel
              control={
                <Checkbox defaultChecked icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />
              }
              label="Include in the report"
              className="paper__label"
            />
            <FormControlLabel
              control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />}
              label="Exclude from the report"
              className="paper__label"
            />
          </FormGroup>
        </Box>
        <Divider className={classes.skillsDivider} />
        <Box className="stack-box">
          <Stack spacing={2}>
            {skillsCategories.map((skills) => (
              <Box key={skills.id}>
                <FormControlLabel
                  control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />}
                  label={skills.name}
                  labelPlacement="end"
                  className={`${classes.checkSkills} ${classes.labelLeft}`}
                />
                <Pagination
                  count={10}
                  boundaryCount={10}
                  hideNextButton
                  hidePrevButton
                  color="primary"
                  className={classes.pagination}
                />
                <Box className="stack-box__status">
                  <Typography variant="caption">Not at all</Typography>
                  <Typography variant="caption">Excellent</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box className="paper__buttons">
          <Button variant="outlined" color="primary" className={classes.paperButton}>
            Back
          </Button>
          <Button variant="outlined" color="primary" className={classes.paperButton}>
            Next
          </Button>
          <Button variant="contained" color="primary" onClick={handleSaveSubmission}>
            Add to saved submissions
          </Button>
        </Box>
      </Paper>
      {savedSubmissions && <ModalSubmission open={savedSubmissions} handleClose={handleClose} />}
    </>
  )
}

export default ViewRateSkills
