import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { siteContent } from "@/data/siteContent";

const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, urgency, ...otherDetails } = body;

    // 1. Store in Supabase
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { error: dbError } = await supabase
        .from('dispatch_requests')
        .insert([
          { 
            name, 
            email, 
            phone, 
            service_type: serviceType, 
            urgency, 
            details: otherDetails,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (dbError) {
        console.error("Supabase Error:", dbError);
        // Continue to email even if DB fails
      }
    }

    // 2. Send Email via Resend
    if (process.env.RESEND_API_KEY) {
      const { error: emailError } = await resend.emails.send({
        from: 'Killer Shark Web <onboarding@resend.dev>', // Update this with your verified domain
        to: [siteContent.business.email], // Send to Captain
        subject: `[DISPATCH REQUEST] ${urgency.toUpperCase()} - ${serviceType}`,
        html: `
          <h1>New Dispatch Request</h1>
          <p><strong>Urgency:</strong> ${urgency.toUpperCase()}</p>
          <p><strong>Service:</strong> ${serviceType}</p>
          <hr />
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <h2>Request Details</h2>
          <pre>${JSON.stringify(otherDetails, null, 2)}</pre>
        `,
      });

      if (emailError) {
        console.error("Resend Error:", emailError);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
