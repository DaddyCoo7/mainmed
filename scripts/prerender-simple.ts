import { createClient } from '@supabase/supabase-js';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { renderPageSSR } from './ssr-renderer.js';

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

  // Add meta robots tag
  if (!html.includes('<meta name="robots"')) {
    html = html.replace(
      '</head>',
      '  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n  </head>'
    );
  }

  // Add breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://medtransic.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Medical Billing Services",
        "item": "https://medtransic.com/medical-billing-services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": stateData.state_name,
        "item": canonicalURL
      }
    ]
  };

  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>\n  </head>`
  );

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

  // Add static H1 and content for SEO crawlers (VISIBLE content)
  const staticContent = `<div id="root"><div class="min-h-screen bg-white"><main class="pt-24 pb-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-4xl font-bold text-gray-900 mb-6">${stateData.hero_title}</h1><p class="text-lg text-gray-700 leading-relaxed mb-8">${stateData.hero_description}</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Cities We Serve in ${stateData.state_name}</h2><ul class="list-disc list-inside text-gray-700 space-y-2">${stateData.major_cities.map(city => `<li>${city}</li>`).join('')}</ul></div></main></div></div>`;

  html = html.replace(/<div id="root">[\s\S]*?<\/div>(\s*<\/div>)?/, staticContent);

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

  // Add meta robots tag
  if (!html.includes('<meta name="robots"')) {
    html = html.replace(
      '</head>',
      '  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n  </head>'
    );
  }

  // Add breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://medtransic.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Medical Billing Services",
        "item": "https://medtransic.com/medical-billing-services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": stateData.state_name,
        "item": `https://medtransic.com/medical-billing-services/${cityData.state_slug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": cityData.city_name,
        "item": canonicalURL
      }
    ]
  };

  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>\n  </head>`
  );

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

  // Add static H1 and content for SEO crawlers (VISIBLE content)
  const staticContent = `<div id="root"><div class="min-h-screen bg-white"><main class="pt-24 pb-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-4xl font-bold text-gray-900 mb-6">${cityData.hero_title}</h1><p class="text-lg text-gray-700 leading-relaxed mb-8">${cityData.hero_description}</p><div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8"><h2 class="text-xl font-bold text-gray-900 mb-3">About ${cityData.city_name}</h2><p class="text-gray-700 mb-2"><strong>Metro Area:</strong> ${cityData.metro_area}</p><p class="text-gray-700"><strong>Population:</strong> ${cityData.population}</p></div>${cityData.nearby_cities.length > 0 ? `<h2 class="text-2xl font-bold text-gray-900 mb-4">Nearby Cities We Serve</h2><ul class="list-disc list-inside text-gray-700 space-y-2">${cityData.nearby_cities.map(city => `<li>${city}</li>`).join('')}</ul>` : ''}</div></main></div></div>`;

  html = html.replace(/<div id="root">[\s\S]*?<\/div>(\s*<\/div>)?/, staticContent);

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
  // Note: 'services' is generated separately with full content (28 services) - see above
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

