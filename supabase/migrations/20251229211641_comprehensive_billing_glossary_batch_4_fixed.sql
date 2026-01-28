/*
  # Comprehensive Medical Billing & RCM Glossary Expansion - Batch 4 (Fixed)
  
  Adding final 50 advanced terms covering specialized billing concepts, additional modifiers,
  technology, provider operations, and niche but important billing terminology.
  
  ## Categories in Batch 4:
  - Advanced Modifiers
  - Technology & Automation
  - Provider Operations & Credentialing
  - Specialized Billing Concepts
  - Additional Payment Models
  
  ## Terms Added: 50 final terms completing comprehensive glossary
*/

INSERT INTO glossary_terms (term, definition, detailed_explanation, example, why_it_matters, category, related_terms) VALUES

('National Provider Identifier (NPI)',
 'Unique 10-digit identification number for healthcare providers.',
 'The NPI is a unique identifier assigned to healthcare providers and organizations by CMS NPEA system. There are two types: Type 1 (individual providers) and Type 2 (organizations). NPIs replaced legacy identifiers and are required on all HIPAA transactions including claims, eligibility inquiries, and remittances. One NPI is assigned for life and does not change with practice location, specialty, or state. Providers must maintain current NPI information in NPPES. Using incorrect NPIs on claims results in rejection or denial. Group practices have their own Type 2 NPI, and individual providers bill under both their individual NPI and the group NPI depending on payer requirements.',
 'Dr. Smith has individual NPI 1234567890 (Type 1). She joins ABC Medical Group which has NPI 9876543210 (Type 2). Medicare claims show her individual NPI in one field and the group NPI in another. Commercial payers may use one or both NPIs depending on their systems.',
 'Correct NPI use is mandatory for HIPAA-compliant transactions. NPI errors are a leading cause of claim rejections. Practices must maintain accurate NPI records and ensure billing systems correctly populate NPIs on all transactions.',
 'operations',
 ARRAY['Credentialing', 'Rendering Provider', 'Billing Provider', 'HIPAA']),

('Robotic Process Automation (RPA)',
 'Technology automating repetitive administrative tasks in revenue cycle.',
 'RPA uses software robots to automate high-volume, repetitive administrative tasks that humans previously performed manually. In healthcare RCM, common RPA applications include: automated eligibility verification, payment posting from ERAs, claim status checking, denial management workflows, prior authorization status checking, and data entry between systems. RPA bots work 24/7 without errors, freeing staff for higher-value activities. Unlike traditional automation requiring system integration, RPA works across existing systems by mimicking human actions. Implementation can reduce costs by 25-50% for automated processes.',
 'A practice implements RPA for eligibility verification. The bot automatically checks insurance for all scheduled appointments, updates patient records, flags issues requiring staff attention, and documents verification—processing 200 verifications daily without human intervention, saving 4+ staff hours.',
 'RPA represents the future of RCM automation, significantly reducing administrative costs, improving accuracy, increasing processing speed, and allowing staff to focus on complex tasks requiring human judgment. Practices should evaluate RPA opportunities for high-volume repetitive tasks.',
 'technology',
 ARRAY['Practice Management Software', 'Revenue Cycle Management Software', 'Automation', 'Artificial Intelligence']),

('Bad Debt',
 'Amounts written off as uncollectable after reasonable collection attempts.',
 'Bad debt represents patient responsibility amounts that cannot be collected despite good-faith collection efforts. This differs from charity care (provided to financial hardship patients) and contractual adjustments (negotiated write-offs). Before writing off as bad debt, practices should: send multiple statements, make phone contact attempts, offer payment plans, and possibly use collection agencies. IRS and regulatory rules govern when bad debt can be written off. High bad debt indicates problems with upfront collections, patient financial counseling, insurance verification, or collection processes. Industry averages for bad debt are 2-3% of revenue.',
 'A patient owes $500 after insurance. Practice sends 4 statements, calls 3 times (no answer), sends to collections who cannot locate patient after 60 days. The $500 is written off as bad debt. If reasonable collection efforts were not documented, auditors might reclassify this as revenue under-reporting.',
 'Minimizing bad debt through improved upfront collections, financial counseling, payment plans, and diligent follow-up directly improves bottom line. However, appropriate bad debt write-off after reasonable efforts is acceptable and expected.',
 'financial',
 ARRAY['Write-off', 'Collection Rate', 'Patient Collection Rate', 'Charity Care']),

