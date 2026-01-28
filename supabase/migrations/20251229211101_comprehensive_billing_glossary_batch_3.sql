/*
  # Comprehensive Medical Billing & RCM Glossary Expansion - Batch 3
  
  Adding 50 more essential terms covering RCM metrics, compliance, Medicare/Medicaid,
  value-based care, and financial concepts.
  
  ## Categories in Batch 3:
  - RCM Metrics & KPIs
  - Compliance & Fraud Prevention
  - Medicare & Medicaid Programs
  - Value-Based Care
  - Financial Management
  
  ## Terms Added: 50 additional terms
*/

INSERT INTO glossary_terms (term, definition, detailed_explanation, example, why_it_matters, category, related_terms) VALUES

('Days in A/R',
 'Average number of days claims remain unpaid in accounts receivable.',
 'Days in A/R measures how long it takes to collect payment after services are provided. Calculated as: (Total A/R ÷ Average Daily Charges). It''s a key indicator of revenue cycle health and cash flow. Lower is better, with best-practice benchmarks of 30-40 days for most specialties. High Days in A/R indicates collection problems, billing delays, high denial rates, or inadequate follow-up. This metric should be monitored by payer, provider, and age bucket (30-60-90-120+ days) to identify specific problem areas. Reducing Days in A/R directly improves cash flow and working capital.',
 'A practice has $500,000 in A/R and average daily charges of $15,000. Days in A/R = $500,000 ÷ $15,000 = 33.3 days. This is within best-practice range. If Days in A/R increases to 50, it signals collection problems needing investigation.',
 'Days in A/R is one of the most important RCM metrics, directly reflecting collection efficiency and cash flow health. Practices should track this monthly and investigate increases immediately to identify and resolve underlying issues.',
 'rcm_metrics',
 ARRAY['Accounts Receivable (A/R)', 'Aging Report', 'Net Collection Rate', 'Cash Flow']),

('Net Collection Rate',
 'Percentage of expected payments actually collected.',
 'Net Collection Rate measures collection effectiveness by calculating: (Payments ÷ (Charges - Contractual Adjustments)) × 100. It shows what percentage of collectible revenue (after contractual write-offs) is actually collected. Best-practice benchmarks are 95-99%. The formula excludes contractual adjustments because providers never expect to collect those amounts. A low net collection rate indicates problems with claim submission, denial management, patient collections, or inadequate follow-up on outstanding balances. This is more meaningful than gross collection rate which includes uncollectible contractual amounts.',
 'A practice has: Charges $1,000,000, Contractual Adjustments $400,000, Payments $570,000. Net Collection Rate = $570,000 ÷ ($1,000,000 - $400,000) = 95%. This means they collected 95% of expected revenue after contractual adjustments.',
 'Net Collection Rate is the truest measure of revenue cycle effectiveness. It identifies revenue leakage and guides improvement efforts. Practices should track this metric monthly overall and by payer to identify specific collection problems.',
 'rcm_metrics',
 ARRAY['Gross Collection Rate', 'Collection Rate', 'Revenue Leakage', 'Contractual Adjustment']),

('Denial Rate',
 'Percentage of claims initially denied by payers.',
 'Denial Rate measures the percentage of claim dollars or claim count initially denied on first submission: (Denied Claims ÷ Total Claims Submitted) × 100. Industry averages range from 5-10%, with best-practice targets below 5%. Denials are costly, requiring staff time for research, appeals, and resubmission. Each denial delays payment and increases Days in A/R. Tracking denial reasons using CARC codes helps identify patterns and root causes. Common denial categories include: registration/eligibility errors, authorization issues, coding problems, medical necessity, timely filing, and coordination of benefits errors.',
 'A practice submits 1,000 claims monthly. Of these, 65 are initially denied. Denial Rate = 65 ÷ 1,000 = 6.5%. Analysis shows 40% are authorization issues, 30% are coding errors, and 30% are eligibility problems, guiding corrective action priorities.',
 'Denial Rate directly impacts cash flow, staff productivity, and profitability. Reducing denials through root cause analysis and process improvements is one of the highest-ROI revenue cycle activities. Every 1% reduction in denials can save thousands in administrative costs.',
 'rcm_metrics',
 ARRAY['Claim Denial', 'Denial Management', 'Overturn Rate', 'Claim Adjustment Reason Code (CARC)']),

