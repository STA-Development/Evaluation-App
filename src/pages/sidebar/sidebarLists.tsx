import React from 'react'
import DashboardNavbarIcon from '../../assets/images/Icons/DashboardNavbarIcon'
import EventsNavbarIcon from '../../assets/images/Icons/EventsNavbarIcon'
import ReportsNavbarIcon from '../../assets/images/Icons/ReportsNavbarIcon'

const sidebarList = [
  {
    id: 1,
    name: "Dashboard",
    route: "/",
    icon: <DashboardNavbarIcon/>
  },
  {
    id: 2,
    name: 'Events',
    route: 'events',
    icon: <EventsNavbarIcon />,
  },
  {
    id: 3,
    name: 'Reports',
    route: 'reports',
    icon: <ReportsNavbarIcon />,
  },
]
export default sidebarList
