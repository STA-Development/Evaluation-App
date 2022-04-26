import React, {useState} from 'react'
import {Box} from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Events from './eventsInfo/ongoingEvent/Events'
import SavedSubmissions from './eventsInfo/savedSubmission/SavedSubmissions'
import Submissions from './eventsInfo/submission/Submissions'
import EmptyEvents from './eventsInfo/ongoingEvent/EmptyEvents'
import EmptySubmission from './eventsInfo/submission/EmptySubmission'
import EmptySavedSubmission from './eventsInfo/savedSubmission/EmptySavedSubmission'
import {useGlobalTheme} from '../../assets/style/globalVariables'

interface TabPanelProps {
  children?: React.ReactNode
  index?: number
  value?: number
}

const TabPanel = ({children, value, index, ...other}: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && <Box>{children}</Box>}
  </div>
)

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const RootEvents = () => {
  const globalClasses = useGlobalTheme()
  const [value, setValue] = useState<number>(0)
  const [hasEvents] = useState<boolean>(true)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className="events">
      <Box className="events__sidebar">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          className={globalClasses.eventTabsBox}
        >
          <Tab label="Events" {...a11yProps(0)} className={globalClasses.eventTabs} />
          <Tab label="Submissions" {...a11yProps(1)} className={globalClasses.eventTabs} />
          <Tab label="Saved Submissions" {...a11yProps(2)} className={globalClasses.eventTabs} />
        </Tabs>
      </Box>
      <Box className="events__info">
        <TabPanel value={value} index={0}>
          {hasEvents ? <Events /> : <EmptyEvents />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {hasEvents ? <Submissions /> : <EmptySubmission />}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {hasEvents ? <SavedSubmissions /> : <EmptySavedSubmission />}
        </TabPanel>
      </Box>
    </Box>
  )
}

export default RootEvents
