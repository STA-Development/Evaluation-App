import { makeStyles } from "@mui/material/styles";
import { fonstSize34, fontWeight700, textColor } from "./style/reset/variables";

export const useStyles = makeStyles({
  authText: {
    fontWeight: fontWeight700,
    fontSize: fonstSize34,
    color: textColor,
  },
});
