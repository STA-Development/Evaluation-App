import React, {useState} from 'react'
import {ITabPanelProps} from '../../types/eventsTypes'
import {useGlobalTheme} from '../../assets/style/globalVariables'
import {Box} from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import {Link, useLocation} from 'react-router-dom'
import PerformanceReport from './performanceReport/PerformanceReport'
import ComparativeReport from './comparativeReport/ComparativeReport'
import EmployeePersonalGrowthReport from './employeePersonalGrowthReport/EmployeePersonalGrowthReport'

const TabPanel = (props: ITabPanelProps) => {
  const {children, pageList, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={pageList !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </div>
  )
}

const tabProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
})

const Reports = () => {
  const globalClasses = useGlobalTheme()
  const location = useLocation()
  const [value, setValue] = useState<number>(location.state ? 1 : 0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className="events">
      <Box className="events__sidebar">
        <Tabs
          aria-label="basic tabs"
          className={globalClasses.eventTabsBox}
          value={value}
          onChange={handleChange}
        >
          <Tab
            label="Performance Report"
            {...tabProps(0)}
            className={globalClasses.eventTabs}
            component={Link}
            to="performance-report"
          />
          <Tab
            label="Comparative Report"
            {...tabProps(1)}
            className={globalClasses.eventTabs}
            component={Link}
            to="comparative-report"
          />
          <Tab
            label="Employee Personal Growth Report"
            {...tabProps(3)}
            className={globalClasses.eventTabs}
            component={Link}
            to="employee-personal-growth-Report"
          />
        </Tabs>
      </Box>
      <Box className="events__info">
        <TabPanel pageList={value} index={0}>
          <PerformanceReport />
        </TabPanel>
        <TabPanel pageList={value} index={1}>
          <ComparativeReport />
        </TabPanel>
        <TabPanel pageList={value} index={2}>
          <EmployeePersonalGrowthReport />
        </TabPanel>
      </Box>
    </Box>
  )
}

export default Reports
