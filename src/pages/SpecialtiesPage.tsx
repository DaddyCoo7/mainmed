import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Brain, Home, FlaskConical, Armchair as Wheelchair, Heart, Bluetooth as Tooth, Users, Zap, Eye, Baby, Bone, Settings as Lungs, Droplets, Pill, User, Dna, Stethoscope, Armchair, Ear, Footprints, Syringe, Monitor, Handshake, Activity as Run, ScanLine, MessageCircle, Moon, Radiation, Wind, Droplet, Skull, Zap as Ribs, TestTube, Brush as Virus, Ban as Bandage, Crosshair, Microscope, Building2, Ambulance, Briefcase, ArrowRight, CheckCircle, Award, TrendingUp, Sparkles, Search, X } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import OrganizationSchema from '../components/OrganizationSchema';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';

const SpecialtiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = [
    // Core Specialties (Updated)
    {
      icon: Activity,
      title: 'Physical Therapy (PT)',
      description: 'Expert billing for therapeutic procedures, progress notes, and multi-session treatment plans with precise CPT coding to maximize reimbursements.',
      features: [
        'Therapeutic procedure billing',
        'Progress note documentation',
        'Multi-session treatment plans',
        'Precise CPT coding'
      ],
      benefits: [
        'Maximize PT reimbursements',
        'Reduce documentation burden',
        'Improve claim accuracy'
      ],
      linkTo: '/specialties/physical-therapy'
    },
    {
      icon: Brain,
      title: 'Mental & Behavioral Health',
      description: 'Comprehensive billing for psychiatrists, psychologists, and therapists — handling time-based codes, telehealth sessions, and prior authorizations.',
      features: [
        'Time-based code billing',
        'Telehealth session management',
        'Prior authorization handling',
        'Multi-provider coordination'
      ],
      benefits: [
        'Optimize therapy billing',
        'Streamline telehealth revenue',
        'Reduce authorization delays'
      ],
      linkTo: '/specialties/mental-health'
    },
    {
      icon: Home,
      title: 'Home Health & Hospice Care',
      description: 'Streamlined billing for agencies with accurate OASIS documentation, RAPs/NOAs submissions, and compliant claim tracking.',
      features: [
        'OASIS documentation',
        'RAPs/NOAs submissions',
        'Compliant claim tracking',
        'Episode-based billing'
      ],
      benefits: [
        'Improve episode payments',
        'Ensure compliance',
        'Reduce audit risks'
      ],
      linkTo: '/specialties/home-health'
    },
    {
      icon: FlaskConical,
      title: 'Laboratories & Pathology',
      description: 'End-to-end billing for clinical, molecular, and toxicology labs — including electronic order entry, accession management, and payer audits.',
      features: [
        'Electronic order entry',
        'Accession management',
        'Payer audit support',
        'Panel bundling expertise'
      ],
      benefits: [
        'Quick claim turnaround',
        'Higher reimbursement accuracy',
        'Audit-ready reporting'
      ],
      linkTo: '/specialties/laboratories-pathology'
    },
    {
      icon: Wheelchair,
      title: 'Durable Medical Equipment (DME)',
      description: 'DME billing services covering rentals, repairs, and purchases — ensuring compliance with CMNs, modifiers, and same/similar checks.',
      features: [
        'Rental/purchase billing',
        'CMN documentation',
        'Modifier compliance',
        'Same/similar checks'
      ],
      benefits: [
        'Eliminate denials',
        'Faster claim resolution',
        'Better compliance management'
      ],
      linkTo: '/specialties/durable-medical-equipment'
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Accurate billing for diagnostic and interventional cardiology — handling EKGs, cath labs, and complex device implantation claims.',
      features: [
        'EKG billing',
        'Cath lab procedures',
        'Device implantation',
        'Diagnostic testing'
      ],
      benefits: [
        'Maximize procedure revenue',
        'Reduce coding errors',
        'Accelerate payments'
      ],
      linkTo: '/specialties/cardiology'
    },
    {
      icon: Tooth,
      title: 'Dental Practices',
      description: 'Dental and oral surgery billing using CDT, CPT, and ICD-10 coding to ensure crosswalk accuracy and quick dental-to-medical reimbursements.',
      features: [
        'CDT/CPT coding',
        'Crosswalk accuracy',
        'Medical crossover billing',
        'Oral surgery procedures'
      ],
      benefits: [
        'Dual billing optimization',
        'Faster reimbursements',
        'Reduce claim denials'
      ],
      linkTo: '/specialties/dental'
    },
    {
      icon: Sparkles,
      title: 'Dermatology',
      description: 'Expert billing for medical dermatology, surgical procedures, and cosmetic treatments with precise distinction between medical and cosmetic coding.',
      features: [
        'Medical dermatology',
        'Surgical procedures',
        'Cosmetic vs medical coding',
        'Pathology coordination'
      ],
      benefits: [
        'Maximize procedure revenue',
        'Proper cosmetic/medical distinction',
        'Reduce coding errors'
      ],
      linkTo: '/specialties/dermatology'
    },
    {
      icon: Users,
      title: 'Family & Internal Medicine',
      description: 'Comprehensive billing for family care providers with preventive service codes, annual wellness visits, and chronic care management.',
      features: [
        'Preventive service codes',
        'Annual wellness visits',
        'Chronic care management',
        'Multi-generational care'
      ],
      benefits: [
        'Optimize preventive revenue',
        'Improve chronic care billing',
        'Enhance patient retention'
      ],
      linkTo: '/specialties/family-medicine'
    },
    {
      icon: Zap,
      title: 'Chiropractic Clinics',
      description: 'Specialized billing for spinal manipulation and physiotherapy procedures with compliance to frequency limits and medical necessity.',
      features: [
        'Spinal manipulation billing',
        'Physiotherapy procedures',
        'Frequency limit compliance',
        'Medical necessity documentation'
      ],
      benefits: [
        'Maximize treatment revenue',
        'Ensure compliance',
        'Reduce audit risks'
      ],
      linkTo: '/specialties/chiropractic'
    },
    {
      icon: Wind,
      title: 'Allergy & Immunology',
      description: 'Specialized billing for immunotherapy, allergy testing, biologic medications, and extract preparation with complex bundling expertise.',
      features: [
        'Immunotherapy billing',
        'Allergy testing panels',
        'Biologic administration',
        'Extract preparation'
      ],
      benefits: [
        'Maximize immunotherapy revenue',
        'Optimize testing panels',
        'Reduce prior auth delays'
      ],
      linkTo: '/specialties/allergy-immunology'
    },
    {
      icon: Eye,
      title: 'Ophthalmology & Optometry',
      description: 'Full-scope billing for exams, vision therapy, surgeries, and diagnostic imaging — covering both routine and medical eye care.',
      features: [
        'Routine/medical eye exams',
        'Vision therapy billing',
        'Surgical procedures',
        'Diagnostic imaging'
      ],
      benefits: [
        'Dual billing optimization',
        'Surgical revenue maximization',
        'Improved claim accuracy'
      ],
      linkTo: '/specialties/ophthalmology'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Pediatric billing focused on immunizations, preventive checkups, and age-based modifiers to ensure accurate reimbursement.',
      features: [
        'Immunization billing',
        'Preventive checkups',
        'Age-based modifiers',
        'Developmental screening'
      ],
      benefits: [
        'Optimize well-child revenue',
        'Improve vaccination billing',
        'Enhance preventive care'
      ],
      linkTo: '/specialties/pediatrics'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Billing for orthopedic procedures, imaging, and physical therapy — minimizing denials for global periods and bundled claims.',
      features: [
        'Surgical procedures',
        'Imaging coordination',
        'Global period management',
        'Bundled claim handling'
      ],
      benefits: [
        'Maximize surgical revenue',
        'Reduce global denials',
        'Improve bundling accuracy'
      ],
      linkTo: '/specialties/orthopedics'
    },
    {
      icon: Lungs,
      title: 'Pulmonology',
      description: 'Specialized billing for respiratory function tests, sleep studies, and chronic respiratory conditions.',
      features: [
        'Respiratory function tests',
        'Sleep study billing',
        'Chronic condition management',
        'Diagnostic procedures'
      ],
      benefits: [
        'Optimize test billing',
        'Improve chronic care revenue',
        'Reduce claim complexity'
      ],
      linkTo: '/specialties/pulmonology'
    },
    {
      icon: Droplets,
      title: 'Nephrology & Dialysis Centers',
      description: 'Billing for dialysis sessions, vascular access care, and ESRD management with precise monthly capitation tracking.',
      features: [
        'Dialysis session billing',
        'Vascular access care',
        'ESRD management',
        'Monthly capitation tracking'
      ],
      benefits: [
        'Optimize dialysis revenue',
        'Improve capitation accuracy',
        'Reduce billing errors'
      ],
      linkTo: '/specialties/nephrology'
    },
    {
      icon: Pill,
      title: 'Pharmacy Billing & Compounding',
      description: 'Claim processing for compound drugs, prior authorizations, and DME-linked pharmacy items.',
      features: [
        'Compound drug billing',
        'Prior authorization management',
        'DME-linked items',
        'Specialty pharmacy'
      ],
      benefits: [
        'Maximize compound revenue',
        'Reduce authorization delays',
        'Improve claim acceptance'
      ],
      linkTo: '/specialties/pharmacy-billing'
    },
    {
      icon: User,
      title: 'OB/GYN & Women\'s Health',
      description: 'End-to-end billing for prenatal, delivery, and postnatal care — managing bundled claims, ultrasounds, and contraceptive devices.',
      features: [
        'Prenatal care billing',
        'Delivery management',
        'Bundled claim handling',
        'Device billing'
      ],
      benefits: [
        'Optimize maternity revenue',
        'Improve bundling accuracy',
        'Reduce claim denials'
      ],
      linkTo: '/specialties/obgyn'
    },
    {
      icon: Dna,
      title: 'Genetic & Molecular Testing Labs',
      description: 'Expert billing for high-complexity labs — including CPT panel codes, molecular diagnostics, and payer-specific requirements.',
      features: [
        'CPT panel codes',
        'Molecular diagnostics',
        'Payer-specific requirements',
        'High-complexity testing'
      ],
      benefits: [
        'Maximize test revenue',
        'Ensure payer compliance',
        'Reduce claim denials'
      ],
      linkTo: '/specialties/genetic-testing'
    },
    {
      icon: Zap,
      title: 'Pain Management',
      description: 'Expert billing for interventional pain procedures, spinal injections, radiofrequency ablation, and implantable devices with complex multi-level coding.',
      features: [
        'Spinal injection procedures',
        'Radiofrequency ablation',
        'Implantable device billing',
        'Multi-level procedure coding'
      ],
      benefits: [
        'Maximize procedure revenue',
        'Ensure fluoroscopy billing',
        'Reduce coding complexity'
      ],
      linkTo: '/specialties/pain-management'
    },
    {
      icon: Stethoscope,
      title: 'Urgent Care & Walk-in Clinics',
      description: 'Fast-track billing for high-volume clinics with real-time eligibility checks and streamlined coding for same-day services.',
      features: [
        'High-volume processing',
        'Real-time eligibility',
        'Same-day service coding',
        'Fast-track billing'
      ],
      benefits: [
        'Reduce processing time',
        'Improve cash flow',
        'Handle volume fluctuations'
      ],
      linkTo: '/specialties/urgent-care'
    },
    {
      icon: Armchair,
      title: 'Occupational Therapy (OT)',
      description: 'Precise billing for therapy plans, work-related injury treatments, and evaluation codes for functional progress.',
      features: [
        'Therapy plan billing',
        'Work injury treatments',
        'Functional evaluations',
        'Progress documentation'
      ],
      benefits: [
        'Optimize therapy revenue',
        'Improve evaluation billing',
        'Reduce documentation burden'
      ],
      linkTo: '/specialties/occupational-therapy'
    },
    {
      icon: Ear,
      title: 'ENT (Ear, Nose & Throat)',
      description: 'Billing for diagnostic endoscopies, audiology, allergy testing, and sinus procedures — ensuring correct global modifiers.',
      features: [
        'Diagnostic endoscopies',
        'Audiology testing',
        'Allergy procedures',
        'Global modifier management'
      ],
      benefits: [
        'Maximize procedure revenue',
        'Ensure modifier accuracy',
        'Reduce global denials'
      ],
      linkTo: '/specialties/ent'
    },
    {
      icon: Footprints,
      title: 'Podiatry',
      description: 'Billing for foot care, diabetic ulcers, and orthotics — with compliance for routine foot care exclusions.',
      features: [
        'Foot care procedures',
        'Diabetic ulcer treatment',
        'Orthotic billing',
        'Exclusion compliance'
      ],
      benefits: [
        'Optimize foot care revenue',
        'Ensure compliance',
        'Reduce claim denials'
      ],
      linkTo: '/specialties/podiatry'
    },
    {
      icon: Syringe,
      title: 'Anesthesiology & Surgery Centers',
      description: 'Time-unit based billing for anesthesia, surgical codes, and ambulatory surgery center claims.',
      features: [
        'Time-unit billing',
        'Anesthesia procedures',
        'ASC claim management',
        'Surgical code coordination'
      ],
      benefits: [
        'Maximize anesthesia revenue',
        'Improve time-unit accuracy',
        'Reduce ASC denials'
      ],
      linkTo: '/specialties/anesthesiology'
    },
    {
      icon: Monitor,
      title: 'Telemedicine & Virtual Care',
      description: 'Billing optimized for remote visits, asynchronous care, and cross-state telehealth compliance.',
      features: [
        'Remote visit billing',
        'Asynchronous care',
        'Cross-state compliance',
        'Virtual care optimization'
      ],
      benefits: [
        'Maximize telehealth revenue',
        'Ensure compliance',
        'Reduce virtual denials'
      ],
      linkTo: '/specialties/telemedicine'
    },
    {
      icon: Handshake,
      title: 'Community Health Clinics',
      description: 'Billing for FQHCs, CHCs, and rural health centers — managing PPS rates and sliding-scale patient billing.',
      features: [
        'FQHC billing',
        'PPS rate management',
        'Sliding-scale billing',
        'Rural health compliance'
      ],
      benefits: [
        'Optimize FQHC revenue',
        'Improve PPS accuracy',
        'Reduce compliance risks'
      ],
      linkTo: '/specialties/community-health-clinics'
    },
    {
      icon: Users,
      title: 'Primary Care Practices',
      description: 'All-inclusive billing for preventive visits, chronic care, and follow-up appointments to improve claim accuracy.',
      features: [
        'Preventive visit billing',
        'Chronic care management',
        'Follow-up appointments',
        'Comprehensive care'
      ],
      benefits: [
        'Optimize primary care revenue',
        'Improve chronic billing',
        'Enhance claim accuracy'
      ],
      linkTo: '/specialties/primary-care-practices'
    },
    {
      icon: Run,
      title: 'Rehabilitation & Sports Medicine',
      description: 'Billing for rehab evaluations, therapy sessions, and post-surgical care coordination.',
      features: [
        'Rehab evaluations',
        'Therapy sessions',
        'Post-surgical care',
        'Sports medicine procedures'
      ],
      benefits: [
        'Maximize rehab revenue',
        'Improve therapy billing',
        'Reduce coordination errors'
      ],
      linkTo: '/specialties/rehabilitation-sports-medicine'
    },
    {
      icon: ScanLine,
      title: 'Diagnostic Imaging & Radiology',
      description: 'Accurate billing for X-rays, CT, MRI, and ultrasound with medical necessity validation and report linking.',
      features: [
        'Multi-modality imaging',
        'Medical necessity validation',
        'Report linking',
        'Technical/professional billing'
      ],
      benefits: [
        'Maximize imaging revenue',
        'Ensure medical necessity',
        'Reduce claim denials'
      ],
      linkTo: '/specialties/diagnostic-imaging-radiology'
    },
    {
      icon: MessageCircle,
      title: 'Speech Therapy',
      description: 'Specialized billing for language and speech rehabilitation sessions — ensuring compliant therapy documentation.',
      features: [
        'Speech rehabilitation',
        'Language therapy',
        'Therapy documentation',
        'Progress tracking'
      ],
      benefits: [
        'Maximize therapy revenue',
        'Ensure documentation compliance',
        'Improve claim acceptance'
      ],
      linkTo: '/specialties/speech-therapy'
    },
    {
      icon: Moon,
      title: 'Sleep Medicine & Sleep Labs',
      description: 'Billing for diagnostic and therapeutic sleep studies, PAP therapy, and home-based testing.',
      features: [
        'Sleep study billing',
        'PAP therapy management',
        'Home-based testing',
        'Diagnostic procedures'
      ],
      benefits: [
        'Optimize sleep study revenue',
        'Improve therapy billing',
        'Reduce claim complexity'
      ],
      linkTo: '/specialties/sleep-medicine'
    },
    // Additional 20 Specialties
    {
      icon: Radiation,
      title: 'Oncology',
      description: 'Cancer care billing covering chemotherapy, infusion therapy, and radiation oncology.',
      features: [
        'Chemotherapy billing',
        'Infusion therapy',
        'Radiation oncology',
        'Complex treatment plans'
      ],
      benefits: [
        'Maximize cancer care revenue',
        'Optimize infusion billing',
        'Reduce treatment denials'
      ],
      linkTo: '/specialties/oncology'
    },
    {
      icon: Wind,
      title: 'Respiratory Therapy',
      description: 'Billing for pulmonary rehab, oxygen therapy, and mechanical ventilation.',
      features: [
        'Pulmonary rehabilitation',
        'Oxygen therapy billing',
        'Mechanical ventilation',
        'Respiratory care'
      ],
      benefits: [
        'Optimize respiratory revenue',
        'Improve therapy billing',
        'Reduce equipment denials'
      ],
      linkTo: '/specialties/respiratory-therapy'
    },
    {
      icon: Droplet,
      title: 'Rheumatology',
      description: 'Infusion billing and biologic treatment coding with prior authorization management.',
      features: [
        'Infusion billing',
        'Biologic treatments',
        'Prior authorization',
        'Specialty drug management'
      ],
      benefits: [
        'Maximize infusion revenue',
        'Reduce authorization delays',
        'Improve biologic billing'
      ],
      linkTo: '/specialties/rheumatology'
    },
    {
      icon: Droplets,
      title: 'Urology',
      description: 'Billing for cystoscopy, lithotripsy, and urodynamic studies.',
      features: [
        'Cystoscopy procedures',
        'Lithotripsy billing',
        'Urodynamic studies',
        'Surgical procedures'
      ],
      benefits: [
        'Maximize procedure revenue',
        'Improve surgical billing',
        'Reduce coding errors'
      ],
      linkTo: '/specialties/urology'
    },
    {
      icon: Skull,
      title: 'Neurosurgery',
      description: 'Billing for complex surgical procedures with pre/post-op management.',
      features: [
        'Complex surgeries',
        'Pre/post-op management',
        'Global period billing',
        'Surgical coordination'
      ],
      benefits: [
        'Maximize surgical revenue',
        'Optimize global billing',
        'Reduce complexity errors'
      ],
      linkTo: '/specialties/neurosurgery'
    },
    {
      icon: Ribs,
      title: 'Thoracic Surgery',
      description: 'Billing for lung and chest surgeries with global period management.',
      features: [
        'Lung surgeries',
        'Chest procedures',
        'Global period management',
        'Surgical billing'
      ],
      benefits: [
        'Maximize surgical revenue',
        'Improve global accuracy',
        'Reduce billing errors'
      ],
      linkTo: '/specialties/thoracic-surgery'
    },
    {
      icon: TestTube,
      title: 'Hematology',
      description: 'Billing for lab services, transfusions, and hematologic oncology visits.',
      features: [
        'Lab service billing',
        'Transfusion procedures',
        'Oncology visits',
        'Specialty testing'
      ],
      benefits: [
        'Optimize lab revenue',
        'Improve transfusion billing',
        'Reduce claim denials'
      ],
      linkTo: '/specialties/hematology'
    },
    {
      icon: Syringe,
      title: 'Endocrinology',
      description: 'Billing for diabetes management, hormonal therapy, and long-term chronic care.',
      features: [
        'Diabetes management',
        'Hormonal therapy',
        'Chronic care billing',
        'Long-term management'
      ],
      benefits: [
        'Optimize chronic care revenue',
        'Improve therapy billing',
        'Reduce management errors'
      ],
      linkTo: '/specialties/endocrinology'
    },
    {
      icon: Virus,
      title: 'Infectious Disease',
      description: 'Billing for complex inpatient consults and long-term antibiotic therapy.',
      features: [
        'Inpatient consults',
        'Antibiotic therapy',
        'Complex case management',
        'Long-term treatment'
      ],
      benefits: [
        'Maximize consult revenue',
        'Optimize therapy billing',
        'Improve complex billing'
      ],
      linkTo: '/specialties/infectious-disease'
    },
    {
      icon: Bandage,
      title: 'Wound Care Centers',
      description: 'Billing for debridement, grafts, and hyperbaric oxygen therapy.',
      features: [
        'Debridement procedures',
        'Graft billing',
        'Hyperbaric therapy',
        'Wound management'
      ],
      benefits: [
        'Maximize procedure revenue',
        'Optimize therapy billing',
        'Reduce treatment denials'
      ],
      linkTo: '/specialties/wound-care'
    },
    {
      icon: Crosshair,
      title: 'Interventional Radiology',
      description: 'High-value billing for minimally invasive image-guided procedures.',
      features: [
        'Image-guided procedures',
        'Minimally invasive billing',
        'High-value procedures',
        'Technical billing'
      ],
      benefits: [
        'Maximize procedure revenue',
        'Optimize technical billing',
        'Reduce coding complexity'
      ],
      linkTo: '/specialties/interventional-radiology'
    },
    {
      icon: Microscope,
      title: 'Pathology',
      description: 'Billing for surgical pathology, cytology, and biopsy interpretations.',
      features: [
        'Surgical pathology',
        'Cytology billing',
        'Biopsy interpretations',
        'Lab coordination'
      ],
      benefits: [
        'Maximize pathology revenue',
        'Improve interpretation billing',
        'Reduce lab errors'
      ],
      linkTo: '/specialties/pathology'
    },
    {
      icon: Users,
      title: 'Geriatrics',
      description: 'Billing for elder care, chronic condition management, and long-term home visits.',
      features: [
        'Elder care billing',
        'Chronic condition management',
        'Home visit billing',
        'Long-term care'
      ],
      benefits: [
        'Optimize geriatric revenue',
        'Improve chronic billing',
        'Reduce home visit errors'
      ],
      linkTo: '/specialties/geriatrics'
    },
    {
      icon: Building2,
      title: 'Hospital Billing',
      description: 'Complete inpatient and outpatient hospital revenue cycle management.',
      features: [
        'Inpatient billing',
        'Outpatient services',
        'DRG management',
        'Hospital RCM'
      ],
      benefits: [
        'Maximize hospital revenue',
        'Optimize DRG billing',
        'Improve RCM efficiency'
      ],
      linkTo: '/specialties/hospital-facility-billing'
    },
    {
      icon: Ambulance,
      title: 'Emergency Medicine',
      description: 'Billing for ER visits, trauma coding, and high-acuity E/M levels.',
      features: [
        'ER visit billing',
        'Trauma coding',
        'High-acuity E/M',
        'Emergency procedures'
      ],
      benefits: [
        'Maximize ER revenue',
        'Optimize trauma billing',
        'Improve E/M accuracy'
      ],
      linkTo: '/specialties/emergency-medicine'
    },
    {
      icon: Briefcase,
      title: 'Occupational Health Clinics',
      description: 'Billing for workplace injuries, DOT physicals, and drug screenings.',
      features: [
        'Workplace injury billing',
        'DOT physicals',
        'Drug screening',
        'Occupational health'
      ],
      benefits: [
        'Optimize occupational revenue',
        'Improve screening billing',
        'Reduce injury claim errors'
      ],
      linkTo: '/specialties/occupational-health-clinics'
    },
    {
      icon: Tooth,
      title: 'Oral & Maxillofacial Surgery',
      description: 'Dual (medical + dental) billing for surgical oral procedures.',
      features: [
        'Dual billing expertise',
        'Surgical procedures',
        'Medical crossover',
        'Complex oral surgery'
      ],
      benefits: [
        'Maximize dual billing',
        'Optimize surgical revenue',
        'Reduce crossover errors'
      ],
      linkTo: '/specialties/oral-maxillofacial-surgery'
    },
    {
      icon: Activity,
      title: 'Gastroenterology',
      description: 'Billing for endoscopies, colonoscopies, and GI procedures.',
      features: [
        'Endoscopy billing',
        'Colonoscopy procedures',
        'GI diagnostics',
        'Procedure coordination'
      ],
      benefits: [
        'Maximize procedure revenue',
        'Optimize GI billing',
        'Improve procedure accuracy'
      ],
      linkTo: '/specialties/gastroenterology'
    },
    {
      icon: Users,
      title: 'Plastic & Reconstructive Surgery',
      description: 'Billing for cosmetic and reconstructive claims with modifier accuracy.',
      features: [
        'Cosmetic billing',
        'Reconstructive procedures',
        'Modifier accuracy',
        'Insurance coordination'
      ],
      benefits: [
        'Maximize surgical revenue',
        'Optimize modifier use',
        'Reduce claim denials'
      ],
      linkTo: '/specialties/plastic-surgery'
    },
    {
      icon: FlaskConical,
      title: 'Clinical Research & Trial Sites',
      description: 'Billing for patient study visits and insurance-qualifying research services.',
      features: [
        'Study visit billing',
        'Research services',
        'Insurance qualification',
        'Trial coordination'
      ],
      benefits: [
        'Optimize research revenue',
        'Improve study billing',
        'Reduce qualification errors'
      ],
      linkTo: '/specialties/clinical-research'
    }
  ];

  const filteredSpecialties = useMemo(() => {
    if (!searchQuery.trim()) {
      return specialties;
    }

    const query = searchQuery.toLowerCase();
    return specialties.filter(specialty => {
      const titleMatch = specialty.title.toLowerCase().includes(query);
      const descriptionMatch = specialty.description.toLowerCase().includes(query);
      const featuresMatch = specialty.features?.some(feature =>
        feature.toLowerCase().includes(query)
      );
      const benefitsMatch = specialty.benefits?.some(benefit =>
        benefit.toLowerCase().includes(query)
      );

      return titleMatch || descriptionMatch || featuresMatch || benefitsMatch;
    });
  }, [searchQuery, specialties]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Medical Billing by Specialty | Expert Healthcare Billing"
        description="Specialized medical billing services for 50+ healthcare specialties including cardiology, orthopedics, mental health, physical therapy, and more. Expert coders for your specialty."
        canonical="https://medtransic.com/specialties"
        keywords="medical billing specialties, specialty billing, cardiology billing, orthopedics billing, mental health billing, specialty medical billing services"
        ogType="website"
      />
      <OrganizationSchema />
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          rotate: [0, 1, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
              Medical Billing Specialties
            </span>
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            50+ Medical Specialties We Serve
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our specialized medical billing teams deliver enhanced reimbursements through 
            deep expertise in specialty-specific coding standards, payer policies, and 
            compliance requirements. From primary care to highly specialized procedures, 
            we ensure accuracy and efficiency in every step of your revenue cycle.
          </motion.p>
        </AnimatedSection>

        {/* Search Bar */}
        <AnimatedSection animation="slideUp" delay={0.4} className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specialties... (e.g., 'cardiology', 'therapy', 'surgery')"
                className="w-full pl-16 pr-16 py-5 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg bg-white"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Results Counter */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-4 text-gray-600 font-medium"
            >
              {searchQuery ? (
                <span>
                  Showing <span className="text-blue-600 font-bold">{filteredSpecialties.length}</span> of{' '}
                  <span className="font-bold">{specialties.length}</span> specialties
                </span>
              ) : (
                <span>
                  Browse all <span className="font-bold">{specialties.length}</span> specialties
                </span>
              )}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Empty State */}
        {filteredSpecialties.length === 0 && (
          <AnimatedSection animation="slideUp" className="text-center py-20">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No specialties found
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We couldn't find any specialties matching "{searchQuery}"
              </p>
              <button
                onClick={handleClearSearch}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold"
              >
                Clear Search
              </button>
            </div>
          </AnimatedSection>
        )}

        {/* Specialties Grid */}
        {filteredSpecialties.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredSpecialties.map((specialty, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.02}
            >
              <InteractiveCard
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
                iconColor="text-blue-600"
                iconBgColor="bg-blue-50"
               className="text-center"
                linkTo={specialty.linkTo}
              >
                {!specialty.linkTo && (
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center justify-center text-sm">
                      Get Started with {specialty.title}
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </motion.div>
                )}
              </InteractiveCard>
            </AnimatedSection>
          ))}
        </div>
        )}

        {/* Call to Action */}
        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                Don't See Your Specialty?
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We work with healthcare providers across all medical specialties. 
              Our adaptable approach and experienced team can quickly learn the 
              unique requirements of your practice area and deliver specialized 
              billing solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center">
                  Discuss Your Specialty
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/services" className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-lg">
                  View All Services
                </Link>
              </motion.div>
            </div>
            
            {/* Success Metrics */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Medical Specialties</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Healthcare Providers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600 font-medium">Clean Claim Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                  <div className="text-gray-600 font-medium">Average Revenue Increase</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SpecialtiesPage;