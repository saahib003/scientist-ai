import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Listen for mobile menu button clicks
    const handleMobileMenuToggle = (e) => {
      if (e.target.closest('.mobile-menu-btn')) {
        setIsOpen(!isOpen)
      }
    }

    document.addEventListener('click', handleMobileMenuToggle)
    return () => document.removeEventListener('click', handleMobileMenuToggle)
  }, [isOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`} id="mobileMenu">
      <div className="mobile-menu-content">
        <nav className="mobile-nav-links">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/services" className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}>Consulting</Link>
          <Link to="/projects" className={`mobile-nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
          <Link to="/urban-ai" className={`mobile-nav-link ${isActive('/urban-ai') ? 'active' : ''}`}>Products</Link>
          <Link to="/team" className={`mobile-nav-link ${isActive('/team') ? 'active' : ''}`}>Team</Link>
          <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