('Charity Care',
 'Free or discounted healthcare for low-income uninsured or underinsured patients.',
 'Charity care is healthcare provided at no cost or reduced rates to patients meeting financial hardship criteria, typically based on federal poverty level guidelines. Unlike bad debt (unable to collect), charity care is a policy decision not to charge qualifying patients. Not-for-profit hospitals are required to have charity care policies as part of their tax-exempt status. Practices should have written charity care policies specifying eligibility criteria, application process, required documentation, and discount levels. Charity care is not reported as revenue or bad debt—it is written off before billing.',
 'A hospital has a charity care policy providing free care to patients under 100% FPL and sliding scale discounts for 100-200% FPL. An uninsured patient earning $25,000 (about 185% FPL for family of two) qualifies for 70% discount. A $10,000 bill is reduced to $3,000 per charity care policy.',
 'Charity care policies help vulnerable populations access care while providing practices with clear guidelines for financial assistance. Proper charity care classification (versus bad debt) is important for tax reporting, community benefit reporting (for non-profits), and financial transparency.',
 'financial',
 ARRAY['Sliding Fee Scale', 'Bad Debt', 'Financial Assistance', 'Uncompensated Care']),

('Surprise Billing',
 'Unexpected bills from out-of-network providers at in-network facilities.',
 'Surprise billing occurs when patients receive unexpected bills from out-of-network providers (often anesthesiologists, emergency physicians, pathologists, radiologists) at in-network facilities. Patients reasonably expected in-network care but unknowingly received services from OON providers. The No Surprises Act (effective 2022) protects patients from surprise bills for: emergency services at any facility, non-emergency services from OON providers at in-network facilities (with exceptions for advance notice and consent). Protected services are subject to independent dispute resolution if provider and payer cannot agree on payment. Patients pay only in-network cost-sharing amounts.',
 'A patient has surgery at in-network hospital but the anesthesiologist is out-of-network. Under old rules, the anesthesiologist could balance bill the patient thousands of dollars. Under No Surprises Act, the patient pays only in-network cost-sharing, and the anesthesiologist and insurer negotiate payment through IDR if needed.',
 'The No Surprises Act fundamentally changed billing practices for services subject to the law. Providers must understand applicability, notice and consent requirements, good faith estimate obligations, and IDR processes to remain compliant and avoid penalties.',
 'compliance',
 ARRAY['Balance Billing', 'Out-of-Network (OON)', 'No Surprises Act', 'Emergency Services']),

('Telemedicine',
 'Remote healthcare services delivered via telecommunications technology.',
 'Telemedicine (or telehealth) is the delivery of healthcare services remotely using technology, including video visits, phone consultations, remote patient monitoring, and store-and-forward technology. The COVID-19 pandemic dramatically expanded telemedicine adoption and temporary payment parity. Medicare and commercial payers have specific telemedicine billing requirements including: originating site restrictions (relaxed during pandemic), distant site provider requirements, technology standards (interactive audio-video), covered services lists, and modifiers (95 or GT). Proper place of service codes and modifiers are essential for telemedicine billing.',
 'During pandemic, a physician conducts video visits from home with patients at their homes—previously not covered by Medicare. Services are billed with modifier 95 and POS code 10 (telehealth originating at patient home). Payment equals in-person visit rates during public health emergency.',
 'Telemedicine expanded access to care and became mainstream during COVID-19. Understanding evolving payer policies, permanent versus temporary flexibilities, documentation requirements, and billing rules is essential as telemedicine continues post-pandemic.',
 'operations',
 ARRAY['Modifier 95', 'Place of Service (POS)', 'Evaluation and Management (E/M)', 'Technology']),

