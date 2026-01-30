const fs = require('fs');
const path = require('path');

// Pages that need basic service schema
const infoPages = [
  { name: 'DataSecurityPage', serviceName: 'Data Security & Compliance' },
  { name: 'HipaaCompliancePage', serviceName: 'HIPAA Compliance Services' },
  { name: 'MIPSMACRAReportingPage', serviceName: 'MIPS MACRA Reporting' },
  { name: 'AIPHASPage', serviceName: 'AI PHAS Solutions' }
];

const comparisonPages = [
  'ComparisonPage',
  'ComparisonsListPage'
];

// HomePage, AboutPage, CareersPage, ContactPage, LocationsPage, PricingPage, ServicesPage, SpecialtiesPage
const mainPages = [
  { name: 'AboutPage', needsOrg: true },
  { name: 'CareersPage', needsOrg: true },
  { name: 'ContactPage', needsOrg: true },
  { name: 'LocationsPage', needsOrg: true },
  { name: 'PricingPage', needsService: true },
  { name: 'ServicesPage', needsService: true },
  { name: 'SpecialtiesPage', needsService: true }
];

function addSchemaToInfoPage(filePath, pageName, serviceName) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has schema
  if (content.includes('ServiceSchema') || content.includes('FAQSchema')) {
    console.log(`✓ ${pageName} already has schema`);
    return;
  }

  // Add import
  const importRegex = /(import.*from ['"]\.\.\/components\/.*['"];?\n)/g;
  const imports = content.match(importRegex);
  if (!imports) {
    console.log(`⚠ Could not find imports in ${pageName}`);
    return;
  }

  const lastImport = imports[imports.length - 1];
  const importIndex = content.lastIndexOf(lastImport) + lastImport.length;

  const newImport = "import ServiceSchema from '../components/ServiceSchema';\n";

  // Find SEOHead
  const seoHeadMatch = content.match(/<SEOHead[\s\S]*?\/>/);
  if (!seoHeadMatch) {
    console.log(`⚠ Could not find SEOHead in ${pageName}`);
    return;
  }

  const seoHeadEnd = content.indexOf(seoHeadMatch[0]) + seoHeadMatch[0].length;

  // Extract description and URL
  const descMatch = content.match(/description="([^"]*)"/);
  const description = descMatch ? descMatch[1] : `Professional ${serviceName} for healthcare providers`;

  const canonicalMatch = content.match(/canonical(?:Url)?="([^"]*)"/);
  const url = canonicalMatch ? canonicalMatch[1] : `https://medtransic.com`;

  const schemaComponent = `\n      <ServiceSchema
        name="${serviceName}"
        description="${description}"
        url="${url}"
        serviceType="Medical Support Service"
      />`;

  // Insert
  let newContent = content.slice(0, importIndex) + newImport + content.slice(importIndex);
  const adjustedSeoHeadEnd = seoHeadEnd + newImport.length;
  newContent = newContent.slice(0, adjustedSeoHeadEnd) + schemaComponent + newContent.slice(adjustedSeoHeadEnd);

  fs.writeFileSync(filePath, newContent);
  console.log(`✓ Added schema to ${pageName}`);
}

function addOrgSchemaToPage(filePath, pageName) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has OrganizationSchema
  if (content.includes('OrganizationSchema')) {
    console.log(`✓ ${pageName} already has OrganizationSchema`);
    return;
  }

  // Add import
  const importRegex = /(import.*from ['"]\.\.\/components\/.*['"];?\n)/g;
  const imports = content.match(importRegex);
  if (!imports) {
    console.log(`⚠ Could not find imports in ${pageName}`);
    return;
  }

  const lastImport = imports[imports.length - 1];
  const importIndex = content.lastIndexOf(lastImport) + lastImport.length;

  const newImport = "import OrganizationSchema from '../components/OrganizationSchema';\n";

  // Find SEOHead
  const seoHeadMatch = content.match(/<SEOHead[\s\S]*?\/>/);
  if (!seoHeadMatch) {
    console.log(`⚠ Could not find SEOHead in ${pageName}`);
    return;
  }

  const seoHeadEnd = content.indexOf(seoHeadMatch[0]) + seoHeadMatch[0].length;

  const schemaComponent = '\n      <OrganizationSchema />';

  // Insert
  let newContent = content.slice(0, importIndex) + newImport + content.slice(importIndex);
  const adjustedSeoHeadEnd = seoHeadEnd + newImport.length;
  newContent = newContent.slice(0, adjustedSeoHeadEnd) + schemaComponent + newContent.slice(adjustedSeoHeadEnd);

  fs.writeFileSync(filePath, newContent);
  console.log(`✓ Added OrganizationSchema to ${pageName}`);
}

// Main execution
const pagesDir = path.join(__dirname, 'src', 'pages');

console.log('🚀 Adding schema to informational pages...\n');
infoPages.forEach(({ name, serviceName }) => {
  const filePath = path.join(pagesDir, `${name}.tsx`);
  if (fs.existsSync(filePath)) {
    try {
      addSchemaToInfoPage(filePath, name, serviceName);
    } catch (err) {
      console.log(`✗ Error processing ${name}: ${err.message}`);
    }
  }
});

console.log('\n🚀 Adding OrganizationSchema to main pages...\n');
mainPages.forEach(({ name, needsOrg, needsService }) => {
  const filePath = path.join(pagesDir, `${name}.tsx`);
  if (fs.existsSync(filePath)) {
    try {
      if (needsOrg) {
        addOrgSchemaToPage(filePath, name);
      }
    } catch (err) {
      console.log(`✗ Error processing ${name}: ${err.message}`);
    }
  }
});

console.log('\n✅ Schema addition complete!');
