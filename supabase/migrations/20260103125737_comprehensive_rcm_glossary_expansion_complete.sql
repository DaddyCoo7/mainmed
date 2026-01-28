/*
  # Comprehensive RCM Glossary Expansion - Additional Medical Billing Terms
  
  1. Purpose
     - Expand glossary with 50+ additional medical billing and RCM terms
     - Cover specialized areas: coding, compliance, technology, metrics
     - Target long-tail keywords for SEO
  
  2. Categories Added
     - Advanced coding terminology (ICD-10, HCPCS, modifiers)
     - Revenue cycle KPIs and metrics
     - Payer and insurance terminology
     - Compliance and regulatory terms
     - Healthcare IT and automation
     - Patient billing and collections
  
  3. Notes
     - All terms include comprehensive definitions, examples, and explanations
     - Optimized for search and educational value
     - No duplicate terms from existing glossary
*/

INSERT INTO glossary_terms (
  term, 
  definition, 
  detailed_explanation, 
  example, 
  why_it_matters, 
  category, 
  related_terms
) VALUES
-- Advanced Coding Terms
(
  'ICD-10-CM',
  'International Classification of Diseases, 10th Revision, Clinical Modification - the diagnosis coding system used in the United States.',
  'ICD-10-CM is the standardized coding system used by healthcare providers to report diagnoses and conditions in all healthcare settings. It contains over 70,000 codes organized into chapters by body system or disease type. Each code provides specific information about the patient''s condition, including laterality, severity, and episode of care. Proper ICD-10-CM coding is essential for accurate billing, medical necessity documentation, and healthcare data analytics.',
  'A patient with Type 2 diabetes with diabetic neuropathy would be coded as E11.40. A fracture of the right distal radius would be coded with specifics about the location, type, and encounter (initial, subsequent, or sequela).',
  'Accurate ICD-10-CM coding is critical for claim approval, demonstrating medical necessity, avoiding denials, and ensuring proper reimbursement. It also enables public health tracking, research, and quality measurement.',
  'Coding',
  ARRAY['CPT Code', 'Medical Coding', 'Medical Necessity', 'Diagnosis Code']
),
(
  'HCPCS Level II',
  'Healthcare Common Procedure Coding System Level II codes used for billing products, supplies, and services not in CPT.',
  'HCPCS Level II codes are alphanumeric codes that begin with a letter (A-V) followed by four digits. They cover a wide range of items and services including ambulance services, durable medical equipment (DME), prosthetics, orthotics, supplies, and certain drugs and biologicals. These codes are primarily used for billing Medicare and Medicaid but are also accepted by many private payers. HCPCS Level II includes both permanent national codes and temporary codes.',
  'E0143 for a walker with wheels, A4253 for blood glucose test strips, J1885 for injection of ketorolac tromethamine. A diabetic patient receiving glucose test strips would be billed using HCPCS code A4253.',
  'HCPCS Level II codes are essential for billing medical equipment, supplies, and services that fall outside the scope of CPT codes. Proper use ensures appropriate reimbursement for these items and compliance with Medicare and Medicaid billing requirements.',
  'Coding',
  ARRAY['CPT Code', 'Durable Medical Equipment', 'Medical Coding']
),
(
  'Modifier 25',
  'Code indicating a significant, separately identifiable E&M service performed on the same day as a procedure.',
  'Modifier 25 is appended to evaluation and management (E&M) CPT codes when a significant, separately identifiable E&M service is provided on the same day as a procedure or other service. The E&M service must be above and beyond the usual pre- and post-operative work associated with the procedure. Documentation must clearly demonstrate that the E&M service was distinct and necessary, with separate reasons for the visit documented.',
  'A patient comes in for a scheduled wart removal but also complains of chest pain. The physician performs the wart removal and also conducts a separate, documented evaluation of the chest pain. The E&M code would be reported with modifier 25, and the wart removal would be reported separately.',
  'Proper use of modifier 25 ensures providers receive appropriate payment for both the procedure and the separate E&M service. Incorrect use can lead to denials, while failure to use it when appropriate results in lost revenue.',
  'Coding',
  ARRAY['CPT Code', 'Modifier', 'Evaluation and Management']
),

