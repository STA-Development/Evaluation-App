import React, {FC, useContext} from 'react'
import CreateEventHeader from './CreateEventHeader'
import useCreateEventStyles from '../../../assets/styleJs/events/createEvent'
import CreateEventFirstPage from './CreateEventFirstPage'
import {Box} from '@mui/material'
import {EventContext} from './EventsContext'
import CreateEventCriteria from './CreateEventCriteria'

const CreateEvent: FC = () => {
  const classes = useCreateEventStyles()
  const UseEventContext = () => useContext(EventContext)
  const {state} = UseEventContext()

  return (
    <div className={classes.rootCreateEvent}>
      <Box className={classes.infoRootBox}>
        <CreateEventHeader />
        {state.activePage === 'firstPage' && <CreateEventFirstPage />}
        {state.activePage === 'criteriasPage' && <CreateEventCriteria />}
      </Box>
    </div>
  )
}

export default CreateEvent