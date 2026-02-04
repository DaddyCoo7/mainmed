import { createClient } from '@supabase/supabase-js';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { generateServiceHTML, generateSpecialtyHTML } from './content-templates';
import { allDefinitions, generateServiceContent, generateSpecialtyContent, generateStaticPageContent } from './content-generator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Generate static HTML with SEO optimization
function generateStaticHTML(baseHTML: string, pageData: {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  h1: string;
  content: string;
  schema?: any;
}): string {
  let html = baseHTML;

  // Update title
  html = html.replace(/<title>.*?<\/title>/, `<title>${pageData.title}</title>`);

  // Update/add meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${pageData.metaDescription}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <meta name="description" content="${pageData.metaDescription}">\n  </head>`
    );
  }

  // Add canonical URL
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${pageData.canonicalUrl}">\n  </head>`
    );
  }

  // Add robots meta
  if (!html.includes('<meta name="robots"')) {
    html = html.replace(
      '</head>',
      '  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n  </head>'
    );
  }

  // Add Open Graph tags
  const ogTags = `
  <meta property="og:title" content="${pageData.title}">
  <meta property="og:description" content="${pageData.metaDescription}">
  <meta property="og:url" content="${pageData.canonicalUrl}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${pageData.title}">
  <meta name="twitter:description" content="${pageData.metaDescription}">`;

  html = html.replace('</head>', `${ogTags}\n  </head>`);

  // Add schema markup
  if (pageData.schema) {
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">${JSON.stringify(pageData.schema)}</script>\n  </head>`
    );
  }

  // Inject visible static content for SEO
  const staticContent = `<div id="root">
    <div class="static-content" style="max-width:1200px;margin:0 auto;padding:2rem;">
      <header style="margin-bottom:2rem;">
        <h1 style="font-size:2.5rem;font-weight:bold;margin-bottom:1rem;color:#111827;">${pageData.h1}</h1>
      </header>
      <main>
        ${pageData.content}
      </main>
    </div>
  </div>`;

  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*<\/div>/, staticContent + '\n  ');

  return html;
}

