import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CreditCard,
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
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';

const ChargeEntryPaymentPostingPage: React.FC = () => {

  const painPoints = [
    {
      icon: Clock,
      title: 'Charge Entry Delays',
      description: 'Delayed charge entry extends claim submission timelines, increases accounts receivable aging, and slows cash flow significantly.',
      impact: 'Each day of delay adds 2-3 days to payment collection timeline',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Data Entry Errors',
      description: 'Manual charge entry mistakes in CPT codes, modifiers, units, or charges lead to claim denials and underpayments.',
      impact: 'Error rates of 5-10% cause revenue loss and rework',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Missed Charges',
      description: 'Services rendered but not billed due to incomplete charge capture processes result in permanent revenue loss.',
      impact: 'Practices lose 1-3% of revenue from unbilled services',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Payment Posting Backlog',
      description: 'Delayed posting of EOBs and ERAs prevents accurate A/R reporting and obscures true financial position.',
      impact: 'Inaccurate financial reports prevent effective management',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Underpayment Detection Issues',
      description: 'Without systematic payment variance analysis, payer underpayments and contractual discrepancies go unnoticed.',
      impact: 'Hidden revenue loss of 2-5% from unidentified underpayments',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Poor Financial Visibility',
      description: 'Delayed or inaccurate posting prevents real-time financial visibility needed for effective practice management.',
      impact: 'Management decisions based on outdated financial data',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: CreditCard,
      title: 'Rapid Charge Entry',
      description: 'Same-day charge entry ensures claims are submitted promptly, reducing A/R aging and accelerating payment collection.',
      benefits: [
        '24-hour charge entry turnaround',
        'Direct EHR integration for efficiency',
        'Coding validation during entry',
        'Complete documentation review'
      ]
    },
    {
      icon: Zap,
      title: 'Automated Payment Posting',
      description: 'Electronic remittance (ERA) auto-posting technology processes payments accurately and immediately upon receipt.',
      benefits: [
        'Same-day ERA processing',
        'Automatic payment reconciliation',
        '99.8% posting accuracy',
        'Real-time financial updates'
      ]
    },
    {
      icon: Shield,
      title: 'Payment Variance Analysis',
      description: 'Systematic review of all payments identifies underpayments, incorrect adjustments, and contractual discrepancies.',
      benefits: [
        'Automated variance detection',
        'Contract rate verification',
        'Underpayment recovery',
        'Adjustment validation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Charge Capture Optimization',
      description: 'Comprehensive charge capture review ensures all services rendered are properly billed and collected.',
      benefits: [
        'Daily charge reconciliation',
        'Missing charge identification',
        'Revenue leakage prevention',
        'Charge capture audits'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Professional Charge Entry',
      description: 'Accurate, timely entry of all charges with complete coding validation and fee schedule verification.',
      features: ['Same-day charge entry', 'Code validation', 'Modifier application', 'Fee schedule verification']
    },
    {
      icon: CheckCircle,
      title: 'Electronic Payment Posting',
      description: 'Automated processing of electronic remittances with immediate posting to patient accounts.',
      features: ['ERA auto-posting', 'Manual payment entry', 'Adjustment posting', 'Denial posting']
    },
    {
      icon: BarChart3,
      title: 'Payment Reconciliation',
      description: 'Complete reconciliation of all payments with EOBs and expected reimbursement amounts.',
      features: ['Daily reconciliation', 'Variance analysis', 'Contract verification', 'Underpayment recovery']
    },
    {
      icon: Award,
      title: 'Charge Capture Audits',
      description: 'Regular audits to ensure complete charge capture and identify revenue leakage.',
      features: ['Encounter reconciliation', 'Missing charge identification', 'Charge master review', 'Revenue recovery']
    }
  ];

  const benefits = [
    { metric: '24hr', label: 'Charge Entry Turnaround', icon: Clock },
    { metric: '99.8%', label: 'Posting Accuracy', icon: CheckCircle },
    { metric: '35%', label: 'Faster Cash Flow', icon: TrendingUp },
    { metric: '$120K', label: 'Average Annual Recovery', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHead
        title="Charge Entry & Payment Posting Services | Medical Billing Processing"
        description="Same-day charge entry with 99.8% accuracy accelerates cash flow 35%. Automated ERA posting, variance analysis recovers $120K annually. Expert reconciliation eliminates posting backlogs!"
        canonical="https://medtransic.com/services/charge-entry-payment-posting"
        keywords="charge entry, payment posting, charge capture, payment processing, EOB posting, medical billing processing"
        ogType="article"
      />
      <ServiceSchema
        name="Charge Entry Payment Posting"
        description="Same-day charge entry with 99.8% accuracy accelerates cash flow 35%. Automated ERA posting, variance analysis recovers $120K annually. Expert reconciliation eliminates posting backlogs!"
        url="https://medtransic.com/services/charge-entry-payment-posting"
        serviceType="Medical Billing Service"
      />

      <HeroSection
        badge={{ icon: CreditCard, text: 'Accurate Financial Processing' }}
        title="Charge Entry & Payment Posting"
        description="Accurate charge entry and timely posting of EOBs/ERAs ensure your revenue reports are always up to date and reconciled."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '24hr', label: 'Charge Entry Turnaround', icon: Clock },
          { value: '99.8%', label: 'Posting Accuracy', icon: CheckCircle },
          { value: '35%', label: 'Faster Cash Flow', icon: TrendingUp },
          { value: '$120K', label: 'Average Annual Recovery', icon: DollarSign }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

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
              Accurate charge entry and payment posting are critical for financial visibility and cash flow. These processing challenges impact practice revenue.
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
                  <div className={`${painPoint.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <painPoint.icon className={`w-8 h-8 ${painPoint.color}`} />
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
                    <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-violet-600" />
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
                  iconColor="text-violet-600"
                  iconBgColor="bg-violet-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-12 shadow-xl border border-violet-200">
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
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div className="text-3xl font-bold text-violet-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-violet-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Our charge entry was 4-5 days behind and payments sat unposted for weeks. Medtransic's team now enters charges within 24 hours and posts payments the same day they're received. We've reduced our A/R days from 52 to 34, and their variance analysis recovered $120,000 in underpayments we didn't even know we were missing."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Thomas Anderson, CFO</p>
                <p className="text-violet-600 font-medium">Surgical Specialists of Texas</p>
                <p className="text-gray-500">Multi-Location Surgical Practice</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('charge-entry-payment-posting')} />
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
                <Link to="/contact" className="bg-violet-600 text-white px-12 py-5 rounded-full hover:bg-violet-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-violet-600 text-violet-600 px-12 py-5 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-violet-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-violet-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-violet-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-violet-600 hover:text-violet-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChargeEntryPaymentPostingPage;
