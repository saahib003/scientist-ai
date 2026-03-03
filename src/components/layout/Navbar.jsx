import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" id="navLogo">
          <img src="/assets/images/icons/company-logo.avif" alt="Scientist Technologies Logo" className="logo-img" />
        </Link>
        
        <nav className="nav-links" id="navLinks">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Consulting</Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
          <Link to="/urban-ai" className={`nav-link ${isActive('/urban-ai') ? 'active' : ''}`}>Products</Link>
          <Link to="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>Team</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </nav>
        
        <div className="nav-actions">
          <button 
            className={`theme-toggle ${theme === 'light' ? 'light' : ''}`} 
            id="themeToggle" 
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-icon sun">☀️</span>
              <span className="theme-toggle-icon moon">🌙</span>
              <span className="theme-toggle-thumb"></span>
            </span>
          </button>
          
          <Link to="/contact" className="nav-cta" id="navCta">Get Started</Link>
          
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
            id="mobileMenuBtn" 
            aria-label="Toggle menu"
            onClick={handleMobileMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
