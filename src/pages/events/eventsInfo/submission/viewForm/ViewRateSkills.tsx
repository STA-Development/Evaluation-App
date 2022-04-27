import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import {Box, Checkbox, FormControlLabel, FormGroup, Typography} from '@mui/material'

const ViewRateSkills = () => {
  const [rate, setRate] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setRate(value)
  }
  console.log(rate)
  return (
    <Box>
      <Box>
        <FormControlLabel
          control={<Checkbox defaultChecked style={{color: 'red', backgroundColor: 'green'}} />}
          label="Include all subcriteria scores"
          labelPlacement="start"
        />
      </Box>
      <Typography variant="h6">Personal Skills</Typography>
      <Box>
        <Typography>You can choose which score include in the report</Typography>
        <Box>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Include in the report" />
            <FormControlLabel control={<Checkbox />} label="Exclude from the report" />
          </FormGroup>
        </Box>
      </Box>
      <Stack spacing={2}>
        <Pagination
          count={10}
          boundaryCount={10}
          onChange={handleChange}
          hideNextButton
          hidePrevButton
        />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} shape="rounded" />
      </Stack>
    </Box>
  )
}

export default ViewRateSkills
