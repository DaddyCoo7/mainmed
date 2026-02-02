/*
  # Seed Initial Medical Coding Data
  
  ## Overview
  Seeds the database with commonly searched medical codes from competitor keyword analysis.
  This includes pre-op clearance codes, dental codes, modifiers, and specialty-specific codes
  that users are actively searching for.
  
  ## Data Seeded
  1. ICD-10 codes for pre-operative clearance and common procedures
  2. CPT codes for cardiology, pediatrics, podiatry, and general procedures
  3. Billing modifiers (GA, GW, GV)
  4. Dental codes (D0140, D9310, etc.)
  5. Popular EMR systems
  6. State billing laws for high-traffic states (Texas, California, Illinois)
*/

-- Seed ICD-10 Codes
INSERT INTO icd10_codes (code, description, category, commonly_used, clinical_notes) VALUES
('Z01.818', 'Encounter for other preprocedural examination', 'Pre-operative Clearance', true, 'Used for pre-op clearance visits. Most commonly billed code for surgical clearance evaluations.'),
('Z01.810', 'Encounter for preprocedural cardiovascular examination', 'Pre-operative Clearance', true, 'Specific to cardiovascular pre-op clearance. Use when cardiac clearance is the primary focus.'),
('Z01.812', 'Encounter for preprocedural laboratory examination', 'Pre-operative Clearance', true, 'For pre-op lab work orders and evaluations.'),
('Z01.811', 'Encounter for preprocedural respiratory examination', 'Pre-operative Clearance', true, 'Used for respiratory system pre-operative assessments.'),
('Z00.00', 'Encounter for general adult medical examination without abnormal findings', 'Preventive Care', true, 'Annual wellness visit or physical exam.'),
('Z00.01', 'Encounter for general adult medical examination with abnormal findings', 'Preventive Care', true, 'Physical exam with findings requiring follow-up.'),
('E11.621', 'Type 2 diabetes mellitus with foot ulcer', 'Endocrinology', true, 'Common in podiatry for diabetic foot ulcer management.')
ON CONFLICT (code) DO NOTHING;

-- Seed CPT Codes
INSERT INTO cpt_codes (code, description, category, specialty, year, commonly_used, notes) VALUES
('99213', 'Office visit, established patient, level 3', 'Evaluation & Management', 'Primary Care', 2025, true, 'Most common E&M code for established patient visits.'),
('99214', 'Office visit, established patient, level 4', 'Evaluation & Management', 'Primary Care', 2025, true, 'Higher complexity established patient visit.'),
('99203', 'Office visit, new patient, level 3', 'Evaluation & Management', 'Primary Care', 2025, true, 'Common new patient visit code.'),
('99204', 'Office visit, new patient, level 4', 'Evaluation & Management', 'Primary Care', 2025, true, 'Complex new patient visit.'),
('93000', 'Electrocardiogram, routine ECG with interpretation', 'Cardiovascular', 'Cardiology', 2025, true, 'Standard EKG with interpretation and report.'),
('93306', 'Echocardiography, complete', 'Cardiovascular', 'Cardiology', 2025, true, 'Complete transthoracic echo study.'),
('93018', 'Cardiovascular stress test', 'Cardiovascular', 'Cardiology', 2025, true, 'Stress test with interpretation.'),
('99241', 'Office consultation, level 1', 'Consultations', 'Cardiology', 2025, true, 'Cardiology consult code - level 1.'),
('99242', 'Office consultation, level 2', 'Consultations', 'Cardiology', 2025, true, 'Cardiology consult code - level 2.'),
('99243', 'Office consultation, level 3', 'Consultations', 'Cardiology', 2025, true, 'Most common cardiology consult code.'),
('50200', 'Renal biopsy; percutaneous, by trocar or needle', 'Surgery', 'Nephrology', 2025, true, 'Percutaneous kidney biopsy procedure.'),
('11721', 'Debridement of nail(s) by any method; 6 or more', 'Integumentary', 'Podiatry', 2025, true, 'Common podiatry code for nail debridement.'),
('11056', 'Paring or cutting of benign hyperkeratotic lesion; 2 to 4 lesions', 'Integumentary', 'Podiatry', 2025, true, 'Callus debridement for podiatry.'),
('11057', 'Paring or cutting of benign hyperkeratotic lesion; more than 4 lesions', 'Integumentary', 'Podiatry', 2025, true, 'Multiple callus debridement.'),
('97597', 'Debridement of open wound; first 20 sq cm or less', 'Wound Care', 'Podiatry', 2025, true, 'Diabetic foot ulcer debridement.'),
('97598', 'Debridement of open wound; each additional 20 sq cm', 'Wound Care', 'Podiatry', 2025, true, 'Add-on code for larger wound debridement.'),
('99381', 'Initial comprehensive preventive medicine, new patient, infant', 'Preventive Care', 'Pediatrics', 2025, true, 'Well-child visit, new patient under age 1.'),
('99382', 'Initial comprehensive preventive medicine, new patient, age 1-4', 'Preventive Care', 'Pediatrics', 2025, true, 'Well-child visit, new patient ages 1-4.'),
('99391', 'Periodic comprehensive preventive medicine, established patient, infant', 'Preventive Care', 'Pediatrics', 2025, true, 'Annual well-child visit, established patient.'),
('90460', 'Immunization administration through 18 years via any route', 'Immunizations', 'Pediatrics', 2025, true, 'First vaccine component administration.'),
('90461', 'Immunization administration, each additional vaccine component', 'Immunizations', 'Pediatrics', 2025, true, 'Each additional vaccine given.')
ON CONFLICT (code) DO NOTHING;

