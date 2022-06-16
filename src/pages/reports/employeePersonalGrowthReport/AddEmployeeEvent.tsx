import React, {useState} from 'react'
import {Box, Button, FormControl, Paper, TextField, Typography} from '@mui/material'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {IEmployeeReport} from '../../../types/EmpoyeeReport'

const AddEmployeeEvent = ({getReport}: {getReport: (value: IEmployeeReport) => void}) => {
  const classesCreateEvent = useCreateEventStyles()
  const [employee, setEmployee] = useState<string>('')
  const [event, setEvent] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [employeeError, setEmployeeError] = useState<boolean>(false)
  const [eventError, setEventError] = useState<boolean>(false)
  const [employeeReport, setEmployeeReport] = useState<any>({})

  const getApplyEmployee = () => {
    setEmployeeError(false)
    setEventError(false)
    if (employee && event) {
      setEmployeeError(false)
      setEventError(false)
      setEmployeeReport({
        employeeName: employee,
        employeePosition: position,
        eventName: event,
        evenDate: date,
      })
    } else if (!employee) {
      setEmployeeError(true)
    } else if (!event) {
      setEventError(true)
    }
  }

  return (
    <Box className="employee-report personal-btn">
      <Paper className="employee-paper">
        <Box className="employee-paper__header">
          <Typography>Employee *</Typography>
        </Box>
        <FormControl className="employee-paper__form">
          <TextField
            InputLabelProps={{style: {fontSize: 14}}}
            InputProps={{inputProps: {className: classesCreateEvent.inputText}}}
            label="Name / Surname"
            variant="outlined"
            type="input"
            error={employeeError}
            autoComplete="off"
            fullWidth
            size="small"
            name={employee}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmployee(e.target.value)
            }}
          />

          <TextField
            InputLabelProps={{style: {fontSize: 14}}}
            InputProps={{inputProps: {className: classesCreateEvent.inputText}}}
            label="Position"
            variant="outlined"
            type="input"
            autoComplete="off"
            fullWidth
            size="small"
            name={position}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPosition(e.target.value)
            }}
          />
        </FormControl>
      </Paper>

      <Paper className="employee-paper">
        <Box className="employee-paper__header">
          <Typography>Event</Typography>
        </Box>
        <FormControl className="employee-paper__form">
          <TextField
            InputLabelProps={{style: {fontSize: 14}}}
            InputProps={{inputProps: {className: classesCreateEvent.inputText}}}
            label="Event"
            variant="outlined"
            type="input"
            error={eventError}
            autoComplete="off"
            fullWidth
            size="small"
            name={event}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEvent(e.target.value)
            }}
          />

          <TextField
            InputLabelProps={{style: {fontSize: 14}}}
            InputProps={{inputProps: {className: classesCreateEvent.inputText}}}
            label="Event Date"
            variant="outlined"
            type="input"
            autoComplete="off"
            fullWidth
            size="small"
            name={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDate(e.target.value)
            }}
          />
        </FormControl>
      </Paper>
      <Box className="employee-btn personal-btn">
        <Button
          variant="contained"
          onClick={() => {
            getApplyEmployee()
            getReport(employeeReport)
          }}
        >
          APPLY
        </Button>
      </Box>
    </Box>
  )
}
export default AddEmployeeEvent
