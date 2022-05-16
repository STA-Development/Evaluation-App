import React from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import CreateEventHeader from './CreateEventHeader'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {DatePicker} from '@mui/lab'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'

const AssignDates = () => {
  const classes = useCreateEventStyles()
  const [value, setValue] = React.useState<Date | null>(null)

  return (
    <Box className={classes.rootCreateEvent}>
      <CreateEventHeader />
      <Typography className={classes.criteriaHeaderText}>Assign Dates</Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Box>
        <FormControl style={{display: 'flex', flexDirection: 'column'}}>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="quarterly"
            name="radio-buttons-group"
            style={{
              display: 'flex',
              width: '37%',
              flexDirection: 'row',
              marginLeft: '30px',
            }}
          >
            <FormControlLabel value="never" control={<Radio />} label="Never" />
            <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
            <FormControlLabel value="quarterly" control={<Radio />} label="Quarterly" />
            <FormControlLabel value="everySixMonths" control={<Radio />} label="Every 6 Months" />
            <FormControlLabel value="annually" control={<Radio />} label="Annually" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default AssignDates
