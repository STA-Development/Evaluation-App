import React, {useState} from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Popover,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import CreateEventHeader from './CreateEventHeader'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import CalendarIcon from '../../../assets/images/Icons/CalendarIcon'
import {DateRangePicker} from 'react-date-range'
import {addDays} from 'date-fns'
import moment from 'moment'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css'

const AssignDates = () => {
  const classes = useCreateEventStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [selectedDay, setSelectedDay] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection',
    },
  ])

  const startDay = new Date(moment(selectedDay[0].startDate).format('MM/DD/yyyy'))
  const endDay = new Date(moment(selectedDay[0].endDate).format('MM/DD/yyyy'))
  const oneDay = 1000 * 60 * 60 * 24
  const diffInTime = endDay.getTime() - startDay.getTime()
  const diffInDays = Math.round(diffInTime / oneDay) + 1

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box className={classes.rootCreateEvent}>
      <CreateEventHeader />
      <Typography className={classes.criteriaHeaderText}>Assign Dates</Typography>
      <Box className={classes.dataPicker}>
        <Typography
          onClick={handleClick}
          className={classes.selectDate}
          placeholder={'Select Start / End Date'}
        >
          {moment(startDay).format('MM/DD/yyyy')} / {moment(endDay).format('MM/DD/yyyy')}
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            style={{textAlign: 'right'}}
          >
            <CalendarIcon />
          </IconButton>
        </Typography>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box className="date-picker">
            <DateRangePicker
              onChange={(item) => {
                setSelectedDay([item.selection])
              }}
              // showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={selectedDay}
              direction="vertical"
            />

            <Box className="data-picker__days-and-buttons">
              <Box style={{display: 'flex', justifyContent: 'center', width: '220px'}}>
                <Typography component={'span'} className={classes.calendarDays}>
                  {diffInDays} days
                </Typography>
              </Box>
              <Box style={{width: '330px', display: 'flex', justifyContent: 'space-evenly'}}>
                <Button variant={'outlined'}>Clear dates</Button>
                <Button variant={'outlined'}>Apply</Button>
              </Box>
            </Box>
          </Box>
        </Popover>
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
