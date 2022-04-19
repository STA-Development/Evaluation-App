import React from 'react';
import {styled} from "@mui/material/styles";
import StepConnector, {stepConnectorClasses} from "@mui/material/StepConnector";
import {color} from "../../../../assets/style/globalVariables";



const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`& .${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: color.tableBorderColor,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: color.blueColor
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 2,
      backgroundColor: color.tableBorderColor,
    },
  }
));

export default ColorlibConnector;