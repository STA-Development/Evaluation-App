import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Reports from '../pages/reports/Reports'
import CreateEvent from '../pages/events/createEvents/CreateEvent'
import CreateEventCriteria from '../pages/events/createEvents/createEventCriteria/CreateEventCriteria'
import Homepage from '../pages/Homepage'
import RootEvents from '../pages/events/RootEvents'
import ViewForm from '../pages/events/eventsInfo/submission/viewForm/ViewForm'
import Submissions from '../pages/events/eventsInfo/submission/Submissions'
import SavedSubmissions from '../pages/events/eventsInfo/savedSubmission/SavedSubmissions'
import Events from '../pages/events/eventsInfo/ongoingEvent/Events'
import CreateNewEvent from '../pages/events/createEvents/CreateNewEvent'
import PerformanceReport from '../pages/reports/performanceReport/PerformanceReport'
import ComparativeReport from '../pages/reports/comparativeReport/ComparativeReport'
import EmployeePersonalGrowthReport from '../pages/reports/employeePersonalGrowthReport/EmployeePersonalGrowthReport'

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
      <Route path="events/create" element={<CreateEvent />} />
      <Route path="events/create/criteria" element={<CreateEventCriteria />} />
      <Route path="reports" element={<Reports />}>
        <Route path="performance-report" element={<PerformanceReport />} />
        <Route path="comparative-report" element={<ComparativeReport />} />
        <Route path="employee-personal-growth-Report" element={<EmployeePersonalGrowthReport />} />
      </Route>
      <Route path="events-create" element={<CreateEvent />} />
      <Route path="events-create/criteria" element={<CreateEventCriteria />} />
      <Route path="events/create-new-event" element={<CreateNewEvent />} />
    </Route>
  </Routes>
)

export default PrivateRouts