async function generateAllPages() {
  console.log('🚀 Starting Comprehensive Static HTML Generation for 175 Pages...\n');

  const distPath = join(__dirname, '../dist');
  const baseHTMLPath = join(distPath, 'index.html');

  console.log('📄 Reading base HTML template...');
  let baseHTML: string;
  try {
    baseHTML = readFileSync(baseHTMLPath, 'utf-8');
    console.log('✅ Base HTML template loaded\n');
  } catch (error) {
    console.error('❌ Could not read base HTML. Run `npm run build:no-static` first');
    process.exit(1);
  }

  let totalSuccess = 0;
  let totalError = 0;

  // 1. Generate STATE pages (50 pages)
  console.log('═══════════════════════════════════════════════');
  console.log('📍 GENERATING STATE PAGES (Target: 50)');
  console.log('═══════════════════════════════════════════════\n');

  const { data: states, error: stateError } = await supabase
    .from('state_pages')
    .select('*')
    .order('state_name');

  if (!stateError && states && states.length > 0) {
    console.log(`✅ Found ${states.length} state pages in database\n`);

    for (const state of states) {
      try {
        const content = generateStatePageContent(state);
        const pageHTML = generateStaticHTML(baseHTML, {
          title: state.meta_title,
          metaDescription: state.meta_description,
          canonicalUrl: `https://medtransic.com/medical-billing-services/${state.slug}`,
          h1: state.hero_title,
          content,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            'name': `Medtransic - ${state.state_name} Medical Billing Services`,
            'description': state.meta_description,
            'url': `https://medtransic.com/medical-billing-services/${state.slug}`,
            'areaServed': { '@type': 'State', 'name': state.state_name }
          }
        });

        const pagePath = join(distPath, 'medical-billing-services', state.slug);
        mkdirSync(pagePath, { recursive: true });
        writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');

        console.log(`✅ ${totalSuccess + 1}. ${state.state_name}`);
        totalSuccess++;
      } catch (error) {
        console.error(`❌ Error: ${state.state_name}:`, error);
        totalError++;
      }
    }
  }

  // 2. Generate CITY pages (22 pages)
  console.log('\n═══════════════════════════════════════════════');
  console.log('🏙️  GENERATING CITY PAGES (Target: 22)');
  console.log('═══════════════════════════════════════════════\n');

  const { data: cities, error: cityError } = await supabase
    .from('city_pages')
    .select('*')
    .order('city_name');

  if (!cityError && cities && cities.length > 0) {
    console.log(`✅ Found ${cities.length} city pages in database\n`);

    const stateMap = new Map();
    if (states) states.forEach((state: any) => stateMap.set(state.slug, state));

    for (const city of cities) {
      try {
        const stateData = stateMap.get(city.state_slug);
        if (!stateData) continue;

        const content = generateCityPageContent(city, stateData.state_name);
        const pageHTML = generateStaticHTML(baseHTML, {
          title: city.meta_title,
          metaDescription: city.meta_description,
          canonicalUrl: `https://medtransic.com/medical-billing-services/${city.state_slug}/${city.city_slug}`,
          h1: city.hero_title,
          content,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            'name': `Medtransic - ${city.city_name} Medical Billing`,
            'url': `https://medtransic.com/medical-billing-services/${city.state_slug}/${city.city_slug}`,
            'areaServed': { '@type': 'City', 'name': city.city_name }
          }
        });

        const pagePath = join(distPath, 'medical-billing-services', city.state_slug, city.city_slug);
        mkdirSync(pagePath, { recursive: true });
        writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');

        console.log(`✅ ${totalSuccess + 1}. ${city.city_name}, ${stateData.state_name}`);
        totalSuccess++;
      } catch (error) {
        console.error(`❌ Error: ${city.city_name}:`, error);
        totalError++;
      }
    }
  }

  // 3. Generate SERVICE pages (29 pages)
  console.log('\n═══════════════════════════════════════════════');
  console.log('🛠️  GENERATING SERVICE PAGES (Target: 29)');
  console.log('═══════════════════════════════════════════════\n');

  for (const serviceDef of allDefinitions.services) {
    try {
      const service = generateServiceContent(serviceDef);
      const content = generateServiceHTML(service);
      const pageHTML = generateStaticHTML(baseHTML, {
        title: service.title,
        metaDescription: service.metaDescription,
        canonicalUrl: `https://medtransic.com/services/${service.slug}`,
        h1: service.h1,
        content,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': service.h1,
          'provider': {
            '@type': 'MedicalBusiness',
            'name': 'Medtransic'
          },
          'areaServed': 'United States',
          'description': service.metaDescription
        }
      });

      const pagePath = join(distPath, 'services', service.slug);
      mkdirSync(pagePath, { recursive: true });
      writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');

      console.log(`✅ ${totalSuccess + 1}. ${service.h1}`);
      totalSuccess++;
    } catch (error) {
      console.error(`❌ Error: ${serviceDef.slug}:`, error);
      totalError++;
    }
  }

  // 4. Generate SPECIALTY pages (51 pages)
  console.log('\n═══════════════════════════════════════════════');
  console.log('🏥 GENERATING SPECIALTY PAGES (Target: 51)');
  console.log('═══════════════════════════════════════════════\n');

  for (const specialtyDef of allDefinitions.specialties) {
    try {
      const specialty = generateSpecialtyContent(specialtyDef);
      const content = generateSpecialtyHTML(specialty);
      const pageHTML = generateStaticHTML(baseHTML, {
        title: specialty.title,
        metaDescription: specialty.metaDescription,
        canonicalUrl: `https://medtransic.com/specialties/${specialty.slug}`,
        h1: specialty.h1,
        content,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'MedicalSpecialty',
          'name': specialty.h1,
          'description': specialty.metaDescription
        }
      });

      const pagePath = join(distPath, 'specialties', specialty.slug);
      mkdirSync(pagePath, { recursive: true });
      writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');

      console.log(`✅ ${totalSuccess + 1}. ${specialty.h1}`);
      totalSuccess++;
    } catch (error) {
      console.error(`❌ Error: ${specialtyDef.slug}:`, error);
      totalError++;
    }
  }

  // 5. Generate STATIC pages (24 pages) - About, Contact, etc.
  console.log('\n═══════════════════════════════════════════════');
  console.log('📄 GENERATING STATIC PAGES (Target: 24)');
  console.log('═══════════════════════════════════════════════\n');

  for (const staticDef of allDefinitions.staticPages) {
    try {
      const pageContent = generateStaticPageContent(staticDef);
      const pageHTML = generateStaticHTML(baseHTML, {
        title: pageContent.title,
        metaDescription: pageContent.metaDescription,
        canonicalUrl: staticDef.slug ? `https://medtransic.com/${staticDef.slug}` : 'https://medtransic.com',
        h1: pageContent.h1,
        content: pageContent.content,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': pageContent.title,
          'description': pageContent.metaDescription,
          'url': staticDef.slug ? `https://medtransic.com/${staticDef.slug}` : 'https://medtransic.com'
        }
      });

      let pagePath: string;
      if (staticDef.slug === '') {
        // Home page - write to root
        writeFileSync(join(distPath, 'index.html'), pageHTML, 'utf-8');
        console.log(`✅ ${totalSuccess + 1}. Home Page`);
      } else if (staticDef.slug === '404') {
        // 404 page
        writeFileSync(join(distPath, '404.html'), pageHTML, 'utf-8');
        console.log(`✅ ${totalSuccess + 1}. 404 Not Found`);
      } else {
        // Regular static pages
        pagePath = join(distPath, staticDef.slug);
        mkdirSync(pagePath, { recursive: true });
        writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');
        console.log(`✅ ${totalSuccess + 1}. ${staticDef.title}`);
      }

      totalSuccess++;
    } catch (error) {
      console.error(`❌ Error: ${staticDef.title}:`, error);
      totalError++;
    }
  }

  // 6. Generate RESOURCE pages (CPT Codes, ICD-10, Dental, Modifiers)
  console.log('\n═══════════════════════════════════════════════');
  console.log('📚 GENERATING RESOURCE PAGES');
  console.log('═══════════════════════════════════════════════\n');

  // CPT Codes Cheat Sheet
  console.log('Generating CPT Codes Cheat Sheet...');
  const { data: cptCodes, error: cptError } = await supabase
    .from('cpt_codes')
    .select('*')
    .order('commonly_used', { ascending: false })
    .order('code');

  if (!cptError && cptCodes && cptCodes.length > 0) {
    try {
      const content = generateCPTCodesContent(cptCodes);
      const pageHTML = generateStaticHTML(baseHTML, {
        title: 'CPT Codes Cheat Sheet 2025 | Complete Medical Billing Code Reference',
        metaDescription: 'Free CPT codes cheat sheet 2025 with descriptions, RVU values, and specialty-specific codes. Searchable database of E&M codes, surgical codes, and procedure codes.',
        canonicalUrl: 'https://medtransic.com/resources/cpt-codes-cheat-sheet',
        h1: 'CPT Codes Cheat Sheet 2025',
        content,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'CPT Codes Cheat Sheet 2025',
          'description': 'Complete reference guide for Current Procedural Terminology codes',
          'url': 'https://medtransic.com/resources/cpt-codes-cheat-sheet'
        }
      });

      const pagePath = join(distPath, 'resources', 'cpt-codes-cheat-sheet');
      mkdirSync(pagePath, { recursive: true });
      writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');
      console.log(`✅ CPT Codes Cheat Sheet (${cptCodes.length} codes)`);
      totalSuccess++;
    } catch (error) {
      console.error('❌ Error: CPT Codes page:', error);
      totalError++;
    }
  }

  // ICD-10 Codes Reference
  console.log('Generating ICD-10 Codes Reference...');
  const { data: icd10Codes, error: icd10Error } = await supabase
    .from('icd10_codes')
    .select('*')
    .order('commonly_used', { ascending: false })
    .order('code');

  if (!icd10Error && icd10Codes && icd10Codes.length > 0) {
    try {
      const content = generateICD10CodesContent(icd10Codes);
      const pageHTML = generateStaticHTML(baseHTML, {
        title: 'ICD-10 Codes Reference Guide 2025 | Pre-Op Clearance & Medical Diagnosis Codes',
        metaDescription: 'Complete ICD-10 code reference guide including pre-op clearance codes (Z01.818), surgical clearance, and commonly used diagnosis codes. Free searchable database updated for 2025.',
        canonicalUrl: 'https://medtransic.com/resources/icd-10-codes-reference',
        h1: 'ICD-10 Codes Reference Guide',
        content,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'ICD-10 Codes Reference Guide',
          'description': 'Complete ICD-10 diagnosis codes including pre-operative clearance',
          'url': 'https://medtransic.com/resources/icd-10-codes-reference'
        }
      });

      const pagePath = join(distPath, 'resources', 'icd-10-codes-reference');
      mkdirSync(pagePath, { recursive: true });
      writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');
      console.log(`✅ ICD-10 Codes Reference (${icd10Codes.length} codes)`);
      totalSuccess++;
    } catch (error) {
      console.error('❌ Error: ICD-10 Codes page:', error);
      totalError++;
    }
  }

  // Dental Codes Cheat Sheet
  console.log('Generating Dental Codes Cheat Sheet...');
  const { data: dentalCodes, error: dentalError } = await supabase
    .from('dental_codes')
    .select('*')
    .order('commonly_used', { ascending: false })
    .order('code');

  if (!dentalError && dentalCodes && dentalCodes.length > 0) {
    try {
      const content = generateDentalCodesContent(dentalCodes);
      const pageHTML = generateStaticHTML(baseHTML, {
        title: 'Dental Codes Cheat Sheet 2025 | CDT Codes & ADA Procedure Codes',
        metaDescription: 'Free dental codes cheat sheet 2025 with CDT codes, ADA categories, and commonly used dental procedure codes. Includes D0140, D9310, and all diagnostic, preventive, and restorative codes.',
        canonicalUrl: 'https://medtransic.com/resources/dental-codes-cheat-sheet',
        h1: 'Dental Codes Cheat Sheet 2025',
        content,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Dental Codes Cheat Sheet 2025',
          'description': 'Complete CDT dental codes reference guide',
          'url': 'https://medtransic.com/resources/dental-codes-cheat-sheet'
        }
      });

      const pagePath = join(distPath, 'resources', 'dental-codes-cheat-sheet');
      mkdirSync(pagePath, { recursive: true });
      writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');
      console.log(`✅ Dental Codes Cheat Sheet (${dentalCodes.length} codes)`);
      totalSuccess++;
    } catch (error) {
      console.error('❌ Error: Dental Codes page:', error);
      totalError++;
    }
  }

  // Medical Billing Modifiers Guide
  console.log('Generating Medical Billing Modifiers Guide...');
  const { data: modifiers, error: modifiersError } = await supabase
    .from('billing_modifiers')
    .select('*')
    .order('modifier');

  if (!modifiersError && modifiers && modifiers.length > 0) {
    try {
      const content = generateModifiersContent(modifiers);
      const pageHTML = generateStaticHTML(baseHTML, {
        title: 'Medical Billing Modifiers Guide | GA, GW, GV Modifier Comparison 2025',
        metaDescription: 'Complete guide to medical billing modifiers including GA modifier, GW modifier, GV modifier, and 59 modifier. Learn when to use each modifier with examples and comparisons.',
        canonicalUrl: 'https://medtransic.com/resources/medical-billing-modifiers-guide',
        h1: 'Medical Billing Modifiers Guide',
        content,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Medical Billing Modifiers Guide',
          'description': 'Complete guide to medical billing modifiers with usage examples',
          'url': 'https://medtransic.com/resources/medical-billing-modifiers-guide'
        }
      });

      const pagePath = join(distPath, 'resources', 'medical-billing-modifiers-guide');
      mkdirSync(pagePath, { recursive: true });
      writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');
      console.log(`✅ Medical Billing Modifiers Guide (${modifiers.length} modifiers)`);
      totalSuccess++;
    } catch (error) {
      console.error('❌ Error: Modifiers Guide page:', error);
      totalError++;
    }
  }

  // 7. Generate EMR INTEGRATION pages
  console.log('\n═══════════════════════════════════════════════');
  console.log('⚡ GENERATING EMR INTEGRATION PAGES');
  console.log('═══════════════════════════════════════════════\n');

  const { data: emrIntegrations, error: emrError } = await supabase
    .from('emr_integrations')
    .select('*')
    .order('popularity_rank');

  if (!emrError && emrIntegrations && emrIntegrations.length > 0) {
    console.log(`✅ Found ${emrIntegrations.length} EMR integrations in database\n`);

    // Generate individual EMR pages
    for (const emr of emrIntegrations) {
      try {
        const content = generateEMRIntegrationContent(emr);
        const pageHTML = generateStaticHTML(baseHTML, {
          title: `${emr.name} Medical Billing Integration | ${emr.integration_type} Connection`,
          metaDescription: emr.meta_description || `Professional medical billing services with ${emr.name} EHR integration. Seamless ${emr.integration_type} connection for automated claims and real-time data sync.`,
          canonicalUrl: `https://medtransic.com/integrations/${emr.slug}`,
          h1: `${emr.name} Medical Billing Integration`,
          content,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': `${emr.name} Integration`,
            'applicationCategory': 'Medical Billing Software',
            'description': emr.description,
            'url': `https://medtransic.com/integrations/${emr.slug}`
          }
        });

        const pagePath = join(distPath, 'integrations', emr.slug);
        mkdirSync(pagePath, { recursive: true });
        writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');

        console.log(`✅ ${totalSuccess + 1}. ${emr.name}`);
        totalSuccess++;
      } catch (error) {
        console.error(`❌ Error: ${emr.name}:`, error);
        totalError++;
      }
    }

    // Generate EMR Integrations list page
    try {
      let listContent = `<div style="line-height:1.8;">`;
      listContent += `<p style="font-size:1.125rem;margin-bottom:2rem;">We integrate with all major electronic health record systems for seamless medical billing. API and HL7 connections available for automated workflows.</p>`;

      listContent += `<section style="margin-bottom:3rem;"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;">`;

      emrIntegrations.forEach((emr: any) => {
        listContent += `<div style="background:white;border-radius:0.75rem;box-shadow:0 1px 3px rgba(0,0,0,0.1);padding:1.5rem;border-top:4px solid #2563eb;">
          <h3 style="font-size:1.25rem;font-weight:bold;color:#111827;margin-bottom:0.75rem;">${emr.name}</h3>
          <p style="font-size:0.875rem;color:#6b7280;margin-bottom:1rem;">${emr.description.substring(0, 150)}...</p>
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
            <span style="font-size:0.75rem;background:#dbeafe;color:#1e3a8a;padding:0.25rem 0.75rem;border-radius:9999px;font-weight:500;">${emr.integration_type}</span>
            <span style="font-size:0.75rem;color:#6b7280;">${emr.supported_specialties.length} specialties</span>
          </div>
          <a href="/integrations/${emr.slug}" style="color:#2563eb;font-weight:600;text-decoration:none;font-size:0.875rem;">Learn More →</a>
        </div>`;
      });

      listContent += `</div></section>`;

      listContent += `<section style="margin-top:3rem;padding:2rem;background:linear-gradient(135deg,#2563eb,#3b82f6);border-radius:0.75rem;color:white;text-align:center;">
        <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Don't See Your EMR System?</h2>
        <p style="margin-bottom:1.5rem;opacity:0.9;">We can integrate with virtually any EMR/EHR system using API, HL7, or direct data feed connections.</p>
        <p style="font-weight:600;font-size:1.25rem;">Request Custom Integration: (866) 261-5711</p>
      </section></div>`;

      const pageHTML = generateStaticHTML(baseHTML, {
        title: 'EMR/EHR Integrations | eClinicalWorks, Office Ally, Kareo & More',
        metaDescription: 'Professional medical billing integration with all major EMR/EHR systems including eClinicalWorks (ECW), Office Ally, Kareo, Athena, Epic, NextGen, and Allscripts. Seamless API and HL7 connections.',
        canonicalUrl: 'https://medtransic.com/resources/emr-integrations',
        h1: 'EMR/EHR System Integrations',
        content: listContent,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'EMR/EHR System Integrations',
          'description': 'Complete list of EMR/EHR system integrations',
          'url': 'https://medtransic.com/resources/emr-integrations'
        }
      });

      const pagePath = join(distPath, 'resources', 'emr-integrations');
      mkdirSync(pagePath, { recursive: true });
      writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');
      console.log(`✅ EMR Integrations List Page`);
      totalSuccess++;
    } catch (error) {
      console.error('❌ Error: EMR Integrations list page:', error);
      totalError++;
    }
  }

  // Summary
  console.log('\n═══════════════════════════════════════════════');
  console.log('📊 GENERATION SUMMARY');
  console.log('═══════════════════════════════════════════════');
  console.log(`✅ Successfully generated: ${totalSuccess} pages`);
  if (totalError > 0) {
    console.log(`❌ Failed: ${totalError} pages`);
  }
  console.log(`\n🎯 Target: 200+ pages`);
  console.log(`📈 Current: ${totalSuccess} pages`);
  console.log(`⏳ Note: All resource pages now include static HTML content for SEO\n`);
}

