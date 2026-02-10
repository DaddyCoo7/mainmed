import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  DollarSign,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
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
import { getRelatedLinks } from '../config/internalLinks';
import ARAgingVisualization from '../components/ARAgingVisualization';
import ServiceSchema from '../components/ServiceSchema';

const ARManagementPage: React.FC = () => {

  const painPoints = [
    {
      icon: Clock,
      title: 'Aging Accounts Receivable',
      description: 'Outstanding balances continue to age beyond 90 days, reducing the likelihood of collection and negatively impacting cash flow and working capital.',
      impact: 'Accounts over 120 days have less than 25% collection probability',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Lack of Follow-Up Systems',
      description: 'Without structured follow-up processes, unpaid claims sit idle while timely filing limits expire and collection opportunities are lost.',
      impact: 'Unworked A/R results in permanent write-offs and revenue loss',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Underpayments Go Undetected',
      description: 'Contractual adjustments and payment variances are not systematically reviewed, allowing payers to underpay without detection or correction.',
      impact: 'Hidden revenue loss of 2-5% from unidentified underpayments',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Inefficient Collections Process',
      description: 'Manual, time-consuming A/R management processes drain staff resources while delivering poor results and inconsistent outcomes.',
      impact: 'High labor costs with low recovery rates strain operations',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Payer Communication Delays',
      description: 'Ineffective payer communication and lack of dedicated follow-up staff result in extended resolution times for outstanding claims.',
      impact: 'Average 60-90 days to resolve claim inquiries delays cash flow',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Limited A/R Visibility',
      description: 'Without detailed reporting and analytics, practices cannot identify problems, prioritize efforts, or measure collection performance effectively.',
      impact: 'Unable to focus on high-value accounts or problem payers',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: DollarSign,
      title: 'Systematic A/R Follow-Up',
      description: 'Dedicated team follows structured workflows to work every outstanding claim methodically, ensuring no revenue opportunity is missed.',
      benefits: [
        'Daily A/R review and prioritization',
        'Age-based follow-up protocols',
        'Deadline tracking prevents write-offs',
        '60% improvement in collection rates'
      ]
    },
    {
      icon: Zap,
      title: 'Advanced Payment Analysis',
      description: 'Technology-driven payment variance analysis identifies underpayments, contractual discrepancies, and revenue recovery opportunities.',
      benefits: [
        'Automated EOB analysis and variance detection',
        'Contract rate verification on every payment',
        'Underpayment identification and recovery',
        'Detailed payment reconciliation'
      ]
    },
    {
      icon: Shield,
      title: 'Expert Payer Communication',
      description: 'Experienced A/R specialists maintain effective payer relationships and use proven strategies to accelerate claim resolution.',
      benefits: [
        'Direct payer relationships and contacts',
        'Strategic escalation when needed',
        'Professional persistence without antagonism',
        'Resolution time reduced by 50%'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Comprehensive A/R Analytics',
      description: 'Detailed reporting and metrics provide complete visibility into A/R performance, aging trends, and collection effectiveness.',
      benefits: [
        'Real-time A/R aging reports',
        'Payer-specific performance metrics',
        'Collection trending and forecasting',
        'Actionable insights for improvement'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Outstanding Claim Follow-Up',
      description: 'Systematic pursuit of all unpaid claims with payer outreach, status tracking, and resolution management.',
      features: ['Daily claim status monitoring', 'Payer inquiry and follow-up', 'Documentation requests', 'Escalation procedures']
    },
    {
      icon: CheckCircle,
      title: 'Payment Variance Analysis',
      description: 'Detailed review of all payments to identify underpayments, incorrect adjustments, and recovery opportunities.',
      features: ['EOB analysis', 'Contract verification', 'Underpayment recovery', 'Adjustment validation']
    },
    {
      icon: BarChart3,
      title: 'A/R Reporting & Analytics',
      description: 'Comprehensive reporting on A/R performance with aging analysis, collection metrics, and trend identification.',
      features: ['Aging bucket analysis', 'Payer performance reports', 'Collection trending', 'Custom dashboards']
    },
    {
      icon: Award,
      title: 'Patient Balance Management',
      description: 'Professional patient billing and collection services that maintain positive relationships while maximizing recovery.',
      features: ['Patient statement generation', 'Payment plan setup', 'Courteous follow-up', 'Financial counseling']
    }
  ];

  const benefits = [
    { metric: '60%', label: 'Increased Collections', icon: TrendingUp },
    { metric: '40%', label: 'Reduced A/R Days', icon: Clock },
    { metric: '$380K', label: 'Average Annual Recovery', icon: DollarSign },
    { metric: '95%', label: 'A/R Under 90 Days', icon: CheckCircle }
  ];

  return (
    <>
      <SEOHead
        title="Accounts Receivable Management | AR Follow-up & Collections Services"
        description="Expert AR management reducing Days in AR by 35% through systematic aging analysis, aggressive payer follow-up, and proven collection strategies. Transform A/R over 120 days into recovered revenue for your practice."
        canonical="https://medtransic.com/services/ar-management"
        keywords="AR management, accounts receivable management, claim follow-up, AR follow-up services, aging accounts management, collections services"
        ogType="article"
      />
      <ServiceSchema
        name="A R Management"
        description="Expert AR management reducing Days in AR by 35% through systematic aging analysis, aggressive payer follow-up, and proven collection strategies. Transform A/R over 120 days into recovered revenue for your practice."
        url="https://medtransic.com/services/ar-management"
        serviceType="Medical Billing Service"
      />
      <HeroSection
        badge={{ icon: DollarSign, text: 'A/R Optimization' }}
        title="Accounts Receivable Management"
        description="Recover unpaid claims and optimize your accounts receivable with expert A/R management that reduces outstanding balances and accelerates cash flow."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '60%', label: 'Increased Collections', icon: TrendingUp },
          { value: '40%', label: 'Reduced A/R Days', icon: Clock },
          { value: '$380K', label: 'Average Annual Recovery', icon: DollarSign },
          { value: '95%', label: 'A/R Under 90 Days', icon: CheckCircle }
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
              Outstanding accounts receivable ties up cash flow and reduces practice profitability. These challenges prevent effective collections.
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
          <ARAgingVisualization />
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
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-emerald-600" />
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
                  iconColor="text-emerald-600"
                  iconBgColor="bg-emerald-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-12 shadow-xl border border-emerald-200">
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
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
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
                The Eventual Benefits for Your Practice
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Beyond immediate revenue recovery, our AR management delivers transformational long-term outcomes
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
                    <TrendingUp className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Predictable Cash Flow</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Consistent monthly collections replace unpredictable revenue cycles. You'll know exactly what's coming in, allowing for confident business planning, staff expansion, and equipment investments without financial uncertainty.
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
                    <Users className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Freedom to Focus on Patient Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your staff stops spending hours on hold with insurance companies and chasing payments. They redirect that time to patient care, appointment scheduling, and practice growth initiatives that truly matter.
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
                    <DollarSign className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Maximized Practice Valuation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Clean A/R with minimal aging significantly increases your practice's value. Whether you're planning for retirement, seeking investment, or positioning for acquisition, strong collections metrics make your practice more attractive and valuable.
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
                    <Shield className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Reduced Financial Stress</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Eliminate the anxiety of aging accounts receivable and mounting unpaid claims. Sleep better knowing experienced specialists are systematically working every dollar owed to your practice with proven results.
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
                    <Target className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Competitive Advantage</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Strong cash flow allows you to invest in new technology, hire top talent, and expand services while competitors struggle with collections. Your financial stability becomes a strategic advantage in attracting both patients and staff.
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
                    <Award className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Sustainable Practice Growth</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Recovered revenue becomes working capital for expansion. Open new locations, add providers, launch new service lines, or upgrade equipment knowing your financial foundation is solid and collections are optimized.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "We had over $2.3 million in outstanding A/R when Medtransic took over our collections. Within six months, they recovered $1.4 million that we thought was uncollectable and reduced our A/R days from 87 to 42. Their systematic approach and payer relationships made all the difference."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Sarah Mitchell, Practice Administrator</p>
                <p className="text-emerald-600 font-medium">Orthopedic Specialists Group</p>
                <p className="text-gray-500">12-Provider Practice</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('ar-management')} />
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
                <Link to="/contact" className="bg-emerald-600 text-white px-12 py-5 rounded-full hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-emerald-600 text-emerald-600 px-12 py-5 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default ARManagementPage;