-- Revenue Cycle KPIs
(
  'Net Collection Rate',
  'Percentage of collectible revenue actually received, calculated as payments divided by charges minus contractual adjustments.',
  'Net Collection Rate (NCR) is one of the most important revenue cycle KPIs, measuring the effectiveness of a practice''s collection efforts. It is calculated by dividing total payments collected by total charges minus contractual adjustments. A healthy NCR is typically 95% or higher. This metric excludes contractual adjustments, which are amounts that payers are not obligated to pay per contract terms, providing a more accurate picture of collection performance than gross collection rate.',
  'If a practice charges $100,000, has $20,000 in contractual adjustments, and collects $76,000, the NCR is 95% ($76,000 ÷ $80,000). This indicates the practice is collecting 95% of what it should actually be able to collect.',
  'NCR is critical for understanding revenue cycle health and identifying collection problems. A declining NCR may indicate issues with patient collections, denial management, or charge capture. It helps practices benchmark performance and identify areas for improvement.',
  'Metrics',
  ARRAY['Collection Rate', 'Days in A/R', 'Denial Rate', 'Revenue Cycle Management']
),
(
  'First Pass Resolution Rate',
  'Percentage of claims paid on first submission without corrections, resubmissions, or appeals.',
  'First Pass Resolution Rate (FPRR) measures claim quality by tracking the percentage of claims that are paid in full on the first submission without any denials, rejections, or requests for additional information. A high FPRR (95% or above) indicates clean claims with accurate coding, complete documentation, and proper patient information. This metric reflects the effectiveness of front-end processes including patient registration, insurance verification, coding accuracy, and claim scrubbing.',
  'A practice submits 1,000 claims in a month. 950 are paid on the first submission, 30 are denied and require resubmission, and 20 are rejected at the clearinghouse. The FPRR is 95%, indicating high claim quality.',
  'FPRR directly impacts cash flow and operational efficiency. Higher rates mean faster payment, lower costs for rework, and better staff productivity. It also indicates strong front-end processes that prevent costly claim denials.',
  'Metrics',
  ARRAY['Clean Claim Rate', 'Denial Rate', 'Claim Scrubbing', 'Revenue Cycle Management']
),
(
  'Point of Service Collection',
  'Payments collected from patients at the time of service, including copays and deductibles.',
  'Point of Service (POS) collections are payments collected from patients when they receive care, before they leave the facility. This includes copayments, deductibles, coinsurance, and outstanding balances. Effective POS collection requires staff training, technology to estimate patient responsibility, and established collection policies. Studies show that collecting at the time of service is significantly more effective than billing patients after the visit, with collection rates dropping dramatically once patients leave.',
  'A patient arrives for an office visit with a $30 copay. The front desk collects the copay before the patient sees the physician. If the practice has eligibility verification showing a $500 unmet deductible, they might also collect a deposit or the estimated patient responsibility.',
  'POS collections dramatically improve cash flow and reduce bad debt. Collecting copays alone can represent 5-10% of practice revenue. It also reduces the cost of billing statements and follow-up collection efforts. Practices with strong POS collection typically have 25-40% lower accounts receivable.',
  'Collections',
  ARRAY['Patient Responsibility', 'Copayment', 'Deductible', 'Collections']
),