function generateStatePageContent(state: any): string {
  let content = `<div style="line-height:1.8;">`;
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">${state.hero_description}</p>`;

  if (state.key_benefits && state.key_benefits.length > 0) {
    content += `<section style="margin-bottom:2rem;">
      <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Why Choose Our Services in ${state.state_name}</h2>
      <div style="display:grid;gap:1.5rem;">`;
    state.key_benefits.forEach((benefit: any) => {
      content += `<div style="padding:1.5rem;background:#f9fafb;border-radius:0.5rem;">
        <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem;">${benefit.title}</h3>
        <p style="color:#6b7280;">${benefit.description}</p>
      </div>`;
    });
    content += `</div></section>`;
  }

  if (state.major_cities && state.major_cities.length > 0) {
    content += `<section style="margin-bottom:2rem;">
      <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Cities We Serve in ${state.state_name}</h2>
      <ul style="list-style:disc;margin-left:2rem;color:#374151;">`;
    state.major_cities.forEach((city: string) => {
      content += `<li style="margin-bottom:0.5rem;">${city}</li>`;
    });
    content += `</ul></section>`;
  }

  content += `<section style="margin-top:3rem;padding:2rem;background:#eff6ff;border-radius:0.5rem;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Contact Us Today</h2>
    <p style="font-size:1.125rem;margin-bottom:1.5rem;">Ready to optimize your medical billing in ${state.state_name}?</p>
    <p style="color:#2563eb;font-weight:600;">Call (866) 261-5711</p>
  </section></div>`;

  return content;
}

