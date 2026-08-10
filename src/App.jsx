import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout          from './components/layout/Layout'
import Home            from './pages/Home'
import Schedule        from './pages/classes/Schedule'
import Descriptions    from './pages/classes/Descriptions'
import ChoosingAClass  from './pages/classes/ChoosingAClass'
import Tuition         from './pages/info/Tuition'
import Calendar        from './pages/info/Calendar'
import DressCode       from './pages/info/DressCode'
import Policies        from './pages/Policies'
import Programs        from './pages/Programs'
import Competitive     from './pages/Competitive'
import About           from './pages/About'
import Events           from './pages/events/EventsIndex'
import ChristmasParade  from './pages/events/ChristmasParade'
import Mayfest          from './pages/events/Mayfest'
import SummerProduction from './pages/events/SummerProduction'
import Gallery         from './pages/Gallery'
import Enroll          from './pages/Enroll'
import Contact         from './pages/Contact'
import FAQ             from './pages/FAQ'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Classes */}
          <Route path="classes">
            <Route index               element={<Navigate to="/classes/schedule" replace />} />
            <Route path="schedule"     element={<Schedule />}       />
            <Route path="descriptions" element={<Descriptions />}   />
            <Route path="choosing"     element={<ChoosingAClass />} />
          </Route>

          {/* Important Info */}
          <Route path="info">
            <Route index             element={<Navigate to="/info/tuition" replace />} />
            <Route path="tuition"    element={<Tuition />}   />
            <Route path="calendar"   element={<Calendar />}  />
            <Route path="dress-code" element={<DressCode />} />
            <Route path="policies"   element={<Policies />}  />
          </Route>

          <Route path="about"            element={<About />}       />
          <Route path="faq"              element={<FAQ />}         />
          <Route path="competition-team" element={<Competitive />} />
          {/* Events */}
          <Route path="events">
            <Route index                      element={<Events />}           />
            <Route path="christmas-parade"    element={<ChristmasParade />}  />
            <Route path="mayfest"             element={<Mayfest />}          />
            <Route path="summer-production"   element={<SummerProduction />} />
          </Route>

          {/* Reachable from the footer and in-page CTAs, not the top nav */}
          <Route path="programs" element={<Programs />} />
          <Route path="gallery"  element={<Gallery />}  />
          <Route path="enroll"   element={<Enroll />}   />
          <Route path="contact"  element={<Contact />}  />

          {/* Legacy paths */}
          <Route path="policies"    element={<Navigate to="/info/policies"   replace />} />
          <Route path="competitive" element={<Navigate to="/competition-team" replace />} />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