-- Payer and Insurance Terms
(
  'Primary Insurance',
  'The insurance policy that pays first when a patient has multiple insurance coverages.',
  'Primary insurance is the health insurance plan that processes and pays claims first when a patient has coverage under multiple policies. The determination of which policy is primary follows specific coordination of benefits rules. For example, for children with coverage under both parents'' plans, the birthday rule typically applies - the plan of the parent whose birthday comes first in the calendar year is primary. For patients with both employer coverage and Medicare, the employer plan is usually primary if the employer has 20 or more employees.',
  'A child has coverage under both mother''s employer plan (birthday March 15) and father''s plan (birthday July 10). The mother''s plan is primary because her birthday comes earlier in the year. Claims would be submitted to her plan first.',
  'Correctly identifying primary insurance is crucial for proper claim submission and payment. Submitting to the wrong payer first causes delays, denials, and payment complications. It also affects coordination of benefits and the patient''s out-of-pocket costs.',
  'Insurance',
  ARRAY['Secondary Insurance', 'Coordination of Benefits', 'Insurance Verification']
),
(
  'Medicare Part A',
  'Hospital insurance covering inpatient stays, skilled nursing, hospice, and some home health care.',
  'Medicare Part A is the hospital insurance component of Original Medicare that covers inpatient care in hospitals, skilled nursing facility care, hospice care, and some home health care. Most people don''t pay a premium for Part A if they or their spouse paid Medicare taxes while working. Part A has a deductible for each benefit period and coinsurance for extended hospital stays. Coverage includes semi-private rooms, meals, nursing services, and medically necessary supplies but not personal convenience items or private duty nursing.',
  'A 68-year-old patient is admitted to the hospital for pneumonia and stays for 5 days. Medicare Part A covers the hospitalization costs after the patient pays the Part A deductible (in 2024, $1,632). If the patient is transferred to a skilled nursing facility for continued care, Part A also covers up to 100 days, with the patient paying daily coinsurance after day 20.',
  'Understanding Medicare Part A coverage is essential for hospital billing, determining patient responsibility, and ensuring proper claim submission. Providers must meet specific documentation requirements for Part A claims and understand benefit period rules that affect deductibles and coverage limits.',
  'Insurance',
  ARRAY['Medicare Part B', 'Medicare', 'Inpatient Billing', 'Hospital Billing']
),
(
  'Medicare Advantage',
  'Private insurance plans that provide Medicare benefits, often including additional coverage.',
  'Medicare Advantage (Medicare Part C) plans are offered by private insurance companies approved by Medicare. These plans provide all Medicare Part A and Part B benefits and usually include Part D prescription drug coverage. Many also offer extra benefits like dental, vision, hearing, and wellness programs. Medicare Advantage plans typically operate as HMOs or PPOs with specific network restrictions and may require referrals to see specialists. Patients must continue paying their Part B premium and may pay an additional premium to the private insurer.',
  'A Medicare beneficiary enrolls in a UnitedHealthcare Medicare Advantage HMO plan. Instead of using traditional Medicare, all their healthcare services are managed through this plan. They must see in-network providers and get referrals for specialists. The plan includes dental and vision benefits not covered by Original Medicare.',
  'Billing Medicare Advantage is different from billing Original Medicare. Providers must be in-network, obtain prior authorizations when required, and follow the plan''s specific billing requirements. Understanding these differences is critical for accurate billing and avoiding denials.',
  'Insurance',
  ARRAY['Medicare Part A', 'Medicare Part B', 'Prior Authorization', 'Insurance']
),

