import { useEffect, useRef } from 'react'

const companyLogos = [
  { src: '/assets/images/com-image/loop_health_logo.jpg', alt: 'Loop Health' },
  { src: '/assets/images/com-image/omind_ai_logo.jpg', alt: 'Omind AI' },
  { src: '/assets/images/com-image/salt_dental_partners_logo.jpg', alt: 'Salt Dental Partners' },
  { src: '/assets/images/com-image/shemaroo_entertainment_ltd__logo.jpg', alt: 'Shemaroo Entertainment' },
  { src: '/assets/images/com-image/tutorful_logo.jpg', alt: 'Tutorful' },
  { src: '/assets/images/com-image/thinking_hats_consumer_insights__logo.jpg', alt: 'Thinking Hats' },
  { src: '/assets/images/com-image/riyadh_geotechnique__foundations_logo.jpg', alt: 'Riyadh Geotechnique' },
  { src: '/assets/images/com-image/onarrival_travel_logo.jpg', alt: 'OnArrival Travel' },
  { src: '/assets/images/com-image/mersen_logo.jpg', alt: 'Mersen' },
  { src: '/assets/images/com-image/decathlon_logo.jpg', alt: 'Decathlon' },
  { src: '/assets/images/com-image/1631335210878.jpg', alt: 'Company' },
  { src: '/assets/images/com-image/aspirare_recruitment_scotland_logo.jpg', alt: 'Aspirare Recruitment' },
  { src: '/assets/images/com-image/bayer_logo.jpg', alt: 'Bayer' },
  { src: '/assets/images/com-image/Christ University.jpg', alt: 'Christ University' },
  { src: '/assets/images/com-image/gokaldas_exports_limited_logo.jpg', alt: 'Gokaldas Exports' },
  { src: '/assets/images/com-image/joyson_safety_systems_logo.jpg', alt: 'Joyson Safety Systems' },
  { src: '/assets/images/com-image/landmark_group_logo.jpg', alt: 'Landmark Group' },
  { src: '/assets/images/com-image/MTR.jpg', alt: 'MTR' },
  { src: '/assets/images/com-image/namdhari_seeds_pvt_ltd_logo.jpg', alt: 'Namdhari Seeds' },
  { src: '/assets/images/com-image/penna_cement_industries_ltd_logo.jpg', alt: 'Penna Cement' },
  { src: '/assets/images/com-image/Tata Soulfull.jpg', alt: 'Tata Soulfull' },
  { src: '/assets/images/com-image/grey_volk_logo.jpg', alt: 'Grey Volk' },
  { src: '/assets/images/com-image/KDDL logo.jpg', alt: 'KDDL' },
  { src: '/assets/images/com-image/neoeyed_logo.jpg', alt: 'Neoeyed' },
  { src: '/assets/images/com-image/nureca_logo.jpg', alt: 'Nureca' },
  { src: '/assets/images/com-image/pi_industries_ltd_logo.jpg', alt: 'PI Industries' },
  { src: '/assets/images/com-image/cognecto_logo.jpg', alt: 'Cognecto' },
  { src: '/assets/images/com-image/wri_india_logo.jpg', alt: 'WRI India' },
  { src: '/assets/images/com-image/Vocal Urban.jpg', alt: 'Vocal Urban' },
  { src: '/assets/images/com-image/SCSC.jpg', alt: 'SCSC' },
  { src: '/assets/images/com-image/Compartment S4.jpg', alt: 'Compartment S4' },
]

function LogoMarquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Clone logos for seamless loop
    const logos = Array.from(track.children)
    logos.forEach(logo => {
      const clone = logo.cloneNode(true)
      track.appendChild(clone)
    })
  }, [])

  return (
    <section className="marquee-section company">
      <div className="tech-logos-container">
        <div className="tech-logos-track" id="logoTrack" ref={trackRef}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="tech-logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
