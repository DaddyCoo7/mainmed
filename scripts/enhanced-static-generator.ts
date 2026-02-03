import { createClient } from '@supabase/supabase-js';
import { writeFileSync, mkdirSync, readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { generateServiceHTML, generateSpecialtyHTML } from './content-templates.js';
import { allDefinitions, generateServiceContent, generateSpecialtyContent, generateStaticPageContent } from './content-generator.js';

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

// Extract CSS content from built assets
function extractCSSContent(distPath: string): string {
  const assetsPath = join(distPath, 'assets');
  let allCSS = '';

  try {
    const files = readdirSync(assetsPath);
    const cssFiles = files.filter(f => f.endsWith('.css'));

    console.log(`📦 Found ${cssFiles.length} CSS files`);

    for (const cssFile of cssFiles) {
      const cssContent = readFileSync(join(assetsPath, cssFile), 'utf-8');
      allCSS += cssContent + '\n';
    }

    return allCSS;
  } catch (error) {
    console.warn('⚠️  Could not read CSS files, using fallback');
    return '';
  }
}

// Generate optimized static HTML with inline CSS
function generateStaticHTML(baseHTML: string, allCSS: string, pageData: {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  h1: string;
  content: string;
  schema?: any;
}): string {
  let html = baseHTML;

  // Update title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${pageData.title}</title>`);

  // Update meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/gi,
    `<meta name="description" content="${pageData.metaDescription}" />`
  );

  // Update canonical URL
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi,
    `<link rel="canonical" href="${pageData.canonicalUrl}" />`
  );

  // Remove all existing og and twitter meta tags
  html = html.replace(/<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '');

  // Ensure robots meta exists
  if (!html.includes('<meta name="robots"')) {
    html = html.replace(
      '</head>',
      '  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />\n  </head>'
    );
  }

  // Add Open Graph and Twitter tags
  const socialTags = `
  <meta property="og:title" content="${pageData.title}" />
  <meta property="og:description" content="${pageData.metaDescription}" />
  <meta property="og:url" content="${pageData.canonicalUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Medtransic" />
  <meta property="og:image" content="https://medtransic.com/medtransic-logomark1.svg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageData.title}" />
  <meta name="twitter:description" content="${pageData.metaDescription}" />
  <meta name="twitter:image" content="https://medtransic.com/medtransic-logomark1.svg" />`;

  html = html.replace('</head>', `${socialTags}\n  </head>`);

  // Remove old schema markup
  html = html.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

  // Add schema markup
  if (pageData.schema) {
    const schemaScript = `  <script type="application/ld+json">${JSON.stringify(pageData.schema, null, 0)}</script>`;
    html = html.replace('</head>', `${schemaScript}\n  </head>`);
  }

  // Remove all JavaScript imports (modulepreload, script tags)
  html = html.replace(/<script\s+type="module"[^>]*>[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<script[^>]*crossorigin[^>]*src="[^"]*"[^>]*><\/script>/gi, '');
  html = html.replace(/<link\s+rel="modulepreload"[^>]*>/gi, '');

  // Keep CSS links but also add inline CSS for crawler-friendly rendering
  if (allCSS) {
    html = html.replace('</head>', `  <style>${allCSS}</style>\n  </head>`);
  }

  // Create clean, crawlable content
  const staticContent = `<div id="root">
    ${pageData.content}
  </div>`;

  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*(?:<\/div>)?/i, staticContent);

  return html;
}