-- Seed Billing Modifiers
INSERT INTO billing_modifiers (modifier, description, usage_guidelines, specialty_specific, examples) VALUES
('GA', 'Waiver of liability statement issued as required by payer policy', 'Use when ABN (Advance Beneficiary Notice) is on file and service may not be covered by Medicare. Required for medical necessity denials protection.', 'All specialties', 'Append to any service where ABN was obtained. Common with DME, certain lab tests, or services that may not meet medical necessity.'),
('GW', 'Service not related to hospice patient''s terminal condition', 'Used when treating hospice patients for conditions unrelated to their hospice diagnosis. Indicates service should be billed to Medicare Part B, not hospice.', 'Primary Care, Specialists', 'Patient in hospice for cancer receives treatment for broken arm - append GW to orthopedic codes.'),
('GV', 'Attending physician not employed or paid under arrangement by hospice', 'Identifies the attending physician who is not employed by the hospice but continues to care for the hospice patient.', 'Primary Care, Palliative Care', 'Patient''s long-time PCP continues care while patient is in hospice - PCP bills with GV modifier.'),
('59', 'Distinct Procedural Service', 'Indicates a procedure/service was distinct or independent from other services performed on the same day. Used to bypass CCI edits.', 'Surgery, Procedures', 'Two separate procedures on different anatomic sites performed same day.'),
('25', 'Significant, Separately Identifiable E&M Service', 'E&M service on same day as procedure that was above and beyond the usual pre/post-operative work.', 'All specialties', 'Patient comes for suture removal (included service) but also has separate complaint requiring E&M - append 25 to E&M code.')
ON CONFLICT (modifier) DO NOTHING;

