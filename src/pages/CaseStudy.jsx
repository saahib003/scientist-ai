import { useParams, Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

function CaseStudy() {
  useScrollAnimation()
  const { id } = useParams()

  // Placeholder case study data
  const caseStudy = {
    title: 'Urban AI Traffic Management',
    client: 'Smart City Initiative',
    industry: 'Smart Cities',
    challenge: 'The city faced severe traffic congestion and safety issues with limited visibility into traffic patterns.',
    solution: 'Implemented Urban AI video analytics platform across 50+ intersections for real-time monitoring and optimization.',
    results: [
      '35% reduction in traffic congestion',
      '50% faster incident response time',
      '25% improvement in traffic flow',
      '60% reduction in manual monitoring costs'
    ],
    technologies: ['Computer Vision', 'Deep Learning', 'Cloud Infrastructure', 'Real-time Analytics']
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
            <Link to="/projects">Projects</Link>
            <span className="breadcrumb-separator">→</span>
            <span>Case Study</span>
          </div>
          <h1 className="hero-title hero-title-impact animate-on-scroll">
            <span className="title-line-1">{caseStudy.title}</span>
            <span className="title-line-2"><span className="title-accent">{caseStudy.client}</span></span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            {caseStudy.industry}
          </p>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="section case-study-section">
        <div className="container">
          <div className="case-study-content">
            {/* Challenge */}
            <div className="case-study-block glass-card animate-on-scroll">
              <h2>The Challenge</h2>
              <p>{caseStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div className="case-study-block glass-card animate-on-scroll">
              <h2>Our Solution</h2>
              <p>{caseStudy.solution}</p>
              
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {caseStudy.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="case-study-block glass-card animate-on-scroll">
              <h2>Results & Impact</h2>
              <ul className="results-list">
                {caseStudy.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card glass-card animate-on-scroll">
            <h2>Want Similar Results?</h2>
            <p>Let's discuss how we can help you achieve your business goals with AI.</p>
            <Link to="/contact" className="btn btn-primary">
              <span>Get in Touch</span>
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

export default CaseStudy
