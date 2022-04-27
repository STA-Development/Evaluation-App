import React from 'react'
import {Box, Step, StepConnector, Stepper} from '@mui/material'
import useViewForm from '../../../../../assets/styleJs/viewForm/viewForm'

const ViewStepper = () => {
  const classes = useViewForm()

  return (
    <Box>
      <Stepper
        activeStep={4}
        className={classes.stepper}
        connector={<StepConnector className={classes.stepperConnector} />}
      >
        <Step className={classes.stepperStep}>1</Step>
        <Step className={classes.stepperStep}>2</Step>
        <Step className={classes.stepperStep}>3</Step>
        <Step className={classes.stepperStep}>4</Step>
      </Stepper>
    </Box>
  )
}

export default ViewStepper
