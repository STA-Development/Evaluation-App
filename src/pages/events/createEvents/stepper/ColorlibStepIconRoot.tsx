import {styled} from "@mui/material/styles";

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  backgroundColor:  '',
  border:'2px solid #00A3FF',
  zIndex: 1,
  color: '#00A3FF',
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor:'transparent',
  }),
  ...(ownerState.completed && {
    backgroundColor:'#00A3FF',
    color:'#fff'
  }),
}));

export default  ColorlibStepIconRoot