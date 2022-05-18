import * as React from 'react'
import {DateRange} from '@mui/x-date-pickers-pro/DateRangePicker'
import 'react-date-range/dist/styles.css' // main css file
import {addDays} from 'date-fns'

import 'react-date-range/dist/theme/default.css' // theme css file
import {DateRangePicker} from 'react-date-range'
import {useState} from 'react'

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])
  return (
    <DateRangePicker
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
    />
  )
}