// Generate properly styled content sections
function createStyledContent(h1: string, sections: Array<{title?: string, content: string, type?: 'hero' | 'section' | 'cta' | 'features'}>): string {
  let html = `<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">`;

  // Header
  html += `<header class="bg-white shadow-sm border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img src="/medtransic-logomark1.svg" alt="Medtransic" class="h-10 w-10" />
          <span class="text-2xl font-bold text-sky-900">Medtransic</span>
        </div>
        <div class="text-sky-900 font-semibold">
          <a href="tel:8887770860" class="hover:text-sky-600">📞 (888) 777-0860</a>
        </div>
      </div>
    </div>
  </header>`;

  // Hero section with H1
  html += `<section class="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">${h1}</h1>
    </div>
  </section>`;

  // Main content
  html += `<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">`;

  sections.forEach(section => {
    if (section.type === 'cta') {
      html += `<section class="my-12 p-8 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl shadow-xl text-white text-center">
        ${section.content}
      </section>`;
    } else if (section.type === 'features') {
      html += `<section class="my-12">
        ${section.title ? `<h2 class="text-3xl font-bold text-slate-900 mb-8">${section.title}</h2>` : ''}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${section.content}
        </div>
      </section>`;
    } else {
      html += `<section class="my-12 bg-white rounded-xl shadow-lg p-8">
        ${section.title ? `<h2 class="text-3xl font-bold text-slate-900 mb-6">${section.title}</h2>` : ''}
        <div class="prose prose-lg max-w-none text-slate-700 leading-relaxed">
          ${section.content}
        </div>
      </section>`;
    }
  });

  html += `</main>`;

  // Footer
  html += `<footer class="bg-slate-900 text-white py-12 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Medtransic</h3>
          <p class="text-slate-400">Professional medical billing and revenue cycle management services.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-slate-400">
            <li><a href="/services" class="hover:text-white">Services</a></li>
            <li><a href="/specialties" class="hover:text-white">Specialties</a></li>
            <li><a href="/about" class="hover:text-white">About Us</a></li>
            <li><a href="/contact" class="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Us</h3>
          <p class="text-slate-400">Phone: (888) 777-0860</p>
          <p class="text-slate-400">Available 24/7</p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
        <p>&copy; ${new Date().getFullYear()} Medtransic. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

  html += `</div>`;

  return html;
}

async function generateAllPages() {
  console.log('🚀 Starting Enhanced Static HTML Generation...\n');
  console.log('═══════════════════════════════════════════════\n');

  const distPath = join(__dirname, '../dist');
  const baseHTMLPath = join(distPath, 'index.html');

  console.log('📄 Reading base HTML template...');
  let baseHTML: string;
  try {
    baseHTML = readFileSync(baseHTMLPath, 'utf-8');
    console.log('✅ Base HTML template loaded');
  } catch (error) {
    console.error('❌ Could not read base HTML. Run `npm run build:no-static` first');
    process.exit(1);
  }

  console.log('🎨 Extracting CSS from build...');
  const allCSS = extractCSSContent(distPath);
  console.log(`✅ CSS extracted (${(allCSS.length / 1024).toFixed(1)}KB)\n`);

  let totalSuccess = 0;
  let totalError = 0;

  // Generate HOME page
  console.log('🏠 Generating Home Page...');
  try {
    const homeContent = createStyledContent(
      'Medical Billing Services That Maximize Your Revenue',
      [
        {
          content: `<p class="text-xl">Boost your practice revenue by 30% with our certified medical billing experts. HIPAA-compliant RCM solutions with 99% clean claims rate.</p>
          <div class="mt-8 flex gap-4 flex-wrap">
            <a href="/contact" class="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold inline-block">Get Free Consultation</a>
            <a href="/services" class="bg-white hover:bg-slate-50 text-sky-900 px-8 py-3 rounded-lg font-semibold inline-block border-2 border-sky-600">View Services</a>
          </div>`
        },
        {
          title: 'Why Choose Medtransic',
          type: 'features',
          content: `
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-sky-600">
              <h3 class="text-xl font-bold text-slate-900 mb-3">99% Clean Claims Rate</h3>
              <p class="text-slate-600">Industry-leading accuracy ensures faster payments and fewer denials.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
              <h3 class="text-xl font-bold text-slate-900 mb-3">30% Revenue Increase</h3>
              <p class="text-slate-600">Average revenue boost within first 6 months of partnership.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-600">
              <h3 class="text-xl font-bold text-slate-900 mb-3">24/7 Support</h3>
              <p class="text-slate-600">Round-the-clock assistance for all your billing needs.</p>
            </div>`
        },
        {
          type: 'cta',
          content: `<h2 class="text-3xl font-bold mb-4">Ready to Transform Your Revenue Cycle?</h2>
          <p class="text-xl mb-6 opacity-90">Join hundreds of practices that trust Medtransic for their medical billing needs.</p>
          <a href="tel:8887770860" class="text-2xl font-bold">Call (888) 777-0860</a>`
        }
      ]
    );

    const pageHTML = generateStaticHTML(baseHTML, allCSS, {
      title: 'Medical Billing Services 2025 | 99% Clean Claims | RCM | Medtransic',
      metaDescription: 'Boost revenue by 30% with certified medical billing experts. HIPAA-compliant RCM solutions, 99% clean claims, faster payments nationwide.',
      canonicalUrl: 'https://medtransic.com/',
      h1: 'Medical Billing Services That Maximize Your Revenue',
      content: homeContent,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        'name': 'Medtransic',
        'description': 'Professional medical billing and revenue cycle management services',
        'url': 'https://medtransic.com',
        'telephone': '888-777-0860',
        'priceRange': '$$',
        'areaServed': 'United States'
      }
    });

    writeFileSync(join(distPath, 'index.html'), pageHTML, 'utf-8');
    console.log('✅ Home Page generated\n');
    totalSuccess++;
  } catch (error) {
    console.error('❌ Error generating home page:', error);
    totalError++;
  }

  // Generate STATE pages
  console.log('═══════════════════════════════════════════════');
  console.log('📍 GENERATING STATE PAGES');
  console.log('═══════════════════════════════════════════════\n');

  const { data: states } = await supabase
    .from('state_pages')
    .select('*')
    .order('state_name');

  if (states && states.length > 0) {
    console.log(`✅ Found ${states.length} state pages\n`);

    for (const state of states) {
      try {
        const stateContent = createStyledContent(
          state.hero_title,
          [
            { content: `<p class="text-xl">${state.hero_description}</p>` },
            {
              title: `Why Choose Medtransic in ${state.state_name}`,
              type: 'features',
              content: state.key_benefits.map((benefit: any) => `
                <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-sky-600">
                  <h3 class="text-xl font-bold text-slate-900 mb-3">${benefit.title}</h3>
                  <p class="text-slate-600">${benefit.description}</p>
                </div>
              `).join('')
            },
            {
              title: `Cities We Serve in ${state.state_name}`,
              content: `<ul class="grid md:grid-cols-2 gap-3">
                ${state.major_cities.map((city: string) => `<li class="flex items-center gap-2"><span class="text-sky-600">✓</span> ${city}</li>`).join('')}
              </ul>`
            },
            {
              type: 'cta',
              content: `<h2 class="text-3xl font-bold mb-4">Partner with ${state.state_name}'s Leading Medical Billing Experts</h2>
              <p class="text-xl mb-6 opacity-90">Free consultation and practice analysis</p>
              <a href="tel:8887770860" class="text-2xl font-bold">Call (888) 777-0860</a>`
            }
          ]
        );

        const pageHTML = generateStaticHTML(baseHTML, allCSS, {
          title: state.meta_title,
          metaDescription: state.meta_description,
          canonicalUrl: `https://medtransic.com/medical-billing-services/${state.slug}`,
          h1: state.hero_title,
          content: stateContent,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            'name': `Medtransic - ${state.state_name}`,
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
        console.error(`❌ Error: ${state.state_name}`, error);
        totalError++;
      }
    }
  }

  // Summary
  console.log('\n═══════════════════════════════════════════════');
  console.log('📊 GENERATION COMPLETE');
  console.log('═══════════════════════════════════════════════');
  console.log(`✅ Successfully generated: ${totalSuccess} pages`);
  if (totalError > 0) {
    console.log(`❌ Failed: ${totalError} pages`);
  }
  console.log(`\n✨ Static HTML files ready for search engines!\n`);
}

generateAllPages().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
