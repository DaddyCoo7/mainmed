/*
  # Comprehensive Medical Billing & RCM Glossary Expansion - Batch 2
  
  Adding 50 more essential medical billing and RCM terms focusing on
  claims processing, coding, and RCM metrics.
  
  ## Categories in Batch 2:
  - Claims Processing & EDI
  - Coding & Modifiers
  - RCM Metrics & Performance
  
  ## Terms Added: 50 additional terms
*/

INSERT INTO glossary_terms (term, definition, detailed_explanation, example, why_it_matters, category, related_terms) VALUES

('837 File',
 'Electronic format for submitting healthcare claims to insurers.',
 'The 837 transaction set is the ANSI X12 EDI standard for electronic claims submission. There are three types: 837P (professional claims from physicians and non-institutional providers), 837I (institutional claims from hospitals and facilities), and 837D (dental claims). These electronic files replace paper CMS-1500 and UB-04 forms. The 837 contains all necessary claim information including patient demographics, diagnosis codes, procedure codes, and provider details. Most payers require electronic submission through 837 files via clearinghouses.',
 'A physician practice submits 100 claims daily using an 837P file sent through their clearinghouse to various insurance companies. The file includes all patient information, CPT codes, ICD-10 codes, and NPI numbers in standardized format.',
 'Understanding 837 files is essential for electronic claim submission, troubleshooting rejections, and ensuring HIPAA-compliant transactions. Most practices must submit claims electronically per federal regulations.',
 'claims',
 ARRAY['Electronic Data Interchange (EDI)', 'Clearinghouse', 'CMS-1500', 'UB-04', 'X12']),

('835 File',
 'Electronic Remittance Advice file showing payment details and adjustments.',
 'The 835 file is the electronic version of the paper Explanation of Payment (EOP), sent by payers to providers detailing claim payments. It uses the ANSI X12 835 transaction format and includes claim-level and service-line-level information such as charged amounts, allowed amounts, payments, adjustments, patient responsibility, and denial/adjustment reason codes. The 835 can be automatically posted to practice management systems, significantly reducing manual payment posting work. It''s the provider''s version of the patient''s EOB.',
 'A practice receives an 835 file showing 50 processed claims with detailed information: Claim ID 12345 - Billed $150, Allowed $100, Paid $80, Patient Responsibility $20, Adjustment Reason Code 45 (charge exceeds fee schedule).',
 '835 files enable efficient automated payment posting, improve accuracy, reduce staff time, and provide electronic documentation for reconciliation and appeals. Practices using 835 files significantly improve revenue cycle efficiency.',
 'claims',
 ARRAY['Electronic Remittance Advice (ERA)', 'Remittance Advice', 'Payment Posting', 'Claim Adjustment Reason Code (CARC)']),

('Adjudication',
 'The process by which an insurance company evaluates and determines payment for a claim.',
 'Claim adjudication involves multiple steps: (1) Initial processing and data validation, (2) Eligibility verification, (3) Coverage determination for services billed, (4) Pricing based on contracted rates or fee schedules, (5) Application of benefit details (deductible, coinsurance, copay), (6) Applying edits and policies like bundling or medical necessity, (7) Final payment determination. Adjudication results in payment, denial, or partial payment with adjustments. The process typically takes 7-14 days but can be longer for complex claims requiring manual review.',
 'A claim for office visit (99213) and lab work is adjudicated: System verifies patient eligibility (passed), checks coverage (both covered), applies contracted rates ($80 for visit, $25 for lab), applies $15 copay for visit, confirms patient met deductible, processes NCCI edits (no conflicts), determines final payment: Visit $65, Lab $25.',
 'Understanding adjudication helps practices identify denial patterns, appeal inappropriate denials, educate patients about insurance processing, and improve claim submission accuracy to avoid delays.',
 'claims',
 ARRAY['Claim Denial', 'Claim Rejection', 'Clean Claim', 'Explanation of Benefits (EOB)']),

