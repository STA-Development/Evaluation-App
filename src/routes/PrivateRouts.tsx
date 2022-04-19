import React from 'react';
import {Route, Routes} from "react-router-dom";
import Events from "../pages/events/Events";
import Dashboard from "../pages/dashboard/Dashboard";
import Reports from "../pages/reports/Reports";
import CreateEvent from "../pages/events/createEvents/CreateEvent";
import {CreateEventCriteria} from "../pages/events/createEvents/CreateEventCriteria";
import Homepage from "../pages/Homepage";

const PrivateRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="events" element={<Events/>}/>
        <Route path="reports" element={<Reports/>}/>
        <Route path="events-create" element={<CreateEvent/>}/>
        <Route path="events-create/criteria" element={<CreateEventCriteria/>}/>
      </Route>
    </Routes>

  );
};

export default PrivateRouts;