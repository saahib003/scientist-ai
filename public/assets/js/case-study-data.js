// Case Study Data
const caseStudies = {
    'ai-diagnostic': {
        title: 'AI-Powered Medical Diagnostics',
        subtitle: 'Revolutionizing Healthcare with Deep Learning',
        metrics: [
            { icon: '🎯', value: '95%', label: 'Accuracy' },
            { icon: '⏱️', value: '60%', label: 'Time Saved' },
            { icon: '👥', value: '50K+', label: 'Patients Served' }
        ],
        summary: {
            client: 'Global Healthcare Network',
            industry: 'Healthcare',
            technologies: ['TensorFlow', 'PyTorch', 'Computer Vision', 'Deep Learning'],
            duration: '8 months',
            teamSize: '6 engineers'
        },
        scqa: {
            situation: {
                title: 'The Context',
                intro: 'A leading global healthcare network operating 20+ medical facilities was processing over 1,000 medical imaging cases daily using traditional manual diagnostic methods.',
                cards: [
                    { icon: '🏥', title: 'Healthcare Network', description: '20+ facilities across multiple regions serving diverse patient populations' },
                    { icon: '📊', title: 'Daily Volume', description: '1,000+ medical images requiring expert analysis and diagnosis' },
                    { icon: '👨‍⚕️', title: 'Manual Process', description: 'Traditional diagnostic workflow relying entirely on human expertise' },
                    { icon: '⏰', title: 'Time Pressure', description: 'Growing patient demand with limited specialist availability' }
                ]
            },
            complication: {
                title: 'The Challenge',
                intro: 'The manual diagnostic process was creating critical bottlenecks. Radiologists spent 2-3 hours analyzing each case, leading to delayed diagnoses and increased patient risk.',
                cards: [
                    { number: '01', title: 'Time Bottleneck', description: '2-3 hours per case analysis time creating massive backlogs and delayed patient care' },
                    { number: '02', title: 'Accuracy Issues', description: '22% false negative rate in early detection, missing critical conditions' },
                    { number: '03', title: 'Resource Shortage', description: 'Critical shortage of specialized radiologists unable to meet growing demand' },
                    { number: '04', title: 'Quality Variance', description: 'Inconsistent diagnostic quality across different facilities and specialists' }
                ]
            },
            question: {
                title: 'The Questions',
                intro: 'The healthcare network needed to address fundamental questions about scaling their diagnostic capabilities while maintaining or improving quality standards.',
                cards: [
                    { icon: '❓', title: 'Reduce Time?', description: 'How can we dramatically reduce diagnostic time without sacrificing accuracy?' },
                    { icon: '❓', title: 'Improve Accuracy?', description: 'How can we improve accuracy rates and reduce false negatives?' },
                    { icon: '❓', title: 'Scale Capacity?', description: 'How can we scale diagnostic capacity without hiring more specialists?' }
                ]
            },
            answer: {
                title: 'The Solution',
                intro: 'We developed an AI-powered diagnostic system using deep learning and computer vision, trained on over 1 million medical images. The system provides real-time analysis with 95% accuracy while reducing diagnostic time by 94%.',
                cards: [
                    { icon: '🧠', title: 'Deep Learning Architecture', description: 'Custom convolutional neural networks optimized for medical imaging analysis' },
                    { icon: '⚡', title: 'Real-time Processing', description: 'Sub-second inference time providing immediate diagnostic support' },
                    { icon: '🔍', title: 'Explainable AI', description: 'Visual heatmaps showing model decision-making process' },
                    { icon: '🎯', title: '95% Accuracy', description: 'Achieved 95% diagnostic accuracy, significantly outperforming baseline' }
                ]
            }
        },
        results: {
            comparison: [
                { label: 'Diagnostic Accuracy', before: '78%', after: '95%', improvement: '+17% improvement' },
                { label: 'Analysis Time', before: '2.5 hrs', after: '15 min', improvement: '-94% faster' },
                { label: 'Cost per Diagnosis', before: '$250', after: '$50', improvement: '-80% cost reduction' }
            ],
            impact: 'Processed over 50,000 patient cases with 95% accuracy, reducing diagnostic time by 94% and enabling early detection of critical conditions. The system is now deployed across 20 healthcare facilities, serving millions of patients annually.'
        }
    },
    'fraud-detection': {
        title: 'Fraud Detection Engine',
        subtitle: 'Real-time Transaction Monitoring with Machine Learning',
        metrics: [
            { icon: '🛡️', value: '78%', label: 'Fraud Reduction' },
            { icon: '⚡', value: '<1s', label: 'Response Time' },
            { icon: '💰', value: '$5M+', label: 'Saved Annually' }
        ],
        summary: {
            client: 'Global Financial Institution',
            industry: 'Finance',
            technologies: ['Machine Learning', 'Real-time Analytics', 'Python', 'Apache Kafka'],
            duration: '6 months',
            teamSize: '5 engineers'
        },
        scqa: {
            situation: {
                title: 'The Context',
                intro: 'A major financial institution processing millions of transactions daily was struggling with traditional rule-based fraud detection systems that generated high false positives.',
                cards: [
                    { icon: '💳', title: 'Transaction Volume', description: '5M+ daily transactions across multiple channels and regions' },
                    { icon: '⚠️', title: 'Legacy Systems', description: 'Rule-based detection with 40% false positive rate' },
                    { icon: '📊', title: 'Growing Fraud', description: 'Sophisticated fraud patterns evolving faster than rules' },
                    { icon: '⏰', title: 'Manual Review', description: 'Thousands of transactions flagged for manual review daily' }
                ]
            },
            complication: {
                title: 'The Challenge',
                intro: 'The existing fraud detection system was overwhelmed by false positives, causing customer friction and missing sophisticated fraud patterns.',
                cards: [
                    { number: '01', title: 'High False Positives', description: '40% of flagged transactions were legitimate, frustrating customers' },
                    { number: '02', title: 'Missed Fraud', description: '22% of actual fraud cases slipped through rule-based filters' },
                    { number: '03', title: 'Manual Workload', description: 'Review team overwhelmed with 10,000+ daily alerts' },
                    { number: '04', title: 'Slow Adaptation', description: 'Weeks to update rules for new fraud patterns' }
                ]
            },
            question: {
                title: 'The Questions',
                intro: 'The institution needed to modernize fraud detection while maintaining customer experience and regulatory compliance.',
                cards: [
                    { icon: '❓', title: 'Reduce False Positives?', description: 'How can we accurately identify fraud without blocking legitimate transactions?' },
                    { icon: '❓', title: 'Real-time Detection?', description: 'How can we detect fraud in milliseconds during transaction processing?' },
                    { icon: '❓', title: 'Adapt to New Patterns?', description: 'How can we automatically learn and adapt to evolving fraud tactics?' }
                ]
            },
            answer: {
                title: 'The Solution',
                intro: 'We developed a machine learning-based fraud detection engine using ensemble models and real-time streaming analytics, achieving 78% fraud reduction with minimal false positives.',
                cards: [
                    { icon: '🤖', title: 'Ensemble ML Models', description: 'Multiple algorithms working together for accurate fraud detection' },
                    { icon: '⚡', title: 'Real-time Processing', description: 'Sub-second fraud scoring during transaction authorization' },
                    { icon: '📈', title: 'Adaptive Learning', description: 'Continuous model updates based on new fraud patterns' },
                    { icon: '🎯', title: '95% Accuracy', description: 'Reduced false positives by 85% while catching more fraud' }
                ]
            }
        },
        results: {
            comparison: [
                { label: 'Fraud Detection Rate', before: '78%', after: '98%', improvement: '+20% improvement' },
                { label: 'False Positive Rate', before: '40%', after: '6%', improvement: '-85% reduction' },
                { label: 'Annual Fraud Losses', before: '$8M', after: '$3M', improvement: '-62% reduction' }
            ],
            impact: 'Processed over 5 million daily transactions with 98% fraud detection accuracy, reducing false positives by 85% and saving $5M+ annually. The system now adapts to new fraud patterns automatically, eliminating weeks of manual rule updates.'
        }
    },
    'recommendation-system': {
        title: 'Smart Recommendation System',
        subtitle: 'Personalized Shopping Experience with AI',
        metrics: [
            { icon: '📈', value: '45%', label: 'Conversion Increase' },
            { icon: '🛒', value: '32%', label: 'Cart Value Up' },
            { icon: '👥', value: '2M+', label: 'Active Users' }
        ],
        summary: {
            client: 'Leading E-commerce Platform',
            industry: 'Retail',
            technologies: ['Machine Learning', 'NLP', 'Collaborative Filtering', 'TensorFlow'],
            duration: '5 months',
            teamSize: '4 engineers'
        },
        scqa: {
            situation: {
                title: 'The Context',
                intro: 'A fast-growing e-commerce platform with 2M+ users was using basic product recommendations based on category matching and popularity.',
                cards: [
                    { icon: '🛍️', title: 'Large Catalog', description: '500K+ products across 50+ categories' },
                    { icon: '👥', title: 'Diverse Users', description: '2M+ active users with varied preferences' },
                    { icon: '📊', title: 'Basic Recommendations', description: 'Simple category-based and popularity algorithms' },
                    { icon: '💰', title: 'Low Engagement', description: 'Only 8% click-through rate on recommendations' }
                ]
            },
            complication: {
                title: 'The Challenge',
                intro: 'Generic recommendations were failing to engage users, resulting in low conversion rates and missed revenue opportunities.',
                cards: [
                    { number: '01', title: 'Poor Relevance', description: 'Recommendations not matching individual user preferences' },
                    { number: '02', title: 'Low Conversion', description: 'Only 2% of recommended products resulted in purchases' },
                    { number: '03', title: 'Cold Start Problem', description: 'New users and products received poor recommendations' },
                    { number: '04', title: 'No Personalization', description: 'Same recommendations shown to different user segments' }
                ]
            },
            question: {
                title: 'The Questions',
                intro: 'The platform needed to deliver personalized recommendations that would increase engagement and drive sales.',
                cards: [
                    { icon: '❓', title: 'Personalize at Scale?', description: 'How can we deliver unique recommendations to 2M+ users in real-time?' },
                    { icon: '❓', title: 'Handle Cold Start?', description: 'How can we recommend products for new users with no history?' },
                    { icon: '❓', title: 'Increase Conversions?', description: 'How can we recommend products users actually want to buy?' }
                ]
            },
            answer: {
                title: 'The Solution',
                intro: 'We built a hybrid recommendation system combining collaborative filtering, content-based filtering, and NLP for product descriptions, achieving 45% conversion increase.',
                cards: [
                    { icon: '🤝', title: 'Hybrid Approach', description: 'Combining multiple recommendation algorithms for better accuracy' },
                    { icon: '🧠', title: 'Deep Learning', description: 'Neural networks learning complex user-product relationships' },
                    { icon: '📝', title: 'NLP Analysis', description: 'Understanding product descriptions and user reviews' },
                    { icon: '⚡', title: 'Real-time Updates', description: 'Recommendations updated based on latest user behavior' }
                ]
            }
        },
        results: {
            comparison: [
                { label: 'Click-through Rate', before: '8%', after: '23%', improvement: '+188% improvement' },
                { label: 'Conversion Rate', before: '2%', after: '2.9%', improvement: '+45% improvement' },
                { label: 'Average Cart Value', before: '$45', after: '$59', improvement: '+32% increase' }
            ],
            impact: 'Serving personalized recommendations to 2M+ users, the system increased conversion rates by 45% and average cart value by 32%. The platform now generates 35% of total revenue through AI-powered recommendations.'
        }
    }
    // Add more projects here as needed
};

