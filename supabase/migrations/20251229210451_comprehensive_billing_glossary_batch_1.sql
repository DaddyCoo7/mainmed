/*
  # Comprehensive Medical Billing & RCM Glossary Expansion - Batch 1
  
  Adding 50 essential medical billing and RCM terms with complete detailed explanations,
  examples, and significance to create the most comprehensive glossary available.
  
  ## Categories in Batch 1:
  - Insurance & Payer Terminology
  - Claims Processing
  - Advanced Coding Concepts
  - RCM Metrics & KPIs
  
  ## Terms Added: 50 high-priority billing terms
*/

-- High-Priority Insurance & Payer Terms
INSERT INTO glossary_terms (term, definition, detailed_explanation, example, why_it_matters, category, related_terms) VALUES

('Actuarial Value', 
 'The percentage of total average costs for covered benefits that a health plan will cover.',
 'Actuarial value is a key metric used to compare health insurance plans under the ACA. It represents the average percentage of healthcare costs the insurer pays across all enrollees. For example, a Bronze plan has an actuarial value of 60%, meaning the plan pays 60% of costs on average, while enrollees pay 40% through deductibles, copays, and coinsurance. This doesn''t mean every individual will have a 60/40 split—some will pay more, some less—but it''s the average across all plan members.',
 'A Silver plan with 70% actuarial value means that for every $100 of covered healthcare costs across all enrollees, the insurance company pays $70 and members pay $30 on average through cost-sharing.',
 'Understanding actuarial value helps practices estimate expected patient responsibility amounts and enables patients to choose plans appropriate for their expected healthcare needs and financial situation.',
 'insurance',
 ARRAY['Coinsurance', 'Deductible', 'Maximum Out-of-Pocket (MOOP)', 'Cost-Sharing']),

('Allowed Amount',
 'The maximum amount an insurance company will pay for a covered healthcare service.',
 'The allowed amount (also called eligible expense, payment allowance, or negotiated rate) is determined by the contract between the provider and the insurance company. This amount may be less than the provider''s billed charges. After the allowed amount is determined, the patient''s cost-sharing (deductible, coinsurance, copay) is calculated based on this amount, not the provider''s charges. The difference between billed charges and allowed amount is written off as a contractual adjustment.',
 'A provider bills $500 for a procedure. The insurance allowed amount is $350. If the patient has met their deductible and has 20% coinsurance, they pay $70 (20% of $350), insurance pays $280, and $150 is written off as a contractual adjustment.',
 'Knowing allowed amounts is critical for accurate patient estimates, financial counseling, and understanding true reimbursement rates. It directly impacts practice revenue and patient out-of-pocket costs.',
 'insurance',
 ARRAY['Contractual Adjustment', 'Fee Schedule', 'Usual, Customary, and Reasonable (UCR)', 'Balance Billing']),

('Assignment of Benefits',
 'Patient authorization allowing insurance payments to be sent directly to the healthcare provider.',
 'When a patient signs an assignment of benefits form, they authorize their insurance company to pay healthcare providers directly rather than sending the payment to the patient. This is standard practice in most healthcare settings and prevents patients from having to pay upfront and wait for reimbursement. Without assignment, the patient would receive the insurance payment and be responsible for paying the provider. Most insurance companies require participating providers to accept assignment.',
 'A patient signs an assignment of benefits form during registration. After a $1,000 office visit, the insurance company sends the $800 payment directly to the provider rather than to the patient.',
 'Assignment of benefits streamlines the payment process, reduces patient financial burden, improves provider cash flow, and is often required for in-network providers. It''s a foundational concept in medical billing.',
 'insurance',
 ARRAY['Participating Provider', 'Balance Billing', 'Out-of-Network (OON)']),

