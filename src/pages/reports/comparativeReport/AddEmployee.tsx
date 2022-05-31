import React, {useState} from 'react'
import {Box, Button, FormControl, IconButton, Paper, TextField, Typography} from '@mui/material'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {v4 as uuidv4} from 'uuid'
import DeleteIcon from '../../../assets/images/Icons/DeleteIcon'
import useReportsStyle from '../../../assets/styleJs/report/report'
import {randomColor} from '../../../utils/utils'
import {IEmployee} from '../../../types/eployeeTypes'

const AddEmployee = () => {
  const classesCreateEvent = useCreateEventStyles()
  const classes = useReportsStyle()
  const [employee, setEmployee] = useState<IEmployee[]>([
    {
      id: uuidv4(),
      name: '',
      position: '',
      employee: 'Employee 1',
      bgColor: randomColor(),
    },
    {
      id: uuidv4(),
      name: '',
      position: '',
      employee: 'Employee 2',
      bgColor: randomColor(),
    },
  ])

  const handleAddEmployee = () => {
    const tempArr = []
    for (let i = 0; i < employee.length; i++) {
      const employeeNumber = employee.length + 1
      tempArr[0] = {
        id: uuidv4(),
        name: '',
        position: '',
        employee: 'Employee ' + employeeNumber,
        bgColor: randomColor(),
      }
    }

    setEmployee([...employee, ...tempArr])
  }
  const onChangeEmployeeData = (id: string, value: string, changingValue: string) => {
    const newArray = employee.map((item: IEmployee) => {
      if (item.id === id) {
        return {...item, [changingValue]: value}
      }
      return item
    })
    setEmployee(newArray)
  }
  const handleRemoveEmployee = (item: IEmployee) => {
    console.log(item)
    const newList = [...employee]
    const index = employee.indexOf(item)
    if (index > -1) {
      newList.splice(index, 1)
    }
    setEmployee(newList)
  }

  return (
    <Box>
      <Box className="employee-report">
        {employee.map((item: IEmployee) => (
          <Paper key={item.id} className="employ-paper">
            <Box className="employ-paper__employee-header">
              <Typography>
                {item.employee}
                <Typography
                  component="span"
                  className={classes.roundColor}
                  style={{backgroundColor: `${item.bgColor}`}}
                />
              </Typography>
              <IconButton onClick={() => handleRemoveEmployee(item)}>
                <DeleteIcon />
              </IconButton>
            </Box>
            <FormControl className="employ-paper__form">
              <TextField
                InputLabelProps={{style: {fontSize: 14}}}
                InputProps={{inputProps: {className: classesCreateEvent.inputText}}}
                label="Name / Surname"
                variant="outlined"
                type="input"
                autoComplete="off"
                fullWidth
                size="small"
                name={item.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeEmployeeData(item.id, e.target.value, e.target.name)
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
                name={item.position}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeEmployeeData(item.id, e.target.value, e.target.name)
                }}
              />
            </FormControl>
          </Paper>
        ))}
      </Box>
      <Box className="employee-btn">
        <Button variant="outlined" onClick={handleAddEmployee}>
          ADD EMPLOYEE
        </Button>
        <Button variant="contained">APPLY</Button>
      </Box>
    </Box>
  )
}

export default AddEmployee