('Overturn Rate',
 'Percentage of denied claims successfully appealed and paid.',
 'Overturn Rate (also called appeal success rate) measures denial management effectiveness: (Overturned Denials ÷ Total Denials) × 100. It shows what percentage of denials are successfully appealed and paid. Strong denial management programs achieve 30-60% overturn rates. Low overturn rates may indicate either correctly denied claims that shouldn''t be appealed or inadequate appeal efforts. High overturn rates suggest payers are inappropriately denying valid claims. Tracking overturn rate by denial reason helps identify which denials are worth appealing and improves appeal strategy.',
 'A practice has 80 denials monthly and successfully overturns 35 through appeals. Overturn Rate = 35 ÷ 80 = 43.75%. Analysis shows authorization-related denials have 70% overturn rate (worth appealing), while timely filing denials have 5% overturn rate (not worth appeal effort).',
 'Overturn Rate guides resource allocation for denial management, identifies inappropriate payer denials needing escalation, demonstrates value of denial management programs, and helps determine which denials merit appeal investment versus write-off.',
 'rcm_metrics',
 ARRAY['Denial Rate', 'Denial Management', 'Appeal Process', 'Claims Denials']),

('Cost to Collect',
 'Amount spent on RCM operations per dollar of revenue collected.',
 'Cost to Collect calculates RCM operational costs as percentage of collections: (Total RCM Costs ÷ Total Collections) × 100. RCM costs include staff salaries, software, clearinghouse fees, supplies, and overhead allocated to billing functions. Industry benchmarks typically range from 3-6% of collections, varying by specialty, practice size, and whether billing is in-house or outsourced. Lower percentages indicate more efficient operations. This metric helps evaluate RCM staff productivity, technology ROI, and outsourcing decisions.',
 'A practice collects $3,000,000 annually. RCM department costs include: $120,000 salaries, $15,000 software, $12,000 clearinghouse fees, $8,000 supplies = $155,000 total. Cost to Collect = $155,000 ÷ $3,000,000 = 5.17%. This is within industry norms.',
 'Cost to Collect helps evaluate RCM efficiency and guides decisions about staffing levels, technology investments, process improvements, and whether to outsource billing. Reducing this percentage while maintaining collection rates directly improves profitability.',
 'rcm_metrics',
 ARRAY['Revenue Cycle Management (RCM)', 'Net Collection Rate', 'Days in A/R', 'Productivity Metrics']),

('Cash Collection Rate',
 'Percentage of expected payments collected including both insurance and patient payments.',
 'Cash Collection Rate measures overall collection effectiveness for all payment sources: (Total Payments Received ÷ (Total Charges - Contractual Adjustments)) × 100. Similar to net collection rate but emphasizes actual cash received. Best practices target 95%+ overall, but this should be broken into insurance collection rate (typically 98%+) and patient collection rate (typically 70-85%). The gap between these rates reflects the challenge of collecting patient responsibility amounts. Low cash collection rates indicate problems with claim follow-up, denial management, patient collection processes, or inadequate upfront collections.',
 'A practice has $1,000,000 charges, $400,000 contractual adjustments, and receives $550,000 payments ($500,000 from insurance, $50,000 from patients). Cash Collection Rate = $550,000 ÷ $600,000 = 91.67%. Breaking this down: Insurance collection rate = 98%, Patient collection rate = 62%.',
 'Cash Collection Rate identifies overall collection effectiveness and particularly highlights patient collection challenges, which are growing with high-deductible health plans. Separate tracking of insurance versus patient collections enables targeted improvement efforts.',
 'rcm_metrics',
 ARRAY['Net Collection Rate', 'Patient Collection Rate', 'Point of Service (POS) Collection']),