function generateCityPageContent(city: any, stateName: string): string {
  let content = `<div style="line-height:1.8;">`;
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">${city.hero_description}</p>`;

  if (city.key_benefits && city.key_benefits.length > 0) {
    content += `<section style="margin-bottom:2rem;">
      <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Why Choose Our Services in ${city.city_name}</h2>
      <div style="display:grid;gap:1.5rem;">`;
    city.key_benefits.forEach((benefit: any) => {
      content += `<div style="padding:1.5rem;background:#f9fafb;border-radius:0.5rem;">
        <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem;">${benefit.title}</h3>
        <p style="color:#6b7280;">${benefit.description}</p>
      </div>`;
    });
    content += `</div></section>`;
  }

  content += `<section style="margin-top:3rem;padding:2rem;background:#eff6ff;border-radius:0.5rem;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Partner with ${city.city_name}'s Experts</h2>
    <p style="font-size:1.125rem;margin-bottom:1.5rem;">Get a free consultation today.</p>
    <p style="color:#2563eb;font-weight:600;">Call (866) 261-5711</p>
  </section></div>`;

  return content;
}

function generateCPTCodesContent(codes: any[]): string {
  let content = `<div style="line-height:1.8;">`;
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">Comprehensive, searchable reference guide for Current Procedural Terminology codes. Find E&M codes, surgical codes, and specialty-specific billing codes instantly.</p>`;

  content += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#1e40af;">CPT Codes Database</h2>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;background:white;border-radius:0.5rem;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <thead style="background:#f3f4f6;">
          <tr>
            <th style="padding:1rem;text-align:left;font-weight:600;color:#374151;">Code</th>
            <th style="padding:1rem;text-align:left;font-weight:600;color:#374151;">Description</th>
            <th style="padding:1rem;text-align:left;font-weight:600;color:#374151;">Category</th>
            <th style="padding:1rem;text-align:left;font-weight:600;color:#374151;">Specialty</th>
          </tr>
        </thead>
        <tbody>`;

  codes.forEach((code, index) => {
    const bgColor = index % 2 === 0 ? 'white' : '#f9fafb';
    content += `<tr style="background:${bgColor};border-top:1px solid #e5e7eb;">
      <td style="padding:1rem;font-weight:700;color:#2563eb;">${code.code}${code.commonly_used ? ' ⭐' : ''}</td>
      <td style="padding:1rem;">${code.description}${code.notes ? `<br><span style="font-size:0.875rem;color:#6b7280;">${code.notes}</span>` : ''}</td>
      <td style="padding:1rem;color:#4b5563;">${code.category}</td>
      <td style="padding:1rem;color:#4b5563;">${code.specialty || '-'}</td>
    </tr>`;
  });

  content += `</tbody></table></div></section>`;

  content += `<section style="margin-top:3rem;padding:2rem;background:linear-gradient(135deg,#2563eb,#1d4ed8);border-radius:0.75rem;color:white;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Need Help with Medical Billing?</h2>
    <p style="margin-bottom:1.5rem;opacity:0.9;">Our certified medical billing specialists can help you maximize reimbursement and reduce denials.</p>
    <p style="font-weight:600;font-size:1.25rem;">Call (866) 261-5711</p>
  </section></div>`;

  return content;
}

function generateICD10CodesContent(codes: any[]): string {
  let content = `<div style="line-height:1.8;">`;
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">Quick reference for ICD-10 diagnosis codes including pre-operative clearance codes, surgical clearance, and commonly used diagnosis codes for medical billing.</p>`;

  content += `<section style="margin-bottom:2rem;padding:1.5rem;background:#dbeafe;border-radius:0.5rem;border-left:4px solid #2563eb;">
    <h3 style="font-size:1.25rem;font-weight:bold;color:#1e40af;margin-bottom:1rem;">Most Searched Pre-Op Codes</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;">
      <div style="background:white;padding:1rem;border-radius:0.5rem;">
        <div style="font-family:monospace;font-weight:bold;color:#2563eb;margin-bottom:0.5rem;">Z01.818</div>
        <div style="font-size:0.875rem;color:#374151;">Encounter for other preprocedural examination</div>
        <div style="font-size:0.75rem;color:#6b7280;margin-top:0.5rem;">Most common pre-op clearance code</div>
      </div>
      <div style="background:white;padding:1rem;border-radius:0.5rem;">
        <div style="font-family:monospace;font-weight:bold;color:#2563eb;margin-bottom:0.5rem;">Z01.810</div>
        <div style="font-size:0.875rem;color:#374151;">Encounter for preprocedural cardiovascular examination</div>
        <div style="font-size:0.75rem;color:#6b7280;margin-top:0.5rem;">Cardiac pre-op clearance</div>
      </div>
    </div>
  </section>`;

  content += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#059669;">ICD-10 Codes Reference</h2>`;

  codes.forEach((code) => {
    content += `<div style="padding:1.5rem;margin-bottom:1rem;background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0,0,0,0.1);border-left:4px solid #10b981;">
      <div style="margin-bottom:0.5rem;">
        <span style="font-family:monospace;font-size:1.125rem;font-weight:bold;color:#059669;">${code.code}</span>
        ${code.commonly_used ? '<span style="color:#f59e0b;margin-left:0.5rem;">⭐</span>' : ''}
        <span style="font-size:0.75rem;background:#f3f4f6;color:#6b7280;padding:0.25rem 0.75rem;border-radius:9999px;margin-left:1rem;">${code.category}</span>
      </div>
      <div style="font-weight:500;color:#111827;margin-bottom:0.5rem;">${code.description}</div>
      ${code.clinical_notes ? `<div style="font-size:0.875rem;color:#6b7280;background:#f9fafb;padding:0.75rem;border-radius:0.375rem;margin-top:0.75rem;"><strong>Clinical Notes:</strong> ${code.clinical_notes}</div>` : ''}
    </div>`;
  });

  content += `</section>`;

  content += `<section style="margin-top:3rem;padding:2rem;background:linear-gradient(135deg,#059669,#047857);border-radius:0.75rem;color:white;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Professional Medical Coding Services</h2>
    <p style="margin-bottom:1.5rem;opacity:0.9;">Ensure accurate ICD-10 coding and maximize reimbursement with our certified medical coding specialists.</p>
    <p style="font-weight:600;font-size:1.25rem;">Request Free Analysis: (866) 261-5711</p>
  </section></div>`;

  return content;
}

