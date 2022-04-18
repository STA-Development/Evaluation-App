import { makeStyles } from "@mui/styles";

export const font = {
  fontWeight400: 400,
  fontWeight500: 500,
  fontWeight600: 600,
  fontWeight700: 700,
  fontSize36: "36px",
  fontSize34: "34px",
  fontSize20: "20px",
  fontSize24: "24px",
  fontSize18: "18px",
  fontSize16: "16px",
  fontSize15: "15px",
  fontSize14: "14px",
  fontSize13: "13px",
  fontSize12: "12px",
  fontSize10: "10px",
  fontSize8: "8px",
};

export const color = {
  blueColor: "#00A3FF",
  lightBlue: "#40BAFF",
  darkBlue: "#008FDF",
  grayColor: "#828282",
  darkGray: "#333",
  textGrey: "#4f4f4f",
  lightGrey: "#ececec",
  navbarColor: "#131924",
  activeLink: "#262F3F",
  whiteColor: "#fff",
  overViewBoxshadow: "rgba(0, 0, 0, 0.15)",
  overViewBoxColor: "#1F6F8B",
  greenColor: "#B2E4D5",
  tableBorderColor: "#bdbdbd",
};

export const margin = {
  margin0Auto: "0 auto",
  marginTopBottom20: "20px",
  marginTopBottom10: "10px",
  marginTopBottom5: "5px",
  marginLeftRight0: "0px",
  marginBottom50: "50px",
  marginBottom35: "35px",
  marginBottom30: "30px",
  marginBottom25: "25px",
  marginBottom20: "20px",
  marginBottom15: "15px",
  marginBottom10: "10px",
  marginBottom5: "5px",
  marginTop50: "50px",
  marginTop25: "25px",
  marginTop20: "20px",
  marginTop10: "10px",
  marginRight18: "18px",
  marginRight20: "20px",
  margin20: "20px",
  marginOverViewBox: "0px 4px 4px",
  marginLeft30: "30px",
};

export const padding = {
  paddingTopBottom15: "15px",
  paddingTopBottom20: "20px",
  paddingLeftRight30: "30px",
  paddingLeftRight0: "0px",
  paddingBottom26: "26px",
  paddingTop72: "72px",
  paddingTop30: "30px",
  paddingTop16: "16px",
  paddingLeft25: "25px",
  padding0: "0px",
  paddingLeft0: "0px",
  paddingRight0: "0px",
};

export const borderRedius = {
  topLeft0: "0px",
  topRight50: "50px",
  bottomRight50: "50px",
  bottomLeft0: "0px",
  overViewBox: "10px",
};

export const position = {
  right20: "20px",
  top25: "25px",
};

export const useGlobalTheme = makeStyles({
  button: {
    color: color.whiteColor,
    display: "block",
    backgroundColor: color.blueColor,
    "&:hover": {
      backgroundColor: color.lightBlue,
    },
    "&:active": {
      backgroundColor: color.darkBlue,
    },
  },

  titleHeader: {
    fontWeight: font.fontWeight700,
    fontFamily: "Montserrat",
    fontSize: font.fontSize24,
    marginBottom: margin.marginBottom25,
  },

  contentHeader: {
    fontSize: font.fontSize20,
    fontWeight: font.fontWeight700,
    marginBottom: margin.marginBottom25,
    marginTop: margin.marginTop10,
  },
  eventTabsBox: {
    height: "72px",
    paddingTop: padding.paddingTop16,
    "& .Mui-selected": {
      fontWeight: font.fontWeight700,
      color: color.navbarColor,
    },
  },
  eventTabs: {
    fontSize: font.fontSize18,
    fontWeight: font.fontWeight400,
    color: color.navbarColor,
  },
});
