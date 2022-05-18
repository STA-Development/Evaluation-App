import React, {useState} from 'react'
import {DateRange, DateRangePicker, LocalizationProvider} from '@mui/lab'
import {Box, TextField} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const Calendar = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null])
  console.log('value', value)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box width="500px">
        <DateRangePicker
          startText="Check-in"
          endText="Check-out"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue)
          }}
          renderInput={(startProps: any, endProps: any) => (
            <>
              <TextField {...startProps} />
              <Box sx={{mx: 2}}> to </Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box>
    </LocalizationProvider>
  )

  // <div>
  //   <LocalizationProvider dateAdapter={AdapterDateFns}>
  //     <Grid container spacing={3}>
  //       <Grid item xs={12} md={6}>
  //         <Box width="500px">
  //           <DateRangePicker
  //             startText="Check-in"
  //             endText="Check-out"
  //             value={value}
  //             onChange={(newValue: any) => {
  //               setValue(newValue)
  //             }}
  //             renderInput={(startProps: any, endProps: any) => (
  //               <>
  //                 <TextField {...startProps} />
  //                 <Box sx={{mx: 2}}> to </Box>
  //                 <TextField {...endProps} />
  //               </>
  //             )}
  //           />
  //         </Box>
  //       </Grid>
  //       <Grid item xs={12} md={6}></Grid>
  //
  //       <Grid item xs={12} md={6}></Grid>
  //     </Grid>
  //   </LocalizationProvider>
  // </div>
  //)
}

export default Calendar
