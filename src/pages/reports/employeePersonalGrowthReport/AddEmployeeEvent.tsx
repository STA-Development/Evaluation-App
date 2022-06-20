import React, {useEffect, useState} from 'react'
import {IEmployeeReport} from '../../../types/EmpoyeeReport'
import {Box, Button, FormControl, List, Paper, TextField, Typography} from '@mui/material'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'

const AddEmployeeEvent = ({
  getReport,
}: {
  getReport: (value: IEmployeeReport | undefined) => void
}) => {
  const classesCreateEvent = useCreateEventStyles()
  const [employee, setEmployee] = useState<string>('')
  const [event, setEvent] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [employeeReport, setEmployeeReport] = useState<IEmployeeReport | undefined>()
  const [animated, setAnimated] = useState<boolean>(false)

  const getApplyEmployee = () => {
    if (employee && event) {
      setEmployeeReport({
        employeeName: employee,
        employeePosition: position,
        eventName: event,
        evenDate: date,
      })
      setError(false)
      setAnimated(false)
    } else {
      setError(true)
      setAnimated(true)
    }
  }

  useEffect(() => {
    getReport(employeeReport)
  }, [employeeReport])

  return (
    <Box className="add-employee-report">
      <Box className={animated ? 'error-message' : ' error-message-out'}>
        {error ? <List>Please enter value</List> : ''}
      </Box>
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
            }}
          >
            APPLY
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default AddEmployeeEvent
