import type { Plugin } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { JSDOM } from 'jsdom';

interface PrerenderRoute {
  path: string;
  component: any;
}

const routes: PrerenderRoute[] = [
  // Main pages
  { path: '/', component: null },
  { path: '/about', component: null },
  { path: '/services', component: null },
  { path: '/specialties', component: null },
  { path: '/pricing', component: null },
  { path: '/contact', component: null },
  { path: '/careers', component: null },
  { path: '/faq', component: null },
  { path: '/resources', component: null },
  { path: '/locations', component: null },
  { path: '/ceo', component: null },

  // Service pages
  { path: '/services/medical-billing', component: null },
  { path: '/services/medical-coding', component: null },
  { path: '/services/credentialing', component: null },
  { path: '/services/ar-management', component: null },
  { path: '/services/denial-management', component: null },
  { path: '/services/payment-posting', component: null },
  { path: '/services/prior-authorization', component: null },
  { path: '/services/eligibility-verification', component: null },
  { path: '/services/patient-billing-support', component: null },
  { path: '/services/old-ar-cleanup', component: null },
  { path: '/services/rcm-automation', component: null },
  { path: '/services/analytics-reporting', component: null },
  { path: '/services/compliance-audits', component: null },
  { path: '/services/ehr-emr-integration', component: null },
  { path: '/services/practice-management', component: null },
  { path: '/services/payer-enrollment', component: null },
  { path: '/services/credentialing-payer', component: null },
  { path: '/services/payment-reconciliation', component: null },
  { path: '/services/virtual-assistants', component: null },
  { path: '/services/call-center', component: null },
  { path: '/services/staff-training', component: null },
  { path: '/services/practice-launch', component: null },
  { path: '/services/mips-macra', component: null },
  { path: '/services/telehealth-billing', component: null },
  { path: '/services/payer-contract-negotiation', component: null },
  { path: '/services/website-design', component: null },
  { path: '/services/digital-presence', component: null },

  // Specialty pages (40+ specialties)
  { path: '/specialties/cardiology', component: null },
  { path: '/specialties/orthopedics', component: null },
  { path: '/specialties/dermatology', component: null },
  { path: '/specialties/gastroenterology', component: null },
  { path: '/specialties/neurology', component: null },
  { path: '/specialties/oncology', component: null },
  { path: '/specialties/pediatrics', component: null },
  { path: '/specialties/psychiatry', component: null },
  { path: '/specialties/urology', component: null },
  { path: '/specialties/ophthalmology', component: null },
  { path: '/specialties/ent', component: null },
  { path: '/specialties/anesthesiology', component: null },
  { path: '/specialties/radiology', component: null },
  { path: '/specialties/pathology', component: null },
  { path: '/specialties/emergency-medicine', component: null },
  { path: '/specialties/family-medicine', component: null },
  { path: '/specialties/internal-medicine', component: null },
  { path: '/specialties/obstetrics-gynecology', component: null },
  { path: '/specialties/pain-management', component: null },
  { path: '/specialties/physical-therapy', component: null },
  { path: '/specialties/chiropractic', component: null },
  { path: '/specialties/podiatry', component: null },
  { path: '/specialties/rheumatology', component: null },
  { path: '/specialties/endocrinology', component: null },
  { path: '/specialties/nephrology', component: null },
  { path: '/specialties/pulmonology', component: null },
  { path: '/specialties/hematology', component: null },
  { path: '/specialties/infectious-disease', component: null },
  { path: '/specialties/allergy-immunology', component: null },
  { path: '/specialties/geriatrics', component: null },
  { path: '/specialties/sleep-medicine', component: null },
  { path: '/specialties/sports-medicine', component: null },
  { path: '/specialties/wound-care', component: null },
  { path: '/specialties/occupational-medicine', component: null },
  { path: '/specialties/telemedicine', component: null },
  { path: '/specialties/urgent-care', component: null },
  { path: '/specialties/home-health', component: null },
  { path: '/specialties/mental-health', component: null },
  { path: '/specialties/dental', component: null },
  { path: '/specialties/plastic-surgery', component: null },
  { path: '/specialties/neurosurgery', component: null },
  { path: '/specialties/thoracic-surgery', component: null },
  { path: '/specialties/oral-surgery', component: null },
  { path: '/specialties/interventional-radiology', component: null },
  { path: '/specialties/genetic-testing', component: null },
  { path: '/specialties/laboratory', component: null },
  { path: '/specialties/dme', component: null },
  { path: '/specialties/pharmacy', component: null },
  { path: '/specialties/occupational-therapy', component: null },
  { path: '/specialties/speech-therapy', component: null },
  { path: '/specialties/respiratory-therapy', component: null },
  { path: '/specialties/clinical-research', component: null },
  { path: '/specialties/community-health', component: null },
  { path: '/specialties/primary-care', component: null },
  { path: '/specialties/physician-billing', component: null },
  { path: '/specialties/hospital-billing', component: null },

  // Resource pages
  { path: '/resources/billing-glossary', component: null },
  { path: '/resources/cpt-codes-cheat-sheet', component: null },
  { path: '/resources/icd10-codes-reference', component: null },
  { path: '/resources/medical-billing-modifiers-guide', component: null },
  { path: '/resources/dental-codes-cheat-sheet', component: null },
  { path: '/resources/state-billing-laws', component: null },

  // Comparison pages
  { path: '/comparisons', component: null },
  { path: '/comparisons/medtransic-vs-r1-rcm', component: null },
  { path: '/comparisons/medtransic-vs-athenahealth', component: null },
  { path: '/comparisons/medtransic-vs-kareo', component: null },
  { path: '/comparisons/medtransic-vs-advancedmd', component: null },
  { path: '/comparisons/medtransic-vs-drchrono', component: null },

  // Legal pages
  { path: '/privacy', component: null },
  { path: '/terms', component: null },
  { path: '/hipaa-compliance', component: null },
  { path: '/data-security', component: null },
];

