import React from 'react'
import {Box} from '@mui/material'
import {Link} from 'react-router-dom'
import QuarterlyDevelopmentTeam from './QuarterlyDevelopmentTeam'
import ViewStepper from './ViewStepper'
import ViewRateSkills from './ViewRateSkills'

const ViewForm = () => (
  <Box className="view-form">
    <Box>
      <Link to="/events" className="view-form__link">
        Events {`/ `}
      </Link>
      <Link state={{fromViewForm: 1}} to="/events/submissions" className="view-form__link">
        Submissions {`/ `}
      </Link>
      <Link to="/events/saved-submissions" className="view-form__link view-form__active">
        View Form
      </Link>
    </Box>
    <QuarterlyDevelopmentTeam />
    <ViewStepper />
    <ViewRateSkills />
  </Box>
)

export default ViewForm
