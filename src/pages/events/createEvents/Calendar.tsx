import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const [startYear, setStartYear] = useState(new Date())
  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  return (
    <div>
      <DatePicker
        placeholderText={'Select Start / End Date'}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
      />
      <DatePicker
        selected={startYear}
        onChange={(year: any) => setStartYear(year)}
        showYearPicker
        dateFormat="yyyy"
      />
    </div>
  )
}

export default Calendar
