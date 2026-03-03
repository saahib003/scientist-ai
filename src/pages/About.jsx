import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About() {
  useScrollAnimation();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero team-hero" id="about-hero">
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
            <span>About Us</span>
          </div>
          <h1 className="hero-title hero-title-impact animate-on-scroll">
            <span className="title-line-1">Pioneering AI Innovation</span>
            <span className="title-line-2"><span className="title-accent">Since 2016</span></span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            Transforming industries with cutting-edge artificial intelligence, machine learning, and data-driven solutions.
          </p>
        </div>
      </section>

      {/* CEO's Journey Section */}
      <section className="section" id="ceo-journey">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">The <span className="gradient-text">Journey</span></h2>
            <p className="section-subtitle">From vision to reality - How Scientist Technologies came to be</p>
          </div>

          <div className="ceo-journey-content">
            <div className="ceo-video-container glass-card animate-on-scroll">
              <div className="video-placeholder">
                <div className="video-wrapper">
                  <div className="video-thumb">
                    <img src="/assets/images/team/Anurag_Image.jpg" alt="Anurag Pyriyadarshi - CEO" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
                    {/* Video play button - commented out for future use
                    <div className="play-button">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="32" fill="rgba(254, 209, 107, 0.2)"/>
                        <path d="M26 20L44 32L26 44V20Z" fill="#fed16b"/>
                      </svg>
                    </div>
                    */}
                  </div>
                  <p className="video-caption">Message from our CEO, Anurag Pyriyadarshi</p>
                </div>
              </div>
            </div>

            <div className="ceo-story-text animate-on-scroll">
              <h3>Why We Started</h3>
              <p>In 2016, we saw a gap in the market - businesses struggling to harness the true power of artificial intelligence. We founded Scientist Technologies with a simple mission: make AI accessible, practical, and transformative for organizations of all sizes.</p>
              
              <h3>Early Challenges</h3>
              <p>The journey wasn't easy. We faced skepticism about AI's practical applications, technical hurdles in deploying complex models, and the challenge of building a team that could bridge the gap between cutting-edge research and real-world business needs.</p>
              
              <h3>Our AI Philosophy</h3>
              <p>We believe AI should augment human intelligence, not replace it. Our approach focuses on creating solutions that empower teams, enhance decision-making, and drive measurable business outcomes while maintaining ethical standards and transparency.</p>
              
              <h3>Future Vision</h3>
              <p>Looking ahead, we're committed to pushing the boundaries of what's possible with AI. From advanced natural language processing to computer vision and beyond, we're building the future of intelligent systems that will shape industries for decades to come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="section timeline-section" id="timeline">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Company <span className="gradient-text">Timeline</span></h2>
            <p className="section-subtitle">A decade of innovation, growth, and impact</p>
          </div>

          <div className="horizontal-timeline">
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year-wrapper">
                <span className="timeline-year">2016</span>
              </div>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content-card">
                <h3>The Beginning</h3>
                <p>Scientist Technologies founded with a vision to democratize AI. Launched our first machine learning projects.</p>
              </div>
            </div>

            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year-wrapper">
                <span className="timeline-year">2017-2019</span>
              </div>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content-card">
                <h3>Rapid Growth</h3>
                <p>Major client acquisitions across multiple industries. Expanded service offerings to NLP and computer vision.</p>
              </div>
              
            </div>

            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year-wrapper">
                <span className="timeline-year">2020</span>
              </div>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content-card">
                <h3>Urban AI Launch</h3>
                <p>Revolutionary breakthrough with Urban AI – leveraging advanced computer vision to make multiple sectors safer and more secure through intelligent video analytics.</p>
              </div>
            </div>

            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year-wrapper">
                <span className="timeline-year">2020-2023</span>
              </div>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content-card">
                <h3>Innovation & Expansion</h3>
                <p>Pioneered new AI domains including generative AI and edge computing. 100+ enterprise clients.</p>
              </div>
            </div>

            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year-wrapper">
                <span className="timeline-year">2023-Present</span>
              </div>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content-card">
                <h3>Leading the Future</h3>
                <p>Building next-generation intelligent systems that will define the future of technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission Section */}
      <section className="section values-section" id="values">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">What <span className="gradient-text">Drives Us</span></h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            <div className="value-card glass-card animate-on-scroll" id="value-innovation">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 12V20M32 44V52M12 32H20M44 32H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.3"/>
                </svg>
                <h3>Innovation</h3>
              </div>
              
              <p>Pushing boundaries in AI technology. We constantly explore new frontiers, experiment with cutting-edge techniques, and challenge conventional thinking to deliver breakthrough solutions.</p>
              <ul className="value-details">
                <li>Continuous R&D investment</li>
                <li>Collaboration with research institutions</li>
                <li>Early adoption of emerging technologies</li>
              </ul>
            </div>

            <div className="value-card glass-card animate-on-scroll" id="value-excellence">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8L38 26H56L42 38L48 56L32 44L16 56L22 38L8 26H26L32 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.3"/>
                </svg>
                <h3>Excellence</h3>
              </div>
              
              <p>Delivering world-class solutions. Every project receives our full commitment to quality, precision, and outstanding results that exceed expectations.</p>
              <ul className="value-details">
                <li>Rigorous quality assurance</li>
                <li>Expert team of AI specialists</li>
                <li>Best practices and methodologies</li>
              </ul>
            </div>

            <div className="value-card glass-card animate-on-scroll" id="value-partnership">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="44" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 48C12 40 16 36 20 36C24 36 28 40 28 48" stroke="currentColor" strokeWidth="2"/>
                  <path d="M36 48C36 40 40 36 44 36C48 36 52 40 52 48" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3>Partnership</h3>
              </div>
              
              <p>Collaborative approach with clients. We work alongside your team as trusted partners, ensuring alignment with your goals and fostering long-term relationships.</p>
              <ul className="value-details">
                <li>Client-centric methodology</li>
                <li>Transparent communication</li>
                <li>Knowledge transfer and training</li>
              </ul>
            </div>

            <div className="value-card glass-card animate-on-scroll" id="value-impact">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 40L24 32L32 36L40 28L48 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="48" cy="32" r="4" fill="currentColor"/>
                  <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3>Impact</h3>
              </div>
              
              <p>Creating measurable business value through AI. We focus on delivering tangible results that drive growth, efficiency, and competitive advantage for our clients.</p>
              <ul className="value-details">
                <li>ROI-focused solutions</li>
                <li>Performance metrics and tracking</li>
                <li>Scalable implementations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section approach-details-section" id="approach-details">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">How We <span className="gradient-text">Work</span></h2>
            <p className="section-subtitle">Deep dive into our methodology and philosophy</p>
          </div>

          <div className="approach-details-stack">
            <div className="approach-detail glass-card animate-on-scroll" id="problem-solvers">
              <div className="approach-detail-header">
                <div className="approach-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" stroke="url(#grad1)" strokeWidth="2" />
                    <path d="M16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="4" fill="url(#grad1)" />
                    <defs>
                      <linearGradient id="grad1" x1="4" y1="4" x2="44" y2="44">
                        <stop stopColor="#00F5D4" />
                        <stop offset="1" stopColor="#7B61FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3>Problem Solvers, Future Shapers</h3>
                </div>
              </div>
              <div className="approach-detail-content">
                <p className="lead-text">We don't just implement AI - we solve complex business challenges and create new opportunities for growth.</p>
                
                <h4>Our Problem-Solving Framework</h4>
                <ul>
                  <li><strong>Deep Discovery:</strong> We start by understanding your business, challenges, and goals at a fundamental level</li>
                  <li><strong>Strategic Analysis:</strong> Identify where AI can create the most value and impact</li>
                  <li><strong>Custom Solutions:</strong> Design tailored AI systems that address your specific needs</li>
                  <li><strong>Iterative Refinement:</strong> Continuously improve and optimize based on real-world performance</li>
                </ul>

                <h4>Industries We Transform</h4>
                <div className="industry-tags">
                  <span className="tag">Smart Cities</span>
                  <span className="tag">Healthcare</span>
                  <span className="tag">Finance</span>
                  <span className="tag">Retail</span>
                  <span className="tag">Manufacturing</span>
                  <span className="tag">Transportation</span>
                </div>
              </div>
            </div>

            <div className="approach-detail glass-card animate-on-scroll" id="data-driven">
              <div className="approach-detail-header">
                <div className="approach-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="32" height="32" rx="8" stroke="url(#grad2)" strokeWidth="2" />
                    <path d="M16 28L22 22L26 26L32 20" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="32" cy="20" r="3" fill="url(#grad2)" />
                    <defs>
                      <linearGradient id="grad2" x1="8" y1="8" x2="40" y2="40">
                        <stop stopColor="#FF6B6B" />
                        <stop offset="1" stopColor="#FFE66D" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3>Data-Driven Excellence</h3>
                </div>
              </div>
              <div className="approach-detail-content">
                <p className="lead-text">Every decision backed by data, every solution validated by results.</p>
                
                <h4>Our Data Philosophy</h4>
                <ul>
                  <li><strong>Quality First:</strong> Clean, relevant data is the foundation of effective AI</li>
                  <li><strong>Ethical Handling:</strong> Privacy, security, and compliance in every project</li>
                  <li><strong>Actionable Insights:</strong> Transform raw data into strategic business intelligence</li>
                  <li><strong>Continuous Learning:</strong> Models that improve over time with new data</li>
                </ul>

                <h4>Measurable Outcomes</h4>
                <div className="outcome-stats">
                  <div className="stat-box">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">40%</span>
                    <span className="stat-label">Avg. Efficiency Gain</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="approach-detail glass-card animate-on-scroll" id="scalable-systems">
              <div className="approach-detail-header">
                <div className="approach-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8L38 16V32L24 40L10 32V16L24 8Z" stroke="url(#grad3)" strokeWidth="2" />
                    <path d="M24 8V40M10 16L38 32M38 16L10 32" stroke="url(#grad3)" strokeWidth="1" opacity="0.5" />
                    <circle cx="24" cy="24" r="6" stroke="url(#grad3)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="grad3" x1="10" y1="8" x2="38" y2="40">
                        <stop stopColor="#00B4D8" />
                        <stop offset="1" stopColor="#90E0EF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3>Scalable AI Systems</h3>
                </div>
              </div>
              <div className="approach-detail-content">
                <p className="lead-text">Built for today, designed for tomorrow. Our AI systems grow with your business.</p>
                
                <h4>Scalability Principles</h4>
                <ul>
                  <li><strong>Cloud-Native Architecture:</strong> Leverage modern cloud infrastructure for flexibility</li>
                  <li><strong>Modular Design:</strong> Components that can be updated independently</li>
                  <li><strong>Performance Optimization:</strong> Efficient algorithms that handle growing data volumes</li>
                  <li><strong>Future-Proof Technology:</strong> Built on standards that evolve with the industry</li>
                </ul>

                <h4>Deployment Options</h4>
                <div className="deployment-options">
                  <div className="option-card">
                    <h5>Cloud</h5>
                    <p>Scalable, managed infrastructure</p>
                  </div>
                  <div className="option-card">
                    <h5>On-Premise</h5>
                    <p>Full control and security</p>
                  </div>
                  <div className="option-card">
                    <h5>Hybrid</h5>
                    <p>Best of both worlds</p>
                  </div>
                  <div className="option-card">
                    <h5>Edge</h5>
                    <p>Real-time processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
