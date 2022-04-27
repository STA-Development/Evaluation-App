import React from 'react'
import {Box, Checkbox, FormControlLabel, FormGroup, Typography} from '@mui/material'
import useViewForm from '../../../../../assets/styleJs/viewForm/viewForm'
import UnCheckedIcon from '../../../../../assets/images/Icons/UnCheckedIcon'
import CheckedIcon from '../../../../../assets/images/Icons/CheckedIcon'

const ViewRateSkills = () => {
  const classes = useViewForm()
  // const [rate, setRate] = React.useState(1)
  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setRate(value)
  // }

  return (
    <Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox defaultChecked icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />
          }
          label="Include all subcriteria scores"
          labelPlacement="start"
        />
      </Box>
      <Typography variant="h6">Personal Skills</Typography>
      <Box>
        <Typography>You can choose which score include in the report</Typography>
        <Box>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox defaultChecked icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />
              }
              label="Include in the report"
              className={classes.checkboxEmpty}
            />
            <FormControlLabel
              control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />}
              label="Exclude from the report"
            />
          </FormGroup>
        </Box>
      </Box>
      {/*<Stack spacing={2}>*/}
      {/*  <Pagination*/}
      {/*    count={10}*/}
      {/*    boundaryCount={10}*/}
      {/*    //onChange={handleChange}*/}
      {/*    hideNextButton*/}
      {/*    hidePrevButton*/}
      {/*  />*/}
      {/*  <Pagination count={10} color="primary" />*/}
      {/*  <Pagination count={10} color="secondary" />*/}
      {/*  <Pagination count={10} shape="rounded" />*/}
      {/*</Stack>*/}
    </Box>
  )
}

export default ViewRateSkills