('Claim Adjustment Reason Code (CARC)',
 'Standardized codes explaining why claims were adjusted or denied.',
 'CARCs are national administrative codes maintained by the Washington Publishing Company explaining claim payment adjustments. These codes appear on remittance advice (ERA/835 files) and EOBs, providing standardized explanations for payment differences from billed amounts. Common examples include: CO-45 (charges exceed fee schedule), PR-1 (deductible amount), CO-16 (missing information), OA-23 (impact of prior payer adjudication). CARCs are paired with Remark Codes for additional clarification and Group Codes (CO=Contractual Obligation, PR=Patient Responsibility, OA=Other Adjustment) indicating who is financially responsible.',
 'A remittance shows: Billed $200, Allowed $150, Paid $120, Adjustment $80. CARC Codes: CO-45 ($50 - charges exceed fee schedule), PR-2 ($30 - coinsurance). This tells the biller that $50 is contractual write-off and $30 is patient responsibility.',
 'CARCs are critical for understanding claim payment outcomes, determining appropriate follow-up action (write-off, patient billing, appeal), identifying systemic billing errors, and automating payment posting rules.',
 'claims',
 ARRAY['835 File', 'Electronic Remittance Advice (ERA)', 'Group Code', 'Remark Code', 'Adjudication']),

('Clean Claim',
 'A claim submitted with all required information and no errors, allowing first-pass processing.',
 'A clean claim contains accurate patient demographics, valid insurance information, appropriate diagnosis and procedure codes with correct linkage, proper modifiers, and required documentation. It passes all payer edits and clearinghouse scrubbing without rejection. Clean claims can be adjudicated without manual intervention, typically resulting in faster payment. Most states have prompt payment laws requiring payers to process clean claims within 30-45 days. Clean claim rates are a key RCM metric, with best-practice targets of 95%+.',
 'A claim for office visit submitted with correct patient DOB, active insurance policy number, valid CPT code 99214, appropriate ICD-10 code Z23 linked properly, and rendering provider NPI passes all edits and is forwarded to payer for payment—this is a clean claim.',
 'Clean claims directly impact cash flow through faster payment and reduced administrative costs. Improving clean claim rates should be a primary focus of revenue cycle improvement initiatives.',
 'claims',
 ARRAY['Clean Claim Rate', 'Claim Scrubbing', 'Claim Rejection', 'Clearinghouse']),

('Clean Claim Rate',
 'Percentage of claims accepted and paid on first submission without rejection or denial.',
 'Clean claim rate (also called first pass resolution rate) measures the percentage of claims processed without errors, rejections, or denials on initial submission. It''s calculated as (claims paid on first submission ÷ total claims submitted) × 100. Industry benchmarks typically range from 85-95%, with best-in-class practices achieving 95%+. A low clean claim rate indicates problems with claim scrubbing, documentation, coding accuracy, or insurance verification. Each rejected or denied claim costs practices money in rework time and delayed payment.',
 'A practice submits 1,000 claims monthly. Of these, 920 are paid on first submission, 50 are rejected for errors (fixed and resubmitted), and 30 are initially denied but appealed successfully. The clean claim rate is 920 ÷ 1,000 = 92%.',
 'Clean claim rate is a critical RCM KPI directly impacting cash flow, Days in A/R, and staff productivity. Monitoring and improving this metric should be an ongoing priority, with root cause analysis of rejections and denials.',
 'rcm_metrics',
 ARRAY['Clean Claim', 'First Pass Resolution Rate', 'Claim Scrubbing', 'Days in A/R']),

('Clearinghouse',
 'Intermediary processing and transmitting electronic claims between providers and payers.',
 'A clearinghouse receives electronic claims from providers, performs validation and scrubbing to identify errors, formats claims to meet specific payer requirements, and transmits claims to appropriate payers. It also retrieves electronic remittance advice (835 files) and eligibility verification responses (271 files) from payers and delivers them to providers. Clearinghouses act as a single connection point, allowing providers to submit claims to multiple payers without maintaining separate connections. Services typically include claim scrubbing, error identification, batch submission, and status tracking. Most charge per-claim fees (typically $0.20-$1.00 per claim).',
 'A practice uses a clearinghouse to submit claims to 15 different insurance companies. Instead of connecting to each payer separately, they submit one 837 file to the clearinghouse daily. The clearinghouse scrubs claims, identifies errors in 8% of submissions for correction, formats claims per each payer''s requirements, and transmits to all payers.',
 'Clearinghouses significantly streamline the claims process, reduce rejections through front-end scrubbing, simplify payer connections, and provide valuable reporting on claim status and rejection reasons.',
 'claims',
 ARRAY['Electronic Data Interchange (EDI)', '837 File', 'Claim Scrubbing', 'Clean Claim Rate']),

