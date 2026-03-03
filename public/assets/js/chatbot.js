// ================================================
// SCIENTIST TECHNOLOGIES — CLIENT ENQUIRY CHATBOT
// ================================================

// Chatbot Q&A Database
const chatbotData = {
    greeting: "Hi there! Welcome to Scientist Technologies.<br><br>We are a specialized team of AI and Data Engineers dedicated to turning complex data into actionable intelligence.<br><br>Whether you are looking to build a custom Generative AI agent, scale your Data Engineering, or need a Strategic AI Roadmap, we're here to help you build what's next.",
    
    closingMessage: "Thank you! Your inquiry has been received.<br><br>One of our AI Strategists will review your details and reach out within 24 hours to discuss how we can accelerate your AI journey.",
    
    questions: [
        {
            id: 'what-do',
            question: 'What does Scientist Technologies do?',
            keywords: ['what', 'do', 'does', 'company', 'about', 'services', 'business'],
            answer: 'Scientist Technologies is a specialized AI and Data Engineering firm.<br><br>We help businesses navigate the complexities of Artificial Intelligence—from initial strategy and consulting to building and deploying production-ready AI models.',
            followUps: ['offerings', 'expertise']
        },
        {
            id: 'offerings',
            question: 'What are your key offerings within AI Consulting?',
            keywords: ['offerings', 'consulting', 'services', 'provide', 'offer'],
            answer: 'Our AI Consulting Services:<br><br><ul><li>Opportunity Validation – Identifying high-value use cases</li><li>AI Architecture & Strategy – Designing scalable AI systems</li><li>Prototype to Production – Taking POCs to full-scale deployment</li><li>Algorithm Research – Solving niche technical problems</li></ul>',
            followUps: ['expertise', 'tech-stack']
        },
        {
            id: 'expertise',
            question: 'Which are your areas of expertise?',
            keywords: ['expertise', 'specialize', 'areas', 'focus', 'skills'],
            answer: 'Our Core Expertise:<br><br><ul><li>Generative AI – LLMs & RAG systems</li><li>Natural Language Processing (NLP) – Text analysis & understanding</li><li>Computer Vision – Image & video analytics</li><li>Big Data Engineering – Scalable data pipelines</li></ul>',
            followUps: ['nlp', 'gen-ai']
        },
        {
            id: 'tech-stack',
            question: 'What is your engineers\' tech stack?',
            keywords: ['tech', 'stack', 'technology', 'tools', 'frameworks', 'languages'],
            answer: 'Our Technology Stack:<br><br>Languages: Python, R, Scala<br><br>Frameworks: PyTorch, TensorFlow, Hugging Face<br><br>Cloud Platforms:<ul><li>AWS (SageMaker)</li><li>Azure (ML Studio)</li><li>Google Cloud (Vertex AI)</li></ul>',
            followUps: ['integration', 'engagement']
        },
        {
            id: 'nlp',
            question: 'Do you offer NLP solutions?',
            keywords: ['nlp', 'natural language', 'text', 'language processing', 'sentiment'],
            answer: 'Yes. NLP is a core pillar of our expertise.<br><br>Our NLP Solutions:<br><br><ul><li>Automated document processing</li><li>Sentiment analysis</li><li>Entity extraction</li><li>Custom translation layers</li></ul>',
            followUps: ['chatbot', 'integration']
        },
        {
            id: 'integration',
            question: 'Can you integrate AI into existing systems?',
            keywords: ['integrate', 'integration', 'existing', 'systems', 'crm', 'erp', 'api'],
            answer: 'Absolutely. We specialize in AI Module Integration.<br><br>We ensure models connect seamlessly into your existing systems:<br><br><ul><li>CRMs</li><li>ERPs</li><li>Custom applications</li></ul><br>All integrated via robust APIs for smooth operation.',
            followUps: ['engagement', 'partner']
        },
        {
            id: 'gen-ai',
            question: 'Do you have experience in Gen AI?',
            keywords: ['gen ai', 'generative', 'llm', 'gpt', 'language model', 'rag'],
            answer: 'Yes. We focus on building custom Generative AI solutions.<br><br>Our Gen AI Capabilities:<br><br><ul><li>Custom LLM implementations</li><li>Fine-tuning models for industry-specific jargon</li><li>Private AI-driven search tools</li><li>RAG (Retrieval-Augmented Generation) systems</li></ul>',
            followUps: ['chatbot', 'offerings']
        },
        {
            id: 'chatbot',
            question: 'Can you help build a Chatbot or AI Agent?',
            keywords: ['chatbot', 'agent', 'agentic', 'bot', 'conversational'],
            answer: 'Yes. We build "Agentic AI"—chatbots that don\'t just talk but also act.<br><br>Our AI Agents can:<br><br><ul><li>Negotiate and make decisions</li><li>Predict timelines and outcomes</li><li>Query private databases</li><li>Execute complex workflows</li></ul>',
            followUps: ['engagement', 'partner']
        },
        {
            id: 'engagement',
            question: 'What kind of engagement model do you adopt?',
            keywords: ['engagement', 'model', 'pricing', 'contract', 'hire', 'cost'],
            answer: 'Our Engagement Models:<br><br><ol><li>Project-Based – Fixed-scope deliverables</li><li>Dedicated AI Teams – Managed specialists for ongoing work</li><li>Strategic Consulting – Hourly or retainer-based advisory</li></ol>',
            followUps: ['partner', 'demo']
        },
        {
            id: 'partner',
            question: 'How do we partner with you?',
            keywords: ['partner', 'work', 'start', 'process', 'onboard', 'contact'],
            answer: 'Our Partnership Process:<br><br><ol><li>Initial Inquiry – Reach out via our website or email</li><li>Discovery Call – Discuss your needs and data readiness</li><li>Detailed Proposal – Receive a customized solution roadmap</li><li>Onboarding & Development – Begin building together</li></ol>',
            followUps: ['demo']
        },
        {
            id: 'demo',
            question: 'Can we do a demo or discovery call?',
            keywords: ['demo', 'call', 'meeting', 'schedule', 'discovery', 'consultation'],
            answer: 'Yes. We\'d be happy to schedule a call with you.<br><br>Contact us:<br><br>📧 Email: <a href="mailto:team@scientisttechnologies.com">team@scientisttechnologies.com</a><br><br>🌐 Website: Schedule directly through our contact page',
            followUps: []
        }
    ]
};

