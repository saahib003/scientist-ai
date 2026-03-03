import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Services() {
  useScrollAnimation()
  
  // Tech logo carousel rotation
  useEffect(() => {
    const carouselSections = document.querySelectorAll('.marquee-section:not(.company)')
    
    carouselSections.forEach(section => {
      const sets = section.querySelectorAll('.tech-logos-set')
      if (sets.length === 0) return
      
      let currentIndex = 0
      
      function rotateSets() {
        // Remove active class from current set
        sets[currentIndex].classList.remove('active')
        
        // Move to next set
        currentIndex = (currentIndex + 1) % sets.length
        
        // Add active class to new set
        sets[currentIndex].classList.add('active')
      }
      
      // Rotate every 5 seconds
      const interval = setInterval(rotateSets, 5000)
      
      // Cleanup
      return () => clearInterval(interval)
    })
  }, [])
  
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
            <span>Consulting</span>
          </div>
          <h1 className="hero-title hero-title-impact animate-on-scroll">
            <span className="title-line-1">AI Consulting</span>
            <span className="title-line-2"><span className="title-accent">Services That Transform</span></span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            From strategy to deployment, we provide end-to-end AI solutions that transform your business and drive measurable results.
          </p>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="section service-categories-section" id="service-categories">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Consulting <span className="gradient-text">Offerings</span></h2>
            <p className="section-subtitle">Tailored AI solutions across strategy, development, integration, and analytics</p>
          </div>

          <div className="service-categories-stack">
            {/* AI Strategy & Consulting */}
            <div className="service-category glass-card animate-on-scroll" id="ai-strategy-consulting">
              <div className="service-category-header">
                <div className="service-category-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2"/>
                    <path d="M32 16V32L42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="32" cy="32" r="4" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3>AI Strategy & Consulting</h3>
                  <p className="service-category-subtitle">Strategic guidance to maximize your AI investment</p>
                </div>
              </div>
              <div className="service-category-content">
                <div className="service-offerings-grid">
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>AI Readiness Assessment</h4>
                      <p>Evaluate your organization's AI maturity, infrastructure, and data capabilities to identify opportunities and gaps.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Custom AI Solution Design</h4>
                      <p>Architect tailored AI solutions aligned with your business objectives, technical requirements, and industry standards.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Implementation Roadmap Development</h4>
                      <p>Create phased implementation plans with clear milestones, resource allocation, and risk mitigation strategies.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>ROI Modeling & Optimization</h4>
                      <p>Quantify expected returns, optimize resource allocation, and establish KPIs to measure AI initiative success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom AI Development */}
            <div className="service-category glass-card animate-on-scroll" id="custom-ai-development">
              <div className="service-category-header">
                <div className="service-category-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 28L28 36L44 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3>Custom AI Development</h3>
                  <p className="service-category-subtitle">Build intelligent systems tailored to your needs</p>
                </div>
              </div>
              <div className="service-category-content">
                <div className="service-offerings-grid">
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Machine Learning Model Development</h4>
                      <p>Design and train custom ML models for classification, regression, clustering, and recommendation systems.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Natural Language Processing</h4>
                      <p>Build NLP solutions for sentiment analysis, chatbots, text classification, and language understanding.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Computer Vision Systems</h4>
                      <p>Develop image recognition, object detection, and video analytics solutions for various industries.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Predictive Analytics</h4>
                      <p>Create forecasting models to predict trends, customer behavior, and business outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Integration & Deployment */}
            <div className="service-category glass-card animate-on-scroll" id="ai-integration">
              <div className="service-category-header">
                <div className="service-category-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 8L48 16V32L32 40L16 32V16L32 8Z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="32" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3>AI Integration & Deployment</h3>
                  <p className="service-category-subtitle">Seamlessly integrate AI into your existing systems</p>
                </div>
              </div>
              <div className="service-category-content">
                <div className="service-offerings-grid">
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>System Integration</h4>
                      <p>Connect AI models with your existing infrastructure, databases, and business applications.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Cloud Deployment</h4>
                      <p>Deploy AI solutions on AWS, Azure, or GCP with scalable, secure infrastructure.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Edge AI Solutions</h4>
                      <p>Implement AI at the edge for real-time processing and reduced latency.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>MLOps & Monitoring</h4>
                      <p>Establish continuous integration, deployment, and monitoring for AI systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Engineering & Analytics */}
            <div className="service-category glass-card animate-on-scroll" id="data-engineering">
              <div className="service-category-header">
                <div className="service-category-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="16" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 28L24 36L32 28L40 36L48 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3>Data Engineering & Analytics</h3>
                  <p className="service-category-subtitle">Transform raw data into actionable insights</p>
                </div>
              </div>
              <div className="service-category-content">
                <div className="service-offerings-grid">
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Data Pipeline Development</h4>
                      <p>Build robust ETL pipelines for data collection, transformation, and storage.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Data Quality & Governance</h4>
                      <p>Implement data quality frameworks and governance policies for reliable AI.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Business Intelligence</h4>
                      <p>Create dashboards and reports for data-driven decision making.</p>
                    </div>
                  </div>
                  <div className="service-offering-item">
                    <div className="offering-icon">✓</div>
                    <div>
                      <h4>Big Data Solutions</h4>
                      <p>Process and analyze large-scale datasets with distributed computing frameworks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="marquee-section">
        <div className="section-header animate-on-scroll marque-sec-head">
          <h2 className="section-title">Technology <span className="gradient-text">Stack</span></h2>
          <p className="section-subtitle">Cutting-edge frameworks and platforms we leverage to build world-class AI solutions</p>
        </div>
        <div className="tech-logos-container">
          {/* Set 1: Programming Languages */}
          <div className="tech-logos-set active">
            <div className="tech-logo">
              <img src="/assets/images/logos/python-logo-master-v3-TM.png" alt="Python" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/Typescript_logo_2020.svg.png" alt="TypeScript" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/Java_programming_language_logo.svg.png" alt="Java" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/Go_Logo_Blue.svg" alt="Go" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/React-icon.svg.png" alt="React" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/NodeJS.png" alt="Node.js" />
            </div>
          </div>
          
          {/* Set 2: ML Frameworks */}
          <div className="tech-logos-set">
            <div className="tech-logo">
              <img src="/assets/images/logos/tensorflow.svg" alt="TensorFlow" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/pytorch.svg" alt="PyTorch" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/opencv.svg" alt="OpenCV" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/onnx.svg" alt="ONNX" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/paddlepaddle.svg" alt="PaddlePaddle" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/ray.svg" alt="Ray" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/dask.svg" alt="Dask" />
            </div>
          </div>
          
          {/* Set 3: Cloud Platforms */}
          <div className="tech-logos-set">
            <div className="tech-logo">
              <img src="/assets/images/logos/Amazon_Web_Services_Logo.svg.webp" alt="AWS" />
            </div>
            {/* <div className="tech-logo">
              <img src="/assets/images/logos/Azure.jpg" alt="Microsoft Azure" />
            </div> */}
            <div className="tech-logo">
              <img src="/assets/images/logos/googlecloud.svg" alt="Google Cloud" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/alibabacloud.svg" alt="Alibaba Cloud" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/digitalocean.svg" alt="DigitalOcean" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/vultr.svg" alt="Vultr" />
            </div>
          </div>

          {/* Set 4: AI APIs & LLMs */}
          <div className="tech-logos-set">
            <div className="tech-logo">
              <img src="/assets/images/logos/chatbot.svg" alt="OpenAI" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/claude.svg" alt="Anthropic Claude" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/mistralai.svg" alt="Mistral AI" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/perplexity.svg" alt="Perplexity" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/replicate.svg" alt="Replicate" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/langchain.svg" alt="LangChain" />
            </div>
          </div>

          {/* Set 5: MLOps & Orchestration */}
          <div className="tech-logos-set">
            <div className="tech-logo">
              <img src="/assets/images/logos/docker.svg" alt="Docker" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/kuber.svg" alt="Kubernetes" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/mlflow.svg" alt="MLflow" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/bentoml.svg" alt="BentoML" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/apacheairflow.svg" alt="Apache Airflow" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/prefect.svg" alt="Prefect" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/argo.svg" alt="Argo" />
            </div>
          </div>

          {/* Set 6: DevOps & Infrastructure */}
          <div className="tech-logos-set">
            <div className="tech-logo">
              <img src="/assets/images/logos/jenkins.svg" alt="Jenkins" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/terraform.svg" alt="Terraform" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/Git_icon.svg.png" alt="Git" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/selenium.svg" alt="Selenium" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/neptune.svg" alt="Neptune" />
            </div>
          </div>

          {/* Set 7: Frameworks & Databases */}
          <div className="tech-logos-set">
            <div className="tech-logo">
              <img src="/assets/images/logos/django-logo-negative.1d528e2cb5fb.png" alt="Django" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/fastapi.svg" alt="FastAPI" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/Postgresql_elephant.svg.png" alt="PostgreSQL" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/MongoDB_Logo.svg.png" alt="MongoDB" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/apachecouchdb.svg" alt="CouchDB" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/logos/Jupyter_logo.svg.png" alt="Jupyter" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card glass-card animate-on-scroll">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Let's discuss how our AI consulting can drive innovation and growth for your organization.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Get Started</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-ghost">
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
