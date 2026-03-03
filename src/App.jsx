import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import UrbanAI from './pages/UrbanAI'
import Team from './pages/Team'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="urban-ai" element={<UrbanAI />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="case-study/:id" element={<CaseStudy />} />
      </Route>
    </Routes>
  )
}

export default App