function generateDentalCodesContent(codes: any[]): string {
  let content = `<div style="line-height:1.8;">`;
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">Complete reference guide for CDT (Current Dental Terminology) codes and ADA dental procedure codes. Searchable database of diagnostic, preventive, and restorative codes.</p>`;

  content += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#9333ea;">Dental Codes Database</h2>`;

  codes.forEach((code) => {
    content += `<div style="padding:1.5rem;margin-bottom:1rem;background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0,0,0,0.1);border-left:4px solid #a855f7;">
      <div style="margin-bottom:0.5rem;">
        <span style="font-family:monospace;font-size:1.125rem;font-weight:bold;color:#9333ea;">${code.code}</span>
        ${code.commonly_used ? '<span style="color:#f59e0b;margin-left:0.5rem;">⭐</span>' : ''}
        <span style="font-size:0.75rem;background:#faf5ff;color:#7c3aed;padding:0.25rem 0.75rem;border-radius:9999px;margin-left:1rem;">${code.category}</span>
        ${code.ada_category ? `<span style="font-size:0.75rem;background:#f3f4f6;color:#6b7280;padding:0.25rem 0.75rem;border-radius:9999px;margin-left:0.5rem;">${code.ada_category}</span>` : ''}
      </div>
      <div style="font-weight:500;color:#111827;margin-bottom:0.5rem;">${code.description}</div>
      ${code.notes ? `<div style="font-size:0.875rem;color:#6b7280;background:#faf5ff;padding:0.75rem;border-radius:0.375rem;margin-top:0.75rem;"><strong>Usage Notes:</strong> ${code.notes}</div>` : ''}
    </div>`;
  });

  content += `</section>`;

  content += `<section style="margin-top:3rem;padding:2rem;background:linear-gradient(135deg,#9333ea,#7c3aed);border-radius:0.75rem;color:white;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Dental Billing Services</h2>
    <p style="margin-bottom:1.5rem;opacity:0.9;">Expert CDT coding and dental insurance verification for practices of all sizes.</p>
    <p style="font-weight:600;font-size:1.25rem;">Call (866) 261-5711</p>
  </section></div>`;

  return content;
}