('CMS-1500',
 'Standard paper claim form for professional services.',
 'The CMS-1500 (formerly HCFA-1500) is the standard claim form for non-institutional providers including physicians, nurse practitioners, and other ambulatory care providers. It collects patient demographics, insurance information, diagnosis codes, procedure codes, charges, and provider information in a standardized format. Although electronic submission via 837P files is now dominant, paper CMS-1500 forms are still used for some payers, corrected claims, or when electronic submission fails. The form underwent major revision in 2012 (current version 02/12) to accommodate NPI numbers and ICD-10 codes.',
 'A physician practice completes a CMS-1500 form for a patient visit including: Patient name and DOB (Box 2-3), Insurance ID (Box 1a), Diagnosis code J06.9 (Box 21), CPT 99214 (Box 24D), Charges $150 (Box 24F), Provider NPI (Box 24J).',
 'While electronic submission is preferred, understanding CMS-1500 form fields is essential for training staff, troubleshooting claim issues, and understanding how data elements map to electronic 837P files.',
 'claims',
 ARRAY['837 File', 'UB-04', 'Electronic Data Interchange (EDI)', 'Professional Claims']),

('Claim Denial',
 'A claim processed but determined not payable, requiring appeal or corrective action.',
 'A denial occurs when a claim passes initial edits and is adjudicated but payment is refused based on coverage, medical necessity, authorization, coding, or other policy reasons. Unlike rejections (which never enter the payer system), denials are processed and appear on remittance advice with denial reason codes. Denials can often be appealed with additional documentation or corrected and resubmitted. Common denial reasons include: lack of medical necessity, services not covered by plan, missing prior authorization, incorrect coding, duplicate billing, timely filing limit exceeded. Denial management is a critical RCM function.',
 'A claim for PT services is denied with reason code CO-50 "These are non-covered services." Investigation reveals the patient''s plan doesn''t cover outpatient PT. The practice must write off the charges or seek payment from the patient if ABN was signed.',
 'Denials directly impact revenue and cash flow. Effective denial management includes prevention (accurate front-end processes), prompt identification, root cause analysis, appeals when appropriate, and tracking denial trends to implement corrective actions.',
 'claims',
 ARRAY['Claim Rejection', 'Denial Management', 'Appeal Process', 'Claim Adjustment Reason Code (CARC)']),

('Claim Rejection',
 'A claim returned before processing due to data errors or missing information.',
 'Rejections occur at the clearinghouse or payer level when claims fail initial validation edits before adjudication. Common rejection reasons include: invalid insurance ID, missing NPI, invalid date format, invalid diagnosis or procedure codes, missing required modifiers. Rejected claims never enter the payer''s adjudication system and don''t count toward timely filing. They must be corrected and resubmitted. Rejections are identified quickly (usually within 24-48 hours) compared to denials. High rejection rates indicate problems with claims management processes.',
 'A claim is rejected by the clearinghouse with error "Invalid insurance identification number." The biller verifies the correct ID from the patient''s insurance card, corrects the claim, and resubmits. The corrected claim is accepted and forwarded to the payer.',
 'Reducing rejections through accurate data collection, insurance verification, and claim scrubbing is low-hanging fruit for improving cash flow and reducing administrative burden. Each rejection costs staff time to research and correct.',
 'claims',
 ARRAY['Claim Denial', 'Clean Claim', 'Claim Scrubbing', 'Clearinghouse']),

('Claim Scrubbing',
 'Automated review of claims for errors before submission to payers.',
 'Claim scrubbing uses software rules to check claims against payer-specific edits, NCCI edits, medical necessity guidelines, and general data validation before submission. Scrubbing identifies issues like: invalid code combinations, missing modifiers, inappropriate code sequences, diagnosis-to-procedure mismatches, and demographic errors. Claims that fail scrubbing are held for correction, while clean claims proceed to submission. Most practice management systems and clearinghouses offer scrubbing services. Effective scrubbing reduces rejection and denial rates, improving clean claim rates.',
 'A batch of 100 claims is scrubbed before submission. The scrubber flags 7 claims: 3 missing required modifiers for multiple procedures, 2 with diagnosis codes not supporting medical necessity for the procedure, 2 with invalid insurance ID formats. Staff corrects these issues before submission.',
 'Claim scrubbing is a critical quality control step preventing easily avoidable rejections and denials. It''s more cost-effective to catch and fix errors before submission than to handle rejections and resubmissions.',
 'claims',
 ARRAY['Clean Claim', 'Clean Claim Rate', 'Clearinghouse', 'NCCI Edits']),

