const fs = require('fs');
const path = require('path');

// Define page categories and their schema types
const specialtyPages = [
  'AllergyImmunologyPage', 'AnesthesiologyPage', 'CardiologyPage', 'ChiropracticPage',
  'ClinicalResearchPage', 'CommunityHealthClinicsPage', 'DentalPage', 'DermatologyPage',
  'DiagnosticImagingRadiologyPage', 'DMEBillingPage', 'DurableMedicalEquipmentPage',
  'EmergencyMedicinePage', 'EndocrinologyPage', 'ENTPage', 'FamilyMedicinePage',
  'GastroenterologyPage', 'GeneticTestingPage', 'GeriatricsPage', 'HematologyPage',
  'HomeHealthPage', 'HospitalFacilityBillingPage', 'InfectiousDiseasePage',
  'InterventionalRadiologyPage', 'LaboratoriesPathologyPage', 'LaboratoryBillingPage',
  'MentalHealthPage', 'NephrologyPage', 'NeurosurgeryPage', 'OBGYNPage',
  'OccupationalHealthClinicsPage', 'OccupationalTherapyPage', 'OncologyPage',
  'OphthalmologyPage', 'OralMaxillofacialSurgeryPage', 'OrthopedicsPage',
  'PainManagementPage', 'PathologyPage', 'PediatricsPage', 'PharmacyBillingSpecialtyPage',
  'PhysicalTherapyPage', 'PlasticSurgeryPage', 'PodiatryPage', 'PrimaryCarePracticesPage',
  'PulmonologyPage', 'RehabilitationSportsMedicinePage', 'RespiratoryTherapyPage',
  'RheumatologyPage', 'SleepMedicinePage', 'SpeechTherapyPage', 'TelemedicinePage',
  'TelehealthBillingPage', 'ThoracicSurgeryPage', 'UrgentCarePage', 'UrologyPage',
  'WoundCareCentersPage', 'PhysicianBillingPage'
];

const servicePages = [
  'MedicalBillingPage', 'MedicalCodingPage', 'RCMPage', 'DenialManagementPage',
  'ARManagementPage', 'PriorAuthorizationPage', 'CredentialingPage', 'PayerEnrollmentPage',
  'EligibilityVerificationPage', 'ChargeEntryPaymentPostingPage', 'PaymentReconciliationPage',
  'EHREMRIntegrationPage', 'AnalyticsReportingPage', 'PatientBillingSupportPage',
  'ComplianceHIPAAAuditsPage', 'OldARCleanupPage', 'PayerContractNegotiationPage',
  'CallCenterSchedulingPage', 'VirtualAssistantsPage', 'StaffTrainingSOPPage',
  'PracticeManagementConsultingPage', 'RCMAutomationPage', 'PracticeLaunchPage',
  'WebsiteDesignPage', 'OutsourcingMedicalBillingPage'
];

const locationPages = [
  'StateBillingPage', 'CityBillingPage'
];

const infoPages = [
  'ComparisonPage', 'ComparisonsListPage', 'BillingGlossaryPage', 'ResourcesPage',
  'FAQPage', 'MIPSMACRAReportingPage', 'AIPHASPage', 'DataSecurityPage',
  'HipaaCompliancePage'
];

function addSchemaToSpecialtyPage(filePath, pageName) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has SpecialtySchema
  if (content.includes('SpecialtySchema')) {
    console.log(`✓ ${pageName} already has schema`);
    return;
  }

  // Extract specialty name from page name
  const specialtyName = pageName.replace('Page', '').replace(/([A-Z])/g, ' $1').trim();

  // Add import after other component imports
  const importRegex = /(import.*from ['"]\.\.\/components\/.*['"];?\n)/g;
  const imports = content.match(importRegex);
  if (!imports) {
    console.log(`⚠ Could not find imports in ${pageName}`);
    return;
  }

  const lastImport = imports[imports.length - 1];
  const importIndex = content.lastIndexOf(lastImport) + lastImport.length;

  const newImport = "import SpecialtySchema from '../components/SpecialtySchema';\n";

  // Find where SEOHead is used
  const seoHeadMatch = content.match(/<SEOHead[\s\S]*?\/>/);
  if (!seoHeadMatch) {
    console.log(`⚠ Could not find SEOHead in ${pageName}`);
    return;
  }

  const seoHeadEnd = content.indexOf(seoHeadMatch[0]) + seoHeadMatch[0].length;

  // Extract description from SEOHead
  const descMatch = content.match(/description="([^"]*)"/);
  const description = descMatch ? descMatch[1] : `Expert ${specialtyName} medical billing services`;

  // Extract URL from canonical
  const canonicalMatch = content.match(/canonical="([^"]*)"/);
  const url = canonicalMatch ? canonicalMatch[1] : `https://medtransic.com/specialties/${pageName.toLowerCase().replace('page', '')}`;

  const schemaComponent = `\n      <SpecialtySchema
        specialtyName="${specialtyName}"
        description="${description}"
        url="${url}"
      />`;

  // Insert import and schema
  let newContent = content.slice(0, importIndex) + newImport + content.slice(importIndex);
  const adjustedSeoHeadEnd = seoHeadEnd + newImport.length;
  newContent = newContent.slice(0, adjustedSeoHeadEnd) + schemaComponent + newContent.slice(adjustedSeoHeadEnd);

  fs.writeFileSync(filePath, newContent);
  console.log(`✓ Added schema to ${pageName}`);
}

function addSchemaToServicePage(filePath, pageName) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has ServiceSchema or other schema
  if (content.includes('ServiceSchema') || content.includes('BreadcrumbSchema')) {
    console.log(`✓ ${pageName} already has schema`);
    return;
  }

  // Extract service name from page name
  const serviceName = pageName.replace('Page', '').replace(/([A-Z])/g, ' $1').trim();

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
  const description = descMatch ? descMatch[1] : `Professional ${serviceName} services for healthcare providers`;

  const canonicalMatch = content.match(/canonical="([^"]*)"/);
  const url = canonicalMatch ? canonicalMatch[1] : `https://medtransic.com/services/${pageName.toLowerCase().replace('page', '')}`;

  const schemaComponent = `\n      <ServiceSchema
        name="${serviceName}"
        description="${description}"
        url="${url}"
        serviceType="Medical Billing Service"
      />`;

  // Insert
  let newContent = content.slice(0, importIndex) + newImport + content.slice(importIndex);
  const adjustedSeoHeadEnd = seoHeadEnd + newImport.length;
  newContent = newContent.slice(0, adjustedSeoHeadEnd) + schemaComponent + newContent.slice(adjustedSeoHeadEnd);

  fs.writeFileSync(filePath, newContent);
  console.log(`✓ Added schema to ${pageName}`);
}

// Main execution
const pagesDir = path.join(__dirname, 'src', 'pages');

console.log('🚀 Adding schema to specialty pages...\n');
specialtyPages.forEach(pageName => {
  const filePath = path.join(pagesDir, `${pageName}.tsx`);
  if (fs.existsSync(filePath)) {
    try {
      addSchemaToSpecialtyPage(filePath, pageName);
    } catch (err) {
      console.log(`✗ Error processing ${pageName}: ${err.message}`);
    }
  }
});

console.log('\n🚀 Adding schema to service pages...\n');
servicePages.forEach(pageName => {
  const filePath = path.join(pagesDir, `${pageName}.tsx`);
  if (fs.existsSync(filePath)) {
    try {
      addSchemaToServicePage(filePath, pageName);
    } catch (err) {
      console.log(`✗ Error processing ${pageName}: ${err.message}`);
    }
  }
});

console.log('\n✅ Schema addition complete!');
