# Contact Form Setup Guide

This document explains how the contact form works and how to set up email notifications for new submissions.

## Overview

The contact form is fully integrated with Supabase and stores all submissions in the `contact_submissions` table. When a user submits the form, their data is immediately saved to the database.

## Database Structure

The `contact_submissions` table contains:
- `id` - Unique identifier (UUID)
- `name` - Contact's full name (required)
- `email` - Contact's email address (required)
- `phone` - Contact's phone number (optional)
- `practice` - Practice name (optional)
- `specialty` - Medical specialty (optional)
- `message` - Message/inquiry (optional)
- `status` - Current status (new, contacted, qualified, closed)
- `created_at` - Submission timestamp
- `updated_at` - Last update timestamp

## Email Notification Setup

To receive email notifications when someone submits the contact form, you have **three options**:

### Option 1: Database Webhooks (Recommended for Make.com/Zapier)

1. **Go to your Supabase Dashboard**
   - Navigate to Database → Webhooks
   - Click "Create a new webhook"

2. **Configure the webhook:**
   - Name: `Contact Form Notification`
   - Table: `contact_submissions`
   - Events: Select `INSERT`
   - Type: `HTTP Request`
   - HTTP Method: `POST`

3. **Set up automation service:**

   **Using Make.com:**
   - Create a new scenario in Make.com
   - Add a "Webhooks" module and select "Custom webhook"
   - Copy the webhook URL from Make.com
   - Paste this URL in the Supabase webhook "HTTP Request URL" field
   - Add an "Email" module in Make.com
   - Map the webhook data to email fields:
     - To: `contact@medtransic.com`
     - Subject: `New Contact Form: {{record.name}}`
     - Body: Use the data from the webhook (record.name, record.email, etc.)

   **Using Zapier:**
   - Create a new Zap
   - Trigger: "Webhooks by Zapier" → "Catch Hook"
   - Copy the webhook URL from Zapier
   - Paste this URL in the Supabase webhook "HTTP Request URL" field
   - Action: "Email by Zapier" or "Gmail" → "Send Email"
   - Configure email with webhook data

4. **Test the webhook:**
   - Submit a test form on your website
   - Verify the webhook is triggered
   - Check that you receive the email

### Option 2: Supabase Edge Function (Direct Email - Requires Email API)

The Edge Function `contact-notification` is already deployed and ready to use. To enable email sending:

1. **Choose an email service:**
   - Resend (recommended): https://resend.com
   - SendGrid: https://sendgrid.com
   - Mailgun: https://www.mailgun.com
   - AWS SES: https://aws.amazon.com/ses/

2. **Get your API key** from your chosen email service

3. **Update the Edge Function:**
   - Uncomment the email sending code in the Edge Function
   - Configure it with your email service credentials
   - The function is at: `supabase/functions/contact-notification/index.ts`

4. **Set up the Database Webhook:**
   - Go to Supabase Dashboard → Database → Webhooks
   - Create webhook pointing to your Edge Function:
   - URL: `https://[your-project-ref].supabase.co/functions/v1/contact-notification`
   - Add header: `Authorization: Bearer [your-anon-key]`

### Option 3: Supabase Realtime + Custom Code

You can also listen to database changes in real-time and trigger notifications from your own backend:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

// Subscribe to new inserts
supabase
  .channel('contact-submissions')
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'contact_submissions' },
    (payload) => {
      // Send email notification
      console.log('New submission:', payload.new)
      // Your email sending logic here
    }
  )
  .subscribe()
```

## Viewing Submissions

To view all contact form submissions:

1. **Supabase Dashboard:**
   - Go to Table Editor
   - Select `contact_submissions` table
   - View all submissions with filtering and sorting options

2. **Status Management:**
   - Update the `status` field to track follow-up:
     - `new` - Just submitted, needs review
     - `contacted` - Initial contact made
     - `qualified` - Potential client qualified
     - `closed` - Won/lost, no longer active

## Testing

To test the contact form:

1. Visit your website's contact page: `/contact`
2. Fill out the form with test data
3. Submit the form
4. Check the Supabase dashboard to verify the submission was saved
5. If webhooks are configured, verify you received the notification

## Email Template Customization

When setting up your automation, use this template structure:

**Subject:** New Contact Form Submission from [Name]

**Body:**
```
New Contact Form Submission
===========================

Submission Date: [created_at]

Contact Information:
- Name: [name]
- Email: [email]
- Phone: [phone]

Practice Information:
- Practice Name: [practice]
- Specialty: [specialty]

Message:
[message]

---
Reply to this email or contact [email] directly.
```

## Security Notes

- The contact form is public (no authentication required)
- Rate limiting is handled at the Supabase level
- All submissions are logged with timestamps
- RLS policies ensure data can only be read by authenticated admin users
- Form validation prevents invalid data submission

## Troubleshooting

**Form submissions not saving:**
- Check browser console for errors
- Verify Supabase environment variables are set correctly
- Check Supabase dashboard for any error logs

**Not receiving emails:**
- Verify webhook is properly configured in Supabase dashboard
- Check webhook logs in Supabase for delivery status
- Test the webhook URL directly with a test payload
- Verify email service API credentials are correct

**Webhook not triggering:**
- Ensure the webhook is enabled in Supabase dashboard
- Verify the HTTP endpoint URL is correct and accessible
- Check that the table name and event type match exactly

## Support

For additional help:
- Supabase Webhooks Documentation: https://supabase.com/docs/guides/database/webhooks
- Make.com Documentation: https://www.make.com/en/help/tutorials
- Zapier Documentation: https://zapier.com/help
