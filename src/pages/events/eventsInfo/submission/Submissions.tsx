import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SubmissionQuarterly from "./SubmissionQuarterly";
import { SelectChangeEvent } from "@mui/material/Select";
import { v4 as uuidv4 } from "uuid";

interface SubmissionItems {
  id: string;
  item: string;
  value: number;
}

const Submissions = () => {
  const [title, setTitle] = useState<string>("");

  const [items, setitems] = useState<SubmissionItems[]>([
    {
      id: uuidv4(),
      item: "Some Name",
      value: 10,
    },
    {
      id: uuidv4(),
      item: "Some Name",
      value: 20,
    },
    {
      id: uuidv4(),
      item: "Some Name",
      value: 30,
    },
  ]);
  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string);
  };

  return (
    <Box>
      <FormControl sx={{ width: "400px" }}>
        <InputLabel id="demo-simple-select-label">
          Search by Event and/or Evaluator’s name
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={title}
          label="Search by Event and/or Evaluator’s  name"
          onChange={handleChange}
        >
          {items.map((item: SubmissionItems) => {
            return (
              <MenuItem key={item.id} value={item.value}>
                {item.item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <SubmissionQuarterly />
    </Box>
  );
};

export default Submissions;