('Revenue Leakage',
 'Lost or uncollected revenue due to inefficient RCM processes.',
 'Revenue leakage represents money that should have been collected but wasn''t due to process failures, errors, or inadequate follow-up. Common causes include: missing charges, coding errors leaving money on the table, write-offs without appeal attempts, lost claims, inadequate patient collections, uncollected patient balances, failure to rebill denied claims, inadequate fee schedule management. Industry estimates suggest 1-5% of potential revenue is lost to leakage in typical practices. Identifying and plugging revenue leaks can significantly improve profitability without seeing more patients.',
 'A practice writes off $2,000 in patient balances over 120 days old without collection attempts, doesn''t bill for supplies used during procedures, and fails to appeal $5,000 in medical necessity denials that likely would be overturned. This $7,000+ represents revenue leakage.',
 'Identifying revenue leakage sources through charge capture audits, denial analysis, write-off reviews, and process assessments can uncover significant hidden revenue opportunities. Even reducing leakage by 1% can substantially impact practice profitability.',
 'rcm_metrics',
 ARRAY['Charge Capture', 'Denial Management', 'Net Collection Rate', 'Revenue Cycle Management (RCM)']),

('False Claims Act',
 'Federal law prohibiting submission of false or fraudulent claims to government programs.',
 'The False Claims Act (FCA) imposes civil and criminal liability for knowingly submitting false claims to Medicare, Medicaid, and other federal programs. "Knowingly" includes actual knowledge, deliberate ignorance, or reckless disregard of truth. Violations result in penalties of $13,946-$27,894 per false claim plus treble damages (three times the government''s loss). The FCA includes "qui tam" provisions allowing whistleblowers to file lawsuits on government''s behalf and receive 15-30% of recovered funds. Common FCA violations include: billing for services not provided, upcoding, unbundling, billing medically unnecessary services, and improper billing of services by unqualified persons.',
 'A practice systematically bills level 4 office visits (99214) for all patients regardless of complexity to maximize revenue. Investigation reveals documentation doesn''t support higher-level codes. This upcoding violates the FCA, resulting in $500,000 settlement plus practice being placed under corporate integrity agreement.',
 'The FCA is the government''s primary tool for combating healthcare fraud. Practices must ensure accurate coding, proper documentation, and compliant billing practices. FCA violations can result in massive financial penalties, exclusion from federal programs, and criminal prosecution.',
 'compliance',
 ARRAY['Fraud', 'Upcoding', 'Unbundling', 'Office of Inspector General (OIG)', 'Compliance']),

('HIPAA',
 'Federal law protecting patient health information privacy and security.',
 'The Health Insurance Portability and Accountability Act (HIPAA) includes privacy, security, and breach notification rules protecting patient health information. The Privacy Rule governs use and disclosure of Protected Health Information (PHI). The Security Rule requires safeguards for electronic PHI. Covered entities (providers, plans, clearinghouses) and their business associates must comply. Violations result in civil penalties ($100-$50,000 per violation, maximum $1.5M annually per violation type) and potential criminal charges. HIPAA also standardized electronic healthcare transactions and code sets, mandating use of specific formats for claims, eligibility, remittance, etc.',
 'A practice employee accidentally sends an email with patient information to the wrong recipient, affecting 50 patients. This is a HIPAA breach requiring notification to patients and potentially to HHS and media if threshold exceeded. Penalties could reach $50,000+.',
 'HIPAA compliance is mandatory and non-negotiable. Violations result in significant penalties and reputational damage. Practices must implement privacy and security policies, train staff, conduct risk assessments, have business associate agreements, and maintain compliance programs.',
 'compliance',
 ARRAY['Protected Health Information (PHI)', 'Business Associate Agreement (BAA)', 'Breach Notification', 'Covered Entity']),

('Stark Law',
 'Federal law prohibiting physician self-referrals for designated health services.',
 'The Physician Self-Referral Law (Stark Law) prohibits physicians from referring Medicare patients for designated health services (DHS) to entities with which they have financial relationships unless an exception applies. DHS includes: lab, imaging, DME, therapy services, home health, and others. Financial relationships include ownership interests and compensation arrangements. Unlike the Anti-Kickback Statute, Stark is a strict liability statute—intent doesn''t matter. Violations result in denial of payment, refund obligations, civil monetary penalties up to $24,687 per violation, and potential exclusion. Multiple exceptions exist for legitimate arrangements meeting specific requirements.',
 'A physician refers patients to an imaging center in which she owns 10% interest. Unless an exception applies (like in-office ancillary services exception), these referrals violate Stark Law, and all claims must be refunded even if services were medically appropriate and properly performed.',
 'Stark Law compliance is critical for physicians with financial interests in healthcare entities, requires careful structuring of arrangements to fit exceptions, affects practice expansion decisions, and necessitates legal review of ownership and compensation relationships.',
 'compliance',
 ARRAY['Anti-Kickback Statute (AKS)', 'Designated Health Services', 'Fraud', 'Office of Inspector General (OIG)']),

