import React, {useState} from 'react'
import {Box, Button, FormControl, IconButton, Paper, TextField, Typography} from '@mui/material'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import {v4 as uuidv4} from 'uuid'
import DeleteIcon from '../../../assets/images/Icons/DeleteIcon'
import useReportsStyle from '../../../assets/styleJs/report/report'
import {randomColor, randomData} from '../../../utils/utils'
import {IEmployee} from '../../../types/eployeeTypes'

const AddEmployee = ({getApply}: {getApply: (value: IEmployee[]) => void}) => {
  const classesCreateEvent = useCreateEventStyles()
  const classes = useReportsStyle()
  const [nameError, setNameError] = useState<boolean>(false)
  const [employeeCount, setEmployeeCount] = useState<number>(2)
  const [employee, setEmployee] = useState<IEmployee[]>([
    {
      id: uuidv4(),
      name: '',
      position: '',
      employee: `Employee 1`,
      bgColor: randomColor(),
      performanceData: randomData(),
      skillsData: randomData(),
      cultureData: randomData(),
    },
  ])

  const handleAddEmployee = () => {
    setEmployeeCount(employeeCount + 1)
    setEmployee([
      ...employee,
      {
        id: uuidv4(),
        name: '',
        position: '',
        employee: `Employee ${employeeCount}`,
        bgColor: randomColor(),
        performanceData: randomData(),
        skillsData: randomData(),
        cultureData: randomData(),
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
    if (employee.length > 1) {
      setEmployee(
        employee.filter((list, index: number) => {
          if (employee.indexOf(item) !== index) {
            return item
          }
        }),
      )
    }
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
                error={nameError}
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

        <Button
          variant="contained"
          onClick={() => {
            employee.map((item) => {
              if (item.name) {
                setNameError(false)
                getApply(employee)
              } else {
                setNameError(true)
              }
            })
          }}
        >
          APPLY
        </Button>
      </Box>
    </Box>
  )
}

export default AddEmployee
