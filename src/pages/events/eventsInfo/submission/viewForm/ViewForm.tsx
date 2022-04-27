import React from 'react'
import {Box} from '@mui/material'
import {NavLink} from 'react-router-dom'
import QuarterlyDevelopmentTeam from './QuarterlyDevelopmentTeam'
import ViewStepper from './ViewStepper'
import ViewRateSkills from './ViewRateSkills'

const ViewForm = () => {
  return (
    <Box className="view-form">
      <Box>
        <NavLink to="/events" className="view-form__link">
          Events {`/ `}
        </NavLink>
        <NavLink to="/events" className="view-form__link">
          Submissions {`/ `}
        </NavLink>
        <NavLink to={{pathname: ''}} className="view-form__link view-form__active">
          View Form
        </NavLink>
      </Box>
      <QuarterlyDevelopmentTeam />
      <ViewStepper />
      <ViewRateSkills />
    </Box>
  )
}

export default ViewForm
