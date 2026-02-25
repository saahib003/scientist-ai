# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Templates

### Template 1: Admin Notification (You receive this)
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Name it: `contact_form_admin`
4. Copy the HTML from `email-templates/admin-template.html`
5. Paste it in the **Content** section
6. Set **Subject**: `New Contact Form Submission from {{from_name}}`
7. Note down the **Template ID** (e.g., `template_xyz789`)

### Template 2: User Confirmation (User receives this)
1. Create another new template
2. Name it: `contact_form_user`
3. Copy the HTML from `email-templates/user-template.html`
4. Paste it in the **Content** section
5. Set **Subject**: `Thank you for contacting Scientist Technologies`
6. Note down the **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)
3. Copy it

## Step 5: Update JavaScript File
Open `assets/js/contact-form.js` and update these values:

```javascript
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const ADMIN_TEMPLATE_ID = 'YOUR_ADMIN_TEMPLATE_ID_HERE';
const USER_TEMPLATE_ID = 'YOUR_USER_TEMPLATE_ID_HERE';
```

## Step 6: Test the Form
1. Open `contact.html` in your browser
2. Fill out the form with test data
3. Submit and check:
   - You should receive an admin notification email
   - The user should receive a thank-you email
   - Success message should appear on the form

## Template Variables Used

These variables are automatically filled from the form:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{company}}` - User's company name
- `{{message}}` - User's message
- `{{to_email}}` - Your email (set in EmailJS dashboard)

## Troubleshooting

**Emails not sending?**
- Check browser console for errors
- Verify all IDs are correct
- Make sure email service is connected
- Check EmailJS dashboard for failed sends

**Template not rendering correctly?**
- EmailJS supports HTML but some CSS may be stripped
- Use inline styles for best compatibility
- Test with simple text first, then add styling

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
