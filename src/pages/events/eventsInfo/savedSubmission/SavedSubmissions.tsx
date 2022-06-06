import React, {useState} from 'react'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,

  Typography
} from "@mui/material";
import useSubmissionsStyle from "../../../../assets/styleJs/submissions/submissions";
import CalendarIcon from "../../../../assets/images/Icons/CalendarIcon";
import {Calendar} from "react-date-range";
import moment from "moment";
import TableContentSavedSubmissions from "./TableContentSavedSubmissions";

const SavedSubmissions = () => {
  const [date, setDate] = useState<undefined | string | Date>(undefined);
  const [anchorElDate, setAnchorElDate] = React.useState<HTMLButtonElement | null>(null)

  const openDate = Boolean(anchorElDate)
  const id = openDate ? 'simple-popover' : undefined

  const handleClickDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElDate(event.currentTarget)
  }
  const handleCloseDate = () => {
    setAnchorElDate(null)
  }

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
          <Box className={classes.formControl200PX}>

            <Typography onClick={handleClickDate} className={classes.selectDate}>
              {date ? moment(date).format('DD-MM-YYYY') : 'Hire Date'}
              <IconButton color="primary" aria-label="upload picture" component="span">
                <CalendarIcon />
              </IconButton>
            </Typography>

            <Popover
              id={id}
              open={openDate}
              anchorEl={anchorElDate}
              onClose={handleCloseDate}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Box>
                <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Calendar onChange={item => setDate(item)}
                           date={date} />
                </div>;
              </Box>
            </Popover>
          </Box>
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
      <Box>
        <Box>
          <TableContentSavedSubmissions />
        </Box>
      </Box>
    </Box>
  )
}

export default SavedSubmissions
