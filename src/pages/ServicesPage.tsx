import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, FileText, Shield, Headphones, Search, TrendingUp, ArrowRight, DollarSign, CreditCard, MessageCircle, Guitar as Hospital, FlaskConical, Armchair as Wheelchair, Stethoscope, Monitor, Archive, Bot, Briefcase, BarChart2, PhoneCall, Globe, ClipboardCheck, Handshake, FileWarning, Calendar, Database, GraduationCap, X, FileCheck, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import OrganizationSchema from '../components/OrganizationSchema';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import ROICalculator from '../components/ROICalculator';

const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const servicesData = [
    {
      icon: Calculator,
      title: 'Medical Billing Services',
      description: 'Accurate and compliant billing for all specialties, ensuring claims are correctly coded, submitted, and reimbursed promptly.',
      features: [
        'Reduce billing errors',
        'Increase cash flow',
        'Improve first-pass acceptance'
      ],
      linkTo: '/services/medical-billing',
      variant: 'emerald' as const
    },
    {
      icon: DollarSign,
      title: 'Accounts Receivable (A/R) Management',
      description: 'We recover unpaid claims, analyze denial reasons, and ensure every dollar owed is collected efficiently.',
      features: [
        'Decrease outstanding AR days',
        'Boost recovery rate by up to 60%',
        'Improve payer communication'
      ],
      linkTo: '/services/ar-management',
      variant: 'emerald' as const
    },
    {
      icon: FileText,
      title: 'Medical Coding Services',
      description: 'CPC-certified coders ensure accurate ICD-10, CPT, and HCPCS coding for all encounters.',
      features: [
        'Avoid compliance penalties',
        'Eliminate underbilling',
        'Capture full revenue potential'
      ],
      linkTo: '/services/medical-coding',
      variant: 'blue' as const
    },
    {
      icon: FileWarning,
      title: 'Denial Management',
      description: 'Identify, correct, and prevent denials through analytics-driven tracking and appeal processes.',
      features: [
        'Cut denial rate to under 5%',
        'Faster appeal turnaround',
        'Trend-based prevention strategies'
      ],
      linkTo: '/services/denial-management',
      variant: 'amber' as const
    },
    {
      icon: ClipboardCheck,
      title: 'Prior Authorization Management',
      description: 'Comprehensive authorization management including proactive prior auth and retroactive authorization recovery.',
      features: [
        '98% authorization approval rate',
        '70% retro auth success rate',
        'Emergency service recovery',
        'Expert payer communication'
      ],
      linkTo: '/services/prior-authorization',
      variant: 'blue' as const
    },
    {
      icon: ClipboardCheck,
      title: 'Eligibility & Benefits Verification',
      description: 'Confirm insurance coverage, co-pays, deductibles, and patient responsibilities before service.',
      features: [
        'Prevent claim denials upfront',
        'Ensure billing accuracy',
        'Enhance patient experience'
      ],
      linkTo: '/services/eligibility-verification',
      variant: 'emerald' as const
    },
    {
      icon: CreditCard,
      title: 'Charge Entry & Payment Posting',
      description: 'Accurate charge entry and timely posting of EOBs/ERAs ensure your revenue reports are always up to date.',
      features: [
        'Accurate financial data',
        'Detect underpayments instantly',
        'Improve reconciliation accuracy'
      ],
      linkTo: '/services/charge-entry-payment-posting',
      variant: 'blue' as const
    },
    {
      icon: Shield,
      title: 'Provider Credentialing & Enrollment',
      description: 'Handle all payer enrollment, CAQH setup, and revalidation to keep your providers in-network and compliant.',
      features: [
        'Faster payer approval',
        'No payment delays',
        'Maintain active participation with payers'
      ],
      linkTo: '/services/credentialing',
      variant: 'emerald' as const
    },
    {
      icon: FileCheck,
      title: 'Payer Enrollment Services',
      description: 'Fast-track enrollment with Medicare, Medicaid, and commercial insurance payers in 60-90 days.',
      features: [
        '98% approval rate',
        'Reduce enrollment time by 50%',
        'Expert enrollment specialists'
      ],
      linkTo: '/services/payer-enrollment',
      variant: 'blue' as const
    },
    {
      icon: MessageCircle,
      title: 'Patient Billing & Support',
      description: 'We manage patient statements, follow-ups, and calls — ensuring clear communication and timely collections.',
      features: [
        'Boost patient payments',
        'Reduce call volume',
        'Enhance satisfaction and retention'
      ],
      linkTo: '/services/patient-billing-support',
      variant: 'amber' as const
    },
    {
      icon: Hospital,
      title: 'Hospital & Facility Billing',
      description: 'Inpatient, outpatient, and ASC billing with complete DRG validation, charge capture, and audit compliance.',
      features: [
        'Handle high-volume claims',
        'Avoid revenue leakage',
        'Improve facility cash flow'
      ],
      linkTo: '/services/hospital-facility-billing',
      variant: 'blue' as const
    },
    {
      icon: FlaskConical,
      title: 'Laboratory Billing Services',
      description: 'Billing for clinical, molecular, and pathology labs with payer-specific compliance and panel bundling expertise.',
      features: [
        'Quick claim turnaround',
        'Higher reimbursement accuracy',
        'Audit-ready reporting'
      ],
      linkTo: '/services/laboratory-billing',
      variant: 'emerald' as const
    },
    {
      icon: Wheelchair,
      title: 'Durable Medical Equipment (DME) Billing',
      description: 'Complete DME billing with documentation, prior authorizations, and resubmissions.',
      features: [
        'Eliminate "same/similar" denials',
        'Faster claim resolution',
        'Better compliance management'
      ],
      linkTo: '/services/dme-billing',
      variant: 'amber' as const
    },
    {
      icon: Stethoscope,
      title: 'Physician Billing Services',
      description: 'Customized billing for solo and multi-specialty practices with transparent reporting and dedicated account management.',
      features: [
        'Increase revenue per encounter',
        'Simplify workflow',
        'Ensure payer compliance'
      ],
      linkTo: '/services/physician-billing',
      variant: 'gradient' as const
    },
    {
      icon: Monitor,
      title: 'Telehealth Billing Services',
      description: 'Specialized billing for virtual visits and remote patient monitoring across all states.',
      features: [
        'Correct use of telehealth CPT codes',
        'Reduce payer-specific denials',
        'Improve virtual care profitability'
      ],
      linkTo: '/services/telehealth-billing',
      variant: 'blue' as const
    },
    {
      icon: Archive,
      title: 'Old A/R Clean-Up Projects',
      description: 'We review, rework, and recover old or neglected AR accounts for maximum revenue recovery.',
      features: [
        'Retrieve lost income',
        'Fix billing process gaps',
        'Clean up your financial backlog'
      ],
      linkTo: '/services/old-ar-cleanup',
      variant: 'emerald' as const
    },
    {
      icon: Bot,
      title: 'RCM Process Automation (RPA Integration)',
      description: 'We integrate robotic process automation to streamline claim validation, posting, and tracking.',
      features: [
        '40% faster claim cycle',
        'Reduce manual work',
        'Improve accuracy and productivity'
      ],
      linkTo: '/services/rcm-automation',
      variant: 'amber' as const
    },
    {
      icon: Briefcase,
      title: 'Practice Management Consulting',
      description: 'Analyze your existing workflows to identify inefficiencies and revenue leakage.',
      features: [
        'Boost collections by up to 30%',
        'Optimize staff performance',
        'Align RCM with business goals'
      ],
      linkTo: '/services/practice-management-consulting',
      variant: 'blue' as const
    },
    {
      icon: BarChart2,
      title: 'Analytics & Financial Reporting',
      description: 'We provide insightful dashboards covering collection ratios, AR aging, denial trends, and payer performance.',
      features: [
        'Real-time decision-making',
        'Identify hidden issues',
        'Improve practice profitability'
      ],
      linkTo: '/services/analytics-reporting',
      variant: 'emerald' as const
    },
    {
      icon: PhoneCall,
      title: 'Call Center & Patient Scheduling',
      description: 'We manage inbound/outbound calls, appointment scheduling, and patient reminders.',
      features: [
        'Reduce no-shows',
        'Increase patient retention',
        'Improve front-desk efficiency'
      ],
      linkTo: '/services/call-center-scheduling',
      variant: 'amber' as const
    },
    {
      icon: Headphones,
      title: 'Virtual Medical Assistants',
      description: 'Professional remote assistants for appointment scheduling, call management, insurance verification, and patient communication.',
      features: [
        'Save 60-70% on staffing costs',
        'Extended coverage hours',
        'HIPAA-trained professionals'
      ],
      linkTo: '/services/virtual-assistants',
      variant: 'blue' as const
    },
    {
      icon: Globe,
      title: 'End-to-End RCM Outsourcing',
      description: 'Outsource your full billing department to our experts for a stress-free experience.',
      features: [
        'Dedicated account manager',
        'Cost-effective solutions',
        'Transparent, scalable model'
      ],
      linkTo: '/services/medical-billing',
      variant: 'gradient' as const
    },
    {
      icon: Search,
      title: 'Payment Reconciliation & Audit Support',
      description: 'We cross-verify all payments with EOBs and reports to ensure every claim is paid correctly.',
      features: [
        'Detect payer underpayments',
        'Maintain financial accuracy',
        'Ensure compliance with payer contracts'
      ],
      linkTo: '/services/payment-reconciliation',
      variant: 'blue' as const
    },
    {
      icon: Handshake,
      title: 'Payer Contract Negotiation',
      description: 'Our experts review your payer contracts to negotiate better reimbursement rates and terms.',
      features: [
        'Higher allowed amounts',
        'Better payer relationships',
        'Reduce revenue loss'
      ],
      linkTo: '/services/payer-contract-negotiation',
      variant: 'emerald' as const
    },
    {
      icon: Shield,
      title: 'Compliance & HIPAA Audits',
      description: 'We perform internal compliance reviews and ensure HIPAA-secure handling of PHI at every stage.',
      features: [
        'Protect sensitive data',
        'Avoid audit penalties',
        'Ensure 100% regulatory compliance'
      ],
      linkTo: '/services/compliance-hipaa-audits',
      variant: 'blue' as const
    },
    {
      icon: TrendingUp,
      title: 'MIPS / MACRA Quality Reporting',
      description: 'We manage your MIPS submissions and track performance metrics to maximize incentive payments.',
      features: [
        'Prevent penalties',
        'Increase Medicare reimbursements',
        'Simplify CMS reporting'
      ],
      linkTo: '/services/mips-macra-reporting',
      variant: 'gradient' as const
    },
    {
      icon: Database,
      title: 'EHR / EMR Integration Support',
      description: 'Seamless integration with all major EMR systems — Athena, Kareo, AdvancedMD, eClinicalWorks, DrChrono, and more.',
      features: [
        'Smooth data flow',
        'Reduce duplication',
        'Speed up billing operations'
      ],
      linkTo: '/services/ehr-emr-integration',
      variant: 'amber' as const
    },
    {
      icon: GraduationCap,
      title: 'Staff Training & SOP Development',
      description: 'We train your billing staff and build Standard Operating Procedures (SOPs) tailored to your workflow.',
      features: [
        'Consistent performance',
        'Reduce human error',
        'Strengthen team productivity'
      ],
      linkTo: '/services/staff-training-sop',
      variant: 'emerald' as const
    }
  ];

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) {
      return servicesData;
    }

    const query = searchQuery.toLowerCase();
    return servicesData.filter(service => {
      const titleMatch = service.title.toLowerCase().includes(query);
      const descriptionMatch = service.description.toLowerCase().includes(query);
      const featuresMatch = service.features.some(feature =>
        feature.toLowerCase().includes(query)
      );

      return titleMatch || descriptionMatch || featuresMatch;
    });
  }, [searchQuery, servicesData]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-medtransic-gradient dark:bg-gray-900 relative overflow-hidden pt-20">
      <SEOHead
        title="Medical Billing Services & Solutions | Comprehensive RCM Services"
        description="Comprehensive medical billing and RCM services including coding, credentialing, denial management, AR management, and practice consulting. Explore our full suite of revenue cycle solutions."
        canonical="https://medtransic.com/services"
        keywords="medical billing services, RCM services, medical coding, credentialing services, denial management, AR management, practice management, telehealth billing"
        ogType="website"
      />
      <OrganizationSchema />
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          rotate: [0, 2, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-8 text-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive Healthcare Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From revenue cycle management to specialized billing services, we provide
              end-to-end solutions that streamline your practice operations, maximize revenue
              potential, and ensure compliance. Each service is delivered by certified specialists
              with deep expertise in healthcare administration.
            </motion.p>
          </div>
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
                placeholder="Search services... (e.g., 'billing', 'coding', 'RCM')"
                className="w-full pl-16 pr-16 py-5 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 focus:border-blue-400 dark:focus:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
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
              className="text-center mt-4 text-gray-600 dark:text-gray-400 font-medium"
            >
              {searchQuery ? (
                <span>
                  Showing <span className="text-blue-600 font-bold">{filteredServices.length}</span> of{' '}
                  <span className="font-bold">{servicesData.length}</span> services
                </span>
              ) : (
                <span>
                  Browse all <span className="font-bold">{servicesData.length}</span> services
                </span>
              )}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <AnimatedSection animation="slideUp" className="text-center py-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No services found
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We couldn't find any services matching "{searchQuery}"
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

        {/* Services Grid */}
        {filteredServices.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.05}
            >
              <InteractiveCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                variant={service.variant}
                className="h-full"
                linkTo={service.linkTo}
              />
            </AnimatedSection>
          ))}
        </div>
        )}

        {/* ROI Calculator */}
        <AnimatedSection animation="slideUp" className="mb-16">
          <ROICalculator />
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Practice?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how our comprehensive solutions can help optimize your 
              revenue cycle, improve operational efficiency, and enhance your practice's 
              financial performance. Our team of experts is ready to create a customized 
              solution that meets your specific needs.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl">
                  Request Custom Demo
                </Link>
              </motion.div>
            </div>
            
            {/* Success Metrics */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Healthcare Providers Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Clean Claim Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Average Revenue Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Support & Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServicesPage;