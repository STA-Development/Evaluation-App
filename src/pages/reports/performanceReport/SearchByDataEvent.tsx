import React from 'react'
import useReportsStyle from '../../../assets/styleJs/report/report'
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  TextField,
} from '@mui/material'
import CalendarIcon from '../../../assets/images/Icons/CalendarIcon'
import {Calendar} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import moment from 'moment'
import {SelectChangeEvent} from '@mui/material/Select'

interface Propss {
  value: string
  setValue: (vlue: string) => void
  evoluationCriteria: string
  setEvoluationCriteria: (value: string) => void
  performerType: string
  setPerformerType: (value: string) => void
  evaluatees: string
  setEvaluatees: (value: string) => void
  evaluateesPosition: string
  setEvaluateesPosition: (value: string) => void
  evaluators: string
  setEvaluators: (value: string) => void
  evaluatorsPosition: string
  setEvaluatorsPosition: (value: string) => void
}

const SearchByDataEvent = ({
  value,
  setValue,
  evoluationCriteria,
  setEvoluationCriteria,
  performerType,
  setPerformerType,
  evaluatees,
  setEvaluatees,
  evaluateesPosition,
  setEvaluateesPosition,
  evaluators,
  setEvaluators,
  evaluatorsPosition,
  setEvaluatorsPosition,
}: Propss) => {
  const classes = useReportsStyle()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const getEvoluationCriteria = (event: SelectChangeEvent) => {
    setEvoluationCriteria(event.target.value as string)
  }

  const getPerformerType = (event: SelectChangeEvent) => {
    setPerformerType(event.target.value as string)
  }
  const getEvaluatees = (event: SelectChangeEvent) => {
    setEvaluatees(event.target.value as string)
  }
  const getEvaluateesPosition = (event: SelectChangeEvent) => {
    setEvaluateesPosition(event.target.value as string)
  }
  const getEvaluators = (event: SelectChangeEvent) => {
    setEvaluators(event.target.value as string)
  }
  const getEvaluatorsPosition = (event: SelectChangeEvent) => {
    setEvaluatorsPosition(event.target.value as string)
  }

  return (
    <Box>
      <Box className="search-event">
        <FormControl variant="outlined" style={{width: '100%'}}>
          <TextField
            variant="outlined"
            fullWidth
            label="Search by Event title and/or date"
            value={value}
            className={classes.reportSelect}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClick}
                    edge="end"
                  >
                    <CalendarIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onFocus={(e) => e.target.select()}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
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
              <Calendar onChange={(item) => setValue(moment(item).format('MMM DD yyyy'))} />
            </Box>
          </Popover>
        </FormControl>
      </Box>
      <Box className="search-report">
        <FormGroup className={classes.searchSelect}>
          <Box className="search-report__select-Box">
            <FormControl fullWidth>
              <InputLabel>Evoluation Criteria</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={evoluationCriteria}
                label="Evoluation Criteria"
                onChange={getEvoluationCriteria}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="search-report__select-Box">
            {' '}
            <FormControl fullWidth>
              <InputLabel>Performer Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={performerType}
                label="Performer Type"
                onChange={getPerformerType}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className="search-report__select-Box">
            {' '}
            <FormControl fullWidth>
              <InputLabel>Evaluatee/s</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={evaluatees}
                label="Evaluatee/s"
                onChange={getEvaluatees}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className="search-report__select-Box">
            {' '}
            <FormControl fullWidth>
              <InputLabel>Evaluatee’s Position</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={evaluateesPosition}
                label="Evaluatee’s Position"
                onChange={getEvaluateesPosition}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className="search-report__select-Box">
            {' '}
            <FormControl fullWidth>
              <InputLabel>Evaluator/s</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={evaluators}
                label="Evaluator/s"
                onChange={getEvaluators}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className="search-report__select-Box">
            {' '}
            <FormControl fullWidth>
              <InputLabel>Evaluator’s Position</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={evaluatorsPosition}
                label="Evaluator’s Position"
                onChange={getEvaluatorsPosition}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </FormGroup>
      </Box>
      <Box className="report-btn">
        <Button
          variant="outlined"
          color="primary"
          className={classes.performBtn}
          // onClick={onBackButtonClick}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.performBtn}
          // onClick={handlePublish}
        >
          Apply
        </Button>
      </Box>
    </Box>
  )
}

export default SearchByDataEvent
