import { createClient } from '@supabase/supabase-js';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '../.env') });

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface StatePageData {
  state_name: string;
  state_code: string;
  slug: string;
  hero_title: string;
  hero_description: string;
  major_cities: string[];
  key_benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  meta_title: string;
  meta_description: string;
}

interface CityPageData {
  state_slug: string;
  city_name: string;
  city_slug: string;
  metro_area: string;
  population: string;
  hero_title: string;
  hero_description: string;
  key_benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  nearby_cities: string[];
  meta_title: string;
  meta_description: string;
}

function generateStateHTML(stateData: StatePageData, baseHTML: string): string {
  // Extract the base HTML template
  let html = baseHTML;

  // Update the title tag
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${stateData.meta_title}</title>`
  );

  // Add/update meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${stateData.meta_description}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <meta name="description" content="${stateData.meta_description}">\n  </head>`
    );
  }

  // Add canonical URL
  const canonicalURL = `https://medtransic.com/medical-billing-services/${stateData.slug}`;
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${canonicalURL}">\n  </head>`
    );
  }

  // Add Open Graph tags for better social sharing
  const ogTags = `
  <meta property="og:title" content="${stateData.meta_title}">
  <meta property="og:description" content="${stateData.meta_description}">
  <meta property="og:url" content="${canonicalURL}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${stateData.meta_title}">
  <meta name="twitter:description" content="${stateData.meta_description}">`;

  html = html.replace('</head>', `${ogTags}\n  </head>`);

  // Add structured data for the state page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Medtransic - ${stateData.state_name} Medical Billing Services`,
    "description": stateData.meta_description,
    "url": canonicalURL,
    "areaServed": {
      "@type": "State",
      "name": stateData.state_name
    },
    "serviceType": "Medical Billing Services"
  };

  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>\n  </head>`
  );

  // Add a preload tag for state data to speed up client-side hydration
  const stateDataScript = `
  <script id="state-data-${stateData.slug}" type="application/json">
    ${JSON.stringify(stateData)}
  </script>`;

  html = html.replace('</body>', `${stateDataScript}\n</body>`);

  return html;
}

function generateCityHTML(cityData: CityPageData, stateData: StatePageData, baseHTML: string): string {
  let html = baseHTML;

  // Update the title tag
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${cityData.meta_title}</title>`
  );

  // Add/update meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${cityData.meta_description}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <meta name="description" content="${cityData.meta_description}">\n  </head>`
    );
  }

  // Add canonical URL
  const canonicalURL = `https://medtransic.com/medical-billing-services/${cityData.state_slug}/${cityData.city_slug}`;
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${canonicalURL}">\n  </head>`
    );
  }

  // Add Open Graph tags
  const ogTags = `
  <meta property="og:title" content="${cityData.meta_title}">
  <meta property="og:description" content="${cityData.meta_description}">
  <meta property="og:url" content="${canonicalURL}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${cityData.meta_title}">
  <meta name="twitter:description" content="${cityData.meta_description}">`;

  html = html.replace('</head>', `${ogTags}\n  </head>`);

  // Add structured data for the city page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Medtransic - ${cityData.city_name}, ${stateData.state_name} Medical Billing Services`,
    "description": cityData.meta_description,
    "url": canonicalURL,
    "areaServed": {
      "@type": "City",
      "name": cityData.city_name,
      "containedIn": {
        "@type": "State",
        "name": stateData.state_name
      }
    },
    "serviceType": "Medical Billing Services"
  };

  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>\n  </head>`
  );

  // Add city data for client-side hydration
  const cityDataScript = `
  <script id="city-data-${cityData.city_slug}" type="application/json">
    ${JSON.stringify(cityData)}
  </script>`;

  html = html.replace('</body>', `${cityDataScript}\n</body>`);

  return html;
}

// Static page routes from sitemap
const STATIC_ROUTES = [
  // Main pages
  { path: 'about', title: 'About Us - Medical Billing Experts | Medtransic', description: 'Learn about Medtransic, a leading medical billing company with expertise in RCM, revenue cycle management, and healthcare billing solutions.' },
  { path: 'services', title: 'Medical Billing Services | RCM Solutions | Medtransic', description: 'Comprehensive medical billing and RCM services including coding, AR management, denial management, and revenue cycle optimization.' },
  { path: 'specialties', title: 'Medical Specialties We Serve | Billing Experts | Medtransic', description: 'Expert medical billing services for 50+ specialties including cardiology, orthopedics, mental health, physical therapy, and more.' },
  { path: 'pricing', title: 'Medical Billing Pricing | Transparent RCM Costs | Medtransic', description: 'Transparent medical billing pricing with no hidden fees. Custom RCM solutions tailored to your practice size and specialty.' },
  { path: 'contact', title: 'Contact Us - Get Your Free RCM Analysis | Medtransic', description: 'Contact Medtransic for a free revenue cycle analysis. Expert medical billing consultants ready to optimize your practice revenue.' },
  { path: 'resources', title: 'Medical Billing Resources & Guides | Medtransic', description: 'Free medical billing resources, guides, and tools to help healthcare practices optimize revenue cycle management.' },
  { path: 'faq', title: 'Medical Billing FAQs | Common RCM Questions Answered', description: 'Get answers to common questions about medical billing, revenue cycle management, coding, and healthcare reimbursement.' },
  { path: 'careers', title: 'Careers at Medtransic | Medical Billing Jobs', description: 'Join our team of medical billing experts. Explore career opportunities in revenue cycle management and healthcare billing.' },
  { path: 'resources/billing-glossary', title: 'Medical Billing Glossary | RCM Terms & Definitions', description: 'Comprehensive medical billing glossary with 200+ essential terms, codes, and healthcare acronyms. Expert definitions for billing, coding, RCM, and healthcare compliance terminology.' },
  { path: 'privacy', title: 'Privacy Policy | Medtransic', description: 'Medtransic privacy policy outlining how we protect your personal information and maintain HIPAA compliance.' },
  { path: 'terms-of-service', title: 'Terms of Service | Medtransic', description: 'Terms and conditions for using Medtransic medical billing services and website.' },
  { path: 'hipaa-compliance', title: 'HIPAA Compliance | Secure Medical Billing | Medtransic', description: 'Learn how Medtransic ensures HIPAA compliance and protects patient health information in all billing operations.' },
  { path: 'data-security', title: 'Data Security | Protected Health Information | Medtransic', description: 'Advanced data security measures to protect patient information and ensure secure medical billing operations.' },
  { path: 'practice-launch', title: 'Practice Launch Support | New Practice Setup | Medtransic', description: 'Complete practice launch support including billing setup, credentialing, and revenue cycle management for new practices.' },
  { path: 'ceo', title: 'Meet Our CEO | Healthcare Leadership | Medtransic', description: 'Learn about our CEO and leadership team driving innovation in medical billing and revenue cycle management.' },
  { path: 'about-website-design', title: 'Website Design Services | Medical Practice Websites', description: 'Professional website design services for medical practices with HIPAA-compliant patient portals and online scheduling.' },
  { path: 'comparisons', title: 'Medical Billing Comparisons | Service Analysis | Medtransic', description: 'Compare medical billing services, EHR systems, and revenue cycle management solutions to find the best fit for your practice.' },
  { path: 'locations', title: 'Locations We Serve | Nationwide Medical Billing | Medtransic', description: 'Medtransic provides medical billing services across all 50 states. Find local billing support for your practice.' },
  { path: 'aiphas', title: 'AI-Powered Healthcare Admin Solutions | AIPHAS | Medtransic', description: 'Advanced AI-powered healthcare administrative solutions to streamline medical billing and revenue cycle management.' },
  { path: 'chicago-medical-billing', title: 'Chicago Medical Billing Services | Illinois RCM | Medtransic', description: 'Professional medical billing services in Chicago, Illinois. Expert revenue cycle management for Chicago healthcare providers.' },
  { path: 'pk', title: 'Medical Billing Services Pakistan | Medtransic', description: 'Medtransic Pakistan office providing world-class medical billing services and healthcare revenue cycle management.' },
  { path: 'ph', title: 'Medical Billing Services Philippines | Medtransic', description: 'Medtransic Philippines office offering expert medical billing and revenue cycle management services.' },
];

// Service page routes with specific metadata
const SERVICE_ROUTES = {
  'rcm': {
    title: 'Revenue Cycle Management Services | End-to-End RCM Solutions',
    description: 'End-to-end RCM services: 99% clean claims, 50% faster payments, 24/7 monitoring. Certified billing specialists reduce denials & maximize revenue. Free RCM assessment available!'
  },
  'medical-billing': {
    title: 'Medical Billing Services | Professional Healthcare Billing',
    description: 'Professional medical billing services with 99% clean claims rate. Expert coding, claims management, and denial resolution. Increase revenue and reduce administrative burden.'
  },
  'ar-management': {
    title: 'Accounts Receivable Management | AR Collection Services',
    description: 'Comprehensive AR management services reduce aging accounts by 60%. Expert follow-up, claims tracking, and payment posting. Accelerate cash flow for your practice.'
  },
  'medical-coding': {
    title: 'Medical Coding Services | Certified Professional Coders',
    description: 'Certified medical coding services ensure accurate claim submissions. ICD-10, CPT, HCPCS coding by experienced professionals. Reduce denials and maximize reimbursements.'
  },
  'denial-management': {
    title: 'Denial Management Services | Claims Appeal Experts',
    description: 'Expert denial management reduces claim denials by 45%. Proactive denial prevention, root cause analysis, and strategic appeals. Recover lost revenue with 85% success rate.'
  },
  'eligibility-verification': {
    title: 'Insurance Eligibility Verification | Real-Time Coverage Checks',
    description: 'Real-time eligibility checks reduce denials 85% with 98% accuracy. Verify coverage, deductibles, prior auth in under 10 seconds. Increase upfront collections 40%. Free verification audit!'
  },
  'credentialing': {
    title: 'Provider Credentialing Services | Fast-Track Enrollment',
    description: 'Streamlined provider credentialing gets you enrolled 40% faster. Expert handling of CAQH, insurance applications, and re-credentialing. Start billing sooner with zero errors.'
  },
  'charge-entry-payment-posting': {
    title: 'Charge Entry & Payment Posting | Accurate Billing Services',
    description: 'Accurate charge entry and payment posting services with 99.8% accuracy. Same-day posting, detailed reconciliation, and variance detection. Improve cash flow visibility.'
  },
  'patient-billing-support': {
    title: 'Patient Billing Support Services | Patient Statement Services',
    description: 'Increase patient collections 45% with clear statements and flexible payment plans. 85% satisfaction rate, reduce call volume 60%. Multilingual support, online portal, financial counseling 24/7!'
  },
  'hospital-facility-billing': {
    title: 'Hospital & Facility Billing Services | Inpatient & Outpatient RCM',
    description: 'Specialized hospital and facility billing for inpatient, outpatient, and emergency services. Expert DRG coding, charge capture, and compliance monitoring. Reduce claim errors by 65%.'
  },
  'laboratory-billing': {
    title: 'Laboratory Billing Services | Clinical Lab RCM Solutions',
    description: 'Specialized laboratory billing services for clinical labs and pathology practices. Expert handling of complex LCD requirements, ABN processes, and modifier usage. Increase lab revenue 25%.'
  },
  'dme-billing': {
    title: 'DME Billing Services | Durable Medical Equipment RCM',
    description: 'Specialized DMEPOS billing for medical equipment suppliers. Expert prior authorization management, CMN documentation, and rental billing compliance. 92% PA approval rate.'
  },
  'physician-billing': {
    title: 'Physician Billing Services | Independent Practice RCM',
    description: 'Comprehensive physician billing services for solo and group practices. Maximize collections with expert E/M coding, modifier usage, and insurance follow-up. Reduce overhead by 30%.'
  },
  'telehealth-billing': {
    title: 'Telehealth Billing Services | Virtual Care RCM Solutions',
    description: 'Specialized telehealth and telemedicine billing services. Navigate complex virtual care regulations, modifiers, and reimbursement rules. Ensure compliant billing for all platforms.'
  },
  'old-ar-cleanup': {
    title: 'Old AR Cleanup | Recover 15-25% of Aged A/R',
    description: 'Recover 15-25% of aged A/R over 120 days with dedicated recovery team. $85K average project recovery in 90 days. Strategic appeals, patient collection. 100% contingency-based pricing!'
  },
  'rcm-automation': {
    title: 'RCM Automation Services | AI-Powered Revenue Cycle',
    description: 'AI-powered RCM automation reduces manual tasks by 70%. Automated eligibility checks, claims scrubbing, and payment posting. Increase efficiency while reducing operational costs 40%.'
  },
  'practice-management-consulting': {
    title: 'Practice Management Consulting | Healthcare Operations Experts',
    description: 'Healthcare consulting experts optimize workflows & increase profitability. 35% efficiency gains, 25% cost reduction, proven strategies. Free practice assessment for medical practices!'
  },
  'analytics-reporting': {
    title: 'Medical Billing Analytics & Reporting | Data-Driven Insights',
    description: 'Comprehensive analytics and reporting services provide actionable insights. Track KPIs, identify revenue trends, and optimize performance. Real-time dashboards and custom reports.'
  },
  'call-center-scheduling': {
    title: 'Call Center & Scheduling Services | Virtual Receptionist',
    description: 'Professional call center and patient scheduling services. 24/7 coverage, appointment reminders, and insurance verification. Reduce no-shows by 40% and improve patient satisfaction.'
  },
  'payment-reconciliation': {
    title: 'Payment Reconciliation Services | Medical Payment Processing',
    description: 'Automated variance detection identifies underpayments before they\'re lost. Recover $45K annually with contract verification. 85% appeal success rate, 100% claims audited. Audit-ready reports!'
  },
  'payer-contract-negotiation': {
    title: 'Payer Contract Negotiation | Maximize Reimbursement Rates',
    description: 'Expert payer contract negotiation increases reimbursement rates 15-25%. Strategic analysis, leverage competitive data, and negotiate favorable terms with insurance companies.'
  },
  'compliance-hipaa-audits': {
    title: 'HIPAA Compliance & Audits | Healthcare Security Services',
    description: 'Comprehensive HIPAA compliance audits and security assessments. Identify vulnerabilities, implement safeguards, and maintain ongoing compliance. Reduce audit risk and avoid penalties.'
  },
  'mips-macra-reporting': {
    title: 'MIPS & MACRA Reporting Services | Quality Payment Program',
    description: 'Expert MIPS and MACRA reporting maximizes quality payment incentives. Navigate complex requirements, submit accurate data, and achieve positive payment adjustments. Avoid penalties.'
  },
  'ehr-emr-integration': {
    title: 'EHR/EMR Integration 2025 | Seamless Data Flow | Zero Data Loss',
    description: 'Seamless EHR/EMR integration with Epic, Cerner, Athenahealth, eClinicalWorks using HL7/FHIR standards. Real-time charge capture, automated demographic updates, and bidirectional claim status feeds.'
  },
  'staff-training-sop': {
    title: 'Medical Billing Staff Training & SOP Services | Billing Education',
    description: 'Comprehensive billing staff training reduces errors 45%, accelerates onboarding 60%, boosts productivity 35%. Role-specific curriculum, documented SOPs, quality standards. Certification support!'
  },
  'virtual-assistants': {
    title: 'Medical Virtual Assistant Services | Remote Healthcare Support',
    description: 'Professional medical virtual assistants for administrative tasks, scheduling, and patient communication. Reduce overhead costs by 50% while maintaining quality service and support.'
  },
  'prior-authorization': {
    title: 'Prior Authorization Services | Fast-Track PA Approvals',
    description: 'Expert prior authorization services achieve 92% approval rate. Navigate complex payer requirements, expedite submissions, and reduce treatment delays. Real-time tracking and status updates.'
  },
  'payer-enrollment': {
    title: 'Payer Enrollment Services | Insurance Credentialing',
    description: 'Fast-track payer enrollment with Medicare, Medicaid, and commercial insurance plans. Expert application management, follow-up, and credential verification. Start billing 40% faster.'
  },
  'outsourcing-medical-billing': {
    title: 'Outsourcing Medical Billing Services | Full-Service RCM',
    description: 'Reduce costs by 30-50% and increase revenue by 15-25% with expert outsourced billing services. Complete revenue cycle management, dedicated account managers, and transparent reporting.'
  }
};

// Specialty page routes
const SPECIALTY_ROUTES = [
  'cardiology', 'physical-therapy', 'mental-health', 'orthopedics', 'dental',
  'ophthalmology', 'obgyn', 'gastroenterology', 'urology', 'urgent-care',
  'dermatology', 'allergy-immunology', 'pain-management', 'pediatrics', 'ent',
  'pulmonology', 'plastic-surgery', 'family-medicine', 'chiropractic', 'nephrology',
  'occupational-therapy', 'podiatry', 'anesthesiology', 'oncology', 'home-health',
  'laboratories-pathology', 'durable-medical-equipment', 'pharmacy-billing',
  'genetic-testing', 'respiratory-therapy', 'rheumatology', 'neurosurgery',
  'thoracic-surgery', 'hematology', 'endocrinology', 'infectious-disease',
  'wound-care', 'interventional-radiology', 'geriatrics', 'telemedicine',
  'community-health-clinics', 'primary-care-practices', 'rehabilitation-sports-medicine',
  'diagnostic-imaging-radiology', 'speech-therapy', 'sleep-medicine', 'pathology',
  'emergency-medicine', 'occupational-health-clinics', 'oral-maxillofacial-surgery',
  'clinical-research'
];

function generateStaticPageHTML(route: { path: string; title: string; description: string }, baseHTML: string): string {
  let html = baseHTML;

  // Update title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Update meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <meta name="description" content="${route.description}">\n  </head>`
    );
  }

  // Add canonical URL
  const canonicalURL = `https://medtransic.com/${route.path}`;
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${canonicalURL}">\n  </head>`
    );
  }

  // Add Open Graph tags
  const ogTags = `
  <meta property="og:title" content="${route.title}">
  <meta property="og:description" content="${route.description}">
  <meta property="og:url" content="${canonicalURL}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${route.title}">
  <meta name="twitter:description" content="${route.description}">`;

  html = html.replace('</head>', `${ogTags}\n  </head>`);

  return html;
}

