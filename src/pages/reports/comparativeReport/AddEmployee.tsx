import React, {useEffect, useState} from 'react'
import {Box, Button, FormControl, IconButton, Paper, TextField, Typography} from '@mui/material'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {v4 as uuidv4} from 'uuid'
import DeleteIcon from '../../../assets/images/Icons/DeleteIcon'
import useReportsStyle from '../../../assets/styleJs/report/report'
import {randomColor} from '../../../utils/utils'
import {IEmployee} from '../../../types/eployeeTypes'

const AddEmployee = ({setColor}: any) => {
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

  useEffect(() => {
    setColor(
      employee.map((item) => {
        return item.bgColor
      }),
    )
  }, [])

  const handleAddEmployee = () => {
    const employeeNumber = employee.length + 1
    setEmployee([
      ...employee,
      {
        id: uuidv4(),
        name: '',
        position: '',
        employee: 'Employee ' + employeeNumber,
        bgColor: randomColor(),
      },
    ])
  }
  const onChangeEmployeeData = (id: string, value: string, changingValue: string) => {
    setEmployee(
      employee.map((item: IEmployee) => {
        if (item.id === id) {
          return {...item, [changingValue]: value}
        }
        return item
      }),
    )
  }
  const handleRemoveEmployee = (item: IEmployee) => {
    setEmployee(
      employee.filter((list, index: number) => {
        if (employee.indexOf(item) !== index) {
          return item
        }
      }),
    )
  }

  return (
    <Box>
      <Box className="employee-report">
        {employee.map((item: IEmployee) => (
          <Paper key={item.id} className="employee-paper">
            <Box className="employee-paper__header">
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
                name={item.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeEmployeeData(item.id, e.target.value, 'name')
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
                  onChangeEmployeeData(item.id, e.target.value, 'position')
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