// Load case study data based on URL parameter
function loadCaseStudy() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project') || 'ai-diagnostic';
    const data = caseStudies[projectId];

    if (!data) {
        console.error('Project not found');
        return;
    }

    // Update page title
    document.title = `${data.title} — Scientist Technologies`;

    // Update hero section
    document.querySelector('.case-study-title').textContent = data.title;
    document.querySelector('.case-study-subtitle').textContent = data.subtitle;

    // Update metrics
    const metricsContainer = document.querySelector('.hero-metrics');
    metricsContainer.innerHTML = data.metrics.map(metric => `
        <div class="metric-card glass-card">
            <div class="metric-icon">${metric.icon}</div>
            <div class="metric-value">${metric.value}</div>
            <div class="metric-label">${metric.label}</div>
        </div>
    `).join('');

    // Update summary
    document.querySelector('.summary-item:nth-child(1) .summary-value').textContent = data.summary.client;
    document.querySelector('.summary-item:nth-child(2) .summary-value').textContent = data.summary.industry;
    document.querySelector('.summary-item:nth-child(3) .summary-value').innerHTML = 
        data.summary.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
    document.querySelector('.summary-item:nth-child(4) .summary-value').textContent = data.summary.duration;
    document.querySelector('.summary-item:nth-child(5) .summary-value').textContent = data.summary.teamSize;

    // Update SCQA arrow cards
    updateSCQAArrows(data.scqa);

    // Update detail sections
    updateDetailSection('situation', data.scqa.situation);
    updateDetailSection('complication', data.scqa.complication);
    updateDetailSection('question', data.scqa.question);
    updateDetailSection('answer', data.scqa.answer);

    // Update results
    updateResults(data.results);
}

