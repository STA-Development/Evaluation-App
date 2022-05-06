import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Reports from '../pages/reports/Reports'
import Homepage from '../pages/Homepage'
import RootEvents from '../pages/events/RootEvents'
import ViewForm from '../pages/events/eventsInfo/submission/viewForm/ViewForm'
import Submissions from '../pages/events/eventsInfo/submission/Submissions'
import SavedSubmissions from '../pages/events/eventsInfo/savedSubmission/SavedSubmissions'
import Events from '../pages/events/eventsInfo/ongoingEvent/Events'
import Users from '../test/Users'

const PrivateRouts = () => (
  <Routes>
    <Route path="/" element={<Homepage />}>
      <Route index element={<Dashboard />} />
      <Route path="events" element={<RootEvents />}>
        <Route index element={<Events />} />
        <Route path="submissions" element={<Submissions />} />
        <Route path="saved-submissions" element={<SavedSubmissions />} />
      </Route>

      <Route path="events/submissions/view-form" element={<ViewForm />} />
      <Route path="reports" element={<Reports />} />
      <Route path="users" element={<Users />} />
    </Route>
  </Routes>
)

export default PrivateRouts
