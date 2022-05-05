import React from 'react'
import {Box, Step, StepConnector, Stepper} from '@mui/material'
import useViewForm from '../../../../../assets/styleJs/viewForm/viewForm'

const ViewStepper = () => {
  const classes = useViewForm()
  const steps = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]
  return (
    <Box>
      <Stepper
        activeStep={4}
        className={classes.stepper}
        connector={<StepConnector className={classes.stepperConnector} />}
      >
        {steps.map((step) => (
          <Step key={step.id} className={classes.stepperStep}>
            {step.id}
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default ViewStepper