('Crossover Claim',
 'A claim automatically transferred from Medicare to secondary insurance.',
 'When a patient has Medicare as primary insurance and another insurance as secondary (common with Medicare Supplement plans, Medicaid, or employer retiree coverage), Medicare automatically forwards the processed claim to the secondary insurer electronically. This is called a crossover claim. The provider doesn''t need to manually submit to the secondary payer. The secondary payer receives Medicare''s adjudication information and processes remaining patient responsibility according to their coverage. Not all secondary insurers participate in Medicare''s crossover program; non-participating payers require manual claim submission.',
 'A patient has Medicare primary and a Medigap supplemental plan secondary. After an office visit, the practice bills Medicare which pays 80% of allowed charges. Medicare electronically crosses the claim to the Medigap plan which automatically pays the remaining 20% without provider intervention.',
 'Understanding crossover claims prevents duplicate billing, reduces administrative work, ensures proper claim sequencing, and speeds secondary payment. Practices must identify which secondary payers participate in crossover to know when manual billing is needed.',
 'claims',
 ARRAY['Medicare Secondary Payer (MSP)', 'Coordination of Benefits (COB)', 'Medicare', 'Secondary Insurance']),

('Electronic Data Interchange (EDI)',
 'Computer-to-computer exchange of business documents in standardized electronic format.',
 'EDI in healthcare involves electronic exchange of administrative transactions between providers, payers, and other healthcare entities using ANSI X12 standards. Common EDI transactions include: 837 (claim submission), 835 (remittance advice), 270/271 (eligibility inquiry/response), 276/277 (claim status inquiry/response), 278 (prior authorization), 834 (enrollment). EDI replaces manual processes like paper claims, phone calls for eligibility, and mail correspondence. HIPAA requires most providers to submit claims electronically using EDI standards. EDI improves efficiency, accuracy, and speed of administrative processes.',
 'Instead of mailing paper claims and making phone calls to verify eligibility, a practice uses EDI: Sends 270 files to check patient eligibility (receives 271 responses instantly), submits 837P claims electronically, receives 835 payment files for automated posting, and sends 276 files to check claim status.',
 'EDI is foundational to modern healthcare administration, enabling automated workflows, reducing administrative costs, speeding payment, improving accuracy, and meeting HIPAA requirements. Understanding EDI transactions is essential for revenue cycle management.',
 'technology',
 ARRAY['837 File', '835 File', 'X12', 'HIPAA', 'Clearinghouse']),

('Electronic Remittance Advice (ERA)',
 'Electronic version of EOB sent to providers showing payment details.',
 'ERA is the 835 EDI transaction showing how claims were adjudicated, including payments, denials, adjustments, and patient responsibility. ERAs can be automatically imported into practice management systems for payment posting, eliminating manual data entry from paper EOPs. ERAs include detailed service-line information with procedure codes, charges, allowed amounts, payments, adjustments with reason codes, and patient responsibility. Most payers offer ERA enrollment, often with requirements for EFT (Electronic Funds Transfer) for coordinated payment and remittance.',
 'A practice receives an ERA file for 45 claims totaling $12,500 in payments. Their PM system automatically posts payments to patient accounts using the detailed ERA information, saving 3 hours of manual posting time and reducing posting errors.',
 'ERA adoption significantly improves revenue cycle efficiency by automating payment posting, reducing errors, speeding reconciliation, and providing electronic documentation. Practices not using ERA lose significant efficiency opportunities.',
 'claims',
 ARRAY['835 File', 'Remittance Advice', 'Payment Posting', 'Electronic Funds Transfer (EFT)']),

('Medical Necessity',
 'Healthcare services appropriate for diagnosis and treatment according to accepted standards.',
 'Medical necessity means services are: (1) appropriate for symptoms, diagnosis, or treatment, (2) consistent with generally accepted standards of medical practice, (3) not primarily for convenience, (4) the most appropriate level of service that can safely be provided. Payers deny claims lacking medical necessity even if the service was provided. Documentation must support medical necessity by showing why the service was needed and appropriate. Different payers have local and national coverage determinations defining medical necessity for specific services. Medical necessity is a leading cause of claim denials.',
 'A patient requests an MRI for headache that started yesterday without neurological symptoms. The insurance denies as not medically necessary, requiring first-line treatments (medication, conservative care) before expensive imaging. If conservative treatment fails, MRI would then be medically necessary.',
 'Understanding medical necessity is critical for claim approval, requires thorough documentation supporting the service, impacts clinical decision-making and testing orders, and affects prior authorization requirements. Practices should educate providers on payer-specific medical necessity criteria.',
 'coding',
 ARRAY['Prior Authorization (PA)', 'Local Coverage Determination (LCD)', 'National Coverage Determination (NCD)', 'Claim Denial']),

