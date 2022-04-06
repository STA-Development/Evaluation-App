import {makeStyles} from "@mui/styles";
import {margin} from "../../style/globalVariables";

export const useEventsStyle = makeStyles({
  ongoingEventsDivider: {
    margin: `${margin.marginTopBottom20} ${margin.marginLeftRight0}`,
    backgroundColor: '#ececec',
  }
});
