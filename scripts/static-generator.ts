import { createClient } from '@supabase/supabase-js';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

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

// Generate fully visible static HTML content that search engines will see
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

  // Add schema markup if provided
  if (pageData.schema) {
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">${JSON.stringify(pageData.schema)}</script>\n  </head>`
    );
  }

  // Inject VISIBLE static content for SEO
  // This content will be replaced by React when it loads, but search engines will see it immediately
  const staticContent = `<div id="root">
    <div class="static-content" style="max-width:1200px;margin:0 auto;padding:2rem;">
      <header style="margin-bottom:2rem;">
        <h1 style="font-size:2.5rem;font-weight:bold;margin-bottom:1rem;">${pageData.h1}</h1>
      </header>
      <main>
        ${pageData.content}
      </main>
    </div>
  </div>`;

  // Replace root div AND any content inside it (including old prerender content)
  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*<\/div>/, staticContent + '\n  ');

  return html;
}

function generateStatePageContent(state: StatePageData): string {
  let content = `<div style="line-height:1.8;">`;

  // Hero description
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">${state.hero_description}</p>`;

  // Key benefits section
  if (state.key_benefits && state.key_benefits.length > 0) {
    content += `<section style="margin-bottom:2rem;">
      <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Why Choose Our Services in ${state.state_name}</h2>
      <div style="display:grid;gap:1.5rem;">`;

    state.key_benefits.forEach(benefit => {
      content += `
        <div style="padding:1.5rem;background:#f9fafb;border-radius:0.5rem;">
          <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem;">${benefit.title}</h3>
          <p style="color:#6b7280;">${benefit.description}</p>
        </div>`;
    });

    content += `</div></section>`;
  }

  // Major cities section
  if (state.major_cities && state.major_cities.length > 0) {
    content += `<section style="margin-bottom:2rem;">
      <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Cities We Serve in ${state.state_name}</h2>
      <p style="margin-bottom:1rem;">We provide professional medical billing services across ${state.state_name}, including:</p>
      <ul style="list-style:disc;margin-left:2rem;color:#374151;">`;

    state.major_cities.forEach(city => {
      content += `<li style="margin-bottom:0.5rem;">${city}</li>`;
    });

    content += `</ul></section>`;
  }

  // CTA section
  content += `<section style="margin-top:3rem;padding:2rem;background:#eff6ff;border-radius:0.5rem;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Ready to Optimize Your Medical Billing in ${state.state_name}?</h2>
    <p style="font-size:1.125rem;margin-bottom:1.5rem;">Contact us today for a free consultation and revenue cycle analysis.</p>
    <p style="color:#2563eb;font-weight:600;">Call (866) 261-5711 or visit our contact page</p>
  </section>`;

  content += `</div>`;
  return content;
}

function generateCityPageContent(city: CityPageData, stateName: string): string {
  let content = `<div style="line-height:1.8;">`;

  // Hero description
  content += `<p style="font-size:1.125rem;margin-bottom:2rem;">${city.hero_description}</p>`;

  // Key benefits section
  if (city.key_benefits && city.key_benefits.length > 0) {
    content += `<section style="margin-bottom:2rem;">
      <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Why Choose Our Services in ${city.city_name}</h2>
      <div style="display:grid;gap:1.5rem;">`;

    city.key_benefits.forEach(benefit => {
      content += `
        <div style="padding:1.5rem;background:#f9fafb;border-radius:0.5rem;">
          <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem;">${benefit.title}</h3>
          <p style="color:#6b7280;">${benefit.description}</p>
        </div>`;
    });

    content += `</div></section>`;
  }

  // City info
  content += `<section style="margin-bottom:2rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">About ${city.city_name}, ${stateName}</h2>
    <p style="margin-bottom:0.5rem;"><strong>Metro Area:</strong> ${city.metro_area}</p>
    <p style="margin-bottom:1rem;"><strong>Population:</strong> ${city.population}</p>
  </section>`;

  // Nearby cities
  if (city.nearby_cities && city.nearby_cities.length > 0) {
    content += `<section style="margin-bottom:2rem;">
      <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">We Also Serve Nearby Cities</h2>
      <ul style="list-style:disc;margin-left:2rem;color:#374151;">`;

    city.nearby_cities.forEach(nearbyCity => {
      content += `<li style="margin-bottom:0.5rem;">${nearbyCity}</li>`;
    });

    content += `</ul></section>`;
  }

  // CTA
  content += `<section style="margin-top:3rem;padding:2rem;background:#eff6ff;border-radius:0.5rem;text-align:center;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;">Partner with ${city.city_name}'s Trusted Medical Billing Experts</h2>
    <p style="font-size:1.125rem;margin-bottom:1.5rem;">Get a free consultation and see how we can increase your practice revenue.</p>
    <p style="color:#2563eb;font-weight:600;">Call (866) 261-5711 or visit our contact page</p>
  </section>`;

  content += `</div>`;
  return content;
}

