import React from "react";
import { Route, Routes } from "react-router-dom";
import Events from "../pages/events/Events";
import Dashboard from "../pages/dashboard/Dashboard";
import Reports from "../pages/reports/Reports";
import Homepage from "../pages/Homepage";
import Event from "../pages/events/eventsInfo/Event";
import SavedSubmissions from "../pages/events/eventsInfo/SavedSubmissions";
import Submissons from "../pages/events/eventsInfo/Submissons";

const PrivateRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="events" element={<Events />}>
          <Route index element={<Event />} />
          <Route path="submissions" element={<Submissons />} />
          <Route path="saved_submissions" element={<SavedSubmissions />} />
        </Route>
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default PrivateRouts;
