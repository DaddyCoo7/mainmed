import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
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
import { getRelatedLinks } from '../config/internalLinks';

const PaymentReconciliationPage: React.FC = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: 'Payment Variances Go Undetected',
      description: 'Practices lack time and expertise to compare actual payments against contracted rates, allowing underpayments to go unnoticed.',
      impact: 'Underpayments represent 3-8% of total collections annually',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Contractual Adjustment Verification',
      description: 'Staff cannot validate whether payer-applied contractual adjustments match contracted fee schedules and discount percentages.',
      impact: 'Incorrect adjustments cost practices $20K-$100K annually',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      title: 'Time-Consuming Manual Reconciliation',
      description: 'Manually comparing EOBs to expected payments for hundreds of claims monthly is impossible with limited staff resources.',
      impact: 'Manual reconciliation would require 2-3 FTEs to do properly',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Audit Preparation Challenges',
      description: 'Practices struggle to prepare for payer audits and lack documentation proving they were paid correctly.',
      impact: 'Unprepared audits result in recoupment demands and penalties',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: Search,
      title: 'Automated Variance Detection',
      description: 'Advanced software compares actual payments to contracted fee schedules and automatically identifies underpayments and incorrect adjustments.',
      benefits: [
        'Automated payment vs contract comparison',
        'Real-time underpayment identification',
        'Exception-based review process',
        'Flags variances exceeding thresholds'
      ]
    },
    {
      icon: Zap,
      title: 'Contract Verification Services',
      description: 'Expert team reviews payer contracts, loads fee schedules into system, and validates that payments match contracted rates.',
      benefits: [
        'Complete contract analysis',
        'Fee schedule validation and loading',
        'Contractual adjustment verification',
        'Multi-payer contract management'
      ]
    },
    {
      icon: Shield,
      title: 'Underpayment Recovery',
      description: 'Systematic process to appeal underpayments and recover money owed under payer contracts.',
      benefits: [
        'Underpayment appeal preparation',
        'Documentation and submission',
        'Follow-up until resolution',
        'Recovery tracking and reporting'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Audit Support & Documentation',
      description: 'Comprehensive records and reports supporting audit defense and providing proof of correct payment.',
      benefits: [
        'Audit-ready documentation',
        'Payment history reports',
        'Variance analysis summaries',
        'Contract compliance evidence'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Payment vs Contract Analysis',
      description: 'Systematic review comparing actual EOB payments against contracted fee schedules to identify discrepancies.',
      features: ['EOB data extraction', 'Contract rate comparison', 'Variance calculation', 'Exception reporting']
    },
    {
      icon: CheckCircle,
      title: 'Underpayment Identification',
      description: 'Automated detection of payments below contracted rates requiring appeal and recovery action.',
      features: ['Real-time variance detection', 'Threshold-based alerts', 'Prioritized recovery list', 'Financial impact calculation']
    },
    {
      icon: BarChart3,
      title: 'Recovery & Appeals',
      description: 'Complete appeals process for underpayments including documentation, submission, and follow-up.',
      features: ['Appeal letter generation', 'Supporting documentation', 'Submission and tracking', 'Payment recovery confirmation']
    },
    {
      icon: Award,
      title: 'Reconciliation Reporting',
      description: 'Detailed reports showing payment variances, recovery efforts, and financial impact by payer.',
      features: ['Variance summary reports', 'Payer performance analysis', 'Recovery tracking', 'Audit trail documentation']
    }
  ];

  const benefits = [
    { metric: '$45K', label: 'Average Annual Recovery', icon: TrendingUp },
    { metric: '98%', label: 'Payment Accuracy', icon: CheckCircle },
    { metric: '100%', label: 'Claims Reviewed', icon: Clock },
    { metric: '85%', label: 'Successful Appeals', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHead
        title="Payment Reconciliation Services | Medical Payment Processing"
        description="Automated variance detection identifies underpayments before they're lost. Recover $45K annually with contract verification. 85% appeal success rate, 100% claims audited. Audit-ready reports!"
        canonical="https://medtransic.com/services/payment-reconciliation"
        keywords="payment reconciliation, payment processing, payment posting, EOB reconciliation, remittance processing"
        ogType="article"
      />

      <HeroSection
        badge={{ icon: Search, text: 'Financial Reconciliation' }}
        title="Payment Reconciliation & Audit Support"
        description="Cross-verify all payments with EOBs and reports to ensure every claim is paid correctly and detect underpayments."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '$45K', label: 'Average Annual Recovery', icon: TrendingUp },
          { value: '98%', label: 'Payment Accuracy', icon: CheckCircle },
          { value: '100%', label: 'Claims Reviewed', icon: Clock },
          { value: '85%', label: 'Successful Appeals', icon: Shield }
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
              Payment variances and underpayments drain practice revenue without detection, and practices lack resources to identify and recover them.
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
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-indigo-600" />
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
                  iconColor="text-indigo-600"
                  iconBgColor="bg-indigo-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-12 shadow-xl border border-indigo-200">
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
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Payment reconciliation identified $58K in underpayments from our largest payer over 18 months. We had no idea
                we were being underpaid until Medtransic's automated variance detection flagged the issues. They recovered
                $52K through appeals. This service pays for itself many times over."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Amanda Foster</p>
                <p className="text-indigo-600 font-medium">Revenue Cycle Director</p>
                <p className="text-gray-500">Multi-Specialty Group, Washington</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('payment-reconciliation')} />
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
                <Link to="/contact" className="bg-indigo-600 text-white px-12 py-5 rounded-full hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-indigo-600 text-indigo-600 px-12 py-5 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentReconciliationPage;
