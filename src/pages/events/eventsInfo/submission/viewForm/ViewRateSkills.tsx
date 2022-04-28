import React from 'react'
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Pagination,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import UnCheckedIcon from '../../../../../assets/images/Icons/UnCheckedIcon'
import CheckedIcon from '../../../../../assets/images/Icons/CheckedIcon'
import useViewForm from '../../../../../assets/styleJs/viewForm/viewForm'

const ViewRateSkills = () => {
  const classes = useViewForm()
  // const [rate, setRate] = React.useState(1)
  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setRate(value)
  // }

  return (
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
          <Box>
            <FormControlLabel
              control={
                <Checkbox defaultChecked icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />
              }
              label="Career growth"
              labelPlacement="end"
              className={`${classes.checkSkills} ${classes.labelLeft}`}
            />
            <Pagination
              count={10}
              boundaryCount={10}
              hideNextButton
              hidePrevButton
              className={classes.pagnition}
            />
            <Box className="stack-box__status">
              <Typography variant="caption">Not at all</Typography>
              <Typography variant="caption">Excellent</Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Paper>
  )
}

export default ViewRateSkills