('Modifier',
 'Two-character code providing additional information about services performed.',
 'Modifiers are added to CPT codes to indicate services were altered in some way without changing the basic code definition. They provide information about: who performed service, where performed, whether bilateral, if multiple procedures, if service reduced, if unrelated to another service during global period. Proper modifier use prevents denials, ensures correct payment, clarifies distinct services, and complies with payer policies. Incorrect or missing modifiers are common rejection and denial reasons. There are CPT modifiers (22-99), HCPCS modifiers (mostly letters), and some payer-specific modifiers.',
 'Two surgeons co-perform a complex spinal surgery, each performing distinct portions. Surgeon A bills code 22630-62, Surgeon B bills 22630-62. Modifier 62 indicates "two surgeons" allowing each to be paid for their distinct work.',
 'Proper modifier use is essential for correct reimbursement, preventing denials, clarifying services to payers, and maintaining compliance. Common modifiers (25, 59, 51, 76, 77) are frequently needed and often misunderstood, requiring ongoing education.',
 'coding',
 ARRAY['Modifier 25', 'Modifier 59', 'Modifier 51', 'CPT Code']),

('Modifier 25',
 'Indicates significant, separately identifiable E/M service on same day as procedure.',
 'Modifier 25 is appended to E/M codes when a procedure is performed the same day and the E/M service is above and beyond the usual pre- and post-procedure work. The E/M must be significant and separately identifiable, with documentation supporting both services. Common uses include: office visit for acute problem with minor procedure, separate problem addressed beyond procedure-related care. The diagnosis for the E/M and procedure may be same or different. Modifier 25 is one of the most frequently used and audited modifiers. Documentation must clearly show the separate E/M service.',
 'Patient presents for suture removal (procedure). During visit, also discusses new chest pain requiring examination, testing orders, and treatment plan (significant separate E/M). Bill: 99213-25 (E/M for chest pain) and removal code without modifier. Without modifier 25, the E/M would be bundled and denied.',
 'Modifier 25 allows appropriate payment for all services provided but requires excellent documentation. It''s heavily audited due to past abuse. Understanding proper use prevents denials while ensuring compliant claims for legitimate separate services.',
 'coding',
 ARRAY['Modifier', 'Evaluation and Management (E/M)', 'NCCI Edits', 'Bundling']),

('Modifier 59',
 'Indicates distinct procedural service not normally reported together.',
 'Modifier 59 (Distinct Procedural Service) indicates procedures performed together are independent and not typically performed at same session. It overrides NCCI edits that would otherwise bundle codes. Modifier 59 should be used only when no other modifier describes the situation and only when services are: different session, different procedure/surgery, different site/organ, separate incision, separate lesion, or separate injury. CMS created more specific X-modifiers (XE, XS, XP, XU) to replace modifier 59 when possible, as 59 was often misused. Documentation must clearly support distinct services.',
 'During one surgery session, a surgeon removes two distinct lesions from different anatomic sites: one from left arm, one from right leg. The second lesion removal is billed with modifier 59 to indicate it''s a separate lesion at a distinct site, not part of the first removal.',
 'Modifier 59 is critical for unbundling appropriately distinct services but is highly scrutinized due to historical overuse. Proper understanding and documentation are essential to receive appropriate payment while maintaining compliance.',
 'coding',
 ARRAY['Modifier', 'NCCI Edits', 'Bundling', 'Unbundling', 'X-Modifiers (XE, XS, XP, XU)']),

