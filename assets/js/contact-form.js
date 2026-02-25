/**
 * Contact Form with EmailJS Integration
 * Sends emails to both admin and user with beautiful templates
 */

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================
const EMAIL_CONFIG = {
    PUBLIC_KEY: 'WFNw_DRrzj3oFitMU',           // Get from EmailJS dashboard
    SERVICE_ID: 'service_3qu1a8d',           // Your email service ID
    ADMIN_TEMPLATE_ID: 'template_0gja5bo', // Template for admin notification
    USER_TEMPLATE_ID: 'template_y6g5uaj'    // Template for user confirmation
};

// ============================================
// FORM HANDLING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Initialize EmailJS
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
    
    // Form submission handler
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            from_name: document.getElementById('name').value.trim(),
            from_email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            company: document.getElementById('company').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Show loading state
        setLoadingState(true);
        
        try {
            // Send email to admin
            await emailjs.send(
                EMAIL_CONFIG.SERVICE_ID,
                EMAIL_CONFIG.ADMIN_TEMPLATE_ID,
                formData
            );
            
            // User confirmation email - COMMENTED OUT
            // await emailjs.send(
            //     EMAIL_CONFIG.SERVICE_ID,
            //     EMAIL_CONFIG.USER_TEMPLATE_ID,
            //     formData
            // );
            
            // Show success on button
            showSuccess();
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            console.error('Email sending failed:', error);
            showMessage('error', 'Failed to send message. Please try again or email us directly.');
        } finally {
            setLoadingState(false);
        }
    });
});

// ============================================
// VALIDATION
// ============================================
function validateForm(data) {
    // Name validation
    if (data.from_name.length < 2) {
        showMessage('error', 'Please enter your full name');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.from_email)) {
        showMessage('error', 'Please enter a valid email address');
        return false;
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (data.phone && data.phone.length < 10) {
        showMessage('error', 'Please enter a valid phone number');
        return false;
    }
    
    // Message validation
    if (data.message.length < 10) {
        showMessage('error', 'Please enter a message (at least 10 characters)');
        return false;
    }
    
    return true;
}

// ============================================
// UI HELPERS
// ============================================
function setLoadingState(isLoading) {
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    if (isLoading) {
        submitBtn.disabled = true;
        btnText.textContent = 'Sending';
        btnLoader.style.display = 'inline-block';
    } else {
        submitBtn.disabled = false;
        btnText.textContent = 'Submit';
        btnLoader.style.display = 'none';
    }
}

function showSuccess() {
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    btnLoader.style.display = 'none';
    btnText.textContent = '✓ Message Sent';
    submitBtn.style.backgroundColor = '#4CAF50';
    
    // Show success toast
    showToast('success', 'Message sent successfully! We\'ll get back to you soon.');
    
    // Reset after 3 seconds
    setTimeout(() => {
        btnText.textContent = 'Submit';
        submitBtn.style.backgroundColor = '';
    }, 3000);
}

function showMessage(type, message) {
    // Show validation errors as toast notifications
    showToast(type, message);
}

function showToast(type, message) {
    // Remove existing toasts
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    
    // Create toast content
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-icon">
                ${type === 'success' ? '✓' : '✕'}
            </div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" aria-label="Close notification">✕</button>
    `;
    
    // Add to body
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('toast-show');
    }, 10);
    
    // Close button handler
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        closeToast(toast);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        closeToast(toast);
    }, 5000);
}

function closeToast(toast) {
    toast.classList.remove('toast-show');
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 300);
}

// ============================================
// FORM MESSAGE STYLES
// ============================================
const messageStyles = document.createElement('style');
messageStyles.textContent = `
    /* Loading Spinner */
    .btn-loader {
        display: none;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-top-color: #222;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
        margin-left: 8px;
        vertical-align: middle;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    /* Toast Notification System */
    .toast-notification {
        position: fixed;
        bottom: 24px;
        right: 24px;
        min-width: 320px;
        max-width: 420px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(calc(100% + 24px));
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }
    
    .toast-notification.toast-show {
        transform: translateX(0);
    }
    
    .toast-content {
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }
    
    .toast-icon {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
    }
    
    .toast-success .toast-icon {
        background: #4CAF50;
        color: #fff;
    }
    
    .toast-error .toast-icon {
        background: #f44336;
        color: #fff;
    }
    
    .toast-message {
        flex: 1;
        font-size: 14px;
        line-height: 1.5;
        color: var(--text-primary);
        padding-top: 2px;
    }
    
    .toast-close {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 24px;
        height: 24px;
        border: none;
        background: transparent;
        color: var(--text-secondary);
        font-size: 18px;
        line-height: 1;
        cursor: pointer;
        transition: color 0.2s;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .toast-close:hover {
        color: var(--text-primary);
    }
    
    /* Light Theme Toast */
    [data-theme="light"] .toast-notification {
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    }
    
    [data-theme="light"] .toast-message {
        color: #111;
    }
    
    [data-theme="light"] .toast-close {
        color: #666;
    }
    
    [data-theme="light"] .toast-close:hover {
        color: #111;
    }
    
    /* Mobile Responsive */
    @media (max-width: 768px) {
        .toast-notification {
            left: 16px;
            right: 16px;
            min-width: auto;
            max-width: none;
            bottom: 16px;
        }
    }
`;
document.head.appendChild(messageStyles);

