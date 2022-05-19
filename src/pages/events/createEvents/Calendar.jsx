import * as React from 'react'
import {useState} from 'react'
import {DateRangePicker} from 'react-date-range'
import {addDays} from 'date-fns'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css'
import {Box, Button, Typography} from '@mui/material'
import moment from 'moment' // theme css file

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState([
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

  return (
    <Box className="date-picker">
      <DateRangePicker
        onChange={(item) => {
          setSelectedDay([item.selection])
        }}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={selectedDay}
        direction="vertical"
        dateDisplayFormat={'MMMM dd'}
      />

      <Box style={{display: 'flex', justifyContent: 'space-evenly', background: '#fff'}}>
        <Box style={{display: 'flex', justifyContent: 'start'}}>
          <Typography component={'span'}>{diffInDays} days</Typography>
        </Box>
        <Box>
          <Button variant={'outlined'}>Clear dates</Button>
          <Button variant={'outlined'}>Apply</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar
