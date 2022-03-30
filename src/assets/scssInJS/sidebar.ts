import { makeStyles } from "@mui/styles";
import { color, font, margin, padding } from "../style/globalVariables";

export const useSliderStyle = makeStyles({
  listItem: {
    "&:hover": {
      background: color.navbar,
      textDecoration: "none",
    },
    padding: `${padding.paddingTopBottom15} ${padding.paddingLeftRight0}`,
  },
  itemIcon: {
    color: color.white,
    minWidth: "20px",
    minHeight: "20px",
    marginRight: margin.marginRight18,
  },
  itemText: {
    "& span": {
      color: color.white,
      fontWeight: font.fontWeight500,
      fontSize: font.fontSize18,
      fontFamily: "Montserrat",
    },
  },
  listItemContent: {
    width: "141px",
    height: "24px",
    paddingLeft: padding.paddingLeft25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  upBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: margin.marginRight20,
  },
  listBox: {
    padding: padding.padding0,
    marginTop: margin.marginTop20,
  },
  logOutBox: {},
  avatar: {
    width: "105px",
    height: "105px",
  },
  nameSurname: {
    color: color.white,
    fontWeight: font.fontWeight500,
    fontSize: font.fontSize16,
    fontFamily: "Montserrat",
    margin: `${margin.marginTopBottom20} ${margin.marginLeftRight0}`,
  },
});