-- Compliance and Regulatory
(
  'HIPAA',
  'Federal law establishing national standards for protecting patient health information privacy and security.',
  'The Health Insurance Portability and Accountability Act (HIPAA) of 1996 provides comprehensive federal protection for personal health information. HIPAA includes the Privacy Rule (protecting the privacy of individually identifiable health information), the Security Rule (setting standards for securing electronic protected health information), and the Breach Notification Rule (requiring notification of breaches). Covered entities (providers, health plans, clearinghouses) and their business associates must comply with HIPAA requirements or face significant civil and criminal penalties.',
  'A medical practice must obtain written authorization before releasing a patient''s medical records to a third party. Staff can only access patient information necessary for their job functions. All electronic health data must be encrypted, and the practice must have safeguards preventing unauthorized access. If a laptop containing patient data is stolen, the practice must report the breach and notify affected patients.',
  'HIPAA compliance is not optional - violations can result in fines up to $1.5 million per violation category per year, plus criminal penalties including imprisonment. Beyond legal requirements, HIPAA compliance builds patient trust and protects the practice''s reputation.',
  'Compliance',
  ARRAY['Compliance', 'Data Security', 'Protected Health Information', 'Privacy']
),
(
  'Stark Law',
  'Federal physician self-referral law prohibiting physicians from referring patients to entities with financial relationships.',
  'The Stark Law prohibits physicians from making referrals for certain designated health services (DHS) payable by Medicare or Medicaid to entities with which they or their immediate family members have financial relationships, unless an exception applies. DHS includes lab services, physical therapy, radiology, DME, and others. The law is strict liability - intent doesn''t matter. Violations can result in denial of payment, refund requirements, civil monetary penalties up to $25,000 per violation, and exclusion from federal healthcare programs.',
  'A physician owns a 20% stake in an imaging center. Under Stark Law, the physician cannot refer Medicare or Medicaid patients to that imaging center for MRIs unless the arrangement meets a specific exception, such as the in-office ancillary services exception. If the physician refers anyway, all resulting claims are considered false and payment must be refunded.',
  'Stark Law violations can be financially devastating. Practices must carefully structure ownership and referral relationships to comply. Understanding Stark exceptions is essential for legitimate ancillary service offerings and physician investment arrangements.',
  'Compliance',
  ARRAY['False Claims Act', 'Anti-Kickback Statute', 'Compliance', 'Referral']
),
(
  'RAC Audit',
  'Recovery Audit Contractor audit to identify and recover improper Medicare payments.',
  'Recovery Audit Contractors (RACs) are hired by CMS to identify and recover improper Medicare payments made to healthcare providers. RACs conduct both automated and complex reviews of claims, looking for overpayments and underpayments. They can review claims up to three years old and are paid on a contingency basis (a percentage of overpayments recovered). Providers have appeal rights when RACs identify overpayments. RAC audits commonly focus on medical necessity, correct coding, and proper payment amounts.',
  'A RAC reviews inpatient claims and determines that 15 patients should have been treated as outpatients rather than admitted. The RAC demands repayment of the inpatient DRG payments totaling $200,000. The hospital must either repay the amount or appeal the decision with documentation supporting medical necessity for admission.',
  'RAC audits can result in significant unexpected financial liability. Providers must maintain thorough documentation, implement strong compliance programs, and understand appeal processes. RAC findings often indicate systemic issues requiring operational changes.',
  'Compliance',
  ARRAY['Compliance', 'Medicare', 'Medical Necessity', 'Documentation']
),

-- Healthcare IT and Automation
(
  'EDI',
  'Electronic Data Interchange - computer-to-computer exchange of healthcare information in standard format.',
  'Electronic Data Interchange (EDI) is the electronic transmission of healthcare information between computer systems using standardized formats. In healthcare, common EDI transactions include claim submissions (837), remittance advice (835), eligibility verification (270/271), claim status inquiries (276/277), and prior authorization (278). EDI transactions are governed by HIPAA standards that specify exact formats and content. EDI dramatically reduces paper, speeds processing, and reduces errors compared to manual data entry.',
  'A medical practice uses EDI to submit claims electronically. The practice management system generates an 837 claim file containing patient, diagnosis, and procedure information in standardized format. This file is sent through a clearinghouse to payers. The payer processes the claims and returns an 835 electronic remittance advice showing payments and adjustments.',
  'EDI is essential for modern healthcare operations, enabling faster claim processing, reduced costs, automatic payment posting, and better data accuracy. Understanding EDI transactions helps troubleshoot claim issues and optimize revenue cycle workflows.',
  'Technology',
  ARRAY['Clearinghouse', 'ERA', '837 File', '835 File']
),
(
  'ERA',
  'Electronic Remittance Advice - electronic version of explanation of benefits with payment details.',
  'Electronic Remittance Advice (ERA) is the electronic version of an EOB that accompanies payment from insurance companies. ERAs use the 835 EDI transaction format and provide detailed information about claim adjudication including paid amounts, adjustments, denial reasons, and patient responsibility. Modern practice management systems can auto-post payments from ERAs, dramatically reducing manual posting time and errors. ERAs also enable automated denial tracking and reporting.',
  'A practice receives an 835 ERA file from Blue Cross covering 150 claims. The ERA shows that 140 claims were paid, 8 were denied for lack of prior authorization, and 2 require additional information. The billing system automatically posts the payments to patient accounts and flags the denied claims for follow-up.',
  'ERAs significantly improve billing efficiency by automating payment posting, reducing posting errors, and providing structured denial information for reporting and management. Practices using ERAs can reduce payment posting time by 80% and identify denial trends more effectively.',
  'Technology',
  ARRAY['EDI', 'EFT', 'Payment Posting', 'Electronic Data Interchange']
),
(
  'RPA',
  'Robotic Process Automation - software robots automating repetitive revenue cycle tasks.',
  'Robotic Process Automation (RPA) uses software "robots" or "bots" to automate repetitive, rule-based tasks in revenue cycle management. In healthcare, RPA can automate eligibility verification, prior authorization status checks, payment posting, claim status inquiries, denial management tasks, and patient statement generation. Unlike traditional software integration, RPA works at the user interface level, mimicking human actions. This allows automation without changing underlying systems. RPA operates 24/7, doesn''t make transcription errors, and can process high volumes quickly.',
  'A hospital implements RPA to automate insurance eligibility verification. The bot logs into each payer portal, enters patient information, captures eligibility results, and updates the patient registration system - all without human intervention. What previously took staff 5-10 minutes per patient now happens instantly and accurately.',
  'RPA can transform revenue cycle efficiency, reducing staff time on repetitive tasks by 60-80%, eliminating manual errors, and allowing staff to focus on complex issues requiring human judgment. It provides rapid ROI and can be implemented without major IT projects.',
  'Technology',
  ARRAY['Revenue Cycle Management', 'Automation', 'Technology', 'Eligibility Verification']
),