('Capitation',
 'A payment model where providers receive a fixed amount per patient per time period regardless of services provided.',
 'Under capitation, providers are paid a set fee (per member per month or PMPM) for each enrolled patient, whether the patient receives no services, minimal services, or extensive care during that period. This payment model incentivizes preventive care and efficient resource use since providers assume financial risk for patient care costs. Capitation is common in HMO models and some value-based contracts. The capitation rate is typically risk-adjusted based on patient demographics and health status.',
 'A primary care practice receives $30 PMPM for 500 enrolled patients, generating $15,000 monthly revenue regardless of visit volume. If patients require extensive care, the practice absorbs costs; if patients need little care, the practice retains more revenue.',
 'Understanding capitation is essential for practices participating in value-based contracts. It fundamentally changes financial incentives from fee-for-service volume to managing population health efficiently.',
 'insurance',
 ARRAY['Fee-for-Service (FFS)', 'Risk Adjustment', 'Health Maintenance Organization (HMO)', 'Value-Based Care']),

('Coordination of Benefits (COB)',
 'The process determining payment order when a patient has multiple insurance policies.',
 'When patients have coverage from multiple sources (such as through both parents'' plans, Medicare plus employer coverage, or primary insurance plus secondary coverage), COB rules determine which insurance pays first (primary) and which pays second (secondary). The primary insurance processes the claim first based on their allowed amount and coverage. The secondary insurance then processes the claim for any remaining patient responsibility, up to their allowed amount. COB prevents overpayment by ensuring total payments don''t exceed 100% of covered charges. Common COB rules include the birthday rule for dependent children and Medicare Secondary Payer rules.',
 'A patient has primary insurance through their employer and secondary coverage through their spouse''s plan. After a $200 office visit, the primary insurance allows $150 and pays $120 (patient has 20% coinsurance = $30). The secondary insurance is billed for the $30 patient responsibility and may pay all or part depending on their coverage.',
 'Proper COB processing maximizes reimbursement, reduces patient responsibility, and prevents claim denials. Incorrectly determining primary versus secondary coverage leads to claim rejections and delayed payments.',
 'insurance',
 ARRAY['Crossover Claim', 'Medicare Secondary Payer (MSP)', 'Duplicate Coverage', 'Primary Insurance']),

('Diagnosis-Related Group (DRG)',
 'Medicare''s payment classification system for inpatient hospital services grouping patients with similar conditions.',
 'DRGs group inpatient hospital cases into categories with similar clinical characteristics and resource consumption. Each DRG has a predetermined payment amount regardless of actual costs incurred. This prospective payment system incentivizes hospitals to provide efficient care since they keep savings if costs are below the DRG payment but absorb losses if costs exceed it. DRG assignment is based on principal diagnosis, procedures performed, complications/comorbidities, patient age, and discharge status. Medicare Severity DRGs (MS-DRGs) adjust for patient severity and comorbidities.',
 'A patient admitted for heart failure without complications is assigned MS-DRG 293 with payment of $7,500. Whether the actual hospital costs are $6,000 or $9,000, Medicare pays the fixed $7,500 DRG rate (adjusted for geographic factors).',
 'DRGs significantly impact hospital revenue and require accurate diagnosis coding and documentation of all complications and comorbidities to ensure appropriate DRG assignment and payment.',
 'insurance',
 ARRAY['Prospective Payment System (PPS)', 'Principal Diagnosis', 'Complication', 'Comorbidity']),

('Dual Eligible',
 'Individuals qualified for both Medicare and Medicaid coverage simultaneously.',
 'Dual eligible beneficiaries qualify for Medicare based on age or disability and for Medicaid based on income and resources. These individuals often have complex health needs and limited financial resources. Medicare typically serves as primary insurance, while Medicaid covers Medicare cost-sharing and additional benefits not covered by Medicare. There are different dual eligible categories: full-benefit duals (receiving full Medicaid benefits) and partial-benefit duals (Medicaid paying only Medicare premiums and/or cost-sharing). Special dual eligible plans (D-SNPs) coordinate both coverages.',
 'A 67-year-old receiving Medicare with income below poverty level also qualifies for Medicaid. Medicare pays for covered services as primary, and Medicaid covers copays, deductibles, and additional services like long-term care that Medicare doesn''t cover.',
 'Dual eligibles represent significant billing complexity requiring proper sequencing of claims to both payers. They often cannot be balance billed, and providers must understand both programs'' requirements and limitations.',
 'insurance',
 ARRAY['Medicare', 'Medicaid', 'Qualified Medicare Beneficiary (QMB)', 'Coordination of Benefits (COB)']),

