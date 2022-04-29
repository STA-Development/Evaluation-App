import React, {useEffect, useState} from 'react'
import {ITabPanelProps} from '../../types/eventsTypes'
import {Box} from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Events from './eventsInfo/ongoingEvent/Events'
import EmptyEvents from './eventsInfo/ongoingEvent/EmptyEvents'
import {useGlobalTheme} from '../../assets/style/globalVariables'
import {Link, useLocation} from 'react-router-dom'
import EmptySubmission from './eventsInfo/submission/EmptySubmission'
import Submissions from './eventsInfo/submission/Submissions'
import EmptySavedSubmission from './eventsInfo/savedSubmission/EmptySavedSubmission'
import SavedSubmissions from './eventsInfo/savedSubmission/SavedSubmissions'

const TabPanel = (props: ITabPanelProps) => {
  const {children, value, index, ...other} = props

  return (
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
}

const tabProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
})

const RootEvents = () => {
  const globalClasses = useGlobalTheme()
  const location = useLocation()
  const [value, setValue] = useState<number>(0)
  const [hasEvents] = useState<boolean>(true)

  useEffect(() => {
    if (location.state) {
      setValue(1)
    }
  }, [location])

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
            label="Events"
            {...tabProps(0)}
            className={globalClasses.eventTabs}
            component={Link}
            to="/events"
          />
          <Tab
            label="Submissions"
            {...tabProps(1)}
            className={globalClasses.eventTabs}
            component={Link}
            to="submissions"
          />
          <Tab
            label="Saved Submissions"
            {...tabProps(3)}
            className={globalClasses.eventTabs}
            component={Link}
            to="saved-submissions"
          />
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