// Specialty page routes with detailed descriptions
const SPECIALTY_ROUTES = {
  'cardiology': {
    title: 'Cardiology Billing Services | Heart Care RCM Experts | Medtransic',
    description: 'Expert cardiology billing for CPT 93000-93799. Specialized in ECG, stress tests, cath lab, EP studies. Maximize cardiovascular reimbursement.'
  },
  'physical-therapy': {
    title: 'Physical Therapy Billing | PT RCM Services | Medtransic',
    description: 'Specialized PT billing for CPT 97000-97799 codes. Expert handling of therapeutic procedures, manual therapy, modalities, and evaluations. Navigate Medicare therapy caps, KX modifiers, and functional reporting. Increase PT practice revenue 25%.'
  },
  'mental-health': {
    title: 'Mental Health Billing Services | Behavioral Health RCM | Medtransic',
    description: 'Expert mental health billing for psychiatry, psychology, counseling. Specialized in CPT 90791-90899 codes, telepsychiatry, group therapy, and complex E/M services. Handle commercial, Medicare, Medicaid with 95% clean claim rate.'
  },
  'orthopedics': {
    title: 'Orthopedic Billing Services | Orthopedic Surgery RCM | Medtransic',
    description: 'Specialized orthopedic billing for CPT 20000-29999 codes. Expert in joint replacements, arthroscopy, fracture care, spine surgery. Handle global periods, modifier 25/59 usage, DME billing. Maximize surgical and E/M reimbursements.'
  },
  'dental': {
    title: 'Dental Billing Services | Dental Insurance Claims | Medtransic',
    description: 'Comprehensive dental billing services for general, cosmetic, and specialty dentistry. Expert CDT code submission, insurance verification, treatment planning. Handle PPO, HMO, Medicaid dental plans. Increase collections 30%.'
  },
  'ophthalmology': {
    title: 'Ophthalmology Billing | Eye Care RCM Services | Medtransic',
    description: 'Expert ophthalmology billing for CPT 65000-68899 codes. Specialized in cataract surgery, LASIK, glaucoma care, retinal procedures. Handle medical vs. vision billing, refractive surgery, and complex eye exams. Optimize ASC billing.'
  },
  'obgyn': {
    title: 'OB/GYN Billing Services | Women\'s Health RCM | Medtransic',
    description: 'Specialized OB/GYN billing for prenatal care, deliveries, gynecological surgery. Expert CPT 59000-59899, 56000-58999 codes. Handle global maternity packages, infertility treatments, office procedures. Maximize reimbursement for women\'s health services.'
  },
  'gastroenterology': {
    title: 'Gastroenterology Billing | GI RCM Services | Medtransic',
    description: 'Expert GI billing for CPT 43000-49999 codes. Specialized in endoscopy, colonoscopy, EGD procedures, biopsies. Handle ASC billing, multiple procedures, sedation codes. Optimize facility and professional fee billing. Increase revenue 28%.'
  },
  'urology': {
    title: 'Urology Billing Services | Urologic Surgery RCM | Medtransic',
    description: 'Specialized urology billing for CPT 50000-55899 codes. Expert in cystoscopy, TURP, lithotripsy, prostate procedures. Handle office-based procedures, ASC services, oncology care. Maximize reimbursement for urological services.'
  },
  'urgent-care': {
    title: 'Urgent Care Billing Services | Urgent Care RCM | Medtransic',
    description: 'Fast-paced urgent care billing services. Expert E/M coding 99281-99285, laceration repairs, X-rays, occupational medicine. Handle workers\' comp, no-fault auto insurance, after-hours care. Reduce claim turnaround time 40%.'
  },
  'dermatology': {
    title: 'Dermatology Billing Services | Skin Care RCM | Medtransic',
    description: 'Expert dermatology billing for CPT 10000-11999 codes. Specialized in biopsies, excisions, Mohs surgery, cosmetic procedures. Handle medical vs. cosmetic billing, pathology integration, multiple lesion procedures. Increase dermatology revenue 30%.'
  },
  'allergy-immunology': {
    title: 'Allergy & Immunology Billing | Allergy Testing RCM | Medtransic',
    description: 'Specialized allergy billing for CPT 95004-95199 codes. Expert in skin testing, immunotherapy, pulmonary function tests, venom therapy. Handle multiple allergen codes, dose adjustments, and immunology services. Optimize allergy practice revenue.'
  },
  'pain-management': {
    title: 'Pain Management Billing | Interventional Pain RCM | Medtransic',
    description: 'Expert pain management billing for CPT 62000-64999 codes. Specialized in epidurals, nerve blocks, radiofrequency ablation, trigger point injections. Handle ASC procedures, fluoroscopy guidance, multiple injections. Maximize interventional pain revenue.'
  },
  'pediatrics': {
    title: 'Pediatric Billing Services | Children\'s Health RCM | Medtransic',
    description: 'Comprehensive pediatric billing for well-child visits, sick visits, immunizations. Expert E/M coding, preventive services, developmental screenings. Handle CHIP, Medicaid, VFC programs. Specialized in pediatric procedure coding and vaccine administration.'
  },
  'ent': {
    title: 'ENT Billing Services | Otolaryngology RCM | Medtransic',
    description: 'Expert ENT billing for CPT 69000-69979 codes. Specialized in sinus surgery, tonsillectomy, adenoidectomy, audiology services. Handle office procedures, allergy testing, sleep apnea devices. Maximize reimbursement for ENT and audiology services.'
  },
  'pulmonology': {
    title: 'Pulmonology Billing Services | Respiratory Care RCM | Medtransic',
    description: 'Specialized pulmonology billing for CPT 94010-94799 codes. Expert in PFTs, bronchoscopy, sleep studies, ventilation management. Handle critical care, hospital consults, COPD management. Optimize pulmonary function testing and procedure billing.'
  },
  'plastic-surgery': {
    title: 'Plastic Surgery Billing | Cosmetic & Reconstructive RCM | Medtransic',
    description: 'Expert plastic surgery billing for CPT 15000-17999 codes. Specialized in reconstructive procedures, cosmetic surgery, burn care, flaps. Navigate medical necessity requirements, modifier usage, before/after documentation. Maximize insurance reimbursements.'
  },
  'family-medicine': {
    title: 'Family Medicine Billing | Primary Care RCM | Medtransic',
    description: 'Comprehensive family medicine billing for all ages. Expert E/M coding 99202-99215, preventive services, chronic care management. Handle Medicare AWVs, TCM, care coordination. Maximize reimbursement for primary care services and quality programs.'
  },
  'chiropractic': {
    title: 'Chiropractic Billing Services | Chiropractic RCM | Medtransic',
    description: 'Specialized chiropractic billing for CPT 98940-98943 codes. Expert in spinal manipulation, therapy modalities, evaluations. Handle Medicare limitations, PI cases, workers\' comp. Navigate AT modifier requirements and documentation. Increase collections 35%.'
  },
  'nephrology': {
    title: 'Nephrology Billing Services | Kidney Care RCM | Medtransic',
    description: 'Expert nephrology billing for CPT 90935-90999 codes. Specialized in dialysis services, kidney disease management, vascular access. Handle ESRD bundles, home dialysis, transplant care. Maximize reimbursement for nephrology and dialysis services.'
  },
  'occupational-therapy': {
    title: 'Occupational Therapy Billing | OT RCM Services | Medtransic',
    description: 'Specialized OT billing for CPT 97000-97799 codes. Expert in ADL training, cognitive therapy, hand therapy, evaluations. Navigate Medicare caps, KX modifiers, functional reporting. Handle pediatric and adult OT services. Increase OT revenue 28%.'
  },
  'podiatry': {
    title: 'Podiatry Billing Services | Foot & Ankle Care RCM | Medtransic',
    description: 'Expert podiatry billing for CPT 28000-28899 codes. Specialized in foot surgery, wound care, diabetic foot care, orthotics. Handle routine foot care limitations, medical necessity, LOPS documentation. Maximize reimbursement for podiatric services.'
  },
  'anesthesiology': {
    title: 'Anesthesiology Billing Services | Anesthesia RCM | Medtransic',
    description: 'Specialized anesthesiology billing with time-based unit calculations. Expert in base units, modifying units, physical status codes. Handle MAC, regional anesthesia, pain management, critical care. Maximize anesthesia reimbursement with accurate documentation.'
  },
  'oncology': {
    title: 'Oncology Billing Services | Cancer Care RCM | Medtransic',
    description: 'Expert oncology billing for chemotherapy, radiation therapy, infusion services. Specialized in J-codes, HCPCS drugs, OCM program. Handle complex medication billing, clinical trials, supportive care. Maximize oncology practice revenue and OCM bonuses.'
  },
  'home-health': {
    title: 'Home Health Billing Services | Home Care RCM | Medtransic',
    description: 'Comprehensive home health billing for Medicare, Medicaid, commercial insurance. Expert OASIS assessments, PDGM billing, HHRGs. Handle skilled nursing, PT, OT, aide services. Maximize reimbursement for home health agencies with 98% clean claim rate.'
  },
  'laboratories-pathology': {
    title: 'Laboratory & Pathology Billing | Lab RCM Services | Medtransic',
    description: 'Specialized laboratory billing for CPT 80000-89999 codes. Expert in clinical lab, anatomic pathology, molecular testing. Handle LCD compliance, ABNs, limited coverage policies. Maximize lab reimbursement with proper modifier usage and documentation.'
  },
  'durable-medical-equipment': {
    title: 'DME Billing Services | Medical Equipment RCM | Medtransic',
    description: 'Expert DME billing for wheelchairs, oxygen, CPAP, orthotics, prosthetics. Specialized in prior authorizations, CMNs, rental billing, purchase options. Handle competitive bidding, replacement schedules. Maximize DME supplier revenue with 92% PA approval rate.'
  },
  'pharmacy-billing': {
    title: 'Pharmacy Billing Services | Specialty Pharmacy RCM | Medtransic',
    description: 'Specialized pharmacy billing for specialty medications, compounding, infusion pharmacy. Expert NDC codes, DAW codes, prior authorizations. Handle 340B programs, manufacturer copay assistance, reimbursement optimization. Increase pharmacy revenue 25%.'
  },
  'genetic-testing': {
    title: 'Genetic Testing Billing | Molecular Diagnostics RCM | Medtransic',
    description: 'Expert genetic testing billing for molecular diagnostics, hereditary cancer panels, PGx testing. Navigate complex LCD requirements, medical necessity documentation, ABNs. Handle commercial payers, Medicare, Medicaid. Maximize genetic lab reimbursement.'
  },
  'respiratory-therapy': {
    title: 'Respiratory Therapy Billing | RT Services RCM | Medtransic',
    description: 'Specialized respiratory therapy billing for CPT 94002-94799 codes. Expert in ventilator management, aerosol treatments, pulmonary rehab, sleep studies. Handle hospital-based and outpatient RT services. Optimize respiratory care billing and documentation.'
  },
  'rheumatology': {
    title: 'Rheumatology Billing Services | Arthritis Care RCM | Medtransic',
    description: 'Expert rheumatology billing for autoimmune diseases, arthritis care, infusion therapy. Specialized in biologic medications, joint injections, imaging. Handle prior authorizations, specialty drug billing, complex E/M services. Maximize rheumatology practice revenue.'
  },
  'neurosurgery': {
    title: 'Neurosurgery Billing Services | Brain & Spine Surgery RCM | Medtransic',
    description: 'Specialized neurosurgery billing for CPT 61000-64999 codes. Expert in cranial procedures, spine surgery, peripheral nerve surgery. Handle complex surgical coding, critical care, global periods. Maximize neurosurgical reimbursement with accurate documentation.'
  },
  'thoracic-surgery': {
    title: 'Thoracic Surgery Billing | Cardiothoracic RCM | Medtransic',
    description: 'Expert thoracic surgery billing for CPT 32000-33999 codes. Specialized in lung surgery, cardiac surgery, esophageal procedures. Handle CABG, valve replacements, thoracoscopy. Maximize reimbursement for cardiothoracic and thoracic surgical services.'
  },
  'hematology': {
    title: 'Hematology Billing Services | Blood Disorder RCM | Medtransic',
    description: 'Specialized hematology billing for blood disorders, coagulation management, transfusion services. Expert in factor replacement, anticoagulation clinics, bone marrow procedures. Handle complex drug billing, infusion services, laboratory integration. Optimize hematology revenue.'
  },
  'endocrinology': {
    title: 'Endocrinology Billing Services | Diabetes & Hormone Care RCM | Medtransic',
    description: 'Expert endocrinology billing for diabetes management, thyroid care, hormone disorders. Specialized in continuous glucose monitoring, insulin pumps, bone density testing. Handle diabetes education, nutrition counseling, endocrine procedures. Maximize endocrinology revenue.'
  },
  'infectious-disease': {
    title: 'Infectious Disease Billing | ID Specialist RCM | Medtransic',
    description: 'Specialized infectious disease billing for hospital consults, HIV care, antimicrobial management. Expert in prolonged services, complex E/M coding, infusion therapy. Handle hepatitis C treatment, travel medicine, infection prevention services. Optimize ID physician revenue.'
  },
  'wound-care': {
    title: 'Wound Care Billing Services | Wound Center RCM | Medtransic',
    description: 'Expert wound care billing for CPT 11000-11999 codes. Specialized in debridement, biologics, hyperbaric oxygen, skin substitutes. Handle outpatient wound centers, HOPD billing, product billing. Maximize reimbursement for advanced wound care services.'
  },
  'interventional-radiology': {
    title: 'Interventional Radiology Billing | IR Procedures RCM | Medtransic',
    description: 'Specialized IR billing for CPT 36000-37799 codes. Expert in catheter procedures, embolization, biopsies, ablations. Handle professional and technical components, multiple procedures, image guidance. Maximize interventional radiology revenue with accurate coding.'
  },
  'geriatrics': {
    title: 'Geriatrics Billing Services | Senior Care RCM | Medtransic',
    description: 'Comprehensive geriatrics billing for elderly care, memory care, chronic disease management. Expert in Medicare AWVs, CCM, TCM, home visits. Handle nursing home billing, hospice care, palliative care. Maximize reimbursement for geriatric services.'
  },
  'telemedicine': {
    title: 'Telemedicine Billing Services | Virtual Care RCM | Medtransic',
    description: 'Expert telemedicine billing with modifier 95/GT expertise. Navigate telehealth CPT codes, originating/distant site requirements, state regulations. Handle virtual E/M visits, remote monitoring, e-consults. Maximize reimbursement for all telehealth platforms.'
  },
  'community-health-clinics': {
    title: 'Community Health Center Billing | FQHC RCM | Medtransic',
    description: 'Specialized FQHC billing for community health centers. Expert in PPS rates, scope of services, enabling services, sliding fee scales. Handle UDS reporting, HRSA compliance, wraparound services. Maximize PPS reimbursement and grant reporting.'
  },
  'primary-care-practices': {
    title: 'Primary Care Billing Services | Family Practice RCM | Medtransic',
    description: 'Comprehensive primary care billing for family medicine, internal medicine, pediatrics. Expert E/M coding, preventive services, chronic care management, quality programs. Handle MIPS, PCMH, value-based care. Maximize primary care revenue and quality bonuses.'
  },
  'rehabilitation-sports-medicine': {
    title: 'Rehabilitation & Sports Medicine Billing | Sports RCM | Medtransic',
    description: 'Expert sports medicine billing for CPT 97000-97799, 20000-29999 codes. Specialized in orthopedic rehabilitation, sports injuries, athletic training services. Handle PT, OT, chiropractic services. Maximize sports medicine and rehabilitation revenue.'
  },
  'diagnostic-imaging-radiology': {
    title: 'Radiology Billing Services | Imaging Center RCM | Medtransic',
    description: 'Specialized radiology billing for CPT 70000-79999 codes. Expert in X-ray, CT, MRI, ultrasound, mammography. Handle professional and technical components, contrast billing, multiple views. Maximize imaging center and radiology practice revenue.'
  },
  'speech-therapy': {
    title: 'Speech Therapy Billing | Speech-Language Pathology RCM | Medtransic',
    description: 'Expert speech therapy billing for CPT 92507-92609 codes. Specialized in evaluations, individual therapy, group therapy, swallowing studies. Navigate Medicare caps, KX modifiers, functional reporting. Handle pediatric and adult SLP services. Increase revenue 30%.'
  },
  'sleep-medicine': {
    title: 'Sleep Medicine Billing Services | Sleep Study RCM | Medtransic',
    description: 'Specialized sleep medicine billing for CPT 95800-95811 codes. Expert in polysomnography, home sleep tests, CPAP management, split-night studies. Handle facility and professional fees, DMEPOS billing. Maximize sleep center revenue with accurate documentation.'
  },
  'pathology': {
    title: 'Pathology Billing Services | Anatomic Pathology RCM | Medtransic',
    description: 'Expert pathology billing for CPT 88000-88399 codes. Specialized in surgical pathology, cytology, molecular pathology, immunohistochemistry. Handle TC/PC components, specimen types, additional studies. Maximize pathology lab reimbursement with proper coding.'
  },
  'emergency-medicine': {
    title: 'Emergency Medicine Billing | ED Physician RCM | Medtransic',
    description: 'Fast-paced emergency medicine billing for CPT 99281-99288 codes. Expert in critical care, trauma care, observation services, procedures. Handle modifier 25 usage, facility fees, professional services. Maximize EM physician revenue with accurate documentation.'
  },
  'occupational-health-clinics': {
    title: 'Occupational Health Billing | Workers\' Comp RCM | Medtransic',
    description: 'Specialized occupational health billing for workers\' compensation, DOT physicals, drug screening, immunizations. Expert in state-specific workers\' comp billing, fee schedules, authorization requirements. Handle employer contracts, surveillance exams. Increase revenue 28%.'
  },
  'oral-maxillofacial-surgery': {
    title: 'Oral Surgery Billing | Maxillofacial Surgery RCM | Medtransic',
    description: 'Expert oral surgery billing for CPT/CDT codes. Specialized in dental extractions, wisdom teeth, dental implants, jaw surgery, TMJ treatment. Navigate medical vs. dental billing, medical necessity, anesthesia billing. Maximize oral surgeon revenue.'
  },
  'clinical-research': {
    title: 'Clinical Research Billing | Clinical Trial RCM | Medtransic',
    description: 'Specialized clinical research billing for sponsored trials, investigator-initiated studies. Expert in Medicare clinical trial policy, standard of care vs. research costs, protocol billing grids. Handle sponsor invoicing, patient billing separation, compliance documentation.'
  }
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

function generateStaticPageHTML(
  route: { path: string; title: string; description: string },
  baseHTML: string,
  breadcrumbs?: BreadcrumbItem[]
): string {
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

  // Add meta robots tag
  if (!html.includes('<meta name="robots"')) {
    html = html.replace(
      '</head>',
      '  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n  </head>'
    );
  }

  // Add Breadcrumb Schema if breadcrumbs provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>\n  </head>`
    );
  }

  // Extract H1 from title (remove " | Medtransic" suffix if present)
  const h1Text = route.title.replace(/ \| Medtransic$/, '');

  // Add static H1 and content for SEO crawlers (VISIBLE content that React will hydrate over)
  // Using server-rendered content that's visible to all crawlers
  const staticContent = `<div id="root"><div class="min-h-screen bg-white"><main class="pt-24 pb-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-4xl font-bold text-gray-900 mb-6">${h1Text}</h1><p class="text-lg text-gray-700 leading-relaxed">${route.description}</p></div></main></div></div>`;

  html = html.replace(/<div id="root">[\s\S]*?<\/div>(\s*<\/div>)?/, staticContent);

  return html;
}