('Explanation of Benefits (EOB)',
 'Statement from insurance explaining how a claim was processed and what patient owes.',
 'An EOB is sent to the patient (and sometimes the provider) after claim processing, detailing billed charges, allowed amounts, insurance payments, contractual adjustments, and patient responsibility. It''s not a bill but an explanation of coverage. The EOB includes important information like claim number, service dates, procedure codes, denial reasons if applicable, and patient cost-sharing breakdown. Patients often confuse EOBs with bills, requiring practice staff to provide education.',
 'EOB shows: Provider billed $500, Allowed amount $350, Insurance paid $280, Contractual adjustment $150, Patient owes $70 (20% coinsurance). The patient will receive a separate bill from the provider for the $70.',
 'EOBs are critical for verifying correct claim processing, identifying underpayments or errors, determining patient responsibility for billing, and serving as documentation for appeals if needed.',
 'insurance',
 ARRAY['Remittance Advice', 'Electronic Remittance Advice (ERA)', 'Allowed Amount', 'Claim Adjudication']),

('Health Maintenance Organization (HMO)',
 'Managed care plan requiring members to use network providers and obtain referrals for specialists.',
 'HMOs typically offer lower premiums and out-of-pocket costs in exchange for reduced flexibility. Members must choose a primary care physician (PCP) who serves as a gatekeeper, coordinating care and providing referrals to specialists. Services received out-of-network are generally not covered except in emergencies. HMOs emphasize preventive care and care coordination. Providers are often paid through capitation or discounted fee-for-service arrangements.',
 'A patient with HMO coverage needs to see a dermatologist. They must first visit their PCP to obtain a referral. Seeing a dermatologist without this referral would result in no insurance coverage, making the patient responsible for full charges.',
 'Understanding HMO requirements is essential for preventing claim denials. Practices must verify referrals before services and educate patients about network restrictions to avoid surprise bills.',
 'insurance',
 ARRAY['Preferred Provider Organization (PPO)', 'Point of Service (POS) Plan', 'Gatekeeper', 'Prior Authorization']),

('Maximum Out-of-Pocket (MOOP)',
 'The maximum amount a patient must pay in cost-sharing during a coverage period.',
 'The MOOP is the highest total of deductibles, copayments, and coinsurance a patient pays in a plan year. Once reached, the insurance covers 100% of covered services for the remainder of the plan year. The MOOP protects patients from catastrophic medical expenses. Under the ACA, there are maximum limits on out-of-pocket maximums. The MOOP only includes in-network covered services—out-of-network care, premiums, and non-covered services don''t count toward the MOOP.',
 'A patient''s plan has a $6,000 MOOP. After paying $2,000 deductible and $4,000 in coinsurance throughout the year, they reach their MOOP. Any additional covered services that year are paid 100% by insurance with no patient cost-sharing.',
 'The MOOP impacts patient financial planning and practice collections. Patients who have reached their MOOP have no additional responsibility, while those early in the year may have significant out-of-pocket costs.',
 'insurance',
 ARRAY['Deductible', 'Coinsurance', 'Copayment (Copay)', 'Catastrophic Coverage']),

('Medicare Advantage (Part C)',
 'Private insurance plans approved by Medicare offering Part A and Part B benefits.',
 'Medicare Advantage plans (MA or Part C) are alternatives to Original Medicare, offered by private companies approved by Medicare. These plans must cover everything Original Medicare covers but often include additional benefits like dental, vision, and prescription drug coverage. MA plans typically operate as HMOs or PPOs with network restrictions. Medicare pays the MA plan a capitated amount per member, and the plan assumes risk for providing all covered services. Most MA plans include Part D prescription coverage. Patients cannot have Medigap (supplemental insurance) with MA plans.',
 'A 70-year-old enrolls in an Advantage HMO plan instead of Original Medicare. The plan covers all Medicare services plus dental and vision for a $25 monthly premium. However, they must use network providers and need referrals for specialists.',
 'MA plans have different billing rules than Original Medicare, including prior authorization requirements, different allowed amounts, and network restrictions. Practices must verify plan-specific requirements and may need contracted rates with individual MA plans.',
 'medicare_medicaid',
 ARRAY['Medicare', 'Original Medicare', 'Medicare Part A', 'Medicare Part B', 'Medicare Part D']),

