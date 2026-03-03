import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '../../hooks/useTheme'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import CursorGlow from '../common/CursorGlow'
import ParticleCanvas from '../common/ParticleCanvas'
import Chatbot from '../common/Chatbot'

function Layout() {
  return (
    <ThemeProvider>
      <CursorGlow />
      <ParticleCanvas />
      <Navbar />
      <MobileMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </ThemeProvider>
  )
}

export default Layout