function generateModifiersContent(modifiers: any[]): string {
  let content = `<div style="line-height:1.8;">`;
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">Understanding when and how to use medical billing modifiers is crucial for accurate reimbursement. Learn about GA, GW, GV, and other essential modifiers.</p>`;

  modifiers.forEach((modifier) => {
    content += `<div style="margin-bottom:2rem;background:white;border-radius:0.75rem;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
      <div style="background:linear-gradient(135deg,#f97316,#ea580c);padding:2rem;color:white;">
        <div style="display:flex;align-items:center;gap:1rem;">
          <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:0.5rem;padding:0.75rem 1.5rem;">
            <span style="font-size:2rem;font-weight:bold;">${modifier.modifier}</span>
          </div>
          <div style="flex:1;">
            <h3 style="font-size:1.5rem;font-weight:bold;margin-bottom:0.25rem;">Modifier ${modifier.modifier}</h3>
            <p style="opacity:0.9;">${modifier.description}</p>
          </div>
        </div>
      </div>
      <div style="padding:2rem;">
        ${modifier.usage_guidelines ? `<div style="margin-bottom:1.5rem;">
          <h4 style="font-size:1.125rem;font-weight:600;color:#111827;margin-bottom:0.75rem;">📋 When to Use</h4>
          <p style="background:#f9fafb;padding:1rem;border-radius:0.5rem;color:#374151;">${modifier.usage_guidelines}</p>
        </div>` : ''}
        ${modifier.specialty_specific ? `<div style="margin-bottom:1.5rem;">
          <h4 style="font-size:1.125rem;font-weight:600;color:#111827;margin-bottom:0.75rem;">🏥 Specialty-Specific Information</h4>
          <p style="background:#dbeafe;padding:1rem;border-radius:0.5rem;color:#374151;">${modifier.specialty_specific}</p>
        </div>` : ''}
        ${modifier.examples ? `<div style="margin-bottom:1.5rem;">
          <h4 style="font-size:1.125rem;font-weight:600;color:#111827;margin-bottom:0.75rem;">💡 Examples</h4>
          <p style="background:#d1fae5;padding:1rem;border-radius:0.5rem;color:#374151;">${modifier.examples}</p>
        </div>` : ''}
      </div>
    </div>`;
  });

  content += `<section style="margin-top:3rem;padding:2rem;background:linear-gradient(135deg,#f97316,#ea580c);border-radius:0.75rem;color:white;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Expert Medical Billing with Proper Modifier Usage</h2>
    <p style="margin-bottom:1.5rem;opacity:0.9;">Incorrect modifier usage is a leading cause of claim denials. Our certified billing specialists ensure proper modifier application.</p>
    <p style="font-weight:600;font-size:1.25rem;">Get Expert Support: (866) 261-5711</p>
  </section></div>`;

  return content;
}

