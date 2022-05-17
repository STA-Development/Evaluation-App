import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import CreateEventHeader from './CreateEventHeader'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import Calendar from './Calendar'

const AssignDates = () => {
  const classes = useCreateEventStyles()

  return (
    <Box className={classes.rootCreateEvent}>
      <CreateEventHeader />
      <Typography className={classes.criteriaHeaderText}>Assign Dates</Typography>

      <Box className={classes.dataPicker}>
        <Calendar />
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
