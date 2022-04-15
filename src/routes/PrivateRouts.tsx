import React from "react";
import {Route, Routes} from "react-router-dom";
import RootEvents from "../pages/events/RootEvents";
import Dashboard from "../pages/dashboard/Dashboard";
import Reports from "../pages/reports/Reports";
import Homepage from "../pages/Homepage";

const PrivateRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="events" element={<RootEvents/>}/>
        <Route path="reports" element={<Reports/>}/>
      </Route>
    </Routes>
  );
};

export default PrivateRouts;