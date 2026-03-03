// ================================================
// URBAN AI - SCROLL ANIMATIONS & MAP
// ================================================

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sector cards and feature cards
document.addEventListener('DOMContentLoaded', () => {
    // Animate intro card
    const introCard = document.querySelector('.sector-card-intro');
    if (introCard) {
        animateOnScroll.observe(introCard);
    }

    // Animate sector cards
    const sectorCards = document.querySelectorAll('.sector-card');
    sectorCards.forEach(card => {
        animateOnScroll.observe(card);
    });

    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        animateOnScroll.observe(card);
    });

    // Initialize deployment map
    initDeploymentMap();
});

// Deployment Map with Leaflet
function initDeploymentMap() {
    // Check if map container exists
    const mapContainer = document.getElementById('deploymentMap');
    if (!mapContainer) return;

    // Initialize map centered on India with attribution control disabled
    const map = L.map('deploymentMap', {
        attributionControl: false
    }).setView([20.5937, 78.9629], 5);

    // Add modern CartoDB Voyager tile layer (balanced dark theme with better visibility)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '',
        maxZoom: 19,
        subdomains: 'abcd'
    }).addTo(map);

    // Deployment locations data
    const deployments = [
        {
            name: 'Delhi Public School',
            sector: 'Education',
            lat: 28.7041,
            lng: 77.1025,
            address: 'Mathura Road, New Delhi, Delhi 110025',
            deploymentDate: 'Jan 2023'
        },
        {
            name: 'MG Road Traffic Junction',
            sector: 'Traffic Management',
            lat: 12.9716,
            lng: 77.5946,
            address: 'MG Road, Bangalore, Karnataka 560001',
            deploymentDate: 'Mar 2023'
        },
        {
            name: 'Green Valley Apartments',
            sector: 'Residential',
            lat: 19.0760,
            lng: 72.8777,
            address: 'Andheri West, Mumbai, Maharashtra 400053',
            deploymentDate: 'May 2023'
        },
        {
            name: 'Apollo Hospital',
            sector: 'Healthcare',
            lat: 13.0827,
            lng: 80.2707,
            address: 'Greams Road, Chennai, Tamil Nadu 600006',
            deploymentDate: 'Jul 2023'
        },
        {
            name: 'Phoenix Mall',
            sector: 'Commercial',
            lat: 18.5204,
            lng: 73.8567,
            address: 'Viman Nagar, Pune, Maharashtra 411014',
            deploymentDate: 'Sep 2023'
        },
        {
            name: 'Connaught Place',
            sector: 'Traffic Management',
            lat: 28.6315,
            lng: 77.2167,
            address: 'Connaught Place, New Delhi, Delhi 110001',
            deploymentDate: 'Nov 2023'
        },
        {
            name: 'St. Xavier\'s School',
            sector: 'Education',
            lat: 22.5726,
            lng: 88.3639,
            address: 'Park Street, Kolkata, West Bengal 700016',
            deploymentDate: 'Dec 2023'
        },
        {
            name: 'Fortis Hospital',
            sector: 'Healthcare',
            lat: 28.5355,
            lng: 77.3910,
            address: 'Sector 62, Noida, Uttar Pradesh 201301',
            deploymentDate: 'Feb 2024'
        },
        {
            name: 'Banjara Hills Society',
            sector: 'Residential',
            lat: 17.4239,
            lng: 78.4738,
            address: 'Banjara Hills, Hyderabad, Telangana 500034',
            deploymentDate: 'Apr 2024'
        },
        {
            name: 'Sarjapur Road Junction',
            sector: 'Traffic Management',
            lat: 12.9082,
            lng: 77.6976,
            address: 'Sarjapur Road, Bangalore, Karnataka 560035',
            deploymentDate: 'Jun 2024'
        }
    ];

    // Custom icon for markers
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background: #1DE9B6;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 10px rgba(29, 233, 182, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 14px;
        ">📍</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    // Add markers for each deployment
    deployments.forEach(deployment => {
        const marker = L.marker([deployment.lat, deployment.lng], { icon: customIcon })
            .addTo(map);

        // Create popup content
        const popupContent = `
            <div style="
                padding: 12px;
                min-width: 250px;
                font-family: 'Inter', sans-serif;
            ">
                <h3 style="
                    margin: 0 0 8px 0;
                    font-size: 16px;
                    font-weight: 600;
                    color: #1DE9B6;
                ">${deployment.name}</h3>
                <p style="
                    margin: 4px 0;
                    font-size: 13px;
                    color: #666;
                ">
                    <strong>Sector:</strong> ${deployment.sector}
                </p>
                <p style="
                    margin: 4px 0;
                    font-size: 13px;
                    color: #666;
                ">
                    <strong>Address:</strong> ${deployment.address}
                </p>
                <p style="
                    margin: 4px 0;
                    font-size: 12px;
                    color: #999;
                ">
                    <strong>Deployed:</strong> ${deployment.deploymentDate}
                </p>
            </div>
        `;

        marker.bindPopup(popupContent);

        // Show popup on hover
        marker.on('mouseover', function() {
            this.openPopup();
        });

        marker.on('mouseout', function() {
            this.closePopup();
        });
    });

    // Legend removed as per user request
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
