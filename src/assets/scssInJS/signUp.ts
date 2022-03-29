import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
  authInput: {
    color: "#828282",
    fontSize: "14px",
    marginBottom: "25px",
    "&:nth-child(3)": {
      marginBottom: "10px",
    },
  },
  authInputSize: {
    fontSize: "14px",
  },
  authInputProps: {
    fontSize: "14px"
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
    fontSize: "16px",
    color: "#333",
    fontWeight: 400,
    marginBottom: '15px'
  },
  authHeader: {
    fontWeight: 700,
    fontSize: "34px",
    color: "#333",
    marginBottom: "30px",
  },
  authCheck: {
    marginBottom: "20px",
  },
});
