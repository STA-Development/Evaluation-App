import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
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

      <Box className={classes.dataPicker}>
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
      </Box>

      <Box>
        <FormControl>
          <Box className={classes.formBox}>
            <label style={{paddingTop: '8px'}}>REPEAT:</label>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="quarterly"
              name="radio-buttons-group"
              className={classes.radioGroup}
            >
              <FormControlLabel value="never" control={<Radio />} label="Never" />
              <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
              <FormControlLabel value="quarterly" control={<Radio />} label="Quarterly" />
              <FormControlLabel value="everySixMonths" control={<Radio />} label="Every 6 Months" />
              <FormControlLabel value="annually" control={<Radio />} label="Annually" />
            </RadioGroup>
          </Box>
          <Box className={classes.assignBtnGroup}>
            <Button variant="outlined" color="primary" className={classes.assignButton}>
              Back
            </Button>
            <Button variant="contained" color="primary" className={classes.assignButton}>
              Publish
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  )
}

export default AssignDates
