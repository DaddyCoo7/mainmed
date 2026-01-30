import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileWarning,
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
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import HeroSection from '../components/HeroSection';
import RelatedServices from '../components/RelatedServices';
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';

const DenialManagementPage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'High Denial Rates',
      description: '15-20% of claims are denied on first submission, requiring extensive rework and creating significant administrative burden on billing staff.',
      impact: 'Costly rework processes and delayed revenue impact cash flow',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Lack of Denial Tracking',
      description: 'Without systematic tracking mechanisms, denied claims fall through the cracks and go unworked, resulting in permanent revenue loss.',
      impact: 'Unworked denials mean lost revenue that can never be recovered',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Ineffective Appeals',
      description: 'Generic appeal letters without payer-specific strategies and supporting documentation result in low overturn rates and wasted effort.',
      impact: 'Low appeal success rates leave money on the table',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Recurring Denials',
      description: 'The same denial reasons keep repeating because root causes are never identified and systemic issues remain unaddressed.',
      impact: 'Continuous cycle of preventable denials drains resources',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Resource Drain',
      description: 'Staff spends excessive time working denied claims reactively instead of implementing prevention strategies proactively.',
      impact: 'High administrative costs and staff burnout from repetitive work',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Target,
      title: 'Lost Revenue',
      description: 'Up to 65% of denied claims are never reworked due to time constraints, lack of resources, or missing timely filing deadlines.',
      impact: 'Permanent revenue loss from abandoned denied claims',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const solutions = [
    {
      icon: FileWarning,
      title: 'Comprehensive Denial Analytics',
      description: 'Advanced tracking and categorization of all denials with detailed root cause identification to understand patterns and systemic issues.',
      benefits: [
        'Real-time denial tracking across all payers',
        'Automated categorization by denial reason codes',
        'Root cause analysis to identify systemic issues',
        'Trend reporting to prevent future denials'
      ]
    },
    {
      icon: Zap,
      title: 'Strategic Appeal Management',
      description: 'Expert appeal writers use payer-specific strategies and comprehensive documentation to maximize overturn rates and recover revenue.',
      benefits: [
        'Professional appeal letter preparation',
        'Payer-specific appeal strategies',
        'Complete supporting documentation review',
        '75% average denial overturn rate'
      ]
    },
    {
      icon: Shield,
      title: 'Denial Prevention Programs',
      description: 'Proactive measures to address root causes and prevent denials before they occur through upfront validation and process improvements.',
      benefits: [
        'Upfront claim scrubbing and validation',
        'Pre-submission eligibility verification',
        'Coding accuracy reviews',
        'Authorization tracking and management'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Automated Denial Workflows',
      description: 'Technology-driven processes ensure every denial is systematically tracked, worked, and resolved within optimal timeframes.',
      benefits: [
        'Automated denial work queues by priority',
        'Deadline tracking to prevent write-offs',
        'Workflow automation reduces manual effort',
        'Complete audit trail for all actions'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Denial Analysis & Reporting',
      description: 'Track, categorize, and analyze all denials to identify trends, opportunities, and areas for improvement.',
      features: ['Denial reason categorization', 'Payer-specific analysis', 'Trend identification', 'Custom reporting dashboards']
    },
    {
      icon: CheckCircle,
      title: 'Appeals & Reconsiderations',
      description: 'Professional appeal letter preparation with comprehensive supporting documentation for maximum overturn success.',
      features: ['Expert appeal writing', 'Documentation gathering', 'Payer-specific strategies', 'Multi-level appeals']
    },
    {
      icon: BarChart3,
      title: 'Root Cause Resolution',
      description: 'Identify systemic issues causing denials and implement corrective actions to prevent recurrence.',
      features: ['Pattern recognition', 'Process improvement', 'Staff training', 'Workflow optimization']
    },
    {
      icon: Award,
      title: 'Denial Prevention',
      description: 'Upfront claim scrubbing and validation to prevent denials before submission.',
      features: ['Pre-submission validation', 'Coding review', 'Eligibility verification', 'Authorization tracking']
    }
  ];

  const benefits = [
    { metric: '75%', label: 'Denial Overturn Rate', icon: TrendingUp },
    { metric: '60%', label: 'Reduction in Denials', icon: CheckCircle },
    { metric: '$450K', label: 'Average Annual Recovery', icon: DollarSign },
    { metric: '<5%', label: 'Final Denial Rate', icon: Shield }
  ];

  return (
    <>
      <SEOHead
        title="Medical Denial Management Services | Reduce Claim Denials & Appeals"
        description="Denial management recovering 63% of denied claims through root cause analysis, strategic appeals, and prevention workflows. Cut denial rates from 15% to under 5% industry-leading performance."
        canonical="https://medtransic.com/services/denial-management"
        keywords="denial management, claim denials, denial appeals, claim rejections, denial prevention, revenue recovery, appeal management, claim rework, denial resolution"
        ogType="article"
      />
      <ServiceSchema
        name="Denial Management"
        description="Denial management recovering 63% of denied claims through root cause analysis, strategic appeals, and prevention workflows. Cut denial rates from 15% to under 5% industry-leading performance."
        url="https://medtransic.com/services/denial-management"
        serviceType="Medical Billing Service"
      />
      <HeroSection
        badge={{ icon: FileWarning, text: 'Denial Prevention & Recovery' }}
        title="Denial Management"
        description="Identify, correct, and prevent claim denials through analytics-driven tracking, strategic appeals, and root cause analysis."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '75%', label: 'Denial Overturn Rate', icon: TrendingUp },
          { value: '60%', label: 'Reduction in Denials', icon: CheckCircle },
          { value: '$450K', label: 'Average Annual Recovery', icon: DollarSign },
          { value: '<5%', label: 'Final Denial Rate', icon: Shield }
        ]}
      />
      <div className="relative bg-white">
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
              Claim denials drain revenue and resources from healthcare practices. These common challenges impact financial performance.
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
                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-rose-600" />
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
                  iconColor="text-rose-600"
                  iconBgColor="bg-rose-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-12 shadow-xl border border-rose-200">
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
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-rose-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Our denial rate was 18% and climbing when we brought in Medtransic. Their team not only helped us overturn 75% of existing denials, recovering $450,000, but they identified the root causes and reduced our denial rate to under 5%. The impact on our cash flow has been dramatic."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. James Peterson, CFO</p>
                <p className="text-rose-600 font-medium">Regional Medical Group</p>
                <p className="text-gray-500">Multi-Specialty Practice</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12">
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                The Benefits for Your Practice
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Expert denial management transforms rejected claims into recovered revenue
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Recover Lost Revenue</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Increase successful appeals by 70-85% compared to in-house efforts. Recover an average of $50,000-$150,000 annually in previously denied claims with expert denial management.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Reduce Future Denials</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Decrease overall denial rates by 40-60% through root cause analysis and process improvements. Identify and fix systemic issues that generate recurring denials.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Faster Resolution Time</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Reduce average appeal turnaround from 45-60 days to 15-20 days. Get your revenue faster with specialists who know payer processes and decision timelines.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Free Staff Resources</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Eliminate 10-15 hours per week of staff time spent on appeals. Your team focuses on prevention and current claims instead of fighting old denials.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Expert Appeal Documentation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional appeals with proper clinical documentation, coding justification, and payer-specific requirements. Higher overturn rates through comprehensive submissions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Continuous Process Improvement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Receive detailed denial trend reports and actionable recommendations. Transform denial data into preventive strategies that improve your entire revenue cycle.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('denial-management')} />
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
                <Link to="/contact" className="bg-rose-600 text-white px-12 py-5 rounded-full hover:bg-rose-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-rose-600 text-rose-600 px-12 py-5 rounded-full hover:bg-rose-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-rose-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-rose-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-rose-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-rose-600 hover:text-rose-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default DenialManagementPage;
