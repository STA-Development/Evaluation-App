import { makeStyles } from "@mui/styles";
import { color, font, margin } from "../../style/globalVariables";

export const useStyles = makeStyles({
  authInput: {
    color: color.gray,
    fontSize: font.fontSize14,
    marginBottom: margin.marginBottom25,
    "& label": {
      fontSize: font.fontSize14,
    },
    "&:nth-child(3)": {
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
    display: "flex",
    justifyContent: "flex-end",
  },
  recPassLabel: {
    margin: 0,
  },
  passRecGrid: {
    display: "flex",
    justifyContent: "center",
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
    textDecoration: "none",
    color: color.blue,
    fontWeight: font.fontWeight400,
    "&:hover": {
      textDecoration: "none",
    },
  },
  changedButton: {
    position: "absolute",
    right: "20px",
    top: "25px",
    fontSize: font.fontSize18,
    color: color.closeButton,
  },
});
