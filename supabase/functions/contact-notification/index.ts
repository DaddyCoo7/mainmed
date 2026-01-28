import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  practice?: string;
  specialty?: string;
  message?: string;
  created_at: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload = await req.json();
    console.log('Received webhook payload:', payload);

    // Extract the new record from the webhook payload
    const record = payload.record as ContactSubmission;

    if (!record) {
      throw new Error('No record found in webhook payload');
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission
============================

Submission ID: ${record.id}
Date: ${new Date(record.created_at).toLocaleString()}

Contact Information:
-------------------
Name: ${record.name}
Email: ${record.email}
Phone: ${record.phone || 'Not provided'}

Practice Information:
--------------------
Practice Name: ${record.practice || 'Not provided'}
Specialty: ${record.specialty || 'Not provided'}

Message:
--------
${record.message || 'No message provided'}


To view and manage this submission, please check your Supabase dashboard.
    `.trim();

    console.log('Email content prepared:', emailContent);

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      throw new Error('RESEND_API_KEY not configured in environment');
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'notifications@medtransic.com',
        to: 'contact@medtransic.com',
        subject: `New Contact Form Submission from ${record.name}`,
        text: emailContent,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Resend API error:', errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', emailResult);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Notification processed successfully',
        submission_id: record.id,
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error processing webhook:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 500,
      }
    );
  }
});
