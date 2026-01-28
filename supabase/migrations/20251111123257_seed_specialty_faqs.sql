/*
  # Seed FAQ Data for Medical Billing Specialties
  
  This migration seeds the specialty_faqs table with comprehensive FAQ data.
  
  1. Data Seeded
    - Cardiology: 8 FAQs
    - Dermatology: 8 FAQs  
    - Orthopedics: 8 FAQs
    - Total: 24 FAQs covering billing basics, coding, insurance, compliance, denials, and technology
  
  2. Categories Covered
    - billing-basics: General billing complexity and overview
    - coding: CPT codes and procedure coding
    - insurance: Prior authorizations and coverage
    - compliance: Compliance risks and rules
    - denials: Common denial reasons
    - technology: Essential modifiers and tools
*/

-- Clear existing data
DELETE FROM specialty_faqs;

-- Insert Cardiology FAQs (8)
INSERT INTO specialty_faqs (specialty_slug, category, question, answer, short_answer, priority, search_keywords) VALUES
('cardiology', 'billing-basics', 'What makes cardiology billing more complex than other specialties?',
'Cardiology billing is uniquely complex due to several factors: (1) High-value procedures with expensive device implantations requiring separate billing, (2) Multiple procedure modifiers for interventional procedures performed during the same session, (3) Complex global period management for surgical interventions, (4) Prior authorization requirements for diagnostic tests and procedures, (5) Technical and professional component billing for in-office diagnostics like echocardiograms and stress tests, and (6) Intricate bundling rules for cardiac catheterization procedures. Additionally, cardiology practices often perform procedures in multiple settings (office, hospital, ASC), each with different billing requirements and fee schedules.',
'Cardiology billing complexity stems from high-value procedures, device billing, complex modifiers, global periods, prior authorizations, and multiple procedure settings with different requirements.',
10,
ARRAY['cardiology billing complexity', 'cardiac procedure billing', 'interventional cardiology', 'device implantation billing']),

('cardiology', 'coding', 'How do you code for cardiac catheterization procedures?',
'Cardiac catheterization coding requires detailed understanding of CPT codes 93451-93533. Key considerations include: (1) Left heart catheterization (93452-93453) vs right heart catheterization (93451), (2) Coronary angiography codes (93454-93461) based on native vessels, grafts, or both, (3) Add-on codes for additional vessels or interventions, (4) Modifier usage for bilateral procedures or distinct procedural services, (5) Documentation of catheter placement approach (femoral, radial, brachial), (6) Imaging components (supervision and interpretation), and (7) Professional vs technical component billing. Proper coding requires clear documentation of all vessels studied, interventions performed, and medical necessity justification. Bundling edits must be carefully reviewed to avoid denials.',
'Cardiac catheterization coding uses CPT 93451-93533 based on left/right heart access, vessels studied, and interventions performed, requiring detailed documentation and modifier application.',
20,
ARRAY['cardiac catheterization coding', 'CPT 93451', 'coronary angiography codes', 'heart cath billing']),

('cardiology', 'coding', 'What CPT codes are used for pacemaker and ICD implantation?',
'Pacemaker and ICD implantation codes are categorized by device type and complexity: **Pacemakers:** (1) Single chamber (33206-33208), (2) Dual chamber (33207-33208), (3) Biventricular/CRT-P (33224-33226). **ICDs:** (1) Single chamber ICD (33240-33241), (2) Dual chamber ICD (33249), (3) Biventricular ICD/CRT-D (33249 with leadless system). **Additional codes:** (1) Lead placement/repositioning (33210-33211, 33215-33216), (2) Generator replacement (33227-33229 for pacemakers, 33262-33264 for ICDs), (3) Electrode removal (33234-33235), (4) Device interrogation and programming (93279-93299). Documentation must include device manufacturer, model number, battery status, lead placement locations, fluoroscopy use, and medical necessity. Separate billing is required for the device hardware using HCPCS codes.',
'Pacemaker codes: 33206-33208 (single), 33207-33208 (dual), 33224-33226 (biventricular). ICD codes: 33240-33241 (single), 33249 (dual/CRT-D). Include device HCPCS codes for hardware billing.',
30,
ARRAY['pacemaker coding', 'ICD implantation codes', 'CPT 33206', 'cardiac device billing', 'CRT-D coding']),

('cardiology', 'insurance', 'What prior authorizations are typically required for cardiac procedures?',
'Most cardiac procedures require prior authorization, varying by payer: **Diagnostic Testing:** Stress tests (nuclear, echo, pharmacological), cardiac CT/MRI, Holter monitors beyond 24 hours, event recorders. **Interventional Procedures:** Cardiac catheterization, angioplasty/stent placement, atherectomy, valvuloplasty. **Device Implantation:** Pacemakers, ICDs, CRT devices, implantable loop recorders. **Structural Heart:** TAVR, MitraClip, left atrial appendage closure. **Documentation Requirements:** Clinical indications, previous conservative treatment attempts, relevant diagnostic test results, ACC/AHA guideline compliance, urgency justification. Timeframes vary: Medicare typically 1-5 days, commercial payers 3-10 business days. Emergency procedures may qualify for retrospective authorization. Maintain detailed authorization tracking to avoid denials.',
'Cardiac procedures requiring prior auth include stress tests, catheterizations, device implants, and structural heart procedures. Documentation must show medical necessity, guideline compliance, and previous conservative management.',
40,
ARRAY['cardiac prior authorization', 'pacemaker authorization', 'stress test authorization', 'catheterization approval']),

