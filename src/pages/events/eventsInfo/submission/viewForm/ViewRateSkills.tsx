import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import {Box} from '@mui/material'

const ViewRateSkills = () => {
  const [rate, setRate] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setRate(value)
  }
  console.log(rate)
  return (
    <Box>
      <Box></Box>
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
