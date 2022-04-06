import React from "react";
import { Route, Routes } from "react-router-dom";
import RootEvents from "../pages/events/RootEvents";
import Dashboard from "../pages/dashboard/Dashboard";
import Reports from "../pages/reports/Reports";
import Homepage from "../pages/Homepage";
import SavedSubmissions from "../pages/events/eventsInfo/savedSubmission/SavedSubmissions";
import Submissons from "../pages/events/eventsInfo/submission/Submissons";
import Events from "../pages/events/eventsInfo/ongoingEvent/Events";

const PrivateRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="events" element={<RootEvents />}>
          <Route index element={<Events />} />
          <Route path="submissions" element={<Submissons />} />
          <Route path="saved_submissions" element={<SavedSubmissions />} />
        </Route>
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default PrivateRouts;
