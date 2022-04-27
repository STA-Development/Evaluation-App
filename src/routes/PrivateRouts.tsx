import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Reports from '../pages/reports/Reports'
import CreateEvent from '../pages/events/createEvents/CreateEvent'
import CreateEventCriteria from '../pages/events/createEvents/CreateEventCriteria'
import Homepage from '../pages/Homepage'
import RootEvents from '../pages/events/RootEvents'

const PrivateRouts = () => (
  <Routes>
    <Route path="/" element={<Homepage />}>
      <Route index element={<Dashboard />} />
      <Route path="events" element={<RootEvents />} />
      <Route path="reports" element={<Reports />} />
      <Route path="events-create" element={<CreateEvent />} />
      <Route path="events-create/criteria" element={<CreateEventCriteria />} />
    </Route>
  </Routes>
)

export default PrivateRouts