function updateSCQAArrows(scqa) {
    // Situation
    document.querySelector('[data-step="1"] .scqa-points').innerHTML = 
        scqa.situation.cards.slice(0, 3).map(card => `<li>${card.description}</li>`).join('');

    // Complication
    document.querySelector('[data-step="2"] .scqa-points').innerHTML = 
        scqa.complication.cards.slice(0, 3).map(card => `<li>${card.description}</li>`).join('');

    // Question
    document.querySelector('[data-step="3"] .scqa-points').innerHTML = 
        scqa.question.cards.map(card => `<li>${card.description}</li>`).join('');

    // Answer
    document.querySelector('[data-step="4"] .scqa-points').innerHTML = 
        scqa.answer.cards.slice(0, 3).map(card => `<li>${card.description}</li>`).join('');
}

function updateDetailSection(type, data) {
    const section = document.querySelector(`.${type}-detail-section`);
    if (!section) return;

    section.querySelector('.detail-section-title').textContent = data.title;
    section.querySelector('.detail-section-intro').textContent = data.intro;

    const grid = section.querySelector('.detail-cards-grid');
    
    if (type === 'complication') {
        grid.innerHTML = data.cards.map((card, index) => `
            <div class="detail-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
                <div class="detail-card-number">${card.number}</div>
                <h4>${card.title}</h4>
                <p>${card.description}</p>
            </div>
        `).join('');
    } else {
        grid.innerHTML = data.cards.map((card, index) => `
            <div class="detail-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
                <div class="detail-card-icon">${card.icon}</div>
                <h4>${card.title}</h4>
                <p>${card.description}</p>
            </div>
        `).join('');
    }

    // Trigger animations after a short delay
    setTimeout(() => {
        section.querySelectorAll('.detail-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

function updateResults(results) {
    const resultsGrid = document.querySelector('.results-grid');
    resultsGrid.innerHTML = results.comparison.map(result => `
        <div class="result-card glass-card animate-on-scroll">
            <div class="result-label">${result.label}</div>
            <div class="result-comparison">
                <span class="result-before">${result.before}</span>
                <span class="result-arrow">→</span>
                <span class="result-after">${result.after}</span>
            </div>
            <div class="result-improvement">${result.improvement}</div>
        </div>
    `).join('');

    document.querySelector('.results-impact p').textContent = results.impact;
}

// Load case study when page loads
document.addEventListener('DOMContentLoaded', loadCaseStudy);
