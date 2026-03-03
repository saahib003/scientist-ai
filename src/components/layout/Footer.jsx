import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <img src="/assets/images/icons/company-logo.avif" alt="Scientist Technologies Logo" className="logo-img" />
            </Link>
            <p className="footer-tagline">
              Pioneering AI solutions since 2016. Building a smarter future, one algorithm at a time.
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Solutions</h4>
              <Link to="/services">Machine Learning</Link>
              <Link to="/services">Natural Language Processing</Link>
              <Link to="/services">Computer Vision</Link>
              <Link to="/services">AI Deployment</Link>
            </div>
            
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/team">Team</Link>
              <a href="#">Blog</a>
              <Link to="/contact">Contact</Link>
            </div>
            
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#">Case Studies</a>
              <a href="#">Documentation</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2016–2026 Scientist Technologies.uk — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
