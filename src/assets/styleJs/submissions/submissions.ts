import { makeStyles } from "@mui/styles";
import { color, font, margin } from "../../style/globalVariables";

const useSubmissionsStyle = makeStyles({
  header: {
    fontSize: font.fontSize16,
    fontWeight: font.fontWeight700,
    color: color.navbarColor,
  },

  divider: {
    backgroundColor: color.lightGrey,
    margin: `${margin.marginTopBottom10} ${margin.marginLeftRight0}`,
  },
  evaluatorName: {
    fontSize: font.fontSize14,
    fontWeight: font.fontWeight700,
    marginBottom: margin.marginBottom5,
  },
  evaluatorPosition: {
    fontSize: font.fontSize12,
    marginBottom: margin.marginBottom5,
  },

  submitedReview: {
    margin: `${margin.marginTopBottom10} ${margin.marginLeftRight0}`,
    fontSize: font.fontSize10,
  },
  savedSubmission: {
    fontSize: font.fontSize8,
    color: color.tableBorderColor,
  },
  viewFormBox: {
    display: "flex",
    alignItems: "end",
  },
  viewFormButton: {
    padding: 0,
    fontSize: font.fontSize12,
  },
});

export default useSubmissionsStyle;
