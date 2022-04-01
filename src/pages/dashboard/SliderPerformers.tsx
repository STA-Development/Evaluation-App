import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

interface Items {
  id: number;
  title: string;
}

const SliderPerformers = () => {
  const [items, setItems] = useState([
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ]);

  return (
    <Box>
      <Typography>6 Rock Stars</Typography>
      <List>
        <ListItemText>
          <ListItemButton>
            <Box>
              <Typography>asd</Typography>
              <Typography>asd</Typography>
            </Box>
            <Box>
              <Typography>asd</Typography>
            </Box>
          </ListItemButton>
        </ListItemText>
      </List>
    </Box>
  );
};

export default SliderPerformers;
