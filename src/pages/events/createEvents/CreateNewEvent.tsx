import React, {useContext} from 'react'
import {Box, Button, Typography} from '@mui/material'
import useEventsStyle from '../../../assets/styleJs/events/events'
import EventsPageIcon from '../../../assets/images/Icons/EventsPageIcon'
import {createEventReducerTypes} from '../../../types/createEventTypes'
import {EventContext} from './EventsContext'
import {useNavigate} from 'react-router-dom'

const CreateNewEvent = () => {
  const classes = useEventsStyle()
  const navigate = useNavigate()
  const UseEventContext = () => useContext(EventContext)
  const {dispatchContext} = UseEventContext()

  const onToCreatEventPage = () => {
    dispatchContext({
      type: createEventReducerTypes.updateActivePageToCriterias,
      activePage: 'firstPage',
    })
    navigate('/events-create')
  }
  return (
    <Box className={classes.eventContent}>
      <Box>
        <EventsPageIcon />
      </Box>
      <Box className={classes.eventEmptyText}>
        <Typography className={classes.text2}>Your evaluation event is all set! </Typography>
        <Button variant="contained" onClick={onToCreatEventPage}>
          CREATE New EVENT
        </Button>
      </Box>
    </Box>
  )
}

export default CreateNewEvent
