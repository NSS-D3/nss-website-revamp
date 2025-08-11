# 🚨 EmailJS Template Fix Required

The contact form is currently sending emails to the old address because the EmailJS template needs to be updated.

## Current Status
- ✅ EmailJS is **temporarily disabled**
- ✅ Form now uses **mailto fallback** → Opens email client with `nss@pilani.bits-pilani.ac.in`
- ❌ EmailJS template still has old email address

## Quick Fix (2 Options)

### Option 1: Update EmailJS Template (Recommended)

1. **Go to EmailJS Dashboard**
   - Visit [EmailJS.com](https://www.emailjs.com/)
   - Log in to your account

2. **Edit Your Template**
   - Go to "Email Templates"
   - Find template `template_pconfp9`
   - Click "Edit"

3. **Update the Template**
   Replace the current template content with:

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

**Important**: Make sure the template sends TO: `nss@pilani.bits-pilani.ac.in`
- In the template settings, set the "To Email" field to: `nss@pilani.bits-pilani.ac.in`
- OR use the variable `{{to_email}}` and ensure our code passes the correct email

4. **Re-enable EmailJS**
   - Open `/src/lib/email-config.ts`
   - Change: `PUBLIC_KEY: "DISABLED_UNTIL_TEMPLATE_UPDATED"`
   - Back to: `PUBLIC_KEY: "9cmYn1s6NNeKVoDK-"`

5. **Test the Form**
   - Fill out the contact form
   - Check `nss@pilani.bits-pilani.ac.in` for emails

---

### Option 2: Keep Using Mailto (No Setup Required)

The form currently works perfectly with the mailto fallback:
- Users fill out the form
- Their email client opens with NSS email pre-filled
- They can send the email directly
- **No additional setup needed!**

---

## Current Form Behavior

Right now, when users submit the form:

1. ✅ **Form validates** all fields
2. ✅ **EmailJS is skipped** (disabled)
3. ✅ **Email client opens** with:
   - To: `nss@pilani.bits-pilani.ac.in`
   - Subject: User's selected subject
   - Body: Formatted message with user details
4. ✅ **User sends email** from their email client

## Which Option to Choose?

- **Choose Option 1** if you want users to get instant "Message Sent!" confirmations
- **Choose Option 2** if the current mailto behavior works fine for your needs

Both options will send emails to `nss@pilani.bits-pilani.ac.in` correctly!

---

## Need Help?

If you need assistance updating the EmailJS template or have questions, the current mailto fallback ensures users can always contact you at the correct NSS email address.
