import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

export default function Home() {
  useScrollAnimation();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-main-flex">
            <div className="hero-video-container animate-on-scroll">
              <svg className="hero-svg-logo" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path className="svg-path-1" d="M150,50 H316 Q320,50 320,54 L124,250 Q120,254 124,258 L224,358 Q228,362 224,366 L154,436 Q150,440 146,440 L50,340 V150 Z" />
                  <path className="svg-path-2" d="M350,450 H184 Q180,450 180,446 L376,250 Q380,246 376,242 L276,142 Q272,138 276,134 L346,64 Q350,60 354,60 L450,150 V350 Z" />
                </g>
              </svg>
            </div>
            <div className="hero-text-container">
              <h1 className="hero-title hero-title-impact animate-on-scroll">
                <span className="title-line-1">We Help <span className="title-line-2"><span className="title-accent">CTOs</span></span>Deliver AI That Works</span>
              </h1>
              <p className="hero-subtitle animate-on-scroll">
                Scientist Technologies — Transforming industries with cutting-edge artificial intelligence,
                machine learning, and data-driven solutions since 2016.
              </p>
            </div>
          </div>
          <div className="hero-cta-group animate-on-scroll">
            <a href="#services" className="btn btn-primary" id="heroCtaPrimary">
              <span>Explore Solutions</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#about" className="btn btn-ghost" id="heroCtaSecondary">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="marquee-section company">
        <div className="tech-logos-container">
          <div className="tech-logos-track" id="logoTrack">
            <div className="tech-logo">
              <img src="/assets/images/com-image/loop_health_logo.jpg" alt="Loop Health" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/omind_ai_logo.jpg" alt="Omind AI" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/salt_dental_partners_logo.jpg" alt="Salt Dental Partners" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/shemaroo_entertainment_ltd__logo.jpg" alt="Shemaroo Entertainment" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/tutorful_logo.jpg" alt="Tutorful" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/thinking_hats_consumer_insights__logo.jpg" alt="Thinking Hats" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/riyadh_geotechnique__foundations_logo.jpg" alt="Riyadh Geotechnique" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/onarrival_travel_logo.jpg" alt="OnArrival Travel" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/mersen_logo.jpg" alt="Mersen" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/decathlon_logo.jpg" alt="Decathlon" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/1631335210878.jpg" alt="Company" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/aspirare_recruitment_scotland_logo.jpg" alt="Aspirare Recruitment" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/bayer_logo.jpg" alt="Bayer" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/Christ University.jpg" alt="Christ University" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/gokaldas_exports_limited_logo.jpg" alt="Gokaldas Exports" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/joyson_safety_systems_logo.jpg" alt="Joyson Safety Systems" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/landmark_group_logo.jpg" alt="Landmark Group" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/MTR.jpg" alt="MTR" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/namdhari_seeds_pvt_ltd_logo.jpg" alt="Namdhari Seeds" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/penna_cement_industries_ltd_logo.jpg" alt="Penna Cement" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/Tata Soulfull.jpg" alt="Tata Soulfull" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="tech-logo">
              <img src="/assets/images/com-image/loop_health_logo.jpg" alt="Loop Health" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/omind_ai_logo.jpg" alt="Omind AI" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/salt_dental_partners_logo.jpg" alt="Salt Dental Partners" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/shemaroo_entertainment_ltd__logo.jpg" alt="Shemaroo Entertainment" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/tutorful_logo.jpg" alt="Tutorful" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/thinking_hats_consumer_insights__logo.jpg" alt="Thinking Hats" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/riyadh_geotechnique__foundations_logo.jpg" alt="Riyadh Geotechnique" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/onarrival_travel_logo.jpg" alt="OnArrival Travel" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/mersen_logo.jpg" alt="Mersen" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/decathlon_logo.jpg" alt="Decathlon" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/1631335210878.jpg" alt="Company" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/aspirare_recruitment_scotland_logo.jpg" alt="Aspirare Recruitment" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/bayer_logo.jpg" alt="Bayer" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/Christ University.jpg" alt="Christ University" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/gokaldas_exports_limited_logo.jpg" alt="Gokaldas Exports" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/joyson_safety_systems_logo.jpg" alt="Joyson Safety Systems" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/landmark_group_logo.jpg" alt="Landmark Group" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/MTR.jpg" alt="MTR" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/namdhari_seeds_pvt_ltd_logo.jpg" alt="Namdhari Seeds" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/penna_cement_industries_ltd_logo.jpg" alt="Penna Cement" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/Tata Soulfull.jpg" alt="Tata Soulfull" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/grey_volk_logo.jpg" alt="Grey Volk" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/KDDL logo.jpg" alt="KDDL" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/neoeyed_logo.jpg" alt="Neoeyed" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/nureca_logo.jpg" alt="Nureca" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/pi_industries_ltd_logo.jpg" alt="PI Industries" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/cognecto_logo.jpg" alt="Cognecto" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/wri_india_logo.jpg" alt="WRI India" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/Vocal Urban.jpg" alt="Vocal Urban" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/SCSC.jpg" alt="SCSC" />
            </div>
            <div className="tech-logo">
              <img src="/assets/images/com-image/Compartment S4.jpg" alt="Compartment S4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
