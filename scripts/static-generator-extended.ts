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

  // 5. Generate STATIC pages (23 pages) - About, Contact, etc.
  console.log('\n═══════════════════════════════════════════════');
  console.log('📄 GENERATING STATIC PAGES (Target: 23)');
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

  // Summary
  console.log('\n═══════════════════════════════════════════════');
  console.log('📊 GENERATION SUMMARY');
  console.log('═══════════════════════════════════════════════');
  console.log(`✅ Successfully generated: ${totalSuccess} pages`);
  if (totalError > 0) {
    console.log(`❌ Failed: ${totalError} pages`);
  }
  console.log(`\n🎯 Target: 175 pages`);
  console.log(`📈 Progress: ${totalSuccess}/175 (${Math.round(totalSuccess/175*100)}%)`);
  console.log(`⏳ Remaining: ${175 - totalSuccess} pages\n`);
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

generateAllPages().catch((error) => {
  console.error('❌ Static generation failed:', error);
  process.exit(1);
});