-- Seed Dental Codes
INSERT INTO dental_codes (code, description, category, commonly_used, ada_category, notes) VALUES
('D0140', 'Limited oral evaluation - problem focused', 'Diagnostic', true, 'I. Diagnostic', 'Used for problem-focused dental exams, not comprehensive evaluations.'),
('D0150', 'Comprehensive oral evaluation - new or established patient', 'Diagnostic', true, 'I. Diagnostic', 'Complete oral examination including charting.'),
('D0120', 'Periodic oral evaluation - established patient', 'Diagnostic', true, 'I. Diagnostic', 'Routine recall examination for existing patients.'),
('D9310', 'Consultation - diagnostic service', 'Adjunctive General Services', true, 'IX. Adjunctive General Services', 'Dentist consultation at request of another provider.'),
('D1110', 'Prophylaxis - adult', 'Preventive', true, 'II. Preventive', 'Routine cleaning for patients 14 and older.'),
('D1120', 'Prophylaxis - child', 'Preventive', true, 'II. Preventive', 'Routine cleaning for patients under 14.'),
('D0210', 'Intraoral - complete series of radiographic images', 'Diagnostic', true, 'I. Diagnostic', 'Full mouth X-ray series.'),
('D0220', 'Intraoral - periapical first radiographic image', 'Diagnostic', true, 'I. Diagnostic', 'Single periapical X-ray.'),
('D0230', 'Intraoral - periapical each additional radiographic image', 'Diagnostic', true, 'I. Diagnostic', 'Each additional PA X-ray.'),
('D2740', 'Crown - porcelain/ceramic substrate', 'Restorative', true, 'III. Restorative', 'Porcelain crown on metal base.')
ON CONFLICT (code) DO NOTHING;

-- Seed EMR Integrations
INSERT INTO emr_integrations (name, slug, description, integration_type, popularity_rank, meta_description, supported_specialties) VALUES
('eClinicalWorks', 'eclinicalworks', 'eClinicalWorks (ECW) is one of the most widely used EHR and practice management systems in the United States. Our seamless integration ensures efficient billing workflows and real-time data synchronization.', 'API', 1, 'Professional medical billing services with eClinicalWorks (ECW) EMR integration. Seamless API connection for automated claim submission and real-time eligibility.', ARRAY['Primary Care', 'Internal Medicine', 'Pediatrics', 'Cardiology']),
('Office Ally', 'office-ally', 'Office Ally provides cloud-based practice management and clearinghouse services. We offer deep integration with Office Ally EHR and clearinghouse for streamlined billing operations.', 'API', 2, 'Expert medical billing integration with Office Ally EHR and clearinghouse. Automated claim submission, ERA posting, and denial management.', ARRAY['All Specialties']),
('Kareo', 'kareo', 'Kareo is a popular cloud-based EHR and billing platform designed for independent practices. Our Kareo billing services optimize your revenue cycle with native integration.', 'API', 3, 'Professional Kareo medical billing services with full EHR integration. Maximize collections with our certified Kareo billing specialists.', ARRAY['Primary Care', 'Specialty Care', 'Mental Health']),
('Athena Health (athenaOne)', 'athena-health', 'Athena Health offers a comprehensive cloud-based EHR and RCM platform. We provide expert billing services integrated with athenaOne for maximum efficiency.', 'API', 4, 'athenahealth medical billing integration services. Expert RCM support for athenaOne users with proven results.', ARRAY['All Specialties']),
('Epic', 'epic', 'Epic is the leading enterprise EHR system used by large health systems and hospitals. Our Epic billing integration supports both ambulatory and hospital billing.', 'HL7', 5, 'Enterprise Epic EMR billing integration services. HL7 interface for hospitals and large medical groups using Epic Systems.', ARRAY['Hospital', 'Multi-Specialty', 'Academic Medical Centers']),
('NextGen Healthcare', 'nextgen', 'NextGen provides specialty-specific EHR and practice management solutions. Our NextGen billing integration supports specialty workflows and complex billing scenarios.', 'API', 6, 'NextGen Healthcare medical billing integration. Specialty-specific billing support for NextGen EHR users.', ARRAY['Ambulatory Surgery', 'Specialty Care', 'Behavioral Health']),
('Allscripts', 'allscripts', 'Allscripts offers EHR solutions for practices of all sizes. We provide comprehensive billing services with Allscripts Charting System integration.', 'API', 7, 'Allscripts EHR medical billing integration services. Professional support for Allscripts Professional, Sunrise, and TouchWorks.', ARRAY['Primary Care', 'Specialty Care', 'Hospital']),
('AdvancedMD', 'advancedmd', 'AdvancedMD is a cloud-based EHR and practice management system with built-in billing capabilities. Our services enhance AdvancedMD workflows.', 'API', 8, 'AdvancedMD EHR medical billing services and integration. Cloud-based billing optimization for AdvancedMD users.', ARRAY['Primary Care', 'Specialty Care', 'Dermatology']),
('DrChrono', 'drchrono', 'DrChrono offers iPad-based EHR and medical billing software. Our integration provides seamless billing support for DrChrono users.', 'API', 9, 'DrChrono medical billing integration and services. Mobile-friendly billing support for iPad EHR users.', ARRAY['Primary Care', 'Specialty Care', 'Telemedicine']),
('Practice Fusion', 'practice-fusion', 'Practice Fusion is a cloud-based EHR platform. Our billing integration helps small practices maximize collections.', 'API', 10, 'Practice Fusion EHR medical billing integration. Free EHR users can access professional billing services.', ARRAY['Primary Care', 'Small Practices']),
('Cerner (Oracle Health)', 'cerner', 'Cerner (now Oracle Health) is a leading enterprise health information system. Our Cerner RCM services support hospital and ambulatory billing.', 'HL7', 11, 'Cerner (Oracle Health) medical billing and RCM integration services. Enterprise billing support for Cerner PowerChart users.', ARRAY['Hospital', 'Health Systems', 'Ambulatory']),
('Prognocis EMR', 'prognocis', 'Prognocis is a flexible cloud-based EHR system. Our Prognocis billing integration provides comprehensive revenue cycle support.', 'API', 12, 'Prognocis EMR medical billing integration services. Cloud-based RCM for Prognocis EHR users.', ARRAY['Primary Care', 'Specialty Care'])
ON CONFLICT (name) DO NOTHING;

