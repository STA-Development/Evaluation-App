import * as React from 'react';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import ColorlibStepIconRoot from "../createEvents/stepper/ColorlibStepIconRoot";
import useCreateEventStyles from "../../../assets/styleJs/events/createEvent";
import ColorlibConnector from "../createEvents/stepper/ColorlibConnector";

const ColorlibStepIcon=({active, className, completed, icon}: StepIconProps) =>{

  const icons: { [index: string]: string } = {
    1: '1',
    2: '2',
    3: '3',
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}
const CustomizedSteppers = () => {
  const classes = useCreateEventStyles()
  const arr: number[] = [1,2,3]

  return (
    <Stack className={classes.stepperStack}>
      <Stepper activeStep={1} connector={<ColorlibConnector/>} className={classes.stepperRoot}>
        {arr.map((label: number) => (
          <Step key={label} className={classes.stepperRoot}>
            <StepLabel className={classes.stepperStepLabel} StepIconComponent={ColorlibStepIcon}/>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
export default CustomizedSteppers