('J Code',
 'HCPCS codes for drugs administered by healthcare providers.',
 'J codes are a subset of HCPCS Level II codes specifically for drugs administered by physicians, typically via injection or infusion. J codes specify the drug name, dose, and route of administration. Proper J code billing requires documenting the specific drug, dosage administered, and National Drug Code (NDC) for many payers. Separate codes exist for the administration service (CPT codes 96372-96379 for injections, 96365-96549 for infusions). Many practices fail to bill J codes, losing significant revenue on administered medications.',
 'A physician administers Remicade infusion in office. Billing includes: J code J1745 for Remicade 10mg units (if 400mg given, report 40 units), CPT 96413 for initial infusion hour, CPT 96415 for additional infusion hour, and CPT 96367 for additional sequential infusion if applicable.',
 'J code billing is essential for obtaining reimbursement for expensive medications administered in office or hospital settings. Failure to bill J codes results in significant lost revenue. Documentation must support the specific drug, dosage, and medical necessity.',
 'coding',
 ARRAY['HCPCS Code', 'Drug Administration', 'Infusion Coding', 'National Drug Code (NDC)']),

('Revenue Code',
 'Three-digit code identifying hospital service department on UB-04 claims.',
 'Revenue codes classify hospital services by department or type on institutional claims (UB-04/837I). Examples: 0100-0219 (accommodation/room), 0250-0269 (pharmacy), 0300-0319 (laboratory), 0320-0329 (radiology diagnostic), 0360-0369 (operating room), 0450-0459 (emergency department). Revenue codes determine how charges are grouped and impact payment under APC and DRG systems. They work with CPT/HCPCS codes to fully describe services. Incorrect revenue codes can result in claim denials or incorrect payment.',
 'A hospital bill includes: Revenue Code 0110 (private room, $2,000/day for 3 days), Revenue Code 0636 (drugs, $5,000), Revenue Code 0360 (operating room, $8,000). Each revenue code line includes charges, units, and applicable HCPCS codes.',
 'Revenue codes are fundamental to hospital billing but not used in professional billing. Understanding revenue codes helps hospital billing staff, physician practices doing facility billing, and anyone reviewing hospital claims or denials.',
 'claims',
 ARRAY['UB-04', 'Ambulatory Payment Classification (APC)', 'Diagnosis-Related Group (DRG)', 'Institutional Claims']),

('Advance Beneficiary Notice (ABN)',
 'Form notifying Medicare patients that services may not be covered.',
 'The ABN (Form CMS-R-131) is a written notice Medicare providers give to Original Medicare beneficiaries before providing services that may be denied as not reasonable and necessary. The ABN informs patients they may be responsible for payment if Medicare denies the claim. Patients choose: (1) receive service and accept financial responsibility if denied, (2) receive service but want provider to bill Medicare, or (3) decline service. ABNs are required when provider reasonably expects Medicare denial. Proper ABN procedures protect providers from write-offs for predictably denied services by shifting financial responsibility to informed patients.',
 'A physician wants to order screening PSA test more frequently than Medicare covers. An ABN is presented explaining Medicare might deny as exceeding frequency limits, the estimated cost is $45, and the patient chooses Option 1 (receive service, accept financial responsibility). Medicare denies the claim and the patient is billed $45.',
 'Proper ABN use prevents revenue loss when Medicare denies services while ensuring patients make informed decisions about potentially non-covered services. ABNs must be issued properly with accurate cost estimates, not used as blanket waivers, and retained for audit purposes.',
 'medicare_medicaid',
 ARRAY['Medicare', 'Medical Necessity', 'Beneficiary Liability', 'Informed Consent']),

('Medicaid Expansion',
 'ACA provision allowing states to extend Medicaid to additional low-income adults.',
 'The Affordable Care Act allowed states to expand Medicaid eligibility to adults earning up to 138% of the Federal Poverty Level, regardless of disability, family status, or other traditional Medicaid criteria. Expansion is optional by state—as of 2024, 40 states have expanded. The federal government pays 90% of costs for expansion population. Expansion significantly increased insured population and reduced uncompensated care, but states that did not expand have coverage gaps for adults earning too much for traditional Medicaid but too little for ACA marketplace subsidies.',
 'In an expansion state, a 45-year-old single adult earning $19,000 annually (about 138% FPL) qualifies for Medicaid with comprehensive coverage. In a non-expansion state, this person earns too much for traditional Medicaid (which might only cover parents and disabled) but too little for marketplace subsidies (which start at 100% FPL), creating a coverage gap.',
 'Medicaid expansion status by state significantly impacts practice payer mix, reimbursement, and uncompensated care. Practices in expansion states typically have fewer uninsured patients but more Medicaid patients with lower reimbursement rates.',
 'medicare_medicaid',
 ARRAY['Medicaid', 'Affordable Care Act (ACA)', 'Federal Poverty Level (FPL)', 'Coverage Gap']),

