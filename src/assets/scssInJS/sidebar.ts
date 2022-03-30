import {makeStyles} from "@mui/styles";
import {color, font, margin} from "../style/globalVariables";

export const useSliderStyle = makeStyles({
  link: {
    '&: active': {
      textDecoration: 'none',
      backgroundColor: 'green',
    }
  },
  listItem: {
    "&:hover": {
      // background: color.navbar,
      textDecoration: 'none'
    },
    padding: "15px 0px"
  },
  itemIcon: {
    color: color.white,
    minWidth: "20px",
    minHeight: "20px",
    marginRight: "18px"
  },
  itemText: {
    '& span': {
      color: "#fff",
      fontWeight: 500,
      fontSize: font.fontSize18,
      fontFamily: "Montserrat",
    },
  },
  listItemContent: {
    width: "141px",
    height: "24px",
    paddingLeft: "25px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

  },
  upBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: margin.margin20
  },
  listBox: {
    padding: "0px",
    marginTop: margin.margin20
  },
  logOutBox: {},
  avatar: {
    width: "105px",
    height: "105px"
  },
  nameSurname: {
    color: color.white,
    fontWeight: font.fontWeigth500,
    fontSize: font.fontSize16,
    fontFamily: "Montserrat",
    margin: '20px 0',
  },

});