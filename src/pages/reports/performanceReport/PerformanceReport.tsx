import React from 'react'
import {
  Box,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import CalendarIcon from '../../../assets/images/Icons/CalendarIcon'

const PerformanceReport = () => {
  return (
    <Box>
      <Box>
        <FormGroup>
          <FormControl variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount">
              Search by Event title and/or date
            </InputLabel>
            <OutlinedInput
              type="text"
              // value={values.password}
              // onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <CalendarIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Search by Event title and/or date"
            />
          </FormControl>
        </FormGroup>
      </Box>
    </Box>
  )
}

export default PerformanceReport
