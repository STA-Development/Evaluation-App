import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import useSubmissionsStyle from "../../../../assets/styleJs/submissions/submissions";

const SubmissionQuarterly = () => {
  const classes = useSubmissionsStyle();
  return (
    <Box className="submission__quarterly border__color_red">
      <Box className="submission__quarterly_categories">
        <Typography variant="h6" component="h6">
          NEW
        </Typography>
        <Typography>Submitted on : Nov 9</Typography>
      </Box>

      <Typography className={classes.header} variant="h4" component="h4">
        Quarterly Development Team Evoluation
      </Typography>
      <Divider className={classes.divider} />

      <Box className="submission__quarterly_evaluators">
        <Box>
          <Typography
            className={classes.evaluatorName}
            variant="h5"
            component="h5"
          >
            Jenny Cooper
          </Typography>
          <Typography className={classes.evaluatorPosition}>
            UI UX Designer
          </Typography>

          <Typography className={classes.submitedReview}>
            submitted review for
          </Typography>

          <Typography
            className={classes.evaluatorName}
            variant="h5"
            component="h5"
          >
            Anna Adams
          </Typography>
          <Typography className={classes.evaluatorPosition}>
            Project Manager
          </Typography>
          <Typography className={classes.savedSubmission}>
            Saved Submission
          </Typography>
        </Box>
        <Box className={classes.viewFormBox}>
          <Button variant="text" className={classes.viewFormButton}>
            View form
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SubmissionQuarterly;