function generateServicePageHTML(serviceSlug: string, baseHTML: string): string {
  const serviceData = SERVICE_ROUTES[serviceSlug as keyof typeof SERVICE_ROUTES];

  if (!serviceData) {
    // Fallback for services not in the mapping
    const serviceName = serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const title = `${serviceName} Services | Medical Billing Solutions | Medtransic`;
    const description = `Expert ${serviceName.toLowerCase()} services for healthcare practices. Optimize your revenue cycle with professional medical billing support.`;

    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', url: 'https://medtransic.com/' },
      { name: 'Services', url: 'https://medtransic.com/services' },
      { name: serviceName, url: `https://medtransic.com/services/${serviceSlug}` }
    ];

    return generateStaticPageHTML({ path: `services/${serviceSlug}`, title, description }, baseHTML, breadcrumbs);
  }

  // Create breadcrumbs
  const serviceName = serviceData.title.split('|')[0].trim();
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://medtransic.com/' },
    { name: 'Services', url: 'https://medtransic.com/services' },
    { name: serviceName, url: `https://medtransic.com/services/${serviceSlug}` }
  ];

  // Generate HTML with service-specific structured data and breadcrumbs
  let html = generateStaticPageHTML({
    path: `services/${serviceSlug}`,
    title: serviceData.title,
    description: serviceData.description
  }, baseHTML, breadcrumbs);

  // Add Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceData.description,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Medtransic",
      "url": "https://medtransic.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "url": `https://medtransic.com/services/${serviceSlug}`
  };

  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(serviceSchema)}</script>\n  </head>`
  );

  return html;
}

async function generateFAQPageHTML(baseHTML: string): Promise<string> {
  console.log('   📥 Fetching general FAQs from database...');

  const { data: faqs, error } = await supabase
    .from('specialty_faqs')
    .select('question, answer')
    .eq('specialty_slug', 'general')
    .order('priority', { ascending: true })
    .limit(50);

  if (error) {
    console.error('   ⚠️  Error fetching FAQs:', error);
    return generateStaticPageHTML(
      {
        path: 'faq',
        title: 'Medical Billing FAQs | Common RCM Questions Answered',
        description: 'Get answers to common questions about medical billing, revenue cycle management, coding, and healthcare reimbursement.'
      },
      baseHTML,
      [
        { name: 'Home', url: 'https://medtransic.com/' },
        { name: 'Medical Billing FAQs', url: 'https://medtransic.com/faq' }
      ]
    );
  }

  console.log(`   ✅ Found ${faqs?.length || 0} FAQs for the FAQ page`);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://medtransic.com/' },
    { name: 'Medical Billing FAQs', url: 'https://medtransic.com/faq' }
  ];

  let html = generateStaticPageHTML(
    {
      path: 'faq',
      title: 'Medical Billing FAQs | Common RCM Questions Answered',
      description: 'Get answers to common questions about medical billing, revenue cycle management, coding, and healthcare reimbursement.'
    },
    baseHTML,
    breadcrumbs
  );

  if (faqs && faqs.length > 0) {
    const stripHtml = (text: string) => {
      return text.replace(/<[^>]*>/g, '').replace(/\n/g, ' ').trim();
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": stripHtml(faq.answer)
        }
      }))
    };

    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>\n  </head>`
    );

    console.log('   ✅ FAQ schema added to FAQ page');
  }

  return html;
}

