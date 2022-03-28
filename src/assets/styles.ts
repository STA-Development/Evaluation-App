import { makeStyles } from "@mui/styles";
import { font, color } from "./style/reset/variables";

export const useStyles = makeStyles({
  authText: {
    fontWeight: font.fontWeight700,
    fontSize: font.fontSize34,
    color: color.textColor,
  },
});
