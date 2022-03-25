import { makeStyles } from "@mui/styles";

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
  recPassLabel: {
    margin: 0,
  },
  authText: {
    fontSize: "16px",
    color: "#333",
    fontWeight: 400,
  },
  authHeader: {
    fontWeight: 700,
    fontSize: "34px",
    color: "#333",
    marginBottom:'30px'
  },
  authCheck: {
    marginBottom: "20px",
  },
});
