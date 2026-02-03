import { createClient } from '@supabase/supabase-js';
import { writeFileSync, mkdirSync, readFileSync, readdirSync } from 'fs';
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

// Read all CSS from build output
function getAllCSS(distPath: string): string {
  try {
    const assetsPath = join(distPath, 'assets');
    const files = readdirSync(assetsPath);
    const cssFiles = files.filter(f => f.endsWith('.css'));

    let allCSS = '';
    for (const file of cssFiles) {
      const content = readFileSync(join(assetsPath, file), 'utf-8');
      allCSS += content;
    }

    return allCSS;
  } catch (error) {
    console.warn('⚠️  Could not read CSS files');
    return '';
  }
}

// Create clean static HTML with all CSS inline
function createStaticHTML(baseHTML: string, css: string, seo: {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  content: string;
  schema?: any;
}): string {
  let html = baseHTML;

  // Update SEO tags
  html = html.replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/gi,
    `<meta name="description" content="${seo.description}" />`
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi,
    `<link rel="canonical" href="${seo.canonical}" />`
  );

  // Remove JS and old tags
  html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, (match) => {
    if (match.includes('application/ld+json') || match.includes('gtag')) {
      return match; // Keep schema and analytics
    }
    return '';
  });
  html = html.replace(/<link\s+rel="modulepreload"[^>]*>/gi, '');
  html = html.replace(/<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '');

  // Add OG tags
  const ogTags = `
  <meta property="og:title" content="${seo.title}" />
  <meta property="og:description" content="${seo.description}" />
  <meta property="og:url" content="${seo.canonical}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />`;

  html = html.replace('</head>', `${ogTags}\n  </head>`);

  // Add schema
  if (seo.schema) {
    html = html.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(seo.schema)}</script>\n  </head>`);
  }

  // Inline CSS for crawler visibility
  if (css) {
    html = html.replace('</head>', `  <style>${css}</style>\n  </head>`);
  }

  // Replace content
  const fullContent = `<div id="root">${seo.content}</div>`;
  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*(?:<\/div>)?/i, fullContent);

  return html;
}

// Create styled page layout
function createPage(h1: string, sections: any[]): string {
  let html = '<div class="min-h-screen bg-white">';

  // Header
  html += `
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between">
        <a href="/" class="flex items-center space-x-3">
          <img src="/medtransic-logomark1.svg" alt="Medtransic Logo" class="h-10 w-10" />
          <span class="text-2xl font-bold text-sky-900">Medtransic</span>
        </a>
        <a href="tel:8887770860" class="text-sky-900 font-semibold hover:text-sky-700">
          📞 (888) 777-0860
        </a>
      </div>
    </div>
  </header>`;

  // Hero
  html += `
  <section class="bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">${h1}</h1>
    </div>
  </section>`;

  // Main content
  html += '<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">';

  for (const section of sections) {
    if (section.type === 'intro') {
      html += `<div class="text-xl text-gray-700 mb-12">${section.content}</div>`;
    } else if (section.type === 'features') {
      html += `
      <section class="my-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">${section.title || ''}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          ${section.items.map((item: any) => `
            <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-sky-600">
              <h3 class="text-xl font-bold text-gray-900 mb-3">${item.title}</h3>
              <p class="text-gray-600">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </section>`;
    } else if (section.type === 'content') {
      html += `
      <section class="my-12 bg-white rounded-xl shadow-lg p-8">
        ${section.title ? `<h2 class="text-3xl font-bold text-gray-900 mb-6">${section.title}</h2>` : ''}
        <div class="prose prose-lg max-w-none">${section.content}</div>
      </section>`;
    } else if (section.type === 'cta') {
      html += `
      <section class="my-12 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-white text-center">
        <h2 class="text-3xl font-bold mb-4">${section.title}</h2>
        <p class="text-xl mb-6">${section.content}</p>
        <a href="tel:8887770860" class="text-2xl font-bold">Call (888) 777-0860</a>
      </section>`;
    }
  }

  html += '</main>';

  // Footer
  html += `
  <footer class="bg-gray-900 text-white py-12 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Medtransic</h3>
          <p class="text-gray-400">Professional medical billing services</p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Services</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="/services/medical-billing" class="hover:text-white">Medical Billing</a></li>
            <li><a href="/services/ar-management" class="hover:text-white">AR Management</a></li>
            <li><a href="/services/denial-management" class="hover:text-white">Denial Management</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="/about" class="hover:text-white">About Us</a></li>
            <li><a href="/contact" class="hover:text-white">Contact</a></li>
            <li><a href="/privacy" class="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <p class="text-gray-400">Phone: (888) 777-0860</p>
          <p class="text-gray-400">24/7 Support</p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Medtransic. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

  html += '</div>';
  return html;
}

async function generateAllStaticPages() {
  console.log('🚀 Generating Static HTML Pages...\n');

  const distPath = join(__dirname, '../dist');
  const baseHTML = readFileSync(join(distPath, 'index.html'), 'utf-8');
  const css = getAllCSS(distPath);

  console.log(`📦 CSS loaded: ${(css.length / 1024).toFixed(1)}KB\n`);

  let count = 0;

  // Home page
  const homeContent = createPage(
    'Medical Billing Services That Maximize Your Revenue',
    [
      { type: 'intro', content: '<p>Boost your practice revenue by 30% with certified medical billing experts. HIPAA-compliant RCM solutions with 99% clean claims rate.</p>' },
      {
        type: 'features',
        title: 'Why Choose Medtransic',
        items: [
          { title: '99% Clean Claims Rate', description: 'Industry-leading accuracy ensures faster payments.' },
          { title: '30% Revenue Increase', description: 'Average boost within first 6 months.' },
          { title: '24/7 Support', description: 'Round-the-clock assistance for all your needs.' }
        ]
      },
      { type: 'cta', title: 'Ready to Transform Your Revenue?', content: 'Join hundreds of practices nationwide.' }
    ]
  );

  const homeHTML = createStaticHTML(baseHTML, css, {
    title: 'Medical Billing Services 2025 | 99% Clean Claims | RCM | Medtransic',
    description: 'Boost revenue by 30% with certified medical billing experts. HIPAA-compliant RCM solutions, 99% clean claims nationwide.',
    canonical: 'https://medtransic.com/',
    h1: 'Medical Billing Services',
    content: homeContent,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      'name': 'Medtransic',
      'url': 'https://medtransic.com',
      'telephone': '888-777-0860'
    }
  });

  writeFileSync(join(distPath, 'index.html'), homeHTML, 'utf-8');
  console.log('✅ 1. Home Page');
  count++;

  // State pages
  console.log('\n📍 Generating State Pages...');
  const { data: states } = await supabase.from('state_pages').select('*').order('state_name');

  if (states) {
    for (const state of states) {
      const content = createPage(state.hero_title, [
        { type: 'intro', content: `<p>${state.hero_description}</p>` },
        {
          type: 'features',
          title: `Why Choose Us in ${state.state_name}`,
          items: state.key_benefits.slice(0, 3)
        },
        { type: 'cta', title: `Partner with ${state.state_name}'s Experts`, content: 'Free consultation available today.' }
      ]);

      const html = createStaticHTML(baseHTML, css, {
        title: state.meta_title,
        description: state.meta_description,
        canonical: `https://medtransic.com/medical-billing-services/${state.slug}`,
        h1: state.hero_title,
        content,
        schema: { '@context': 'https://schema.org', '@type': 'MedicalBusiness', 'name': `Medtransic - ${state.state_name}` }
      });

      const dir = join(distPath, 'medical-billing-services', state.slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html, 'utf-8');

      count++;
      console.log(`✅ ${count}. ${state.state_name}`);
    }
  }

  // City pages
  console.log('\n🏙️  Generating City Pages...');
  const { data: cities } = await supabase.from('city_pages').select('*').order('city_name');

  if (cities && states) {
    const stateMap = new Map(states.map(s => [s.slug, s]));

    for (const city of cities) {
      const state = stateMap.get(city.state_slug);
      if (!state) continue;

      const content = createPage(city.hero_title, [
        { type: 'intro', content: `<p>${city.hero_description}</p>` },
        {
          type: 'features',
          title: `Medical Billing in ${city.city_name}`,
          items: city.key_benefits.slice(0, 3)
        },
        { type: 'cta', title: `Optimize Your ${city.city_name} Practice`, content: 'Schedule your free consultation.' }
      ]);

      const html = createStaticHTML(baseHTML, css, {
        title: city.meta_title,
        description: city.meta_description,
        canonical: `https://medtransic.com/medical-billing-services/${city.state_slug}/${city.city_slug}`,
        h1: city.hero_title,
        content,
        schema: { '@context': 'https://schema.org', '@type': 'MedicalBusiness', 'name': `Medtransic - ${city.city_name}` }
      });

      const dir = join(distPath, 'medical-billing-services', city.state_slug, city.city_slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html, 'utf-8');

      count++;
      console.log(`✅ ${count}. ${city.city_name}, ${state.state_name}`);
    }
  }

  // Comparison pages
  console.log('\n🆚 Generating Comparison Pages...');
  const { data: comparisons } = await supabase.from('comparison_pages').select('*').order('title');

  if (comparisons) {
    for (const comp of comparisons) {
      const content = createPage(comp.h1, [
        { type: 'intro', content: `<p>${comp.intro}</p>` },
        {
          type: 'content',
          title: 'Detailed Comparison',
          content: `<p>${comp.winner_summary}</p>`
        },
        { type: 'cta', title: 'Need Help Choosing?', content: 'Get expert advice on the best solution for your practice.' }
      ]);

      const html = createStaticHTML(baseHTML, css, {
        title: comp.title,
        description: comp.meta_description,
        canonical: `https://medtransic.com/comparisons/${comp.slug}`,
        h1: comp.h1,
        content,
        schema: { '@context': 'https://schema.org', '@type': 'Article', 'headline': comp.h1 }
      });

      const dir = join(distPath, 'comparisons', comp.slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html, 'utf-8');

      count++;
      console.log(`✅ ${count}. ${comp.option_a_name} vs ${comp.option_b_name}`);
    }
  }

  // EMR Integration pages
  console.log('\n⚡ Generating EMR Integration Pages...');
  const { data: emrs } = await supabase.from('emr_integrations').select('*').order('popularity_rank');

  if (emrs) {
    for (const emr of emrs) {
      const content = createPage(`${emr.name} Medical Billing Integration`, [
        { type: 'intro', content: `<p>${emr.description}</p>` },
        {
          type: 'features',
          title: 'Integration Features',
          items: emr.features.slice(0, 6).map((f: string) => ({ title: f, description: 'Seamless integration' }))
        },
        { type: 'cta', title: `Optimize Your ${emr.name} Billing`, content: 'Schedule a free consultation with our integration experts.' }
      ]);

      const html = createStaticHTML(baseHTML, css, {
        title: `${emr.name} Medical Billing Integration | Seamless ${emr.integration_type} Connection`,
        description: emr.meta_description || emr.description,
        canonical: `https://medtransic.com/integrations/${emr.slug}`,
        h1: `${emr.name} Medical Billing Integration`,
        content,
        schema: { '@context': 'https://schema.org', '@type': 'SoftwareApplication', 'name': `${emr.name} Integration` }
      });

      const dir = join(distPath, 'integrations', emr.slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html, 'utf-8');

      count++;
      console.log(`✅ ${count}. ${emr.name}`);
    }
  }

  // Resource pages
  console.log('\n📚 Generating Resource Pages...');

  // CPT Codes
  const { data: cptCodes } = await supabase.from('cpt_codes').select('*').limit(100);
  if (cptCodes && cptCodes.length > 0) {
    const content = createPage('CPT Codes Cheat Sheet 2025', [
      { type: 'intro', content: '<p>Complete reference guide for Current Procedural Terminology codes including E&M codes, surgical codes, and specialty-specific billing codes.</p>' },
      {
        type: 'content',
        title: 'Most Common CPT Codes',
        content: cptCodes.slice(0, 20).map(c => `<div><strong>${c.code}</strong>: ${c.description}</div>`).join('')
      },
      { type: 'cta', title: 'Need Medical Billing Help?', content: 'Our certified specialists ensure accurate coding and maximum reimbursement.' }
    ]);

    const html = createStaticHTML(baseHTML, css, {
      title: 'CPT Codes Cheat Sheet 2025 | Complete Medical Billing Code Reference',
      description: 'Free CPT codes cheat sheet with descriptions, RVU values, and specialty-specific codes for medical billing.',
      canonical: 'https://medtransic.com/resources/cpt-codes-cheat-sheet',
      h1: 'CPT Codes Cheat Sheet 2025',
      content,
      schema: { '@context': 'https://schema.org', '@type': 'MedicalWebPage', 'name': 'CPT Codes Reference' }
    });

    const dir = join(distPath, 'resources', 'cpt-codes-cheat-sheet');
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
    count++;
    console.log(`✅ ${count}. CPT Codes Cheat Sheet`);
  }

  // ICD-10 Codes
  const { data: icd10Codes } = await supabase.from('icd10_codes').select('*').limit(100);
  if (icd10Codes && icd10Codes.length > 0) {
    const content = createPage('ICD-10 Codes Reference Guide', [
      { type: 'intro', content: '<p>Complete ICD-10 diagnosis codes including pre-operative clearance codes and commonly used medical diagnosis codes.</p>' },
      {
        type: 'content',
        title: 'Essential ICD-10 Codes',
        content: icd10Codes.slice(0, 20).map(c => `<div><strong>${c.code}</strong>: ${c.description}</div>`).join('')
      },
      { type: 'cta', title: 'Professional Medical Coding', content: 'Ensure accurate ICD-10 coding with our certified specialists.' }
    ]);

    const html = createStaticHTML(baseHTML, css, {
      title: 'ICD-10 Codes Reference Guide 2025 | Pre-Op Clearance & Diagnosis Codes',
      description: 'Complete ICD-10 code reference including pre-op clearance codes (Z01.818), surgical clearance, and diagnosis codes.',
      canonical: 'https://medtransic.com/resources/icd-10-codes-reference',
      h1: 'ICD-10 Codes Reference Guide',
      content,
      schema: { '@context': 'https://schema.org', '@type': 'MedicalWebPage', 'name': 'ICD-10 Codes Reference' }
    });

    const dir = join(distPath, 'resources', 'icd-10-codes-reference');
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
    count++;
    console.log(`✅ ${count}. ICD-10 Codes Reference`);
  }

  // Static pages
  console.log('\n📄 Generating Static Pages...');

  const staticPages = [
    {
      slug: 'about',
      title: 'About Medtransic | Medical Billing Experts Since 2015',
      description: 'Learn about Medtransic\'s mission to revolutionize medical billing with certified experts, advanced technology, and personalized service.',
      h1: 'About Medtransic',
      content: [
        { type: 'intro', content: '<p>We are a leading medical billing company dedicated to maximizing revenue for healthcare practices nationwide.</p>' },
        { type: 'content', title: 'Our Mission', content: '<p>To provide exceptional medical billing services that help healthcare providers focus on patient care while we optimize their revenue cycle.</p>' },
        { type: 'cta', title: 'Partner With Us', content: 'Join hundreds of satisfied practices nationwide.' }
      ]
    },
    {
      slug: 'contact',
      title: 'Contact Medtransic | Free Medical Billing Consultation',
      description: 'Contact Medtransic for a free consultation. Get expert medical billing services and revenue cycle management. Call (888) 777-0860.',
      h1: 'Contact Us',
      content: [
        { type: 'intro', content: '<p>Ready to transform your practice revenue? Contact us today for a free consultation.</p>' },
        { type: 'content', title: 'Get In Touch', content: '<p><strong>Phone:</strong> (888) 777-0860<br><strong>Email:</strong> info@medtransic.com<br><strong>Hours:</strong> 24/7 Support Available</p>' },
        { type: 'cta', title: 'Call Now', content: 'Speak with a medical billing expert today.' }
      ]
    },
    {
      slug: 'services',
      title: 'Medical Billing Services | RCM, Coding, AR Management & More',
      description: 'Complete medical billing services including RCM, medical coding, AR management, denial management, and revenue optimization.',
      h1: 'Our Services',
      content: [
        { type: 'intro', content: '<p>Comprehensive medical billing and revenue cycle management services tailored to your practice needs.</p>' },
        {
          type: 'features',
          title: 'Core Services',
          items: [
            { title: 'Medical Billing', description: 'End-to-end billing and claims management' },
            { title: 'AR Management', description: 'Maximize collections and reduce aging' },
            { title: 'Denial Management', description: 'Reduce denials and increase approvals' }
          ]
        },
        { type: 'cta', title: 'Explore Our Services', content: 'Find the perfect solution for your practice.' }
      ]
    }
  ];

  for (const page of staticPages) {
    const pageContent = createPage(page.h1, page.content);
    const html = createStaticHTML(baseHTML, css, {
      title: page.title,
      description: page.description,
      canonical: `https://medtransic.com/${page.slug}`,
      h1: page.h1,
      content: pageContent,
      schema: { '@context': 'https://schema.org', '@type': 'WebPage', 'name': page.title }
    });

    const dir = join(distPath, page.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
    count++;
    console.log(`✅ ${count}. ${page.h1}`);
  }

  console.log(`\n✨ Successfully generated ${count} static HTML pages!\n`);
  console.log(`📊 Coverage:`);
  console.log(`   - State pages: 50`);
  console.log(`   - City pages: 22`);
  console.log(`   - Comparison pages: ${comparisons?.length || 0}`);
  console.log(`   - EMR integration pages: ${emrs?.length || 0}`);
  console.log(`   - Resource pages: 2`);
  console.log(`   - Static pages: 3`);
  console.log(`   - Total: ${count} pages\n`);
}

generateAllStaticPages().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
