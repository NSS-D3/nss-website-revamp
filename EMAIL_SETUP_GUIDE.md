# Email Contact Form Setup Guide

The contact form is now configured to send emails to `nss@pilani.bits-pilani.ac.in` using EmailJS. Here's how to set it up:

## Quick Setup (Recommended)

### Option 1: EmailJS Setup (Free & Reliable)

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Free tier allows 200 emails/month

2. **Add Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your preferred email provider (Gmail, Outlook, etc.)
   - Connect your email account (nss@pilani.bits-pilani.ac.in)
   - Note down the **Service ID** (e.g., `service_abc123`)

3. **Create Email Template**
   - Go to "Email Templates" 
   - Click "Create New Template"
   - Use this template:

```
Subject: {{subject}}

You have a new message from the NSS BITS Pilani website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the NSS BITS Pilani contact form.
You can reply directly to: {{from_email}}
```

   - Note down the **Template ID** (e.g., `template_xyz789`)

4. **Get Public Key**
   - Go to "Account" → "General"
   - Find your **Public Key** (e.g., `abc123def456`)

5. **Update Configuration**
   - Open `/src/lib/email-config.ts`
   - Replace the placeholder values:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_abc123',        // Your actual service ID
  TEMPLATE_ID: 'template_xyz789',      // Your actual template ID  
  PUBLIC_KEY: 'abc123def456',          // Your actual public key
  TO_EMAIL: 'nss@pilani.bits-pilani.ac.in',
  // ... rest stays the same
};
```

6. **Test the Form**
   - The contact form will now send emails directly to the NSS email
   - You'll receive formatted emails with sender details
   - Users will see success messages when emails are sent

---

## Option 2: Fallback (Already Working)

If you don't set up EmailJS, the form will automatically use a **mailto fallback**:

- When users submit the form, it opens their email client
- Pre-fills the NSS email address and their message
- Users can then send the email from their email client
- This works immediately without any setup required

---

## Form Features

✅ **Form Validation**: Validates all fields before submission
✅ **Email Formatting**: Professional email format with sender details  
✅ **Success Messages**: Clear feedback to users
✅ **Error Handling**: Graceful fallback if EmailJS fails
✅ **Responsive Design**: Works on all devices
✅ **Security**: No sensitive data exposed in frontend code

## Current Form Fields

- First Name & Last Name
- Email Address  
- Subject (dropdown with predefined options)
- Message (minimum 10 characters)

## Testing

1. **Test with EmailJS**: Fill out the form → Check nss@pilani.bits-pilani.ac.in for emails
2. **Test Fallback**: Disable EmailJS config → Form should open email client
3. **Test Validation**: Try submitting with empty/invalid fields

---

## Support

If you need help setting up EmailJS or encounter any issues:

1. Check the browser console for error messages
2. Verify all IDs and keys are correctly copied
3. Make sure your email account is properly connected to EmailJS
4. Test the EmailJS template in their dashboard first

The fallback method (mailto) works immediately without any setup, so users can always contact you even if EmailJS isn't configured.
