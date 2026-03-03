import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Projects() {
  useScrollAnimation();
  const [activeFilters, setActiveFilters] = useState({
    industry: 'all',
    technology: 'all',
    type: 'all'
  });

  const handleFilterChange = (category, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      industry: 'all',
      technology: 'all',
      type: 'all'
    });
  };

  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    let visibleCount = 0;

    projectCards.forEach(card => {
      const cardIndustry = card.dataset.industry;
      const cardTechnology = card.dataset.technology?.split(' ') || [];
      const cardType = card.dataset.type;

      const industryMatch = activeFilters.industry === 'all' || cardIndustry === activeFilters.industry;
      const technologyMatch = activeFilters.technology === 'all' || cardTechnology.includes(activeFilters.technology);
      const typeMatch = activeFilters.type === 'all' || cardType === activeFilters.type;

      if (industryMatch && technologyMatch && typeMatch) {
        card.style.display = 'block';
        setTimeout(() => card.style.opacity = '1', 10);
        visibleCount++;
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });

    const noResults = document.getElementById('noResults');
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'flex' : 'none';
    }
  }, [activeFilters]);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero team-hero" id="contact-hero">
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
            <span>Projects</span>
          </div>
          <h1 className="hero-title hero-title-impact animate-on-scroll">
            <span className="title-line-1">Transforming </span>
            <span className="title-line-2"><span className="title-accent">Ideas Into Reality</span> With AI</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            Explore our portfolio of successful AI implementations across industries, delivering measurable impact and innovation.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter-section">
        <div className="container">
          <div className="filter-wrapper">
            <div className="filter-dropdowns">
              {/* Industry Dropdown */}
              <div className="filter-dropdown">
                <select 
                  id="industryFilter" 
                  className="filter-select" 
                  value={activeFilters.industry}
                  onChange={(e) => handleFilterChange('industry', e.target.value)}
                >
                  <option value="all">All Industries</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="transportation">Transportation</option>
                </select>
              </div>

              {/* Technology Dropdown */}
              <div className="filter-dropdown">
                <select 
                  id="technologyFilter" 
                  className="filter-select"
                  value={activeFilters.technology}
                  onChange={(e) => handleFilterChange('technology', e.target.value)}
                >
                  <option value="all">All Technologies</option>
                  <option value="ml">Machine Learning</option>
                  <option value="nlp">Natural Language Processing</option>
                  <option value="cv">Computer Vision</option>
                  <option value="dl">Deep Learning</option>
                </select>
              </div>

              {/* Project Type Dropdown */}
              <div className="filter-dropdown">
                <select 
                  id="typeFilter" 
                  className="filter-select"
                  value={activeFilters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="consulting">Consulting</option>
                  <option value="development">Development</option>
                  <option value="integration">Integration</option>
                </select>
              </div>

              {/* Clear Filters Button */}
              <button className="clear-filters-btn" onClick={clearFilters}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid" id="projectsGrid">
            
            {/* Project Card 1 */}
            <div className="project-card" data-industry="healthcare" data-technology="cv dl" data-type="development">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <path d="M100 60L120 80H110V120H90V80H80L100 60Z" fill="#fed16b" opacity="0.3"/>
                    <circle cx="100" cy="100" r="40" stroke="#fed16b" strokeWidth="2" opacity="0.5"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">AI Diagnostic System</h3>
                <p className="project-description">Advanced medical imaging analysis using deep learning for early disease detection with 95% accuracy.</p>
                <div className="project-tags">
                  <span className="project-tag">Computer Vision</span>
                  <span className="project-tag">Deep Learning</span>
                  <span className="project-tag">Healthcare</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card" data-industry="finance" data-technology="ml" data-type="consulting">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <path d="M60 120L80 100L100 110L120 80L140 90" stroke="#fed16b" strokeWidth="3" opacity="0.5"/>
                    <circle cx="80" cy="100" r="4" fill="#fed16b"/>
                    <circle cx="120" cy="80" r="4" fill="#fed16b"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Fraud Detection Engine</h3>
                <p className="project-description">Real-time transaction monitoring system that reduced fraud by 78% using advanced ML algorithms.</p>
                <div className="project-tags">
                  <span className="project-tag">Machine Learning</span>
                  <span className="project-tag">Finance</span>
                  <span className="project-tag">Real-time</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card" data-industry="retail" data-technology="ml nlp" data-type="development">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <rect x="70" y="70" width="60" height="60" rx="8" stroke="#fed16b" strokeWidth="2" opacity="0.5"/>
                    <path d="M85 100H115M100 85V115" stroke="#fed16b" strokeWidth="2" opacity="0.3"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Smart Recommendation System</h3>
                <p className="project-description">Personalized product recommendations increasing conversion rates by 45% through behavioral analysis.</p>
                <div className="project-tags">
                  <span className="project-tag">Machine Learning</span>
                  <span className="project-tag">NLP</span>
                  <span className="project-tag">Retail</span>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="project-card" data-industry="transportation" data-technology="cv ml" data-type="integration">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <circle cx="100" cy="100" r="30" stroke="#fed16b" strokeWidth="2" opacity="0.5"/>
                    <path d="M100 70V100L120 110" stroke="#fed16b" strokeWidth="2" opacity="0.7"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Urban Traffic AI</h3>
                <p className="project-description">Computer vision system for real-time traffic flow optimization, reducing congestion by 35%.</p>
                <div className="project-tags">
                  <span className="project-tag">Computer Vision</span>
                  <span className="project-tag">Machine Learning</span>
                  <span className="project-tag">Smart City</span>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="project-card" data-industry="healthcare" data-technology="nlp ml" data-type="consulting">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <rect x="60" y="80" width="80" height="50" rx="4" stroke="#fed16b" strokeWidth="2" opacity="0.5"/>
                    <line x1="70" y1="95" x2="110" y2="95" stroke="#fed16b" opacity="0.3"/>
                    <line x1="70" y1="105" x2="130" y2="105" stroke="#fed16b" opacity="0.3"/>
                    <line x1="70" y1="115" x2="100" y2="115" stroke="#fed16b" opacity="0.3"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Medical Records NLP</h3>
                <p className="project-description">Automated extraction and analysis of patient data from unstructured medical records using NLP.</p>
                <div className="project-tags">
                  <span className="project-tag">NLP</span>
                  <span className="project-tag">Machine Learning</span>
                  <span className="project-tag">Healthcare</span>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="project-card" data-industry="manufacturing" data-technology="cv dl" data-type="development">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <rect x="70" y="70" width="60" height="60" rx="4" stroke="#fed16b" strokeWidth="2" opacity="0.5"/>
                    <circle cx="100" cy="100" r="15" stroke="#fed16b" strokeWidth="2" opacity="0.7"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Quality Control Vision</h3>
                <p className="project-description">Automated defect detection system achieving 99.2% accuracy in manufacturing quality control.</p>
                <div className="project-tags">
                  <span className="project-tag">Computer Vision</span>
                  <span className="project-tag">Deep Learning</span>
                  <span className="project-tag">Manufacturing</span>
                </div>
              </div>
            </div>

            {/* Project Card 7 */}
            <div className="project-card" data-industry="finance" data-technology="nlp ml" data-type="development">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <circle cx="100" cy="80" r="20" stroke="#fed16b" strokeWidth="2" opacity="0.5"/>
                    <path d="M100 100V130M85 115L100 130L115 115" stroke="#fed16b" strokeWidth="2" opacity="0.5"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Sentiment Analysis Platform</h3>
                <p className="project-description">Real-time market sentiment analysis from news and social media for investment decision support.</p>
                <div className="project-tags">
                  <span className="project-tag">NLP</span>
                  <span className="project-tag">Machine Learning</span>
                  <span className="project-tag">Finance</span>
                </div>
              </div>
            </div>

            {/* Project Card 8 */}
            <div className="project-card" data-industry="retail" data-technology="cv ml" data-type="integration">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <rect x="60" y="60" width="80" height="80" rx="8" stroke="#fed16b" strokeWidth="2" opacity="0.5"/>
                    <path d="M80 100L95 115L120 85" stroke="#fed16b" strokeWidth="3" opacity="0.7"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Smart Checkout System</h3>
                <p className="project-description">Cashier-less checkout using computer vision, reducing wait times by 60% in retail stores.</p>
                <div className="project-tags">
                  <span className="project-tag">Computer Vision</span>
                  <span className="project-tag">Machine Learning</span>
                  <span className="project-tag">Retail</span>
                </div>
              </div>
            </div>

            {/* Project Card 9 - Gait Authentication */}
            <div className="project-card" data-industry="healthcare" data-technology="cv dl" data-type="development">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#2C2C2C"/>
                    <path d="M100 60L100 90M100 90L110 110M100 90L90 110M110 110L110 140M90 110L90 140" stroke="#fed16b" strokeWidth="3" opacity="0.5"/>
                    <circle cx="100" cy="50" r="8" stroke="#fed16b" strokeWidth="2" opacity="0.7"/>
                    <path d="M70 100L130 100" stroke="#fed16b" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Gait Authentication System</h3>
                <p className="project-description">Advanced biometric authentication using gait analysis for neoEYED, providing secure contactless identity verification through walking patterns.</p>
                <div className="project-tags">
                  <span className="project-tag">Computer Vision</span>
                  <span className="project-tag">Deep Learning</span>
                  <span className="project-tag">Biometrics</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-industry="travel-compliance" data-technology="cv ai verification" data-type="development">
  <div className="project-image">
    <div className="project-image-placeholder">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#2C2C2C"/>

  <path 
    d="M100 40L145 60V95C145 125 125 150 100 165C75 150 55 125 55 95V60L100 40Z"
    stroke="#fed16b"
    strokeWidth="2"
    fill="none"
    fillOpacity="0.2"
  />
  <path 
    d="M80 100L95 115L120 85"
    stroke="#fed16b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
  </div>

  <div className="project-content">
    <h3 className="project-title">Digital Identity & Travel Document Verification System</h3>
    <p className="project-description">
      Engineered an AI-driven document and identity verification solution for OnArrival, enabling secure traveler onboarding, automated passport/ID validation, real-time fraud detection, and compliance-ready digital verification workflows.
    </p>

    <div className="project-tags">
      <span className="project-tag">Identity Verification</span>
      <span className="project-tag">Computer Vision</span>
      <span className="project-tag">Travel Compliance</span>
    </div>
  </div>
</div>

          </div>

          {/* No Results Message */}
          <div className="no-results" id="noResults" style={{display: 'none'}}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No projects found</h3>
            <p>Try adjusting your filters to see more results</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
