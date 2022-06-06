import {makeStyles} from '@mui/styles'

export const font = {
  fontWeight300: 300,
  fontWeight400: 400,
  fontWeight500: 500,
  fontWeight600: 600,
  fontWeight700: 700,
  fontSize36: '36px',
  fontSize34: '34px',
  fontSize20: '20px',
  fontSize24: '24px',
  fontSize18: '18px',
  fontSize16: '16px',
  fontSize15: '15px',
  fontSize14: '14px',
  fontSize13: '13px',
  fontSize12: '12px',
  fontSize10: '10px',
  fontSize8: '8px',
  fontStyleItalic: 'italic',
}

export const color = {
  blueColor: '#00a3ff',
  lightBlue: '#40baff',
  darkBlue: '#008fdf',
  grayColor: '#828282',
  percentageInputColor: '#e0e0e0',
  darkGray: '#333',
  textGrey: '#4f4f4f',
  lightGrey: '#ececec',
  percentGrey: '#979797',
  navbarColor: '#131924',
  activeLink: '#262f3f',
  whiteColor: '#fff',
  overViewBoxshadow: 'rgba(0, 0, 0, 0.15)',
  dividerColor: 'rgba(0, 0, 0, 0.1)',
  overViewBoxColor: '#1f6f8b',
  greenColor: '#b2e4d5',
  tableBorderColor: '#bdbdbd',
  closeButton: '#4f4f4f',
  redColor: '#ff0000',
  blackColor: '#000',
  employeeColor: '#756F86',
}

export const margin = {
  margin0: '0',
  margin0Auto: '0 auto',
  marginTopBottom20: '20px',
  marginTopBottom15: '15px',
  marginTopBottom10: '10px',
  marginTopBottom5: '5px',
  marginTopBottom0: '0px',
  marginLeftRight0: '0px',
  marginLeftRight3: '3px',
  marginRightAuto: 'auto',
  marginLeftAuto: 'auto',
  marginBottom85: '85px',
  marginBottom50: '50px',
  marginBottom40: '40px',
  marginBottom35: '35px',
  marginBottom30: '30px',
  marginBottom25: '25px',
  marginBottom20: '20px',
  marginBottom16: '16px',
  marginBottom15: '15px',
  marginBottom10: '10px',
  marginBottom5: '5px',
  marginBottomM15: '-15px',
  marginTop100: '100px',
  marginTop50: '50px',
  marginTop40: '40px',
  marginTop30: '30px',
  marginTop25: '25px',
  marginTop20: '20px',
  marginTop15: '15px',
  marginTop10: '10px',
  marginTop8: '8px',
  marginTop4: '4px',
  marginTop0: '0',
  marginRight3: '3px',
  marginRight8: '8px',
  marginRight15: '15px',
  marginRight16: '16px',
  marginRight18: '18px',
  marginRight20: '20px',
  marginRight25: '25px',
  marginRight50: '50px',
  marginRight35: '35px',
  marginRight40: '40px',
  margin20: '20px',
  marginOverViewBox: '0px 4px 4px',
  marginLeft2: '2px',
  marginLeft3: '3px',
  marginLeft6: '6px',
  marginLeft15: '15px',
  marginLeft30: '30px',
  marginLeft40: '40px',
  marginLeftM36: '-36px',
}

export const padding = {
  paddingTopBottom0: '0',
  paddingTopBottom5: '5px',
  paddingTopBottom10: '10px',
  paddingTopBottom15: '15px',
  paddingTopBottom20: '20px',
  paddingTopBottom36: '36px',
  paddingLeftRight32: '32px',
  paddingLeftRight30: '30px',
  paddingLeftRight24: '24px',
  paddingLeftRight14: '14px',
  paddingLeftRight10: '10px',
  paddingLeftRight0: '0px',
  paddingBottom10: '10px',
  paddingBottom26: '26px',
  paddingTop72: '72px',
  paddingTop30: '30px',
  paddingTop16: '16px',
  paddingTop8: '8px',
  paddingTop5: '5px',
  paddingLeft32: '32px',
  paddingLeft25: '25px',
  paddingLeft10: '10px',
  padding0: '0px',
  padding20: '20px',
  padding16: '16px',
  padding30: '30px',
  paddingLeft0: '0px',
  paddingRight0: '0px',
}

export const borderRedius = {
  top0: '0px',
  left0: '0px',
  top4: '4px',
  right0: '0px',
  bottom0: '0px',
  left4: '4px',
  bottom4: '4px',
  right4: '4px',
  all50: '50px',
  all4: '4px',
  all2: '2px',
  all0: '0px',
  topLeft0: '0px',
  topRight50: '50px',
  bottomRight50: '50px',
  bottomLeft0: '0px',
  overViewBox: '10px',
  borderP50: '50%',
}

export const border = {
  solid: 'solid',
  border2: '2px',
  border1: '1px',
  top4: '4px',
  right0: '0px',
  bottom0: '0px',
  left4: '4px',
  top0: '0px',
  right4: '4px',
  bottom4: '4px',
  left0: '0px',
}

export const position = {
  right20: '20px',
  top25: '25px',
}

export const useGlobalTheme = makeStyles({
  button: {
    color: color.whiteColor,
    display: 'block',
    backgroundColor: color.blueColor,
    '&:hover': {
      backgroundColor: color.lightBlue,
    },
    '&:active': {
      backgroundColor: color.darkBlue,
    },
  },
  titleHeader: {
    fontWeight: font.fontWeight700,
    fontFamily: 'Montserrat',
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
    height: '72px',
    paddingTop: padding.paddingTop16,
    '& .Mui-selected': {
      fontWeight: font.fontWeight700,
      color: color.navbarColor,
    },
  },
  eventTabs: {
    fontSize: font.fontSize18,
    fontWeight: font.fontWeight400,
    color: color.navbarColor,
    maxWidth: '425px',
    minWidth: '120px',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus': {
      textDecoration: 'none',
    },
  },
})
