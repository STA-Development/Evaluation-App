import {makeStyles} from "@mui/styles";


export const font = {
  fontWeight400: 400,
  fontWeight500: 500,
  fontWeight600: 600,
  fontWeight700: 700,
  fontSize34: "34px",
  fontSize24: "24px",
  fontSize18: "18px",
  fontSize16: "16px",
  fontSize14: "14px",
  fontSize13: "13px",
  fontSize10: "10px",
};

export const color = {
  blue: "#00A3FF",
  lightBlue: "#40BAFF",
  darkBlue: "#008FDF",
  gray: "#828282",
  darkGray: "#333",
  text: "#131924",
  navbar: "#131924",
  activeLink: "#262F3F",
  white: "#fff",
  closeButton: "#4F4F4F",
};
export const margin = {
  marginTopBottom20: "20px",
  marginLeftRight0: "0px",
  marginBottom30: "30px",
  marginBottom25: "25px",
  marginBottom20: "20px",
  marginBottom15: "15px",
  marginBottom10: "10px",
  marginTop50: '50px',
  marginTop25: "25px",
  marginTop20: "20px",
  marginRight18: "18px",
  marginRight20: "20px",

  margin20: "20px",
};

export const padding = {
  paddingTopBottom15: "15px",
  paddingLeftRight0: "0px",
  paddingBottom26: "26px",
  paddingTop72: "72px",
  paddingTop30: "30px",
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
};


export const useGlobalTheme = makeStyles({


  button: {
    color: color.white,
    display: 'block',
    backgroundColor: color.blue,
    '&:hover': {
      backgroundColor: color.lightBlue,
    },
    '&:active': {
      backgroundColor: color.darkBlue,
    }
  },

  titleHeader: {
    fontWeight: font.fontWeight700,
    fontFamily: "Montserrat",
    fontSize: font.fontSize24,
    marginBottom: margin.marginBottom25,
  },

})