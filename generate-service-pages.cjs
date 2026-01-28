const fs = require('fs');
const path = require('path');

const services = [
  {
    fileName: 'ARManagementPage',
    route: 'ar-management',
    title: 'Accounts Receivable Management',
    subtitle: 'A/R Optimization',
    icon: 'DollarSign',
    color: 'emerald',
    description: 'Recover unpaid claims and optimize your accounts receivable with expert A/R management that reduces outstanding balances and accelerates cash flow.'
  },
  {
    fileName: 'MedicalCodingPage',
    route: 'medical-coding',
    title: 'Medical Coding Services',
    subtitle: 'Certified Coding Excellence',
    icon: 'FileText',
    color: 'indigo',
    description: 'CPC-certified coders ensure accurate ICD-10, CPT, and HCPCS coding for all encounters, maximizing reimbursement and ensuring compliance.'
  },
  {
    fileName: 'DenialManagementPage',
    route: 'denial-management',
    title: 'Denial Management',
    subtitle: 'Denial Prevention & Recovery',
    icon: 'FileWarning',
    color: 'rose',
    description: 'Identify, correct, and prevent claim denials through analytics-driven tracking, strategic appeals, and root cause analysis.'
  },
  {
    fileName: 'EligibilityVerificationPage',
    route: 'eligibility-verification',
    title: 'Eligibility & Benefits Verification',
    subtitle: 'Insurance Verification',
    icon: 'ClipboardCheck',
    color: 'cyan',
    description: 'Confirm insurance coverage, co-pays, deductibles, and patient responsibilities before service to prevent claim denials.'
  },
  {
    fileName: 'ChargeEntryPaymentPostingPage',
    route: 'charge-entry-payment-posting',
    title: 'Charge Entry & Payment Posting',
    subtitle: 'Accurate Financial Processing',
    icon: 'CreditCard',
    color: 'violet',
    description: 'Accurate charge entry and timely posting of EOBs/ERAs ensure your revenue reports are always up to date and reconciled.'
  },
  {
    fileName: 'CredentialingPage',
    route: 'credentialing',
    title: 'Provider Credentialing & Enrollment',
    subtitle: 'Payer Enrollment Services',
    icon: 'Shield',
    color: 'blue',
    description: 'Handle all payer enrollment, CAQH setup, and revalidation to keep your providers in-network and payment-ready.'
  },
  {
    fileName: 'PatientBillingSupportPage',
    route: 'patient-billing-support',
    title: 'Patient Billing & Support',
    subtitle: 'Patient Financial Services',
    icon: 'MessageCircle',
    color: 'teal',
    description: 'Manage patient statements, follow-ups, and inquiries with clear communication that improves collections and satisfaction.'
  },
  {
    fileName: 'HospitalFacilityBillingPage',
    route: 'hospital-facility-billing',
    title: 'Hospital & Facility Billing',
    subtitle: 'Facility Billing Services',
    icon: 'Building2',
    color: 'purple',
    description: 'Inpatient, outpatient, and ASC billing with complete DRG validation, charge capture, and audit compliance for facilities.'
  },
  {
    fileName: 'LaboratoryBillingPage',
    route: 'laboratory-billing',
    title: 'Laboratory Billing Services',
    subtitle: 'Lab Billing Specialists',
    icon: 'FlaskConical',
    color: 'amber',
    description: 'Billing for clinical, molecular, and pathology labs with payer-specific compliance and panel bundling expertise.'
  },
  {
    fileName: 'DMEBillingPage',
    route: 'dme-billing',
    title: 'Durable Medical Equipment Billing',
    subtitle: 'DME Billing Services',
    icon: 'Package',
    color: 'orange',
    description: 'Complete DME billing with documentation, prior authorizations, and resubmissions to eliminate denials and delays.'
  },
  {
    fileName: 'PhysicianBillingPage',
    route: 'physician-billing',
    title: 'Physician Billing Services',
    subtitle: 'Practice Billing Solutions',
    icon: 'Stethoscope',
    color: 'blue',
    description: 'Customized billing for solo and multi-specialty practices with transparent reporting and dedicated account management.'
  },
  {
    fileName: 'TelehealthBillingPage',
    route: 'telehealth-billing',
    title: 'Telehealth Billing Services',
    subtitle: 'Virtual Care Billing',
    icon: 'Monitor',
    color: 'sky',
    description: 'Specialized billing for virtual visits and remote patient monitoring with compliant telehealth CPT code usage.'
  },
  {
    fileName: 'OldARCleanupPage',
    route: 'old-ar-cleanup',
    title: 'Old A/R Clean-Up Projects',
    subtitle: 'A/R Recovery Services',
    icon: 'Archive',
    color: 'slate',
    description: 'Review, rework, and recover old or neglected AR accounts for maximum revenue recovery and financial cleanup.'
  },
  {
    fileName: 'RCMAutomationPage',
    route: 'rcm-automation',
    title: 'RCM Process Automation',
    subtitle: 'RPA Integration',
    icon: 'Bot',
    color: 'fuchsia',
    description: 'Integrate robotic process automation to streamline claim validation, posting, and tracking for faster cycle times.'
  },
  {
    fileName: 'PracticeManagementConsultingPage',
    route: 'practice-management-consulting',
    title: 'Practice Management Consulting',
    subtitle: 'Workflow Optimization',
    icon: 'Briefcase',
    color: 'neutral',
    description: 'Analyze existing workflows to identify inefficiencies, revenue leakage, and opportunities for operational improvement.'
  },
  {
    fileName: 'AnalyticsReportingPage',
    route: 'analytics-reporting',
    title: 'Analytics & Financial Reporting',
    subtitle: 'Data-Driven Insights',
    icon: 'BarChart2',
    color: 'blue',
    description: 'Insightful dashboards covering collection ratios, AR aging, denial trends, and payer performance metrics.'
  },
  {
    fileName: 'CallCenterSchedulingPage',
    route: 'call-center-scheduling',
    title: 'Call Center & Patient Scheduling',
    subtitle: 'Patient Communication',
    icon: 'PhoneCall',
    color: 'green',
    description: 'Manage inbound/outbound calls, appointment scheduling, and patient reminders to reduce no-shows and improve retention.'
  },
  {
    fileName: 'EndToEndRCMPage',
    route: 'end-to-end-rcm',
    title: 'End-to-End RCM Outsourcing',
    subtitle: 'Full RCM Outsourcing',
    icon: 'Globe',
    color: 'blue',
    description: 'Outsource your full billing department to our experts for a stress-free, cost-effective, and transparent solution.'
  },
  {
    fileName: 'PaymentReconciliationPage',
    route: 'payment-reconciliation',
    title: 'Payment Reconciliation & Audit Support',
    subtitle: 'Financial Reconciliation',
    icon: 'Search',
    color: 'indigo',
    description: 'Cross-verify all payments with EOBs and reports to ensure every claim is paid correctly and detect underpayments.'
  },
  {
    fileName: 'PayerContractNegotiationPage',
    route: 'payer-contract-negotiation',
    title: 'Payer Contract Negotiation',
    subtitle: 'Contract Optimization',
    icon: 'Handshake',
    color: 'teal',
    description: 'Review and negotiate payer contracts to secure better reimbursement rates and favorable terms for your practice.'
  },
  {
    fileName: 'ComplianceHIPAAAuditsPage',
    route: 'compliance-hipaa-audits',
    title: 'Compliance & HIPAA Audits',
    subtitle: 'Regulatory Compliance',
    icon: 'ShieldCheck',
    color: 'red',
    description: 'Perform internal compliance reviews and ensure HIPAA-secure handling of PHI at every stage of your operations.'
  },
  {
    fileName: 'MIPSMACRAReportingPage',
    route: 'mips-macra-reporting',
    title: 'MIPS / MACRA Quality Reporting',
    subtitle: 'Quality Reporting',
    icon: 'TrendingUp',
    color: 'blue',
    description: 'Manage MIPS submissions and track performance metrics to maximize incentive payments and avoid penalties.'
  },
  {
    fileName: 'EHREMRIntegrationPage',
    route: 'ehr-emr-integration',
    title: 'EHR / EMR Integration Support',
    subtitle: 'System Integration',
    icon: 'Database',
    color: 'gray',
    description: 'Seamless integration with all major EMR systems for smooth data flow and accelerated billing operations.'
  },
  {
    fileName: 'StaffTrainingSOPPage',
    route: 'staff-training-sop',
    title: 'Staff Training & SOP Development',
    subtitle: 'Training & Procedures',
    icon: 'GraduationCap',
    color: 'purple',
    description: 'Train your billing staff and build Standard Operating Procedures tailored to your workflow for consistent performance.'
  }
];