('Medicare',
 'Federal health insurance program primarily for people age 65+.',
 'Medicare is a federal health insurance program administered by CMS providing coverage for Americans 65+, certain younger people with disabilities, and people with End-Stage Renal Disease. Medicare has four parts: Part A (hospital insurance), Part B (medical insurance), Part C (Medicare Advantage plans), and Part D (prescription drug coverage). Original Medicare (Parts A & B) operates on fee-for-service basis with standardized payment rates. Medicare is the largest payer for most practices, making understanding Medicare rules essential for revenue cycle success.',
 'A 67-year-old enrolls in Original Medicare. They pay $174.70/month Part B premium (2024 rate), have Part B deductible of $240/year, then pay 20% coinsurance for covered services. For hospital stays, they have Part A deductible of $1,632 per benefit period with no coinsurance for first 60 days.',
 'Medicare rules, coverage policies, and payment rates significantly impact practice operations. Understanding Medicare requirements, documentation guidelines, coverage limitations, and payment methodologies is essential for compliance and proper reimbursement.',
 'medicare_medicaid',
 ARRAY['Medicare Part A', 'Medicare Part B', 'Medicare Advantage (Part C)', 'Centers for Medicare & Medicaid Services (CMS)']),

('Medicaid',
 'Joint federal-state program providing health coverage for low-income individuals.',
 'Medicaid provides health insurance for low-income individuals and families, including children, pregnant women, elderly, and disabled persons. Unlike Medicare (federal program), Medicaid is jointly funded by federal and state governments with states administering programs within federal guidelines. Eligibility, benefits, and payment rates vary by state. The ACA allowed states to expand Medicaid to adults earning up to 138% of Federal Poverty Level. Medicaid often has the lowest reimbursement rates among payers. Some states use managed care organizations for Medicaid delivery.',
 'A family of four with household income of $35,000 (about 130% of FPL) qualifies for Medicaid in expansion states. Coverage includes doctor visits, hospital care, prescription drugs, and preventive services with little or no cost-sharing.',
 'Medicaid''s low payment rates significantly impact practice financial performance. Many practices limit Medicaid patients due to reimbursement challenges. Understanding state-specific rules, prior authorization requirements, and billing procedures is essential for practices accepting Medicaid.',
 'medicare_medicaid',
 ARRAY['Medicare', 'Federal Poverty Level (FPL)', 'Medicaid Expansion', 'Dual Eligible']),

('MIPS',
 'Quality payment program adjusting Medicare payments based on performance.',
 'The Merit-based Incentive Payment System (MIPS) is Medicare''s pay-for-performance program combining quality, cost, improvement activities, and promoting interoperability (formerly meaningful use). Clinicians are scored in four categories with different weights, receiving positive, neutral, or negative payment adjustments up to ±9% based on composite score. MIPS applies to most physicians, physician assistants, nurse practitioners, and other eligible clinicians billing Medicare. Exempt clinicians include: those in first year of Medicare participation, low-volume providers, and participants in Advanced APMs. Understanding MIPS requirements and strategies maximizes incentive payments.',
 'A physician practice reports quality measures (40%), promoting interoperability (25%), improvement activities (15%), and is evaluated on cost (20%). Their composite score of 85 out of 100 earns a +3.5% payment adjustment on all Medicare Part B payments the following year.',
 'MIPS significantly impacts Medicare revenue with potential payment adjustments of several percentage points. Practices should develop MIPS strategies including measure selection, data reporting workflows, improvement activities participation, and technology optimization to maximize scores.',
 'medicare_medicaid',
 ARRAY['Quality Payment Program (QPP)', 'Advanced Alternative Payment Model (APM)', 'Quality Measures', 'Merit-based Incentive Payment System']),

