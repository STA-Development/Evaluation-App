import React from "react";
import { Box, List } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEventsStyle } from "../../assets/styleJs/events/events";

interface EventsLink {
  id: number;
  name: string;
  route: string;
}

const Events = () => {
  const classes = useEventsStyle();
  const eventsSidebar: EventsLink[] = [
    {
      id: Math.random(),
      name: "Events",
      route: "/events",
    },
    {
      id: Math.random(),
      name: "Submissions",
      route: "submissions",
    },
    {
      id: Math.random(),
      name: "Saved Submissions",
      route: "saved_submissions",
    },
  ];
  return (
    <Box className="events">
      <Box className="events__sidebar">
        {eventsSidebar.map((link) => (
          <NavLink
            to={link.route}
            key={link.id}
            className={({ isActive }) =>
              isActive ? "events__active" : "events__link"
            }
          >
            <ListItem className={classes.listItem}>
              <Box>
                <ListItemText primary={link.name} />
              </Box>
            </ListItem>
          </NavLink>
        ))}
      </Box>
      <Box className="events__outlet">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Events;
