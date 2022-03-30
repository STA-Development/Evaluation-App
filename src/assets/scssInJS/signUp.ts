import {makeStyles} from "@mui/styles";
import {color, font, margin} from "../style/globalVariables";

export const useStyles = makeStyles({
  authInput: {
    color: color.gray,
    fontSize: font.fontSize14,
    marginBottom: margin.margin25,
    "&:nth-child(3)": {
      marginBottom: margin.margin10,
    },
  },
  authInputSize: {
    fontSize: font.fontSize14,
  },
  authInputProps: {
    fontSize: font.fontSize14
  },
  signUpRightGrid: {
    display: "flex",
    justifyContent: "flex-end"
  },
  recPassLabel: {
    margin: 0,
  },
  passRecGrid: {
    display: "flex",
    justifyContent: "center"
  },
  authText: {
    fontSize: font.fontSize16,
    color: color.darkGray,
    fontWeight: font.fontWeigth400,
    marginBottom: margin.margin15,
  },
  authHeader: {
    fontWeight: font.fontWeigth600,
    fontSize: font.fontSize34,
    color: color.darkGray,
    marginBottom: margin.margin30,
  },
  authCheck: {
    marginBottom: margin.margin20,
  },
  link: {
    textDecoration: 'none',
    color: color.blue,
    fontWeight: font.fontWeigth400,
    '&:hover': {
      textDecoration: 'none',
    }

  }
});
