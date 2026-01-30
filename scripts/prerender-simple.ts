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
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${stateData.meta_description}">`
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
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${cityData.meta_description}">`
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
  { path: 'resources/billing-glossary', title: 'Medical Billing Glossary | RCM Terms & Definitions', description: 'Comprehensive glossary of medical billing and revenue cycle management terms, codes, and healthcare industry terminology.' },
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

// Service page routes
const SERVICE_ROUTES = [
  'rcm', 'medical-billing', 'ar-management', 'medical-coding', 'denial-management',
  'eligibility-verification', 'credentialing', 'charge-entry-payment-posting',
  'patient-billing-support', 'hospital-facility-billing', 'laboratory-billing',
  'dme-billing', 'physician-billing', 'telehealth-billing', 'old-ar-cleanup',
  'rcm-automation', 'practice-management-consulting', 'analytics-reporting',
  'call-center-scheduling', 'payment-reconciliation', 'payer-contract-negotiation',
  'compliance-hipaa-audits', 'mips-macra-reporting', 'ehr-emr-integration',
  'staff-training-sop', 'virtual-assistants', 'prior-authorization',
  'payer-enrollment', 'outsourcing-medical-billing'
];

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
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${route.description}">`
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
  const serviceName = serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = `${serviceName} Services | Medical Billing Solutions | Medtransic`;
  const description = `Expert ${serviceName.toLowerCase()} services for healthcare practices. Optimize your revenue cycle with professional medical billing support.`;

  return generateStaticPageHTML({ path: `services/${serviceSlug}`, title, description }, baseHTML);
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

  for (const serviceSlug of SERVICE_ROUTES) {
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
