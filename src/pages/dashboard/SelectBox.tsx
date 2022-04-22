import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import useSelectBox from '../../assets/styleJs/dashboard/selectBox'

interface SelectItems {
  id: string
  name: string
}

const SelectBox = () => {
  const classes = useSelectBox()
  const [title, setTitle] = useState<string>('')
  const [selectItems] = useState<SelectItems[]>([
    {
      id: uuidv4(),
      name: 'Event Title',
    },
    {
      id: uuidv4(),
      name: 'Event Title',
    },
    {
      id: uuidv4(),
      name: 'Event Title',
    },
  ])

  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string)
  }
  return (
    <Box className={classes.useSelectBox}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Search by Event title</InputLabel>
        <Select
          labelId="Search by event title"
          value={title}
          label="Search by event title"
          onChange={handleChange}
        >
          {selectItems.map((item: SelectItems) => (
            <MenuItem value={item.id} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
export default SelectBox