('National Correct Coding Initiative (NCCI)',
 'CMS edits preventing improper payment for incorrectly coded services.',
 'NCCI, also called CCI edits, consists of procedure-to-procedure (PTP) edits and medically unlikely edits (MUE) preventing improper coding combinations. PTP edits identify code pairs that shouldn''t be billed together because one is included in the other or they''re mutually exclusive. Column 1 is the comprehensive code; Column 2 is the component code that shouldn''t be separately reported. Some edits have modifier indicators allowing appropriate modifiers to bypass the edit. MUEs set maximum units of service for a code on a single date. NCCI applies to Medicare but many commercial payers also use these edits.',
 'NCCI edit exists pairing established patient office visit (99213) with same-day EKG interpretation (93000). Without modifier, the EKG would be denied as included in the E/M. Modifier 25 on the E/M bypasses the edit if the E/M was significant and separate.',
 'Understanding NCCI edits prevents denials, guides proper coding and modifier use, ensures compliant billing practices, and helps with accurate claim scrubbing before submission.',
 'coding',
 ARRAY['Bundling', 'Modifier 59', 'Modifier 25', 'Medically Unlikely Edits (MUE)']),

('CPT Code',
 'Current Procedural Terminology code describing medical services and procedures.',
 'CPT is a standardized coding system maintained by the American Medical Association describing services performed by healthcare providers. There are three categories: Category I codes (main 5-digit codes for established procedures), Category II (supplemental tracking codes for quality measures), Category III (temporary codes for emerging technologies). CPT codes cover E/M services, surgery, radiology, pathology/laboratory, and medicine services. Proper code selection requires understanding code definitions, reading operative reports or procedure notes, and following coding guidelines. CPT is updated annually with new, revised, and deleted codes.',
 'Office visit for established patient with moderate complexity is coded 99214. This CPT code describes: established patient, office visit, 30-39 minutes or moderate medical decision making. The code communicates to payers exactly what service was provided.',
 'Accurate CPT coding is fundamental to getting paid correctly. Under-coding loses revenue; over-coding risks compliance issues. CPT coding requires ongoing education on annual updates, payer-specific guidelines, and documentation requirements.',
 'coding',
 ARRAY['ICD-10 Code', 'HCPCS Code', 'Evaluation and Management (E/M)', 'Medical Coding']),

('ICD-10 Code',
 'International Classification of Diseases code describing diagnoses and conditions.',
 'ICD-10-CM (Clinical Modification) is the diagnosis coding system used in the U.S., replacing ICD-9 in 2015. Codes are alphanumeric, 3-7 characters, describing diseases, injuries, symptoms, and factors influencing health. ICD-10 provides much greater specificity than ICD-9, including laterality (left/right), encounter type (initial, subsequent, sequela), and detailed condition descriptors. Accurate diagnosis coding supports medical necessity, affects risk adjustment, impacts quality reporting, and determines appropriate payment levels. Code sequencing follows guidelines with principal/primary diagnosis listed first.',
 'Patient with Type 2 diabetes with diabetic retinopathy of left eye is coded E11.329 (Type 2 diabetes with mild nonproliferative diabetic retinopathy without macular edema, unspecified eye). ICD-10 specificity requires identifying diabetes type, complication, severity, and laterality.',
 'ICD-10 coding accuracy directly impacts claim approval, payment amounts (especially in risk-adjusted models), quality reporting, and compliance. Incomplete or inaccurate diagnosis coding leads to denials, underpayment, and potential audit issues.',
 'coding',
 ARRAY['CPT Code', 'Medical Necessity', 'Diagnosis Code', 'Clinical Documentation Improvement (CDI)']),

('Place of Service (POS)',
 'Two-digit code identifying the location where services were provided.',
 'POS codes indicate where services occurred, affecting payment rates and coverage. Common codes include: 11 (office), 12 (home), 21 (inpatient hospital), 22 (outpatient hospital), 23 (emergency department), 24 (ambulatory surgical center), 31 (skilled nursing facility), 02 (telehealth). Payment rates often vary by location—for example, Medicare pays less for services in facility settings (hospital outpatient) than non-facility settings (office) because facility overhead costs are covered in the facility fee. Incorrect POS codes can result in claim denials or incorrect payment.',
 'A physician sees a patient in the hospital. Services are billed with POS code 21 (inpatient hospital). Medicare applies the facility fee schedule (lower rate) because the hospital is paid separately for facility costs. The same service in the office (POS 11) would have higher physician payment.',
 'Correct POS codes ensure appropriate payment levels, prevent denials, determine applicable fee schedules, and support accurate claims. Changing POS to obtain higher payment when services weren''t provided in that location is fraudulent.',
 'coding',
 ARRAY['CPT Code', 'Fee Schedule', 'Facility Fee', 'Provider-Based Billing'])

ON CONFLICT (term) DO NOTHING;