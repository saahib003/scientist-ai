import { useState, useEffect, useRef } from 'react'

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
}

function Chatbot() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const getQuestionById = (id) => {
    return chatbotData.questions.find(q => q.id === id)
  }

  const addMessage = (type, text) => {
    setMessages(prev => [...prev, { type, text }])
  }

  const addQuickQuestions = (questionIds) => {
    setMessages(prev => [...prev, { type: 'quick-questions', questionIds }])
  }

  const handleExpand = () => {
    setIsExpanded(true)
    if (messageCount === 0) {
      addMessage('bot', chatbotData.greeting)
      setTimeout(() => {
        const mainQuestionIds = chatbotData.questions.slice(0, 4).map(q => q.id)
        addQuickQuestions(mainQuestionIds)
      }, 800)
    }
  }

  const handleMinimize = () => {
    setIsExpanded(false)
  }

  const handleQuickQuestion = (questionId) => {
    const questionData = getQuestionById(questionId)
    if (!questionData) return

    // Remove quick questions
    setMessages(prev => prev.filter(msg => msg.type !== 'quick-questions'))

    // Add user message
    addMessage('user', questionData.question)

    // Show typing indicator
    setIsTyping(true)

    // Add bot response after delay
    setTimeout(() => {
      setIsTyping(false)
      addMessage('bot', questionData.answer)
      setMessageCount(prev => prev + 1)

      // Show follow-ups or closing message
      if (questionData.followUps && questionData.followUps.length > 0) {
        setTimeout(() => addQuickQuestions(questionData.followUps), 500)
      } else {
        setTimeout(() => addMessage('bot', chatbotData.closingMessage), 500)
      }
    }, 1200)
  }

  const matchQuestion = (userInput) => {
    const input = userInput.toLowerCase()
    let bestMatch = null
    let highestScore = 0
    
    for (const q of chatbotData.questions) {
      let score = 0
      
      for (const keyword of q.keywords) {
        if (input.includes(keyword)) {
          score += 2
        }
      }
      
      const questionWords = q.question.toLowerCase().split(' ')
      for (const word of questionWords) {
        if (word.length > 3 && input.includes(word)) {
          score += 1
        }
      }
      
      if (score > highestScore) {
        highestScore = score
        bestMatch = q
      }
    }

    if (bestMatch && highestScore >= 2) {
      return bestMatch
    }

    return {
      answer: 'Thank you for your question! For detailed information, please contact us at <a href="mailto:team@scientisttechnologies.com">team@scientisttechnologies.com</a> or explore our <a href="/services">Services</a> page.',
      followUps: ['partner', 'demo']
    }
  }

  const handleSend = () => {
    const userMessage = inputValue.trim()
    if (!userMessage) return

    // Remove any existing quick questions
    setMessages(prev => prev.filter(msg => msg.type !== 'quick-questions'))

    // Add user message
    addMessage('user', userMessage)
    setInputValue('')

    // Show typing indicator
    setIsTyping(true)

    // Smart keyword matching for custom questions
    setTimeout(() => {
      setIsTyping(false)
      const response = matchQuestion(userMessage)
      addMessage('bot', response.answer)
      setMessageCount(prev => prev + 1)

      if (response.followUps && response.followUps.length > 0) {
        setTimeout(() => addQuickQuestions(response.followUps), 500)
      } else {
        setTimeout(() => addMessage('bot', chatbotData.closingMessage), 500)
      }
    }, 1200)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <>
      {/* Chatbot Minimized Button */}
      {!isExpanded && (
        <div className="chatbot-minimized" onClick={handleExpand}>
          <div className="chatbot-pulse-ring"></div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>
      )}

      {/* Chatbot Expanded Window */}
      {isExpanded && (
        <div className="chatbot-expanded active">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <div>
                <h3 className="chatbot-title">Scientist AI Assistant</h3>
                <p className="chatbot-status">Online</p>
              </div>
            </div>
            <button className="chatbot-minimize-btn" onClick={handleMinimize}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => {
              if (msg.type === 'quick-questions') {
                return (
                  <div key={index} className="chatbot-quick-questions">
                    <div className="quick-questions-label">Suggested questions:</div>
                    {msg.questionIds.map(id => {
                      const question = getQuestionById(id)
                      return question ? (
                        <button
                          key={id}
                          className="chatbot-quick-btn"
                          onClick={() => handleQuickQuestion(id)}
                        >
                          {question.question}
                        </button>
                      ) : null
                    })}
                  </div>
                )
              }

              return (
                <div key={index} className={`chatbot-message ${msg.type}`}>
                  {msg.type === 'bot' && (
                    <div className="chatbot-message-avatar">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                    </div>
                  )}
                  <div className="chatbot-message-content" dangerouslySetInnerHTML={{ __html: msg.text }} />
                </div>
              )
            })}
            {isTyping && (
              <div className="chatbot-message bot chatbot-typing-indicator">
                <div className="chatbot-message-avatar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <div className="chatbot-message-content">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="chatbot-send-btn" onClick={handleSend}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