function generateEMRIntegrationContent(emr: any): string {
  let content = `<div style="line-height:1.8;">`;
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">${emr.description}</p>`;

  content += `<section style="margin-bottom:2rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#2563eb;">⚡ Integration Features</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;">`;

  emr.features.forEach((feature: string) => {
    content += `<div style="display:flex;align-items:start;gap:0.75rem;padding:1rem;background:#f9fafb;border-radius:0.5rem;">
      <span style="color:#10b981;font-size:1.25rem;">✓</span>
      <span style="color:#374151;">${feature}</span>
    </div>`;
  });

  content += `</div></section>`;

  if (emr.supported_specialties && emr.supported_specialties.length > 0) {
    content += `<section style="margin-bottom:2rem;">
      <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#2563eb;">👥 Supported Specialties</h2>
      <div style="display:flex;flex-wrap:gap;gap:0.75rem;">`;

    emr.supported_specialties.forEach((specialty: string) => {
      content += `<span style="padding:0.5rem 1rem;background:#dbeafe;color:#1e40af;border-radius:9999px;font-weight:500;">${specialty}</span>`;
    });

    content += `</div></section>`;
  }

  content += `<section style="margin-top:3rem;padding:2rem;background:linear-gradient(135deg,#2563eb,#1e40af);border-radius:0.75rem;color:white;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Ready to Optimize Your ${emr.name} Billing?</h2>
    <p style="margin-bottom:1.5rem;opacity:0.9;">Our team has extensive experience with ${emr.name} integration and can help you maximize revenue.</p>
    <p style="font-weight:600;font-size:1.25rem;">Schedule Free Consultation: (866) 261-5711</p>
  </section></div>`;

  return content;
}

generateAllPages().catch((error) => {
  console.error('❌ Static generation failed:', error);
  process.exit(1);
});