// Add 50 states
const states = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
  'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
  'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
  'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
  'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
  'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
  'wisconsin', 'wyoming'
];

states.forEach(state => {
  routes.push({ path: `/locations/${state}`, component: null });
});

// Add major cities
const cities = [
  'new-york-ny', 'los-angeles-ca', 'chicago-il', 'houston-tx', 'phoenix-az',
  'philadelphia-pa', 'san-antonio-tx', 'san-diego-ca', 'dallas-tx', 'san-jose-ca',
  'austin-tx', 'jacksonville-fl', 'fort-worth-tx', 'columbus-oh', 'charlotte-nc',
  'san-francisco-ca', 'indianapolis-in', 'seattle-wa', 'denver-co', 'washington-dc',
  'boston-ma', 'el-paso-tx', 'nashville-tn', 'detroit-mi', 'oklahoma-city-ok',
  'portland-or', 'las-vegas-nv', 'memphis-tn', 'louisville-ky', 'baltimore-md',
  'milwaukee-wi', 'albuquerque-nm', 'tucson-az', 'fresno-ca', 'mesa-az',
  'sacramento-ca', 'atlanta-ga', 'kansas-city-mo', 'colorado-springs-co', 'omaha-ne',
  'raleigh-nc', 'miami-fl', 'long-beach-ca', 'virginia-beach-va', 'oakland-ca',
  'minneapolis-mn', 'tulsa-ok', 'tampa-fl', 'arlington-tx', 'new-orleans-la'
];

cities.forEach(city => {
  routes.push({ path: `/locations/${city}`, component: null });
});

export function prerenderPlugin(): Plugin {
  return {
    name: 'vite-plugin-prerender',
    apply: 'build',
    closeBundle: async () => {
      console.log('\n🚀 Starting prerendering process...\n');

      const distPath = join(process.cwd(), 'dist');
      const indexPath = join(distPath, 'index.html');

      if (!existsSync(indexPath)) {
        console.error('❌ index.html not found in dist folder');
        return;
      }

      const template = readFileSync(indexPath, 'utf-8');
      let successCount = 0;
      let errorCount = 0;

      for (const route of routes) {
        try {
          const outputPath = join(distPath, route.path === '/' ? 'index.html' : `${route.path}.html`);
          const outputDir = dirname(outputPath);

          if (!existsSync(outputDir)) {
            mkdirSync(outputDir, { recursive: true });
          }

          // Create a simple prerendered version with route-specific meta tags
          const dom = new JSDOM(template);
          const document = dom.window.document;

          // Add prerender-ready attribute
          document.documentElement.setAttribute('data-prerendered', 'true');
          document.documentElement.setAttribute('data-prerender-route', route.path);

          // Update canonical URL
          let canonicalLink = document.querySelector('link[rel="canonical"]');
          if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
          }
          canonicalLink.setAttribute('href', `https://medtransic.com${route.path}`);

          const html = dom.serialize();
          writeFileSync(outputPath, html, 'utf-8');
          successCount++;

          if (successCount % 20 === 0) {
            console.log(`✅ Prerendered ${successCount}/${routes.length} pages...`);
          }
        } catch (error) {
          console.error(`❌ Failed to prerender ${route.path}:`, error);
          errorCount++;
        }
      }

      console.log(`\n✨ Prerendering complete!`);
      console.log(`   Success: ${successCount} pages`);
      if (errorCount > 0) {
        console.log(`   Errors: ${errorCount} pages`);
      }
      console.log('');
    }
  };
}
