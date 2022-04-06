import React from "react";
import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { useEventsStyle } from "../../assets/styleJs/events/events";

interface EventsLink {
  id: number;
  name: string;
  route: string;
}

const RootEvents = () => {
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
        <Box className="events__sidebar-box">
          {eventsSidebar.map((link) => (
            <NavLink
              to={link.route}
              key={link.id}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "events__active events__link" : "events__link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box className="events__outlet">
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootEvents;
