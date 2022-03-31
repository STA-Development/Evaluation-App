import {makeStyles} from "@mui/styles";
import {font, margin, padding} from "../style/globalVariables";

export const useDashboardStyles = makeStyles({
  dashboardPage: {
    height: "calc(100vh - 66px)",
  },

  dashboardContent: {
    height: ' calc(100% - 91px)',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  dashText1: {
    marginTop: margin.marginTop25,
    fontWeight: font.fontWeight700,
    fontFamily: "Montserrat",
    fontSize: font.fontSize18,
  },
  dashText2: {
    width: "365px",
    textAlign: "center",
    flexDirection: "column",
    fontWeight: font.fontWeight400,
    fontFamily: "Montserrat",
    fontSize: font.fontSize16,
    margin: margin.margin20,
  },
  dashboardEmptyImg: {},
  dashboardEmptyText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paddingContent: {
    paddingTop: padding.paddingTop30,
  },
});
