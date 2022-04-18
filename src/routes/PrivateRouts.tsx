import React from "react";
import {Route, Routes} from "react-router-dom";
import Events from "../pages/events/Events";
import Dashboard from "../pages/dashboard/Dashboard";
import Reports from "../pages/reports/Reports";
import Homepage from "../pages/Homepage";

const PrivateRouts = () => (
    <Routes>
      <Route path="/" element={<Homepage/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="events" element={<Events/>}/>
        <Route path="reports" element={<Reports/>}/>
      </Route>
    </Routes>
  );

export default PrivateRouts;