-- Seed State Billing Laws
INSERT INTO state_billing_laws (state_code, state_name, statute_of_limitations_years, timely_filing_limit_days, legal_summary, key_regulations) VALUES
('TX', 'Texas', 4, 95, '<p>Texas has specific medical billing laws that protect both providers and patients. The statute of limitations for medical debt in Texas is <strong>4 years</strong> from the date of last service or last payment.</p><h3>Timely Filing Requirements</h3><p>Most Texas payers require claim submission within 95 days, though this varies by payer. Medicare: 1 year. Medicaid: 95 days. Commercial: varies by contract.</p><h3>Balance Billing</h3><p>Texas has strong surprise billing protections effective September 2019. Balance billing is restricted for emergency services and certain out-of-network scenarios at in-network facilities.</p>', ARRAY['4-year statute of limitations on medical debt', '95-day timely filing for Texas Medicaid', 'Texas Medical Board Rule 165.5 regarding billing practices', 'Surprise billing protections under Texas Insurance Code Chapter 1467']),
('CA', 'California', 4, 6, '<p>California has strict medical billing regulations under the Health and Safety Code. The statute of limitations for medical debt in California is <strong>4 years</strong> from the date the debt became due.</p><h3>Timely Filing Laws</h3><p>California has a 6-month timely billing law for emergency services. Providers must bill patients within 6 months of service or discharge for emergency care, or the patient may not be liable.</p><h3>Balance Billing Protections</h3><p>California has comprehensive surprise billing protections. Assembly Bill 72 and AB 1611 provide strong consumer protections against surprise medical bills.</p>', ARRAY['4-year statute of limitations on medical debt', '6-month timely billing requirement for emergency services (SB 1276)', 'Surprise billing protections under AB 72', 'California Health and Safety Code Section 127400-127446']),
('IL', 'Illinois', 5, 180, '<p>Illinois medical billing is governed by the Illinois Insurance Code and the Statute of Limitations. Medical debt has a <strong>5-year</strong> statute of limitations in Illinois (735 ILCS 5/13-205).</p><h3>Timely Filing</h3><p>Illinois Medicaid requires claims within 180 days of service. Most commercial payers follow similar timelines, but specific contracts may vary.</p><h3>Patient Protections</h3><p>Illinois has implemented surprise billing protections for emergency services and certain out-of-network care at in-network facilities.</p>', ARRAY['5-year statute of limitations on medical debt (735 ILCS 5/13-205)', '180-day timely filing for Illinois Medicaid', 'Surprise billing protections under PA 102-0030', 'Health Care Services Lien Act regulations'])
ON CONFLICT (state_code) DO NOTHING;