('cardiology', 'compliance', 'What are the global period rules for cardiac surgery?',
'Cardiac surgical procedures have 90-day global periods (major surgery) with specific billing rules: **Included in Global Package:** (1) Pre-operative visits (day before through day of surgery), (2) Intraoperative services by the surgeon, (3) Post-operative care for 90 days, (4) Complications not requiring return to OR, (5) Post-operative pain management by surgeon. **Separately Billable (with modifiers):** Modifier 24: Unrelated E/M during global period for different diagnosis. Modifier 25: Significant, separately identifiable E/M same day as minor procedure. Modifier 58: Staged/related procedure during global period (resets global period). Modifier 78: Return to OR for complication (global period does not reset). Modifier 79: Unrelated procedure during global period (new global period). **Common Cardiac Surgeries with 90-day Globals:** CABG (33510-33536), valve replacements (33405-33478), septal defect repairs (33641-33647).',
'Cardiac surgeries have 90-day global periods covering pre-op, surgery, and post-op care. Use modifiers 24, 25, 58, 78, or 79 for services outside global package.',
50,
ARRAY['cardiac surgery global period', 'modifier 78', 'CABG global period', '90-day global period']),

('cardiology', 'denials', 'Why are cardiac catheterization claims frequently denied?',
'Cardiac catheterization denials occur due to: **Medical Necessity Issues:** (1) Insufficient documentation of symptoms justifying procedure, (2) Missing non-invasive testing results, (3) Lack of ACC/AHA guideline compliance documentation. **Coding Errors:** (1) Incorrect bundling with coronary angiography, (2) Missing or incorrect modifiers (26, TC, 59, XU), (3) Wrong add-on code usage, (4) Improper bilateral modifier application. **Authorization Problems:** (1) Expired or missing prior authorization, (2) Procedure performed at non-authorized facility, (3) Different procedure than authorized. **Documentation Deficiencies:** (1) Incomplete procedure note, (2) Missing vessel documentation, (3) Absent medical necessity statement, (4) No contrast documentation. **Prevention:** Obtain robust pre-authorization, ensure comprehensive documentation, use correct CPT/modifier combinations, verify facility authorization, document all vessels studied.',
'Catheterization denials result from insufficient medical necessity documentation, incorrect bundling/modifiers, missing authorizations, or incomplete procedure documentation. Prevention requires robust pre-auth and detailed documentation.',
60,
ARRAY['catheterization denials', 'cardiac cath claim denial', 'medical necessity denial', 'bundling denial']),

('cardiology', 'billing-basics', 'How do you bill for echocardiograms and stress tests?',
'**Echocardiogram Billing:** Code selection based on type and completeness: (1) Transthoracic echo complete (93306) or limited (93308), (2) Transesophageal echo (93312-93318), (3) Stress echo (93350-93352), (4) Doppler studies (93320-93325 as add-ons), (5) 3D echocardiography (93319 add-on). Bill professional (modifier 26), technical (modifier TC), or global (no modifier) based on setting. **Stress Test Billing:** (1) Cardiovascular stress test with ECG monitoring (93015-93018), (2) Nuclear stress test myocardial perfusion (78451-78454), (3) Pharmacological stress (adenosine, dobutamine) when exercise contraindicated, (4) Stress echo (93350), (5) Supervision/interpretation separate from technical component. Document indication, protocol used, patient response, termination criteria, and interpretation findings for medical necessity.',
'Echocardiograms: Use 93306 (complete TTE), 93308 (limited), 93312-93318 (TEE) with 26/TC modifiers. Stress tests: 93015-93018 (exercise ECG), 78451-78454 (nuclear perfusion). Document indication and interpretation.',
70,
ARRAY['echocardiogram billing', 'stress test coding', 'CPT 93306', 'nuclear stress test', 'echo modifier']),

('cardiology', 'insurance', 'What documentation supports medical necessity for cardiac procedures?',
'Comprehensive medical necessity documentation requires: **Clinical Presentation:** (1) Detailed symptom description (chest pain character, radiation, duration, triggers), (2) NYHA or CCS functional classification, (3) Impact on daily activities and quality of life, (4) Risk stratification scores when applicable. **Diagnostic Workup:** (1) Results of non-invasive testing (EKG, echo, stress test, cardiac CT), (2) Laboratory values (troponin, BNP, lipid panel), (3) Previous cardiac history and interventions. **Guideline Compliance:** (1) ACC/AHA guideline reference and class/level of evidence, (2) Appropriate use criteria (AUC) scores for imaging, (3) SCAI risk classification for interventions. **Treatment Rationale:** (1) Why procedure is necessary now, (2) Previous conservative management attempts and results, (3) Risks of delaying intervention, (4) Expected outcomes and benefits. **Urgency Assessment:** Emergent, urgent, or elective classification with justification.',
'Medical necessity documentation requires detailed symptoms, non-invasive test results, ACC/AHA guideline references, previous treatment history, appropriate use criteria scores, and clear treatment rationale.',
80,
ARRAY['cardiac medical necessity', 'procedure justification', 'ACC AHA guidelines', 'appropriate use criteria']);
