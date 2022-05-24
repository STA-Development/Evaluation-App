import React from 'react'
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import useSubmissionsStyle from "../../../../assets/styleJs/submissions/submissions";

const SavedSubmissions = () => {
  const classes = useSubmissionsStyle()

  return (
    <Box className={classes.savedSubmissionRootBox}>
      <Box className={classes.savedSubmissionHeaderFirstRowBox}>
        <Box>
          <Typography className={classes.eachSelectText}>
            Event
          </Typography>
          <FormControl className={classes.formControl200PX} size='small'>
            <InputLabel id="demo-simple-select-label">
              Name
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={title}
              label="Event Name"
              // onChange={handleChange}
            >
              <MenuItem >
                asd
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography className={classes.eachSelectText}>
            Evaluator/s
          </Typography>
          <FormControl className={classes.formControl200PX} size='small'>
            <InputLabel id="demo-simple-select-label">
              Name / Surname
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={title}
              label="Event Name"
              // onChange={handleChange}
            >
              <MenuItem >
                asd
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography className={classes.eachSelectText}>
            Evalatee/s
          </Typography>
          <FormControl className={classes.formControl200PX} size='small'>
            <InputLabel id="demo-simple-select-label">
              Name / Surname
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={title}
              label="Event Name"
              // onChange={handleChange}
            >
              <MenuItem >
                asd
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography className={classes.eachSelectText}>
            Evaluation Criteria
          </Typography>
          <FormControl className={classes.formControl200PX} size='small'>
            <InputLabel id="demo-simple-select-label">
              All
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={title}
              label="Event Name"
              // onChange={handleChange}
            >
              <MenuItem >
                asd
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography className={classes.eachSelectText}>
            {`Evaluator's FeedBack`}
          </Typography>
          <FormControl className={classes.formControl200PX} size='small'>
            <InputLabel id="demo-simple-select-label">
              Feedback
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={title}
              label="Event Name"
              // onChange={handleChange}
            >
              <MenuItem >
                asd
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box className={classes.savedSubmissionHeaderSecondRowBox}>
        <Box>
          <Typography className={classes.eachSelectText}>
            Date
          </Typography>
          <FormControl className={classes.formControl200PX} size='small'>
            <InputLabel id="demo-simple-select-label">
              Hire Date
            </InputLabel>
            <TextField
              size='small'
            type="date"
            />
          </FormControl>
        </Box>
        <Box>
          <Typography className={classes.eachSelectText}>
            Bonus
          </Typography>
          <FormControl className={classes.formControl200PX} size='small'>
            <InputLabel id="demo-simple-select-label">
              Percentage
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={title}
              label="Event Name"
              // onChange={handleChange}
            >
              <MenuItem >
                asd
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          className={classes.backButton}
          type="submit"
          variant="outlined"
          size="medium"
        >
          CLEAR
        </Button>
        <Button
          className={classes.nextButton}
          type="submit"
          variant="contained"
          size="medium"
        >
          APPLY
        </Button>

      </Box>
      <Box className={classes.savedSubmissionsButtonBox}>
        <Button
          className={classes.getCertificateButton}
          type="submit"
          variant="outlined"
          size="medium"
        >
          <Typography className={classes.buttonText}>
            GET CERTIFICATE
          </Typography>
        </Button>
        <Button
          className={classes.getCertificateButton}
          type="submit"
          variant="outlined"
          size="medium"
        >
          <Typography className={classes.buttonText}>
            Export Report
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default SavedSubmissions
