import React, {useState} from 'react'
import {Box} from '@mui/material'
import AddEmployeeEvent from './AddEmployeeEvent'
import {IEmployeeReport} from '../../../types/EmpoyeeReport'

const EmployeePersonalGrowthReport = () => {
  const [employeeReport, setEmployeeReport] = useState<IEmployeeReport>()
  console.log(employeeReport)
  return (
    <Box>
      <AddEmployeeEvent
        getReport={(item: IEmployeeReport) => {
          setEmployeeReport(item)
        }}
      />
    </Box>
  )
}
export default EmployeePersonalGrowthReport