async function generateSpecialtyPageWithFAQs(specialtySlug: string, baseHTML: string): Promise<string> {
  const specialtyData = SPECIALTY_ROUTES[specialtySlug as keyof typeof SPECIALTY_ROUTES];

  if (!specialtyData) {
    const specialtyName = specialtySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const title = `${specialtyName} Medical Billing Services | RCM Solutions | Medtransic`;
    const description = `Specialized medical billing services for ${specialtyName.toLowerCase()} practices. Expert revenue cycle management tailored to your specialty.`;

    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', url: 'https://medtransic.com/' },
      { name: 'Specialties', url: 'https://medtransic.com/specialties' },
      { name: specialtyName, url: `https://medtransic.com/specialties/${specialtySlug}` }
    ];

    return generateStaticPageHTML({ path: `specialties/${specialtySlug}`, title, description }, baseHTML, breadcrumbs);
  }

  const specialtyName = specialtyData.title.split('|')[0].trim();
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://medtransic.com/' },
    { name: 'Specialties', url: 'https://medtransic.com/specialties' },
    { name: specialtyName, url: `https://medtransic.com/specialties/${specialtySlug}` }
  ];

  let html = generateStaticPageHTML({
    path: `specialties/${specialtySlug}`,
    title: specialtyData.title,
    description: specialtyData.description
  }, baseHTML, breadcrumbs);

  const specialtySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "name": specialtyName,
    "description": specialtyData.description,
    "url": `https://medtransic.com/specialties/${specialtySlug}`,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Medtransic",
      "url": "https://medtransic.com"
    }
  };

  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(specialtySchema)}</script>\n  </head>`
  );

  const { data: faqs, error } = await supabase
    .from('specialty_faqs')
    .select('question, answer')
    .eq('specialty_slug', specialtySlug)
    .order('priority', { ascending: true })
    .limit(20);

  if (!error && faqs && faqs.length > 0) {
    const stripHtml = (text: string) => {
      return text.replace(/<[^>]*>/g, '').replace(/\n/g, ' ').trim();
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": stripHtml(faq.answer)
        }
      })),
      "about": {
        "@type": "MedicalSpecialty",
        "name": specialtyName
      }
    };

    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>\n  </head>`
    );
  }

  return html;
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

  // Generate homepage HTML first
  console.log('📊 Pre-rendering homepage...');
  try {
    console.log('🔄 Generating HTML for homepage...');

    const homeTitle = 'Medical Billing Services 2025 | 99% Clean Claims | RCM | Medtransic';
    const homeDescription = 'Boost revenue by 30% with certified medical billing experts. HIPAA-compliant RCM solutions, 99% clean claims, faster payments. Free consultation for healthcare practices nationwide. Call 888-777-0860!';

    let homeHTML = baseHTML;

    // Update title (already correct, but ensure it)
    homeHTML = homeHTML.replace(/<title>.*?<\/title>/, `<title>${homeTitle}</title>`);

    // Update meta description
    if (homeHTML.includes('<meta name="description"')) {
      homeHTML = homeHTML.replace(
        /<meta name="description" content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${homeDescription}" />`
      );
    }

    // Add canonical URL
    if (!homeHTML.includes('rel="canonical"')) {
      homeHTML = homeHTML.replace(
        '</head>',
        '  <link rel="canonical" href="https://medtransic.com/">\n  </head>'
      );
    }

    // Add VISIBLE prerendered content for crawlers
    const staticContent = `<div id="root"><div class="min-h-screen bg-white"><main class="pt-24 pb-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-4xl font-bold text-gray-900 mb-6">Medical Billing Services 2025</h1><p class="text-lg text-gray-700 leading-relaxed mb-8">${homeDescription}</p><h2 class="text-3xl font-bold text-gray-900 mb-4">Complete Revenue Cycle Management Solutions</h2><p class="text-gray-700 mb-6">End-to-end RCM services that maximize collections and reduce administrative burden. From patient registration to final payment, we handle it all.</p><h2 class="text-3xl font-bold text-gray-900 mb-4">Expert Medical Billing & Coding Services</h2><p class="text-gray-700 mb-6">Professional medical billing services with 99% clean claims rate. Expert coding, claims management, and denial resolution. Increase revenue and reduce administrative burden.</p><h2 class="text-3xl font-bold text-gray-900 mb-4">Medical Specialties We Serve</h2><p class="text-gray-700">Expert medical billing services for 50+ specialties including cardiology, orthopedics, mental health, physical therapy, dental, ophthalmology, and more.</p></div></main></div></div>`;

    homeHTML = homeHTML.replace(/<div id="root">[\s\S]*?<\/div>(\s*<\/div>)?/, staticContent);

    // Write homepage
    writeFileSync(baseHTMLPath, homeHTML, 'utf-8');

    console.log('   ✅ Homepage pre-rendered successfully\n');
    totalSuccess++;
  } catch (error) {
    console.error('   ❌ Error generating homepage:', error);
    totalError++;
  }

  // Pre-render services page with full service list
  console.log('📊 Pre-rendering services page with full content...');
  try {
    console.log('🔄 Generating comprehensive services page HTML...');

    const servicesData = [
      { title: 'Medical Billing Services', description: 'Accurate and compliant billing for all specialties, ensuring claims are correctly coded, submitted, and reimbursed promptly.', features: ['Reduce billing errors', 'Increase cash flow', 'Improve first-pass acceptance'] },
      { title: 'Accounts Receivable (A/R) Management', description: 'We recover unpaid claims, analyze denial reasons, and ensure every dollar owed is collected efficiently.', features: ['Decrease outstanding AR days', 'Boost recovery rate by up to 60%', 'Improve payer communication'] },
      { title: 'Medical Coding Services', description: 'CPC-certified coders ensure accurate ICD-10, CPT, and HCPCS coding for all encounters.', features: ['Avoid compliance penalties', 'Eliminate underbilling', 'Capture full revenue potential'] },
      { title: 'Denial Management', description: 'Identify, correct, and prevent denials through analytics-driven tracking and appeal processes.', features: ['Cut denial rate to under 5%', 'Faster appeal turnaround', 'Trend-based prevention strategies'] },
      { title: 'Prior Authorization Management', description: 'Comprehensive authorization management including proactive prior auth and retroactive authorization recovery.', features: ['98% authorization approval rate', '70% retro auth success rate', 'Emergency service recovery', 'Expert payer communication'] },
      { title: 'Eligibility & Benefits Verification', description: 'Confirm insurance coverage, co-pays, deductibles, and patient responsibilities before service.', features: ['Prevent claim denials upfront', 'Ensure billing accuracy', 'Enhance patient experience'] },
      { title: 'Charge Entry & Payment Posting', description: 'Accurate charge entry and timely posting of EOBs/ERAs ensure your revenue reports are always up to date.', features: ['Accurate financial data', 'Detect underpayments instantly', 'Improve reconciliation accuracy'] },
      { title: 'Provider Credentialing & Enrollment', description: 'Handle all payer enrollment, CAQH setup, and revalidation to keep your providers in-network and compliant.', features: ['Faster payer approval', 'No payment delays', 'Maintain active participation with payers'] },
      { title: 'Payer Enrollment Services', description: 'Fast-track enrollment with Medicare, Medicaid, and commercial insurance payers in 60-90 days.', features: ['98% approval rate', 'Reduce enrollment time by 50%', 'Expert enrollment specialists'] },
      { title: 'Patient Billing & Support', description: 'We manage patient statements, follow-ups, and calls — ensuring clear communication and timely collections.', features: ['Boost patient payments', 'Reduce call volume', 'Enhance satisfaction and retention'] },
      { title: 'Hospital & Facility Billing', description: 'Inpatient, outpatient, and ASC billing with complete DRG validation, charge capture, and audit compliance.', features: ['Handle high-volume claims', 'Avoid revenue leakage', 'Improve facility cash flow'] },
      { title: 'Laboratory Billing Services', description: 'Billing for clinical, molecular, and pathology labs with payer-specific compliance and panel bundling expertise.', features: ['Quick claim turnaround', 'Higher reimbursement accuracy', 'Audit-ready reporting'] },
      { title: 'Durable Medical Equipment (DME) Billing', description: 'Complete DME billing with documentation, prior authorizations, and resubmissions.', features: ['Eliminate "same/similar" denials', 'Faster claim resolution', 'Better compliance management'] },
      { title: 'Physician Billing Services', description: 'Customized billing for solo and multi-specialty practices with transparent reporting and dedicated account management.', features: ['Increase revenue per encounter', 'Simplify workflow', 'Ensure payer compliance'] },
      { title: 'Telehealth Billing Services', description: 'Specialized billing for virtual visits and remote patient monitoring across all states.', features: ['Correct use of telehealth CPT codes', 'Reduce payer-specific denials', 'Improve virtual care profitability'] },
      { title: 'Old A/R Clean-Up Projects', description: 'We review, rework, and recover old or neglected AR accounts for maximum revenue recovery.', features: ['Retrieve lost income', 'Fix billing process gaps', 'Clean up your financial backlog'] },
      { title: 'RCM Process Automation (RPA Integration)', description: 'We integrate robotic process automation to streamline claim validation, posting, and tracking.', features: ['40% faster claim cycle', 'Reduce manual work', 'Improve accuracy and productivity'] },
      { title: 'Practice Management Consulting', description: 'Analyze your existing workflows to identify inefficiencies and revenue leakage.', features: ['Boost collections by up to 30%', 'Optimize staff performance', 'Align RCM with business goals'] },
      { title: 'Analytics & Financial Reporting', description: 'We provide insightful dashboards covering collection ratios, AR aging, denial trends, and payer performance.', features: ['Real-time decision-making', 'Identify hidden issues', 'Improve practice profitability'] },
      { title: 'Call Center & Patient Scheduling', description: 'We manage inbound/outbound calls, appointment scheduling, and patient reminders.', features: ['Reduce no-shows', 'Increase patient retention', 'Improve front-desk efficiency'] },
      { title: 'Virtual Medical Assistants', description: 'Professional remote assistants for appointment scheduling, call management, insurance verification, and patient communication.', features: ['Save 60-70% on staffing costs', 'Extended coverage hours', 'HIPAA-trained professionals'] },
      { title: 'End-to-End RCM Outsourcing', description: 'Outsource your full billing department to our experts for a stress-free experience.', features: ['Dedicated account manager', 'Cost-effective solutions', 'Transparent, scalable model'] },
      { title: 'Payment Reconciliation & Audit Support', description: 'We cross-verify all payments with EOBs and reports to ensure every claim is paid correctly.', features: ['Detect payer underpayments', 'Maintain financial accuracy', 'Ensure compliance with payer contracts'] },
      { title: 'Payer Contract Negotiation', description: 'Our experts review your payer contracts to negotiate better reimbursement rates and terms.', features: ['Higher allowed amounts', 'More favorable payment terms', 'Maximize practice profitability'] },
      { title: 'EHR/EMR Integration & Support', description: 'Seamless integration with all major EHR systems including Epic, Cerner, Athena, eClinicalWorks, and more.', features: ['Automated data flow', 'Reduce manual entry errors', 'Improve workflow efficiency'] },
      { title: 'Compliance & HIPAA Audits', description: 'Ensure your practice meets all regulatory requirements with comprehensive compliance audits.', features: ['HIPAA compliance verification', 'Risk assessment and mitigation', 'Staff training and education'] },
      { title: 'MIPS & MACRA Reporting', description: 'Navigate value-based care requirements with expert MIPS and MACRA reporting support.', features: ['Maximize quality bonuses', 'Avoid penalties', 'Improve quality metrics'] },
      { title: 'Staff Training & SOP Development', description: 'Comprehensive training programs and standard operating procedures for your billing team.', features: ['Reduce errors', 'Improve efficiency', 'Ensure consistency'] }
    ];

    const servicesHTML = servicesData.map(service => `
      <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-bold text-gray-900 mb-3">${service.title}</h3>
        <p class="text-gray-700 mb-4">${service.description}</p>
        <ul class="space-y-2">
          ${service.features.map(feature => `<li class="flex items-start text-sm text-gray-600"><span class="mr-2">✓</span>${feature}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    const servicesStaticContent = `<div id="root"><div class="min-h-screen bg-gray-50"><main class="pt-24 pb-12"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-4xl font-bold text-gray-900 mb-6">Medical Billing Services | Revenue Cycle Management</h1><p class="text-xl text-gray-700 mb-8">Comprehensive medical billing and RCM services to maximize your revenue and reduce administrative burden. Our expert team handles everything from coding to collections.</p><h2 class="text-3xl font-bold text-gray-900 mb-6">Our Complete Range of Services</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">${servicesHTML}</div><div class="bg-blue-50 rounded-lg p-8 mb-12"><h2 class="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Medical Billing Services?</h2><ul class="space-y-3 text-gray-700"><li class="flex items-start"><span class="mr-2">✓</span><span><strong>99% Clean Claims Rate:</strong> Industry-leading accuracy ensures faster payments</span></li><li class="flex items-start"><span class="mr-2">✓</span><span><strong>30% Revenue Increase:</strong> Average revenue boost for our clients</span></li><li class="flex items-start"><span class="mr-2">✓</span><span><strong>HIPAA Compliant:</strong> Full compliance with all healthcare regulations</span></li><li class="flex items-start"><span class="mr-2">✓</span><span><strong>Dedicated Support:</strong> Personal account manager for your practice</span></li></ul></div></div></main></div></div>`;

    let servicesPageHTML = baseHTML;
    servicesPageHTML = servicesPageHTML.replace(/<title>.*?<\/title>/, '<title>Medical Billing Services | Revenue Cycle Management | Medtransic</title>');
    servicesPageHTML = servicesPageHTML.replace(/<meta name="description" content="[^"]*"\s*\/>/, '<meta name="description" content="Comprehensive medical billing and RCM services including coding, AR management, denial management, and revenue cycle optimization. 99% clean claims rate, 30% revenue increase." />');
    servicesPageHTML = servicesPageHTML.replace(/<div id="root">[\s\S]*?<\/div>(\s*<\/div>)?/, servicesStaticContent);

    const servicesPath = join(distPath, 'services');
    mkdirSync(servicesPath, { recursive: true });
    writeFileSync(join(servicesPath, 'index.html'), servicesPageHTML, 'utf-8');

    console.log('   ✅ Services page with 28 services pre-rendered successfully\n');
    totalSuccess++;
  } catch (error) {
    console.error('   ❌ Error generating services page:', error);
    totalError++;
  }

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

      let pageHTML: string;

      if (route.path === 'faq') {
        pageHTML = await generateFAQPageHTML(baseHTML);
      } else {
        const pageName = route.title.split('|')[0].trim();
        const breadcrumbs: BreadcrumbItem[] = [
          { name: 'Home', url: 'https://medtransic.com/' },
          { name: pageName, url: `https://medtransic.com/${route.path}` }
        ];

        pageHTML = generateStaticPageHTML(route, baseHTML, breadcrumbs);
      }

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

  for (const specialtySlug of Object.keys(SPECIALTY_ROUTES)) {
    try {
      console.log(`🔄 Generating HTML for: specialties/${specialtySlug}...`);
      const pageHTML = await generateSpecialtyPageWithFAQs(specialtySlug, baseHTML);

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
