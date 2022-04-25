import {styled} from "@mui/material/styles";
import {border, color, borderRedius} from "../../../../assets/style/globalVariables"


const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  backgroundColor:  '',
  border: `${border.border2} ${border.solid} ${color.blueColor}`,
  zIndex: 1,
  color: color.blueColor,
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: borderRedius.all50,
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor:'transparent',
  }),
  ...(ownerState.completed && {
    backgroundColor: color.blueColor,
    color: color.whiteColor
  }),
}));

export default  ColorlibStepIconRoot