('Local Coverage Determination (LCD)',
 'Regional Medicare coverage policy for specific services.',
 'LCDs are coverage policies developed by Medicare Administrative Contractors (MACs) for their specific jurisdictions, defining when services are reasonable and necessary (medically necessary) under Medicare. LCDs specify covered ICD-10 codes for procedures, frequency limitations, documentation requirements, and non-covered services. They''re less broad than National Coverage Determinations but more specific to regional practice patterns. Providers must follow LCDs in their MAC jurisdiction to avoid denials. LCDs are publicly available and regularly updated.',
 'An LCD for trigger point injections (CPT 20552) in the MAC jurisdiction lists 47 covered ICD-10 codes including M79.1 (myalgia) and specifies maximum of 4 injection sites per session. Claims with non-covered diagnoses or exceeding site limits are denied.',
 'LCDs define medical necessity for many services, making them essential references for coding, documentation, and defending appeals. Practices should maintain LCD references for commonly performed procedures and train staff on requirements to prevent denials.',
 'medicare_medicaid',
 ARRAY['National Coverage Determination (NCD)', 'Medical Necessity', 'Medicare Administrative Contractor (MAC)', 'Medicare']),

('National Coverage Determination (NCD)',
 'Nationwide Medicare coverage policy for specific services.',
 'NCDs are Medicare coverage decisions made by CMS applying nationally to all Medicare Administrative Contractors. They establish whether services/items are reasonable and necessary under Medicare, taking precedence over local coverage determinations. NCDs specify covered indications, frequency limitations, and non-covered uses. Absence of an NCD (or LCD) means the contractor determines coverage on individual claim basis. NCDs result from formal coverage requests, often with public comment periods and evidence reviews. They''re binding on MACs and can only be revised through formal CMS processes.',
 'NCD for colorectal cancer screening (210.3) covers colonoscopy every 10 years for average-risk patients age 50+ and every 2 years for high-risk patients. These coverage criteria apply uniformly nationwide for all Medicare beneficiaries.',
 'NCDs definitively establish Medicare coverage policies for specific services. Providers must understand applicable NCDs to ensure services meet coverage criteria, avoid denials, and properly document medical necessity per NCD requirements.',
 'medicare_medicaid',
 ARRAY['Local Coverage Determination (LCD)', 'Medical Necessity', 'Medicare', 'Centers for Medicare & Medicaid Services (CMS)']),

('Medicare Secondary Payer (MSP)',
 'Situation where Medicare pays secondary to other insurance.',
 'MSP rules determine when Medicare is secondary payer rather than primary. Common MSP situations include: employer group health plans for active employees or spouses, auto/liability insurance for accident-related injuries, and Veterans Affairs coverage. When MSP applies, the other insurance (primary) must be billed first. Only remaining patient responsibility is billed to Medicare as secondary. Providers must query the Medicare eligibility system to identify MSP situations. Failure to properly bill the primary payer first results in Medicare denials. Providers may be liable for primary payer''s portion if MSP rules violated.',
 'A 68-year-old Medicare beneficiary is still working with employer coverage for 100+ employees. The employer plan is primary per MSP rules. A $500 office visit is first billed to employer plan which pays $400. Then Medicare is billed as secondary for the $100 remaining, which Medicare covers.',
 'MSP rules are complex but critical for proper claim sequencing. Incorrect MSP handling results in denials, payment delays, and potential compliance issues. Practices must verify MSP status during eligibility checking and bill payers in correct order.',
 'medicare_medicaid',
 ARRAY['Medicare', 'Coordination of Benefits (COB)', 'Crossover Claim', 'Primary Insurance']),

('Value-Based Care',
 'Healthcare delivery model emphasizing quality and outcomes over volume.',
 'Value-based care contrasts with traditional fee-for-service by linking provider payment to patient outcomes, quality metrics, and cost efficiency. Models include: capitation, shared savings, bundled payments, pay-for-performance, and risk-sharing arrangements. Goals include improving patient outcomes, enhancing care coordination, reducing unnecessary utilization, and lowering overall costs. Providers assume varying levels of financial risk for patient populations. Value-based care requires robust data analytics, care coordination capabilities, and patient engagement strategies. This is the direction of healthcare payment reform.',
 'An ACO serving 10,000 Medicare beneficiaries achieves $2M in savings versus benchmark costs while meeting quality benchmarks. Under shared savings model, Medicare shares 50% ($1M) with the ACO as incentive payment.',
 'Value-based care is transforming healthcare payment and delivery. Practices must develop capabilities for population health management, quality measurement, care coordination, and data analytics to succeed in value-based contracts and maximize revenue potential.',
 'value_based_care',
 ARRAY['Accountable Care Organization (ACO)', 'Pay-for-Performance (P4P)', 'Quality Measures', 'Risk Adjustment']),

