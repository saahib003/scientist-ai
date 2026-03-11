import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

function UrbanAI() {
  useScrollAnimation()
  
  // Add urban-ai-page class to body for navbar styling
  useEffect(() => {
    document.body.classList.add('urban-ai-page')
    
    return () => {
      document.body.classList.remove('urban-ai-page')
    }
  }, [])
  
  // Initialize map on component mount
  useEffect(() => {
    initializeMap()
  }, [])

  const initializeMap = () => {
    // Wait for Leaflet to be available
    if (typeof window.L === 'undefined') {
      setTimeout(initializeMap, 100)
      return
    }

    const mapElement = document.getElementById('deploymentMap')
    if (!mapElement || mapElement._leaflet_id) return

    const map = window.L.map('deploymentMap').setView([20.5937, 78.9629], 5)
    
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    const deployments = [
      { name: 'Delhi NCR', coords: [28.6139, 77.2090], sector: 'Traffic Management', address: 'Connaught Place, New Delhi, Delhi 110001' },
      { name: 'Mumbai', coords: [19.0760, 72.8777], sector: 'Smart City', address: 'Bandra Kurla Complex, Mumbai, Maharashtra 400051' },
      { name: 'Bangalore', coords: [12.9716, 77.5946], sector: 'Construction Safety', address: 'Whitefield, Bangalore, Karnataka 560066' },
      { name: 'Hyderabad', coords: [17.3850, 78.4867], sector: 'Industrial Safety', address: 'HITEC City, Hyderabad, Telangana 500081' },
      { name: 'Chennai', coords: [13.0827, 80.2707], sector: 'Transportation Hub', address: 'Anna Salai, Chennai, Tamil Nadu 600002' },
      { name: 'Gopalganj-Kotwa, Bihar', coords: [26.517928, 84.368472], sector: 'Highway Safety', address: 'KM 375+900 Gopalganj-Kotwa, NH27, Bihar' },
      { name: 'Hyderabad-Nizamabad, Telangana', coords: [18.508611, 78.216944], sector: 'Highway Safety', address: 'KM 354 Hyderabad-Nizamabad, NH44, Telangana' },
      { name: 'Karhadwadi, Maharashtra', coords: [20.204752, 76.708152], sector: 'Highway Safety', address: 'Karhadwadi, Mehkar, Samruddhi Mahamarg, Maharashtra' },
      { name: 'JBS School Junction, Prayagraj', coords: [25.14933844, 81.7651696], sector: 'Impact Assessment', address: 'JBS School Junction, Prayagraj, Uttar Pradesh (FY 2025-26)' },
      { name: 'LP School, Boragaon, Guwahati', coords: [26.1433, 91.7898], sector: 'Impact Assessment', address: 'LP School, Boragaon, NH-27, Guwahati, Assam (FY 2025-26)' },
      { name: 'Umred Bypass, Nagpur', coords: [20.841765297214117, 79.32246155139345], sector: 'Impact Assessment', address: 'Umred Bypass, Nagpur District, Maharashtra (FY 2025-26)' }
    ]

    deployments.forEach(deployment => {
      const marker = window.L.marker(deployment.coords)
        .addTo(map)
      
      // Bind popup for click
      marker.bindPopup(`
        <div class="map-popup-card">
          <h3 class="map-popup-title">${deployment.name}</h3>
          <p class="map-popup-sector">${deployment.sector}</p>
          <p class="map-popup-address">${deployment.address}</p>
        </div>
      `)
      
      // Bind tooltip for hover
      marker.bindTooltip(`
        <div class="map-tooltip-card">
          <h4 class="map-tooltip-title">${deployment.name}</h4>
          <p class="map-tooltip-sector">${deployment.sector}</p>
          <p class="map-tooltip-address">${deployment.address}</p>
        </div>
      `, {
        permanent: false,
        direction: 'top',
        offset: [0, -10],
        className: 'custom-tooltip'
      })
    })
  }
  
  return (
    <main className="urban-ai-page">
      {/* Hero Section */}
      <section className="urban-hero">
        <div className="urban-hero-bg">
          <img src="/assets/urban-ai-assets/background-image.avif" alt="Urban AI Background" className="urban-hero-bg-img" />
          <div className="urban-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="urban-hero-content">
            <div className="urban-hero-logo-container">
              <img src="/assets/urban-ai-assets/icons/urban ai logo.avif" alt="Urban AI" className="urban-hero-logo" />
            </div>
            <h2 className="urban-hero-subtitle">Safety and Security for Everyone</h2>
            <p className="urban-hero-description">
              AI-powered surveillance and analytics transforming safety across schools, roads, hospitals, and communities
            </p>
            <div className="urban-hero-cta">
              <a href="#contact-section" className="urban-btn urban-btn-primary">Request Demo</a>
              <a href="#how-it-works" className="urban-btn urban-btn-ghost">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="urban-stats">
        <div className="container">
          <div className="urban-stats-grid">
            <div className="urban-stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Active Deployments</div>
            </div>
            <div className="urban-stat-card">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Hours Monitored</div>
            </div>
            <div className="urban-stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Incidents Prevented</div>
            </div>
            <div className="urban-stat-card">
              <div className="stat-number">90%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="urban-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive Safety Features</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card slide-up">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Real-Time Monitoring</h3>
              <p>24/7 surveillance with instant threat detection and response</p>
            </div>
            <div className="feature-card slide-up">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Predictive Analytics</h3>
              <p>AI-powered predictions to prevent incidents before they occur</p>
            </div>
            <div className="feature-card slide-up">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>Instant Alerts</h3>
              <p>Multi-channel notifications via SMS, email, and mobile app</p>
            </div>
            <div className="feature-card slide-up">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3>Secure Data Storage</h3>
              <p>Encrypted cloud storage with customizable retention policies</p>
            </div>
            <div className="feature-card slide-up">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3>Advanced Analytics</h3>
              <p>Detailed reports and insights for data-driven decisions</p>
            </div>
            <div className="feature-card slide-up">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>Easy Integration</h3>
              <p>Works with existing camera infrastructure and systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Applications */}
      <section className="urban-sectors">
        <div className="container">
          <h2 className="urban-section-title">AI-Powered Video Analytics Across All Sectors</h2>
          <p className="sectors-intro">
            Urban AI analyzes video data in real-time to provide actionable insights for safety and security. Our AI transforms raw footage into meaningful intelligence, helping organizations make data-driven decisions across diverse environments.
          </p>

          {/* Card 1: Schools - Left Content, Right Image */}
          <div className="sector-card slide-from-left animate-on-scroll">
            <div className="sector-content">
              {/* <div className="sector-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  <path d="M9 6h6"></path>
                  <path d="M9 9h6"></path>
                </svg>
              </div> */}
              <h3 className="sector-title">Schools & Educational Institutions</h3>
              <p className="sector-description">
                Analyze classroom interactions to evaluate teaching effectiveness and student engagement. Our AI models process video data to understand instructional patterns, measure student response, and generate actionable insights that help improve learning outcomes and teaching quality.
              </p>
              <ul className="sector-features">
                <li>Analyzes teacher instructional style and engagement</li>
                {/* <li>Detects student attention, interaction, and comprehension</li> */}
                <li>Measures teaching effectiveness using behavioral signals</li>
                <li>Generates data-driven insights to improve learning outcomes</li>
                <li>Provides objective scoring of teaching performance</li>
              </ul>
            </div>
            <div className="sector-media">
              <video className="sector-video" autoPlay loop muted playsInline>
                <source src="/assets/videos/schoolClassRoom.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-logo-overlay">
                <img src="/assets/images/favicon.png" alt="Scientist Technologies" className="video-logo" />
              </div>
            </div>
          </div>

          {/* Card 2: Roads - Right Content, Left Video */}
          <div className="sector-card sector-card-reverse slide-from-right animate-on-scroll">
            <div className="sector-media">
              <video className="sector-video" autoPlay loop muted playsInline>
                <source src="/assets/videos/RoadSafety.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-logo-overlay">
                <img src="/assets/images/favicon.png" alt="Scientist Technologies" className="video-logo" />
              </div>
            </div>
            <div className="sector-content">
              {/* <div className="sector-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  <path d="M8 3h8"></path>
                  <path d="M3 8h18"></path>
                </svg>
              </div> */}
              <h3 className="sector-title">Roads & Traffic Management</h3>
              <p className="sector-description">
                Transform traffic video into actionable intelligence. Our AI analyzes vehicle movements, identifies near-miss events, and generates comprehensive reports to help authorities optimize traffic flow and prevent accidents.
              </p>
              <ul className="sector-features">
                <li>Near-miss incident analysis & reporting</li>
                <li>Traffic flow data visualization</li>
                <li>Violation pattern identification</li>
                <li>Predictive analytics for accident prevention</li>
                <li>Real-time dashboard for traffic authorities</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Residential - Left Content, Right Image */}
          <div className="sector-card slide-from-left animate-on-scroll">
            <div className="sector-content">
              {/* <div className="sector-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  <circle cx="12" cy="8" r="1"></circle>
                </svg>
              </div> */}
              <h3 className="sector-title">Residential Societies & Communities</h3>
              <p className="sector-description">
                Convert surveillance footage into meaningful security insights. Our AI analyzes visitor patterns, monitors perimeter activity, and provides residents with detailed reports and alerts for informed decision-making.
              </p>
              <ul className="sector-features">
                <li>Visitor pattern analysis & logs</li>
                <li>Perimeter breach detection & reporting</li>
                <li>Activity trend analysis</li>
                <li>Automated security reports</li>
                <li>24/7 monitoring with instant notifications</li>
              </ul>
            </div>
            <div className="sector-media">
              <video className="sector-video" autoPlay loop muted playsInline>
                <source src="/assets/videos/HouseVideo_Com.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-logo-overlay">
                <img src="/assets/images/favicon.png" alt="Scientist Technologies" className="video-logo" />
              </div>
            </div>
          </div>

          {/* Card 4: Hospitals - Right Content, Left Image */}
          <div className="sector-card sector-card-reverse slide-from-right animate-on-scroll">
            <div className="sector-media">
              <video className="sector-video" autoPlay loop muted playsInline>
                <source src="/assets/videos/hospital_com.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-logo-overlay">
                <img src="/assets/images/favicon.png" alt="Scientist Technologies" className="video-logo" />
              </div>
            </div>
            <div className="sector-content">
              {/* <div className="sector-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                </svg>
              </div> */}
              <h3 className="sector-title">Hospitals & Healthcare Facilities</h3>
              <p className="sector-description">
                Analyze healthcare facility video data to enhance patient safety and operational efficiency. Our AI processes footage to identify access violations, track movement patterns, and generate compliance reports.
              </p>
              <ul className="sector-features">
                <li>Patient movement analysis & alerts</li>
                <li>Restricted area access monitoring</li>
                <li>Emergency event detection & logging</li>
                <li>Staff workflow optimization insights</li>
                <li>HIPAA-compliant data handling</li>
              </ul>
            </div>
          </div>

          {/* Card 5: Commercial - Left Content, Right Image */}
          <div className="sector-card slide-from-left animate-on-scroll">
            <div className="sector-content">
              {/* <div className="sector-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div> */}
              <h3 className="sector-title">Commercial & Retail Spaces</h3>
              <p className="sector-description">
                Extract valuable business intelligence from retail video data. Our AI analyzes customer behavior, monitors crowd density, and generates actionable insights to optimize operations and enhance security.
              </p>
              <ul className="sector-features">
                <li>Customer behavior analytics & heatmaps</li>
                <li>Crowd density analysis & forecasting</li>
                <li>Theft pattern identification</li>
                <li>Operational efficiency reports</li>
                <li>ROI-driven insights for business growth</li>
              </ul>
            </div>
            <div className="sector-media">
              <video className="sector-video" autoPlay loop muted playsInline>
                <source src="/assets/videos/industries_Com.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-logo-overlay">
                <img src="/assets/images/favicon.png" alt="Scientist Technologies" className="video-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="urban-how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How it Works</h2>
          </div>
          <div className="how-it-works-grid">
            <div className="how-step">
              <div className="step-icon">
                <img src="/assets/urban-ai-assets/icons/camera.avif" alt="Camera Integration" />
              </div>
              <h3>Camera Integration</h3>
              <p>Connect existing CCTV cameras or install new AI-enabled cameras</p>
            </div>
            <div className="how-step">
              <div className="step-icon">
                <img src="/assets/urban-ai-assets/icons/Ai.avif" alt="AI Analysis" />
              </div>
              <h3>AI Analysis</h3>
              <p>Real-time video analysis using advanced computer vision algorithms</p>
            </div>
            <div className="how-step">
              <div className="step-icon">
                <img src="/assets/urban-ai-assets/icons/timer-image.avif" alt="Instant Alerts" />
              </div>
              <h3>Instant Alerts</h3>
              <p>Automated alerts sent to security teams for immediate action</p>
            </div>
            <div className="how-step">
              <div className="step-icon">
                <img src="/assets/urban-ai-assets/icons/brain-confusion.avif" alt="Continuous Learning" />
              </div>
              <h3>Continuous Learning</h3>
              <p>AI models improve over time, adapting to your specific environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Map */}
      <section className="urban-map-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Urban AI Deployments</h2>
            <p className="section-subtitle">Protecting communities across multiple cities and sectors</p>
          </div>
          <div id="deploymentMap" className="deployment-map"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="urban-cta" id="contact-section">
        <div className="container">
          <div className="urban-cta-content">
            <h2>Ready to Make Your Space Safer?</h2>
            <p>Get in touch with our team to schedule a demo and see Urban AI in action</p>
            <div className="urban-cta-buttons">
              <Link to="/contact" className="urban-btn urban-btn-primary">Contact Us</Link>
              <a href="http://www.geturbanai.com" target="_blank" rel="noopener noreferrer" className="urban-btn urban-btn-ghost">Visit Urban AI Website</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UrbanAI