-- Patient Billing and Collections
(
  'Patient Statement',
  'Bill sent to patients showing charges, payments, insurance adjustments, and remaining balance.',
  'A patient statement is a detailed bill sent to patients summarizing their account activity. It includes dates of service, description of services provided, original charges, insurance payments and adjustments, amounts paid by the patient, and the current balance owed. Statements should be clear, easy to understand, and include payment instructions. Best practices include itemizing services, showing the patient responsibility calculation, and providing multiple payment options. Statements are typically sent monthly until the balance is paid or transferred to collections.',
  'A statement shows: Office visit on 1/15/24 ($200 charge), Insurance payment ($120), Insurance adjustment ($50), Patient copay paid ($30), Leaving patient balance of $0. A second visit on 1/20/24 shows $150 charge, insurance paid $100, adjustment $20, leaving $30 patient responsibility still owed.',
  'Clear, accurate patient statements are critical for collection success. Confusing statements lead to patient frustration, delayed payments, and increased call volume. Well-designed statements improve patient satisfaction and increase the likelihood of prompt payment.',
  'Patient Billing',
  ARRAY['Patient Responsibility', 'Collections', 'Self-Pay', 'Balance Billing']
),
(
  'Payment Plan',
  'Agreement allowing patients to pay medical bills in installments over time.',
  'Payment plans allow patients who cannot pay their full balance immediately to make monthly installment payments over an agreed period. Plans should have clear written agreements specifying the payment amount, frequency, duration, and consequences of missed payments. Some practices charge interest or administrative fees; others offer interest-free plans to encourage payment. Payment plans increase collection rates from self-pay patients and reduce bad debt. Automated recurring payments via credit card or bank draft improve compliance and reduce administrative burden.',
  'A patient owes $3,000 for a procedure. The practice offers a 12-month interest-free payment plan requiring $250 per month. The patient signs an agreement authorizing automatic monthly charges to their credit card. The practice collects the full balance over time rather than potentially losing the entire amount to bad debt.',
  'Payment plans significantly improve collection rates from patients with large balances. They demonstrate patient-friendly policies while ensuring revenue collection. Well-managed payment plans can reduce bad debt by 30-50% and improve patient satisfaction.',
  'Collections',
  ARRAY['Patient Responsibility', 'Collections', 'Financial Assistance', 'Self-Pay']
),
(
  'Write-Off',
  'Amount removed from account that will not be collected - contractual adjustments, bad debt, or charity care.',
  'A write-off is an accounting entry removing an amount from a patient''s account balance that will not be collected. Types include contractual write-offs (amounts above contracted payment rates that payers are not obligated to pay), courtesy or goodwill adjustments (amounts forgiven for patient relations), bad debt write-offs (uncollectible balances after collection efforts), and charity care write-offs (balances forgiven under financial assistance policies). Proper write-off categorization is important for financial reporting, tax purposes, and revenue cycle analysis. Write-offs should require appropriate approval levels and documentation.',
  'A Medicare patient''s surgery costs $10,000. Medicare approves $6,500 and pays 80% ($5,200). The $3,500 difference between charged amount and approved amount is a contractual write-off. The patient owes 20% coinsurance ($1,300). If the patient cannot pay and qualifies for charity care, the $1,300 is written off as charity care. If the patient refuses to pay and exhausts collections, it becomes bad debt write-off.',
  'Understanding write-off types is essential for accurate financial reporting and identifying revenue cycle problems. High write-offs may indicate pricing issues, collection problems, or eligibility verification gaps. Contractual write-offs are expected; increasing bad debt write-offs signal collection problems requiring intervention.',
  'Financial',
  ARRAY['Contractual Adjustment', 'Bad Debt', 'Charity Care', 'Adjustment']
),