async function generateAllPages() {
  console.log('🚀 Starting Static HTML Generation...\n');

  const distPath = join(__dirname, '../dist');
  const baseHTMLPath = join(distPath, 'index.html');

  console.log('📄 Reading base HTML template...');
  let baseHTML: string;
  try {
    baseHTML = readFileSync(baseHTMLPath, 'utf-8');
    console.log('✅ Base HTML template loaded\n');
  } catch (error) {
    console.error('❌ Could not read base HTML. Run `npm run build` first (without static generation)');
    process.exit(1);
  }

  let totalSuccess = 0;
  let totalError = 0;

  // Generate state pages
  console.log('📊 Fetching state pages from database...');
  const { data: states, error: stateError } = await supabase
    .from('state_pages')
    .select('*')
    .order('state_name');

  if (!stateError && states && states.length > 0) {
    console.log(`✅ Found ${states.length} state pages\n`);

    for (const state of states as StatePageData[]) {
      try {
        console.log(`🔄 Generating: ${state.state_name} (${state.slug})`);

        const pageHTML = generateStaticHTML(baseHTML, {
          title: state.meta_title,
          metaDescription: state.meta_description,
          canonicalUrl: `https://medtransic.com/medical-billing-services/${state.slug}`,
          h1: state.hero_title,
          content: generateStatePageContent(state),
          schema: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            'name': `Medtransic - ${state.state_name} Medical Billing Services`,
            'description': state.meta_description,
            'url': `https://medtransic.com/medical-billing-services/${state.slug}`,
            'areaServed': {
              '@type': 'State',
              'name': state.state_name
            },
            'serviceType': 'Medical Billing Services'
          }
        });

        const pagePath = join(distPath, 'medical-billing-services', state.slug);
        mkdirSync(pagePath, { recursive: true });

        writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');
        console.log(`   ✅ Saved to: /medical-billing-services/${state.slug}/index.html`);
        totalSuccess++;
      } catch (error) {
        console.error(`   ❌ Error generating ${state.state_name}:`, error);
        totalError++;
      }
    }
  } else {
    console.log('⚠️  No state pages found in database');
  }

  // Generate city pages
  console.log('\n📊 Fetching city pages from database...');
  const { data: cities, error: cityError } = await supabase
    .from('city_pages')
    .select('*')
    .order('city_name');

  if (!cityError && cities && cities.length > 0) {
    console.log(`✅ Found ${cities.length} city pages\n`);

    const stateMap = new Map<string, StatePageData>();
    if (states) {
      states.forEach((state: any) => stateMap.set(state.slug, state));
    }

    for (const city of cities as CityPageData[]) {
      try {
        const stateData = stateMap.get(city.state_slug);
        if (!stateData) {
          console.log(`   ⚠️  Skipping ${city.city_name}: State not found`);
          continue;
        }

        console.log(`🔄 Generating: ${city.city_name}, ${stateData.state_name}`);

        const pageHTML = generateStaticHTML(baseHTML, {
          title: city.meta_title,
          metaDescription: city.meta_description,
          canonicalUrl: `https://medtransic.com/medical-billing-services/${city.state_slug}/${city.city_slug}`,
          h1: city.hero_title,
          content: generateCityPageContent(city, stateData.state_name),
          schema: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            'name': `Medtransic - ${city.city_name}, ${stateData.state_name} Medical Billing Services`,
            'description': city.meta_description,
            'url': `https://medtransic.com/medical-billing-services/${city.state_slug}/${city.city_slug}`,
            'areaServed': {
              '@type': 'City',
              'name': city.city_name,
              'containedIn': {
                '@type': 'State',
                'name': stateData.state_name
              }
            },
            'serviceType': 'Medical Billing Services'
          }
        });

        const pagePath = join(distPath, 'medical-billing-services', city.state_slug, city.city_slug);
        mkdirSync(pagePath, { recursive: true });

        writeFileSync(join(pagePath, 'index.html'), pageHTML, 'utf-8');
        console.log(`   ✅ Saved to: /medical-billing-services/${city.state_slug}/${city.city_slug}/index.html`);
        totalSuccess++;
      } catch (error) {
        console.error(`   ❌ Error generating ${city.city_name}:`, error);
        totalError++;
      }
    }
  } else {
    console.log('⚠️  No city pages found in database');
  }

  console.log('\n📊 Static HTML Generation Summary:');
  console.log(`   ✅ Successfully generated: ${totalSuccess} pages`);
  if (totalError > 0) {
    console.log(`   ❌ Failed: ${totalError} pages`);
  }
  console.log('\n🎉 Static HTML generation complete!');
  console.log('💡 Pages now contain full SEO-visible content that search engines can index immediately.\n');
}

generateAllPages().catch((error) => {
  console.error('❌ Static generation failed:', error);
  process.exit(1);
});