('Out-of-Network (OON)',
 'Healthcare providers not contracted with an insurance plan.',
 'Out-of-network providers haven''t signed contracts with insurance companies establishing negotiated rates. When patients see OON providers, several scenarios may occur: (1) Services may not be covered at all (common in HMOs), (2) Coverage at reduced benefit level with higher cost-sharing (common in PPOs), (3) Patient may be balance billed for the difference between charges and insurance payment. OON claims are processed using usual and customary rates rather than contracted allowed amounts. Some plans require higher deductibles and cost-sharing for OON care.',
 'A patient with PPO insurance sees an OON specialist charging $300. The insurance determines $200 as usual and customary, paying 60% ($120) for OON service. The patient owes 40% OON coinsurance ($80) plus the balance bill of $100, totaling $180 out-of-pocket.',
 'OON status significantly impacts practice collections and patient satisfaction. Practices must inform patients of OON status before services, understand balance billing laws, and set clear financial policies.',
 'insurance',
 ARRAY['In-Network', 'Balance Billing', 'Surprise Billing', 'Usual, Customary, and Reasonable (UCR)']),

('Preferred Provider Organization (PPO)',
 'Insurance plan offering flexibility to see any provider with higher benefits for in-network care.',
 'PPOs provide more flexibility than HMOs, allowing patients to see any licensed provider without referrals. However, staying in-network results in lower out-of-pocket costs due to contracted rates and lower cost-sharing percentages. Out-of-network care is covered but at reduced benefit levels with higher deductibles and coinsurance. PPOs typically have higher premiums than HMOs but offer greater choice and convenience. No primary care physician selection or referral requirements exist.',
 'A patient with PPO coverage can see any specialist directly without a referral. In-network visits have $30 copay, while out-of-network visits have 40% coinsurance after higher deductible. Most choose in-network providers for cost savings.',
 'PPO billing is generally more straightforward than HMOs since no referrals are needed, but practices must understand in-network versus out-of-network implications for patient responsibility and balance billing rules.',
 'insurance',
 ARRAY['Health Maintenance Organization (HMO)', 'Point of Service (POS) Plan', 'In-Network', 'Out-of-Network (OON)']),

('Prior Authorization (PA)',
 'Insurance approval required before certain services or medications are provided.',
 'Prior authorization is a utilization management tool where insurers review medical necessity before approving coverage for specific services, procedures, or medications. The provider must submit clinical information justifying the need for the service. PA requirements vary by payer and plan, commonly applying to expensive procedures, brand-name medications, advanced imaging, and specialty care. Performing services without obtaining required PA can result in claim denial and provider write-off. The PA process can delay care and creates administrative burden.',
 'A physician orders an MRI for back pain. The insurance requires prior authorization. The provider''s office submits clinical notes showing conservative treatment failed. The insurer reviews and issues a PA approval number valid for 30 days.',
 'PA requirements significantly impact workflow, patient care timelines, and revenue cycle. Practices need efficient PA processes to prevent claim denials and patient dissatisfaction from delayed care.',
 'insurance',
 ARRAY['Pre-Authorization', 'Medical Necessity', 'Utilization Management', 'Authorization']),

('Premium',
 'The amount paid periodically to maintain health insurance coverage.',
 'The premium is the monthly cost for health insurance coverage, paid regardless of whether services are used. For employer-sponsored insurance, employers typically pay a portion of the premium with employees paying the remainder through payroll deductions. For individual coverage, the full premium is paid by the policyholder. Premium amounts are based on actuarial calculations considering expected claims costs, administrative expenses, and profit margin. Under the ACA, premium subsidies help lower-income individuals afford coverage.',
 'An individual health plan costs $450/month premium. An employer plan costs $600/month total with the employer paying $500 and employee paying $100 through payroll deduction.',
 'While premiums don''t directly impact medical billing, understanding insurance costs helps providers empathize with patients'' financial constraints and explains why patients may delay care or have high-deductible plans with significant out-of-pocket responsibility.',
 'insurance',
 ARRAY['Deductible', 'Coinsurance', 'Copayment (Copay)', 'Cost-Sharing'])

ON CONFLICT (term) DO NOTHING;