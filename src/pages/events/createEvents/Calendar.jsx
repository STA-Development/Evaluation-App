import * as React from 'react'
import {useState} from 'react'
import {DateRangePicker} from 'react-date-range'
import {addDays} from 'date-fns'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file

const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection',
    },
  ])

  console.log(state)
  return (
    <div>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="vertical"
        showMonthArrow={false}
        dateDisplayFormat={'QQQ'}
      />
    </div>
  )
}

export default Calendar
