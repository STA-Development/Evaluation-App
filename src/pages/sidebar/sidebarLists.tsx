import DashboardNavbarIcon from "../../assets/images/Icons/DashboardNavbarIcon"
import EventsNavbarIcon from "../../assets/images/Icons/EventsNavbarIcon"
import ReportsNavbarIcon from "../../assets/images/Icons/ReportsNavbarIcon"


export const sidebarList = [
  {
    id: 1,
    name: "Dashboard",
    route: "dashboard",
    icon: <DashboardNavbarIcon/>
  },
  {
    id: 2,
    name: "Events",
    route: "events",
    icon: <EventsNavbarIcon/>
  },
  {
    id: 3,
    name: "Reports",
    route: "reports",
    icon: <ReportsNavbarIcon/>
  }
]