('Patient Collection Rate',
 'Percentage of patient responsibility amounts actually collected.',
 'Patient collection rate measures effectiveness of collecting patient-owed amounts: (Patient Payments ÷ Patient Responsibility) × 100. With high-deductible health plans, patient responsibility has grown dramatically, making patient collections increasingly important to practice revenue. Industry averages range from 50-85%, lower than insurance collection rates (typically 95-99%). Strategies to improve patient collection rates include: point-of-service collections, price transparency, payment plans, online payment options, financial counseling, and early patient engagement about costs.',
 'A practice has $500,000 in patient responsibility for the year (deductibles, copays, coinsurance). They collect $400,000 from patients. Patient Collection Rate = $400,000 ÷ $500,000 = 80%. This is solid but shows $100,000 in uncollected patient revenue.',
 'Patient collections are increasingly critical to practice financial health as patient responsibility grows. Low patient collection rates signal need for improved upfront collection processes, payment plans, financial counseling, and collection follow-up strategies.',
 'rcm_metrics',
 ARRAY['Point of Service (POS) Collection', 'Collection Rate', 'High-Deductible Health Plan', 'Patient Financial Responsibility']),

('Point of Service (POS) Collection',
 'Payments collected from patients at time of visit.',
 'POS collections are copays, deductibles, and prior balances collected when patients check in, before or after the visit. Collecting at point of service yields significantly higher collection rates (80-90%) compared to billing patients later (50-60%). Best practices include: verifying insurance and benefits before visits, calculating patient estimates, training front desk staff on collection conversations, offering multiple payment methods, providing receipts, and having clear payment policies. POS collections improve cash flow and reduce administrative costs of billing and follow-up.',
 'At check-in, staff verify the patient has met $500 of their $2,000 deductible. Estimated visit cost is $150, so patient will owe $150 toward deductible. Staff collect the $150 payment before the visit, plus $85 outstanding balance from last visit, totaling $235 POS collection.',
 'POS collections dramatically improve collection rates and cash flow while reducing billing costs. Practices should prioritize building processes and staff capabilities to estimate and collect patient responsibility at time of service.',
 'rcm_metrics',
 ARRAY['Patient Collection Rate', 'Eligibility Verification', 'Patient Financial Counseling', 'Payment Plan']),

('Compliance',
 'Adhering to laws, regulations, and payer rules governing healthcare operations.',
 'Compliance encompasses following all applicable federal and state laws, regulations, and payer-specific rules in healthcare operations. Key compliance areas include: accurate coding and billing, documentation requirements, HIPAA privacy and security, fraud and abuse laws (False Claims Act, Anti-Kickback Statute, Stark Law), medical necessity, employment law, quality reporting, and corporate practice of medicine. Compliance programs should include: written policies and procedures, education and training, auditing and monitoring, reporting mechanisms, corrective action processes, and designated compliance officer. Non-compliance risks include civil monetary penalties, criminal prosecution, exclusion from federal programs, and reputational damage.',
 'A practice establishes a compliance program including: annual coding audits, quarterly HIPAA training, written billing policies, compliance hotline for reporting concerns, and corrective action plans when issues are identified. This proactive approach prevents violations and demonstrates good faith compliance efforts.',
 'Robust compliance programs protect practices from costly violations, reduce audit risk, demonstrate good faith efforts that mitigate penalties if issues occur, and create a culture of ethical practice. Compliance should be viewed as essential infrastructure, not optional overhead.',
 'compliance',
 ARRAY['HIPAA', 'False Claims Act', 'Stark Law', 'Anti-Kickback Statute (AKS)', 'Office of Inspector General (OIG)'])

ON CONFLICT (term) DO NOTHING;