import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchBox } from "../../assets/scssInJS/searchBox";

interface SelectItems {
  id: number;
  name: string;
}

const SearchBox = () => {
  const classes = useSearchBox();
  const [title, setTitle] = useState<string>("");
  const [selectItems, setSelectItems] = useState<SelectItems[]>([
    {
      id: 10,
      name: "Event Title",
    },
    {
      id: 20,
      name: "Event Title",
    },
    {
      id: 30,
      name: "Event Title",
    },
  ]);

  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string);
  };
  return (
    <Box className={classes.searchBox}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">
          Search by Event title
        </InputLabel>
        <Select
          labelId="Search by event title"
          value={title}
          label="Search by event title"
          onChange={handleChange}
        >
          {selectItems.map((item: SelectItems) => {
            return (
              <MenuItem value={item.id} key={item.id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchBox;
