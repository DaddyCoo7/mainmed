// Rich content templates for all page types with E-E-A-T elements

export interface ServicePageContent {
  title: string;
  slug: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  overview: string;
  benefits: Array<{ title: string; description: string }>;
  howItWorks: { title: string; steps: Array<{ title: string; description: string }> };
  challenges: { title: string; items: Array<{ problem: string; solution: string }> };
  pricing: { title: string; description: string };
  faqs: Array<{ question: string; answer: string }>;
  cta: string;
}

export interface SpecialtyPageContent {
  title: string;
  slug: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  overview: string;
  commonProcedures: Array<{ name: string; cptCodes: string; description: string }>;
  billingChallenges: Array<{ challenge: string; solution: string }>;
  keyMetrics: Array<{ metric: string; value: string; description: string }>;
  compliance: string;
  benefits: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

// Service Pages Content
export const servicePages: ServicePageContent[] = [
  {
    title: 'Revenue Cycle Management (RCM) Services | Medtransic',
    slug: 'rcm',
    metaDescription: 'Comprehensive Revenue Cycle Management services to maximize cash flow, reduce denials, and improve collection rates. Expert RCM solutions for healthcare practices of all sizes.',
    h1: 'Revenue Cycle Management (RCM) Services',
    heroDescription: 'Transform your practice revenue with our end-to-end RCM services. We manage every step from patient registration to final payment, ensuring maximum reimbursement and minimum administrative burden.',
    overview: 'Revenue Cycle Management is the financial process healthcare facilities use to track patient care episodes from registration and appointment scheduling to the final payment of a balance. Our comprehensive RCM services encompass patient eligibility verification, charge capture, coding, claim submission, payment posting, denial management, and accounts receivable follow-up. With over 15 years of experience managing billions in healthcare revenue, Medtransic delivers industry-leading collection rates of 97-99% while reducing administrative costs by up to 40%.',
    benefits: [
      { title: 'Increased Cash Flow', description: 'Accelerate reimbursement with average payment turnaround of 18-22 days. Our proactive claim management reduces days in A/R by 30-50%, putting money in your account faster.' },
      { title: 'Reduced Denial Rates', description: 'Achieve denial rates below 5% compared to the industry average of 10-15%. Our expert coders and scrubbing technology catch errors before claims are submitted.' },
      { title: 'Improved Collection Rates', description: 'Collect 97-99% of net collectible revenue with systematic follow-up on all outstanding claims. Our A/R specialists work every claim to maximum reimbursement.' },
      { title: 'Compliance Assurance', description: 'Stay compliant with HIPAA, HITECH, and payer regulations. Our team maintains current certifications and implements regular audits to protect your practice from compliance risks.' },
      { title: 'Cost Reduction', description: 'Reduce billing costs by 30-40% compared to in-house operations. Eliminate overhead costs including salaries, benefits, software licenses, and training expenses.' },
      { title: 'Real-Time Analytics', description: 'Access comprehensive dashboards showing key performance metrics including clean claim rates, denial rates, collection ratios, and revenue trends. Make data-driven decisions to optimize practice performance.' }
    ],
    howItWorks: {
      title: 'Our RCM Process',
      steps: [
        { title: 'Patient Registration & Eligibility', description: 'We verify insurance eligibility in real-time before appointments, capturing accurate demographic and insurance information. This reduces registration errors by 90% and prevents claim denials.' },
        { title: 'Charge Capture & Coding', description: 'Our certified coders review all documentation and assign accurate ICD-10, CPT, and HCPCS codes. We ensure proper modifier usage and medical necessity documentation to support every claim.' },
        { title: 'Claim Submission & Scrubbing', description: 'All claims pass through our proprietary scrubbing system that checks 300+ edits before submission. We achieve first-pass acceptance rates of 95-98% with major payers.' },
        { title: 'Payment Posting', description: 'Payments are posted daily with detailed EOB analysis. We identify underpayments, contractual adjustments, and patient responsibility amounts with 99.9% accuracy.' },
        { title: 'Denial Management', description: 'Denied claims are analyzed, corrected, and resubmitted within 24-48 hours. Our denial specialists have expertise with all major payers and achieve overturn rates of 65-75%.' },
        { title: 'A/R Follow-Up', description: 'Every claim is worked systematically until paid. Our A/R team contacts payers on days 15, 30, 45, and 60 to resolve outstanding claims and prevent write-offs.' },
        { title: 'Patient Billing', description: 'Patient statements are sent promptly with clear explanations of charges. We offer multiple payment options including online payments, payment plans, and provide courteous patient support.' },
        { title: 'Reporting & Analytics', description: 'Monthly reports provide detailed analysis of practice performance including productivity metrics, payer performance, denial trends, and opportunities for improvement.' }
      ]
    },
    challenges: {
      title: 'Common RCM Challenges We Solve',
      items: [
        { problem: 'High Denial Rates', solution: 'Our proactive claim scrubbing and expert coding reduce denials to below 5%. We identify root causes and implement corrective processes to prevent future denials.' },
        { problem: 'Slow Payment Turnaround', solution: 'Accelerate cash flow with systematic claim submission and aggressive follow-up. We reduce average days in A/R from 45-60 days to 25-30 days.' },
        { problem: 'Compliance Risks', solution: 'Maintain compliance with constantly changing regulations through continuous staff training, regular audits, and implementation of best practices.' },
        { problem: 'High Administrative Costs', solution: 'Reduce overhead by up to 40% while improving performance. Our scalable services grow with your practice without the burden of hiring and training staff.' },
        { problem: 'Poor Visibility', solution: 'Gain complete transparency with real-time dashboards and detailed monthly reports. Track every metric that matters to your practice success.' },
        { problem: 'Billing Staff Turnover', solution: 'Eliminate disruption from staff turnover. Our dedicated team provides consistent, expert service with seamless backup coverage.' }
      ]
    },
    pricing: {
      title: 'RCM Pricing',
      description: 'Our RCM services are priced as a percentage of collections, typically 4-7% depending on specialty, volume, and services required. Unlike fixed-fee models, you only pay when we collect. This performance-based pricing aligns our success with yours. Most practices save 30-40% compared to in-house billing costs while collecting more revenue. Request a free analysis to see your specific savings and ROI.'
    },
    faqs: [
      { question: 'What is Revenue Cycle Management?', answer: 'Revenue Cycle Management (RCM) is the financial process that healthcare facilities use to track patient care episodes from registration through final payment. It includes all administrative and clinical functions that contribute to the capture, management, and collection of patient service revenue.' },
      { question: 'How long does implementation take?', answer: 'Implementation typically takes 30-45 days. This includes data migration, staff training, system integration, and a thorough audit of current processes. We provide dedicated implementation specialists to ensure a smooth transition with minimal disruption.' },
      { question: 'What collection rate can I expect?', answer: 'Our clients typically achieve collection rates of 97-99% of net collectible revenue. Actual rates depend on specialty, payer mix, and practice policies. We provide a detailed benchmark analysis during onboarding.' },
      { question: 'Do you work with my current EHR?', answer: 'Yes, we integrate with all major EHR systems including Epic, Cerner, Athenahealth, AdvancedMD, Kareo, and many others. Our team has experience with over 50 different practice management systems.' },
      { question: 'How do you handle denied claims?', answer: 'Denied claims are analyzed and categorized immediately. Our denial management specialists research the root cause, correct any errors, and resubmit within 24-48 hours. We track denial patterns and implement preventive measures to reduce future denials.' },
      { question: 'What reports do I receive?', answer: 'You receive comprehensive monthly reports including: aging analysis, denial reports, payer performance, productivity metrics, collection ratios, and custom reports as needed. Real-time dashboards are available 24/7.' }
    ],
    cta: 'Ready to optimize your revenue cycle? Contact us today for a free practice analysis and customized RCM proposal. Call (866) 261-5711 or request a consultation online.'
  },
  {
    title: 'Medical Billing Services | Expert Healthcare Billing | Medtransic',
    slug: 'medical-billing',
    metaDescription: 'Professional medical billing services with 98%+ clean claim rates. Reduce denials, accelerate payments, and increase revenue with our certified billing specialists.',
    h1: 'Professional Medical Billing Services',
    heroDescription: 'Maximize your practice revenue with expert medical billing services. Our certified billing specialists ensure accurate claims, faster payments, and higher collection rates across all specialties and payer types.',
    overview: 'Medical billing is a complex process that requires expertise in coding, payer regulations, and compliance standards. At Medtransic, our certified billing specialists process thousands of claims daily across 40+ specialties with clean claim rates exceeding 98%. We handle the entire billing lifecycle including charge entry, coding review, claim submission, payment posting, denial management, and patient billing. Our technology-enabled services combine human expertise with advanced automation to deliver superior results while reducing your administrative burden.',
    benefits: [
      { title: 'Clean Claim Rates 98%+', description: 'Our certified billers and proprietary scrubbing technology ensure claims are submitted correctly the first time. This reduces rework, accelerates payment, and maximizes reimbursement.' },
      { title: 'Faster Payments', description: 'Reduce days in accounts receivable from industry average of 45-50 days to 25-30 days. Our systematic claim submission and follow-up puts money in your account weeks faster.' },
      { title: 'Specialty Expertise', description: 'Our team includes specialists in 40+ medical specialties including cardiology, orthopedics, gastroenterology, mental health, and more. We understand the unique coding and billing requirements of your specialty.' },
      { title: 'All Payer Experience', description: 'We work with all major insurance companies, Medicare, Medicaid, workers compensation, auto insurance, and self-pay patients. Our team knows specific requirements and quirks of every payer.' },
      { title: 'Certified Billers', description: 'Our team maintains current certifications including CPB (Certified Professional Biller), CPC (Certified Professional Coder), and specialty-specific certifications. Continuous training keeps skills current.' },
      { title: 'Transparent Reporting', description: 'Access detailed reports showing claim status, aging analysis, denial trends, payer performance, and financial metrics. Know exactly how your practice is performing at all times.' }
    ],
    howItWorks: {
      title: 'Our Medical Billing Process',
      steps: [
        { title: 'Charge Entry', description: 'We enter all charges daily from superbills, EHR data feeds, or electronic interfaces. Each charge is reviewed for completeness and accuracy before moving to coding.' },
        { title: 'Medical Coding', description: 'Our certified coders assign accurate ICD-10, CPT, and HCPCS codes based on provider documentation. We ensure proper modifier usage, medical necessity, and compliance with payer policies.' },
        { title: 'Claim Scrubbing', description: 'All claims pass through our advanced scrubbing system that checks 300+ validation rules. This catches errors related to demographics, coverage, coding, and payer-specific requirements.' },
        { title: 'Electronic Submission', description: 'Clean claims are submitted electronically to payers within 24-48 hours of service. We batch claims for optimal processing and track submission through clearinghouses.' },
        { title: 'Payment Processing', description: 'Payments and ERAs are posted daily with detailed analysis. We verify payment accuracy against contracts, identify underpayments, and document write-offs properly.' },
        { title: 'Denial Resolution', description: 'Denied and rejected claims are researched, corrected, and resubmitted promptly. Our specialists have direct relationships with payer reps to expedite resolution.' },
        { title: 'Patient Billing', description: 'Patient statements are generated and sent according to your schedule. We provide clear, professional statements with multiple payment options and courteous customer service.' },
        { title: 'Regular Reporting', description: 'Comprehensive reports are provided monthly with detailed analysis of practice performance, trends, and opportunities for improvement.' }
      ]
    },
    challenges: {
      title: 'Medical Billing Challenges We Solve',
      items: [
        { problem: 'Complex Coding Requirements', solution: 'Our certified coders stay current with annual code updates, payer policy changes, and specialty-specific guidelines. We ensure every claim is coded correctly for maximum reimbursement.' },
        { problem: 'Frequent Denials', solution: 'Reduce denials to below 5% with proactive claim scrubbing and root cause analysis. We identify patterns and implement corrective actions to prevent future denials.' },
        { problem: 'Payer Complexity', solution: 'Navigate complex payer requirements with our extensive payer knowledge. We know exactly what each payer requires and ensure compliance with all regulations.' },
        { problem: 'Slow Collections', solution: 'Accelerate cash flow with systematic claim follow-up. Our A/R team works every claim aggressively to maximize collections and minimize write-offs.' },
        { problem: 'Billing Staff Issues', solution: 'Eliminate problems with staff turnover, training, and coverage. Our dedicated team provides consistent, expert service with full backup coverage.' },
        { problem: 'Technology Costs', solution: 'Avoid expensive billing software, clearinghouse fees, and system upgrades. Our comprehensive service includes all technology at no additional cost.' }
      ]
    },
    pricing: {
      title: 'Medical Billing Pricing',
      description: 'We offer transparent, performance-based pricing typically ranging from 4-7% of collections. Exact pricing depends on specialty, volume, complexity, and services included. Unlike flat-fee arrangements, you only pay when we collect. Most practices reduce billing costs by 30-40% while improving collection rates. Request a free analysis for customized pricing and ROI projection.'
    },
    faqs: [
      { question: 'How do you ensure claim accuracy?', answer: 'We use a multi-step verification process including certified coder review, automated scrubbing checking 300+ edits, and quality assurance sampling. This results in clean claim rates exceeding 98%.' },
      { question: 'What specialties do you serve?', answer: 'We serve 40+ medical specialties including primary care, cardiology, orthopedics, gastroenterology, mental health, dermatology, pediatrics, OB/GYN, urgent care, and many more. Our team includes specialty-specific experts.' },
      { question: 'How quickly will I see results?', answer: 'Most practices see improvement within the first month including reduced denial rates and faster payments. Full optimization typically occurs within 90 days as we clean up old A/R and implement best practices.' },
      { question: 'Do you handle patient billing?', answer: 'Yes, we provide complete patient billing services including statement generation, payment processing, payment plans, and courteous customer service. We can also integrate with patient payment portals.' },
      { question: 'What payers do you work with?', answer: 'We work with all insurance companies including Medicare, Medicaid, Blues plans, United Healthcare, Aetna, Cigna, Humana, workers compensation carriers, auto insurance, and self-pay patients.' },
      { question: 'Can I access reports online?', answer: 'Yes, our client portal provides 24/7 access to real-time dashboards, detailed reports, claim status, payment history, and analytics. You can run custom reports anytime.' }
    ],
    cta: 'Experience the difference expert medical billing makes. Contact us today for a free practice analysis and customized proposal. Call (866) 261-5711 to get started.'
  },
  // Add more service pages here...
];

// Specialty Pages Content
export const specialtyPages: SpecialtyPageContent[] = [
  {
    title: 'Cardiology Medical Billing Services | Medtransic',
    slug: 'cardiology',
    metaDescription: 'Expert cardiology billing services with deep expertise in cardiac procedures, stress tests, echocardiograms, and catheterization coding. Maximize reimbursement for your cardiology practice.',
    h1: 'Cardiology Medical Billing Services',
    heroDescription: 'Specialized billing services for cardiology practices. Our team understands the complexity of cardiac procedures, diagnostic testing, and interventional cardiology billing. Maximize reimbursement while ensuring complete compliance.',
    overview: 'Cardiology billing requires specialized knowledge of complex procedures, diagnostic codes, and strict compliance requirements. At Medtransic, our cardiology billing specialists have extensive experience with invasive and non-invasive procedures, diagnostic testing, and chronic disease management. We understand the nuances of global periods, technical vs. professional components, modifier requirements, and payer-specific policies. Our expertise ensures accurate coding and maximum reimbursement for your cardiology practice.',
    commonProcedures: [
      { name: 'Echocardiography', cptCodes: '93303-93352', description: 'Complete echo studies including 2D, 3D, transesophageal, and stress echocardiography. We ensure proper component coding and medical necessity documentation.' },
      { name: 'Cardiac Catheterization', cptCodes: '93451-93572', description: 'Left and right heart catheterization, coronary angiography, PTCA, stenting, and diagnostic studies. Complex bundling rules and modifier requirements handled expertly.' },
      { name: 'Stress Testing', cptCodes: '93015-93018, 93350', description: 'Cardiovascular stress tests including treadmill, pharmacologic, and stress echo. Proper professional/technical component separation for optimal reimbursement.' },
      { name: 'Electrophysiology', cptCodes: '93600-93662', description: 'EP studies, ablations, pacemaker implantation, and ICD procedures. Understanding of global periods and follow-up care coding.' },
      { name: 'Nuclear Cardiology', cptCodes: '78451-78499', description: 'Myocardial perfusion imaging including SPECT and PET studies. Proper radiopharmaceutical and professional component coding.' },
      { name: 'Vascular Studies', cptCodes: '93880-93998', description: 'Carotid ultrasound, arterial and venous Doppler studies. Complete ultrasound study documentation requirements.' },
      { name: 'Cardioversions', cptCodes: '92960-92961', description: 'External and internal cardioversion procedures with proper sedation coding when applicable.' },
      { name: 'Office Visits', cptCodes: '99202-99215, 99417', description: 'E&M coding for new and established patients with complex cardiovascular conditions including prolonged service time.' },
      { name: 'Chronic Care Management', cptCodes: '99490, 99491', description: 'CCM services for heart failure, coronary disease, and arrhythmia patients. Proper time documentation and non-face-to-face service billing.' }
    ],
    billingChallenges: [
      { challenge: 'Complex Procedure Coding', solution: 'Our certified cardiovascular coders understand bundling rules, global periods, and modifier requirements specific to cardiology. We ensure accurate coding that maximizes reimbursement while maintaining compliance.' },
      { challenge: 'Multiple Procedure Reductions', solution: 'We apply proper MPPR reductions and understand payer-specific policies. Our expertise prevents both undercoding and overcoding that could trigger audits.' },
      { challenge: 'Technical vs Professional Components', solution: 'Proper component separation is critical for in-office and hospital procedures. We ensure correct modifier usage and split billing when appropriate.' },
      { challenge: 'Medical Necessity Documentation', solution: 'Cardiovascular procedures require extensive documentation of medical necessity. We review documentation requirements and work with providers to ensure compliant coding.' },
      { challenge: 'Payer-Specific Requirements', solution: 'Different payers have unique requirements for cardiac procedures. We maintain current knowledge of Medicare LCD/NCD, private payer policies, and prior authorization requirements.' },
      { challenge: 'Device and Implant Billing', solution: 'Proper billing for high-cost devices including pacemakers, ICDs, and stents. We ensure device credits are tracked and cost recovery is maximized.' }
    ],
    keyMetrics: [
      { metric: 'Clean Claim Rate', value: '98-99%', description: 'Industry-leading first-pass acceptance rate for cardiology claims' },
      { metric: 'Collection Rate', value: '96-98%', description: 'Of net collectible cardiology revenue collected' },
      { metric: 'Days in A/R', value: '28-32 days', description: 'Average for cardiology practices using our services' },
      { metric: 'Denial Rate', value: '< 4%', description: 'Well below the cardiology industry average of 8-12%' }
    ],
    compliance: 'Cardiology billing involves strict compliance requirements including proper medical necessity documentation, appropriate use of modifiers, adherence to global periods, and compliance with payer policies. We maintain current knowledge of Medicare LCD/NCD requirements, cardiovascular CPT coding guidelines, and specialty-specific regulations. Our team receives ongoing training in cardiology compliance including OIG focus areas, RAC audit triggers, and fraud prevention.',
    benefits: [
      { title: 'Cardiology Coding Experts', description: 'Our team includes certified cardiovascular coders (CCC) with deep expertise in invasive and non-invasive cardiology procedures. We stay current with annual code changes and payer policy updates.' },
      { title: 'Maximize Procedure Revenue', description: 'Proper coding of complex cardiac procedures ensures you receive full reimbursement. We understand bundling edits, global periods, and modifier requirements that impact payment.' },
      { title: 'Reduce Denials', description: 'Cardiology claims are frequently denied for medical necessity, coding errors, and documentation issues. Our proactive approach reduces denials to below 4%.' },
      { title: 'Practice Growth Support', description: 'As your practice grows, we scale services seamlessly. Whether adding providers, procedures, or locations, our infrastructure supports your growth.' },
      { title: 'Compliance Protection', description: 'Cardiology is a high-focus area for audits. Our compliant coding and documentation practices protect your practice from OIG scrutiny and RAC audits.' },
      { title: 'Detailed Analytics', description: 'Track productivity by provider, procedure profitability, payer performance, and practice benchmarks. Make data-driven decisions to optimize practice performance.' }
    ],
    faqs: [
      { question: 'Do you handle both invasive and non-invasive cardiology?', answer: 'Yes, our team has extensive experience with all cardiology subspecialties including interventional cardiology, electrophysiology, non-invasive testing, and general cardiology office visits.' },
      { question: 'How do you ensure proper modifier usage?', answer: 'Our coders are trained in cardiovascular-specific modifier requirements including 26/TC, 59/XE/XP/XS/XU, 51, 76/77, and others. We apply modifiers correctly based on payer policies and procedure circumstances.' },
      { question: 'Do you handle prior authorizations?', answer: 'Yes, we manage the entire prior authorization process for procedures, tests, and high-cost medications. Our team knows requirements for all major payers and expedites approvals.' },
      { question: 'What about hospital vs office billing?', answer: 'We handle all settings including office, hospital inpatient, hospital outpatient, ASC, and skilled nursing. Our coders understand place-of-service coding and professional component billing.' },
      { question: 'How do you handle device tracking?', answer: 'We track all implantable devices and ensure proper billing for device placement. We also monitor device credits from hospitals to ensure cost recovery.' },
      { question: 'Can you help with quality reporting?', answer: 'Yes, we assist with MIPS quality measure reporting for cardiovascular specialists including registry submissions and performance optimization.' }
    ]
  },
  // Add more specialty pages here...
];

// Generate HTML content from templates
export function generateServiceHTML(service: ServicePageContent): string {
  let html = `<div style="line-height:1.8;max-width:1000px;">`;

  // Hero
  html += `<p style="font-size:1.125rem;margin-bottom:2rem;color:#374151;">${service.heroDescription}</p>`;

  // Overview
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;color:#111827;">Overview</h2>
    <p style="margin-bottom:1rem;color:#374151;">${service.overview}</p>
  </section>`;

  // Benefits
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">${service.benefits.length} Key Benefits</h2>
    <div style="display:grid;gap:1.5rem;">`;

  service.benefits.forEach(benefit => {
    html += `<div style="padding:1.5rem;background:#f9fafb;border-left:4px solid #2563eb;border-radius:0.5rem;">
      <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:0.75rem;color:#1e40af;">${benefit.title}</h3>
      <p style="color:#4b5563;">${benefit.description}</p>
    </div>`;
  });

  html += `</div></section>`;

  // How It Works
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">${service.howItWorks.title}</h2>
    <div style="display:grid;gap:1.5rem;">`;

  service.howItWorks.steps.forEach((step, index) => {
    html += `<div style="display:flex;gap:1rem;padding:1rem;background:#eff6ff;border-radius:0.5rem;">
      <div style="flex-shrink:0;width:40px;height:40px;background:#2563eb;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;">${index + 1}</div>
      <div>
        <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:0.5rem;color:#1e40af;">${step.title}</h3>
        <p style="color:#4b5563;">${step.description}</p>
      </div>
    </div>`;
  });

  html += `</div></section>`;

  // Challenges
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">${service.challenges.title}</h2>
    <div style="display:grid;gap:1.5rem;">`;

  service.challenges.items.forEach(item => {
    html += `<div style="padding:1.5rem;background:#fef2f2;border-radius:0.5rem;border-left:4px solid #dc2626;">
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:0.75rem;color:#991b1b;">Challenge: ${item.problem}</h3>
      <p style="color:#4b5563;"><strong style="color:#047857;">Solution:</strong> ${item.solution}</p>
    </div>`;
  });

  html += `</div></section>`;

  // Pricing
  html += `<section style="margin-bottom:3rem;padding:2rem;background:#f0fdf4;border-radius:0.5rem;border:2px solid #10b981;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;color:#065f46;">${service.pricing.title}</h2>
    <p style="color:#374151;">${service.pricing.description}</p>
  </section>`;

  // FAQs
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">Frequently Asked Questions</h2>
    <div style="display:grid;gap:1.5rem;">`;

  service.faqs.forEach(faq => {
    html += `<div style="padding:1.5rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;">
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:0.75rem;color:#1f2937;">${faq.question}</h3>
      <p style="color:#4b5563;">${faq.answer}</p>
    </div>`;
  });

  html += `</div></section>`;

  // CTA
  html += `<section style="margin-top:3rem;padding:2.5rem;background:linear-gradient(135deg, #1e40af 0%, #2563eb 100%);border-radius:0.5rem;text-align:center;color:white;">
    <h2 style="font-size:2rem;font-weight:bold;margin-bottom:1.5rem;">Get Started Today</h2>
    <p style="font-size:1.125rem;margin-bottom:1rem;">${service.cta}</p>
    <div style="margin-top:2rem;">
      <a href="tel:8662615711" style="display:inline-block;padding:1rem 2rem;background:white;color:#2563eb;font-weight:600;border-radius:0.5rem;text-decoration:none;margin:0.5rem;">Call (866) 261-5711</a>
      <a href="/contact" style="display:inline-block;padding:1rem 2rem;background:transparent;color:white;font-weight:600;border-radius:0.5rem;border:2px solid white;text-decoration:none;margin:0.5rem;">Request Consultation</a>
    </div>
  </section>`;

  html += `</div>`;
  return html;
}

export function generateSpecialtyHTML(specialty: SpecialtyPageContent): string {
  let html = `<div style="line-height:1.8;max-width:1000px;">`;

  // Hero
  html += `<p style="font-size:1.125rem;margin-bottom:2rem;color:#374151;">${specialty.heroDescription}</p>`;

  // Overview
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;color:#111827;">Overview</h2>
    <p style="margin-bottom:1rem;color:#374151;">${specialty.overview}</p>
  </section>`;

  // Common Procedures
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">Common Procedures & CPT Codes</h2>
    <div style="display:grid;gap:1.5rem;">`;

  specialty.commonProcedures.forEach(proc => {
    html += `<div style="padding:1.5rem;background:#f9fafb;border-radius:0.5rem;border-left:4px solid #059669;">
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:0.5rem;color:#047857;">${proc.name}</h3>
      <p style="font-family:monospace;color:#dc2626;font-weight:600;margin-bottom:0.5rem;">CPT Codes: ${proc.cptCodes}</p>
      <p style="color:#4b5563;">${proc.description}</p>
    </div>`;
  });

  html += `</div></section>`;

  // Key Metrics
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">Performance Metrics</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;">`;

  specialty.keyMetrics.forEach(metric => {
    html += `<div style="padding:1.5rem;background:#eff6ff;border-radius:0.5rem;text-align:center;">
      <div style="font-size:2rem;font-weight:bold;color:#2563eb;margin-bottom:0.5rem;">${metric.value}</div>
      <div style="font-size:1.125rem;font-weight:600;color:#1e40af;margin-bottom:0.5rem;">${metric.metric}</div>
      <div style="font-size:0.875rem;color:#4b5563;">${metric.description}</div>
    </div>`;
  });

  html += `</div></section>`;

  // Billing Challenges
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">Billing Challenges & Solutions</h2>
    <div style="display:grid;gap:1.5rem;">`;

  specialty.billingChallenges.forEach(item => {
    html += `<div style="padding:1.5rem;background:#fef2f2;border-radius:0.5rem;">
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:0.75rem;color:#991b1b;">Challenge: ${item.challenge}</h3>
      <p style="color:#4b5563;"><strong style="color:#047857;">Our Solution:</strong> ${item.solution}</p>
    </div>`;
  });

  html += `</div></section>`;

  // Compliance
  html += `<section style="margin-bottom:3rem;padding:2rem;background:#fef9c3;border-radius:0.5rem;border-left:4px solid #eab308;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1rem;color:#854d0e;">Compliance & Regulations</h2>
    <p style="color:#374151;">${specialty.compliance}</p>
  </section>`;

  // Benefits
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">Why Choose Our ${specialty.title.split('|')[0].trim()} Services</h2>
    <div style="display:grid;gap:1.5rem;">`;

  specialty.benefits.forEach(benefit => {
    html += `<div style="padding:1.5rem;background:#f0fdf4;border-radius:0.5rem;">
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:0.75rem;color:#047857;">${benefit.title}</h3>
      <p style="color:#4b5563;">${benefit.description}</p>
    </div>`;
  });

  html += `</div></section>`;

  // FAQs
  html += `<section style="margin-bottom:3rem;">
    <h2 style="font-size:1.875rem;font-weight:bold;margin-bottom:1.5rem;color:#111827;">Frequently Asked Questions</h2>
    <div style="display:grid;gap:1.5rem;">`;

  specialty.faqs.forEach(faq => {
    html += `<div style="padding:1.5rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;">
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:0.75rem;color:#1f2937;">${faq.question}</h3>
      <p style="color:#4b5563;">${faq.answer}</p>
    </div>`;
  });

  html += `</div></section>`;

  // CTA
  html += `<section style="margin-top:3rem;padding:2.5rem;background:linear-gradient(135deg, #047857 0%, #059669 100%);border-radius:0.5rem;text-align:center;color:white;">
    <h2 style="font-size:2rem;font-weight:bold;margin-bottom:1.5rem;">Ready to Optimize Your ${specialty.title.split('|')[0].trim()} Billing?</h2>
    <p style="font-size:1.125rem;margin-bottom:1rem;">Contact us today for a free consultation and revenue analysis.</p>
    <div style="margin-top:2rem;">
      <a href="tel:8662615711" style="display:inline-block;padding:1rem 2rem;background:white;color:#047857;font-weight:600;border-radius:0.5rem;text-decoration:none;margin:0.5rem;">Call (866) 261-5711</a>
      <a href="/contact" style="display:inline-block;padding:1rem 2rem;background:transparent;color:white;font-weight:600;border-radius:0.5rem;border:2px solid white;text-decoration:none;margin:0.5rem;">Get Free Analysis</a>
    </div>
  </section>`;

  html += `</div>`;
  return html;
}
