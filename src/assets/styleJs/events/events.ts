import { makeStyles } from "@mui/styles";
import { color, font, padding } from "../../style/globalVariables";

export const useEventsStyle = makeStyles({
  listItem: {
    fontSize: font.fontSize18,
    fontWeight: font.fontWeight400,
    "&:hover": {
      textDecoration: "none",
    },
  },
});
