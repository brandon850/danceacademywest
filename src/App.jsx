import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout      from './components/layout/Layout'
import Home        from './pages/Home'
import Classes     from './pages/Classes'
import Programs    from './pages/Programs'
import Competitive from './pages/Competitive'
import About       from './pages/About'
import Events      from './pages/Events'
import Gallery     from './pages/Gallery'
import Enroll      from './pages/Enroll'
import Contact     from './pages/Contact'
import FAQ         from './pages/FAQ'
import Policies    from './pages/Policies'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index                  element={<Home />}        />
          <Route path="classes"         element={<Classes />}     />
          <Route path="programs"        element={<Programs />}    />
          <Route path="competitive"     element={<Competitive />} />
          <Route path="about"           element={<About />}       />
          <Route path="events"          element={<Events />}      />
          <Route path="gallery"         element={<Gallery />}     />
          <Route path="enroll"          element={<Enroll />}      />
          <Route path="contact"         element={<Contact />}     />
          <Route path="faq"             element={<FAQ />}         />
          <Route path="policies"        element={<Policies />}    />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