const template = (service) => `import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ${service.icon},
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  DollarSign,
  FileText,
  Shield,
  Clock,
  Users,
  Zap,
  Target,
  Award,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';

const ${service.fileName}: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Challenge One',
      description: 'Description of the first major challenge faced by practices in this area.',
      impact: 'Impact statement showing the cost or consequence',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Challenge Two',
      description: 'Description of the second major challenge that affects operations.',
      impact: 'Impact statement showing operational consequences',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Challenge Three',
      description: 'Description of the third challenge affecting revenue or efficiency.',
      impact: 'Impact statement showing financial consequences',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Challenge Four',
      description: 'Description of the fourth challenge in this service area.',
      impact: 'Impact statement showing compliance or quality issues',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: ${service.icon},
      title: 'Solution One',
      description: 'How Medtransic addresses the first major challenge with expertise and technology.',
      benefits: [
        'First key benefit of this solution',
        'Second key benefit that solves the problem',
        'Third benefit showing measurable improvement',
        'Fourth benefit demonstrating value'
      ]
    },
    {
      icon: Zap,
      title: 'Solution Two',
      description: 'How our advanced processes and systems solve the second major challenge.',
      benefits: [
        'Key benefit addressing the pain point',
        'Technological advantage we provide',
        'Process improvement delivered',
        'Outcome achieved for clients'
      ]
    },
    {
      icon: Shield,
      title: 'Solution Three',
      description: 'Our approach to ensuring compliance, quality, and optimal outcomes.',
      benefits: [
        'Compliance and security assurance',
        'Quality control measures',
        'Risk mitigation strategies',
        'Peace of mind for providers'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Solution Four',
      description: 'Revenue optimization and performance improvement strategies we implement.',
      benefits: [
        'Revenue enhancement approach',
        'Efficiency improvement method',
        'Cost reduction strategy',
        'Performance monitoring system'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Service Component One',
      description: 'Detailed description of the first key component of this service offering.',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    },
    {
      icon: CheckCircle,
      title: 'Service Component Two',
      description: 'Detailed description of the second key component of this service.',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    },
    {
      icon: BarChart3,
      title: 'Service Component Three',
      description: 'Detailed description of the third key component we provide.',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    },
    {
      icon: Award,
      title: 'Service Component Four',
      description: 'Detailed description of the fourth key component of our service.',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    }
  ];

  const benefits = [
    { metric: '30%', label: 'Revenue Improvement', icon: TrendingUp },
    { metric: '99%', label: 'Accuracy Rate', icon: CheckCircle },
    { metric: '50%', label: 'Faster Processing', icon: Clock },
    { metric: '24/7', label: 'Support Available', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          rotate: [0, 1, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-no-repeat bg-contain" style={{
          backgroundImage: \`url('/medtransic-logomark1.png')\`
        }}></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-${service.color}-100 rounded-2xl flex items-center justify-center mr-6">
                <${service.icon} className="w-10 h-10 text-${service.color}-600" />
              </div>
              <span className="text-${service.color}-600 font-semibold text-lg tracking-wide uppercase">
                ${service.subtitle}
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ${service.title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ${service.description}
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="${service.title} services"
              className="w-full h-80 object-cover rounded-2xl shadow-large"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Common Challenges We Solve
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Healthcare providers face significant obstacles in this area that impact revenue and operations.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((painPoint, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={\`\${painPoint.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6\`}>
                    <painPoint.icon className={\`w-8 h-8 \${painPoint.color}\`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {painPoint.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {painPoint.description}
                  </p>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-red-800 font-medium text-sm">
                      <strong>Impact:</strong> {painPoint.impact}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How Medtransic Delivers Results
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our comprehensive solutions combine expertise, technology, and proven processes.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-${service.color}-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-${service.color}-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Comprehensive Service Features
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Every component managed with precision and expertise.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <InteractiveCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  iconColor="text-${service.color}-600"
                  iconBgColor="bg-${service.color}-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-2xl p-12 shadow-xl border border-${service.color}-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our expertise delivers measurable improvements in performance and revenue.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-${service.color}-600" />
                  </div>
                  <div className="text-3xl font-bold text-${service.color}-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-${service.color}-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Working with Medtransic has transformed our operations. Their expertise in ${service.title.toLowerCase()}
                has improved our revenue significantly while reducing administrative burden. Highly recommended!"
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Healthcare Provider</p>
                <p className="text-${service.color}-600 font-medium">Medical Practice</p>
                <p className="text-gray-500">Satisfied Client</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our experts show you how we can improve your operations and increase revenue.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-${service.color}-600 text-white px-12 py-5 rounded-full hover:bg-${service.color}-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-${service.color}-600 text-${service.color}-600 px-12 py-5 rounded-full hover:bg-${service.color}-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-${service.color}-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-${service.color}-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-${service.color}-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-${service.color}-600 hover:text-${service.color}-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ${service.fileName};
`;

const pagesDir = path.join(__dirname, 'src', 'pages');

services.forEach(service => {
  const filePath = path.join(pagesDir, `${service.fileName}.tsx`);
  const content = template(service);
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${service.fileName}.tsx`);
});

console.log(`\nSuccessfully created ${services.length} service pages!`);
