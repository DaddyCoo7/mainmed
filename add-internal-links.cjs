const fs = require('fs');
const path = require('path');

// Map page files to their internal link keys
const pageToKeyMap = {
  // Service pages
  'MedicalBillingPage.tsx': 'medical-billing',
  'MedicalCodingPage.tsx': 'medical-coding',
  'RCMPage.tsx': 'rcm',
  'DenialManagementPage.tsx': 'denial-management',
  'CredentialingPage.tsx': 'credentialing',
  'ARManagementPage.tsx': 'ar-management',
  'EligibilityVerificationPage.tsx': 'eligibility-verification',
  'ChargeEntryPaymentPostingPage.tsx': 'charge-entry-payment-posting',
  'EHREMRIntegrationPage.tsx': 'ehr-emr-integration',
  'AnalyticsReportingPage.tsx': 'analytics-reporting',
  'ComplianceHIPAAAuditsPage.tsx': 'compliance-hipaa-audits',
  'MIPSMACRAReportingPage.tsx': 'mips-macra-reporting',
  'PatientBillingSupportPage.tsx': 'patient-billing-support',
  'CallCenterSchedulingPage.tsx': 'call-center-scheduling',
  'PayerContractNegotiationPage.tsx': 'payer-contract-negotiation',
  'PaymentReconciliationPage.tsx': 'payment-reconciliation',
  'OldARCleanupPage.tsx': 'old-ar-cleanup',
  'PracticeManagementConsultingPage.tsx': 'practice-management-consulting',
  'PracticeLaunchPage.tsx': 'practice-launch',
  'RCMAutomationPage.tsx': 'rcm-automation',
  'StaffTrainingSOPPage.tsx': 'staff-training-sop',
  'DataSecurityPage.tsx': 'data-security',

  // Specialty pages
  'CardiologyPage.tsx': 'cardiology',
  'OrthopedicsPage.tsx': 'orthopedics',
  'PediatricsPage.tsx': 'pediatrics',
  'DermatologyPage.tsx': 'dermatology',
  'GastroenterologyPage.tsx': 'gastroenterology',
  'OBGYNPage.tsx': 'obgyn',
  'OphthalmologyPage.tsx': 'ophthalmology',
  'UrologyPage.tsx': 'urology',
  'NeurosurgeryPage.tsx': 'neurosurgery',
  'OncologyPage.tsx': 'oncology',
  'DiagnosticImagingRadiologyPage.tsx': 'radiology',
  'AnesthesiologyPage.tsx': 'anesthesiology',
  'EmergencyMedicinePage.tsx': 'emergency-medicine',
  'MentalHealthPage.tsx': 'mental-health',
  'PhysicalTherapyPage.tsx': 'physical-therapy',
  'ChiropracticPage.tsx': 'chiropractic',
  'DentalPage.tsx': 'dental',
  'PrimaryCarePracticesPage.tsx': 'primary-care',
  'UrgentCarePage.tsx': 'urgent-care',
  'FamilyMedicinePage.tsx': 'family-medicine',
  'PainManagementPage.tsx': 'pain-management',
  'NephrologyPage.tsx': 'nephrology',
  'EndocrinologyPage.tsx': 'endocrinology',
  'PulmonologyPage.tsx': 'pulmonology',
  'RheumatologyPage.tsx': 'rheumatology',
  'InfectiousDiseasePage.tsx': 'infectious-disease',
  'HematologyPage.tsx': 'hematology',
  'AllergyImmunologyPage.tsx': 'allergy-immunology',
  'GeriatricsPage.tsx': 'geriatrics',
  'PlasticSurgeryPage.tsx': 'plastic-surgery',
  'PodiatryPage.tsx': 'podiatry',
  'ENTPage.tsx': 'ent',
  'SleepMedicinePage.tsx': 'sleep-medicine',
  'PathologyPage.tsx': 'pathology',
  'InterventionalRadiologyPage.tsx': 'interventional-radiology',
  'ThoracicSurgeryPage.tsx': 'thoracic-surgery',
  'OralMaxillofacialSurgeryPage.tsx': 'oral-maxillofacial-surgery',
  'OccupationalTherapyPage.tsx': 'occupational-therapy',
  'SpeechTherapyPage.tsx': 'speech-therapy',
  'RespiratoryTherapyPage.tsx': 'respiratory-therapy',
  'RehabilitationSportsMedicinePage.tsx': 'rehabilitation-sports-medicine',
  'HomeHealthPage.tsx': 'home-health',
  'TelemedicinePage.tsx': 'telemedicine',
  'HospitalFacilityBillingPage.tsx': 'hospital-facility-billing',
  'LaboratoryBillingPage.tsx': 'laboratory-billing',
  'DurableMedicalEquipmentPage.tsx': 'durable-medical-equipment',
  'GeneticTestingPage.tsx': 'genetic-testing',
  'ClinicalResearchPage.tsx': 'clinical-research',
  'CommunityHealthClinicsPage.tsx': 'community-health-clinics',
  'OccupationalHealthClinicsPage.tsx': 'occupational-health-clinics',
  'WoundCareCentersPage.tsx': 'wound-care-centers',
  'PharmacyBillingSpecialtyPage.tsx': 'pharmacy-billing',
  'LaboratoriesPathologyPage.tsx': 'pathology'
};

const pagesDir = path.join(__dirname, 'src', 'pages');

// Process each page
Object.entries(pageToKeyMap).forEach(([filename, key]) => {
  const filePath = path.join(pagesDir, filename);

  // Skip if file doesn't exist
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filename} - file not found`);
    return;
  }

  // Skip if already processed (MedicalBillingPage)
  if (filename === 'MedicalBillingPage.tsx') {
    console.log(`Skipping ${filename} - already updated`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already has RelatedServices import
  if (content.includes('import RelatedServices')) {
    console.log(`Skipping ${filename} - already has RelatedServices`);
    return;
  }

  // Add imports after other component imports
  const importPattern = /import\s+\w+\s+from\s+['"]\.\.\/components\/\w+['"];/g;
  const imports = content.match(importPattern);

  if (imports && imports.length > 0) {
    const lastImport = imports[imports.length - 1];
    const importIndex = content.lastIndexOf(lastImport);

    if (importIndex !== -1) {
      const newImports = `${lastImport}\nimport RelatedServices from '../components/RelatedServices';\nimport { getRelatedLinks } from '../config/internalLinks';`;
      content = content.substring(0, importIndex) + newImports + content.substring(importIndex + lastImport.length);
    }
  }

  // Find the best place to insert RelatedServices - before the final CTA section
  // Look for common patterns in CTA sections
  const ctaPatterns = [
    /(\s+<AnimatedSection animation="slideUp" className="text-center">[\s\S]*?Ready to.*?<\/motion\.h2>)/,
    /(\s+<AnimatedSection animation="slideUp" className="text-center">[\s\S]*?<div className="bg-white rounded-2xl p-12)/
  ];

  let inserted = false;
  for (const pattern of ctaPatterns) {
    if (pattern.test(content)) {
      const relatedServicesSection = `\n\n        <AnimatedSection animation="slideUp" className="mb-24">\n          <RelatedServices services={getRelatedLinks('${key}')} />\n        </AnimatedSection>\n`;
      content = content.replace(pattern, relatedServicesSection + '$1');
      inserted = true;
      break;
    }
  }

  if (inserted) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated ${filename}`);
  } else {
    console.log(`✗ Could not find insertion point for ${filename}`);
  }
});

console.log('\nInternal links addition complete!');