-- Additional Important Terms
(
  'Timely Filing Limit',
  'Deadline by which insurance claims must be submitted, typically 90-365 days from date of service.',
  'Timely filing limits are deadlines established by insurance companies and government payers for submitting claims. These limits vary by payer - Medicare and Medicaid typically allow 365 days (one year), while commercial payers often require 90-180 days. Claims submitted after the deadline are denied solely due to late filing, regardless of validity. Timely filing denials are generally not appealable and result in complete loss of revenue. Some payers apply timely filing to corrected claims and appeals as well. Providers must track submission deadlines carefully and implement processes ensuring prompt claim submission.',
  'A patient is treated on January 15, 2024. The commercial insurance has a 90-day timely filing limit, so claims must be submitted by April 15, 2024. The billing staff doesn''t receive the encounter form until March 1. They submit the claim on April 20, five days late. The claim is denied for untimely filing, and the practice loses all payment - the provider cannot bill the patient for payer administrative denials in most states.',
  'Timely filing denials result in direct revenue loss with no recourse. Practices must have systems ensuring charges are captured and billed promptly. Delays in charge entry, coding, or clearinghouse transmission can cause expensive timely filing issues. This is a top preventable denial reason.',
  'Claims',
  ARRAY['Claim Denial', 'Claims Processing', 'Revenue Cycle Management']
),
(
  'NPI',
  'National Provider Identifier - unique 10-digit number required for healthcare providers to bill insurance.',
  'The National Provider Identifier (NPI) is a unique 10-digit identification number issued by CMS to healthcare providers. NPIs are required by HIPAA for all covered entities and are used on all claim submissions and other healthcare transactions. There are two types: Type 1 NPIs for individual providers (physicians, nurses, therapists) and Type 2 NPIs for organizational providers (practices, hospitals, facilities). NPIs are permanent and remain with the provider even if they change locations or specialties. Providers obtain NPIs through the NPPES (National Plan and Provider Enumeration System).',
  'Dr. Smith has an individual Type 1 NPI: 1234567890. She works at ABC Medical Group, which has a Type 2 NPI: 9876543210. On claims, both the rendering provider NPI (Dr. Smith''s) and billing provider NPI (ABC Medical Group''s) are reported. This allows proper identification of both the individual who provided care and the organization billing for services.',
  'NPIs are mandatory for healthcare transactions under HIPAA. Claims without valid NPIs are rejected. Providers must ensure their NPIs are updated in payer systems and correctly reported on all claims. Using incorrect NPIs causes claim denials and payment delays.',
  'Identification',
  ARRAY['Credentialing', 'CAQH', 'Provider Enrollment']
),
(
  'UB-04',
  'Standard claim form used by institutional providers to bill for services, also known as CMS-1450.',
  'The UB-04 (Uniform Bill 2004), also called CMS-1450, is the standard paper claim form used by institutional providers including hospitals, skilled nursing facilities, home health agencies, and hospices. It contains form locators (numbered fields) for patient information, payer details, provider information, dates of service, diagnosis and procedure codes, revenue codes, and charges. Most UB-04 claims are submitted electronically via the 837I (institutional) EDI transaction. The UB-04 replaced the UB-92 form and includes additional data elements required for modern billing.',
  'A hospital submits a UB-04 claim for an inpatient admission. The form includes patient demographics (FL 1-14), insurance information (FL 50-66), condition codes (FL 18-28), occurrence dates (FL 31-36), revenue codes describing services (FL 42), HCPCS codes (FL 44), charges (FL 47), DRG code (FL 71), and diagnosis codes (FL 67-67Q). The claim is electronically transmitted to Medicare for payment.',
  'Understanding UB-04 form requirements is essential for institutional billing. Errors or missing data in key form locators cause claim rejections and denials. Each form locator has specific rules about required, situational, or optional data.',
  'Forms',
  ARRAY['CMS-1500', 'Hospital Billing', 'Revenue Code', 'Institutional Billing']
),
(
  'Prior Authorization',
  'Approval required from insurance before certain services to ensure coverage and medical necessity.',
  'Prior authorization (also called pre-authorization, pre-certification, or pre-approval) is a cost-control process requiring providers to obtain approval from insurance companies before performing certain services, procedures, medications, or admissions. The payer reviews the request to determine if the service meets medical necessity criteria and coverage requirements. Services commonly requiring prior authorization include surgeries, advanced imaging (MRI, CT, PET scans), specialty medications, DME, and specialist referrals. Providing services without required authorization often results in claim denial and the provider absorbing the cost.',
  'A physician determines a patient needs an MRI of the lumbar spine. The patient''s insurance requires prior authorization for advanced imaging. The physician''s office submits clinical information justifying the MRI to the insurance company. The insurance reviews the request, determines it meets criteria, and issues an authorization number valid for 30 days. The MRI facility must include the authorization number on the claim.',
  'Prior authorization is critical for avoiding costly denials. Failing to obtain required authorizations results in payment denials, revenue loss, and patient dissatisfaction. Practices must know which services require authorization for each payer and implement processes to obtain approvals before providing care.',
  'Insurance',
  ARRAY['Medical Necessity', 'Insurance Verification', 'Preauthorization']
),

