import React, {useState} from 'react'
import {Box, Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'
import ProgressBar from 'react-customizable-progressbar'

const ViewForm = () => {
  const [progress] = useState<number>(100)
  return (
    <Box className="view-event">
      <Box className="view-event__links">
        <NavLink to="/events">Events /</NavLink>
        <NavLink to="/events">Submissions /</NavLink>
        <NavLink to="events/view-form">View Form</NavLink>
      </Box>
      <Box className="view-event__team-evaluation">
        <Box>
          <Typography variant="h6">Quarterly Development Team Evoluation</Typography>
          <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={11}
            strokeColor="#5d9cec"
            strokeLinecap="square"
            trackStrokeWidth={11}
          />
          <Typography>{progress} % done</Typography>
        </Box>
        <Box>
          <Box className="view-event__evaluator">
            <Typography variant="h6">Evaluator : Jenny Cooper</Typography>
            <Typography>UI UX Designer</Typography>
          </Box>
          <Box className="view-event__evaluatee">
            <Typography variant="h6">Evaluatee : Anna Adams</Typography>
            <Typography>Project Manager</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ViewForm