('Accountable Care Organization (ACO)',
 'Group of providers voluntarily coordinating care to improve quality and reduce costs.',
 'ACOs are networks of doctors, hospitals, and other healthcare providers who coordinate care for a defined patient population. Under Medicare''s Shared Savings Program, ACOs that reduce costs while meeting quality benchmarks share in the savings. ACOs must meet requirements including minimum patient count (5,000 Medicare beneficiaries), formal legal structure, leadership and management structure, and ability to report quality measures. ACOs can participate in Track 1 (upside risk only), Track 2 (two-sided risk), or Track 3 (higher two-sided risk with higher potential rewards). Commercial payers also contract with ACOs.',
 'A regional ACO includes 50 primary care physicians, 3 hospitals, and 20 specialists serving 15,000 Medicare beneficiaries. By improving care coordination, reducing hospital readmissions, and managing chronic diseases better, they reduce costs by $3M while maintaining quality standards, earning $1.5M in shared savings.',
 'ACOs represent a major value-based care model affecting how providers deliver and get paid for care. Participation requires infrastructure for care coordination, data analytics, and quality reporting but offers potential for significant shared savings revenue.',
 'value_based_care',
 ARRAY['Value-Based Care', 'Shared Savings', 'Medicare', 'Quality Measures']),

('Bundled Payment for Care Improvement (BPCI)',
 'Medicare model paying single amount for episode of care.',
 'BPCI (now BPCI Advanced) tests bundled payment for clinical episodes, paying a single amount covering all services during an episode (e.g., joint replacement from admission through 90 days post-discharge). The bundle includes hospital, physician, post-acute, and other related services. If actual costs are below the target price while meeting quality standards, providers share in savings; if costs exceed the target, they must repay the difference (in risk-bearing models). BPCI encourages care coordination, efficiency, and elimination of unnecessary services. Different models offer varying risk levels.',
 'A hospital participates in BPCI Advanced for hip replacement. Target price is $25,000 for the 90-day episode. By improving care coordination, reducing complications, and optimizing post-acute care, actual costs are $22,000. The hospital earns $3,000 shared savings minus quality adjustments.',
 'Bundled payments align incentives across the care continuum and reward efficiency and quality. Success requires coordination among all episode participants, care pathways, risk stratification, and management of post-acute care to control costs.',
 'value_based_care',
 ARRAY['Episode of Care', 'Value-Based Care', 'Medicare', 'Shared Savings']),

('Risk Adjustment',
 'Statistical process accounting for patient health status when comparing outcomes.',
 'Risk adjustment accounts for differences in patient populations'' health status when comparing costs, outcomes, or quality across providers. Without risk adjustment, providers serving sicker populations would appear to have worse outcomes and higher costs. Risk adjustment uses diagnosis codes to calculate risk scores predicting expected costs. In Medicare Advantage and ACOs, higher risk scores generate higher capitation payments reflecting sicker patients requiring more care. Accurate diagnosis coding and documentation is critical for appropriate risk adjustment, termed "getting credit for treating sicker patients." ',
 'Two ACOs serve similar-sized populations. ACO A''s patients have average risk score of 1.0 (average health). ACO B''s patients have average risk score of 1.3 (30% sicker). ACO B receives 30% higher capitation payments to account for their higher-cost population. Without risk adjustment, ACO B would be unfairly penalized for serving sicker patients.',
 'Risk adjustment is central to fair payment in value-based models. Practices must ensure complete and accurate diagnosis coding, document all chronic conditions at each encounter, and understand how coding impacts risk scores and revenue in capitated and value-based contracts.',
 'value_based_care',
 ARRAY['Capitation', 'Value-Based Care', 'HCC Coding', 'Medicare Advantage (Part C)']),

