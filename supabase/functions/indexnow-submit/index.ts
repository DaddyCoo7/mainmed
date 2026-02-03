import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface IndexNowRequest {
  urls?: string[];
  useAllUrls?: boolean;
}

interface IndexNowResponse {
  success: boolean;
  submitted: number;
  failed: number;
  batchId: string;
  details?: any[];
}

const INDEXNOW_KEY = Deno.env.get('INDEXNOW_KEY');
const SITE_URL = Deno.env.get('SITE_URL') || 'https://medtransic.com';

const ALL_SITE_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/about`,
  `${SITE_URL}/services`,
  `${SITE_URL}/specialties`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/pricing`,
  `${SITE_URL}/resources`,
  `${SITE_URL}/faq`,
  `${SITE_URL}/careers`,
  `${SITE_URL}/privacy`,
  `${SITE_URL}/terms`,
  `${SITE_URL}/services/medical-billing`,
  `${SITE_URL}/services/medical-coding`,
  `${SITE_URL}/services/credentialing`,
  `${SITE_URL}/services/denial-management`,
  `${SITE_URL}/services/ar-management`,
  `${SITE_URL}/services/eligibility-verification`,
  `${SITE_URL}/services/charge-entry-payment-posting`,
  `${SITE_URL}/services/payment-reconciliation`,
  `${SITE_URL}/services/patient-billing-support`,
  `${SITE_URL}/services/analytics-reporting`,
  `${SITE_URL}/services/ehr-emr-integration`,
  `${SITE_URL}/services/mips-macra-reporting`,
  `${SITE_URL}/services/compliance-hipaa-audits`,
  `${SITE_URL}/services/practice-management-consulting`,
  `${SITE_URL}/services/rcm-automation`,
  `${SITE_URL}/services/payer-contract-negotiation`,
  `${SITE_URL}/services/staff-training-sop`,
  `${SITE_URL}/services/old-ar-cleanup`,
  `${SITE_URL}/services/end-to-end-rcm`,
  `${SITE_URL}/services/call-center-scheduling`,
  `${SITE_URL}/services/data-security`,
  `${SITE_URL}/services/practice-launch`,
  `${SITE_URL}/services/hipaa-compliance`,
  `${SITE_URL}/services/telemedicine`,
  `${SITE_URL}/specialties/primary-care`,
  `${SITE_URL}/specialties/cardiology`,
  `${SITE_URL}/specialties/orthopedics`,
  `${SITE_URL}/specialties/dermatology`,
  `${SITE_URL}/specialties/gastroenterology`,
  `${SITE_URL}/specialties/neurosurgery`,
  `${SITE_URL}/specialties/oncology`,
  `${SITE_URL}/specialties/pediatrics`,
  `${SITE_URL}/specialties/obgyn`,
  `${SITE_URL}/specialties/ophthalmology`,
  `${SITE_URL}/specialties/urology`,
  `${SITE_URL}/specialties/ent`,
  `${SITE_URL}/specialties/pulmonology`,
  `${SITE_URL}/specialties/nephrology`,
  `${SITE_URL}/specialties/endocrinology`,
  `${SITE_URL}/specialties/rheumatology`,
  `${SITE_URL}/specialties/hematology`,
  `${SITE_URL}/specialties/infectious-disease`,
  `${SITE_URL}/specialties/allergy-immunology`,
  `${SITE_URL}/specialties/pain-management`,
  `${SITE_URL}/specialties/anesthesiology`,
  `${SITE_URL}/specialties/emergency-medicine`,
  `${SITE_URL}/specialties/family-medicine`,
  `${SITE_URL}/specialties/geriatrics`,
  `${SITE_URL}/specialties/plastic-surgery`,
  `${SITE_URL}/specialties/thoracic-surgery`,
  `${SITE_URL}/specialties/oral-maxillofacial-surgery`,
  `${SITE_URL}/specialties/sleep-medicine`,
  `${SITE_URL}/specialties/mental-health`,
  `${SITE_URL}/specialties/physical-therapy`,
  `${SITE_URL}/specialties/occupational-therapy`,
  `${SITE_URL}/specialties/speech-therapy`,
  `${SITE_URL}/specialties/respiratory-therapy`,
  `${SITE_URL}/specialties/chiropractic`,
  `${SITE_URL}/specialties/podiatry`,
  `${SITE_URL}/specialties/dental`,
  `${SITE_URL}/specialties/pathology`,
  `${SITE_URL}/specialties/interventional-radiology`,
  `${SITE_URL}/specialties/rehabilitation-sports-medicine`,
  `${SITE_URL}/specialties/physician-billing`,
  `${SITE_URL}/specialties/hospital-facility-billing`,
  `${SITE_URL}/specialties/laboratory-billing`,
  `${SITE_URL}/specialties/dme-billing`,
  `${SITE_URL}/specialties/telehealth-billing`,
  `${SITE_URL}/specialties/pharmacy-billing`,
  `${SITE_URL}/specialties/home-health`,
  `${SITE_URL}/specialties/urgent-care`,
  `${SITE_URL}/specialties/community-health-clinics`,
  `${SITE_URL}/specialties/occupational-health-clinics`,
  `${SITE_URL}/specialties/wound-care-centers`,
  `${SITE_URL}/specialties/diagnostic-imaging-radiology`,
  `${SITE_URL}/specialties/laboratories-pathology`,
  `${SITE_URL}/specialties/genetic-testing`,
  `${SITE_URL}/specialties/clinical-research`,
  `${SITE_URL}/specialties/durable-medical-equipment`,
  `${SITE_URL}/resources/cpt-codes-cheat-sheet`,
  `${SITE_URL}/resources/icd10-codes-reference`,
  `${SITE_URL}/resources/dental-codes-cheat-sheet`,
  `${SITE_URL}/resources/medical-billing-modifiers-guide`,
  `${SITE_URL}/resources/state-billing-laws`,
  `${SITE_URL}/integrations`,
];

