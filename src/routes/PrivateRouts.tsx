import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Reports from '../pages/reports/Reports'
import CreateEvent from '../pages/events/createEvents/CreateEvent'
import CreateEventCriteria from '../pages/events/createEvents/CreateEventCriteria'
import Homepage from '../pages/Homepage'
import RootEvents from '../pages/events/RootEvents'
import ViewForm from '../pages/events/eventsInfo/submission/viewForm/ViewForm'
import Submissions from '../pages/events/eventsInfo/submission/Submissions'
import SavedSubmissions from '../pages/events/eventsInfo/savedSubmission/SavedSubmissions'
import Events from '../pages/events/eventsInfo/ongoingEvent/Events'
import AssignDates from '../pages/events/createEvents/AssignDates'
import CreateNewEvent from '../pages/events/createEvents/CreateNewEvent'

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
      <Route path="events-create" element={<CreateEvent />} />
      <Route path="events-create/criteria" element={<CreateEventCriteria />} />
      <Route path="events-create/assign-date" element={<AssignDates />} />
      <Route path="events/create-new-event" element={<CreateNewEvent />} />
    </Route>
  </Routes>
)

export default PrivateRouts
