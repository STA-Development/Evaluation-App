import { makeStyles } from "@mui/styles";
import {
  borderRedius,
  color,
  font,
  margin,
  padding,
} from "../../style/globalVariables";

export const useDashboardStyles = makeStyles({
  dashboardPage: {
    height: "calc(100vh - 66px)",
  },

  dashboardContent: {
    height: " calc(100% - 91px)",
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

  dashboardEmptyText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paddingContent: {
    paddingTop: padding.paddingTop30,
  },
  overview: {
    padding: `${padding.paddingTopBottom20} ${padding.paddingLeftRight30}`,
    backgroundColor: color.white,
    boxShadow: `${margin.marginOverViewBox} ${color.overViewBoxshadow}`,
    borderRadius: borderRedius.overViewBox,
    height: "100%",
  },
  overViewTitle: {
    height: "100%",
    width: "2px",
    backgroundColor: color.overViewBoxColor,
    opacity: "0.27",
    display: "block",
  },
  dashboardHeader: {
    fontSize: font.fontSize20,
    fontWeight: font.fontWeight700,
    marginTop: margin.marginTop50,
    marginBottom: margin.marginBottom25,
  },
  overviewHeader: {
    fontSize: font.fontSize18,
    fontWeight: font.fontWeight700,
    marginBottom: margin.marginBottom10,
  },

  notEvalEmployiesText: {
    fontSize: font.fontSize15,
    color: color.navbar,
    fontWeight: font.fontWeight700,
  },
  textPosition: {
    fontSize: font.fontSize13,
    color: color.textGrey,
    fontWeight: font.fontWeight400,
  },
  textEvaluated: {
    fontSize: font.fontSize10,
    color: color.textGrey,
    fontWeight: font.fontWeight400,
  },

  sliderBoxListButton: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "100%",
    color: color.textGrey,
    fontWeight: font.fontWeight400,
    padding: padding.padding0,
  },
  sliderBoxListItem: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },

  sliderBoxCurrency: {
    fontSize: font.fontSize36,
    margin: margin.margin0Auto,
  },

  sidebarBoxHeader: {
    fontSize: font.fontSize18,
    fontWeight: font.fontWeight700,
  },
  sidebarBoxText: {
    fontSize: font.fontSize13,
  },

  sliderRockStars: {
    marginBottom: margin.marginBottom35,
    color: color.textGrey,
    fontSize: font.fontSize14,
  },
});
