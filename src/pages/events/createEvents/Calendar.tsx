import React, {useState} from 'react'
import {DatePicker, LocalizationProvider} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {Stack, TextField} from '@mui/material'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={4} sx={{width: '250px'}}>
          <DatePicker
            label={'Date Picker'}
            renderInput={(params) => <TextField {...params} />}
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue)
            }}
          />
        </Stack>
      </LocalizationProvider>

      {/*<Box style={{width: '500px'}}>*/}
      {/*  <DateRangePicker*/}
      {/*    startText={'Check-in'}*/}
      {/*    endText={'Check-out'}*/}
      {/*    value={value}*/}
      {/*    onChange={(newValue: any) => {*/}
      {/*      setValue(newValue)*/}
      {/*    }}*/}
      {/*    renderInput={(startProps: any, endProps: any) => (*/}
      {/*      <>*/}
      {/*        <TextField {...startProps} />*/}
      {/*        <Box sx={{mx: 2}}>to</Box>*/}
      {/*        <TextField {...endProps} />*/}
      {/*      </>*/}
      {/*    )}*/}
      {/*  />*/}
      {/*</Box>*/}

      {/*<Box>*/}
      {/*  <div>*/}
      {/*    <div>*/}
      {/*      <div>Start Date</div>*/}
      {/*      <div>End Date</div>*/}
      {/*    </div>*/}
      {/*    <div>chose date 2022</div>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <div>*/}
      {/*      <Button>Hunvar</Button>*/}
      {/*      <Button>Petrvar</Button>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <TextField*/}
      {/*        name="someDate"*/}
      {/*        label="Some Date"*/}
      {/*        InputLabelProps={{shrink: true, required: false}}*/}
      {/*        type="datetime-local"*/}
      {/*        defaultValue={values.someDate}*/}
      {/*        autoFocus*/}
      {/*      />*/}
      {/*      <TextField*/}
      {/*        name="someDate"*/}
      {/*        label="Some Date"*/}
      {/*        InputLabelProps={{shrink: true, required: true}}*/}
      {/*        type="date"*/}
      {/*        defaultValue={values.someDate}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Box>*/}
    </div>
  )
}

export default Calendar
