import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Team() {
  useScrollAnimation()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero team-hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="breadcrumb animate-on-scroll">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">→</span>
            <span>Team</span>
          </div>
          <h1 className="hero-title hero-title-impact animate-on-scroll">
            <span className="title-line-1">Meet The Brilliant Minds</span>
            <span className="title-line-2">Behind <span className="title-accent">Our Innovation</span></span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            Our team of world-class researchers, engineers, and business leaders are pioneering the future of AI technology.
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section team-category-section" id="leadership">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Leadership <span className="gradient-text">Team</span></h2>
            <p className="section-subtitle">Visionary leaders steering the company towards groundbreaking AI solutions.</p>
          </div>
          <div className="team-grid">
            {/* CEO */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Anurag_Image.jpg" alt="Anurag Pyriyadarshi" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Anurag Pyriyadarshi</h3>
              <p className="team-role">CEO & Founder</p>
              <p className="team-bio">Visionary leader driving the future of AI innovation and strategic growth since 2016.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/anurag-priyadarshi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/mukesh-new-photo.jpg" alt="Mukesh Kumar" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Mukesh Kumar</h3>
              <p className="team-role">Head of Operations</p>
              <p className="team-bio">Driving operational excellence and business growth.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/mukesh-kumar-4b49803a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Operations Section */}
      <section className="section team-category-section" id="business-ops">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Business <span className="gradient-text">Operations</span></h2>
            <p className="section-subtitle">Driving operational excellence and fostering a culture of innovation.</p>
          </div>
          <div className="team-grid">
            {/* Finance */}
            

            {/* HR Manager */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/aiti-new.jpg" alt="Aditi Paul" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Aditi Paul</h3>
              <p className="team-role">HR & Operation Manager</p>
              <p className="team-bio">Fostering a culture of innovation and building our world-class team of experts.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/aditi-paul-10002a196/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Technology Consultant */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Aditya Chavan.jpg" alt="Aditya Chavan" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Aditya Chavan</h3>
              <p className="team-role">Associate Technology Consultant</p>
              <p className="team-bio">Delivering scalable and innovative tech solutions.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/aditya-chavan-641172186/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Tushar Sharma.jpg" alt="Tushar Sharma" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Tushar Sharma</h3>
              <p className="team-role">Executive – Finance & Accountant</p>
              <p className="team-bio">Ensuring financial accuracy and strategic control.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/tushar-sharma-b01793203/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Team Section */}
      <section className="section team-category-section" id="engineering">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Engineering <span className="gradient-text">Team</span></h2>
            <p className="section-subtitle">Building cutting-edge AI solutions and scalable systems.</p>
          </div>
          <div className="team-grid engineer-team">
            {/* Lead AI Engineer */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Syed_Image.jpg" alt="Syed Moula" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Syed Moula</h3>
              <p className="team-role">Lead AI Engineer</p>
              <p className="team-bio">Architecting advanced AI solutions and leading our engineering technical strategy.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/syed-moula/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Data Scientist */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Anjali Aswal.jpg" alt="Anjali Aswal" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Anjali Aswal</h3>
              <p className="team-role">Data Scientist</p>
              <p className="team-bio">Analyzing complex datasets and building predictive models for AI solutions.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/anjali-aswal-0b694073/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* AI Engineer */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Shivam Mishra.jpg" alt="Shivam Mishra" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Shivam Mishra</h3>
              <p className="team-role">AI Engineer</p>
              <p className="team-bio">Developing innovative machine learning models and AI-powered solutions.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/shivam-mishra27" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Software Engineer 1 */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Md Ali Azam.jpg" alt="Md Ali Azam" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Md Ali Azam</h3>
              <p className="team-role">Software Engineer</p>
              <p className="team-bio">Building scalable backend systems and AI infrastructure solutions.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/mdaliazam07/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Software Engineer 2 */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Amit Singh.jpg" alt="Amit Singh" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Amit Singh</h3>
              <p className="team-role">Software Engineer</p>
              <p className="team-bio">Creating seamless user experiences and robust web applications.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/saahib003/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Transport Planning Engineer */}
            <div className="team-card animate-on-scroll">
              <div className="team-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-placeholder">
                  <img src="/assets/images/team/Nandish K.jpg" alt="Nandish K" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <h3 className="team-name">Nandish K</h3>
              <p className="team-role">Traffic Engineering Consultant</p>
              <p className="team-bio">Optimizing mobility through smart transport planning and traffic engineering.</p>
              <div className="team-social">
                <a href="https://www.linkedin.com/in/nandish-k-53a715178/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card glass-card animate-on-scroll">
            <h2>Join Our Team</h2>
            <p>We're always looking for talented individuals passionate about AI and innovation.</p>
            <Link to="/contact" className="btn btn-primary">
              <span>View Opportunities</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
