import React from 'react'
import DashboardNavbarIcon from '../../assets/images/Icons/DashboardNavbarIcon'
import EventsNavbarIcon from '../../assets/images/Icons/EventsNavbarIcon'
import ReportsNavbarIcon from '../../assets/images/Icons/ReportsNavbarIcon'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'

const sidebarList = [
  {
    id: 1,
    name: 'Dashboard',
    route: '/',
    icon: <DashboardNavbarIcon />,
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
  {
    id: 4,
    name: 'Users',
    route: 'users',
    icon: <PeopleOutlineIcon />,
  },
]
export default sidebarList