function generateServicePageHTML(serviceSlug: string, baseHTML: string): string {
  const serviceData = SERVICE_ROUTES[serviceSlug as keyof typeof SERVICE_ROUTES];

  if (!serviceData) {
    // Fallback for services not in the mapping
    const serviceName = serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const title = `${serviceName} Services | Medical Billing Solutions | Medtransic`;
    const description = `Expert ${serviceName.toLowerCase()} services for healthcare practices. Optimize your revenue cycle with professional medical billing support.`;
    return generateStaticPageHTML({ path: `services/${serviceSlug}`, title, description }, baseHTML);
  }

  return generateStaticPageHTML({
    path: `services/${serviceSlug}`,
    title: serviceData.title,
    description: serviceData.description
  }, baseHTML);
}

function generateSpecialtyPageHTML(specialtySlug: string, baseHTML: string): string {
  const specialtyName = specialtySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = `${specialtyName} Medical Billing Services | RCM Solutions | Medtransic`;
  const description = `Specialized medical billing services for ${specialtyName.toLowerCase()} practices. Expert revenue cycle management tailored to your specialty.`;

  return generateStaticPageHTML({ path: `specialties/${specialtySlug}`, title, description }, baseHTML);
}

async function prerenderPages() {
  console.log('🚀 Starting pre-rendering process...\n');

  // Read the base HTML template
  console.log('📄 Reading base HTML template...');
  const distPath = join(__dirname, '../dist');
  const baseHTMLPath = join(distPath, 'index.html');

  let baseHTML: string;
  try {
    baseHTML = readFileSync(baseHTMLPath, 'utf-8');
    console.log('✅ Base HTML template loaded\n');
  } catch (error) {
    console.error('❌ Could not read base HTML. Make sure to run `npm run build:no-prerender` first');
    process.exit(1);
  }

  let totalSuccess = 0;
  let totalError = 0;

  // Fetch all state pages from Supabase
  console.log('📊 Fetching state pages from database...');
  const { data: states, error } = await supabase
    .from('state_pages')
    .select('*')
    .order('state_name');

  if (error) {
    console.error('❌ Error fetching states:', error);
    process.exit(1);
  }

  if (!states || states.length === 0) {
    console.log('⚠️  No states found in database');
    return;
  }

  console.log(`✅ Found ${states.length} state pages to pre-render\n`);

  let successCount = 0;
  let errorCount = 0;

  // Generate HTML for each state page
  for (const state of states as StatePageData[]) {
    try {
      console.log(`🔄 Generating HTML for: ${state.state_name} (${state.slug})...`);

      // Generate the HTML with state-specific content
      const stateHTML = generateStateHTML(state, baseHTML);

      // Create directory structure
      const pagePath = join(distPath, 'medical-billing-services', state.slug);
      mkdirSync(pagePath, { recursive: true });

      // Write HTML file
      const htmlPath = join(pagePath, 'index.html');
      writeFileSync(htmlPath, stateHTML, 'utf-8');

      console.log(`   ✅ Saved to: /medical-billing-services/${state.slug}/index.html`);
      successCount++;
    } catch (error) {
      console.error(`   ❌ Error generating ${state.state_name}:`, error);
      errorCount++;
    }
  }

  console.log('\n📊 State Pages Pre-rendering Summary:');
  console.log(`   ✅ Successfully generated: ${successCount} state pages`);
  if (errorCount > 0) {
    console.log(`   ❌ Failed: ${errorCount} state pages`);
  }

  // Fetch all city pages from Supabase
  console.log('\n📊 Fetching city pages from database...');
  const { data: cities, error: cityError } = await supabase
    .from('city_pages')
    .select('*')
    .order('city_name');

  if (cityError) {
    console.error('❌ Error fetching cities:', cityError);
  } else if (!cities || cities.length === 0) {
    console.log('⚠️  No cities found in database');
  } else {
    console.log(`✅ Found ${cities.length} city pages to pre-render\n`);

    let citySuccessCount = 0;
    let cityErrorCount = 0;

    // Create a map of states for quick lookup
    const stateMap = new Map<string, StatePageData>();
    states.forEach((state: any) => {
      stateMap.set(state.slug, state);
    });

    // Generate HTML for each city page
    for (const city of cities as CityPageData[]) {
      try {
        const stateData = stateMap.get(city.state_slug);
        if (!stateData) {
          console.log(`   ⚠️  Skipping ${city.city_name}: State not found`);
          continue;
        }

        console.log(`🔄 Generating HTML for: ${city.city_name}, ${stateData.state_name} (${city.state_slug}/${city.city_slug})...`);

        // Generate the HTML with city-specific content
        const cityHTML = generateCityHTML(city, stateData, baseHTML);

        // Create directory structure
        const pagePath = join(distPath, 'medical-billing-services', city.state_slug, city.city_slug);
        mkdirSync(pagePath, { recursive: true });

        // Write HTML file
        const htmlPath = join(pagePath, 'index.html');
        writeFileSync(htmlPath, cityHTML, 'utf-8');

        console.log(`   ✅ Saved to: /medical-billing-services/${city.state_slug}/${city.city_slug}/index.html`);
        citySuccessCount++;
      } catch (error) {
        console.error(`   ❌ Error generating ${city.city_name}:`, error);
        cityErrorCount++;
      }
    }

    console.log('\n📊 City Pages Pre-rendering Summary:');
    console.log(`   ✅ Successfully generated: ${citySuccessCount} city pages`);
    if (cityErrorCount > 0) {
      console.log(`   ❌ Failed: ${cityErrorCount} city pages`);
    }

    totalSuccess = successCount + citySuccessCount;
    totalError = errorCount + cityErrorCount;
  }

  // If no cities were processed, still count state pages
  if (!cities || cities.length === 0) {
    totalSuccess = successCount;
    totalError = errorCount;
  }

  // Generate static pages
  console.log('\n📊 Pre-rendering static pages...');
  let staticSuccess = 0;
  let staticError = 0;

  for (const route of STATIC_ROUTES) {
    try {
      console.log(`🔄 Generating HTML for: ${route.path}...`);
      const pageHTML = generateStaticPageHTML(route, baseHTML);

      const pagePath = join(distPath, route.path);
      mkdirSync(pagePath, { recursive: true });

      const htmlPath = join(pagePath, 'index.html');
      writeFileSync(htmlPath, pageHTML, 'utf-8');

      console.log(`   ✅ Saved to: /${route.path}/index.html`);
      staticSuccess++;
    } catch (error) {
      console.error(`   ❌ Error generating ${route.path}:`, error);
      staticError++;
    }
  }

  console.log('\n📊 Static Pages Summary:');
  console.log(`   ✅ Successfully generated: ${staticSuccess} static pages`);
  if (staticError > 0) {
    console.log(`   ❌ Failed: ${staticError} static pages`);
  }

  totalSuccess += staticSuccess;
  totalError += staticError;

  // Generate service pages
  console.log('\n📊 Pre-rendering service pages...');
  let serviceSuccess = 0;
  let serviceError = 0;

  for (const serviceSlug of Object.keys(SERVICE_ROUTES)) {
    try {
      console.log(`🔄 Generating HTML for: services/${serviceSlug}...`);
      const pageHTML = generateServicePageHTML(serviceSlug, baseHTML);

      const pagePath = join(distPath, 'services', serviceSlug);
      mkdirSync(pagePath, { recursive: true });

      const htmlPath = join(pagePath, 'index.html');
      writeFileSync(htmlPath, pageHTML, 'utf-8');

      console.log(`   ✅ Saved to: /services/${serviceSlug}/index.html`);
      serviceSuccess++;
    } catch (error) {
      console.error(`   ❌ Error generating services/${serviceSlug}:`, error);
      serviceError++;
    }
  }

  console.log('\n📊 Service Pages Summary:');
  console.log(`   ✅ Successfully generated: ${serviceSuccess} service pages`);
  if (serviceError > 0) {
    console.log(`   ❌ Failed: ${serviceError} service pages`);
  }

  totalSuccess += serviceSuccess;
  totalError += serviceError;

  // Generate specialty pages
  console.log('\n📊 Pre-rendering specialty pages...');
  let specialtySuccess = 0;
  let specialtyError = 0;

  for (const specialtySlug of SPECIALTY_ROUTES) {
    try {
      console.log(`🔄 Generating HTML for: specialties/${specialtySlug}...`);
      const pageHTML = generateSpecialtyPageHTML(specialtySlug, baseHTML);

      const pagePath = join(distPath, 'specialties', specialtySlug);
      mkdirSync(pagePath, { recursive: true });

      const htmlPath = join(pagePath, 'index.html');
      writeFileSync(htmlPath, pageHTML, 'utf-8');

      console.log(`   ✅ Saved to: /specialties/${specialtySlug}/index.html`);
      specialtySuccess++;
    } catch (error) {
      console.error(`   ❌ Error generating specialties/${specialtySlug}:`, error);
      specialtyError++;
    }
  }

  console.log('\n📊 Specialty Pages Summary:');
  console.log(`   ✅ Successfully generated: ${specialtySuccess} specialty pages`);
  if (specialtyError > 0) {
    console.log(`   ❌ Failed: ${specialtyError} specialty pages`);
  }

  totalSuccess += specialtySuccess;
  totalError += specialtyError;

  console.log('\n📊 Total Pre-rendering Summary:');
  console.log(`   ✅ Total pages generated: ${totalSuccess} pages`);
  if (totalError > 0) {
    console.log(`   ❌ Total failed: ${totalError} pages`);
  }
  console.log('\n🎉 Pre-rendering complete!');
}

// Run the prerender process
prerenderPages().catch((error) => {
  console.error('❌ Pre-rendering failed:', error);
  process.exit(1);
});