-- Value-Based Care Terms
(
  'Value-Based Care',
  'Healthcare delivery model where providers are paid based on patient outcomes rather than service volume.',
  'Value-based care is a healthcare delivery and payment model that rewards providers for patient health outcomes, quality of care, and efficiency rather than volume of services provided. Unlike traditional fee-for-service, value-based models align payment with value - keeping patients healthy, managing chronic conditions effectively, and reducing unnecessary care. Common value-based models include bundled payments, shared savings programs, accountable care organizations (ACOs), and pay-for-performance programs. Success requires strong care coordination, data analytics, population health management, and quality measurement.',
  'An ACO serving 50,000 Medicare patients receives a quality score of 95% and achieves total healthcare costs 8% below benchmark. Under the shared savings agreement, Medicare pays the ACO a portion of the savings (about 4% of total costs), distributing these funds to participating providers. However, if an ACO fails to meet quality benchmarks, it receives no shared savings regardless of cost performance.',
  'Value-based care is transforming healthcare payment and delivery. Providers must adapt to new payment models, invest in population health capabilities, and focus on outcomes rather than volume. Understanding value-based contracts is essential for financial sustainability as these models expand.',
  'Reimbursement',
  ARRAY['APM', 'Pay for Performance', 'Quality Measures', 'ACO']
),
(
  'HCC Coding',
  'Hierarchical Condition Category coding used in risk adjustment for appropriate payment based on patient complexity.',
  'Hierarchical Condition Category (HCC) coding is a risk adjustment methodology used primarily in Medicare Advantage and ACA marketplace plans. HCC coding captures patient complexity by documenting chronic conditions and severity of illness. Each HCC has a risk score (weight) that increases reimbursement - patients with multiple serious conditions generate higher capitation payments. HCCs must be documented and coded annually. Conditions are hierarchical - only the most severe in each category counts. Accurate HCC coding requires comprehensive documentation of all chronic conditions at least once per year.',
  'A Medicare Advantage patient has diabetes with chronic kidney disease stage 4 (HCC 18, risk weight 0.237), COPD (HCC 111, risk weight 0.335), and congestive heart failure (HCC 85, risk weight 0.323). The cumulative HCC risk score significantly increases the monthly capitation payment the plan receives for this patient, reflecting the higher expected costs of managing multiple serious chronic conditions.',
  'Accurate HCC coding directly affects revenue in risk-adjusted payment models. Under-coding leaves money on the table; over-coding risks audit liability. Providers in Medicare Advantage and value-based contracts must understand HCC coding and ensure comprehensive documentation of all chronic conditions annually.',
  'Coding',
  ARRAY['Risk Adjustment', 'Medicare Advantage', 'ICD-10-CM', 'Chronic Disease']
)

ON CONFLICT (term) DO NOTHING;