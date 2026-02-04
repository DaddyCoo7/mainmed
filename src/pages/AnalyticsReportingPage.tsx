import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart2,
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
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const AnalyticsReportingPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: BarChart3,
      title: 'Lack of Financial Visibility',
      description: 'Without real-time dashboards and comprehensive reporting, practices cannot see their financial performance, identify trends, or make data-driven decisions.',
      impact: 'Delayed decision-making and missed revenue opportunities',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Manual Reporting Processes',
      description: 'Creating reports manually from multiple systems is time-consuming, error-prone, and pulls staff away from higher-value activities.',
      impact: 'Staff spends 10-15 hours weekly on manual report generation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: AlertTriangle,
      title: 'Inability to Track KPIs',
      description: 'Without standardized metrics and KPI tracking, practices cannot measure collection efficiency, denial rates, or payer performance effectively.',
      impact: 'Unable to identify problem areas or measure improvement',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Poor Data Quality',
      description: 'Inaccurate or incomplete data from disconnected systems produces unreliable reports that cannot be trusted for decision-making.',
      impact: 'Decisions based on flawed data lead to suboptimal outcomes',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: BarChart2,
      title: 'Real-Time Analytics Dashboards',
      description: 'Comprehensive, intuitive dashboards provide instant visibility into all key financial and operational metrics with drill-down capabilities.',
      benefits: [
        'Live data updates for real-time decision-making',
        'Customizable views for different stakeholders',
        'Visual charts and graphs for easy interpretation',
        'Mobile access to check metrics anywhere, anytime'
      ]
    },
    {
      icon: Zap,
      title: 'Automated Report Generation',
      description: 'Scheduled automated reports eliminate manual work and deliver consistent, accurate financial data to stakeholders on time.',
      benefits: [
        'Daily, weekly, and monthly reports auto-generated',
        'Consistent formatting and presentation',
        'Distribution to multiple recipients automatically',
        'Saves 10+ hours per week in staff time'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Advanced Performance Analytics',
      description: 'Deep-dive analytics identify trends, patterns, and opportunities across payers, procedures, and revenue cycle stages.',
      benefits: [
        'Payer performance comparison and ranking',
        'Denial trend analysis by reason code',
        'Collection rate tracking by service type',
        'Predictive analytics for revenue forecasting'
      ]
    },
    {
      icon: Target,
      title: 'Custom KPI Tracking',
      description: 'Define and monitor the specific metrics that matter most to your practice with customizable KPI tracking and alerts.',
      benefits: [
        'Track collection ratio, days in A/R, denial rate',
        'Set targets and receive alerts when off-track',
        'Benchmark against industry standards',
        'Measure improvement over time'
      ]
    }
  ];

  const services = [
    {
      icon: TrendingUp,
      title: 'Revenue Cycle Analytics',
      description: 'Comprehensive insights into collection rates, A/R aging, payment velocity, and revenue trends.',
      features: ['Days in A/R tracking', 'Collection ratio analysis', 'Revenue by payer mix', 'Monthly revenue trends']
    },
    {
      icon: BarChart3,
      title: 'Denial & Appeal Tracking',
      description: 'Detailed reporting on denial reasons, overturn rates, and financial impact of denials.',
      features: ['Denial by reason code', 'Payer-specific denial trends', 'Appeal success rates', 'Revenue recovery tracking']
    },
    {
      icon: FileText,
      title: 'Payer Performance Reports',
      description: 'Compare payer performance on payment speed, denial rates, and reimbursement accuracy.',
      features: ['Average days to payment', 'Denial rate by payer', 'Underpayment identification', 'Contract compliance monitoring']
    },
    {
      icon: Award,
      title: 'Custom Executive Dashboards',
      description: 'High-level financial summaries designed for practice leadership and decision-makers.',
      features: ['Key metric snapshot view', 'Trend analysis and forecasting', 'Exception highlighting', 'Board-ready presentations']
    }
  ];

  const benefits = [
    { metric: '15+', label: 'Hours Saved Weekly', icon: Clock },
    { metric: '100%', label: 'Data Accuracy', icon: CheckCircle },
    { metric: 'Real-Time', label: 'Live Dashboards', icon: TrendingUp },
    { metric: '24/7', label: 'Access Anywhere', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHead
        title="Medical Billing Analytics & Reporting Services | RCM Analytics"
        description="Real-time dashboards track KPIs with 100% data accuracy. Automated reports save 15+ hours weekly. Custom analytics identify denial trends, payer performance, revenue opportunities. 24/7 access!"
        canonical="https://medtransic.com/services/analytics-reporting"
        keywords="medical billing analytics, RCM reporting, financial analytics, practice analytics, billing reports, revenue analytics"
        ogType="article"
      />
      <ServiceSchema
        name="Analytics Reporting"
        description="Real-time dashboards track KPIs with 100% data accuracy. Automated reports save 15+ hours weekly. Custom analytics identify denial trends, payer performance, revenue opportunities. 24/7 access!"
        url="https://medtransic.com/services/analytics-reporting"
        serviceType="Medical Billing Service"
      />

      <HeroSection
        badge={{ icon: BarChart2, text: 'Data-Driven Insights' }}
        title="Analytics & Financial Reporting"
        description="Insightful dashboards covering collection ratios, AR aging, denial trends, and payer performance metrics."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '15+', label: 'Hours Saved Weekly', icon: Clock },
          { value: '100%', label: 'Data Accuracy', icon: CheckCircle },
          { value: 'Real-Time', label: 'Live Dashboards', icon: TrendingUp },
          { value: '24/7', label: 'Access Anywhere', icon: BarChart3 }
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
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-blue-600" />
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
                  iconColor="text-blue-600"
                  iconBgColor="bg-blue-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 shadow-xl border border-blue-200">
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
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's analytics dashboards have completely changed how we manage our practice. We now have instant visibility into our financial performance and can make informed decisions quickly. The automated reports save our team countless hours every week."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Lisa Martinez, Practice Administrator</p>
                <p className="text-blue-600 font-medium">Primary Care Medical Group</p>
                <p className="text-gray-500">8 Provider Practice</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('analytics-reporting')} />
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
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReportingPage;
