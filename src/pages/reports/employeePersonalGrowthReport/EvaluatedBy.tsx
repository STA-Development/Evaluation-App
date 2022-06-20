import React from 'react'
import {
  Box,
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  FormGroup,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import {ExpandLess, ExpandMore} from '@mui/icons-material'

const EvaluateeCheckbox = () => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Box>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Work Performance average - 8" secondary="some text" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{pl: 4}}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Open to feedback - 8"
              />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Team worker - 10" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Responsible - 10" />
            </FormGroup>
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  )
}

const EvaluatedBy = () => {
  return (
    <Box>
      <Box className="chart-search">
        <Typography>This employee was evaluated by</Typography>
      </Box>
      <Box className="evaluated-box">
        <Typography>Evaluatee 1</Typography>
        <Paper className="evaluated-box__paper">
          <Typography>Samvel Hovsepyan</Typography>
          <Typography>QA Team Lead</Typography>
          <Divider />
          <EvaluateeCheckbox />
        </Paper>
      </Box>
    </Box>
  )
}

export default EvaluatedBy
