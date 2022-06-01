import React, {FC, useContext} from 'react'
import CreateEventHeader from './CreateEventHeader'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import CreateEventFirstPage from './CreateEventFirstPage'
import {Box} from '@mui/material'
import {EventContext} from './EventsContext'
import CreateEventCriteria from '../createEvents/createEventCriteria/CreateEventCriteria'
import {createEventPages} from '../../../types/createEventTypes'
import AssignDates from './AssignDates'

const CreateEvent: FC = () => {
  const classes = useCreateEventStyles()
  const UseEventContext = () => useContext(EventContext)
  const {state} = UseEventContext()

  return (
    <Box className={classes.rootCreateEvent}>
      <Box className={classes.infoRootBox}>
        <CreateEventHeader />
        {state.activePage === createEventPages.first && <CreateEventFirstPage />}
        {state.activePage === createEventPages.criterias && <CreateEventCriteria />}
        {state.activePage === createEventPages.assignDate && <AssignDates />}
      </Box>
    </Box>
  )
}

export default CreateEvent
