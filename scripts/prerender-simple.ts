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
  }

  console.log('\n📊 Total Pre-rendering Summary:');
  console.log(`   ✅ Total pages generated: ${successCount + (cities?.length || 0)} pages`);
  console.log('\n🎉 Pre-rendering complete!');
}

// Run the prerender process
prerenderPages().catch((error) => {
  console.error('❌ Pre-rendering failed:', error);
  process.exit(1);
});
