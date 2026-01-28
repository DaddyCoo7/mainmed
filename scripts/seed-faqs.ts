import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const envContent = readFileSync('.env', 'utf-8');
const envVars = envContent.split('\n').reduce((acc: Record<string, string>, line) => {
  const [key, value] = line.split('=');
  if (key && value) {
    acc[key.trim()] = value.trim();
  }
  return acc;
}, {});

const supabaseUrl = envVars.VITE_SUPABASE_URL!;
const supabaseServiceKey = envVars.SUPABASE_SERVICE_ROLE_KEY || envVars.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const faqData = [
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
    answer: 'Cardiac catheterization coding requires detailed understanding of CPT codes 93451-93533. Key considerations include: (1) Left heart catheterization (93452-93453) vs right heart catheterization (93451), (2) Coronary angiography codes (93454-93461) based on native vessels, grafts, or both, (3) Add-on codes for additional vessels or interventions, (4) Modifier usage for bilateral procedures or distinct procedural services, (5) Documentation of catheter placement approach (femoral, radial, brachial), (6) Imaging components (supervision and interpretation), and (7) Professional vs technical component billing. Proper coding requires clear documentation of all vessels studied, interventions performed, and medical necessity justification.',
    short_answer: 'Cardiac catheterization coding uses CPT 93451-93533 based on left/right heart access, vessels studied, and interventions performed, requiring detailed documentation and modifier application.',
    priority: 20,
    search_keywords: ['cardiac catheterization coding', 'CPT 93451', 'coronary angiography codes', 'heart cath billing']
  },
  {
    specialty_slug: 'cardiology',
    category: 'coding',
    question: 'What CPT codes are used for pacemaker and ICD implantation?',
    answer: 'Pacemaker and ICD implantation codes are categorized by device type and complexity: **Pacemakers:** (1) Single chamber (33206-33208), (2) Dual chamber (33207-33208), (3) Biventricular/CRT-P (33224-33226). **ICDs:** (1) Single chamber ICD (33240-33241), (2) Dual chamber ICD (33249), (3) Biventricular ICD/CRT-D (33249 with leadless system). **Additional codes:** (1) Lead placement/repositioning (33210-33211, 33215-33216), (2) Generator replacement (33227-33229 for pacemakers, 33262-33264 for ICDs), (3) Electrode removal (33234-33235), (4) Device interrogation and programming (93279-93299). Documentation must include device manufacturer, model number, battery status, lead placement locations, fluoroscopy use, and medical necessity.',
    short_answer: 'Pacemaker codes: 33206-33208 (single), 33207-33208 (dual), 33224-33226 (biventricular). ICD codes: 33240-33241 (single), 33249 (dual/CRT-D). Include device HCPCS codes for hardware billing.',
    priority: 30,
    search_keywords: ['pacemaker coding', 'ICD implantation codes', 'CPT 33206', 'cardiac device billing', 'CRT-D coding']
  },
  {
    specialty_slug: 'cardiology',
    category: 'insurance',
    question: 'What prior authorizations are typically required for cardiac procedures?',
    answer: 'Most cardiac procedures require prior authorization, varying by payer: **Diagnostic Testing:** Stress tests (nuclear, echo, pharmacological), cardiac CT/MRI, Holter monitors beyond 24 hours, event recorders. **Interventional Procedures:** Cardiac catheterization, angioplasty/stent placement, atherectomy, valvuloplasty. **Device Implantation:** Pacemakers, ICDs, CRT devices, implantable loop recorders. **Structural Heart:** TAVR, MitraClip, left atrial appendage closure. **Documentation Requirements:** Clinical indications, previous conservative treatment attempts, relevant diagnostic test results, ACC/AHA guideline compliance, urgency justification. Timeframes vary: Medicare typically 1-5 days, commercial payers 3-10 business days.',
    short_answer: 'Cardiac procedures requiring prior auth include stress tests, catheterizations, device implants, and structural heart procedures. Documentation must show medical necessity, guideline compliance, and previous conservative management.',
    priority: 40,
    search_keywords: ['cardiac prior authorization', 'pacemaker authorization', 'stress test authorization', 'catheterization approval']
  },
  {
    specialty_slug: 'cardiology',
    category: 'compliance',
    question: 'What are the global period rules for cardiac surgery?',
    answer: 'Cardiac surgical procedures have 90-day global periods (major surgery) with specific billing rules: **Included in Global Package:** (1) Pre-operative visits (day before through day of surgery), (2) Intraoperative services by the surgeon, (3) Post-operative care for 90 days, (4) Complications not requiring return to OR, (5) Post-operative pain management by surgeon. **Separately Billable (with modifiers):** Modifier 24: Unrelated E/M during global period. Modifier 25: Significant E/M same day as minor procedure. Modifier 58: Staged/related procedure during global period. Modifier 78: Return to OR for complication. Modifier 79: Unrelated procedure during global period.',
    short_answer: 'Cardiac surgeries have 90-day global periods covering pre-op, surgery, and post-op care. Use modifiers 24, 25, 58, 78, or 79 for services outside global package.',
    priority: 50,
    search_keywords: ['cardiac surgery global period', 'modifier 78', 'CABG global period', '90-day global period']
  },
  {
    specialty_slug: 'dermatology',
    category: 'billing-basics',
    question: 'How do you distinguish between medical and cosmetic dermatology billing?',
    answer: 'The distinction is critical: **Medical Dermatology (Insurance Covered):** Diagnostic services, treatment of medical conditions (acne, psoriasis), skin cancer screening/treatment, lesion biopsy/removal for diagnostic purposes, treatment of symptomatic or functional impairment. **Cosmetic Dermatology (Patient Pay):** Services solely for appearance enhancement, wrinkle reduction without functional impairment, scar revision for cosmetic purposes, hair removal, skin rejuvenation. **Documentation:** Medical necessity must be clearly documented with symptoms, functional limitations, failed conservative treatments, and medical rationale.',
    short_answer: 'Medical dermatology (covered): diagnostic services, disease treatment, medically necessary lesion removal. Cosmetic (patient-pay): appearance enhancement, wrinkle reduction, elective procedures.',
    priority: 10,
    search_keywords: ['medical vs cosmetic dermatology', 'cosmetic billing', 'dermatology insurance coverage']
  },
  {
    specialty_slug: 'dermatology',
    category: 'coding',
    question: 'What are the CPT codes for skin lesion removal and destruction?',
    answer: 'Skin lesion procedures: **Excision (11400-11646):** Full-thickness removal with closure, coded by location and size including margins. **Shave Removal (11300-11313):** Tangential removal without full-thickness excision, by location. **Destruction (17000-17286):** Benign lesions (17000 first, 17003 each additional 2-14), Premalignant lesions (17000-17004), Malignant lesions (17260-17286 based on size). **Documentation:** Measure in cm, specify location, document pathology, note technique and closure.',
    short_answer: 'Excision: 11400-11646 by location/size. Shave removal: 11300-11313. Destruction: 17000-17004 (benign/premalignant), 17260-17286 (malignant). Measure lesions including margins.',
    priority: 20,
    search_keywords: ['lesion removal codes', 'CPT 11400', 'shave removal billing', 'lesion destruction codes']
  },
  {
    specialty_slug: 'dermatology',
    category: 'coding',
    question: 'How do you code for multiple lesion removals in one visit?',
    answer: 'Multiple lesion billing: **Excisions:** Report each separately with modifiers for distinct lesions (59/XS). **Destructions:** 17000 for first, 17003 for 2-14 additional (one unit per lesion), 17004 for 15+. **Biopsies:** 11102 for first, 11103 for each additional. **Key Rules:** Same-site grouping by body area, modifier 59 for separate lesions, proper documentation of location/size/pathology for each, medical necessity for each removal. **Avoid:** Billing same code without modifiers, combining lesions inappropriately.',
    short_answer: 'Bill each lesion separately with modifiers. Use 17000 + 17003 for destructions (2-14 lesions), modifier 59/XS for distinct excisions, document each lesion individually.',
    priority: 30,
    search_keywords: ['multiple lesion billing', 'modifier 59 dermatology', '17000 17003 codes']
  },
  {
    specialty_slug: 'orthopedics',
    category: 'billing-basics',
    question: 'What makes orthopedic billing uniquely complex?',
    answer: 'Orthopedic complexity stems from: **Global Period Management:** Most surgeries carry 90-day global periods requiring careful tracking. **High-Cost Implants:** Joint replacements, hardware require separate billing with manufacturer documentation and HCPCS codes. **Fracture Care Billing:** Bundled packages include initial treatment, casting, follow-up. **Multiple Procedures:** Require correct sequencing and modifier application. **Workers Compensation:** Different fee schedules, authorization requirements, documentation needs. **ASC vs Hospital:** Different reimbursement models based on surgery location.',
    short_answer: 'Orthopedic billing complexity includes 90-day global periods, high-cost implant billing, fracture care packages, multiple procedure modifiers, workers comp requirements, and varying reimbursement by setting.',
    priority: 10,
    search_keywords: ['orthopedic billing complexity', 'orthopedic surgery billing', 'implant billing']
  },
  {
    specialty_slug: 'orthopedics',
    category: 'coding',
    question: 'How do you code for total joint replacement procedures?',
    answer: 'Joint replacement coding: **Hip:** Total (27130), partial (27125), revision (27134-27138). **Knee:** Total (27447), partial/unicondylar (27446), revision (27486-27487). **Shoulder:** Total (23472), reverse total (23472), partial (23470), revision (23473-23474). **Component Coding:** Implants billed separately using HCPCS Level II codes with manufacturer information, lot numbers, sizes. **Documentation:** Medical necessity justification, implant specifics, operative report with approach and components.',
    short_answer: 'Hip: 27130 (total), 27125 (partial). Knee: 27447 (total), 27446 (partial). Shoulder: 23472 (total/reverse). Bill implants separately with HCPCS codes and manufacturer details.',
    priority: 20,
    search_keywords: ['joint replacement codes', 'CPT 27447', 'total hip arthroplasty', 'total knee replacement coding']
  },
  {
    specialty_slug: 'orthopedics',
    category: 'coding',
    question: 'What are the CPT codes for fracture treatment?',
    answer: 'Fracture coding by treatment method: **Types:** Closed treatment (realignment without opening skin), open treatment (surgical incision), percutaneous fixation (fixation without opening site). **Common Codes:** Distal radius (25600-25609), femur shaft (27500-27507), tibial shaft (27750-27759), ankle (27808-27828), hip (27235-27248). **Global Package:** Includes initial treatment, normal follow-up, cast/splint application and removal, radiological supervision. **Separately Billable:** Cast supplies, complicated follow-ups (modifier 24), return to OR (modifier 78).',
    short_answer: 'Fracture codes: closed (2000x), open (2001x), percutaneous (2002x). Common: distal radius 25600-25609, femur 27500-27507, tibia 27750-27759. Global includes treatment, casts, and follow-ups.',
    priority: 30,
    search_keywords: ['fracture coding', 'ORIF codes', 'closed treatment fracture', 'fracture care']
  },
  {
    specialty_slug: 'orthopedics',
    category: 'insurance',
    question: 'How do you bill for orthopedic hardware and implants?',
    answer: 'Implant billing requires: **CPT Codes:** Bill surgical procedure code (e.g., 27447 for total knee). **HCPCS Codes:** Separately bill hardware using HCPCS Level II: Joint implants (L-codes), fracture fixation (C-codes for ASC), bone graft materials. **Documentation:** Manufacturer name/contact, product name/catalog number, lot/serial numbers, size specifications, number of components, invoice documentation, FDA approval status. **Tips:** Submit detailed invoices with claim, use manufacturer invoice for pricing support, document medical necessity for premium implants.',
    short_answer: 'Bill procedure code (CPT) + implant hardware (HCPCS L/C codes) separately. Document manufacturer, model, lot numbers, sizes, and invoices for proper reimbursement.',
    priority: 40,
    search_keywords: ['implant billing orthopedic', 'hardware billing', 'HCPCS implant codes', 'joint implant billing']
  },
  {
    specialty_slug: 'orthopedics',
    category: 'compliance',
    question: 'What are the global period rules for orthopedic surgery?',
    answer: 'Global surgical packages: **90-Day Global:** Major surgeries include day before through day of surgery, intraoperative services, complications not requiring return to OR, post-op visits for 90 days, post-op pain management. **10-Day Global:** Minor procedures have similar inclusions for 10 days. **Separately Billable:** Modifier 24 (unrelated E/M during global), Modifier 25 (significant E/M same day), Modifier 58 (staged procedure, starts new global), Modifier 78 (return to OR for complication), Modifier 79 (unrelated procedure, new global starts). **Common Mistakes:** Billing included post-op visits, missing modifiers, poor documentation.',
    short_answer: 'Orthopedic surgeries have 90-day (major) or 10-day (minor) global periods including pre-op, surgery, and post-op care. Use modifiers 24/25/58/78/79 for services outside global package.',
    priority: 50,
    search_keywords: ['orthopedic global period', '90-day global period', 'modifier 78 orthopedic', 'surgical global package']
  }
];

async function seedFAQs() {
  console.log('Starting FAQ seeding...');

  try {
    const { data, error } = await supabase
      .from('specialty_faqs')
      .insert(faqData)
      .select();

    if (error) {
      console.error('Error seeding FAQs:', error);
      throw error;
    }

    console.log(`Successfully seeded ${data?.length || 0} FAQs`);
    console.log('FAQ seeding completed!');
  } catch (error) {
    console.error('Failed to seed FAQs:', error);
    process.exit(1);
  }
}

seedFAQs();