async function submitToIndexNow(urls: string[]): Promise<any> {
  if (!INDEXNOW_KEY) {
    throw new Error('IndexNow API key not configured');
  }

  const host = new URL(SITE_URL).hostname;
  
  const indexNowUrl = 'https://www.bing.com/indexnow';
  
  const payload = {
    host: host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  console.log('Submitting to IndexNow:', { urlCount: urls.length, host });

  const response = await fetch(indexNowUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  return {
    status: response.status,
    statusText: response.statusText,
    ok: response.ok,
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let urlsToSubmit: string[] = [];

    if (req.method === 'GET') {
      urlsToSubmit = ALL_SITE_URLS;
    } else if (req.method === 'POST') {
      const body: IndexNowRequest = await req.json();
      
      if (body.useAllUrls) {
        urlsToSubmit = ALL_SITE_URLS;
      } else if (body.urls && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      } else {
        throw new Error('No URLs provided');
      }
    }

    if (urlsToSubmit.length === 0) {
      throw new Error('No URLs to submit');
    }

    const batchId = crypto.randomUUID();

    console.log(`Submitting ${urlsToSubmit.length} URLs to IndexNow`);

    const batches: string[][] = [];
    const batchSize = 10000;
    
    for (let i = 0; i < urlsToSubmit.length; i += batchSize) {
      batches.push(urlsToSubmit.slice(i, i + batchSize));
    }

    const results = [];
    let submitted = 0;
    let failed = 0;

    for (const batch of batches) {
      try {
        const result = await submitToIndexNow(batch);
        results.push({ batch: batch.length, result });

        for (const url of batch) {
          await supabase
            .from('indexnow_submissions')
            .insert({
              url,
              status: result.ok ? 'success' : 'failed',
              response_code: result.status,
              search_engine: 'bing',
              batch_id: batchId,
              response_message: result.statusText,
            });
        }

        if (result.ok) {
          submitted += batch.length;
        } else {
          failed += batch.length;
        }
      } catch (error) {
        console.error('Batch submission error:', error);
        failed += batch.length;

        for (const url of batch) {
          await supabase
            .from('indexnow_submissions')
            .insert({
              url,
              status: 'failed',
              search_engine: 'bing',
              batch_id: batchId,
              response_message: error instanceof Error ? error.message : 'Unknown error',
            });
        }
      }
    }

    const response: IndexNowResponse = {
      success: submitted > 0,
      submitted,
      failed,
      batchId,
      details: results,
    };

    return new Response(
      JSON.stringify(response),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in IndexNow submission:', error);

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