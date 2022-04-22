import { makeStyles } from "@mui/styles";
import { color, font, margin, position } from "../../style/globalVariables";

const useStyles = makeStyles({
  authInput: {
    color: color.grayColor,
    fontSize: font.fontSize14,
    marginBottom: margin.marginBottom25,
    '& label': {
      fontSize: font.fontSize14,
    },
    '&:nth-child(3)': {
      marginBottom: margin.marginBottom10,
    },
  },
  authInputSize: {
    fontSize: font.fontSize14,
  },
  authInputProps: {
    fontSize: font.fontSize14,
  },
  signUpRightGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  recPassLabel: {
    margin: 0,
  },
  passRecGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  authText: {
    fontSize: font.fontSize16,
    color: color.darkGray,
    fontWeight: font.fontWeight400,
    marginBottom: margin.marginBottom15,
  },
  authHeader: {
    fontWeight: font.fontWeight600,
    fontSize: font.fontSize34,
    color: color.darkGray,
    marginBottom: margin.marginBottom30,
  },
  authCheck: {
    marginBottom: margin.marginBottom20,
  },
  link: {
    textDecoration: 'none',
    color: color.blueColor,
    fontWeight: font.fontWeight400,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  changedButton: {
    position: 'absolute',
    right: position.right20,
    top: position.top25,
    fontSize: font.fontSize18,
    color: color.textGrey,
  },
})

export default useStyles
