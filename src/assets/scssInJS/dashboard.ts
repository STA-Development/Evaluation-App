import {makeStyles} from "@mui/styles";
import {font, margin} from "../style/globalVariables";

export const useDashboardStyles = makeStyles({
  dashboardPage: {
    height: '100vh',
    paddingTop: '30px'
  },
  dashboardHeader: {
    fontWeight: font.fontWeigth700,
    fontFamily: "Montserrat",
    fontSize: font.fontSize24
  },
  dashboardContent: {
    height: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  dashText1: {
    marginTop: margin.margin25,
    fontWeight: font.fontWeigth700,
    fontFamily: "Montserrat",
    fontSize: font.fontSize18,
  },
  dashText2: {
    width: "365px",
    textAlign: "center",
    flexDirection: "column",
    fontWeight: font.fontWeigth400,
    fontFamily: "Montserrat",
    fontSize: font.fontSize16,
    margin: margin.margin20
  },
  dashboardEmptyImg: {},
  dashboardEmptyText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
 
})