class Chatbot {
    constructor() {
        this.isExpanded = false;
        this.messageCount = 0;
        this.conversationHistory = [];
        this.init();
    }

    init() {
        this.createChatbotHTML();
        this.attachEventListeners();
        this.checkContactPage();
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <!-- Chatbot Minimized Button -->
            <div class="chatbot-minimized" id="chatbotMinimized">
                <div class="chatbot-pulse-ring"></div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
            </div>

            <!-- Chatbot Expanded Window -->
            <div class="chatbot-expanded" id="chatbotExpanded">
                <div class="chatbot-header">
                    <div class="chatbot-header-content">
                        <div class="chatbot-avatar">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                        </div>
                        <div>
                            <h3 class="chatbot-title">Scientist AI Assistant</h3>
                            <p class="chatbot-status">Online</p>
                        </div>
                    </div>
                    <button class="chatbot-minimize-btn" id="chatbotMinimizeBtn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
                <div class="chatbot-messages" id="chatbotMessages">
                    <!-- Messages will be added here -->
                </div>
                <div class="chatbot-input-area">
                    <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Type your question...">
                    <button class="chatbot-send-btn" id="chatbotSendBtn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const minimizedBtn = document.getElementById('chatbotMinimized');
        const minimizeBtn = document.getElementById('chatbotMinimizeBtn');
        const sendBtn = document.getElementById('chatbotSendBtn');
        const input = document.getElementById('chatbotInput');

        minimizedBtn.addEventListener('click', () => this.expand());
        minimizeBtn.addEventListener('click', () => this.minimize());
        sendBtn.addEventListener('click', () => this.handleSend());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSend();
        });

        // Removed auto-minimize on outside click - only manual minimize button works
    }

    checkContactPage() {
        const minimizedBtn = document.getElementById('chatbotMinimized');
        const expandedWindow = document.getElementById('chatbotExpanded');
        
        // Show chatbot ONLY on contact page, but keep it minimized
        if (window.location.pathname.includes('contact.html')) {
            if (minimizedBtn) minimizedBtn.style.display = 'flex';
        } else {
            // Hide chatbot completely on all other pages
            if (minimizedBtn) minimizedBtn.style.display = 'none';
            if (expandedWindow) expandedWindow.style.display = 'none';
        }
    }

    expand() {
        this.isExpanded = true;
        const minimizedBtn = document.getElementById('chatbotMinimized');
        const expandedWindow = document.getElementById('chatbotExpanded');
        
        // Hide the minimized button and show the expanded window
        if (minimizedBtn) minimizedBtn.style.display = 'none';
        if (expandedWindow) expandedWindow.classList.add('active');
        
        // Show welcome message ONLY on first open (messageCount === 0)
        // On subsequent opens, conversation history is preserved
        if (this.messageCount === 0) {
            this.showWelcomeMessage();
        }
    }

    minimize() {
        this.isExpanded = false;
        const minimizedBtn = document.getElementById('chatbotMinimized');
        const expandedWindow = document.getElementById('chatbotExpanded');
        
        // Hide the expanded window and show the minimized button again
        if (expandedWindow) expandedWindow.classList.remove('active');
        if (minimizedBtn) minimizedBtn.style.display = 'flex';
    }

    showWelcomeMessage() {
        const welcomeMsg = {
            type: 'bot',
            text: chatbotData.greeting
        };
        this.addMessage(welcomeMsg);
        
        // Delay showing questions to ensure greeting is visible first
        setTimeout(() => {
            // Show first 4 main questions as subtle hints
            const mainQuestionIds = chatbotData.questions.slice(0, 4).map(q => q.id);
            this.showQuickQuestions(mainQuestionIds);
        }, 800);
    }

    showQuickQuestions(questionIds) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const quickQuestionsHTML = `
            <div class="chatbot-quick-questions">
                <div class="quick-questions-label">Suggested questions:</div>
                ${questionIds.map(id => {
                    const question = this.getQuestionById(id);
                    return question ? `<button class="chatbot-quick-btn" data-id="${id}">${question.question}</button>` : '';
                }).join('')}
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', quickQuestionsHTML);
        
        // Attach click handlers
        messagesContainer.querySelectorAll('.chatbot-quick-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const questionId = btn.getAttribute('data-id');
                this.handleQuickQuestion(questionId);
            });
        });
        
        // DON'T scroll when showing questions - keep greeting visible
        // this.scrollToBottom();
    }

    getQuestionById(id) {
        return chatbotData.questions.find(q => q.id === id);
    }

    handleQuickQuestion(questionId) {
        const questionData = this.getQuestionById(questionId);
        if (!questionData) return;

        // Remove quick question buttons
        const quickQuestions = document.querySelector('.chatbot-quick-questions');
        if (quickQuestions) quickQuestions.remove();

        // Add user message
        this.addMessage({ type: 'user', text: questionData.question });

        // Show typing indicator
        this.showTypingIndicator();

        // Add bot response after delay
        setTimeout(() => {
            this.removeTypingIndicator();
            this.addMessage({ type: 'bot', text: questionData.answer });
            this.messageCount++;

            // Show follow-ups or closing message
            if (questionData.followUps && questionData.followUps.length > 0) {
                setTimeout(() => this.showQuickQuestions(questionData.followUps), 500);
            } else {
                setTimeout(() => this.showClosingMessage(), 500);
            }
        }, 1200);
    }

    handleSend() {
        const input = document.getElementById('chatbotInput');
        const userMessage = input.value.trim();
        if (!userMessage) return;

        // Remove any existing quick questions
        const quickQuestions = document.querySelector('.chatbot-quick-questions');
        if (quickQuestions) quickQuestions.remove();

        // Add user message
        this.addMessage({ type: 'user', text: userMessage });
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Smart keyword matching for custom questions
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = this.matchQuestion(userMessage);
            this.addMessage({ type: 'bot', text: response.answer });
            this.messageCount++;

            if (response.followUps && response.followUps.length > 0) {
                setTimeout(() => this.showQuickQuestions(response.followUps), 500);
            } else {
                setTimeout(() => this.showClosingMessage(), 500);
            }
        }, 1200);
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingHTML = `
            <div class="chatbot-message bot chatbot-typing-indicator">
                <div class="chatbot-message-avatar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                </div>
                <div class="chatbot-message-content">
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const typingIndicator = document.querySelector('.chatbot-typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    matchQuestion(userInput) {
        const input = userInput.toLowerCase();
        let bestMatch = null;
        let highestScore = 0;
        
        // Score each question based on keyword matches
        for (const q of chatbotData.questions) {
            let score = 0;
            
            // Check if any keywords match
            for (const keyword of q.keywords) {
                if (input.includes(keyword)) {
                    score += 2; // Keyword match
                }
            }
            
            // Check if question text matches
            const questionWords = q.question.toLowerCase().split(' ');
            for (const word of questionWords) {
                if (word.length > 3 && input.includes(word)) {
                    score += 1; // Question word match
                }
            }
            
            // Update best match
            if (score > highestScore) {
                highestScore = score;
                bestMatch = q;
            }
        }

        // Return best match if score is good enough, otherwise fallback
        if (bestMatch && highestScore >= 2) {
            return bestMatch;
        }

        // Fallback response
        return {
            answer: 'Thank you for your question! For detailed information, please contact us at <a href="mailto:team@scientisttechnologies.com">team@scientisttechnologies.com</a> or explore our <a href="services.html">Services</a> page.',
            followUps: ['partner', 'demo']
        };
    }

    showClosingMessage() {
        this.addMessage({ type: 'bot', text: chatbotData.closingMessage });
    }

    addMessage(message) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageHTML = `
            <div class="chatbot-message ${message.type}">
                ${message.type === 'bot' ? `
                    <div class="chatbot-message-avatar">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                    </div>
                ` : ''}
                <div class="chatbot-message-content">${message.text}</div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        
        // Scroll to show the new message
        this.scrollToBottom();
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbotMessages');
        // Smooth scroll to bottom
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: 'smooth'
        });
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});
