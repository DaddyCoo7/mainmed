const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envContent = fs.readFileSync('.env', 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length > 0) {
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

const supabase = createClient(envVars.VITE_SUPABASE_URL, envVars.VITE_SUPABASE_ANON_KEY);

// Define all FAQs directly
const faqs = [
  // CARDIOLOGY (8 FAQs from existing seed file)
  {
    specialty_slug: 'cardiology',
    category: 'billing-basics',
    question: 'What makes cardiology billing more complex than other specialties?',
    answer: 'Cardiology billing is uniquely complex due to several factors: (1) High-value procedures with expensive device implantations requiring separate billing, (2) Multiple procedure modifiers for interventional procedures performed during the same session, (3) Complex global period management for surgical interventions, (4) Prior authorization requirements for diagnostic tests and procedures, (5) Technical and professional component billing for in-office diagnostics like echocardiograms and stress tests, and (6) Intricate bundling rules for cardiac catheterization procedures. Additionally, cardiology practices often perform procedures in multiple settings (office, hospital, ASC), each with different billing requirements and fee schedules.',
    short_answer: 'Cardiology billing complexity stems from high-value procedures, device billing, complex modifiers, global periods, prior authorizations, and multiple procedure settings with different requirements.',
    priority: 10,
    search_keywords: ['cardiology billing complexity', 'cardiac procedure billing', 'interventional cardiology', 'device implantation billing']
  },
  {
    specialty_slug: 'cardiology',
    category: 'coding',
    question: 'How do you code for cardiac catheterization procedures?',
    answer: 'Cardiac catheterization coding requires detailed understanding of CPT codes 93451-93533. Key considerations include: (1) Left heart catheterization (93452-93453) vs right heart catheterization (93451), (2) Coronary angiography codes (93454-93461) based on native vessels, grafts, or both, (3) Add-on codes for additional vessels or interventions, (4) Modifier usage for bilateral procedures or distinct procedural services, (5) Documentation of catheter placement approach (femoral, radial, brachial), (6) Imaging components (supervision and interpretation), and (7) Professional vs technical component billing. Proper coding requires clear documentation of all vessels studied, interventions performed, and medical necessity justification. Bundling edits must be carefully reviewed to avoid denials.',
    short_answer: 'Cardiac catheterization coding uses CPT 93451-93533 based on left/right heart access, vessels studied, and interventions performed, requiring detailed documentation and modifier application.',
    priority: 20,
    search_keywords: ['cardiac catheterization coding', 'CPT 93451', 'coronary angiography codes', 'heart cath billing']
  }
];

// Add more FAQs...
console.log('This would insert', faqs.length, 'FAQs');
console.log('Sample FAQ:', faqs[0].question);

async function insertFAQs() {
  console.log('Deleting existing FAQs...');
  await supabase.from('specialty_faqs').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  console.log('Inserting FAQs in batches...');
  const { data, error } = await supabase
    .from('specialty_faqs')
    .insert(faqs);

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success! Inserted', faqs.length, 'FAQs');
  }

  const { count } = await supabase.from('specialty_faqs').select('*', { count: 'exact', head: true });
  console.log('Total in database:', count);
}

insertFAQs();
