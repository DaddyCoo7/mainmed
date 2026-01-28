// Internal links configuration for SEO and user navigation

export interface RelatedLink {
  title: string;
  description: string;
  url: string;
}

export const internalLinksMap: Record<string, RelatedLink[]> = {
  // Core RCM Services
  'medical-billing': [
    {
      title: 'Medical Coding Services',
      description: 'Expert ICD-10, CPT, and HCPCS coding to maximize reimbursements and ensure compliance.',
      url: '/services/medical-coding'
    },
    {
      title: 'Denial Management',
      description: 'Reduce claim denials and recover lost revenue with our proven denial management strategies.',
      url: '/services/denial-management'
    },
    {
      title: 'AR Management',
      description: 'Optimize accounts receivable and accelerate cash flow with proactive AR management.',
      url: '/services/ar-management'
    }
  ],

  'medical-coding': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive billing solutions that streamline your revenue cycle and boost collections.',
      url: '/services/medical-billing'
    },
    {
      title: 'Compliance & HIPAA Audits',
      description: 'Ensure your coding practices meet all regulatory requirements and industry standards.',
      url: '/services/compliance-hipaa-audits'
    },
    {
      title: 'Charge Entry & Payment Posting',
      description: 'Accurate charge capture and payment processing for optimal revenue management.',
      url: '/services/charge-entry-payment-posting'
    }
  ],

  'rcm': [
    {
      title: 'Medical Billing Services',
      description: 'End-to-end billing solutions from claim submission to payment posting.',
      url: '/services/medical-billing'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your practice performance and revenue.',
      url: '/services/analytics-reporting'
    },
    {
      title: 'Eligibility Verification',
      description: 'Real-time insurance verification to prevent claim denials and improve cash flow.',
      url: '/services/eligibility-verification'
    }
  ],

  'outsourcing-medical-billing': [
    {
      title: 'Revenue Cycle Management',
      description: 'Comprehensive RCM solutions that maximize revenue and reduce costs.',
      url: '/services/rcm'
    },
    {
      title: 'Medical Billing Services',
      description: 'Expert end-to-end billing services for all healthcare specialties.',
      url: '/services/medical-billing'
    },
    {
      title: 'Practice Management Consulting',
      description: 'Strategic consulting to optimize your practice operations and profitability.',
      url: '/services/practice-management-consulting'
    }
  ],

  'denial-management': [
    {
      title: 'AR Management',
      description: 'Comprehensive accounts receivable solutions to maximize collections.',
      url: '/services/ar-management'
    },
    {
      title: 'Medical Coding',
      description: 'Prevent denials with accurate, compliant medical coding practices.',
      url: '/services/medical-coding'
    },
    {
      title: 'Old AR Cleanup',
      description: 'Recover outstanding revenue from aged accounts receivable.',
      url: '/services/old-ar-cleanup'
    }
  ],

  'credentialing': [
    {
      title: 'Payer Contract Negotiation',
      description: 'Maximize reimbursement rates through expert contract negotiations.',
      url: '/services/payer-contract-negotiation'
    },
    {
      title: 'Practice Launch Support',
      description: 'Complete support for new practices from setup to first claims.',
      url: '/services/practice-launch'
    },
    {
      title: 'Compliance & HIPAA Audits',
      description: 'Maintain compliance throughout the credentialing process.',
      url: '/services/compliance-hipaa-audits'
    }
  ],

  'ar-management': [
    {
      title: 'Denial Management',
      description: 'Address denials quickly to maintain healthy accounts receivable.',
      url: '/services/denial-management'
    },
    {
      title: 'Payment Reconciliation',
      description: 'Accurate posting and reconciliation for financial clarity.',
      url: '/services/payment-reconciliation'
    },
    {
      title: 'Old AR Cleanup',
      description: 'Recover revenue from aged claims with proven strategies.',
      url: '/services/old-ar-cleanup'
    }
  ],

  'eligibility-verification': [
    {
      title: 'Medical Billing',
      description: 'Seamless billing process starting with accurate eligibility verification.',
      url: '/services/medical-billing'
    },
    {
      title: 'Patient Billing Support',
      description: 'Clear patient communication about coverage and responsibilities.',
      url: '/services/patient-billing-support'
    },
    {
      title: 'Denial Management',
      description: 'Prevent eligibility-related denials before they occur.',
      url: '/services/denial-management'
    }
  ],

  'prior-authorization': [
    {
      title: 'Eligibility Verification',
      description: 'Verify coverage before requesting authorization for optimal workflow.',
      url: '/services/eligibility-verification'
    },
    {
      title: 'Denial Management',
      description: 'Prevent authorization-related denials through proactive management.',
      url: '/services/denial-management'
    },
    {
      title: 'AR Management',
      description: 'Recover outstanding revenue from authorization-related denials.',
      url: '/services/ar-management'
    }
  ],

  'charge-entry-payment-posting': [
    {
      title: 'Medical Billing',
      description: 'Complete billing cycle from charge capture to collections.',
      url: '/services/medical-billing'
    },
    {
      title: 'Payment Reconciliation',
      description: 'Ensure accurate financial records and identify discrepancies.',
      url: '/services/payment-reconciliation'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track key metrics from charge entry and payment data.',
      url: '/services/analytics-reporting'
    }
  ],

  'ehr-emr-integration': [
    {
      title: 'RCM Automation',
      description: 'Automate workflows with seamless EHR integration.',
      url: '/services/rcm-automation'
    },
    {
      title: 'Medical Billing',
      description: 'Streamlined billing through integrated EHR systems.',
      url: '/services/medical-billing'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive reporting across all integrated systems.',
      url: '/services/analytics-reporting'
    }
  ],

  'analytics-reporting': [
    {
      title: 'RCM Services',
      description: 'Optimize your entire revenue cycle with data-driven insights.',
      url: '/services/rcm'
    },
    {
      title: 'Practice Management Consulting',
      description: 'Strategic guidance based on your practice analytics.',
      url: '/services/practice-management-consulting'
    },
    {
      title: 'MIPS/MACRA Reporting',
      description: 'Meet quality reporting requirements with comprehensive analytics.',
      url: '/services/mips-macra-reporting'
    }
  ],

  'compliance-hipaa-audits': [
    {
      title: 'Data Security',
      description: 'Protect patient data with enterprise-grade security measures.',
      url: '/services/data-security'
    },
    {
      title: 'Staff Training & SOP',
      description: 'Ensure staff compliance through comprehensive training.',
      url: '/services/staff-training-sop'
    },
    {
      title: 'Medical Coding',
      description: 'Maintain coding compliance with industry regulations.',
      url: '/services/medical-coding'
    }
  ],

  'mips-macra-reporting': [
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive data analysis for quality reporting.',
      url: '/services/analytics-reporting'
    },
    {
      title: 'EHR/EMR Integration',
      description: 'Automated MIPS data collection through EHR integration.',
      url: '/services/ehr-emr-integration'
    },
    {
      title: 'Practice Management Consulting',
      description: 'Strategic consulting to maximize MIPS performance.',
      url: '/services/practice-management-consulting'
    }
  ],

  'patient-billing-support': [
    {
      title: 'Call Center & Scheduling',
      description: 'Professional call handling and appointment management.',
      url: '/services/call-center-scheduling'
    },
    {
      title: 'Medical Billing',
      description: 'Transparent billing processes that improve patient satisfaction.',
      url: '/services/medical-billing'
    },
    {
      title: 'Payment Reconciliation',
      description: 'Accurate patient payment tracking and reporting.',
      url: '/services/payment-reconciliation'
    }
  ],

  'call-center-scheduling': [
    {
      title: 'Patient Billing Support',
      description: 'Comprehensive patient communication and billing inquiries.',
      url: '/services/patient-billing-support'
    },
    {
      title: 'Practice Management Consulting',
      description: 'Optimize scheduling and front-office operations.',
      url: '/services/practice-management-consulting'
    },
    {
      title: 'EHR/EMR Integration',
      description: 'Integrated scheduling with your practice management system.',
      url: '/services/ehr-emr-integration'
    }
  ],

  'payer-contract-negotiation': [
    {
      title: 'Credentialing Services',
      description: 'Essential credentialing for payer network participation.',
      url: '/services/credentialing'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to support contract negotiations.',
      url: '/services/analytics-reporting'
    },
    {
      title: 'Practice Management Consulting',
      description: 'Strategic guidance for optimal payer relationships.',
      url: '/services/practice-management-consulting'
    }
  ],

  'payment-reconciliation': [
    {
      title: 'Charge Entry & Payment Posting',
      description: 'Accurate payment processing and account reconciliation.',
      url: '/services/charge-entry-payment-posting'
    },
    {
      title: 'AR Management',
      description: 'Maintain healthy accounts receivable through reconciliation.',
      url: '/services/ar-management'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Financial insights from reconciliation data.',
      url: '/services/analytics-reporting'
    }
  ],

  'old-ar-cleanup': [
    {
      title: 'AR Management',
      description: 'Ongoing AR management to prevent aged accounts.',
      url: '/services/ar-management'
    },
    {
      title: 'Denial Management',
      description: 'Address root causes of aged accounts receivable.',
      url: '/services/denial-management'
    },
    {
      title: 'Medical Billing',
      description: 'Improved billing processes to reduce future AR aging.',
      url: '/services/medical-billing'
    }
  ],

  'practice-management-consulting': [
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights for practice optimization.',
      url: '/services/analytics-reporting'
    },
    {
      title: 'Staff Training & SOP',
      description: 'Implement best practices through comprehensive training.',
      url: '/services/staff-training-sop'
    },
    {
      title: 'RCM Services',
      description: 'Optimize your revenue cycle with expert guidance.',
      url: '/services/rcm'
    }
  ],

  'practice-launch': [
    {
      title: 'Credentialing Services',
      description: 'Essential credentialing for new practice enrollment.',
      url: '/services/credentialing'
    },
    {
      title: 'EHR/EMR Integration',
      description: 'Set up integrated systems from day one.',
      url: '/services/ehr-emr-integration'
    },
    {
      title: 'Practice Management Consulting',
      description: 'Strategic planning for successful practice launch.',
      url: '/services/practice-management-consulting'
    }
  ],

  'rcm-automation': [
    {
      title: 'EHR/EMR Integration',
      description: 'Seamless integration for automated workflows.',
      url: '/services/ehr-emr-integration'
    },
    {
      title: 'RCM Services',
      description: 'Comprehensive revenue cycle management with automation.',
      url: '/services/rcm'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Automated reporting and performance tracking.',
      url: '/services/analytics-reporting'
    }
  ],

  'staff-training-sop': [
    {
      title: 'Compliance & HIPAA Audits',
      description: 'Training focused on regulatory compliance.',
      url: '/services/compliance-hipaa-audits'
    },
    {
      title: 'Practice Management Consulting',
      description: 'Operational excellence through staff development.',
      url: '/services/practice-management-consulting'
    },
    {
      title: 'Medical Billing',
      description: 'Billing best practices and training programs.',
      url: '/services/medical-billing'
    }
  ],

  'data-security': [
    {
      title: 'Compliance & HIPAA Audits',
      description: 'Comprehensive compliance and security auditing.',
      url: '/services/compliance-hipaa-audits'
    },
    {
      title: 'EHR/EMR Integration',
      description: 'Secure integration with protected health information.',
      url: '/services/ehr-emr-integration'
    },
    {
      title: 'Staff Training & SOP',
      description: 'Security awareness training for all staff members.',
      url: '/services/staff-training-sop'
    }
  ],

  // Specialty Services
  'cardiology': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized billing for cardiology procedures and diagnostics.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Expert cardiology CPT and ICD-10 coding.',
      url: '/services/medical-coding'
    },
    {
      title: 'Internal Medicine',
      description: 'Billing solutions for related internal medicine practices.',
      url: '/specialties/internal-medicine'
    }
  ],

  'orthopedics': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive orthopedic billing and coding services.',
      url: '/services/medical-billing'
    },
    {
      title: 'Denial Management',
      description: 'Reduce denials on complex orthopedic procedures.',
      url: '/services/denial-management'
    },
    {
      title: 'Physical Therapy',
      description: 'Billing for related rehabilitation services.',
      url: '/specialties/physical-therapy'
    }
  ],

  'pediatrics': [
    {
      title: 'Family Medicine',
      description: 'Billing solutions for family practice settings.',
      url: '/specialties/family-medicine'
    },
    {
      title: 'Medical Billing',
      description: 'Pediatric-specific billing and coding expertise.',
      url: '/services/medical-billing'
    },
    {
      title: 'Primary Care Practices',
      description: 'Comprehensive support for primary care billing.',
      url: '/specialties/primary-care'
    }
  ],

  'dermatology': [
    {
      title: 'Medical Billing Services',
      description: 'Expert billing for medical and cosmetic dermatology.',
      url: '/services/medical-billing'
    },
    {
      title: 'Plastic Surgery',
      description: 'Related aesthetic and reconstructive services billing.',
      url: '/specialties/plastic-surgery'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate dermatology procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'gastroenterology': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized GI procedure and endoscopy billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Internal Medicine',
      description: 'Billing for related internal medicine services.',
      url: '/specialties/internal-medicine'
    },
    {
      title: 'Denial Management',
      description: 'Navigate complex GI procedure authorizations.',
      url: '/services/denial-management'
    }
  ],

  'obgyn': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive OB/GYN billing and coding solutions.',
      url: '/services/medical-billing'
    },
    {
      title: 'Family Medicine',
      description: "Women's health in family practice settings.",
      url: '/specialties/family-medicine'
    },
    {
      title: 'Medical Coding',
      description: 'Expert OB/GYN procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'ophthalmology': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized ophthalmology and vision care billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'ENT Services',
      description: 'Related head and neck specialty billing.',
      url: '/specialties/ent'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate ophthalmology procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'urology': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive urology billing and procedure coding.',
      url: '/services/medical-billing'
    },
    {
      title: 'Nephrology',
      description: 'Related kidney and urinary system billing.',
      url: '/specialties/nephrology'
    },
    {
      title: 'Denial Management',
      description: 'Navigate complex urological procedure approvals.',
      url: '/services/denial-management'
    }
  ],

  'neurosurgery': [
    {
      title: 'Medical Billing Services',
      description: 'Expert billing for complex neurosurgical procedures.',
      url: '/services/medical-billing'
    },
    {
      title: 'Orthopedics',
      description: 'Related spine surgery billing expertise.',
      url: '/specialties/orthopedics'
    },
    {
      title: 'Medical Coding',
      description: 'Specialized neurosurgery coding services.',
      url: '/services/medical-coding'
    }
  ],

  'oncology': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive oncology and chemotherapy billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Hematology',
      description: 'Related blood disorder treatment billing.',
      url: '/specialties/hematology'
    },
    {
      title: 'Denial Management',
      description: 'Navigate complex cancer treatment authorizations.',
      url: '/services/denial-management'
    }
  ],

  'radiology': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized radiology and imaging center billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Expert radiology CPT coding and modifiers.',
      url: '/services/medical-coding'
    },
    {
      title: 'Diagnostic Imaging',
      description: 'Comprehensive imaging facility billing solutions.',
      url: '/specialties/diagnostic-imaging'
    }
  ],

  'anesthesiology': [
    {
      title: 'Medical Billing Services',
      description: 'Expert anesthesia billing with time-based calculations.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate anesthesia coding and modifiers.',
      url: '/services/medical-coding'
    },
    {
      title: 'Pain Management',
      description: 'Related chronic pain treatment billing.',
      url: '/specialties/pain-management'
    }
  ],

  'emergency-medicine': [
    {
      title: 'Medical Billing Services',
      description: 'Fast-paced emergency department billing solutions.',
      url: '/services/medical-billing'
    },
    {
      title: 'Urgent Care',
      description: 'Related urgent care center billing.',
      url: '/specialties/urgent-care'
    },
    {
      title: 'Hospital Facility Billing',
      description: 'Emergency department facility fee management.',
      url: '/specialties/hospital-facility-billing'
    }
  ],

  'mental-health': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized mental health and therapy billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Behavioral health coding expertise.',
      url: '/services/medical-coding'
    },
    {
      title: 'Telemedicine',
      description: 'Telehealth billing for mental health services.',
      url: '/specialties/telemedicine'
    }
  ],

  'physical-therapy': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive PT and rehabilitation billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Occupational Therapy',
      description: 'Related OT billing services.',
      url: '/specialties/occupational-therapy'
    },
    {
      title: 'Orthopedics',
      description: 'Related musculoskeletal specialty billing.',
      url: '/specialties/orthopedics'
    }
  ],

  'chiropractic': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized chiropractic billing and coding.',
      url: '/services/medical-billing'
    },
    {
      title: 'Physical Therapy',
      description: 'Related rehabilitation services billing.',
      url: '/specialties/physical-therapy'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate chiropractic procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'dental': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized dental and oral surgery billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Oral & Maxillofacial Surgery',
      description: 'Complex oral surgery billing expertise.',
      url: '/specialties/oral-maxillofacial-surgery'
    },
    {
      title: 'Medical Coding',
      description: 'Dental CDT and medical coding services.',
      url: '/services/medical-coding'
    }
  ],

  'primary-care': [
    {
      title: 'Family Medicine',
      description: 'Comprehensive family practice billing solutions.',
      url: '/specialties/family-medicine'
    },
    {
      title: 'Medical Billing Services',
      description: 'Complete primary care billing and RCM.',
      url: '/services/medical-billing'
    },
    {
      title: 'Internal Medicine',
      description: 'Adult primary care billing expertise.',
      url: '/specialties/internal-medicine'
    }
  ],

  'urgent-care': [
    {
      title: 'Medical Billing Services',
      description: 'Fast and efficient urgent care billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Emergency Medicine',
      description: 'Related emergency care billing services.',
      url: '/specialties/emergency-medicine'
    },
    {
      title: 'Primary Care',
      description: 'Primary care billing for walk-in clinics.',
      url: '/specialties/primary-care'
    }
  ],

  'family-medicine': [
    {
      title: 'Primary Care Practices',
      description: 'Comprehensive primary care billing solutions.',
      url: '/specialties/primary-care'
    },
    {
      title: 'Pediatrics',
      description: 'Family practice pediatric billing.',
      url: '/specialties/pediatrics'
    },
    {
      title: 'Medical Billing Services',
      description: 'Complete family medicine RCM solutions.',
      url: '/services/medical-billing'
    }
  ],

  'internal-medicine': [
    {
      title: 'Primary Care Practices',
      description: 'Adult primary care billing expertise.',
      url: '/specialties/primary-care'
    },
    {
      title: 'Cardiology',
      description: 'Cardiovascular care billing services.',
      url: '/specialties/cardiology'
    },
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive internal medicine billing.',
      url: '/services/medical-billing'
    }
  ],

  'pain-management': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized pain management procedure billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Anesthesiology',
      description: 'Related anesthesia services billing.',
      url: '/specialties/anesthesiology'
    },
    {
      title: 'Physical Therapy',
      description: 'Rehabilitation services for pain management.',
      url: '/specialties/physical-therapy'
    }
  ],

  'nephrology': [
    {
      title: 'Medical Billing Services',
      description: 'Expert nephrology and dialysis billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Urology',
      description: 'Related urinary system specialty billing.',
      url: '/specialties/urology'
    },
    {
      title: 'Internal Medicine',
      description: 'Related internal medicine billing services.',
      url: '/specialties/internal-medicine'
    }
  ],

  'endocrinology': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized endocrinology and diabetes care billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Internal Medicine',
      description: 'Related internal medicine specialty billing.',
      url: '/specialties/internal-medicine'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate endocrinology procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'pulmonology': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive pulmonology and respiratory care billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Internal Medicine',
      description: 'Related internal medicine billing services.',
      url: '/specialties/internal-medicine'
    },
    {
      title: 'Sleep Medicine',
      description: 'Related sleep disorder treatment billing.',
      url: '/specialties/sleep-medicine'
    }
  ],

  'rheumatology': [
    {
      title: 'Medical Billing Services',
      description: 'Expert rheumatology and autoimmune disease billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Internal Medicine',
      description: 'Related internal medicine specialty billing.',
      url: '/specialties/internal-medicine'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate rheumatology infusion and injection coding.',
      url: '/services/medical-coding'
    }
  ],

  'infectious-disease': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized infectious disease and HIV care billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Internal Medicine',
      description: 'Related internal medicine billing services.',
      url: '/specialties/internal-medicine'
    },
    {
      title: 'Medical Coding',
      description: 'Complex infectious disease coding expertise.',
      url: '/services/medical-coding'
    }
  ],

  'hematology': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive hematology and blood disorder billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Oncology',
      description: 'Related cancer treatment billing services.',
      url: '/specialties/oncology'
    },
    {
      title: 'Internal Medicine',
      description: 'Related internal medicine specialty billing.',
      url: '/specialties/internal-medicine'
    }
  ],

  'allergy-immunology': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized allergy testing and immunotherapy billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate allergy testing and treatment coding.',
      url: '/services/medical-coding'
    },
    {
      title: 'Pediatrics',
      description: 'Pediatric allergy care billing.',
      url: '/specialties/pediatrics'
    }
  ],

  'geriatrics': [
    {
      title: 'Medical Billing Services',
      description: 'Expert geriatric and elder care billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Internal Medicine',
      description: 'Related internal medicine for elderly patients.',
      url: '/specialties/internal-medicine'
    },
    {
      title: 'Home Health',
      description: 'Home-based care billing for seniors.',
      url: '/specialties/home-health'
    }
  ],

  'plastic-surgery': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized plastic and reconstructive surgery billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Dermatology',
      description: 'Related cosmetic dermatology billing.',
      url: '/specialties/dermatology'
    },
    {
      title: 'Medical Coding',
      description: 'Complex plastic surgery procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'podiatry': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive podiatry and foot surgery billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Orthopedics',
      description: 'Related musculoskeletal care billing.',
      url: '/specialties/orthopedics'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate podiatry procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'ent': [
    {
      title: 'Medical Billing Services',
      description: 'Expert ENT and otolaryngology billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Allergy & Immunology',
      description: 'Related allergy testing and treatment billing.',
      url: '/specialties/allergy-immunology'
    },
    {
      title: 'Medical Coding',
      description: 'Specialized ENT procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'sleep-medicine': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized sleep study and treatment billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Pulmonology',
      description: 'Related respiratory care billing.',
      url: '/specialties/pulmonology'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate sleep study coding and documentation.',
      url: '/services/medical-coding'
    }
  ],

  'pathology': [
    {
      title: 'Laboratory Billing',
      description: 'Comprehensive laboratory services billing.',
      url: '/specialties/laboratory-billing'
    },
    {
      title: 'Medical Billing Services',
      description: 'Expert pathology and lab billing solutions.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate pathology CPT coding.',
      url: '/services/medical-coding'
    }
  ],

  'diagnostic-imaging': [
    {
      title: 'Radiology Services',
      description: 'Comprehensive radiology billing solutions.',
      url: '/specialties/radiology'
    },
    {
      title: 'Medical Billing Services',
      description: 'Expert diagnostic imaging center billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate imaging procedure coding.',
      url: '/services/medical-coding'
    }
  ],

  'interventional-radiology': [
    {
      title: 'Radiology Services',
      description: 'Comprehensive radiology billing expertise.',
      url: '/specialties/radiology'
    },
    {
      title: 'Medical Billing Services',
      description: 'Complex interventional procedure billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Specialized interventional radiology coding.',
      url: '/services/medical-coding'
    }
  ],

  'thoracic-surgery': [
    {
      title: 'Medical Billing Services',
      description: 'Expert thoracic and cardiovascular surgery billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Cardiology',
      description: 'Related cardiovascular care billing.',
      url: '/specialties/cardiology'
    },
    {
      title: 'Medical Coding',
      description: 'Complex thoracic surgery coding expertise.',
      url: '/services/medical-coding'
    }
  ],

  'oral-maxillofacial-surgery': [
    {
      title: 'Dental Services',
      description: 'Related dental billing services.',
      url: '/specialties/dental'
    },
    {
      title: 'Medical Billing Services',
      description: 'Complex oral surgery billing expertise.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Specialized oral surgery coding.',
      url: '/services/medical-coding'
    }
  ],

  'occupational-therapy': [
    {
      title: 'Physical Therapy',
      description: 'Related physical therapy billing services.',
      url: '/specialties/physical-therapy'
    },
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive OT billing and coding.',
      url: '/services/medical-billing'
    },
    {
      title: 'Rehabilitation Services',
      description: 'Related rehabilitation billing expertise.',
      url: '/specialties/rehabilitation-sports-medicine'
    }
  ],

  'speech-therapy': [
    {
      title: 'Occupational Therapy',
      description: 'Related therapy services billing.',
      url: '/specialties/occupational-therapy'
    },
    {
      title: 'Medical Billing Services',
      description: 'Expert speech therapy billing solutions.',
      url: '/services/medical-billing'
    },
    {
      title: 'Pediatrics',
      description: 'Pediatric speech therapy billing.',
      url: '/specialties/pediatrics'
    }
  ],

  'respiratory-therapy': [
    {
      title: 'Pulmonology',
      description: 'Related pulmonology services billing.',
      url: '/specialties/pulmonology'
    },
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive respiratory therapy billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Home Health',
      description: 'Home-based respiratory care billing.',
      url: '/specialties/home-health'
    }
  ],

  'rehabilitation-sports-medicine': [
    {
      title: 'Physical Therapy',
      description: 'Related physical therapy services billing.',
      url: '/specialties/physical-therapy'
    },
    {
      title: 'Orthopedics',
      description: 'Related orthopedic care billing.',
      url: '/specialties/orthopedics'
    },
    {
      title: 'Medical Billing Services',
      description: 'Expert sports medicine billing solutions.',
      url: '/services/medical-billing'
    }
  ],

  'home-health': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized home health care billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate home health coding and OASIS.',
      url: '/services/medical-coding'
    },
    {
      title: 'Geriatrics',
      description: 'Related elder care services billing.',
      url: '/specialties/geriatrics'
    }
  ],

  'telemedicine': [
    {
      title: 'Medical Billing Services',
      description: 'Expert telehealth billing and coding.',
      url: '/services/medical-billing'
    },
    {
      title: 'EHR/EMR Integration',
      description: 'Integrated telemedicine platform billing.',
      url: '/services/ehr-emr-integration'
    },
    {
      title: 'Primary Care',
      description: 'Virtual primary care billing solutions.',
      url: '/specialties/primary-care'
    }
  ],

  'hospital-facility-billing': [
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive hospital billing solutions.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Facility coding and DRG expertise.',
      url: '/services/medical-coding'
    },
    {
      title: 'Emergency Medicine',
      description: 'Emergency department billing services.',
      url: '/specialties/emergency-medicine'
    }
  ],

  'laboratory-billing': [
    {
      title: 'Medical Billing Services',
      description: 'Expert laboratory and pathology billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Pathology',
      description: 'Related pathology services billing.',
      url: '/specialties/pathology'
    },
    {
      title: 'Medical Coding',
      description: 'Accurate laboratory CPT coding.',
      url: '/services/medical-coding'
    }
  ],

  'durable-medical-equipment': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized DME billing and HCPCS coding.',
      url: '/services/medical-billing'
    },
    {
      title: 'Home Health',
      description: 'Related home health equipment billing.',
      url: '/specialties/home-health'
    },
    {
      title: 'Medical Coding',
      description: 'Expert HCPCS and DME coding.',
      url: '/services/medical-coding'
    }
  ],

  'genetic-testing': [
    {
      title: 'Laboratory Billing',
      description: 'Related laboratory services billing.',
      url: '/specialties/laboratory-billing'
    },
    {
      title: 'Medical Billing Services',
      description: 'Specialized genetic testing billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Complex genetic testing coding expertise.',
      url: '/services/medical-coding'
    }
  ],

  'clinical-research': [
    {
      title: 'Medical Billing Services',
      description: 'Clinical trial billing and research billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Compliance & HIPAA Audits',
      description: 'Research compliance and regulatory support.',
      url: '/services/compliance-hipaa-audits'
    },
    {
      title: 'Laboratory Billing',
      description: 'Research laboratory billing services.',
      url: '/specialties/laboratory-billing'
    }
  ],

  'community-health-clinics': [
    {
      title: 'Primary Care',
      description: 'Primary care billing for community clinics.',
      url: '/specialties/primary-care'
    },
    {
      title: 'Medical Billing Services',
      description: 'Comprehensive FQHC billing solutions.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'FQHC-specific coding expertise.',
      url: '/services/medical-coding'
    }
  ],

  'occupational-health-clinics': [
    {
      title: 'Primary Care',
      description: 'Related primary care billing services.',
      url: '/specialties/primary-care'
    },
    {
      title: 'Medical Billing Services',
      description: 'Occupational health and workers comp billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Urgent Care',
      description: 'Related urgent care billing services.',
      url: '/specialties/urgent-care'
    }
  ],

  'wound-care-centers': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized wound care billing expertise.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Complex wound care procedure coding.',
      url: '/services/medical-coding'
    },
    {
      title: 'Hospital Facility Billing',
      description: 'Outpatient wound center billing.',
      url: '/specialties/hospital-facility-billing'
    }
  ],

  'pharmacy-billing': [
    {
      title: 'Medical Billing Services',
      description: 'Specialized pharmacy and medication billing.',
      url: '/services/medical-billing'
    },
    {
      title: 'Medical Coding',
      description: 'Pharmacy HCPCS and NDC coding.',
      url: '/services/medical-coding'
    },
    {
      title: 'Durable Medical Equipment',
      description: 'Related DME dispensing billing.',
      url: '/specialties/durable-medical-equipment'
    }
  ],

  'virtual-assistants': [
    {
      title: 'Call Center & Scheduling',
      description: 'Professional appointment scheduling and call management services.',
      url: '/services/call-center-scheduling'
    },
    {
      title: 'Eligibility Verification',
      description: 'Real-time insurance verification to prevent claim denials.',
      url: '/services/eligibility-verification'
    },
    {
      title: 'Patient Billing Support',
      description: 'Dedicated patient communication for billing inquiries and payment arrangements.',
      url: '/services/patient-billing-support'
    }
  ]
};

// Helper function to get related links for a page
export function getRelatedLinks(pageKey: string): RelatedLink[] {
  return internalLinksMap[pageKey] || [];
}
