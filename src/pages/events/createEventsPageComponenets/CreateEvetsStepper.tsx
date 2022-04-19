import * as React from 'react';
import { styled } from '@mui/material/styles';
import ColorlibStepIconRoot from "../createEvents/stepper/ColorlibStepIconRoot";
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import {useCreateEventStyles} from "../../../assets/styleJs/events/createEvent";
import ColorlibConnector from "../createEvents/stepper/ColorlibConnector";


const ColorlibStepIcon=(props: StepIconProps) =>{
  const { active, completed, className } = props;

  const icons: { [index: string]: string } = {
    1: '1',
    2: '2',
    3: '3',
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

export default function CustomizedSteppers() {
  const classes = useCreateEventStyles()

  return (
    <Stack className={classes.stepperStack} >

      <Stepper  activeStep={1} connector={<ColorlibConnector />}  className={classes.stepperRoot}>
        {[1,2,3].map((label) => (
          <Step key={label} className={classes.stepperStep} >
            <StepLabel className={classes.stepperStepLabel} StepIconComponent={ColorlibStepIcon} />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}