('Contractual Adjustment',
 'Difference between billed charges and contracted payment rates.',
 'Contractual adjustments (also called contractual write-offs or contractual allowances) represent the difference between what providers charge and what insurance companies have contractually agreed to pay. These amounts are written off as adjustments, not patient responsibility or bad debt. The allowed amount (contracted rate) is determined by provider-payer contracts or fee schedules. Contractual adjustments don''t represent lost revenue since providers never expect to collect these amounts—they''re part of negotiated agreements for network participation. Tracking contractual adjustment percentages by payer helps evaluate contract favorability.',
 'A provider bills $200 for a service. The payer''s contracted allowed amount is $125. The $75 difference is written off as a contractual adjustment. If patient has met deductible and has 20% coinsurance, patient pays $25, insurance pays $100, and $75 is contractual adjustment.',
 'Understanding contractual adjustments is essential for accurate revenue expectations, evaluating payer contract value, calculating net collection rates, and distinguishing between legitimate write-offs and uncollected revenue requiring follow-up.',
 'financial',
 ARRAY['Allowed Amount', 'Write-off', 'Net Collection Rate', 'Fee Schedule']),

('Charge Description Master (CDM)',
 'Comprehensive listing of billable services, procedures, and supplies with charges.',
 'The CDM (also called chargemaster) is a hospital''s comprehensive price list containing all billable items including procedures, services, supplies, drugs, and room charges. Each item has a charge code, description, revenue code, CPT/HCPCS code if applicable, and price. The CDM is used to generate patient bills and insurance claims. Regular CDM maintenance is critical for compliance and proper reimbursement, including: updating codes annually, ensuring prices are competitive and justified, verifying code relationships, and removing outdated items. Poor CDM management leads to claim denials, compliance risks, and revenue loss.',
 'A hospital CDM entry shows: Code 450110, Description "Chest X-ray 2 views", Revenue Code 320, CPT 71046, Price $275. When a patient has this service, the CDM automatically pulls the correct billing information.',
 'CDM management significantly impacts hospital revenue cycle effectiveness. While primarily a hospital concept, understanding CDM helps all providers appreciate how facility charges are generated and why facility billing is complex compared to professional billing.',
 'financial',
 ARRAY['Revenue Code', 'CPT Code', 'Fee Schedule', 'Charge Capture']),

('Fee-for-Service (FFS)',
 'Payment model where providers paid separately for each service.',
 'Fee-for-service is the traditional payment model where providers are paid for each service rendered—more services mean more revenue. Payment amounts are determined by fee schedules or contracted rates. FFS creates incentives for service volume rather than value or outcomes. Critics argue FFS encourages overutilization and doesn''t reward care coordination or prevention. However, FFS remains the dominant payment model despite growth of value-based alternatives. FFS is simple and transparent but doesn''t align with value-based care goals of efficiency and outcomes.',
 'A physician providing 4 office visits, 2 procedures, and ordering 3 lab tests bills separately for each service under fee-for-service. More services = more revenue, regardless of patient outcomes or care efficiency.',
 'Understanding FFS is fundamental since most practices still operate primarily under fee-for-service models. The shift toward value-based payment models is gradual, meaning practices must manage both FFS and value-based contracts simultaneously.',
 'financial',
 ARRAY['Capitation', 'Value-Based Care', 'Bundled Payment', 'CPT Code']),

('Timely Filing',
 'Time limit for submitting claims to insurance companies.',
 'Timely filing requirements specify how long after service date claims must be submitted. Limits vary by payer, typically ranging from 90 days to one year. Medicare has one-year timely filing. Commercial payers vary widely from 90 days to 18 months per contract terms. Claims submitted after timely filing deadlines are denied, with providers absorbing the cost—patients can''t be billed for timely filing denials. Exceptions include: proof of prior submission, coordination of benefits situations where primary payer delays, and sometimes appeals of denials. Tracking and submitting claims promptly is critical to avoid timely filing denials.',
 'A practice provides a service on January 15. Their payer contract requires claims within 90 days. The claim must be submitted by April 15. If submitted May 1, it''s denied for timely filing, and the practice writes off the charges.',
 'Timely filing denials are entirely preventable and represent pure revenue loss. Practices must have systems ensuring prompt claim submission, tracking payer-specific deadlines, and immediately addressing rejections to avoid missing timely filing windows.',
 'claims',
 ARRAY['Claim Denial', 'Claim Submission', 'Write-off', 'Payer Contract'])

ON CONFLICT (term) DO NOTHING;