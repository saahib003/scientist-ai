import { Link } from 'react-router-dom'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Contact() {
  useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Configure EmailJS with your credentials
      await emailjs.send(
        'service_3qu1a8d',
        'template_5p85usu',
        formData,
        'WFNw_DRrzj3oFitMU'
      )
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (error) {
      setStatus('error')
      console.error('Email send error:', error)
    }
  }

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
            <span>Contact</span>
          </div>
          <h1 className="hero-title hero-title-impact animate-on-scroll">
            <span className="title-line-1">Let's Build Something</span>
            <span className="title-line-2"><span className="title-accent">Amazing Together</span></span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            Ready to transform your business with AI? Get in touch with our team and let's discuss your project.
          </p>
        </div>
      </section>

      {/* Why Connect Section */}
      <section className="section why-connect-section" id="why-connect">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Why <span className="gradient-text">Connect</span> With Us</h2>
            <p className="section-subtitle">Experience the difference of working with AI experts who truly care about your success</p>
          </div>

          <div className="why-connect-grid">
            {/* Quick Response */}
            <div className="why-connect-card glass-card animate-on-scroll">
              <div className="why-connect-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 16V32L42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Quick Response Time</h3>
              <p>We respond to all inquiries within 24 hours. Your time is valuable, and we respect that.</p>
              <div className="why-connect-stat">
                <span className="stat-highlight">&lt; 24hrs</span>
                <span className="stat-label">Response Time</span>
              </div>
            </div>

            {/* Expert Consultation */}
            <div className="why-connect-card glass-card animate-on-scroll">
              <div className="why-connect-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 52C16 42 22 36 32 36C42 36 48 42 48 52" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 36V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Expert Consultation</h3>
              <p>Free initial AI assessment and consultation to understand your needs and challenges.</p>
              <div className="why-connect-stat">
                <span className="stat-highlight">100%</span>
                <span className="stat-label">Free Consultation</span>
              </div>
            </div>

            {/* Tailored Solutions */}
            <div className="why-connect-card glass-card animate-on-scroll">
              <div className="why-connect-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 32L30 38L40 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Tailored Solutions</h3>
              <p>Custom AI strategies designed specifically for your business goals and requirements.</p>
              <div className="why-connect-stat">
                <span className="stat-highlight">Custom</span>
                <span className="stat-label">Approach</span>
              </div>
            </div>

            {/* Proven Track Record */}
            <div className="why-connect-card glass-card animate-on-scroll">
              <div className="why-connect-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 12L36 24H48L38 32L42 44L32 38L22 44L26 32L16 24H28L32 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Proven Track Record</h3>
              <p>Over 50+ successful AI projects delivered with 95% client satisfaction rate.</p>
              <div className="why-connect-stat">
                <span className="stat-highlight">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Contact Information */}
            <div className="contact-info-column animate-on-scroll">
              {/* London Office */}
              <div className="office-block">
                <h3 className="office-title">London, UK-</h3>
                <p className="office-address">Creative Works, 7 Blackhorse Ln, E17 6DS</p>
                <a href="tel:+447774172545" className="office-phone">(+44) 777 417 2545</a>
              </div>

              {/* Bengaluru Office */}
              <div className="office-block">
                <h3 className="office-title">Bengaluru, India-</h3>
                <p className="office-address">B-502, Mantri Glades, Near Wipro Office Doddakannelli, Bangalore- 560035</p>
                <a href="tel:+919916695156" className="office-phone">(+91) 991 669 5156</a>
              </div>

              {/* Email */}
              <div className="office-block">
                <h3 className="office-title">Email-</h3>
                <a href="mailto:team@scientisttechnologies.com" className="office-email">team@scientisttechnologies.com</a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-column animate-on-scroll">
              <form id="contactForm" className="simple-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleChange}
                    placeholder="Phone (optional)"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company (optional)"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'sending'}>
                  <span className="btn-text">{status === 'sending' ? 'Sending...' : 'Submit'}</span>
                  <span className="btn-loader"></span>
                </button>

                {status === 'success' && (
                  <div className="form-message success">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-message error">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
